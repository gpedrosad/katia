import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/lectoescritura/confunde-letras-al-leer";
const TITLE = "Confunde letras al leer: qué observar";
const DESCRIPTION =
  "B y D, saltarse palabras o adivinar el final. Qué anotar en una lectura corta y cuándo evaluar lenguaje y lectura en Chillán.";

const faqs = [
  {
    question: "¿Confundir la B y la D es dislexia?",
    answer:
      "Una confusión, sola, no es un diagnóstico. La dislexia se define con una evaluación, no con una letra. Anota si además le cuesta unir sonidos, si adivina o si evita leer.",
  },
  {
    question: "¿Le hago leer la misma palabra diez veces?",
    answer:
      "Repetir hasta que salga bien suele terminar en llanto. Mejor una frase corta, con tu ayuda, y anotar qué pasó. El trabajo sistemático, si hace falta, va en la terapia.",
  },
  {
    question: "¿Tiene que ver con cómo habla?",
    answer:
      "A veces sí. Si además cambia sonidos al hablar, mira la guía de dislalia. La conciencia de los sonidos es una base de la lectura y tiene su página de servicio en Chillán.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "confunde letras al leer",
    "confunde b y d",
    "dificultad para leer",
    "lectoescritura Chillán",
  ],
});

export default function ConfundeLetrasPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lectoescritura", href: "/lectoescritura" },
        { label: "Confunde letras", href: PATH },
      ]}
      eyebrow="Lectoescritura"
      title="Confunde letras al leer"
      lead="Que una letra se cambie por otra llama la atención. Lo útil es ver si es un tropiezo de esa línea o si la lectura entera se sostiene en adivinanzas."
      related={[
        { href: "/lectoescritura", label: "Guías de lectoescritura" },
        { href: "/servicios/dificultades-lectoescritura", label: "Servicio de lectoescritura" },
        { href: "/servicios/conciencia-fonologica-chillan", label: "Conciencia fonológica" },
        { href: "/chillan/dislexia", label: "Dislexia en Chillán" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Confunde letras al leer",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía de letras confundidas"
      ctaTitle="¿La lectura se traba en las letras?"
      ctaBody="Dime el curso y un ejemplo: qué decía la palabra y qué leyó. Con eso vemos si corresponde evaluar en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo confunde letras al leer y quiero una evaluación en Chillán",
      )}
      ctaLabel="Consultar por la lectura"
      backHref="/lectoescritura"
      backLabel="← Volver a lectoescritura"
    >
      <p>
        B y D, P y Q, o saltarse una palabra y seguir como si calzara: son
        escenas distintas. Una aparece al empezar a leer y se corrige con el
        contexto. Otra se repite, el niño adivina por la primera letra y se
        cansa a la segunda línea.
      </p>
      <h2>Qué anotar en una lectura de cinco minutos</h2>
      <ul>
        <li>Si confunde letras que se parecen o cambia cualquier letra.</li>
        <li>Si une los sonidos o dice una palabra parecida y sigue.</li>
        <li>Si entiende lo que leyó cuando se lo preguntas con otras palabras.</li>
        <li>Si al hablar también cambia sonidos.</li>
      </ul>
      <p>
        Esa última pregunta importa. La página de{" "}
        <Link href="/servicios/conciencia-fonologica-chillan">
          conciencia fonológica
        </Link>{" "}
        explica la habilidad de escuchar sonidos sin leer todavía. Si el habla
        también está poco clara, entra a <Link href="/dislalia">dislalia</Link>.
      </p>
      <h2>Qué no concluir en la casa</h2>
      <p>
        No le digas que tiene dislexia porque confundió dos letras. La
        evaluación está descrita en{" "}
        <Link href="/chillan/dislexia">dislexia en Chillán</Link> y en{" "}
        <Link href="/servicios/dificultades-lectoescritura">
          dificultades de lectoescritura
        </Link>
        . Si además escribe al revés, lee{" "}
        <Link href="/lectoescritura/escribe-letras-al-reves">
          escribe letras al revés
        </Link>
        . Si el problema es que no quiere ni abrir el libro, sigue en{" "}
        <Link href="/lectoescritura/le-cuesta-leer-en-primero">
          le cuesta leer en primero
        </Link>
        .
      </p>
    </GuiaPage>
  );
}
