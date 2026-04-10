import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratamiento Trastorno Fonológico en Chillán | Fonoaudióloga",
  description: "Terapias fonoaudiológicas para Trastornos Fonológicos en niños en Chillán. Cuando el habla es ininteligible y altera sus palabras. Agenda presencial.",
  alternates: {
    canonical: "https://www.katialafono.cl/tratamientos/trastorno-fonologico-chillan",
  },
};

export default function TrastornoFonologicoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Tratamiento de Trastorno Fonológico Chillán",
    "medicalSpecialty": "SpeechTherapy",
    "about": {
      "@type": "MedicalCondition",
      "name": "Trastorno Fonológico",
      "description": "Dificultad de origen lingüístico para organizar los sonidos de las palabras."
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
            { label: "Tratamientos", href: "/fonoaudiologia-infantil-chillan" },
            { label: "Trastorno Fonológico" },
          ]}
        />
        
        <article className="prose prose-orange lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-orange-950">
            Tratamiento del Trastorno Fonológico en Niños (Chillán)
          </h1>
          <p className="lead font-medium text-gray-700">
            A diferencia de la <Link href="/tratamientos/dislalia-infantil-chillan">dislalia regular</Link> (donde no saben decir una letra), en el <strong>Trastorno Fonológico</strong> el niño sí puede decir todas las letras, pero su cerebro "las desordena" al organizarlas mentalmente en una palabra larga o frase.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-orange-900">¿Cómo suena el Trastorno Fonológico?</h2>
            <p>
              Seguro has escuchado a tu hijo decir cosas simpáticas como "tobota" por bota, o "pelo" en vez de perro (asimilaciones, omisiones). Cuando estos procesos de simplificación de las palabras persisten más allá de la edad esperada, <Link href="/sintomas/nino-pronuncia-mal-chillan">volviendo su discurso ininteligible</Link> gran parte del tiempo sin que exista un problema físico, estamos frente a un trastorno fonológico.
            </p>
          </section>

          <div className="bg-orange-50 p-6 rounded-xl my-8 border border-orange-100">
            <h3 className="text-xl font-bold text-orange-900 mt-0">Nuestra Intervención Clínica Presencial</h3>
            <p className="text-orange-800">
              En nuestra consulta en <strong>Chillán</strong>, llevamos a cabo abordajes terapéuticos de Conciencia Fonológica. Ayudamos al niño a discriminar auditivamente qué sonido está cambiando, para que lo integre mentalmente. Usamos juegos de segmentación silábica, rimas y minimal pairs (pares mínimos de palabras) muy visuales.
            </p>
          </div>

          <p>
            Al tener un diagnóstico preciso (tras pruebas formales como TEPROSIF-R), descartaremos si esto es una etapa o si estamos derechamente ante un subtipo de <Link href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan">Trastorno Específico del Lenguaje (TEL) Mixto o Expresivo</Link>.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20busco%20ayuda%20por%20trastorno%20fonol%C3%B3gico%20en%20Chill%C3%A1n" className="bg-orange-600 hover:bg-orange-700 ring-orange-300">
              Solicitar Hora para Terapia
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
