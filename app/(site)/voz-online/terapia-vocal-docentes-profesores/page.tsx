import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terapia Vocal para Docentes y Profesores | Online Chile",
  description:
    "¿Llegas al viernes sin voz por las clases? Terapia vocal online exclusiva para docentes. Salva tus cuerdas vocales desde casa con fonoaudióloga experta.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/voz-online/terapia-vocal-docentes-profesores",
  },
};

export default function TerapiaVocalDocentesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Por qué los profesores pierden la voz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los docentes usan la voz entre 6 y 8 horas diarias, muchas veces en ambientes ruidosos, con mala acústica, sin amplificación y con técnica vocal deficiente. Esto genera un sobresfuerzo crónico que puede derivar en disfonía o nódulos vocales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede prevenir la disfonía docente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Con técnica vocal adecuada, higiene vocal, hidratación y uso estratégico de la voz se puede prevenir. La terapia fonoaudiológica online enseña estas herramientas de manera práctica.",
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
            { label: "Voz para Docentes" },
          ]}
        />

        <article className="prose prose-emerald lg:prose-lg max-w-none">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-emerald-950 mb-6">
              ¿Sobrevives apenas tus clases porque tu voz no da más?
            </h1>
            <p className="lead font-medium text-gray-700 max-w-3xl mx-auto">
              Ser profesor y quedarte sin voz no es un "gafe del oficio" aceptable. Es una alerta roja de que estás destruyendo tu herramienta de trabajo vital. <strong>Casi el 60% de los docentes en Chile</strong> enfrentará un problema vocal severo en su carrera. Sal de la estadística aprendiendo a usar tu voz sin dañarte.
            </p>
          </header>

          <section className="my-10">
            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-emerald-900 mt-0 mb-4">
                No arriesgues una licencia médica ni tu carrera vocacional
              </h3>
              <p className="text-emerald-800 mb-6 text-left">
                He visto a cientos de profesores llegar a consulta llorando porque la disfonía y los nódulos amenazaban con forzarlos a cambiar de profesión. A través de nuestra terapia de voz 100% online, puedes entrar a la sala con la certeza de que tu voz resistirá la jornada completa. Sin tener que ir a un box, directo desde tu hogar tras tu horario escolar.
              </p>
              <WhatsAppCTA
                href="https://wa.me/56995497838?text=Hola,%20soy%20docente%20y%20mi%20voz%20no%20da%20m%C3%A1s.%20Deseo%20tratamiento%20online."
                className="bg-emerald-600 hover:bg-emerald-700 ring-emerald-300 w-full sm:w-auto"
              >
                Proteger Mi Voz Docente
              </WhatsAppCTA>
              <p className="text-xs mt-3 text-emerald-700 font-bold opacity-80">
                Horarios especiales compatibles post jornada escolar.
              </p>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold mt-8 text-emerald-900 border-b pb-2">
              El diagnóstico oculto tras el pizarrón
            </h2>
            <ul className="space-y-4 mt-4 text-gray-800">
              <li>
                <strong>Silencio de fin de semana:</strong> El sábado y domingo te quedas mudo/a para poder apenas tener un hilo de voz el lunes por la mañana.
              </li>
              <li>
                <strong>Falta de proyección:</strong> Gritas para ordenar el curso, la vena y el cuello se te marcan pero el volumen final en sala es bajo y lleno de "aire".
              </li>
              <li>
                <strong>Dolor como agujas:</strong> Las últimas horas de la jornada las das apretando los dientes del dolor en la garganta al pronunciar vocales.
              </li>
            </ul>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-bold text-emerald-900 text-center mb-8">
              Profesores que hoy hacen clases sin miedo
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
        </article>
      </main>
    </>
  );
}
