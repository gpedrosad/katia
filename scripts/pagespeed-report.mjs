#!/usr/bin/env node
/**
 * PageSpeed Insights / Core Web Vitals (lab + CrUX campo si hay datos).
 * Requiere PAGESPEED_API_KEY en .env.local
 */

const SITE = process.env.PAGESPEED_SITE_URL ?? "https://www.katialafono.cl";
const DEFAULT_URLS = [
  `${SITE}/`,
  `${SITE}/chillan/tel`,
  `${SITE}/fonoaudiologa-ninos-chillan`,
];

const PSI = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

const rateLcp = (ms) => {
  if (ms == null) return "—";
  if (ms < 2500) return "bueno";
  if (ms < 4000) return "mejorar";
  return "deficiente";
};

const rateCls = (v) => {
  if (v == null) return "—";
  if (v < 0.1) return "bueno";
  if (v < 0.25) return "mejorar";
  return "deficiente";
};

async function run(url, strategy, key) {
  const params = new URLSearchParams({ url, strategy, key, category: "performance" });
  const res = await fetch(`${PSI}?${params}`);
  const data = await res.json();
  if (!res.ok || data.error) {
    console.error(`\n✗ ${url} [${strategy}]: ${data.error?.message ?? res.status}`);
    return;
  }
  const a = data.lighthouseResult?.audits ?? {};
  const perf = Math.round((data.lighthouseResult?.categories?.performance?.score ?? 0) * 100);
  const lcp = a["largest-contentful-paint"]?.numericValue;
  const cls = a["cumulative-layout-shift"]?.numericValue;
  const fcp = a["first-contentful-paint"]?.numericValue;
  const inp = a["interaction-to-next-paint"]?.numericValue;
  const tbt = a["total-blocking-time"]?.numericValue;
  const field = data.loadingExperience ?? data.originLoadingExperience;
  const fLcp = field?.metrics?.LARGEST_CONTENTFUL_PAINT_MS?.percentile;
  const fInp = field?.metrics?.INTERACTION_TO_NEXT_PAINT?.percentile;

  console.log(`\n📊 ${url} [${strategy}]`);
  console.log(`  Lighthouse Performance: ${perf}`);
  console.log(`  LCP lab: ${lcp != null ? (lcp / 1000).toFixed(1) + "s" : "—"} (${rateLcp(lcp)})`);
  console.log(`  CLS lab: ${cls != null ? cls.toFixed(3) : "—"} (${rateCls(cls)})`);
  console.log(`  FCP lab: ${fcp != null ? (fcp / 1000).toFixed(1) + "s" : "—"}`);
  console.log(`  INP lab: ${inp != null ? Math.round(inp) + "ms" : "—"} · TBT: ${tbt != null ? Math.round(tbt) + "ms" : "—"}`);
  if (fLcp != null) {
    console.log(`  LCP campo (CrUX): ${(fLcp / 1000).toFixed(1)}s (${rateLcp(fLcp)})`);
  } else {
    console.log(`  LCP campo (CrUX): sin datos (poco tráfico)`);
  }
  if (fInp != null) {
    console.log(`  INP campo (CrUX): ${Math.round(fInp)}ms`);
  }
}

const key = process.env.PAGESPEED_API_KEY?.trim();
if (!key) {
  console.error("Falta PAGESPEED_API_KEY en .env.local");
  console.error("Google Cloud Console → APIs → PageSpeed Insights API → credenciales");
  process.exit(1);
}

const urls = process.env.PAGESPEED_URLS
  ? process.env.PAGESPEED_URLS.split(",").map((u) => u.trim()).filter(Boolean)
  : DEFAULT_URLS;
const strategy = process.env.PAGESPEED_STRATEGY === "desktop" ? "desktop" : "mobile";

console.log(`PageSpeed · ${strategy} · ${urls.length} URL(s)`);

for (const url of urls) {
  await run(url, strategy, key);
}

console.log("\n✓ Listo. También: GSC → Experiencia → Core Web Vitals\n");
