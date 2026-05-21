import { MetadataRoute } from "next";
import { GLOSARIO_TERMINOS } from "@/app/glosario/terminos";
import { SITE_URL } from "@/lib/site";

/** Actualizar en deploys que toquen URLs del sitemap. */
const LAST_MODIFIED = "2026-05-21";

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
    "terapia-del-habla-infantil-chillan",
    "estimulacion-temprana-del-lenguaje-chillan",
    "conciencia-fonologica-chillan",
    "informe-fonoaudiologico-pie-chillan",
    "evaluacion-del-lenguaje-infantil-chillan",
    "evaluacion-del-habla-infantil-chillan",
  ];

  const recursosSlugs = [
    "hitos-del-lenguaje-por-edad",
    "senales-de-alerta-del-lenguaje-y-habla",
    "estimular-lenguaje-en-casa",
    "primera-evaluacion-fonoaudiologica-infantil",
  ];

  const geoChillanSlugs = [
    "evaluacion-fonoaudiologica-infantil-chillan",
    "fonoaudiologia-infantil-chillan",
    "especialista-lenguaje-infantil-chillan",
    "fonoaudiologo-pediatrico-chillan",
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
    entry("/comparaciones", 0.75, "monthly"),
    entry("/sintomas", 0.75, "monthly"),
    entry("/chillan", 0.75, "monthly"),
    entry("/comparaciones/dislalia-vs-trastorno-fonologico", 0.7, "monthly"),
    entry("/comparaciones/tel-vs-retraso-del-lenguaje", 0.7, "monthly"),
    entry(
      "/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje",
      0.7,
      "monthly"
    ),
    ...getGlosarioTermUrls(),
    entry("/glosario/retraso-del-habla", 0.6, "monthly"),
    entry("/recursos", 0.7),
    ...recursosSlugs.map((slug) => entry(`/recursos/${slug}`, 0.65, "monthly")),
    entry("/sobre-katia-dominguez-fonoaudiologa-chillan", 0.75, "monthly"),
    entry("/contacto-fonoaudiologa-chillan", 0.75, "monthly"),
    ...geoChillanSlugs.map((slug) => entry(`/${slug}`, 0.75, "monthly")),
    entry("/agendar-hora-fonoaudiologo-infantil-chillan", 0.75),
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
    ...secondaryServiciosSlugs.map((slug) => entry(`/servicios/${slug}`, 0.8)),
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
