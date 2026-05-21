import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PATOLOGIAS, getPatologiaBySlug } from "./patologias";
import { WhatsAppCTA } from "../lenguaje-infantil/_components/WhatsAppCTA";
import { StickyWhatsApp } from "../lenguaje-infantil/_components/StickyWhatsApp";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const DESCRIPTION_MAX_LENGTH = 155;
const DESCRIPTION_SUFFIX =
  " Evaluación y terapia en Chillán. Agenda por WhatsApp.";
const DESCRIPTION_OVERRIDES: Record<string, string> = {
  tel: "TEL en Chillán: evaluación y terapia infantil. Diagnóstico fonoaudiológico, apoyo familiar y coordinación escolar. Agenda por WhatsApp.",
};

function statSnippet(slug: string): string {
  switch (slug) {
    case "tel":
      return "";
    case "tea-comunicacion":
      return " Aproximadamente el 40% de los niños con TEA tiene retraso significativo del lenguaje.";
    default:
      return " La intervención temprana mejora significativamente el pronóstico.";
  }
}

function buildPatologiaMetadataDescription(
  slug: string,
  baseDescription: string
): string {
  const override = DESCRIPTION_OVERRIDES[slug];
  if (override) return override;

  if (
    baseDescription.length + DESCRIPTION_SUFFIX.length <=
    DESCRIPTION_MAX_LENGTH
  ) {
    return `${baseDescription}${DESCRIPTION_SUFFIX}`;
  }

  const firstSentence = baseDescription.match(/^.+?[.!?](?=\s|$)/)?.[0];
  if (
    firstSentence &&
    firstSentence.length + DESCRIPTION_SUFFIX.length <=
      DESCRIPTION_MAX_LENGTH
  ) {
    return `${firstSentence}${DESCRIPTION_SUFFIX}`;
  }

  const maxBaseLength =
    DESCRIPTION_MAX_LENGTH - DESCRIPTION_SUFFIX.length - 1;
  const trimmedBase = baseDescription
    .slice(0, maxBaseLength)
    .replace(/\s+\S*$/, "")
    .trim()
    .replace(/[.,;:!?-–—\s]+$/, "");

  return `${trimmedBase}.${DESCRIPTION_SUFFIX}`;
}

export async function generateStaticParams() {
  return PATOLOGIAS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const patologia = getPatologiaBySlug(slug);
  if (!patologia) return { title: "No encontrado" };

  const description = buildPatologiaMetadataDescription(
    slug,
    patologia.descripcion
  );

  const titleOverrides: Record<string, string> = {
    tel: "TEL en Chillán: diagnóstico y terapia infantil",
  };

  return buildPageMetadata({
    path: `/chillan/${patologia.slug}`,
    title: titleOverrides[slug] ?? patologia.titulo,
    description,
    keywords: [
      patologia.titulo,
      `fonoaudióloga ${patologia.slug} Chillán`,
      `tratamiento ${patologia.slug} niños`,
      "fonoaudiología infantil Chillán",
    ],
  });
}

export default async function PatologiaChillanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const patologia = getPatologiaBySlug(slug);
  if (!patologia) notFound();
  const p = patologia as NonNullable<typeof patologia>;

  const whatsappUrl = `https://wa.me/56995497838?text=${encodeURIComponent(p.whatsappText)}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/chillan/${p.slug}#service`,
    name: p.titulo,
    description: p.descripcion,
    provider: {
      "@type": "Person",
      name: "Katia Domínguez",
      jobTitle: "Fonoaudióloga",
    },
    areaServed: { "@type": "City", name: "Chillán" },
    serviceType: p.titulo,
  };

  const patologiaLabel = p.titulo.split(" en ")[0];
  const pagePath = `/chillan/${p.slug}`;

  const webPageJsonLd = buildWebPageJsonLd({
    path: pagePath,
    name: p.titulo,
    description: p.descripcion,
    speakable: true,
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Qué es ${patologiaLabel}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${p.descripcion}${statSnippet(slug)}`,
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde se atiende en Chillán?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atención presencial en Chillán. La evaluación dura aproximadamente 60 minutos e incluye informe con diagnóstico y plan de tratamiento. Se agenda por WhatsApp al +56995497838.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo llevar al fonoaudiólogo en Chillán?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Consulta si tu hijo presenta señales persistentes para su edad relacionadas con ${patologiaLabel.toLowerCase()}. Revisa definición y causas en el glosario (${SITE_URL}${p.glosarioHref}) o agenda evaluación presencial en Chillán (${SITE_URL}/agendar-hora-fonoaudiologo-infantil-chillan).`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Chillán", href: "/chillan" },
                { label: patologiaLabel },
              ]}
            />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <article>
                  <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                    📍 Atención presencial en Chillán
                  </span>
                  <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    {p.titulo}
                  </h1>
                  <p
                    data-speakable
                    className="mb-6 text-xl leading-relaxed text-gray-700 sm:text-2xl"
                  >
                    {p.subtitulo}
                  </p>
                </article>
                <p className="mb-8 text-lg text-gray-600">{p.descripcion}</p>
                <ul className="mb-8 space-y-3 text-left text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Evaluación completa</strong> (~60 min) con informe
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>+20 años</strong> de experiencia en fonoaudiología infantil
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Terapia presencial</strong> en Chillán
                    </span>
                  </li>
                </ul>
                <WhatsAppCTA href={whatsappUrl}>
                  Agendar evaluación por WhatsApp
                </WhatsAppCTA>
                <p className="mt-4 text-sm text-gray-600">
                  Respondo en menos de 24 horas • Lunes a Viernes
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md lg:mx-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-100 shadow-2xl">
                  <Image
                    src="/KatiaDominguezFonoaudiologa.png"
                    alt={`Katia Domínguez - Fonoaudióloga especialista en ${p.titulo.split(" en ")[0]} en Chillán`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Señales */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              ¿Cuándo consultar?
            </h2>
            <p className="mb-10 text-center text-lg text-gray-600">
              Si tu hijo presenta alguna de estas señales, una evaluación puede ayudar
            </p>
            <ul className="mb-10 space-y-4">
              {p.senales.map((senal, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-rose-100 bg-rose-50/50 p-4"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-200 text-rose-700">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{senal}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <WhatsAppCTA href={whatsappUrl}>
                Consultar mi caso por WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Qué es {p.titulo.split(" en ")[0]}?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{p.descripcion}</p>
              </details>
              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Dónde se atiende en Chillán?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Atención presencial en Chillán. La evaluación dura aproximadamente
                  60 minutos e incluye informe con diagnóstico y plan de tratamiento.
                  Se agenda por WhatsApp.
                </p>
              </details>
              <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>¿Cuándo llevar al fonoaudiólogo en Chillán?</span>
                  <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Consulta si tu hijo presenta señales persistentes para su edad
                  relacionadas con {patologiaLabel.toLowerCase()}. Puedes revisar más
                  información en el{" "}
                  <Link href={p.glosarioHref} className="font-medium text-rose-600 underline hover:text-rose-700">
                    glosario
                  </Link>{" "}
                  o{" "}
                  <Link href="/agendar-hora-fonoaudiologo-infantil-chillan" className="font-medium text-rose-600 underline hover:text-rose-700">
                    agendar evaluación
                  </Link>{" "}
                  presencial en Chillán.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Enlaces relacionados */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Más información
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href={p.servicioHref}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-rose-300 hover:bg-rose-50/50"
              >
                <span className="mb-2 block text-2xl">🏥</span>
                <h3 className="font-semibold text-gray-900">Servicio completo</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Conoce el tratamiento detallado y el proceso
                </p>
              </Link>
              <Link
                href={p.glosarioHref}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-rose-300 hover:bg-rose-50/50"
              >
                <span className="mb-2 block text-2xl">📖</span>
                <h3 className="font-semibold text-gray-900">Glosario</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Definición, causas y tratamiento
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              ¿Tu hijo presenta estas señales?
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-200">
              Una evaluación a tiempo puede marcar la diferencia. Escríbeme y
              conversemos sin compromiso.
            </p>
            <WhatsAppCTA href={whatsappUrl} className="text-lg sm:text-xl">
              Agendar evaluación por WhatsApp
            </WhatsAppCTA>
            <p className="mt-6 text-base text-gray-300">
              ✓ Respondo el mismo día • ✓ Atención presencial en Chillán
            </p>
          </div>
        </section>

        <footer className="bg-gray-950 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Katia Domínguez - Fonoaudióloga</p>
            <p className="mt-2">Chillán, Chile</p>
          </div>
        </footer>

        <StickyWhatsApp href={whatsappUrl} />
      </div>
    </>
  );
}
