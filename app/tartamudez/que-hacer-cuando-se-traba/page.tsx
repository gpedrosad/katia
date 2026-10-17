import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/tartamudez/que-hacer-cuando-se-traba";
const TITLE = "Qué hacer cuando tu hijo se traba";
const DESCRIPTION =
  "En la mesa, al contar el día o al teléfono: cómo esperar el turno sin completar la frase ni pedirle que se apure. Orientación en Chillán.";

const faqs = [
  {
    question: "¿Le termino la palabra para ayudarlo?",
    answer:
      "Completarla le ahorra el momento y le enseña que alguien va a hablar por él. Mejor espera, con la mirada, y responde a lo que quiso decir cuando la frase sale.",
  },
  {
    question: "¿Le pido que hable más lento?",
    answer:
      "«Habla lento», «respira» o «piensa antes» suelen aumentar la presión. Puedes bajar tú el ritmo de tu propia habla, sin dárselo como instrucción.",
  },
  {
    question: "¿Esto reemplaza la terapia?",
    answer:
      "No. Es la forma de acompañar en casa. Si hay bloqueos, tensión o evitación, la evaluación de fluidez en Chillán define si hace falta un trabajo específico.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "qué hacer si mi hijo tartamudea",
    "se traba al hablar",
    "no completar las frases",
    "tartamudez consejos padres",
  ],
});

export default function QueHacerCuandoSeTrabaPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Tartamudez", href: "/tartamudez" },
        { label: "Cuando se traba", href: PATH },
      ]}
      eyebrow="Tartamudez"
      title="Qué hacer cuando se traba"
      lead="El momento incómodo dura unos segundos. Lo que dices ahí pesa más que un consejo general. Estas escenas son para la casa, no un plan de terapia."
      related={[
        { href: "/tartamudez", label: "Guías de tartamudez" },
        { href: "/sintomas/nino-tartamudea-chillan", label: "Cuándo evaluar en Chillán" },
        { href: "/guias-padres/cuando-el-hermano-habla-por-el", label: "Si el hermano habla por él" },
        { href: "/chillan/disfemia", label: "Disfemia en Chillán" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Qué hacer cuando tu hijo se traba al hablar",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía para cuando el niño se traba"
      ctaTitle="¿En casa ya no saben cómo acompañarlo?"
      ctaBody="Cuéntame la edad y una escena concreta: la once, el jardín o el teléfono. Vemos si corresponde evaluar la fluidez en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo se traba al hablar y quiero saber cómo acompañarlo. Evaluación en Chillán",
      )}
      ctaLabel="Pedir orientación"
      backHref="/tartamudez"
      backLabel="← Volver a tartamudez"
    >
      <h2>En la mesa</h2>
      <p>
        Si se traba pidiendo el agua, no le des el vaso «para que no sufra» ni
        le exijas la palabra perfecta. Espera. Cuando salga «agua», responde a
        eso. Si un hermano se adelanta siempre, la guía{" "}
        <Link href="/guias-padres/cuando-el-hermano-habla-por-el">
          cuando el hermano habla por él
        </Link>{" "}
        ordena cómo devolver el turno sin retar a quien quiere ayudar.
      </p>
      <h2>Cuando cuenta el día</h2>
      <p>
        Las preguntas en fila («¿qué hiciste?, ¿con quién?, ¿y después?»)
        apuran. Mejor una pregunta y silencio. Si se traba en el medio, no
        mires el reloj ni completes el nombre del amigo. Tu habla puede ir un
        poco más lenta. No se lo pidas a él como tarea.
      </p>
      <h2>Al teléfono o delante de visitas</h2>
      <p>
        Obligarlo a saludar o a recitar cuando ya está tenso empeora el
        momento. Puedes ofrecer el turno y aceptar un gesto si hoy no quiere
        hablar. La evaluación decide el trabajo; esta guía solo baja la
        presión. Las señales para pedir hora están en{" "}
        <Link href="/sintomas/nino-tartamudea-chillan">
          niño tartamudea
        </Link>{" "}
        y la atención en la ciudad en{" "}
        <Link href="/chillan/disfemia">disfemia en Chillán</Link>.
      </p>
      <p>
        Frases que sobran: «respira», «tú puedes», «habla bien». La página de
        síntoma ya las marca. Sustitúyelas por tiempo.
      </p>
    </GuiaPage>
  );
}
