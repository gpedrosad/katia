import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/voz-online/fatiga-vocal-tratamiento-online",
  title: "Fatiga Vocal: Causas y Tratamiento Online | Chile",
  description:
    "¿Llegas al viernes sin voz? Tratamiento online para la fatiga vocal. Aprende a hablar sin cansancio ni tensión. Evaluación remota para todo Chile.",
});

const faqItems = [
  {
    question: "¿Qué es la fatiga vocal?",
    answer:
      "Es cansancio, debilidad o esfuerzo al hablar, sobre todo al final de la jornada. Suele deberse a uso vocal ineficiente y puede anticipar disfonía o lesiones en cuerdas vocales.",
  },
  {
    question: "¿La fatiga vocal se puede tratar online?",
    answer:
      "Sí. Por videollamada se trabaja respiración, resonancia e higiene vocal con la misma evidencia que en modalidad presencial para adultos.",
  },
  {
    question: "¿La fatiga vocal siempre termina en nódulos?",
    answer:
      "No siempre, pero el mal uso crónico aumenta el riesgo de edema, disfonía y nódulos. Intervenir a tiempo suele evitar cirugía.",
  },
];

export default function FatigaVocalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
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
            <p
              className="lead font-medium text-gray-700 max-w-3xl mx-auto"
              data-speakable
            >
              Llegas al final del día sintiendo que un cinturón te aprieta el cuello. Tienes que empujar el aire para que te escuchen. Te duele tragar. Esto es la fatiga vocal y es <strong>la puerta de entrada a lesiones crónicas de la voz</strong>. No lo normalices.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-orange-800">
              <strong>Dato:</strong> Los profesionales con uso vocal intensivo (docentes, cantantes, call center) presentan mayor prevalencia de trastornos de la voz que la población general.
              <cite className="mt-1 block text-xs text-orange-700 not-italic">
                Fuente:{" "}
                <a
                  href="https://www.asha.org/public/speech/disorders/Voice-Disorders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-orange-900"
                >
                  ASHA — Voice Disorders
                </a>
                , occupational voice disorders.
              </cite>
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
                message="Hola, se me cansa mucho la voz diariamente y necesito ayuda via online."
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

          <GeoFAQ
            items={faqItems}
            includeJsonLd={false}
            className="not-prose my-12 rounded-2xl border border-orange-100 bg-orange-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
