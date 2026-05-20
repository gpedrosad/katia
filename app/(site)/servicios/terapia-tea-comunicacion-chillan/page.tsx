import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const CANONICAL_PATH = "/servicios/tea-trastorno-espectro-autista";

export const metadata = buildPageMetadata({
  path: "/servicios/terapia-tea-comunicacion-chillan",
  canonicalPath: "/servicios/tea-trastorno-espectro-autista",
  title: "TEA y Comunicación | Fonoaudiología para Autismo en Chillán",
  description:
    "Terapia fonoaudiológica para niños con TEA en Chillán. Trabajamos comunicación funcional, comprensión social y habilidades pragmáticas del lenguaje.",
});

export default function TerapiaTeaComunicacionPage() {
  const jsonLd = {
    ...buildWebPageJsonLd({
      path: CANONICAL_PATH,
      name: "TEA y Comunicación - Fonoaudiología en Chillán",
      description:
        "Intervención fonoaudiológica enfocada en las dificultades comunicativas y pragmáticas asociadas al Trastorno del Espectro Autista en niños.",
    }),
    "@type": "MedicalWebPage",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "MedicalCondition",
      name: "Trastorno del Espectro Autista (TEA)",
      alternateName: "Autism Spectrum Disorder",
      description:
        "Intervención fonoaudiológica enfocada en las dificultades comunicativas y pragmáticas asociadas al Trastorno del Espectro Autista en niños.",
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
            { label: "Servicios", href: "/fonoaudiologa-ninos-chillan" },
            { label: "TEA y Comunicación" },
          ]}
        />

        <article className="prose prose-teal lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-teal-950">
            TEA y Comunicación: Terapia Fonoaudiológica en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            Los niños con Trastorno del Espectro Autista (TEA) frecuentemente
            presentan dificultades en la comunicación que van más allá del
            lenguaje hablado: contacto visual, turnos de conversación,
            comprensión de emociones y uso social del lenguaje. La
            fonoaudiología cumple un rol clave en ampliar sus herramientas
            comunicativas.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-teal-900">
              ¿Cómo afecta el TEA a la comunicación?
            </h2>
            <ul>
              <li>
                <strong>Comunicación verbal:</strong> Algunos niños con TEA
                presentan retraso del lenguaje, ecolalia (repetir frases
                escuchadas) o uso atípico del lenguaje.
              </li>
              <li>
                <strong>Comunicación no verbal:</strong> Dificultad para usar y
                comprender gestos, expresiones faciales y tono de voz.
              </li>
              <li>
                <strong>Pragmática:</strong> Les cuesta iniciar o mantener
                conversaciones, respetar turnos y adaptar su lenguaje al
                contexto.
              </li>
              <li>
                <strong>Comprensión social:</strong> Interpretar bromas,
                ironías, lenguaje figurado o instrucciones ambiguas.
              </li>
            </ul>
          </section>

          <div className="bg-teal-50 p-6 rounded-xl my-8 border border-teal-100">
            <h3 className="text-xl font-bold text-teal-900 mt-0">
              Nuestro enfoque en Chillán
            </h3>
            <p className="text-teal-800">
              En la consulta presencial en <strong>Chillán</strong>, el objetivo
              principal es lograr una <strong>comunicación funcional</strong>:
              que el niño pueda expresar necesidades, participar en
              interacciones y comprender su entorno. Utilizamos apoyos visuales,
              sistemas de comunicación aumentativa cuando es necesario, y
              trabajamos estrechamente con la familia y el equipo escolar para
              generalizar los aprendizajes.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-teal-900">
              ¿Qué objetivos trabajamos?
            </h2>
            <ul>
              <li>
                Aumentar la intención comunicativa (que quiera comunicarse).
              </li>
              <li>
                Desarrollar vocabulario funcional y estructura de frases.
              </li>
              <li>
                Fortalecer la comprensión de instrucciones y preguntas.
              </li>
              <li>
                Trabajar habilidades sociales del lenguaje (saludar, pedir,
                contar).
              </li>
              <li>
                Apoyar la regulación emocional a través de herramientas
                comunicativas.
              </li>
            </ul>
          </section>

          <p>
            El diagnóstico diferencial entre TEA y un{" "}
            <Link
              href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan"
              className="font-semibold text-teal-600"
            >
              Trastorno Específico del Lenguaje
            </Link>{" "}
            es fundamental, ya que el abordaje terapéutico es distinto. Por eso
            siempre partimos con una{" "}
            <Link
              href="/servicios/evaluacion-fonoaudiologica"
              className="font-semibold text-teal-600"
            >
              evaluación fonoaudiológica completa
            </Link>
            .
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              message="Hola, busco terapia fonoaudiológica para mi hijo con TEA en Chillán"
              className="bg-teal-600 hover:bg-teal-700 ring-teal-300"
            >
              Consultar por Terapia TEA
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
