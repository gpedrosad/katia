import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/voz-online/evaluacion-vocal-online",
  title: "Evaluación vocal online para adultos: qué incluye",
  description:
    "Qué incluye la evaluación vocal online: historia de tu voz, cómo suena, pruebas e informe con plan. Adultos, por videollamada en todo Chile.",
  keywords: [
    "evaluación vocal online",
    "diagnóstico de voz",
    "fonoaudióloga especialista en voz",
    "evaluación fonoaudiológica voz",
    "análisis vocal Chile",
  ],
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
  {
    question: "¿Cuánto dura una evaluación vocal?",
    answer:
      "La duración varía según el caso. Incluye historia clínica, pruebas de voz, análisis en vivo y devolución de resultados con recomendaciones iniciales.",
  },
  {
    question: "¿Necesito tener diagnóstico otorrino antes de la evaluación?",
    answer:
      "No es obligatorio. La evaluación fonoaudiológica identifica patrones de uso vocal. Si se sospecha lesión estructural, se sugiere nasofibrolaringoscopía con otorrinolaringólogo.",
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

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Evaluación vocal online para adultos: qué incluye",
    dateModified: "2026-10-30",
    description:
      "Qué incluye la evaluación vocal online: historia de tu voz, cómo suena, pruebas e informe con plan. Adultos, por videollamada en todo Chile.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
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
            ¿Qué incluye la evaluación vocal online?
          </h1>
          <div className="not-prose my-6 rounded-2xl border-2 border-violet-200 bg-violet-50 p-5">
            <p className="text-lg font-semibold text-violet-950" data-speakable>
              <strong>Respuesta rápida:</strong> Una evaluación vocal online
              incluye anamnesis, análisis perceptual (GRBAS o CAPE-V), registro
              acústico, pruebas funcionales (tiempos máximos de fonación y
              relación s/z) e informe con plan de tratamiento. Se hace por
              videollamada en todo Chile.
            </p>
          </div>
          <p className="lead font-medium text-gray-700">
            Es el primer paso para entender qué le pasa a tu voz, con protocolos
            clínicos, sin que tengas que trasladarte.
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
            <p>
              Si la queja es ronquera, parte por{" "}
              <Link href="/voz-online/voz-ronca-causas-tratamiento" className="font-semibold text-violet-700">
                voz ronca: causas y qué hacer
              </Link>
              . Si se agota al hablar,{" "}
              <Link href="/voz-online/fatiga-vocal-tratamiento-online" className="font-semibold text-violet-700">
                fatiga vocal
              </Link>
              . Si hay un diagnóstico de nódulos,{" "}
              <Link href="/voz-online/nodulos-vocales-tratamiento-online" className="font-semibold text-violet-700">
                tratamiento de nódulos
              </Link>
              . Qué pasa después de esa primera videollamada está en{" "}
              <Link href="/voz-online/como-es-la-sesion-de-voz-online" className="font-semibold text-violet-700">
                cómo es la sesión de voz online
              </Link>
              . El mapa del servicio está en{" "}
              <Link href="/voz-online/fonoaudiologa-de-voz-online" className="font-semibold text-violet-700">
                terapia de voz online
              </Link>
              . Si te quedaste sin voz, parte por{" "}
              <Link href="/voz-online/afonia-perdi-la-voz" className="font-semibold text-violet-700">
                afonía
              </Link>
              . Los{" "}
              <Link href="/voz-online/ejercicios-para-la-voz" className="font-semibold text-violet-700">
                ejercicios para la voz
              </Link>{" "}
              van después de esta evaluación. Si das clases, está la{" "}
              <Link href="/voz-online/terapia-vocal-docentes-profesores" className="font-semibold text-violet-700">
                terapia vocal para docentes
              </Link>
              .
            </p>
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
