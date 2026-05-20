import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/comparaciones/dislalia-vs-trastorno-fonologico";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Dislalia vs Trastorno Fonológico | Diferencias y Cuándo Consultar",
  description:
    "Comparación clínica entre dislalia y trastorno fonológico: definición, tabla de diferencias, señales de alarma y cuándo llevar al niño al fonoaudiólogo en Chillán.",
  keywords: [
    "dislalia vs trastorno fonológico",
    "diferencia dislalia trastorno fonológico",
    "problemas de pronunciación niños",
    "trastorno fonológico niños",
  ],
  ogType: "article",
});

const faqs = [
  {
    question: "¿La dislalia y el trastorno fonológico son lo mismo?",
    acceptedAnswer:
      "No. La dislalia se centra en la dificultad motora para articular fonemas concretos (por ejemplo, la /r/ o la /s/). El trastorno fonológico implica patrones sistemáticos de errores que afectan grupos de sonidos y la inteligibilidad del habla, con base en las reglas del sistema fonológico.",
  },
  {
    question: "¿A qué edad debería preocuparme por la pronunciación?",
    acceptedAnswer:
      "Hacia los 4 años la mayoría de los fonemas del español deberían estar consolidados. Si después de los 4-5 años persisten errores marcados, sustituciones que dificultan entender al niño o rechazo a hablar, conviene una evaluación fonoaudiológica.",
  },
  {
    question: "¿Se tratan de la misma forma?",
    acceptedAnswer:
      "Comparten técnicas de terapia del habla (praxias, discriminación auditiva, generalización), pero el enfoque difiere: en dislalia se trabaja la articulación del fonema; en trastorno fonológico se reentrenan patrones y reglas del sistema de sonidos del idioma.",
  },
  {
    question: "¿Puede un niño tener dislalia y trastorno fonológico a la vez?",
    acceptedAnswer:
      "Sí. En la práctica clínica a menudo coexisten dificultades articulatorias puntuales y patrones fonológicos más amplios. La evaluación diferencia qué sonidos y reglas están afectados para diseñar un plan integrado.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dislalia vs Trastorno Fonológico: Diferencias Clave",
  description:
    "Guía comparativa para padres: diferencias entre dislalia y trastorno fonológico, cuándo consultar y enlaces a tratamiento en Chillán.",
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
  datePublished: "2026-05-19",
  dateModified: "2026-05-19",
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
    aspect: "Definición",
    dislalia:
      "Dificultad para producir uno o más fonemas de forma correcta (omisión, sustitución o distorsión aislada).",
    fonologico:
      "Patrones sistemáticos de errores en el uso de sonidos del habla que afectan la inteligibilidad.",
  },
  {
    aspect: "Nivel afectado",
    dislalia: "Articulación motora (órganos fonoarticuladores, coordinación).",
    fonologico: "Sistema fonológico del lenguaje (reglas de sonidos del idioma).",
  },
  {
    aspect: "Ejemplo típico",
    dislalia: 'Dice "perro" como "pero" solo por la /r/; el resto de palabras está bien.',
    fonologico:
      'Omite consonantes al inicio ("ato" por "gato") o en grupos ("pato" por "ato") de forma repetida.',
  },
  {
    aspect: "Edad de alerta",
    dislalia: "Errores en fonemas tardíos (/r/, /s/) persisten después de los 4-5 años.",
    fonologico:
      "Patrones de simplificación (omisiones, reducciones) más allá de lo esperado para la edad.",
  },
  {
    aspect: "Evaluación",
    dislalia: "Prueba de articulación, examen de OFA, discriminación auditiva.",
    fonologico:
      "Análisis fonológico del habla espontánea, pruebas de conciencia fonológica.",
  },
  {
    aspect: "Tratamiento",
    dislalia: "Praxias, enseñanza del punto articulatorio, automatización del fonema.",
    fonologico:
      "Terapia fonológica: contraste mínimo, ciclos, generalización de reglas.",
  },
  {
    aspect: "Prevalencia",
    dislalia:
      "Los errores articulatorios aislados son frecuentes en preescolar; la dislalia clínica requiere persistencia más allá de los hitos evolutivos.",
    fonologico:
      "Los trastornos fonológicos forman parte de los trastornos del habla en niños, con prevalencia variable según criterios diagnósticos.",
    ashaSource:
      "https://www.asha.org/public/speech/disorders/articulation-and-phonology/",
    ashaSourceLabel: "ASHA — Articulation and Phonology",
    ashaPhonoSource:
      "https://www.asha.org/public/speech/disorders/phonological-disorders/",
    ashaPhonoLabel: "ASHA — Phonological Disorders",
  },
];

export default function DislaliaVsTrastornoFonologicoPage() {
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
                { label: "Dislalia vs Trastorno Fonológico" },
              ]}
            />

            <article className="prose prose-rose lg:prose-lg max-w-none">
              <h1 className="text-4xl font-extrabold text-gray-900">
                Dislalia vs trastorno fonológico: ¿cuál tiene mi hijo?
              </h1>
              <p
                className="lead text-lg text-gray-700"
                data-speakable
              >
                Ambos trastornos afectan cómo suena el habla de un niño, pero no
                son lo mismo: la{" "}
                <Link href="/glosario/dislalia" className="font-semibold text-rose-600">
                  dislalia
                </Link>{" "}
                apunta a fonemas mal articulados; el{" "}
                <Link
                  href="/glosario/trastorno-fonologico"
                  className="font-semibold text-rose-600"
                >
                  trastorno fonológico
                </Link>{" "}
                refleja reglas erróneas que simplifican muchos sonidos a la vez.
                Esta guía te ayuda a distinguirlos y saber cuándo consultar en
                Chillán.
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
                        Dislalia
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-rose-800">
                        Trastorno fonológico
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {comparisonRows.map((row) => (
                      <tr key={row.aspect}>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          {row.aspect}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {row.dislalia}
                          {row.aspect === "Prevalencia" && row.ashaSource && (
                            <cite className="mt-2 block text-xs text-gray-500 not-italic">
                              <a
                                href={row.ashaSource}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-rose-700 underline hover:text-rose-800"
                              >
                                {row.ashaSourceLabel}
                              </a>
                            </cite>
                          )}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {row.fonologico}
                          {row.aspect === "Prevalencia" && row.ashaPhonoSource && (
                            <cite className="mt-2 block text-xs text-gray-500 not-italic">
                              <a
                                href={row.ashaPhonoSource}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-rose-700 underline hover:text-rose-800"
                              >
                                {row.ashaPhonoLabel}
                              </a>
                            </cite>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600">
                <strong>Dato:</strong> La ASHA señala que los trastornos del
                habla —incluidas dificultades articulatorias y fonológicas— son
                una de las consultas más frecuentes en fonoaudiología infantil.
                Consulta las guías de{" "}
                <a
                  href="https://www.asha.org/public/speech/disorders/articulation-and-phonology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-rose-600 underline hover:text-rose-800"
                >
                  articulación y fonología (ASHA)
                </a>{" "}
                y de{" "}
                <a
                  href="https://www.asha.org/public/speech/disorders/phonological-disorders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-rose-600 underline hover:text-rose-800"
                >
                  trastornos fonológicos (ASHA)
                </a>
                .
              </p>

              <h2>Diferencias clave en lenguaje sencillo</h2>
              <ul>
                <li>
                  <strong>Dislalia:</strong> el niño “sabe” la palabra pero no logra
                  mover bien la lengua o los labios para un sonido concreto (muy
                  frecuente con /r/ y /s/).
                </li>
                <li>
                  <strong>Trastorno fonológico:</strong> aplica la misma regla
                  errónea a muchas palabras (por ejemplo, omitir consonantes al
                  inicio de casi todas las palabras).
                </li>
                <li>
                  En ambos casos la{" "}
                  <Link
                    href="/servicios/terapia-lenguaje-infantil"
                    className="font-semibold text-rose-600"
                  >
                    terapia de lenguaje infantil
                  </Link>{" "}
                  mejora la inteligibilidad; el diagnóstico preciso orienta el
                  método.
                </li>
              </ul>

              <h2>¿Cuándo consultar al fonoaudiólogo?</h2>
              <div className="not-prose rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <ul className="m-0 space-y-3 text-amber-900">
                  <li>
                    Tiene 4 años o más y aún no se entiende bien al hablar en
                    familia o jardín.
                  </li>
                  <li>
                    Persisten errores en varios sonidos o patrones (no solo la
                    “erre”).
                  </li>
                  <li>
                    Se frustra, evita hablar o le señalan que “habla raro” en el
                    colegio.
                  </li>
                  <li>
                    El educador o el PIE sugieren evaluación fonoaudiológica o{" "}
                    <Link
                      href="/servicios/informe-fonoaudiologico-pie-chillan"
                      className="font-semibold underline"
                    >
                      informe fonoaudiológico para PIE
                    </Link>
                    .
                  </li>
                </ul>
              </div>

              <h2>Enlaces útiles</h2>
              <p>
                Profundiza en{" "}
                <Link href="/chillan/dislalia">dislalia en Chillán</Link>,{" "}
                <Link href="/chillan/trastorno-fonologico">
                  trastorno fonológico en Chillán
                </Link>
                , el síntoma{" "}
                <Link href="/sintomas/nino-pronuncia-mal-chillan">
                  niño que pronuncia mal
                </Link>{" "}
                y los tratamientos{" "}
                <Link href="/tratamientos/dislalia-infantil-chillan">
                  dislalia infantil
                </Link>{" "}
                y{" "}
                <Link href="/tratamientos/trastorno-fonologico-chillan">
                  trastorno fonológico
                </Link>
                .
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
                  ¿Necesitas una evaluación en Chillán?
                </h2>
                <p className="mb-6 text-gray-600">
                  Una evaluación fonoaudiológica de ~60 minutos aclara si se trata
                  de dislalia, trastorno fonológico o ambos, y define el plan de
                  tratamiento.
                </p>
                <WhatsAppCTA href="https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20pronunciaci%C3%B3n%20de%20mi%20hijo%20(dislalia%20o%20trastorno%20fonol%C3%B3gico)">
                  Consultar por WhatsApp
                </WhatsAppCTA>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
