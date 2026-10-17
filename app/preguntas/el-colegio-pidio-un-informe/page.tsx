import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { guiaMetadata } from "@/app/guias-padres/guia-ui";

const PATH = "/preguntas/el-colegio-pidio-un-informe";
const TITLE = "El colegio pidió un informe fonoaudiológico";
const DESCRIPTION =
  "Si el colegio pide un informe, se redacta después de evaluar a tu hijo. Qué llevar a la hora y qué no armes en casa. Chillán.";

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "informe fonoaudiológico colegio",
    "informe PIE fonoaudiológico",
    "el colegio pidió evaluación de lenguaje",
  ],
});

const answer =
  "El informe se escribe después de ver a tu hijo, no antes. El colegio puede pedirlo para orientar el apoyo. Tú puedes pedir la evaluación aunque nadie te la haya exigido. Llega con lo que observan en la sala y con lo que ves en casa.";

export default function ColegioPidioInformePage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Informe del colegio"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, el colegio pidió un informe fonoaudiológico y quiero agendar la evaluación en Chillán"
      ctaLabel="Agendar la evaluación"
      related={[
        { href: "/servicios/informe-fonoaudiologico-pie-chillan", label: "Informe fonoaudiológico PIE" },
        { href: "/preguntas/el-jardin-me-derivo-a-fonoaudiologia", label: "Si el jardín te derivó" },
        { href: "/lectoescritura", label: "Guías de lectoescritura" },
        { href: "/servicios/evaluacion-fonoaudiologica", label: "Evaluación fonoaudiológica" },
      ]}
      tambien={[
        "/preguntas/puedo-pedir-solo-una-evaluacion",
        "/preguntas/necesito-orden-medica-para-fonoaudiologo",
        "/preguntas/que-preguntar-en-la-primera-visita",
      ]}
      faqs={[
        {
          question: "¿Puedo escribir yo un resumen y que lo firmen?",
          answer:
            "No. El informe describe lo que se evaluó. Un texto armado en casa no reemplaza esa observación. Puedes llevar tus ejemplos para que la evaluación parta con información.",
        },
        {
          question: "¿El informe obliga a un tratamiento?",
          answer:
            "El informe explica lo encontrado y una sugerencia. La terapia se decide contigo después de entender ese resultado. Puedes pedir solo la evaluación si esa es tu pregunta de hoy.",
        },
      ]}
    >
      <h2>Qué te están pidiendo</h2>
      <p>
        A veces es una observación del profesor: «le cuesta seguir el relato» o
        «lee adivinando». A veces es un papel para el apoyo del colegio. En los
        dos casos el camino es el mismo: una{" "}
        <Link href="/servicios/evaluacion-fonoaudiologica">
          evaluación fonoaudiológica
        </Link>{" "}
        y, si corresponde, el{" "}
        <Link href="/servicios/informe-fonoaudiologico-pie-chillan">
          informe
        </Link>
        . No llegues con el diagnóstico escrito por el grupo de WhatsApp del
        curso.
      </p>
      <h2>Qué llevar</h2>
      <ul>
        <li>El recado del colegio, con las palabras de ellos si las tienes.</li>
        <li>El curso y desde cuándo lo notan.</li>
        <li>Un ejemplo de la casa: cómo cuenta, cómo lee o cómo se le entiende.</li>
        <li>Si ya hubo otra evaluación, el informe anterior.</li>
      </ul>
      <p>
        Si la duda empezó en el jardín y no en el colegio, lee{" "}
        <Link href="/preguntas/el-jardin-me-derivo-a-fonoaudiologia">
          qué hago si el jardín me derivó
        </Link>
        . Si el motivo es la lectura, las{" "}
        <Link href="/lectoescritura">guías de lectoescritura</Link> te ayudan a
        describirlo. Para una consulta particular en Chillán no se pide orden
        médica: está explicado en{" "}
        <Link href="/preguntas/necesito-orden-medica-para-fonoaudiologo">
          ¿necesito orden médica?
        </Link>
        .
      </p>
    </PreguntaArticle>
  );
}
