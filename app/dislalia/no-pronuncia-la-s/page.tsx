import Link from "next/link";
import { faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/dislalia/no-pronuncia-la-s";
const TITLE = "Mi hijo no pronuncia la S: ¿es normal y cuándo consultar?";
const DESCRIPTION =
  "Si tu hijo no pronuncia la S, mira si es el único sonido y si se le entiende. No hay una edad única para la ese. Cuándo pedir evaluación en Chillán.";
const H1 = "Mi hijo no pronuncia la S";

const faqs = [
  {
    question: "¿Es normal que mi hijo no pronuncie la S?",
    answer:
      "Puede pasar, y en este sitio no hay una edad única para la ese. Se mira si es el único sonido y si el resto de la frase se entiende. Hacia los 4 años la mayoría de los sonidos del español suele estar más consolidada. La erre fuerte puede llegar hacia los 5 o 6, y ese plazo no se copia a la ese.",
  },
  {
    question: "¿Cuándo consultar si no dice la S?",
    answer:
      "Conviene consultar si la ese se junta con otros sonidos, si cuesta entenderlo fuera de casa o si el jardín ya lo comentó. Si es el único cambio y el habla se entiende, puedes anotarlo sin entrenarlo en la casa. La evaluación confirma si es solo ese fonema.",
  },
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
    "es normal no pronunciar la s",
    "pronunciación de la s en niños",
    "dislalia Chillán",
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

export default function NoPronunciaLaSPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Dislalia", href: "/dislalia" },
        { label: "La S", href: PATH },
      ]}
      eyebrow="Dislalia"
      title={H1}
      lead="No hay, en este sitio, una edad en la que la S tenga que estar sí o sí. Hacia los 4 años la mayoría de los sonidos del español suele estar más consolidada, y la erre fuerte puede llegar hacia los 5 o 6: ese plazo no es el de la ese. Si es el único sonido y se le entiende, anótalo; si hay más sonidos o cuesta entenderlo, conviene una evaluación fonoaudiológica."
      related={[
        { href: "/dislalia", label: "Guías de dislalia" },
        { href: "/preguntas/es-normal-no-pronunciar-la-r-a-los-4", label: "La erre a los 4 años" },
        { href: "/glosario/dislalia", label: "Qué es la dislalia" },
        { href: "/tratamientos/dislalia-infantil-chillan", label: "Tratamiento de dislalia" },
      ]}
      jsonLd={[articleJsonLd, faqJsonLd(faqs)]}
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
        No hace falta practicar la ese toda la semana previa. Si corresponde
        trabajarla, el{" "}
        <Link href="/tratamientos/dislalia-infantil-chillan">
          tratamiento de la dislalia en Chillán
        </Link>{" "}
        describe esa hora. Antes, la{" "}
        <Link href="/servicios/evaluacion-fonoaudiologica">
          evaluación fonoaudiológica
        </Link>{" "}
        confirma si es solo la ese. La definición corta está en el{" "}
        <Link href="/glosario/dislalia">glosario</Link>.
      </p>
    </GuiaPage>
  );
}
