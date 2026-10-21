import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { MEDICAL_BUSINESS_ID } from "@/lib/local-business-schema";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/voz-online/ejercicios-para-la-voz";
const TITLE = "Ejercicios para la voz: calentamiento y cuidado vocal";
const DESCRIPTION =
  "Ejercicios para la voz: se indican después de la evaluación. Calentamiento general y cuidado de las cuerdas, sin prometer resultados. Adultos en Chile.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ejercicios para la voz",
    "calentamiento vocal",
    "cuidado de la voz",
    "higiene vocal",
    "terapia de voz online",
  ],
});

const faqItems = [
  {
    question: "¿Puedo hacer ejercicios de voz que vi en internet?",
    answer:
      "Mejor no como tratamiento. En esta consulta los ejercicios se indican después de la evaluación vocal, según tu voz. Una lista genérica no reemplaza ese plan.",
  },
  {
    question: "¿Qué calentamiento se puede hacer sin un plan?",
    answer:
      "El que ya está en la higiene vocal: bostezos, tarareos suaves y ejercicios de resonancia antes de hablar o cantar mucho. No es una rutina con un resultado prometido.",
  },
  {
    question: "¿Estos ejercicios sirven si doy clases, canto o locuto?",
    answer:
      "La terapia de voz online es para adultos que usan la voz en el trabajo, por videollamada en todo Chile. El plan sale de la evaluación, no de una tabla igual para todos.",
  },
  {
    question: "¿Tengo que ver al otorrino antes de ejercitar?",
    answer:
      "Si la ronquera dura más de dos semanas sin resfriado, te duele hablar o la voz se apaga de golpe, sí. La videollamada no mira las cuerdas por dentro.",
  },
];

export default function EjerciciosParaLaVozPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Terapia de voz online",
    name: "Ejercicios y calentamiento vocal online",
    description:
      "Orientación de ejercicios vocales para adultos por videollamada en todo Chile, indicados después de la evaluación y sin reemplazar el examen del otorrino.",
    url: `${SITE_URL}${PATH}`,
    areaServed: { "@type": "Country", name: "Chile" },
    provider: { "@id": MEDICAL_BUSINESS_ID },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Videollamada",
      availableLanguage: "es-CL",
    },
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    inLanguage: "es-CL",
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Voz Online", href: "/voz-online/fonoaudiologa-de-voz-online" },
            { label: "Ejercicios para la voz" },
          ]}
        />

        <article className="prose prose-lime lg:prose-lg max-w-none">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-lime-950">
              Ejercicios para la voz: calentamiento y cuidado vocal
            </h1>
            <div className="not-prose my-6 rounded-2xl border-2 border-lime-200 bg-lime-50 p-5">
              <p className="text-lg font-semibold text-lime-950" data-speakable>
                <strong>Respuesta rápida:</strong> Los ejercicios para la voz
                se indican después de la evaluación, según cómo hablas. No son
                una lista para copiar ni prometen un resultado. Si la ronquera
                dura más de dos semanas sin resfriado, el otorrino mira las
                cuerdas: la videollamada no las ve. El calentamiento, como el
                bostezo o el tarareo suave, forma parte de la higiene vocal.
              </p>
            </div>
          </header>

          <section>
            <h2 className="text-2xl font-bold text-lime-950">Para quién es</h2>
            <p>
              Para adultos que buscan ejercicios o un calentamiento antes de
              hablar o cantar. También si eres{" "}
              <Link href="/voz-online/terapia-vocal-docentes-profesores">
                profesor
              </Link>{" "}
              o{" "}
              <Link href="/voz-online/rehabilitacion-vocal-profesionales-voz">
                cantante o locutor
              </Link>
              . El servicio es por videollamada, en todo Chile. El mapa está en{" "}
              <Link href="/voz-online/fonoaudiologa-de-voz-online">
                terapia de voz online para adultos
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-lime-950">
              Por qué los ejercicios van después de la evaluación
            </h2>
            <p>
              Una lista sacada de internet no sabe cómo usas la voz. En esta
              consulta, la primera videollamada es la{" "}
              <Link href="/voz-online/evaluacion-vocal-online">
                evaluación vocal online
              </Link>
              : historia de tu voz, cómo suena y un plan. Las sesiones
              siguientes practican respiración, proyección e higiene según ese
              plan. El detalle del formato está en{" "}
              <Link href="/voz-online/como-es-la-sesion-de-voz-online">
                cómo es una sesión de voz online
              </Link>
              .
            </p>
            <p>
              No hay una cantidad de ejercicios ni un plazo que sirva para
              todos. Copiar una rutina sin esa revisión puede repetir el mismo
              esfuerzo que ya te cansa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-lime-950">
              Qué cuidado vocal ya está publicado
            </h2>
            <p>
              Esto no es un programa de ejercicios. Es el cuidado general de la{" "}
              <Link href="/voz-online/higiene-vocal-cuidado-voz">
                higiene vocal
              </Link>
              , para el día a día, no un tratamiento:
            </p>
            <ul>
              <li>
                Calentar antes de hablar o cantar mucho: bostezos, tarareos
                suaves y ejercicios de resonancia.
              </li>
              <li>No carraspear. Traga saliva, toma agua o bosteza suave.</li>
              <li>
                Incluir silencio vocal en el día si usas la voz muchas horas.
              </li>
              <li>Tomar agua: al menos 2 litros al día, como ya está publicado.</li>
              <li>No gritar. Hablar a volumen de conversación.</li>
            </ul>
            <p>
              Si la queja es ronquera que no se va, el marco está en el{" "}
              <Link href="/voz-online/tratamiento-disfonia-online">
                tratamiento de disfonía online
              </Link>
              . Si te quedaste sin voz, parte por{" "}
              <Link href="/voz-online/afonia-perdi-la-voz">afonía</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-lime-950">
              Cuándo ver al otorrino primero
            </h2>
            <p>
              Antes de empezar ejercicios, conviene que un otorrino mire las
              cuerdas si la ronquera dura más de dos semanas y no estás
              resfriado, te duele hablar, te falta el aire o la voz se apaga de
              golpe. El diagnóstico de una lesión es del otorrinolaringólogo.
              La videollamada no reemplaza la nasofibrolaringoscopía. Si ya
              te la indicaron, la terapia acompaña ese diagnóstico y no lo
              sustituye.
            </p>
          </section>

          <div className="not-prose my-10 flex justify-center">
            <WhatsAppCTA message="Hola, quiero ejercicios para la voz y saber si me corresponde una evaluación online.">
              Escribir por WhatsApp
            </WhatsAppCTA>
          </div>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-lime-100 bg-lime-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
