import { Metadata } from "next";
import { Breadcrumbs } from "../_components/Breadcrumbs";
import { ServiceCard } from "../_components/ServiceCard";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { WhatsAppCTA } from "../_components/WhatsAppCTA";

const SITE_URL = "https://www.katialafono.cl";
const PAGE_PATH = "/servicios";
const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20consultar%20por%20sus%20servicios";

export const metadata: Metadata = {
  title: "Servicios de Fonoaudiología en Chillán | Katia Domínguez",
  description:
    "Servicios de fonoaudiología en Chillán: terapia de lenguaje infantil, trastornos del habla, evaluación fonoaudiológica, TEL, TEA y dificultades de lectoescritura. +20 años de experiencia.",
  keywords: [
    "servicios fonoaudiología Chillán",
    "fonoaudióloga Chillán",
    "terapia de lenguaje Chillán",
    "trastornos del habla Chillán",
    "evaluación fonoaudiológica",
    "fonoaudióloga infantil Chillán",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Servicios de Fonoaudiología en Chillán | Katia Domínguez",
    description:
      "Servicios especializados de fonoaudiología para niños y adultos en Chillán. Más de 20 años de experiencia.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "es_CL",
  },
};

const services = [
  {
    href: "/servicios/terapia-lenguaje-infantil",
    emoji: "👶",
    title: "Terapia de lenguaje infantil",
    description:
      "Evaluación y tratamiento de trastornos del lenguaje en niños de 2 a 10 años. Enfoque lúdico y personalizado.",
    keywords: ["niños 2-10 años", "lenguaje expresivo", "comprensión"],
  },
  {
    href: "/servicios/trastornos-del-habla",
    emoji: "🗣️",
    title: "Trastornos del habla",
    description:
      "Tratamiento de dislalias, trastornos fonológicos y dificultades de pronunciación en niños y adolescentes.",
    keywords: ["dislalia", "pronunciación", "articulación"],
  },
  {
    href: "/servicios/evaluacion-fonoaudiologica",
    emoji: "📋",
    title: "Evaluación fonoaudiológica",
    description:
      "Evaluación completa del lenguaje, habla y comunicación con informe detallado y plan de tratamiento.",
    keywords: ["diagnóstico", "informe", "evaluación inicial"],
  },
  {
    href: "/servicios/tel-trastorno-especifico-lenguaje",
    emoji: "💬",
    title: "TEL - Trastorno Específico del Lenguaje",
    description:
      "Diagnóstico y tratamiento especializado del Trastorno Específico del Lenguaje (TEL) en niños.",
    keywords: ["TEL", "trastorno del desarrollo", "intervención temprana"],
  },
  {
    href: "/servicios/tea-trastorno-espectro-autista",
    emoji: "🧩",
    title: "TEA y comunicación",
    description:
      "Apoyo en comunicación y lenguaje para niños con Trastorno del Espectro Autista (TEA).",
    keywords: ["TEA", "autismo", "comunicación funcional"],
  },
  {
    href: "/servicios/dificultades-lectoescritura",
    emoji: "📚",
    title: "Dificultades de lectoescritura",
    description:
      "Evaluación y tratamiento de dificultades en el aprendizaje de la lectura y escritura.",
    keywords: ["lectura", "escritura", "aprendizaje"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Katia Domínguez - Fonoaudióloga",
  description:
    "Servicios de fonoaudiología en Chillán: terapia de lenguaje, trastornos del habla, evaluaciones y más.",
  url: `${SITE_URL}${PAGE_PATH}`,
  telephone: "+56995497838",
  areaServed: {
    "@type": "City",
    name: "Chillán",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Fonoaudiología",
    itemListElement: services.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${SITE_URL}${service.href}`,
      },
    })),
  },
};

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Servicios" },
              ]}
            />
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                Servicios de fonoaudiología en Chillán
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Más de 20 años de experiencia en evaluación y tratamiento de
                trastornos del lenguaje, habla y comunicación. Atención
                presencial para niños en Chillán.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 rounded-3xl bg-rose-50 p-8 text-center sm:p-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                ¿No sabes qué servicio necesitas?
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Escríbeme por WhatsApp y cuéntame el caso de tu hijo. Te
                oriento sin compromiso.
              </p>
              <WhatsAppCTA href={WHATSAPP_LINK}>
                Consultar por WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              ¿Por qué elegir a una fonoaudióloga en Chillán?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="mb-3 text-3xl">🏠</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Atención presencial local
                </h3>
                <p className="text-sm text-gray-600">
                  Terapias en Chillán, sin necesidad de viajar a otras ciudades.
                  Horarios flexibles para tu comodidad.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="mb-3 text-3xl">🎓</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  +20 años de experiencia
                </h3>
                <p className="text-sm text-gray-600">
                  Fonoaudióloga titulada de la Universidad de Chile con
                  postítulo en trastornos fonológicos.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="mb-3 text-3xl">👶</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Especialista en niños
                </h3>
                <p className="text-sm text-gray-600">
                  Enfoque lúdico y empático. Los niños aprenden mejor cuando se
                  sienten seguros y motivados.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="mb-3 text-3xl">📋</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Evaluación con informe
                </h3>
                <p className="text-sm text-gray-600">
                  Cada evaluación incluye informe detallado con diagnóstico y
                  plan de tratamiento personalizado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
