import { MetadataRoute } from "next";

const SITE_URL = "https://www.katialafono.cl";

// Bots de IA que deben poder rastrear (GEO: ChatGPT, Perplexity, Copilot, Claude)
const AI_BOTS = [
  "Googlebot",
  "Bingbot",
  "PerplexityBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "GPTBot",
];

export default function robots(): MetadataRoute.Robots {
  const disallowPaths = ["/chillan/lenguaje-infantil"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowPaths,
      },
      ...AI_BOTS.map((bot) => ({
        userAgent: bot,
        allow: "/" as const,
        disallow: disallowPaths,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
