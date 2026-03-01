import Image from "next/image";
import { Metadata } from "next";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { StickyWhatsApp } from "../../_components/StickyWhatsApp";

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/servicios/trastornos-del-habla";
const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20trastornos%20del%20habla";

export const metadata: Metadata = {
  title: "Tratamiento de Trastornos del Habla en Chillán | Dislalia, Pronunciación",
  description:
    "Tratamiento de trastornos del habla en niños en Chillán: dislalia, problemas de pronunciación, articulación y trastornos fonológicos. Fonoaudióloga con +20 años de experiencia.",
  keywords: [
    "trastornos del habla Chillán",
    "dislalia tratamiento Chillán",
    "problemas de pronunciación niños",
    "fonoaudióloga habla Chillán",
    "trastornos fonológicos",
    "articulación del habla",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Tratamiento de Trastornos del Habla en Chillán",
    description:
      "Tratamiento especializado de dislalia y problemas de pronunciación en niños.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "es_CL",
  },
};

const disorders = [
  {
    name: "Dislalia",
    description:
      "Dificultad para pronunciar ciertos sonidos correctamente. El niño omite, sustituye o distorsiona sonidos.",
    examples: ["Dice 'tasa' en vez de 'casa'", "Dice 'pedo' en vez de 'perro'", "No puede decir la 'r'"],
  },
  {
    name: "Trastorno fonológico",
    description:
      "Patrones sistemáticos de errores en los sonidos del habla que afectan la inteligibilidad.",
    examples: ["Simplifica palabras complejas", "Elimina sílabas", "Múltiples sustituciones"],
  },
  {
    name: "Apraxia del habla",
    description:
      "Dificultad para planificar y coordinar los movimientos necesarios para hablar.",
    examples: ["Inconsistencia en errores", "Esfuerzo visible al hablar", "Mejor imitación que habla espontánea"],
  },
  {
    name: "Disartria infantil",
    description:
      "Debilidad o falta de control en los músculos del habla, afectando claridad y ritmo.",
    examples: ["Habla arrastrada", "Voz débil o ronca", "Dificultad con movimientos orales"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Tratamiento de Trastornos del Habla",
  description:
    "Tratamiento de dislalia, trastornos fonológicos y problemas de pronunciación en niños en Chillán.",
  provider: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  areaServed: {
    "@type": "City",
    name: "Chillán",
  },
  serviceType: "Tratamiento de trastornos del habla",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la dislalia y cómo se trata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La dislalia es la dificultad para pronunciar ciertos sonidos correctamente. Se trata con ejercicios específicos de articulación, praxias orofaciales y práctica sistemática. La mayoría de los niños mejoran significativamente con terapia.",
      },
    },
    {
      "@type": "Question",
      name: "¿A qué edad un niño debe pronunciar bien todos los sonidos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A los 4 años, la mayoría de los sonidos deben estar adquiridos. Los sonidos más difíciles como la 'r' y grupos consonánticos pueden tardar hasta los 6 años. Si a los 5-6 años persisten errores, es recomendable consultar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo toma corregir un problema de pronunciación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tipo y cantidad de sonidos afectados. Problemas simples (1-2 sonidos) pueden corregirse en 2-3 meses. Trastornos fonológicos más complejos requieren 6-12 meses de tratamiento.",
      },
    },
  ],
};

export default function TrastornosHablaPage() {
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
                { label: "Trastornos del habla" },
              ]}
            />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                  🗣️ Pronunciación y articulación
                </span>
                <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  Tratamiento de trastornos del habla en Chillán
                </h1>
                <p className="mb-6 text-xl text-gray-600">
                  ¿Tu hijo tiene problemas para pronunciar ciertos sonidos?
                  Tratamiento especializado de dislalia y trastornos fonológicos.
                </p>
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Postítulo en trastornos fonológicos</strong> —
                      especialización específica
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Ejercicios personalizados</strong> según los
                      sonidos afectados
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Material para practicar en casa</strong> y
                      acelerar el progreso
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
                    alt="Katia Domínguez - Fonoaudióloga especialista en trastornos del habla en Chillán"
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

        {/* Types of Disorders */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
              Tipos de trastornos del habla que tratamos
            </h2>
            <p className="mb-10 text-center text-lg text-gray-600">
              Cada trastorno requiere un enfoque específico de tratamiento
            </p>
            <div className="space-y-6">
              {disorders.map((disorder) => (
                <div
                  key={disorder.name}
                  className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {disorder.name}
                  </h3>
                  <p className="mb-4 text-gray-600">{disorder.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {disorder.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full bg-rose-50 px-3 py-1 text-sm text-rose-700"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
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

        {/* How We Work */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              ¿Cómo trabajamos los trastornos del habla?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-700">
                  1
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">Evaluación</h3>
                <p className="text-sm text-gray-600">
                  Identificamos qué sonidos están afectados y por qué
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-700">
                  2
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Praxias orofaciales
                </h3>
                <p className="text-sm text-gray-600">
                  Ejercicios para fortalecer y coordinar los músculos del habla
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-700">
                  3
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Articulación
                </h3>
                <p className="text-sm text-gray-600">
                  Enseñamos la posición correcta para producir cada sonido
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-700">
                  4
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Generalización
                </h3>
                <p className="text-sm text-gray-600">
                  Practicamos en palabras, oraciones y habla espontánea
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Preguntas frecuentes sobre trastornos del habla
            </h2>
            <div className="space-y-4">
              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Qué es la dislalia y cómo se trata?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  La dislalia es la dificultad para pronunciar ciertos sonidos
                  correctamente. Se trata con ejercicios específicos de
                  articulación, praxias orofaciales y práctica sistemática. La
                  mayoría de los niños mejoran significativamente con terapia.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>
                    ¿A qué edad un niño debe pronunciar bien todos los sonidos?
                  </span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  A los 4 años, la mayoría de los sonidos deben estar
                  adquiridos. Los sonidos más difíciles como la &apos;r&apos; y grupos
                  consonánticos pueden tardar hasta los 6 años. Si a los 5-6
                  años persisten errores, es recomendable consultar.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>
                    ¿Cuánto tiempo toma corregir un problema de pronunciación?
                  </span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Depende del tipo y cantidad de sonidos afectados. Problemas
                  simples (1-2 sonidos) pueden corregirse en 2-3 meses.
                  Trastornos fonológicos más complejos requieren 6-12 meses de
                  tratamiento.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Mi hijo superará esto solo con el tiempo?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Algunos errores de pronunciación se corrigen solos, pero
                  muchos persisten si no se tratan. Mientras más tiempo pase,
                  más difícil es cambiar hábitos de articulación. Es mejor
                  consultar y descartar problemas.
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
              <a
                href="/glosario/dislalia"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
              >
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">
                  ¿Qué es la dislalia?
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Tu hijo tiene problemas de pronunciación?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Con tratamiento adecuado, la mayoría de los niños mejoran
              significativamente. Agenda una evaluación.
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
