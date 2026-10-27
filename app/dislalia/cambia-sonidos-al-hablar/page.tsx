import Link from "next/link";
import { faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/dislalia/cambia-sonidos-al-hablar";
const TITLE = "Cambia sonidos o el orden de las palabras al hablar";
const DESCRIPTION =
  "Cambiar un sonido («tasa» por casa) no es lo mismo que cambiar el orden de las palabras al hablar. Qué anotar y cuándo evaluar en Chillán.";
const H1 = "Cambia los sonidos al hablar";

const faqs = [
  {
    question: "¿Cambiar el orden de las palabras al hablar es cambiar sonidos?",
    answer:
      "No. Cambiar un sonido es «tasa» por casa. Cambiar el orden de las palabras es que la frase se arme distinto, aunque cada sonido se entienda. Anótalos en listas separadas. El nombre lo confirma la evaluación.",
  },
  {
    question: "¿Qué anoto si cambia el orden de la frase?",
    answer:
      "La frase que quería decir y la frase que dijo. Si además cambia consonantes, escríbelo aparte. Hacia los 4 años la mayoría de los fonemas del español suele estar más consolidada. El orden de las palabras no se mide con ese plazo.",
  },
  {
    question: "¿«Tasa» por casa es dislalia?",
    answer:
      "Es un ejemplo clásico de un sonido que se sustituye. Puede quedar en un fonema o formar parte de un patrón más amplio. La comparación entre dislalia y trastorno fonológico explica la diferencia. El nombre se confirma en la evaluación.",
  },
  {
    question: "¿Le hago repetir la palabra bien?",
    answer:
      "Pedirle que la repita bien, una y otra vez, suele frustrar. Di tú la palabra dentro de la frase y sigue la conversación. La página sobre corregir cuando habla mal desarrolla esa idea.",
  },
  {
    question: "¿A qué edad deja de ser esperable?",
    answer:
      "Hacia los 4 años la mayoría de los fonemas del español suelen estar más consolidados. Si después de los 4 o 5 años hay varios errores y cuesta entenderlo, conviene evaluar. Algunos sonidos, como la erre fuerte, pueden llegar más tarde.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "cambia los sonidos al hablar",
    "cambiar el orden de las palabras al hablar",
    "dice tasa por casa",
    "sustituye letras al hablar",
    "trastorno fonológico niños",
  ],
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  inLanguage: "es-CL",
  datePublished: "2026-10-17",
  dateModified: "2026-10-27",
  author: {
    "@type": "Person",
    name: "Katia Domínguez",
    url: `${SITE_URL}/sobre-katia-dominguez-fonoaudiologa-chillan`,
  },
  publisher: {
    "@type": "Organization",
    name: "Katia Domínguez - Fonoaudióloga",
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PATH}`,
  },
  url: `${SITE_URL}${PATH}`,
};

export default function CambiaSonidosPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Dislalia", href: "/dislalia" },
        { label: "Cambia sonidos", href: PATH },
      ]}
      eyebrow="Dislalia"
      title={H1}
      lead="Cambiar un sonido, como «tasa» por casa, no es lo mismo que cambiar el orden de las palabras en la frase. Anota qué quería decir y qué dijo. Si el ejemplo se repite o no se le entiende, conviene una evaluación fonoaudiológica."
      related={[
        { href: "/dislalia", label: "Guías de dislalia" },
        {
          href: "/comparaciones/dislalia-vs-trastorno-fonologico",
          label: "Dislalia vs fonológico",
        },
        { href: "/tratamientos/trastorno-fonologico-chillan", label: "Trastorno fonológico" },
        { href: "/sintomas/nino-pronuncia-mal-chillan", label: "Pronuncia mal" },
      ]}
      jsonLd={[articleJsonLd, faqJsonLd(faqs)]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía de sonidos cambiados"
      ctaTitle="¿Los ejemplos ya son varios?"
      ctaBody="Mándame la edad y tres palabras tal como las dice. En Chillán la evaluación parte por eso, no por un ensayo en casa."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo cambia sonidos al hablar y quiero una evaluación en Chillán",
      )}
      ctaLabel="Pedir evaluación del habla"
      backHref="/dislalia"
      backLabel="← Volver a dislalia"
    >
      <h2>El orden de las palabras es otra duda</h2>
      <p>
        Si la frase sale en otro orden y los sonidos se entienden, no lo anotes
        como una consonante. Escribe la frase que quería decir y la que dijo.
        Esta página no le pone nombre: lo separa la{" "}
        <Link href="/servicios/evaluacion-fonoaudiologica">
          evaluación fonoaudiológica
        </Link>
        . Si las palabras todavía no se juntan, esa escena está en{" "}
        <Link href="/lenguaje-infantil/dice-palabras-y-no-frases">
          dice palabras, pero no arma frases
        </Link>
        .
      </p>
      <p>
        «Tasa» por casa es un ejemplo que casi todas las familias reconocen. A
        veces es el único cambio y el resto de la frase se entiende. A veces
        el mismo tipo de cambio aparece en muchas palabras y una persona nueva
        se pierde. Esas dos escenas no se leen igual.
      </p>
      <h2>Qué escribir, palabra por palabra</h2>
      <ul>
        <li>La palabra que quería decir.</li>
        <li>Lo que realmente dijo.</li>
        <li>Si el cambio se repite en otras palabras parecidas.</li>
        <li>Si omite el sonido, lo cambia o lo deforma.</li>
      </ul>
      <p>
        Con esa lista, la{" "}
        <Link href="/comparaciones/dislalia-vs-trastorno-fonologico">
          comparación entre dislalia y trastorno fonológico
        </Link>{" "}
        se lee con tus ejemplos encima, no en abstracto. Si el patrón es
        amplio, la página de{" "}
        <Link href="/tratamientos/trastorno-fonologico-chillan">
          trastorno fonológico en Chillán
        </Link>{" "}
        explica el trabajo presencial. Si parece un sonido aislado, sigue en el{" "}
        <Link href="/tratamientos/dislalia-infantil-chillan">
          tratamiento de la dislalia en Chillán
        </Link>
        .
      </p>
      <h2>Mientras tanto en la casa</h2>
      <p>
        No conviertas cada frase en una corrección. La guía{" "}
        <Link href="/preguntas/conviene-corregir-cuando-habla-mal">
          ¿conviene corregir cuando habla mal?
        </Link>{" "}
        dice por qué modelar funciona mejor. Si además solo lo entienden en
        casa, lee{" "}
        <Link href="/dislalia/lo-entienden-en-casa-no-afuera">
          lo entienden en casa y no afuera
        </Link>
        .
      </p>
    </GuiaPage>
  );
}
