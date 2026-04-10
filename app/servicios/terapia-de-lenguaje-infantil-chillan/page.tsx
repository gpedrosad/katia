import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terapia de Lenguaje Infantil en Chillán | Fonoaudióloga",
  description: "Sesiones presenciales de terapia de lenguaje para niños en Chillán. Estimulación, juegos y corrección fonológica con especialista pediátrica.",
  alternates: {
    canonical: "https://www.katialafono.cl/servicios/terapia-de-lenguaje-infantil-chillan",
  },
};

export default function TerapiaLenguajePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Terapia de Lenguaje Infantil",
    "description": "Intervención clínica fonoaudiológica para desarrollar habilidades comprensivas y expresivas en niños.",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Fonoaudióloga Infantil Chillán",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chillán"
      }
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
            { label: "Servicios", href: "/fonoaudiologia-infantil-chillan" },
            { label: "Terapia de Lenguaje Infantil" },
          ]}
        />
        
        <article className="prose prose-pink lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-pink-950">
            Terapia de Lenguaje Infantil en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            La terapia de lenguaje no es "dar clases de cómo hablar". Es una intervención neurológica y sensorial estructurada a través del juego, diseñada para que los pequeños de la casa interactúen mejor con su entorno.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-pink-900">¿Qué logramos en la terapia presencial?</h2>
            <p>
              Ubicados en <strong>Chillán</strong>, trabajamos de manera presencial para lograr avances sólidos que el formato online muchas veces no permite con los niños más pequeños. Nos enfocamos en:
            </p>
            <ul>
              <li><strong>Estimulación Temprana:</strong> Potenciar la aparición de las primeras palabras en casos de <Link href="/tratamientos/retraso-del-lenguaje-chillan">retraso primario</Link>.</li>
              <li><strong>Estructuración de Oraciones:</strong> Lograr que pasen de decir palabras sueltas a armar frases complejas y contar historias.</li>
              <li><strong>Comprensión:</strong> Mejorar la capacidad de seguir instrucciones, vital para la etapa parvularia y escolar.</li>
            </ul>
          </section>

          <div className="bg-pink-50 p-6 rounded-xl my-8 border border-pink-100">
            <h3 className="text-xl font-bold text-pink-900 mt-0">La importancia del Involucramiento Familiar</h3>
            <p className="text-pink-800">
              Una hora semanal en la consulta ayuda mucho, pero los verdaderos terapeutas son los padres en casa. Al finalizar cada sesión, entregamos estrategias concretas (sin presionar al niño) para que el aprendizaje se lleve al día a día.
            </p>
          </div>

          <p>
            Cada plan de intervención se adapta a la realidad neurológica y familiar de tu hijo, siempre partiendo por una evaluación clínica objetiva.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20busco%20informaci%C3%B3n%20sobre%20terapia%20de%20lenguaje%20en%20Chill%C3%A1n" className="bg-pink-600 hover:bg-pink-700 ring-pink-300">
              Consultar por Terapia Infantil
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
