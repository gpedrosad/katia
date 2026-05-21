import Link from "next/link";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/recursos/senales-de-alerta-del-lenguaje-y-habla";
const WHATSAPP_HREF = whatsappUrl(
  "Hola, detecté señales de alerta en el lenguaje o habla de mi hijo y quiero orientación"
);

const faqs = [
  {
    question: "¿Qué señales indican que no conviene seguir esperando?",
    answer:
      "Las más importantes son: no responder al nombre, no seguir instrucciones simples, hablar muy poco para la edad, no ser entendido casi nunca y frustración intensa al comunicarse. Si varias aparecen juntas y persisten, conviene evaluar en lugar de esperar «a que crezca».",
  },
  {
    question: "¿Cuándo una dificultad es normal y cuándo no?",
    answer:
      "Es normal que cada niño tenga su ritmo y que algunos sonidos se corrijan con la edad. No es normal si hay retraso claro frente a pares, falta de progreso mes a mes, dificultad para entenderse o señales que afectan la convivencia y el aprendizaje.",
  },
  {
    question: "¿Hablar poco siempre es problema?",
    answer:
      "No siempre. Algunos niños son hablantes tardíos y alcanzan hitos después. Pero hablar muy poco junto con poca comprensión, poca intención comunicativa o dificultad para progresar sí amerita observación y, en muchos casos, evaluación fonoaudiológica.",
  },
  {
    question: "¿Qué tipo de evaluación conviene pedir?",
    answer:
      "Depende de la duda principal. Si la preocupación es vocabulario, comprensión o formación de frases, conviene una evaluación del lenguaje. Si el problema es pronunciación o inteligibilidad, una evaluación del habla. En la primera consulta se orienta qué pruebas corresponden.",
  },
];

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Señales de Alerta del Lenguaje y el Habla en Niños",
  description:
    "Conoce las señales de alerta del lenguaje y habla en niños: cuándo esperar, cuándo observar y cuándo pedir evaluación fonoaudiológica.",
  keywords: [
    "señales de alerta lenguaje niños",
    "señales de alerta habla niños",
    "cuándo preocuparse por el habla",
    "cuándo consultar fonoaudiólogo",
  ],
  ogType: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Señales de alerta del lenguaje y el habla en niños",
  description:
    "Guía para padres sobre cuándo una dificultad del lenguaje o habla requiere evaluación fonoaudiológica.",
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
      text: faq.answer,
    },
  })),
};

export default function SenalesDeAlertaPage() {
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
                { label: "Señales de alerta" },
              ]}
            />

            <header className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
                Alerta temprana
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                Señales de alerta del lenguaje y el habla en niños
              </h1>
              <p className="text-xl text-gray-600">
                Saber distinguir cuándo esperar, cuándo observar y cuándo pedir
                evaluación puede marcar la diferencia en el desarrollo de tu hijo
                en <strong>Chillán, Chile</strong>.
              </p>
            </header>

            <nav
              aria-label="Enlaces relacionados"
              className="mb-8 rounded-2xl border border-rose-200 bg-white p-5"
            >
              <p className="mb-3 text-sm font-semibold text-rose-800">
                Recursos y servicios relacionados
              </p>
              <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap">
                <li>
                  <Link
                    href="/recursos/hitos-del-lenguaje-por-edad"
                    className="font-medium text-rose-600 underline"
                  >
                    Hitos del lenguaje por edad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sintomas/mi-hijo-no-habla-bien-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Mi hijo no habla bien
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sintomas/nino-pronuncia-mal-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Pronuncia mal
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
              </ul>
            </nav>

            <div className="prose prose-lg max-w-none">
              <p>
                No todas las dudas son señales de alerta, pero algunas combinaciones
                sí indican que conviene actuar antes. Esta guía organiza las alertas
                por edad y te ayuda a decidir el siguiente paso.
              </p>

              <h2>Alertas antes de los 2 años</h2>
              <ul>
                <li>No responde al nombre de forma consistente</li>
                <li>No balbucea o balbucea muy poco comparado con otros niños</li>
                <li>No usa gestos para comunicarse (señalar, pedir, saludar)</li>
                <li>No dice palabras con significado hacia los 18 meses</li>
                <li>No imita sonidos, gestos o palabras del adulto</li>
                <li>Poca intención de compartir atención (mirar lo que señalas)</li>
              </ul>

              <h2>Alertas entre 2 y 3 años</h2>
              <ul>
                <li>No combina dos palabras hacia los 2 años</li>
                <li>Vocabulario muy limitado que no crece mes a mes</li>
                <li>No sigue instrucciones simples («dame la pelota»)</li>
                <li>Se entiende poco incluso en casa</li>
                <li>Frustración frecuente al intentar decir lo que quiere</li>
                <li>Evita hablar o se comunica casi solo con gestos</li>
              </ul>

              <h2>Alertas entre 4 y 5 años</h2>
              <ul>
                <li>No forma oraciones completas para su edad</li>
                <li>Extraños lo entienden con dificultad</li>
                <li>Errores de pronunciación que persisten y dificultan la comprensión</li>
                <li>Dificultad para contar experiencias o responder preguntas</li>
                <li>Problemas para participar en conversaciones con pares</li>
                <li>El colegio reporta dificultades de comprensión o expresión</li>
              </ul>

              <h2>Alertas que requieren consultar antes</h2>
              <p>
                Estas señales, a cualquier edad, no conviene postergarlas:
              </p>
              <ul>
                <li>
                  <strong>No responde al nombre</strong> de forma repetida
                </li>
                <li>
                  <strong>No sigue instrucciones simples</strong> acordes a su edad
                </li>
                <li>
                  <strong>Habla muy poco</strong> comparado con niños de su edad
                </li>
                <li>
                  <strong>No se entiende casi nada</strong> al hablar
                </li>
                <li>
                  <strong>Frustración intensa al comunicarse</strong>, llanto o
                  rabietas frecuentes por no poder expresarse
                </li>
              </ul>

              <h2>Qué observar en casa durante una semana</h2>
              <p>Checklist práctico para padres:</p>
              <ul>
                <li>¿Responde cuando lo llamas por su nombre?</li>
                <li>¿Comprende instrucciones simples sin repetición excesiva?</li>
                <li>¿Cuántas palabras nuevas usa en una semana?</li>
                <li>¿Combina palabras o solo dice palabras sueltas?</li>
                <li>¿Lo entienden personas que no conviven con él a diario?</li>
                <li>¿Se frustra al hablar o evita intentarlo?</li>
                <li>¿Usa gestos, mirada y contacto para comunicarse?</li>
                <li>¿El colegio o cuidadores han comentado algo?</li>
              </ul>
              <p>
                Anota ejemplos concretos: frases que dice, situaciones difíciles y
                momentos en que se comunica mejor. Esa información es muy valiosa en
                una evaluación.
              </p>

              <h2>Cuándo pedir evaluación</h2>
              <p>
                Conviene pedir evaluación fonoaudiológica si hay varias señales de
                alerta juntas, si lleva semanas sin progreso o si la duda genera
                ansiedad en la familia. Una evaluación no etiqueta al niño: aclara qué
                ocurre y qué apoyo puede necesitar. En{" "}
                <Link href="/servicios/evaluacion-del-lenguaje-infantil-chillan">
                  Chillán
                </Link>{" "}
                puedes agendar una primera consulta presencial para orientarte con
                claridad.
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

            <div className="mt-12 rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                ¿Detectaste señales que te preocupan?
              </h2>
              <p className="mb-6 text-gray-600">
                Una evaluación puede ayudarte a salir de la duda con un plan claro.
              </p>
              <WhatsAppCTA href={WHATSAPP_HREF}>
                Quiero salir de la duda con una evaluación
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
