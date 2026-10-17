import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { GoogleAdsTag } from "@/app/_components/GoogleAdsTag";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

const BRAND_NAME = "Katia Domínguez";
const SITE_NAME = `${BRAND_NAME} - Fonoaudióloga`;
const HOME_SEO_TITLE = `Fonoaudióloga infantil en Chillán | ${BRAND_NAME}`;
const HOME_SEO_DESCRIPTION =
  "Fonoaudióloga infantil en Chillán, +20 años. Evaluación con informe y terapia de lenguaje y habla para niños. Agenda por WhatsApp.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_SEO_TITLE,
    template: `%s | ${BRAND_NAME}`,
  },
  description: HOME_SEO_DESCRIPTION,
  keywords: [
    "fonoaudióloga Chillán",
    "fonoaudióloga en Chillán",
    "terapia de lenguaje Chillán",
    "trastornos del habla niños",
    "fonoaudiología infantil",
  ],
  authors: [{ name: BRAND_NAME }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: SITE_NAME,
    title: HOME_SEO_TITLE,
    description: HOME_SEO_DESCRIPTION,
    url: SITE_URL,
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
    title: HOME_SEO_TITLE,
    description: HOME_SEO_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <GoogleAdsTag />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
