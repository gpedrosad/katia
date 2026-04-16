import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Higiene Vocal: Cómo Cuidar tu Voz | Fonoaudióloga Online Chile",
  description:
    "Guía de higiene vocal y cuidado de la voz para profesionales y cantantes. Consejos prácticos y asesoría fonoaudiológica online para todo Chile.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/voz-online/higiene-vocal-cuidado-voz",
  },
};

export default function HigieneVocalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la higiene vocal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La higiene vocal es un conjunto de hábitos y prácticas que protegen las cuerdas vocales y mantienen la salud de la voz. Incluye hidratación adecuada, evitar carraspear, no gritar, descansar la voz y evitar irritantes como tabaco y alcohol.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánta agua debo tomar para cuidar mi voz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se recomienda beber al menos 2 litros de agua al día a temperatura ambiente. Las cuerdas vocales necesitan estar hidratadas para vibrar correctamente. Evita cafeína en exceso y alcohol, ya que deshidratan las mucosas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Carraspear daña la voz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Carraspear es como golpear las cuerdas vocales entre sí con fuerza. Si lo haces frecuentemente, genera irritación e inflamación. Alternativas: tragar saliva, tomar un sorbo de agua o hacer un bostezo suave.",
        },
      },
    ],
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
            { label: "Higiene Vocal" },
          ]}
        />

        <article className="prose prose-teal lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-teal-950">
            Higiene Vocal: Cómo Cuidar tu Voz Correctamente
          </h1>
          <p className="lead font-medium text-gray-700">
            La higiene vocal son los hábitos diarios que protegen tus cuerdas
            vocales y previenen el deterioro de la voz. Es la base de cualquier
            tratamiento vocal y lo primero que trabajamos en terapia. Aquí te
            comparto las recomendaciones esenciales.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-teal-900">
              10 reglas de oro para cuidar tu voz
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
              {[
                {
                  num: "1",
                  title: "Hidrátate",
                  desc: "Mínimo 2 litros de agua al día a temperatura ambiente. La hidratación sistémica es clave.",
                },
                {
                  num: "2",
                  title: "No carraspees",
                  desc: "Es agresivo para las cuerdas. Traga saliva, toma agua o bosteza suavemente.",
                },
                {
                  num: "3",
                  title: "No grites",
                  desc: "Usa la técnica de proyección. Si necesitas volumen, acércate o usa amplificación.",
                },
                {
                  num: "4",
                  title: "Descansa tu voz",
                  desc: "Incluye períodos de silencio vocal durante el día, especialmente si usas la voz muchas horas.",
                },
                {
                  num: "5",
                  title: "Evita el tabaco",
                  desc: "El humo irrita directamente las cuerdas vocales y la mucosa laríngea.",
                },
                {
                  num: "6",
                  title: "Modera cafeína y alcohol",
                  desc: "Ambos deshidratan las mucosas de las cuerdas vocales.",
                },
                {
                  num: "7",
                  title: "Cuidado con el reflujo",
                  desc: "El ácido gástrico daña las cuerdas. Evita comer tarde y consulta si hay síntomas.",
                },
                {
                  num: "8",
                  title: "Calienta antes de usar la voz",
                  desc: "Bostezos, tarareos suaves y ejercicios de resonancia antes de hablar o cantar mucho.",
                },
                {
                  num: "9",
                  title: "Habla a volumen conversacional",
                  desc: "No hables por encima de ruido ambiental. Espera silencio o usa micrófono.",
                },
                {
                  num: "10",
                  title: "Consulta a tiempo",
                  desc: "Si la ronquera dura más de 2 semanas, no esperes. Una disfonía temprana se trata mejor.",
                },
              ].map((r) => (
                <div
                  key={r.num}
                  className="rounded-xl border border-teal-100 bg-white p-4 shadow-sm"
                >
                  <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-bold text-teal-800">
                    {r.num}
                  </span>
                  <h3 className="mt-2 font-bold text-teal-900">{r.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-teal-50 p-6 rounded-xl my-8 border border-teal-100">
            <h3 className="text-xl font-bold text-teal-900 mt-0">
              ¿La higiene vocal sola es suficiente?
            </h3>
            <p className="text-teal-800">
              La higiene vocal es fundamental pero no reemplaza la terapia
              cuando ya existe un problema. Si tienes{" "}
              <Link
                href="/voz-online/tratamiento-disfonia-online"
                className="font-semibold text-teal-700 underline"
              >
                disfonía
              </Link>
              ,{" "}
              <Link
                href="/voz-online/fatiga-vocal-tratamiento-online"
                className="font-semibold text-teal-700 underline"
              >
                fatiga vocal
              </Link>{" "}
              o{" "}
              <Link
                href="/voz-online/nodulos-vocales-tratamiento-online"
                className="font-semibold text-teal-700 underline"
              >
                nódulos
              </Link>
              , necesitas además un programa de rehabilitación vocal con
              ejercicios específicos. La higiene vocal es el cimiento
              sobre el que se construye todo lo demás.
            </p>
          </div>

          <p>
            ¿Quieres un plan de higiene vocal personalizado según tu profesión y
            estilo de vida? Agenda una{" "}
            <Link
              href="/voz-online/evaluacion-vocal-online"
              className="font-semibold text-teal-600"
            >
              evaluación vocal online
            </Link>{" "}
            y te entrego un protocolo a medida.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20quiero%20aprender%20a%20cuidar%20mi%20voz%20correctamente,%20atenci%C3%B3n%20online"
              className="bg-teal-600 hover:bg-teal-700 ring-teal-300"
            >
              Quiero Cuidar mi Voz
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
