/**
 * Datos de patologías para landings programáticas (playbook Locations)
 * Patrón: "[patología] en Chillán" — cada página aporta valor único
 */

export const PATOLOGIAS = [
  {
    slug: "dislalia",
    titulo: "Dislalia en Chillán",
    subtitulo: "Señales locales y cuándo consultar",
    descripcion:
      "¿Tu hijo omite sonidos o dice «tasa» por casa? Esta página reúne las señales de dislalia en Chillán. La definición breve está en el glosario y el tratamiento de la dislalia infantil está en su página.",
    senales: [
      "Omite sonidos (dice 'ato' en vez de 'gato')",
      "Sustituye sonidos (dice 'tasa' en vez de 'casa')",
      "Distorsiona la r, s, l u otros fonemas",
      "A los 5-6 años persisten errores que deberían estar superados",
    ],
    servicioHref: "/tratamientos/dislalia-infantil-chillan",
    glosarioHref: "/glosario/dislalia",
    whatsappText: "Hola, quiero consultar por dislalia",
  },
  {
    slug: "retraso-del-lenguaje",
    titulo: "Retraso del Lenguaje en Chillán",
    subtitulo: "Terapia para niños que hablan poco o tardan en hablar",
    descripcion:
      "El retraso del lenguaje ocurre cuando el niño no alcanza los hitos esperados: pocas palabras a los 2 años, no junta dos palabras, vocabulario limitado. Evaluación y terapia en Chillán con enfoque lúdico.",
    senales: [
      "A los 2 años dice menos de 50 palabras",
      "No junta dos palabras ('mamá agua')",
      "A los 3 años solo la familia le entiende",
      "Dificultad para contar lo que pasó o seguir instrucciones",
    ],
    servicioHref: "/servicios/terapia-lenguaje-infantil",
    glosarioHref: "/glosario",
    whatsappText: "Hola, quiero consultar por retraso del lenguaje",
  },
  {
    slug: "retraso-del-habla",
    titulo: "Retraso del Habla en Chillán",
    subtitulo: "Tratamiento cuando el niño habla poco o se le entiende mal",
    descripcion:
      "El retraso del habla afecta la producción de sonidos y la claridad. El niño puede tener buen vocabulario pero cuesta entenderle. Evaluación fonoaudiológica en Chillán para identificar causas y plan de tratamiento.",
    senales: [
      "Habla poco para su edad",
      "Se le entiende menos del 75% a los 3 años",
      "Omite sílabas o simplifica palabras",
      "Frustración al comunicarse porque no le entienden",
    ],
    servicioHref: "/servicios/trastornos-del-habla",
    glosarioHref: "/glosario",
    whatsappText: "Hola, quiero consultar por retraso del habla",
  },
  {
    slug: "trastorno-fonologico",
    titulo: "Trastorno Fonológico en Chillán",
    subtitulo: "Patrones de errores en los sonidos del habla",
    descripcion:
      "El trastorno fonológico implica patrones sistemáticos de errores: sustituye varios sonidos, elimina sílabas, simplifica palabras. Requiere terapia especializada. Fonoaudióloga con postítulo en trastorno fonológico en Chillán.",
    senales: [
      "Múltiples sustituciones de sonidos",
      "Elimina sílabas ('pato' por 'zapato')",
      "Patrones de error que persisten después de los 4 años",
      "Habla poco inteligible para personas fuera de la familia",
    ],
    servicioHref: "/servicios/trastornos-del-habla",
    glosarioHref: "/glosario",
    whatsappText: "Hola, quiero consultar por trastorno fonológico",
  },
  {
    slug: "tel",
    titulo: "TEL en Chillán",
    subtitulo:
      "Hub local: señales, evaluación presencial y enlace al tratamiento",
    descripcion:
      "Punto de partida si buscas TEL en Chillán. El TEL (o TDL) afecta aproximadamente al 7% de los niños: dificultades persistentes de lenguaje sin causa aparente. Aquí ves señales y cómo pedir la evaluación presencial; la definición breve y el tratamiento están en sus páginas.",
    senales: [
      "Vocabulario muy limitado para su edad",
      "Oraciones cortas cuando los pares hablan con frases largas",
      "Dificultad para seguir instrucciones de 2-3 pasos",
      "Problemas escolares a pesar de inteligencia normal",
    ],
    servicioHref: "/servicios/tel-trastorno-especifico-lenguaje",
    glosarioHref: "/glosario/tel",
    whatsappText: "Hola, quiero consultar por TEL",
  },
  {
    slug: "apraxia-del-habla",
    titulo: "Apraxia del Habla Infantil en Chillán",
    subtitulo: "Dificultad para planificar los movimientos del habla",
    descripcion:
      "La apraxia del habla infantil (AHS) es la dificultad para coordinar los movimientos necesarios para hablar. Errores inconsistentes, esfuerzo visible al hablar. Requiere terapia especializada. Evaluación en Chillán.",
    senales: [
      "Errores inconsistentes (dice bien a veces y mal otras)",
      "Esfuerzo visible al intentar hablar",
      "Mejor imitación que habla espontánea",
      "Pocas consonantes o vocales en el repertorio",
    ],
    servicioHref: "/tratamientos/apraxia-del-habla-infantil-chillan",
    glosarioHref: "/glosario/apraxia-del-habla",
    whatsappText: "Hola, quiero consultar por apraxia del habla",
  },
  {
    slug: "dislexia",
    titulo: "Fonoaudiología y Dislexia en Chillán",
    subtitulo: "Evaluación de las bases del lenguaje oral para la lectura",
    descripcion:
      "Fonoaudiología y dislexia en Chillán: se evalúan conciencia fonológica, vocabulario y comprensión oral. El diagnóstico formal de dislexia se hace con evaluaciones especializadas. La definición está en el glosario.",
    senales: [
      "Dificultad persistente para aprender a leer",
      "Confunde letras (b/d, p/q)",
      "Lee muy lento o con muchos errores",
      "Problemas de ortografía a pesar de esfuerzo",
    ],
    servicioHref: "/servicios/dificultades-lectoescritura",
    glosarioHref: "/glosario/dislexia",
    whatsappText: "Hola, quiero consultar por dislexia",
  },
  {
    slug: "disfemia",
    titulo: "Disfemia (Tartamudez) en Chillán",
    subtitulo: "Apoyo fonoaudiológico para la fluidez del habla",
    descripcion:
      "La disfemia o tartamudez afecta la fluidez: repeticiones, prolongaciones o bloqueos. La intervención temprana mejora el pronóstico. Evaluación y terapia en Chillán para niños con dificultades de fluidez.",
    senales: [
      "Repeticiones de sonidos o sílabas",
      "Prolongaciones de sonidos",
      "Bloqueos al iniciar palabras",
      "Tensión o esfuerzo visible al hablar",
    ],
    servicioHref: "/servicios/trastornos-del-habla",
    glosarioHref: "/glosario/disfemia",
    whatsappText: "Hola, quiero consultar por tartamudez",
  },
  {
    slug: "tea-comunicacion",
    titulo: "TEA y Comunicación en Chillán",
    subtitulo: "Apoyo fonoaudiológico para niños con autismo",
    descripcion:
      "Aproximadamente el 40% de los niños con TEA tiene retraso significativo del lenguaje. Trabajamos comunicación funcional, pragmática y desarrollo del lenguaje. Evaluación y terapia en Chillán adaptada a cada niño.",
    senales: [
      "Poco o ningún lenguaje verbal",
      "Dificultad para usar el lenguaje en contexto social",
      "Repetición de frases sin uso comunicativo",
      "Dificultad para seguir turnos de conversación",
    ],
    servicioHref: "/servicios/tea-trastorno-espectro-autista",
    glosarioHref: "/glosario/tea",
    whatsappText: "Hola, quiero consultar por TEA y comunicación",
  },
  {
    slug: "lectoescritura",
    titulo: "Lectoescritura en Chillán",
    subtitulo: "La base suele estar en el lenguaje oral",
    descripcion:
      "Muchas dificultades para leer o escribir parten del lenguaje oral: conciencia fonológica, vocabulario y comprensión. Esta es la página local. El servicio general y la fonoaudiología y dislexia están en otras páginas.",
    senales: [
      "Dificultad para aprender letras y sus sonidos",
      "Lee lento o con muchos errores",
      "Confunde letras similares",
      "Problemas de comprensión lectora",
    ],
    servicioHref: "/servicios/dificultades-lectoescritura",
    glosarioHref: "/glosario/conciencia-fonologica",
    whatsappText: "Hola, quiero consultar por dificultades de lectoescritura",
  },
] as const;

export type SlugPatologia = (typeof PATOLOGIAS)[number]["slug"];

export function getPatologiaBySlug(slug: string) {
  return PATOLOGIAS.find((p) => p.slug === slug);
}
