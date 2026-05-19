import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fonoaudióloga de Voz Online en Temuco | Disfonía y Nódulos",
  description:
    "¿Eres de Temuco y sientes molestia prolongada al hablar? Rehabilitación fonoaudiológica experta 100% online sin largos traslados médicos. Reserva tu cupo.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/voz-online/fonoaudiologa-voz-temuco",
  },
};

export default function FonoaudiologaVozTemucoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    url: "https://www.katialafono.cl/voz-online/fonoaudiologa-voz-temuco",
    name: "Terapia de Voz Online - Temuco",
    description: "Evaluación y rehabilitación fonoaudiológica de la voz vía telemedicina para residentes de Temuco y la región de La Araucanía.",
    areaServed: {
      "@type": "City",
      name: "Temuco",
      addressRegion: "La Araucanía",
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
            { label: "Temuco" },
          ]}
        />

        <article className="prose prose-green lg:prose-lg max-w-none">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-green-950 mb-6">
              Fonoaudióloga especialista en Voz en Temuco: Telemedicina directa a ti
            </h1>
            <p className="lead font-medium text-gray-700 max-w-3xl mx-auto">
              La intensa fatiga térmica de invierno en <strong>Temuco</strong> o los extenuantes días docentes de La Araucanía detonan daños permanentes en la voz. Pon fin a tu afonía sin necesidad de gastar horas de movilización clínica; tu especialista fonoaudiológica está disponible desde tu hogar vía virtual exhaustiva.
            </p>
          </header>

          <section className="my-10">
            <div className="bg-green-50 p-8 rounded-2xl border border-green-200 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-green-900 mt-0 mb-4">
                El frío de Temuco puede esconder daños serios como pólipos o nódulos
              </h3>
              <p className="text-green-800 mb-6 text-left">
                Creer un "estoy afónico de frío" persistente tras 2 o 3 semanas no es normal. La disfonía continuada agrava los cuadros. La nueva recomendación mundial de atención indica iniciar <strong>terapia vocal intensiva</strong> desde espacios controlados, como tu hogar seguro.
              </p>
              <WhatsAppCTA
                href="https://wa.me/56995497838?text=Hola,%20escribo%20desde%20Temuco%20y%20necesito%20evaluaci%C3%B3n%20para%20un%20problema%20de%20voz."
                className="bg-green-600 hover:bg-green-700 ring-green-300 w-full sm:w-auto"
              >
                Atención experta para La Araucanía
              </WhatsAppCTA>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold mt-8 text-green-900 border-b pb-2">
              Transformamos la tortura de hablar por confianza
            </h2>
            <ul className="space-y-4 mt-4 text-gray-800">
              <li>
                <strong>Abordaje Quirúrgico Evitable:</strong> Múltiples diagnósticos referenciados desde clínicas del sur inician vía tele-audiología evitándose cuchillos.
              </li>
              <li>
                <strong>Terapia Vocal Remota Integral:</strong> Se te proporcionarán módulos precisos y evaluables sin excusas climáticas ni barreras para <Link href="/voz-online/fatiga-vocal-tratamiento-online" className="text-green-600 font-bold border-b border-green-300">quitar la fatiga vocal</Link>.
              </li>
            </ul>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
              Agradecemos a pacientes locales
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="Mónica S., Docente"
                text="Entre el humo excesivo de la leña y gritarle a los octavos básicos desarrollé patologías en mis cuerdas que la Otorrino mandó a rehabilitar. Katia mediante su pc me observó mis vicios vocales. Jamás supe que se podía atender con este profesionalismo sin ir al centro."
              />
              <TestimonialCard
                name="Bernardo L., Relacionador Público"
                text="Mis cuerdas siempre al límite y mi disfonía era mensual. Fonoaudióloga recomendada en Temuco virtual. Hoy respiro en apoyo diafragmático por default. Increíblemente eficiente y amigable."
              />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
