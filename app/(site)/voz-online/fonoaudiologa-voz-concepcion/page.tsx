import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { GeoFAQ } from "@/app/_components/GeoFAQ";

const faqItems = [
  {
    question: "¿Puedo hacer terapia vocal online si vivo en Concepción?",
    answer:
      "Sí. Atendemos al Gran Concepción y región del Biobío por videollamada, sin cruzar puentes ni perder horas en traslados.",
  },
  {
    question: "¿Qué problemas de voz se tratan online desde Concepción?",
    answer:
      "Disfonía, fatiga vocal, nódulos en fase conservadora, higiene vocal y programas para docentes y profesionales de la voz.",
  },
];

export const metadata = buildPageMetadata({
  path: "/voz-online/fonoaudiologa-voz-concepcion",
  title: "Fonoaudióloga especialista en Voz en Concepción | Terapia Online",
  description:
    "Atención online para residentes del Biobío. Fonoaudióloga experta en voz, nódulos y fatiga vocal. Recupérate sin salir de Concepción.",
});

export default function FonoaudiologaVozConcepcionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    url: "https://www.katialafono.cl/voz-online/fonoaudiologa-voz-concepcion",
    name: "Terapia de Voz Online - Atención Concepción",
    description: "Evaluación y rehabilitación fonoaudiológica de la voz vía telemedicina para residentes de Concepción y región del Biobío.",
    areaServed: {
      "@type": "City",
      name: "Concepción",
      addressRegion: "Biobío",
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
            { label: "Concepción" },
          ]}
        />

        <article className="prose prose-blue lg:prose-lg max-w-none">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-blue-950 mb-6">
              Fonoaudióloga de Voz para Concepción: Recupérate sin moverte de casa
            </h1>
            <p
              className="lead font-medium text-gray-700 max-w-3xl mx-auto"
              data-speakable
            >
              Si el clima o los grandes puentes de <strong>Concepción y el Gran Concepción</strong> te quitan las ganas de ir a terapias médicas semanales para tu disfonía, el tratamiento fonoaudiológico de la voz 100% online es el alivio profundo que estabas esperando para rehabilitar tus cuerdas vocales.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-blue-800">
              <strong>Dato:</strong> La tele-rehabilitación vocal en adultos muestra resultados comparables a la presencial en estudios clínicos revisados.
              <cite className="mt-1 block text-xs text-blue-700 not-italic">
                Fuente:{" "}
                <a
                  href="https://www.asha.org/practice/telepractice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-900"
                >
                  ASHA — Telepractice guidelines
                </a>
                , literatura de telefonoaudiología.
              </cite>
            </p>
          </header>

          <section className="my-10">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-blue-900 mt-0 mb-4">
                La misma efectividad de la terapia clínica, desde el sillón de tu hogar
              </h3>
              <p className="text-blue-800 mb-6 text-left">
                La humedad y los drásticos cambios de temperatura en el Biobío son devastadores para voces de docentes y profesionales. Nuestra rehabilitación consiste en establecer técnica vocal de resistencia, trabajando en directo pantalla a pantalla, ahorrándote los peligrosos resfriados que conllevan los largos traslados luego de someter la garganta a consulta presencial.
              </p>
              <WhatsAppCTA
                message="Hola, vivo en Concepción y necesito terapia vocal online."
                className="bg-blue-600 hover:bg-blue-700 ring-blue-300 w-full sm:w-auto"
              >
                Atenderme en Concepción (vía Zoom)
              </WhatsAppCTA>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold mt-8 text-blue-900 border-b pb-2">
              ¿Por qué la terapia Online es ideal para ti?
            </h2>
            <ul className="space-y-4 mt-4 text-gray-800">
              <li>
                <strong>Cuidado directo desde el aula:</strong> Para <Link href="/voz-online/terapia-vocal-docentes-profesores" className="text-blue-600 font-bold border-b border-blue-300">educadores</Link> de Talcahuano o Pedro de Valdivia que salen agotados por las tardes. Abres la notebook y ya estás en terapia.
              </li>
              <li>
                <strong>Sin interrupción climática:</strong> Llueve a cántaros o hace viento intenso; tu rehabilitación vocal para los dolorosos nódulos no se detiene nunca.
              </li>
              <li>
                <strong>Monitoreo visual garantizado:</strong> Uso mi especialización para enseñarte paso-a-paso la resonancia adecuada frente al lente de la cámara, sin margen de error.
              </li>
            </ul>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
              Tu voz volverá a vibrar sin dolor
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="Eduardo M., Docente en UdeC"
                text="Mis clases magistrales me estaban destrozando por completo la laringe. Pensé que online no iba a servir igual que ir al hospital regional. Katia me demostró lo contario en la primera cita evaluándome con un ojo clínico brutal. Rehabilitación total comprobada."
              />
              <TestimonialCard
                name="Francisca P., Call Center"
                text="Pasaba 8 horas enchufada respondiendo en San Pedro de la Paz y amanecía absolutamente afónica. El tratamiento virtual de Katia es sumamente profesional. Mi voz recuperó toda la energía."
              />
            </div>
          </section>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-blue-100 bg-blue-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
