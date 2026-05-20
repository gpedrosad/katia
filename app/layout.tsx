import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Fonoaudiología infantil Chillán | Katia Lafono",
    template: "%s | Katia Domínguez",
  },
  description:
    "Fonoaudióloga infantil en Chillán, Ñuble. Evaluación y terapia de lenguaje, habla y lectoescritura. +20 años de experiencia. Agenda por WhatsApp.",
  keywords: [
    "fonoaudióloga Chillán",
    "fonoaudióloga en Chillán",
    "terapia de lenguaje Chillán",
    "trastornos del habla niños",
    "fonoaudiología infantil",
  ],
  authors: [{ name: "Katia Domínguez" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Katia Domínguez - Fonoaudióloga",
    title: "Fonoaudiología infantil Chillán | Katia Lafono",
    description:
      "Fonoaudióloga infantil en Chillán, Ñuble. Evaluación y terapia de lenguaje, habla y lectoescritura. +20 años de experiencia. Agenda por WhatsApp.",
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
    title: "Fonoaudióloga en Chillán | Katia Domínguez",
    description:
      "Fonoaudióloga en Chillán. +20 años de experiencia. Evaluación y terapia de lenguaje, habla y comunicación en niños. Agenda tu hora.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
