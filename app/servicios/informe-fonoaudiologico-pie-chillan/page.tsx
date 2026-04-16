import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Informe Fonoaudiológico para PIE y Escuelas de Lenguaje | Chillán",
  description:
    "Informes fonoaudiológicos válidos para Programa de Integración Escolar (PIE) y postulación a escuelas de lenguaje en Chillán. Diagnóstico con test estandarizados.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/servicios/informe-fonoaudiologico-pie-chillan",
  },
};

export default function InformePiePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Informe Fonoaudiológico para PIE",
    description:
      "Elaboración de informes fonoaudiológicos con test estandarizados (TEPROSIF-R, TECAL, STSG) válidos para ingresar al Programa de Integración Escolar y escuelas de lenguaje en la comuna de Chillán.",
    provider: {
      "@type": "MedicalOrganization",
      name: "Katia La Fono - Fonoaudióloga Infantil Chillán",
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
            { label: "Servicios", href: "/fonoaudiologia-infantil-chillan" },
            { label: "Informe PIE" },
          ]}
        />

        <article className="prose prose-violet lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-violet-950">
            Informe Fonoaudiológico para PIE y Escuelas de Lenguaje en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
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
                  href="/evaluacion-fonoaudiologica-infantil-chillan"
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

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20necesito%20un%20informe%20fonoaudiol%C3%B3gico%20para%20PIE%20en%20Chill%C3%A1n"
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
