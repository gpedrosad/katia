import Link from "next/link";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/recursos/primera-evaluacion-fonoaudiologica-infantil";
const WHATSAPP_HREF = whatsappUrl(
  "Hola, quiero agendar la primera evaluación fonoaudiológica de mi hijo"
);

const faqs = [
  {
    question: "¿Cuánto dura la primera evaluación?",
    answer:
      "La evaluación completa dura aproximadamente 60 minutos. Incluye entrevista con los padres, evaluación directa del niño y entrega de resultados preliminares. El informe escrito se entrega después.",
  },
  {
    question: "¿Qué llevar a la primera evaluación?",
    answer:
      "Lleva informes previos si existen (evaluaciones escolares, médicas o de otros profesionales), antecedentes de salud, audición o intervenciones, y comentarios del colegio o de las educadoras. Anota también tus preguntas para la entrevista y la devolución.",
  },
  {
    question: "¿Cómo le explico a mi hijo que va al fonoaudiólogo?",
    answer:
      "No hace falta entrenarlo. Puedes explicarle de forma simple que irán a jugar y hablar con una profesional que ayuda a los niños a comunicarse mejor. Conviene que descanse bien, vaya cómodo y en un horario en que esté más receptivo.",
  },
  {
    question: "¿Qué pasa después de la evaluación?",
    answer:
      "Al cierre hay una devolución preliminar. Después recibes el informe con resultados, fortalezas, dificultades y recomendaciones. Según lo que se encuentre, puede corresponder seguimiento, terapia con una frecuencia definida o solo orientaciones para la casa y el colegio.",
  },
  {
    question: "¿Siempre se entrega informe?",
    answer:
      "Sí, tras la evaluación se elabora un informe fonoaudiológico con los resultados, fortalezas, dificultades identificadas y recomendaciones. El informe queda disponible para la familia y puede compartirse con colegio o otros profesionales si lo necesitan.",
  },
  {
    question: "¿La evaluación define si necesita terapia?",
    answer:
      "La evaluación identifica si hay dificultades del lenguaje, habla o comunicación y su gravedad. Con esa información se define si corresponde terapia, con qué frecuencia y qué objetivos priorizar. No todas las consultas derivan en tratamiento prolongado.",
  },
];

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Primera evaluación: qué esperar y cómo preparar a tu hijo",
  description:
    "En la primera sesión: entrevista, juego y pruebas (unos 60 minutos). Qué llevar, cómo explicárselo a tu hijo y el informe que recibes después.",
  keywords: [
    "qué esperar en la primera evaluación fonoaudiológica",
    "cómo preparar a tu hijo para la evaluación",
    "qué llevar a la primera evaluación",
    "cómo explicarle al niño la visita al fonoaudiólogo",
    "primera evaluación fonoaudiológica infantil",
    "informe fonoaudiológico niños",
  ],
  ogType: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Primera evaluación fonoaudiológica: qué esperar y cómo preparar a tu hijo",
  description:
    "Guía para padres: qué pasa en la primera sesión, qué llevar, cómo explicárselo a tu hijo y qué recibes después.",
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
  dateModified: "2026-10-20",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PrimeraEvaluacionPage() {
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
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <article className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Recursos", href: "/recursos" },
                { label: "Primera evaluación" },
              ]}
            />

            <header className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
                Primera consulta
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                Primera evaluación fonoaudiológica: qué esperar y cómo preparar
                a tu hijo
              </h1>
              <div className="mb-6 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
                <p className="text-lg font-semibold text-gray-900">
                  <strong>Respuesta rápida:</strong> En la primera sesión hay
                  entrevista con la familia, observación en el juego y pruebas
                  según la edad. Dura unos 60 minutos. No hace falta entrenarlo:
                  explícaselo como un rato de juego y conversación. Después
                  recibes un informe con resultados, fortalezas, dificultades y
                  recomendaciones.
                </p>
              </div>
              <p className="text-xl text-gray-600">
                Si es la primera vez que llevas a tu hijo a una evaluación, esta
                guía te explica qué ocurre en la sesión, qué llevar y qué pasa
                después en <strong>Chillán, Ñuble</strong>.
              </p>
            </header>

            <nav
              aria-label="Enlaces relacionados"
              className="mb-8 rounded-2xl border border-rose-200 bg-white p-5"
            >
              <p className="mb-3 text-sm font-semibold text-rose-800">
                Servicios y agenda
              </p>
              <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap">
                <li>
                  <Link
                    href="/servicios/evaluacion-fonoaudiologica"
                    className="font-medium text-rose-600 underline"
                  >
                    Evaluación fonoaudiológica en Chillán
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/evaluacion-del-lenguaje-infantil-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Evaluación del lenguaje
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/evaluacion-del-habla-infantil-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Evaluación del habla
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agendar-hora-fonoaudiologo-infantil-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Agendar hora
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="prose prose-lg max-w-none">
              <p>
                La primera evaluación fonoaudiológica es el paso para entender
                cómo se comunica tu hijo, identificar dificultades si las hay y
                definir un plan de apoyo. No es un examen que deba «aprobar»: es un
                espacio de observación, juego y orientación profesional.
              </p>

              <h2>Cuándo conviene pedir una primera evaluación</h2>
              <ul>
                <li>Habla poco o no progresa en vocabulario para su edad</li>
                <li>No se entiende bien al hablar o tiene errores persistentes de pronunciación</li>
                <li>El colegio o cuidadores reportan dificultades de comprensión o expresión</li>
                <li>Señales de alerta que persisten pese a estimulación en casa</li>
                <li>Dudas sobre retraso del lenguaje, habla o posible TEL</li>
                <li>Frustración intensa al comunicarse o evitación del habla</li>
              </ul>
              <p>
                Si tienes dudas concretas, también puedes revisar la guía de{" "}
                <Link href="/recursos/senales-de-alerta-del-lenguaje-y-habla">
                  señales de alerta
                </Link>{" "}
                o los{" "}
                <Link href="/recursos/hitos-del-lenguaje-por-edad">
                  hitos del lenguaje por edad
                </Link>
                .
              </p>

              <h2>Cómo suele ser la sesión</h2>
              <ul>
                <li>
                  <strong>Entrevista con la familia:</strong> motivo de consulta,
                  desarrollo, antecedentes y observaciones de casa o colegio.
                </li>
                <li>
                  <strong>Observación del niño:</strong> juego, interacción,
                  comunicación espontánea y respuesta a estímulos.
                </li>
                <li>
                  <strong>Pruebas según edad y motivo:</strong> evaluación del
                  lenguaje, habla, comprensión o comunicación, adaptadas a la edad.
                </li>
                <li>
                  <strong>Devolución preliminar:</strong> explicación de hallazgos
                  principales y orientación sobre próximos pasos al cierre de la
                  sesión.
                </li>
              </ul>

              <h2>Qué llevar a la consulta</h2>
              <ul>
                <li>
                  <strong>Informes previos:</strong> evaluaciones anteriores,
                  informes médicos o de otros profesionales si los tienes.
                </li>
                <li>
                  <strong>Antecedentes médicos:</strong> alergias, medicación,
                  audición, desarrollo general o intervenciones previas.
                </li>
                <li>
                  <strong>Observaciones del colegio:</strong> comentarios de
                  educadoras, profesoras o informes escolares relevantes.
                </li>
                <li>
                  <strong>Preguntas de la familia:</strong> anota tus dudas para
                  abordarlas durante la entrevista y la devolución.
                </li>
              </ul>

              <h2>Qué información entrega el informe</h2>
              <ul>
                <li>
                  <strong>Resultados:</strong> desempeño en las áreas evaluadas
                  (lenguaje, habla, comprensión, etc.).
                </li>
                <li>
                  <strong>Fortalezas y dificultades:</strong> qué hace bien y qué
                  áreas requieren apoyo.
                </li>
                <li>
                  <strong>Orientación diagnóstica:</strong> hipótesis clínica
                  fundamentada, sin etiquetar sin evidencia.
                </li>
                <li>
                  <strong>Sugerencias de intervención:</strong> recomendaciones para
                  casa, colegio y, si corresponde, plan de terapia.
                </li>
              </ul>

              <h2>Qué pasa después de evaluar</h2>
              <ul>
                <li>
                  <strong>Seguimiento:</strong> según hallazgos, puede recomendarse
                  control o reevaluación en un plazo definido.
                </li>
                <li>
                  <strong>Frecuencia de terapia si corresponde:</strong> se define
                  según gravedad, edad y objetivos. No todos los casos requieren
                  sesiones semanales prolongadas.
                </li>
                <li>
                  <strong>Coordinación con familia y colegio:</strong> orientaciones
                  para aplicar en casa y, si la familia lo autoriza, comunicación
                  con el establecimiento educativo.
                </li>
              </ul>
              <p>
                El detalle de la sesión, el informe y el plan está en la{" "}
                <Link href="/servicios/evaluacion-fonoaudiologica">
                  evaluación fonoaudiológica en Chillán
                </Link>
                . Cuando quieras pedir hora, entra a{" "}
                <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
                  agendar hora
                </Link>
                .
              </p>

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
                </details>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border-2 border-rose-200 bg-white p-8">
              <h2 className="mb-3 text-2xl font-bold text-gray-900">
                El siguiente paso
              </h2>
              <p className="mb-4 text-gray-700">
                Esta guía es para preparar la visita. La sesión, el informe y
                el plan están en la{" "}
                <Link
                  href="/servicios/evaluacion-fonoaudiologica"
                  className="font-semibold text-rose-600 underline"
                >
                  evaluación fonoaudiológica en Chillán
                </Link>
                .
              </p>
              <p className="text-gray-700">
                Si ya quieres pedir hora, revisa cómo{" "}
                <Link
                  href="/agendar-hora-fonoaudiologo-infantil-chillan"
                  className="font-semibold text-rose-600 underline"
                >
                  agendar hora
                </Link>
                .
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                ¿Listo para dar el primer paso?
              </h2>
              <p className="mb-6 text-gray-600">
                Agenda la primera evaluación de tu hijo en Chillán.
              </p>
              <WhatsAppCTA href={WHATSAPP_HREF}>
                Agendar primera evaluación
              </WhatsAppCTA>
            </div>

            <div className="mt-8 text-center text-sm">
              <Link href="/recursos" className="font-medium text-rose-600 underline">
                ← Volver a recursos para padres
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
