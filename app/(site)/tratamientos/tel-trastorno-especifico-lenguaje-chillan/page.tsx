import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/tratamientos/tel-trastorno-especifico-lenguaje-chillan";
const WHATSAPP_LINK = whatsappUrl("Hola, necesito evaluación o tratamiento por TEL en Chillán");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Tratamiento TEL (Trastorno del Lenguaje) | Chillán",
  description:
    "Fonoaudiología especializada en TEL y TDL en niños en Chillán. Evaluación con pruebas estandarizadas, informes PIE y terapia de lenguaje presencial.",
  keywords: ["TEL niños Chillán", "trastorno específico del lenguaje", "TDL infantil", "fonoaudióloga PIE", "terapia lenguaje"],
});

const signalsByAge = [
  { age: "2-3 años", concern: "Pocas palabras y dificultad para unir dos términos con sentido." },
  { age: "3-4 años", concern: "Frases cortas, errores gramaticales frecuentes («yo dido»)." },
  { age: "4-5 años", concern: "No relata experiencias; vocabulario claramente por debajo de pares." },
  { age: "5-6 años", concern: "Le cuesta seguir instrucciones verbales en el jardín o colegio." },
  { age: "6+ años", concern: "Problemas persistentes en lectura inicial y redacción oral." },
];

const benefits = [
  { icon: "📊", title: "Diagnóstico diferencial", description: "Usamos baterías clínicas para distinguir TEL de otros cuadros y orientar el colegio." },
  { icon: "🧩", title: "Intervención integral", description: "Trabajamos fonología, morfosintaxis y pragmática según el perfil del niño." },
  { icon: "🏫", title: "Apoyo escolar", description: "Informes útiles para PIE y coordinación con educadoras de párvulos o básica." },
  { icon: "👨‍👩‍👧", title: "Guía familiar", description: "Estrategias concretas para reforzar el lenguaje en rutinas diarias." },
];

const faqs = [
  { q: "¿Qué es el TEL?", a: "Es un trastorno del desarrollo del lenguaje sin otra discapacidad de base. Afecta cómo el niño entiende y/o expresa el lenguaje. También se conoce como TDL (trastorno del desarrollo del lenguaje)." },
  { q: "¿El TEL se cura?", a: "No desaparece de un día para otro, pero con intervención temprana y sostenida muchos niños logran avances importantes en comunicación, comprensión y rendimiento escolar." },
  { q: "¿Qué pruebas usan en la evaluación?", a: "Según la edad y la consulta, aplicamos instrumentos como TEPROSIF-R, TECAL o STSG, además de observación clínica y entrevista con la familia." },
  { q: "¿Sirve el informe para el colegio?", a: "Sí. Elaboramos informes fonoaudiológicos que pueden aportar al proceso PIE o a las adaptaciones curriculares que requiera el niño." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Tratamiento TEL (Trastorno Específico del Lenguaje)",
  description: "Evaluación y terapia fonoaudiológica para TEL/TDL en niños en Chillán.",
  provider: { "@type": "Person", name: "Katia Domínguez", jobTitle: "Fonoaudióloga" },
  areaServed: { "@type": "City", name: "Chillán" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function TratamientoTELPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Tratamientos", href: "/fonoaudiologia-infantil-chillan" }, { label: "TEL" }]} />
            <span className="mb-4 mt-6 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">TEL / TDL</span>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Tratamiento TEL en Chillán</h1>
            <p data-speakable className="mb-6 text-xl text-gray-600">
              El Trastorno Específico del Lenguaje (TEL) afecta cómo el niño organiza oraciones, comprende instrucciones o expresa ideas, sin que exista otra discapacidad intelectual o sensorial de base. En consulta presencial diseñamos un plan basado en evidencia y en la realidad escolar chilena.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK} className="bg-purple-600 hover:bg-purple-700 ring-purple-300">Agendar evaluación TEL</WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-lg text-gray-600">
              El TEL afecta aproximadamente al <strong>7% de los niños en edad escolar</strong> (referencia{" "}
              <a href="https://www.asha.org/public/speech/disorders/language-disorders/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">ASHA</a>
              ). Una evaluación oportuna evita atribuirlo solo a «flojera» o falta de atención.
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold">Señales por edad</h2>
            <div className="space-y-4">
              {signalsByAge.map((s) => (
                <div key={s.age} className="flex gap-4 rounded-xl border border-purple-100 p-4">
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 text-sm font-bold text-purple-700">{s.age}</div>
                  <p className="text-gray-700">{s.concern}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-purple-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-gray-600">
            <p>
              Lee más en el <Link href="/glosario/tel" className="font-semibold text-purple-600 underline">glosario: qué es el TEL</Link>, revisa{" "}
              <Link href="/chillan/tel" className="font-semibold text-purple-600 underline">TEL en Chillán</Link> y conoce la{" "}
              <Link href="/servicios/terapia-de-lenguaje-infantil-chillan" className="font-semibold text-purple-600 underline">terapia de lenguaje infantil</Link>. La{" "}
              <Link href="/evaluacion-fonoaudiologica-infantil-chillan" className="font-semibold text-purple-600 underline">evaluación fonoaudiológica</Link> es el primer paso.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold">Beneficios del tratamiento</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 rounded-xl bg-gray-50 p-6">
                  <div className="text-2xl">{b.icon}</div>
                  <div><h3 className="font-semibold">{b.title}</h3><p className="text-sm text-gray-600">{b.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-purple-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold">Preguntas frecuentes</h2>
            {faqs.map((f) => (
              <details key={f.q} className="group mb-4 rounded-2xl border bg-white p-6">
                <summary className="flex cursor-pointer justify-between font-semibold">{f.q}<span className="text-purple-500 group-open:rotate-180">▼</span></summary>
                <p className="mt-4 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Recursos relacionados</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/servicios/terapia-de-lenguaje-infantil-chillan" className="rounded-xl border border-gray-200 p-4 text-center hover:border-purple-300 hover:bg-purple-50">
                <span className="text-2xl">💬</span>
                <p className="mt-2 font-medium">Terapia de lenguaje</p>
              </Link>
              <Link href="/evaluacion-fonoaudiologica-infantil-chillan" className="rounded-xl border border-gray-200 p-4 text-center hover:border-purple-300 hover:bg-purple-50">
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium">Evaluación</p>
              </Link>
              <Link href="/glosario/tel" className="rounded-xl border border-gray-200 p-4 text-center hover:border-purple-300 hover:bg-purple-50">
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium">Glosario TEL</p>
              </Link>
              <Link href="/sintomas/hijo-no-arma-frases-chillan" className="rounded-xl border border-gray-200 p-4 text-center hover:border-purple-300 hover:bg-purple-50">
                <span className="text-2xl">📝</span>
                <p className="mt-2 font-medium">No arma frases</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 px-4 py-16 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">¿Sospechas TEL en tu hijo?</h2>
          <WhatsAppCTA href={WHATSAPP_LINK} className="mt-6">Consultar por WhatsApp</WhatsAppCTA>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
