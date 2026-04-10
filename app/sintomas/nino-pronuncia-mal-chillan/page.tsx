import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Niño Pronuncia Mal | Terapia Fonoaudiológica en Chillán",
  description: "¿Tu hijo no pronuncia bien ciertas letras o palabras enteras? Entiende las causas y cómo solucionarlas con ayuda fonoaudiológica local en Chillán.",
  alternates: {
    canonical: "https://www.katialafono.cl/sintomas/nino-pronuncia-mal-chillan",
  },
};

export default function NinoPronunciaMalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "¿Por qué mi hijo pronuncia mal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puede deberse a inmadurez de los órganos articulatorios (el niño no sabe acomodar la lengua), frenillo corto, o simplemente no haber internalizado el sonido (dislalia). Se recomienda evaluación desde los 4 años si el lenguaje es ininteligible."
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
            { label: "Fonoaudiología", href: "/fonoaudiologia-infantil-chillan" },
            { label: "Problemas de Pronunciación" },
          ]}
        />
        
        <article className="prose prose-emerald lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-emerald-950">
            ¿Tu hijo pronuncia mal algunas letras o palabras completas?
          </h1>
          <p className="lead font-medium text-gray-700">
            El desarrollo fonológico tiene tiempos esperables. Por ejemplo, es totalmente normal que un niño de 3 años no digas la "RR" fuerte. Sin embargo, si otras personas (e incluso tú) tienen que pedirle constantemente que repita lo que dice después de los 4 años, es motivo de consulta.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-emerald-900">Causas frecuentes de la mala pronunciación infantil</h2>
            <ul>
              <li><strong><Link href="/tratamientos/dislalia-infantil-chillan">Dislalias</Link>:</strong> Inmadurez o mal punto articulatorio (poner mal la lengua).</li>
              <li><strong>Frenillo lingual corto:</strong> Impide físicamente la correcta elevación de la lengua.</li>
              <li><strong>Inmadurez auditiva:</strong> Le cuesta "discriminar" cómo suena una palabra.</li>
              <li><strong><Link href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan">TEL (Trastorno Fonológico)</Link>:</strong> Puede ser parte de un trastorno más profundo.</li>
            </ul>
          </section>

          <div className="bg-emerald-50 p-6 rounded-xl my-8 border border-emerald-100">
            <h3 className="text-xl font-bold text-emerald-900 mt-0">Solución Fonoaudiológica en Chillán</h3>
            <p className="text-emerald-800">
              Atendemos de forma particular en <strong>Chillán</strong> entregando pautas concretas para trabajar estos "vicios" de pronunciación. Muchas veces bastan sesiones estructuradas enseñando frente a un espejo y automatizando repeticiones juguetonas en casa para cambiar esos malos hábitos.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20mi%20hijo%20pronuncia%20mal%20y%20busco%20fonoaudi%C3%B3loga%20en%20Chill%C3%A1n" className="bg-emerald-600 hover:bg-emerald-700 ring-emerald-300">
              Evaluemos su pronunciación hoy
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
