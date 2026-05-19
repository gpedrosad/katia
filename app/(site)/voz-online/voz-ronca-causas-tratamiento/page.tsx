import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voz Ronca: Causas y Tratamiento Online | Fonoaudióloga Chile",
  description:
    "¿Llevas días o semanas con la voz ronca? Conoce las causas y accede a tratamiento fonoaudiológico online desde cualquier ciudad de Chile.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/voz-online/voz-ronca-causas-tratamiento",
  },
};

export default function VozRoncaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Por qué tengo la voz ronca?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La ronquera se produce cuando las cuerdas vocales no vibran correctamente. Las causas más comunes son: mal uso de la voz, laringitis, reflujo laringofaríngeo, nódulos o pólipos vocales, tabaquismo y alergias. Si la ronquera dura más de 2 semanas, se recomienda evaluación fonoaudiológica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo debo preocuparme por la voz ronca?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consulta si la ronquera dura más de 2-3 semanas sin causa clara (como un resfrío), si empeora progresivamente, si se acompaña de dolor al hablar o tragar, o si tienes antecedentes de tabaquismo.",
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
            { label: "Voz Ronca" },
          ]}
        />

        <article className="prose prose-pink lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-pink-950">
            ¿Por Qué Tengo la Voz Ronca? Causas y Tratamiento Online
          </h1>
          <p className="lead font-medium text-gray-700">
            La voz ronca (o disfónica) es una de las consultas más frecuentes en
            fonoaudiología de voz. Una ronquera que no se va después de un
            resfrío <strong>no es normal</strong> y merece atención. Evaluamos
            y tratamos la voz ronca online para todo Chile.
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

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20tengo%20la%20voz%20ronca%20hace%20tiempo%20y%20busco%20ayuda%20online"
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
