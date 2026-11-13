import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { MEDICAL_BUSINESS_ID } from "@/lib/local-business-schema";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/voz-online/disfonia-por-estres";
const TITLE = "Disfonía por estrés: ¿se puede perder la voz?";
const DESCRIPTION =
  "¿Se puede perder la voz por estrés? El estrés aprieta la voz: suena tensa y cuesta hablar. Cuándo ver al otorrino y qué trabaja la terapia online.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "disfonía por estrés",
    "disfonia por estres",
    "se puede perder la voz por estrés",
    "disfonía por tensión muscular",
    "voz apretada por estrés",
    "terapia de voz online",
    "tensión al hablar",
  ],
});

const faqItems = [
  {
    question: "¿Se puede perder la voz por estrés?",
    answer:
      "El estrés puede apretar la voz: se siente tensa, con un nudo en el cuello, y cuesta más hablar. Eso no es lo mismo que quedarte sin voz de golpe. Si la voz se corta, la página de afonía ordena ese caso. Si duele o la ronquera sigue, el otorrino mira las cuerdas.",
  },
  {
    question: "¿El estrés puede dejarme la voz apretada?",
    answer:
      "Sí puede sentirse así. En esta consulta la disfonía por tensión muscular se describe cuando el estrés y la sobrecarga al hablar hacen que el cuello y las cuerdas trabajen de más. Confirmar que no hay una lesión es del otorrino.",
  },
  {
    question: "¿La terapia de voz online quita el estrés?",
    answer:
      "No trata la ansiedad ni promete que el estrés desaparezca. Trabaja cómo respiras, la postura y los hábitos al hablar, por videollamada, en español, para adultos.",
  },
  {
    question: "¿Cómo sé si es tensión o una lesión en las cuerdas?",
    answer:
      "No se cierra por videollamada. Si hay dolor al hablar, la voz se apaga o la ronquera lleva más de dos semanas sin resfriado, el otorrinolaringólogo mira las cuerdas. La terapia no reemplaza ese examen.",
  },
  {
    question: "¿La terapia de esta disfonía es online?",
    answer:
      "Sí, si eres adulto. Es por videollamada, en español, y la hora se coordina por WhatsApp según tu zona horaria. La fonoaudiología infantil sigue siendo presencial en Chillán.",
  },
];

export default function DisfoniaPorEstresPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Terapia de voz online ante disfonía por estrés o tensión",
    serviceType: "Terapia de voz online",
    description:
      "Acompañamiento fonoaudiológico online para adultos con disfonía por estrés o tensión muscular, por videollamada en español, sin reemplazar el examen del otorrino.",
    url: `${SITE_URL}${PATH}`,
    areaServed: { "@type": "AdministrativeArea", name: "Países de habla hispana" },
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
    datePublished: "2026-10-22",
    dateModified: "2026-11-06",
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
            { label: "Disfonía por estrés" },
          ]}
        />

        <article className="prose prose-rose lg:prose-lg max-w-none">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-rose-950">{TITLE}</h1>
            <div className="not-prose my-6 rounded-2xl border-2 border-rose-200 bg-rose-50 p-5">
              <p className="text-lg font-semibold text-rose-950" data-speakable>
                <strong>Respuesta rápida:</strong> El estrés puede apretarte la
                voz: se siente tensa, con un nudo en el cuello, y cuesta más
                hablar. Eso no es quedarte sin voz de golpe. La terapia de voz
                online —adultos, por videollamada, en español— trabaja
                respiración, postura y hábitos al hablar. No diagnostica una
                lesión: el otorrinolaringólogo mira las cuerdas. Si la voz se
                corta, duele o la ronquera sigue, el otorrino va primero.
              </p>
            </div>
          </header>

          <section>
            <h2 className="text-2xl font-bold text-rose-950">Para quién es</h2>
            <p>
              Para adultos que sienten la voz apretada, un nudo en el cuello o
              que les cuesta más hablar cuando hay estrés o sobrecarga. El mapa
              del servicio está en{" "}
              <Link href="/voz-online/fonoaudiologa-de-voz-online">
                terapia de voz online para adultos
              </Link>
              . Si buscas fonoaudiología para un niño en Chillán, esa atención
              es presencial:{" "}
              <Link href="/fonoaudiologa-ninos-chillan">
                fonoaudióloga infantil en Chillán
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rose-950">
              Qué es la disfonía por tensión
            </h2>
            <p>
              La{" "}
              <Link href="/voz-online/tratamiento-disfonia-online">
                disfonía
              </Link>{" "}
              es un cambio de la voz: ronquera, voz tensa, soplada o afonía
              parcial. Puede ser funcional, por cómo usas la voz, u orgánica,
              cuando hay una lesión. Esa diferencia no se cierra por
              videollamada.
            </p>
            <p>
              En esta consulta, la disfonía por tensión muscular se describe
              cuando el estrés y la sobrecarga al hablar hacen que el cuello y
              las cuerdas trabajen de más. Puede doler o sentirse como un
              apriete. No es un diagnóstico que se ponga en la hora online: el
              otorrinolaringólogo es quien mira las cuerdas y descarta una
              lesión.
            </p>
            <p>
              Si lo que se agota es la voz al final del día, el camino cercano
              es{" "}
              <Link href="/voz-online/fatiga-vocal-tratamiento-online">
                voz cansada
              </Link>
              . Si la voz se corta de golpe, mira{" "}
              <Link href="/voz-online/afonia-perdi-la-voz">
                me quedé sin voz
              </Link>
              . Si se quedó después de una gripe o un resfrío, mira{" "}
              <Link href="/voz-online/voz-despues-de-un-resfrio">
                la voz después de un resfrío
              </Link>
              . Si te dijeron que es una condición neurológica y no solo
              tensión, la página distinta es{" "}
              <Link href="/voz-online/disfonia-espasmodica">
                disfonía espasmódica
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rose-950">
              Cómo trabaja la terapia de voz
            </h2>
            <p>
              La terapia no quita el estrés. Mira cómo hablas: la respiración,
              la postura y los hábitos que aprietan la voz. En la videollamada
              se puede ver la postura en la que trabajas y el patrón de
              respiración. Las sesiones practican respiración, proyección e{" "}
              <Link href="/voz-online/higiene-vocal-cuidado-voz">
                higiene vocal
              </Link>
              . En esa higiene ya publicada están el silencio vocal durante el
              día, no carraspear y no gritar.
            </p>
            <p>
              Los ejercicios no se arman solos en casa. Se indican después de
              la evaluación. El detalle está en{" "}
              <Link href="/voz-online/ejercicios-para-la-voz">
                ejercicios para la voz
              </Link>
              . El formato de la hora está en{" "}
              <Link href="/voz-online/como-es-la-sesion-de-voz-online">
                cómo es una sesión de voz online
              </Link>
              . No hay un plazo prometido para que la voz deje de apretarse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rose-950">
              Cuándo ver al otorrino primero
            </h2>
            <p>
              Antes de tratar la tensión como si fuera solo estrés, conviene
              que un otorrino mire las cuerdas si:
            </p>
            <ul>
              <li>Te duele hablar o sientes un nudo que no cede.</li>
              <li>La voz se apaga de golpe o te falta el aire.</li>
              <li>La ronquera dura más de dos semanas y no estás resfriado.</li>
              <li>La tensión se repite y ya no te alcanza la voz para trabajar.</li>
            </ul>
            <p>
              La videollamada no reemplaza la nasofibrolaringoscopía. En la{" "}
              <Link href="/voz-online/evaluacion-vocal-online">
                evaluación vocal online
              </Link>{" "}
              se escucha la voz y se describe cómo la usas, incluida la
              tensión. El examen de la laringe lo hace el otorrinolaringólogo.
            </p>
          </section>

          <div className="not-prose my-10 flex justify-center">
            <WhatsAppCTA message="Hola, siento la voz apretada por estrés y quiero saber si la terapia de voz online me sirve.">
              Escribir por WhatsApp
            </WhatsAppCTA>
          </div>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-rose-100 bg-rose-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
