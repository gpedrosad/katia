import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/voz-online/nodulos-vocales-tratamiento-online",
  title: "Nódulos Vocales: Tratamiento Online sin Cirugía | Chile",
  description:
    "¿Te diagnosticaron nódulos y temes operarte? Evita la cirugía con tratamiento fonoaudiológico online. Rehabilitación vocal conservadora directa a tu hogar.",
});

const faqItems = [
  {
    question: "¿Los nódulos vocales siempre requieren cirugía?",
    answer:
      "No. En muchos casos la terapia vocal conservadora reduce el tamaño de los nódulos y mejora la calidad vocal. La cirugía se reserva cuando no hay respuesta o hay indicación otorrinolaringológica.",
  },
  {
    question: "¿Se pueden tratar nódulos vocales online?",
    answer:
      "Sí. La rehabilitación se basa en ejercicios de respiración, relajación laríngea y técnica vocal por videollamada, con seguimiento acústico y perceptivo.",
  },
  {
    question: "¿Por qué reaparecen los nódulos después de operarse?",
    answer:
      "Porque la causa suele ser el mal uso vocal. Sin cambiar el patrón de habla, la fricción en las cuerdas vuelve a generar lesión.",
  },
];

export default function NodulosVocalesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Nódulos Vocales - Tratamiento Online",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "MedicalCondition",
      name: "Nódulos Vocales",
      alternateName: "Nódulos de cuerdas vocales",
      possibleTreatment: {
        "@type": "TherapeuticProcedure",
        name: "Terapia Vocal Conservadora",
      },
    },
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
            { label: "Nódulos Vocales" },
          ]}
        />

        <article className="prose prose-amber lg:prose-lg max-w-none">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-amber-950 mb-6">
              ¿Te diagnosticaron Nódulos Vocales y temes una cirugía?
            </h1>
            <p
              className="lead font-medium text-gray-700 max-w-3xl mx-auto"
              data-speakable
            >
              Recibir este diagnóstico asusta, especialmente si tu trabajo depende de tu voz. La excelente noticia es que en la inmensa mayoría de los casos, los nódulos se pueden reabsorber y tratar <strong>sin necesidad de entrar a pabellón</strong> mediante terapia vocal especializada.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-amber-800">
              <strong>Dato:</strong> Las guías clínicas recomiendan terapia vocal como primera línea antes de cirugía en nódulos vocales funcionales.
              <cite className="mt-1 block text-xs text-amber-700 not-italic">
                Fuente:{" "}
                <a
                  href="https://www.asha.org/public/speech/disorders/Vocal-Nodules/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-amber-900"
                >
                  ASHA — Vocal Nodules
                </a>{" "}
                y consenso otorrinolaringológico.
              </cite>
            </p>
          </header>

          <div className="bg-amber-50 p-8 rounded-2xl my-10 border border-amber-200 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-amber-900 mt-0 mb-4">
              La cirugía NO es tu única opción (ni debería ser la primera)
            </h3>
            <p className="text-amber-800 mb-6 text-left">
              Los nódulos son callosidades que se forman por el choque constante al usar mal la voz. Si te operas pero no cambias la forma en que hablas, <strong>volverán a aparecer</strong>. La evidencia médica mundial aconseja la <strong>terapia fonoaudiológica online como primera línea de defensa</strong>.
            </p>
            <WhatsAppCTA
              message="Hola, tengo nódulos vocales y quiero evitar la cirugía. Busco tratamiento online."
              className="bg-amber-600 hover:bg-amber-700 ring-amber-300 w-full sm:w-auto"
            >
              Consultar por Rehabilitación
            </WhatsAppCTA>
            <p className="text-xs mt-3 text-amber-700 font-bold opacity-80">
              *Cupos mensuales limitados para iniciar tratamiento intensivo.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-amber-900 border-b pb-2">
              Síntomas con los que probablemente estás lidiando
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 not-prose mt-6 mb-8">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-xl inline-block mb-2">🗣️</span>
                <p className="font-medium text-gray-800">Ronquera constante que no se quita con nada.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-xl inline-block mb-2">🎈</span>
                <p className="font-medium text-gray-800">Sientes que no te alcanza el aire y hablas "soplado".</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-xl inline-block mb-2">🔇</span>
                <p className="font-medium text-gray-800">Perdiste tus notas agudas (si eres cantante es dolorosamente obvio).</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-xl inline-block mb-2">😮‍💨</span>
                <p className="font-medium text-gray-800">Necesitas raspar y carraspear la garganta todo el día.</p>
              </div>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">
              Resultados de la rehabilitación conservadora
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="Carmen L., Profesora de Básica"
                text="Me diagnosticaron nódulos bilaterales. Mi otorrino me dijo que intentara fonoaudiología antes de pensar en pabellón. La terapia online con Katia fue intensa pero muy llevadera. A los 3 meses me hice otra nasofibroscopía y los nódulos casi habían desaparecido. Sigo haciendo mis ejercicios sagradamente."
              />
              <TestimonialCard
                name="Andrés M., Vendedor"
                text="Vivía ronco. Empecé el tratamiento sin mucha fe, creyendo que sólo el bisturí servía. La teleterapia me enseñó a respirar de otra forma. Hoy vendo y hablo por celular todo el día y la ronquera desapareció. No tuve que operarme."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 text-amber-900">
              ¿Cómo borrar los nódulos a través de una pantalla?
            </h2>
            <p>
              La terapia online es la modalidad preferida actualmente para este cuadro porque entrenamos tu voz respirando y fonando. <strong>No requerimos contacto físico</strong>. En nuestras videollamadas reprogramaremos tu patrón muscular desde tu propia casa, asegurándonos de que aprendas a usar la técnica de resonancia y apoyo diafragmático donde realmente pasas tus días trabajando, reduciendo el peligroso choque de tus cuerdas vocales.
            </p>
            <p className="mt-4">
              Si las excusas para cuidarte han sido la falta de tiempo, la tele-rehabilitación es exactamente lo que necesitas para recuperar la salud de tus cuerdas.
            </p>
          </section>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-amber-100 bg-amber-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
