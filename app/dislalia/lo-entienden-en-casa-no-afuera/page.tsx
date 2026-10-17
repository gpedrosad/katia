import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/dislalia/lo-entienden-en-casa-no-afuera";
const TITLE = "Lo entienden en casa y no afuera";
const DESCRIPTION =
  "Si la familia traduce y afuera no lo siguen, la claridad del habla ya es un tema. Qué observar y cómo pedir evaluación en Chillán.";

const faqs = [
  {
    question: "¿Que yo lo entienda significa que habla bien?",
    answer:
      "Significa que ya conoces sus palabras. Una persona que no vive contigo no tiene ese diccionario. Si ella no lo sigue, la inteligibilidad está baja aunque en casa la once funcione.",
  },
  {
    question: "¿El jardín exagera?",
    answer:
      "La educadora lo escucha en otro ruido y con otras personas. Su comentario no es un diagnóstico. Sí es un dato: fuera de casa cuesta entenderlo. Llévalo a la evaluación junto con tus ejemplos.",
  },
  {
    question: "¿Hay que esperar a los 6 años?",
    answer:
      "No como regla. Si ya cuesta entenderlo fuera de casa, la edad no es un motivo para postergar la mirada. Algunos sonidos maduran más tarde; un habla poco clara en conjunto no se explica solo con eso.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "no se le entiende fuera de casa",
    "solo lo entendemos nosotros",
    "habla poco claro",
    "inteligibilidad del habla",
  ],
});

export default function CasaNoAfueraPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Dislalia", href: "/dislalia" },
        { label: "Solo en casa", href: PATH },
      ]}
      eyebrow="Dislalia"
      title="Lo entienden en casa y no afuera"
      lead="Ustedes ya traducen. El tío, la educadora o el niño del edificio piden que lo repita. Esa diferencia importa más que el nombre del sonido."
      related={[
        { href: "/dislalia", label: "Guías de dislalia" },
        { href: "/sintomas/mi-hijo-no-habla-bien-chillan", label: "No habla bien" },
        { href: "/sintomas/nino-pronuncia-mal-chillan", label: "Pronuncia mal" },
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga en Chillán" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Lo entienden en casa y no afuera",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía de habla poco clara"
      ctaTitle="¿Afuera piden que repita?"
      ctaBody="Cuéntame la edad y en qué situación se pierde: el jardín, la calle o una visita. Coordinamos la evaluación en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, a mi hijo lo entendemos en casa y afuera no. Quiero evaluar en Chillán",
      )}
      ctaLabel="Pedir hora por WhatsApp"
      backHref="/dislalia"
      backLabel="← Volver a dislalia"
    >
      <p>
        La familia cercana aprende el código: sabe que «ato» es gato y que un
        gesto cierra la frase. Eso alivia el día y esconde la dificultad. La
        prueba sencilla es otra persona, sin pistas tuyas, en un momento
        tranquilo.
      </p>
      <h2>Una prueba de una tarde, sin examen</h2>
      <ul>
        <li>Pídele a alguien que no vive contigo que le pregunte algo concreto.</li>
        <li>No traduzcas la primera vez. Espera.</li>
        <li>Anota si hizo falta repetir, señalar o que tú completes.</li>
        <li>Compara con cómo pide lo mismo en la cocina.</li>
      </ul>
      <p>
        Si afuera se pierde, no estás frente a una manía de pronunciación
        menor. Estás frente a un habla poco clara para quien no conoce al niño.
        Las páginas{" "}
        <Link href="/sintomas/nino-pronuncia-mal-chillan">pronuncia mal</Link> y{" "}
        <Link href="/sintomas/mi-hijo-no-habla-bien-chillan">no habla bien</Link>{" "}
        recogen esa consulta en Chillán. Si los cambios son de varios sonidos,
        entra también a{" "}
        <Link href="/dislalia/cambia-sonidos-al-hablar">
          cambia los sonidos al hablar
        </Link>
        .
      </p>
      <h2>Qué no decirle</h2>
      <p>
        «Habla bien, que no te entienden» aumenta la presión y no le enseña el
        sonido. Mejor: tú dices la frase clara y sigues la actividad. El
        detalle está en{" "}
        <Link href="/preguntas/conviene-corregir-cuando-habla-mal">
          si conviene corregir
        </Link>
        . La hora con{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          Katia Domínguez en Chillán
        </Link>{" "}
        parte de tus ejemplos, no de un habla ensayada.
      </p>
    </GuiaPage>
  );
}
