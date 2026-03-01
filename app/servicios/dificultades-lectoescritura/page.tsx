import Image from "next/image";
import { Metadata } from "next";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { StickyWhatsApp } from "../../_components/StickyWhatsApp";

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/servicios/dificultades-lectoescritura";
const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20dificultades%20de%20lectura%20y%20escritura";

export const metadata: Metadata = {
  title: "Dificultades de Lectura y Escritura en Chillán | Fonoaudióloga",
  description:
    "Tratamiento de dificultades de lectura y escritura en niños en Chillán. Ayuda con problemas de lectoescritura, conciencia fonológica y dislexia. Fonoaudióloga con +20 años de experiencia.",
  keywords: [
    "dificultades lectoescritura Chillán",
    "problemas de lectura niños",
    "dislexia tratamiento Chillán",
    "fonoaudióloga lectoescritura",
    "conciencia fonológica",
    "aprender a leer dificultades",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Dificultades de Lectura y Escritura en Chillán",
    description:
      "Apoyo especializado para niños con dificultades en el aprendizaje de la lectura y escritura.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "es_CL",
  },
};

const signs = [
  "Dificultad para aprender las letras y sus sonidos",
  "Lee muy lento o con muchos errores",
  "Confunde letras similares (b/d, p/q)",
  "Problemas para comprender lo que lee",
  "Escribe con muchas faltas de ortografía",
  "Evita leer o escribir, se frustra",
  "Dificultad para copiar del pizarrón",
  "Problemas de comprensión lectora",
];

const whatWeWork = [
  {
    icon: "🔤",
    title: "Conciencia fonológica",
    description:
      "Habilidad para identificar y manipular los sonidos del lenguaje, base fundamental para la lectura.",
  },
  {
    icon: "📖",
    title: "Decodificación",
    description:
      "Aprender a convertir las letras en sonidos y unirlos para formar palabras.",
  },
  {
    icon: "⚡",
    title: "Fluidez lectora",
    description:
      "Leer con velocidad, precisión y entonación adecuadas para una buena comprensión.",
  },
  {
    icon: "🧠",
    title: "Comprensión lectora",
    description:
      "Entender el significado de lo que se lee, hacer inferencias y conectar ideas.",
  },
  {
    icon: "✏️",
    title: "Escritura",
    description:
      "Transcripción correcta, ortografía y organización de ideas por escrito.",
  },
  {
    icon: "📝",
    title: "Estrategias de estudio",
    description:
      "Técnicas para abordar textos escolares y mejorar el rendimiento académico.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Tratamiento de Dificultades de Lectoescritura",
  description:
    "Evaluación y tratamiento de dificultades de lectura y escritura en niños en Chillán.",
  provider: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  areaServed: {
    "@type": "City",
    name: "Chillán",
  },
  serviceType: "Tratamiento de lectoescritura",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿La fonoaudióloga puede ayudar con problemas de lectura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Muchas dificultades de lectura tienen su origen en problemas del lenguaje oral, especialmente en la conciencia fonológica. Los fonoaudiólogos estamos capacitados para evaluar y tratar estas dificultades.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo sé si mi hijo tiene dislexia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La dislexia se diagnostica formalmente con evaluaciones especializadas. Señales de alerta incluyen: dificultad persistente para aprender a leer, confusión de letras, lectura muy lenta, y problemas de ortografía a pesar de esfuerzo y práctica.",
      },
    },
    {
      "@type": "Question",
      name: "¿A qué edad se pueden detectar problemas de lectoescritura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se pueden detectar factores de riesgo desde los 4-5 años (antes de la enseñanza formal de lectura) evaluando conciencia fonológica. Los problemas de lectura se hacen evidentes en primero y segundo básico cuando se enseña a leer.",
      },
    },
  ],
};

export default function LectoescrituraPage() {
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
                { label: "Dificultades de lectoescritura" },
              ]}
            />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                  📚 Lectura y escritura
                </span>
                <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  Dificultades de lectoescritura en Chillán
                </h1>
                <p className="mb-6 text-xl text-gray-600">
                  ¿Tu hijo tiene problemas para aprender a leer o escribir?
                  Evaluación y tratamiento especializado para mejorar sus
                  habilidades.
                </p>
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Evaluación</strong> de conciencia fonológica y
                      lectoescritura
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Intervención basada en evidencia</strong> para
                      mejorar la lectura
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Coordinación escolar</strong> para apoyo en el
                      colegio
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
                    alt="Katia Domínguez - Fonoaudióloga especialista en lectoescritura en Chillán"
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

        {/* Warning Signs */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
              Señales de dificultades en lectoescritura
            </h2>
            <p className="mb-10 text-center text-lg text-gray-600">
              ¿Tu hijo presenta alguna de estas situaciones?
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {signs.map((sign) => (
                <div
                  key={sign}
                  className="flex items-center gap-3 rounded-xl border border-rose-100 bg-white p-4 shadow-sm"
                >
                  <span className="text-rose-500">⚠️</span>
                  <span className="text-gray-700">{sign}</span>
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

        {/* What We Work On */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              ¿Qué trabajamos para mejorar la lectoescritura?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whatWeWork.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 text-3xl">{item.icon}</div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connection to Language */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Por qué una fonoaudióloga para problemas de lectura?
            </h2>
            <div className="rounded-2xl bg-rose-50 p-6">
              <p className="mb-4 text-lg text-gray-700">
                La lectura y escritura son <strong>habilidades basadas en el
                lenguaje oral</strong>. Muchos niños con dificultades de
                lectoescritura tienen problemas subyacentes de:
              </p>
              <ul className="mb-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500">•</span>
                  <span>
                    <strong>Conciencia fonológica:</strong> identificar y
                    manipular los sonidos del lenguaje
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500">•</span>
                  <span>
                    <strong>Vocabulario:</strong> conocer el significado de las
                    palabras que leen
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500">•</span>
                  <span>
                    <strong>Comprensión del lenguaje:</strong> entender
                    estructuras gramaticales y textos
                  </span>
                </li>
              </ul>
              <p className="text-gray-700">
                Como fonoaudióloga, evalúo estas bases del lenguaje y trabajo
                tanto el lenguaje oral como las habilidades de lectoescritura.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>
                    ¿La fonoaudióloga puede ayudar con problemas de lectura?
                  </span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Sí. Muchas dificultades de lectura tienen su origen en
                  problemas del lenguaje oral, especialmente en la conciencia
                  fonológica. Los fonoaudiólogos estamos capacitados para
                  evaluar y tratar estas dificultades.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Cómo sé si mi hijo tiene dislexia?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  La dislexia se diagnostica formalmente con evaluaciones
                  especializadas. Señales de alerta incluyen: dificultad
                  persistente para aprender a leer, confusión de letras, lectura
                  muy lenta, y problemas de ortografía a pesar de esfuerzo y
                  práctica.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>
                    ¿A qué edad se pueden detectar problemas de lectoescritura?
                  </span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Se pueden detectar factores de riesgo desde los 4-5 años
                  (antes de la enseñanza formal de lectura) evaluando conciencia
                  fonológica. Los problemas de lectura se hacen evidentes en
                  primero y segundo básico cuando se enseña a leer.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Cuánto tiempo toma mejorar la lectura?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Depende de la severidad del problema y la constancia del
                  tratamiento. Generalmente se ven mejoras en 3-6 meses con
                  sesiones semanales y práctica en casa. Casos más severos
                  requieren intervención más prolongada.
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
                href="/servicios/terapia-lenguaje-infantil"
                className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-rose-300 hover:bg-rose-50"
              >
                <span className="text-2xl">👶</span>
                <p className="mt-2 font-medium text-gray-900">
                  Terapia de lenguaje infantil
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
              ¿Tu hijo tiene dificultades con la lectura o escritura?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Una evaluación puede identificar las causas y definir el mejor
              plan de apoyo.
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
