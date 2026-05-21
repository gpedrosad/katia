import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE_E164,
  SERVICE_AREA_CITY,
  SERVICE_AREA_REGION,
  SITE_URL,
  whatsappUrl,
} from "@/lib/site";

const PAGE_PATH = "/contacto-fonoaudiologa-chillan";
const WHATSAPP_HREF = whatsappUrl(
  "Hola, quiero consultar horarios para una evaluación fonoaudiológica en Chillán"
);

const faqItems = [
  {
    question: "¿Atiendes solo en Chillán?",
    answer:
      "La consulta es presencial en Chillán, Región de Ñuble. Atiendo familias de la ciudad y comunas cercanas que prefieren no trasladarse a otras regiones.",
  },
  {
    question: "¿Cuánto demora la respuesta por WhatsApp?",
    answer:
      "Respondo en horario hábil, de lunes a viernes. Si escribes fuera de ese horario, te contesto al día hábil siguiente.",
  },
  {
    question: "¿Puedo agendar si el colegio pidió evaluación?",
    answer:
      "Sí. Indica en el mensaje que el colegio solicitó evaluación y, si tienes, adjunta la comunicación o informes previos para coordinar mejor la primera cita.",
  },
  {
    question: "¿Qué pasa después de escribir?",
    answer:
      "Te hago preguntas breves sobre edad y motivo, te propongo horarios disponibles y confirmamos la primera consulta, que suele ser evaluación fonoaudiológica.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE_URL}${PAGE_PATH}#business`,
  name: BUSINESS_NAME,
  description:
    "Contacto y agenda de fonoaudiología infantil presencial en Chillán, Región de Ñuble.",
  url: `${SITE_URL}${PAGE_PATH}`,
  telephone: BUSINESS_PHONE_E164,
  areaServed: {
    "@type": "City",
    name: SERVICE_AREA_CITY,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: SERVICE_AREA_REGION,
    },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  medicalSpecialty: "SpeechTherapy",
};

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

export default function ContactoFonoaudiologaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Contacto fonoaudióloga Chillán" },
              ]}
            />

            <article className="prose prose-rose lg:prose-lg max-w-none">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Contacto y agenda de fonoaudiología infantil en Chillán
              </h1>
              <p className="lead text-xl text-gray-700" data-speakable>
                Coordina tu primera consulta por WhatsApp. Te indico horarios,
                qué información enviar y qué llevar a la evaluación presencial
                en Chillán.
              </p>

              <div className="not-prose my-10 rounded-2xl border border-rose-100 bg-rose-50 p-8 text-center shadow-sm">
                <WhatsAppCTA href={WHATSAPP_HREF} className="text-xl">
                  Escribir por WhatsApp ahora
                </WhatsAppCTA>
                <p className="mt-4 text-sm text-rose-700">
                  Respuesta en horario hábil · Lunes a viernes
                </p>
              </div>

              <h2>Cómo agendar</h2>
              <ol className="font-medium text-rose-900">
                <li>Escribe por WhatsApp con un mensaje breve.</li>
                <li>Indica la edad del niño y el motivo de consulta.</li>
                <li>Recibe horarios disponibles y confirma la primera cita.</li>
              </ol>
              <p>
                Si prefieres más detalle del proceso, revisa{" "}
                <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
                  cómo agendar hora de fonoaudiólogo infantil
                </Link>
                .
              </p>

              <h2>Horario de respuesta</h2>
              <p>
                Respondo mensajes en <strong>horario hábil</strong>, de{" "}
                <strong>lunes a viernes</strong>. La atención clínica es{" "}
                <strong>presencial en Chillán</strong>; por WhatsApp solo
                coordinamos agenda e información previa.
              </p>

              <h2>Qué información conviene enviar</h2>
              <ul>
                <li>Edad del niño</li>
                <li>Motivo principal de consulta</li>
                <li>Si hay derivación o solicitud del colegio</li>
                <li>Si ya existen informes (pediatra, colegio u otros)</li>
              </ul>

              <h2>Qué llevar a la primera consulta</h2>
              <ul>
                <li>Informes previos (evaluaciones, PIE, pediatra)</li>
                <li>Cuaderno o comunicación escolar si aplica</li>
                <li>Dudas concretas anotadas por la familia</li>
              </ul>
              <p>
                La primera cita suele ser una{" "}
                <Link href="/servicios/evaluacion-fonoaudiologica">
                  evaluación fonoaudiológica
                </Link>
                ; conoce más sobre{" "}
                <Link href="/sobre-katia-dominguez-fonoaudiologa-chillan">
                  Katia Domínguez
                </Link>{" "}
                antes de agendar si lo necesitas.
              </p>

              <h2>Ubicación y cobertura</h2>
              <p>
                Atención presencial en{" "}
                <strong>
                  {SERVICE_AREA_CITY}, {SERVICE_AREA_REGION}
                </strong>
                . Coordina día y hora por WhatsApp; no publicamos dirección en
                la web.
              </p>

              <GeoFAQ
                items={faqItems}
                heading="Preguntas frecuentes sobre contacto"
                className="not-prose my-12 rounded-2xl border border-rose-100 bg-rose-50/40 p-8"
              />

              <div className="not-prose mt-12 rounded-2xl bg-gray-900 p-8 text-center">
                <p className="mb-6 text-lg text-gray-200">
                  ¿Listo para reservar? Escríbeme y coordinamos la evaluación.
                </p>
                <WhatsAppCTA href={WHATSAPP_HREF}>
                  Escribir por WhatsApp ahora
                </WhatsAppCTA>
              </div>
            </article>
          </div>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_HREF} />
    </>
  );
}
