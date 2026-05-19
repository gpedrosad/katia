import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/voz-online/higiene-vocal-cuidado-voz",
  title: "Higiene Vocal: Cómo Cuidar tu Voz | Fonoaudióloga Online Chile",
  description:
    "Guía de higiene vocal y cuidado de la voz para profesionales y cantantes. Consejos prácticos y asesoría fonoaudiológica online para todo Chile.",
});

const faqItems = [
  {
    question: "¿Qué es la higiene vocal?",
    answer:
      "Conjunto de hábitos que protegen las cuerdas vocales: hidratación, evitar carraspear y gritar, descansos vocales y reducir irritantes como tabaco y alcohol.",
  },
  {
    question: "¿Cuánta agua debo tomar para cuidar mi voz?",
    answer:
      "Aproximadamente 2 litros diarios a temperatura ambiente. La hidratación sistémica mantiene las mucosas laríngeas lubricadas.",
  },
  {
    question: "¿Carraspear daña la voz?",
    answer:
      "Sí. Carrasear golpea las cuerdas vocales y puede generar edema. Mejor tragar saliva, beber agua o hacer un bostezo suave.",
  },
];

export default function HigieneVocalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
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
          <p className="lead font-medium text-gray-700" data-speakable>
            La higiene vocal son los hábitos diarios que protegen tus cuerdas
            vocales y previenen el deterioro de la voz. Es la base de cualquier
            tratamiento vocal y lo primero que trabajamos en terapia. Aquí te
            comparto las recomendaciones esenciales.
          </p>
          <p className="not-prose my-4 rounded-xl border border-teal-200 bg-teal-50/80 p-4 text-sm text-teal-900">
            <strong>Dato:</strong> La deshidratación reduce la lubricación de
            las cuerdas vocales y empeora la calidad vocal; la ASHA recomienda
            hidratación sistemática como pilar de higiene vocal.
            <cite className="mt-1 block text-xs text-teal-700 not-italic">
              Fuente:{" "}
              <a
                href="https://www.asha.org/public/speech/development/taking-care-of-your-voice/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-teal-900"
              >
                American Speech-Language-Hearing Association (ASHA)
              </a>
              , higiene vocal.
            </cite>
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

          <GeoFAQ
            items={faqItems}
            includeJsonLd={false}
            className="not-prose my-12 rounded-2xl border border-teal-100 bg-teal-50/40 p-8"
          />

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              message="Hola, quiero aprender a cuidar mi voz correctamente, atención online"
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
