import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mi hijo habla poco para su edad | Cuándo evaluar en Chillán",
  description: "Si consideras que tu hijo o hija habla muy poco para la edad que tiene respecto a sus compañeros, te orientamos. Consulta pediátrica fonoaudiológica en Chillán.",
  alternates: {
    canonical: "https://www.katialafono.cl/sintomas/hijo-habla-poco-edad-chillan",
  },
};

export default function HablaPocoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Hijo habla poco para su edad",
    "description": "Artículos informativos sobre el nivel de vocabulario de niños preescolares."
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
            { label: "Habla Poco" },
          ]}
        />
        
        <article className="prose prose-indigo lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-indigo-950">
            ¿Sientes que tu hijo habla poco para su edad?
          </h1>
          <p className="lead font-medium text-gray-700">
            Las comparaciones pueden ser odiosas, pero como padres tenemos instinto. Si en el jardín o pre-kínder notas que mientras otros niños cuentan historias largas, el tuyo usa un vocabulario sumamente reducido, es un síntoma a considerar.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-indigo-900">Mitos frecuentes vs Realidad</h2>
            <p>
              Muchas veces el entorno comenta "ya se va a soltar" o "es flojito". Sin embargo, el vocabulario pasivo (lo que entiende) y el activo (lo que dice) son medibles. A los 2 años un niño debe manejar cerca de 50 palabras, y a los 3 ya debe estar armando pequeñas combinaciones.
            </p>
          </section>

          <div className="bg-indigo-50 p-6 rounded-xl my-8 border border-indigo-100">
            <h3 className="text-xl font-bold text-indigo-900 mt-0">Cómo lo abordamos en Chillán</h3>
            <p className="text-indigo-800">
              Evaluamos a tu pequeño de forma presencial. Analizamos si estamos ante un <Link href="/tratamientos/retraso-del-lenguaje-chillan" className="underline">retraso simple del lenguaje</Link> o necesitamos una <Link href="/evaluacion-fonoaudiologica-infantil-chillan" className="underline">evaluación fonoaudiológica</Link> más profunda para descartar un Trastorno Específico del Lenguaje (TEL).
            </p>
          </div>

          <p>
            Te orientaremos primero sobre pautas de estimulación en casa. Hay técnicas simples como la <em>expansión</em> (agregar palabras a lo que él dice) que pueden gatillar el lenguaje.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA href="https://wa.me/56XXXXXXXXX?text=Hola,%20siento%20que%20mi%20hijo%20habla%20muy%20poco%20para%20su%20edad,%20busco%20hora%20en%20Chill%C3%A1n" className="bg-indigo-600 hover:bg-indigo-700 ring-indigo-300">
              Pide orientación aquí
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
