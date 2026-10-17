import { Portrait } from "@/app/_components/Portrait";
import Link from "next/link";
import { SITE_URL, whatsappUrl } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { StickyWhatsApp } from "../../_components/StickyWhatsApp";

const PAGE_PATH = "/servicios/trastornos-del-habla";
const WHATSAPP_HREF = whatsappUrl("Hola, quiero consultar por trastornos del habla");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Trastornos del habla infantil | Dislalia y tartamudez",
  description:
    "Dislalia, trastorno fonológico, apraxia, tartamudez y disartria: qué distingue a cada trastorno del habla infantil y dónde leerlo.",
  keywords: [
    "trastornos del habla infantil",
    "trastornos del habla",
    "dislalia",
    "apraxia del habla",
    "tartamudez infantil",
    "disartria",
  ],
});

const disorders = [
  {
    name: "Dislalia",
    description:
      "Dificultad para pronunciar ciertos sonidos. El niño omite, sustituye o distorsiona.",
    examples: ["Dice «tasa» en vez de «casa»", "Le cuesta la erre", "Cambia un sonido y el resto sale"],
    links: [
      { href: "/dislalia", label: "Guías de dislalia" },
      { href: "/tratamientos/dislalia-infantil-chillan", label: "Tratamiento en Chillán" },
      { href: "/glosario/dislalia", label: "Definición" },
    ],
  },
  {
    name: "Trastorno fonológico",
    description:
      "Patrones de error en varios sonidos, no uno solo. Afecta lo que se entiende.",
    examples: ["Simplifica palabras", "Se come sílabas", "Varias sustituciones a la vez"],
    links: [
      { href: "/tratamientos/trastorno-fonologico-chillan", label: "Tratamiento en Chillán" },
      { href: "/glosario/trastorno-fonologico", label: "Definición" },
      { href: "/comparaciones/dislalia-vs-trastorno-fonologico", label: "Dislalia vs fonológico" },
    ],
  },
  {
    name: "Apraxia del habla",
    description:
      "Dificultad para planificar los movimientos del habla. Los errores suelen ser inconsistentes.",
    examples: ["A veces acierta y a veces no", "Esfuerzo visible al hablar", "Mejor imitación que habla espontánea"],
    links: [
      { href: "/tratamientos/apraxia-del-habla-infantil-chillan", label: "Tratamiento en Chillán" },
      { href: "/glosario/apraxia-del-habla", label: "Definición" },
      { href: "/chillan/apraxia-del-habla", label: "Apraxia en Chillán" },
    ],
  },
  {
    name: "Tartamudez (disfemia)",
    description:
      "La fluidez se corta: repeticiones, prolongaciones o bloqueos. No es lo mismo que pronunciar mal un sonido.",
    examples: ["Repite la palabra", "Se traba en un sonido", "Evita hablar en el jardín"],
    links: [
      { href: "/tartamudez", label: "Guías de tartamudez" },
      { href: "/sintomas/nino-tartamudea-chillan", label: "Si tartamudea en Chillán" },
      { href: "/glosario/disfemia", label: "Definición de disfemia" },
    ],
  },
  {
    name: "Disartria",
    description:
      "El habla se vuelve poco clara por la fuerza o el control de los músculos de la boca.",
    examples: ["Habla imprecisa o lenta", "Poco volumen", "Movimientos de boca limitados"],
    links: [
      { href: "/glosario/disartria", label: "Definición de disartria" },
      { href: "/glosario/praxias-orofaciales", label: "Praxias orofaciales" },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Trastornos del habla infantil",
  description:
    "Mapa de trastornos del habla infantil: dislalia, trastorno fonológico, apraxia, tartamudez y disartria.",
  provider: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  areaServed: {
    "@type": "City",
    name: "Chillán",
  },
  serviceType: "Tratamiento de trastornos del habla",
};

const faqs = [
  {
    question: "¿Qué trastornos del habla infantil ordena esta página?",
    answer:
      "Dislalia, trastorno fonológico, apraxia del habla, tartamudez (disfemia) y disartria. Cada uno tiene su guía o su página de tratamiento. La atención general de fonoaudiología infantil en Chillán está en otra página.",
  },
  {
    question: "¿Qué es la dislalia y cómo se trata?",
    answer:
      "La dislalia es la dificultad para pronunciar ciertos sonidos correctamente. Se trata con ejercicios específicos de articulación, praxias orofaciales y práctica sistemática. La mayoría de los niños mejoran significativamente con terapia.",
  },
  {
    question: "¿A qué edad un niño debe pronunciar bien todos los sonidos?",
    answer:
      "A los 4 años, la mayoría de los sonidos deben estar adquiridos. Los sonidos más difíciles como la erre y los grupos consonánticos pueden tardar hasta los 6 años. Si a los 5-6 años persisten errores, es recomendable consultar.",
  },
  {
    question: "¿Cuánto tiempo toma corregir un problema de pronunciación?",
    answer:
      "Depende del tipo y cantidad de sonidos afectados. Problemas simples (1-2 sonidos) pueden corregirse en 2-3 meses. Trastornos fonológicos más complejos requieren 6-12 meses de tratamiento.",
  },
  {
    question: "¿Mi hijo superará esto solo con el tiempo?",
    answer:
      "Algunos errores de pronunciación se corrigen solos, pero muchos persisten si no se tratan. Mientras más tiempo pase, más difícil es cambiar hábitos de articulación. Es mejor consultar y descartar problemas.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function TrastornosHablaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "/servicios" },
                { label: "Trastornos del habla" },
              ]}
            />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                  🗣️ Habla infantil
                </span>
                <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  Trastornos del habla infantil
                </h1>
                <p className="mb-6 text-xl text-gray-600">
                  Dislalia, trastorno fonológico, apraxia del habla, tartamudez
                  y disartria. Esta página los ordena y te lleva a la guía o al
                  tratamiento de cada uno.
                </p>
                <p className="mb-6 text-gray-700">
                  Si buscas fonoaudióloga en Chillán, la página es{" "}
                  <Link
                    href="/fonoaudiologa-ninos-chillan"
                    className="font-semibold text-rose-700 underline"
                  >
                    fonoaudiología infantil en Chillán
                  </Link>
                  . Si llegaste por «logopeda» o «logopedia», en Chile el nombre
                  es fonoaudiólogo: está explicado en{" "}
                  <Link
                    href="/glosario/logopeda"
                    className="font-semibold text-rose-700 underline"
                  >
                    qué es un logopeda
                  </Link>
                  .
                </p>
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Postítulo en trastornos fonológicos</strong> —
                      especialización específica
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Ejercicios personalizados</strong> según los
                      sonidos afectados
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Material para practicar en casa</strong> y
                      acelerar el progreso
                    </span>
                  </li>
                </ul>
                <WhatsAppCTA href={WHATSAPP_HREF}>
                  Agendar evaluación por WhatsApp
                </WhatsAppCTA>
                <p className="mt-4 text-sm text-gray-500">
                  Respondo en menos de 24 horas • Atención presencial en Chillán
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-100 shadow-2xl">
                  <Portrait
                    alt="Retrato de Katia Domínguez, fonoaudióloga especialista en trastornos del habla en Chillán"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Disorders */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
              Tipos de trastornos del habla infantil
            </h2>
            <p className="mb-10 text-center text-lg text-gray-600">
              Cada uno tiene su página. Elige el que se parece a lo que oyes.
            </p>
            <div className="space-y-6">
              {disorders.map((disorder) => (
                <div
                  key={disorder.name}
                  className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {disorder.name}
                  </h3>
                  <p className="mb-4 text-gray-600">{disorder.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {disorder.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full bg-rose-50 px-3 py-1 text-sm text-rose-700"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2">
                    {disorder.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm font-semibold text-rose-700 underline"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <WhatsAppCTA href={WHATSAPP_HREF}>
                Consultar mi caso por WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              ¿Cómo trabajamos los trastornos del habla?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-700">
                  1
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">Evaluación</h3>
                <p className="text-sm text-gray-600">
                  Identificamos qué sonidos están afectados y por qué
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-700">
                  2
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Praxias orofaciales
                </h3>
                <p className="text-sm text-gray-600">
                  Ejercicios para fortalecer y coordinar los músculos del habla
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-700">
                  3
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Articulación
                </h3>
                <p className="text-sm text-gray-600">
                  Enseñamos la posición correcta para producir cada sonido
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-700">
                  4
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Generalización
                </h3>
                <p className="text-sm text-gray-600">
                  Practicamos en palabras, oraciones y habla espontánea
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Preguntas frecuentes sobre trastornos del habla
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Guías y páginas de cada trastorno
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/dislalia"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
              >
                <span className="text-2xl">🔤</span>
                <p className="mt-2 font-medium text-gray-900">Guías de dislalia</p>
              </Link>
              <Link
                href="/tartamudez"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
              >
                <span className="text-2xl">💬</span>
                <p className="mt-2 font-medium text-gray-900">
                  Guías de tartamudez
                </p>
              </Link>
              <Link
                href="/servicios/terapia-del-habla-infantil-chillan"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
              >
                <span className="text-2xl">🗣️</span>
                <p className="mt-2 font-medium text-gray-900">
                  Terapia del habla en Chillán
                </p>
              </Link>
              <Link
                href="/glosario/logopeda"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
              >
                <span className="text-2xl">📖</span>
                <p className="mt-2 font-medium text-gray-900">
                  ¿Qué es un logopeda?
                </p>
              </Link>
              <Link
                href="/servicios/evaluacion-fonoaudiologica"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
              >
                <span className="text-2xl">📋</span>
                <p className="mt-2 font-medium text-gray-900">
                  Evaluación fonoaudiológica
                </p>
              </Link>
              <Link
                href="/lenguaje-infantil"
                className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
              >
                <span className="text-2xl">👶</span>
                <p className="mt-2 font-medium text-gray-900">
                  Guías de lenguaje infantil
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Tu hijo tiene problemas de pronunciación?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Con tratamiento adecuado, la mayoría de los niños mejoran
              significativamente. Agenda una evaluación.
            </p>
            <WhatsAppCTA href={WHATSAPP_HREF}>
              Agendar evaluación por WhatsApp
            </WhatsAppCTA>
            <p className="mt-6 text-gray-300">
              ✓ Respondo el mismo día • ✓ Atención presencial en Chillán
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp href={WHATSAPP_HREF} />
    </>
  );
}
