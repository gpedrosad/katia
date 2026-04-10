import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Evaluación Fonoaudiológica Infantil en Chillán | Test de Lenguaje",
  description: "¿Necesitas una evaluación fonoaudiológica para tu hijo en Chillán? Realizamos diagnósticos de trastornos del lenguaje y habla.",
  alternates: {
    canonical: "https://www.katialafono.cl/evaluacion-fonoaudiologica-infantil-chillan",
  },
};

export default function EvaluacionFonoaudiologicaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Evaluación Fonoaudiológica Infantil en Chillán",
    "description": "Exámenes y diagnósticos del habla y lenguaje en niños",
    "specialty": "SpeechTherapy",
    "about": {
      "@type": "MedicalTest",
      "name": "Evaluación Clínica Fonoaudiológica"
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
            { label: "Evaluación Fonoaudiológica", href: "/evaluacion-fonoaudiologica-infantil-chillan" },
          ]}
        />
        
        <article className="prose prose-rose lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-rose-950 sm:text-5xl">
            Evaluación Fonoaudiológica Infantil en Chillán
          </h1>
          <p className="lead text-xl text-gray-700">
            Un diagnóstico a tiempo es clave para el éxito escolar y comunicativo de tu hijo. Realizamos test completos de lenguaje y habla presenciales en Chillán.
          </p>

          <div className="my-8 rounded-2xl bg-blue-50 p-6">
            <h2 className="text-2xl font-bold text-blue-900 mt-0">¿Qué incluye nuestra evaluación?</h2>
            <ul className="text-blue-800">
              <li><strong>Entrevista a padres:</strong> Recopilamos antecedentes del desarrollo hasta la fecha.</li>
              <li><strong>Aplicación de test estandarizados:</strong> Pruebas específicas para el lenguaje comprensivo y expresivo.</li>
              <li><strong>Evaluación mediante el juego:</strong> Clave para niños pequeños para evaluar en contextos naturales.</li>
              <li><strong>Entrega de Informe:</strong> Válido para colegios, escuelas de lenguaje (PIE) y pediatras.</li>
            </ul>
          </div>

          <p>
            Si has notado que <a href="/sintomas/mi-hijo-no-habla-bien-chillan" className="font-semibold text-rose-600 hover:text-rose-800">tu hijo no habla igual que sus pares</a> o le cuesta darse a entender, no lo dejes pasar. Las evaluaciones fonoaudiológicas que ejecutamos en nuestra consulta en Chillán buscan despejar dudas con criterios clínicos y pautas certificadas.
          </p>

          <div className="mt-12 text-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20quisiera%20agendar%20una%20evaluaci%C3%B3n%20fonoaudiol%C3%B3gica%20en%20Chill%C3%A1n">
              Agendar Evaluación Diagnóstica
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
