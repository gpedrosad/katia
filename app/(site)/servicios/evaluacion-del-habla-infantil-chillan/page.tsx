import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/servicios/evaluacion-del-habla-infantil-chillan";
const WHATSAPP_MESSAGE =
  "Hola, quiero agendar una evaluación del habla infantil en Chillán";
const WHATSAPP_LINK = whatsappUrl(WHATSAPP_MESSAGE);

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Evaluación del Habla Infantil en Chillán | Pronunciación",
  description:
    "Evaluación del habla infantil en Chillán para niños con dificultad para pronunciar, hablar claro o hacerse entender. Incluye informe y orientación.",
  keywords: [
    "evaluación del habla infantil Chillán",
    "evaluación pronunciación niños",
    "niño pronuncia mal evaluación",
    "fonoaudióloga habla Chillán",
  ],
});

const evaluationFocus = [
  "sonidos alterados",
  "patrones fonológicos",
  "inteligibilidad",
  "praxias orofaciales",
  "fluidez",
  "impacto escolar y social",
];

const whenToEvaluate = [
  "omite sonidos",
  "cambia letras",
  "cuesta entenderle fuera de la familia",
  "se frustra al hablar",
  "persisten errores después de los 5 años",
];

const reportIncludes = [
  "resumen clínico",
  "sonidos o patrones afectados",
  "diagnóstico orientativo",
  "propuesta de tratamiento",
];

const faqs = [
  {
    q: "¿Sirve para dislalia?",
    a: "Sí. La evaluación del habla revisa articulación y patrones fonológicos para orientar si corresponde a dislalia funcional u otro diagnóstico.",
  },
  {
    q: "¿Sirve si mi hijo pronuncia mal la r o la s?",
    a: "Sí, cuando el error persiste, afecta la inteligibilidad o se repite en varios sonidos. La evaluación define si es un retraso madurativo o un patrón que requiere intervención.",
  },
  {
    q: "¿Cómo sé si es habla o lenguaje?",
    a: "El habla es cómo suena y se entiende la pronunciación; el lenguaje es vocabulario, frases y comprensión. Si la duda es de palabras y frases, conviene la evaluación del lenguaje; si es de sonidos, esta evaluación del habla.",
  },
  {
    q: "¿A qué edad debería evaluarlo?",
    a: "Si a los 3-4 años cuesta entenderlo fuera de casa, o después de los 5 años persisten errores en varios sonidos, conviene evaluar. Cuanto antes se aclara el perfil, más claro es el plan de tratamiento.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Evaluación del habla infantil",
  description:
    "Evaluación clínica de articulación, fonología, inteligibilidad y fluidez del habla en niños en Chillán.",
  provider: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  areaServed: { "@type": "City", name: "Chillán" },
  serviceType: "Evaluación del habla infantil",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function EvaluacionHablaInfantilPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "/fonoaudiologa-ninos-chillan" },
                { label: "Evaluación del habla infantil" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
              Evaluación de pronunciación
            </span>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Evaluación del habla infantil en Chillán
            </h1>
            <p data-speakable className="mb-6 text-xl text-gray-600">
              Para niños a los que cuesta entenderles, pronuncian mal varios
              sonidos o presentan dudas en articulación, fonología o fluidez.
            </p>
            <WhatsAppCTA
              href={WHATSAPP_LINK}
              className="bg-sky-600 hover:bg-sky-700 ring-sky-300"
            >
              Agendar evaluación del habla
            </WhatsAppCTA>
            <p className="mt-4 text-sm text-gray-500">
              También puedes{" "}
              <Link
                href="/agendar-hora-fonoaudiologo-infantil-chillan"
                className="font-medium text-sky-600 underline"
              >
                agendar hora con la fonoaudióloga
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              ¿Qué revisa esta evaluación?
            </h2>
            <p className="mb-8 text-center text-lg text-gray-600">
              Enfoque en articulación, fonología, inteligibilidad, fluidez y
              praxias orofaciales —sin duplicar la{" "}
              <Link
                href="/servicios/evaluacion-fonoaudiologica"
                className="font-medium text-sky-600 underline"
              >
                evaluación fonoaudiológica general
              </Link>
              .
            </p>
            <ul className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
              {evaluationFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-sky-100 bg-sky-50/50 p-4"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    ✓
                  </span>
                  <span className="font-medium capitalize text-gray-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-sky-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Cuándo pedir esta evaluación
            </h2>
            <ul className="mx-auto max-w-xl space-y-3 text-lg text-gray-700">
              {whenToEvaluate.map((signal) => (
                <li key={signal} className="flex gap-3">
                  <span className="text-sky-500" aria-hidden="true">
                    •
                  </span>
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-gray-600">
              Si el niño presenta patrones persistentes, revisa también{" "}
              <Link
                href="/chillan/dislalia"
                className="font-medium text-sky-600 underline"
              >
                dislalia en Chillán
              </Link>{" "}
              y{" "}
              <Link
                href="/chillan/trastorno-fonologico"
                className="font-medium text-sky-600 underline"
              >
                trastorno fonológico
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Dislalia, trastorno fonológico o retraso del habla?
            </h2>
            <p className="text-lg text-gray-600">
              No siempre es lo mismo omitir un sonido, sustituir letras o hablar
              poco claro. La evaluación del habla ayuda a diferenciar si se trata
              de una{" "}
              <Link
                href="/glosario/dislalia"
                className="font-medium text-sky-600 underline"
              >
                dislalia
              </Link>
              , un patrón fonológico más amplio o un retraso del habla, y qué
              tratamiento conviene. Para un panorama de trastornos de
              pronunciación, consulta{" "}
              <Link
                href="/servicios/trastornos-del-habla"
                className="font-medium text-sky-600 underline"
              >
                trastornos del habla
              </Link>
              .
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Si la duda principal es vocabulario, frases o comprensión, la ruta
              adecuada es la{" "}
              <Link
                href="/servicios/evaluacion-del-lenguaje-infantil-chillan"
                className="font-medium text-sky-600 underline"
              >
                evaluación del lenguaje infantil
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-sky-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Qué incluye el informe
            </h2>
            <ul className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
              {reportIncludes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    ✓
                  </span>
                  <span className="font-medium capitalize text-gray-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 text-sky-500 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Tu hijo pronuncia mal o cuesta entenderle?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Evaluación del habla en Chillán con informe, diagnóstico orientativo
              y propuesta de tratamiento.
            </p>
            <WhatsAppCTA
              href={WHATSAPP_LINK}
              className="bg-sky-600 hover:bg-sky-700 ring-sky-300"
            >
              Agendar evaluación del habla
            </WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
