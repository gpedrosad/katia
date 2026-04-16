import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fatiga Vocal: Causas y Tratamiento Online | Chile",
  description:
    "¿Se te cansa la voz al hablar mucho? Tratamiento online de fatiga vocal para profesionales. Fonoaudióloga con atención a todo Chile.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/voz-online/fatiga-vocal-tratamiento-online",
  },
};

export default function FatigaVocalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la fatiga vocal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La fatiga vocal es una sensación de cansancio, debilidad o esfuerzo al hablar, especialmente al final de la jornada laboral. Se produce por un uso ineficiente de la voz y puede ser el primer síntoma de un trastorno vocal en desarrollo.",
        },
      },
      {
        "@type": "Question",
        name: "¿La fatiga vocal se puede tratar online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La terapia vocal online permite trabajar técnica respiratoria, resonancia y hábitos de higiene vocal de forma efectiva por videollamada. Los estudios internacionales respaldan la telefonoaudiología para tratamientos de voz en adultos.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Voz Online", href: "/voz-online/fonoaudiologa-de-voz-online" },
            { label: "Fatiga Vocal" },
          ]}
        />

        <article className="prose prose-orange lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-orange-950">
            Fatiga Vocal: ¿Se te Cansa la Voz? Tratamiento Online
          </h1>
          <p className="lead font-medium text-gray-700">
            Terminas el día con la voz gastada, necesitas hacer esfuerzo para
            que te escuchen, sientes tensión en el cuello o dolor al tragar.
            La fatiga vocal es real, no es &quot;frescura&quot;, y es una señal
            de alarma de que tu voz necesita atención profesional.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-orange-900">
              ¿Cómo se manifiesta la fatiga vocal?
            </h2>
            <ul>
              <li>
                La voz se debilita o se vuelve ronca a medida que avanza el día.
              </li>
              <li>
                Necesitas &quot;empujar&quot; para que te escuchen en reuniones o
                clases.
              </li>
              <li>
                Sientes tensión, dolor o molestia en la zona del cuello y
                garganta.
              </li>
              <li>
                La voz se quiebra o se corta al hablar seguido más de 30-40
                minutos.
              </li>
              <li>
                Los lunes tu voz es buena, pero el viernes estás casi sin voz.
              </li>
            </ul>
          </section>

          <div className="bg-orange-50 p-6 rounded-xl my-8 border border-orange-100">
            <h3 className="text-xl font-bold text-orange-900 mt-0">
              ¿Por qué se cansa tu voz?
            </h3>
            <p className="text-orange-800">
              La fatiga vocal ocurre cuando usas la voz con un{" "}
              <strong>patrón ineficiente</strong>: poca respiración, tensión
              excesiva de la laringe, falta de resonancia y proyección forzada.
              Es como correr con mala técnica: puedes hacerlo, pero te
              lesionarás. Los{" "}
              <Link
                href="/voz-online/terapia-vocal-docentes-profesores"
                className="font-semibold text-orange-700 underline"
              >
                profesores
              </Link>
              , vendedores, telemarketers y{" "}
              <Link
                href="/voz-online/rehabilitacion-vocal-profesionales-voz"
                className="font-semibold text-orange-700 underline"
              >
                profesionales de la voz
              </Link>{" "}
              son los más afectados.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-orange-900">
              ¿Qué pasa si no se trata?
            </h2>
            <p>
              La fatiga vocal sostenida puede llevar a lesiones orgánicas como{" "}
              <Link
                href="/voz-online/nodulos-vocales-tratamiento-online"
                className="font-semibold text-orange-600"
              >
                nódulos vocales
              </Link>
              , edema de cuerdas vocales o{" "}
              <Link
                href="/voz-online/tratamiento-disfonia-online"
                className="font-semibold text-orange-600"
              >
                disfonía crónica
              </Link>
              . Cuanto antes consultes, más rápido y simple es el tratamiento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-orange-900">
              Tratamiento online: eficaz y práctico
            </h2>
            <p>
              La terapia de fatiga vocal por videollamada incluye ejercicios de
              técnica respiratoria diafragmática, entrenamiento de resonancia
              para hablar sin esfuerzo, relajación de la musculatura cervical y
              laríngea, y un plan de{" "}
              <Link
                href="/voz-online/higiene-vocal-cuidado-voz"
                className="font-semibold text-orange-600"
              >
                higiene vocal
              </Link>{" "}
              personalizado para tu rutina laboral. Atendemos a todo Chile.
            </p>
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20se%20me%20cansa%20mucho%20la%20voz%20y%20necesito%20ayuda%20online"
              className="bg-orange-600 hover:bg-orange-700 ring-orange-300"
            >
              Recuperar mi Voz Online
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
