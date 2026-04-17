import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fonoaudióloga experta en Voz en Viña del Mar | Vía Online",
  description:
    "El mejor tratamiento fonoaudiológico para problemas de voz ahora sin salir de Viña del Mar o Valparaíso. Nódulos y fatiga vocal rehabilitada remotamente.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/voz-online/fonoaudiologa-voz-vina-del-mar",
  },
};

export default function FonoaudiologaVozVinaDelMarPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    url: "https://www.katialafono.cl/voz-online/fonoaudiologa-voz-vina-del-mar",
    name: "Terapia de Voz Online - Viña del Mar",
    description: "Evaluación y rehabilitación fonoaudiológica de la voz vía telemedicina para pacientes en Viña del Mar, Valparaíso y alrededores.",
    areaServed: {
      "@type": "City",
      name: "Viña del mar",
      addressRegion: "Valparaíso",
      addressCountry: "CL"
    },
    medicalSpecialty: "SpeechTherapy"
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
            { label: "Voz Online", href: "/voz-online/fonoaudiologa-de-voz-online" },
            { label: "Viña del Mar" },
          ]}
        />

        <article className="prose prose-teal lg:prose-lg max-w-none">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-teal-950 mb-6">
              Fonoaudióloga especialista en Voz: Atención Online para Viña del Mar
            </h1>
            <p className="lead font-medium text-gray-700 max-w-3xl mx-auto">
              Recupera y protege tu salud vocal sin tener que cruzar todo el tráfico de la Av. España. Para vecinos de <strong>Viña del Mar y Valparaíso</strong>, les ofrecemos la rehabilitación fonoaudiológica más contundente para sus laringes desde la privacidad que prefieran. 
            </p>
          </header>

          <section className="my-10">
            <div className="bg-teal-50 p-8 rounded-2xl border border-teal-200 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-teal-900 mt-0 mb-4">
                ¿Tu garganta raspa de tanto hablar o cantar en la V Región?
              </h3>
              <p className="text-teal-800 mb-6 text-left">
                Ignorar la ronquera por semanas te acerca irremediablemente a nódulos o la temida afonía permanente. La gran solución médica actual prescrita es la intervención tele-operada. Te enseño posturas asertivas para recuperar los sonidos agudos perdidos y volver a ser el dueño absoluto de tu proyección.
              </p>
              <WhatsAppCTA
                href="https://wa.me/56995497838?text=Hola,%20soy%20de%20Vi%C3%B1a%20y%20necesito%20tratar%20mi%20fatiga%20vocal%20online."
                className="bg-teal-600 hover:bg-teal-700 ring-teal-300 w-full sm:w-auto"
              >
                Inicia tu Rehabilitación hoy
              </WhatsAppCTA>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold mt-8 text-teal-900 border-b pb-2">
              Pacientes que solicitan este acceso frecuentemente:
            </h2>
            <ul className="space-y-4 mt-4 text-gray-800">
              <li>
                <strong>Terapia Vocal Continua para Universitarios / Oradores:</strong> El estrés expulsa toda tu fuerza en exposiciones orales dejándote literalmente mudo.
              </li>
              <li>
                <strong>Profesionales de la Gastronomía y Turismo Vasco:</strong> Hablar a los gritos diarios arruina las cuerdas, aquí te enseño la técnica de resonancia justa.
              </li>
              <li>
                <strong>Apoyo a diagnósticos Otorrino:</strong> Tienes <Link href="/voz-online/nodulos-vocales-tratamiento-online" className="text-teal-600 font-bold border-b border-teal-300">nódulos vocales</Link> identificados. Aplicamos terapia para evitarlos conservadoramente sin quirófano.
              </li>
            </ul>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold text-teal-900 text-center mb-8">
              Tu voz recuperará su estabilidad original
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="Karina V., Comerciante y Vendedora"
                text="Con la humedad porteña y hablando todo el día, me dio un pólipo horrible. No me daban los tiempos. Mi doctor me aprobó usar a Katia como teleterapia y los ejercicios fueron salvadores de mi propia carrera de ventas."
              />
              <TestimonialCard
                name="Julián E., Docente"
                text="Mis alumnos de media me volvían loco y terminaba a puros chillidos. Katia me acomodó el plan de manejo desde Viña, sin necesidad de viajar a Santiago jamás."
              />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
