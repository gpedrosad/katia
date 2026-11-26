import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/comparaciones/tel-vs-retraso-del-lenguaje";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Retraso del lenguaje o TEL/TDL: ¿cuál es la diferencia?",
  description:
    "El retraso es un desarrollo más lento que a veces avanza con estimulación; el TEL, hoy llamado TDL, persiste. Compara y mira cuándo consultar.",
  keywords: [
    "TEL o retraso del lenguaje",
    "TDL o retraso del lenguaje",
    "diferencia entre TEL y retraso del lenguaje",
    "TEL vs retraso del lenguaje",
    "TEL TDL diferencia retraso",
    "trastorno específico del lenguaje vs retraso",
    "cuándo TEL cuándo retraso lenguaje",
    "TEL y TDL es lo mismo",
    "diferencia entre TEL y TDL",
    "TEL o TDL",
    "diferencia entre retraso y trastorno del lenguaje",
  ],
  ogType: "article",
});

type TelFaq = {
  question: string;
  acceptedAnswer: string;
  link?: { href: string; label: string };
};

const faqs: TelFaq[] = [
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
  {
    question: "¿TEL y TDL es lo mismo?",
    acceptedAnswer:
      "Sí, en la práctica nombran el mismo cuadro. TDL (trastorno del desarrollo del lenguaje) es la denominación internacional actual, acordada en el consenso CATALISE (Bishop y colaboradores, 2016-2017). TEL (trastorno específico del lenguaje) es el nombre anterior, que en Chile se sigue usando, por ejemplo en el Decreto 170 de necesidades educativas especiales (NEE) que se aplica en el PIE.",
  },
  {
    question: "¿Cuál es la diferencia entre TEL y TDL?",
    acceptedAnswer:
      "La diferencia está en el nombre, no en el niño. TDL es el término que reemplazó a TEL en la terminología internacional; TEL es el término anterior. En Chile vas a ver los dos: TDL en informes que siguen la terminología internacional y TEL en documentos escolares y del PIE.",
  },
  {
    question: "¿Se dice TEL o TDL?",
    acceptedAnswer:
      "Las dos formas son correctas según el contexto. TDL es la denominación internacional actual. TEL es la que se sigue usando en Chile en el ámbito escolar, por ejemplo en el Decreto 170 y en el PIE. Si un informe dice TEL y otro dice TDL, hablan del mismo cuadro.",
  },
  {
    question: "¿Qué es el TDL?",
    acceptedAnswer:
      "El TDL (trastorno del desarrollo del lenguaje) es un trastorno del neurodesarrollo con dificultades persistentes para comprender y/o expresarse con el lenguaje, sin una causa evidente como pérdida auditiva o discapacidad intelectual. Es el nombre actual de lo que muchos informes en Chile llaman TEL.",
    link: { href: "/glosario/tdl", label: "Qué es el TDL" },
  },
  {
    question: "¿Cuál es la diferencia entre retraso y trastorno del lenguaje?",
    acceptedAnswer:
      "El retraso del lenguaje es un desarrollo más lento que el esperado para la edad, que a veces avanza con estimulación y maduración. El trastorno del lenguaje (TEL/TDL) es un perfil de dificultades que persiste en el tiempo y suele requerir terapia y seguimiento. La evaluación fonoaudiológica y la evolución del niño ayudan a distinguirlos.",
  },
  {
    question: "¿El TDL se cura?",
    acceptedAnswer:
      "El TDL suele acompañar al niño durante años; con terapia fonoaudiológica el lenguaje mejora, pero requiere seguimiento. La respuesta completa está en la página «¿El TEL se cura?».",
    link: { href: "/preguntas/el-tel-se-cura", label: "¿El TEL se cura?" },
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "TEL o retraso del lenguaje: ¿atraso o TDL?",
  description:
    "TEL o retraso del lenguaje no es lo mismo. El retraso puede ser transitorio; el TEL, también llamado TDL, es un perfil que persiste. Evaluación en Chillán.",
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
  dateModified: "2026-11-26",
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

const namesRows = [
  {
    aspect: "Qué describe",
    retraso: "Un desarrollo del lenguaje más lento que lo esperado para la edad.",
    tel: "Dificultades del lenguaje que persisten, sin causa evidente como pérdida auditiva o discapacidad intelectual.",
    tdl: "El mismo perfil que el TEL.",
  },
  {
    aspect: "Tipo de término",
    retraso: "Describe el ritmo del desarrollo; puede ser transitorio.",
    tel: "Nombre anterior del trastorno.",
    tdl: "Denominación internacional actual (consenso CATALISE, Bishop y colaboradores, 2016-2017).",
  },
  {
    aspect: "Dónde lo vas a leer",
    retraso: "Evaluaciones del lenguaje y controles del desarrollo.",
    tel: "En Chile, en documentos escolares y en el Decreto 170 de NEE usado en el PIE.",
    tdl: "En informes y textos que siguen la terminología internacional.",
  },
  {
    aspect: "Evolución",
    retraso: "Muchos niños alcanzan los hitos con apoyo y maduración.",
    tel: "Suele acompañar al niño años; mejora con terapia y requiere seguimiento.",
    tdl: "Igual que el TEL: es el mismo cuadro.",
  },
  {
    aspect: "Qué hacer",
    retraso: "Evaluación fonoaudiológica, estimulación y reevaluación.",
    tel: "Evaluación fonoaudiológica y terapia de lenguaje.",
    tdl: "Evaluación fonoaudiológica y terapia de lenguaje.",
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
                TEL o retraso del lenguaje: ¿atraso o TDL?
              </h1>
              <p
                className="lead text-lg text-gray-700"
                data-speakable
              >
                TEL o retraso del lenguaje no son el mismo cuadro. El{" "}
                <Link
                  href="/glosario/retraso-del-lenguaje"
                  className="font-semibold text-rose-600"
                >
                  retraso del lenguaje
                </Link>{" "}
                es un desarrollo más lento, que a veces avanza con estimulación.
                El{" "}
                <Link href="/glosario/tel" className="font-semibold text-rose-600">
                  TEL
                </Link>
                , también llamado{" "}
                <Link href="/glosario/tdl" className="font-semibold text-rose-600">
                  TDL
                </Link>
                , es un perfil que persiste al comprender o armar frases. La{" "}
                <Link
                  href="/servicios/evaluacion-del-lenguaje-infantil-chillan"
                  className="font-semibold text-rose-600"
                >
                  evaluación en Chillán
                </Link>{" "}
                los distingue.
              </p>

              <p className="text-gray-700" data-speakable>
                <strong>¿TEL o TDL?</strong> Son el mismo cuadro con dos nombres. TDL
                (trastorno del desarrollo del lenguaje) es la denominación internacional
                actual, acordada en el consenso CATALISE (Bishop y colaboradores,
                2016-2017). TEL (trastorno específico del lenguaje) es el nombre anterior,
                que en Chile se sigue usando, por ejemplo en el Decreto 170 de necesidades
                educativas especiales (NEE) que se aplica en el PIE. El retraso del
                lenguaje, en cambio, es otro cuadro.
              </p>

              <h2>¿TEL y TDL es lo mismo?</h2>
              <p>
                Sí. TEL y TDL describen el mismo perfil: dificultades del lenguaje que
                persisten en el tiempo y que no se explican por otra causa evidente, como
                una pérdida auditiva o una discapacidad intelectual. El cambio de nombre
                buscó unificar la terminología entre países. El detalle de cada término
                está en{" "}
                <Link href="/glosario/tel" className="font-semibold text-rose-600">
                  qué es el TEL
                </Link>{" "}
                y{" "}
                <Link href="/glosario/tdl" className="font-semibold text-rose-600">
                  qué es el TDL
                </Link>
                .
              </p>
              <p>
                En Chile vas a ver los dos nombres. TDL aparece en informes que siguen la
                terminología internacional; TEL, en documentos escolares y en el PIE, porque
                así lo nombra el Decreto 170. Si el colegio te pide un documento, mira el{" "}
                <Link
                  href="/servicios/informe-fonoaudiologico-pie-chillan"
                  className="font-semibold text-rose-600"
                >
                  informe fonoaudiológico para el PIE en Chillán
                </Link>
                . Y si ya hay diagnóstico, el{" "}
                <Link
                  href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan"
                  className="font-semibold text-rose-600"
                >
                  tratamiento del TEL en Chillán
                </Link>{" "}
                es el mismo se llame TEL o TDL.
              </p>

              <h3>Retraso del lenguaje, TEL y TDL: comparación rápida</h3>
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
                        TEL
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-rose-800">
                        TDL
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {namesRows.map((row) => (
                      <tr key={row.aspect}>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          {row.aspect}
                        </td>
                        <td className="px-4 py-3 text-gray-700">{row.retraso}</td>
                        <td className="px-4 py-3 text-gray-700">{row.tel}</td>
                        <td className="px-4 py-3 text-gray-700">{row.tdl}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>Tabla comparativa: retraso del lenguaje vs TEL/TDL</h2>
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

              <h2>Diferencia entre retraso y trastorno del lenguaje</h2>
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
                . El nombre actual del TEL está en{" "}
                <Link href="/glosario/tdl">qué es el TDL</Link> y el nombre
                antiguo en <Link href="/glosario/disfasia">qué es la disfasia</Link>
                . Las edades están en las{" "}
                <Link href="/recursos/senales-de-alerta-del-lenguaje-y-habla">
                  señales de alerta del lenguaje y el habla
                </Link>{" "}
                y la hora se pide en{" "}
                <Link href="/contacto-fonoaudiologa-chillan">
                  contacto en Chillán
                </Link>{" "}
                o al{" "}
                <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
                  agendar una hora en Chillán
                </Link>
                . Si la duda es pronunciar o tener pocas palabras, mira{" "}
                <Link href="/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje">
                  retraso del habla o del lenguaje
                </Link>
                . Si falla un sonido o una regla que se repite, mira la{" "}
                <Link href="/comparaciones/dislalia-vs-trastorno-fonologico">
                  diferencia entre dislalia y trastorno fonológico
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
                      <p className="mt-4 text-gray-600">
                        {f.acceptedAnswer}
                        {f.link && (
                          <>
                            {" "}
                            <Link
                              href={f.link.href}
                              className="font-semibold text-rose-600 underline hover:text-rose-800"
                            >
                              {f.link.label}
                            </Link>
                          </>
                        )}
                      </p>
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
                <WhatsAppCTA
                  href={whatsappUrl(
                    "Hola, quiero consultar por retraso de lenguaje o TEL en mi hijo",
                  )}
                >
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
