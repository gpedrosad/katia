import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Mi Hijo No Entiende Instrucciones | Fonoaudióloga Chillán",
  description:
    "¿Tu hijo no sigue instrucciones o parece no entender lo que le dices? Puede ser un problema de comprensión del lenguaje. Evaluación fonoaudiológica en Chillán.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/sintomas/nino-no-entiende-instrucciones-chillan",
  },
};

export default function NinoNoEntiendeInstruccionesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Por qué mi hijo no sigue instrucciones simples?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La dificultad para seguir instrucciones puede deberse a un déficit en la comprensión del lenguaje (el niño no procesa lo que escucha), problemas de atención, o incluso una pérdida auditiva no detectada. Una evaluación fonoaudiológica presencial permite diferenciar las causas.",
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
            {
              label: "Fonoaudiología",
              href: "/fonoaudiologia-infantil-chillan",
            },
            { label: "No Entiende Instrucciones" },
          ]}
        />

        <article className="prose prose-red lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-red-950">
            ¿Tu hijo no entiende instrucciones? Señales y ayuda en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            &quot;Le digo que vaya a buscar los zapatos y se queda mirándome&quot;,
            &quot;hay que repetirle todo varias veces&quot;... Estas situaciones pueden
            indicar un problema en la <strong>comprensión del lenguaje</strong>,
            un área que frecuentemente pasa desapercibida porque el niño puede
            parecer &quot;distraído&quot; o &quot;desobediente&quot;.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-red-900">
              Señales de un problema de comprensión
            </h2>
            <ul>
              <li>
                No sigue instrucciones de dos pasos (&quot;toma el vaso y ponlo en
                la mesa&quot;) a los 3 años.
              </li>
              <li>
                Responde de forma incoherente a preguntas simples (&quot;¿qué
                comiste?&quot; → respuesta fuera de contexto).
              </li>
              <li>
                Se guía más por las señas y el contexto visual que por las
                palabras que escucha.
              </li>
              <li>
                En el jardín, le cuesta seguir las actividades grupales
                verbales.
              </li>
            </ul>
          </section>

          <div className="bg-red-50 p-6 rounded-xl my-8 border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mt-0">
              ¿Es falta de atención o de comprensión?
            </h3>
            <p className="text-red-800">
              Es una pregunta clave. En nuestra consulta en{" "}
              <strong>Chillán</strong>, utilizamos pruebas estandarizadas (como
              el TECAL) que miden específicamente cuánto vocabulario comprende
              el niño y cómo procesa la gramática. Esto nos permite diferenciar
              un problema de comprensión lingüística de un tema atencional, y
              derivar correctamente si es necesario.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-red-900">
              Importancia de detectar a tiempo
            </h2>
            <p>
              Un niño que no comprende bien el lenguaje tendrá dificultades
              crecientes en el colegio: no entiende las instrucciones de la
              profesora, le cuesta seguir cuentos y su rendimiento académico se
              ve afectado. La buena noticia es que con una{" "}
              <Link
                href="/evaluacion-fonoaudiologica-infantil-chillan"
                className="font-semibold text-red-600"
              >
                evaluación temprana
              </Link>{" "}
              y un plan de intervención adecuado, las mejoras son significativas.
              En muchos casos, se relaciona con un{" "}
              <Link
                href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan"
                className="font-semibold text-red-600"
              >
                TEL de predominio receptivo
              </Link>
              .
            </p>
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20mi%20hijo%20no%20entiende%20instrucciones%20y%20me%20preocupa.%20Busco%20hora%20en%20Chill%C3%A1n"
              className="bg-red-600 hover:bg-red-700 ring-red-300"
            >
              Consultar por comprensión del lenguaje
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
