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
    // Hub y páginas principales SEO
    {
      url: `${SITE_URL}/fonoaudiologia-infantil-chillan`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/evaluacion-fonoaudiologica-infantil-chillan`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/fonoaudiologo-pediatrico-chillan`,
      lastModified: now.toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Tratamientos
    ...[
      "retraso-del-lenguaje-chillan",
      "retraso-del-habla-chillan",
      "tel-trastorno-especifico-lenguaje-chillan",
      "dislalia-infantil-chillan",
      "trastorno-fonologico-chillan",
      "apraxia-del-habla-infantil-chillan",
    ].map((slug) => ({
      url: `${SITE_URL}/tratamientos/${slug}`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    // Síntomas
    ...[
      "mi-hijo-no-habla-bien-chillan",
      "nino-pronuncia-mal-chillan",
      "hijo-habla-poco-edad-chillan",
      "hijo-no-arma-frases-chillan",
      "nino-no-entiende-instrucciones-chillan",
      "nino-tartamudea-chillan",
    ].map((slug) => ({
      url: `${SITE_URL}/sintomas/${slug}`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    // Servicios (nuevas páginas SEO)
    ...[
      "test-de-lenguaje-infantil-chillan",
      "terapia-de-lenguaje-infantil-chillan",
      "terapia-del-habla-infantil-chillan",
      "estimulacion-temprana-del-lenguaje-chillan",
      "conciencia-fonologica-chillan",
      "informe-fonoaudiologico-pie-chillan",
      "terapia-tea-comunicacion-chillan",
      "problemas-lectoescritura-chillan",
    ].map((slug) => ({
      url: `${SITE_URL}/servicios/${slug}`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    // Landings por patología (programmatic SEO - Locations)
    ...[
      "dislalia",
      "retraso-del-lenguaje",
      "retraso-del-habla",
      "trastorno-fonologico",
      "tel",
      "apraxia-del-habla",
      "dislexia",
      "disfemia",
      "tea-comunicacion",
      "lectoescritura",
    ].map((slug) => ({
      url: `${SITE_URL}/chillan/${slug}`,
      lastModified: now.toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Voz Online — Adultos todo Chile
    ...[
      "fonoaudiologa-de-voz-online",
      "evaluacion-vocal-online",
      "tratamiento-disfonia-online",
      "nodulos-vocales-tratamiento-online",
      "fatiga-vocal-tratamiento-online",
      "rehabilitacion-vocal-profesionales-voz",
      "terapia-vocal-docentes-profesores",
      "paralisis-cordal-rehabilitacion-online",
      "higiene-vocal-cuidado-voz",
      "voz-ronca-causas-tratamiento",
      "fonoaudiologa-voz-santiago",
      "fonoaudiologa-voz-concepcion",
      "fonoaudiologa-voz-vina-del-mar",
      "fonoaudiologa-voz-temuco",
      "fonoaudiologa-voz-antofagasta",
    ].map((slug) => ({
      url: `${SITE_URL}/voz-online/${slug}`,
      lastModified: now.toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
