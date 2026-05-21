import Link from "next/link";
import { Breadcrumbs } from "../_components/Breadcrumbs";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/recursos",
  title: "Recursos para Padres | Guías de Lenguaje y Habla",
  description:
    "Recursos gratuitos para padres sobre desarrollo del lenguaje y habla en niños. Guías, señales de alerta y consejos de fonoaudióloga con +20 años de experiencia.",
  keywords: [
    "recursos fonoaudiología padres",
    "guías desarrollo lenguaje",
    "señales alerta habla niños",
    "ejercicios lenguaje casa",
    "estimular lenguaje niños",
  ],
});

const guides = [
  {
    href: "/recursos/hitos-del-lenguaje-por-edad",
    title: "Hitos del desarrollo del lenguaje",
    description:
      "¿Qué debe decir tu hijo a cada edad? Guía de las etapas del desarrollo del lenguaje de 0 a 6 años.",
    icon: "📊",
    category: "Desarrollo",
  },
  {
    href: "/recursos/senales-de-alerta-del-lenguaje-y-habla",
    title: "Señales de alerta en el habla",
    description:
      "Signos que indican que deberías consultar a un fonoaudiólogo. Cuándo preocuparse y cuándo esperar.",
    icon: "⚠️",
    category: "Alerta",
  },
  {
    href: "/recursos/estimular-lenguaje-en-casa",
    title: "Cómo estimular el lenguaje en casa",
    description:
      "Estrategias simples para ayudar a tu hijo a desarrollar su lenguaje en el día a día.",
    icon: "🏠",
    category: "Consejos",
  },
  {
    href: "/recursos/primera-evaluacion-fonoaudiologica-infantil",
    title: "Preparando la primera consulta",
    description:
      "Qué esperar de una evaluación fonoaudiológica y qué información llevar.",
    icon: "📋",
    category: "Consulta",
  },
];

const faqs = [
  {
    question: "¿A qué edad debe hablar mi hijo?",
    answer:
      "Los hitos varían según la edad. Si hay duda persistente o el colegio lo señala, conviene evaluar sin esperar.",
    guideHref: "/recursos/hitos-del-lenguaje-por-edad",
    guideLabel: "Ver guía de hitos del lenguaje por edad",
  },
  {
    question: "¿Cuándo debo preocuparme por su pronunciación o lenguaje?",
    answer:
      "Si la claridad del habla o el vocabulario van claramente por detrás de otros niños de su edad, una evaluación puede aclarar si es variación normal o requiere apoyo.",
    guideHref: "/recursos/senales-de-alerta-del-lenguaje-y-habla",
    guideLabel: "Ver señales de alerta del lenguaje y habla",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RecursosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[{ label: "Inicio", href: "/" }, { label: "Recursos" }]}
            />
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                Recursos para padres
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Información práctica para entender y apoyar el desarrollo del
                lenguaje y habla de tu hijo.
              </p>
            </div>

            {/* Guides */}
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Guías y artículos
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {guides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-rose-300 hover:shadow-md"
                  >
                    <div className="mb-3 text-3xl">{guide.icon}</div>
                    <span className="mb-2 inline-block rounded-full bg-rose-100 px-2 py-1 text-xs font-medium text-rose-700">
                      {guide.category}
                    </span>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600">{guide.description}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-rose-600">
                      Leer guía →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Preguntas frecuentes de padres
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                      <span>{faq.question}</span>
                      <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                    {faq.guideHref ? (
                      <Link
                        href={faq.guideHref}
                        className="mt-3 inline-block text-sm font-medium text-rose-600 hover:underline"
                      >
                        {faq.guideLabel} →
                      </Link>
                    ) : null}
                  </details>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Enlaces útiles
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <Link
                  href="/glosario"
                  className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
                >
                  <span className="mb-2 block text-2xl">📖</span>
                  <h3 className="font-semibold text-gray-900">Glosario</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Términos fonoaudiológicos explicados
                  </p>
                </Link>
                <Link
                  href="/servicios"
                  className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
                >
                  <span className="mb-2 block text-2xl">🏥</span>
                  <h3 className="font-semibold text-gray-900">Servicios</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Evaluación y terapias disponibles
                  </p>
                </Link>
                <Link
                  href="/recursos/primera-evaluacion-fonoaudiologica-infantil"
                  className="rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-rose-300"
                >
                  <span className="mb-2 block text-2xl">📋</span>
                  <h3 className="font-semibold text-gray-900">Primera evaluación</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Qué esperar y qué llevar
                  </p>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                ¿Tienes preguntas sobre tu hijo?
              </h2>
              <p className="mb-6 text-gray-600">
                Escríbeme por WhatsApp y te oriento sin compromiso.
              </p>
              <a
                href="https://wa.me/56995497838?text=Hola%2C%20tengo%20una%20consulta%20sobre%20mi%20hijo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition-all hover:bg-green-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
