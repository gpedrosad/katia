import Link from "next/link";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/glosario/dislalia";
const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20dislalia";
const ASHA_URL =
  "https://www.asha.org/public/speech/disorders/articulation/";
const ASHA_LABEL = "ASHA — Articulation";

const faqs = [
  {
    question: "¿Qué es la dislalia?",
    answer:
      "La dislalia es un trastorno del habla caracterizado por la dificultad para pronunciar ciertos sonidos correctamente. El niño puede omitir, sustituir o distorsionar sonidos al hablar.",
    acceptedAnswer:
      "La dislalia es un trastorno del habla caracterizado por la dificultad para pronunciar ciertos sonidos correctamente. El niño puede omitir, sustituir o distorsionar sonidos al hablar. Según ASHA, los trastornos de articulación implican dificultades para producir sonidos del habla de forma inteligible (https://www.asha.org/public/speech/disorders/articulation/).",
    cite: true,
  },
  {
    question: "¿A qué edad se corrige la dislalia?",
    answer:
      "La mayoría de los sonidos deben estar adquiridos a los 4-5 años. Si después de esa edad persisten errores de pronunciación, es recomendable consultar a un fonoaudiólogo.",
    acceptedAnswer:
      "La mayoría de los sonidos deben estar adquiridos a los 4-5 años. Si después de esa edad persisten errores de pronunciación, es recomendable consultar a un fonoaudiólogo. Según ASHA, los errores articulatorios fuera del rango evolutivo esperado pueden requerir evaluación profesional (https://www.asha.org/public/speech/disorders/articulation/).",
    cite: true,
  },
  {
    question: "¿La dislalia se cura con tratamiento?",
    answer:
      "Sí, la mayoría de los casos de dislalia se corrigen completamente con tratamiento fonoaudiológico. El tiempo de tratamiento depende de la cantidad y tipo de sonidos afectados.",
    acceptedAnswer:
      "Sí, la mayoría de los casos de dislalia se corrigen completamente con tratamiento fonoaudiológico. El tiempo de tratamiento depende de la cantidad y tipo de sonidos afectados. Según ASHA, la terapia del habla puede mejorar significativamente la articulación en niños con trastornos del habla (https://www.asha.org/public/speech/disorders/articulation/).",
    cite: true,
  },
  {
    question: "¿Qué significa dislalia?",
    answer:
      "Dislalia significa dificultad para articular fonemas del habla (omitir, sustituir o distorsionar sonidos). Es un trastorno del habla frecuente en la infancia, con buen pronóstico con terapia fonoaudiológica.",
    acceptedAnswer:
      "Dislalia significa dificultad para articular fonemas del habla (omitir, sustituir o distorsionar sonidos). Es un trastorno del habla frecuente en la infancia, con buen pronóstico con terapia fonoaudiológica. Según ASHA, las dificultades articulatorias afectan la producción de sonidos individuales del habla (https://www.asha.org/public/speech/disorders/articulation/).",
    cite: true,
  },
  {
    question: "¿Cuándo llevar al fonoaudiólogo por dislalia en Chillán?",
    answer:
      "Si después de los 5-6 años persisten errores de pronunciación, o si el colegio o la familia tienen dificultad para entender al niño. Una evaluación en Chillán identifica sonidos afectados y plan de tratamiento.",
    acceptedAnswer:
      "Si después de los 5-6 años persisten errores de pronunciación, o si el colegio o la familia tienen dificultad para entender al niño. Según ASHA, conviene evaluar cuando los errores persisten más allá de los hitos evolutivos (https://www.asha.org/public/speech/disorders/articulation/). En Chillán puedes agendar una evaluación fonoaudiológica presencial.",
    cite: true,
  },
];

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "¿Qué es la Dislalia? | Causas, Síntomas y Tratamiento",
  description:
    "La dislalia es la dificultad para pronunciar sonidos en niños. Definición, tipos y tratamiento en Chillán, Ñuble, Chile. Fonoaudióloga con +20 años de experiencia.",
  keywords: [
    "qué es dislalia",
    "dislalia definición",
    "dislalia tratamiento",
    "tipos de dislalia",
    "dislalia en niños",
    "pronunciación incorrecta",
  ],
  ogType: "article",
});

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
  datePublished: "2024-06-01",
  dateModified: "2026-05-20",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.acceptedAnswer,
    },
  })),
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
                La <strong>dislalia</strong> es la dificultad para pronunciar
                sonidos correctamente en niños (omitir, sustituir o distorsionar
                fonemas). Guía para familias en <strong>Chillán, Chile</strong>.
              </p>
            </header>

            <nav
              aria-label="Atención fonoaudiológica en Chillán"
              className="mb-8 rounded-2xl border border-rose-200 bg-white p-5"
            >
              <p className="mb-3 text-sm font-semibold text-rose-800">
                ¿Buscas evaluación o terapia en Chillán?
              </p>
              <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap">
                <li>
                  <Link
                    href="/chillan/dislalia"
                    className="font-medium text-rose-600 underline"
                  >
                    Tratamiento dislalia en Chillán
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonoaudiologa-ninos-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Fonoaudióloga infantil
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
            </div>

            <div className="not-prose space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                  {faq.cite && (
                    <p className="mt-3 text-sm text-gray-600">
                      <cite className="not-italic">
                        Fuente:{" "}
                        <a
                          href={ASHA_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-rose-700 underline hover:text-rose-800"
                        >
                          {ASHA_LABEL}
                        </a>
                      </cite>
                    </p>
                  )}
                </details>
              ))}
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
                  href="/chillan/dislalia"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    Dislalia en Chillán
                  </h3>
                  <p className="text-sm text-gray-600">
                    Señales, evaluación y terapia presencial en Ñuble.
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
