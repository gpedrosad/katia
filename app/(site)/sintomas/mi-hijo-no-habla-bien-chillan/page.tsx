import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/sintomas/mi-hijo-no-habla-bien-chillan";
const WHATSAPP_LINK = whatsappUrl("Hola, me preocupa que mi hijo no habla bien. Necesito consulta en Chillán");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "¿Mi hijo no habla bien? | Señales Chillán",
  description:
    "Si tu hijo no habla bien para su edad, conoce señales de alerta y cuándo consultar fonoaudióloga en Chillán. Orientación presencial y evaluación infantil.",
  keywords: ["fonoaudióloga Chillán", "fonoaudiología infantil", "mi hijo no habla bien chillan"],
});

const signalsByAge = [
  { age: "18-24 meses", concern: "No dice palabras claras (mamá, agua) ni señala con intención." },
  { age: "2 años", concern: "No junta dos palabras ni tiene un repertorio de unas 50 palabras." },
  { age: "3 años", concern: "Extraños entienden menos de la mitad de lo que dice." },
  { age: "4 años", concern: "Habla «como más chico»; evita contar o participar en conversaciones." },
  { age: "5+ años", concern: "Sigue con frases muy simples o errores que no mejoran." },
];

const actionsNow = [
  { icon: "📝", title: "Registra ejemplos", description: "Graba 2 minutos de juego libre y anota situaciones en que sí se comunica." },
  { icon: "🤫", title: "Evita presionar", description: "No exijas «di hola»; modela frases cortas y espera unos segundos." },
  { icon: "👂", title: "Revisa audición", description: "Si hay dudas, descarta pérdida auditiva con evaluación médica o fonoaudiológica." },
  { icon: "📞", title: "Pide evaluación", description: "Si coinciden varias señales, agenda evaluación fonoaudiológica en Chillán." },
];

const faqs = [
  { q: "¿Cuándo preocuparme si mi hijo no habla bien?", a: "Si a los 2 años no hay frases de dos palabras, a los 3 no arma oraciones simples, o si no lo entienden fuera de casa, conviene evaluar." },
  { q: "¿Es solo pronunciación o también lenguaje?", a: "Puede ser habla (sonidos), lenguaje (palabras y frases) o ambos. La evaluación separa perfiles." },
  { q: "¿Qué NO decirle al niño?", a: "Evita «habla más despacio», «no seas tímido» o corregir cada palabra; favorece turnos y escucha activa." },
  { q: "¿Qué tratamiento existe en Chillán?", a: "Terapia de lenguaje y/o del habla según diagnóstico, con trabajo en consulta y pautas para casa." },
];

const medicalWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
  name: "¿Mi hijo no habla bien? Cuándo consultar en Chillán",
  description: "Si tu hijo no habla bien para su edad, conoce señales de alerta y cuándo consultar fonoaudióloga en Chillán. Orientación presencial y evaluación infantil.",
  medicalSpecialty: "SpeechTherapy",
  about: { "@type": "MedicalCondition", name: "Dificultades del lenguaje y el habla infantil" },
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

export default function MiHijoNoHablaBienPage() {
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
                { label: "Síntomas", href: "/fonoaudiologia-infantil-chillan" },
                { label: "No habla bien" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              Señales de alerta
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              ¿Mi hijo no habla bien? Cuándo consultar en Chillán
            </h1>
            <p
              data-speakable
              className="mb-6 text-xl leading-relaxed text-gray-600"
            >
              Frases como «ya va a hablar» o «es más callado» pueden retrasar una consulta necesaria. Si tu hijo habla poco, no se entiende o se frustra al comunicarse, estas señales te ayudan a decidir el siguiente paso con calma.
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
            <p className="mb-8 text-center text-gray-600">Puede haber <a href="/tratamientos/retraso-del-lenguaje-chillan">retraso del lenguaje</a>, <a href="/tratamientos/retraso-del-habla-chillan">retraso del habla</a> o <a href="/tratamientos/apraxia-del-habla-infantil-chillan">apraxia</a>. Mira <a href="/chillan/lenguaje-infantil">lenguaje infantil en Chillán</a>, <a href="/glosario/tel">glosario TEL</a>, <a href="/servicios/terapia-de-lenguaje-infantil-chillan">terapia de lenguaje</a> y <a href="/evaluacion-fonoaudiologica-infantil-chillan">evaluación</a>.</p>
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
              <Link href="/evaluacion-fonoaudiologica-infantil-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-amber-300 hover:bg-amber-50">
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">Evaluación</p>
              </Link>
              <Link href="/glosario/tel" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-amber-300 hover:bg-amber-50">
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">Glosario TEL</p>
              </Link>
              <Link href="/sintomas/hijo-no-arma-frases-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-amber-300 hover:bg-amber-50">
                <span className="text-2xl">📝</span>
                <p className="mt-2 font-medium text-gray-900">No arma frases</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Tu hijo no se hace entender?
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
