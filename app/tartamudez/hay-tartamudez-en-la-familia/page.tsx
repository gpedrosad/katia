import Link from "next/link";
import { faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/tartamudez/hay-tartamudez-en-la-familia";
const TITLE = "Hay tartamudez en la familia: cuándo evaluar";
const DESCRIPTION =
  "Que haya tartamudez en la familia no decide el caso. Si además la fluidez va a más, con tensión o evitación, conviene evaluar en Chillán.";

const faqs = [
  {
    question: "¿La tartamudez se hereda?",
    answer:
      "Esta guía no pone un porcentaje ni un gen. Lo que sí está publicado es otra cosa: si hay antecedentes familiares y ves que la fluidez de tu hijo va a más, conviene evaluar. La historia de la familia no reemplaza lo que escuchas hoy.",
  },
  {
    question: "¿Y si a su papá se le pasó de niño?",
    answer:
      "Esa historia no decide la de tu hijo. Entre los 2 y los 5 años hay disfluencias que aflojan, sobre todo si repite la palabra entera sin tensión. Si en tu hijo hay bloqueos, esfuerzo o evita hablar, la evaluación mira su fluidez, no la del familiar.",
  },
  {
    question: "¿A qué edad hay que mirarlo?",
    answer:
      "El glosario habla de preescolar: si la tartamudez dura más de 6 meses, si evita hablar o si hay antecedentes y empeora. No hay una edad de corte distinta por tener familiares. Se mira la tensión, no el apellido.",
  },
  {
    question: "¿Es culpa de cómo le hablamos en la casa?",
    answer:
      "No. La disfemia es una alteración de la fluidez del habla. Lo que sí cambia el momento es la presión: completar la palabra o decirle «habla más lento». Mantén la calma y escucha hasta el final. La guía de la mesa explica cómo.",
  },
  {
    question: "¿Hay que evaluarlo solo porque un tío tartamudea?",
    answer:
      "No por el tío, solo. Pide hora si en tu hijo se junta el antecedente con señales: sonidos, bloqueos, tensión, evitación, más de 6 meses o que vaya a más. Si solo repite la palabra entera, sin esfuerzo, y tiene cerca de 3 años, parte por esa guía.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tartamudez en la familia",
    "antecedentes familiares de tartamudez",
    "tartamudez hereditaria",
    "mi hijo tartamudea como el papá",
    "tartamudez infantil Chillán",
  ],
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  inLanguage: "es-CL",
  datePublished: "2026-10-24",
  dateModified: "2026-10-24",
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

export default function TartamudezEnLaFamiliaPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Tartamudez", href: "/tartamudez" },
        { label: "En la familia", href: PATH },
      ]}
      eyebrow="Tartamudez"
      title={TITLE}
      lead="Que un familiar tartamudee no dice, por sí solo, que a tu hijo le va a pasar lo mismo. El glosario marca otra combinación: antecedentes familiares y que la fluidez vaya a más. Ahí conviene evaluar. No se promete que se le pase, ni se le echa la culpa a la casa."
      related={[
        { href: "/tartamudez", label: "Guías de tartamudez" },
        { href: "/glosario/disfemia", label: "Qué es la disfemia" },
        {
          href: "/tartamudez/empezo-a-tartamudear-de-repente",
          label: "Empezó a tartamudear de repente",
        },
        {
          href: "/tartamudez/que-hacer-cuando-se-traba",
          label: "Qué hacer cuando se traba",
        },
      ]}
      jsonLd={[articleJsonLd, faqJsonLd(faqs)]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía si hay tartamudez en la familia"
      ctaTitle="¿Hay antecedentes y lo escuchas ir a más?"
      ctaBody="Escribe la edad, quién en la familia tartamudea y si en tu hijo hay tensión o solo repite la palabra. Te oriento si corresponde evaluar en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, hay tartamudez en la familia y quiero saber si conviene evaluar a mi hijo en Chillán",
      )}
      ctaLabel="Consultar por WhatsApp"
      backHref="/tartamudez"
      backLabel="← Volver a tartamudez"
    >
      <h2>Qué sí cambia la decisión</h2>
      <p>
        El glosario de <Link href="/glosario/disfemia">disfemia</Link> no dice
        que todo niño con un familiar tartamudo tenga disfemia. Dice cuándo
        consultar: si dura más de 6 meses en preescolar, si evita hablar o se
        frustra, y si hay antecedentes familiares junto con un empeoramiento.
        Las tres se leen juntas con lo que tú escuchas, no como una sentencia.
      </p>
      <p>
        Entre los 2 y los 5 años hay disfluencias de esta etapa. Repetir la
        palabra entera, sin esfuerzo, no es lo mismo que trabarse en el sonido,
        alargar o bloquearse. Si tiene cerca de 3 años y solo pasa lo primero,
        la guía es{" "}
        <Link href="/tartamudez/repite-palabras-a-los-3">
          repite palabras a los 3 años
        </Link>
        .
      </p>

      <h2>Qué anotar, sin armar un diagnóstico</h2>
      <ul>
        <li>Quién en la familia tartamudea, y si fue de niño o sigue.</li>
        <li>Desde cuándo lo escuchas en tu hijo.</li>
        <li>
          Si va a más: más bloqueos, más tensión en la cara, más ganas de no
          hablar.
        </li>
        <li>
          Si evita palabras, la lectura en voz alta o contestar en el colegio.
          Esa escena está en{" "}
          <Link href="/tartamudez/se-traba-al-leer-en-el-colegio">
            se traba al leer en el colegio
          </Link>
          .
        </li>
      </ul>
      <p>
        Si apareció de un día para otro, suma la guía{" "}
        <Link href="/tartamudez/empezo-a-tartamudear-de-repente">
          empezó a tartamudear de repente
        </Link>
        . Ahí también se nombra el antecedente familiar cuando va a más. Esta
        página es la pregunta de la familia, no la del inicio brusco.
      </p>

      <h2>En la casa, la misma calma</h2>
      <p>
        El antecedente no cambia lo que ayuda en la mesa. No completes sus
        palabras y no le digas «habla más lento». Escucha hasta el final. El
        paso a paso está en{" "}
        <Link href="/tartamudez/que-hacer-cuando-se-traba">
          qué hacer cuando se traba
        </Link>
        . La disfemia no es un castigo por haberlo apurado un día. La presión
        de ese momento sí puede subir la tensión.
      </p>

      <h2>Cuándo pedir la hora en Chillán</h2>
      <p>
        Pide evaluación si el antecedente familiar se junta con bloqueos,
        esfuerzo, evitación, más de 6 meses o un empeoramiento. No la pidas
        solo porque un pariente tartamudeó, si en tu hijo no ves esas señales.
      </p>
      <p>
        La página local es{" "}
        <Link href="/sintomas/nino-tartamudea-chillan">
          mi hijo tartamudea en Chillán
        </Link>{" "}
        y las señales de la ciudad están en{" "}
        <Link href="/chillan/disfemia">disfemia en Chillán</Link>. Para la hora,{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agenda la evaluación
        </Link>
        .
      </p>
    </GuiaPage>
  );
}
