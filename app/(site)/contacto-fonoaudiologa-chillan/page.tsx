import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/contacto-fonoaudiologa-chillan";
const WHATSAPP_LINK = whatsappUrl(
  "Hola, quiero consultar horarios para una evaluación fonoaudiológica en Chillán"
);

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Contacto Fonoaudióloga en Chillán | Agenda por WhatsApp",
  description:
    "Contacto y agenda con fonoaudióloga infantil en Chillán. Horarios, ubicación, qué llevar a la consulta y cómo reservar evaluación.",
  keywords: [
    "contacto fonoaudióloga Chillán",
    "agendar fonoaudiólogo infantil Chillán",
    "hora fonoaudiólogo infantil Chillán",
    "consulta fonoaudiología Chillán",
  ],
});

const faqs = [
  {
    q: "¿Atiendes solo en Chillán?",
    a: "Sí, la atención es presencial en Chillán, Región de Ñuble. Si vives en otra comuna, escríbeme y conversamos sobre las opciones.",
  },
  {
    q: "¿Cuánto demora la respuesta por WhatsApp?",
    a: "Respondo en horario hábil, de lunes a viernes. Lo habitual es dentro del mismo día.",
  },
  {
    q: "¿Puedo agendar si el colegio pidió evaluación?",
    a: "Sí, de hecho es uno de los motivos más frecuentes. Envíame la comunicación del colegio y la consideramos en la evaluación.",
  },
  {
    q: "¿Qué pasa después de escribir?",
    a: "Coordinamos día y hora, te comparto la ubicación exacta en Chillán y te indico qué conviene traer a la consulta.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}#medicalbusiness`,
      name: "Katia Domínguez - Fonoaudióloga Infantil",
      url: SITE_URL,
      areaServed: { "@type": "City", name: "Chillán" },
      telephone: "+56995497838",
    },
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
        { "@type": "ListItem", position: 2, item: { "@id": `${SITE_URL}${PAGE_PATH}`, name: "Contacto" } },
      ],
    },
  ],
};

export default function ContactoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
            <span className="mb-4 mt-6 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">Contacto y agenda</span>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Contacto y agenda de fonoaudiología infantil en Chillán</h1>
            <p className="mb-6 text-xl text-gray-600">Reserva tu evaluación presencial en Chillán. Respuesta en horario hábil, de lunes a viernes.</p>
            <ul className="mb-8 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span><span>Atención presencial en Chillán, Región de Ñuble</span></li>
              <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span><span>Respuesta en horario hábil</span></li>
              <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">✓</span><span>Evaluación con informe y orientación clínica</span></li>
            </ul>
            <WhatsAppCTA href={WHATSAPP_LINK}>Escribir por WhatsApp ahora</WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Cómo agendar</h2>
            <p className="mb-10 text-center text-lg text-gray-600">Agendar tu evaluación es simple. Sigue estos pasos y coordinamos todo por WhatsApp.</p>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { step: 1, title: "Escribe por WhatsApp", desc: "Indica la edad de tu hijo y el motivo de consulta" },
                { step: 2, title: "Recibe horarios disponibles", desc: "Te confirmo los horarios de evaluación según disponibilidad" },
                { step: 3, title: "Confirma tu hora", desc: "Coordinamos día y lugar exacto en Chillán" },
              ].map(({ step, title, desc }) => (
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

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Horario de respuesta</h2>
            <p className="text-center text-lg text-gray-600">Todas las consultas por WhatsApp se responden en horario hábil, de lunes a viernes. La atención es presencial en Chillán, Región de Ñuble. Si escribes fuera de ese horario, tu mensaje será respondido el siguiente día hábil.</p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Qué información conviene enviar</h2>
            <p className="mb-8 text-center text-gray-600">Para agilizar la coordinación, te sugiero incluir esta información en tu primer mensaje:</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Edad del niño o niña", "Motivo principal de la consulta", "Si hay derivación del colegio o profesional", "Si ya existen informes previos"].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-rose-100 bg-rose-50 p-4">
                  <span className="text-rose-500">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Qué llevar a la primera consulta</h2>
            <p className="mb-8 text-center text-gray-600">Para que la evaluación sea lo más completa posible, conviene traer:</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Informes previos (si los hay)", "Cuaderno o comunicación del colegio si aplica", "Dudas concretas de la familia", "Cédula de identidad"].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-rose-100 bg-white p-4">
                  <span className="text-rose-500">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Ubicación y cobertura</h2>
            <p className="text-lg text-gray-600">Atención presencial en Chillán, Región de Ñuble. La ubicación exacta se comparte al coordinar la evaluación.</p>
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
            <Link href="/agendar-hora-fonoaudiologo-infantil-chillan" className="rounded-xl border p-4 text-center hover:border-rose-300 hover:bg-rose-50"><span className="text-2xl">📅</span><p className="mt-2 font-medium">Agendar hora</p></Link>
            <Link href="/servicios/evaluacion-fonoaudiologica" className="rounded-xl border p-4 text-center hover:border-rose-300 hover:bg-rose-50"><span className="text-2xl">📋</span><p className="mt-2 font-medium">Evaluación</p></Link>
            <Link href="/sobre-katia-dominguez-fonoaudiologa-chillan" className="rounded-xl border p-4 text-center hover:border-rose-300 hover:bg-rose-50"><span className="text-2xl">👩‍⚕️</span><p className="mt-2 font-medium">Sobre Katia</p></Link>
          </div>
        </section>

        <section className="bg-gray-900 px-4 py-16 text-center text-white sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold">¿Lista para agendar la evaluación?</h2>
            <p className="mb-8 text-gray-200">Escríbeme por WhatsApp con la edad de tu hijo y el motivo de consulta. Respondo en horario hábil.</p>
            <WhatsAppCTA href={WHATSAPP_LINK}>Escribir por WhatsApp ahora</WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
