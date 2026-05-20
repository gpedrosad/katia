import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/tratamientos/apraxia-del-habla-infantil-chillan";
const WHATSAPP_LINK = whatsappUrl("Hola, sospecho apraxia del habla en mi hijo. Busco evaluación en Chillán");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Apraxia del Habla Infantil | Tratamiento Chillán",
  description:
    "Diagnóstico y tratamiento de apraxia del habla infantil (CAS) en Chillán. Tu hijo sabe qué decir pero le cuesta coordinar los movimientos para hablar. Terapia presencial.",
  keywords: [
    "apraxia del habla infantil",
    "CAS niños Chillán",
    "terapia motricidad del habla",
    "fonoaudióloga Chillán",
    "niño no imita sonidos",
  ],
});

const signalsByAge = [
  { age: "2-3 años", concern: "Muy pocas palabras, pero comprende lo que se le dice." },
  { age: "3-4 años", concern: "Dice la misma palabra de formas distintas cada vez que intenta." },
  { age: "4-5 años", concern: "Le cuesta imitar sonidos o palabras aunque se lo pidan." },
  { age: "5-6 años", concern: "«Búsqueda» visible de la lengua o labios al hablar." },
  { age: "6+ años", concern: "Errores en secuencias silábicas; prosodia o ritmo del habla poco natural." },
];

const benefits = [
  { icon: "🎯", title: "Práctica motora intensiva", description: "Repeticiones variadas con retroalimentación visual, táctil y auditiva." },
  { icon: "📅", title: "Frecuencia planificada", description: "La apraxia suele requerir sesiones consistentes; acordamos ritmo realista contigo." },
  { icon: "🏠", title: "Rutinas en casa", description: "Listas de palabras funcionales para practicar en contextos cotidianos." },
  { icon: "🔍", title: "Diagnóstico diferencial", description: "Descartamos dislalia, retraso del habla o problemas neuromusculares." },
];

const faqs = [
  { q: "¿Qué es la apraxia del habla infantil?", a: "Es un trastorno neurológico de programación motora del habla: el niño sabe lo que quiere decir, pero el cerebro no coordina bien los movimientos para producir sonidos y palabras. No es falta de inteligencia ni «flojera»." },
  { q: "¿Cómo se diferencia de la dislalia?", a: "En dislalia hay errores más estables en sonidos concretos. En apraxia los intentos son inconsistentes, la imitación falla y suele haber búsqueda articulatoria. La evaluación especializada lo define." },
  { q: "¿Cuántas sesiones por semana necesita?", a: "Suele recomendarse alta frecuencia (a menudo 2-3 veces por semana al inicio) más práctica diaria breve. Ajustamos según edad, severidad y disponibilidad familiar." },
  { q: "¿Se puede mejorar con terapia?", a: "Sí, con intervención temprana, enfoque de aprendizaje motor y trabajo en equipo familia-colegio se logran avances importantes en claridad y confianza." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Tratamiento de apraxia del habla infantil",
  description: "Terapia fonoaudiológica para apraxia del habla infantil (CAS) en Chillán.",
  provider: { "@type": "Person", name: "Katia Domínguez", jobTitle: "Fonoaudióloga" },
  areaServed: { "@type": "City", name: "Chillán" },
  serviceType: "Terapia de motricidad del habla",
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

export default function ApraxiaHablaPage() {
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
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Tratamientos", href: "/fonoaudiologa-ninos-chillan" },
                { label: "Apraxia del habla" },
              ]}
            />
            <span className="mb-4 mt-6 inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Apraxia del habla infantil (CAS)
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Apraxia del habla infantil: tratamiento en Chillán
            </h1>
            <p
              data-speakable
              className="mb-6 text-xl leading-relaxed text-gray-600"
            >
              La apraxia del habla infantil es un trastorno de programación motora:
              tu hijo sabe lo que quiere decir, pero le cuesta coordinar labios,
              lengua y mandíbula para producir sonidos de forma consistente. No es
              flojera ni baja inteligencia; requiere terapia especializada.
            </p>
            <ul className="mb-8 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Evaluación diferencial</strong> frente a dislalia y retraso del habla</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Aprendizaje motor</strong> con práctica intensiva y variada</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                <span><strong>Coordinación con familia</strong> para práctica diaria breve</span>
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
              La apraxia del habla infantil (CAS) es reconocida como trastorno
              neurológico del habla; la{" "}
              <a
                href="https://www.asha.org/practice-portal/clinical-topics/childhood-apraxia-of-speech/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-600 underline hover:text-slate-700"
              >
                ASHA
              </a>{" "}
              recomienda intervención intensiva y temprana con enfoque de aprendizaje motor.
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
                  className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-center">
                    <span className="text-sm font-bold text-slate-700">{s.age}</span>
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

        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Qué abordamos en terapia?
            </h2>
            <p className="mb-8 text-center text-gray-600">
              Comparamos con{" "}
              <Link href="/tratamientos/dislalia-infantil-chillan" className="font-semibold text-slate-600 underline">dislalia</Link>{" "}
              y{" "}
              <Link href="/tratamientos/retraso-del-habla-chillan" className="font-semibold text-slate-600 underline">retraso del habla</Link>.{" "}
              Más información en el{" "}
              <Link href="/glosario/praxias-orofaciales" className="font-semibold text-slate-600 underline">glosario</Link>,{" "}
              <Link href="/chillan/apraxia-del-habla" className="font-semibold text-slate-600 underline">apraxia en Chillán</Link>{" "}
              y{" "}
              <Link href="/servicios/terapia-del-habla-infantil-chillan" className="font-semibold text-slate-600 underline">terapia del habla</Link>.{" "}
              Agenda una{" "}
              <Link href="/servicios/evaluacion-fonoaudiologica" className="font-semibold text-slate-600 underline">evaluación especializada</Link>.
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
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-2xl">
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

        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
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
                    <span className="flex-shrink-0 text-slate-500 transition-transform group-open:rotate-180">
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
              <Link href="/servicios/terapia-del-habla-infantil-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-slate-300 hover:bg-slate-50">
                <span className="text-2xl">🗣️</span>
                <p className="mt-2 font-medium text-gray-900">Terapia del habla</p>
              </Link>
              <Link href="/servicios/evaluacion-fonoaudiologica" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-slate-300 hover:bg-slate-50">
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">Evaluación</p>
              </Link>
              <Link href="/glosario/praxias-orofaciales" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-slate-300 hover:bg-slate-50">
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">Glosario</p>
              </Link>
              <Link href="/sintomas/mi-hijo-no-habla-bien-chillan" className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-slate-300 hover:bg-slate-50">
                <span className="text-2xl">👂</span>
                <p className="mt-2 font-medium text-gray-900">No habla bien</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Sospechas apraxia del habla?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Coordinemos una evaluación especializada presencial en Chillán.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar por WhatsApp</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
