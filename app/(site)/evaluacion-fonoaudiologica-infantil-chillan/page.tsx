import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const CANONICAL_PATH = "/servicios/evaluacion-fonoaudiologica";

const faqItems = [
  {
    question: "¿A qué edad conviene evaluar el lenguaje de mi hijo en Chillán?",
    answer:
      "Si hay dudas antes de los 3 años (pocas palabras, no sigue instrucciones simples) o el colegio/pediatra lo solicita, conviene evaluar. Una sesión diagnóstica de unos 60 minutos define si hay retraso, trastorno o variación normal.",
  },
  {
    question: "¿Qué test de lenguaje se aplican en la evaluación?",
    answer:
      "Según edad y motivo usamos baterías estandarizadas como TEPROSIF-R, TECAL y STSG, además de observación clínica mediante el juego. Los resultados se comparan con rangos etarios (puntajes Z).",
  },
  {
    question: "¿El informe sirve para el PIE o escuela de lenguaje?",
    answer:
      "Sí. Entregamos informe fonoaudiológico detallado válido para Programa de Integración Escolar (PIE), postulación a escuelas de lenguaje y derivaciones pediátricas en Chillán y Ñuble.",
  },
  {
    question: "¿Cuántos niños tienen trastornos del lenguaje?",
    answer:
      "La ASHA estima que los trastornos del lenguaje afectan aproximadamente al 7% de los niños en edad escolar; por eso conviene no postergar la evaluación si hay señales persistentes. Fuente: https://www.asha.org/public/speech/disorders/language-disorders/",
  },
];

export const metadata = buildPageMetadata({
  path: "/evaluacion-fonoaudiologica-infantil-chillan",
  canonicalPath: "/servicios/evaluacion-fonoaudiologica",
  title: "Evaluación Fonoaudiológica Infantil en Chillán | Test de Lenguaje",
  description:
    "¿Necesitas una evaluación fonoaudiológica para tu hijo en Chillán? Realizamos diagnósticos de trastornos del lenguaje y habla.",
});

export default function EvaluacionFonoaudiologicaPage() {
  const jsonLd = {
    ...buildWebPageJsonLd({
      path: CANONICAL_PATH,
      name: "Evaluación Fonoaudiológica Infantil en Chillán",
      description: "Exámenes y diagnósticos del habla y lenguaje en niños",
    }),
    "@type": "MedicalWebPage",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "MedicalTest",
      name: "Evaluación Clínica Fonoaudiológica",
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
            { label: "Evaluación Fonoaudiológica", href: "/evaluacion-fonoaudiologica-infantil-chillan" },
          ]}
        />
        
        <article className="prose prose-rose lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-rose-950 sm:text-5xl">
            Evaluación Fonoaudiológica Infantil en Chillán
          </h1>
          <p className="lead text-xl text-gray-700" data-speakable>
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

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-blue-100 bg-blue-50/40 p-8"
          />

          <div className="mt-12 text-center">
            <WhatsAppCTA message="Hola, quisiera agendar una evaluación fonoaudiológica en Chillán">
              Agendar Evaluación Diagnóstica
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
