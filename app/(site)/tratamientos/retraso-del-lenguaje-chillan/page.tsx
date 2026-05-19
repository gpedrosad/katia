import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/tratamientos/retraso-del-lenguaje-chillan";
const WHATSAPP_LINK = whatsappUrl(
  "Hola, busco hora por retraso del lenguaje de mi hijo en Chillán"
);

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Tratamiento Retraso del Lenguaje en Niños | Chillán",
  description:
    "Terapia fonoaudiológica para retraso del lenguaje infantil en Chillán. Si tu hijo comprende pero habla poco, evaluamos y armamos un plan. Atención presencial.",
  keywords: [
    "retraso del lenguaje niños Chillán",
    "mi hijo no habla",
    "terapia lenguaje infantil",
    "fonoaudióloga Chillán",
    "retraso lenguaje expresivo",
  ],
});

const signalsByAge = [
  { age: "12-18 meses", concern: "No dice palabras claras ni señala lo que quiere con intención." },
  { age: "18-24 meses", concern: "No junta dos palabras (por ejemplo: «mamá agua», «más pan»)." },
  { age: "2 años", concern: "Tiene menos de 50 palabras y se comunica sobre todo señalando o llorando." },
  { age: "3 años", concern: "Solo palabras sueltas; no arma frases ni cuenta experiencias simples." },
  { age: "4-5 años", concern: "Le cuesta explicar lo que pasó; el vocabulario sigue muy limitado para su edad." },
];

const benefits = [
  {
    icon: "🗣️",
    title: "Más palabras y frases",
    description: "Favorecemos que tu hijo pase de palabras sueltas a combinaciones y oraciones funcionales.",
  },
  {
    icon: "👂",
    title: "Comprensión alineada",
    description: "Revisamos si el retraso es solo expresivo o también afecta lo que entiende al escuchar.",
  },
  {
    icon: "🏠",
    title: "Estrategias para casa",
    description: "Te enseño técnicas de estimulación diaria sin presionar niño ni familia.",
  },
  {
    icon: "📋",
    title: "Plan con objetivos claros",
    description: "Tras la evaluación defines metas realistas y seguimiento de avances en cada sesión.",
  },
];

const faqs = [
  {
    q: "¿En qué se diferencia retraso del lenguaje y retraso del habla?",
    a: "El lenguaje incluye vocabulario, frases y comprensión. El habla es cómo se articulan los sonidos. Un niño puede tener buen lenguaje pero pronunciar mal, o al revés. La evaluación lo aclara.",
  },
  {
    q: "¿A qué edad conviene empezar terapia?",
    a: "Cuanto antes, mejor. Si a los 2 años no hay frases de dos palabras o el vocabulario es muy bajo, conviene consultar. La intervención temprana suele acortar la duración del tratamiento.",
  },
  {
    q: "¿Cuánto dura el tratamiento del retraso del lenguaje?",
    a: "Depende de la gravedad y la constancia en casa. Casos leves pueden mejorar en meses; otros requieren apoyo más prolongado. En la evaluación inicial te doy un estimado para tu hijo.",
  },
  {
    q: "¿Necesito derivación del médico o colegio?",
    a: "No es obligatorio para agendar en consulta particular. Si el colegio o el PIE piden informe, lo elaboramos tras la evaluación formal.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Tratamiento de retraso del lenguaje infantil",
  description:
    "Evaluación y terapia fonoaudiológica para niños con retraso del lenguaje expresivo o mixto en Chillán.",
  provider: { "@type": "Person", name: "Katia Domínguez", jobTitle: "Fonoaudióloga" },
  areaServed: { "@type": "City", name: "Chillán" },
  serviceType: "Terapia de lenguaje infantil",
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

export default function RetrasoLenguajePage() {
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
                { label: "Tratamientos", href: "/fonoaudiologia-infantil-chillan" },
                { label: "Retraso del lenguaje" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
              Niños de 18 meses a 8 años
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Tratamiento para retraso del lenguaje en Chillán
            </h1>
            <p
              data-speakable
              className="mb-6 text-xl leading-relaxed text-gray-600"
            >
              El retraso del lenguaje es una de las consultas más frecuentes en
              fonoaudiología infantil: el niño comprende, pero habla poco, no arma
              frases o se frustra al comunicarse. En Chillán trabajamos con un
              enfoque lúdico y planificado para favorecer su expresión.
            </p>
            <ul className="mb-8 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </span>
                <span>
                  <strong>Evaluación inicial</strong> de comprensión y expresión
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </span>
                <span>
                  <strong>Sesiones presenciales</strong> con juego y rutinas
                  comunicativas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </span>
                <span>
                  <strong>Guía para padres</strong> con ejercicios prácticos en casa
                </span>
              </li>
            </ul>
            <WhatsAppCTA href={WHATSAPP_LINK}>
              Agendar evaluación por WhatsApp
            </WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-lg leading-relaxed text-gray-600">
              Los trastornos del lenguaje afectan aproximadamente al{" "}
              <strong>7% de los niños en edad escolar</strong>, según la{" "}
              <a
                href="https://www.asha.org/public/speech/disorders/language-disorders/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-rose-600 underline hover:text-rose-700"
              >
                ASHA
              </a>
              . Detectar un retraso a tiempo permite intervenir antes de que
              impacte el jardín o la escuela.
            </p>
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
              Señales por edad
            </h2>
            <p className="mb-10 text-center text-lg text-gray-600">
              Cada etapa tiene hitos esperados. Si tu hijo está por debajo de
              varios de estos, conviene una evaluación.
            </p>
            <div className="space-y-4">
              {signalsByAge.map((s) => (
                <div
                  key={s.age}
                  className="flex items-center gap-4 rounded-xl border border-rose-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-rose-100 text-center">
                    <span className="text-sm font-bold text-rose-700">{s.age}</span>
                  </div>
                  <p className="text-gray-700">{s.concern}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <WhatsAppCTA href={WHATSAPP_LINK}>Consultar mi caso</WhatsAppCTA>
            </div>
          </div>
        </section>

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Qué abordamos en terapia?
            </h2>
            <p className="mb-8 text-center text-gray-600">
              Partimos de una{" "}
              <Link
                href="/evaluacion-fonoaudiologica-infantil-chillan"
                className="font-semibold text-rose-600 underline"
              >
                evaluación fonoaudiológica
              </Link>{" "}
              para descartar audición u otras causas. Luego trabajamos vocabulario,
              estructura de frases y comprensión según el perfil del niño. Puedes
              profundizar en el{" "}
              <Link href="/glosario/tel" className="font-semibold text-rose-600 underline">
                glosario sobre TEL
              </Link>{" "}
              si sospechas un trastorno más específico, o ver el enfoque en{" "}
              <Link
                href="/chillan/retraso-del-lenguaje"
                className="font-semibold text-rose-600 underline"
              >
                lenguaje infantil en Chillán
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Beneficios del tratamiento
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-6"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-2xl">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">{b.title}</h3>
                    <p className="text-sm text-gray-600">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                    <span>{f.q}</span>
                    <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Recursos relacionados
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/servicios/terapia-de-lenguaje-infantil-chillan"
                className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-rose-300 hover:bg-rose-50"
              >
                <span className="text-2xl">💬</span>
                <p className="mt-2 font-medium text-gray-900">Terapia de lenguaje</p>
              </Link>
              <Link
                href="/evaluacion-fonoaudiologica-infantil-chillan"
                className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-rose-300 hover:bg-rose-50"
              >
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">Evaluación inicial</p>
              </Link>
              <Link
                href="/glosario/tel"
                className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-rose-300 hover:bg-rose-50"
              >
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">Glosario: TEL</p>
              </Link>
              <Link
                href="/sintomas/hijo-habla-poco-edad-chillan"
                className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-rose-300 hover:bg-rose-50"
              >
                <span className="text-2xl">👶</span>
                <p className="mt-2 font-medium text-gray-900">Habla poco para su edad</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Tu hijo se demora en hablar?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Conversemos por WhatsApp y coordinemos una evaluación presencial en
              Chillán.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar por WhatsApp</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
