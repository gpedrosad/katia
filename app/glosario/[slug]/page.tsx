import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import {
  DYNAMIC_GLOSARIO_TERMINOS,
  getRelatedTerminos,
  getTerminoBySlug,
  type GlosarioTermino,
} from "../terminos";

const SITE_URL = "https://www.katialafono.cl";
const WHATSAPP_BASE = "https://wa.me/56995497838";
const DATE_PUBLISHED = "2024-01-15";
const DATE_MODIFIED = "2026-05-19";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return DYNAMIC_GLOSARIO_TERMINOS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const termino = getTerminoBySlug(slug);
  if (!termino) return {};

  const pagePath = `/glosario/${slug}`;

  return {
    title: termino.metaTitle,
    description: termino.metaDescription,
    keywords: termino.keywords,
    alternates: {
      canonical: `${SITE_URL}${pagePath}`,
    },
    openGraph: {
      title: termino.metaTitle,
      description: termino.metaDescription,
      url: `${SITE_URL}${pagePath}`,
      type: "article",
      locale: "es_CL",
    },
  };
}

function buildArticleJsonLd(termino: GlosarioTermino, pagePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: termino.headline,
    description: termino.metaDescription,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    author: {
      "@type": "Person",
      name: "Katia Domínguez",
      jobTitle: "Fonoaudióloga",
    },
    publisher: {
      "@type": "Organization",
      name: "Katia Domínguez - Fonoaudióloga",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${pagePath}`,
    },
  };
}

function buildFaqJsonLd(termino: GlosarioTermino) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: termino.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function whatsappHref(text: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export default async function GlosarioTermPage({ params }: PageProps) {
  const { slug } = await params;
  const termino = getTerminoBySlug(slug);

  if (!termino || !DYNAMIC_GLOSARIO_TERMINOS.some((t) => t.slug === slug)) {
    notFound();
  }

  const pagePath = `/glosario/${slug}`;
  const related = getRelatedTerminos(termino.relatedSlugs);
  const articleJsonLd = buildArticleJsonLd(termino, pagePath);
  const faqJsonLd = buildFaqJsonLd(termino);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <article className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Glosario", href: "/glosario" },
                { label: termino.term },
              ]}
            />

            <header className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                {termino.category}
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                {termino.headline}
              </h1>
              <p className="text-xl text-gray-600">{termino.subtitle}</p>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2>Definición</h2>
              {termino.definitionParagraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}

              <h2>Señales comunes</h2>
              <ul>
                {termino.commonSigns.map((sign) => (
                  <li key={sign}>{sign}</li>
                ))}
              </ul>

              <h2>¿Cuándo consultar?</h2>
              <ul>
                {termino.whenToConsult.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {termino.chillanSlug && (
                <div className="not-prose my-8 rounded-xl border border-rose-200 bg-rose-50 p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Atención en Chillán
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Si buscas evaluación o tratamiento presencial en Chillán,
                    revisa la información específica sobre este tema en la zona.
                  </p>
                  <Link
                    href={`/chillan/${termino.chillanSlug}`}
                    className="inline-flex font-semibold text-rose-700 hover:text-rose-800"
                  >
                    Ver {termino.term} en Chillán →
                  </Link>
                </div>
              )}

              <h2>Preguntas frecuentes</h2>
              {termino.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                ¿Tienes dudas sobre {termino.term.toLowerCase()}?
              </h2>
              <p className="mb-6 text-gray-600">
                Una evaluación fonoaudiológica puede aclarar el diagnóstico y
                definir el mejor plan de intervención para tu hijo.
              </p>
              <WhatsAppCTA href={whatsappHref(termino.whatsappText)}>
                Consultar por WhatsApp
              </WhatsAppCTA>
            </div>

            <div className="mt-12">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Términos relacionados
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/glosario/${rel.slug}`}
                    className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                  >
                    <h3 className="font-semibold text-gray-900">{rel.term}</h3>
                    <p className="text-sm text-gray-600">
                      {rel.shortDescription}
                    </p>
                  </Link>
                ))}
                {termino.servicioHref && (
                  <Link
                    href={termino.servicioHref}
                    className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-rose-300"
                  >
                    <h3 className="font-semibold text-gray-900">
                      Servicios relacionados
                    </h3>
                    <p className="text-sm text-gray-600">
                      Evaluación y tratamiento fonoaudiológico en Chillán.
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
