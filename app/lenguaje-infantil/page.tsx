import Link from "next/link";
import { LENGUAJE_ARTICULOS } from "./articulos";
import { articleJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/lenguaje-infantil";
const TITLE = "Lenguaje infantil: guías para padres";
const DESCRIPTION =
  "Guías para padres: 18 meses sin hablar, entiende y no habla, habla como bebé o no arma frases. Orientación y evaluación en Chillán.";

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  ogType: "website",
  keywords: [
    "lenguaje infantil",
    "mi hijo no habla",
    "desarrollo del lenguaje",
    "fonoaudióloga infantil Chillán",
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
  hasPart: LENGUAJE_ARTICULOS.map((item) => ({
    "@type": "Article",
    name: item.title,
    description: item.summary,
    url: `${SITE_URL}${item.href}`,
  })),
};

export default function LenguajeInfantilPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lenguaje infantil", href: PATH },
      ]}
      eyebrow="Lenguaje infantil"
      title="Lenguaje infantil: guías para padres"
      lead="Cuatro dudas que se repiten cuando el habla de tu hijo no se parece a la de otros niños de su edad. Cada guía observa una situación. La evaluación en Chillán mira a tu hijo, no a la guía."
      related={[
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga infantil en Chillán" },
        { href: "/servicios/terapia-lenguaje-infantil", label: "Terapia de lenguaje infantil" },
        { href: "/recursos/hitos-del-lenguaje-por-edad", label: "Hitos del lenguaje por edad" },
        { href: "/preguntas", label: "Preguntas de padres" },
      ]}
      jsonLd={[
        collectionJsonLd,
        articleJsonLd({
          path: PATH,
          headline: "Lenguaje infantil: guías para padres",
          description: DESCRIPTION,
        }),
      ]}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga de lenguaje infantil en Chillán"
      ctaTitle="¿Reconoces a tu hijo en alguna guía?"
      ctaBody="Escribe la edad y qué te llama la atención. Con eso vemos si corresponde una evaluación presencial en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, leí las guías de lenguaje infantil y quiero orientación sobre mi hijo",
      )}
      ctaLabel="Escribir por WhatsApp"
      showBackLink={false}
    >
      <p>
        Estas páginas no reemplazan la tabla de{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">hitos por edad</Link>{" "}
        ni las landings de síntoma en Chillán. Sirven para nombrar la duda con
        más precisión: no es lo mismo un niño de 18 meses sin palabras que uno
        que entiende todo y dice poco, o uno que tiene palabras y no las junta.
      </p>
      <h2>Elige la guía</h2>
      <ul>
        {LENGUAJE_ARTICULOS.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>. {item.summary}
          </li>
        ))}
      </ul>
      <h2>Si ya quieres la hora en Chillán</h2>
      <p>
        La página de{" "}
        <Link href="/servicios/terapia-lenguaje-infantil">
          terapia de lenguaje infantil
        </Link>{" "}
        explica el trabajo presencial. Si la duda es de pronunciación, sigue en{" "}
        <Link href="/dislalia">dislalia</Link>. Si se traba al hablar, en{" "}
        <Link href="/tartamudez">tartamudez</Link>. Si ya está en básica y la
        lectura se atasca, en <Link href="/lectoescritura">lectoescritura</Link>.
      </p>
    </GuiaPage>
  );
}
