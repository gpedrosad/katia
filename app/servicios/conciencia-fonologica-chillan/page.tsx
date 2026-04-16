import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conciencia Fonológica en Niños | Fonoaudióloga en Chillán",
  description:
    "Evaluación y estimulación de conciencia fonológica para niños en Chillán. Base fundamental para una lectoescritura exitosa. Fonoaudióloga pediátrica.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/servicios/conciencia-fonologica-chillan",
  },
};

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
            { label: "Servicios", href: "/fonoaudiologia-infantil-chillan" },
            { label: "Conciencia Fonológica" },
          ]}
        />

        <article className="prose prose-lime lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-lime-950">
            Conciencia Fonológica en Niños: Evaluación y Estimulación en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
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
                href="/servicios/problemas-lectoescritura-chillan"
                className="font-semibold text-lime-700"
              >
                lectoescritura
              </Link>{" "}
              durante la etapa escolar.
            </p>
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20busco%20evaluar%20la%20conciencia%20fonol%C3%B3gica%20de%20mi%20hijo%20en%20Chill%C3%A1n"
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
