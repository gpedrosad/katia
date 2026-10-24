import Link from "next/link";
import { faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/lectoescritura/el-colegio-dice-dislexia";
const TITLE = "El colegio dice dislexia: qué evaluar";
const DESCRIPTION =
  "Que el colegio diga dislexia no es el diagnóstico. Qué mira la evaluación de lectura y de lenguaje oral, y cuándo pedir hora en Chillán.";

const faqs = [
  {
    question: "¿La fonoaudióloga diagnostica la dislexia en la primera hora?",
    answer:
      "La evaluación mira las bases del lenguaje oral y cómo lee: conciencia fonológica, vocabulario y comprensión. El diagnóstico formal de dislexia se hace con evaluaciones especializadas. El informe documenta lo que se vio. No reemplaza ese estudio si el colegio pide el nombre.",
  },
  {
    question: "¿Confundir la b y la d ya es dislexia?",
    answer:
      "No por una letra. Confundir b y d, p y q, o saltarse palabras tiene su guía, y escribir una letra al revés al empezar tampoco cierra el nombre. Si la lectura no despega en primero o segundo, pese al apoyo, ahí la duda ya es de lectoescritura.",
  },
  {
    question: "¿Y si pronuncia mal y además lee con esfuerzo?",
    answer:
      "Pueden coincidir, y no son el mismo cuadro. La dislalia es del habla. La dislexia es de la lectura. La comparación está en su página. La evaluación dice qué está en juego en tu hijo, sin mezclar los nombres en la casa.",
  },
  {
    question: "¿A qué edad el colegio suele decir esa palabra?",
    answer:
      "El glosario sitúa la sospecha entre los 6 y los 8 años, en primero o segundo básico, si la lectura no despega pese al apoyo. En preescolar puede haber señales de riesgo. Eso no es un diagnóstico hecho en la sala ni en la casa.",
  },
  {
    question: "¿El informe del colegio sale de esta evaluación?",
    answer:
      "Si el colegio pide un informe, se escribe después de ver a tu hijo. Sirve para orientar el apoyo o el PIE. No promete un beneficio ni un lugar. El detalle del papel está en la página del informe y en la pregunta de cuando el colegio lo pide.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "el colegio dice que tiene dislexia",
    "sospecha de dislexia",
    "dislexia primero básico",
    "evaluación de dislexia",
    "lectoescritura Chillán",
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

export default function ColegioDiceDislexiaPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lectoescritura", href: "/lectoescritura" },
        { label: "El colegio dice dislexia", href: PATH },
      ]}
      eyebrow="Lectoescritura"
      title={TITLE}
      lead="Que la profesora diga «puede ser dislexia» no es el diagnóstico. La dislexia es una dificultad específica para aprender a leer, no una falta de esfuerzo ni de inteligencia. La evaluación mira el lenguaje oral y cómo lee. El nombre formal queda en evaluaciones especializadas."
      related={[
        { href: "/lectoescritura", label: "Guías de lectoescritura" },
        {
          href: "/comparaciones/dislexia-vs-dislalia",
          label: "Dislexia vs dislalia",
        },
        { href: "/glosario/dislexia", label: "Qué es la dislexia" },
        {
          href: "/lectoescritura/le-cuesta-leer-en-primero",
          label: "Le cuesta leer en primero",
        },
      ]}
      jsonLd={[articleJsonLd, faqJsonLd(faqs)]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía si el colegio habla de dislexia"
      ctaTitle="¿El colegio usó la palabra dislexia?"
      ctaBody="Escribe el curso, qué te dijeron de la lectura y si también hay una duda de pronunciación. Te oriento si corresponde evaluar en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, el colegio dice que mi hijo puede tener dislexia y quiero una evaluación en Chillán",
      )}
      ctaLabel="Pedir la evaluación"
      backHref="/lectoescritura"
      backLabel="← Volver a lectoescritura"
    >
      <h2>La palabra del colegio no cierra el nombre</h2>
      <p>
        En primero básico, leer lento, adivinar o evitar el texto es la escena
        de{" "}
        <Link href="/lectoescritura/le-cuesta-leer-en-primero">
          le cuesta leer en primero
        </Link>
        . Esa guía ya dice que no es un diagnóstico de dislexia hecho en casa.
        Esta es el paso siguiente: alguien del colegio usó la palabra, y tú
        quieres saber qué se evalúa de verdad.
      </p>
      <p>
        La definición breve está en el{" "}
        <Link href="/glosario/dislexia">glosario de dislexia</Link>: dificultad
        específica para aprender a leer, de origen neurobiológico, muchas veces
        apoyada en el lenguaje oral. No se debe a falta de inteligencia ni de
        esfuerzo.
      </p>

      <h2>Qué mira la evaluación</h2>
      <p>
        La fonoaudióloga revisa conciencia fonológica, vocabulario y
        comprensión oral, y cómo se ve la lectura en esa edad. La conciencia
        fonológica en Chillán tiene su página:{" "}
        <Link href="/servicios/conciencia-fonologica-chillan">
          conciencia fonológica
        </Link>
        . El servicio de lectura es{" "}
        <Link href="/servicios/dificultades-lectoescritura">
          dificultades de lectoescritura
        </Link>{" "}
        y las señales de la ciudad están en{" "}
        <Link href="/chillan/dislexia">dislexia en Chillán</Link>.
      </p>
      <p>
        Si el colegio pide un papel, se redacta después de ver a tu hijo. La
        pregunta está en{" "}
        <Link href="/preguntas/el-colegio-pidio-un-informe">
          el colegio pidió un informe
        </Link>
        . Si además hablan de PIE,{" "}
        <Link href="/preguntas/el-pie-reemplaza-la-terapia">
          el PIE no reemplaza la terapia particular
        </Link>
        .
      </p>

      <h2>No la confundas con la pronunciación</h2>
      <p>
        A veces el colegio junta «no se le entiende» con «le cuesta leer». Son
        dudas distintas. La comparación{" "}
        <Link href="/comparaciones/dislexia-vs-dislalia">
          dislexia vs dislalia
        </Link>{" "}
        separa el habla de la lectoescritura. Pueden presentarse juntas. Quién
        lo distingue es la evaluación, no el comentario de la reunión.
      </p>
      <p>
        Una letra que se confunde al leer tiene su guía:{" "}
        <Link href="/lectoescritura/confunde-letras-al-leer">
          confunde letras al leer
        </Link>
        . Escribirla al revés al empezar, también:{" "}
        <Link href="/lectoescritura/escribe-letras-al-reves">
          escribe letras al revés
        </Link>
        . Ninguna de las dos, sola, pone el nombre de dislexia.
      </p>

      <h2>Edades que ya están publicadas</h2>
      <ul>
        <li>
          En preescolar puede haber señales de riesgo. Eso no es un
          diagnóstico.
        </li>
        <li>
          La sospecha suele aparecer entre los 6 y los 8 años, en primero o
          segundo básico, si la lectura no despega pese al apoyo.
        </li>
        <li>
          Si evita leer o se frustra con la tarea, el glosario lo marca como
          motivo para consultar, junto con antecedentes de lenguaje oral.
        </li>
      </ul>
      <p>
        Si todavía estás en la duda de la edad del habla, y no de la lectura,
        la tabla está en{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">
          a qué edad hablan los niños
        </Link>
        . Para pedir la hora de lectura y lenguaje,{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agenda la evaluación en Chillán
        </Link>
        .
      </p>
    </GuiaPage>
  );
}
