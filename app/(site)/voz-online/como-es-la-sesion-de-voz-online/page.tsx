import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { MEDICAL_BUSINESS_ID } from "@/lib/local-business-schema";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/voz-online/como-es-la-sesion-de-voz-online";

export const metadata = buildPageMetadata({
  path: PATH,
  title: "Cómo es una sesión de terapia de voz online",
  description:
    "Cómo es una sesión de terapia de voz online: videollamada para adultos en todo Chile, qué se trabaja y cuándo ver al otorrino antes.",
  keywords: [
    "terapia de voz online",
    "sesión de voz online",
    "fonoaudióloga voz online",
    "fonoaudiología voz adultos",
    "videollamada fonoaudióloga",
  ],
});

const faqItems = [
  {
    question: "¿Qué necesito para la videollamada?",
    answer:
      "Un dispositivo con cámara, micrófono y conexión estable, en un lugar tranquilo. No hace falta un equipo de consultorio. La hora se coordina por WhatsApp.",
  },
  {
    question: "¿La primera vez es igual que las siguientes?",
    answer:
      "No. La primera es la evaluación vocal: historia de tu voz, cómo suena y un plan. Las sesiones siguientes practican respiración, proyección e higiene según ese plan.",
  },
  {
    question: "¿Tengo que ver al otorrino antes?",
    answer:
      "Si la ronquera lleva más de dos semanas sin resfriado, te duele hablar o ya te diagnosticaron una lesión, sí: el otorrino mira las cuerdas primero. La terapia acompaña ese diagnóstico y no lo reemplaza.",
  },
  {
    question: "¿Atienden niños en esta modalidad?",
    answer:
      "No. La terapia de voz online es para adultos, en todo Chile. La fonoaudiología infantil es presencial en Chillán.",
  },
];

export default function ComoEsLaSesionPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sesión de terapia de voz online",
    serviceType: "Terapia de voz online",
    description:
      "Sesiones de fonoaudiología de voz para adultos por videollamada en todo Chile.",
    url: `${SITE_URL}${PATH}`,
    areaServed: { "@type": "Country", name: "Chile" },
    provider: { "@id": MEDICAL_BUSINESS_ID },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Videollamada",
      availableLanguage: "es-CL",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Voz Online", href: "/voz-online/fonoaudiologa-de-voz-online" },
            { label: "Cómo es la sesión" },
          ]}
        />

        <article className="prose prose-sky lg:prose-lg max-w-none">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-sky-950">
              Cómo es una sesión de terapia de voz online
            </h1>
            <div className="not-prose my-6 rounded-2xl border-2 border-sky-200 bg-sky-50 p-5">
              <p className="text-lg font-semibold text-sky-950" data-speakable>
                <strong>Respuesta rápida:</strong> Es una videollamada con
                Katia Domínguez, fonoaudióloga, para adultos en cualquier parte
                de Chile. Primero se revisa qué le pasa a tu voz. Después se
                trabaja técnica, respiración e higiene, y te llevas qué
                practicar. La hora se coordina por WhatsApp.
              </p>
            </div>
          </header>

          <section>
            <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
            <p>
              Para adultos con disfonía, ronquera, voz cansada, o con un
              informe del otorrino que pide terapia. También si eres{" "}
              <Link href="/voz-online/terapia-vocal-docentes-profesores">
                profesor
              </Link>
              ,{" "}
              <Link href="/voz-online/rehabilitacion-vocal-profesionales-voz">
                cantante o locutor
              </Link>
              . El servicio de voz es el único de esta consulta que se atiende
              en todo el país. Si buscas fonoaudiología para un niño en
              Chillán, esa atención es presencial:{" "}
              <Link href="/fonoaudiologa-ninos-chillan">
                fonoaudióloga infantil en Chillán
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sky-950">Cómo funciona</h2>
            <ol>
              <li>
                Escribes por WhatsApp y cuentas qué te pasa con la voz.
              </li>
              <li>
                La primera videollamada es la{" "}
                <Link href="/voz-online/evaluacion-vocal-online">
                  evaluación vocal online
                </Link>
                : historia de tu voz, cómo suena, pruebas de uso vocal e
                informe con plan.
              </li>
              <li>
                En las sesiones siguientes se practica lo del plan:
                respiración, proyección e{" "}
                <Link href="/voz-online/higiene-vocal-cuidado-voz">
                  higiene vocal
                </Link>
                , mirando cómo hablas en el lugar donde realmente trabajas.
              </li>
              <li>
                Entre una sesión y otra practicas eso. No hay una duración
                única: depende de lo que muestre la evaluación.
              </li>
            </ol>
            <p>
              El mapa de la consulta está en{" "}
              <Link href="/voz-online/fonoaudiologa-de-voz-online">
                terapia de voz online para adultos
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sky-950">Cuándo ver al otorrino primero</h2>
            <p>
              La sesión no mira las cuerdas por dentro. Ve al otorrino antes
              si la ronquera sigue más de dos semanas sin resfriado, te duele
              hablar, te falta el aire, o ya te diagnosticaron{" "}
              <Link href="/voz-online/nodulos-vocales-tratamiento-online">
                nódulos
              </Link>{" "}
              o{" "}
              <Link href="/voz-online/polipos-en-las-cuerdas-vocales">
                pólipos
              </Link>
              . La terapia complementa ese diagnóstico. Si la queja es la
              calidad de la voz, el marco está en el{" "}
              <Link href="/voz-online/tratamiento-disfonia-online">
                tratamiento de disfonía
              </Link>{" "}
              y en la{" "}
              <Link href="/voz-online/voz-ronca-causas-tratamiento">
                ronquera persistente
              </Link>
              . Si se te agota al final del día, parte por{" "}
              <Link href="/voz-online/fatiga-vocal-tratamiento-online">
                voz cansada
              </Link>
              .
            </p>
          </section>

          <div className="not-prose my-10 flex justify-center">
            <WhatsAppCTA message="Hola, quiero saber cómo es una sesión de terapia de voz online y agendar.">
              Agendar por WhatsApp
            </WhatsAppCTA>
          </div>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-sky-100 bg-sky-50/50 p-8"
          />
        </article>
      </main>
    </>
  );
}
