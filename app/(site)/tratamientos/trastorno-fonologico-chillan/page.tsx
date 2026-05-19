import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/tratamientos/trastorno-fonologico-chillan";
const WHATSAPP_LINK = whatsappUrl("Hola, busco ayuda por trastorno fonológico en Chillán");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Tratamiento Trastorno Fonológico | Chillán",
  description:
    "Terapia fonoaudiológica para trastorno fonológico en niños en Chillán. Conciencia fonológica, pares mínimos y habla inteligible. Evaluación presencial con pruebas clínicas.",
  keywords: [
    "trastorno fonológico niños",
    "fonoaudiología Chillán",
    "conciencia fonológica",
    "habla ininteligible",
    "terapia fonológica",
  ],
});

const signalsByAge = [
  { age: "3-4 años", concern: "Simplifica palabras de forma constante («tobota», «peo» por perro)." },
  { age: "4-5 años", concern: "Asimilaciones u omisiones que extraños no entienden la mitad del tiempo." },
  { age: "5 años", concern: "Procesos fonológicos que sus pares ya superaron persisten meses." },
  { age: "6 años", concern: "Dificultades al aprender a leer y escribir por confusión de sonidos." },
  { age: "7+ años", concern: "Evita leer en voz alta o se avergüenza de cómo suena al hablar." },
];

const benefits = [
  { icon: "👂", title: "Discriminación auditiva", description: "El niño aprende a oír diferencias entre sonidos antes de producirlos." },
  { icon: "🔀", title: "Pares mínimos", description: "Contrastamos palabras clave (casa/tasa) con material visual y lúdico." },
  { icon: "🧠", title: "Reorganización mental", description: "Trabajamos cómo el cerebro ordena los fonemas dentro de las palabras." },
  { icon: "📚", title: "Puente a la lectura", description: "Mejorar la fonología facilita la conciencia fonológica escolar." },
];

const faqs = [
  { q: "¿Trastorno fonológico y dislalia son lo mismo?", a: "No siempre. En dislalia el niño no logra articular un sonido; en trastorno fonológico puede articularlo aislado pero lo «desordena» al hablar. La evaluación diferencia ambos." },
  { q: "¿Qué es la conciencia fonológica?", a: "Es la capacidad de manipular sonidos: rimar, segmentar sílabas, identificar el sonido inicial. Es clave en terapia fonológica y en aprendizaje lector." },
  { q: "¿Se usa TEPROSIF-R?", a: "Sí, según edad y motivo de consulta podemos aplicar TEPROSIF-R u otras pruebas para perfilar el trastorno y documentar avances." },
  { q: "¿Puede estar ligado al TEL?", a: "Sí. A veces el trastorno fonológico forma parte de un TEL mixto o expresivo. Por eso evaluamos lenguaje global, no solo sonidos." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Tratamiento de trastorno fonológico infantil",
  description: "Terapia fonoaudiológica para trastornos fonológicos y conciencia fonológica en Chillán.",
  provider: { "@type": "Person", name: "Katia Domínguez", jobTitle: "Fonoaudióloga" },
  areaServed: { "@type": "City", name: "Chillán" },
  serviceType: "Terapia fonológica infantil",
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

export default function TrastornoFonologicoPage() {
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
      <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Tratamientos", href: "/fonoaudiologia-infantil-chillan" },
                { label: "Trastorno fonológico" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              Fonología y habla inteligible
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Tratamiento del trastorno fonológico en Chillán
            </h1>
            <p
              data-speakable
              className="mb-6 text-xl leading-relaxed text-gray-600"
            >
              En el trastorno fonológico el niño puede producir sonidos aislados,
              pero su cerebro los organiza mal al armar palabras: omite, cambia o
              simplifica de forma sistemática. En Chillán trabajamos conciencia
              fonológica, pares mínimos y automatización en conversación real.
            </p>
            <ul className="mb-8 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Evaluación fonológica</strong> con pruebas clínicas cuando corresponde</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Terapia visual y auditiva</strong> con rimas, segmentación y juegos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Vínculo con lectura</strong> para prevenir dificultades escolares</span>
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
              Los trastornos de los sonidos del habla requieren intervención
              oportuna para mejorar la inteligibilidad y el aprendizaje lector,
              según orientaciones de la{" "}
              <a
                href="https://www.asha.org/public/speech/disorders/speech-sound-disorders/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-orange-600 underline hover:text-orange-700"
              >
                ASHA
              </a>
              .
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
                  className="flex items-center gap-4 rounded-xl border border-orange-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-center">
                    <span className="text-sm font-bold text-orange-700">{s.age}</span>
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

        <section className="bg-orange-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Qué abordamos en terapia?
            </h2>
            <p className="mb-8 text-center text-gray-600">
              Diferenciamos{" "}
              <Link href="/tratamientos/dislalia-infantil-chillan" className="font-semibold text-orange-600 underline">dislalia</Link>{" "}
              de patrón fonológico. Consulta el{" "}
              <Link href="/glosario/trastorno-fonologico" className="font-semibold text-orange-600 underline">glosario</Link>,{" "}
              <Link href="/chillan/trastorno-fonologico" className="font-semibold text-orange-600 underline">trastorno fonológico en Chillán</Link>{" "}
              y la{" "}
              <Link href="/servicios/conciencia-fonologica-chillan" className="font-semibold text-orange-600 underline">conciencia fonológica</Link>.{" "}
              La{" "}
              <Link href="/evaluacion-fonoaudiologica-infantil-chillan" className="font-semibold text-orange-600 underline">evaluación</Link>{" "}
              orienta si hay un{" "}
              <Link href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan" className="font-semibold text-orange-600 underline">TEL</Link> asociado.
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
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-2xl">
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

        <section className="bg-orange-50 px-4 py-16 sm:px-6 lg:px-8">
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
                    <span className="flex-shrink-0 text-orange-500 transition-transform group-open:rotate-180">
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
              <Link href="/servicios/conciencia-fonologica-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-orange-300 hover:bg-orange-50">
                <span className="text-2xl">🔤</span>
                <p className="mt-2 font-medium text-gray-900">Conciencia fonológica</p>
              </Link>
              <Link href="/evaluacion-fonoaudiologica-infantil-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-orange-300 hover:bg-orange-50">
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">Evaluación inicial</p>
              </Link>
              <Link href="/glosario/trastorno-fonologico" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-orange-300 hover:bg-orange-50">
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">Glosario</p>
              </Link>
              <Link href="/sintomas/nino-pronuncia-mal-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-orange-300 hover:bg-orange-50">
                <span className="text-2xl">🗣️</span>
                <p className="mt-2 font-medium text-gray-900">Pronuncia mal</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Su habla suena muy simplificada?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Coordinemos una evaluación fonológica presencial en Chillán.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar por WhatsApp</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
