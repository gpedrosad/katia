import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/voz-online/rehabilitacion-vocal-profesionales-voz",
  title: "Rehabilitación Vocal para Profesionales de la Voz | Online Chile",
  description:
    "¿Eres locutor, cantante o animador y tu voz empezó a fallar? Entrenamiento y rehabilitación vocal online exclusiva para profesionales en Chile.",
});

const faqItems = [
  {
    question: "¿Qué profesionales deberían hacer rehabilitación vocal?",
    answer:
      "Cantantes, actores, locutores, profesores, abogados, vendedores y cualquier persona cuyo trabajo exija uso vocal prolongado o de alto rendimiento.",
  },
  {
    question: "¿La rehabilitación vocal online sirve para artistas?",
    answer:
      "Sí. Se adaptan ejercicios de calentamiento, técnica y recuperación post-show, con seguimiento acústico por videollamada.",
  },
  {
    question: "¿Cuánto dura un programa para profesionales de la voz?",
    answer:
      "Varía según la lesión: desde 6 semanas en disfonía funcional hasta varios meses si hay nódulos o cirugía previa.",
  },
];

export default function RehabilitacionVocalProfesionalesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Rehabilitación Vocal para Profesionales de la Voz",
    description:
      "Servicio de entrenamiento y rehabilitación vocal online para cantantes, locutores, actores, oradores y otros profesionales que dependen de su voz.",
    provider: {
      "@type": "Person",
      name: "Katia Domínguez",
      jobTitle: "Fonoaudióloga",
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
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
            { label: "Voz Profesional" },
          ]}
        />

        <article className="prose prose-indigo lg:prose-lg max-w-none">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-indigo-950 mb-6">
              Si vives de tu voz, no puedes permitirte que te abandone
            </h1>
            <p
              className="lead font-medium text-gray-700 max-w-3xl mx-auto"
              data-speakable
            >
              Como cantante, actor, animador u orador recurrente, tu instrumento vocal es el centro de tu sustento. Cuando experimentas quiebres sorpresivos, notas que se escapan o fatiga incontrolable post-show, tu carrera entera entra en pánico.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-indigo-800">
              <strong>Dato:</strong> Los cantantes profesionales reportan hasta 5 veces más síntomas vocales que hablantes ocasionales.
              <cite className="mt-1 block text-xs text-indigo-700 not-italic">
                Fuente:{" "}
                <a
                  href="https://www.asha.org/public/speech/disorders/Voice/Performers-Use-Their-Voices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-indigo-900"
                >
                  ASHA — Performers and Voice
                </a>
                ; estudios de medicina de la voz en artistas.
              </cite>
            </p>
          </header>

          <section className="my-10">
            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-200 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-indigo-900 mt-0 mb-4">
                Devuélvele a tu instrumento su potencia y sanidad original
              </h3>
              <p className="text-indigo-800 mb-6 text-left">
                El dolor y la inestabilidad en la voz humana profesional no ocurre por azar. Ocurre por uso indebido y sobrecarga bajo tensión. A través de nuestra terapia de rehabilitación 100% online y personalizada te devolveremos el rango, la proyección clara y la resistencia de atleta vocal que necesitas arriba del escenario.
              </p>
              <WhatsAppCTA
                message="Hola, soy profesional vocal y necesito ayuda experta vía online."
                className="bg-indigo-600 hover:bg-indigo-700 ring-indigo-300 w-full sm:w-auto"
              >
                Recuperar Mi Voz Profesional
              </WhatsAppCTA>
              <p className="text-xs mt-3 text-indigo-700 font-bold opacity-80">
                Garantizada total de anonimato y confidencialidad en profesionales expuestos.
              </p>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold mt-8 text-indigo-900 border-b pb-2">
              Pesadillas que soluciono a menudo con Profesionales
            </h2>
            <ul className="space-y-4 mt-4 text-gray-800">
              <li>
                <strong>Pérdida de Registro Superior:</strong> Antes llegabas a ese agudo cantando con holgura. Hoy la voz se "pica" o se quiebra a puro aire y dolor.
              </li>
              <li>
                <strong>Fatiga de Streaming Continuo:</strong> Creadores de contenido y podcasters cuyas sesiones de 4 horas los dejan totalmente destruidos.
              </li>
              <li>
                <strong>Cansancio Falso por Monotonía:</strong> Locutores que están forzando sus cuerdas por "impostar" tonos bajos artificiales dañinos.
              </li>
            </ul>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold text-indigo-900 text-center mb-8">
              Artistas que hoy brillan sin temor
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="Ignacio C., Cantante de Eventos"
                text="Los matrimonios y las trasnoches terminaron cobrando peaje. Mi quiebre de paso era un desastre, la voz se me hundía. Me daban pánico los coros altos. Con Katia empecé la re-educación. ¡Qué alivio! Las sesiones por videollamada son oro puro porque mi itinerario es caótico. Hoy canto libre de tensiones."
              />
              <TestimonialCard
                name="Sonia T., Actriz de Teatro"
                text="Hacer obras musicales y no tener aire en la tercera función me asustó. Llegué por recomendación. Sentir que retomas el control total de cada matiz no tiene precio. Jamás pensé que una fonoaudióloga online pudiera diagnosticar con semejante bisturí mis errores."
              />
            </div>
          </section>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
