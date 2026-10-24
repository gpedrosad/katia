import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { guiaMetadata } from "@/app/guias-padres/guia-ui";

const PATH = "/preguntas/a-que-edad-se-le-entiende";
const TITLE = "¿A qué edad se le entiende lo que dice?";
const DESCRIPTION =
  "A los 3 años muchos niños arman oraciones que extraños entienden. Hacia los 4 y 5 el habla se aclara. Si a los 4 cuesta entenderlo, evalúa en Chillán.";

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "a qué edad se le entiende al niño",
    "a qué edad hablan claro los niños",
    "no se le entiende al hablar",
    "inteligibilidad del habla",
    "cuándo se entiende a un niño",
  ],
});

const answer =
  "A los 3 años, muchos niños arman oraciones que personas de afuera entienden en gran parte. Hacia los 4 y 5 años el habla se entiende con más claridad. Si a los 4 te cuesta entender a tu hijo, conviene evaluar. Las primeras palabras, entre los 11 y los 14 meses, son otra pregunta: ahí empieza a hablar.";

export default function AQueEdadSeLeEntiendePage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="A qué edad se le entiende"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, me cuesta entender lo que dice mi hijo y quiero saber si conviene evaluar en Chillán"
      ctaLabel="Consultar por la claridad del habla"
      related={[
        {
          href: "/recursos/hitos-del-lenguaje-por-edad",
          label: "A qué edad hablan los niños",
        },
        {
          href: "/dislalia/lo-entienden-en-casa-no-afuera",
          label: "Lo entienden en casa y no afuera",
        },
        {
          href: "/lenguaje-infantil/a-los-3-anos-habla-poco",
          label: "A los 3 años habla poco",
        },
        {
          href: "/servicios/evaluacion-del-habla-infantil-chillan",
          label: "Evaluación del habla en Chillán",
        },
        {
          href: "/agendar-hora-fonoaudiologo-infantil-chillan",
          label: "Agendar la evaluación",
        },
      ]}
      tambien={[
        "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
        "/preguntas/hay-que-esperar-a-los-4-anos",
        "/preguntas/es-normal-no-pronunciar-la-r-a-los-4",
      ]}
      faqs={[
        {
          question: "¿A los 2 años ya deberían entenderlo personas nuevas?",
          answer:
            "A los 2 años la referencia publicada es otra: unas 50 palabras y frases de dos, como «mamá agua». Que extraños entiendan oraciones en gran parte se describe alrededor de los 3 años, y con más claridad hacia los 4 y 5. No hay un porcentaje de «se le entiende» para contar en la casa.",
        },
        {
          question: "¿Y si tiene 4 años y solo lo entiende la familia?",
          answer:
            "Si a los 4 cuesta entenderlo, conviene evaluar. Si después de los 4 años hay muchos errores y el habla no es clara para desconocidos, la evaluación del habla mira si es un sonido, un patrón o las dos cosas. No lo dejes solo en «en la casa ya sabemos qué dice».",
        },
        {
          question: "¿Las niñas se entienden antes que los niños?",
          answer:
            "La guía de hitos no usa una edad distinta para niñas y para niños. Las mismas referencias sirven: primeras palabras entre los 11 y los 14 meses, frases de dos hacia los 2 años, oraciones más claras hacia los 3.",
        },
        {
          question: "¿Dónde está la tabla de a qué edad hablan?",
          answer:
            "En la guía de hitos del lenguaje por edad. Esa página responde a qué edad hablan los niños, con la tabla y las primeras palabras. Esta pregunta es la siguiente: a qué edad el habla ya se entiende fuera de la casa.",
        },
        {
          question: "¿La erre que falta hace que no se le entienda?",
          answer:
            "Un sonido solo, como la r fuerte, puede consolidarse hacia los 5 o 6 años. Si a los 4 años no se le entiende el conjunto del habla, la duda es más amplia que una erre. La pregunta de la r a los 4 años está en su página.",
        },
      ]}
    >
      <h2>Hablar y que te entiendan no es lo mismo</h2>
      <p>
        Las primeras palabras con significado suelen aparecer entre los 11 y
        los 14 meses. A los 2 años, muchos niños dicen unas 50 palabras y
        juntan dos. Eso es empezar a hablar y a combinar. Que una persona nueva
        entienda una oración es un paso más tarde.
      </p>
      <p>
        La tabla, las alertas y la respuesta directa de{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">
          a qué edad hablan los niños
        </Link>{" "}
        están en la guía de hitos. Esta página no la repite. Si a los 18 meses
        no hay ninguna palabra, la guía de esa edad es{" "}
        <Link href="/lenguaje-infantil/nino-de-18-meses-no-habla">
          18 meses y todavía no habla
        </Link>
        .
      </p>

      <h2>Por edad, con lo que ya está publicado</h2>
      <ul>
        <li>
          <strong>Hacia los 2 años:</strong> vocabulario de unas 50 palabras y
          frases de dos. La familia suele entender más que un extraño.
        </li>
        <li>
          <strong>Alrededor de los 3:</strong> oraciones que personas de afuera
          entienden en gran parte. Si a esa edad solo hay etiquetas, mira{" "}
          <Link href="/lenguaje-infantil/a-los-3-anos-habla-poco">
            a los 3 años habla poco
          </Link>
          .
        </li>
        <li>
          <strong>Hacia los 4 y 5:</strong> el habla se entiende con más
          claridad. Si a los 4 cuesta entenderlo, conviene evaluar.
        </li>
        <li>
          <strong>Después de los 4, con muchos errores:</strong> si el habla no
          es clara para desconocidos, la evaluación mira sonidos y patrones. La
          mayoría de los sonidos se espera hacia los 4 o 5 años.
        </li>
        <li>
          <strong>La r fuerte:</strong> puede consolidarse hacia los 5 o 6. Un
          solo sonido no explica que no se le entienda todo.
        </li>
      </ul>

      <h2>Si en casa lo entienden y afuera no</h2>
      <p>
        Cuando la familia ya traduce y las personas nuevas no, la guía de
        pronunciación es{" "}
        <Link href="/dislalia/lo-entienden-en-casa-no-afuera">
          lo entienden en casa y no afuera
        </Link>
        . Ahí la duda es la claridad de los sonidos, no la cantidad de
        palabras. Si además cambia varios sonidos, la comparación{" "}
        <Link href="/comparaciones/dislalia-vs-trastorno-fonologico">
          dislalia y trastorno fonológico
        </Link>{" "}
        separa un fonema de un patrón. Si el habla suena débil, lenta o con
        poco volumen, mira{" "}
        <Link href="/comparaciones/dislalia-vs-disartria">
          dislalia y disartria
        </Link>
        .
      </p>

      <h2>Cuándo pedir la evaluación</h2>
      <p>
        Pide hora si a los 4 años cuesta entenderlo, si lleva tiempo sin
        aclararse, o si el jardín y la casa no coinciden en lo que dice. Una
        sola duda de un sonido, como la r a los 4, tiene su pregunta:{" "}
        <Link href="/preguntas/es-normal-no-pronunciar-la-r-a-los-4">
          ¿es normal que no pronuncie la r a los 4?
        </Link>
        .
      </p>
      <p>
        La evaluación del habla en la ciudad está en{" "}
        <Link href="/servicios/evaluacion-del-habla-infantil-chillan">
          evaluación del habla infantil en Chillán
        </Link>
        . Cuándo llevarlo, sin repetir toda la tabla, está en{" "}
        <Link href="/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo">
          cuándo llevar a mi hijo al fonoaudiólogo
        </Link>
        . La hora se agenda en{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agendar en Chillán
        </Link>
        .
      </p>
    </PreguntaArticle>
  );
}
