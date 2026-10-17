import Link from "next/link";
import { TARTAMUDEZ_ARTICULOS } from "./articulos";
import { GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/tartamudez";
const TITLE = "Tartamudez infantil: guías para padres";
const DESCRIPTION =
  "Guías para padres: repeticiones a los 3 años, qué hacer cuando se traba y si no quiere hablar en el jardín. Evaluación en Chillán.";

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  ogType: "website",
  keywords: [
    "tartamudez infantil",
    "niño se traba al hablar",
    "disfluencia en niños",
    "tartamudez Chillán",
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
  hasPart: TARTAMUDEZ_ARTICULOS.map((item) => ({
    "@type": "Article",
    name: item.title,
    description: item.summary,
    url: `${SITE_URL}${item.href}`,
  })),
};

export default function TartamudezHubPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Tartamudez", href: PATH },
      ]}
      eyebrow="Tartamudez"
      title="Tartamudez infantil: guías para padres"
      lead="Se traba, repite o evita hablar. Estas guías ordenan qué escuchar y cómo acompañarlo. La página de síntoma en Chillán sigue siendo el lugar para pedir la evaluación de fluidez."
      related={[
        { href: "/sintomas/nino-tartamudea-chillan", label: "Niño tartamudea en Chillán" },
        { href: "/chillan/disfemia", label: "Disfemia en Chillán" },
        { href: "/glosario/disfemia", label: "Qué es la disfemia" },
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga infantil" },
      ]}
      jsonLd={[collectionJsonLd]}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guías de tartamudez"
      ctaTitle="¿Quieres que escuchemos cómo se traba?"
      ctaBody="Cuéntame la edad y si repite la palabra entera o se queda pegado en un sonido. La atención es presencial en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo se traba al hablar y quiero una evaluación en Chillán",
      )}
      ctaLabel="Consultar por la fluidez"
      showBackLink={false}
    >
      <p>
        La guía local{" "}
        <Link href="/sintomas/nino-tartamudea-chillan">
          tartamudez en niños de 2 a 3 años
        </Link>{" "}
        ya distingue repetir palabras enteras, sin tensión, de trabarse en el
        sonido. Estas páginas no la reemplazan: bajan eso a la mesa, al jardín
        y a lo que tú dices cuando ocurre.
      </p>
      <h2>Elige la guía</h2>
      <ul>
        {TARTAMUDEZ_ARTICULOS.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>. {item.summary}
          </li>
        ))}
      </ul>
      <p>
        El nombre clínico que usa el glosario es{" "}
        <Link href="/glosario/disfemia">disfemia</Link>. La atención en la
        ciudad está en <Link href="/chillan/disfemia">disfemia en Chillán</Link>.
      </p>
    </GuiaPage>
  );
}
