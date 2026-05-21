import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

const faqItems = [
  {
    question: "¿Qué es la conciencia fonológica?",
    answer:
      "Es la habilidad de identificar y manipular sonidos del habla: rimar, segmentar sílabas y fonemas. Es base para aprender a leer y escribir.",
  },
  {
    question: "¿A qué edad conviene evaluarla en Chillán?",
    answer:
      "Ideal entre 4 y 5 años, antes de primero básico. Si hay trastorno fonológico o retraso del lenguaje, conviene evaluar antes.",
  },
  {
    question: "¿La conciencia fonológica predice dificultades lectoras?",
    answer:
      "Sí. La literatura clínica y la OMS vinculan detección temprana de retrasos del desarrollo —incluido lenguaje y habilidades pre-lectoras— con mejores resultados escolares. Fuente: https://www.who.int/news-room/fact-sheets/detail/developmental-disabilities-in-children",
  },
];

export const metadata = buildPageMetadata({
  path: "/servicios/conciencia-fonologica-chillan",
  title: "Conciencia Fonológica en Niños | Fonoaudióloga en Chillán",
  description:
    "Evaluación y estimulación de conciencia fonológica para niños en Chillán. Base fundamental para una lectoescritura exitosa. Fonoaudióloga pediátrica.",
});

export default function ConcienciaFonologicaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Conciencia Fonológica en Niños - Chillán",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "TherapeuticProcedure",
      name: "Estimulación de Conciencia Fonológica",
      description:
        "Intervención clínica para desarrollar la capacidad de identificar y manipular los sonidos del habla, habilidad clave para el aprendizaje de la lectura.",
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
            { label: "Conciencia Fonológica" },
          ]}
        />

        <article className="prose prose-lime lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-lime-950">
            Conciencia Fonológica en Niños: Evaluación y Estimulación en Chillán
          </h1>
          <p className="lead font-medium text-gray-700" data-speakable>
            La conciencia fonológica es la capacidad de reconocer, identificar y
            manipular los sonidos que forman las palabras. Es el{" "}
            <strong>pilar fundamental</strong> para que un niño aprenda a leer y
            escribir con éxito. Si tu hijo está en pre-kínder o kínder y muestra
            dificultades, es momento de consultar.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-lime-900">
              ¿Qué habilidades incluye la conciencia fonológica?
            </h2>
            <ul>
              <li>
                <strong>Segmentación silábica:</strong> Separar &quot;pe-lo-ta&quot; en
                tres golpes de palmas.
              </li>
              <li>
                <strong>Identificación de rimas:</strong> Reconocer que &quot;gato&quot;
                y &quot;pato&quot; terminan igual.
              </li>
              <li>
                <strong>Aislamiento de fonemas:</strong> Identificar que
                &quot;m-e-s-a&quot; empieza con el sonido /m/.
              </li>
              <li>
                <strong>Manipulación fonémica:</strong> Cambiar un sonido para
                formar una palabra nueva (&quot;pato&quot; → &quot;gato&quot;).
              </li>
            </ul>
          </section>

          <div className="bg-lime-50 p-6 rounded-xl my-8 border border-lime-100">
            <h3 className="text-xl font-bold text-lime-900 mt-0">
              ¿Por qué es tan importante para la lectura?
            </h3>
            <p className="text-lime-800">
              Investigaciones demuestran que los niños con baja conciencia
              fonológica tienen mayor riesgo de presentar dificultades en
              lectoescritura. En nuestra consulta en <strong>Chillán</strong>,
              evaluamos el nivel fonológico del niño y diseñamos actividades
              lúdicas que fortalecen esta habilidad antes del inicio de la
              lectura formal.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-lime-900">
              ¿Cuándo se debe evaluar?
            </h2>
            <p>
              Lo ideal es evaluar la conciencia fonológica entre los{" "}
              <strong>4 y 5 años</strong>, antes del ingreso a primero básico.
              Si el niño ya presenta un{" "}
              <Link
                href="/tratamientos/trastorno-fonologico-chillan"
                className="font-semibold text-lime-700"
              >
                trastorno fonológico
              </Link>{" "}
              o tiene antecedentes de{" "}
              <Link
                href="/tratamientos/retraso-del-lenguaje-chillan"
                className="font-semibold text-lime-700"
              >
                retraso del lenguaje
              </Link>
              , la evaluación fonológica es aún más urgente. Niños con
              dificultades en esta área que no reciben apoyo suelen tener
              problemas en la{" "}
              <Link
                href="/servicios/dificultades-lectoescritura"
                className="font-semibold text-lime-700"
              >
                lectoescritura
              </Link>{" "}
              durante la etapa escolar.
            </p>
          </section>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-lime-100 bg-lime-50/40 p-8"
          />

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              message="Hola, busco evaluar la conciencia fonológica de mi hijo en Chillán"
              className="bg-lime-600 hover:bg-lime-700 ring-lime-300"
            >
              Evaluar Conciencia Fonológica
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
