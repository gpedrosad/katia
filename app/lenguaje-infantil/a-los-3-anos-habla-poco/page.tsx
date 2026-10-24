import Link from "next/link";
import { faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/lenguaje-infantil/a-los-3-anos-habla-poco";
const TITLE = "A los 3 años habla poco: qué mirar";
const DESCRIPTION =
  "A los 3 años muchos niños arman oraciones que se entienden. Si sigue en palabras sueltas y no cuenta el día, mira cuándo evaluar en Chillán.";

const faqs = [
  {
    question: "¿A los 3 años ya debería armar oraciones?",
    answer:
      "La guía de hitos dice que alrededor de los 3 años muchos niños arman oraciones que personas de afuera entienden en gran parte. No es una frase larga de memoria. Si a esa edad sigue en etiquetas sueltas y no junta palabras, conviene evaluarlo.",
  },
  {
    question: "¿Y si entiende todo y habla poco?",
    answer:
      "Comprender y hablar son dos cosas distintas. Si señala, sigue lo cotidiano y aun así dice muy poco, la guía es «entiende, pero casi no habla». No es lo mismo que no entender instrucciones.",
  },
  {
    question: "¿Hay que esperar a los 4 años?",
    answer:
      "No. «Esperemos a los 4» no es una regla para todas las dudas. A los 3, palabras sueltas que no se juntan y que no cuentan el día ya son motivo para una evaluación. La pregunta de los 4 años está en su página.",
  },
  {
    question: "¿Cuántas palabras son «poco» a los 3?",
    answer:
      "Esta guía no inventa un número para los 3 años. La referencia publicada es de los 2: unas 50 palabras y frases de dos, como «mamá agua». A los 3, lo que se describe es la oración que ya se entiende, no una lista para contar en la casa.",
  },
  {
    question: "¿Es un retraso o un TEL?",
    answer:
      "Eso no se nombra desde esta página. Puede ser un retraso del lenguaje o un cuadro que la evaluación tiene que separar, como el TEL. La comparación de esos dos nombres está en su guía. La hora aclara cuál es el perfil.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "niño de 3 años habla poco",
    "mi hijo de 3 años no habla",
    "a los 3 años no arma oraciones",
    "habla poco a los 3 años",
    "lenguaje infantil Chillán",
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

export default function ALos3AnosHablaPocoPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lenguaje infantil", href: "/lenguaje-infantil" },
        { label: "A los 3 años", href: PATH },
      ]}
      eyebrow="Lenguaje infantil"
      title={TITLE}
      lead="A los 3 años muchos niños arman oraciones que personas de afuera entienden en gran parte. Si el tuyo sigue en palabras sueltas, no junta dos palabras o no cuenta lo que hizo en el día, esa pausa ya no es la de los 2 años. Conviene observarlo y, si se mantiene, evaluarlo."
      related={[
        { href: "/lenguaje-infantil", label: "Guías de lenguaje infantil" },
        {
          href: "/recursos/hitos-del-lenguaje-por-edad",
          label: "A qué edad hablan los niños",
        },
        {
          href: "/lenguaje-infantil/dice-palabras-y-no-frases",
          label: "Dice palabras y no arma frases",
        },
        {
          href: "/sintomas/hijo-habla-poco-edad-chillan",
          label: "Habla poco para su edad",
        },
      ]}
      jsonLd={[articleJsonLd, faqJsonLd(faqs)]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía si a los 3 años habla poco"
      ctaTitle="¿A los 3 sigue en palabras sueltas?"
      ctaBody="Escríbeme la edad exacta y tres ejemplos de cómo pide algo: la palabra sola, dos juntas, o una oración corta. Con eso veo si corresponde evaluar en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo de 3 años habla poco y quiero saber si conviene evaluar en Chillán",
      )}
      ctaLabel="Consultar por los 3 años"
      backHref="/lenguaje-infantil"
      backLabel="← Volver a lenguaje infantil"
    >
      <h2>No es la guía de las dos palabras</h2>
      <p>
        <Link href="/lenguaje-infantil/dice-palabras-y-no-frases">
          Dice palabras y no arma frases
        </Link>{" "}
        mira el paso de la etiqueta a «más agua» o «mamá ven». La referencia de
        esas dos palabras está hacia los 2 años, en{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">
          a qué edad hablan los niños
        </Link>
        . Esta página es la siguiente: ya tiene 3, y el lenguaje sigue corto.
      </p>
      <p>
        Si todavía no dice ninguna palabra y está cerca de los 18 meses, la
        guía es{" "}
        <Link href="/lenguaje-infantil/nino-de-18-meses-no-habla">
          18 meses y todavía no habla
        </Link>
        . Si las palabras salen recortadas y solo la familia las descifra, mira{" "}
        <Link href="/lenguaje-infantil/habla-como-bebe">habla como bebé</Link>.
      </p>

      <h2>Qué mirar en la casa a los 3</h2>
      <ul>
        <li>
          Si junta dos palabras con sentido, aunque la oración todavía no
          salga.
        </li>
        <li>
          Si cuenta algo del día, aunque sea corto: el jardín, la comida, un
          auto. La señal publicada a los 3 años es justo esa: solo etiquetas, y
          no cuenta lo que hizo.
        </li>
        <li>
          Si pide señalando y el adulto pone la palabra. Cómo ofrecerla sin
          convertir el día en una clase está en{" "}
          <Link href="/guias-padres/de-los-gestos-a-las-palabras">
            de los gestos a las palabras
          </Link>
          .
        </li>
        <li>
          Si entiende lo cotidiano. Si no sigue instrucciones simples, la duda
          ya no es solo «habla poco»: mira{" "}
          <Link href="/sintomas/nino-no-entiende-instrucciones-chillan">
            no entiende instrucciones
          </Link>
          .
        </li>
      </ul>

      <h2>Comprender no reemplaza el habla</h2>
      <p>
        Hay niños que señalan, traen lo que les pides y aun así dicen muy poco.
        Eso está en{" "}
        <Link href="/lenguaje-infantil/entiende-pero-no-habla">
          entiende, pero casi no habla
        </Link>
        . No le pongas un nombre por ese contraste. Sí anótalo: la evaluación
        separa comprensión y expresión.
      </p>
      <p>
        Si el hermano responde por él, o si en la casa ya traducen todo, esas
        escenas tienen su guía:{" "}
        <Link href="/guias-padres/cuando-el-hermano-habla-por-el">
          cuando el hermano habla por él
        </Link>
        . No explican solas el lenguaje, y sí cambian cuánto lo escuchas.
      </p>

      <h2>Cuándo evaluar en Chillán</h2>
      <p>
        Pide hora si a los 3 años sigue en palabras sueltas, no junta dos, no
        cuenta el día o la familia y el jardín no lo entienden. No esperes a
        los 4 como regla. La pregunta de esa espera está en{" "}
        <Link href="/preguntas/hay-que-esperar-a-los-4-anos">
          ¿hay que esperar a los 4 años?
        </Link>
        .
      </p>
      <p>
        La página de síntoma, con la fila de los 3 años, es{" "}
        <Link href="/sintomas/hijo-habla-poco-edad-chillan">
          habla poco para su edad
        </Link>
        . El tratamiento local del retraso está en{" "}
        <Link href="/tratamientos/retraso-del-lenguaje-chillan">
          retraso del lenguaje en Chillán
        </Link>
        , y la diferencia con el TEL en{" "}
        <Link href="/comparaciones/tel-vs-retraso-del-lenguaje">
          TEL vs retraso del lenguaje
        </Link>
        . La hora es la{" "}
        <Link href="/servicios/evaluacion-fonoaudiologica">
          evaluación fonoaudiológica
        </Link>
        .
      </p>
    </GuiaPage>
  );
}
