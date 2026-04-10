import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fonoaudiólogo Pediátrico en Chillán | Especialista de Niños",
  description: "Tratamiento con fonoaudióloga pediátrica presencial en Chillán. Diagnósticos clínicos para niños en un ambiente amigable y seguro.",
  alternates: {
    canonical: "https://www.katialafono.cl/fonoaudiologo-pediatrico-chillan",
  },
};

export default function FonoaudiologoPediatricoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Katia La Fono - Fonoaudióloga Pediátrica",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chillán",
      "addressRegion": "Ñuble",
      "addressCountry": "CL"
    },
    "medicalSpecialty": "Pediatrics, SpeechTherapy",
    "availableService": [
      { "@type": "TherapeuticProcedure", "name": "Psicomotricidad Oral Infantil" },
      { "@type": "TherapeuticProcedure", "name": "Terapia de Lenguaje Infantil" }
    ],
    "description": "Fonoaudiología médica especializada de niños."
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
            { label: "Fonoaudiólogo Pediátrico en Chillán" },
          ]}
        />
        
        <article className="prose prose-fuchsia lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-fuchsia-950">
            Fonoaudiólogo Pediátrico en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            El trabajo clínico con niños es completamente diferente al del adulto. Un fonoaudiólogo pediátrico se especializa en las etapas de neurodesarrollo primario y en cómo el infante adquiere destrezas neuro-comunicativas y de motricidad oral.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-fuchsia-900">¿Por qué un especialista de niños?</h2>
            <p>
              El acercamiento terapéutico debe estar centrado en el juego. Si a un preescolar se le sienta en un escritorio y se le evalúa rígidamente, los resultados no serán fidedignos.
            </p>
            <ul>
              <li><strong>Manejo conductual:</strong> Sabemos cómo tratar a niños tímidos que demoran en entrar en confianza.</li>
              <li><strong>Descarte de TEA:</strong> Contamos con herramientas clínicas pediátricas para hacer diagnósticos diferenciales efectivos en caso de sospecha de Trastornos del Espectro Autista versus un <Link href="/tratamientos/retraso-del-lenguaje-chillan">retraso del lenguaje</Link>.</li>
              <li><strong>Trastornos de la Alimentación (Deglución y Lactancia):</strong> Abordaje de frenillo corto y su impacto en menores.</li>
            </ul>
          </section>

          <div className="bg-fuchsia-50 p-6 rounded-xl my-8 border border-fuchsia-100">
            <h3 className="text-xl font-bold text-fuchsia-900 mt-0">Consulta Presencial en Chillán</h3>
            <p className="text-fuchsia-800">
              Ofrecemos un espacio 100% acondicionado e interactivo en la ciudad de Chillán. Entendemos que las familias de la provincia de Ñuble necesitan atención pediátrica validada que resuelva problemas del ciclo <Link href="/evaluacion-fonoaudiologica-infantil-chillan">diagnóstico</Link> y el posterior tratamiento semanal.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20busco%20hora%20con%20Fonoaudi%C3%B3loga%20Pedi%C3%A1trica%20en%20Chill%C3%A1n" className="bg-fuchsia-600 hover:bg-fuchsia-700 ring-fuchsia-300">
              Agendar con Fono Pediátrica
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
