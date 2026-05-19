import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/voz-online/voz-ronca-causas-tratamiento",
  title: "Voz Ronca: Causas y Tratamiento Online | Fonoaudióloga Chile",
  description:
    "¿Llevas días o semanas con la voz ronca? Conoce las causas y accede a tratamiento fonoaudiológico online desde cualquier ciudad de Chile.",
});

const faqItems = [
  {
    question: "¿Por qué tengo la voz ronca?",
    answer:
      "La ronquera aparece cuando las cuerdas vocales no vibran de forma simétrica. Causas frecuentes: mal uso vocal, laringitis, reflujo, nódulos, tabaco y alergias. Si persiste más de 2 semanas, conviene evaluación.",
  },
  {
    question: "¿Cuándo debo preocuparme por la voz ronca?",
    answer:
      "Si dura más de 2–3 semanas sin resfriado, empeora, duele al hablar o se repite la afonía. La ASHA recomienda no postergar la consulta.",
  },
  {
    question: "¿Se puede tratar la voz ronca online?",
    answer:
      "Sí en casos funcionales y en rehabilitación post-diagnóstico. Primero se realiza evaluación vocal online; si hay sospecha de lesión orgánica, se coordina con otorrinolaringología.",
  },
];

export default function VozRoncaPage() {
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
            { label: "Voz Ronca" },
          ]}
        />

        <article className="prose prose-pink lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-pink-950">
            ¿Por Qué Tengo la Voz Ronca? Causas y Tratamiento Online
          </h1>
          <p className="lead font-medium text-gray-700" data-speakable>
            La voz ronca (o disfónica) es una de las consultas más frecuentes en
            fonoaudiología de voz. Una ronquera que no se va después de un
            resfrío <strong>no es normal</strong> y merece atención. Evaluamos
            y tratamos la voz ronca online para todo Chile.
          </p>
          <p className="not-prose my-4 rounded-xl border border-pink-200 bg-pink-50/80 p-4 text-sm text-pink-900">
            <strong>Dato:</strong> La ASHA señala que la ronquera persistente
            (&gt;2 semanas) debe evaluarse para descartar patología laríngea.
            <cite className="mt-1 block text-xs text-pink-700 not-italic">
              Fuente:{" "}
              <a
                href="https://www.asha.org/public/speech/disorders/Hoarseness/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-pink-900"
              >
                American Speech-Language-Hearing Association (ASHA)
              </a>
              , ronquera persistente.
            </cite>
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-pink-900">
              Causas más comunes de la voz ronca
            </h2>
            <ul>
              <li>
                <strong>Mal uso vocal crónico:</strong> Hablar con tensión,
                gritar, forzar la voz en ambientes ruidosos durante semanas o
                meses.
              </li>
              <li>
                <strong>
                  <Link
                    href="/voz-online/nodulos-vocales-tratamiento-online"
                    className="font-semibold text-pink-600"
                  >
                    Nódulos vocales
                  </Link>
                  :
                </strong>{" "}
                Callosidades en las cuerdas que impiden el cierre correcto.
              </li>
              <li>
                <strong>Reflujo laringofaríngeo:</strong> Ácido gástrico que
                irrita las cuerdas vocales (a veces sin síntomas típicos de
                reflujo).
              </li>
              <li>
                <strong>
                  <Link
                    href="/voz-online/paralisis-cordal-rehabilitacion-online"
                    className="font-semibold text-pink-600"
                  >
                    Parálisis cordal
                  </Link>
                  :
                </strong>{" "}
                Inmovilidad de una cuerda vocal, especialmente post-cirugía.
              </li>
              <li>
                <strong>Laringitis aguda:</strong> Inflamación por virus que
                normalmente se resuelve en 1-2 semanas.
              </li>
              <li>
                <strong>Edema de Reinke:</strong> Acumulación de líquido en las
                cuerdas, asociado frecuentemente al tabaquismo.
              </li>
            </ul>
          </section>

          <div className="bg-pink-50 rounded-2xl p-8 my-10 border-l-4 border-pink-500">
            <h2 className="text-2xl font-bold mt-0 text-pink-900">
              ⚠️ Señales de alarma
            </h2>
            <ul className="text-pink-800 space-y-3">
              <li>
                <strong>Más de 2-3 semanas:</strong> Ronquera que no mejora sin
                causa obvia.
              </li>
              <li>
                <strong>Empeoramiento progresivo:</strong> La voz se va
                poniendo cada vez más áspera o débil.
              </li>
              <li>
                <strong>Dolor al hablar o tragar:</strong> Molestia persistente
                al nivel de la garganta.
              </li>
              <li>
                <strong>Pérdida de voz recurrente:</strong> Episodios de afonía
                que se repiten periódicamente.
              </li>
            </ul>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-pink-900">
              Tratamiento online de la voz ronca
            </h2>
            <p>
              El primer paso es una{" "}
              <Link
                href="/voz-online/evaluacion-vocal-online"
                className="font-semibold text-pink-600"
              >
                evaluación vocal online
              </Link>{" "}
              para identificar si la ronquera es funcional (por mal uso) u
              orgánica (por lesión). En la mayoría de los casos funcionales, la
              terapia de{" "}
              <Link
                href="/voz-online/tratamiento-disfonia-online"
                className="font-semibold text-pink-600"
              >
                rehabilitación vocal
              </Link>{" "}
              más{" "}
              <Link
                href="/voz-online/higiene-vocal-cuidado-voz"
                className="font-semibold text-pink-600"
              >
                higiene vocal
              </Link>{" "}
              resuelve la ronquera en pocas semanas. Si sospechamos una lesión
              orgánica, te derivaremos a otorrinolaringología para una
              nasofibroscopía antes de continuar.
            </p>
          </section>

          <GeoFAQ
            items={faqItems}
            includeJsonLd={false}
            className="not-prose my-12 rounded-2xl border border-pink-100 bg-pink-50/40 p-8"
          />

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              message="Hola, tengo la voz ronca hace tiempo y busco ayuda online"
              className="bg-pink-600 hover:bg-pink-700 ring-pink-300"
            >
              Evaluar mi Voz Ronca Online
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
