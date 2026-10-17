import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/dislalia/cambia-sonidos-al-hablar";
const TITLE = "Cambia los sonidos al hablar: qué anotar";
const DESCRIPTION =
  "Si dice «tasa» por casa o cambia varias consonantes, anota ejemplos reales. Cómo distinguir un sonido de un patrón y cuándo evaluar.";

const faqs = [
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
    "dice tasa por casa",
    "sustituye letras al hablar",
    "trastorno fonológico niños",
  ],
});

export default function CambiaSonidosPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Dislalia", href: "/dislalia" },
        { label: "Cambia sonidos", href: PATH },
      ]}
      eyebrow="Dislalia"
      title="Cambia los sonidos al hablar"
      lead="Una palabra cambiada se puede contar en la once. Varias palabras con el mismo cambio ya son un patrón. Anótalo así, sin ponerle nombre todavía."
      related={[
        { href: "/dislalia", label: "Guías de dislalia" },
        {
          href: "/comparaciones/dislalia-vs-trastorno-fonologico",
          label: "Dislalia vs fonológico",
        },
        { href: "/tratamientos/trastorno-fonologico-chillan", label: "Trastorno fonológico" },
        { href: "/sintomas/nino-pronuncia-mal-chillan", label: "Pronuncia mal" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Cambia los sonidos al hablar",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
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
        explica el trabajo presencial. Si parece un sonido aislado, sigue en{" "}
        <Link href="/tratamientos/dislalia-infantil-chillan">
          tratamiento de dislalia
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
