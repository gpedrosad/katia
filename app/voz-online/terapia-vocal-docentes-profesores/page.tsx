import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terapia Vocal para Docentes y Profesores | Online Chile",
  description:
    "Fonoaudióloga especialista en voz del docente. Tratamiento y prevención de disfonía para profesores online en todo Chile. Cuidado vocal profesional.",
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
          <h1 className="text-4xl font-extrabold text-emerald-950">
            Terapia Vocal para Docentes y Profesores — Online Todo Chile
          </h1>
          <p className="lead font-medium text-gray-700">
            Los profesores están entre los profesionales con mayor riesgo de
            desarrollar trastornos de la voz. Estudios estiman que hasta un{" "}
            <strong>57% de los docentes</strong> en Chile ha presentado algún
            problema vocal durante su carrera. Si eres profesor y tu voz sufre,
            no estás solo y tiene solución.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-emerald-900">
              La voz del docente: un problema silencioso
            </h2>
            <ul>
              <li>
                Llegas al viernes prácticamente sin voz y necesitas todo el fin
                de semana para recuperarte.
              </li>
              <li>
                Sientes{" "}
                <Link
                  href="/voz-online/fatiga-vocal-tratamiento-online"
                  className="font-semibold text-emerald-600"
                >
                  fatiga vocal
                </Link>{" "}
                después de la segunda hora de clase.
              </li>
              <li>
                Has tenido que pedir licencia porque te quedaste completamente
                sin voz.
              </li>
              <li>
                El otorrino te dijo que tienes{" "}
                <Link
                  href="/voz-online/nodulos-vocales-tratamiento-online"
                  className="font-semibold text-emerald-600"
                >
                  nódulos vocales
                </Link>{" "}
                o edema en las cuerdas.
              </li>
              <li>
                Sientes un &quot;nudo&quot; o tensión permanente en la garganta y
                cuello.
              </li>
            </ul>
          </section>

          <div className="bg-emerald-50 p-6 rounded-xl my-8 border border-emerald-100">
            <h3 className="text-xl font-bold text-emerald-900 mt-0">
              Terapia online: ideal para profesores
            </h3>
            <p className="text-emerald-800">
              El formato online elimina la barrera de tiempo y distancia que
              muchos docentes enfrentan. Puedes tomar tu sesión desde tu casa
              después de clases, sin trasladarte. Trabajamos{" "}
              <strong>técnica vocal aplicada a la sala de clases</strong>:
              proyección sin esfuerzo, uso estratégico de pausas, resonancia
              facial y amplificación natural de la voz. Además, enseñamos
              rutinas de{" "}
              <Link
                href="/voz-online/higiene-vocal-cuidado-voz"
                className="font-semibold text-emerald-700 underline"
              >
                higiene vocal
              </Link>{" "}
              adaptadas a tu jornada escolar.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-emerald-900">
              ¿Qué incluye el programa de voz docente?
            </h2>
            <ul>
              <li>
                <Link
                  href="/voz-online/evaluacion-vocal-online"
                  className="font-semibold text-emerald-600"
                >
                  Evaluación vocal completa
                </Link>{" "}
                para determinar tu nivel de riesgo y daño actual.
              </li>
              <li>
                Técnica respiratoria funcional para sostener la voz durante toda
                la jornada.
              </li>
              <li>
                Ejercicios de calentamiento vocal (&lt;5 minutos) para hacer
                antes de cada clase.
              </li>
              <li>
                Estrategias de proyección vocal en salas grandes sin
                amplificación.
              </li>
              <li>
                Plan de manejo de la voz para períodos de alta demanda
                (evaluaciones, actos).
              </li>
            </ul>
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20soy%20profesor/a%20y%20necesito%20ayuda%20con%20mi%20voz,%20atenci%C3%B3n%20online"
              className="bg-emerald-600 hover:bg-emerald-700 ring-emerald-300"
            >
              Cuidar mi Voz de Docente
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
