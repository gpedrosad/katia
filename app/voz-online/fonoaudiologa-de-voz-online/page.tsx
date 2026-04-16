import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fonoaudióloga de Voz Online | Terapia Vocal Chile",
  description:
    "Fonoaudióloga especialista en voz con atención online para todo Chile. Tratamiento de disfonía, nódulos, fatiga vocal y rehabilitación de voz profesional.",
  alternates: {
    canonical: "https://www.katialafono.cl/voz-online/fonoaudiologa-de-voz-online",
  },
};

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
              Fonoaudióloga de Voz Online — Todo Chile
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-sky-800/80">
              Evaluación y tratamiento de trastornos vocales para adultos desde
              la comodidad de tu hogar. Más de 20 años de experiencia clínica.
              Atención por videollamada a todo el país.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppCTA href="https://wa.me/56995497838?text=Hola,%20busco%20atenci%C3%B3n%20de%20voz%20online">
                📹 Agendar Sesión Online
              </WhatsAppCTA>
            </div>
          </header>

          <section className="my-12">
            <h2 className="text-3xl font-bold text-sky-900">
              Especialidades Vocales que Atendemos
            </h2>
            <p className="text-gray-700">
              Abordamos todas las patologías y dificultades de la voz adulta con
              sesiones de teleterapia estructuradas y efectivas.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 not-prose">
              {[
                {
                  title: "Disfonía",
                  desc: "Ronquera persistente y pérdida de calidad vocal.",
                  href: "/voz-online/tratamiento-disfonia-online",
                  icon: "🗣️",
                },
                {
                  title: "Nódulos Vocales",
                  desc: "Tratamiento conservador para nódulos y pólipos.",
                  href: "/voz-online/nodulos-vocales-tratamiento-online",
                  icon: "🔬",
                },
                {
                  title: "Fatiga Vocal",
                  desc: "Cansancio y dolor al hablar durante la jornada laboral.",
                  href: "/voz-online/fatiga-vocal-tratamiento-online",
                  icon: "😮‍💨",
                },
                {
                  title: "Voz para Docentes",
                  desc: "Prevención y rehabilitación vocal para profesores.",
                  href: "/voz-online/terapia-vocal-docentes-profesores",
                  icon: "👩‍🏫",
                },
                {
                  title: "Voz Profesional",
                  desc: "Entrenamiento para cantantes, locutores y oradores.",
                  href: "/voz-online/rehabilitacion-vocal-profesionales-voz",
                  icon: "🎤",
                },
                {
                  title: "Evaluación Vocal",
                  desc: "Diagnóstico fonoaudiológico online completo.",
                  href: "/voz-online/evaluacion-vocal-online",
                  icon: "📋",
                },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-sky-300"
                >
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="mt-3 text-lg font-bold text-sky-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="my-12 rounded-2xl border border-sky-100 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold text-sky-900">
              ¿Por qué terapia de voz online?
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>
                <strong>Acceso desde cualquier ciudad de Chile:</strong> No
                importa si estás en Santiago, Punta Arenas o Arica.
              </li>
              <li>
                <strong>Misma efectividad:</strong> Estudios internacionales
                respaldan que la teleterapia vocal tiene resultados
                equivalentes a la presencial en adultos.
              </li>
              <li>
                <strong>Flexibilidad horaria:</strong> Sesiones en horarios
                compatibles con tu jornada laboral.
              </li>
              <li>
                <strong>Continuidad:</strong> No se interrumpe por viajes,
                clima o distancia geográfica.
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
