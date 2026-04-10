import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terapia para Retraso del Habla en Niños | Chillán",
  description: "Tratamiento de fonoaudiología infantil para retraso del habla en Chillán. Te ayudamos si tu hijo habla poco o no pronuncia de forma comprensible.",
  alternates: {
    canonical: "https://www.katialafono.cl/tratamientos/retraso-del-habla-chillan",
  },
};

export default function RetrasoHablaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Terapia Retraso del Habla Chillán",
    "medicalSpecialty": "SpeechTherapy",
    "about": {
      "@type": "MedicalCondition",
      "name": "Speech Delay"
    }
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
            { label: "Tratamientos", href: "/fonoaudiologia-infantil-chillan" },
            { label: "Retraso del Habla" },
          ]}
        />
        
        <article className="prose prose-blue lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-blue-950">
            Terapia para Retraso del Habla en Niños en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            A diferencia del lenguaje, el <strong>habla</strong> tiene que ver con cómo se producen físicamente los sonidos y las palabras. Tratamos dificultades de articulación presencialmente en Chillán.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-blue-900">Signos de alerta del retraso del habla</h2>
            <ul>
              <li>A los 3 años, sus palabras son muy difíciles de entender para extraños.</li>
              <li>Sustituye sonidos o corta sílabas casi de forma permanente.</li>
              <li>Tiene el vocabulario, sabe lo que quiere decir, pero "le cuesta sacar la palabra".</li>
              <li>Se frustra cuando intenta <Link href="/sintomas/mi-hijo-no-habla-bien-chillan" className="text-blue-600 underline">hablar y no lo entienden</Link>.</li>
            </ul>
          </section>

          <div className="bg-sky-50 p-6 rounded-xl my-8 border border-sky-100">
            <h3 className="text-xl font-bold text-blue-900 mt-0">Enfoque de la Terapia Infantil</h3>
            <p className="text-blue-800">
              La terapia para el retraso del habla requiere consistencia. En nuestra consulta ubicada en <strong>Chillán</strong>, utilizamos gimnasia articulatoria, juegos de soplo y praxias bucofonatorias que enseñan al cerebro del niño a programar correctamente la secuencia de sonidos al hablar.
            </p>
          </div>

          <p>
            Con una <Link href="/evaluacion-fonoaudiologica-infantil-chillan" className="font-semibold text-blue-600">evaluación inicial</Link>, diagnosticaremos exactamente dónde está "la traba" a nivel muscular o fonológico.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20quiero%20agendar%20por%20retraso%20del%20habla%20en%20Chill%C3%A1n" className="bg-blue-600 hover:bg-blue-700 ring-blue-300">
              Agendar Terapia del Habla
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
