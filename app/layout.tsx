import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.katialafono.cl";
const OG_IMAGE = `${SITE_URL}/KatiaDominguezFonoaudiologa.png`;

export const metadata: Metadata = {
  title: {
    default: "Fonoaudióloga en Chillán | Katia Domínguez",
    template: "%s | Katia Domínguez - Fonoaudióloga Chillán",
  },
  description:
    "Fonoaudióloga en Chillán especializada en trastornos del lenguaje y comunicación en niños. Más de 20 años de experiencia. Agenda una evaluación fonoaudiológica hoy.",
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
    title: "Fonoaudióloga en Chillán | Katia Domínguez",
    description:
      "Fonoaudióloga en Chillán especializada en trastornos del lenguaje y comunicación en niños. Más de 20 años de experiencia en evaluación y tratamiento. Agenda una evaluación fonoaudiológica hoy.",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Katia Domínguez - Fonoaudióloga en Chillán" }],
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
