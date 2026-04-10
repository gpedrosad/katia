import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratamiento de Dislalia y Trastornos Fonológicos en Chillán",
  description: "Terapias presenciales en Chillán para niños con problemas de pronunciación, dislalia o la letra R. Técnicas fonoaudiológicas especializadas.",
  alternates: {
    canonical: "https://www.katialafono.cl/tratamientos/dislalia-infantil-chillan",
  },
};

export default function DislaliaInfantilPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Dislalia",
    "alternateName": "Problemas de Pronunciación Infantil",
    "associatedAnatomy": {
      "@type": "AnatomicalStructure",
      "name": "Speech Organs"
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
            { label: "Dislalia Infantil" },
          ]}
        />
        
        <article className="prose prose-teal lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-teal-950">
            Tratamiento de Dislalia Infantil en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            La dislalia es la dificultad para articular correctamente uno o varios fonemas (letras o sonidos). Aunque suele asociarse a prescolares, si <Link href="/sintomas/nino-pronuncia-mal-chillan" className="font-semibold text-teal-600">el niño pronuncia mal</Link> pasados los 4-5 años, es clave intervenir.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-teal-900">¿Qué sonidos suelen ser los más difíciles?</h2>
            <ul>
              <li><strong>Rotacismo:</strong> Problemas con la "R" o "RR" (super frecuente entre los 4 y 6 años).</li>
              <li><strong>Sigmatismo:</strong> Dificultad para pronunciar la "S" (siseos, sacando la lengua).</li>
              <li><strong>Sustituciones:</strong> Dice "tasa" en vez de "casa", perdiendo inteligibilidad.</li>
            </ul>
          </section>

          <div className="bg-teal-50 p-6 rounded-xl my-8 border border-teal-100">
            <h3 className="text-xl font-bold text-teal-900 mt-0">Cómo ayudamos con la pronunciación</h3>
            <p className="text-teal-800">
              Ubicados en <strong>Chillán</strong>, llevamos a cabo evaluaciones de los Órganos Fonoarticulatorios (OFAS: lengua, labios, paladar) y frenillo lingual. La terapia consiste en juegos didácticos neuromotores que entrenan cómo posicionar la lengua para que el aire salga correctamente con cada letra, automatizando el sonido en el habla espontánea.
            </p>
          </div>

          <p>
            No esperes a que entre a básica arrastrando estas dificultades fonológicas, ya que pueden influir en el proceso de lectura y escritura.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20busco%20ayuda%20para%20la%20pronunciaci%C3%B3n/dislalia%20en%20Chill%C3%A1n" className="bg-teal-600 hover:bg-teal-700 ring-teal-300">
              Ayudar a mi hijo con su pronunciación
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
