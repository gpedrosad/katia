import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ, type GeoFAQItem } from "@/app/_components/GeoFAQ";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { MEDICAL_BUSINESS_ID } from "@/lib/local-business-schema";
import { BUSINESS_HOURS, SITE_URL, whatsappUrl } from "@/lib/site";

export type VoiceArea =
  | { "@type": "Country" | "City" | "State" | "AdministrativeArea"; name: string }
  | Array<{ "@type": "Country" | "City" | "State" | "AdministrativeArea"; name: string }>;

type VoiceClusterPageProps = {
  path: string;
  title: string;
  description: string;
  breadcrumb: string;
  quickAnswer: string;
  serviceName: string;
  serviceDescription: string;
  areaServed: VoiceArea;
  whatsappMessage: string;
  faq: GeoFAQItem[];
  /** Si viene, la página es de otro país y coordina el horario según esa zona. */
  hoursPlace?: string;
  children: ReactNode;
};

export function VoiceClusterPage({
  path,
  title,
  description,
  breadcrumb,
  quickAnswer,
  serviceName,
  serviceDescription,
  areaServed,
  whatsappMessage,
  faq,
  hoursPlace,
  children,
}: VoiceClusterPageProps) {
  const pageUrl = `${SITE_URL}${path}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: "Terapia de voz online",
    description: serviceDescription,
    url: pageUrl,
    areaServed,
    provider: { "@id": MEDICAL_BUSINESS_ID },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Videollamada",
      availableLanguage: "es",
    },
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "es",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
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
            { label: breadcrumb },
          ]}
        />

        <article className="prose prose-sky lg:prose-lg max-w-none">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-sky-950">{title}</h1>
            <div className="not-prose my-6 rounded-2xl border-2 border-sky-200 bg-sky-50 p-5">
              <p className="text-lg font-semibold text-sky-950" data-speakable>
                <strong>Respuesta rápida:</strong> {quickAnswer}
              </p>
            </div>
          </header>

          {children}

          {hoursPlace ? (
            <section>
              <h2 className="text-2xl font-bold text-sky-950">
                Cómo se coordina el horario
              </h2>
              <p>
                El horario de atención publicado es de {BUSINESS_HOURS.daysLabel}, de{" "}
                {BUSINESS_HOURS.opens} a {BUSINESS_HOURS.closes}, hora de Chile. Si estás en{" "}
                {hoursPlace}, la hora de la videollamada se coordina según tu zona horaria.
              </p>
              <p>
                Escribes por WhatsApp, cuentas desde qué ciudad escribes y qué franja te acomoda, y
                desde Chile se acuerda la hora.
              </p>
            </section>
          ) : null}

          <div className="not-prose my-10 flex flex-col items-center gap-4 text-center">
            <p className="max-w-xl text-base text-sky-950">
              Para agendar,{" "}
              <a
                href={whatsappUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-800 underline"
              >
                escribe por WhatsApp
              </a>
              . Ahí se consulta si hay hora. El detalle de la videollamada está en{" "}
              <Link
                href="/voz-online/como-es-la-sesion-de-voz-online"
                className="font-semibold text-sky-800 underline"
              >
                cómo es la sesión de voz online
              </Link>
              .
            </p>
            <WhatsAppCTA message={whatsappMessage}>Consultar horario por WhatsApp</WhatsAppCTA>
          </div>

          <p>
            Si buscas fonoaudiología para un niño en Chillán, esa atención es presencial:{" "}
            <Link href="/fonoaudiologa-ninos-chillan">fonoaudióloga infantil en Chillán</Link>.
          </p>

          <GeoFAQ
            items={faq}
            className="not-prose my-12 rounded-2xl border border-sky-100 bg-sky-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
