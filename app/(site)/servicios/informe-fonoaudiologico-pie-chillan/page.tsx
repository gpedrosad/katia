import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

const faqItems = [
  {
    question: "¿Para qué sirve un informe fonoaudiológico PIE?",
    answer:
      "Documenta diagnóstico, áreas afectadas y plan de intervención para ingresar o mantener apoyos en el Programa de Integración Escolar o postular a escuela de lenguaje en Chillán y Ñuble.",
  },
  {
    question: "¿Cuánto demora la evaluación e informe?",
    answer:
      "La evaluación presencial dura aproximadamente 60 minutos con test estandarizados (TEPROSIF-R, TECAL, STSG según corresponda). El informe escrito se entrega en plazo acordado en consulta.",
  },
  {
    question: "¿Es obligatorio un diagnóstico formal?",
    answer:
      "Para PIE y escuelas de lenguaje se requiere evaluación con test y diagnóstico fonoaudiológico. La ASHA estima que ~7% de niños en edad escolar presentan trastornos del lenguaje; documentarlo facilita acceso a apoyos. Fuente: https://www.asha.org/public/speech/disorders/language-disorders/",
  },
];

export const metadata = buildPageMetadata({
  path: "/servicios/informe-fonoaudiologico-pie-chillan",
  title: "Informe Fonoaudiológico para PIE y Escuelas de Lenguaje | Chillán",
  description:
    "Informes fonoaudiológicos válidos para Programa de Integración Escolar (PIE) y postulación a escuelas de lenguaje en Chillán. Diagnóstico con test estandarizados.",
});

export default function InformePiePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Informe Fonoaudiológico para PIE",
    description:
      "Elaboración de informes fonoaudiológicos con test estandarizados (TEPROSIF-R, TECAL, STSG) válidos para ingresar al Programa de Integración Escolar y escuelas de lenguaje en la comuna de Chillán.",
    provider: {
      "@type": "Person",
      name: "Katia Domínguez",
      jobTitle: "Fonoaudióloga",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chillán",
        addressRegion: "Ñuble",
        addressCountry: "CL",
      },
    },
    areaServed: "Chillán, Región de Ñuble",
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
            { label: "Servicios", href: "/fonoaudiologa-ninos-chillan" },
            { label: "Informe PIE" },
          ]}
        />

        <article className="prose prose-violet lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-violet-950">
            Informe Fonoaudiológico para PIE y Escuelas de Lenguaje en Chillán
          </h1>
          <p className="lead font-medium text-gray-700" data-speakable>
            ¿El colegio o jardín infantil te pidió un informe fonoaudiológico
            para ingresar al <strong>Programa de Integración Escolar (PIE)</strong>{" "}
            o postular a una <strong>escuela de lenguaje</strong>? Realizamos
            evaluaciones con los test estandarizados exigidos por el Ministerio
            de Educación.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-violet-900">
              ¿Qué incluye nuestro informe?
            </h2>
            <ul>
              <li>
                <strong>Anamnesis completa:</strong> Entrevista a los padres
                sobre historia del desarrollo comunicativo del niño.
              </li>
              <li>
                <strong>Evaluación clínica directa:</strong> Aproximadamente{" "}
                <strong>60 minutos</strong> de evaluación presencial.
              </li>
              <li>
                <strong>Test estandarizados:</strong> Aplicación de TEPROSIF-R,
                TECAL y/o STSG según corresponda.
              </li>
              <li>
                <strong>Diagnóstico fonoaudiológico:</strong> Descripción
                detallada de las áreas afectadas (fonológica, semántica,
                morfosintáctica, pragmática).
              </li>
              <li>
                <strong>Plan de intervención:</strong> Objetivos terapéuticos y
                frecuencia sugerida de sesiones.
              </li>
            </ul>
          </section>

          <div className="bg-violet-50 p-6 rounded-xl my-8 border border-violet-100">
            <h3 className="text-xl font-bold text-violet-900 mt-0">
              Válido para el sistema educativo chileno
            </h3>
            <p className="text-violet-800">
              Los informes que elaboramos en <strong>Chillán</strong> cumplen
              con los requisitos del Decreto 170 del Ministerio de Educación.
              Son aceptados por colegios con PIE en toda la comuna de Chillán,
              San Carlos, Bulnes y Coihueco, así como para la postulación a
              escuelas de lenguaje de la región de Ñuble.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-violet-900">
              ¿Cuándo se necesita este informe?
            </h2>
            <ul>
              <li>
                Cuando el colegio sugiere ingreso al PIE por dificultades de
                lenguaje o{" "}
                <Link
                  href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan"
                  className="font-semibold text-violet-600"
                >
                  TEL
                </Link>
                .
              </li>
              <li>
                Para postular a una escuela de lenguaje (requiere diagnóstico
                formal).
              </li>
              <li>
                Cuando el pediatra solicita{" "}
                <Link
                  href="/servicios/evaluacion-fonoaudiologica"
                  className="font-semibold text-violet-600"
                >
                  evaluación fonoaudiológica
                </Link>{" "}
                por sospecha de retraso.
              </li>
              <li>
                Para iniciar o renovar beneficios de apoyo escolar en
                establecimientos de la comuna de Chillán.
              </li>
            </ul>
          </section>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-violet-100 bg-violet-50/40 p-8"
          />

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              message="Hola, necesito un informe fonoaudiológico para PIE en Chillán"
              className="bg-violet-600 hover:bg-violet-700 ring-violet-300"
            >
              Solicitar Informe PIE
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
