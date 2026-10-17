import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { PREGUNTAS } from "@/app/preguntas/catalogo";
import { buildPageMetadata } from "@/lib/seo";
import { BUSINESS_HOURS, SITE_URL } from "@/lib/site";

const PATH = "/preguntas";
const TITLE = "Preguntas de padres | Fono infantil Chillán";
const DESCRIPTION =
  "Respuestas directas sobre fonoaudiología infantil en Chillán: qué hace la fonoaudióloga, cuándo consultar, la erre y cómo pedir hora.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "preguntas fonoaudiología infantil",
    "dudas de padres lenguaje",
    "fonoaudióloga Chillán",
  ],
});

const faqs = [
  {
    question: "¿Estas páginas reemplazan una evaluación?",
    answer:
      "No. Cada página responde una duda para que decidas con más claridad. La evaluación en Chillán mira a tu hijo y define si hace falta terapia, orientación o un informe.",
  },
  {
    question: "¿Dónde se atiende y en qué horario?",
    answer: `La fonoaudiología infantil de Katia Domínguez es presencial en Chillán, ${BUSINESS_HOURS.daysLabel}, de ${BUSINESS_HOURS.opens} a ${BUSINESS_HOURS.closes}. La hora se pide por WhatsApp.`,
  },
  {
    question: "¿Por dónde empiezo si no sé qué pregunta abrir?",
    answer:
      "Si la duda es si corresponde consultar, parte por «¿Cuándo llevar a mi hijo al fonoaudiólogo?». Si el jardín ya te lo pidió, parte por esa página. Si ya tienes la pregunta concreta, ábrela directo.",
  },
];

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}${PATH}#collection`,
  name: "Preguntas de padres sobre fonoaudiología infantil",
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  inLanguage: "es-CL",
  hasPart: PREGUNTAS.map((item) => ({
    "@type": "WebPage",
    name: item.question,
    url: `${SITE_URL}${item.href}`,
  })),
};

export default function PreguntasIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[{ label: "Inicio", href: "/" }, { label: "Preguntas" }]}
          />
          <header className="mb-8">
            <p className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
              Para padres · Chillán
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Preguntas de padres sobre fonoaudiología infantil
            </h1>
            <p className="text-xl leading-relaxed text-gray-800">
              Cada página responde una sola duda, al inicio y en palabras
              directas. Sirven para decidir si pides hora con Katia Domínguez,
              fonoaudióloga infantil en Chillán. No reemplazan la evaluación.
            </p>
          </header>

          <WhatsAppCTA message="Hola, tengo una duda sobre el lenguaje de mi hijo y quiero una evaluación en Chillán">
            Escribir por WhatsApp
          </WhatsAppCTA>
          <p className="mt-3 text-sm text-gray-600">
            Atención presencial en Chillán, {BUSINESS_HOURS.daysLabel}, de{" "}
            {BUSINESS_HOURS.opens} a {BUSINESS_HOURS.closes}.
          </p>

          <div className="mt-10 text-lg leading-relaxed text-gray-700 [&_a]:font-medium [&_a]:text-rose-700 [&_a]:underline [&_p]:mb-4">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Cómo usar estas respuestas
            </h2>
            <p>
              Elige la pregunta que ya te estás haciendo. La primera frase de
              cada página es la respuesta. Más abajo está el contexto: qué
              mirar en la casa, qué ocurre en la consulta y a qué guía del
              sitio seguir. Si tu duda es la edad en que los niños hablan, esa
              respuesta ya está en{" "}
              <Link href="/recursos/hitos-del-lenguaje-por-edad">
                hitos del lenguaje por edad
              </Link>
              . Si buscas una señal concreta —habla poco, no arma frases, no
              comprende, pronuncia mal o se traba— entra al índice de{" "}
              <Link href="/sintomas">síntomas</Link>. Los nombres de los
              cuadros están en el <Link href="/glosario">glosario</Link>.
            </p>
            <p>
              La atención de niños es presencial en Chillán. La primera hora
              es una evaluación: entrevista, observación y una devolución. El
              recorrido de la consulta está en{" "}
              <Link href="/fonoaudiologa-ninos-chillan">
                fonoaudióloga infantil en Chillán
              </Link>
              . Para ver horarios y qué escribir en el mensaje, usa{" "}
              <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
                agendar hora
              </Link>
              .
            </p>
          </div>

          <h2 className="mb-4 mt-10 text-2xl font-bold text-gray-900">
            Las preguntas
          </h2>
          <ul className="space-y-4">
            {PREGUNTAS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-2xl border border-rose-200 bg-white p-5 transition hover:border-rose-400"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <span className="mt-1 block text-gray-600">{item.teaser}</span>
                </Link>
              </li>
            ))}
          </ul>

          <GeoFAQ items={faqs} className="mt-12" />
        </div>
      </article>
    </>
  );
}
