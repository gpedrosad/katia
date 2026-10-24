import { DISLALIA_ARTICULOS } from "@/app/dislalia/articulos";
import { GLOSARIO_TERMINOS } from "@/app/glosario/terminos";
import { GUIAS_PADRES } from "@/app/guias-padres/guias";
import { LECTOESCRITURA_ARTICULOS } from "@/app/lectoescritura/articulos";
import { LENGUAJE_ARTICULOS } from "@/app/lenguaje-infantil/articulos";
import { PREGUNTAS } from "@/app/preguntas/catalogo";
import { TARTAMUDEZ_ARTICULOS } from "@/app/tartamudez/articulos";
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
  { slug: "mi-hijo-no-comprende-chillan", label: "Mi hijo no comprende" },
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
    slug: "evaluacion-del-lenguaje-infantil-chillan",
    label: "Evaluación del lenguaje infantil",
  },
  {
    slug: "evaluacion-del-habla-infantil-chillan",
    label: "Evaluación del habla infantil",
  },
];

const VOZ_ONLINE_SLUGS: { slug: string; label: string }[] = [
  { slug: "fonoaudiologa-de-voz-online", label: "Terapia de voz online para adultos" },
  { slug: "como-es-la-sesion-de-voz-online", label: "Cómo es la sesión de voz online" },
  { slug: "evaluacion-vocal-online", label: "Evaluación vocal online" },
  { slug: "tratamiento-disfonia-online", label: "Tratamiento disfonía online" },
  {
    slug: "nodulos-vocales-tratamiento-online",
    label: "Nódulos en las cuerdas vocales",
  },
  {
    slug: "polipos-en-las-cuerdas-vocales",
    label: "Pólipos en las cuerdas vocales",
  },
  {
    slug: "fatiga-vocal-tratamiento-online",
    label: "Voz cansada y fatiga vocal",
  },
  {
    slug: "rehabilitacion-vocal-profesionales-voz",
    label: "Terapia vocal para cantantes y locutores",
  },
  {
    slug: "terapia-vocal-docentes-profesores",
    label: "Voz cansada en profesores",
  },
  {
    slug: "paralisis-cordal-rehabilitacion-online",
    label: "Parálisis cordal — rehabilitación online",
  },
  { slug: "higiene-vocal-cuidado-voz", label: "Higiene vocal y cuidado de la voz" },
  { slug: "voz-ronca-causas-tratamiento", label: "Voz ronca: causas y tratamiento" },
  { slug: "afonia-perdi-la-voz", label: "Me quedé sin voz (afonía)" },
  { slug: "ejercicios-para-la-voz", label: "Ejercicios para la voz" },
  { slug: "reflujo-y-voz", label: "Voz ronca por reflujo" },
  { slug: "disfonia-por-estres", label: "Disfonía por estrés o tensión" },
  { slug: "disfonia-espasmodica", label: "Disfonía espasmódica" },
  { slug: "voz-en-call-center", label: "Voz en call center y teletrabajo" },
  { slug: "voz-y-menopausia", label: "Voz y menopausia" },
  { slug: "voz-despues-de-un-resfrio", label: "Voz tras un resfrío o COVID" },
  { slug: "proyeccion-de-voz", label: "Proyección de voz para hablar en público" },
  { slug: "presbifonia", label: "Presbifonía" },
  {
    slug: "terapia-de-voz-desde-otro-pais",
    label: "Terapia de voz desde otro país",
  },
  {
    slug: "cuanto-dura-la-terapia-de-voz",
    label: "Cuánto dura la terapia de voz",
  },
  { slug: "espana", label: "Terapia de voz en español — España" },
  { slug: "argentina", label: "Terapia de voz en español — Argentina" },
  { slug: "miami", label: "Terapia de voz en español — Miami" },
  { slug: "estados-unidos", label: "Terapia de voz en español — Estados Unidos" },
  { slug: "canada", label: "Terapia de voz en español — Canadá" },
  { slug: "reino-unido", label: "Terapia de voz en español — Reino Unido" },
  { slug: "alemania", label: "Terapia de voz en español — Alemania" },
  { slug: "suiza", label: "Terapia de voz en español — Suiza" },
  { slug: "australia", label: "Terapia de voz en español — Australia" },
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
      route(
        "/sobre-katia-dominguez-fonoaudiologa-chillan",
        "Sobre Katia Domínguez"
      ),
      route("/contacto-fonoaudiologa-chillan", "Contacto fonoaudióloga Chillán"),
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
        "/servicios/evaluacion-del-lenguaje-infantil-chillan",
        "Evaluación del lenguaje infantil"
      ),
      route(
        "/servicios/evaluacion-del-habla-infantil-chillan",
        "Evaluación del habla infantil"
      ),
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
      route(
        "/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje",
        "Retraso del habla vs retraso del lenguaje"
      ),
      route(
        "/comparaciones/dislexia-vs-dislalia",
        "Dislexia vs dislalia"
      ),
      route(
        "/comparaciones/dislalia-vs-disartria",
        "Dislalia vs disartria"
      ),
    ],
  },
  {
    id: "chillan-patologias",
    title: "Patologías Chillán",
    routes: [
      route("/chillan", "Hub patologías Chillán"),
      ...PATOLOGIAS.map((p) => route(`/chillan/${p.slug}`, p.titulo)),
    ],
  },
  {
    id: "glosario",
    title: "Glosario",
    routes: [
      route("/glosario", "Hub glosario"),
      route("/glosario/dislalia", "Dislalia (página estática)"),
      route("/glosario/tel", "TEL (página estática)"),
      route("/glosario/retraso-del-habla", "Retraso del habla (página estática)"),
      route("/glosario/logopeda", "Logopeda (página estática)"),
      route("/glosario/tdl", "TDL (trastorno del desarrollo del lenguaje)"),
      ...GLOSARIO_TERMINOS.map((t) => route(`/glosario/${t.slug}`, t.term)),
    ],
  },
  {
    id: "recursos",
    title: "Recursos",
    routes: [
      route("/recursos", "Hub recursos"),
      route("/recursos/hitos-del-lenguaje-por-edad", "Hitos del lenguaje por edad"),
      route(
        "/recursos/senales-de-alerta-del-lenguaje-y-habla",
        "Señales de alerta del lenguaje y habla"
      ),
      route("/recursos/estimular-lenguaje-en-casa", "Estimular lenguaje en casa"),
      route(
        "/recursos/primera-evaluacion-fonoaudiologica-infantil",
        "Primera evaluación fonoaudiológica infantil"
      ),
    ],
  },
  {
    id: "lenguaje-infantil",
    title: "Lenguaje infantil (guías)",
    routes: [
      route("/lenguaje-infantil", "Hub lenguaje infantil"),
      ...LENGUAJE_ARTICULOS.map((item) => route(item.href, item.title)),
    ],
  },
  {
    id: "dislalia-guias",
    title: "Dislalia (guías)",
    routes: [
      route("/dislalia", "Hub dislalia"),
      ...DISLALIA_ARTICULOS.map((item) => route(item.href, item.title)),
    ],
  },
  {
    id: "tartamudez-guias",
    title: "Tartamudez (guías)",
    routes: [
      route("/tartamudez", "Hub tartamudez"),
      ...TARTAMUDEZ_ARTICULOS.map((item) => route(item.href, item.title)),
    ],
  },
  {
    id: "lectoescritura-guias",
    title: "Lectoescritura (guías)",
    routes: [
      route("/lectoescritura", "Hub lectoescritura"),
      ...LECTOESCRITURA_ARTICULOS.map((item) => route(item.href, item.title)),
    ],
  },
  {
    id: "preguntas",
    title: "Preguntas de padres",
    routes: [
      route("/preguntas", "Hub preguntas"),
      ...PREGUNTAS.map((item) => route(item.href, item.question)),
    ],
  },
  {
    id: "guias-padres",
    title: "Guías para padres",
    routes: [
      route("/guias-padres", "Hub guías para padres"),
      ...GUIAS_PADRES.map((item) => route(item.href, item.title)),
    ],
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
