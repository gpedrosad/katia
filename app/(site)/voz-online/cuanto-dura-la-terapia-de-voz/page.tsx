import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { MEDICAL_BUSINESS_ID } from "@/lib/local-business-schema";
import { buildPageMetadata } from "@/lib/seo";
import { BUSINESS_HOURS, SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/voz-online/cuanto-dura-la-terapia-de-voz";
const TITLE = "¿Cuánto dura la terapia de voz online?";
const DESCRIPTION =
  "No hay un número fijo de sesiones. La evaluación vocal arma el plan de terapia de voz online y cada videollamada te deja práctica para la semana.";

const WHATSAPP =
  "Hola, quiero saber cómo se arma el plan de terapia de voz online";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "cuánto dura la terapia de voz",
    "cuántas sesiones de fonoaudiología de voz",
    "terapia de voz online duración",
    "plan de terapia vocal",
    "evaluación vocal online",
  ],
});

const faqs = [
  {
    question: "¿Cuántas sesiones de voz online necesito?",
    answer:
      "No hay un número publicado. La primera videollamada es la evaluación vocal. Con lo que se escucha y con tu historia de voz se arma el plan. Las sesiones siguientes practican ese plan. El plazo se conversa ahí, no en esta página.",
  },
  {
    question: "¿La primera sesión ya es terapia?",
    answer:
      "La primera es la evaluación: historia de tu voz, cómo suena y un plan. Las siguientes trabajan respiración, proyección e higiene según ese plan, y te llevas qué practicar en la semana.",
  },
  {
    question: "¿Cada sesión dura lo mismo?",
    answer:
      "La hora se coordina por WhatsApp. Esta página no publica una duración en minutos ni un paquete de sesiones. Lo que sí se repite es el modo: videollamada, en español, con práctica para después.",
  },
  {
    question: "¿Sirve si vivo en otro país?",
    answer:
      "Sí, para adultos. La videollamada es desde Chile y el horario se coordina a tu zona horaria. Si estás en Miami, esa búsqueda tiene su página. La atención publicada sigue siendo de lunes a viernes, de 10:00 a 18:00, hora de Chile.",
  },
  {
    question: "¿La terapia reemplaza al otorrino?",
    answer:
      "El otorrino mira las cuerdas. Si la ronquera lleva más de dos semanas sin resfriado, te duele hablar o ya te diagnosticaron una lesión, esa consulta va primero. La terapia de voz acompaña ese cuidado y trabaja la técnica en la videollamada.",
  },
];

export default function CuantoDuraTerapiaVozPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Duración de la terapia de voz online",
    serviceType: "Terapia de voz online",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    areaServed: { "@type": "Country", name: "Chile" },
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
            { label: "Cuánto dura" },
          ]}
        />

        <article className="prose prose-sky lg:prose-lg max-w-none">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-sky-950">{TITLE}</h1>
            <div className="not-prose my-6 rounded-2xl border-2 border-sky-200 bg-sky-50 p-5">
              <p className="text-lg font-semibold text-sky-950" data-speakable>
                <strong>Respuesta rápida:</strong> No hay un número fijo de
                sesiones. La primera videollamada es la evaluación vocal. Con
                eso Katia Domínguez arma el plan, y cada sesión siguiente te
                deja práctica de respiración, proyección e higiene. La hora se
                coordina por WhatsApp.
              </p>
            </div>
          </header>

          <h2>Por qué no hay un paquete cerrado</h2>
          <p>
            La voz no parte del mismo lugar en todas las personas. Una ronquera
            reciente, una voz cansada al final del día o una lesión que el
            otorrino ya vio no piden el mismo recorrido. Publicar «tantas
            sesiones» sería inventar un plazo. El estimado sale de la{" "}
            <Link href="/voz-online/evaluacion-vocal-online">
              evaluación vocal online
            </Link>
            .
          </p>
          <p>
            Cómo se ve esa hora, qué necesitas para conectarte y qué se trabaja
            está en{" "}
            <Link href="/voz-online/como-es-la-sesion-de-voz-online">
              cómo es la sesión de voz online
            </Link>
            . El hub de temas está en{" "}
            <Link href="/voz-online/fonoaudiologa-de-voz-online">
              terapia de voz online para adultos
            </Link>
            .
          </p>

          <h2>Qué avanza entre una sesión y la siguiente</h2>
          <ul>
            <li>La primera vez: historia de la voz, cómo suena y un plan.</li>
            <li>
              Las siguientes: respiración, proyección e higiene, según ese
              plan.
            </li>
            <li>
              Te llevas qué practicar. La higiene vocal de todos los días está
              en{" "}
              <Link href="/voz-online/higiene-vocal-cuidado-voz">
                higiene vocal
              </Link>{" "}
              y los ejercicios, en{" "}
              <Link href="/voz-online/ejercicios-para-la-voz">
                ejercicios para la voz
              </Link>
              .
            </li>
          </ul>
          <p>
            Si la ronquera lleva más de dos semanas sin resfriado, te duele
            hablar o ya hay una lesión, el otorrino mira las cuerdas. La
            terapia acompaña ese cuidado. Los nódulos, por ejemplo, tienen su
            página:{" "}
            <Link href="/voz-online/nodulos-vocales-tratamiento-online">
              nódulos vocales
            </Link>
            .
          </p>

          <h2>Si te conectas desde otro país</h2>
          <p>
            La videollamada es la misma. El horario publicado es de{" "}
            {BUSINESS_HOURS.daysLabel}, de {BUSINESS_HOURS.opens} a{" "}
            {BUSINESS_HOURS.closes}, hora de Chile, y la hora concreta se
            coordina a tu zona. La guía general está en{" "}
            <Link href="/voz-online/terapia-de-voz-desde-otro-pais">
              terapia de voz desde otro país
            </Link>
            . Si estás en Miami o en Florida, entra por{" "}
            <Link href="/voz-online/miami">
              fonoaudióloga en español en Miami
            </Link>
            .
          </p>
          <p>
            La atención infantil no usa esta modalidad. Si la duda es de un
            niño en Chillán, la hora es presencial:{" "}
            <Link href="/fonoaudiologa-ninos-chillan">
              fonoaudióloga infantil en Chillán
            </Link>
            . Cuánto dura una terapia de lenguaje, que es otra pregunta, está
            en{" "}
            <Link href="/preguntas/cuanto-dura-una-terapia-de-lenguaje">
              cuánto dura una terapia de lenguaje
            </Link>
            .
          </p>

          <div className="not-prose my-10 flex flex-col items-center gap-4 text-center">
            <WhatsAppCTA message={WHATSAPP}>
              Preguntar por el plan de voz
            </WhatsAppCTA>
          </div>

          <GeoFAQ
            items={faqs}
            className="not-prose my-12 rounded-2xl border border-sky-100 bg-sky-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
