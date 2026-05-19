import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/voz-online/fonoaudiologa-de-voz-online",
  title: "Fonoaudióloga de Voz Online | Recupera tu Voz sin Salir de Casa",
  description:
    "¿Tu voz te abandona a mitad del día? Fonoaudióloga especialista en trastornos de la voz. Tratamiento online para nódulos, disfonía y fatiga con resultados probados. Cupos limitados.",
});

const faqItems = [
  {
    question: "¿Qué trastornos de la voz se pueden tratar online?",
    answer:
      "Disfonía funcional y orgánica, fatiga vocal, nódulos y pólipos en fase conservadora, preparación y rehabilitación post-cirugía, parálisis cordal leve a moderada, y programas de higiene vocal para docentes y profesionales de la voz.",
  },
  {
    question: "¿La terapia vocal por videollamada es tan efectiva como la presencial?",
    answer:
      "La evidencia en adultos muestra resultados comparables en parámetros acústicos y perceptivos cuando se usan protocolos estandarizados. La tele-rehabilitación permite mayor adherencia al tratamiento al eliminar traslados.",
  },
  {
    question: "¿Atienden pacientes fuera de Chillán?",
    answer:
      "Sí. El servicio de voz online está disponible para todo Chile: Santiago, regiones y localidades sin fonoaudiólogo especializado en voz cercano.",
  },
];

export default function FonoaudiologaVozOnlinePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Katia Domínguez - Fonoaudióloga de Voz Online",
    description:
      "Servicio de fonoaudiología especializada en trastornos de la voz con atención online para adultos en todo Chile.",
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Teleconsulta",
      availableLanguage: "Español",
    },
    provider: {
      "@type": "Person",
      name: "Katia Domínguez",
      jobTitle: "Fonoaudióloga",
      alumniOf: "Universidad de Chile",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Fonoaudióloga de Voz Online" },
          ]}
        />

        <article className="prose prose-sky lg:prose-lg max-w-none">
          <header className="mb-12 rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50 px-8 py-12 text-center text-sky-950">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              ¿Sientes que tu voz te abandona cuando más la necesitas?
            </h1>
            <p
              className="mx-auto max-w-3xl text-xl leading-relaxed text-sky-800/80"
              data-speakable
            >
              Vivir con ronquera constante, ardor en la garganta o sentir que debes esforzarte para que te escuchen <strong>no es normal</strong>. Detén el desgaste antes de que sea irreversible con terapia vocal online especializada.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-sky-800/90">
              <strong>Dato:</strong> Estudios de la ASHA estiman que entre el 6% y el 10% de los adultos experimentará un trastorno de la voz en algún momento de su vida.
              <cite className="mt-1 block text-xs text-sky-700 not-italic">
                Fuente:{" "}
                <a
                  href="https://www.asha.org/public/speech/disorders/Voice-Disorders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-sky-900"
                >
                  American Speech-Language-Hearing Association (ASHA)
                </a>
                , datos epidemiológicos sobre trastornos de la voz.
              </cite>
            </p>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4">
              <WhatsAppCTA message="Hola, siento que mi voz falla y necesito ayuda. Quiero agendar una evaluación online.">
                Salvar mi Voz Hoy
              </WhatsAppCTA>
              <p className="text-sm font-medium text-sky-700">🗓️ Agenda abierta. Cupos limitados para pacientes nuevos este mes.</p>
            </div>
          </header>

          <section className="my-12">
            <h2 className="text-3xl font-bold text-sky-900 border-b pb-4">
              El dolor silencioso de perder tu herramienta vital
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Ya sea que uses tu voz para hacer clases, liderar reuniones, vender o cantar, cuando tu voz falla, tu confianza también lo hace. Empiezas a evitar hablar, cancelas panoramas y vives con el miedo de quedarte mudo en medio de una frase importante.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Ignorar síntomas como la <strong>fatiga vocal</strong> o la <strong>disfonía crónicas</strong> suele llevar a lesiones orgánicas como nódulos o pólipos que podrían requerir cirugía. La buena noticia es que la gran mayoría de estos problemas se resuelven con <strong>terapia de rehabilitación adecuada</strong>.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100">
                <h3 className="text-xl font-bold text-rose-800 mt-0 mb-4">Señales de que necesitas ayuda urgente:</h3>
                <ul className="space-y-2 m-0 p-0 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">⚠️</span>
                    <span>Tu voz amanece bien, pero en la tarde está áspera o débil.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">⚠️</span>
                    <span>Sientes un &quot;nudo&quot;, dolor o tensión constante en el cuello al hablar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">⚠️</span>
                    <span>Llevas más de 2 semanas con ronquera sin estar resfriado.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="my-16 bg-sky-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-sky-900 text-center mb-10">
                Transformamos voces fatigadas en voces fuertes y sanas
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 not-prose mb-12">
                {[
                  {
                    title: "Disfonía Crónica",
                    desc: "Recupera tu tono y pierde el miedo a quedar afónico.",
                    href: "/voz-online/tratamiento-disfonia-online",
                    icon: "🗣️",
                  },
                  {
                    title: "Nódulos Vocales",
                    desc: "Evita la cirugía con rehabilitación vocal especializada y guiada.",
                    href: "/voz-online/nodulos-vocales-tratamiento-online",
                    icon: "🔬",
                  },
                  {
                    title: "Fatiga Vocal",
                    desc: "Aprende a usar tu voz todo el día sin sentir dolor.",
                    href: "/voz-online/fatiga-vocal-tratamiento-online",
                    icon: "😮‍💨",
                  },
                  {
                    title: "Vigilancia para Docentes",
                    desc: "Termina el viernes con la misma voz que el lunes.",
                    href: "/voz-online/terapia-vocal-docentes-profesores",
                    icon: "👩‍🏫",
                  },
                  {
                    title: "Voz Profesional",
                    desc: "Lleva tu instrumento a su máximo rendimiento.",
                    href: "/voz-online/rehabilitacion-vocal-profesionales-voz",
                    icon: "🎤",
                  },
                  {
                    title: "Evaluación Diagnóstica",
                    desc: "Descubre exactamente qué le pasa a tu voz de forma 100% online.",
                    href: "/voz-online/evaluacion-vocal-online",
                    icon: "📋",
                  },
                ].map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-sky-300 hover:-translate-y-1"
                  >
                    <span className="text-3xl">{s.icon}</span>
                    <h3 className="mt-4 text-lg font-bold text-sky-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 font-medium">{s.desc}</p>
                    <span className="mt-4 inline-block text-sm font-bold text-sky-600">Saber más →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="my-16">
            <h2 className="text-3xl font-bold text-center text-sky-900 mb-8">
              Historias de pacientes reales
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="María José E., Docente"
                text="Llegaba a mi casa llorando de dolor de garganta después de hacer clases. Creí que tendría que cambiar de profesión. Con un par de meses de terapia online aprendí a usar mi voz sin lastimarme. La teleterapia me salvó porque no tenía tiempo para ir a consultas."
              />
              <TestimonialCard
                name="Roberto V., Jefe de Ventas"
                text="Me diagnosticaron nódulos y me aterraba la cirugía pues vivo de mi voz. Gracias al tratamiento online pude rehabilitar mis cuerdas sin tener que operarme. Katia te guía en los ejercicios con muchísima claridad y cercanía."
              />
            </div>
          </section>

          <section className="my-12 rounded-3xl border border-sky-100 bg-white p-8 shadow-sm text-center">
            <h2 className="mb-4 text-3xl font-bold text-sky-900">
              ¿Por qué la terapia online es la mejor opción?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              La evidencia científica actual ha demostrado que la tele-rehabilitación vocal en adultos tiene <strong>la misma efectividad clínica</strong> que la presencial, sumando inmensas ventajas para tu día a día:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left not-prose">
              <div className="bg-sky-50 rounded-xl p-5">
                <span className="text-2xl mb-2 block">🌎</span>
                <h4 className="font-bold text-sky-900 text-sm mb-1">Sin limites de ciudad</h4>
                <p className="text-xs text-gray-600">Accede a una fonoaudióloga experta sin importar en qué lugar de Chile te encuentres.</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-5">
                <span className="text-2xl mb-2 block">⏱️</span>
                <h4 className="font-bold text-sky-900 text-sm mb-1">Cero traslados</h4>
                <p className="text-xs text-gray-600">No pierdas horas en tacos o salas de espera. Conéctate, haz tu terapia y sigue con tu vida.</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-5">
                <span className="text-2xl mb-2 block">🏠</span>
                <h4 className="font-bold text-sky-900 text-sm mb-1">Espacio seguro</h4>
                <p className="text-xs text-gray-600">Trabajamos tu voz en tu ambiente, donde realmente necesitas usarla a diario.</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-5">
                <span className="text-2xl mb-2 block">🚀</span>
                <h4 className="font-bold text-sky-900 text-sm mb-1">Constancia asegurada</h4>
                <p className="text-xs text-gray-600">No interrumpas tu tratamiento por viajes o mal tiempo. Al ser online, tu avance no se pausa.</p>
              </div>
            </div>
          </section>

          <section className="my-16 not-prose">
            <h2 className="mb-6 text-center text-3xl font-bold text-sky-900">
              Atención online en tu ciudad
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
              Terapia vocal por videollamada para profesionales de la voz en
              todo Chile. Elige tu ciudad para ver cómo funciona la atención
              online en tu región.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/voz-online/fonoaudiologa-voz-santiago",
                  label: "Santiago",
                },
                {
                  href: "/voz-online/fonoaudiologa-voz-concepcion",
                  label: "Concepción",
                },
                {
                  href: "/voz-online/fonoaudiologa-voz-vina-del-mar",
                  label: "Viña del Mar",
                },
                {
                  href: "/voz-online/fonoaudiologa-voz-temuco",
                  label: "Temuco",
                },
                {
                  href: "/voz-online/fonoaudiologa-voz-antofagasta",
                  label: "Antofagasta",
                },
              ].map((ciudad) => (
                <li key={ciudad.href}>
                  <Link
                    href={ciudad.href}
                    className="block rounded-2xl border border-sky-100 bg-white p-5 text-center shadow-sm transition hover:border-sky-300 hover:shadow-md"
                  >
                    <span className="text-lg font-semibold text-sky-900">
                      Fonoaudióloga de voz en {ciudad.label}
                    </span>
                    <span className="mt-2 block text-sm text-sky-600">
                      Atención online →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-16 rounded-3xl border border-sky-100 bg-sky-50/50 p-8"
          />
        </article>
      </main>
    </>
  );
}
