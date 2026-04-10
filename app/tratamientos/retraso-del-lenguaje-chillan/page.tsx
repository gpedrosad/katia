import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratamiento Retraso del Lenguaje en Niños | Chillán",
  description: "Terapias fonoaudiológicas para el retraso del lenguaje infantil en Chillán. Si tu hijo comprende pero no habla, podemos ayudarlo. Agenda hoy.",
  alternates: {
    canonical: "https://www.katialafono.cl/tratamientos/retraso-del-lenguaje-chillan",
  },
};

export default function RetrasoLenguajePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Tratamiento Retraso del Lenguaje Chillán",
    "medicalSpecialty": "SpeechTherapy",
    "about": {
      "@type": "MedicalCondition",
      "name": "Retraso del Lenguaje"
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
            { label: "Retraso del Lenguaje" },
          ]}
        />
        
        <article className="prose prose-rose lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-rose-950">
            Tratamiento para Retraso del Lenguaje en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            El retraso del lenguaje ("mi hijo se demora en hablar") es una de las consultas y derivaciones más frecuentes. Aunque cada niño tiene su ritmo, la atención temprana marca la diferencia.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-rose-900">¿Cómo saber si necesitas agendar terapia?</h2>
            <ul>
              <li>Tiene 2 años y aún no logra decir unas 50 palabras.</li>
              <li>No une dos palabras (ejemplo: "mamá agua").</li>
              <li>Se comunica principalmente señalando o llorando.</li>
              <li>Entiende todo lo que le dices, pero le cuesta expresarlo verbalmente (lenguaje comprensivo vs expresivo).</li>
            </ul>
          </section>

          <div className="bg-rose-50 p-6 rounded-xl my-8 border border-rose-100">
            <h3 className="text-xl font-bold text-rose-900 mt-0">Enfoque de la Terapia Infantil</h3>
            <p className="text-rose-800">
              En nuestra consulta en <strong>Chillán</strong>, trabajamos el desarrollo del lenguaje respetando las etapas del pequeño, usando juegos, cuentos e imitación guiada para fomentar que quiera expresarse en un ambiente seguro.
            </p>
          </div>

          <p>
            Te recomendamos iniciar con una <Link href="/evaluacion-fonoaudiologica-infantil-chillan" className="font-semibold text-rose-600">evaluación fonoaudiológica</Link> para descartar otras dificultades (como problemas auditivos) y armar un plan de rehabilitación lingüística.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20busco%20hora%20por%20retraso%20del%20lenguaje%20en%20Chill%C3%A1n">
              Agendar Terapia en Chillán
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
