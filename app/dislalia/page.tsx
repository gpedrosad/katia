import Link from "next/link";
import { DISLALIA_ARTICULOS } from "./articulos";
import { GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/dislalia";
const TITLE = "Dislalia: guías para padres";
const DESCRIPTION =
  "Guías de pronunciación para padres: la S, sonidos que cambian y un habla que solo se entiende en casa. Evaluación en Chillán.";

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  ogType: "website",
  keywords: [
    "dislalia",
    "pronunciación infantil",
    "mi hijo pronuncia mal",
    "dislalia Chillán",
  ],
});

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}${PATH}#collection`,
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  inLanguage: "es-CL",
  hasPart: DISLALIA_ARTICULOS.map((item) => ({
    "@type": "Article",
    name: item.title,
    description: item.summary,
    url: `${SITE_URL}${item.href}`,
  })),
};

export default function DislaliaHubPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Dislalia", href: PATH },
      ]}
      eyebrow="Dislalia"
      title="Dislalia: guías para padres"
      lead="La pronunciación se consulta de a un sonido o porque nadie fuera de la casa entiende. Estas guías separan esas dudas. El tratamiento en Chillán sigue en su propia página."
      related={[
        { href: "/glosario/dislalia", label: "Qué es la dislalia" },
        { href: "/tratamientos/dislalia-infantil-chillan", label: "Tratamiento en Chillán" },
        { href: "/chillan/dislalia", label: "Señales de dislalia en Chillán" },
        {
          href: "/comparaciones/dislalia-vs-trastorno-fonologico",
          label: "Dislalia vs trastorno fonológico",
        },
      ]}
      jsonLd={[collectionJsonLd]}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guías de dislalia"
      ctaTitle="¿La pronunciación ya te preocupa?"
      ctaBody="Escribe la edad y un ejemplo de palabra, tal como la dice. No hace falta que entrenen el sonido antes de la hora."
      whatsappHref={whatsappUrl(
        "Hola, tengo dudas de pronunciación de mi hijo y quiero evaluar en Chillán",
      )}
      ctaLabel="Consultar la pronunciación"
      showBackLink={false}
    >
      <p>
        Si la duda es solo la erre a los 4 años, esa pregunta ya está respondida
        en{" "}
        <Link href="/preguntas/es-normal-no-pronunciar-la-r-a-los-4">
          ¿es normal que no pronuncie la R a los 4?
        </Link>
        . Aquí van otras tres situaciones que las familias describen distinto.
      </p>
      <h2>Elige la guía</h2>
      <ul>
        {DISLALIA_ARTICULOS.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>. {item.summary}
          </li>
        ))}
      </ul>
      <p>
        La definición breve está en el{" "}
        <Link href="/glosario/dislalia">glosario</Link>. El tratamiento
        presencial está en{" "}
        <Link href="/tratamientos/dislalia-infantil-chillan">
          dislalia infantil en Chillán
        </Link>
        . Si quieres comparar con un patrón de varios sonidos, lee{" "}
        <Link href="/comparaciones/dislalia-vs-trastorno-fonologico">
          dislalia y trastorno fonológico
        </Link>
        .
      </p>
    </GuiaPage>
  );
}
