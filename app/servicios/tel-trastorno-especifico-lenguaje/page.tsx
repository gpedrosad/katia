import Image from "next/image";
import { Metadata } from "next";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { StickyWhatsApp } from "../../_components/StickyWhatsApp";

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/servicios/tel-trastorno-especifico-lenguaje";
const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20TEL";

export const metadata: Metadata = {
  title: "Tratamiento TEL en Chillán | Trastorno Específico del Lenguaje",
  description:
    "Tratamiento especializado del Trastorno Específico del Lenguaje (TEL) en niños en Chillán. Diagnóstico, terapia intensiva y apoyo escolar. Fonoaudióloga con +20 años de experiencia.",
  keywords: [
    "TEL Chillán",
    "trastorno específico del lenguaje",
    "TEL tratamiento",
    "fonoaudióloga TEL Chillán",
    "trastorno del desarrollo del lenguaje",
    "TDL tratamiento",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Tratamiento TEL en Chillán | Trastorno Específico del Lenguaje",
    description:
      "Tratamiento especializado del TEL con enfoque personalizado y apoyo familiar.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "es_CL",
  },
};

const characteristics = [
  {
    type: "TEL Expresivo",
    description: "Dificultad principalmente para expresarse",
    signs: [
      "Vocabulario limitado para su edad",
      "Oraciones cortas o mal estructuradas",
      "Dificultad para contar experiencias",
      "Comprensión relativamente mejor que expresión",
    ],
  },
  {
    type: "TEL Mixto",
    description: "Dificultad tanto para expresarse como para comprender",
    signs: [
      "Problemas de vocabulario y comprensión",
      "Dificultad para seguir instrucciones complejas",
      "Respuestas inapropiadas a preguntas",
      "Mayor impacto en el aprendizaje escolar",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Tratamiento del Trastorno Específico del Lenguaje (TEL)",
  description:
    "Diagnóstico y tratamiento especializado del TEL en niños en Chillán.",
  provider: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  areaServed: {
    "@type": "City",
    name: "Chillán",
  },
  serviceType: "Tratamiento TEL",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el TEL o Trastorno Específico del Lenguaje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El TEL es un trastorno del neurodesarrollo que afecta la adquisición y desarrollo del lenguaje sin que exista una causa evidente como pérdida auditiva, discapacidad intelectual o daño neurológico. Afecta aproximadamente al 7% de los niños.",
      },
    },
    {
      "@type": "Question",
      name: "¿El TEL se cura con tratamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El TEL es una condición que acompaña a la persona, pero con tratamiento adecuado los niños pueden mejorar significativamente sus habilidades lingüísticas y desarrollar estrategias compensatorias. La intervención temprana e intensiva produce los mejores resultados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo de tratamiento necesita un niño con TEL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tratamiento del TEL suele ser prolongado, generalmente de 1-3 años dependiendo de la severidad. Se requieren sesiones regulares (1-2 por semana) y trabajo constante en casa y en el colegio para lograr avances significativos.",
      },
    },
  ],
};

export default function TELPage() {
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
                { label: "TEL - Trastorno Específico del Lenguaje" },
              ]}
            />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                  💬 Trastorno del neurodesarrollo
                </span>
                <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  Tratamiento del TEL en Chillán
                </h1>
                <p className="mb-6 text-xl text-gray-600">
                  Trastorno Específico del Lenguaje: diagnóstico, terapia
                  intensiva y coordinación con el colegio para apoyar a tu hijo.
                </p>
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Evaluación especializada</strong> con pruebas
                      específicas para TEL
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Terapia intensiva</strong> con sesiones semanales
                      y ejercicios para casa
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Coordinación escolar</strong> con orientaciones
                      para profesores
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
                    alt="Katia Domínguez - Fonoaudióloga especialista en TEL en Chillán"
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

        {/* What is TEL */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
              ¿Qué es el TEL o Trastorno Específico del Lenguaje?
            </h2>
            <div className="mb-10 rounded-2xl bg-rose-50 p-6">
              <p className="text-lg text-gray-700">
                El <strong>TEL</strong> (también llamado <strong>TDL</strong> o
                Trastorno del Desarrollo del Lenguaje) es un trastorno del
                neurodesarrollo que afecta la adquisición y desarrollo del
                lenguaje <strong>sin una causa evidente</strong> como pérdida
                auditiva, discapacidad intelectual o daño neurológico.
              </p>
              <p className="mt-4 text-gray-600">
                Afecta aproximadamente al 7% de los niños y puede impactar
                significativamente el rendimiento escolar y las relaciones
                sociales si no se trata a tiempo.
              </p>
            </div>

            {/* Types */}
            <div className="space-y-6">
              {characteristics.map((type) => (
                <div
                  key={type.type}
                  className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {type.type}
                  </h3>
                  <p className="mb-4 text-gray-600">{type.description}</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {type.signs.map((sign) => (
                      <li key={sign} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-rose-500">•</span>
                        <span className="text-gray-700">{sign}</span>
                      </li>
                    ))}
                  </ul>
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

        {/* How We Help */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              ¿Cómo ayudamos a niños con TEL?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">🔍</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Evaluación exhaustiva
                </h3>
                <p className="text-gray-600">
                  Identificamos el perfil específico del niño: qué áreas están
                  más afectadas y cuáles son sus fortalezas.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">📚</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Trabajo en vocabulario
                </h3>
                <p className="text-gray-600">
                  Ampliamos su vocabulario con estrategias específicas y
                  múltiples exposiciones a nuevas palabras.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">🗣️</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Estructura del lenguaje
                </h3>
                <p className="text-gray-600">
                  Enseñamos a construir oraciones más complejas y a organizar
                  ideas para expresarse mejor.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">👂</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Comprensión
                </h3>
                <p className="text-gray-600">
                  Trabajamos la comprensión de instrucciones, textos y conceptos
                  abstractos.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">🏫</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Apoyo escolar
                </h3>
                <p className="text-gray-600">
                  Coordinamos con el colegio y damos orientaciones para que los
                  profesores apoyen al niño.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">👨‍👩‍👧</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Trabajo familiar
                </h3>
                <p className="text-gray-600">
                  Te enseñamos estrategias para estimular el lenguaje en la vida
                  diaria de tu hijo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Preguntas frecuentes sobre TEL
            </h2>
            <div className="space-y-4">
              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿El TEL se cura con tratamiento?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  El TEL es una condición que acompaña a la persona, pero con
                  tratamiento adecuado los niños pueden mejorar significativamente
                  sus habilidades lingüísticas y desarrollar estrategias
                  compensatorias. La intervención temprana e intensiva produce
                  los mejores resultados.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>
                    ¿Cuánto tiempo de tratamiento necesita un niño con TEL?
                  </span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  El tratamiento del TEL suele ser prolongado, generalmente de
                  1-3 años dependiendo de la severidad. Se requieren sesiones
                  regulares (1-2 por semana) y trabajo constante en casa y en el
                  colegio para lograr avances significativos.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿El TEL afecta la inteligencia?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  No. El TEL afecta específicamente el lenguaje, no la
                  inteligencia general. De hecho, para diagnosticar TEL se
                  requiere que el niño tenga inteligencia normal. Sin embargo,
                  las dificultades de lenguaje pueden impactar el rendimiento
                  académico.
                </p>
              </details>

              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Cómo se diferencia el TEL del retraso del lenguaje?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  El retraso del lenguaje es temporal: el niño va más lento pero
                  eventualmente alcanza a sus pares. El TEL es un trastorno
                  persistente que requiere intervención especializada. Una
                  evaluación profesional puede diferenciar entre ambos.
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
                href="/servicios/tea-trastorno-espectro-autista"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
              >
                <span className="text-2xl">🧩</span>
                <p className="mt-2 font-medium text-gray-900">
                  TEA y comunicación
                </p>
              </a>
              <a
                href="/servicios/dificultades-lectoescritura"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
              >
                <span className="text-2xl">📚</span>
                <p className="mt-2 font-medium text-gray-900">
                  Lectoescritura
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Tu hijo tiene diagnóstico de TEL o sospechas que puede tenerlo?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Una evaluación especializada puede confirmar el diagnóstico y
              definir el mejor plan de tratamiento.
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
