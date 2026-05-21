import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje";
const WHATSAPP_LINK = whatsappUrl(
  "Hola, quiero evaluar si mi hijo tiene retraso del habla o del lenguaje"
);

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Retraso del Habla vs Retraso del Lenguaje | Diferencias",
  description:
    "Diferencias entre retraso del habla y retraso del lenguaje: señales, ejemplos y cuándo conviene evaluar a tu hijo en Chillán.",
  keywords: [
    "retraso del habla vs retraso del lenguaje",
    "diferencia retraso del habla y lenguaje",
    "habla poco vs lenguaje",
  ],
  ogType: "article",
});

const faqs = [
  {
    question: "¿Hablar poco significa retraso del lenguaje?",
    acceptedAnswer:
      "No siempre. Hablar poco puede deberse a un retraso del lenguaje (pocas palabras, frases cortas, comprensión reducida) o a un retraso del habla (sabe qué decir pero le cuesta pronunciar con claridad). La evaluación fonoaudiológica diferencia si el foco está en vocabulario y estructura o en la producción de sonidos.",
  },
  {
    question: "¿Pronunciar mal significa retraso del habla?",
    acceptedAnswer:
      "Pronunciar mal o con poca claridad suele orientar hacia dificultades del habla: omisiones de sílabas, sustitución de sonidos o habla difícil de entender. No descarta un retraso del lenguaje si además hay vocabulario limitado o problemas de comprensión; ambos pueden coexistir.",
  },
  {
    question: "¿Pueden coexistir ambos problemas?",
    acceptedAnswer:
      "Sí. Un niño puede tener poco vocabulario y frases cortas (lenguaje) y, al mismo tiempo, producir sonidos de forma imprecisa (habla). En esos casos el plan de intervención suele combinar estimulación del lenguaje y terapia del habla según prioridades definidas en la evaluación.",
  },
  {
    question: "¿Qué evaluación conviene pedir primero?",
    acceptedAnswer:
      "Una evaluación fonoaudiológica integral es el punto de partida: revisa comprensión, expresión, articulación y perfil auditivo. Según los resultados, se profundiza en evaluación del lenguaje o del habla. En Chillán puedes agendar una primera cita para orientar el camino.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Retraso del habla vs retraso del lenguaje: qué cambia y cuándo consultar",
  description:
    "Comparación para padres entre retraso del habla y retraso del lenguaje infantil, señales, evaluación y recursos en Chillán.",
  author: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  publisher: {
    "@type": "Organization",
    name: "Katia Domínguez - Fonoaudióloga",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_PATH}`,
  },
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.acceptedAnswer },
  })),
};

const comparisonRows = [
  {
    aspect: "Qué está afectado",
    habla: "Producción de sonidos, articulación y claridad al hablar.",
    lenguaje:
      "Vocabulario, estructura de frases, comprensión y uso del lenguaje para comunicarse.",
  },
  {
    aspect: "Cómo suena el niño",
    habla: "Palabras incompletas, sonidos cambiados u omitidos; a veces «sabe» lo que quiere decir pero no se le entiende.",
    lenguaje:
      "Pocas palabras, frases muy cortas o mensajes simples; puede sonar «más pequeño» de lo que es por edad.",
  },
  {
    aspect: "Comprensión",
    habla: "A menudo comprende instrucciones y situaciones; el problema principal es hacerse entender al hablar.",
    lenguaje:
      "Puede costarle seguir instrucciones, entender preguntas o participar en conversaciones más largas.",
  },
  {
    aspect: "Ejemplos típicos",
    habla: 'Dice «tato» por «gato», omite sílabas («ato») o sustituye sonidos de forma constante.',
    lenguaje:
      'A los 3 años usa pocas palabras, no arma frases de 3–4 palabras o mezcla gestos con pocas palabras.',
  },
  {
    aspect: "Impacto escolar",
    habla: "Dificultad para que maestros y pares entiendan lo que dice; puede evitar leer en voz alta o participar oralmente.",
    lenguaje:
      "Problemas para seguir consignas, narrar experiencias o preparar la lectoescritura por vocabulario limitado.",
  },
  {
    aspect: "Evaluación recomendada",
    habla: "Evaluación del habla infantil, análisis de sonidos y descarte auditivo según el caso.",
    lenguaje:
      "Evaluación del lenguaje infantil, pruebas de comprensión y expresión, seguimiento de hitos.",
  },
];

export default function RetrasoHablaVsRetrasoLenguajePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Glosario", href: "/glosario" },
                { label: "Retraso del habla vs lenguaje" },
              ]}
            />

            <article className="prose prose-rose lg:prose-lg max-w-none">
              <h1 className="text-4xl font-extrabold text-gray-900">
                Retraso del habla vs retraso del lenguaje: qué cambia y cuándo
                consultar
              </h1>
              <p className="lead text-lg text-gray-700" data-speakable>
                No son lo mismo. El{" "}
                <strong>retraso del habla</strong> se relaciona sobre todo con
                cómo suenan las palabras: claridad, sonidos y articulación. El{" "}
                <strong>retraso del lenguaje</strong> tiene que ver con
                comprender y usar el lenguaje: vocabulario, frases e
                instrucciones. Un niño puede tener uno, el otro o ambos; esta
                guía te ayuda a distinguirlos sin confundirlos con otros
                trastornos.
              </p>

              <h2>Tabla comparativa</h2>
              <div className="not-prose overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-rose-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-gray-900">
                        Aspecto
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-rose-800">
                        Retraso del habla
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-rose-800">
                        Retraso del lenguaje
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {comparisonRows.map((row) => (
                      <tr key={row.aspect}>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          {row.aspect}
                        </td>
                        <td className="px-4 py-3 text-gray-700">{row.habla}</td>
                        <td className="px-4 py-3 text-gray-700">
                          {row.lenguaje}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>Señales más frecuentes de retraso del habla</h2>
              <ul>
                <li>Se le entiende poco, incluso cuando intenta decir la frase completa.</li>
                <li>Omite sílabas o consonantes al inicio o en grupos («ato» por «gato»).</li>
                <li>Cambia sonidos de forma repetida (por ejemplo, /s/ o /r/).</li>
                <li>La familia lo entiende mejor que extraños o el colegio.</li>
              </ul>
              <p>
                Más contexto en{" "}
                <Link
                  href="/glosario/retraso-del-habla"
                  className="font-semibold text-rose-600"
                >
                  qué es el retraso del habla
                </Link>{" "}
                y en{" "}
                <Link
                  href="/tratamientos/retraso-del-habla-chillan"
                  className="font-semibold text-rose-600"
                >
                  tratamiento del retraso del habla en Chillán
                </Link>
                .
              </p>

              <h2>Señales más frecuentes de retraso del lenguaje</h2>
              <ul>
                <li>Vocabulario limitado para su edad.</li>
                <li>No arma frases o usa frases muy cortas de forma persistente.</li>
                <li>Cuesta seguir instrucciones sencillas o mantener una conversación.</li>
                <li>Se comunica más con gestos que con palabras.</li>
              </ul>
              <p>
                Puedes profundizar en{" "}
                <Link
                  href="/glosario/retraso-del-lenguaje"
                  className="font-semibold text-rose-600"
                >
                  retraso del lenguaje
                </Link>{" "}
                y en{" "}
                <Link
                  href="/tratamientos/retraso-del-lenguaje-chillan"
                  className="font-semibold text-rose-600"
                >
                  tratamiento del retraso del lenguaje en Chillán
                </Link>
                .
              </p>

              <h2>¿Pueden aparecer juntos?</h2>
              <p>
                Sí. Es frecuente que un niño tenga dificultades para construir
                mensajes (lenguaje) y, además, para pronunciarlos con claridad
                (habla). No significa que «hable mal por flojera»: suele
                requerir un plan que priorice comprensión, vocabulario y
                sonidos según lo que muestre la evaluación.
              </p>

              <h2>Qué tipo de evaluación ayuda a diferenciarlos</h2>
              <p>
                Una{" "}
                <Link
                  href="/servicios/evaluacion-fonoaudiologica"
                  className="font-semibold text-rose-600"
                >
                  evaluación fonoaudiológica
                </Link>{" "}
                integral orienta el diagnóstico diferencial. Según el perfil,
                conviene profundizar con la{" "}
                <Link
                  href="/servicios/evaluacion-del-lenguaje-infantil-chillan"
                  className="font-semibold text-rose-600"
                >
                  evaluación del lenguaje infantil
                </Link>{" "}
                o la{" "}
                <Link
                  href="/servicios/evaluacion-del-habla-infantil-chillan"
                  className="font-semibold text-rose-600"
                >
                  evaluación del habla infantil
                </Link>
                . Puedes{" "}
                <Link
                  href="/agendar-hora-fonoaudiologo-infantil-chillan"
                  className="font-semibold text-rose-600"
                >
                  agendar una hora con fonoaudióloga infantil en Chillán
                </Link>{" "}
                para empezar.
              </p>

              <section className="not-prose mt-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Preguntas frecuentes
                </h2>
                <div className="space-y-4">
                  {faqs.map((f) => (
                    <details
                      key={f.question}
                      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                        <span>{f.question}</span>
                        <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                          ▼
                        </span>
                      </summary>
                      <p className="mt-4 text-gray-600">{f.acceptedAnswer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <div className="not-prose mt-12 rounded-2xl bg-rose-50 p-8 text-center">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Pedir evaluación para diferenciarlo
                </h2>
                <p className="mb-6 text-gray-600">
                  Una evaluación en Chillán aclara si el foco está en el habla,
                  en el lenguaje o en ambos, y define el plan de intervención
                  más adecuado para tu hijo.
                </p>
                <WhatsAppCTA href={WHATSAPP_LINK}>
                  Pedir evaluación para diferenciarlo
                </WhatsAppCTA>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
