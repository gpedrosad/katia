import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/tartamudez/no-quiere-hablar-en-el-jardin";
const TITLE = "No quiere hablar en el jardín: qué mirar";
const DESCRIPTION =
  "Si en el jardín se calla y en casa habla, puede ser timidez, cansancio o evitación. Qué preguntarle a la educadora, sin poner un diagnóstico.";

const faqs = [
  {
    question: "¿Si habla en casa, el jardín está exagerando?",
    answer:
      "No necesariamente. Hay niños que hablan con la familia y se quedan en silencio con el grupo. Eso merece una conversación con la educadora y, si se mantiene o viene con trabas, una evaluación. No es un diagnóstico por sí solo.",
  },
  {
    question: "¿Le exijo que salude al llegar?",
    answer:
      "Forzar el saludo delante de todos suele cerrarlo más. Puedes saludar tú, quedarte un minuto y dejar que entre al juego. El habla puede aparecer cuando baja la audiencia.",
  },
  {
    question: "¿Esto es tartamudez?",
    answer:
      "Callarse no es lo mismo que trabarse. Si además hay repeticiones o bloqueos, mira la guía de tartamudez en Chillán. Si solo hay silencio en el jardín y un habla suelta en casa, cuéntalo así en la evaluación, sin adelantar el nombre.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "no habla en el jardín",
    "habla en casa y no en el colegio",
    "niño callado en la sala",
    "evita hablar",
  ],
});

export default function NoQuiereHablarJardinPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Tartamudez", href: "/tartamudez" },
        { label: "En el jardín", href: PATH },
      ]}
      eyebrow="Tartamudez"
      title="No quiere hablar en el jardín"
      lead="En la casa conversa. En la sala, la educadora dice que casi no abre la boca. Antes de ponerle un nombre, junta lo que pasa en los dos lugares."
      related={[
        { href: "/tartamudez", label: "Guías de tartamudez" },
        { href: "/preguntas/habla-en-casa-y-calla-en-el-jardin", label: "Habla en casa y calla afuera" },
        { href: "/preguntas/el-jardin-me-derivo-a-fonoaudiologia", label: "Si el jardín te derivó" },
        { href: "/sintomas/nino-tartamudea-chillan", label: "Si además se traba" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "No quiere hablar en el jardín",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía de silencio en el jardín"
      ctaTitle="¿El silencio del jardín ya te preocupa?"
      ctaBody="Cuéntame si en casa habla, si se traba y qué te dijo la educadora. Vemos si corresponde evaluar en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo habla en casa y en el jardín casi no habla. Quiero orientación en Chillán",
      )}
      ctaLabel="Consultar por WhatsApp"
      backHref="/tartamudez"
      backLabel="← Volver a tartamudez"
    >
      <p>
        Un niño puede estar tímido las primeras semanas de sala y después
        entrar al juego. Otra cosa es que pasen los meses, participe en
        silencio y en casa el habla sea distinta: suelta, trabada o muy corta.
        No le pongas tú el diagnóstico. Describe los dos contextos.
      </p>
      <h2>Qué preguntarle a la educadora</h2>
      <ul>
        <li>¿Habla con algún compañero o con ningún adulto?</li>
        <li>¿Pide con gestos, o no pide?</li>
        <li>¿Se traba cuando intenta, o directamente no intenta?</li>
        <li>¿Desde cuándo lo observa?</li>
      </ul>
      <p>
        Si el jardín ya te derivó, la página{" "}
        <Link href="/preguntas/el-jardin-me-derivo-a-fonoaudiologia">
          qué hago si el jardín me derivó
        </Link>{" "}
        explica cómo usar esa observación sin tomarla como diagnóstico. Si el
        contraste casa/sala es la duda principal, está también en{" "}
        <Link href="/preguntas/habla-en-casa-y-calla-en-el-jardin">
          habla en casa y calla en el jardín
        </Link>
        .
      </p>
      <h2>Si además se traba</h2>
      <p>
        Ahí sí cruza con fluidez. No lo obligues a «practicar» delante del
        grupo. Lee{" "}
        <Link href="/tartamudez/que-hacer-cuando-se-traba">
          qué hacer cuando se traba
        </Link>{" "}
        y, para la hora en Chillán,{" "}
        <Link href="/sintomas/nino-tartamudea-chillan">niño tartamudea</Link>.
        Llega con lo que dijo la educadora y con un ejemplo de cómo habla en
        la cocina.
      </p>
    </GuiaPage>
  );
}
