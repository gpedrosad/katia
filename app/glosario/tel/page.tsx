import Link from "next/link";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/glosario/tel";
const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20TEL";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "¿Qué es el TEL? | Trastorno Específico del Lenguaje Explicado",
  description:
    "El TEL (TDL) es un trastorno del desarrollo del lenguaje en niños. Definición, síntomas y tratamiento en Chillán, Ñuble, Chile. Evaluación fonoaudiológica.",
  keywords: [
    "qué es TEL",
    "trastorno específico del lenguaje",
    "TEL definición",
    "TEL en niños",
    "síntomas TEL",
    "tratamiento TEL",
  ],
  ogType: "article",
});

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
  datePublished: "2024-06-01",
  dateModified: "2026-05-20",
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
    {
      "@type": "Question",
      name: "¿Cuál es la definición de TEL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El TEL (Trastorno Específico del Lenguaje), hoy también llamado TDL, es un trastorno del neurodesarrollo que afecta la adquisición del lenguaje sin causa aparente como sordera o discapacidad intelectual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre TEL y TDL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TEL y TDL son el mismo diagnóstico con distinto nombre. TDL (Trastorno del Desarrollo del Lenguaje) es el término más usado actualmente en guías clínicas.",
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
                El <strong>TEL</strong> (o <strong>TDL</strong>) es un trastorno
                del desarrollo del lenguaje en niños con inteligencia normal.
                Guía para familias en <strong>Chillán, Chile</strong>.
              </p>
            </header>

            <nav
              aria-label="Atención fonoaudiológica en Chillán"
              className="mb-8 rounded-2xl border border-rose-200 bg-white p-5"
            >
              <p className="mb-3 text-sm font-semibold text-rose-800">
                ¿Buscas evaluación o terapia TEL en Chillán?
              </p>
              <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap">
                <li>
                  <Link
                    href="/chillan/tel"
                    className="font-medium text-rose-600 underline"
                  >
                    TEL en Chillán
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/tel-trastorno-especifico-lenguaje"
                    className="font-medium text-rose-600 underline"
                  >
                    Servicio TEL
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agendar-hora-fonoaudiologo-infantil-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Agendar evaluación
                  </Link>
                </li>
              </ul>
            </nav>

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
                  href="/chillan/tel"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">TEL en Chillán</h3>
                  <p className="text-sm text-gray-600">
                    Diagnóstico y terapia presencial en Ñuble.
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
