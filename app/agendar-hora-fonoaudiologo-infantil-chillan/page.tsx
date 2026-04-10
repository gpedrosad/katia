import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulta Fonoaudióloga Infantil Chillán | Agendar Hora",
  description: "¡No dejes para el próximo año el desarrollo de tu hijo! Agenda ahora tu hora con fonoaudióloga presencial orientada a niños en Chillán, Ñuble.",
  alternates: {
    canonical: "https://www.katialafono.cl/agendar-hora-fonoaudiologo-infantil-chillan",
  },
};

export default function AgendarHoraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto de Fonoaudióloga Infantil Chillán",
    "description": "Página para agendar o pedir hora de consulta fonoaudiológica pediátrica.",
    "mainEntity": {
      "@type": "MedicalOrganization",
      "name": "Katia La Fono",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Reservaciones y Horas Médicas",
        "areaServed": "Chillán",
        "availableLanguage": "Spanish"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 text-center">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Agendar Hora Fonoaudióloga Infantil" },
          ]}
        />
        
        <article className="prose prose-rose lg:prose-lg max-w-none mx-auto">
          <h1 className="text-4xl font-extrabold text-rose-950">
            Consulta Fonoaudióloga Infantil Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            Agenda tu sesión presencial. Una consulta temprana puede cambiar rotundamente la adaptación social y éxito escolar de tu pequeño. No importa si vienes desde Chillán centro, San Carlos u otras comunas vecinas de Ñuble.
          </p>

          <div className="bg-rose-50 p-8 rounded-2xl my-10 border border-rose-100 shadow-sm max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mt-0 text-rose-900">Pasos para Agendar tu Hora</h2>
            <ul className="text-left text-rose-800 font-medium">
              <li>1. Escríbenos informando la edad del niño o niña.</li>
              <li>2. Describe brevemente el motivo ("<Link href="/sintomas/mi-hijo-no-habla-bien-chillan">no habla bien</Link>", "pide evaluación para el PIE del colegio", etc).</li>
              <li>3. Te ofreceremos alternativas de horario compatibles con la vida escolar.</li>
            </ul>
            
            <div className="mt-10 mb-4">
              <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20quisiera%20agendar%20una%20hora%20de%20fonoaudiolog%C3%ADa%20infantil%20en%20Chill%C3%A1n" className="text-xl px-10 py-6">
                Chatear y Agendar Hora
              </WhatsAppCTA>
            </div>
            <p className="text-sm text-rose-600 mt-2">Respuestas en horario hábil presencial.</p>
          </div>

          <section className="text-left mt-16 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900">Información sobre la Evaluación en Consulta</h3>
            <p>
              Toda intervención inicia invariablemente por una <Link href="/evaluacion-fonoaudiologica-infantil-chillan">evaluación fonoaudiológica pormenorizada</Link>. En caso de que tú o el profesor sospechen de alguna condición como Tel, Disfasia, <Link href="/tratamientos/retraso-del-lenguaje-chillan">retrasos en la comprensión</Link>, prepararemos baterías evaluativas estandarizadas aplicables presencialmente.
            </p>
          </section>

        </article>
      </main>
    </>
  );
}
