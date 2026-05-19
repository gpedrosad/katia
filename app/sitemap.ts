import { MetadataRoute } from "next";
import { GLOSARIO_TERMINOS } from "@/app/glosario/terminos";
import { SITE_URL } from "@/lib/site";

const LAST_MODIFIED = "2026-05-19";

const SECONDARY_PRIORITY_SLUGS = new Set([
  "fonoaudiologia-infantil-chillan",
  "fonoaudiologo-pediatrico-chillan",
  "especialista-lenguaje-infantil-chillan",
  "evaluacion-fonoaudiologica-infantil-chillan",
  "terapia-de-lenguaje-infantil-chillan",
  "problemas-lectoescritura-chillan",
  "terapia-tea-comunicacion-chillan",
]);

function getGlosarioTermUrls(): MetadataRoute.Sitemap {
  return GLOSARIO_TERMINOS.map((t) => ({
    url: `${SITE_URL}/glosario/${t.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
}

function entry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "weekly"
): MetadataRoute.Sitemap[0] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const secondaryServiciosSlugs = [
    "test-de-lenguaje-infantil-chillan",
    "terapia-de-lenguaje-infantil-chillan",
    "terapia-del-habla-infantil-chillan",
    "estimulacion-temprana-del-lenguaje-chillan",
    "conciencia-fonologica-chillan",
    "informe-fonoaudiologico-pie-chillan",
    "terapia-tea-comunicacion-chillan",
    "problemas-lectoescritura-chillan",
  ];

  return [
    entry("/", 1.0, "monthly"),
    entry("/fonoaudiologa-ninos-chillan", 0.9),
    entry("/servicios", 0.9),
    entry("/servicios/terapia-lenguaje-infantil", 0.8),
    entry("/servicios/trastornos-del-habla", 0.8),
    entry("/servicios/evaluacion-fonoaudiologica", 0.8),
    entry("/servicios/tel-trastorno-especifico-lenguaje", 0.8),
    entry("/servicios/tea-trastorno-espectro-autista", 0.8),
    entry("/servicios/dificultades-lectoescritura", 0.8),
    entry("/glosario", 0.7),
    ...getGlosarioTermUrls(),
    entry("/recursos", 0.7),
    entry("/fonoaudiologia-infantil-chillan", 0.5),
    entry("/evaluacion-fonoaudiologica-infantil-chillan", 0.5),
    entry("/fonoaudiologo-pediatrico-chillan", 0.5),
    entry("/especialista-lenguaje-infantil-chillan", 0.5),
    entry("/agendar-hora-fonoaudiologo-infantil-chillan", 0.75),
    entry("/chillan/lenguaje-infantil", 0.5),
    ...[
      "retraso-del-lenguaje-chillan",
      "retraso-del-habla-chillan",
      "tel-trastorno-especifico-lenguaje-chillan",
      "dislalia-infantil-chillan",
      "trastorno-fonologico-chillan",
      "apraxia-del-habla-infantil-chillan",
    ].map((slug) => entry(`/tratamientos/${slug}`, 0.8)),
    ...[
      "mi-hijo-no-habla-bien-chillan",
      "nino-pronuncia-mal-chillan",
      "hijo-habla-poco-edad-chillan",
      "hijo-no-arma-frases-chillan",
      "nino-no-entiende-instrucciones-chillan",
      "nino-tartamudea-chillan",
    ].map((slug) => entry(`/sintomas/${slug}`, 0.7)),
    ...secondaryServiciosSlugs.map((slug) =>
      entry(
        `/servicios/${slug}`,
        SECONDARY_PRIORITY_SLUGS.has(slug) ? 0.5 : 0.8
      )
    ),
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
    ].map((slug) => entry(`/chillan/${slug}`, 0.7, "monthly")),
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
    ].map((slug) => entry(`/voz-online/${slug}`, 0.8)),
  ];
}
