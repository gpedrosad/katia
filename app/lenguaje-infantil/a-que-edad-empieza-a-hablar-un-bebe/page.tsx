import Link from "next/link";
import { faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/lenguaje-infantil/a-que-edad-empieza-a-hablar-un-bebe";
const TITLE = "¿A qué edad empieza a hablar un bebé?";
const DESCRIPTION =
  "Las primeras palabras, como «mamá» o «agua», salen entre los 11 y 14 meses. Antes: balbuceo y gestos. Si a los 18 meses no hay ninguna, evalúa en Chillán.";

const faqs = [
  {
    question: "¿El balbuceo ya es hablar?",
    answer:
      "No. Balbucear con entonación y usar gestos viene antes. Hablar, en esta guía, es decir palabras con significado, como «mamá» o «agua». El balbuceo muestra que está en el camino. No reemplaza la palabra.",
  },
  {
    question: "¿Entre qué meses salen las primeras palabras?",
    answer:
      "Entre los 11 y los 14 meses. Algunos bebés dicen la primera a los 10 meses y otros a los 15. Si a los 15–18 meses no hay ninguna palabra con significado, la guía de hitos recomienda consultar.",
  },
  {
    question: "¿Qué se espera cerca de los 12 meses?",
    answer:
      "La referencia publicada es de 1 o 2 palabras con significado, como «mamá», «papá» o «agua». También responde al nombre, comprende «no» y usa gestos para pedir o saludar. No hace falta una lista larga.",
  },
  {
    question: "¿Cuándo conviene consultar?",
    answer:
      "Si a los 18 meses no dice ninguna palabra con significado, conviene consultar. También si no responde al nombre de forma consistente o no muestra intención de comunicarse: gestos, balbuceo o contacto visual. No esperes a los 3 años para recién mirarlo.",
  },
  {
    question: "¿Y si ya tiene 3 años y habla poco?",
    answer:
      "Esa ya no es la etapa del bebé. A los 3 años la referencia publicada es la oración que se entiende, no las primeras palabras. Esa duda está en la guía de los 3 años. La tabla de todas las edades sigue en los hitos.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "a qué edad empieza a hablar un bebé",
    "a qué edad empiezan a hablar los bebés",
    "primeras palabras del bebé",
    "balbuceo y primeras palabras",
    "cuándo consultar si el bebé no habla",
  ],
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  inLanguage: "es-CL",
  datePublished: "2026-10-25",
  dateModified: "2026-10-25",
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

export default function AQueEdadEmpiezaAHablarUnBebePage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lenguaje infantil", href: "/lenguaje-infantil" },
        { label: "Primeras palabras", href: PATH },
      ]}
      eyebrow="Lenguaje infantil"
      title={TITLE}
      lead="Un bebé empieza a hablar con palabras con significado, como «mamá» o «agua», entre los 11 y los 14 meses. Antes balbucea con entonación y usa gestos. Algunos dicen la primera a los 10 meses y otros a los 15. Si a los 18 meses no hay ninguna, conviene consultar."
      related={[
        { href: "/lenguaje-infantil", label: "Guías de lenguaje infantil" },
        {
          href: "/recursos/hitos-del-lenguaje-por-edad",
          label: "A qué edad hablan los niños",
        },
        {
          href: "/lenguaje-infantil/nino-de-18-meses-no-habla",
          label: "18 meses y todavía no habla",
        },
        {
          href: "/agendar-hora-fonoaudiologo-infantil-chillan",
          label: "Agendar la evaluación",
        },
      ]}
      jsonLd={[articleJsonLd, faqJsonLd(faqs)]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía de a qué edad empieza a hablar un bebé"
      ctaTitle="¿Tu bebé todavía no dice palabras?"
      ctaBody="Escríbeme los meses que tiene y cómo pide algo: si balbucea, si señala, o si ya dice «mamá» o «agua». Con eso veo si corresponde evaluar en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, quiero saber si mi bebé ya debería decir sus primeras palabras y si conviene evaluar en Chillán",
      )}
      ctaLabel="Consultar por las primeras palabras"
      backHref="/lenguaje-infantil"
      backLabel="← Volver a lenguaje infantil"
    >
      <h2>Balbuceo, gestos y la primera palabra</h2>
      <p>
        Antes de las palabras, el bebé balbucea con entonación, imita sonidos y
        usa gestos para pedir o saludar. Eso es comunicación. Todavía no es
        hablar. Hablar, aquí, es decir una palabra con significado: «mamá»,
        «papá», «agua», «no» o el nombre de algo que pide.
      </p>
      <p>
        Esa etapa es solo el comienzo. Las frases de dos palabras hacia los 2
        años y las oraciones hacia los 3 están en{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">
          a qué edad hablan los niños
        </Link>
        . Esta página no repite esa tabla.
      </p>

      <h2>Cuándo esperar las primeras palabras</h2>
      <p>
        Las primeras palabras con significado suelen aparecer entre los 11 y
        los 14 meses. Algunos bebés dicen la primera a los 10 meses y otros a
        los 15. No hay una sola edad correcta.
      </p>
      <p>
        Cerca de los 12 meses, la referencia publicada es de 1 o 2 palabras con
        significado. A esa edad también suele responder a su nombre, comprender
        «no» o «adiós» y señalar lo que quiere. Si solo balbucea y aún no dice
        ninguna, todavía estás dentro de esa ventana. Anota un ejemplo real de
        la semana, no un «no habla nada» general.
      </p>

      <h2>Cuándo consultar</h2>
      <p>
        Si a los 15–18 meses no dice ninguna palabra con significado, conviene
        consultar. A los 18 meses, si sigue sin ninguna, ya no es una duda para
        dejar pasar. La misma señal está en{" "}
        <Link href="/lenguaje-infantil/nino-de-18-meses-no-habla">
          18 meses y todavía no habla
        </Link>
        : mira también si señala, si gira al nombre y si entiende «ven» o «no».
      </p>
      <p>
        Otra señal, publicada para los 12 meses, es que no responda al nombre
        de forma consistente o que no muestre intención de comunicarse: gestos,
        balbuceo o contacto visual. No hace falta llegar con un conteo exacto
        de palabras.
      </p>
      <p>
        Si ya tiene 3 años y sigue en palabras sueltas, la guía es{" "}
        <Link href="/lenguaje-infantil/a-los-3-anos-habla-poco">
          a los 3 años habla poco
        </Link>
        . Si lo que buscas es el tratamiento en Chillán, está en{" "}
        <Link href="/tratamientos/retraso-del-lenguaje-chillan">
          retraso del lenguaje en Chillán
        </Link>
        . La hora se pide en{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agendar la evaluación
        </Link>
        .
      </p>
    </GuiaPage>
  );
}
