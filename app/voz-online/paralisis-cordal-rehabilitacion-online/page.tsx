import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parálisis de Cuerda Vocal: Rehabilitación Online | Chile",
  description:
    "Rehabilitación fonoaudiológica online para parálisis de cuerda vocal unilateral y bilateral. Recupera función vocal con terapia especializada a todo Chile.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/voz-online/paralisis-cordal-rehabilitacion-online",
  },
};

export default function ParalisisCordalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Parálisis de Cuerda Vocal - Rehabilitación Online",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "MedicalCondition",
      name: "Parálisis de Cuerda Vocal",
      alternateName: "Parálisis Cordal",
      description:
        "Inmovilidad de una o ambas cuerdas vocales que afecta la calidad de la voz, la deglución y, en algunos casos, la respiración.",
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
            { label: "Parálisis Cordal" },
          ]}
        />

        <article className="prose prose-slate lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-slate-950">
            Parálisis de Cuerda Vocal: Rehabilitación Vocal Online
          </h1>
          <p className="lead font-medium text-gray-700">
            La parálisis de cuerda vocal ocurre cuando una (unilateral) o ambas
            (bilateral) cuerdas vocales no se mueven correctamente. Esto
            produce una voz soplada, débil, con escasa proyección y, en
            algunos casos, dificultad para tragar. La rehabilitación
            fonoaudiológica es esencial para recuperar función vocal.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-slate-900">
              Causas frecuentes
            </h2>
            <ul>
              <li>
                <strong>Post-quirúrgica:</strong> Cirugía de tiroides, cervical,
                cardíaca o torácica que afecta el nervio laríngeo recurrente.
              </li>
              <li>
                <strong>Viral:</strong> Infecciones que inflaman el nervio
                vago o laríngeo.
              </li>
              <li>
                <strong>Neurológica:</strong> Accidentes cerebrovasculares,
                enfermedades degenerativas.
              </li>
              <li>
                <strong>Idiopática:</strong> Sin causa identificable (hasta un
                20-30% de los casos).
              </li>
              <li>
                <strong>Intubación prolongada:</strong> Tras cirugías o
                hospitalización en UCI.
              </li>
            </ul>
          </section>

          <div className="bg-slate-100 p-6 rounded-xl my-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mt-0">
              ¿Cómo funciona la rehabilitación online?
            </h3>
            <p className="text-slate-700">
              La terapia vocal para parálisis cordal busca mejorar el cierre
              glótico a través de ejercicios específicos: empujes laríngeos
              controlados, fonación en tubos de resonancia, ejercicios de
              flujo/esfuerzo vocal (LSVT, VFE) y técnicas de voz confidencial.
              La modalidad online funciona muy bien porque el trabajo es
              fundamentalmente vocal y respiratorio. Te guío en tiempo real
              y ajusto los ejercicios según tu respuesta.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-slate-900">
              ¿La parálisis cordal se recupera?
            </h2>
            <p>
              Depende de la causa. En muchos casos (especialmente
              post-quirúrgicos y virales), el nervio puede recuperarse
              parcial o totalmente en <strong>6-12 meses</strong>. Durante
              ese período, la terapia vocal es fundamental para optimizar
              la voz con la movilidad disponible. Si la parálisis es
              permanente, la fonoaudiología permite desarrollar mecanismos
              compensatorios eficientes que mejoran significativamente la
              calidad vocal y la calidad de vida.
            </p>
          </section>

          <p>
            Siempre coordinamos con tu otorrinolaringólogo o cirujano tratante
            para alinear el plan de rehabilitación. Solicita primero una{" "}
            <Link
              href="/voz-online/evaluacion-vocal-online"
              className="font-semibold text-slate-600"
            >
              evaluación vocal online
            </Link>{" "}
            para establecer tu línea base.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20tengo%20par%C3%A1lisis%20de%20cuerda%20vocal%20y%20busco%20rehabilitaci%C3%B3n%20online"
              className="bg-slate-700 hover:bg-slate-800 ring-slate-400"
            >
              Rehabilitar mi Voz Online
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
