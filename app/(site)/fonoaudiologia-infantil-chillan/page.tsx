import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { ServiceCard } from "@/app/_components/ServiceCard";
import Link from "next/link";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const CANONICAL_PATH = "/fonoaudiologa-ninos-chillan";

const faqItems = [
  {
    question: "¿Qué edades atiende la fonoaudióloga infantil en Chillán?",
    answer:
      "Principalmente niños de 2 a 10 años con dificultades de lenguaje, habla o comunicación. Cada caso se evalúa para definir frecuencia y objetivos terapéuticos.",
  },
  {
    question: "¿La primera consulta es evaluación o terapia?",
    answer:
      "Siempre comenzamos con evaluación fonoaudiológica (~60 minutos) e informe. A partir de ahí planificamos terapia semanal según diagnóstico y necesidades familiares.",
  },
  {
    question: "¿Tratan TEL, dislalia y retraso del lenguaje?",
    answer:
      "Sí. Abordamos trastorno fonológico, TEL, dislalia, retraso del habla y lenguaje, y derivaciones desde colegio o pediatra en consulta presencial en Chillán.",
  },
  {
    question: "¿Qué tan frecuentes son los trastornos del lenguaje?",
    answer:
      "La ASHA estima que afectan aproximadamente al 7% de los niños en edad escolar; la intervención temprana mejora pronóstico comunicativo y escolar. Fuente: https://www.asha.org/public/speech/disorders/language-disorders/",
  },
];

export const metadata = buildPageMetadata({
  path: "/fonoaudiologia-infantil-chillan",
  canonicalPath: "/fonoaudiologa-ninos-chillan",
  title: "Fonoaudióloga Infantil en Chillán | Especialista en Lenguaje",
  description:
    "Atención fonoaudiológica infantil en Chillán. Diagnóstico y tratamiento de trastornos del lenguaje, habla y comunicación. Evaluación presencial.",
});

export default function FonoaudiologiaInfantilPage() {
  const pillarUrl = `${SITE_URL}${CANONICAL_PATH}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${pillarUrl}#organization`,
    name: "Katia Domínguez - Fonoaudióloga Infantil Chillán",
    medicalSpecialty: "SpeechTherapy",
    description:
      "Fonoaudióloga pediatra especializada en trastornos de lenguaje y habla en niñas y niños de Chillán.",
    areaServed: "Chillán, Región de Ñuble",
    url: pillarUrl,
  };
  const webPageJsonLd = buildWebPageJsonLd({
    path: CANONICAL_PATH,
    name: "Fonoaudióloga Infantil en Chillán | Especialista en Lenguaje",
    description:
      "Atención fonoaudiológica infantil en Chillán. Diagnóstico y tratamiento de trastornos del lenguaje, habla y comunicación. Evaluación presencial.",
    speakable: true,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Fonoaudiología Infantil en Chillán" },
          ]}
        />

        <article className="prose prose-rose lg:prose-lg max-w-none">
          <header className="mb-12 rounded-3xl bg-rose-50 px-8 py-12 text-center text-rose-950">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Fonoaudióloga Infantil en Chillán
            </h1>
            <p
              data-speakable
              className="mx-auto max-w-3xl text-xl leading-relaxed text-rose-800/80"
            >
              Atención presencial especializada en la evaluación y tratamiento de problemas de comunicación, lenguaje y habla en niños de todas las edades.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppCTA message="Hola, me gustaría agendar una hora infantil en Chillán">
                📍 Agendar Hora en Chillán
              </WhatsAppCTA>
            </div>
          </header>

          <section className="my-12">
            <h2 className="text-3xl font-bold text-rose-900">Nuestros Tratamientos Destacados</h2>
            <p className="text-gray-700">Abordamos diversas áreas para potenciar al máximo las habilidades de los niños en su entorno familiar y escolar.</p>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard 
                title="Evaluación Fonoaudiológica"
                description="Diagnóstico preciso del desarrollo comunicativo."
                href="/servicios/evaluacion-fonoaudiologica"
                emoji="📋"
              />
              <ServiceCard 
                 title="Retraso del Lenguaje"
                 description="Estimulación temprana para niños que demoran en hablar."
                 href="/tratamientos/retraso-del-lenguaje-chillan"
                 emoji="🗣️"
              />
              <ServiceCard 
                 title="Trastorno Fonológico (TEL)"
                 description="Terapia estructurada para Trastornos Específicos del Lenguaje."
                 href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan"
                 emoji="🧠"
              />
              <ServiceCard 
                 title="Retraso del Habla"
                 description="Corrección y desarrollo de articulación y fluidez."
                 href="/tratamientos/retraso-del-habla-chillan"
                 emoji="👶"
              />
              <ServiceCard 
                 title="Dislalia Infantil"
                 description="Ayuda con niños que pronuncian mal ciertas letras (ej. R)."
                 href="/tratamientos/dislalia-infantil-chillan"
                 emoji="💬"
              />
            </div>
          </section>

          <section className="my-12 rounded-2xl border border-rose-100 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold text-rose-900">
              ¿Por qué elegir un fonoaudiólogo para niños en Chillán?
            </h3>
            <p className="text-gray-600">
              La atención presencial en <Link href="/fonoaudiologa-ninos-chillan" className="font-medium text-rose-600 hover:text-rose-800">especialistas pediátricos locales</Link> como nuestra consulta en Chillán, nos permite aplicar estrategias de juego guiado (Play Therapy) que necesitan del vínculo uno-a-uno. Entendemos el ritmo de descanso, los estímulos y acompañamos integralmente a la familia en Ñuble.
            </p>
          </section>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-rose-100 bg-rose-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
