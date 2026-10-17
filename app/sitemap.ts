import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Rutas que responden 308. No deben aparecer como URL indexables.
 * Mantener alineado con `redirects()` en next.config.ts.
 */
const REDIRECT_PATHS = new Set([
  "/agendar",
  "/chillan/lenguaje-infantil",
  "/fonoaudiologia-infantil-chillan",
  "/especialista-lenguaje-infantil-chillan",
  "/fonoaudiologo-pediatrico-chillan",
  "/evaluacion-fonoaudiologica-infantil-chillan",
  "/servicios/terapia-de-lenguaje-infantil-chillan",
  "/servicios/terapia-tea-comunicacion-chillan",
  "/servicios/problemas-lectoescritura-chillan",
  "/servicios/informe-fonoaudiológico-pie-chillan",
  "/servicios/informe-fonoaudiol%C3%B3gico-pie-chillan",
]);

/** Prefijos que no se indexan aunque falte el noindex en el archivo. */
const NOINDEX_PREFIXES = ["/ads", "/interno", "/seo-links", "/meta", "/sitelink"];

function appDir(): string {
  const root = process.cwd();
  // Misma prioridad que Next: ./app gana sobre ./src/app.
  const atRoot = path.join(root, "app");
  if (fs.existsSync(atRoot)) return atRoot;
  return path.join(root, "src", "app");
}

function isRouteGroup(name: string): boolean {
  return name.startsWith("(") && name.endsWith(")");
}

function walkPages(
  dir: string,
  segments: string[],
  out: { urlPath: string; file: string }[],
) {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith("_") || ent.name.startsWith(".")) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name.startsWith("@") || ent.name.startsWith("(") && !ent.name.endsWith(")")) {
        continue;
      }
      const nextSegments = isRouteGroup(ent.name) ? segments : [...segments, ent.name];
      walkPages(full, nextSegments, out);
      continue;
    }
    if (!/^page\.(tsx|ts|jsx|js)$/.test(ent.name)) continue;
    const urlPath = segments.length === 0 ? "/" : `/${segments.join("/")}`;
    out.push({ urlPath, file: full });
  }
}

function collectSlugs(dir: string): string[] {
  const slugs = new Set<string>();
  const parents = [dir, path.dirname(dir)];
  for (const folder of parents) {
    if (!fs.existsSync(folder)) continue;
    for (const name of fs.readdirSync(folder)) {
      const full = path.join(folder, name);
      if (!fs.statSync(full).isFile()) continue;
      if (!/\.(ts|tsx)$/.test(name) || name.startsWith("page.")) continue;
      const text = fs.readFileSync(full, "utf8");
      for (const match of text.matchAll(/\bslug:\s*["']([a-z0-9-]+)["']/g)) {
        slugs.add(match[1]);
      }
    }
  }
  return [...slugs];
}

function expandPath(urlPath: string, file: string): string[] {
  if (!urlPath.includes("[")) return [urlPath];
  const slugs = collectSlugs(path.dirname(file));
  if (slugs.length === 0) return [];
  return slugs.map((slug) => urlPath.replace(/\[[^\]]+\]/g, slug));
}

function isNoIndex(urlPath: string, file: string): boolean {
  if (NOINDEX_PREFIXES.some((prefix) => urlPath === prefix || urlPath.startsWith(`${prefix}/`))) {
    return true;
  }
  const source = fs.readFileSync(file, "utf8");
  if (source.includes("buildNoIndexMetadata")) return true;
  if (/robots\s*:\s*\{[^}]*index\s*:\s*false/.test(source)) return true;
  return false;
}

function priorityFor(urlPath: string): number {
  if (urlPath === "/") return 1;
  const depth = urlPath.split("/").filter(Boolean).length;
  if (depth === 1) return 0.8;
  if (depth === 2) return 0.7;
  return 0.6;
}

function changeFrequencyFor(urlPath: string): MetadataRoute.Sitemap[0]["changeFrequency"] {
  if (
    urlPath.startsWith("/glosario") ||
    urlPath.startsWith("/recursos") ||
    urlPath.startsWith("/comparaciones") ||
    urlPath.startsWith("/preguntas") ||
    urlPath.startsWith("/guias-padres") ||
    urlPath.startsWith("/lenguaje-infantil") ||
    urlPath.startsWith("/dislalia") ||
    urlPath.startsWith("/tartamudez") ||
    urlPath.startsWith("/lectoescritura")
  ) {
    return "monthly";
  }
  return "weekly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const found: { urlPath: string; file: string }[] = [];
  walkPages(appDir(), [], found);

  const byPath = new Map<string, string>();
  for (const page of found) {
    if (isNoIndex(page.urlPath, page.file)) continue;
    for (const urlPath of expandPath(page.urlPath, page.file)) {
      if (urlPath.includes("[")) continue;
      if (REDIRECT_PATHS.has(urlPath)) continue;
      if (!byPath.has(urlPath)) byPath.set(urlPath, page.file);
    }
  }

  return [...byPath.entries()]
    .sort(([a], [b]) => a.localeCompare(b, "es"))
    .map(([urlPath, file]) => ({
      url: urlPath === "/" ? SITE_URL : `${SITE_URL}${urlPath}`,
      lastModified: fs.statSync(file).mtime,
      changeFrequency: changeFrequencyFor(urlPath),
      priority: priorityFor(urlPath),
    }));
}
