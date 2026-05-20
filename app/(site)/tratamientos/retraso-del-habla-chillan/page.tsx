import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/tratamientos/retraso-del-habla-chillan";
const WHATSAPP_LINK = whatsappUrl(
  "Hola, quiero agendar por retraso del habla de mi hijo en Chillán"
);

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Terapia Retraso del Habla en Niños | Chillán",
  description:
    "Tratamiento fonoaudiológico del retraso del habla infantil en Chillán. Mejoramos articulación, claridad y confianza al hablar. Evaluación y terapia presencial.",
  keywords: [
    "retraso del habla niños",
    "terapia del habla Chillán",
    "niño no pronuncia bien",
    "fonoaudióloga infantil",
    "articulación infantil",
  ],
});

const signalsByAge = [
  { age: "2 años", concern: "Sus palabras son muy difíciles de entender, incluso para la familia." },
  { age: "3 años", concern: "Extraños entienden menos de la mitad de lo que intenta decir." },
  { age: "3-4 años", concern: "Sustituye o omite sonidos de forma constante (no solo la «r»)." },
  { age: "4-5 años", concern: "Sabe lo que quiere decir, pero le cuesta «sacar» la palabra con claridad." },
  { age: "5+ años", concern: "Se frustra al hablar porque no lo entienden en el jardín o colegio." },
];

const benefits = [
  { icon: "🎯", title: "Habla más inteligible", description: "Trabajamos sonidos, sílabas y automatización en conversación real." },
  { icon: "💪", title: "Menos frustración", description: "Cuando lo entienden, recupera confianza para participar y socializar." },
  { icon: "🪞", title: "Conciencia articulatoria", description: "Aprende dónde va la lengua y los labios con ejercicios lúdicos y visuales." },
  { icon: "🏠", title: "Práctica guiada en casa", description: "Recibes rutinas breves para reforzar entre sesiones sin saturar al niño." },
];

const faqs = [
  { q: "¿Retraso del habla y del lenguaje son lo mismo?", a: "No. El habla es la producción de sonidos; el lenguaje incluye palabras, frases y comprensión. Pueden aparecer juntos o por separado. La evaluación define el foco del tratamiento." },
  { q: "¿Es normal que no diga la «r» a los 4 años?", a: "Algunos sonidos maduran más tarde, pero si a los 4-5 años varios sonidos fallan y cuesta entenderlo, conviene evaluar. No siempre es «flojera»: puede haber un patrón fonológico." },
  { q: "¿Cuántas sesiones se necesitan?", a: "Depende de cuántos sonidos están afectados y de la práctica en casa. En la evaluación inicial estimamos frecuencia y duración según el perfil de tu hijo." },
  { q: "¿La terapia duele o es invasiva?", a: "No. Usamos juegos, soplo, espejo y repetición estructurada. El niño aprende posiciones articulatorias sin dolor ni presión excesiva." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Terapia para retraso del habla infantil",
  description: "Tratamiento fonoaudiológico de dificultades de articulación y claridad del habla en niños en Chillán.",
  provider: { "@type": "Person", name: "Katia Domínguez", jobTitle: "Fonoaudióloga" },
  areaServed: { "@type": "City", name: "Chillán" },
  serviceType: "Terapia del habla infantil",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function RetrasoHablaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Tratamientos", href: "/fonoaudiologa-ninos-chillan" }, { label: "Retraso del habla" }]} />
            <span className="mb-4 mt-6 inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">Terapia del habla</span>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Terapia para retraso del habla en Chillán</h1>
            <p data-speakable className="mb-6 text-xl text-gray-600">
              El retraso del habla se refiere a cómo el niño produce los sonidos: articulación, claridad y fluidez motora al hablar. Si comprende bien pero le cuesta hacerse entender, la terapia del habla puede ayudarle a ganar precisión y seguridad.
            </p>
            <ul className="mb-8 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span><span><strong>Evaluación de articulación</strong> y órganos fonoarticulatorios</span></li>
              <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span><span><strong>Gimnasia articulatoria</strong> y juegos de soplo</span></li>
              <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span><span><strong>Automatización</strong> del sonido en palabras y frases</span></li>
            </ul>
            <WhatsAppCTA href={WHATSAPP_LINK} className="bg-sky-600 hover:bg-sky-700 ring-sky-300">Agendar evaluación</WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-lg text-gray-600">
              Según orientaciones de la{" "}
              <a href="https://www.who.int/news-room/fact-sheets/detail/developmental-disabilities-in-children" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-600 underline">OMS</a>
              , la detección temprana de dificultades del desarrollo —incluido el habla— mejora los resultados de intervención en la infancia.
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Señales por edad</h2>
            <div className="space-y-4">
              {signalsByAge.map((s) => (
                <div key={s.age} className="flex gap-4 rounded-xl border border-sky-100 p-4 shadow-sm">
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sm font-bold text-sky-700">{s.age}</div>
                  <p className="text-gray-700">{s.concern}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sky-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-gray-600">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Enfoque clínico</h2>
            <p>
              Revisamos si se trata de{" "}
              <Link href="/tratamientos/dislalia-infantil-chillan" className="font-semibold text-sky-600 underline">dislalia</Link>,{" "}
              <Link href="/tratamientos/trastorno-fonologico-chillan" className="font-semibold text-sky-600 underline">trastorno fonológico</Link>{" "}
              o un patrón distinto. La{" "}
              <Link href="/servicios/evaluacion-fonoaudiologica" className="font-semibold text-sky-600 underline">evaluación inicial</Link>{" "}
              define el plan. Más contexto en{" "}
              <Link href="/glosario/dislalia" className="font-semibold text-sky-600 underline">qué es la dislalia</Link>{" "}
              y en{" "}
              <Link href="/fonoaudiologa-ninos-chillan" className="font-semibold text-sky-600 underline">fonoaudiología infantil en Chillán</Link>.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Beneficios del tratamiento</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 rounded-xl border bg-gray-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-2xl">{b.icon}</div>
                  <div><h3 className="mb-2 font-semibold">{b.title}</h3><p className="text-sm text-gray-600">{b.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sky-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Preguntas frecuentes</h2>
            {faqs.map((f) => (
              <details key={f.q} className="group mb-4 rounded-2xl border bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer justify-between font-semibold">{f.q}<span className="text-sky-500 group-open:rotate-180">▼</span></summary>
                <p className="mt-4 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/servicios/terapia-del-habla-infantil-chillan" className="rounded-xl border p-4 text-center hover:border-sky-300 hover:bg-sky-50"><span className="text-2xl">🗣️</span><p className="mt-2 font-medium">Terapia del habla</p></Link>
            <Link href="/servicios/evaluacion-fonoaudiologica" className="rounded-xl border p-4 text-center hover:border-sky-300 hover:bg-sky-50"><span className="text-2xl">📋</span><p className="mt-2 font-medium">Evaluación</p></Link>
            <Link href="/glosario/dislalia" className="rounded-xl border p-4 text-center hover:border-sky-300 hover:bg-sky-50"><span className="text-2xl">📖</span><p className="mt-2 font-medium">Glosario: dislalia</p></Link>
            <Link href="/sintomas/nino-pronuncia-mal-chillan" className="rounded-xl border p-4 text-center hover:border-sky-300 hover:bg-sky-50"><span className="text-2xl">🔤</span><p className="mt-2 font-medium">Pronuncia mal</p></Link>
          </div>
        </section>

        <section className="bg-gray-900 px-4 py-16 text-center text-white sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold">¿Le cuesta hacerse entender?</h2>
            <p className="mb-8 text-gray-200">Agenda una evaluación presencial en Chillán.</p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Escribir por WhatsApp</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
