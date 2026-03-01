import Image from "next/image";
import { Metadata } from "next";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { StickyWhatsApp } from "../../_components/StickyWhatsApp";

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/servicios/terapia-lenguaje-infantil";
const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20terapia%20de%20lenguaje%20infantil";

export const metadata: Metadata = {
  title: "Terapia de Lenguaje Infantil en Chillán | Fonoaudióloga Katia Domínguez",
  description:
    "Terapia de lenguaje para niños de 2 a 10 años en Chillán. Tratamiento de retraso del lenguaje, vocabulario limitado y dificultades de expresión. +20 años de experiencia. Agendar hora.",
  keywords: [
    "terapia de lenguaje infantil Chillán",
    "fonoaudióloga para niños Chillán",
    "retraso del lenguaje niños",
    "terapia del lenguaje niños",
    "fonoaudiología infantil Chillán",
    "tratamiento lenguaje niños",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Terapia de Lenguaje Infantil en Chillán | Fonoaudióloga",
    description:
      "Terapia de lenguaje para niños en Chillán. Tratamiento personalizado con enfoque lúdico.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "es_CL",
  },
};

const signals = [
  {
    age: "18-24 meses",
    concern: "No dice ninguna palabra o dice menos de 10",
  },
  {
    age: "2 años",
    concern: "No junta dos palabras (ej: 'mamá agua')",
  },
  {
    age: "3 años",
    concern: "Habla que solo entienden los padres, no arma oraciones",
  },
  {
    age: "4 años",
    concern: "Dificultad para contar experiencias o seguir conversaciones",
  },
  {
    age: "5+ años",
    concern: "Problemas para expresar ideas, vocabulario limitado",
  },
];

const benefits = [
  {
    icon: "🎯",
    title: "Mejor expresión",
    description: "Tu hijo podrá comunicar sus ideas, necesidades y emociones con claridad.",
  },
  {
    icon: "📚",
    title: "Mejor rendimiento escolar",
    description: "El lenguaje es la base para el aprendizaje de lectura, escritura y matemáticas.",
  },
  {
    icon: "👫",
    title: "Mejores relaciones sociales",
    description: "Comunicarse bien facilita hacer amigos y participar en actividades grupales.",
  },
  {
    icon: "😊",
    title: "Mayor autoestima",
    description: "Los niños que se expresan bien se sienten más seguros y confiados.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Terapia de Lenguaje Infantil",
  description:
    "Evaluación y tratamiento de trastornos del lenguaje en niños de 2 a 10 años en Chillán.",
  provider: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  areaServed: {
    "@type": "City",
    name: "Chillán",
  },
  serviceType: "Terapia de lenguaje infantil",
  audience: {
    "@type": "PeopleAudience",
    audienceType: "Niños de 2 a 10 años con dificultades del lenguaje",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿A qué edad debe hablar un niño?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A los 12 meses suelen decir sus primeras palabras. A los 2 años deben juntar dos palabras y tener al menos 50 palabras. A los 3 años deben formar oraciones de 3-4 palabras. Si tu hijo no alcanza estos hitos, es recomendable consultar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dura la terapia de lenguaje infantil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del diagnóstico. Casos leves pueden resolverse en 3-4 meses. Casos moderados requieren 6-12 meses. Casos severos o TEL pueden necesitar tratamiento más prolongado. En la evaluación inicial te daré un estimado para tu hijo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Las sesiones de terapia son solo con el niño?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, los padres participan activamente. Te enseño ejercicios y estrategias para practicar en casa, lo que acelera significativamente el progreso del niño.",
      },
    },
  ],
};

export default function TerapiaLenguajeInfantilPage() {
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
                { label: "Terapia de lenguaje infantil" },
              ]}
            />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                  👶 Niños de 2 a 10 años
                </span>
                <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  Terapia de lenguaje infantil en Chillán
                </h1>
                <p className="mb-6 text-xl text-gray-600">
                  Ayudo a niños con retraso del lenguaje, vocabulario limitado y
                  dificultades para expresarse. Enfoque lúdico y personalizado.
                </p>
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Evaluación completa</strong> con informe y plan de
                      tratamiento
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Sesiones personalizadas</strong> según las
                      necesidades de tu hijo
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Participación activa de padres</strong> con
                      ejercicios para casa
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
                    alt="Katia Domínguez - Fonoaudióloga especialista en lenguaje infantil en Chillán"
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

        {/* Warning Signs by Age */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
              Señales de alerta según la edad
            </h2>
            <p className="mb-10 text-center text-lg text-gray-600">
              ¿Tu hijo presenta alguna de estas situaciones? Una evaluación
              puede ayudar a detectar problemas a tiempo.
            </p>
            <div className="space-y-4">
              {signals.map((signal) => (
                <div
                  key={signal.age}
                  className="flex items-center gap-4 rounded-xl border border-rose-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-rose-100 text-center">
                    <span className="text-sm font-bold text-rose-700">
                      {signal.age}
                    </span>
                  </div>
                  <p className="text-gray-700">{signal.concern}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <WhatsAppCTA href={WHATSAPP_LINK}>
                Consultar mi caso por WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </section>

        {/* What We Treat */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              ¿Qué tratamos en terapia de lenguaje infantil?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Retraso del lenguaje
                </h3>
                <p className="text-gray-600">
                  Cuando el niño no alcanza los hitos del lenguaje esperados
                  para su edad. Puede ser expresivo, comprensivo o mixto.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Vocabulario limitado
                </h3>
                <p className="text-gray-600">
                  Pocos palabras, dificultad para aprender nuevos términos o
                  usar las palabras correctas en contexto.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Dificultades de expresión
                </h3>
                <p className="text-gray-600">
                  Problemas para armar oraciones, contar experiencias o
                  expresar ideas de forma ordenada.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Problemas de comprensión
                </h3>
                <p className="text-gray-600">
                  Dificultad para seguir instrucciones, entender preguntas o
                  comprender lo que otros dicen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Beneficios de la terapia de lenguaje
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-6"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Preguntas frecuentes sobre terapia de lenguaje infantil
            </h2>
            <div className="space-y-4">
              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿A qué edad debe hablar un niño?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  A los 12 meses suelen decir sus primeras palabras. A los 2
                  años deben juntar dos palabras y tener al menos 50 palabras. A
                  los 3 años deben formar oraciones de 3-4 palabras. Si tu hijo
                  no alcanza estos hitos, es recomendable consultar.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Cuánto dura la terapia de lenguaje infantil?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Depende del diagnóstico. Casos leves pueden resolverse en 3-4
                  meses. Casos moderados requieren 6-12 meses. Casos severos o
                  TEL pueden necesitar tratamiento más prolongado. En la
                  evaluación inicial te daré un estimado para tu hijo.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Las sesiones son solo con el niño?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  No, los padres participan activamente. Te enseño ejercicios y
                  estrategias para practicar en casa, lo que acelera
                  significativamente el progreso del niño.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Cuánto cuesta la terapia de lenguaje?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Los valores varían según el tipo de sesión (evaluación o
                  terapia). Escríbeme por WhatsApp y te envío la información de
                  precios actualizada.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Servicios relacionados
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href="/servicios/trastornos-del-habla"
                className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-rose-300 hover:bg-rose-50"
              >
                <span className="text-2xl">🗣️</span>
                <p className="mt-2 font-medium text-gray-900">
                  Trastornos del habla
                </p>
              </a>
              <a
                href="/servicios/tel-trastorno-especifico-lenguaje"
                className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-rose-300 hover:bg-rose-50"
              >
                <span className="text-2xl">💬</span>
                <p className="mt-2 font-medium text-gray-900">TEL</p>
              </a>
              <a
                href="/servicios/evaluacion-fonoaudiologica"
                className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-rose-300 hover:bg-rose-50"
              >
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">
                  Evaluación fonoaudiológica
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Tu hijo tiene dificultades con el lenguaje?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Una evaluación a tiempo puede marcar la diferencia. Escríbeme y
              conversemos sobre su caso.
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
