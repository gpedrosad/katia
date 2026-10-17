import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { RelatedGuides } from "@/app/_components/RelatedGuides";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

const faqItems = [
  {
    question: "¿Esta página es la definición de conciencia fonológica?",
    answer:
      "No. La definición está en el glosario de conciencia fonológica. Esta página describe la evaluación y la estimulación en la consulta en Chillán.",
  },
  {
    question: "¿Qué es la conciencia fonológica?",
    answer:
      "Es la habilidad de identificar y manipular sonidos del habla: rimar, segmentar sílabas y fonemas. Es base para aprender a leer y escribir.",
  },
  {
    question: "¿A qué edad conviene evaluarla en Chillán?",
    answer:
      "Ideal entre 4 y 5 años, antes de primero básico. Si hay trastorno fonológico o retraso del lenguaje, conviene evaluar antes.",
  },
  {
    question: "¿Cómo se conecta con la lectoescritura?",
    answer:
      "Rimas, sílabas y fonemas son una base del leer y del escribir. Si en primero básico confunde letras o le cuesta leer, las guías de lectoescritura ayudan a describir lo que ves. La evaluación en la consulta mira a tu hijo, no reemplaza esas guías.",
  },
];

export const metadata = buildPageMetadata({
  path: "/servicios/conciencia-fonologica-chillan",
  title: "Conciencia fonológica en la consulta | Chillán",
  description:
    "Evaluación y estimulación en la consulta en Chillán: rimas, sílabas y fonemas, antes de primero básico. La definición está en el glosario.",
  keywords: [
    "conciencia fonológica Chillán",
    "evaluación conciencia fonológica",
    "estimulación conciencia fonológica",
    "rimas sílabas fonemas niños",
    "conciencia fonológica y lectoescritura",
  ],
});

export default function ConcienciaFonologicaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Evaluación y estimulación de conciencia fonológica en Chillán",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "TherapeuticProcedure",
      name: "Estimulación de Conciencia Fonológica",
      description:
        "Evaluación y estimulación en consulta de rimas, sílabas y fonemas, como base de la lectoescritura, en niños de Chillán.",
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
            { label: "Servicios", href: "/fonoaudiologa-ninos-chillan" },
            { label: "Conciencia Fonológica" },
          ]}
        />

        <article className="prose prose-lime lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-lime-950">
            Evaluación de conciencia fonológica en Chillán
          </h1>
          <p className="lead font-medium text-gray-700" data-speakable>
            Esta página es la <strong>evaluación y la estimulación en la consulta</strong>.
            La definición corta —reconocer y jugar con los sonidos, sin leer—
            está en el{" "}
            <Link href="/glosario/conciencia-fonologica">
              glosario de conciencia fonológica
            </Link>
            . Si tu hijo está en pre-kínder o kínder y las rimas o los sonidos
            no le salen, aquí se ve cómo se revisa eso en Chillán.
          </p>

          <section>
            <h2 className="mt-8 text-2xl font-bold text-lime-900">
              Cómo se ve en la consulta
            </h2>
            <p>
              En la sesión se juega con los sonidos, no se parte por un texto
              de lectura. Lo que se mira, según la edad, es esto:
            </p>
            <ul>
              <li>
                <strong>Rimas:</strong> si reconoce que «gato» y «pato» terminan
                igual.
              </li>
              <li>
                <strong>Sílabas:</strong> separar «pe-lo-ta» en golpes de palmas.
              </li>
              <li>
                <strong>Sonido inicial:</strong> notar que «mesa» empieza con /m/.
              </li>
              <li>
                <strong>Cambiar un sonido:</strong> pasar de «pato» a «gato».
              </li>
            </ul>
            <p>
              Con eso se ve el nivel y se arman actividades de juego para
              fortalecerlo antes de la lectura formal. Si ya hay un{" "}
              <Link href="/tratamientos/trastorno-fonologico-chillan">
                trastorno fonológico
              </Link>{" "}
              o un{" "}
              <Link href="/tratamientos/retraso-del-lenguaje-chillan">
                retraso del lenguaje
              </Link>
              , esta revisión se adelanta: no se espera a primero básico.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-bold text-lime-900">
              A qué edad se evalúa
            </h2>
            <p>
              Lo habitual es entre los <strong>4 y 5 años</strong>, antes de
              primero básico. No es un test de lectura: a esa edad muchos niños
              todavía no leen, y justamente por eso se miran los sonidos.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-bold text-lime-900">
              Cómo se conecta con la lectoescritura
            </h2>
            <p>
              Rimas, sílabas y fonemas son una base para leer y escribir. Si
              en el colegio ya cuesta, el apoyo de lectura está en{" "}
              <Link href="/servicios/dificultades-lectoescritura">
                dificultades de lectoescritura
              </Link>
              . Las guías para padres describen lo que se ve en casa, sin
              convertir esta página en un diagnóstico:
            </p>
            <ul>
              <li>
                <Link href="/lectoescritura">Lectoescritura: guías para padres</Link>
              </li>
              <li>
                <Link href="/lectoescritura/confunde-letras-al-leer">
                  Confunde letras al leer
                </Link>
              </li>
              <li>
                <Link href="/lectoescritura/escribe-letras-al-reves">
                  Escribe letras al revés
                </Link>
              </li>
              <li>
                <Link href="/lectoescritura/le-cuesta-leer-en-primero">
                  Le cuesta leer en primero
                </Link>
              </li>
            </ul>
          </section>

          <RelatedGuides
            intro="Si quieres nombrar lo que ves al leer o al escribir, parte por estas guías. La evaluación de los sonidos, en la consulta, sigue en esta página."
            items={[
              {
                href: "/lectoescritura",
                title: "Lectoescritura: guías para padres",
              },
              {
                href: "/lectoescritura/confunde-letras-al-leer",
                title: "Confunde letras al leer",
              },
              {
                href: "/lectoescritura/escribe-letras-al-reves",
                title: "Escribe letras al revés",
              },
              {
                href: "/lectoescritura/le-cuesta-leer-en-primero",
                title: "Le cuesta leer en primero",
              },
              {
                href: "/glosario/conciencia-fonologica",
                title: "Definición: qué es la conciencia fonológica",
              },
            ]}
          />

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-lime-100 bg-lime-50/40 p-8"
          />

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              message="Hola, busco evaluar la conciencia fonológica de mi hijo en Chillán"
              className="bg-lime-600 hover:bg-lime-700 ring-lime-300"
            >
              Evaluar conciencia fonológica
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
