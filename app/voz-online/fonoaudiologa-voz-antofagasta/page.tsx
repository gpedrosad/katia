import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fonoaudióloga especialista en Voz en Antofagasta | Online",
  description:
    "¿Tu voz te duele tras días de turnos en Antofagasta? Diagnóstico y rehabilitación vocal intensiva experta desde tu propia pantalla en el Norte.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/voz-online/fonoaudiologa-voz-antofagasta",
  },
};

export default function FonoaudiologaVozAntofagastaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    url: "https://www.katialafono.cl/voz-online/fonoaudiologa-voz-antofagasta",
    name: "Terapia de Voz Online - Antofagasta",
    description: "Evaluación y rehabilitación fonoaudiológica de la voz vía telemedicina para pacientes de Antofagasta y norte de Chile.",
    areaServed: {
      "@type": "City",
      name: "Antofagasta",
      addressRegion: "Antofagasta",
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
            { label: "Antofagasta" },
          ]}
        />

        <article className="prose prose-orange lg:prose-lg max-w-none">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-orange-950 mb-6">
              Fonoaudióloga de Voz Online para Antofagasta y el Norte
            </h1>
            <p className="lead font-medium text-gray-700 max-w-3xl mx-auto">
              Si el clima del desierto, los turnos extenuantes corporativos o el polvo de <strong>Antofagasta</strong> agotó por entero tus cuerdas vocales, tenemos la solución. No sacrifiques tu escaso tiempo libre viajando al médico en la ciudad. Restaura tu volumen de resonancia y frena la afonía cómodamente con mi terapia online.
            </p>
          </header>

          <section className="my-10">
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-orange-900 mt-0 mb-4">
                La urgencia de frenar el desgaste progresivo en la garganta
              </h3>
              <p className="text-orange-800 mb-6 text-left">
                Cuando una voz "picada" no sana por largos periodos ni bebiendo litro de fluidos, estás ante una <Link href="/voz-online/tratamiento-disfonia-online" className="text-orange-600 font-bold border-b border-orange-300">disfonía persistente</Link>. Telemedicina interactiva es el paso indicado, donde monitorearemos un riguroso plan de ejercicios de rehabilitación para restaurar la función perdida antes de un desenlace nodular.
              </p>
              <WhatsAppCTA
                href="https://wa.me/56995497838?text=Hola,%20busco%20fonoaudi%C3%B3loga%20para%20la%20voz%20desde%20Antofagasta(Online)."
                className="bg-orange-600 hover:bg-orange-700 ring-orange-300 w-full sm:w-auto"
              >
                Inicia Fonoaudiología Online Aquí
              </WhatsAppCTA>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold mt-8 text-orange-900 border-b pb-2">
              Teleasistencia Vocal Profesional Optimizada
            </h2>
            <ul className="space-y-4 mt-4 text-gray-800">
              <li>
                <strong>Profesionales y Liderazgo:</strong> Presentar, coordinar e imponer sin quedarse afónico exige técnica clínica. Mi servicio diagnosticará tu desgaste.
              </li>
              <li>
                <strong>Flexibilidad frente a turnos y guardias:</strong> Coordinaremos horas funcionales desde Antofagasta para asegurar tu resguardo vital sin mover el auto de tu residencia.
              </li>
            </ul>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold text-orange-900 text-center mb-8">
              Respaldados por avances médicos sólidos
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="Valentina R., Minera de turno"
                text="Mis cuerdas no aguantaban un ciclo entero gritando por radio. Me pasaron del policlínico para allá. Encontré servicio fonoaudiológico desde la Tablet en mi pausa y me solucionó técnicas preciosas para no destruirme cada noche. Tremenda inversión en mí."
              />
              <TestimonialCard
                name="Pascual Y., Coordinador"
                text="Súper preciso. Antofagasta es un caos bajar al centro o a las clínicas. Hacer ejercicios de vibración labio y resonancia monitoreado frente al celular por Katia ahorra literalmente dinero, tensión y te sella ese desgaste."
              />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
