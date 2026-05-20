import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/sintomas/nino-tartamudea-chillan";
const WHATSAPP_LINK = whatsappUrl("Hola, mi hijo tartamudea y quisiera una evaluación en Chillán");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Mi hijo tartamudea | Evaluación Chillán",
  description:
    "¿Tu hijo repite sílabas o se traba al hablar? Diferencia disfluencia normal y tartamudez. Qué hacer y evaluación de fluidez fonoaudiológica en Chillán.",
  keywords: ["fonoaudióloga Chillán", "fonoaudiología infantil", "nino tartamudea chillan"],
});

const signalsByAge = [
  { age: "2-3 años", concern: "Repite palabras enteras («yo yo quiero») sin tensión; suele ser evolutivo." },
  { age: "3-4 años", concern: "Aparecen repeticiones de sonidos («p-p-papá») o prolongaciones." },
  { age: "4-5 años", concern: "Bloqueos con esfuerzo facial o movimientos asociados." },
  { age: "5-6 años", concern: "Evita hablar en el jardín o con personas nuevas." },
  { age: "6+ años", concern: "Tartamudez persistente más de 6 meses con frustración." },
];

const actionsNow = [
  { icon: "🤫", title: "Escucha sin interrumpir", description: "Mantén contacto visual; no completes todas sus frases." },
  { icon: "🐢", title: "Modela ritmo calmado", description: "Habla un poco más lento tú, sin pedirle que «hable despacio»." },
  { icon: "😌", title: "Reduce presión", description: "Evita situaciones de exposición forzada si él está tenso." },
  { icon: "📋", title: "Evalúa si hay alerta", description: "Si hay repeticiones de sonidos, bloqueos o evitación, agenda evaluación de fluidez." },
];

const faqs = [
  { q: "¿Es normal que un niño tartamudee?", a: "Hay disfluencia normal entre 2-5 años. Consulta si hay repeticiones de sonidos, bloqueos, tensión o duración mayor a 6 meses." },
  { q: "¿Qué NO debo decir?", a: "Evita «respira», «piensa antes» o «relájate»; aumentan la presión." },
  { q: "¿Se puede tratar en la infancia?", a: "Sí. La intervención temprana en fluidez mejora pronóstico y confianza." },
  { q: "¿Qué evalúan en consulta?", a: "Tipo y frecuencia de disfluencias, conductas secundarias y impacto emocional." },
];

const medicalWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
  name: "¿Tu hijo tartamudea? Cuándo actuar en Chillán",
  description: "¿Tu hijo repite sílabas o se traba al hablar? Diferencia disfluencia normal y tartamudez. Qué hacer y evaluación de fluidez fonoaudiológica en Chillán.",
  medicalSpecialty: "SpeechTherapy",
  about: { "@type": "MedicalCondition", name: "Trastornos de la fluidez del habla" },
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

export default function NinoTartamudeaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Síntomas", href: "/fonoaudiologa-ninos-chillan" },
                { label: "Tartamudez" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              Fluidez del habla
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              ¿Tu hijo tartamudea? Cuándo actuar en Chillán
            </h1>
            <p
              data-speakable
              className="mb-6 text-xl leading-relaxed text-gray-600"
            >
              Escuchar repeticiones o bloqueos puede angustiar a la familia. Entre los 2 y 5 años hay disfluencias normales del desarrollo, pero ciertas señales indican que conviene evaluar la fluidez del habla cuanto antes.
            </p>
            <ul className="mb-8 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Señales por edad</strong> para decidir si consultar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Estrategias de estimulación</strong> sin presionar al niño</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Derivación a terapia</strong> si hay retraso o TEL</span>
              </li>
            </ul>
            <WhatsAppCTA href={WHATSAPP_LINK} className="bg-yellow-600 hover:bg-yellow-700 ring-yellow-300">
              Consultar por WhatsApp
            </WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-lg leading-relaxed text-gray-600">La <strong>ASHA</strong> recomienda consulta si las disfluencias duran más de 6 meses, hay tensión visible o el niño evita hablar. (<a href="https://www.asha.org/public/speech/disorders/stuttering/" target="_blank" rel="noopener noreferrer" className="font-medium text-yellow-600 underline">ASHA</a>).</p>
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
                  className="flex items-center gap-4 rounded-xl border border-yellow-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-center">
                    <span className="text-sm font-bold text-yellow-700">{s.age}</span>
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

        <section className="bg-yellow-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Qué puede estar pasando?
            </h2>
            <p className="mb-8 text-center text-gray-600">Más en <a href="/glosario/disfemia">glosario: disfemia</a>, <a href="/chillan/disfemia">tartamudez en Chillán</a>, <a href="/servicios/terapia-del-habla-infantil-chillan">terapia del habla</a> y <a href="/servicios/evaluacion-fonoaudiologica">evaluación</a>.</p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Qué hacer ahora
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {actionsNow.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-6"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-2xl">
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

        <section className="bg-yellow-50 px-4 py-16 sm:px-6 lg:px-8">
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
                    <span className="flex-shrink-0 text-yellow-500 transition-transform group-open:rotate-180">
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
              <Link href="/tratamientos/retraso-del-lenguaje-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-yellow-300 hover:bg-yellow-50">
                <span className="text-2xl">💬</span>
                <p className="mt-2 font-medium text-gray-900">Retraso del lenguaje</p>
              </Link>
              <Link href="/servicios/evaluacion-fonoaudiologica" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-yellow-300 hover:bg-yellow-50">
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">Evaluación</p>
              </Link>
              <Link href="/glosario/tel" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-yellow-300 hover:bg-yellow-50">
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">Glosario TEL</p>
              </Link>
              <Link href="/sintomas/hijo-no-arma-frases-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-yellow-300 hover:bg-yellow-50">
                <span className="text-2xl">📝</span>
                <p className="mt-2 font-medium text-gray-900">No arma frases</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Te preocupa su fluidez al hablar?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Evaluación de tartamudez infantil en Chillán.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar por WhatsApp</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
