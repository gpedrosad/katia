import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { BUSINESS_HOURS } from "@/lib/site";

const faqItems = [
  {
    question: "¿Cómo agendo una hora con fonoaudiólogo infantil en Chillán?",
    answer:
      "Escríbeme por WhatsApp con la edad de tu hijo y el motivo de consulta. Te propongo horarios compatibles con la jornada escolar. La primera cita suele ser la evaluación diagnóstica.",
  },
  {
    question: "¿Qué incluye la primera hora de fonoaudiología infantil?",
    answer:
      "La primera cita es una evaluación: entrevista contigo, observación, pruebas adaptadas a la edad y una devolución preliminar. Suele durar entre 60 y 90 minutos. Después se elabora un informe fonoaudiológico con resultados y recomendaciones.",
  },
  {
    question: "¿Qué debo llevar a la primera consulta?",
    answer:
      "Informes escolares o pediátricos previos, una lista de palabras que usa tu hijo y, si aplica, la solicitud del colegio para evaluación PIE o escuela de lenguaje.",
  },
  {
    question: "¿Atienden familias de otras comunas de Ñuble?",
    answer:
      "Sí. La atención es presencial en Chillán. Llegan familias de San Carlos, Bulnes, Coihueco y comunas cercanas que prefieren consulta local.",
  },
  {
    question: "¿En qué horario puedo escribir para agendar?",
    answer: `La atención es ${BUSINESS_HOURS.daysLabel}, de ${BUSINESS_HOURS.opens} a ${BUSINESS_HOURS.closes}. Escríbeme por WhatsApp y te respondo en ese horario.`,
  },
];

export const metadata = buildPageMetadata({
  path: "/agendar-hora-fonoaudiologo-infantil-chillan",
  title: "Agendar Hora Fonoaudiólogo Infantil en Chillán",
  description:
    "Agendar hora fonoaudióloga infantil en Chillán por WhatsApp. La primera cita es evaluación (60-90 min), con informe y plan. Lun–vie 10:00–18:00.",
  keywords: [
    "agendar hora fonoaudiólogo infantil chillán",
    "agendar hora fonoaudióloga infantil",
    "hora fonoaudiología infantil Chillán",
    "primera evaluación fonoaudiológica",
  ],
});

export default function AgendarHoraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Agendar hora fonoaudiólogo infantil en Chillán",
    description:
      "Cómo agendar hora de fonoaudiología infantil en Chillán. La primera cita es una evaluación.",
    dateModified: "2026-10-15",
    mainEntity: {
      "@type": "MedicalOrganization",
      name: "Katia Domínguez",
      jobTitle: "Fonoaudióloga",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Reservaciones y Horas Médicas",
        areaServed: "Chillán",
        availableLanguage: "Spanish",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: BUSINESS_HOURS.opens,
          closes: BUSINESS_HOURS.closes,
        },
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 text-center">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Agendar Hora Fonoaudióloga Infantil" },
          ]}
        />

        <article className="prose prose-rose mx-auto max-w-none lg:prose-lg">
          <h1 className="text-4xl font-extrabold text-rose-950">
            Agendar hora fonoaudiólogo infantil en Chillán
          </h1>
          <div className="not-prose mx-auto my-6 max-w-2xl rounded-2xl border-2 border-rose-200 bg-rose-50 p-5 text-left">
            <p className="text-lg font-semibold text-gray-900">
              <strong>Respuesta rápida:</strong> Para agendar hora con
              fonoaudióloga infantil en Chillán, escríbeme por WhatsApp con la
              edad de tu hijo y el motivo. La primera cita es una evaluación:
              entrevista contigo, observación, pruebas adaptadas a la edad y
              una devolución preliminar. Suele durar entre 60 y 90 minutos y
              después se elabora un informe.
            </p>
            <p className="mt-3 text-sm text-rose-800">
              <Link
                href="/recursos/primera-evaluacion-fonoaudiologica-infantil"
                className="font-semibold underline"
              >
                Qué esperar en la primera evaluación
              </Link>
              {" · "}
              <Link
                href="/servicios/evaluacion-fonoaudiologica"
                className="font-semibold underline"
              >
                Evaluación fonoaudiológica
              </Link>
            </p>
          </div>
          <p className="lead font-medium text-gray-700" data-speakable>
            Agenda tu evaluación presencial por WhatsApp. Atiendo en Chillán a
            familias de Ñuble que buscan orientación por lenguaje, habla,
            pronunciación o informe fonoaudiológico infantil. Horario:{" "}
            {BUSINESS_HOURS.daysLabel}, {BUSINESS_HOURS.opens} a{" "}
            {BUSINESS_HOURS.closes}.
          </p>

          <div className="bg-rose-50 p-8 rounded-2xl my-10 border border-rose-100 shadow-sm max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mt-0 text-rose-900">
              Pasos para agendar tu hora
            </h2>
            <ul className="text-left text-rose-800 font-medium">
              <li>1. Escríbeme con la edad de tu hijo o hija.</li>
              <li>
                2. Cuéntame el motivo (&quot;
                <Link href="/sintomas/hijo-no-arma-frases-chillan">
                  mi hijo de 2 años no forma frases
                </Link>
                &quot;, &quot;
                <Link href="/sintomas/nino-pronuncia-mal-chillan">
                  no se le entiende al hablar
                </Link>
                &quot;, &quot;pide evaluación para el PIE del colegio&quot;,
                etc.).
              </li>
              <li>
                3. Te propongo horarios compatibles con la jornada escolar.
              </li>
            </ul>

            <div className="mt-10 mb-4">
              <WhatsAppCTA
                message="Hola, quisiera agendar una hora de fonoaudiología infantil en Chillán"
                className="text-xl px-10 py-6"
              >
                Chatear y agendar hora
              </WhatsAppCTA>
            </div>
            <p className="text-sm text-rose-600 mt-2">
              Respuestas {BUSINESS_HOURS.daysLabel}, {BUSINESS_HOURS.opens} a{" "}
              {BUSINESS_HOURS.closes}.
            </p>
          </div>

          <section className="text-left mt-16 border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900">
              Qué ocurre en la primera cita
            </h2>
            <p>
              Toda intervención parte con una{" "}
              <Link href="/servicios/evaluacion-fonoaudiologica">
                evaluación fonoaudiológica
              </Link>
              . En la{" "}
              <Link href="/recursos/primera-evaluacion-fonoaudiologica-infantil">
                primera evaluación
              </Link>{" "}
              hay entrevista con la familia, observación, pruebas adaptadas a la
              edad y una devolución preliminar. Si tú o el profesor sospechan
              TEL, disfasia o{" "}
              <Link href="/tratamientos/retraso-del-lenguaje-chillan">
                retraso en la comprensión
              </Link>
              , se preparan pruebas aplicables en la consulta presencial. También
              puedes revisar los{" "}
              <Link
                href="/recursos/hitos-del-lenguaje-por-edad"
                className="font-medium text-rose-600 underline"
              >
                hitos del lenguaje por edad
              </Link>{" "}
              para orientarte.
            </p>
          </section>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 text-left rounded-2xl border border-rose-100 bg-rose-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
