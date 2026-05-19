import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/sintomas/nino-pronuncia-mal-chillan";
const WHATSAPP_LINK = whatsappUrl("Hola, mi hijo pronuncia mal y busco fonoaudióloga en Chillán");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Niño pronuncia mal | Fonoaudiología Chillán",
  description:
    "¿Tu hijo pronuncia mal letras o palabras? Causas frecuentes, señales por edad y cuándo ir al fonoaudiólogo en Chillán. Terapia de articulación presencial.",
  keywords: ["fonoaudióloga Chillán", "fonoaudiología infantil", "nino pronuncia mal chillan"],
});

const signalsByAge = [
  { age: "3 años", concern: "Omite muchas consonantes; solo la familia entiende con facilidad." },
  { age: "4 años", concern: "Persisten «tasa» por casa, «peo» por perro u otras sustituciones." },
  { age: "5 años", concern: "No dice la «r» ni la «s»; el jardín reporta dificultad para entenderlo." },
  { age: "6 años", concern: "Errores múltiples al leer en voz alta o escribir fonéticamente." },
  { age: "7+ años", concern: "Se avergüenza de hablar o evita participar oralmente." },
];

const actionsNow = [
  { icon: "🪞", title: "Juega frente al espejo", description: "Sin corregir todo el rato: observa labios y lengua en sonidos objetivo." },
  { icon: "🔊", title: "Refuerza la escucha", description: "Rima, identifica sonidos iniciales y contrasta pares (casa/tasa)." },
  { icon: "🚫", title: "Evita burlas", description: "Las correcciones constantes aumentan la tensión y empeoran la articulación." },
  { icon: "📋", title: "Evalúa si persiste", description: "Tras los 5 años con varios errores, agenda evaluación de articulación y OFA." },
];

const faqs = [
  { q: "¿Por qué mi hijo pronuncia mal?", a: "Causas frecuentes: dislalia, trastorno fonológico, frenillo corto o inmadurez motora del habla. La evaluación define cuál aplica." },
  { q: "¿Es normal no decir la «r» a los 4?", a: "Puede ser, pero si hay muchos sonidos afectados e inteligibilidad baja, conviene intervenir." },
  { q: "¿La terapia duele?", a: "No. Usamos juegos, soplo y praxias; el niño aprende posiciones articulatorias de forma lúdica." },
  { q: "¿Influye en la lectura?", a: "Sí. Patrones fonológicos persistentes pueden dificultar conciencia fonológica y lectoescritura." },
];

const medicalWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
  name: "¿Tu hijo pronuncia mal? Guía para padres en Chillán",
  description: "¿Tu hijo pronuncia mal letras o palabras? Causas frecuentes, señales por edad y cuándo ir al fonoaudiólogo en Chillán. Terapia de articulación presencial.",
  medicalSpecialty: "SpeechTherapy",
  about: { "@type": "MedicalCondition", name: "Trastornos de la articulación del habla" },
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

export default function NinoPronunciaMalPage() {
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
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Síntomas", href: "/fonoaudiologia-infantil-chillan" },
                { label: "Pronuncia mal" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              Pronunciación infantil
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              ¿Tu hijo pronuncia mal? Guía para padres en Chillán
            </h1>
            <p
              data-speakable
              className="mb-6 text-xl leading-relaxed text-gray-600"
            >
              Algunos sonidos maduran tarde (la «r» suele consolidarse entre 4 y 6 años), pero si a los 4-5 años varios sonidos fallan y cuesta entenderlo, merece una evaluación. Te explico señales y pasos concretos.
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
            <WhatsAppCTA href={WHATSAPP_LINK} className="bg-emerald-600 hover:bg-emerald-700 ring-emerald-300">
              Consultar por WhatsApp
            </WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-lg leading-relaxed text-gray-600">La vigilancia del desarrollo del lenguaje es parte de la atención infantil según lineamientos del <strong>MINSAL</strong> en Chile. (<a href="https://www.minsal.cl/" target="_blank" rel="noopener noreferrer" className="font-medium text-emerald-600 underline">MINSAL</a>).</p>
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
                  className="flex items-center gap-4 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-center">
                    <span className="text-sm font-bold text-emerald-700">{s.age}</span>
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

        <section className="bg-emerald-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Qué puede estar pasando?
            </h2>
            <p className="mb-8 text-center text-gray-600">Revisa <a href="/tratamientos/dislalia-infantil-chillan">dislalia</a>, <a href="/tratamientos/trastorno-fonologico-chillan">trastorno fonológico</a>, <a href="/glosario/dislalia">glosario</a>, <a href="/chillan/dislalia">dislalia en Chillán</a>, <a href="/servicios/terapia-del-habla-infantil-chillan">terapia del habla</a> y <a href="/evaluacion-fonoaudiologica-infantil-chillan">evaluación</a>.</p>
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
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-2xl">
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

        <section className="bg-emerald-50 px-4 py-16 sm:px-6 lg:px-8">
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
                    <span className="flex-shrink-0 text-emerald-500 transition-transform group-open:rotate-180">
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
              <Link href="/tratamientos/retraso-del-lenguaje-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-emerald-300 hover:bg-emerald-50">
                <span className="text-2xl">💬</span>
                <p className="mt-2 font-medium text-gray-900">Retraso del lenguaje</p>
              </Link>
              <Link href="/evaluacion-fonoaudiologica-infantil-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-emerald-300 hover:bg-emerald-50">
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">Evaluación</p>
              </Link>
              <Link href="/glosario/tel" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-emerald-300 hover:bg-emerald-50">
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">Glosario TEL</p>
              </Link>
              <Link href="/sintomas/hijo-no-arma-frases-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-emerald-300 hover:bg-emerald-50">
                <span className="text-2xl">📝</span>
                <p className="mt-2 font-medium text-gray-900">No arma frases</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Le cuesta pronunciar con claridad?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Agenda evaluación de pronunciación en Chillán.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar por WhatsApp</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
