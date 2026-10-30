import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/voz-online/terapia-vocal-docentes-profesores",
  title: "Terapia vocal para docentes y profesores online",
  description:
    "Terapia vocal online para docentes y profesores: proyectar sin gritar, higiene y calentamiento antes de clases. Adultos, videollamada en Chile.",
  keywords: [
    "terapia vocal docentes",
    "voz profesores",
    "fonoaudióloga especialista en voz",
    "disfonía docente",
    "terapia voz profesores online",
  ],
});

const DOCENTES_RESPUESTA =
  "La terapia vocal para docentes y profesores es online: por videollamada, para adultos en todo Chile. Se trabaja proyección sin gritar, higiene vocal y calentamiento antes de clases, en un horario compatible con la jornada escolar.";

const faqItems = [
  {
    question: "¿Qué es la terapia vocal para docentes y profesores?",
    answer: DOCENTES_RESPUESTA,
  },
  {
    question: "¿Por qué los profesores pierden la voz?",
    answer:
      "Los docentes usan la voz entre 6 y 8 horas diarias, muchas veces en ambientes ruidosos, con mala acústica, sin amplificación y con técnica vocal deficiente. Esto genera un sobresfuerzo crónico que puede derivar en disfonía o nódulos vocales.",
  },
  {
    question: "¿Se puede prevenir la disfonía docente?",
    answer:
      "Sí. Con técnica vocal adecuada, higiene vocal, hidratación y uso estratégico de la voz se puede prevenir. La terapia fonoaudiológica online enseña estas herramientas de manera práctica.",
  },
  {
    question: "¿La terapia vocal online sirve para docentes de colegio?",
    answer:
      "Sí. Los ejercicios se adaptan al aula real: proyección sin gritar, calentamiento antes de clases y descansos vocales entre jornadas, con horarios compatibles con la rutina escolar.",
  },
  {
    question: "¿Cuánto dura la terapia vocal para profesores?",
    answer:
      "La duración se define según las necesidades de cada docente. Se enseña técnica de respiración, apoyo, proyección y estrategias específicas para el aula.",
  },
  {
    question: "¿La terapia vocal para docentes reemplaza al otorrino?",
    answer:
      "El otorrino mira las cuerdas si hay dolor, afonía o una lesión. La terapia vocal online trabaja cómo usas la voz en el aula: proyección sin gritar, higiene y calentamiento antes de clases.",
  },
];

export default function TerapiaVocalDocentesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    dateModified: "2026-10-30",
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
            { label: "Voz para Docentes" },
          ]}
        />

        <article className="prose prose-emerald lg:prose-lg max-w-none">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-emerald-950 mb-6">
              Voz cansada en profesores: terapia vocal online
            </h1>
            <p
              className="lead font-medium text-gray-700 max-w-3xl mx-auto"
              data-speakable
            >
              {DOCENTES_RESPUESTA}
            </p>
            <div className="not-prose mx-auto mt-4 max-w-3xl rounded-2xl border-2 border-emerald-200 bg-white p-5 text-left text-base text-emerald-950">
              <p className="text-sm">
                <Link href="/voz-online/higiene-vocal-cuidado-voz" className="font-semibold underline">
                  Higiene vocal
                </Link>
                {" · "}
                <Link href="/voz-online/rehabilitacion-vocal-profesionales-voz" className="font-semibold underline">
                  Rehabilitación para profesionales
                </Link>
                {" · "}
                <Link href="/voz-online/fatiga-vocal-tratamiento-online" className="font-semibold underline">
                  Fatiga vocal
                </Link>
                {" · "}
                <Link href="/voz-online/como-es-la-sesion-de-voz-online" className="font-semibold underline">
                  Cómo es la sesión
                </Link>
                {" · "}
                <Link href="/voz-online/fonoaudiologa-de-voz-online" className="font-semibold underline">
                  Terapia de voz online
                </Link>
                {" · "}
                <Link href="/voz-online/evaluacion-vocal-online" className="font-semibold underline">
                  Evaluación vocal online
                </Link>
                {" · "}
                <Link href="/voz-online/ejercicios-para-la-voz" className="font-semibold underline">
                  Ejercicios para la voz
                </Link>
                {" · "}
                <Link href="/voz-online/afonia-perdi-la-voz" className="font-semibold underline">
                  Afonía
                </Link>
              </p>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-800">
              <strong>Dato:</strong> La ASHA estima que hasta el 58% de los docentes desarrollará un trastorno de la voz durante su carrera profesional.
              <cite className="mt-1 block text-xs text-emerald-700 not-italic">
                Fuente:{" "}
                <a
                  href="https://www.asha.org/public/speech/disorders/Voice/Teachers-Use-Their-Voices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-emerald-900"
                >
                  American Speech-Language-Hearing Association (ASHA)
                </a>
                , voice disorders in teachers.
              </cite>
            </p>
          </header>

          <section className="my-10">
            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-emerald-900 mt-0 mb-4">
                Terapia vocal en un horario compatible con las clases
              </h3>
              <p className="text-emerald-800 mb-6 text-left">
                La hora es por videollamada, para adultos en todo Chile, en un horario compatible con la jornada escolar. El plan sale de la evaluación vocal: proyección sin gritar, higiene vocal y calentamiento antes de clases.
              </p>
              <WhatsAppCTA
                message="Hola, soy docente y quiero terapia vocal online."
                className="bg-emerald-600 hover:bg-emerald-700 ring-emerald-300 w-full sm:w-auto"
              >
                Agendar terapia vocal por WhatsApp
              </WhatsAppCTA>
              <p className="text-xs mt-3 text-emerald-700 font-bold opacity-80">
                Horarios compatibles con la jornada escolar.
              </p>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold mt-8 text-emerald-900 border-b pb-2">
              Qué se nota cuando la voz del profesor se cansa
            </h2>
            <ul className="space-y-4 mt-4 text-gray-800">
              <li>
                <strong>Silencio de fin de semana:</strong> El sábado y domingo te quedas mudo/a para poder apenas tener un hilo de voz el lunes por la mañana.
              </li>
              <li>
                <strong>Falta de proyección:</strong> Gritas para ordenar el curso, la vena y el cuello se te marcan pero el volumen final en sala es bajo y lleno de &quot;aire&quot;.
              </li>
              <li>
                <strong>Dolor como agujas:</strong> Las últimas horas de la jornada las das apretando los dientes del dolor en la garganta al pronunciar vocales.
              </li>
            </ul>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold text-emerald-900 text-center mb-8">
              Profesores que se atienden por videollamada
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="Teresa J., Profe Ed. Básica"
                text="Mis niños absorben todo mi tiempo. Llegaba sin una gota de voz a casa. Me asusté mucho cuando me pasé todo el verano ronca. La Katia me atendió online por zoom los miércoles en la tarde. Me enseñó a proyectar mi voz desde el estómago. Fue mi salvación profesional total."
              />
              <TestimonialCard
                name="Fabián H., Profe de Edu. Física"
                text="Gritar en un gimnasio cerrado es la muerte para las cuerdas. Desarrollé nódulos, y tras operarme debía hacer la rehabilitación online obligatoria. Katia logró sacar mi voz como nunca antes en mi vida. Es un lujo atenderse desde la casa cansado."
              />
            </div>
          </section>

          <GeoFAQ
            items={faqItems}
            includeJsonLd={false}
            className="not-prose my-12 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
