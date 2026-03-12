import { MetadataRoute } from "next";

const SITE_URL = "https://www.katialafono.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Home - página principal
    {
      url: SITE_URL,
      lastModified: now.toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    // Landing SEO principal - fonoaudióloga para niños en Chillán
    {
      url: `${SITE_URL}/fonoaudiologa-ninos-chillan`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Hub de servicios
    {
      url: `${SITE_URL}/servicios`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Páginas de servicios individuales
    {
      url: `${SITE_URL}/servicios/terapia-lenguaje-infantil`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/servicios/trastornos-del-habla`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/servicios/evaluacion-fonoaudiologica`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/servicios/tel-trastorno-especifico-lenguaje`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/servicios/tea-trastorno-espectro-autista`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/servicios/dificultades-lectoescritura`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Glosario
    {
      url: `${SITE_URL}/glosario`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/glosario/dislalia`,
      lastModified: now.toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/glosario/tel`,
      lastModified: now.toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Recursos
    {
      url: `${SITE_URL}/recursos`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
