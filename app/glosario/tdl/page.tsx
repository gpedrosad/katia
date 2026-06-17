import Link from "next/link";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/glosario/tdl";
const WHATSAPP_LINK = whatsappUrl(
  "Hola, quiero consultar por TDL (trastorno del desarrollo del lenguaje) en mi hijo"
);
const ASHA_URL =
  "https://www.asha.org/public/speech/disorders/language-disorders/";
const ASHA_LABEL = "ASHA — Language Disorders";

const faqs = [
  {
    question: "¿Qué significa TDL?",
    answer:
      "TDL es el trastorno del desarrollo del lenguaje. Es el término actual para lo que antes se llamaba TEL. Describe dificultades persistentes en comprender y usar el lenguaje oral que no se explican por otras condiciones.",
    acceptedAnswer:
      "TDL es el trastorno del desarrollo del lenguaje. Es el término actual para lo que antes se llamaba TEL. Describe dificultades persistentes en comprender y usar el lenguaje oral que no se explican por otras condiciones. Según ASHA, los trastornos del lenguaje afectan la comprensión o el uso del lenguaje oral (https://www.asha.org/public/speech/disorders/language-disorders/).",
    cite: true,
  },
  {
    question: "¿Es lo mismo que retraso del lenguaje?",
    answer:
      "No. El retraso del lenguaje implica un desarrollo más lento pero con progreso constante. El TDL es un trastorno del neurodesarrollo que requiere intervención específica y no se resuelve solo.",
    acceptedAnswer:
      "No. El retraso del lenguaje implica un desarrollo más lento pero con progreso constante. El TDL es un trastorno del neurodesarrollo que requiere intervención específica y no se resuelve solo.",
    cite: false,
  },
  {
    question: "¿Se puede mejorar con terapia?",
    answer:
      "Sí. Con intervención fonoaudiológica temprana y continua, la mayoría de los niños con TDL progresan significativamente en comprensión y expresión del lenguaje.",
    acceptedAnswer:
      "Sí. Con intervención fonoaudiológica temprana y continua, la mayoría de los niños con TDL progresan significativamente en comprensión y expresión del lenguaje. Según ASHA, la intervención del lenguaje puede mejorar la comprensión y el uso del lenguaje oral (https://www.asha.org/public/speech/disorders/language-disorders/).",
    cite: true,
  },
  {
    question: "¿Cuándo llevar al fonoaudiólogo?",
    answer:
      "Si a los 3 años no arma frases, si el vocabulario es muy limitado, si no comprende instrucciones simples o si el colegio reporta dificultades.",
    acceptedAnswer:
      "Si a los 3 años no arma frases, si el vocabulario es muy limitado, si no comprende instrucciones simples o si el colegio reporta dificultades. Una evaluación fonoaudiológica define si se trata de TDL u otro perfil.",
    cite: false,
  },
  {
    question: "¿El TDL afecta el aprendizaje escolar?",
    answer:
      "Sí, el lenguaje es la base del aprendizaje. Sin apoyo, el TDL puede afectar la lectura, la escritura y la participación en clase. Por eso es importante la intervención temprana.",
    acceptedAnswer:
      "Sí, el lenguaje es la base del aprendizaje. Sin apoyo, el TDL puede afectar la lectura, la escritura y la participación en clase. Por eso es importante la intervención temprana. Según ASHA, las dificultades de lenguaje pueden impactar el rendimiento académico y la participación social (https://www.asha.org/public/speech/disorders/language-disorders/).",
    cite: true,
  },
];

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "¿Qué es el TDL? | Trastorno del Desarrollo del Lenguaje",
  description:
    "Qué es el TDL (trastorno del desarrollo del lenguaje) en niños, señales, diferencias con TEL y cuándo consultar a fonoaudióloga en Chillán.",
  keywords: [
    "qué es TDL",
    "trastorno desarrollo lenguaje",
    "TDL niños",
    "TEL vs TDL",
    "trastorno del lenguaje infantil",
  ],
  ogType: "article",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿Qué es el TDL (trastorno del desarrollo del lenguaje)?",
  description:
    "Definición del TDL en niños, señales, diferencias con TEL, causas posibles, tratamiento y cuándo consultar en Chillán.",
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
  datePublished: "2026-05-20",
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

export default function TDLPage() {
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
                { label: "TDL" },
              ]}
            />

            <header className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                Trastornos del lenguaje
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                ¿Qué es el TDL (trastorno del desarrollo del lenguaje)?
              </h1>
              <p className="text-xl text-gray-600">
                El <strong>TDL</strong> (trastorno del desarrollo del lenguaje)
                es la denominación actual para lo que antes se conocía como TEL
                (trastorno específico del lenguaje). Describe dificultades
                persistentes en la comprensión y/o producción del lenguaje que
                no se explican por discapacidad intelectual, pérdida auditiva u
                otros factores neurológicos.
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
                    href="/chillan/tel"
                    className="font-medium text-rose-600 underline"
                  >
                    TEL/TDL en niños Chillán
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/evaluacion-fonoaudiologica"
                    className="font-medium text-rose-600 underline"
                  >
                    Evaluación fonoaudiológica
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
              <h2>Definición de TDL</h2>
              <p>
                El <strong>TDL</strong> afecta la capacidad del niño para
                comprender y/o usar el lenguaje oral. A diferencia de un retraso
                simple del lenguaje, el TDL es persistente: no se resuelve solo
                con el tiempo y requiere intervención fonoaudiológica.
              </p>
              <p>Ejemplos cotidianos:</p>
              <ul>
                <li>
                  A los 3 años dice muy pocas palabras y no arma frases de dos o
                  tres palabras
                </li>
                <li>
                  A los 4-5 años habla con frases muy simples, como de un niño
                  más chico
                </li>
                <li>
                  Le cuesta seguir instrucciones con varios pasos
                </li>
                <li>
                  No entiende preguntas simples o responde de forma que no tiene
                  relación
                </li>
                <li>
                  Tiene dificultad para aprender palabras nuevas o recordar lo
                  que escuchó
                </li>
              </ul>

              <h2>Señales frecuentes</h2>
              <ul>
                <li>Vocabulario muy limitado para su edad</li>
                <li>Dificultad para armar frases completas</li>
                <li>
                  Cuesta entender lo que quiere decir, aunque pronuncie bien
                </li>
                <li>No sigue instrucciones orales simples</li>
                <li>Dificultad para aprender y recordar palabras nuevas</li>
                <li>
                  Frustración al comunicarse porque no logra expresarse
                </li>
              </ul>

              <h2>¿Es lo mismo que TEL?</h2>
              <p>
                <strong>Sí, esencialmente.</strong> TDL es el término actual
                (trastorno del desarrollo del lenguaje), que reemplaza a TEL
                (trastorno específico del lenguaje). El cambio refleja que estos
                trastornos son del desarrollo y persisten más allá de la infancia
                temprana. Consulta la{" "}
                <Link
                  href="/comparaciones/tel-vs-retraso-del-lenguaje"
                  className="font-semibold text-rose-600"
                >
                  comparación TEL vs retraso del lenguaje
                </Link>{" "}
                y el artículo sobre{" "}
                <Link
                  href="/glosario/tel"
                  className="font-semibold text-rose-600"
                >
                  TEL
                </Link>
                .
              </p>

              <h2>Causas posibles</h2>
              <p>
                El TDL no tiene una causa única identificable. Se considera un
                trastorno del neurodesarrollo con base multifactorial:
              </p>
              <ul>
                <li>
                  Factores genéticos: hay mayor prevalencia en familias con
                  antecedentes
                </li>
                <li>Dificultades en el procesamiento del lenguaje oral</li>
                <li>
                  Factores ambientales que pueden agravar o atenuar las
                  dificultades
                </li>
                <li>
                  No se debe a discapacidad intelectual, pérdida auditiva ni daño
                  neurológico
                </li>
              </ul>

              <h2>Cuándo consultar</h2>
              <ul>
                <li>
                  Si a los 3 años no arma frases de dos o tres palabras
                </li>
                <li>Si el vocabulario es muy limitado y no progresa</li>
                <li>Si no comprende instrucciones simples</li>
                <li>Si el colegio reporta dificultades de comprensión o expresión</li>
                <li>Si la frustración al comunicarse es frecuente</li>
              </ul>

              <h2>Tratamiento</h2>
              <p>El abordaje fonoaudiológico del TDL incluye:</p>
              <ol>
                <li>
                  <strong>Evaluación integral:</strong> perfil comprensivo y
                  expresivo del lenguaje, descartes según el caso
                </li>
                <li>
                  <strong>Objetivos funcionales:</strong> priorizar habilidades
                  que más impactan la comunicación diaria
                </li>
                <li>
                  <strong>Terapia de lenguaje:</strong> trabajo estructurado en
                  vocabulario, frases, comprensión y narración
                </li>
                <li>
                  <strong>Trabajo con la familia y el colegio:</strong>{" "}
                  estrategias para apoyar al niño en todos los contextos
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

            <div className="mt-12 rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Consultar por TDL
              </h2>
              <p className="mb-6 text-gray-600">
                Una evaluación en Chillán identifica si se trata de TDL u otro
                perfil del lenguaje, y define el mejor plan para tu hijo.
              </p>
              <WhatsAppCTA href={WHATSAPP_LINK}>
                Consultar por TDL
              </WhatsAppCTA>
            </div>

            <div className="mt-12">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Términos relacionados
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/comparaciones/tel-vs-retraso-del-lenguaje"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    TEL vs retraso del lenguaje
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tabla comparativa y señales para padres.
                  </p>
                </Link>
                <Link
                  href="/glosario/tel"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    TEL (trastorno específico del lenguaje)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Definición, señales y tratamiento del TEL.
                  </p>
                </Link>
                <Link
                  href="/glosario/retraso-del-lenguaje"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    Retraso del lenguaje
                  </h3>
                  <p className="text-sm text-gray-600">
                    Vocabulario, frases y comprensión.
                  </p>
                </Link>
                <Link
                  href="/tratamientos/retraso-del-lenguaje-chillan"
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    Terapia en Chillán
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tratamiento fonoaudiológico del retraso del lenguaje.
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
