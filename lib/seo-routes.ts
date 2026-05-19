import { GLOSARIO_TERMINOS } from "@/app/glosario/terminos";
import { PATOLOGIAS } from "@/app/chillan/[slug]/patologias";

export type SeoRoute = {
  path: string;
  label: string;
};

export type SeoRouteSection = {
  id: string;
  title: string;
  routes: SeoRoute[];
};

function route(path: string, label: string): SeoRoute {
  return { path, label };
}

const TRATAMIENTO_SLUGS: { slug: string; label: string }[] = [
  { slug: "retraso-del-lenguaje-chillan", label: "Retraso del lenguaje" },
  { slug: "retraso-del-habla-chillan", label: "Retraso del habla" },
  {
    slug: "tel-trastorno-especifico-lenguaje-chillan",
    label: "TEL (trastorno específico del lenguaje)",
  },
  { slug: "dislalia-infantil-chillan", label: "Dislalia infantil" },
  { slug: "trastorno-fonologico-chillan", label: "Trastorno fonológico" },
  { slug: "apraxia-del-habla-infantil-chillan", label: "Apraxia del habla infantil" },
];

const SINTOMA_SLUGS: { slug: string; label: string }[] = [
  { slug: "mi-hijo-no-habla-bien-chillan", label: "Mi hijo no habla bien" },
  { slug: "nino-pronuncia-mal-chillan", label: "Niño pronuncia mal" },
  { slug: "hijo-habla-poco-edad-chillan", label: "Hijo habla poco para su edad" },
  { slug: "hijo-no-arma-frases-chillan", label: "Hijo no arma frases" },
  {
    slug: "nino-no-entiende-instrucciones-chillan",
    label: "Niño no entiende instrucciones",
  },
  { slug: "nino-tartamudea-chillan", label: "Niño tartamudea" },
];

const SERVICIO_CHILLAN_SLUGS: { slug: string; label: string }[] = [
  { slug: "test-de-lenguaje-infantil-chillan", label: "Test de lenguaje infantil" },
  { slug: "terapia-del-habla-infantil-chillan", label: "Terapia del habla infantil" },
  {
    slug: "estimulacion-temprana-del-lenguaje-chillan",
    label: "Estimulación temprana del lenguaje",
  },
  { slug: "conciencia-fonologica-chillan", label: "Conciencia fonológica" },
  {
    slug: "informe-fonoaudiologico-pie-chillan",
    label: "Informe fonoaudiológico PIE",
  },
  {
    slug: "terapia-de-lenguaje-infantil-chillan",
    label: "Terapia de lenguaje infantil",
  },
  {
    slug: "terapia-tea-comunicacion-chillan",
    label: "Terapia TEA / comunicación",
  },
  {
    slug: "problemas-lectoescritura-chillan",
    label: "Problemas de lectoescritura",
  },
];

const VOZ_ONLINE_SLUGS: { slug: string; label: string }[] = [
  { slug: "fonoaudiologa-de-voz-online", label: "Fonoaudióloga de voz online" },
  { slug: "evaluacion-vocal-online", label: "Evaluación vocal online" },
  { slug: "tratamiento-disfonia-online", label: "Tratamiento disfonía online" },
  {
    slug: "nodulos-vocales-tratamiento-online",
    label: "Nódulos vocales — tratamiento online",
  },
  {
    slug: "fatiga-vocal-tratamiento-online",
    label: "Fatiga vocal — tratamiento online",
  },
  {
    slug: "rehabilitacion-vocal-profesionales-voz",
    label: "Rehabilitación vocal profesionales de la voz",
  },
  {
    slug: "terapia-vocal-docentes-profesores",
    label: "Terapia vocal docentes y profesores",
  },
  {
    slug: "paralisis-cordal-rehabilitacion-online",
    label: "Parálisis cordal — rehabilitación online",
  },
  { slug: "higiene-vocal-cuidado-voz", label: "Higiene vocal y cuidado de la voz" },
  { slug: "voz-ronca-causas-tratamiento", label: "Voz ronca: causas y tratamiento" },
  { slug: "fonoaudiologa-voz-santiago", label: "Fonoaudióloga voz — Santiago" },
  { slug: "fonoaudiologa-voz-concepcion", label: "Fonoaudióloga voz — Concepción" },
  { slug: "fonoaudiologa-voz-vina-del-mar", label: "Fonoaudióloga voz — Viña del Mar" },
  { slug: "fonoaudiologa-voz-temuco", label: "Fonoaudióloga voz — Temuco" },
  { slug: "fonoaudiologa-voz-antofagasta", label: "Fonoaudióloga voz — Antofagasta" },
];

/** Todas las landings y hubs SEO del sitio, agrupadas para navegación interna. */
export const SEO_ROUTE_SECTIONS: SeoRouteSection[] = [
  {
    id: "principal",
    title: "Principal",
    routes: [
      route("/", "Inicio"),
      route("/fonoaudiologa-ninos-chillan", "Fonoaudióloga niños Chillán (pilar)"),
    ],
  },
  {
    id: "servicios",
    title: "Servicios (nacional)",
    routes: [
      route("/servicios", "Hub servicios"),
      route("/servicios/terapia-lenguaje-infantil", "Terapia lenguaje infantil"),
      route("/servicios/trastornos-del-habla", "Trastornos del habla"),
      route("/servicios/evaluacion-fonoaudiologica", "Evaluación fonoaudiológica"),
      route(
        "/servicios/tel-trastorno-especifico-lenguaje",
        "TEL — trastorno específico del lenguaje"
      ),
      route("/servicios/tea-trastorno-espectro-autista", "TEA — trastorno del espectro autista"),
      route("/servicios/dificultades-lectoescritura", "Dificultades lectoescritura"),
    ],
  },
  {
    id: "geo-chillan",
    title: "Landings geo Chillán",
    routes: [
      route(
        "/agendar-hora-fonoaudiologo-infantil-chillan",
        "Agendar hora fonoaudiólogo infantil"
      ),
      route(
        "/evaluacion-fonoaudiologica-infantil-chillan",
        "Evaluación fonoaudiológica infantil"
      ),
      route("/fonoaudiologia-infantil-chillan", "Fonoaudiología infantil"),
      route("/especialista-lenguaje-infantil-chillan", "Especialista lenguaje infantil"),
      route("/fonoaudiologo-pediatrico-chillan", "Fonoaudiólogo pediátrico"),
    ],
  },
  {
    id: "servicios-chillan",
    title: "Servicios Chillán (long-tail)",
    routes: SERVICIO_CHILLAN_SLUGS.map(({ slug, label }) =>
      route(`/servicios/${slug}`, label)
    ),
  },
  {
    id: "tratamientos",
    title: "Tratamientos Chillán",
    routes: TRATAMIENTO_SLUGS.map(({ slug, label }) =>
      route(`/tratamientos/${slug}`, label)
    ),
  },
  {
    id: "sintomas",
    title: "Síntomas Chillán",
    routes: [
      route("/sintomas", "Hub síntomas"),
      ...SINTOMA_SLUGS.map(({ slug, label }) => route(`/sintomas/${slug}`, label)),
    ],
  },
  {
    id: "comparaciones",
    title: "Comparaciones",
    routes: [
      route("/comparaciones", "Hub comparaciones"),
      route(
        "/comparaciones/dislalia-vs-trastorno-fonologico",
        "Dislalia vs trastorno fonológico"
      ),
      route(
        "/comparaciones/tel-vs-retraso-del-lenguaje",
        "TEL vs retraso del lenguaje"
      ),
    ],
  },
  {
    id: "chillan-patologias",
    title: "Patologías Chillán",
    routes: [
      route("/chillan", "Hub patologías Chillán"),
      route("/chillan/lenguaje-infantil", "Lenguaje infantil (geo → pilar)"),
      ...PATOLOGIAS.map((p) => route(`/chillan/${p.slug}`, p.titulo)),
    ],
  },
  {
    id: "glosario",
    title: "Glosario",
    routes: [
      route("/glosario", "Hub glosario"),
      ...GLOSARIO_TERMINOS.map((t) => route(`/glosario/${t.slug}`, t.term)),
    ],
  },
  {
    id: "recursos",
    title: "Recursos",
    routes: [route("/recursos", "Recursos")],
  },
  {
    id: "voz-online",
    title: "Voz online",
    routes: VOZ_ONLINE_SLUGS.map(({ slug, label }) =>
      route(`/voz-online/${slug}`, label)
    ),
  },
];

export function getAllSeoRoutes(): SeoRoute[] {
  return SEO_ROUTE_SECTIONS.flatMap((s) => s.routes);
}

export function getSeoRouteCount(): number {
  return getAllSeoRoutes().length;
}
