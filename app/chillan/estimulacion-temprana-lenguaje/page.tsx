import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { ConcernCard } from "@/app/_components/ConcernCard";

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/chillan/estimulacion-temprana-lenguaje";

export const metadata: Metadata = {
  title:
    "Estimulación temprana del lenguaje en Chillán (0 a 4 años) | Katia Domínguez",
  description:
    "Estimulación temprana del lenguaje para bebés y niños pequeños en Chillán: primeras palabras, gestos, comprensión y rutinas en casa. Evaluación y sesiones presenciales con enfoque familiar.",
  keywords: [
    "estimulación temprana del lenguaje Chillán",
    "lenguaje bebés Chillán",
    "primeras palabras niños",
    "fonoaudióloga infantil Chillán",
    "retraso del lenguaje temprano",
    "estimulación 0 a 4 años",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title:
      "Estimulación temprana del lenguaje en Chillán (0 a 4 años) | Katia Domínguez",
    description:
      "Apoyo fonoaudiológico para las primeras etapas del lenguaje en Chillán: evaluación, pautas para el hogar y terapia presencial cercana.",
    type: "website",
    locale: "es_CL",
    url: `${SITE_URL}${PAGE_PATH}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20estimulaci%C3%B3n%20temprana%20del%20lenguaje%20para%20mi%20beb%C3%A9%2Fni%C3%B1o%20en%20Chill%C3%A1n";

const concerns = [
  {
    emoji: "👶",
    title: "Pocas vocalizaciones o balbuceo",
    description:
      "Antes del año no vocaliza mucho o el balbuceo es muy escaso comparado con otros bebés.",
  },
  {
    emoji: "👋",
    title: "Pocos gestos (señalar, saludar)",
    description:
      "No señala objetos, no saluda o no imita gestos sencillos que esperarías a esa edad.",
  },
  {
    emoji: "🍼",
    title: "Menos de 50 palabras cerca del año y medio",
    description:
      "El vocabulario no crece o sigue muy limitado cuando debería empezar a armar pequeñas combinaciones.",
  },
  {
    emoji: "🧩",
    title: "Entiende poco lo que le dices",
    description:
      "No responde a su nombre, no sigue indicaciones simples o parece “en su mundo” al hablarle.",
  },
  {
    emoji: "😟",
    title: "Frustración o rabietas al comunicarse",
    description:
      "Llora o se altera porque no logra pedir lo que quiere con palabras o gestos claros.",
  },
  {
    emoji: "🏠",
    title: "En casa no saben cómo ayudar",
    description:
      "Quieren estimular en el día a día pero no tienen una rutina clara ni actividades adecuadas a la edad.",
  },
];

export default function EstimulacionTempranaLenguajePage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Estimulación temprana del lenguaje en Chillán (0 a 4 años)",
    description:
      "Servicio fonoaudiológico en Chillán orientado a la estimulación temprana del lenguaje en bebés y niños pequeños.",
    url: `${SITE_URL}${PAGE_PATH}`,
    specialty: "https://schema.org/SpeechTherapy",
    isPartOf: {
      "@type": "WebSite",
      name: "Katia Domínguez - Fonoaudióloga",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "MedicalBusiness",
      name: "Katia Domínguez - Fonoaudióloga infantil",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chillán",
        addressRegion: "Ñuble",
        addressCountry: "CL",
      },
      areaServed: {
        "@type": "City",
        name: "Chillán",
      },
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Desde qué edad se puede hacer estimulación temprana del lenguaje?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se puede orientar y trabajar desde los primeros meses de vida cuando hay señales de alerta o cuando los padres buscan apoyo para favorecer la comunicación. La estrategia cambia según la edad y el desarrollo del niño.",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué se diferencia de terapia de lenguaje para niños más grandes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En etapas tempranas el trabajo se apoya mucho en el juego, las rutinas del hogar y la participación de la familia. Las sesiones son más cortas, con materiales adecuados a la edad y objetivos centrados en comprensión, gestos y primeras palabras.",
        },
      },
      {
        "@type": "Question",
        name: "¿Debo llevar informes médicos o del pediatra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si los tienes, ayudan a tener una visión completa. Si no, igualmente podemos partir por la evaluación clínica y la historia que nos cuentas como familia.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        <section className="border-b border-emerald-100 bg-white/80 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                {
                  label: "Estimulación temprana del lenguaje",
                  href: PAGE_PATH,
                },
              ]}
            />
          </div>
        </section>

        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
                  Primera infancia • Chillán
                </span>
                <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Estimulación temprana del lenguaje en Chillán
                </h1>
                <p className="mb-6 text-xl leading-relaxed text-gray-700 sm:text-2xl">
                  Acompañamiento fonoaudiológico para bebés y niños de{" "}
                  <strong>0 a 4 años</strong>: primeras palabras, comprensión,
                  gestos y hábitos de comunicación en familia.
                </p>

                <ul className="mb-8 space-y-3 text-left text-base text-gray-700 sm:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      ✓
                    </span>
                    <span>
                      <strong>Evaluación observando el juego</strong> y la
                      interacción cotidiana, no solo “pruebas en frío”.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      ✓
                    </span>
                    <span>
                      <strong>Pautas concretas para casa</strong>: rutinas,
                      lectura compartida y momentos de conversación real.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      ✓
                    </span>
                    <span>
                      <strong>Más de 20 años</strong> trabajando infancia en
                      Chillán con enfoque cercano y basado en evidencia.
                    </span>
                  </li>
                </ul>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <WhatsAppCTA href={WHATSAPP_LINK}>
                    Consultar por WhatsApp
                  </WhatsAppCTA>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Te oriento sin compromiso • Respuesta en menos de 24 horas
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:mx-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-emerald-100 shadow-2xl">
                  <Image
                    src="/KatiaDominguezFonoaudiologa.png"
                    alt="Katia Domínguez - Fonoaudióloga en Chillán, estimulación temprana del lenguaje"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-2xl">🍼</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">0 a 4 años</p>
                      <p className="text-sm text-gray-600">
                        foco en primera infancia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Señales */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Señales que suelen motivar una consulta temprana
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Cada niño tiene su ritmo; estas son pistas frecuentes para
                pedir una evaluación y recibir orientación clara.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {concerns.map((concern, index) => (
                <ConcernCard
                  key={index}
                  emoji={concern.emoji}
                  title={concern.title}
                  description={concern.description}
                  tone="emerald"
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <WhatsAppCTA href={WHATSAPP_LINK}>
                Contar mi situación por WhatsApp
              </WhatsAppCTA>
              <p className="mt-3 text-sm text-gray-600">
                Si no estás segura o seguro, igual podemos revisar el caso
              </p>
            </div>
          </div>
        </section>

        {/* Qué hacemos */}
        <section className="bg-emerald-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Qué incluye el trabajo en estimulación temprana
              </h2>
              <p className="text-lg text-gray-600">
                Un plan que combina sesión clínica y lo que ocurre en casa —
                donde el lenguaje verdaderamente se practica cada día.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-md sm:p-10">
              <ul className="space-y-5 text-gray-700">
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg">
                    🗂️
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Historia y contexto familiar
                    </p>
                    <p className="text-sm text-gray-600">
                      Escuchamos cómo comunica en casa, en la sala cuna o con
                      sus cuidadores principales.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg">
                    🧸
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Observación y juego guiado
                    </p>
                    <p className="text-sm text-gray-600">
                      Evaluamos comprensión, gestos, imitación y producción de
                      sonidos en una atmósfera tranquila.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg">
                    📒
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Recomendaciones por escrito
                    </p>
                    <p className="text-sm text-gray-600">
                      Ideas de juegos, rutinas y material acorde a la edad para
                      que la familia pueda replicar en la semana.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg">
                    🔁
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Seguimiento en el tiempo
                    </p>
                    <p className="text-sm text-gray-600">
                      Ajustamos objetivos según avances: a veces bastan pocas
                      sesiones con buena práctica en casa.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enlaces relacionados */}
        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              También te puede interesar
            </h2>
            <p className="mb-8 text-gray-600">
              Otros contenidos del sitio relacionados con desarrollo del
              lenguaje en Chillán.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/servicios/estimulacion-temprana-del-lenguaje-chillan"
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 font-medium text-emerald-900 transition hover:bg-emerald-100"
              >
                Servicio: estimulación temprana (ficha)
              </Link>
              <Link
                href="/chillan/lenguaje-infantil"
                className="rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-800 transition hover:bg-gray-50"
              >
                Lenguaje infantil 2 a 10 años
              </Link>
              <Link
                href="/evaluacion-fonoaudiologica-infantil-chillan"
                className="rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-800 transition hover:bg-gray-50"
              >
                Evaluación fonoaudiológica infantil
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-emerald-100 bg-emerald-50/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Preguntas frecuentes
              </h2>
            </div>
            <div className="space-y-6">
              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>
                    ¿Desde qué edad se puede hacer estimulación temprana del
                    lenguaje?
                  </span>
                  <span className="flex-shrink-0 text-emerald-600 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Se puede orientar y trabajar desde los primeros meses de vida
                  cuando hay señales de alerta o cuando la familia quiere
                  reforzar la comunicación. La estrategia se adapta a la edad y
                  al momento evolutivo del niño.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>
                    ¿En qué se diferencia de terapia para niños más grandes?
                  </span>
                  <span className="flex-shrink-0 text-emerald-600 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  En etapas tempranas el eje es el juego, las rutinas y la
                  participación de adultos. Las sesiones suelen ser más cortas,
                  con materiales apropiados y metas centradas en comprensión,
                  gestos y primeras palabras.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Necesito informes médicos para partir?</span>
                  <span className="flex-shrink-0 text-emerald-600 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Si los tienes (pediatra, neonatología, etc.), suman contexto.
                  Si no, podemos comenzar igual con la evaluación clínica y lo
                  que nos cuentes como familia.
                </p>
              </details>
            </div>

            <div className="mt-12 text-center">
              <WhatsAppCTA href={WHATSAPP_LINK}>
                Escribir por WhatsApp
              </WhatsAppCTA>
              <p className="mt-3 text-sm text-gray-600">
                Katia Domínguez • Fonoaudióloga • Chillán
              </p>
            </div>
          </div>
        </section>

        {/* Cierre */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Dar tiempo al lenguaje también es dar herramientas a la familia
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-200">
              Si te preocupa cómo habla o cómo entiende tu bebé o niño pequeño,
              una evaluación temprana puede ordenar el panorama y proponer
              pasos concretos.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK} className="text-lg sm:text-xl">
              Pedir orientación por WhatsApp
            </WhatsAppCTA>
            <p className="mt-6 text-base text-gray-300">
              Atención presencial en Chillán • Primera infancia (0 a 4 años)
            </p>
          </div>
        </section>

        <footer className="bg-gray-950 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Katia Domínguez - Fonoaudióloga</p>
            <p className="mt-2">Chillán, Chile</p>
          </div>
        </footer>

        <StickyWhatsApp href={WHATSAPP_LINK} />
      </div>
    </>
  );
}
