import { MetadataRoute } from "next";

// TODO: Reemplazar con el dominio real del sitio
const SITE_URL = "https://www.katiadominguez.cl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Bloquear la landing antigua que no debe indexarse
        disallow: ["/chillan/lenguaje-infantil"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
