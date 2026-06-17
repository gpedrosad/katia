import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/sintomas/mi-hijo-no-comprende-chillan";
const WHATSAPP_LINK = whatsappUrl("Hola, me preocupa que mi hijo no comprende bien. Necesito consulta en Chillán");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "¿Mi hijo no comprende? | Señales Chillán",
  description:
    "Si tu hijo no comprende instrucciones o preguntas para su edad, conoce señales de alerta y cuándo consultar fonoaudióloga en Chillán.",
  keywords: ["mi hijo no comprende chillan", "niño no entiende instrucciones", "comprensión lenguaje infantil", "fonoaudióloga Chillán"],
});

const signalsByAge = [
  { age: "18-24 meses", concern: "No responde a su nombre ni a instrucciones simples como «ven» o «dame»." },
  { age: "2 años", concern: "No sigue instrucciones de un paso («trae la pelota») sin apoyo visual." },
  { age: "3 años", concern: "No entiende preguntas simples como «¿dónde está?» o «¿qué quieres?»." },
  { age: "4 años", concern: "No sigue instrucciones de dos pasos («guarda el juguete y lava las manos»)." },
  { age: "5+ años", concern: "Le cuesta entender explicaciones más largas o preguntas con «por qué»." },
];

const actionsNow = [
  { icon: "🗣️", title: "Habla claro y simple", description: "Usa frases cortas, mira al niño y dale tiempo para procesar." },
  { icon: "👀", title: "Apoya con gestos", description: "Señala, muestra y acompaña tus palabras con acciones concretas." },
  { icon: "👂", title: "Revisa audición", description: "Si hay dudas sobre su audición, consulta con un profesional para descartar." },
  { icon: "📞", title: "Pide evaluación", description: "Si no comprende para su edad, una evaluación fonoaudiológica en Chillán define el siguiente paso." },
];

const faqs = [
  { q: "¿Cuándo preocuparme si mi hijo no comprende?", a: "Si a los 2 años no sigue instrucciones simples, a los 3 no entiende preguntas básicas, o si el colegio reporta dificultades de comprensión, conviene evaluar." },
  { q: "Es problema de audición o de lenguaje?", a: "Puede ser ambos. Si el niño no escucha bien, no puede comprender. Si escucha bien pero no entiende, puede haber una dificultad de lenguaje. La evaluación diferencia ambas." },
  { q: "¿Qué puedo hacer en casa?", a: "Usa frases cortas, habla mirándolo, apoya con gestos y dale tiempo para responder. Evita repetir la misma instrucción muchas veces sin cambiar la forma." },
  { q: "¿Qué tratamiento existe en Chillán?", a: "Evaluación del lenguaje comprensivo y terapia según el perfil. Se trabaja comprensión de instrucciones, vocabulario y narración, con pautas para la familia." },
];

const medicalWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
  name: "¿Mi hijo no comprende? Cuándo consultar en Chillán",
  description: "Si tu hijo no comprende instrucciones o preguntas para su edad, conoce señales de alerta y cuándo consultar fonoaudióloga en Chillán.",
  medicalSpecialty: "SpeechTherapy",
  about: { "@type": "MedicalCondition", name: "Dificultades de comprensión del lenguaje infantil" },
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

export default function MiHijoNoComprendePage() {
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
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Síntomas", href: "/fonoaudiologa-ninos-chillan" },
                { label: "No comprende" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              Señales de alerta
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              ¿Mi hijo no comprende? Cuándo consultar en Chillán
            </h1>
            <p
              data-speakable
              className="mb-6 text-xl leading-relaxed text-gray-600"
            >
              Si tu hijo parece no entender lo que le dices, no sigue instrucciones o responde de forma que no tiene relación con lo que preguntaste, estas señales te ayudan a decidir el siguiente paso.
            </p>
            <ul className="mb-8 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Señales por edad</strong> para decidir si consultar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Estrategias para mejorar la comprensión</strong> en casa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Derivación a evaluación</strong> si hay retraso o TDL</span>
              </li>
            </ul>
            <WhatsAppCTA href={WHATSAPP_LINK} className="bg-amber-600 hover:bg-amber-700 ring-amber-300">
              Consultar por WhatsApp
            </WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-lg leading-relaxed text-gray-600">La ASHA indica que los trastornos del lenguaje afectan alrededor del <strong>7% de los niños en edad escolar</strong>. (<a href="https://www.asha.org/public/speech/disorders/language-disorders/" target="_blank" rel="noopener noreferrer" className="font-medium text-amber-600 underline">ASHA</a>).</p>
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
                  className="flex items-center gap-4 rounded-xl border border-amber-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-center">
                    <span className="text-sm font-bold text-amber-700">{s.age}</span>
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

        <section className="bg-amber-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Qué puede estar pasando?
            </h2>
            <p className="mb-8 text-center text-gray-600">Puede haber <Link href="/tratamientos/retraso-del-lenguaje-chillan" className="font-medium text-amber-600 underline">retraso del lenguaje</Link>, <Link href="/chillan/tel" className="font-medium text-amber-600 underline">TDL/TEL</Link>, dificultades de <Link href="/glosario/comprension-verbal" className="font-medium text-amber-600 underline">comprensión verbal</Link> o factores auditivos. Mira <Link href="/fonoaudiologa-ninos-chillan" className="font-medium text-amber-600 underline">lenguaje infantil en Chillán</Link>, <Link href="/servicios/evaluacion-fonoaudiologica" className="font-medium text-amber-600 underline">evaluación</Link> y <Link href="/sintomas/nino-no-entiende-instrucciones-chillan" className="font-medium text-amber-600 underline">niño no entiende instrucciones</Link>.</p>
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
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-2xl">
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

        <section className="bg-amber-50 px-4 py-16 sm:px-6 lg:px-8">
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
                    <span className="flex-shrink-0 text-amber-500 transition-transform group-open:rotate-180">
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
              <Link href="/tratamientos/retraso-del-lenguaje-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-amber-300 hover:bg-amber-50">
                <span className="text-2xl">💬</span>
                <p className="mt-2 font-medium text-gray-900">Retraso del lenguaje</p>
              </Link>
              <Link href="/servicios/evaluacion-fonoaudiologica" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-amber-300 hover:bg-amber-50">
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">Evaluación</p>
              </Link>
              <Link href="/chillan/tel" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-amber-300 hover:bg-amber-50">
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">TDL/TEL</p>
              </Link>
              <Link href="/sintomas/nino-no-entiende-instrucciones-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-amber-300 hover:bg-amber-50">
                <span className="text-2xl">📝</span>
                <p className="mt-2 font-medium text-gray-900">No entiende instrucciones</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Tu hijo no comprende para su edad?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Conversemos y veamos si corresponde una evaluación en Chillán.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar por WhatsApp</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
