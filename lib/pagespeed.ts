import { SITE_URL } from "./site";

export type CwvRating = "good" | "needs-improvement" | "poor" | "unknown";

export type PageSpeedLabMetrics = {
  performanceScore: number | null;
  accessibilityScore: number | null;
  seoScore: number | null;
  bestPracticesScore: number | null;
  lcpMs: number | null;
  lcpRating: CwvRating;
  cls: number | null;
  clsRating: CwvRating;
  inpMs: number | null;
  inpRating: CwvRating;
  fcpMs: number | null;
  tbtMs: number | null;
};

export type PageSpeedFieldMetrics = {
  lcpMs: number | null;
  lcpRating: CwvRating;
  cls: number | null;
  clsRating: CwvRating;
  inpMs: number | null;
  inpRating: CwvRating;
  overallCategory?: string | null;
};

export type PageSpeedUrlResult = {
  url: string;
  strategy: "mobile" | "desktop";
  finalUrl?: string;
  lab: PageSpeedLabMetrics;
  field: PageSpeedFieldMetrics | null;
  error?: string;
};

export type CoreWebVitalsReport = {
  enabled: boolean;
  strategy: "mobile" | "desktop";
  fetchedAt: string;
  results: PageSpeedUrlResult[];
  error?: string;
};

const DEFAULT_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/chillan/tel`,
  `${SITE_URL}/fonoaudiologa-ninos-chillan`,
];

const PSI_BASE = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

const mapFieldCategory = (category?: string | null): CwvRating => {
  if (!category) return "unknown";
  const c = category.toUpperCase();
  if (c === "FAST" || c === "AVERAGE") return c === "FAST" ? "good" : "needs-improvement";
  if (c === "SLOW") return "poor";
  return "unknown";
};

const rateLcp = (ms: number | null): CwvRating => {
  if (ms == null) return "unknown";
  if (ms < 2500) return "good";
  if (ms < 4000) return "needs-improvement";
  return "poor";
};

const rateCls = (v: number | null): CwvRating => {
  if (v == null) return "unknown";
  if (v < 0.1) return "good";
  if (v < 0.25) return "needs-improvement";
  return "poor";
};

const rateInp = (ms: number | null): CwvRating => {
  if (ms == null) return "unknown";
  if (ms < 200) return "good";
  if (ms < 500) return "needs-improvement";
  return "poor";
};

const scorePct = (score?: number | null) =>
  score == null ? null : Math.round(score * 100);

const auditMs = (audits: Record<string, { numericValue?: number }>, id: string) => {
  const v = audits[id]?.numericValue;
  return typeof v === "number" ? v : null;
};

function parseFieldMetrics(
  loadingExperience?: {
    overall_category?: string;
    metrics?: Record<
      string,
      { percentile?: number; category?: string }
    >;
  } | null,
): PageSpeedFieldMetrics | null {
  if (!loadingExperience?.metrics) return null;
  const m = loadingExperience.metrics;
  const lcpMs = m.LARGEST_CONTENTFUL_PAINT_MS?.percentile ?? null;
  const clsRaw = m.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile;
  const cls = clsRaw != null ? clsRaw / 100 : null;
  const inpMs =
    m.INTERACTION_TO_NEXT_PAINT?.percentile ??
    m.EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT?.percentile ??
    null;

  return {
    lcpMs,
    lcpRating: mapFieldCategory(m.LARGEST_CONTENTFUL_PAINT_MS?.category) !== "unknown"
      ? mapFieldCategory(m.LARGEST_CONTENTFUL_PAINT_MS?.category)
      : rateLcp(lcpMs),
    cls,
    clsRating: mapFieldCategory(m.CUMULATIVE_LAYOUT_SHIFT_SCORE?.category) !== "unknown"
      ? mapFieldCategory(m.CUMULATIVE_LAYOUT_SHIFT_SCORE?.category)
      : rateCls(cls),
    inpMs,
    inpRating: mapFieldCategory(m.INTERACTION_TO_NEXT_PAINT?.category) !== "unknown"
      ? mapFieldCategory(m.INTERACTION_TO_NEXT_PAINT?.category)
      : rateInp(inpMs),
    overallCategory: loadingExperience.overall_category ?? null,
  };
}

function parseLabMetrics(lighthouseResult: {
  categories?: Record<string, { score?: number | null }>;
  audits?: Record<string, { numericValue?: number; score?: number | null }>;
}): PageSpeedLabMetrics {
  const cats = lighthouseResult.categories ?? {};
  const audits = lighthouseResult.audits ?? {};
  const lcpMs = auditMs(audits, "largest-contentful-paint");
  const cls = auditMs(audits, "cumulative-layout-shift");
  const inpMs =
    auditMs(audits, "interaction-to-next-paint") ??
    auditMs(audits, "experimental-interaction-to-next-paint");
  const fcpMs = auditMs(audits, "first-contentful-paint");
  const tbtMs = auditMs(audits, "total-blocking-time");

  return {
    performanceScore: scorePct(cats.performance?.score),
    accessibilityScore: scorePct(cats.accessibility?.score),
    seoScore: scorePct(cats.seo?.score),
    bestPracticesScore: scorePct(cats["best-practices"]?.score),
    lcpMs,
    lcpRating: rateLcp(lcpMs),
    cls,
    clsRating: rateCls(cls),
    inpMs,
    inpRating: rateInp(inpMs),
    fcpMs,
    tbtMs,
  };
}

export function getDefaultPageSpeedUrls(): string[] {
  const fromEnv = process.env.PAGESPEED_URLS?.trim();
  if (fromEnv) {
    return fromEnv.split(",").map((u) => u.trim()).filter(Boolean);
  }
  return DEFAULT_URLS;
}

export async function fetchPageSpeedUrl(
  url: string,
  strategy: "mobile" | "desktop",
  apiKey?: string,
): Promise<PageSpeedUrlResult> {
  const key = apiKey ?? process.env.PAGESPEED_API_KEY?.trim();
  if (!key) {
    return {
      url,
      strategy,
      lab: emptyLab(),
      field: null,
      error: "Falta PAGESPEED_API_KEY en .env.local",
    };
  }

  const params = new URLSearchParams({
    url,
    strategy,
    key,
    category: "performance",
  });

  try {
    const res = await fetch(`${PSI_BASE}?${params.toString()}`);
    const data = (await res.json()) as {
      error?: { message?: string };
      id?: string;
      lighthouseResult?: {
        categories?: Record<string, { score?: number | null }>;
        audits?: Record<string, { numericValue?: number }>;
      };
      loadingExperience?: Parameters<typeof parseFieldMetrics>[0];
      originLoadingExperience?: Parameters<typeof parseFieldMetrics>[0];
    };

    if (!res.ok || data.error) {
      return {
        url,
        strategy,
        lab: emptyLab(),
        field: null,
        error: data.error?.message ?? `HTTP ${res.status}`,
      };
    }

    const lr = data.lighthouseResult ?? {};
    const field =
      parseFieldMetrics(data.loadingExperience) ??
      parseFieldMetrics(data.originLoadingExperience);

    return {
      url,
      strategy,
      finalUrl: data.id,
      lab: parseLabMetrics(lr),
      field,
    };
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    return { url, strategy, lab: emptyLab(), field: null, error: message };
  }
}

function emptyLab(): PageSpeedLabMetrics {
  return {
    performanceScore: null,
    accessibilityScore: null,
    seoScore: null,
    bestPracticesScore: null,
    lcpMs: null,
    lcpRating: "unknown",
    cls: null,
    clsRating: "unknown",
    inpMs: null,
    inpRating: "unknown",
    fcpMs: null,
    tbtMs: null,
  };
}

export async function fetchCoreWebVitalsReport(
  options: {
    urls?: string[];
    strategy?: "mobile" | "desktop";
    apiKey?: string;
  } = {},
): Promise<CoreWebVitalsReport> {
  if (process.env.PAGESPEED_SKIP === "1") {
    return {
      enabled: false,
      strategy: options.strategy ?? "mobile",
      fetchedAt: new Date().toISOString(),
      results: [],
      error: "PAGESPEED_SKIP=1",
    };
  }

  const strategy =
    options.strategy ??
    (process.env.PAGESPEED_STRATEGY === "desktop" ? "desktop" : "mobile");
  const urls = options.urls ?? getDefaultPageSpeedUrls();
  const apiKey = options.apiKey ?? process.env.PAGESPEED_API_KEY?.trim();

  if (!apiKey) {
    return {
      enabled: false,
      strategy,
      fetchedAt: new Date().toISOString(),
      results: [],
      error: "Define PAGESPEED_API_KEY en .env.local (Google Cloud → PageSpeed Insights API).",
    };
  }

  const results = await Promise.all(
    urls.map((url) => fetchPageSpeedUrl(url, strategy, apiKey)),
  );

  return {
    enabled: true,
    strategy,
    fetchedAt: new Date().toISOString(),
    results,
  };
}

export const CWV_RATING_LABEL: Record<CwvRating, string> = {
  good: "Bueno",
  "needs-improvement": "Mejorar",
  poor: "Deficiente",
  unknown: "—",
};

export function formatMs(ms: number | null): string {
  if (ms == null) return "—";
  if (ms >= 1000) return `${(ms / 1000).toFixed(1)} s`;
  return `${Math.round(ms)} ms`;
}
