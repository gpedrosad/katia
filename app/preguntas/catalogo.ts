export type PreguntaResumen = {
  href: string;
  question: string;
  teaser: string;
};

/** Índice de preguntas. Cada una responde un solo duda de padres. */
export const PREGUNTAS: readonly PreguntaResumen[] = [
  {
    href: "/preguntas/que-hace-un-fonoaudiologo-infantil",
    question: "¿Qué hace un fonoaudiólogo infantil?",
    teaser: "Qué mira en la evaluación y qué se trabaja después, en consulta presencial.",
  },
  {
    href: "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
    question: "¿Cuándo llevar a mi hijo al fonoaudiólogo?",
    teaser: "Cómo decidir si pides hora, sin repetir la tabla de hitos por edad.",
  },
  {
    href: "/preguntas/es-normal-no-pronunciar-la-r-a-los-4",
    question: "¿Es normal que mi hijo de 4 años no pronuncie la R?",
    teaser: "Cuándo la erre sola puede esperar y cuándo conviene evaluar el habla.",
  },
  {
    href: "/preguntas/cuanto-dura-una-terapia-de-lenguaje",
    question: "¿Cuánto dura una terapia de lenguaje?",
    teaser: "Los factores que cambian el plazo. El estimado sale de la evaluación.",
  },
  {
    href: "/preguntas/necesito-orden-medica-para-fonoaudiologo",
    question: "¿Necesito orden médica para ir al fonoaudiólogo?",
    teaser: "Qué se pide para agendar en consulta particular y cuándo aparece el informe.",
  },
  {
    href: "/preguntas/el-jardin-me-derivo-a-fonoaudiologia",
    question: "¿Qué hago si el jardín me derivó a fonoaudiología?",
    teaser: "Cómo usar esa observación en la evaluación, sin tomarla como diagnóstico.",
  },
  {
    href: "/preguntas/conviene-corregir-cuando-habla-mal",
    question: "¿Conviene corregir a mi hijo cuando habla mal?",
    teaser: "Por qué modelar la palabra funciona mejor que corregir cada frase.",
  },
  {
    href: "/preguntas/puedo-pedir-solo-una-evaluacion",
    question: "¿Puedo pedir solo una evaluación?",
    teaser: "La primera hora es una evaluación. La terapia se decide después.",
  },
  {
    href: "/preguntas/que-preguntar-en-la-primera-visita",
    question: "¿Qué preguntar en la primera visita?",
    teaser: "Cuatro preguntas útiles para la devolución de la evaluación.",
  },
  {
    href: "/preguntas/es-tarde-consultar-en-basica",
    question: "¿Es tarde consultar en básica?",
    teaser: "Qué se puede mirar cuando ya hay lectura, escritura y sala de clases.",
  },
] as const;
