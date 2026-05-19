import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estimulación Temprana del Lenguaje en Chillán | 0 a 3 Años",
  description:
    "Estimulación temprana del lenguaje para bebés y niños de 0 a 3 años en Chillán. Intervención fonoaudiológica presencial para potenciar las primeras palabras.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/servicios/estimulacion-temprana-del-lenguaje-chillan",
  },
};

export default function EstimulacionTempranaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Estimulación Temprana del Lenguaje en Chillán",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "TherapeuticProcedure",
      name: "Estimulación Temprana del Lenguaje",
      description:
        "Intervención clínica diseñada para potenciar las habilidades comunicativas en bebés y niños preescolares de 0 a 3 años.",
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
            { label: "Estimulación Temprana" },
          ]}
        />

        <article className="prose prose-cyan lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-cyan-950">
            Estimulación Temprana del Lenguaje en Chillán: de 0 a 3 Años
          </h1>
          <p className="lead font-medium text-gray-700">
            Los primeros tres años de vida son la ventana crítica del
            neurodesarrollo lingüístico. Si tu bebé aún no balbucea, no
            responde a su nombre o no señala lo que quiere, una intervención
            temprana puede marcar toda la diferencia en su futuro comunicativo.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-cyan-900">
              ¿Cuándo conviene consultar por estimulación temprana?
            </h2>
            <ul>
              <li>
                <strong>6-9 meses:</strong> No balbucea (no dice &quot;bababá&quot;,
                &quot;mamá&quot; sin intención) ni imita sonidos vocálicos.
              </li>
              <li>
                <strong>12 meses:</strong> No dice ninguna palabra reconocible ni
                señala objetos de interés.
              </li>
              <li>
                <strong>18 meses:</strong> Tiene menos de 5-10 palabras y no
                comprende instrucciones simples (&quot;dame la pelota&quot;).
              </li>
              <li>
                <strong>24 meses:</strong> No alcanza las{" "}
                <strong>50 palabras</strong> esperadas ni combina 2 palabras
                (&quot;mamá agua&quot;).
              </li>
            </ul>
          </section>

          <div className="bg-cyan-50 p-6 rounded-xl my-8 border border-cyan-100">
            <h3 className="text-xl font-bold text-cyan-900 mt-0">
              ¿Cómo trabajamos la estimulación en Chillán?
            </h3>
            <p className="text-cyan-800">
              En nuestra consulta presencial en <strong>Chillán</strong>,
              utilizamos técnicas basadas en evidencia como la{" "}
              <em>estimulación focalizada</em>, el <em>modelado</em> y la{" "}
              <em>expansión lingüística</em> dentro del juego. Involucramos
              activamente a los padres para que repliquen las estrategias en
              casa, multiplicando los resultados fuera de la sesión.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-cyan-900">
              Beneficios de intervenir antes de los 3 años
            </h2>
            <p>
              La plasticidad cerebral durante esta etapa es máxima. Estudios
              internacionales muestran que los niños que reciben estimulación
              temprana del lenguaje reducen significativamente la probabilidad de
              necesitar terapia prolongada en la etapa escolar. Cuanto antes se
              detecta un{" "}
              <Link
                href="/tratamientos/retraso-del-lenguaje-chillan"
                className="font-semibold text-cyan-600"
              >
                retraso del lenguaje
              </Link>
              , mejores son los pronósticos.
            </p>
          </section>

          <p>
            Si tu pediatra o educadora de párvulos ha sugerido una{" "}
            <Link
              href="/evaluacion-fonoaudiologica-infantil-chillan"
              className="font-semibold text-cyan-600"
            >
              evaluación fonoaudiológica
            </Link>
            , no dudes en agendar. Una sesión inicial de aproximadamente{" "}
            <strong>60 minutos</strong> nos permite determinar en qué punto se
            encuentra tu bebé y diseñar un plan de acción específico.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20busco%20estimulaci%C3%B3n%20temprana%20del%20lenguaje%20para%20mi%20beb%C3%A9%20en%20Chill%C3%A1n"
              className="bg-cyan-600 hover:bg-cyan-700 ring-cyan-300"
            >
              Consultar por Estimulación Temprana
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
