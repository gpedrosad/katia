import Image from "next/image";
import { Metadata } from "next";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { StickyWhatsApp } from "../../_components/StickyWhatsApp";

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/servicios/tea-trastorno-espectro-autista";
const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20TEA%20y%20comunicaci%C3%B3n";

export const metadata: Metadata = {
  title: "Fonoaudiología para TEA en Chillán | Comunicación y Lenguaje Autismo",
  description:
    "Apoyo fonoaudiológico para niños con TEA en Chillán. Desarrollo de comunicación, lenguaje funcional y habilidades sociales. Fonoaudióloga con experiencia en autismo.",
  keywords: [
    "TEA Chillán",
    "autismo fonoaudiología",
    "comunicación TEA",
    "fonoaudióloga autismo Chillán",
    "terapia lenguaje autismo",
    "espectro autista comunicación",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Fonoaudiología para TEA en Chillán",
    description:
      "Desarrollo de comunicación y lenguaje para niños con Trastorno del Espectro Autista.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "es_CL",
  },
};

const areas = [
  {
    icon: "💬",
    title: "Comunicación funcional",
    description:
      "Ayudamos al niño a comunicar sus necesidades básicas, ya sea verbalmente, con gestos, imágenes o dispositivos.",
  },
  {
    icon: "📖",
    title: "Desarrollo del lenguaje",
    description:
      "Estimulamos el vocabulario, la construcción de oraciones y la capacidad de expresar ideas.",
  },
  {
    icon: "👂",
    title: "Comprensión",
    description:
      "Trabajamos la comprensión de instrucciones, preguntas y el lenguaje social cotidiano.",
  },
  {
    icon: "🤝",
    title: "Habilidades sociales",
    description:
      "Practicamos turnos de conversación, contacto visual y lectura de señales sociales.",
  },
  {
    icon: "🎭",
    title: "Pragmática",
    description:
      "Enseñamos el uso social del lenguaje: saludar, pedir, comentar, rechazar apropiadamente.",
  },
  {
    icon: "🧩",
    title: "Juego y simbolismo",
    description:
      "Desarrollamos el juego simbólico y la imaginación a través del lenguaje.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Fonoaudiología para TEA",
  description:
    "Apoyo en comunicación y lenguaje para niños con Trastorno del Espectro Autista en Chillán.",
  provider: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  areaServed: {
    "@type": "City",
    name: "Chillán",
  },
  serviceType: "Fonoaudiología para TEA",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Todos los niños con TEA necesitan fonoaudióloga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No todos, pero la mayoría se beneficia. Aproximadamente el 40% de los niños con TEA tiene retraso significativo del lenguaje, y muchos otros tienen dificultades en el uso social del lenguaje (pragmática) aunque hablen correctamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo es la terapia fonoaudiológica para niños con autismo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se adapta a cada niño. Usamos sus intereses para motivar la comunicación, establecemos rutinas predecibles, usamos apoyos visuales cuando es útil, y trabajamos objetivos funcionales que mejoren su calidad de vida.",
      },
    },
    {
      "@type": "Question",
      name: "¿La fonoaudióloga trabaja sola o en equipo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El abordaje del TEA es multidisciplinario. Coordino con otros profesionales (psicólogos, terapeutas ocupacionales, neurólogos) cuando es necesario, y siempre con la familia y el colegio.",
      },
    },
  ],
};

export default function TEAPage() {
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
                { label: "TEA y comunicación" },
              ]}
            />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                  🧩 Trastorno del Espectro Autista
                </span>
                <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  Fonoaudiología para TEA en Chillán
                </h1>
                <p className="mb-6 text-xl text-gray-600">
                  Apoyo en comunicación y lenguaje para niños con Trastorno del
                  Espectro Autista. Desarrollo de habilidades funcionales y
                  sociales.
                </p>
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Evaluación individualizada</strong> del perfil
                      comunicativo
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Objetivos funcionales</strong> adaptados a cada
                      niño
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Coordinación</strong> con familia y otros
                      profesionales
                    </span>
                  </li>
                </ul>
                <WhatsAppCTA href={WHATSAPP_LINK}>
                  Consultar por WhatsApp
                </WhatsAppCTA>
                <p className="mt-4 text-sm text-gray-500">
                  Respondo en menos de 24 horas • Atención presencial en Chillán
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-100 shadow-2xl">
                  <Image
                    src="/KatiaDominguezFonoaudiologa.png"
                    alt="Katia Domínguez - Fonoaudióloga con experiencia en TEA en Chillán"
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

        {/* What We Work On */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
              ¿Qué trabajamos en fonoaudiología para TEA?
            </h2>
            <p className="mb-10 text-center text-lg text-gray-600">
              Cada niño con TEA es único. Trabajamos las áreas que cada uno
              necesita desarrollar.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 text-3xl">{area.icon}</div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
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

        {/* Our Approach */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Nuestro enfoque con niños con TEA
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-semibold text-gray-900">
                  🎯 Basado en intereses
                </h3>
                <p className="text-gray-600">
                  Usamos lo que le gusta al niño para motivar la comunicación.
                  Si le gustan los dinosaurios, los trenes o los números,
                  trabajamos con eso.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-semibold text-gray-900">
                  📋 Estructura predecible
                </h3>
                <p className="text-gray-600">
                  Las sesiones tienen una estructura clara que ayuda al niño a
                  anticipar qué viene y sentirse seguro.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-semibold text-gray-900">
                  🖼️ Apoyos visuales
                </h3>
                <p className="text-gray-600">
                  Cuando es útil, usamos imágenes, pictogramas o calendarios
                  visuales para apoyar la comunicación.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-semibold text-gray-900">
                  👨‍👩‍👧 Trabajo con familia
                </h3>
                <p className="text-gray-600">
                  Te enseño estrategias para estimular la comunicación en casa,
                  en situaciones naturales del día a día.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Preguntas frecuentes sobre fonoaudiología y TEA
            </h2>
            <div className="space-y-4">
              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Todos los niños con TEA necesitan fonoaudióloga?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  No todos, pero la mayoría se beneficia. Aproximadamente el 40%
                  de los niños con TEA tiene retraso significativo del lenguaje,
                  y muchos otros tienen dificultades en el uso social del
                  lenguaje (pragmática) aunque hablen correctamente.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>
                    ¿Cómo es la terapia fonoaudiológica para niños con autismo?
                  </span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Se adapta a cada niño. Usamos sus intereses para motivar la
                  comunicación, establecemos rutinas predecibles, usamos apoyos
                  visuales cuando es útil, y trabajamos objetivos funcionales
                  que mejoren su calidad de vida.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿La fonoaudióloga trabaja sola o en equipo?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  El abordaje del TEA es multidisciplinario. Coordino con otros
                  profesionales (psicólogos, terapeutas ocupacionales,
                  neurólogos) cuando es necesario, y siempre con la familia y el
                  colegio.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Trabaja con niños no verbales?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Sí. Con niños que no usan lenguaje verbal, trabajamos sistemas
                  alternativos de comunicación como gestos, intercambio de
                  imágenes o comunicadores, según lo que sea más funcional para
                  cada niño.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Servicios relacionados
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href="/servicios/tel-trastorno-especifico-lenguaje"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
              >
                <span className="text-2xl">💬</span>
                <p className="mt-2 font-medium text-gray-900">TEL</p>
              </a>
              <a
                href="/servicios/terapia-lenguaje-infantil"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
              >
                <span className="text-2xl">👶</span>
                <p className="mt-2 font-medium text-gray-900">
                  Terapia de lenguaje infantil
                </p>
              </a>
              <a
                href="/servicios/evaluacion-fonoaudiologica"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
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
              ¿Tu hijo tiene TEA y necesita apoyo en comunicación?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Cada niño es diferente. Escríbeme y conversemos sobre cómo puedo
              ayudar en su caso específico.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>
              Consultar por WhatsApp
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
