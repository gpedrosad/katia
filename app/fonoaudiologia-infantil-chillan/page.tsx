import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { ServiceCard } from "@/app/_components/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fonoaudióloga Infantil en Chillán | Especialista en Lenguaje",
  description: "Atención fonoaudiológica infantil en Chillán. Diagnóstico y tratamiento de trastornos del lenguaje, habla y comunicación. Evaluación presencial.",
  alternates: {
    canonical: "https://www.katialafono.cl/fonoaudiologia-infantil-chillan",
  },
};

export default function FonoaudiologiaInfantilPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Katia La Fono - Fonoaudióloga Infantil Chillán",
    "medicalSpecialty": "SpeechTherapy",
    "description": "Fonoaudióloga pediatra especializada en trastornos de lenguaje y habla en niñas y niños de Chillán.",
    "areaServed": "Chillán, Región de Ñuble",
    "url": "https://www.katialafono.cl/fonoaudiologia-infantil-chillan",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Fonoaudiología Infantil en Chillán" },
          ]}
        />

        <article className="prose prose-rose lg:prose-lg max-w-none">
          <header className="mb-12 rounded-3xl bg-rose-50 px-8 py-12 text-center text-rose-950">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Fonoaudióloga Infantil en Chillán
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-rose-800/80">
              Atención presencial especializada en la evaluación y tratamiento de problemas de comunicación, lenguaje y habla en niños de todas las edades.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20hora%20infantil%20en%20Chill%C3%A1n">
                📍 Agendar Hora en Chillán
              </WhatsAppCTA>
            </div>
          </header>

          <section className="my-12">
            <h2 className="text-3xl font-bold text-rose-900">Nuestros Tratamientos Destacados</h2>
            <p className="text-gray-700">Abordamos diversas áreas para potenciar al máximo las habilidades de los niños en su entorno familiar y escolar.</p>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard 
                title="Evaluación Fonoaudiológica"
                description="Diagnóstico preciso del desarrollo comunicativo."
                href="/evaluacion-fonoaudiologica-infantil-chillan"
                emoji="📋"
              />
              <ServiceCard 
                 title="Retraso del Lenguaje"
                 description="Estimulación temprana para niños que demoran en hablar."
                 href="/tratamientos/retraso-del-lenguaje-chillan"
                 emoji="🗣️"
              />
              <ServiceCard 
                 title="Trastorno Fonológico (TEL)"
                 description="Terapia estructurada para Trastornos Específicos del Lenguaje."
                 href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan"
                 emoji="🧠"
              />
              <ServiceCard 
                 title="Retraso del Habla"
                 description="Corrección y desarrollo de articulación y fluidez."
                 href="/tratamientos/retraso-del-habla-chillan"
                 emoji="👶"
              />
              <ServiceCard 
                 title="Dislalia Infantil"
                 description="Ayuda con niños que pronuncian mal ciertas letras (ej. R)."
                 href="/tratamientos/dislalia-infantil-chillan"
                 emoji="💬"
              />
            </div>
          </section>

          <section className="my-12 rounded-2xl border border-rose-100 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold text-rose-900">
              ¿Por qué elegir un fonoaudiólogo para niños en Chillán?
            </h3>
            <p className="text-gray-600">
              La atención presencial en <Link href="/fonoaudiologo-pediatrico-chillan" className="font-medium text-rose-600 hover:text-rose-800">especialistas pediátricos locales</Link> como nuestra consulta en Chillán, nos permite aplicar estrategias de juego guiado (Play Therapy) que necesitan del vínculo uno-a-uno. Entendemos el ritmo de descanso, los estímulos y acompañamos integralmente a la familia en Ñuble.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
