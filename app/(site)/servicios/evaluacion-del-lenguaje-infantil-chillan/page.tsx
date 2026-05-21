import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/servicios/evaluacion-del-lenguaje-infantil-chillan";
const WHATSAPP_MESSAGE =
  "Hola, quiero agendar una evaluación del lenguaje infantil en Chillán";
const WHATSAPP_LINK = whatsappUrl(WHATSAPP_MESSAGE);

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Evaluación del Lenguaje Infantil en Chillán | Fonoaudióloga",
  description:
    "Evaluación del lenguaje infantil en Chillán para niños que hablan poco, no arman frases o no comprenden bien. Incluye informe y orientación clínica.",
  keywords: [
    "evaluación del lenguaje infantil Chillán",
    "evaluación del lenguaje niños Chillán",
    "habla poco evaluación",
    "comprensión lenguaje niños",
  ],
});

const evaluationAreas = [
  {
    title: "Vocabulario",
    description:
      "Cantidad y variedad de palabras que usa y entiende según su edad.",
  },
  {
    title: "Comprensión verbal",
    description:
      "Cómo sigue instrucciones, responde preguntas y entiende lo que escucha.",
  },
  {
    title: "Longitud y estructura de frases",
    description:
      "Si arma combinaciones, oraciones y morfología acorde a su desarrollo.",
  },
  {
    title: "Uso del lenguaje en contexto",
    description:
      "Comunicación funcional en juego, rutinas y situaciones cotidianas.",
  },
  {
    title: "Relato y secuencias",
    description:
      "Capacidad de contar experiencias, ordenar ideas y narrar con coherencia.",
  },
  {
    title: "Señales de TEL/TDL o retraso del lenguaje",
    description:
      "Indicadores clínicos que orientan diagnóstico y pasos de intervención.",
  },
];

const signals = [
  "dice pocas palabras",
  "no junta dos o tres palabras",
  "le cuesta seguir instrucciones",
  "parece entender menos que otros niños",
  "el colegio sugiere evaluación",
];

const deliverables = [
  "devolución",
  "informe",
  "orientación diagnóstica",
  "propuesta de pasos siguientes",
];

const faqs = [
  {
    q: "¿Esta evaluación sirve si mi hijo habla poco?",
    a: "Sí. Está pensada para revisar vocabulario, comprensión, frases y uso del lenguaje cuando el niño habla poco o de forma muy limitada para su edad.",
  },
  {
    q: "¿Sirve para sospecha de TEL o retraso del lenguaje?",
    a: "Sí. La evaluación del lenguaje ayuda a diferenciar un retraso del lenguaje de un trastorno específico del lenguaje (TEL/TDL) y a definir si conviene iniciar terapia.",
  },
  {
    q: "¿Incluye informe para colegio o PIE si corresponde?",
    a: "Sí. Si el caso lo requiere, el informe puede documentar resultados para entregar en colegio, PIE o derivaciones, según lo acordado en consulta.",
  },
  {
    q: "¿Cuánto dura la evaluación?",
    a: "La sesión presencial dura aproximadamente 60 minutos. Incluye entrevista con la familia, evaluación directa del niño y devolución preliminar.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Evaluación del lenguaje infantil",
  description:
    "Evaluación clínica del lenguaje comprensivo y expresivo en niños en Chillán, con informe y orientación.",
  provider: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  areaServed: { "@type": "City", name: "Chillán" },
  serviceType: "Evaluación del lenguaje infantil",
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

export default function EvaluacionLenguajeInfantilPage() {
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
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "/fonoaudiologa-ninos-chillan" },
                { label: "Evaluación del lenguaje infantil" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
              Evaluación especializada
            </span>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Evaluación del lenguaje infantil en Chillán
            </h1>
            <p data-speakable className="mb-6 text-xl text-gray-600">
              Para niños que hablan poco, arman frases cortas, entienden menos de
              lo esperado o presentan dudas en su desarrollo del lenguaje.
            </p>
            <ul className="mb-8 space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </span>
                <span>Sesión presencial de aproximadamente 60 minutos</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </span>
                <span>Revisión comprensiva y expresiva</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </span>
                <span>Informe y recomendaciones</span>
              </li>
            </ul>
            <WhatsAppCTA href={WHATSAPP_LINK}>
              Agendar evaluación del lenguaje
            </WhatsAppCTA>
            <p className="mt-4 text-sm text-gray-500">
              También puedes{" "}
              <Link
                href="/agendar-hora-fonoaudiologo-infantil-chillan"
                className="font-medium text-rose-600 underline"
              >
                agendar hora con la fonoaudióloga
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              ¿Qué evalúo cuando reviso el lenguaje?
            </h2>
            <p className="mb-8 text-center text-lg text-gray-600">
              Esta evaluación se centra en comprensión, vocabulario, frases,
              morfosintaxis, narración y seguimiento de instrucciones —no en la
              evaluación fonoaudiológica general. Si necesitas un abordaje
              integral, revisa la{" "}
              <Link
                href="/servicios/evaluacion-fonoaudiologica"
                className="font-medium text-rose-600 underline"
              >
                evaluación fonoaudiológica completa
              </Link>
              .
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {evaluationAreas.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-rose-100 bg-white p-5 shadow-sm"
                >
                  <h3 className="mb-2 font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Señales para pedir esta evaluación
            </h2>
            <ul className="mx-auto max-w-xl space-y-3 text-lg text-gray-700">
              {signals.map((signal) => (
                <li key={signal} className="flex gap-3">
                  <span className="text-rose-500" aria-hidden="true">
                    •
                  </span>
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-gray-600">
              Si hay sospecha de{" "}
              <Link
                href="/chillan/tel"
                className="font-medium text-rose-600 underline"
              >
                TEL
              </Link>{" "}
              o{" "}
              <Link
                href="/tratamientos/retraso-del-lenguaje-chillan"
                className="font-medium text-rose-600 underline"
              >
                retraso del lenguaje
              </Link>
              , esta evaluación aclara el perfil lingüístico antes de definir
              terapia.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Diferencia entre evaluar lenguaje y evaluar habla
            </h2>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-gray-700">
                <thead className="bg-rose-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-gray-900">
                      Área
                    </th>
                    <th className="px-6 py-4 font-semibold text-gray-900">
                      Qué revisa
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-medium">Lenguaje</td>
                    <td className="px-6 py-4">
                      Comprender y expresar ideas (palabras, frases,
                      comprensión, narración).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Habla</td>
                    <td className="px-6 py-4">
                      Producir sonidos claramente (articulación, fonología,
                      inteligibilidad).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-gray-600">
              Si la duda es de pronunciación, consulta la{" "}
              <Link
                href="/servicios/evaluacion-del-habla-infantil-chillan"
                className="font-medium text-rose-600 underline"
              >
                evaluación del habla infantil
              </Link>
              . Si ya tienes diagnóstico y buscas intervención, revisa{" "}
              <Link
                href="/servicios/terapia-lenguaje-infantil"
                className="font-medium text-rose-600 underline"
              >
                terapia de lenguaje infantil
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Qué recibes al terminar
            </h2>
            <ul className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
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
                    <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
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
              ¿Quieres evaluar el lenguaje de tu hijo en Chillán?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Agenda una evaluación enfocada en comprensión, vocabulario y
              expresión, con informe y orientación clara.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>
              Agendar evaluación del lenguaje
            </WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
