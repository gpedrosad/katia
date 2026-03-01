import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../_components/Breadcrumbs";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/glosario";

export const metadata: Metadata = {
  title: "Glosario Fonoaudiológico | Términos de Lenguaje y Habla",
  description:
    "Glosario de términos fonoaudiológicos explicados de forma simple. Dislalia, TEL, TEA, disfasia, trastorno fonológico y más. Guía para padres en Chillán.",
  keywords: [
    "glosario fonoaudiológico",
    "términos fonoaudiología",
    "qué es dislalia",
    "qué es TEL",
    "trastornos del lenguaje definición",
    "vocabulario fonoaudiología",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Glosario Fonoaudiológico | Términos de Lenguaje y Habla",
    description:
      "Términos fonoaudiológicos explicados de forma clara para padres.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "es_CL",
  },
};

const terms = [
  {
    slug: "dislalia",
    term: "Dislalia",
    shortDescription:
      "Dificultad para pronunciar ciertos sonidos correctamente.",
    category: "Trastornos del habla",
  },
  {
    slug: "tel",
    term: "TEL (Trastorno Específico del Lenguaje)",
    shortDescription:
      "Trastorno que afecta la adquisición del lenguaje sin causa aparente.",
    category: "Trastornos del lenguaje",
  },
  {
    slug: "tea",
    term: "TEA (Trastorno del Espectro Autista)",
    shortDescription:
      "Condición del neurodesarrollo que puede afectar la comunicación.",
    category: "Desarrollo",
  },
  {
    slug: "trastorno-fonologico",
    term: "Trastorno fonológico",
    shortDescription:
      "Patrones sistemáticos de errores en los sonidos del habla.",
    category: "Trastornos del habla",
  },
  {
    slug: "retraso-del-lenguaje",
    term: "Retraso del lenguaje",
    shortDescription:
      "Desarrollo del lenguaje más lento de lo esperado para la edad.",
    category: "Trastornos del lenguaje",
  },
  {
    slug: "conciencia-fonologica",
    term: "Conciencia fonológica",
    shortDescription:
      "Habilidad para identificar y manipular los sonidos del lenguaje.",
    category: "Habilidades",
  },
  {
    slug: "disfasia",
    term: "Disfasia",
    shortDescription:
      "Otro nombre para el Trastorno Específico del Lenguaje (TEL).",
    category: "Trastornos del lenguaje",
  },
  {
    slug: "disartria",
    term: "Disartria",
    shortDescription:
      "Dificultad para hablar por debilidad de los músculos del habla.",
    category: "Trastornos del habla",
  },
  {
    slug: "apraxia-del-habla",
    term: "Apraxia del habla",
    shortDescription:
      "Dificultad para planificar los movimientos necesarios para hablar.",
    category: "Trastornos del habla",
  },
  {
    slug: "disfemia",
    term: "Disfemia (Tartamudez)",
    shortDescription:
      "Alteración de la fluidez del habla con repeticiones o bloqueos.",
    category: "Trastornos del habla",
  },
  {
    slug: "dislexia",
    term: "Dislexia",
    shortDescription:
      "Dificultad específica para aprender a leer de origen neurobiológico.",
    category: "Lectoescritura",
  },
  {
    slug: "praxias-orofaciales",
    term: "Praxias orofaciales",
    shortDescription:
      "Ejercicios de los músculos de la boca, lengua y cara.",
    category: "Intervención",
  },
];

const categories = [...new Set(terms.map((t) => t.category))];

export default function GlosarioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[{ label: "Inicio", href: "/" }, { label: "Glosario" }]}
            />
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                Glosario fonoaudiológico
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Términos de fonoaudiología explicados de forma simple para
                padres. Encuentra definiciones claras de trastornos del lenguaje
                y habla.
              </p>
            </div>

            {/* Categories */}
            {categories.map((category) => (
              <div key={category} className="mb-10">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  {category}
                </h2>
                <div className="space-y-3">
                  {terms
                    .filter((t) => t.category === category)
                    .map((term) => (
                      <Link
                        key={term.slug}
                        href={`/glosario/${term.slug}`}
                        className="block rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-rose-300 hover:shadow-md"
                      >
                        <h3 className="mb-1 font-semibold text-gray-900 hover:text-rose-600">
                          {term.term}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {term.shortDescription}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                ¿Tienes dudas sobre el desarrollo de tu hijo?
              </h2>
              <p className="mb-6 text-gray-600">
                Si alguno de estos términos te suena familiar, una evaluación
                profesional puede aclarar tus dudas.
              </p>
              <a
                href="https://wa.me/56995497838?text=Hola%2C%20tengo%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition-all hover:bg-green-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
