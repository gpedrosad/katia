import Link from "next/link";
import { faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/tartamudez/se-traba-al-leer-en-el-colegio";
const TITLE = "Se traba al leer en el colegio: qué hacer";
const DESCRIPTION =
  "Si se traba al leer en voz alta o al responder en clases, no completes la palabra ni le pidas que hable lento. Cuándo evaluar la fluidez en Chillán.";

const faqs = [
  {
    question: "¿Leer en voz alta delante del curso aumenta la tensión?",
    answer:
      "El turno en que todos esperan, o en que lo corrigen, es la presión que estas guías ya describen. Completar la palabra o decirle «habla más lento» la sube. Puedes pedir que ese momento no se use para corregirlo. La evaluación dice qué apoyo le acomoda en la sala.",
  },
  {
    question: "¿Lo saco de leer en público?",
    answer:
      "No hace falta una regla hecha en casa. Sí puedes acordar con la profesora que no le complete la frase y que no le haga repetir para que «salga bien». Si evita el turno, se bloquea o se le tensa la cara, eso se anota para la hora.",
  },
  {
    question: "¿Es lo mismo que no querer hablar en el jardín?",
    answer:
      "No. Esa guía es de un niño que en la sala casi no habla. Esta es de uno que sí habla, y el tropiezo aparece cuando le toca leer o responder. Si en el jardín se calla del todo, parte por esa página.",
  },
  {
    question: "¿Es lo mismo que empezó a tartamudear de repente?",
    answer:
      "No. Esa guía es del día en que lo notaste, de un momento a otro. Esta es de la sala de clases: la lectura en voz alta y la respuesta a la profesora. Pueden coincidir. Si además apareció de golpe, lee las dos.",
  },
  {
    question: "¿La tartamudez del colegio se le pasa sola?",
    answer:
      "No se puede prometer que se le pase. Entre los 2 y los 5 años hay disfluencias sin tensión. Si hay bloqueos, esfuerzo, evitación o lleva más de 6 meses, la evaluación orienta el trabajo de fluidez. Eso no es una cura garantizada.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tartamudez en el colegio",
    "se traba al leer en voz alta",
    "tartamudez al leer",
    "niño tartamudea en clases",
    "tartamudez Chillán",
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

export default function SeTrabaAlLeerPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Tartamudez", href: "/tartamudez" },
        { label: "Al leer en el colegio", href: PATH },
      ]}
      eyebrow="Tartamudez"
      title={TITLE}
      lead="Si se traba cuando lee en voz alta o cuando le toca responder, la sala se pone tensa. No completes la palabra y no le digas que hable más lento. Si hay bloqueos, esfuerzo o evita el turno, conviene evaluar la fluidez. No se promete que se le pase."
      related={[
        { href: "/tartamudez", label: "Guías de tartamudez" },
        {
          href: "/tartamudez/que-hacer-cuando-se-traba",
          label: "Qué hacer cuando se traba",
        },
        {
          href: "/tartamudez/no-quiere-hablar-en-el-jardin",
          label: "No quiere hablar en el jardín",
        },
        {
          href: "/tartamudez/empezo-a-tartamudear-de-repente",
          label: "Empezó a tartamudear de repente",
        },
      ]}
      jsonLd={[articleJsonLd, faqJsonLd(faqs)]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía si el niño se traba al leer en el colegio"
      ctaTitle="¿El tropiezo aparece en la sala?"
      ctaBody="Escribe la edad, si es al leer o al responder, y si en la casa también se traba. Te oriento si corresponde evaluar la fluidez en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo se traba al leer o al responder en el colegio y quiero saber si conviene evaluar en Chillán",
      )}
      ctaLabel="Consultar por WhatsApp"
      backHref="/tartamudez"
      backLabel="← Volver a tartamudez"
    >
      <h2>No es la guía del jardín</h2>
      <p>
        <Link href="/tartamudez/no-quiere-hablar-en-el-jardin">
          No quiere hablar en el jardín
        </Link>{" "}
        es otra escena: en la sala casi no habla, y la duda es timidez,
        cansancio o evitación. Aquí el niño sí habla. El tropiezo sale cuando
        le toca leer en voz alta, decir su nombre o contestar una pregunta. El
        índice está en <Link href="/tartamudez">las guías de tartamudez</Link>.
      </p>
      <p>
        Si lo notaste de un día para otro, no en el turno de lectura, la guía
        es{" "}
        <Link href="/tartamudez/empezo-a-tartamudear-de-repente">
          empezó a tartamudear de repente
        </Link>
        . Si en la mesa repite la palabra entera y tiene cerca de 3 años, parte
        por{" "}
        <Link href="/tartamudez/repite-palabras-a-los-3">
          repite palabras a los 3
        </Link>
        .
      </p>

      <h2>Qué puedes acordar con la profesora</h2>
      <p>
        En la casa, la guía{" "}
        <Link href="/tartamudez/que-hacer-cuando-se-traba">
          qué hacer cuando se traba
        </Link>{" "}
        ya dice cómo esperar sin apurarlo. En el colegio puedes pedir lo mismo,
        con ejemplos:
      </p>
      <ul>
        <li>Que lo dejen terminar, aunque la frase tarde.</li>
        <li>Que no le completen la palabra ni se la soplen en voz baja.</li>
        <li>Que no le digan «habla más lento» ni «respira y parte de nuevo».</li>
        <li>
          Que la lectura en voz alta no se use para corregirle la fluidez
          delante del curso.
        </li>
      </ul>
      <p>
        No es un plan escolar ni una adaptación escrita. Es la misma calma de
        la casa, contada a quien lo escucha en la sala. Si necesitas ejemplos
        para la educadora del jardín, sin etiquetas, mira{" "}
        <Link href="/guias-padres/que-contarle-a-la-educadora">
          qué contarle a la educadora
        </Link>
        .
      </p>

      <h2>Qué anotar antes de la hora</h2>
      <p>
        Tres escenas bastan. Una de lectura, una de respuesta corta y una de
        la casa. En cada una, marca si repite la palabra entera sin esfuerzo, o
        si se queda en un sonido, alarga («ssssí»), se bloquea o se le tensa la
        cara. El glosario de <Link href="/glosario/disfemia">disfemia</Link>{" "}
        separa esas formas. La repetición suave de la palabra completa, entre
        los 2 y los 5 años, no es lo mismo que el bloqueo.
      </p>
      <p>
        Si hay familiares que tartamudean y ves que en tu hijo va a más, la
        guía{" "}
        <Link href="/tartamudez/hay-tartamudez-en-la-familia">
          hay tartamudez en la familia
        </Link>{" "}
        dice qué cambia la decisión de evaluar. No pone un porcentaje ni una
        herencia cerrada.
      </p>

      <h2>Cuándo pedir la evaluación</h2>
      <p>
        Pide hora si repite sonidos, alarga un sonido, se bloquea, se le tensa
        la cara, evita leer o responder, o la situación lleva más de 6 meses.
        También si hay antecedentes familiares y la fluidez empeora. No hace
        falta esperar a que «en el colegio se le pase» cuando ya están esas
        señales.
      </p>
      <p>
        En Chillán, la página de síntoma es{" "}
        <Link href="/sintomas/nino-tartamudea-chillan">niño tartamudea</Link> y
        las señales locales están en{" "}
        <Link href="/chillan/disfemia">disfemia en Chillán</Link>. La hora se
        pide en{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agendar evaluación
        </Link>
        .
      </p>
    </GuiaPage>
  );
}
