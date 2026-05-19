import type { Metadata } from "next";
import { OG_IMAGE, SITE_URL } from "./site";

type BuildPageMetadataInput = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogType?: "website" | "article";
  /** Canonical path when it differs from `path` (e.g. geo page → pillar). */
  canonicalPath?: string;
};

function normalizePath(path: string): string {
  if (path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

/** Metadata para páginas internas que no deben indexarse. */
export function buildNoIndexMetadata(title: string): Metadata {
  return {
    title: { absolute: title },
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
  };
}

export function buildPageMetadata({
  path,
  title,
  description,
  keywords,
  ogType = "website",
  canonicalPath: canonicalPathOverride,
}: BuildPageMetadataInput): Metadata {
  const normalizedPath = normalizePath(path);
  const resolvedCanonical = normalizePath(canonicalPathOverride ?? path);
  const canonical =
    resolvedCanonical === "/" ? "/" : resolvedCanonical;
  const pageUrl =
    normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;

  return {
    title: { absolute: title },
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      type: ogType,
      locale: "es_CL",
      siteName: "Katia Domínguez - Fonoaudióloga",
      title,
      description,
      url: pageUrl,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Katia Domínguez - Fonoaudióloga en Chillán",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

type BuildWebPageJsonLdInput = {
  /** Canonical path for `@id` and `url` (use pillar path when page has canonicalPath). */
  path: string;
  name: string;
  description: string;
  speakable?: boolean;
};

export function buildWebPageJsonLd({
  path,
  name,
  description,
  speakable = false,
}: BuildWebPageJsonLdInput) {
  const normalizedPath = normalizePath(path);
  const pageUrl =
    normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name,
    description,
    url: pageUrl,
    ...(speakable
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["article h1", "article > p:first-of-type"],
          },
        }
      : {}),
  };
}
