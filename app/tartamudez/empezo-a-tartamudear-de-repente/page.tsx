import Link from "next/link";
import { faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/tartamudez/empezo-a-tartamudear-de-repente";
const TITLE = "Empezó a tartamudear de repente: qué hacer";
const DESCRIPTION =
  "Si empezó a tartamudear de repente, mantén la calma: no completes sus palabras ni le digas que hable lento. Señales para evaluar la fluidez en Chillán.";

const faqs = [
  {
    question: "¿La tartamudez tiene cura?",
    answer:
      "No se puede prometer que se le pase. Entre los 2 y los 5 años hay disfluencias que aflojan, sobre todo si repite la palabra entera sin tensión. Si hay bloqueos, esfuerzo o evita hablar, la evaluación orienta el trabajo de fluidez. Eso no es una cura garantizada.",
  },
  {
    question: "¿Es por algo que hicimos?",
    answer:
      "Esta guía no le echa la culpa a la familia. La disfemia es una alteración de la fluidez del habla, no un castigo por haberlo retado o apurado un día. Lo que sí cambia el momento es la presión: completar la palabra o decirle «habla más lento» la aumenta. Mantén la calma y escucha hasta el final.",
  },
  {
    question: "¿Por qué un niño empieza a tartamudear de repente?",
    answer:
      "En preescolar la fluidez puede cambiar de una semana a otra, y la familia lo nota un día concreto. Notarlo de golpe no dice, por sí solo, si es una disfluencia de esta etapa o algo que conviene evaluar. La diferencia la hace lo que escuchas: palabra entera sin tensión, o sonido, bloqueo y esfuerzo.",
  },
  {
    question: "¿Cuándo llevarlo a la fonoaudióloga?",
    answer:
      "Pide hora si repite sonidos, alarga un sonido, se bloquea, se le tensa la cara, evita hablar o la situación lleva más de 6 meses. También si hay antecedentes familiares y ves que va a más. No hace falta esperar a que «se le pase solo» cuando ya están esas señales.",
  },
  {
    question: "¿Es lo mismo que repetir palabras a los 3 años?",
    answer:
      "No. Esa guía es de una edad y de un tipo de repetición: la palabra entera, sin esfuerzo. Esta es del momento en que lo notaste, a la edad que tenga en preescolar. Si tiene cerca de 3 años y solo repite la palabra completa, parte por esa página y vuelve aquí si aparece tensión.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "empezó a tartamudear de repente",
    "por qué un niño empieza a tartamudear",
    "mi hijo empezó a tartamudear",
    "tartamudez infantil",
    "tartamudez Chillán",
  ],
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  inLanguage: "es-CL",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
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

export default function EmpezoATartamudearPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Tartamudez", href: "/tartamudez" },
        { label: "De repente", href: PATH },
      ]}
      eyebrow="Tartamudez"
      title={TITLE}
      lead="Entre los 2 y los 5 años pueden aparecer disfluencias, y a veces la familia las nota de un día para otro. Mantén la calma, no completes sus palabras y no le digas «habla más lento». Si hay tensión, bloqueos o evita hablar, conviene una evaluación de fluidez. No se promete que se le pase."
      related={[
        { href: "/tartamudez", label: "Guías de tartamudez" },
        { href: "/tartamudez/repite-palabras-a-los-3", label: "Repite palabras a los 3" },
        { href: "/tartamudez/que-hacer-cuando-se-traba", label: "Qué hacer cuando se traba" },
        { href: "/glosario/disfemia", label: "Qué es la disfemia" },
      ]}
      jsonLd={[articleJsonLd, faqJsonLd(faqs)]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía si el niño empezó a tartamudear de repente"
      ctaTitle="¿Lo notaste de un día para otro?"
      ctaBody="Escribe la edad, desde cuándo lo escuchas y si hay tensión en la cara. Te oriento si corresponde evaluar la fluidez en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo empezó a tartamudear de repente y quiero saber si conviene evaluar en Chillán",
      )}
      ctaLabel="Consultar por WhatsApp"
      backHref="/tartamudez"
      backLabel="← Volver a tartamudez"
    >
      <h2>No es la guía de los 3 años</h2>
      <p>
        <Link href="/tartamudez/repite-palabras-a-los-3">
          Repite palabras a los 3 años
        </Link>{" "}
        responde una escena concreta: la misma palabra dos veces, sin esfuerzo,
        a esa edad. Aquí la pregunta es otra. «Ayer hablaba fluido y hoy se
        traba.» Puede pasar en el jardín, no solo a los 3. El índice de estas
        guías está en <Link href="/tartamudez">tartamudez</Link>.
      </p>
      <h2>Por qué puede notarse de golpe</h2>
      <p>
        El glosario de <Link href="/glosario/disfemia">disfemia</Link> dice que
        en niños pequeños la tartamudez puede aparecer de forma evolutiva.
        Entre los 2 y los 5 años hay disfluencias de esta etapa. Que tú la
        hayas escuchado un martes no explica la causa ni le pone el nombre. No
        hace falta buscar un susto o un error de la casa para que la fluidez
        cambie.
      </p>
      <p>
        Lo que sí puedes anotar, sin cronómetro, es cómo se traba: si repite la
        palabra entera y la frase llega, o si se queda en el sonido, alarga una
        letra o se queda en silencio con la boca trabada. Esa diferencia ya
        está en{" "}
        <Link href="/sintomas/nino-tartamudea-chillan">
          tartamudez en niños en Chillán
        </Link>
        .
      </p>
      <h2>Qué hacer en la casa ese día</h2>
      <ul>
        <li>Mantén la calma. Tu cara le dice si el momento es un problema.</li>
        <li>No completes sus palabras ni hables por él.</li>
        <li>
          No le digas «habla más lento», «respira» ni «piensa antes». Puedes
          bajar tú el ritmo de tu propia habla, sin dárselo como tarea.
        </li>
        <li>Responde a lo que quiso decir cuando la frase sale.</li>
      </ul>
      <p>
        Las escenas de la mesa, el relato del día y el teléfono están en{" "}
        <Link href="/tartamudez/que-hacer-cuando-se-traba">
          qué hacer cuando se traba
        </Link>
        . Si además en el jardín se calla, lee{" "}
        <Link href="/tartamudez/no-quiere-hablar-en-el-jardin">
          no quiere hablar en el jardín
        </Link>
        .
      </p>
      <h2>Cuándo pedir la evaluación</h2>
      <p>
        Consulta si hay repeticiones de sonidos, prolongaciones, bloqueos,
        tensión en la cara o si evita hablar. La guía local también marca una
        duración mayor a 6 meses, y el glosario agrega antecedentes familiares
        con un empeoramiento. No esperes a cumplir una edad redonda si esas
        señales ya están.
      </p>
      <p>
        La atención en la ciudad está en{" "}
        <Link href="/chillan/disfemia">disfemia en Chillán</Link>. La hora se
        pide en{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agendar evaluación en Chillán
        </Link>
        .
      </p>
    </GuiaPage>
  );
}
