import Image from "next/image";
import { Metadata } from "next";

// Componentes compartidos
import { ConcernCard } from "../chillan/lenguaje-infantil/_components/ConcernCard";
import { WhatsAppCTA } from "../chillan/lenguaje-infantil/_components/WhatsAppCTA";
import { StickyWhatsApp } from "../chillan/lenguaje-infantil/_components/StickyWhatsApp";

// ============================================================================
// CONFIGURACIÓN - Editar estos valores según sea necesario
// ============================================================================

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/fonoaudiologa-ninos-chillan";

const WHATSAPP_NUMBER = "56995497838";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n%20de%20lenguaje%20para%20mi%20hijo%2Fa`;

// ============================================================================
// METADATA SEO
// ============================================================================

export const metadata: Metadata = {
  title:
    "Fonoaudióloga en Chillán para Niños | Evaluación y Terapia de Lenguaje y Habla",
  description:
    "Evaluación y terapia de lenguaje y habla para niños en Chillán. Especialista en trastornos del habla, dificultades de pronunciación y lectoescritura. +20 años de experiencia. Agenda tu hora.",
  keywords: [
    "fonoaudióloga en Chillán",
    "fonoaudióloga para niños",
    "terapia de lenguaje para niños",
    "trastornos del habla",
    "dificultades de lectura y escritura",
    "fonoaudiología infantil Chillán",
    "problemas de pronunciación niños",
    "terapia fonoaudiológica Chillán",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Fonoaudióloga en Chillán para Niños – Terapia de Lenguaje y Habla",
    description:
      "Evaluación y tratamiento fonoaudiológico infantil en Chillán. Ayudamos a tu hijo con problemas de lenguaje, habla, pronunciación y lectoescritura.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "es_CL",
    siteName: "Katia Domínguez - Fonoaudióloga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fonoaudióloga en Chillán para Niños | Terapia de Lenguaje",
    description:
      "Evaluación y terapia de lenguaje y habla para niños en Chillán. +20 años de experiencia.",
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

// ============================================================================
// JSON-LD STRUCTURED DATA
// ============================================================================

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}${PAGE_PATH}#business`,
  name: "Katia Domínguez - Fonoaudióloga Infantil",
  description:
    "Fonoaudiología para niños en Chillán. Evaluación y terapia de lenguaje, habla, trastornos fonológicos y dificultades de lectura y escritura.",
  url: `${SITE_URL}${PAGE_PATH}`,
  telephone: "+56995497838",
  // TODO: Agregar dirección real cuando esté disponible
  // address: {
  //   "@type": "PostalAddress",
  //   streetAddress: "Dirección",
  //   addressLocality: "Chillán",
  //   addressRegion: "Ñuble",
  //   addressCountry: "CL"
  // },
  areaServed: {
    "@type": "City",
    name: "Chillán",
    "@id": "https://www.wikidata.org/wiki/Q203222",
  },
  availableLanguage: {
    "@type": "Language",
    name: "Español",
    alternateName: "es",
  },
  serviceType: [
    "Fonoaudiología infantil",
    "Terapia de lenguaje",
    "Terapia del habla",
    "Trastornos fonológicos",
    "Dificultades de lectura y escritura",
    "Evaluación fonoaudiológica",
  ],
  priceRange: "$$",
  // TODO: Agregar redes sociales cuando estén disponibles
  // sameAs: [
  //   "https://www.instagram.com/...",
  //   "https://www.facebook.com/..."
  // ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Fonoaudiología Infantil",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Evaluación fonoaudiológica infantil",
          description:
            "Evaluación completa de lenguaje y habla para niños con informe detallado",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Terapia de lenguaje",
          description:
            "Tratamiento de trastornos del lenguaje expresivo y comprensivo",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Terapia del habla",
          description:
            "Tratamiento de dificultades de pronunciación y trastornos fonológicos",
        },
      },
    ],
  },
};

// FAQ Schema con estadísticas y formato GEO (+40% citabilidad IA)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿A qué edad debe llevar a mi hijo al fonoaudiólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes consultar desde los 18 meses si tu hijo no dice palabras, o a cualquier edad ante dificultades en lenguaje, habla o pronunciación. A los 2 años se esperan unas 50 palabras y frases de 2 palabras. La intervención temprana mejora significativamente los resultados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas sesiones de terapia de lenguaje son necesarias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del diagnóstico. Algunos casos mejoran en 3-6 meses (12-24 sesiones), otros requieren más tiempo. La evaluación inicial dura aproximadamente 60 minutos e incluye informe con estimado personalizado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo sé si mi hijo tiene un trastorno del habla o del lenguaje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Señales frecuentes: habla poco para su edad, no sigue instrucciones simples, pronuncia mal varios sonidos, se frustra al comunicarse o tiene dificultades de lectura y escritura. Una evaluación fonoaudiológica de ~60 minutos determina si existe trastorno y el mejor tratamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿La fonoaudióloga atiende niños con TEL o TEA en Chillán?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El TEL (Trastorno Específico del Lenguaje) afecta aproximadamente al 7% de los niños. Trabajo con TEL y con niños dentro del espectro autista (TEA) que requieran apoyo en comunicación. Cada caso se evalúa de forma individual.",
      },
    },
  ],
};

// WebPage con SpeakableSpecification (GEO: extracción por IA y búsqueda por voz)
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
  name: "Fonoaudióloga en Chillán para Niños | Evaluación y Terapia de Lenguaje",
  description: "Evaluación y terapia de lenguaje y habla para niños en Chillán. +20 años de experiencia. Atención presencial.",
  url: `${SITE_URL}${PAGE_PATH}`,
  inLanguage: "es-CL",
  isPartOf: { "@type": "WebSite", name: "Katia Domínguez - Fonoaudióloga", url: SITE_URL },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "[data-speakable]"],
  },
};

// ============================================================================
// DATOS DE LA PÁGINA
// ============================================================================

const concerns = [
  {
    emoji: "🗣️",
    title: "Habla poco para su edad",
    description:
      "Tu hijo dice menos palabras de las esperadas o le cuesta formar oraciones completas.",
  },
  {
    emoji: "👂",
    title: "No comprende instrucciones",
    description:
      "Parece no entender lo que le dices o se confunde con indicaciones simples.",
  },
  {
    emoji: "😤",
    title: "Se frustra al comunicarse",
    description:
      "Se enoja o hace pataletas porque no logra expresar lo que quiere o necesita.",
  },
  {
    emoji: "🔤",
    title: "Pronuncia mal algunos sonidos",
    description:
      "Cambia, omite o distorsiona sonidos al hablar y cuesta entenderle.",
  },
  {
    emoji: "📚",
    title: "Dificultades de lectura y escritura",
    description:
      "Le cuesta aprender a leer, escribir o confunde letras y palabras.",
  },
  {
    emoji: "🤝",
    title: "Problemas para socializar",
    description:
      "Le cuesta interactuar con otros niños, iniciar o mantener conversaciones.",
  },
];

const therapySteps = [
  {
    number: 1,
    title: "Contacto inicial",
    description:
      "Escríbeme por WhatsApp. Te respondo el mismo día para coordinar.",
  },
  {
    number: 2,
    title: "Evaluación completa",
    description:
      "Sesión de 60 min. en Chillán con pruebas específicas de lenguaje y habla.",
  },
  {
    number: 3,
    title: "Diagnóstico e informe",
    description:
      "Recibes un informe detallado con diagnóstico y plan de tratamiento.",
  },
  {
    number: 4,
    title: "Terapia personalizada",
    description:
      "Sesiones semanales con enfoque lúdico + actividades para practicar en casa.",
  },
];

const benefits = [
  {
    icon: "🎯",
    title: "Mejor comunicación",
    description:
      "Tu hijo podrá expresar sus ideas, necesidades y emociones con mayor claridad.",
  },
  {
    icon: "📖",
    title: "Mejor rendimiento escolar",
    description:
      "Una buena base de lenguaje facilita el aprendizaje de lectura, escritura y otras materias.",
  },
  {
    icon: "😊",
    title: "Mayor autoestima",
    description:
      "Al comunicarse mejor, los niños se sienten más seguros y confiados socialmente.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Menos frustración familiar",
    description:
      "La comunicación fluida reduce conflictos y mejora la dinámica en casa.",
  },
];

// ============================================================================
// COMPONENTE DE LA PÁGINA
// ============================================================================

export default function FonoaudiologaNinosChillanPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                  📍 Atención presencial en Chillán
                </span>

                {/* H1 Principal - Keyword principal */}
                <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Fonoaudióloga en Chillán para niños
                </h1>

                <p className="mb-6 text-xl leading-relaxed text-gray-700 sm:text-2xl">
                  Evaluación y terapia de lenguaje y habla para niños de 2 a 10
                  años
                </p>

                {/* Bullets de beneficios */}
                <ul className="mb-8 space-y-3 text-left text-base text-gray-700 sm:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Evaluación completa</strong> con informe detallado
                      en la primera sesión
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Terapia de lenguaje</strong> con enfoque lúdico y
                      personalizado
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Más de 20 años</strong> tratando trastornos del
                      habla infantil
                    </span>
                  </li>
                </ul>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <WhatsAppCTA href={WHATSAPP_LINK}>
                    Agendar evaluación por WhatsApp
                  </WhatsAppCTA>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Respondo en menos de 24 horas • Lunes a Viernes
                </p>
              </div>

              {/* Image */}
              <div className="relative mx-auto w-full max-w-md lg:mx-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-100 shadow-2xl">
                  <Image
                    src="/KatiaDominguezFonoaudiologa.png"
                    alt="Katia Domínguez - Fonoaudióloga especialista en niños en Chillán"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">+20 años</p>
                      <p className="text-sm text-gray-600">de experiencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Consult Section */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              {/* H2 con variación de keyword */}
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                ¿Cuándo consultar a una fonoaudióloga por tu hijo?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Si tu hijo presenta alguna de estas señales, una evaluación de
                lenguaje puede ayudar a detectar y tratar problemas a tiempo.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {concerns.map((concern, index) => (
                <ConcernCard
                  key={index}
                  emoji={concern.emoji}
                  title={concern.title}
                  description={concern.description}
                />
              ))}
            </div>

            {/* CTA intermedio */}
            <div className="mt-12 text-center">
              <WhatsAppCTA href={WHATSAPP_LINK}>
                Consultar mi caso por WhatsApp
              </WhatsAppCTA>
              <p className="mt-3 text-sm text-gray-600">
                Te respondo con una orientación inicial sin compromiso
              </p>
            </div>
          </div>
        </section>

        {/* How Therapy Works Section */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              {/* H2 con keyword de terapia */}
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                ¿Cómo es la terapia de lenguaje para niños?
              </h2>
              <p className="text-lg text-gray-600">
                Un proceso simple y cercano, diseñado para que tu hijo aprenda
                jugando
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {therapySteps.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-2xl border-2 border-rose-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-200 text-3xl font-bold text-rose-700">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Early Intervention */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              {/* H2 con beneficios de intervención */}
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Beneficios de la intervención temprana
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Tratar los trastornos del habla y del lenguaje a tiempo marca
                una diferencia significativa en el desarrollo de tu hijo.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-6"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Professional */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-white p-8 shadow-md sm:p-12">
              <div className="grid items-center gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  {/* H2 sobre la profesional */}
                  <h2 className="mb-6 text-3xl font-bold text-gray-900">
                    Tu fonoaudióloga en Chillán
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Soy <strong>Katia Domínguez</strong>, fonoaudióloga con más
                    de 20 años ayudando a niños de Chillán y la región a
                    desarrollar su lenguaje y comunicación.
                  </p>
                  <ul className="mb-6 space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                      </span>
                      <span>
                        <strong>Fonoaudióloga</strong> titulada Universidad de
                        Chile
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                      </span>
                      <span>
                        <strong>Postítulo</strong> en Trastorno Fonológico
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                      </span>
                      <span>
                        <strong>Especialista</strong> en trastornos del habla y
                        del lenguaje en niños
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                      </span>
                      <span>
                        <strong>Experiencia</strong> en dificultades de lectura
                        y escritura
                      </span>
                    </li>
                  </ul>
                  <p className="text-base leading-relaxed text-gray-600">
                    Mi enfoque combina técnicas basadas en evidencia con un
                    trato cercano y empático, porque cada niño aprende mejor
                    cuando se siente seguro y motivado.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full bg-rose-100 shadow-lg">
                    <Image
                      src="/KatiaDominguezFonoaudiologa.png"
                      alt="Katia Domínguez - Fonoaudióloga infantil en Chillán"
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              {/* H2 para FAQ */}
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Preguntas frecuentes sobre terapia de lenguaje
              </h2>
            </div>
            <div className="space-y-6">
              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>
                    ¿A qué edad debo llevar a mi hijo al fonoaudiólogo?
                  </span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Puedes consultar desde los 18 meses si notas que tu hijo no
                  dice palabras, o a cualquier edad si observas dificultades en
                  el lenguaje, habla o pronunciación. Mientras más temprano se
                  detecte un problema, mejores son los resultados.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Cuántas sesiones de terapia son necesarias?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Depende del diagnóstico. Algunos casos de trastornos del habla
                  mejoran en 3-6 meses (12-24 sesiones), otros requieren más
                  tiempo. En la evaluación inicial te daré un estimado según el
                  caso de tu hijo.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>
                    ¿Cómo sé si mi hijo tiene un trastorno del habla o del
                    lenguaje?
                  </span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Algunas señales incluyen: habla poco para su edad, no sigue
                  instrucciones simples, pronuncia mal varios sonidos, se
                  frustra al comunicarse, o tiene dificultades de lectura y
                  escritura. Una evaluación profesional puede determinar si
                  existe un trastorno y cuál es el mejor tratamiento.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Trabaja con niños con TEL o TEA?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Sí, trabajo con niños con Trastorno Específico del Lenguaje
                  (TEL) y también con niños dentro del espectro autista (TEA)
                  que requieran apoyo en comunicación y lenguaje. Cada caso se
                  evalúa de forma individual.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Dónde atiende en Chillán?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Atiendo en consulta particular en Chillán. Al agendar tu hora
                  por WhatsApp, te envío la dirección exacta y referencias de
                  cómo llegar.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>
                    ¿Puede ayudar con dificultades de lectura y escritura?
                  </span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Sí, muchas dificultades de lectura y escritura tienen su
                  origen en problemas del lenguaje oral. Trabajo tanto el
                  lenguaje hablado como las habilidades pre-lectoras y de
                  lectoescritura cuando es necesario.
                </p>
              </details>
            </div>

            {/* CTA after FAQs */}
            <div className="mt-12 text-center">
              <WhatsAppCTA href={WHATSAPP_LINK}>
                Resolver mis dudas por WhatsApp
              </WhatsAppCTA>
              <p className="mt-3 text-sm text-gray-600">
                Sin compromiso • Te respondo el mismo día
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Da el primer paso hoy
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-200">
              Una evaluación de lenguaje a tiempo puede marcar la diferencia en
              el desarrollo de tu hijo. Escríbeme y conversemos sobre su caso.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK} className="text-lg sm:text-xl">
              Agendar evaluación por WhatsApp
            </WhatsAppCTA>
            <p className="mt-6 text-base text-gray-300">
              ✓ Respondo el mismo día &nbsp;•&nbsp; ✓ Atención presencial en
              Chillán
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Katia Domínguez - Fonoaudióloga</p>
            <p className="mt-2">
              Fonoaudióloga en Chillán • Terapia de lenguaje para niños
            </p>
          </div>
        </footer>

        {/* Sticky WhatsApp Button */}
        <StickyWhatsApp href={WHATSAPP_LINK} />
      </div>
    </>
  );
}
