import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratamiento de Disfonía Online | Fonoaudióloga Chile",
  description:
    "¿Llevas semanas con voz ronca o áspera? No esperes más. Tratamiento fonoaudiológico de disfonía online para todo Chile. Agenda tu evaluación hoy.",
  alternates: {
    canonical: "https://www.katialafono.cl/voz-online/tratamiento-disfonia-online",
  },
};

export default function TratamientoDisfoniaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Tratamiento de Disfonía Online",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "MedicalCondition",
      name: "Disfonía",
      alternateName: "Trastorno de la Voz",
      description:
        "Alteración de la calidad de la voz que puede manifestarse como ronquera, voz soplada, voz tensa o pérdida parcial/total de la voz.",
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
            { label: "Tratamiento Disfonía" },
          ]}
        />

        <article className="prose prose-rose lg:prose-lg max-w-none">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-rose-950 mb-6">
              Saca esa ronquera de tu vida con Tratamiento de Disfonía Online
            </h1>
            <p className="lead font-medium text-gray-700 max-w-3xl mx-auto">
              Si llevas semanas con la voz áspera o "rasposa", sintiendo que la voz vibra mal en tu garganta, necesitas detenerte. La disfonía no es una condición normal, es una alarma de tu cuerpo pidiendo ayuda especializada a gritos.
            </p>
          </header>

          <section className="my-10">
            <div className="bg-rose-50 p-8 rounded-2xl border border-rose-200 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-rose-900 mt-0 mb-4">
                El riesgo de "esperar a que se pase solo"
              </h3>
              <p className="text-rose-800 mb-6 text-left">
                Una disfonía que pasa de funcional (por mal uso prolongado) a orgánica en cuestión de meses puede traer la aparición de patologías severas. No tienes que perder tiempo con desplazamientos en la ciudad. Puedes tratarlo 100% online y recuperar tu calidad vocal desde tu habitación.
              </p>
              <WhatsAppCTA
                href="https://wa.me/56995497838?text=Hola,%20tengo%20disfon%C3%ADa%20hace%20semanas%20y%20necesito%20rehabiliataci%C3%B3n%20online."
                className="bg-rose-600 hover:bg-rose-700 ring-rose-300 w-full sm:w-auto"
              >
                Tratar mi Disfonía Ahora
              </WhatsAppCTA>
              <p className="text-xs mt-3 text-rose-700 font-bold opacity-80">
                Respuesta el mismo día. Agenda tu primera sesión esta semana.
              </p>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold mt-8 text-rose-900 border-b pb-2">
              Tipos de Disfonía que rehabilitamos online a diario
            </h2>
            <ul className="space-y-4 mt-4 text-gray-800">
              <li>
                <strong>Disfonía funcional de alto impacto:</strong> Has abusado de tu voz hablando demasiado tiempo, con fuerza o sin técnica, y ahora suena opaca y "rota". ¡La que mejor pronóstico rápido tiene con nuestro entrenamiento!
              </li>
              <li>
                <strong>Disfonía orgánica con patologías estructurales:</strong> Tienes <Link href="/voz-online/nodulos-vocales-tratamiento-online" className="text-rose-600 font-bold border-b border-rose-300">nódulos vocales descubiertos</Link>, pólipos en formación, o parálisis y ya tienes un informe Otorrino. Haremos el tratamiento conjunto imprescindible.
              </li>
              <li>
                <strong>Disfonía por tensión muscular extrema (DTM):</strong> Cargas con un nivel de estrés y sobrecarga al hablar que provoca que tus cuerdas y la musculatura del cuello intenten suplir el trabajo. Produce un claro dolor y sensación de "acogotamiento".
              </li>
            </ul>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold text-rose-900 text-center mb-8">
              Recuperaciones Vocales de Nuestros Pacientes
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="Camila S., Abogada"
                text="Llegué a un punto donde en las audiencias a los 10 minutos se me apagaba la voz por completo, una afonía que me daba pánico. Katia me evaluó por Zoom y me diagnosticó. Han pasado 3 meses y tras los ejercicios diarios hoy expongo con seguridad y proyección."
              />
              <TestimonialCard
                name="Javier O., Locutor Radio"
                text="Tenía una ronquera persistente que afectaba el sonido limpio que me exigen en cabina. Me enteré del plan de teleterapia. Fue increíblemente directo y profesional. Me entregó herramientas que hoy aplico instintivamente."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 text-rose-900">
              Transformar tu Disfonía online en tu espacio real
            </h2>
            <p>
              El proceso se hace 100% mediante videollamadas. Nos enfocaremos en una rehabilitación paso-a-paso de tus cuerdas vocales con ejercicios de técnica vocal (desde la relajación laríngea hasta la instalación de un patrón de resonancia frontal óptimo). Te guío, te corrigiendo visual y auditivamente en el acto.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
