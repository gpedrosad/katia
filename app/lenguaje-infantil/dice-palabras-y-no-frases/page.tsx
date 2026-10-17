import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/lenguaje-infantil/dice-palabras-y-no-frases";
const TITLE = "Dice palabras, pero no arma frases";
const DESCRIPTION =
  "Tiene palabras sueltas y no las junta. Cómo se ve una frase de dos palabras en la casa y cuándo evaluar en Chillán.";

const faqs = [
  {
    question: "¿«Más agua» ya cuenta como frase?",
    answer:
      "Sí. Dos palabras juntas con un sentido —«más agua», «mamá ven», «auto mío»— ya son una combinación. No hace falta una oración larga para decir que empezó a juntar.",
  },
  {
    question: "¿Y si dice muchas palabras y ninguna junta?",
    answer:
      "Ese contraste es justo lo que conviene anotar: vocabulario por un lado, combinaciones por otro. La guía de hitos usa como referencia, hacia los 2 años, frases de dos palabras. Si eso no aparece, evalúa.",
  },
  {
    question: "¿Es lo mismo que no hablar?",
    answer:
      "No. Aquí ya hay palabras. La duda es que no se combinan. La página de síntoma en Chillán, «no arma frases», es el lugar para pedir la evaluación local.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "dice palabras pero no arma frases",
    "no junta palabras",
    "mi hijo no forma frases",
    "frases de dos palabras",
  ],
});

export default function DicePalabrasYNoFrasesPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lenguaje infantil", href: "/lenguaje-infantil" },
        { label: "Palabras sin frases", href: PATH },
      ]}
      eyebrow="Lenguaje infantil"
      title="Dice palabras, pero no arma frases"
      lead="Nombrar cosas no es lo mismo que juntarlas. Si tu hijo tiene palabras y casi nunca pone dos juntas, esa es la duda que esta guía te ayuda a observar."
      related={[
        { href: "/lenguaje-infantil", label: "Guías de lenguaje infantil" },
        { href: "/sintomas/hijo-no-arma-frases-chillan", label: "No arma frases en Chillán" },
        { href: "/recursos/hitos-del-lenguaje-por-edad", label: "Hitos por edad" },
        { href: "/servicios/terapia-lenguaje-infantil", label: "Terapia de lenguaje" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Dice palabras, pero no arma frases",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía de frases"
      ctaTitle="¿Las palabras no se juntan?"
      ctaBody="Escríbeme la edad y tres ejemplos de cómo pide algo: la palabra sola o las dos juntas, tal como las dice."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo dice palabras sueltas y no arma frases. Quiero evaluar en Chillán",
      )}
      ctaLabel="Consultar por las frases"
      backHref="/lenguaje-infantil"
      backLabel="← Volver a lenguaje infantil"
    >
      <p>
        Una frase corta, en esta etapa, no es un párrafo. Es «más pan», «mamá
        aquí», «auto no». Si tu hijo dice «agua» y señala el vaso, se está
        comunicando. Si nunca llega a poner las dos palabras, la comunicación
        se queda en la etiqueta de las cosas.
      </p>
      <h2>Cómo escucharlo una tarde</h2>
      <ul>
        <li>Anota palabras sueltas: nombres, «más», «no», «mío».</li>
        <li>Anota, aparte, si alguna vez salen dos juntas.</li>
        <li>Fíjate si imita una frase tuya o solo la última palabra.</li>
        <li>Mira si se enoja cuando no adivinas lo que quería con una sola palabra.</li>
      </ul>
      <p>
        La guía de{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">hitos</Link> usa
        como referencia, hacia los 2 años, un repertorio de palabras y el
        inicio de frases de dos palabras. No es un examen de la cocina. Es una
        orientación para no esperar indefinidamente si las combinaciones no
        aparecen. La página local{" "}
        <Link href="/sintomas/hijo-no-arma-frases-chillan">
          mi hijo no arma frases
        </Link>{" "}
        es la que sigue si ya quieres la evaluación en Chillán.
      </p>
      <h2>Qué puedes hacer mientras tanto</h2>
      <p>
        Amplía tú la palabra, sin exigirle que la repita: si dice «agua»,
        respondes «agua fría» o «más agua» y se la das. Ese modelo está
        desarrollado en{" "}
        <Link href="/recursos/estimular-lenguaje-en-casa">
          estimular el lenguaje en casa
        </Link>
        . No conviertas la once en una clase. Si además cambia muchos sonidos,
        mira también <Link href="/dislalia">dislalia</Link>: a veces la frase
        está y no se entiende.
      </p>
      <p>
        El trabajo presencial, cuando corresponde, está en{" "}
        <Link href="/servicios/terapia-lenguaje-infantil">
          terapia de lenguaje infantil
        </Link>
        . Llega con los ejemplos escritos. No hace falta que ensaye frases el
        día anterior.
      </p>
    </GuiaPage>
  );
}
