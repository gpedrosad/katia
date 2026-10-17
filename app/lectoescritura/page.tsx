import Link from "next/link";
import { LECTOESCRITURA_ARTICULOS } from "./articulos";
import { GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/lectoescritura";
const TITLE = "Lectoescritura: guías para padres";
const DESCRIPTION =
  "Guías para padres: confunde letras al leer, escribe al revés o le cuesta primero básico. Sin diagnóstico casero. Evaluación en Chillán.";

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  ogType: "website",
  keywords: [
    "lectoescritura",
    "problemas para leer",
    "confunde letras",
    "lectoescritura Chillán",
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
  hasPart: LECTOESCRITURA_ARTICULOS.map((item) => ({
    "@type": "Article",
    name: item.title,
    description: item.summary,
    url: `${SITE_URL}${item.href}`,
  })),
};

export default function LectoescrituraHubPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lectoescritura", href: PATH },
      ]}
      eyebrow="Lectoescritura"
      title="Lectoescritura: guías para padres"
      lead="Leer y escribir se traban de formas distintas. Estas guías te ayudan a describir lo que ves. No diagnostican dislexia desde la casa."
      related={[
        { href: "/servicios/dificultades-lectoescritura", label: "Dificultades de lectoescritura" },
        { href: "/chillan/lectoescritura", label: "Lectoescritura en Chillán" },
        { href: "/chillan/dislexia", label: "Dislexia en Chillán" },
        { href: "/servicios/conciencia-fonologica-chillan", label: "Conciencia fonológica" },
      ]}
      jsonLd={[collectionJsonLd]}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guías de lectoescritura"
      ctaTitle="¿La lectura ya es una pelea?"
      ctaBody="Dime el curso y qué pasa cuando lee una línea: si confunde letras, adivina o se niega. La evaluación es presencial en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, tengo dudas de lectura o escritura de mi hijo y quiero evaluar en Chillán",
      )}
      ctaLabel="Consultar por lectoescritura"
      showBackLink={false}
    >
      <p>
        El servicio{" "}
        <Link href="/servicios/dificultades-lectoescritura">
          dificultades de lectoescritura
        </Link>{" "}
        y las páginas de{" "}
        <Link href="/chillan/lectoescritura">Chillán</Link> y de{" "}
        <Link href="/chillan/dislexia">dislexia</Link> explican la evaluación
        local. Aquí el foco es la duda del padre: la letra, el espejo o el
        primero básico.
      </p>
      <h2>Elige la guía</h2>
      <ul>
        {LECTOESCRITURA_ARTICULOS.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>. {item.summary}
          </li>
        ))}
      </ul>
      <p>
        Si todavía no lee y la pregunta es de sonidos, parte por{" "}
        <Link href="/servicios/conciencia-fonologica-chillan">
          conciencia fonológica
        </Link>{" "}
        o por <Link href="/dislalia">dislalia</Link>. El lenguaje oral y la
        lectura se tocan; no son la misma consulta.
      </p>
    </GuiaPage>
  );
}
