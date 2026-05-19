import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/voz-online/evaluacion-vocal-online",
  title: "Evaluación Vocal Online | Diagnóstico de Voz Chile",
  description:
    "Evaluación fonoaudiológica de la voz online para adultos en todo Chile. Análisis acústico, perceptual y funcional de tu voz desde tu hogar.",
});

const faqItems = [
  {
    question: "¿Qué incluye una evaluación vocal online?",
    answer:
      "Anamnesis vocal, análisis perceptual (GRBAS/CAPE-V), registro acústico, pruebas funcionales (tiempos máximos de fonación, relación s/z) e informe con plan de tratamiento.",
  },
  {
    question: "¿Necesito equipamiento especial?",
    answer:
      "Solo un dispositivo con cámara, micrófono de buena calidad y conexión estable. Se solicitan grabaciones de voz en un ambiente silencioso siguiendo instrucciones del protocolo.",
  },
  {
    question: "¿La evaluación online es válida clínicamente?",
    answer:
      "Sí para adultos con trastornos funcionales de la voz. La literatura de telefonoaudiología respalda evaluación perceptiva y acústica remota; si se sospecha lesión orgánica, se deriva a nasofibrolaringoscopía.",
  },
];

export default function EvaluacionVocalOnlinePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    name: "Evaluación Vocal Online",
    description:
      "Evaluación fonoaudiológica completa de la voz que incluye análisis perceptual, acústico y funcional a través de teleconsulta.",
    usedToDiagnose: {
      "@type": "MedicalCondition",
      name: "Trastornos de la Voz",
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
            { label: "Evaluación Vocal" },
          ]}
        />

        <article className="prose prose-violet lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-violet-950">
            Evaluación Vocal Online: Diagnóstico de Voz para Todo Chile
          </h1>
          <p className="lead font-medium text-gray-700" data-speakable>
            Una evaluación vocal completa es el primer paso para entender qué le
            pasa a tu voz. Realizamos diagnósticos fonoaudiológicos por
            videollamada con protocolos clínicos validados, sin necesidad de
            trasladarte.
          </p>
          <p className="not-prose my-4 rounded-xl border border-violet-200 bg-violet-50/80 p-4 text-sm text-violet-900">
            <strong>Dato:</strong> Revisiones sistemáticas reportan concordancia
            aceptable entre evaluación vocal presencial y por teleconsulta en
            adultos para parámetros perceptivos y acústicos.
            <cite className="mt-1 block text-xs text-violet-700 not-italic">
              Fuente:{" "}
              <a
                href="https://www.asha.org/practice/telepractice/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-violet-900"
              >
                ASHA — Telepractice
              </a>
              , literatura de telefonoaudiología en trastornos de la voz
              (revisión de estudios clínicos, 2015–2024).
            </cite>
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-violet-900">
              ¿Qué incluye nuestra evaluación vocal online?
            </h2>
            <ul>
              <li>
                <strong>Anamnesis vocal:</strong> Historia clínica detallada
                sobre hábitos vocales, entorno laboral, síntomas y antecedentes
                médicos (reflujo, cirugías, medicación).
              </li>
              <li>
                <strong>Análisis perceptual (GRBAS / CAPE-V):</strong>{" "}
                Evaluación auditiva profesional de la calidad vocal: grado de
                ronquera, soplosidad, tensión y estabilidad.
              </li>
              <li>
                <strong>Análisis acústico:</strong> Medición de parámetros como
                frecuencia fundamental, jitter, shimmer e intensidad usando
                software especializado.
              </li>
              <li>
                <strong>Evaluación funcional:</strong> Tiempos máximos de
                fonación, relación s/z, coordinación fonorrespiratoria y uso
                vocal en contexto real.
              </li>
              <li>
                <strong>Informe y plan:</strong> Documento con diagnóstico
                fonoaudiológico y plan de intervención personalizado.
              </li>
            </ul>
          </section>

          <div className="bg-violet-50 p-6 rounded-xl my-8 border border-violet-100">
            <h3 className="text-xl font-bold text-violet-900 mt-0">
              ¿Es confiable una evaluación vocal por videollamada?
            </h3>
            <p className="text-violet-800">
              Sí. La literatura científica internacional respalda la
              telefonoaudiología para evaluación de voz en adultos. Utilizamos
              protocolos estandarizados, grabaciones de alta calidad y software
              de análisis acústico. Si el cuadro clínico lo requiere, te
              derivaremos a un otorrinolaringólogo para una nasofibrolaringoscopía
              complementaria.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-violet-900">
              ¿Cuándo solicitar una evaluación vocal?
            </h2>
            <ul>
              <li>
                Tu voz ha cambiado: suena ronca, áspera o soplada y no mejora
                tras 2-3 semanas.
              </li>
              <li>
                Sientes{" "}
                <Link
                  href="/voz-online/fatiga-vocal-tratamiento-online"
                  className="font-semibold text-violet-600"
                >
                  cansancio al hablar
                </Link>{" "}
                o dolor/tensión en el cuello al final del día.
              </li>
              <li>
                Te diagnosticaron{" "}
                <Link
                  href="/voz-online/nodulos-vocales-tratamiento-online"
                  className="font-semibold text-violet-600"
                >
                  nódulos vocales
                </Link>{" "}
                y necesitas una opinión fonoaudiológica.
              </li>
              <li>
                Eres docente, cantante o profesional de la voz y quieres un
                chequeo preventivo.
              </li>
            </ul>
          </section>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-violet-100 bg-violet-50/40 p-8"
          />

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              message="Hola, necesito una evaluación vocal online"
              className="bg-violet-600 hover:bg-violet-700 ring-violet-300"
            >
              Agendar Evaluación Vocal Online
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
