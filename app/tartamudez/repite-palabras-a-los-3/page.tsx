import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/tartamudez/repite-palabras-a-los-3";
const TITLE = "Repite palabras a los 3 años: qué es";
const DESCRIPTION =
  "A los 3 años, repetir la palabra entera sin tensión no es lo mismo que trabarse en el sonido. Qué escuchar y cuándo evaluar en Chillán.";

const faqs = [
  {
    question: "¿«Yo yo quiero» es tartamudez?",
    answer:
      "En la guía de síntoma de Chillán, repetir la palabra entera sin esfuerzo suele describirse como una disfluencia de esta etapa. Si hay tensión, bloqueo o repetición del sonido, ya no es el mismo cuadro. La evaluación lo confirma.",
  },
  {
    question: "¿Se lo hago notar?",
    answer:
      "No. Comentarle «te estás trabando» pone el habla en el centro de la presión. Escucha hasta el final y responde al contenido.",
  },
  {
    question: "¿Cuándo dejo de observar y pido hora?",
    answer:
      "Si aparecen repeticiones de sonidos, la cara se tensa, evita hablar o la situación lleva meses sin aflojar, pide evaluación. La guía local menciona como alerta una duración mayor a 6 meses junto con esas señales.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "repite palabras a los 3 años",
    "tartamudez a los 3 años",
    "disfluencia normal",
    "niño se traba Chillán",
  ],
});

export default function RepitePalabrasPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Tartamudez", href: "/tartamudez" },
        { label: "Repite a los 3", href: PATH },
      ]}
      eyebrow="Tartamudez"
      title="Repite palabras a los 3 años"
      lead="A esta edad muchas familias escuchan la misma palabra dos veces. Antes de asustarte o de restarle importancia, distingue qué está repitiendo y si hay esfuerzo."
      related={[
        { href: "/tartamudez", label: "Guías de tartamudez" },
        { href: "/sintomas/nino-tartamudea-chillan", label: "Tartamudez en Chillán" },
        { href: "/tartamudez/que-hacer-cuando-se-traba", label: "Qué hacer cuando se traba" },
        { href: "/glosario/disfemia", label: "Disfemia" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Repite palabras a los 3 años",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía de repeticiones al hablar"
      ctaTitle="¿No sabes si es solo una repetición?"
      ctaBody="Describe un ejemplo tal como lo dijo, y si viste tensión en la cara. Te oriento si corresponde evaluar en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo de unos 3 años repite palabras y quiero saber si conviene evaluar en Chillán",
      )}
      ctaLabel="Consultar por WhatsApp"
      backHref="/tartamudez"
      backLabel="← Volver a tartamudez"
    >
      <p>
        «Yo yo quiero pan» puede salir fácil, sin que la cara se apriete, y la
        frase llega al final. «P-p-pan» o un silencio con la boca trabada es
        otra escena. La página{" "}
        <Link href="/sintomas/nino-tartamudea-chillan">
          niño tartamudea en Chillán
        </Link>{" "}
        usa esa diferencia: palabra entera sin tensión, frente a sonido, bloqueo
        o esfuerzo.
      </p>
      <h2>Qué escuchar esta semana</h2>
      <ul>
        <li>Si repite la palabra completa o solo el primer sonido.</li>
        <li>Si parpadea, aprieta la boca o mueve el cuerpo para «sacar» la frase.</li>
        <li>Si pasa en calma o solo cuando lo apuran o hay público.</li>
        <li>Si deja de intentar y señala en vez de hablar.</li>
      </ul>
      <p>
        No necesitas contar las repeticiones con un cronómetro. Tres ejemplos
        escritos alcanzan para la primera conversación. Si la situación se
        mantiene y aparecen las señales de esfuerzo, no la archives como «cosa
        de los 3 años». La guía local habla de consultar cuando hay tensión o
        cuando lleva más de 6 meses.
      </p>
      <h2>Cómo responder en el momento</h2>
      <p>
        Espera el final. No completes la palabra. No le digas que respire o que
        hable lento. El detalle de las escenas —la mesa, el relato del día—
        está en{" "}
        <Link href="/tartamudez/que-hacer-cuando-se-traba">
          qué hacer cuando se traba
        </Link>
        . Si además en el jardín se calla, lee{" "}
        <Link href="/tartamudez/no-quiere-hablar-en-el-jardin">
          no quiere hablar en el jardín
        </Link>
        .
      </p>
    </GuiaPage>
  );
}
