import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rehabilitación Vocal para Profesionales de la Voz | Online Chile",
  description:
    "Entrenamiento y rehabilitación vocal online para cantantes, locutores, actores y oradores en Chile. Optimiza tu rendimiento vocal con fonoaudióloga especialista.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/voz-online/rehabilitacion-vocal-profesionales-voz",
  },
};

export default function RehabilitacionVocalProfesionalesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Rehabilitación Vocal para Profesionales de la Voz",
    description:
      "Servicio de entrenamiento y rehabilitación vocal online para cantantes, locutores, actores, oradores y otros profesionales que dependen de su voz.",
    provider: {
      "@type": "Person",
      name: "Katia Domínguez",
      jobTitle: "Fonoaudióloga",
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
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
            { label: "Voz Profesional" },
          ]}
        />

        <article className="prose prose-indigo lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-indigo-950">
            Rehabilitación y Entrenamiento Vocal para Profesionales — Online
          </h1>
          <p className="lead font-medium text-gray-700">
            Si tu voz es tu herramienta de trabajo, necesitas cuidarla como un
            atleta cuida su cuerpo. Ofrecemos entrenamiento vocal
            especializado y rehabilitación para cantantes, locutores, actores,
            oradores y comunicadores de todo Chile.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-indigo-900">
              ¿Para quién es este servicio?
            </h2>
            <ul>
              <li>
                <strong>Cantantes:</strong> Líricos, populares, coristas.
                Pérdida de rango, quiebres de registro o falta de resistencia.
              </li>
              <li>
                <strong>Locutores y podcasters:</strong> Fatiga vocal,
                problemas de proyección o monotonía vocal.
              </li>
              <li>
                <strong>Actores y actrices:</strong> Preparación vocal para
                roles exigentes, recuperación post-funciones.
              </li>
              <li>
                <strong>Oradores y ejecutivos:</strong> Mejorar presencia
                vocal en presentaciones, reuniones y liderazgo.
              </li>
              <li>
                <strong>Streamers y creadores de contenido:</strong>{" "}
                Resistencia vocal para sesiones largas de transmisión.
              </li>
            </ul>
          </section>

          <div className="bg-indigo-50 p-6 rounded-xl my-8 border border-indigo-100">
            <h3 className="text-xl font-bold text-indigo-900 mt-0">
              Diferencia entre entrenamiento y rehabilitación
            </h3>
            <p className="text-indigo-800">
              El <strong>entrenamiento vocal</strong> es preventivo: optimizar la
              técnica para rendir más y proteger tu instrumento. La{" "}
              <strong>rehabilitación vocal</strong> es correctiva: recuperar una
              voz dañada por{" "}
              <Link
                href="/voz-online/nodulos-vocales-tratamiento-online"
                className="font-semibold text-indigo-700 underline"
              >
                nódulos
              </Link>
              ,{" "}
              <Link
                href="/voz-online/tratamiento-disfonia-online"
                className="font-semibold text-indigo-700 underline"
              >
                disfonía
              </Link>{" "}
              o cirugía laríngea. En ambos casos, la modalidad online es ideal
              para profesionales con agendas ajustadas.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-indigo-900">
              ¿Qué trabajamos en las sesiones?
            </h2>
            <ul>
              <li>
                Técnica respiratoria costo-diafragmática aplicada al canto o al
                habla sostenida.
              </li>
              <li>
                Coordinación fonorrespiratoria para mayor resistencia vocal.
              </li>
              <li>
                Resonancia y proyección sin forzar la laringe.
              </li>
              <li>
                Calentamiento y enfriamiento vocal pre/post actuación.
              </li>
              <li>
                <Link
                  href="/voz-online/higiene-vocal-cuidado-voz"
                  className="font-semibold text-indigo-600"
                >
                  Higiene vocal
                </Link>{" "}
                adaptada a las demandas de tu profesión.
              </li>
            </ul>
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20soy%20profesional%20de%20la%20voz%20y%20busco%20entrenamiento%20vocal%20online"
              className="bg-indigo-600 hover:bg-indigo-700 ring-indigo-300"
            >
              Entrenar mi Voz Profesional
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
