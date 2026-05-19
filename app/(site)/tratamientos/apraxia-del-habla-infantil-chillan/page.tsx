import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apraxia del Habla Infantil | Tratamiento en Chillán",
  description:
    "Diagnóstico y tratamiento de apraxia del habla infantil en Chillán. Tu hijo sabe qué quiere decir pero no logra coordinar los movimientos para hablar.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/tratamientos/apraxia-del-habla-infantil-chillan",
  },
};

export default function ApraxiaHablaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Apraxia del Habla Infantil - Tratamiento en Chillán",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "MedicalCondition",
      name: "Apraxia del Habla Infantil",
      alternateName: "Childhood Apraxia of Speech (CAS)",
      description:
        "Trastorno neurológico del habla en el que el cerebro tiene dificultad para coordinar los movimientos necesarios para producir sonidos, sílabas y palabras.",
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
            { label: "Tratamientos", href: "/fonoaudiologia-infantil-chillan" },
            { label: "Apraxia del Habla" },
          ]}
        />

        <article className="prose prose-slate lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-slate-950">
            Apraxia del Habla Infantil: Diagnóstico y Tratamiento en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            La apraxia del habla infantil (CAS, por sus siglas en inglés) es un
            trastorno neurológico en el que el niño{" "}
            <strong>sabe lo que quiere decir</strong>, pero su cerebro tiene
            dificultad para planificar y coordinar los movimientos musculares
            necesarios para producir los sonidos. No es un problema de
            &quot;flojera&quot; ni de inteligencia.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-slate-900">
              ¿Cómo reconocer la apraxia del habla?
            </h2>
            <ul>
              <li>
                El niño tiene muy pocas palabras para su edad, pero{" "}
                <strong>comprende</strong> todo lo que se le dice.
              </li>
              <li>
                Comete errores inconsistentes: dice una palabra de formas
                diferentes cada vez que la intenta.
              </li>
              <li>
                Tiene dificultad para imitar sonidos o palabras incluso cuando
                se le pide directamente.
              </li>
              <li>
                Puede articular sonidos aislados pero le cuesta unirlos en
                secuencias (sílabas o palabras).
              </li>
              <li>
                Muestra &quot;búsqueda articulatoria&quot; visible: mueve labios y
                lengua como si intentara encontrar la posición correcta.
              </li>
            </ul>
          </section>

          <div className="bg-slate-100 p-6 rounded-xl my-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mt-0">
              Diferencia con otros trastornos del habla
            </h3>
            <p className="text-slate-700">
              La apraxia se confunde frecuentemente con la{" "}
              <Link
                href="/tratamientos/dislalia-infantil-chillan"
                className="font-semibold text-slate-600 underline"
              >
                dislalia
              </Link>{" "}
              o el{" "}
              <Link
                href="/tratamientos/retraso-del-habla-chillan"
                className="font-semibold text-slate-600 underline"
              >
                retraso del habla
              </Link>
              . La diferencia clave es su naturaleza neuromotora: el niño no
              tiene debilidad muscular (como en la disartria) sino un problema
              de <em>programación</em> motora del habla. Un diagnóstico
              diferencial preciso es fundamental y requiere{" "}
              <Link
                href="/evaluacion-fonoaudiologica-infantil-chillan"
                className="font-semibold text-slate-600 underline"
              >
                evaluación especializada
              </Link>
              .
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-slate-900">
              Tratamiento en Chillán
            </h2>
            <p>
              En nuestra consulta presencial en <strong>Chillán</strong>,
              utilizamos enfoques basados en evidencia como los principios del
              aprendizaje motor: práctica intensiva, repeticiones variadas y
              retroalimentación sensorial (visual, táctil y auditiva). La
              apraxia típicamente requiere sesiones{" "}
              <strong>frecuentes y consistentes</strong> (idealmente 2-3 veces
              por semana) para lograr avances sólidos, acompañadas de práctica
              diaria en casa.
            </p>
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20sospecho%20apraxia%20del%20habla%20en%20mi%20hijo.%20Busco%20evaluaci%C3%B3n%20en%20Chill%C3%A1n"
              className="bg-slate-700 hover:bg-slate-800 ring-slate-400"
            >
              Consultar por Apraxia del Habla
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
