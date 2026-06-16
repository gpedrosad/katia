import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/evaluacion-fonoaudiologica-infantil-chillan";
const WHATSAPP_MESSAGE =
  "Hola, quiero agendar una evaluación fonoaudiológica infantil en Chillán";
const WHATSAPP_LINK = whatsappUrl(WHATSAPP_MESSAGE);

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Evaluación Fonoaudiológica Infantil en Chillán | Lenguaje y Habla",
  description:
    "Evaluación fonoaudiológica infantil en Chillán para niños con dificultad en lenguaje, habla o lectoescritura. Incluye informe y recomendaciones.",
  keywords: [
    "evaluación fonoaudiológica infantil Chillán",
    "evaluación del lenguaje niños Chillán",
    "evaluación del habla infantil",
    "fonoaudióloga evaluación Chillán",
  ],
});

const evaluationAreas = [
  {
    icon: "🔍",
    title: "Vocabulario",
    desc: "Qué palabras conoce y usa según su edad",
  },
  {
    icon: "👂",
    title: "Comprensión verbal",
    desc: "Si entiende instrucciones y preguntas",
  },
  {
    icon: "📝",
    title: "Frases y estructura",
    desc: "Cómo arma oraciones y conecta ideas",
  },
  {
    icon: "🗣️",
    title: "Articulación y sonidos",
    desc: "Si pronuncia correctamente cada sonido",
  },
  {
    icon: "💬",
    title: "Fluidez",
    desc: "Si habla con naturalidad o presenta bloqueos",
  },
  {
    icon: "📖",
    title: "Narración y secuencias",
    desc: "Si puede contar historias en orden",
  },
];

const signals = [
  "Dice pocas palabras para su edad",
  "No junta dos o tres palabras",
  "Le cuesta seguir instrucciones",
  "Parece entender menos que otros niños",
  "Omite o cambia sonidos al hablar",
  "Cuesta entenderle fuera de la familia",
  "El colegio sugiere una evaluación",
  "Se frustra al intentar comunicarse",
];

const steps = [
  {
    step: 1,
    title: "Entrevista con la familia",
    desc: "Conversamos sobre el motivo de consulta, la historia del niño y las expectativas",
  },
  {
    step: 2,
    title: "Evaluación del niño",
    desc: "Aplico pruebas y observación clínica adaptadas a la edad y el motivo",
  },
  {
    step: 3,
    title: "Devolución e informe",
    desc: "Comparto los hallazgos, entrego un informe escrito y propongo pasos siguientes",
  },
];

const deliverables = [
  "Devolución clara de los resultados",
  "Informe fonoaudiológico escrito",
  "Orientación diagnóstica cuando corresponde",
  "Propuesta de tratamiento o derivación si es necesario",
];

const faqs = [
  {
    q: "¿Esta evaluación sirve si mi hijo habla poco?",
    a: "Sí, la evaluación revisa tanto la comprensión como la expresión del lenguaje. Si tu hijo habla poco o no arma frases, esta evaluación ayuda a entender qué está pasando.",
  },
  {
    q: "¿Sirve para sospecha de TEL o retraso del lenguaje?",
    a: "Sí, la evaluación incluye indicadores que ayudan a orientar si se trata de TEL/TDL, retraso del lenguaje u otra dificultad.",
  },
  {
    q: "¿Incluye informe para colegio o PIE si corresponde?",
    a: "Sí, cuando corresponde entrego un informe fonoaudiológico que puede utilizarse en el colegio o para solicitar apoyos como PIE.",
  },
  {
    q: "¿Cuánto dura la evaluación?",
    a: "La sesión dura aproximadamente 60 minutos, dependiendo de la edad del niño y la complejidad de la evaluación.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}${PAGE_PATH}#service`,
      name: "Evaluación Fonoaudiológica Infantil en Chillán",
      description:
        "Evaluación integral del lenguaje, habla y lectoescritura en niños. Incluye informe y recomendaciones.",
      provider: {
        "@type": "MedicalBusiness",
        "@id": `${SITE_URL}#medicalbusiness`,
        name: "Katia Domínguez - Fonoaudióloga Infantil",
        areaServed: {
          "@type": "City",
          name: "Chillán",
        },
      },
      areaServed: {
        "@type": "City",
        name: "Chillán",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: { "@id": SITE_URL, name: "Inicio" },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: { "@id": `${SITE_URL}/servicios`, name: "Servicios" },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@id": `${SITE_URL}${PAGE_PATH}`,
            name: "Evaluación infantil",
          },
        },
      ],
    },
  ],
};

export default function EvaluacionFonoaudiologicaInfantilPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Servicios", href: "/servicios" },
              { label: "Evaluación infantil" },
            ]}
          />
          <span className="mt-4 inline-block rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
            Evaluación fonoaudiológica
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Evaluación fonoaudiológica infantil en Chillán
          </h1>
          <p className="mt-4 text-lg text-gray-600" data-speakable>
            Para niños que hablan poco, pronuncian mal, no comprenden bien o
            presentan dudas en su desarrollo del lenguaje y el habla.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-rose-500">✓</span> Sesión presencial de
              aproximadamente 60 minutos
            </li>
            <li className="flex items-center gap-2">
              <span className="text-rose-500">✓</span> Revisión comprensiva y
              expresiva
            </li>
            <li className="flex items-center gap-2">
              <span className="text-rose-500">✓</span> Informe y
              recomendaciones
            </li>
          </ul>
          <div className="mt-8">
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar evaluación</WhatsAppCTA>
          </div>
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
        </section>

        {/* ¿Qué evalúo? */}
        <section className="mx-auto max-w-4xl px-4 py-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            ¿Qué evalúo cuando reviso el lenguaje y el habla?
          </h2>
          <p className="mt-4 text-gray-600">
            La evaluación fonoaudiológica infantil abarca tanto el lenguaje
            (comprensión y expresión) como el habla (articulación y fluidez).
            Cada área se revisa con pruebas y observación clínica adaptadas a la
            edad del niño.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {evaluationAreas.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <span className="text-2xl">{icon}</span>
                <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Si buscas solo evaluación del lenguaje, revisa la{" "}
            <Link
              href="/servicios/evaluacion-del-lenguaje-infantil-chillan"
              className="font-medium text-rose-600 underline"
            >
              evaluación del lenguaje infantil
            </Link>{" "}
            o la{" "}
            <Link
              href="/servicios/evaluacion-del-habla-infantil-chillan"
              className="font-medium text-rose-600 underline"
            >
              evaluación del habla infantil
            </Link>
            .
          </p>
        </section>

        {/* Señales */}
        <section className="bg-rose-50/50 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Señales para pedir esta evaluación
            </h2>
            <p className="mt-4 text-gray-600">
              Si tu hijo presenta una o más de estas señales, una evaluación
              fonoaudiológica ayuda a entender qué está pasando y qué conviene
              hacer.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {signals.map((signal) => (
                <li key={signal} className="flex items-start gap-2 text-gray-700">
                  <span className="mt-0.5 text-rose-500" aria-hidden="true">
                    •
                  </span>
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600">
              Si hay sospecha de{" "}
              <Link
                href="/chillan/tel"
                className="font-medium text-rose-600 underline"
              >
                TEL/TDL
              </Link>{" "}
              o{" "}
              <Link
                href="/tratamientos/retraso-del-lenguaje-chillan"
                className="font-medium text-rose-600 underline"
              >
                retraso del lenguaje
              </Link>
              , esta evaluación aclara el perfil antes de definir terapia.
            </p>
          </div>
        </section>

        {/* ¿Cómo es la evaluación? */}
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            ¿Cómo es la evaluación?
          </h2>
          <p className="mt-4 text-gray-600">
            El proceso tiene tres etapas claras para que la familia sepa qué
            esperar en cada momento.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-600">
                  {step}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Qué recibes */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Qué recibes al terminar
            </h2>
            <ul className="mt-6 space-y-3">
              {deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="mx-auto max-w-4xl px-4 py-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Preguntas frecuentes
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-xl border border-gray-200 bg-white p-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-gray-900">
                  {q}
                  <span className="text-gray-400 transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-gray-600">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Enlaces relacionados */}
        <section className="mx-auto max-w-4xl px-4 py-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            También puede interesarte
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                href: "/servicios/evaluacion-fonoaudiologica",
                label: "Evaluación fonoaudiológica completa",
              },
              {
                href: "/servicios/terapia-lenguaje-infantil",
                label: "Terapia de lenguaje infantil",
              },
              {
                href: "/chillan/tel",
                label: "TEL / Trastorno del desarrollo del lenguaje",
              },
              {
                href: "/tratamientos/retraso-del-lenguaje-chillan",
                label: "Retraso del lenguaje en Chillán",
              },
              {
                href: "/agendar-hora-fonoaudiologo-infantil-chillan",
                label: "Agendar hora fonoaudióloga infantil",
              },
              {
                href: "/sobre-katia-dominguez-fonoaudiologa-chillan",
                label: "Sobre Katia Domínguez",
              },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-medium text-rose-600 transition hover:border-rose-300 hover:bg-rose-50"
              >
                {label} →
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-4xl px-4 py-12">
          <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-10 text-center text-white sm:px-10">
            <h2 className="text-2xl font-bold sm:text-3xl">
              ¿Quieres evaluar a tu hijo?
            </h2>
            <p className="mt-3 text-gray-300">
              Escríbeme por WhatsApp con la edad y el motivo de consulta.
              Coordinamos la evaluación en Chillán.
            </p>
            <div className="mt-6">
              <WhatsAppCTA href={WHATSAPP_LINK}>
                Agendar evaluación
              </WhatsAppCTA>
            </div>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
