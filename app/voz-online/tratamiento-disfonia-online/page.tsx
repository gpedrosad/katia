import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratamiento de Disfonía Online | Fonoaudióloga Chile",
  description:
    "Tratamiento fonoaudiológico de disfonía online para adultos en todo Chile. Rehabilitación vocal para ronquera, voz áspera y pérdida de voz.",
  alternates: {
    canonical: "https://www.katialafono.cl/voz-online/tratamiento-disfonia-online",
  },
};

export default function TratamientoDisfoniaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Tratamiento de Disfonía Online",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "MedicalCondition",
      name: "Disfonía",
      alternateName: "Trastorno de la Voz",
      description:
        "Alteración de la calidad de la voz que puede manifestarse como ronquera, voz soplada, voz tensa o pérdida parcial/total de la voz.",
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
            { label: "Tratamiento Disfonía" },
          ]}
        />

        <article className="prose prose-rose lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-rose-950">
            Tratamiento de Disfonía Online — Recupera tu Voz desde Casa
          </h1>
          <p className="lead font-medium text-gray-700">
            La disfonía es cualquier alteración en la calidad, tono o
            intensidad de la voz. Si llevas semanas con la voz ronca, áspera o
            &quot;cansada&quot;, no es normal y tiene tratamiento. Atendemos por
            videollamada a todo Chile.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-rose-900">
              Tipos de disfonía que tratamos
            </h2>
            <ul>
              <li>
                <strong>Disfonía funcional:</strong> Mal uso o abuso vocal
                sostenido. Es la más frecuente y responde muy bien a la terapia
                fonoaudiológica.
              </li>
              <li>
                <strong>Disfonía orgánica:</strong> Asociada a{" "}
                <Link
                  href="/voz-online/nodulos-vocales-tratamiento-online"
                  className="font-semibold text-rose-600"
                >
                  nódulos
                </Link>
                , pólipos, edema de Reinke, quistes o{" "}
                <Link
                  href="/voz-online/paralisis-cordal-rehabilitacion-online"
                  className="font-semibold text-rose-600"
                >
                  parálisis cordal
                </Link>
                . Requiere tratamiento complementario al médico.
              </li>
              <li>
                <strong>Disfonía por tensión muscular (DTM):</strong>{" "}
                Hiperfunción de la musculatura laríngea y perilaríngea. Genera
                dolor, tensión cervical y voz estrangulada.
              </li>
              <li>
                <strong>Disfonía por reflujo laringofaríngeo:</strong>{" "}
                Irritación de las cuerdas vocales por ácido gástrico. Trabajo
                coordinado con gastroenterología.
              </li>
            </ul>
          </section>

          <div className="bg-rose-50 p-6 rounded-xl my-8 border border-rose-100">
            <h3 className="text-xl font-bold text-rose-900 mt-0">
              ¿Cómo funciona la terapia vocal online?
            </h3>
            <p className="text-rose-800">
              Las sesiones de rehabilitación vocal por videollamada incluyen
              ejercicios de técnica vocal (resonancia, proyección, apoyo
              respiratorio), relajación laríngea, manejo de{" "}
              <Link
                href="/voz-online/higiene-vocal-cuidado-voz"
                className="font-semibold text-rose-700 underline"
              >
                higiene vocal
              </Link>{" "}
              y entrenamiento de hábitos vocales saludables. Te entrego
              material audiovisual con ejercicios para practicar diariamente
              entre sesiones.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-rose-900">
              ¿Cuándo consultar?
            </h2>
            <ul>
              <li>Ronquera que dura más de 2-3 semanas.</li>
              <li>Pérdida de voz recurrente (afonía parcial o total).</li>
              <li>Sensación de esfuerzo, tensión o dolor al hablar.</li>
              <li>
                Cambio en el tono o volumen sin causa aparente.
              </li>
              <li>
                <Link
                  href="/voz-online/fatiga-vocal-tratamiento-online"
                  className="font-semibold text-rose-600"
                >
                  Fatiga vocal
                </Link>{" "}
                al final de la jornada laboral.
              </li>
            </ul>
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20tengo%20disfon%C3%ADa%20y%20busco%20tratamiento%20online"
              className="bg-rose-600 hover:bg-rose-700 ring-rose-300"
            >
              Tratar mi Disfonía Online
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
