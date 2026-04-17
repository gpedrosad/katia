import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fatiga Vocal: Causas y Tratamiento Online | Chile",
  description:
    "¿Llegas al viernes sin voz? Tratamiento online para la fatiga vocal. Aprende a hablar sin cansancio ni tensión. Evaluación remota para todo Chile.",
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
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-orange-950 mb-6">
              ¿Tu voz es una lucha cada tarde? Domina la Fatiga Vocal
            </h1>
            <p className="lead font-medium text-gray-700 max-w-3xl mx-auto">
              Llegas al final del día sintiendo que un cinturón te aprieta el cuello. Tienes que empujar el aire para que te escuchen. Te duele tragar. Esto es la fatiga vocal y es <strong>la puerta de entrada a lesiones crónicas de la voz</strong>. No lo normalices.
            </p>
          </header>

          <section className="my-10">
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-orange-900 mt-0 mb-4">
                El peligro de acostumbrarse al dolor al hablar
              </h3>
              <p className="text-orange-800 mb-6 text-left">
                Es como correr una maratón todos los días con los zapatos equivocados. Puedes hacerlo un tiempo, pero te lesionarás los músculos. La tensión descontrolada produce edema, disfonía y finalmente nódulos. La sesión online te entrega los "zapatos" correctos: técnica respiratoria y proyección.
              </p>
              <WhatsAppCTA
                href="https://wa.me/56995497838?text=Hola,%20se%20me%20cansa%20mucho%20la%20voz%20diariamente%20y%20necesito%20ayuda%20via%20online."
                className="bg-orange-600 hover:bg-orange-700 ring-orange-300 w-full sm:w-auto"
              >
                Superar mi Fatiga Vocal
              </WhatsAppCTA>
              <p className="text-xs mt-3 text-orange-700 font-bold opacity-80">
                Evita la pausa médica prolongada actuando a tiempo.
              </p>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold mt-8 text-orange-900 border-b pb-2">
              El diagnóstico escondido en tu rutina diaria
            </h2>
            <ul className="space-y-3 mt-4 text-gray-800">
              <li>
                <strong>Lunes vs Viernes:</strong> Tu voz suena completamente diferente el fin de semana por el nivel de desgaste.
              </li>
              <li>
                <strong>Esfuerzo extra:</strong> Sientes que debes "empujar" físicamente las palabras desde tu pecho para hablar en una reunión de zoom.
              </li>
              <li>
                <strong>Tensión extrema:</strong> Los masajes en el cuello y hombros no bastan para quitar la pesadez que sientes al final de tu jornada.
              </li>
              <li>
                <strong>Pérdida de volumen:</strong> Tu voz se "esconde" y ya nadie te logra escuchar en lugares con algo de ruido.
              </li>
            </ul>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold text-orange-900 text-center mb-8">
              Profesionales que recuperaron su vida vocal
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="Sebastián F., Gerente Comercial"
                text="Pasó de ser un problema del trabajo a afectar mi vida social. Llegaba mudo a mi casa porque no quería ni responderle a los niños por el cansancio en la garganta. La terapia con Katia por Zoom fue muy práctica. Me dio ejercicios cortos que podía hacer antes de entrar a mis reuniones."
              />
              <TestimonialCard
                name="Lucía R., Emprendedora"
                text="No entendía por qué me dolía tanto hablar hasta que Katia por la videollamada vio mi postura y patrón de respiración. Empezamos la rehabilitación y fue un cambio del cielo a la tierra. Ahora hablo horas y horas y mi voz ni se entera."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 text-orange-900">
              Por qué tratarte 100% online
            </h2>
            <p>
              El online no solo es más cómodo, sino que <strong>nos permite trabajar in situ</strong>. Yo estaré frente a ti en la postura real en que trabajas diariamente. Veré cómo respiras al estar sentado en tu escritorio, qué tensiones haces en cámara y adaptaremos la técnica a tu verdadero campo de batalla.
            </p>
            <p className="mt-4">
              Aprenderemos técnica respiratoria costo-diafragmática orientada al habla sostenible, para que proyectes desde el abdomen y no destruyéndote la laringe.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
