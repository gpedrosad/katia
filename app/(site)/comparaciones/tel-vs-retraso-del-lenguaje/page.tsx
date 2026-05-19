import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/comparaciones/tel-vs-retraso-del-lenguaje";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "TEL vs Retraso del Lenguaje | Diferencias y Cuándo Consultar",
  description:
    "Comparación entre TEL (trastorno del desarrollo del lenguaje) y retraso del lenguaje: tabla de diferencias, señales de alarma y cuándo evaluar a tu hijo en Chillán.",
  keywords: [
    "TEL vs retraso del lenguaje",
    "diferencia TEL retraso lenguaje",
    "trastorno específico del lenguaje niños",
    "retraso del lenguaje infantil",
  ],
  ogType: "article",
});

const faqs = [
  {
    question: "¿El TEL es lo mismo que un retraso del lenguaje?",
    acceptedAnswer:
      "No siempre. El retraso del lenguaje describe un desarrollo más lento que el esperado para la edad, que a veces se recupera con estimulación. El TEL (o TDL) es un trastorno del neurodesarrollo con dificultades persistentes en comprensión y/o expresión, sin causa evidente como pérdida auditiva o discapacidad intelectual.",
  },
  {
    question: "¿Cómo sabe el fonoaudiólogo cuál es?",
    acceptedAnswer:
      "Mediante historia clínica, pruebas estandarizadas de lenguaje, perfil de errores gramaticales y vocabulario, descarte auditivo y seguimiento en el tiempo. Si las dificultades persisten más allá de lo esperado para la edad, se orienta hacia TEL/TDL.",
  },
  {
    question: "¿Un retraso del lenguaje puede convertirse en TEL?",
    acceptedAnswer:
      "Si el niño mejora con estimulación y alcanza hitos acordes a su edad, suele hablarse de retraso transitorio. Si los déficits continúan en primaria o afectan el aprendizaje escolar, el diagnóstico puede reorientarse a TEL/TDL.",
  },
  {
    question: "¿Ambos requieren terapia fonoaudiológica?",
    acceptedAnswer:
      "Sí. La intervención temprana mejora vocabulario, estructura de frases y comprensión. El plan y la duración dependen del perfil del niño tras la evaluación inicial.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "TEL vs Retraso del Lenguaje: Diferencias Clave",
  description:
    "Comparación para padres entre TEL/TDL y retraso del lenguaje infantil, cuándo consultar y recursos en Chillán.",
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
    retraso:
      "Desarrollo del lenguaje por debajo de lo esperado para la edad; puede ser transitorio.",
    tel: "Trastorno del desarrollo del lenguaje (TEL/TDL): dificultades persistentes sin causa aparente clara.",
  },
  {
    aspect: "Comprensión",
    retraso: "A veces solo el expresivo está afectado; la comprensión puede estar conservada.",
    tel: "Frecuentemente afecta comprensión y expresión (mixto o predominio comprensivo/expresivo).",
  },
  {
    aspect: "Gramática y vocabulario",
    retraso: "Retraso leve que puede normalizarse con estimulación.",
    tel: "Errores gramaticales, vocabulario limitado y frases cortas más allá de lo esperado.",
  },
  {
    aspect: "Evolución",
    retraso: "Muchos niños alcanzan hitos con apoyo y maduración.",
    tel: "Suele acompañar al niño años; mejora con terapia pero requiere seguimiento prolongado.",
  },
  {
    aspect: "Prevalencia",
    retraso: "Variable según contexto y estimulación del entorno.",
    tel: "Aproximadamente 7–8 % de los niños en edad escolar.",
    telSource:
      "https://www.asha.org/public/speech/disorders/Developmental-Language-Disorders/",
    telSourceLabel: "ASHA — Developmental Language Disorder",
    omsSource: "https://www.who.int/teams/noncommunicable-diseases/mental-health",
    omsSourceLabel: "OMS — Salud mental y neurodesarrollo",
  },
  {
    aspect: "Evaluación",
    retraso: "Control de hitos, estimulación temprana, reevaluación periódica.",
    tel: "Baterías de lenguaje, perfil fonológico, descarte auditivo y cognitivo según caso.",
  },
];

export default function TelVsRetrasoLenguajePage() {
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
                { label: "TEL vs Retraso del Lenguaje" },
              ]}
            />

            <article className="prose prose-rose lg:prose-lg max-w-none">
              <h1 className="text-4xl font-extrabold text-gray-900">
                TEL vs retraso del lenguaje: ¿es solo “lento” o hay un trastorno?
              </h1>
              <p
                className="lead text-lg text-gray-700"
                data-speakable
              >
                Muchos padres escuchan que su hijo “va un poco atrasado” en el
                habla. El{" "}
                <Link href="/glosario/tel" className="font-semibold text-rose-600">
                  TEL (trastorno del desarrollo del lenguaje)
                </Link>{" "}
                y el{" "}
                <Link
                  href="/glosario/retraso-del-lenguaje"
                  className="font-semibold text-rose-600"
                >
                  retraso del lenguaje
                </Link>{" "}
                no son intercambiables: uno puede resolverse con estimulación;
                el otro implica un perfil persistente que beneficia de terapia
                especializada. Aquí te explicamos las diferencias.
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
                        Retraso del lenguaje
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-rose-800">
                        TEL / TDL
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {comparisonRows.map((row) => (
                      <tr key={row.aspect}>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          {row.aspect}
                        </td>
                        <td className="px-4 py-3 text-gray-700">{row.retraso}</td>
                        <td className="px-4 py-3 text-gray-700">
                          {row.tel}
                          {row.aspect === "Prevalencia" && row.telSource && (
                            <cite className="mt-2 block text-xs text-gray-500 not-italic">
                              Fuentes:{" "}
                              <a
                                href={row.telSource}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-rose-700 underline hover:text-rose-800"
                              >
                                {row.telSourceLabel}
                              </a>
                              {row.omsSource && (
                                <>
                                  {" "}
                                  ·{" "}
                                  <a
                                    href={row.omsSource}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-rose-700 underline hover:text-rose-800"
                                  >
                                    {row.omsSourceLabel}
                                  </a>
                                </>
                              )}
                            </cite>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600">
                <strong>Dato:</strong> La ASHA estima que el trastorno del
                desarrollo del lenguaje (TDL/TEL) afecta aproximadamente al 7 %
                de los niños en edad preescolar y escolar. La{" "}
                <a
                  href="https://www.who.int/teams/noncommunicable-diseases/mental-health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-rose-600 underline hover:text-rose-800"
                >
                  OMS
                </a>{" "}
                incluye los trastornos del neurodesarrollo —entre ellos las
                dificultades persistentes del lenguaje— dentro de las prioridades
                de salud infantil.
              </p>

              <h2>Diferencias clave</h2>
              <ul>
                <li>
                  <strong>Retraso del lenguaje:</strong> el niño comprende bien
                  pero habla poco o con frases simples; a menudo “despega” entre
                  los 2 y 4 años con buen modelo lingüístico.
                </li>
                <li>
                  <strong>TEL:</strong> dificultades en vocabulario, morfología
                  (plurales, tiempos verbales) y/o comprensión de instrucciones
                  que persisten y pueden afectar lectoescritura después.
                </li>
                <li>
                  La{" "}
                  <Link
                    href="/servicios/test-de-lenguaje-infantil-chillan"
                    className="font-semibold text-rose-600"
                  >
                    evaluación de lenguaje infantil
                  </Link>{" "}
                  y la{" "}
                  <Link
                    href="/servicios/estimulacion-temprana-del-lenguaje-chillan"
                    className="font-semibold text-rose-600"
                  >
                    estimulación temprana
                  </Link>{" "}
                  son el punto de partida en ambos casos.
                </li>
              </ul>

              <h2>¿Cuándo consultar?</h2>
              <div className="not-prose rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <ul className="m-0 space-y-3 text-amber-900">
                  <li>
                    A los 2 años no usa al menos ~50 palabras o frases de dos
                    palabras.
                  </li>
                  <li>
                    A los 3 años no arma frases de 3–4 palabras o no entiende
                    instrucciones sencillas.
                  </li>
                  <li>
                    El jardín o colegio reporta dificultades de comprensión o
                    expresión respecto a pares.
                  </li>
                  <li>
                    Hay frustración, conductas de evitación o el niño se comunica
                    más con gestos que con palabras.
                  </li>
                </ul>
              </div>

              <h2>Enlaces útiles</h2>
              <p>
                Más información en{" "}
                <Link href="/chillan/tel">TEL en Chillán</Link>,{" "}
                <Link href="/chillan/retraso-del-lenguaje">
                  retraso del lenguaje en Chillán
                </Link>
                ,{" "}
                <Link href="/sintomas/hijo-habla-poco-edad-chillan">
                  hijo que habla poco
                </Link>
                ,{" "}
                <Link href="/sintomas/hijo-no-arma-frases-chillan">
                  no arma frases
                </Link>{" "}
                y tratamientos{" "}
                <Link href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan">
                  TEL
                </Link>{" "}
                y{" "}
                <Link href="/tratamientos/retraso-del-lenguaje-chillan">
                  retraso del lenguaje
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
                  Evaluación de lenguaje en Chillán
                </h2>
                <p className="mb-6 text-gray-600">
                  Una evaluación fonoaudiológica aclara si corresponde hablar de
                  retraso transitorio, TEL/TDL u otro perfil, y define el plan de
                  intervención.
                </p>
                <WhatsAppCTA href="https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20retraso%20de%20lenguaje%20o%20TEL%20en%20mi%20hijo">
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
