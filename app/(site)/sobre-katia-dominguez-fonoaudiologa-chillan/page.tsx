import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";
import {
  MEDICAL_BUSINESS_ID,
  buildMedicalBusinessJsonLd,
} from "@/lib/local-business-schema";

const PAGE_PATH = "/sobre-katia-dominguez-fonoaudiologa-chillan";
const WHATSAPP_LINK = whatsappUrl("Hola, quiero agendar una evaluación con Katia Domínguez");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Katia Domínguez | Fonoaudióloga Infantil Chillán (+20 años)",
  description:
    "Titulada U. de Chile. +20 años en lenguaje, habla y lectoescritura. Atención presencial en Chillán: conoce su enfoque y agenda evaluación.",
  keywords: [
    "Katia Domínguez",
    "fonoaudióloga Chillán",
    "fonoaudióloga infantil Chillán",
    "fonoaudióloga niños Chillán",
  ],
});

const areas = [
  { title: "Retraso del lenguaje", desc: "Niños que hablan poco o arman frases cortas para su edad", href: "/tratamientos/retraso-del-lenguaje-chillan" },
  { title: "Retraso del habla", desc: "Dificultad para pronunciar o hacerse entender", href: "/tratamientos/retraso-del-habla-chillan" },
  { title: "TEL / TDL", desc: "Trastorno específico del lenguaje sin causa aparente", href: "/chillan/tel" },
  { title: "Dislalia y trastorno fonológico", desc: "Sonidos alterados o patrones fonológicos", href: "/chillan/dislalia" },
  { title: "Lectoescritura", desc: "Dificultades para leer y escribir en edad escolar", href: "/chillan/lectoescritura" },
  { title: "Comunicación en TEA", desc: "Apoyo en comunicación funcional y habilidades sociales", href: "/chillan/tea-comunicacion" },
];

const approach = [
  { icon: "🔍", title: "Evaluación antes de intervenir", desc: "Cada niño necesita un punto de partida preciso para evitar tratamientos genéricos" },
  { icon: "🎯", title: "Objetivos concretos y medibles", desc: "Metas claras definidas junto a la familia, revisadas durante el proceso" },
  { icon: "🤝", title: "Trabajo con familia y colegio", desc: "La terapia funciona mejor cuando todos reman para el mismo lado" },
  { icon: "💬", title: "Lenguaje simple", desc: "No necesitas ser especialista para entender qué le pasa a tu hijo" },
];

const steps = [
  { step: 1, title: "Entrevista inicial", desc: "Conversamos sobre el motivo de consulta, la historia del niño y las expectativas de la familia" },
  { step: 2, title: "Observación y evaluación", desc: "Aplico pruebas y observación clínica según la edad y el motivo" },
  { step: 3, title: "Devolución preliminar", desc: "Comparto los hallazgos iniciales y orientaciones para la familia" },
  { step: 4, title: "Informe y pasos siguientes", desc: "Entrego un informe escrito y propongo un plan de tratamiento si corresponde" },
];

const signals = [
  "Habla poco para su edad",
  "Cuesta entenderle fuera de la familia",
  "No sigue instrucciones simples",
  "Dificultad para armar frases",
  "El colegio sugiere una evaluación",
  "Preocupación por su pronunciación o fluidez",
];

const faqs = [
  {
    q: "¿Katia Domínguez atiende niños en Chillán?",
    a: "Sí, la atención es presencial en Chillán, Región de Ñuble. Atiendo niños en edad preescolar y escolar con dificultades de lenguaje, habla y lectoescritura.",
  },
  {
    q: "¿Qué problemas evalúa una fonoaudióloga infantil?",
    a: "Evalúo retraso del lenguaje y del habla, TEL/TDL, dislalia, trastorno fonológico, dificultades de lectoescritura y problemas de comunicación asociados a TEA, entre otros.",
  },
  {
    q: "¿Se puede pedir informe para el colegio?",
    a: "Sí, cuando corresponde entrego un informe fonoaudiológico que puede utilizarse en el colegio o para solicitar adecuaciones curriculares.",
  },
  {
    q: "¿Cómo agendo una hora?",
    a: "Puedes escribirme por WhatsApp indicando la edad de tu hijo y el motivo de consulta. Respondo en horario hábil y coordinamos día y hora.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Katia Domínguez",
      jobTitle: "Fonoaudióloga Infantil",
      url: SITE_URL,
      worksFor: { "@id": MEDICAL_BUSINESS_ID },
    },
    buildMedicalBusinessJsonLd({
      description:
        "Fonoaudióloga infantil en Chillán. Evaluación y terapia de lenguaje, habla, TEL, TEA y lectoescritura.",
      pageUrl: `${SITE_URL}${PAGE_PATH}`,
    }),
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@id": SITE_URL, name: "Inicio" } },
        { "@type": "ListItem", position: 2, item: { "@id": `${SITE_URL}${PAGE_PATH}`, name: "Sobre Katia" } },
      ],
    },
  ],
};

export default function SobrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Sobre Katia" }]} />
            <span className="mb-4 mt-6 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">Fonoaudióloga infantil</span>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Katia Domínguez, fonoaudióloga infantil en Chillán</h1>
            <p className="mb-6 text-xl text-gray-600">Más de 20 años de experiencia acompañando a niños y familias en evaluación y tratamiento de lenguaje, habla, TEL, TEA y lectoescritura.</p>
            <ul className="mb-8 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span><span>Atención presencial en Chillán</span></li>
              <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span><span>Experiencia clínica con infancia y etapa escolar</span></li>
              <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span><span>Informe y plan de tratamiento cuando corresponde</span></li>
            </ul>
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar evaluación por WhatsApp</WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Mi enfoque de trabajo</h2>
            <p className="mb-4 text-gray-600">Cada niño es distinto y necesita un punto de partida preciso. Por eso priorizo una <strong>evaluación clara antes de intervenir</strong>: entender qué está pasando con el lenguaje o el habla evita tratamientos genéricos o prematuros.</p>
            <p className="mb-4 text-gray-600">Defino <strong>objetivos concretos y medibles</strong> junto a la familia. Las metas son claras, realistas y se revisan durante el proceso para asegurarnos de que el avance es real.</p>
            <p className="mb-4 text-gray-600">La terapia funciona mejor cuando <strong>todos reman para el mismo lado</strong>. Trabajo de forma coordinada con la familia y el colegio, porque el lenguaje se construye en todos los espacios donde el niño se desenvuelve.</p>
            <p className="mb-8 text-gray-600">Explico los resultados en <strong>lenguaje simple</strong>. No necesitas ser especialista para entender qué le pasa a tu hijo y qué se puede hacer.</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {approach.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 rounded-xl border bg-gray-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-2xl">{icon}</div>
                  <div><h3 className="mb-2 font-semibold">{title}</h3><p className="text-sm text-gray-600">{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Áreas en las que acompaño</h2>
            <p className="mb-10 text-center text-gray-600">Cada área tiene una página con más detalle sobre evaluación y tratamiento en Chillán.</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {areas.map(({ title, desc, href }) => (
                <Link key={title} href={href} className="rounded-xl border bg-white p-6 transition hover:border-rose-200 hover:shadow-sm">
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-600">
              La <Link href="/servicios/evaluacion-fonoaudiologica" className="font-semibold text-rose-600 underline">evaluación fonoaudiológica</Link> y la <Link href="/servicios/terapia-lenguaje-infantil" className="font-semibold text-rose-600 underline">terapia de lenguaje infantil</Link> son el punto de partida. Conoce también el enfoque de <Link href="/fonoaudiologa-ninos-chillan" className="font-semibold text-rose-600 underline">fonoaudióloga infantil en Chillán</Link>.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Formación y experiencia clínica</h2>
            <div className="mx-auto max-w-3xl space-y-4 text-gray-600">
              <p>Katia Domínguez es fonoaudióloga con más de 20 años de experiencia clínica en evaluación y tratamiento de trastornos del lenguaje, habla y lectoescritura en población infantil.</p>
              <p>Ha trabajado con niños en edad preescolar y escolar, abordando desde retrasos simples del habla hasta cuadros más complejos como TEL/TDL, trastornos fonológicos y dificultades de comunicación asociadas a TEA.</p>
              <p>Su enfoque combina evaluación rigurosa, trabajo coordinado con la familia y el colegio, y un lenguaje claro para que las familias entiendan qué le pasa a su hijo y qué se puede hacer.</p>
            </div>
          </div>
        </section>

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Cómo trabajo la primera consulta</h2>
            <p className="mb-10 text-center text-gray-600">La primera evaluación sigue un proceso estructurado para que la familia tenga claridad desde el primer momento.</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {steps.map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-600">{step}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">¿Cuándo conviene consultar?</h2>
            <p className="mb-8 text-center text-gray-600">Si notas alguna de estas señales en tu hijo, puede ser buen momento para pedir una evaluación fonoaudiológica.</p>
            <div className="mx-auto grid max-w-2xl gap-3">
              {signals.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-rose-100 bg-rose-50 p-4">
                  <span className="text-rose-500">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-600">
              Revisa <Link href="/agendar-hora-fonoaudiologo-infantil-chillan" className="font-semibold text-rose-600 underline">cómo agendar una hora</Link> o conoce más sobre <Link href="/servicios/trastornos-del-habla" className="font-semibold text-rose-600 underline">trastornos del habla</Link>.
            </p>
          </div>
        </section>

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Preguntas frecuentes</h2>
            <div className="mx-auto max-w-3xl">
              {faqs.map((f) => (
                <details key={f.q} className="group mb-4 rounded-2xl border bg-white p-6 shadow-sm">
                  <summary className="flex cursor-pointer justify-between font-semibold">{f.q}<span className="text-rose-500 group-open:rotate-180">▼</span></summary>
                  <p className="mt-4 text-gray-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
            <Link href="/fonoaudiologa-ninos-chillan" className="rounded-xl border p-4 text-center hover:border-rose-300 hover:bg-rose-50"><span className="text-2xl">👶</span><p className="mt-2 font-medium">Fonoaudióloga infantil</p></Link>
            <Link href="/servicios/evaluacion-fonoaudiologica" className="rounded-xl border p-4 text-center hover:border-rose-300 hover:bg-rose-50"><span className="text-2xl">📋</span><p className="mt-2 font-medium">Evaluación</p></Link>
            <Link href="/contacto-fonoaudiologa-chillan" className="rounded-xl border p-4 text-center hover:border-rose-300 hover:bg-rose-50"><span className="text-2xl">📞</span><p className="mt-2 font-medium">Contacto</p></Link>
          </div>
        </section>

        <section className="bg-gray-900 px-4 py-16 text-center text-white sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold">¿Quieres agendar una evaluación?</h2>
            <p className="mb-8 text-gray-200">Escríbeme por WhatsApp y coordinamos la primera consulta en Chillán.</p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Agendar evaluación por WhatsApp</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
