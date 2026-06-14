#!/usr/bin/env node
/**
 * Checklist GSC: sitemaps detallados + inspección de 4 URLs prioritarias.
 * La solicitud de indexación solo está en la UI de Search Console.
 */

import { readFileSync, existsSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { google } from "googleapis";

const SITE_URL = process.env.GSC_SITE_URL ?? "sc-domain:katialafono.cl";
const OAUTH_CLIENT_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_OAUTH_CLIENT_PATH ?? ".secrets/gcp-oauth-client.json",
);
const OAUTH_TOKEN_PATH = resolve(
  process.cwd(),
  process.env.GSC_OAUTH_TOKEN_PATH ?? ".secrets/gsc-oauth-token.json",
);
const SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"];

const INSPECTION_URLS = [
  "https://www.katialafono.cl/",
  "https://www.katialafono.cl/chillan/tel",
  "https://www.katialafono.cl/chillan/tea-comunicacion",
  "https://www.katialafono.cl/fonoaudiologa-ninos-chillan",
  "https://www.katialafono.cl/agendar-hora-fonoaudiologo-infantil-chillan",
  "https://www.katialafono.cl/servicios",
  "https://www.katialafono.cl/servicios/tea-trastorno-espectro-autista",
  "https://www.katialafono.cl/recursos",
];

const loadOAuthClient = () => {
  const raw = JSON.parse(readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const config = raw.installed ?? raw.web ?? raw;
  const oauth2 = new google.auth.OAuth2(config.client_id, config.client_secret);
  oauth2.setCredentials(JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8")));
  return oauth2;
};

function gscInspectLink(url) {
  const encoded = encodeURIComponent(url);
  return `https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent(SITE_URL)}&url=${encoded}`;
}

async function main() {
  if (!existsSync(OAUTH_TOKEN_PATH)) {
    console.error("Falta token OAuth. Ejecuta: npm run gsc:auth");
    process.exit(1);
  }

  const auth = loadOAuthClient();
  const sc = google.searchconsole({ version: "v1", auth });

  const lines = [];
  const log = (s = "") => {
    console.log(s);
    lines.push(s);
  };

  log("# Checklist GSC ejecutado");
  log(`- Propiedad: \`${SITE_URL}\``);
  log(`- Fecha: ${new Date().toISOString()}`);
  log("");

  // --- Sitemaps ---
  log("## 1. Sitemaps");
  const list = await sc.sitemaps.list({ siteUrl: SITE_URL });
  const entries = list.data.sitemap ?? [];

  if (entries.length === 0) {
    log("- Sin sitemaps registrados en GSC.");
  }

  for (const entry of entries) {
    log(`### ${entry.path}`);
    log(`- Último enviado: ${entry.lastSubmitted ?? "—"}`);
    log(`- Último descargado: ${entry.lastDownloaded ?? "—"}`);
    log(`- Errores: ${entry.errors ?? 0}`);
    log(`- **Warnings: ${entry.warnings ?? 0}**`);
    log(`- Pendiente: ${entry.isPending ? "sí" : "no"}`);

    if (entry.path) {
      try {
        const detail = await sc.sitemaps.get({ siteUrl: SITE_URL, feedpath: entry.path });
        const contents = detail.data.contents ?? [];
        if (contents.length === 0) {
          log("- Contenido: sin desglose en API");
        } else {
          for (const c of contents) {
            log(
              `- Tipo \`${c.type ?? "?"}\`: **${c.indexed ?? "0"} indexadas** / ${c.submitted ?? "?"} enviadas`,
            );
          }
        }
        if (Number(entry.warnings) > 0) {
          log(
            "- **Acción UI:** Indexación → Sitemaps → abrir este sitemap y leer el detalle del warning (la API no devuelve el texto del warning).",
          );
        }
        if (contents.some((c) => Number(c.submitted) > 0 && Number(c.indexed) === 0)) {
          log(
            "- **Nota:** 0 indexadas en informe de sitemap ≠ sitio desindexado. Contrastar con Indexación → Páginas e inspección URL abajo.",
          );
        }
      } catch (e) {
        log(`- Error al obtener detalle: ${e instanceof Error ? e.message : e}`);
      }
    }
    log("");
  }

  // --- URL Inspection ---
  log("## 2. Inspección de URL (API)");
  log("");
  log("| URL | Verdict | Cobertura | Fetch | Canónica Google | Acción UI |");
  log("| --- | --- | --- | --- | --- | --- |");

  const inspectionResults = [];

  for (const inspectionUrl of INSPECTION_URLS) {
    try {
      const res = await sc.urlInspection.index.inspect({
        requestBody: {
          siteUrl: SITE_URL,
          inspectionUrl,
          languageCode: "es-419",
        },
      });
      const idx = res.data.inspectionResult?.indexStatusResult;
      const verdict = idx?.verdict ?? "—";
      const coverage = idx?.coverageState ?? "—";
      const fetch = idx?.pageFetchState ?? "—";
      const canonical = idx?.googleCanonical ?? "—";
      const link = gscInspectLink(inspectionUrl);
      const action =
        verdict === "PASS" || verdict === "NEUTRAL"
          ? "Abrir en GSC → **Solicitar indexación** si el snippet cambió"
          : "Revisar en GSC → corregir bloqueo";

      log(
        `| ${inspectionUrl} | ${verdict} | ${coverage} | ${fetch} | ${canonical} | [Inspeccionar](${link}) |`,
      );

      inspectionResults.push({
        url: inspectionUrl,
        verdict,
        coverage,
        fetch,
        canonical,
        gscLink: link,
        rawLink: res.data.inspectionResult?.inspectionResultLink,
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      log(`| ${inspectionUrl} | ERROR | — | — | — | ${msg} |`);
      inspectionResults.push({ url: inspectionUrl, error: msg });
    }
  }

  log("");
  log("## 3. Solicitar indexación (manual — ~5 min)");
  log("");
  log("La API es solo lectura. En cada enlace abre GSC y pulsa **Solicitar indexación**:");
  log("");
  for (const row of inspectionResults) {
    if (row.gscLink) {
      log(`1. [${row.url}](${row.gscLink})`);
    }
  }

  log("");
  log("## 4. Resultado rápido");
  log("");
  const warnCount = entries.reduce((n, e) => n + Number(e.warnings ?? 0), 0);
  const passCount = inspectionResults.filter((r) => r.verdict === "PASS").length;
  log(`- Sitemaps con warnings: **${warnCount}**`);
  log(`- URLs inspeccionadas PASS: **${passCount}/${INSPECTION_URLS.length}**`);
  log(`- Pendiente humano: solicitar indexación en UI + leer texto del warning del sitemap www`);

  const outDir = resolve(process.cwd(), "docs");
  mkdirSync(outDir, { recursive: true });
  const outPath = resolve(outDir, `gsc-checklist-ejecutado-${new Date().toISOString().slice(0, 10)}.md`);
  writeFileSync(outPath, lines.join("\n") + "\n", "utf8");
  log("");
  log(`Informe guardado: ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
