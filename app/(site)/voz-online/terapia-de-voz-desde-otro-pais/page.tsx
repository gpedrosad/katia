import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { MEDICAL_BUSINESS_ID } from "@/lib/local-business-schema";
import { buildPageMetadata } from "@/lib/seo";
import { BUSINESS_HOURS, SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/voz-online/terapia-de-voz-desde-otro-pais";
const TITLE = "Terapia de voz online desde otro país";
const DESCRIPTION =
  "Terapia de voz en español para adultos, por videollamada desde Chile, aunque vivas en otro país. El horario se coordina a tu zona horaria.";

const WHATSAPP =
  "Hola, vivo fuera de Chile y quiero terapia de voz en español por videollamada";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "terapia de voz online desde otro país",
    "fonoaudióloga en español por videollamada",
    "terapia de voz en español",
    "fonoaudióloga online internacional",
    "videollamada fonoaudióloga",
  ],
});

const faqs = [
  {
    question: "¿Puedo hacer terapia de voz si vivo fuera de Chile?",
    answer:
      "Sí, si eres adulto y la sesión te acomoda por videollamada. Es terapia de voz en español, desde Chile, con Katia Domínguez, fonoaudióloga. El horario se coordina a tu zona horaria.",
  },
  {
    question: "¿La sesión es distinta si estoy en Miami?",
    answer:
      "La videollamada es la misma. Miami y Florida tienen su página porque así se busca la fonoaudióloga en español. El horario se acuerda según tu zona, dentro de la atención publicada en Chile.",
  },
  {
    question: "¿Qué horario hay?",
    answer:
      "La atención publicada es de lunes a viernes, de 10:00 a 18:00, hora de Chile. Escribes por WhatsApp desde qué ciudad conectas y qué franja te acomoda, y desde Chile se acuerda la hora.",
  },
  {
    question: "¿Qué necesito para conectarme?",
    answer:
      "Un dispositivo con cámara, micrófono y conexión estable, en un lugar tranquilo. No hace falta un equipo de consultorio. La primera vez es la evaluación vocal. Las siguientes practican según ese plan.",
  },
  {
    question: "¿También es para niños?",
    answer:
      "No. La terapia de voz online es para adultos. La fonoaudiología infantil es presencial en Chillán.",
  },
];

export default function TerapiaVozDesdeOtroPaisPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Terapia de voz online desde otro país",
    serviceType: "Terapia de voz online",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    areaServed: { "@type": "Place", name: "Internacional" },
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
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    inLanguage: "es",
    datePublished: "2026-10-24",
    dateModified: "2026-10-24",
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
            {
              label: "Voz Online",
              href: "/voz-online/fonoaudiologa-de-voz-online",
            },
            { label: "Desde otro país" },
          ]}
        />

        <article className="prose prose-sky lg:prose-lg max-w-none">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-sky-950">{TITLE}</h1>
            <div className="not-prose my-6 rounded-2xl border-2 border-sky-200 bg-sky-50 p-5">
              <p className="text-lg font-semibold text-sky-950" data-speakable>
                <strong>Respuesta rápida:</strong> Si eres adulto, la terapia de
                voz puede ser por videollamada desde Chile, en español, estés
                donde estés. Katia Domínguez, fonoaudióloga, coordina el horario
                a tu zona horaria. La atención publicada es de{" "}
                {BUSINESS_HOURS.daysLabel}, de {BUSINESS_HOURS.opens} a{" "}
                {BUSINESS_HOURS.closes}, hora de Chile.
              </p>
            </div>
          </header>

          <h2>La misma videollamada, en tu hora</h2>
          <p>
            La sesión no cambia de ciudad. Es una videollamada: primero se
            revisa qué le pasa a tu voz y después se trabaja técnica,
            respiración e higiene. El detalle está en{" "}
            <Link href="/voz-online/como-es-la-sesion-de-voz-online">
              cómo es la sesión de voz online
            </Link>
            . Cuántas sesiones tocan no se publica de antemano: el plan sale de
            la{" "}
            <Link href="/voz-online/evaluacion-vocal-online">
              evaluación vocal
            </Link>{" "}
            y de{" "}
            <Link href="/voz-online/cuanto-dura-la-terapia-de-voz">
              cuánto dura la terapia de voz
            </Link>
            .
          </p>
          <p>
            Escribes por WhatsApp desde qué ciudad conectas y qué franja te
            acomoda. Desde Chile se acuerda una hora dentro del horario
            publicado.
          </p>

          <h2>Según dónde estés</h2>
          <p>
            Si buscas fonoaudióloga en español en Miami o en Florida, la página
            es{" "}
            <Link href="/voz-online/miami">
              terapia de voz en español en Miami
            </Link>
            . Otras búsquedas, con la misma videollamada, están en su país:
          </p>
          <ul>
            <li>
              <Link href="/voz-online/estados-unidos">Estados Unidos</Link>, con
              Nueva York, Texas y California dentro de esa página.
            </li>
            <li>
              <Link href="/voz-online/espana">España</Link>, si buscas logopedia
              de la voz.
            </li>
            <li>
              <Link href="/voz-online/argentina">Argentina</Link>.
            </li>
            <li>
              <Link href="/voz-online/canada">Canadá</Link>,{" "}
              <Link href="/voz-online/reino-unido">Reino Unido</Link>,{" "}
              <Link href="/voz-online/alemania">Alemania</Link>,{" "}
              <Link href="/voz-online/suiza">Suiza</Link> y{" "}
              <Link href="/voz-online/australia">Australia</Link>.
            </li>
          </ul>
          <p>
            El hub de todos los temas de voz está en{" "}
            <Link href="/voz-online/fonoaudiologa-de-voz-online">
              terapia de voz online para adultos
            </Link>
            .
          </p>

          <h2>Qué se trabaja</h2>
          <p>
            Disfonía, ronquera, voz cansada, nódulos o la voz después de un
            resfrío tienen su página en el hub. El otorrino es quien mira las
            cuerdas. Si la ronquera lleva más de dos semanas sin resfriado, te
            duele hablar o ya hay una lesión diagnosticada, esa consulta va
            primero. La terapia de voz acompaña ese cuidado y practica contigo
            en la videollamada.
          </p>
          <p>
            Si la rehabilitación es por una parálisis de cuerda vocal, el
            trabajo online está en{" "}
            <Link href="/voz-online/paralisis-cordal-rehabilitacion-online">
              parálisis cordal
            </Link>
            . También se puede hacer desde otro país, con la misma coordinación
            de horario.
          </p>

          <div className="not-prose my-10 flex flex-col items-center gap-4 text-center">
            <WhatsAppCTA message={WHATSAPP}>
              Coordinar horario por WhatsApp
            </WhatsAppCTA>
          </div>

          <p>
            Si buscas fonoaudiología para un niño en Chillán, esa atención es
            presencial:{" "}
            <Link href="/fonoaudiologa-ninos-chillan">
              fonoaudióloga infantil en Chillán
            </Link>
            .
          </p>

          <GeoFAQ
            items={faqs}
            className="not-prose my-12 rounded-2xl border border-sky-100 bg-sky-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
