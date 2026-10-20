import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { Breadcrumbs } from "../_components/Breadcrumbs";
import { ServiceCard } from "../_components/ServiceCard";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { WhatsAppCTA } from "../_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";
import { buildMedicalBusinessJsonLd } from "@/lib/local-business-schema";

const faqItems = [
  {
    question: "¿Qué servicios de fonoaudiología ofrece en Chillán?",
    answer:
      "Evaluación fonoaudiológica, terapia del lenguaje, terapia del habla, TEL, apoyo en TEA, lectoescritura, informe PIE, conciencia fonológica y estimulación del lenguaje, de forma presencial en Chillán. La terapia de voz es online, para adultos, en todo Chile.",
  },
  {
    question: "¿Cómo elijo el servicio adecuado para mi hijo?",
    answer:
      "Si no estás segura, escríbenos por WhatsApp con la edad del niño y tus dudas. En la primera evaluación definimos diagnóstico y plan sin compromiso de continuar terapia.",
  },
  {
    question: "¿Por qué es importante la intervención temprana?",
    answer:
      "La OMS destaca que detectar a tiempo retrasos del desarrollo, incluido el lenguaje, mejora resultados educativos y familiares. Fuente: https://www.who.int/news-room/fact-sheets/detail/developmental-disabilities-in-children",
  },
];

const PAGE_PATH = "/servicios";
const WHATSAPP_LINK = whatsappUrl(
  "Hola, quiero consultar por sus servicios",
);
const PAGE_TITLE = "Servicios de fonoaudiología infantil en Chillán";
const PAGE_DESCRIPTION =
  "Servicios de fonoaudiología infantil en Chillán: evaluación, lenguaje, habla, TEL, TEA, lectoescritura, informe PIE y voz online.";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "servicios fonoaudiología Chillán",
    "fonoaudióloga Chillán",
    "terapia de lenguaje Chillán",
    "trastornos del habla Chillán",
    "evaluación fonoaudiológica",
    "fonoaudióloga infantil Chillán",
  ],
});

const serviceGroups = [
  {
    title: "Evaluación",
    items: [
      {
        href: "/servicios/evaluacion-fonoaudiologica",
        emoji: "📋",
        title: "Evaluación fonoaudiológica en Chillán",
        description:
          "Evaluación de unos 60 minutos del lenguaje y el habla, con informe y plan de tratamiento.",
      },
    ],
  },
  {
    title: "Terapia del lenguaje",
    items: [
      {
        href: "/servicios/terapia-lenguaje-infantil",
        emoji: "👶",
        title: "Terapia del lenguaje infantil",
        description:
          "Para niños que hablan poco, no arman frases o tienen vocabulario limitado.",
      },
      {
        href: "/tratamientos/retraso-del-lenguaje-chillan",
        emoji: "💬",
        title: "Tratamiento del retraso del lenguaje en Chillán",
        description:
          "Terapia presencial si habla poco, no forma frases o se frustra al comunicarse.",
      },
    ],
  },
  {
    title: "Terapia del habla",
    items: [
      {
        href: "/servicios/terapia-del-habla-infantil-chillan",
        emoji: "🗣️",
        title: "Terapia del habla infantil en Chillán",
        description:
          "Articulación, pronunciación y claridad. Es distinta de la terapia del lenguaje.",
      },
      {
        href: "/servicios/trastornos-del-habla",
        emoji: "🔤",
        title: "Trastornos del habla",
        description:
          "Dislalia, trastorno fonológico, apraxia, tartamudez y disartria: qué distingue a cada uno.",
      },
      {
        href: "/tratamientos/trastorno-fonologico-chillan",
        emoji: "👂",
        title: "Tratamiento del trastorno fonológico en Chillán",
        description:
          "Terapia presencial cuando no se le entiende o cambia los sonidos al hablar.",
      },
    ],
  },
  {
    title: "TEL y TEA",
    items: [
      {
        href: "/servicios/tel-trastorno-especifico-lenguaje",
        emoji: "💬",
        title: "TEL — Trastorno Específico del Lenguaje",
        description:
          "Diagnóstico y tratamiento del Trastorno Específico del Lenguaje (TEL) en niños.",
      },
      {
        href: "/servicios/tea-trastorno-espectro-autista",
        emoji: "🧩",
        title: "TEA y comunicación",
        description:
          "Apoyo en comunicación y lenguaje para niños con Trastorno del Espectro Autista (TEA).",
      },
    ],
  },
  {
    title: "Lectoescritura, informe PIE y conciencia fonológica",
    items: [
      {
        href: "/servicios/dificultades-lectoescritura",
        emoji: "📚",
        title: "Dificultades de lectoescritura",
        description:
          "Evaluación y tratamiento cuando cuesta aprender a leer y a escribir.",
      },
      {
        href: "/servicios/informe-fonoaudiologico-pie-chillan",
        emoji: "📄",
        title: "Informe fonoaudiológico para el PIE",
        description:
          "Documento de la evaluación que piden el colegio para el PIE, una escuela de lenguaje o el pediatra.",
      },
      {
        href: "/servicios/conciencia-fonologica-chillan",
        emoji: "🔤",
        title: "Conciencia fonológica en la consulta",
        description:
          "Evaluación y estimulación en la consulta: rimas, sílabas y fonemas, antes de primero básico.",
      },
    ],
  },
  {
    title: "Estimulación del lenguaje",
    items: [
      {
        href: "/servicios/estimulacion-temprana-del-lenguaje-chillan",
        emoji: "🌱",
        title: "Estimulación del lenguaje infantil",
        description:
          "Servicio profesional de 0 a 3 años, presencial en Chillán. Distinto de la guía para hacer en casa.",
      },
    ],
  },
  {
    title: "Voz online",
    items: [
      {
        href: "/voz-online/fonoaudiologa-de-voz-online",
        emoji: "🎙️",
        title: "Terapia de voz online",
        description:
          "¿Eres adulto? Terapia de voz online en todo Chile: disfonía, ronquera y voz cansada, por videollamada.",
      },
    ],
  },
];

const services = serviceGroups.flatMap((group) => group.items);

const jsonLd = {
  "@context": "https://schema.org",
  ...buildMedicalBusinessJsonLd({
    description: PAGE_DESCRIPTION,
    pageUrl: `${SITE_URL}${PAGE_PATH}`,
    extra: {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de fonoaudiología infantil en Chillán",
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
    },
  }),
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
                Servicios de fonoaudiología infantil en Chillán
              </h1>
              <p
                data-speakable
                className="mx-auto max-w-2xl text-lg text-gray-600"
              >
                Atención presencial en Chillán: evaluación, terapia del lenguaje,
                terapia del habla, TEL, TEA, lectoescritura, informe PIE,
                conciencia fonológica y estimulación del lenguaje. La terapia de
                voz es online, por videollamada, para adultos en todo Chile.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-center">
                <Link
                  href="/voz-online/fonoaudiologa-de-voz-online"
                  className="font-semibold text-sky-800 underline"
                >
                  ¿Eres adulto? Terapia de voz online en todo Chile
                </Link>
              </p>
            </div>

            <div className="space-y-12">
              {serviceGroups.map((group, index) => (
                <section key={group.title} aria-labelledby={`grupo-servicios-${index}`}>
                  <h2
                    id={`grupo-servicios-${index}`}
                    className="mb-4 text-2xl font-bold text-gray-900"
                  >
                    {group.title}
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((service) => (
                      <ServiceCard key={service.href} {...service} />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-gray-600">
              También puedes ver{" "}
              <Link
                href="/fonoaudiologa-ninos-chillan"
                className="font-medium text-rose-600 underline"
              >
                fonoaudióloga infantil en Chillán
              </Link>
              , el{" "}
              <Link href="/chillan" className="font-medium text-rose-600 underline">
                índice por patología
              </Link>{" "}
              o{" "}
              <Link
                href="/glosario"
                className="font-medium text-rose-600 underline"
              >
                glosario (dislalia, TEL…)
              </Link>
              . Si tienes dudas sobre diferencias clínicas, revisa{" "}
              <Link href="/comparaciones/dislalia-vs-trastorno-fonologico" className="font-medium text-rose-600 underline">
                dislalia vs trastorno fonológico
              </Link>
              ,{" "}
              <Link href="/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje" className="font-medium text-rose-600 underline">
                retraso del habla vs lenguaje
              </Link>{" "}
              o{" "}
              <Link href="/comparaciones/tel-vs-retraso-del-lenguaje" className="font-medium text-rose-600 underline">
                TEL vs retraso del lenguaje
              </Link>
              . Para dudas frecuentes por edad:{" "}
              <Link href="/sintomas/hijo-no-arma-frases-chillan" className="font-medium text-rose-600 underline">
                2 años no forma frases
              </Link>
              ,{" "}
              <Link href="/sintomas/hijo-habla-poco-edad-chillan" className="font-medium text-rose-600 underline">
                habla poco para su edad
              </Link>
              ,{" "}
              <Link href="/sintomas/nino-pronuncia-mal-chillan" className="font-medium text-rose-600 underline">
                no se le entiende al hablar
              </Link>
              , o consulta los{" "}
              <Link href="/recursos/hitos-del-lenguaje-por-edad" className="font-medium text-rose-600 underline">
                hitos del lenguaje por edad
              </Link>
              . Puedes{" "}
              <Link href="/agendar-hora-fonoaudiologo-infantil-chillan" className="font-medium text-rose-600 underline">
                agendar una hora
              </Link>{" "}
              en cualquier momento.
            </p>

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

            <GeoFAQ
              items={faqItems}
              className="mx-auto mt-16 max-w-3xl rounded-2xl border border-rose-100 bg-white p-8 shadow-sm"
            />
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
