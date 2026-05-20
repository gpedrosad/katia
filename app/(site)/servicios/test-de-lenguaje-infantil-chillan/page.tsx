import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

const faqItems = [
  {
    question: "¿Cuándo el colegio pide un test de lenguaje?",
    answer:
      "Suele solicitarse si hay retraso expresivo o comprensivo, dificultades para seguir instrucciones o postulación a apoyos PIE o escuela de lenguaje. La evaluación objetiva con test estandarizados aclara el diagnóstico.",
  },
  {
    question: "¿Qué test se aplican en Chillán?",
    answer:
      "Según edad y motivo: TEPROSIF-R (fonología), TECAL (comprensión y vocabulario) y STSG (gramática). Los puntajes se comparan con rangos etarios chilenos.",
  },
  {
    question: "¿Los resultados sirven para el sistema educativo?",
    answer:
      "Sí. El informe posterior es válido para PIE y escuelas de lenguaje. La ASHA estima que los trastornos del lenguaje afectan ~7% de escolares; detectarlos a tiempo facilita apoyos escolares. Fuente: https://www.asha.org/public/speech/disorders/language-disorders/",
  },
];

export const metadata = buildPageMetadata({
  path: "/servicios/test-de-lenguaje-infantil-chillan",
  title: "Test de Lenguaje para Niños en Chillán | Evaluación Formal",
  description:
    "Aplicación de test de lenguaje formales e informales en Chillán (TEPROSIF-R, TECAL, STSG). Evaluaciones requisito para escuelas de lenguaje.",
});

export default function TestLenguajePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Test de Lenguaje Infantil",
    "purpose": "Screening and diagnosis of speech and language disorders in children.",
    "hospitalAffiliation": "Colegios y Escuelas de Lenguaje en Chillán"
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
            { label: "Evaluación", href: "/servicios/evaluacion-fonoaudiologica" },
            { label: "Test de Lenguaje" },
          ]}
        />
        
        <article className="prose prose-violet lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-violet-950">
            Aplicación de Test de Lenguaje Infantil en Chillán
          </h1>
          <p className="lead font-medium text-gray-700" data-speakable>
            ¿El colegio, jardín infantil o control sano pediatra te pidió "evaluar el lenguaje" de tu hijo? Llevamos a cabo baterías de test estandarizados en Chile exigidos por el Ministerio de Educación.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-violet-900">¿Qué evaluamos exactamente de forma presencial?</h2>
            <p>
              No basta con saber si el menor <Link href="/sintomas/mi-hijo-no-habla-bien-chillan">"habla o no habla"</Link>. Se deben medir diferentes dimensiones lingüísticas usando pruebas objetivas con puntajes comparados por rango de edad (Z-score).
            </p>
            <ul>
              <li><strong>Test TEPROSIF-R:</strong> Mide los procesos fonológicos (cómo ordena los sonidos el cerebro).</li>
              <li><strong>Test TECAL:</strong> Evalúa la comprensión del vocabulario y gramática (cuánto entiende).</li>
              <li><strong>Test STSG (Screening Test of Spanish Grammar):</strong> Analiza la sintaxis comprensiva y expresiva (cómo forma las oraciones).</li>
            </ul>
          </section>

          <div className="bg-violet-50 p-6 rounded-xl my-8 border border-violet-100">
            <h3 className="text-xl font-bold text-violet-900 mt-0">Entrega de Informes Pediátricos en Chillán</h3>
            <p className="text-violet-800">
              Tras aplicar los test de lenguaje en nuestra consulta, generamos un <strong>Informe Fonoaudiológico detallado</strong>. Este documento es válido para entregar en el colegio (por ingresos al Programa de Integración Escolar PIE) o para postulación a Escuelas de Lenguaje regulares en la comuna de Chillán y alrededores.
            </p>
          </div>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-violet-100 bg-violet-50/40 p-8"
          />

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA message="Hola, necesito aplicar un test de lenguaje para mi hijo en Chillán" className="bg-violet-600 hover:bg-violet-700 ring-violet-300">
              Agendar Test de Lenguaje
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
