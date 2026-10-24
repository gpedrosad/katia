import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/sintomas/nino-no-entiende-instrucciones-chillan";
const WHATSAPP_LINK = whatsappUrl("Hola, mi hijo no entiende instrucciones y me preocupa. Busco hora en Chillán");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "No entiende instrucciones: qué hacer en Chillán",
  description:
    "Si no sigue «ven» o dos pasos, puede ser comprensión del lenguaje y, a veces, TEA. No diagnostica. Qué hacer y evaluación en Chillán.",
  keywords: [
    "niño no entiende instrucciones",
    "niño no sigue instrucciones",
    "mi hijo no entiende lo que le digo",
    "niño no comprende",
    "déficit comprensión del lenguaje",
    "fonoaudióloga Chillán",
    "fonoaudiología infantil",
    "nino no entiende instrucciones chillan",
  ],
});

const signalsByAge = [
  { age: "2 años", concern: "No responde a su nombre de forma consistente o a órdenes simples («ven»)." },
  { age: "3 años", concern: "No sigue instrucciones de un paso («trae el zapato»)." },
  { age: "4 años", concern: "Falla en instrucciones de dos pasos («toma el vaso y ponlo en la mesa»)." },
  { age: "5-6 años", concern: "Respuestas fuera de contexto a preguntas del colegio." },
  { age: "7+ años", concern: "Dificultad para seguir consignas escritas u orales en clase." },
];

const actionsNow = [
  { icon: "👁️", title: "Apoya con gestos", description: "Combina palabra + señal antes de exigir solo lo verbal." },
  { icon: "🔇", title: "Reduce ruido", description: "Da instrucciones en entornos calmados, de a un paso." },
  { icon: "✅", title: "Confirma comprensión", description: "Pídele que repita con sus palabras o muestre la acción." },
  { icon: "📋", title: "Evalúa lenguaje receptivo", description: "Pruebas como TECAL ayudan a diferenciar comprensión de atención." },
];

const faqs = [
  { q: "¿Es falta de atención o de comprensión?", a: "Cuando un niño no entiende instrucciones puede ser déficit de comprensión del lenguaje, atención, o ambas. Solo una evaluación fonoaudiológica puede separarlas; a veces coexisten." },
  { q: "¿Qué hago si mi hijo no entiende lo que le digo?", a: "Combina palabra + gesto, da una instrucción a la vez y en un entorno calmado, y pídele que muestre la acción. Si a los 2-3 años no responde a órdenes simples o a los 4 falla en dos pasos, conviene evaluar lenguaje receptivo." },
  { q: "¿Puede ser TEL receptivo?", a: "Sí. El TEL puede afectar principalmente lo que el niño entiende." },
  { q: "¿Qué pasa en el colegio?", a: "Sin comprensión adecuada, falla seguir rutinas, cuentos e instrucciones de la profesora." },
  { q: "¿Mejora con terapia?", a: "Sí, con objetivos en vocabulario, morfosintaxis comprensiva y estrategias en aula y casa." },
];

const medicalWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
  name: "¿Tu hijo no entiende instrucciones? Ayuda en Chillán",
  description:
    "Si no sigue «ven» o dos pasos, puede ser comprensión del lenguaje y, a veces, TEA. No diagnostica. Qué hacer y evaluación en Chillán.",
  medicalSpecialty: "SpeechTherapy",
  about: { "@type": "MedicalCondition", name: "Déficit de comprensión del lenguaje" },
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

export default function NinoNoEntiendeInstruccionesPage() {
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
      <main className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Síntomas", href: "/fonoaudiologa-ninos-chillan" },
                { label: "No entiende instrucciones" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              Comprensión del lenguaje
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              ¿Tu hijo no entiende instrucciones? Ayuda en Chillán
            </h1>
            <div className="mb-6 rounded-2xl border-2 border-red-200 bg-red-50 p-5">
              <p className="text-lg font-semibold text-gray-900">
                <strong>Respuesta rápida:</strong> Si tu hijo no entiende
                instrucciones, puede ser comprensión del lenguaje, atención, o
                ambas. A veces también se relaciona con TEA; esta página no lo
                diagnostica. No es lo mismo «no quiere» que «no entiende». Una
                evaluación en Chillán diferencia ambos y orienta si hay
                retraso o TEL receptivo.
              </p>
            </div>
            <p
              data-speakable
              className="mb-6 text-xl leading-relaxed text-gray-600"
            >
              Cuando un niño no sigue indicaciones, a veces lo etiquetan de «desobediente» o «distraído». Otras veces hay un déficit de comprensión del lenguaje que conviene evaluar con pruebas específicas.
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
            <WhatsAppCTA href={WHATSAPP_LINK} className="bg-red-600 hover:bg-red-700 ring-red-300">
              Consultar por WhatsApp
            </WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-lg leading-relaxed text-gray-600">Los trastornos del lenguaje receptivo forman parte del espectro que afecta al <strong>7% de los escolares</strong> (referencia <strong>ASHA</strong>). (<a href="https://www.asha.org/public/speech/disorders/language-disorders/" target="_blank" rel="noopener noreferrer" className="font-medium text-red-600 underline">ASHA</a>).</p>
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
                  className="flex items-center gap-4 rounded-xl border border-red-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-center">
                    <span className="text-sm font-bold text-red-700">{s.age}</span>
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

        <section className="bg-red-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Qué puede estar pasando?
            </h2>
            <p className="mb-6 text-center text-gray-600">
              Un niño que no entiende instrucciones no siempre es «desobediente». Puede haber:
            </p>
            <ul className="mx-auto mb-8 max-w-2xl space-y-3 text-gray-700">
              <li>
                <strong>Déficit de comprensión:</strong> no alcanza a procesar
                las palabras, la gramática o instrucciones de dos pasos.
              </li>
              <li>
                <strong>Atención:</strong> escucha pero no se concentra; a veces
                coexisten comprensión y atención.
              </li>
              <li>
                <strong>TEL receptivo:</strong> el trastorno específico del
                lenguaje puede afectar sobre todo lo que el niño entiende.
              </li>
              <li>
                <strong>A veces, TEA:</strong> no seguir instrucciones puede
                relacionarse con la comprensión y, en algunos niños, con el
                autismo. No es un diagnóstico.
              </li>
            </ul>
            <p className="mb-8 text-center text-gray-600">
              Revisa{" "}
              <Link href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan">TEL</Link>
              ,{" "}
              <Link href="/glosario/tel">glosario</Link>
              ,{" "}
              <Link href="/chillan/tel">TEL en Chillán</Link>
              ,{" "}
              <Link href="/servicios/terapia-lenguaje-infantil">terapia de lenguaje</Link>
              ,{" "}
              <Link href="/recursos/estimular-lenguaje-en-casa">estimulación del lenguaje en casa</Link>
              {" "}y{" "}
              <Link href="/servicios/evaluacion-fonoaudiologica">evaluación</Link>
              . Si la duda es de autismo, sin diagnosticar desde aquí:{" "}
              <Link href="/servicios/tea-trastorno-espectro-autista">
                fonoaudióloga para TEA
              </Link>{" "}
              y{" "}
              <Link href="/chillan/tea-comunicacion">
                TEA y comunicación en Chillán
              </Link>
              .
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
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-2xl">
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

        <section className="bg-red-50 px-4 py-16 sm:px-6 lg:px-8">
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
                    <span className="flex-shrink-0 text-red-500 transition-transform group-open:rotate-180">
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
              <Link href="/tratamientos/retraso-del-lenguaje-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-red-300 hover:bg-red-50">
                <span className="text-2xl">💬</span>
                <p className="mt-2 font-medium text-gray-900">Retraso del lenguaje</p>
              </Link>
              <Link href="/servicios/evaluacion-fonoaudiologica" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-red-300 hover:bg-red-50">
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">Evaluación</p>
              </Link>
              <Link href="/glosario/tel" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-red-300 hover:bg-red-50">
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">Glosario TEL</p>
              </Link>
              <Link href="/sintomas/hijo-no-arma-frases-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-red-300 hover:bg-red-50">
                <span className="text-2xl">📝</span>
                <p className="mt-2 font-medium text-gray-900">No arma frases</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Crees que no comprende lo que le dices?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Evaluemos comprensión y comprensión en Chillán.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar por WhatsApp</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
