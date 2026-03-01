import Image from "next/image";
import { Metadata } from "next";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { StickyWhatsApp } from "../../_components/StickyWhatsApp";

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/servicios/evaluacion-fonoaudiologica";
const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n%20fonoaudiol%C3%B3gica";

export const metadata: Metadata = {
  title: "Evaluación Fonoaudiológica en Chillán | Diagnóstico de Lenguaje",
  description:
    "Evaluación fonoaudiológica completa en Chillán para niños. Diagnóstico de lenguaje, habla y comunicación con informe detallado. Primera consulta con plan de tratamiento. Agendar hora.",
  keywords: [
    "evaluación fonoaudiológica Chillán",
    "diagnóstico lenguaje niños",
    "evaluación del habla",
    "fonoaudióloga evaluación Chillán",
    "test de lenguaje infantil",
    "informe fonoaudiológico",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Evaluación Fonoaudiológica en Chillán | Diagnóstico de Lenguaje",
    description:
      "Evaluación completa con informe detallado y plan de tratamiento personalizado.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "es_CL",
  },
};

const evaluationIncludes = [
  {
    icon: "📋",
    title: "Anamnesis completa",
    description:
      "Revisamos la historia del desarrollo de tu hijo, antecedentes familiares, médicos y escolares relevantes.",
  },
  {
    icon: "🎯",
    title: "Evaluación del lenguaje",
    description:
      "Pruebas estandarizadas de vocabulario, comprensión, expresión y estructuración de oraciones.",
  },
  {
    icon: "🗣️",
    title: "Evaluación del habla",
    description:
      "Análisis de pronunciación, articulación, fluidez y características de la voz.",
  },
  {
    icon: "👂",
    title: "Evaluación de la comprensión",
    description:
      "Verificamos cómo entiende instrucciones, preguntas y conceptos según su edad.",
  },
  {
    icon: "📄",
    title: "Informe detallado",
    description:
      "Documento con resultados, diagnóstico claro y recomendaciones específicas.",
  },
  {
    icon: "📝",
    title: "Plan de tratamiento",
    description:
      "Propuesta de intervención con objetivos, frecuencia de sesiones y duración estimada.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Evaluación Fonoaudiológica",
  description:
    "Evaluación completa del lenguaje, habla y comunicación en niños con informe detallado.",
  provider: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  areaServed: {
    "@type": "City",
    name: "Chillán",
  },
  serviceType: "Evaluación fonoaudiológica",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto dura una evaluación fonoaudiológica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La evaluación completa dura aproximadamente 60 minutos. Incluye entrevista con los padres, evaluación directa del niño y entrega de resultados preliminares. El informe escrito se entrega posteriormente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debo llevar a la evaluación fonoaudiológica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es útil llevar informes previos si existen (evaluaciones escolares, médicas o de otros especialistas), libreta de comunicaciones o cualquier documento relevante sobre el desarrollo de tu hijo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué sirve el informe fonoaudiológico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El informe sirve para conocer las fortalezas y dificultades de tu hijo, obtener un diagnóstico claro, presentar en el colegio para apoyo o adecuaciones, y como base para el plan de tratamiento.",
      },
    },
  ],
};

export default function EvaluacionFonoaudiologicaPage() {
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
        {/* Hero Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "/servicios" },
                { label: "Evaluación fonoaudiológica" },
              ]}
            />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                  📋 Primera consulta
                </span>
                <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  Evaluación fonoaudiológica en Chillán
                </h1>
                <p className="mb-6 text-xl text-gray-600">
                  Evaluación completa del lenguaje, habla y comunicación de tu
                  hijo. Incluye informe detallado y plan de tratamiento
                  personalizado.
                </p>
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Sesión de 60 minutos</strong> con evaluación
                      completa
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Informe escrito</strong> con diagnóstico y
                      recomendaciones
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Plan de tratamiento</strong> con objetivos claros
                    </span>
                  </li>
                </ul>
                <WhatsAppCTA href={WHATSAPP_LINK}>
                  Agendar evaluación por WhatsApp
                </WhatsAppCTA>
                <p className="mt-4 text-sm text-gray-500">
                  Respondo en menos de 24 horas • Atención presencial en Chillán
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-100 shadow-2xl">
                  <Image
                    src="/KatiaDominguezFonoaudiologa.png"
                    alt="Katia Domínguez - Fonoaudióloga realizando evaluación en Chillán"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
              ¿Qué incluye la evaluación fonoaudiológica?
            </h2>
            <p className="mb-10 text-center text-lg text-gray-600">
              Una evaluación completa para entender las fortalezas y
              dificultades de tu hijo
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {evaluationIncludes.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-rose-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <WhatsAppCTA href={WHATSAPP_LINK}>
                Agendar mi evaluación
              </WhatsAppCTA>
            </div>
          </div>
        </section>

        {/* When to Evaluate */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              ¿Cuándo es necesaria una evaluación fonoaudiológica?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Cuando hay preocupación
                </h3>
                <p className="text-gray-600">
                  Si tú, el pediatra o el colegio notan algo diferente en el
                  habla o lenguaje de tu hijo.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Antes de entrar al colegio
                </h3>
                <p className="text-gray-600">
                  Para asegurar que el niño tiene las habilidades lingüísticas
                  necesarias para el aprendizaje.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Por solicitud del colegio
                </h3>
                <p className="text-gray-600">
                  Cuando educadores detectan dificultades en lenguaje, lectura o
                  escritura.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Para acceder a beneficios
                </h3>
                <p className="text-gray-600">
                  Algunos programas escolares o de salud requieren evaluación
                  fonoaudiológica formal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              ¿Cómo es el proceso de evaluación?
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-700">
                  1
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Agenda tu hora
                </h3>
                <p className="text-sm text-gray-600">
                  Escríbeme por WhatsApp y coordinamos día y hora según tu
                  disponibilidad.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-700">
                  2
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Sesión de evaluación
                </h3>
                <p className="text-sm text-gray-600">
                  60 minutos en Chillán. Entrevista contigo y evaluación directa
                  del niño.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-700">
                  3
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Informe y plan
                </h3>
                <p className="text-sm text-gray-600">
                  Recibes el informe con diagnóstico y comenzamos el tratamiento
                  si es necesario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Preguntas frecuentes sobre la evaluación
            </h2>
            <div className="space-y-4">
              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Cuánto dura una evaluación fonoaudiológica?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  La evaluación completa dura aproximadamente 60 minutos.
                  Incluye entrevista con los padres, evaluación directa del niño
                  y entrega de resultados preliminares. El informe escrito se
                  entrega posteriormente.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Qué debo llevar a la evaluación?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Es útil llevar informes previos si existen (evaluaciones
                  escolares, médicas o de otros especialistas), libreta de
                  comunicaciones o cualquier documento relevante sobre el
                  desarrollo de tu hijo.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Para qué sirve el informe fonoaudiológico?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  El informe sirve para conocer las fortalezas y dificultades de
                  tu hijo, obtener un diagnóstico claro, presentar en el colegio
                  para apoyo o adecuaciones, y como base para el plan de
                  tratamiento.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Cuánto cuesta la evaluación?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  El valor de la evaluación incluye la sesión completa y el
                  informe escrito. Escríbeme por WhatsApp y te envío la
                  información de precios actualizada.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Quieres saber cómo está el lenguaje de tu hijo?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Una evaluación profesional te dará claridad sobre su desarrollo y
              los pasos a seguir.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>
              Agendar evaluación por WhatsApp
            </WhatsAppCTA>
            <p className="mt-6 text-gray-300">
              ✓ Respondo el mismo día • ✓ Atención presencial en Chillán
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
