import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terapia del Habla Infantil en Chillán | Fonoaudióloga Especialista",
  description:
    "Terapia del habla para niños en Chillán. Tratamiento presencial de problemas articulatorios, fluidez y pronunciación con fonoaudióloga pediátrica.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/servicios/terapia-del-habla-infantil-chillan",
  },
};

export default function TerapiaHablaInfantilPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    name: "Terapia del Habla Infantil",
    description:
      "Intervención fonoaudiológica presencial orientada a mejorar la articulación, fluidez y claridad del habla en niños.",
    provider: {
      "@type": "MedicalOrganization",
      name: "Fonoaudióloga Infantil Chillán",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chillán",
        addressRegion: "Ñuble",
        addressCountry: "CL",
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
            { label: "Servicios", href: "/fonoaudiologia-infantil-chillan" },
            { label: "Terapia del Habla" },
          ]}
        />

        <article className="prose prose-orange lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-orange-950">
            Terapia del Habla Infantil en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            La terapia del habla se enfoca en <strong>cómo</strong> tu hijo
            produce los sonidos, a diferencia de la terapia de lenguaje que
            aborda <em>qué</em> dice y <em>cómo estructura</em> sus ideas.
            Ambas áreas son complementarias y aquí nos especializamos en las
            dos.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-orange-900">
              ¿Qué abordamos en la terapia del habla?
            </h2>
            <ul>
              <li>
                <strong>Problemas articulatorios:</strong> Dificultad para
                producir sonidos específicos como la R, S, L o grupos
                consonánticos (pl, br, tr).
              </li>
              <li>
                <strong>Inteligibilidad reducida:</strong> Cuando el niño habla,
                pero la mayoría de personas no le entienden.
              </li>
              <li>
                <strong>Coordinación motriz oral:</strong> Debilidad o
                descoordinación de lengua, labios y mandíbula.
              </li>
              <li>
                <strong>Fluidez:</strong> Repeticiones, bloqueos o prolongaciones
                de sonidos que afectan la comunicación natural.
              </li>
            </ul>
          </section>

          <div className="bg-orange-50 p-6 rounded-xl my-8 border border-orange-100">
            <h3 className="text-xl font-bold text-orange-900 mt-0">
              Metodología Presencial en Chillán
            </h3>
            <p className="text-orange-800">
              En <strong>Chillán</strong> trabajamos con ejercicios de praxias
              bucofonatorias (gimnasia de lengua y labios), actividades de soplo
              controlado y juegos de repetición que entrenan al cerebro del niño
              a programar secuencias motoras correctas. Cada sesión incluye
              material para practicar en casa con la familia.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-orange-900">
              Diferencia entre habla y lenguaje
            </h2>
            <p>
              Un niño puede tener un vocabulario amplio y buena comprensión (
              <em>lenguaje</em> adecuado) pero{" "}
              <Link
                href="/sintomas/nino-pronuncia-mal-chillan"
                className="font-semibold text-orange-600"
              >
                pronunciar mal
              </Link>{" "}
              al momento de expresarse (<em>habla</em> afectada). También puede
              ocurrir lo contrario: buena pronunciación pero con un{" "}
              <Link
                href="/tratamientos/retraso-del-lenguaje-chillan"
                className="font-semibold text-orange-600"
              >
                retraso en la estructura del lenguaje
              </Link>
              . Por eso la{" "}
              <Link
                href="/evaluacion-fonoaudiologica-infantil-chillan"
                className="font-semibold text-orange-600"
              >
                evaluación inicial
              </Link>{" "}
              es indispensable para definir el plan correcto.
            </p>
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20busco%20terapia%20del%20habla%20para%20mi%20hijo%20en%20Chill%C3%A1n"
              className="bg-orange-600 hover:bg-orange-700 ring-orange-300"
            >
              Agendar Terapia del Habla
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
