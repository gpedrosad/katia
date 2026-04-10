import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratamiento TEL (Trastorno del Lenguaje) Infantil en Chillán",
  description: "Fonoaudiología especializada en TEL (Trastorno Específico del Lenguaje) o TDL para niños en Chillán. Evaluaciones válidas para PIE y programas escolares.",
  alternates: {
    canonical: "https://www.katialafono.cl/tratamientos/tel-trastorno-especifico-lenguaje-chillan",
  },
};

export default function TratamientoTELPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Tratamiento TEL Chillán",
    "medicalSpecialty": "SpeechTherapy",
    "about": {
      "@type": "MedicalCondition",
      "name": "Trastorno Específico del Lenguaje",
      "alternateName": "TDL"
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
            { label: "Tratamiento TEL" },
          ]}
        />
        
        <article className="prose prose-purple lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-purple-950">
            Tratamiento TEL (Trastorno Específico del Lenguaje) en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            El TEL (actualmente también conocido como Trastorno del Desarrollo del Lenguaje o TDL) afecta la forma en que los niños estructuran oraciones, comprenden instrucciones o expresan ideas complejas, sin que haya otra discapacidad de base.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-purple-900">¿Cómo se manifiesta el TEL en niños?</h2>
            <ul>
              <li>Desordenan sílabas o se comen letras consistentemente en palabras largas.</li>
              <li>Presentan problemas para conjugar tiempos verbales simples (dicen "yo dido" en vez de "yo dije").</li>
              <li>Su vocabulario es inferior al promedio esperado.</li>
              <li>Tienen dificultades para relatar lo que hicieron en el colegio.</li>
            </ul>
          </section>

          <div className="bg-purple-50 p-6 rounded-xl my-8 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-900 mt-0">Terapia Integral y Apoyo Escolar en Chillán</h3>
            <p className="text-purple-800">
              Nuestro trabajo en <strong>Chillán</strong> no es solo con el niño o niña, sino que ayudamos elaborando informes para colegios con Programa de Integración Escolar (PIE) y entregando herramientas a las familias para reforzar en casa. Intervenimos las áreas fonológica, morfosintáctica y semántica-pragmática.
            </p>
          </div>

          <p>
            Realizamos la <Link href="/evaluacion-fonoaudiologica-infantil-chillan" className="font-semibold text-purple-600">evaluación inicial obligatoria</Link> usando baterías estandarizadas clínicas (como el TEPROSIF-R, TECAL o STSG) requeridas en el sistema educativo nacional.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20necesito%20evaluaci%C3%B3n/tratamiento%20por%20TEL%20en%20Chill%C3%A1n" className="bg-purple-600 hover:bg-purple-700 ring-purple-300">
              Agendar Diagnóstico TEL
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
