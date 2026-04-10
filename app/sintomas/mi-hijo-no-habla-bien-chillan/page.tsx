import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { ConcernCard } from "@/app/_components/ConcernCard";

export const metadata: Metadata = {
  title: "¿Mi Hijo No Habla Bien? Señales de Alerta | Fonoaudióloga Chillán",
  description: "Si tu hijo no habla bien para su edad, conoce cuándo preocuparte y cuándo consultar a una fonoaudióloga presencial en Chillán. Tips de alerta temprana.",
  alternates: {
    canonical: "https://www.katialafono.cl/sintomas/mi-hijo-no-habla-bien-chillan",
  },
};

export default function MiHijoNoHablaBienPage() {
  // Creating a dummy component inline since ConcernCard might not exist based on earlier check.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "¿Cuándo preocuparme si mi hijo no habla bien?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Señales de alerta incluyen pocas palabras a los 2 años, no armar frases a los 3, o si el niño se frustra al no darse a entender. Una evaluación a tiempo con fonoaudióloga pediátrica es clave."
      }
    }]
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
            { label: "Fonoaudiología Infantil", href: "/fonoaudiologia-infantil-chillan" },
            { label: "Señales de Alerta" },
          ]}
        />
        
        <article className="prose prose-amber lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-amber-950">
            ¿Mi hijo no habla bien? Señales para consultar fonoaudióloga en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            "Mi niño es muy regalón", "los niños son más flojitos para hablar"... Seguramente has escuchado estas frases. Sin embargo, no siempre es recomendable la postura de "ya hablará". Aquí evaluamos cuándo consultar por un <Link href="/tratamientos/retraso-del-lenguaje-chillan">retraso del lenguaje</Link>.
          </p>

          <div className="bg-amber-50 rounded-2xl p-8 my-10 border-l-4 border-amber-500">
            <h2 className="text-2xl font-bold mt-0 text-amber-900">Señales de Alerta Temprana</h2>
            <ul className="text-amber-800 space-y-3">
              <li><strong>De 18 a 24 meses:</strong> No dice palabras sueltas claras (mamá, agua, pan) ni señala lo que quiere de forma intencionada.</li>
              <li><strong>A los 2 años y medio:</strong> No está logrando juntar al menos 2 palabras (ej: "quiero pan").</li>
              <li><strong>De 3 años en adelante:</strong> Extraños no pueden entender más del 50% de lo que intenta decir, o su lenguaje parece "estancado".</li>
            </ul>
          </div>

          <section>
            <h3 className="text-2xl font-bold text-gray-900">El Rol de la Fonoaudióloga Pediátrica Local</h3>
            <p className="text-gray-700">
              Atenderte con un especialista presencial en <strong>Chillán</strong> nos permite evaluar no solo el número de palabras, sino su <em>intención comunicativa</em>, contacto visual y comprensión de rutinas. Usamos una técnica clínica lúdica para que tu pequeño participe activamente y sin sentirse presionado.
            </p>
          </section>

          <p>
            No dejes pasar el tiempo valioso de su neurodesarrollo. Una sesión inicial puede brindarte la tranquilidad de un diagnóstico o las pautas necesarias para estimularlo correctamente.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20me%20preocupa%20que%20mi%20hijo%20no%20habla%20bien.%20Necesito%20consulta%20en%20Chill%C3%A1n" className="bg-amber-600 hover:bg-amber-700 ring-amber-300">
              Despeja tus dudas agendando
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
