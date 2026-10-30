import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { MEDICAL_BUSINESS_ID } from "@/lib/local-business-schema";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/voz-online/afonia-perdi-la-voz";
const TITLE = "Afonía: me quedé sin voz, qué hacer y cuándo consultar";
const DESCRIPTION =
  "Afonía es quedarte sin voz. El otorrino mira las cuerdas; la terapia de voz online ayuda si vuelve por el uso. Adultos, videollamada en Chile.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "me quedé sin voz",
    "afonía",
    "perdí la voz",
    "terapia de voz online",
    "afonía tratamiento",
  ],
});

const faqItems = [
  {
    question: "¿Me quedé sin voz: tengo que ver al otorrino?",
    answer:
      "Si la voz se apagó de golpe, te duele hablar, te falta el aire, o la ronquera lleva más de dos semanas sin resfriado, sí. El otorrino mira las cuerdas. La videollamada no reemplaza ese examen.",
  },
  {
    question: "¿La terapia de voz online devuelve la voz?",
    answer:
      "No se puede prometer un plazo. Si la afonía se repite por forzar la voz, la terapia —por videollamada, para adultos en todo Chile— revisa cómo hablas y trabaja higiene y técnica. Una lesión la diagnostica el otorrinolaringólogo.",
  },
  {
    question: "¿Qué puedo hacer mientras consulto?",
    answer:
      "En la higiene vocal de esta consulta están el silencio vocal durante el día, no carraspear y no gritar. Eso no reemplaza la evaluación ni el examen del otorrino.",
  },
  {
    question: "¿Atienden esta afonía en todo Chile?",
    answer:
      "Sí, si eres adulto. La hora se coordina por WhatsApp. La fonoaudiología infantil sigue siendo presencial en Chillán.",
  },
];

export default function AfoniaPerdiLaVozPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Terapia de voz online ante afonía",
    serviceType: "Terapia de voz online",
    description:
      "Acompañamiento fonoaudiológico online para adultos con afonía o pérdida de voz recurrente, en todo Chile, sin reemplazar el examen del otorrino.",
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
    dateModified: "2026-10-30",
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
            { label: "Afonía" },
          ]}
        />

        <article className="prose prose-rose lg:prose-lg max-w-none">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-rose-950">
              Me quedé sin voz (afonía): qué hacer y cuándo consultar
            </h1>
            <div className="not-prose my-6 rounded-2xl border-2 border-rose-200 bg-rose-50 p-5">
              <p className="text-lg font-semibold text-rose-950" data-speakable>
                <strong>Respuesta rápida:</strong> Si te quedaste sin voz de
                golpe, el otorrino es quien mira las cuerdas. La videollamada
                no reemplaza ese examen. La terapia de voz online, para adultos
                en todo Chile, se usa cuando la afonía vuelve por forzar la
                voz: se escucha cómo hablas y se trabaja higiene y técnica. No
                hay un plazo prometido para recuperar la voz.
              </p>
            </div>
          </header>

          <section>
            <h2 className="text-2xl font-bold text-rose-950">Para quién es</h2>
            <p>
              Para adultos que se quedaron sin voz de un momento a otro, o a
              los que la afonía se les repite después de hablar mucho. El mapa
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
              Qué es la afonía y cuándo ayuda la terapia
            </h2>
            <p>
              La afonía es quedarte sin voz. En esta consulta, la{" "}
              <Link href="/voz-online/tratamiento-disfonia-online">
                disfonía
              </Link>{" "}
              incluye la ronquera, la voz tensa o soplada y la afonía parcial.
              Puede venir del uso de la voz o de una lesión: esa diferencia no
              se cierra por videollamada.
            </p>
            <p>
              La terapia ayuda cuando los episodios vuelven por forzar la voz
              —gritar o hablar en ruido— y el otorrino ya descartó lo que hay
              que mirar en las cuerdas. Se revisa cómo hablas, con{" "}
              <Link href="/voz-online/higiene-vocal-cuidado-voz">
                higiene vocal
              </Link>{" "}
              y técnica. Si lo que se agota es la voz al final del día, el
              camino cercano es{" "}
              <Link href="/voz-online/fatiga-vocal-tratamiento-online">
                voz cansada
              </Link>
              . Si la ronquera no se va, está en{" "}
              <Link href="/voz-online/voz-ronca-causas-tratamiento">
                ronquera persistente
              </Link>
              . Los{" "}
              <Link href="/voz-online/ejercicios-para-la-voz">
                ejercicios para la voz
              </Link>{" "}
              se indican después de la evaluación. Si das clases, mira la{" "}
              <Link href="/voz-online/terapia-vocal-docentes-profesores">
                terapia vocal para docentes
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rose-950">
              Cuándo ver al otorrino primero
            </h2>
            <p>
              Antes de empezar ejercicios, conviene que un otorrino mire las
              cuerdas si:
            </p>
            <ul>
              <li>La voz se apagó de golpe.</li>
              <li>Te duele hablar o te falta el aire.</li>
              <li>La ronquera dura más de dos semanas y no estás resfriado.</li>
              <li>La afonía se repite una y otra vez.</li>
            </ul>
            <p>
              La videollamada no reemplaza la nasofibrolaringoscopía. En la{" "}
              <Link href="/voz-online/evaluacion-vocal-online">
                evaluación vocal online
              </Link>{" "}
              se escucha y se describe el uso de la voz. El formato de la hora
              está en{" "}
              <Link href="/voz-online/como-es-la-sesion-de-voz-online">
                cómo es una sesión de voz online
              </Link>
              . Mientras consultas, la higiene vocal ya publicada pide
              períodos de silencio, no carraspear y no gritar. Si te dijeron
              que el ácido también influye, mira{" "}
              <Link href="/voz-online/reflujo-y-voz">voz ronca por reflujo</Link>
              .
            </p>
          </section>

          <div className="not-prose my-10 flex justify-center">
            <WhatsAppCTA message="Hola, me quedé sin voz y quiero saber si la terapia de voz online me sirve.">
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
