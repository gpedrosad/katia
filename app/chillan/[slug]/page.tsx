import { Portrait } from "@/app/_components/Portrait";
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
  tel: "TEL en Chillán: señales, evaluación presencial y hacia dónde seguir (definición y tratamiento). Hub local. Agenda por WhatsApp.",
  "tea-comunicacion":
    "Comunicación y lenguaje en niños con TEA en Chillán. Apoyo presencial. El 40% tiene retraso significativo del lenguaje. Agenda por WhatsApp.",
  "apraxia-del-habla":
    "Errores inconsistentes al hablar y esfuerzo visible: puede ser apraxia. Evaluación especializada en Chillán con plan claro. Agenda por WhatsApp.",
  dislalia:
    "Señales de dislalia en Chillán: omite sonidos o dice «tasa» por casa. El tratamiento está en su página. Cuándo consultar. Agenda por WhatsApp.",
  dislexia:
    "Fonoaudiología y dislexia en Chillán: evaluación de la conciencia fonológica y del lenguaje oral. El diagnóstico formal usa evaluaciones especializadas.",
  lectoescritura:
    "Si leer o escribir cuesta, muchas veces la base está en el lenguaje oral. Página local en Chillán. El servicio y la dislexia están en otras páginas.",
  "retraso-del-habla":
    "Señales de retraso del habla en Chillán y cuándo consultar. El tratamiento está en su página. Distinto del retraso del lenguaje.",
  "trastorno-fonologico":
    "Señales de trastorno fonológico en Chillán y cuándo consultar. El tratamiento está en su página. Distinto de la dislalia.",
};

const TITLE_OVERRIDES: Record<string, string> = {
  tel: "TEL en Chillán | Evaluación y terapia local",
  "tea-comunicacion": "Comunicación y Lenguaje en Niños con TEA | Chillán",
  "apraxia-del-habla":
    "Apraxia del Habla Infantil Chillán | Eval. Especializada",
  dislalia: "Dislalia en Chillán | Señales por edad",
  dislexia: "Fonoaudiología y dislexia en Chillán: evaluación",
  lectoescritura: "Lectoescritura en Chillán | Base del lenguaje",
  "retraso-del-habla": "Retraso del habla en Chillán | Señales",
  "trastorno-fonologico": "Trastorno fonológico en Chillán | Señales",
};

const KEYWORD_OVERRIDES: Record<string, string[]> = {
  tel: [
    "TEL en Chillán",
    "TEL Chillán",
    "TDL Chillán",
    "evaluación TEL Chillán",
    "tratamiento TEL Chillán",
  ],
  "tea-comunicacion": [
    "TEA Chillán",
    "fonoaudiología TEA Chillán",
    "comunicación infantil TEA",
    "autismo comunicación niños",
    "fonoaudióloga autismo Chillán",
  ],
  "retraso-del-habla": [
    "retraso del habla Chillán",
    "señales de retraso del habla",
    "cuándo consultar retraso del habla",
    "niño habla poco",
    "no se le entiende al hablar",
  ],
  "trastorno-fonologico": [
    "trastorno fonológico Chillán",
    "señales de trastorno fonológico",
    "cuándo consultar trastorno fonológico",
    "patrones fonológicos",
    "errores fonológicos niños",
  ],
  dislalia: [
    "dislalia en Chillán",
    "señales de dislalia",
    "cuándo consultar dislalia",
    "niño omite sonidos",
    "dice tasa por casa",
  ],
  dislexia: [
    "fonoaudiología dislexia Chillán",
    "fonoaudiología y dislexia",
    "fonoaudiologia dislexia",
    "dislexia Chillán",
    "conciencia fonológica y dislexia",
    "bases del lenguaje oral",
  ],
  lectoescritura: [
    "lectoescritura Chillán",
    "base del lenguaje oral",
    "conciencia fonológica lectura",
    "dificultades de lectura Chillán",
  ],
};

const SCHEMA_DATE_MODIFIED: Record<string, string> = {
  tel: "2026-10-15",
  dislalia: "2026-10-16",
  dislexia: "2026-10-30",
  lectoescritura: "2026-10-16",
  "apraxia-del-habla": "2026-10-16",
  disfemia: "2026-10-16",
  "retraso-del-habla": "2026-10-18",
  "trastorno-fonologico": "2026-10-18",
};

const EXTRA_FAQS: Record<string, { q: string; a: string }[]> = {
  dislalia: [
    {
      q: "¿Esta página explica el tratamiento de la dislalia?",
      a: "No. Aquí están las señales locales en Chillán: omite sonidos, dice «tasa» por casa, o la r y la s no salen a la edad esperada. La definición breve está en el glosario y el tratamiento de la dislalia infantil está en la página de tratamiento.",
    },
  ],
  dislexia: [
    {
      q: "¿Qué cubre la fonoaudiología y la dislexia en esta página?",
      a: "Se evalúan y trabajan las bases del lenguaje oral de la lectura, sobre todo la conciencia fonológica. El diagnóstico formal de dislexia se hace con evaluaciones especializadas. La definición breve está en el glosario y el apoyo general de lectura y escritura está en la página de servicio.",
    },
  ],
  lectoescritura: [
    {
      q: "¿Esta página es el servicio de lectoescritura o la de dislexia?",
      a: "Es la página local sobre la base en el lenguaje oral. El servicio general de dificultades de lectoescritura y la página de fonoaudiología y dislexia en Chillán están aparte.",
    },
  ],
  "apraxia-del-habla": [
    {
      q: "¿Dónde está el tratamiento de la apraxia?",
      a: "Las señales (errores inconsistentes y esfuerzo al hablar) están en esta página. Cómo es la terapia de aprendizaje motor está en la página de tratamiento de la apraxia del habla infantil en Chillán.",
    },
  ],
  "retraso-del-habla": [
    {
      q: "¿Esta página explica el tratamiento del retraso del habla?",
      a: "No. Aquí están las señales en Chillán y cuándo consultar. Cómo es la terapia está en la página de tratamiento del retraso del habla en Chillán.",
    },
  ],
  "trastorno-fonologico": [
    {
      q: "¿Esta página explica el tratamiento del trastorno fonológico?",
      a: "No. Aquí están las señales en Chillán y cuándo consultar. Cómo es la terapia está en la página de tratamiento del trastorno fonológico en Chillán.",
    },
  ],
};

function statSnippet(slug: string): string {
  switch (slug) {
    case "tel":
      return "";
    case "tea-comunicacion":
      return " Aproximadamente el 40% de los niños con TEA tiene retraso significativo del lenguaje.";
    case "retraso-del-habla":
    case "trastorno-fonologico":
      return "";
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

  return buildPageMetadata({
    path: `/chillan/${patologia.slug}`,
    title: TITLE_OVERRIDES[slug] ?? patologia.titulo,
    description,
    keywords:
      KEYWORD_OVERRIDES[slug] ?? [
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
  const metadataDescription = buildPatologiaMetadataDescription(
    slug,
    p.descripcion
  );

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
    ...(SCHEMA_DATE_MODIFIED[slug]
      ? { dateModified: SCHEMA_DATE_MODIFIED[slug] }
      : {}),
  };

  const patologiaLabel = p.titulo.split(" en ")[0];
  const pagePath = `/chillan/${p.slug}`;

  const webPageJsonLd = buildWebPageJsonLd({
    path: pagePath,
    name: p.titulo,
    description: metadataDescription,
    speakable: true,
  });

  const baseFaqs = [
    {
      "@type": "Question" as const,
      name: `¿Qué es ${patologiaLabel}?`,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: `${p.descripcion}${statSnippet(slug)}`,
      },
    },
    {
      "@type": "Question" as const,
      name: "¿Dónde se atiende en Chillán?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Atención presencial en Chillán. La evaluación dura aproximadamente 60 minutos e incluye informe con diagnóstico y plan de tratamiento. Se agenda por WhatsApp al +56995497838.",
      },
    },
    {
      "@type": "Question" as const,
      name: "¿Cuándo llevar al fonoaudiólogo en Chillán?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: `Consulta si tu hijo presenta señales persistentes para su edad relacionadas con ${patologiaLabel.toLowerCase()}. Revisa definición y causas en el glosario (${SITE_URL}${p.glosarioHref}) o agenda evaluación presencial en Chillán (${SITE_URL}/agendar-hora-fonoaudiologo-infantil-chillan).`,
      },
    },
  ];

  const teaSpecificFaqs = slug === "tea-comunicacion" ? [
    {
      "@type": "Question" as const,
      name: "¿Qué trabaja la fonoaudióloga con niños con TEA en Chillán?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Trabajamos comunicación funcional (pedir, comentar, rechazar), lenguaje expresivo y comprensivo, pragmática (uso social del lenguaje) y, cuando corresponde, sistemas aumentativos o alternativos de comunicación.",
      },
    },
    {
      "@type": "Question" as const,
      name: "¿A qué edad conviene iniciar terapia fonoaudiológica en niños con TEA?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Cuanto antes, mejor. La intervención temprana favorece el desarrollo de la comunicación, reduce la frustración familiar y del niño, y mejora las habilidades sociales a futuro.",
      },
    },
    {
      "@type": "Question" as const,
      name: "¿El tratamiento es solo para niños con TEA que no hablan?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. Algunos niños con TEA hablan bien pero tienen dificultades pragmáticas (uso social del lenguaje, turnos conversacionales, lenguaje literal). La fonoaudióloga trabaja ambos perfiles: quienes tienen poco lenguaje verbal y quienes necesitan mejorar el uso funcional del lenguaje.",
      },
    },
  ] : [];

  const telSpecificFaqs =
    slug === "tel"
      ? [
          {
            "@type": "Question" as const,
            name: "¿Esta página explica el tratamiento del TEL?",
            acceptedAnswer: {
              "@type": "Answer" as const,
              text: "No. Esta es la página local de TEL en Chillán: señales y cómo pedir la evaluación presencial. La definición breve está en el glosario y cómo es la terapia está en la página de tratamiento del TEL en Chillán.",
            },
          },
          {
            "@type": "Question" as const,
            name: "¿Dónde sigo si quiero la definición o la terapia?",
            acceptedAnswer: {
              "@type": "Answer" as const,
              text: "Definición breve: glosario de TEL. Tratamiento (cómo es la terapia, qué puedes esperar): tratamiento del TEL en Chillán. Si la pregunta es si el TEL se cura, esa respuesta está en la página de servicio.",
            },
          },
        ]
      : [];

  const extraFaqs = (EXTRA_FAQS[slug] ?? []).map((faq) => ({
    "@type": "Question" as const,
    name: faq.q,
    acceptedAnswer: { "@type": "Answer" as const, text: faq.a },
  }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...baseFaqs, ...teaSpecificFaqs, ...telSpecificFaqs, ...extraFaqs],
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
                {slug === "tel" ? (
                  <div className="mb-8 rounded-2xl border-2 border-rose-200 bg-white p-5 text-left">
                    <p className="text-lg font-semibold text-gray-900">
                      <strong>Respuesta rápida:</strong> Esta página es el hub
                      local de TEL en Chillán. La definición breve está en el
                      glosario y el tratamiento (cómo es la terapia) está en la
                      página de tratamiento. La atención es presencial:
                      evaluación de unos 60 minutos con informe.
                    </p>
                    <p className="mt-3 text-sm text-rose-800">
                      <Link href="/glosario/tel" className="font-semibold underline">
                        Definición de TEL
                      </Link>
                      {" · "}
                      <Link
                        href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan"
                        className="font-semibold underline"
                      >
                        Tratamiento del TEL en Chillán
                      </Link>
                      {" · "}
                      <Link
                        href="/servicios/tel-trastorno-especifico-lenguaje"
                        className="font-semibold underline"
                      >
                        ¿El TEL se cura?
                      </Link>
                    </p>
                  </div>
                ) : null}
                {slug === "dislalia" ? (
                  <div className="mb-8 rounded-2xl border-2 border-rose-200 bg-white p-5 text-left">
                    <p className="text-lg font-semibold text-gray-900">
                      <strong>Respuesta rápida:</strong> Esta página muestra
                      señales de dislalia en Chillán y cuándo consultar. La
                      definición breve está en el glosario y el tratamiento de
                      la dislalia infantil está en su página.
                    </p>
                    <p className="mt-3 text-sm text-rose-800">
                      <Link href="/glosario/dislalia" className="font-semibold underline">
                        Definición de dislalia
                      </Link>
                      {" · "}
                      <Link
                        href="/tratamientos/dislalia-infantil-chillan"
                        className="font-semibold underline"
                      >
                        Tratamiento de dislalia infantil en Chillán
                      </Link>
                      {" · "}
                      <Link
                        href="/fonoaudiologa-ninos-chillan"
                        className="font-semibold underline"
                      >
                        Fonoaudiología infantil en Chillán
                      </Link>
                    </p>
                  </div>
                ) : null}
                {slug === "dislexia" ? (
                  <div className="mb-8 rounded-2xl border-2 border-rose-200 bg-white p-5 text-left">
                    <p className="text-lg font-semibold text-gray-900">
                      <strong>Respuesta rápida:</strong> Fonoaudiología y
                      dislexia en Chillán significa evaluar las bases del
                      lenguaje oral (conciencia fonológica, vocabulario y
                      comprensión). El diagnóstico formal se hace con
                      evaluaciones especializadas. La definición y el apoyo
                      general de lectura están en otras páginas.
                    </p>
                    <p className="mt-3 text-sm text-rose-800">
                      <Link href="/glosario/dislexia" className="font-semibold underline">
                        Definición de dislexia
                      </Link>
                      {" · "}
                      <Link
                        href="/servicios/dificultades-lectoescritura"
                        className="font-semibold underline"
                      >
                        Dificultades de lectoescritura
                      </Link>
                      {" · "}
                      <Link
                        href="/chillan/lectoescritura"
                        className="font-semibold underline"
                      >
                        Lectoescritura en Chillán
                      </Link>
                      {" · "}
                      <Link
                        href="/fonoaudiologa-ninos-chillan"
                        className="font-semibold underline"
                      >
                        Fonoaudiología infantil en Chillán
                      </Link>
                    </p>
                  </div>
                ) : null}
                {slug === "lectoescritura" ? (
                  <div className="mb-8 rounded-2xl border-2 border-rose-200 bg-white p-5 text-left">
                    <p className="text-lg font-semibold text-gray-900">
                      <strong>Respuesta rápida:</strong> Esta página local
                      explica la base en el lenguaje oral. Si buscas el apoyo
                      cuando tu hijo no aprende a leer o escribir, está en el
                      servicio. Si buscas fonoaudiología y dislexia, está en su
                      página.
                    </p>
                    <p className="mt-3 text-sm text-rose-800">
                      <Link
                        href="/servicios/dificultades-lectoescritura"
                        className="font-semibold underline"
                      >
                        Mi hijo no aprende a leer ni escribir
                      </Link>
                      {" · "}
                      <Link href="/chillan/dislexia" className="font-semibold underline">
                        Fonoaudiología y dislexia en Chillán
                      </Link>
                      {" · "}
                      <Link
                        href="/glosario/dislexia"
                        className="font-semibold underline"
                      >
                        Definición de dislexia
                      </Link>
                      {" · "}
                      <Link
                        href="/fonoaudiologa-ninos-chillan"
                        className="font-semibold underline"
                      >
                        Fonoaudiología infantil en Chillán
                      </Link>
                    </p>
                  </div>
                ) : null}
                {slug === "apraxia-del-habla" ? (
                  <div className="mb-8 rounded-2xl border-2 border-rose-200 bg-white p-5 text-left">
                    <p className="text-lg font-semibold text-gray-900">
                      <strong>Respuesta rápida:</strong> Aquí están las señales
                      locales: errores que cambian de un intento a otro y
                      esfuerzo visible al hablar. Cómo es la terapia de
                      aprendizaje motor está en la página de tratamiento.
                    </p>
                    <p className="mt-3 text-sm text-rose-800">
                      <Link
                        href="/tratamientos/apraxia-del-habla-infantil-chillan"
                        className="font-semibold underline"
                      >
                        Tratamiento de apraxia del habla infantil en Chillán
                      </Link>
                      {" · "}
                      <Link
                        href="/glosario/apraxia-del-habla"
                        className="font-semibold underline"
                      >
                        Definición de apraxia del habla
                      </Link>
                      {" · "}
                      <Link
                        href="/fonoaudiologa-ninos-chillan"
                        className="font-semibold underline"
                      >
                        Fonoaudiología infantil en Chillán
                      </Link>
                    </p>
                  </div>
                ) : null}
                {slug === "disfemia" ? (
                  <p className="mb-8 text-left text-sm text-rose-800">
                    Si tartamudea un niño pequeño, mira{" "}
                    <Link
                      href="/sintomas/nino-tartamudea-chillan"
                      className="font-semibold underline"
                    >
                      tartamudez en niños de 2 a 3 años
                    </Link>
                    . La definición está en el{" "}
                    <Link href="/glosario/disfemia" className="font-semibold underline">
                      glosario de disfemia
                    </Link>
                    . La atención general está en{" "}
                    <Link
                      href="/fonoaudiologa-ninos-chillan"
                      className="font-semibold underline"
                    >
                      fonoaudiología infantil en Chillán
                    </Link>
                    .
                  </p>
                ) : null}
                {slug === "retraso-del-habla" ? (
                  <div className="mb-8 rounded-2xl border-2 border-rose-200 bg-white p-5 text-left">
                    <p className="text-lg font-semibold text-gray-900">
                      <strong>Respuesta rápida:</strong> Esta página reúne
                      señales de retraso del habla en Chillán y cuándo
                      consultar. Cómo es la terapia está en la página de
                      tratamiento.
                    </p>
                    <p className="mt-3 text-sm text-rose-800">
                      <Link
                        href="/tratamientos/retraso-del-habla-chillan"
                        className="font-semibold underline"
                      >
                        Tratamiento del retraso del habla en Chillán
                      </Link>
                      {" · "}
                      <Link
                        href="/glosario/retraso-del-habla"
                        className="font-semibold underline"
                      >
                        Qué es el retraso del habla
                      </Link>
                      {" · "}
                      <Link
                        href="/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje"
                        className="font-semibold underline"
                      >
                        Diferencia entre retraso del habla y del lenguaje
                      </Link>
                    </p>
                  </div>
                ) : null}
                {slug === "trastorno-fonologico" ? (
                  <div className="mb-8 rounded-2xl border-2 border-rose-200 bg-white p-5 text-left">
                    <p className="text-lg font-semibold text-gray-900">
                      <strong>Respuesta rápida:</strong> Esta página reúne
                      señales de trastorno fonológico en Chillán y cuándo
                      consultar. Cómo es la terapia está en la página de
                      tratamiento.
                    </p>
                    <p className="mt-3 text-sm text-rose-800">
                      <Link
                        href="/tratamientos/trastorno-fonologico-chillan"
                        className="font-semibold underline"
                      >
                        Tratamiento del trastorno fonológico en Chillán
                      </Link>
                      {" · "}
                      <Link
                        href="/glosario/trastorno-fonologico"
                        className="font-semibold underline"
                      >
                        Qué es el trastorno fonológico
                      </Link>
                      {" · "}
                      <Link
                        href="/comparaciones/dislalia-vs-trastorno-fonologico"
                        className="font-semibold underline"
                      >
                        Diferencia entre dislalia y trastorno fonológico
                      </Link>
                    </p>
                  </div>
                ) : null}
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
                  <Portrait
                    alt={`Retrato de Katia Domínguez, fonoaudióloga en Chillán, página de ${p.titulo.split(" en ")[0]}`}
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
            {slug === "retraso-del-habla" ? (
              <p className="mb-8 text-center text-gray-700">
                Si la duda es de palabras y frases, mira{" "}
                <Link
                  href="/glosario/retraso-del-lenguaje"
                  className="font-medium text-rose-600 underline"
                >
                  qué es el retraso del lenguaje
                </Link>{" "}
                y las{" "}
                <Link
                  href="/recursos/senales-de-alerta-del-lenguaje-y-habla"
                  className="font-medium text-rose-600 underline"
                >
                  señales de alerta del lenguaje y el habla
                </Link>
                . La hora se pide en{" "}
                <Link
                  href="/contacto-fonoaudiologa-chillan"
                  className="font-medium text-rose-600 underline"
                >
                  contacto de la fonoaudióloga en Chillán
                </Link>
                .
              </p>
            ) : null}
            {slug === "trastorno-fonologico" ? (
              <p className="mb-8 text-center text-gray-700">
                Si no sabes si es un sonido o un patrón, parte por la{" "}
                <Link
                  href="/servicios/evaluacion-del-habla-infantil-chillan"
                  className="font-medium text-rose-600 underline"
                >
                  evaluación del habla infantil
                </Link>{" "}
                y las{" "}
                <Link
                  href="/recursos/senales-de-alerta-del-lenguaje-y-habla"
                  className="font-medium text-rose-600 underline"
                >
                  señales de alerta del lenguaje y el habla
                </Link>
                . La hora se pide en{" "}
                <Link
                  href="/contacto-fonoaudiologa-chillan"
                  className="font-medium text-rose-600 underline"
                >
                  contacto de la fonoaudióloga en Chillán
                </Link>
                .
              </p>
            ) : null}
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
              {slug === "tel" ? (
                <>
                  <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                      <span>¿Esta página explica el tratamiento del TEL?</span>
                      <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600">
                      No. Esta es la página local: señales y cómo pedir la
                      evaluación presencial. Cómo es la terapia está en{" "}
                      <Link
                        href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan"
                        className="font-medium text-rose-600 underline"
                      >
                        tratamiento del TEL en Chillán
                      </Link>
                      . La definición breve está en el{" "}
                      <Link href="/glosario/tel" className="font-medium text-rose-600 underline">
                        glosario
                      </Link>
                      .
                    </p>
                  </details>
                  <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                      <span>¿Dónde sigo si quiero la definición o la terapia?</span>
                      <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600">
                      Definición breve: glosario de TEL. Tratamiento: página de
                      tratamiento del TEL en Chillán. Si la pregunta es si el TEL
                      se cura, esa respuesta está en la{" "}
                      <Link
                        href="/servicios/tel-trastorno-especifico-lenguaje"
                        className="font-medium text-rose-600 underline"
                      >
                        página de servicio
                      </Link>
                      .
                    </p>
                  </details>
                </>
              ) : null}
              {(EXTRA_FAQS[slug] ?? []).map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.a}</p>
                </details>
              ))}
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
                <h3 className="font-semibold text-gray-900">
                  {slug === "tel"
                    ? "¿El TEL se cura?"
                    : slug === "dislalia"
                      ? "Tratamiento de dislalia infantil"
                      : slug === "apraxia-del-habla"
                        ? "Tratamiento de la apraxia"
                        : slug === "retraso-del-habla"
                          ? "Tratamiento del retraso del habla"
                          : slug === "trastorno-fonologico"
                            ? "Tratamiento del trastorno fonológico"
                            : "Servicio completo"}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {slug === "tel"
                    ? "La respuesta está en la página de servicio"
                    : slug === "dislalia" ||
                        slug === "retraso-del-habla" ||
                        slug === "trastorno-fonologico"
                      ? "Página principal del tratamiento en Chillán"
                      : slug === "apraxia-del-habla"
                        ? "Cómo es la terapia de aprendizaje motor"
                        : "Conoce el tratamiento detallado y el proceso"}
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
              {slug === "tel" ? (
                <Link
                  href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan"
                  className="rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-rose-300 hover:bg-rose-50/50 sm:col-span-2"
                >
                  <span className="mb-2 block text-2xl">💬</span>
                  <h3 className="font-semibold text-gray-900">
                    Tratamiento del TEL en Chillán
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Cómo es la terapia y qué puedes esperar
                  </p>
                </Link>
              ) : null}
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
