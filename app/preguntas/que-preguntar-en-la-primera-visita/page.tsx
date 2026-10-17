import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/que-preguntar-en-la-primera-visita";
const TITLE = "¿Qué preguntar en la primera visita?";
const DESCRIPTION =
  "Pregunta qué se observó, si hace falta terapia, qué hacer en casa y si el colegio necesita informe. La evaluación en Chillán responde eso.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "qué preguntar al fonoaudiólogo",
    "primera visita fonoaudiológica",
    "preguntas para la fonoaudióloga",
    "evaluación infantil Chillán",
  ],
  ogType: "article",
});

const answer =
  "Pregunta qué se observó, si hace falta terapia o solo orientación, qué puedes hacer en la casa y si el colegio necesita un informe. Esas cuatro respuestas salen de la evaluación. No hace falta que llegues con un diagnóstico puesto.";

export default function QuePreguntarPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Preguntas para la visita"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, quiero agendar la primera evaluación de mi hijo en Chillán y llevar mis preguntas"
      ctaLabel="Agendar la primera visita por WhatsApp"
      related={[
        {
          href: "/recursos/primera-evaluacion-fonoaudiologica-infantil",
          label: "Primera evaluación",
        },
        {
          href: "/servicios/evaluacion-del-lenguaje-infantil-chillan",
          label: "Evaluación del lenguaje",
        },
        {
          href: "/servicios/evaluacion-del-habla-infantil-chillan",
          label: "Evaluación del habla",
        },
        {
          href: "/servicios/informe-fonoaudiologico-pie-chillan",
          label: "Informe fonoaudiológico",
        },
      ]}
      tambien={[
        "/preguntas/puedo-pedir-solo-una-evaluacion",
        "/preguntas/el-jardin-me-derivo-a-fonoaudiologia",
        "/preguntas/cuanto-dura-una-terapia-de-lenguaje",
      ]}
      faqs={[
        {
          question: "¿Las anoto o las digo de memoria?",
          answer:
            "Anótalas en el teléfono. En la entrevista y en la devolución se pueden perder si dependen de la memoria. Tres o cuatro preguntas alcanzan. No hace falta una lista larga.",
        },
        {
          question: "¿Puedo preguntar aunque no entienda los términos?",
          answer:
            "Sí. Pide que te lo digan con un ejemplo de tu hijo: una palabra, una instrucción, una situación del jardín. El informe después queda por escrito.",
        },
        {
          question: "¿Pregunto el plazo de la terapia en esa misma visita?",
          answer:
            "Puedes preguntar qué camino se propone y de qué depende. El plazo no es igual para todos: se conversa con lo que mostró la evaluación, no con una cifra genérica.",
        },
      ]}
    >
      <h2>Las cuatro preguntas que ordenan la devolución</h2>
      <ol>
        <li>
          <strong>¿Qué se vio hoy?</strong> Pide fortalezas y dificultades en
          palabras concretas: comprensión, frases, sonidos o participación.
        </li>
        <li>
          <strong>¿Hace falta terapia o basta con orientación?</strong> La
          evaluación puede cerrar en un plan de sesiones o en pautas para la
          casa. Las dos salidas son posibles.
        </li>
        <li>
          <strong>¿Qué hago yo esta semana?</strong> Pide una o dos ideas para
          la rutina, no una lista imposible. La guía de estimulación en casa
          va en la misma línea: modelar y expandir, sin convertir el día en
          clase.
        </li>
        <li>
          <strong>¿El colegio necesita un informe?</strong> Si el jardín, el
          PIE o el pediatra lo pidieron, dilo al inicio para que el documento
          responda a ese uso. El detalle está en{" "}
          <Link href="/servicios/informe-fonoaudiologico-pie-chillan">
            informe fonoaudiológico
          </Link>
          .
        </li>
      </ol>
      <h2>Qué contar tú, antes de preguntar</h2>
      <p>
        La entrevista rinde más si llegas con ejemplos. Edad, qué te preocupa,
        desde cuándo, en qué situación se entiende mejor y qué dijo la
        educadora. Si hay informes previos, llévalos. Si no hay, no se
        suspende la hora. La página para{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agendar
        </Link>{" "}
        pide esos mismos datos en el WhatsApp.
      </p>
      <p>
        También ayuda decir si la duda es de lenguaje o de habla, aunque no
        uses esos nombres. «Entiende todo y no se le entiende» no es lo mismo
        que «habla poco y no sigue instrucciones». La{" "}
        <Link href="/servicios/evaluacion-del-lenguaje-infantil-chillan">
          evaluación del lenguaje
        </Link>{" "}
        y la{" "}
        <Link href="/servicios/evaluacion-del-habla-infantil-chillan">
          evaluación del habla
        </Link>{" "}
        separan esos focos. En la sesión se elige por dónde empezar.
      </p>
      <h2>Cómo se cierra la visita</h2>
      <p>
        Al final hay una devolución preliminar. Ahí caben tus preguntas. El
        informe escrito llega después, con resultados y recomendaciones. Si
        quieres el relato de la sesión completa —qué se hace y qué llevar—
        léelo en{" "}
        <Link href="/recursos/primera-evaluacion-fonoaudiologica-infantil">
          primera evaluación fonoaudiológica
        </Link>
        .
      </p>
      <p>
        La consulta es presencial en Chillán con{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          Katia Domínguez, fonoaudióloga infantil
        </Link>
        . Lleva las cuatro preguntas. El resto aparece cuando veas a tu hijo
        en la sesión.
      </p>
    </PreguntaArticle>
  );
}
