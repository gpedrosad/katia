import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mi Hijo Tartamudea | Evaluación de Fluidez en Chillán",
  description:
    "¿Tu hijo repite sílabas, se traba o bloquea al hablar? Evaluamos la fluidez del habla infantil en Chillán. Aprende a diferenciar tartamudeo normal de patológico.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/sintomas/nino-tartamudea-chillan",
  },
};

export default function NinoTartamudeaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Es normal que un niño tartamudee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Existe una 'disfluencia normal del desarrollo' que ocurre entre los 2 y 5 años mientras el niño aprende a estructurar frases más complejas. Sin embargo, si la tartamudez dura más de 6 meses, incluye tensión muscular visible, bloqueos o el niño evita hablar, se recomienda evaluación fonoaudiológica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo debo consultar por tartamudez infantil?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consulta si el niño repite sonidos o sílabas más de 3 veces seguidas, si muestra tensión facial al hablar, si las disfluencias duran más de 6 meses, o si el niño muestra frustración o evita hablar.",
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
            { label: "Tartamudez Infantil" },
          ]}
        />

        <article className="prose prose-yellow lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-yellow-950">
            ¿Tu hijo tartamudea? Cuándo preocuparte y dónde consultar en
            Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            Escuchar que tu hijo repite sílabas (&quot;pe-pe-pe-pelota&quot;), prolonga
            sonidos (&quot;ssssopa&quot;) o se queda &quot;trabado&quot; sin poder sacar la
            palabra puede ser angustiante. La buena noticia: no siempre es
            tartamudez patológica. Pero sí necesitas saber cuándo actuar.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-yellow-900">
              Disfluencia normal vs. tartamudez
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 not-prose">
              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <h3 className="font-bold text-green-900 mb-2">
                  ✅ Disfluencia normal (2-5 años)
                </h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Repite palabras completas (&quot;yo yo yo quiero&quot;)</li>
                  <li>• Usa muletillas (&quot;eh...&quot;, &quot;mmm...&quot;)</li>
                  <li>• No muestra tensión ni frustración</li>
                  <li>• Dura menos de 6 meses</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-5 border border-red-200">
                <h3 className="font-bold text-red-900 mb-2">
                  ⚠️ Señales de alerta
                </h3>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Repite sonidos o sílabas (&quot;p-p-p-papá&quot;)</li>
                  <li>• Bloqueos visibles con tensión facial</li>
                  <li>• Movimientos asociados (parpadeo, puños)</li>
                  <li>• Evita hablar o situaciones sociales</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-yellow-50 p-6 rounded-xl my-8 border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-900 mt-0">
              Evaluación de fluidez en Chillán
            </h3>
            <p className="text-yellow-800">
              En nuestra consulta presencial en <strong>Chillán</strong>,
              evaluamos el tipo, frecuencia y severidad de las disfluencias.
              Analizamos si hay conductas secundarias (tensión, evitación) y
              construimos un perfil claro que nos permite diferenciar la
              disfluencia normal de una tartamudez que requiere intervención
              temprana. Mientras antes consultemos, mejores son los resultados.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-yellow-900">
              ¿Qué hacer mientras tanto?
            </h2>
            <ul>
              <li>
                <strong>No lo presiones:</strong> Evita decir &quot;habla más
                despacio&quot; o &quot;piensa antes de hablar&quot;.
              </li>
              <li>
                <strong>Escucha con paciencia:</strong> Mantén contacto visual y
                no completes sus frases.
              </li>
              <li>
                <strong>Modela habla pausada:</strong> Habla tú más lento, sin
                que parezca forzado.
              </li>
              <li>
                <strong>Consulta:</strong> Si las disfluencias llevan más de 6
                meses, agenda una{" "}
                <Link
                  href="/evaluacion-fonoaudiologica-infantil-chillan"
                  className="font-semibold text-yellow-700"
                >
                  evaluación fonoaudiológica
                </Link>
                .
              </li>
            </ul>
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20mi%20hijo%20tartamudea%20y%20quisiera%20una%20evaluaci%C3%B3n%20en%20Chill%C3%A1n"
              className="bg-yellow-600 hover:bg-yellow-700 ring-yellow-300"
            >
              Evaluar la fluidez de mi hijo
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
