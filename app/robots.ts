import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const AI_AND_SEARCH_BOTS = [
  "*",
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: AI_AND_SEARCH_BOTS.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: ["/seo-links"],
    })),
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
