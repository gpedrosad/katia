import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/sintomas/hijo-no-arma-frases-chillan";
const WHATSAPP_LINK = whatsappUrl("Hola, mi hijo no arma frases y me preocupa. Busco hora en Chillán");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Mi hijo no arma frases | Chillán",
  description:
    "¿Tu hijo solo dice palabras sueltas? Hitos por edad, causas posibles y qué hacer. Fonoaudióloga infantil en Chillán. Evaluación y terapia de lenguaje.",
  keywords: ["fonoaudióloga Chillán", "fonoaudiología infantil", "hijo no arma frases chillan"],
});

const signalsByAge = [
  { age: "18-24 meses", concern: "No combina dos palabras con intención comunicativa." },
  { age: "2-3 años", concern: "Solo etiquetas («auto», «perro») sin verbos ni estructura." },
  { age: "3 años", concern: "No forma oraciones de 3-4 palabras ni hace preguntas simples." },
  { age: "4 años", concern: "No relata experiencias del jardín con secuencia básica." },
  { age: "5+ años", concern: "Frases telegráficas persistentes frente a pares." },
];

const actionsNow = [
  { icon: "➕", title: "Expande una palabra", description: "Si dice «agua», modela «quiero agua» sin exigir repetición inmediata." },
  { icon: "❓", title: "Ofrece opciones", description: "«¿Zumo o leche?» favorece respuestas de dos palabras." },
  { icon: "📖", title: "Cuentos con pausas", description: "Deja espacios para que complete la frase del cuento." },
  { icon: "📋", title: "Evalúa comprensión", description: "A veces el problema es mixto; conviene evaluación expresiva y receptiva." },
];

const faqs = [
  { q: "¿A qué edad debería armar frases?", a: "Entre 18-24 meses suelen aparecer frases de dos palabras; a los 3 años, oraciones más largas." },
  { q: "¿Es normal que un niño de 3 años no arme frases?", a: "No es lo esperado. Conviene evaluar retraso del lenguaje o TEL." },
  { q: "¿Qué técnicas usan en terapia?", a: "Expansión, modelado, recast y juego simbólico con objetivos graduales." },
  { q: "¿Debo preocuparme si entiende todo?", a: "Puede ser retraso expresivo, pero hay que confirmarlo y descartar TEL u otros factores." },
];

const medicalWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
  name: "¿Tu hijo no arma frases? Cuándo consultar en Chillán",
  description: "¿Tu hijo solo dice palabras sueltas? Hitos por edad, causas posibles y qué hacer. Fonoaudióloga infantil en Chillán. Evaluación y terapia de lenguaje.",
  medicalSpecialty: "SpeechTherapy",
  about: { "@type": "MedicalCondition", name: "Retraso del lenguaje expresivo" },
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

export default function HijoNoArmaFrasesPage() {
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
      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Síntomas", href: "/fonoaudiologa-ninos-chillan" },
                { label: "No arma frases" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
              Estructura del lenguaje
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              ¿Tu hijo no arma frases? Cuándo consultar en Chillán
            </h1>
            <p
              data-speakable
              className="mb-6 text-xl leading-relaxed text-gray-600"
            >
              Pasar de palabras sueltas a frases es un hito clave entre los 18 y 36 meses. Si tu hijo nombra objetos pero no combina («más pan», «mamá ven»), puede necesitar apoyo en lenguaje expresivo.
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
            <WhatsAppCTA href={WHATSAPP_LINK} className="bg-sky-600 hover:bg-sky-700 ring-sky-300">
              Consultar por WhatsApp
            </WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-lg leading-relaxed text-gray-600">La <strong>OMS</strong> enfatiza la detección temprana de retrasos del desarrollo, incluido el lenguaje, para mejorar resultados. (<a href="https://www.who.int/news-room/fact-sheets/detail/developmental-disabilities-in-children" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-600 underline">OMS</a>).</p>
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
                  className="flex items-center gap-4 rounded-xl border border-sky-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-sky-100 text-center">
                    <span className="text-sm font-bold text-sky-700">{s.age}</span>
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

        <section className="bg-sky-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Qué puede estar pasando?
            </h2>
            <p className="mb-8 text-center text-gray-600">Consulta <a href="/tratamientos/retraso-del-lenguaje-chillan">retraso del lenguaje</a>, <a href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan">TEL</a>, <a href="/glosario/tel">glosario</a>, <a href="/chillan/retraso-del-lenguaje">Chillán</a>, <a href="/servicios/terapia-lenguaje-infantil">terapia de lenguaje</a> y <a href="/servicios/evaluacion-fonoaudiologica">evaluación</a>.</p>
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
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-2xl">
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

        <section className="bg-sky-50 px-4 py-16 sm:px-6 lg:px-8">
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
                    <span className="flex-shrink-0 text-sky-500 transition-transform group-open:rotate-180">
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
              <Link href="/tratamientos/retraso-del-lenguaje-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-sky-300 hover:bg-sky-50">
                <span className="text-2xl">💬</span>
                <p className="mt-2 font-medium text-gray-900">Retraso del lenguaje</p>
              </Link>
              <Link href="/servicios/evaluacion-fonoaudiologica" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-sky-300 hover:bg-sky-50">
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">Evaluación</p>
              </Link>
              <Link href="/glosario/tel" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-sky-300 hover:bg-sky-50">
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">Glosario TEL</p>
              </Link>
              <Link href="/sintomas/hijo-no-arma-frases-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-sky-300 hover:bg-sky-50">
                <span className="text-2xl">📝</span>
                <p className="mt-2 font-medium text-gray-900">No arma frases</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Solo palabras sueltas?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Te oriento con evaluación presencial en Chillán.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar por WhatsApp</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
