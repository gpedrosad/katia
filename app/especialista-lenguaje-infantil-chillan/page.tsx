import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Especialista en Lenguaje Infantil en Chillán | Fono Pediátrica",
  description: "Trata a tu hijo con un profesional idóneo. Especialista presencial en lenguaje y habla infantil en Chillán para estimular neurodesarrollo temprano.",
  alternates: {
    canonical: "https://www.katialafono.cl/especialista-lenguaje-infantil-chillan",
  },
};

export default function EspecialistaLenguajePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Physician",
      "name": "Katia La Fono",
      "jobTitle": "Fonoaudióloga Especialista en Lenguaje Infantil",
      "medicalSpecialty": "SpeechTherapy"
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
            { label: "Especialista de Lenguaje en Chillán" },
          ]}
        />
        
        <article className="prose prose-cyan lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-cyan-950">
            Especialista en Lenguaje Infantil en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            El lenguaje es la herramienta más importante de socialización del ser humano. Cuando hay "choques" en su adquisición, buscar la orientación de una <Link href="/fonoaudiologo-pediatrico-chillan" className="underline">especialista pediátrica</Link> te brindará un camino a seguir claro y clínico.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-cyan-900">¿Qué domina exactamente un especialista de lenguaje?</h2>
            <ul>
              <li><strong>Los Precursores:</strong> Comprendemos qué debe estar presente ANTES de que el niño forme palabras (atención compartida, contacto visual).</li>
              <li><strong>Desarrollo Semántico:</strong> Estimulamos la cantidad de conceptos y palabras que comprenden (vocabulario pasivo).</li>
              <li><strong>Intervención Morfosintáctica:</strong> Manejo en terapias para niños que <Link href="/tratamientos/retraso-del-lenguaje-chillan">juntan oraciones desordenadas o excesivamente cortas</Link>.</li>
              <li><strong>Diagnóstico Diferencial:</strong> Identificamos si es solo un retraso del habla, una <Link href="/tratamientos/dislalia-infantil-chillan">dislalia de articulación</Link> u otro factor primario.</li>
            </ul>
          </section>

          <div className="bg-cyan-50 p-6 rounded-xl my-8 border border-cyan-100 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-cyan-900 mt-0">Resultados Orientados</h3>
              <p className="text-cyan-800">
                La especialización nos permite optimizar las horas presenciales en <strong>Chillán</strong> para obtener ganancias reales en la inteligibilidad de tu hijo (que se entienda lo que él quiere comunicar, aminorando sus frustraciones y berrinches).
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20busco%20hora%20con%20Especialista%20en%20Lenguaje%20Infantil%20en%20Chill%C3%A1n" className="bg-cyan-600 hover:bg-cyan-700 ring-cyan-300">
              Conversar con Especialista
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
