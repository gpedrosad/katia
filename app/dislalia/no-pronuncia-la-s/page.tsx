import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/dislalia/no-pronuncia-la-s";
const TITLE = "Mi hijo no pronuncia la S: qué mirar";
const DESCRIPTION =
  "La ese que se cae o sale como otra consonante. Qué anotar junto con el resto del habla y cuándo evaluar en Chillán.";

const faqs = [
  {
    question: "¿Hay una edad única en la que la S «debe» estar?",
    answer:
      "En este sitio la referencia publicada es de conjunto: hacia los 4 años la mayoría de los sonidos del español suelen estar más consolidados, y algunos —como la erre fuerte— pueden llegar hacia los 5 o 6. La ese no tiene una página aparte con un número propio. Se mira junto con los demás sonidos y con cuánto se le entiende.",
  },
  {
    question: "¿Si solo falla la S, espero?",
    answer:
      "Un solo sonido, con un habla que se entiende, no es lo mismo que varios sonidos cambiados. Aun así, la evaluación confirma si es solo ese fonema. No hace falta entrenarlo en la casa mientras decides.",
  },
  {
    question: "¿Corregir la S en cada palabra ayuda?",
    answer:
      "Correr detrás de cada ese suele tensar. Puedes decir tú la palabra completa en la conversación. El trabajo del sonido, si hace falta, se hace en terapia.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "niño no pronuncia la s",
    "no dice la ese",
    "pronunciación de la s en niños",
    "dislalia Chillán",
  ],
});

export default function NoPronunciaLaSPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Dislalia", href: "/dislalia" },
        { label: "La S", href: PATH },
      ]}
      eyebrow="Dislalia"
      title="Mi hijo no pronuncia la S"
      lead="La ese se nota porque cambia palabras muy frecuentes. Antes de decidir si «ya debería decirla», mira si es el único sonido y si el resto de la frase se entiende."
      related={[
        { href: "/dislalia", label: "Guías de dislalia" },
        { href: "/preguntas/es-normal-no-pronunciar-la-r-a-los-4", label: "La erre a los 4 años" },
        { href: "/glosario/dislalia", label: "Qué es la dislalia" },
        { href: "/tratamientos/dislalia-infantil-chillan", label: "Tratamiento de dislalia" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Mi hijo no pronuncia la S",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía sobre la ese"
      ctaTitle="¿La ese es lo que más te preocupa?"
      ctaBody="Escribe la edad y una palabra de ejemplo. Si hay más sonidos, menciónalos. La hora es en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo no pronuncia bien la S y quiero una evaluación en Chillán",
      )}
      ctaLabel="Consultar la pronunciación"
      backHref="/dislalia"
      backLabel="← Volver a dislalia"
    >
      <p>
        «Tapo» por sapo, una ese que se escapa al final de la palabra o un
        sonido que sale entre los dientes: las familias lo describen de varias
        formas. Esta guía no te pide que clasifiques el error. Te pide que
        mires el contexto.
      </p>
      <h2>Una ese no es todo el habla</h2>
      <p>
        Anota si la ese es lo único que cambia y si una persona que no vive
        contigo entiende la frase. Si además se caen otros sonidos, la duda ya
        no es «la letra S». Puede parecerse a lo que se compara en{" "}
        <Link href="/comparaciones/dislalia-vs-trastorno-fonologico">
          dislalia y trastorno fonológico
        </Link>
        . El nombre lo pone la evaluación, no esta página.
      </p>
      <p>
        La erre tiene una orientación de edad publicada: puede consolidarse
        hacia los 5 o 6 años, y la pregunta está en{" "}
        <Link href="/preguntas/es-normal-no-pronunciar-la-r-a-los-4">
          la R a los 4
        </Link>
        . No copies ese plazo a la ese. Son sonidos distintos. Lo que sí se
        repite en el sitio es mirar el conjunto hacia los 4 y 5 años, cuando
        varios errores siguen y cuesta entender.
      </p>
      <h2>Qué llevar a la consulta</h2>
      <ul>
        <li>La edad.</li>
        <li>Dos palabras donde la ese cambia, escritas como las dice.</li>
        <li>Si hay otros sonidos.</li>
        <li>Si en el jardín ya lo comentaron.</li>
      </ul>
      <p>
        No hace falta practicar la ese toda la semana previa. El tratamiento,
        cuando corresponde, está descrito en{" "}
        <Link href="/tratamientos/dislalia-infantil-chillan">
          dislalia infantil en Chillán
        </Link>
        . La definición corta está en el{" "}
        <Link href="/glosario/dislalia">glosario</Link>.
      </p>
    </GuiaPage>
  );
}
