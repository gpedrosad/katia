import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/sintomas/hijo-habla-poco-edad-chillan";
const WHATSAPP_LINK = whatsappUrl(
  "Hola, siento que mi hijo habla muy poco para su edad. Busco hora en Chillán"
);

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Mi hijo habla poco para su edad | Chillán",
  description:
    "¿Tu hijo habla muy poco para su edad? Señales por etapa, cuándo evaluar y qué hacer. Orientación fonoaudiológica presencial en Chillán. Agenda por WhatsApp.",
  keywords: [
    "hijo habla poco",
    "vocabulario limitado niño",
    "fonoaudióloga Chillán",
    "retraso del lenguaje",
    "cuándo llevar al fonoaudiólogo",
  ],
});

const signalsByAge = [
  { age: "12-18 meses", concern: "Menos de 10 palabras claras; se comunica casi solo con gestos." },
  { age: "2 años", concern: "No alcanza unas 50 palabras ni combina dos («mamá agua»)." },
  { age: "2½ años", concern: "En el jardín usa mucho menos palabras que sus pares." },
  { age: "3 años", concern: "Solo etiquetas sueltas; no cuenta lo que hizo en el día." },
  { age: "4+ años", concern: "Vocabulario muy reducido y frases cortas frente a otros niños." },
];

const actionsNow = [
  { icon: "👀", title: "Observa sin comparar en exceso", description: "Anota cuántas palabras nuevas usa por semana y en qué situaciones se expresa más." },
  { icon: "💬", title: "Modela y expande", description: "Repite lo que dice agregando una palabra («pan» → «quiero pan») sin exigir que repita." },
  { icon: "📵", title: "Menos pantalla pasiva", description: "Prioriza juego cara a cara, canciones y lectura compartida con turnos de habla." },
  { icon: "📋", title: "Consulta si persisten dudas", description: "Si varias señales coinciden, agenda evaluación; descartar audición y perfil lingüístico da tranquilidad." },
];

const faqs = [
  { q: "¿Cuántas palabras debería decir a los 2 años?", a: "Se esperan alrededor de 50 palabras y frases de dos palabras («más leche», «papá ven»). Si está muy por debajo, conviene evaluar." },
  { q: "¿Es verdad que los varones hablan más tarde?", a: "Hay variabilidad, pero las diferencias no suelen ser enormes. Si el retraso es marcado, no conviene esperar solo por el género." },
  { q: "¿Puede ser TEL?", a: "Un vocabulario muy limitado persistente puede asociarse a retraso del lenguaje o TEL. La evaluación fonoaudiológica diferencia perfiles." },
  { q: "¿Qué hago mientras espero la hora?", a: "Ofrece opciones («¿leche o jugo?»), describe lo que hace, lee cuentos pausados y evita corregir de forma constante; busca momentos de comunicación exitosa." },
];

const medicalWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
  name: "Mi hijo habla poco para su edad",
  description: "Guía para padres sobre vocabulario limitado en la infancia y cuándo consultar fonoaudióloga en Chillán.",
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

export default function HablaPocoPage() {
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
      <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Síntomas", href: "/fonoaudiologa-ninos-chillan" },
                { label: "Habla poco" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              Vocabulario y expresión
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              ¿Tu hijo habla poco para su edad?
            </h1>
            <p
              data-speakable
              className="mb-6 text-xl leading-relaxed text-gray-600"
            >
              Comparar con otros niños puede generar ansiedad, pero tu observación
              importa: si en el jardín o en casa usa muchas menos palabras que sus
              pares, conviene revisar hitos del lenguaje. En Chillán orientamos con
              evaluación clínica y pautas concretas para la familia.
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
            <WhatsAppCTA href={WHATSAPP_LINK} className="bg-indigo-600 hover:bg-indigo-700 ring-indigo-300">
              Pedir orientación por WhatsApp
            </WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-lg leading-relaxed text-gray-600">
              El lenguaje expresivo limitado puede asociarse a retraso del lenguaje;
              la{" "}
              <a href="https://www.asha.org/public/speech/disorders/language-disorders/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 underline">ASHA</a>{" "}
              estima que los trastornos del lenguaje afectan alrededor del{" "}
              <strong>7% de los niños en edad escolar</strong>.
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
                  className="flex items-center gap-4 rounded-xl border border-indigo-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-center">
                    <span className="text-sm font-bold text-indigo-700">{s.age}</span>
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

        <section className="bg-indigo-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Qué puede estar pasando?
            </h2>
            <p className="mb-8 text-center text-gray-600">
              A veces es un{" "}
              <Link href="/tratamientos/retraso-del-lenguaje-chillan" className="font-semibold text-indigo-600 underline">retraso del lenguaje</Link>, otras un{" "}
              <Link href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan" className="font-semibold text-indigo-600 underline">TEL</Link>.{" "}
              Lee el <Link href="/glosario/tel" className="font-semibold text-indigo-600 underline">glosario</Link>,{" "}
              <Link href="/chillan/retraso-del-lenguaje" className="font-semibold text-indigo-600 underline">retraso del lenguaje en Chillán</Link> y la{" "}
              <Link href="/servicios/terapia-lenguaje-infantil" className="font-semibold text-indigo-600 underline">terapia de lenguaje</Link>.{" "}
              La <Link href="/servicios/evaluacion-fonoaudiologica" className="font-semibold text-indigo-600 underline">evaluación</Link> aclara el diagnóstico.
            </p>
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
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-2xl">
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

        <section className="bg-indigo-50 px-4 py-16 sm:px-6 lg:px-8">
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
                    <span className="flex-shrink-0 text-indigo-500 transition-transform group-open:rotate-180">
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
              <Link href="/tratamientos/retraso-del-lenguaje-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-indigo-300 hover:bg-indigo-50">
                <span className="text-2xl">💬</span>
                <p className="mt-2 font-medium text-gray-900">Retraso del lenguaje</p>
              </Link>
              <Link href="/servicios/evaluacion-fonoaudiologica" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-indigo-300 hover:bg-indigo-50">
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">Evaluación</p>
              </Link>
              <Link href="/glosario/tel" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-indigo-300 hover:bg-indigo-50">
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">Glosario TEL</p>
              </Link>
              <Link href="/sintomas/hijo-no-arma-frases-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-indigo-300 hover:bg-indigo-50">
                <span className="text-2xl">📝</span>
                <p className="mt-2 font-medium text-gray-900">No arma frases</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Te preocupa su vocabulario?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Escríbeme por WhatsApp y coordinamos orientación o evaluación en Chillán.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar por WhatsApp</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
