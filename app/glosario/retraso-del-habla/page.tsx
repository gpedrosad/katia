import Link from "next/link";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/glosario/retraso-del-habla";
const WHATSAPP_LINK = whatsappUrl(
  "Hola, quiero consultar por retraso del habla en mi hijo"
);
const ASHA_URL =
  "https://www.asha.org/public/speech/disorders/articulation/";
const ASHA_LABEL = "ASHA — Articulation";

const faqs = [
  {
    question: "¿Qué significa retraso del habla?",
    answer:
      "Significa que el niño produce el habla con menos claridad o menos sonidos de los esperados para su edad: omite sílabas, sustituye fonemas o le cuesta hacerse entender al hablar.",
    acceptedAnswer:
      "Significa que el niño produce el habla con menos claridad o menos sonidos de los esperados para su edad: omite sílabas, sustituye fonemas o le cuesta hacerse entender al hablar. Según ASHA, los trastornos de articulación afectan la producción inteligible de sonidos del habla (https://www.asha.org/public/speech/disorders/articulation/).",
    cite: true,
  },
  {
    question: "¿Es lo mismo que retraso del lenguaje?",
    answer:
      "No. El retraso del habla se centra en cómo suena la pronunciación; el retraso del lenguaje en vocabulario, frases y comprensión. Pueden aparecer juntos.",
    acceptedAnswer:
      "No. El retraso del habla se centra en cómo suena la pronunciación; el retraso del lenguaje en vocabulario, frases y comprensión. Pueden aparecer juntos. La comparación clínica ayuda a diferenciarlos en la práctica.",
    cite: false,
  },
  {
    question: "¿Se puede mejorar con terapia?",
    answer:
      "Sí. Con evaluación, objetivos claros y terapia del habla la mayoría de los niños ganan claridad y confianza al comunicarse.",
    acceptedAnswer:
      "Sí. Con evaluación, objetivos claros y terapia del habla la mayoría de los niños ganan claridad y confianza al comunicarse. Según ASHA, la intervención del habla puede mejorar la articulación y la inteligibilidad (https://www.asha.org/public/speech/disorders/articulation/).",
    cite: true,
  },
  {
    question: "¿Cuándo llevar al fonoaudiólogo?",
    answer:
      "Si el habla no progresa, si fuera de la familia le cuesta entenderlo o si los errores persisten más allá de lo esperado para su edad.",
    acceptedAnswer:
      "Si el habla no progresa, si fuera de la familia le cuesta entenderlo o si los errores persisten más allá de lo esperado para su edad. Según ASHA, conviene evaluar cuando la producción de sonidos queda fuera del desarrollo típico (https://www.asha.org/public/speech/disorders/articulation/).",
    cite: true,
  },
  {
    question: "¿Cómo saber si mi hijo necesita evaluación?",
    answer:
      "Si a los 3–4 años varios sonidos fallan, si el jardín reporta dificultad para entenderlo o si se frustra al hablar. Una evaluación del habla infantil define el siguiente paso.",
    acceptedAnswer:
      "Si a los 3–4 años varios sonidos fallan, si el jardín reporta dificultad para entenderlo o si se frustra al hablar. Una evaluación fonoaudiológica identifica si el foco es articulación, fonología u otros factores.",
    cite: false,
  },
];

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "¿Qué es el Retraso del Habla? | Signos y Tratamiento",
  description:
    "Qué es el retraso del habla en niños, señales de alerta, diferencias con retraso del lenguaje y cuándo consultar a fonoaudióloga en Chillán.",
  keywords: [
    "qué es retraso del habla",
    "retraso del habla significado",
    "retraso del habla en niños",
    "diferencia retraso del habla",
  ],
  ogType: "article",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿Qué es el retraso del habla?",
  description:
    "Definición del retraso del habla en niños, señales, causas posibles, tratamiento y cuándo consultar en Chillán.",
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
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.acceptedAnswer,
    },
  })),
};

export default function RetrasoDelHablaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <article className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Glosario", href: "/glosario" },
                { label: "Retraso del habla" },
              ]}
            />

            <header className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                Trastornos del habla
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                ¿Qué es el retraso del habla?
              </h1>
              <p className="text-xl text-gray-600">
                El <strong>retraso del habla</strong> ocurre cuando un niño
                produce menos sonidos o habla con menor claridad de lo esperado
                para su edad, aunque a veces comprenda mejor de lo que logra
                expresar con pronunciación clara.
              </p>
            </header>

            <nav
              aria-label="Atención fonoaudiológica en Chillán"
              className="mb-8 rounded-2xl border border-rose-200 bg-white p-5"
            >
              <p className="mb-3 text-sm font-semibold text-rose-800">
                ¿Buscas evaluación o terapia en Chillán?
              </p>
              <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap">
                <li>
                  <Link
                    href="/tratamientos/retraso-del-habla-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Tratamiento retraso del habla en Chillán
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/evaluacion-del-habla-infantil-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Evaluación del habla infantil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agendar-hora-fonoaudiologo-infantil-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Agendar evaluación
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="prose prose-lg max-w-none">
              <h2>Definición de retraso del habla</h2>
              <p>
                El <strong>retraso del habla</strong> describe dificultades en
                la <em>producción</em> del habla: cómo articula sonidos, qué
                tan claro es al hablar y si logra que otros lo entiendan sin
                esfuerzo. No es lo mismo que «no saber qué decir»: muchos niños
                comprenden bien pero les cuesta «sacar» las palabras con
                precisión.
              </p>
              <p>Ejemplos cotidianos:</p>
              <ul>
                <li>
                  Dice «tato» en lugar de «gato» o omite consonantes al inicio.
                </li>
                <li>
                  Simplifica palabras de forma repetida («pe» por «pelota»).
                </li>
                <li>
                  La familia lo entiende, pero en el jardín o con visitas cuesta
                  más seguirlo.
                </li>
              </ul>

              <h2>Señales frecuentes</h2>
              <ul>
                <li>Habla poco o con frases muy cortas por dificultad al articular.</li>
                <li>Se entiende menos de lo esperado para su edad.</li>
                <li>Omite sílabas o simplifica palabras.</li>
                <li>Se frustra al hablar porque no lo entienden.</li>
              </ul>

              <h2>¿Es lo mismo que retraso del lenguaje?</h2>
              <p>
                <strong>No.</strong> El retraso del lenguaje afecta vocabulario,
                estructura de frases y comprensión; el retraso del habla, la
                claridad y los sonidos al hablar. Consulta la{" "}
                <Link
                  href="/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje"
                  className="font-semibold text-rose-600"
                >
                  comparación retraso del habla vs retraso del lenguaje
                </Link>{" "}
                y el artículo sobre{" "}
                <Link
                  href="/glosario/retraso-del-lenguaje"
                  className="font-semibold text-rose-600"
                >
                  retraso del lenguaje
                </Link>
                .
              </p>

              <h2>Causas posibles</h2>
              <p>
                Cada niño es distinto; una evaluación profesional evita
                conclusiones apresuradas. Entre los factores que se consideran:
              </p>
              <ul>
                <li>Desarrollo del habla más lento que el esperado para la edad.</li>
                <li>
                  Dificultades fonológicas o articulatorias (patrones de errores
                  en sonidos).
                </li>
                <li>
                  Factores auditivos que dificultan discriminar y aprender sonidos.
                </li>
                <li>
                  Otros aspectos del desarrollo que conviene descartar o integrar
                  en el plan.
                </li>
              </ul>

              <h2>Cuándo consultar</h2>
              <ul>
                <li>Si el habla no progresa en varios meses.</li>
                <li>Si no le entienden fuera del núcleo familiar.</li>
                <li>
                  Si los errores persisten más allá de la edad en que suelen
                  consolidarse los sonidos del español.
                </li>
              </ul>

              <h2>Tratamiento</h2>
              <p>El abordaje fonoaudiológico suele incluir:</p>
              <ol>
                <li>
                  <strong>Evaluación:</strong> perfil de sonidos, inteligibilidad
                  y descartes según el caso.
                </li>
                <li>
                  <strong>Objetivos claros:</strong> priorizar sonidos y
                  situaciones que más impactan la comunicación diaria.
                </li>
                <li>
                  <strong>Terapia del habla:</strong> práctica estructurada desde
                  sílabas hasta conversación.
                </li>
                <li>
                  <strong>Trabajo con la familia:</strong> rutinas breves para
                  reforzar en casa sin saturar al niño.
                </li>
              </ol>

              <h2>Preguntas frecuentes</h2>
            </div>

            <div className="not-prose space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                  {faq.cite && (
                    <p className="mt-3 text-sm text-gray-600">
                      <cite className="not-italic">
                        Fuente:{" "}
                        <a
                          href={ASHA_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-rose-700 underline hover:text-rose-800"
                        >
                          {ASHA_LABEL}
                        </a>
                      </cite>
                    </p>
                  )}
                </details>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Consultar por retraso del habla
              </h2>
              <p className="mb-6 text-gray-600">
                Una evaluación en Chillán identifica si el foco es articulación,
                fonología u otros factores, y define el mejor plan para tu hijo.
              </p>
              <WhatsAppCTA href={WHATSAPP_LINK}>
                Consultar por retraso del habla
              </WhatsAppCTA>
            </div>

            <div className="mt-12">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Términos relacionados
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    Habla vs lenguaje
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tabla comparativa y señales para padres.
                  </p>
                </Link>
                <Link
                  href="/glosario/retraso-del-lenguaje"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    Retraso del lenguaje
                  </h3>
                  <p className="text-sm text-gray-600">
                    Vocabulario, frases y comprensión.
                  </p>
                </Link>
                <Link
                  href="/tratamientos/retraso-del-habla-chillan"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    Terapia en Chillán
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tratamiento fonoaudiológico del retraso del habla.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
