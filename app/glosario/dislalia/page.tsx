import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/glosario/dislalia";
const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20dislalia";

export const metadata: Metadata = {
  title: "¿Qué es la Dislalia? | Causas, Síntomas y Tratamiento",
  description:
    "Qué es la dislalia: dificultad para pronunciar sonidos correctamente. Conoce tipos, causas, síntomas y tratamiento. Fonoaudióloga en Chillán con +20 años de experiencia.",
  keywords: [
    "qué es dislalia",
    "dislalia definición",
    "dislalia tratamiento",
    "tipos de dislalia",
    "dislalia en niños",
    "pronunciación incorrecta",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "¿Qué es la Dislalia? | Causas, Síntomas y Tratamiento",
    description:
      "Guía completa sobre dislalia: qué es, tipos, causas y cómo se trata.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    locale: "es_CL",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿Qué es la Dislalia? Causas, Síntomas y Tratamiento",
  description:
    "Guía completa sobre la dislalia: definición, tipos, causas y tratamiento fonoaudiológico.",
  author: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  publisher: {
    "@type": "Organization",
    name: "Katia Domínguez - Fonoaudióloga",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_PATH}`,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la dislalia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La dislalia es un trastorno del habla caracterizado por la dificultad para pronunciar ciertos sonidos correctamente. El niño puede omitir, sustituir o distorsionar sonidos al hablar.",
      },
    },
    {
      "@type": "Question",
      name: "¿A qué edad se corrige la dislalia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de los sonidos deben estar adquiridos a los 4-5 años. Si después de esa edad persisten errores de pronunciación, es recomendable consultar a un fonoaudiólogo.",
      },
    },
    {
      "@type": "Question",
      name: "¿La dislalia se cura con tratamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, la mayoría de los casos de dislalia se corrigen completamente con tratamiento fonoaudiológico. El tiempo de tratamiento depende de la cantidad y tipo de sonidos afectados.",
      },
    },
  ],
};

export default function DislaliaPage() {
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
                { label: "Dislalia" },
              ]}
            />

            <header className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                Trastornos del habla
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                ¿Qué es la dislalia?
              </h1>
              <p className="text-xl text-gray-600">
                Guía completa sobre este trastorno del habla: definición, tipos,
                causas y tratamiento.
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2>Definición de dislalia</h2>
              <p>
                La <strong>dislalia</strong> es un trastorno del habla
                caracterizado por la dificultad para pronunciar ciertos sonidos
                correctamente. El niño puede:
              </p>
              <ul>
                <li>
                  <strong>Omitir</strong> sonidos: decir &quot;ato&quot; en vez de
                  &quot;gato&quot;
                </li>
                <li>
                  <strong>Sustituir</strong> sonidos: decir &quot;tasa&quot; en vez de
                  &quot;casa&quot;
                </li>
                <li>
                  <strong>Distorsionar</strong> sonidos: producir la &quot;r&quot; de
                  forma incorrecta
                </li>
              </ul>
              <p>
                Es uno de los trastornos del habla más comunes en niños y tiene
                muy buen pronóstico con tratamiento fonoaudiológico.
              </p>

              <h2>Tipos de dislalia</h2>
              <h3>Según su causa</h3>
              <ul>
                <li>
                  <strong>Dislalia funcional:</strong> No hay causa orgánica
                  evidente. Es la más común y responde muy bien al tratamiento.
                </li>
                <li>
                  <strong>Dislalia orgánica:</strong> Causada por alteraciones
                  en los órganos del habla (labios, lengua, paladar).
                </li>
                <li>
                  <strong>Dislalia audiógena:</strong> Causada por problemas de
                  audición que dificultan aprender los sonidos correctamente.
                </li>
              </ul>

              <h3>Según el sonido afectado</h3>
              <ul>
                <li>
                  <strong>Rotacismo:</strong> Dificultad con la &quot;r&quot; y &quot;rr&quot;
                </li>
                <li>
                  <strong>Sigmatismo:</strong> Dificultad con la &quot;s&quot;
                </li>
                <li>
                  <strong>Lambdacismo:</strong> Dificultad con la &quot;l&quot;
                </li>
                <li>
                  <strong>Deltacismo:</strong> Dificultad con la &quot;d&quot;
                </li>
              </ul>

              <h2>¿A qué edad consultar?</h2>
              <p>
                Cada sonido tiene una edad de adquisición esperada. Como regla
                general:
              </p>
              <ul>
                <li>A los 3 años: la mayoría de vocales y consonantes simples</li>
                <li>A los 4 años: grupos consonánticos simples (pl, bl, fl)</li>
                <li>A los 5-6 años: sonidos más difíciles como la &quot;r&quot; vibrante</li>
              </ul>
              <p>
                Si después de los 5-6 años tu hijo sigue teniendo errores de
                pronunciación, es recomendable consultar.
              </p>

              <h2>Tratamiento de la dislalia</h2>
              <p>El tratamiento fonoaudiológico incluye:</p>
              <ol>
                <li>
                  <strong>Evaluación:</strong> Identificar qué sonidos están
                  afectados y por qué.
                </li>
                <li>
                  <strong>Praxias orofaciales:</strong> Ejercicios para
                  fortalecer y coordinar los músculos del habla.
                </li>
                <li>
                  <strong>Enseñanza del sonido correcto:</strong> Mostrar cómo
                  posicionar la lengua, labios y boca.
                </li>
                <li>
                  <strong>Práctica sistemática:</strong> Primero en sílabas,
                  luego palabras, oraciones y conversación.
                </li>
                <li>
                  <strong>Generalización:</strong> Asegurar que use el sonido
                  correctamente en la vida diaria.
                </li>
              </ol>

              <h2>Preguntas frecuentes</h2>

              <h3>¿La dislalia se cura?</h3>
              <p>
                Sí, la mayoría de los casos de dislalia se corrigen
                completamente con tratamiento. El tiempo depende de la cantidad
                y tipo de sonidos afectados.
              </p>

              <h3>¿Cuánto dura el tratamiento?</h3>
              <p>
                Problemas simples (1-2 sonidos) pueden corregirse en 2-4 meses.
                Problemas más complejos requieren 6-12 meses.
              </p>

              <h3>¿Qué pasa si no se trata?</h3>
              <p>
                Sin tratamiento, los errores de pronunciación pueden persistir
                hasta la edad adulta y afectar la autoestima, las relaciones
                sociales y el desempeño laboral.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                ¿Tu hijo tiene problemas de pronunciación?
              </h2>
              <p className="mb-6 text-gray-600">
                Una evaluación puede identificar los sonidos afectados y definir
                el mejor plan de tratamiento.
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
                  href="/glosario/trastorno-fonologico"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    Trastorno fonológico
                  </h3>
                  <p className="text-sm text-gray-600">
                    Patrones sistemáticos de errores en los sonidos.
                  </p>
                </Link>
                <Link
                  href="/servicios/trastornos-del-habla"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    Tratamiento de trastornos del habla
                  </h3>
                  <p className="text-sm text-gray-600">
                    Servicio especializado en Chillán.
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
