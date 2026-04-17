import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fonoaudióloga especialista en Voz en Santiago | Terapia Online",
  description:
    "¿Buscas expertos en voz en Santiago? Terapia vocal online sin los tacos de la ciudad. Fonoaudióloga experta en nódulos, disfonía y fatiga. Agenda hoy.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/voz-online/fonoaudiologa-voz-santiago",
  },
};

export default function FonoaudiologaVozSantiagoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    url: "https://www.katialafono.cl/voz-online/fonoaudiologa-voz-santiago",
    name: "Terapia de Voz Online - Atención Santiago",
    description: "Evaluación y rehabilitación fonoaudiológica de la voz vía telemedicina para residentes de Santiago, RM.",
    areaServed: {
      "@type": "City",
      name: "Santiago",
      addressRegion: "Región Metropolitana",
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
            { label: "Santiago" },
          ]}
        />

        <article className="prose prose-sky lg:prose-lg max-w-none">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-sky-950 mb-6">
              Fonoaudióloga de Voz en Santiago: Recupera tu voz sin sumarte al taco
            </h1>
            <p className="lead font-medium text-gray-700 max-w-3xl mx-auto">
              Si vives en <strong>Santiago</strong> y el estrés de la capital está apretando tu garganta y quebrando tu voz, buscar ayuda no debería tomarte dos horas en Transantiago o el Metro. Tu terapia fonoaudiológica experta, ahora 100% online y desde tu hogar o departamento.
            </p>
          </header>

          <section className="my-10">
            <div className="bg-sky-50 p-8 rounded-2xl border border-sky-200 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-sky-900 mt-0 mb-4">
                La tele-rehabilitación es la nueva norma en salud vocal
              </h3>
              <p className="text-sky-800 mb-6 text-left">
                Pacientes en el Barrio El Golf, Providencia o Maipú están optando por tratar sus disfonías, fatigas vocales y nódulos desde su pantalla. ¿Por qué? Porque la rehabilitación vocal en adultos depende del trabajo sonoro y respiratorio, <strong>no requiere que vayas a una clínica a tocarte la garganta</strong>.
              </p>
              <WhatsAppCTA
                href="https://wa.me/56995497838?text=Hola,%20vivo%20en%20Santiago%20y%20necesito%20evaluaci%C3%B3n%20vocal%20online."
                className="bg-sky-600 hover:bg-sky-700 ring-sky-300 w-full sm:w-auto"
              >
                Agendar Mi Hora en Santiago
              </WhatsAppCTA>
              <p className="text-xs mt-3 text-sky-700 font-bold opacity-80">
                Ahorra horas de traslado. Cupos mensuales limitados.
              </p>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold mt-8 text-sky-900 border-b pb-2">
              ¿Qué problemas de voz diagnosticamos remotamente en la RM?
            </h2>
            <ul className="space-y-4 mt-4 text-gray-800">
              <li>
                <strong>Pérdida de voz por Estrés Laboral (Disfonía Funcional):</strong> Habitual en ejecutivos de Santiago Centro y Las Condes.
              </li>
              <li>
                <strong>Daño en Profesores y Docentes:</strong> Si el ruido de los colegios te está dejando ronco todos los días. Tratamiento especializado para <Link href="/voz-online/terapia-vocal-docentes-profesores" className="text-sky-600 font-bold border-b border-sky-300">profesionales de la educación</Link>.
              </li>
              <li>
                <strong>Nódulos y Problemas de Resonancia:</strong> Evaluaciones profundas y guiadas para evitar pabellón si ya tu Otorrino te dio un ultimátum.
              </li>
            </ul>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold text-sky-900 text-center mb-8">
              Los pacientes santiaguinos nos prefieren
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="Fernando A., Abogado en Santiago Centro"
                text="Imposible salir de la oficina a las 6pm a buscar una fonoaudióloga presencial. Katia me acomodó mis horarios y rehabilité mis cuerdas vocales desde la propia sala de reuniones por Zoom. Mis alegatos volvieron a tener la intensidad necesaria."
              />
              <TestimonialCard
                name="Sofía M., Profesora en Ñuñoa"
                text="Sufría de fatiga vocal constante. Pensaba suspender el semestre. Encontré a Katia, pedí su servicio online y me entregó protocolos de calentamiento que uso allí mismo en el colegio. Mi voz revivió rotundamente."
              />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
