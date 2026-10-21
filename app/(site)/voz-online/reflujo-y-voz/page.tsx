import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { MEDICAL_BUSINESS_ID } from "@/lib/local-business-schema";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/voz-online/reflujo-y-voz";
const TITLE = "Voz ronca por reflujo: qué hace la terapia de voz";
const DESCRIPTION =
  "Voz ronca por reflujo: el gastroenterólogo o el otorrino tratan el ácido. La terapia de voz online apoya tus hábitos al hablar. Adultos en Chile.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "reflujo y voz",
    "voz ronca por reflujo",
    "reflujo laringofaríngeo",
    "terapia de voz online",
    "ronquera por reflujo",
  ],
});

const faqItems = [
  {
    question: "¿La terapia de voz cura el reflujo?",
    answer:
      "No. El reflujo lo trata el gastroenterólogo o el otorrino. La terapia de voz online apoya cómo usas la voz y no baja el ácido.",
  },
  {
    question: "¿Puedo tener la voz ronca por reflujo sin acidez?",
    answer:
      "Puede pasar. Aquí el reflujo laringofaríngeo se describe como ácido que irrita las cuerdas, a veces sin los síntomas típicos de reflujo. Confirmarlo es del médico, no de la videollamada.",
  },
  {
    question: "¿La videollamada reemplaza la nasofibrolaringoscopía?",
    answer:
      "No. Si la ronquera sigue más de dos semanas sin resfriado, o ya te indicaron mirar las cuerdas, el otorrino va primero. La terapia no reemplaza ese examen.",
  },
  {
    question: "¿Sirve si vivo fuera de Chillán?",
    answer:
      "Sí, para adultos, por videollamada, en cualquier ciudad de Chile. La hora se coordina por WhatsApp. La fonoaudiología infantil es presencial en Chillán.",
  },
];

export default function ReflujoYVozPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Terapia de voz online en ronquera por reflujo",
    serviceType: "Terapia de voz online",
    description:
      "Apoyo fonoaudiológico online para adultos con voz ronca asociada a reflujo, en todo Chile. El reflujo lo trata el médico; la terapia acompaña los hábitos vocales.",
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
            { label: "Reflujo y voz" },
          ]}
        />

        <article className="prose prose-cyan lg:prose-lg max-w-none">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-cyan-950">
              Voz ronca por reflujo: qué hace la terapia de voz
            </h1>
            <div className="not-prose my-6 rounded-2xl border-2 border-cyan-200 bg-cyan-50 p-5">
              <p className="text-lg font-semibold text-cyan-950" data-speakable>
                <strong>Respuesta rápida:</strong> La ronquera por reflujo
                aparece cuando el ácido irrita las cuerdas, a veces sin la
                acidez que reconoces. El reflujo lo trata el gastroenterólogo o
                el otorrino. La videollamada no mira la laringe ni baja el
                ácido. La terapia de voz online, para adultos en todo Chile,
                apoya los hábitos al hablar mientras ese tratamiento médico
                sigue.
              </p>
            </div>
          </header>

          <section>
            <h2 className="text-2xl font-bold text-cyan-950">Para quién es</h2>
            <p>
              Para adultos con voz ronca a los que les hablaron de reflujo, o
              que notan la voz peor y ya saben que el ácido les irrita. El
              reflujo es una de las causas que ya están descritas en{" "}
              <Link href="/voz-online/voz-ronca-causas-tratamiento">
                ronquera persistente
              </Link>
              . El mapa del servicio está en{" "}
              <Link href="/voz-online/fonoaudiologa-de-voz-online">
                terapia de voz online para adultos
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-950">
              Qué le hace el reflujo a la voz
            </h2>
            <p>
              El ácido gástrico daña las cuerdas. En el reflujo
              laringofaríngeo eso puede pasar a veces sin los síntomas típicos
              de reflujo. Confirmarlo y tratar el ácido corresponde al
              gastroenterólogo o al otorrino. La fonoaudiología no ve las
              cuerdas por dentro en la videollamada. El diagnóstico laríngeo
              lo hace el otorrinolaringólogo. La terapia no reemplaza ese
              examen ni el tratamiento del ácido.
            </p>
            <p>
              En la{" "}
              <Link href="/voz-online/higiene-vocal-cuidado-voz">
                higiene vocal
              </Link>{" "}
              ya está el cuidado publicado: evitar comer tarde y consultar si
              hay síntomas. Eso no es una dieta ni un remedio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-950">
              Qué hace la terapia de voz
            </h2>
            <p>
              Mientras el médico trata el reflujo, la terapia revisa cómo usas
              la voz: carraspeo, tensión al hablar, proyección e higiene. La
              primera hora es la{" "}
              <Link href="/voz-online/evaluacion-vocal-online">
                evaluación vocal online
              </Link>
              , que pregunta por antecedentes como el reflujo. Las sesiones
              siguientes siguen ese plan. El formato está en{" "}
              <Link href="/voz-online/como-es-la-sesion-de-voz-online">
                cómo es una sesión de voz online
              </Link>
              .
            </p>
            <p>
              Si la ronquera es la queja principal, el marco general está en el{" "}
              <Link href="/voz-online/tratamiento-disfonia-online">
                tratamiento de disfonía online
              </Link>
              . Si además se te corta la voz, mira{" "}
              <Link href="/voz-online/afonia-perdi-la-voz">afonía</Link>. No se
              promete que la ronquera ceda en un plazo fijo: depende de lo que
              muestre la evaluación y de cómo vaya el tratamiento médico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-950">
              Cuándo ver al otorrino primero
            </h2>
            <p>
              Ve al otorrino antes si la ronquera sigue más de dos semanas sin
              resfriado, te duele hablar, te falta el aire o la voz se apaga de
              golpe. La videollamada no reemplaza la nasofibrolaringoscopía.
              Si ya te pidieron ese examen, hazlo: la terapia acompaña el
              diagnóstico y no lo sustituye.
            </p>
          </section>

          <div className="not-prose my-10 flex justify-center">
            <WhatsAppCTA message="Hola, tengo la voz ronca y me hablaron de reflujo. Quiero terapia de voz online.">
              Escribir por WhatsApp
            </WhatsAppCTA>
          </div>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-cyan-100 bg-cyan-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
