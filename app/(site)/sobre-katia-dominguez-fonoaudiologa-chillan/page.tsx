import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { GoogleReviewsSection } from "@/app/_components/GoogleReviewsSection";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE_E164,
  SITE_URL,
  whatsappUrl,
} from "@/lib/site";

const PAGE_PATH = "/sobre-katia-dominguez-fonoaudiologa-chillan";
const WHATSAPP_HREF = whatsappUrl(
  "Hola, quiero agendar una evaluación con Katia Domínguez"
);

const areas = [
  {
    title: "Retraso del lenguaje",
    href: "/tratamientos/retraso-del-lenguaje-chillan",
    description: "Comprensión y expresión por debajo de lo esperado para la edad.",
  },
  {
    title: "Retraso del habla",
    href: "/tratamientos/retraso-del-habla-chillan",
    description: "Pronunciación y articulación que dificultan entender al niño.",
  },
  {
    title: "TEL / TDL",
    href: "/tratamientos/tel-trastorno-especifico-lenguaje-chillan",
    description: "Trastorno del desarrollo del lenguaje con seguimiento prolongado.",
  },
  {
    title: "Dislalia y trastorno fonológico",
    href: "/servicios/trastornos-del-habla",
    description: "Errores de sonidos, fonología y patrones de pronunciación.",
  },
  {
    title: "Lectoescritura",
    href: "/servicios/dificultades-lectoescritura",
    description: "Lectura, escritura y conciencia fonológica en etapa escolar.",
  },
  {
    title: "Comunicación en TEA",
    href: "/servicios/terapia-tea-comunicacion-chillan",
    description: "Apoyo comunicativo para niños en el espectro autista.",
  },
];

const faqItems = [
  {
    question: "¿Katia Domínguez atiende niños en Chillán?",
    answer:
      "Sí. La atención es presencial en Chillán, Región de Ñuble, para niños con dificultades de lenguaje, habla y comunicación. También atiendo familias de comunas cercanas que prefieren consulta local.",
  },
  {
    question: "¿Qué problemas evalúa una fonoaudióloga infantil?",
    answer:
      "Evalúo retraso del lenguaje y del habla, TEL/TDL, dislalia, trastorno fonológico, dificultades de lectoescritura y comunicación en TEA, entre otros. La primera consulta suele ser una evaluación fonoaudiológica completa.",
  },
  {
    question: "¿Se puede pedir informe para el colegio?",
    answer:
      "Sí. Cuando corresponde clínicamente, entrego informe fonoaudiológico con resultados, conclusiones y recomendaciones útiles para el colegio, PIE o derivaciones.",
  },
  {
    question: "¿Cómo agendo una hora?",
    answer:
      "Escribe por WhatsApp indicando la edad del niño y el motivo de consulta. Te propongo horarios disponibles y coordinamos la primera evaluación presencial en Chillán.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}${PAGE_PATH}#person`,
  name: "Katia Domínguez",
  jobTitle: "Fonoaudióloga infantil",
  description:
    "Fonoaudióloga infantil en Chillán con más de 20 años de experiencia en lenguaje, habla y lectoescritura.",
  url: `${SITE_URL}${PAGE_PATH}`,
  worksFor: {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}${PAGE_PATH}#business`,
  },
  areaServed: {
    "@type": "City",
    name: "Chillán",
  },
  knowsAbout: [
    "Fonoaudiología infantil",
    "Trastorno del desarrollo del lenguaje",
    "Dislalia",
    "Lectoescritura",
    "Comunicación en TEA",
  ],
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}${PAGE_PATH}#business`,
  name: BUSINESS_NAME,
  description:
    "Atención fonoaudiológica infantil presencial en Chillán: evaluación, terapia e informes para familia y colegio.",
  url: `${SITE_URL}${PAGE_PATH}`,
  telephone: BUSINESS_PHONE_E164,
  areaServed: "Chillán, Región de Ñuble, Chile",
  medicalSpecialty: "SpeechTherapy",
  employee: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
};

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Katia Domínguez | Fonoaudióloga Infantil en Chillán",
  description:
    "Conoce a Katia Domínguez, fonoaudióloga infantil en Chillán con más de 20 años de experiencia en lenguaje, habla y lectoescritura.",
  keywords: [
    "Katia Domínguez",
    "fonoaudióloga Chillán",
    "fonoaudióloga infantil Chillán",
    "fonoaudióloga niños Chillán",
  ],
});

export default function SobreKatiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Sobre Katia Domínguez" },
              ]}
            />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                  Profesional · Chillán
                </span>
                <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  Katia Domínguez, fonoaudióloga infantil en Chillán
                </h1>
                <p className="mb-6 text-xl text-gray-600" data-speakable>
                  Más de 20 años de experiencia acompañando a niños y familias en
                  evaluación y tratamiento de lenguaje, habla, TEL, TEA y
                  lectoescritura.
                </p>
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>Atención presencial en Chillán</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      Experiencia clínica con infancia y etapa escolar
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      Informe y plan de tratamiento cuando corresponde
                    </span>
                  </li>
                </ul>
                <WhatsAppCTA href={WHATSAPP_HREF}>
                  Agendar evaluación por WhatsApp
                </WhatsAppCTA>
                <p className="mt-4 text-sm text-gray-500">
                  También puedes{" "}
                  <Link
                    href="/agendar-hora-fonoaudiologo-infantil-chillan"
                    className="font-medium text-rose-600 hover:underline"
                  >
                    ver cómo agendar una hora
                  </Link>{" "}
                  o conocer el{" "}
                  <Link
                    href="/fonoaudiologa-ninos-chillan"
                    className="font-medium text-rose-600 hover:underline"
                  >
                    enfoque de fonoaudiología infantil
                  </Link>
                  .
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-100 shadow-2xl">
                  <Image
                    src="/KatiaDominguezFonoaudiologa.png"
                    alt="Katia Domínguez, fonoaudióloga infantil en Chillán"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Mi enfoque de trabajo
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Priorizo una{" "}
                <strong>evaluación clara antes de intervenir</strong>: entender
                qué está pasando con el lenguaje o el habla del niño evita
                tratamientos genéricos o prematuros.
              </p>
              <p>
                Defino <strong>objetivos concretos y medibles</strong> con la
                familia, y trabajo de forma coordinada con el{" "}
                <strong>hogar y el colegio</strong> cuando hace falta.
              </p>
              <p>
                Explico los resultados en{" "}
                <strong>lenguaje simple</strong>, sin tecnicismos innecesarios,
                para que puedas decidir con tranquilidad el siguiente paso.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
              Áreas en las que acompaño
            </h2>
            <p className="mb-10 text-center text-lg text-gray-600">
              Cada área tiene una página con más detalle sobre evaluación y
              tratamiento en Chillán.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition-shadow hover:border-rose-200 hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-rose-900">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </Link>
              ))}
            </div>
            <p className="mt-10 text-center text-gray-600">
              La{" "}
              <Link
                href="/servicios/terapia-lenguaje-infantil"
                className="font-semibold text-rose-600 hover:underline"
              >
                terapia de lenguaje infantil
              </Link>{" "}
              y la{" "}
              <Link
                href="/servicios/evaluacion-fonoaudiologica"
                className="font-semibold text-rose-600 hover:underline"
              >
                evaluación fonoaudiológica
              </Link>{" "}
              son el punto de partida en la mayoría de los casos.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Formación y experiencia clínica
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-rose-600">•</span>
                <span>
                  <strong>Más de 20 años de experiencia</strong> en fonoaudiología
                  infantil en Chillán y Ñuble.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-rose-600">•</span>
                <span>
                  Experiencia con niños en{" "}
                  <strong>edad preescolar y escolar</strong>, desde primeras
                  palabras hasta apoyo en lectoescritura.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-rose-600">•</span>
                <span>
                  Trayectoria en <strong>evaluación, terapia y coordinación</strong>{" "}
                  con familia y colegio, incluyendo informes cuando corresponde.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Cómo trabajo la primera consulta
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Entrevista inicial
                </h3>
                <p className="text-gray-600">
                  Conversamos sobre el desarrollo del niño, antecedentes y
                  motivo de consulta.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Observación y evaluación
                </h3>
                <p className="text-gray-600">
                  Aplico pruebas y observación clínica según edad y motivo.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Devolución preliminar
                </h3>
                <p className="text-gray-600">
                  Te explico hallazgos iniciales y qué significan para tu hijo.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Informe y pasos siguientes
                </h3>
                <p className="text-gray-600">
                  Si corresponde, informe escrito y propuesta de tratamiento o
                  seguimiento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              ¿Cuándo conviene consultar?
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-rose-600">→</span>
                <span>Habla poco para su edad</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-600">→</span>
                <span>Cuesta entenderle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-600">→</span>
                <span>No sigue instrucciones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-600">→</span>
                <span>Dificultad para armar frases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-600">→</span>
                <span>El colegio sugiere evaluación</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <GoogleReviewsSection
              limit={3}
              heading="Reseñas de familias en Google"
              subheading="Valoración verificada en Google Business Profile"
              className=""
            />
          </div>
        </section>

        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GeoFAQ
              items={faqItems}
              heading="Preguntas frecuentes sobre la profesional"
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            />
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¿Quieres conocerme en consulta?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Agenda una evaluación presencial en Chillán. Te respondo por
              WhatsApp en horario hábil.
            </p>
            <WhatsAppCTA href={WHATSAPP_HREF}>
              Agendar evaluación por WhatsApp
            </WhatsAppCTA>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_HREF} />
    </>
  );
}
