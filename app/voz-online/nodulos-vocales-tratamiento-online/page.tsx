import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nódulos Vocales: Tratamiento Online sin Cirugía | Chile",
  description:
    "Tratamiento fonoaudiológico online para nódulos vocales en adultos. Rehabilitación vocal conservadora desde cualquier ciudad de Chile.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/voz-online/nodulos-vocales-tratamiento-online",
  },
};

export default function NodulosVocalesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Nódulos Vocales - Tratamiento Online",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "MedicalCondition",
      name: "Nódulos Vocales",
      alternateName: "Nódulos de cuerdas vocales",
      possibleTreatment: {
        "@type": "TherapeuticProcedure",
        name: "Terapia Vocal Conservadora",
      },
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
            { label: "Voz Online", href: "/voz-online/fonoaudiologa-de-voz-online" },
            { label: "Nódulos Vocales" },
          ]}
        />

        <article className="prose prose-amber lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-amber-950">
            Nódulos Vocales: Tratamiento Online sin Cirugía
          </h1>
          <p className="lead font-medium text-gray-700">
            Los nódulos vocales son callosidades benignas que se forman en las
            cuerdas vocales por abuso o mal uso de la voz. La buena noticia: en
            la mayoría de los casos, se pueden tratar{" "}
            <strong>sin cirugía</strong> mediante terapia vocal
            fonoaudiológica. Atendemos online a todo Chile.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-amber-900">
              ¿Por qué se forman los nódulos?
            </h2>
            <ul>
              <li>
                <strong>Mal uso vocal sostenido:</strong> Hablar con excesiva
                tensión laríngea durante meses o años.
              </li>
              <li>
                <strong>Abuso vocal:</strong> Gritar frecuentemente, carraspear,
                hablar en ambientes ruidosos sin técnica.
              </li>
              <li>
                <strong>Profesiones de riesgo:</strong>{" "}
                <Link
                  href="/voz-online/terapia-vocal-docentes-profesores"
                  className="font-semibold text-amber-700"
                >
                  Docentes
                </Link>
                , cantantes, vendedores, call center, actores.
              </li>
              <li>
                <strong>Factores agravantes:</strong> Reflujo
                laringofaríngeo, tabaquismo, deshidratación crónica.
              </li>
            </ul>
          </section>

          <div className="bg-amber-50 p-6 rounded-xl my-8 border border-amber-100">
            <h3 className="text-xl font-bold text-amber-900 mt-0">
              Tratamiento conservador vs. cirugía
            </h3>
            <p className="text-amber-800">
              La evidencia científica recomienda{" "}
              <strong>terapia vocal como primera línea</strong> de tratamiento
              para nódulos vocales. La cirugía se reserva para casos que no
              responden tras un período de rehabilitación adecuado. Nuestro
              enfoque online se basa en reeducar el{" "}
              <strong>patrón fonatorio</strong>: coordinación respiratoria,
              reducción de la tensión laríngea, resonancia y{" "}
              <Link
                href="/voz-online/higiene-vocal-cuidado-voz"
                className="font-semibold text-amber-700 underline"
              >
                higiene vocal
              </Link>
              .
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-amber-900">
              Síntomas típicos con nódulos
            </h2>
            <ul>
              <li>Voz ronca o áspera permanente.</li>
              <li>Pérdida de los agudos (en cantantes es muy notorio).</li>
              <li>
                <Link
                  href="/voz-online/fatiga-vocal-tratamiento-online"
                  className="font-semibold text-amber-600"
                >
                  Fatiga vocal
                </Link>{" "}
                al hablar períodos prolongados.
              </li>
              <li>Sensación de &quot;cuerpo extraño&quot; en la garganta.</li>
              <li>Necesidad de carraspear constantemente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-amber-900">
              ¿Cómo es la terapia online para nódulos?
            </h2>
            <p>
              La terapia online es especialmente efectiva para nódulos porque el
              trabajo es fundamentalmente <em>vocal y respiratorio</em>: no
              requiere contacto físico. En las sesiones por videollamada entrenamos
              técnica de resonancia, proyección sin esfuerzo y manejo del
              apoyo diafragmático. Además, hago seguimiento de tus ejercicios
              entre sesiones con material audiovisual personalizado.
            </p>
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20me%20diagnosticaron%20n%C3%B3dulos%20vocales%20y%20busco%20tratamiento%20online"
              className="bg-amber-600 hover:bg-amber-700 ring-amber-300"
            >
              Tratar Nódulos sin Cirugía
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
