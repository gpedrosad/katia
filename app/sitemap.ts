import { MetadataRoute } from "next";

// TODO: Reemplazar con el dominio real del sitio
const SITE_URL = "https://www.katiadominguez.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Home - página principal
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    // Landing SEO principal - fonoaudióloga para niños en Chillán
    {
      url: `${SITE_URL}/fonoaudiologa-ninos-chillan`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // NOTA: La landing antigua /chillan/lenguaje-infantil está excluida
    // porque tiene NOINDEX y no debe ser indexada por buscadores.
  ];
}
