import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/glosario/tel";
const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20TEL";

export const metadata: Metadata = {
  title: "¿Qué es el TEL? | Trastorno Específico del Lenguaje Explicado",
  description:
    "Qué es el TEL (Trastorno Específico del Lenguaje): causas, síntomas, diagnóstico y tratamiento. Guía para padres. Fonoaudióloga especialista en Chillán.",
  keywords: [
    "qué es TEL",
    "trastorno específico del lenguaje",
    "TEL definición",
    "TEL en niños",
    "síntomas TEL",
    "tratamiento TEL",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "¿Qué es el TEL? | Trastorno Específico del Lenguaje",
    description:
      "Guía completa sobre el TEL: qué es, síntomas, diagnóstico y tratamiento.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    locale: "es_CL",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿Qué es el TEL? Trastorno Específico del Lenguaje",
  description:
    "Guía completa sobre el TEL: definición, síntomas, diagnóstico y opciones de tratamiento.",
  author: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué significa TEL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TEL significa Trastorno Específico del Lenguaje. Es un trastorno del neurodesarrollo que afecta la adquisición y desarrollo del lenguaje sin causa aparente como pérdida auditiva, discapacidad intelectual o daño neurológico.",
      },
    },
    {
      "@type": "Question",
      name: "¿El TEL es lo mismo que TDL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, actualmente se usa más el término TDL (Trastorno del Desarrollo del Lenguaje) en lugar de TEL. Ambos nombres se refieren a la misma condición.",
      },
    },
    {
      "@type": "Question",
      name: "¿El TEL se cura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El TEL es una condición que acompaña a la persona, pero con tratamiento adecuado los niños mejoran significativamente y desarrollan estrategias para comunicarse efectivamente.",
      },
    },
  ],
};

export default function TELGlosarioPage() {
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
        <article className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Glosario", href: "/glosario" },
                { label: "TEL" },
              ]}
            />

            <header className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                Trastornos del lenguaje
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                ¿Qué es el TEL?
              </h1>
              <p className="text-xl text-gray-600">
                Trastorno Específico del Lenguaje: guía completa para padres
                sobre síntomas, diagnóstico y tratamiento.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2>Definición de TEL</h2>
              <p>
                El <strong>TEL</strong> (Trastorno Específico del Lenguaje),
                también llamado <strong>TDL</strong> (Trastorno del Desarrollo
                del Lenguaje), es un trastorno del neurodesarrollo que afecta la
                adquisición y desarrollo del lenguaje.
              </p>
              <p>Se diagnostica cuando:</p>
              <ul>
                <li>
                  El niño tiene dificultades significativas de lenguaje para su
                  edad
                </li>
                <li>No hay una causa evidente como pérdida auditiva</li>
                <li>No hay discapacidad intelectual</li>
                <li>No hay daño neurológico conocido</li>
                <li>Las dificultades no se explican por falta de estimulación</li>
              </ul>
              <p>
                Afecta aproximadamente al <strong>7% de los niños</strong> y es
                más frecuente en varones.
              </p>

              <h2>Tipos de TEL</h2>
              <h3>TEL Expresivo</h3>
              <p>
                El niño tiene más dificultades para <strong>expresarse</strong>{" "}
                que para comprender:
              </p>
              <ul>
                <li>Vocabulario limitado para su edad</li>
                <li>Oraciones cortas o mal estructuradas</li>
                <li>Dificultad para contar experiencias</li>
                <li>Entiende mejor de lo que habla</li>
              </ul>

              <h3>TEL Mixto (Receptivo-Expresivo)</h3>
              <p>
                El niño tiene dificultades tanto para{" "}
                <strong>expresarse como para comprender</strong>:
              </p>
              <ul>
                <li>Problemas de vocabulario y comprensión</li>
                <li>Dificultad para seguir instrucciones</li>
                <li>Respuestas inapropiadas a preguntas</li>
                <li>Mayor impacto en el aprendizaje escolar</li>
              </ul>

              <h2>Señales de alerta</h2>
              <ul>
                <li>Primeras palabras tardías (después de los 2 años)</li>
                <li>Vocabulario muy limitado para la edad</li>
                <li>
                  Oraciones cortas cuando los pares hablan con frases más
                  largas
                </li>
                <li>Dificultad para aprender palabras nuevas</li>
                <li>Problemas para contar lo que pasó en el colegio</li>
                <li>Dificultad para seguir instrucciones de 2-3 pasos</li>
                <li>Frustración al comunicarse</li>
                <li>Dificultades escolares a pesar de ser inteligente</li>
              </ul>

              <h2>Diferencia entre TEL y retraso del lenguaje</h2>
              <div className="rounded-xl bg-rose-50 p-6">
                <p className="mb-4">
                  <strong>Retraso del lenguaje:</strong> El niño va más lento
                  pero eventualmente alcanza a sus pares. Es temporal.
                </p>
                <p>
                  <strong>TEL:</strong> Las dificultades persisten en el tiempo
                  y sin intervención no se resuelven solas. Requiere tratamiento
                  especializado.
                </p>
              </div>

              <h2>Tratamiento del TEL</h2>
              <p>
                El tratamiento del TEL es <strong>prolongado e intensivo</strong>
                , generalmente de 1-3 años:
              </p>
              <ul>
                <li>Sesiones fonoaudiológicas regulares (1-2 por semana)</li>
                <li>Trabajo en vocabulario, gramática y comprensión</li>
                <li>Estrategias para el hogar</li>
                <li>Coordinación con el colegio</li>
                <li>Apoyo multidisciplinario cuando es necesario</li>
              </ul>

              <h2>Preguntas frecuentes</h2>

              <h3>¿El TEL afecta la inteligencia?</h3>
              <p>
                No. El TEL afecta específicamente el lenguaje, no la
                inteligencia general. Los niños con TEL tienen inteligencia
                normal.
              </p>

              <h3>¿El TEL se cura?</h3>
              <p>
                El TEL es una condición que acompaña a la persona, pero con
                tratamiento adecuado los niños mejoran significativamente y
                desarrollan estrategias compensatorias.
              </p>

              <h3>¿El TEL afecta la lectura?</h3>
              <p>
                Muchos niños con TEL tienen dificultades de lectura y escritura
                porque el lenguaje oral es la base de la lectoescritura.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                ¿Sospechas que tu hijo puede tener TEL?
              </h2>
              <p className="mb-6 text-gray-600">
                Una evaluación especializada puede confirmar el diagnóstico y
                definir el mejor plan de tratamiento.
              </p>
              <WhatsAppCTA href={WHATSAPP_LINK}>
                Consultar por WhatsApp
              </WhatsAppCTA>
            </div>

            {/* Related */}
            <div className="mt-12">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Términos relacionados
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/glosario/retraso-del-lenguaje"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    Retraso del lenguaje
                  </h3>
                  <p className="text-sm text-gray-600">
                    Desarrollo del lenguaje más lento de lo esperado.
                  </p>
                </Link>
                <Link
                  href="/servicios/tel-trastorno-especifico-lenguaje"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    Tratamiento TEL en Chillán
                  </h3>
                  <p className="text-sm text-gray-600">
                    Servicio especializado de tratamiento.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
