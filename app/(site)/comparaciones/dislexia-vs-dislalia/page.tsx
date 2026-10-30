import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/comparaciones/dislexia-vs-dislalia";
const TITLE = "Dislexia y dislalia: diferencias y cómo saber cuál es";
const DESCRIPTION =
  "La dislalia es pronunciar los sonidos al hablar. La dislexia es leer y escribir. No son lo mismo y pueden coincidir. Evaluación en Chillán.";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "dislexia y dislalia",
    "dislalia y dislexia",
    "diferencia entre dislexia y dislalia",
    "qué es dislalia y dislexia",
    "dislexia o dislalia",
  ],
  ogType: "article",
});

const QUE_ES =
  "La dislalia es la dificultad para pronunciar los sonidos al hablar: el niño omite, sustituye o distorsiona fonemas. La dislexia es la dificultad para leer y escribir. No son el mismo cuadro y pueden presentarse juntas.";

const faqs = [
  {
    question: "¿Qué es la dislalia y qué es la dislexia?",
    acceptedAnswer: QUE_ES,
  },
  {
    question: "¿La dislexia y la dislalia son lo mismo?",
    acceptedAnswer:
      "No. La dislalia es una dificultad para pronunciar sonidos del habla: el niño omite, sustituye o distorsiona fonemas. La dislexia es una dificultad específica para aprender a leer. Una se escucha al hablar; la otra se nota en la lectoescritura.",
  },
  {
    question: "¿Un niño puede tener dislexia y dislalia a la vez?",
    acceptedAnswer:
      "Sí, pueden presentarse juntas. Pronunciar mal un sonido no explica, por sí solo, que le cueste leer, y al revés. La evaluación mira el habla y las bases del lenguaje oral por separado.",
  },
  {
    question: "¿A qué edad se nota cada una?",
    acceptedAnswer:
      "En la pronunciación, la mayoría de los sonidos se espera hacia los 4-5 años. Si a los 5-6 todavía hay errores, la duda es de habla. La dislexia suele sospecharse entre los 6 y los 8 años, en primero o segundo básico, si la lectura no despega. En preescolar solo se habla de señales de riesgo, no de un diagnóstico hecho en casa.",
  },
  {
    question: "¿Quién distingue dislexia y dislalia?",
    acceptedAnswer:
      "La evaluación fonoaudiológica mira la pronunciación y las bases del lenguaje oral: conciencia fonológica, vocabulario y comprensión. El diagnóstico formal de dislexia se hace con evaluaciones especializadas. En Chillán, la hora de evaluación es con Katia Domínguez.",
  },
  {
    question: "¿Confundir la b y la d es dislalia?",
    acceptedAnswer:
      "No. Confundir letras al leer o escribir es una señal de lectoescritura, no de pronunciación. Una confusión sola tampoco es un diagnóstico de dislexia. Anota si además le cuesta unir sonidos, adivina o evita leer, y tráelo a la evaluación.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Diferencia entre dislexia y dislalia",
  description: DESCRIPTION,
  inLanguage: "es-CL",
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
  datePublished: "2026-10-23",
  dateModified: "2026-10-30",
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
    aspect: "Qué es",
    dislalia:
      "Dificultad para pronunciar sonidos del habla. El niño omite, sustituye o distorsiona fonemas.",
    dislexia:
      "Dificultad específica para aprender a leer, de origen neurobiológico. No se debe a falta de inteligencia ni de esfuerzo.",
  },
  {
    aspect: "Qué se afecta",
    dislalia: "El habla: cómo suenan las palabras al decirlas.",
    dislexia: "La lectoescritura: cómo aprende a leer y a escribir.",
  },
  {
    aspect: "Ejemplo",
    dislalia: "Dice «tasa» por «casa», o distorsiona la r o la s.",
    dislexia:
      "Lee lento y con esfuerzo, o le cuesta decodificar una palabra nueva.",
  },
  {
    aspect: "Cuándo se nota",
    dislalia:
      "Si después de los 4-5 años, o hacia los 5-6, siguen errores de pronunciación.",
    dislexia:
      "Señales de riesgo en preescolar. La sospecha suele aparecer entre los 6 y los 8 años, en primero o segundo básico, si la lectura no despega pese al apoyo.",
  },
  {
    aspect: "Evaluación",
    dislalia: "Evaluación del habla: qué sonidos omite, sustituye o distorsiona.",
    dislexia:
      "Se evalúan conciencia fonológica, vocabulario y comprensión oral. El diagnóstico formal de dislexia se hace con evaluaciones especializadas.",
  },
];

export default function DislexiaVsDislaliaPage() {
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
                { label: "Comparaciones", href: "/comparaciones" },
                { label: "Dislexia vs dislalia" },
              ]}
            />

            <article className="prose prose-rose lg:prose-lg max-w-none">
              <h1 className="text-4xl font-extrabold text-gray-900">
                Diferencia entre dislexia y dislalia
              </h1>
              <p className="lead text-lg text-gray-700" data-speakable>
                Dislexia y dislalia no son el mismo cuadro: la dislalia es la
                pronunciación de los sonidos al hablar y la dislexia es leer y
                escribir. Pueden coincidir. El diagnóstico formal de dislexia se
                hace con evaluaciones especializadas; en el habla, las distingue
                la evaluación fonoaudiológica.
              </p>

              <h2>¿Qué es la dislalia y qué es la dislexia?</h2>
              <p>{QUE_ES}</p>

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
                        Dislexia
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {comparisonRows.map((row) => (
                      <tr key={row.aspect}>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          {row.aspect}
                        </td>
                        <td className="px-4 py-3 text-gray-700">{row.dislalia}</td>
                        <td className="px-4 py-3 text-gray-700">{row.dislexia}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>En palabras simples</h2>
              <ul>
                <li>
                  <strong>Dislalia:</strong> el problema está al hablar. La
                  definición está en el{" "}
                  <Link href="/glosario/dislalia">glosario de dislalia</Link> y
                  las guías de casa, en el <Link href="/dislalia">hub de dislalia</Link>.
                </li>
                <li>
                  <strong>Dislexia:</strong> el problema está al aprender a leer
                  y escribir. La definición está en el{" "}
                  <Link href="/glosario/dislexia">glosario de dislexia</Link> y
                  las dudas de lectura, en el{" "}
                  <Link href="/lectoescritura">hub de lectoescritura</Link>.
                </li>
                <li>
                  Otra palabra que se cruza con la dislalia es la disartria. No
                  es lo mismo: la disartria tiene base neuromuscular y afecta la
                  calidad global del habla. La definición está en{" "}
                  <Link href="/glosario/disartria">qué es la disartria</Link>.
                </li>
              </ul>

              <h2>Señales por edad, sin diagnosticar en casa</h2>
              <p>
                Estas edades ya están en el glosario. Sirven para orientar la
                consulta, no para poner un nombre.
              </p>
              <ul>
                <li>
                  <strong>Habla, 4-5 años:</strong> la mayoría de los sonidos se
                  espera en esta etapa. Si todavía cambia un fonema, la pregunta
                  es de pronunciación.
                </li>
                <li>
                  <strong>Habla, 5-6 años:</strong> si siguen omisiones,
                  sustituciones o distorsiones, conviene evaluar el habla.
                </li>
                <li>
                  <strong>Lectura, preescolar:</strong> puede haber señales de
                  riesgo. Eso no es un diagnóstico de dislexia.
                </li>
                <li>
                  <strong>Lectura, 6 a 8 años:</strong> en primero o segundo
                  básico, si la lectura no despega pese al apoyo, o si evita
                  leer, la duda ya es de lectoescritura.
                </li>
              </ul>
              <p>
                Si la duda es solo de varios sonidos a la vez, y no de leer, la
                comparación que corresponde es{" "}
                <Link href="/comparaciones/dislalia-vs-trastorno-fonologico">
                  dislalia y trastorno fonológico
                </Link>
                . Si lo que no aparece son las frases, mira{" "}
                <Link href="/comparaciones/tel-vs-retraso-del-lenguaje">
                  TEL y retraso del lenguaje
                </Link>{" "}
                o{" "}
                <Link href="/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje">
                  retraso del habla y retraso del lenguaje
                </Link>
                . El índice de estas guías está en{" "}
                <Link href="/comparaciones">comparaciones</Link>.
              </p>

              <h2>Enlaces útiles</h2>
              <p>
                El tratamiento de la pronunciación está en{" "}
                <Link href="/tratamientos/dislalia-infantil-chillan">
                  dislalia infantil en Chillán
                </Link>
                . La página local de lectura está en{" "}
                <Link href="/chillan/dislexia">dislexia en Chillán</Link>. El
                servicio de{" "}
                <Link href="/servicios/dificultades-lectoescritura">
                  dificultades de lectoescritura
                </Link>{" "}
                explica qué se evalúa en el lenguaje oral. La hora se pide en{" "}
                <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
                  agendar evaluación en Chillán
                </Link>{" "}
                y el recorrido de la consulta, en la{" "}
                <Link href="/servicios/evaluacion-fonoaudiologica">
                  evaluación fonoaudiológica
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
                  ¿No sabes si es el habla o la lectura?
                </h2>
                <p className="mb-6 text-gray-600">
                  Cuéntame la edad y un ejemplo: una palabra que dice mal, o qué
                  pasa cuando lee una línea. La evaluación es presencial en
                  Chillán.
                </p>
                <WhatsAppCTA
                  href={whatsappUrl(
                    "Hola, quiero saber si lo de mi hijo es dislalia o dislexia y agendar una evaluación en Chillán",
                  )}
                >
                  Agendar la evaluación por WhatsApp
                </WhatsAppCTA>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
