import type { Metadata } from "next";
import { OG_IMAGE, SITE_URL } from "./site";

type BuildPageMetadataInput = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogType?: "website" | "article";
};

function normalizePath(path: string): string {
  if (path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function buildPageMetadata({
  path,
  title,
  description,
  keywords,
  ogType = "website",
}: BuildPageMetadataInput): Metadata {
  const normalizedPath = normalizePath(path);
  const canonicalPath = normalizedPath === "/" ? "/" : normalizedPath;
  const pageUrl =
    normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: canonicalPath,
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
