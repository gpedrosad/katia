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

export const metadata: Metadata = {
  title: {
    default: "Fonoaudióloga en Chillán | Katia Domínguez",
    template: "%s | Katia Domínguez - Fonoaudióloga Chillán",
  },
  description:
    "Fonoaudióloga en Chillán especialista en terapia de lenguaje infantil, trastornos del habla, TEL, TEA y lectoescritura. +20 años de experiencia. Atención presencial.",
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
