import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";
import { Portrait } from "@/app/_components/Portrait";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import {
  BUSINESS_HOURS,
  BUSINESS_PHONE_DISPLAY,
  SITE_URL,
} from "@/lib/site";

export type Faq = {
  question: string;
  answer: string;
};

export type RelatedLink = {
  href: string;
  label: string;
};

export type Crumb = {
  label: string;
  href: string;
};

export function guiaMetadata(input: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogType?: "website" | "article";
}) {
  if (input.title.length > 60) {
    throw new Error(
      `Title > 60 (${input.title.length}) en ${input.path}: ${input.title}`,
    );
  }
  if (input.description.length > 155) {
    throw new Error(
      `Description > 155 (${input.description.length}) en ${input.path}: ${input.description}`,
    );
  }
  return buildPageMetadata({
    path: input.path,
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    ogType: input.ogType ?? "article",
  });
}

export function articleJsonLd(input: {
  path: string;
  headline: string;
  description: string;
}) {
  const url = `${SITE_URL}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    inLanguage: "es-CL",
    datePublished: "2026-10-17",
    dateModified: "2026-10-17",
    author: {
      "@type": "Person",
      name: "Katia Domínguez",
      url: `${SITE_URL}/sobre-katia-dominguez-fonoaudiologa-chillan`,
    },
    publisher: {
      "@type": "Organization",
      name: "Katia Domínguez - Fonoaudióloga",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href === "/" ? `${SITE_URL}/` : `${SITE_URL}${item.href}`,
    })),
  };
}

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function GuiaPage({
  crumbs,
  eyebrow,
  title,
  lead,
  related,
  jsonLd,
  faqs,
  ctaTitle,
  ctaBody,
  whatsappHref,
  ctaLabel,
  showBackLink = true,
  backHref = "/guias-padres",
  backLabel = "← Volver a guías para padres",
  imageAlt,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead: string;
  related: RelatedLink[];
  jsonLd: unknown[];
  faqs?: Faq[];
  ctaTitle: string;
  ctaBody: string;
  whatsappHref: string;
  ctaLabel: string;
  showBackLink?: boolean;
  backHref?: string;
  backLabel?: string;
  /** Alt único de la foto. Si se omite, se arma con el título de la guía. */
  imageAlt?: string;
  children: ReactNode;
}) {
  const portraitAlt =
    imageAlt ??
    `Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, en la guía «${title}»`;
  return (
    <>
      {jsonLd.map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <article className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
              <ol className="flex flex-wrap items-center gap-2">
                {crumbs.map((item, index) => {
                  const isLast = index === crumbs.length - 1;
                  return (
                    <li key={item.href} className="flex items-center gap-2">
                      {index > 0 ? (
                        <span className="text-gray-300" aria-hidden="true">
                          /
                        </span>
                      ) : null}
                      {isLast ? (
                        <span className="text-gray-700">{item.label}</span>
                      ) : (
                        <Link
                          href={item.href}
                          className="hover:text-rose-600 hover:underline"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>

            <header className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-800">
                {eyebrow}
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                {title}
              </h1>
              <p className="text-xl text-gray-600">{lead}</p>
            </header>

            <figure className="mb-8">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl bg-rose-100">
                <Portrait
                  alt={portraitAlt}
                  sizes="(max-width: 768px) 80vw, 320px"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                Katia Domínguez, fonoaudióloga infantil en Chillán.
              </figcaption>
            </figure>

            <nav
              aria-label="Enlaces relacionados"
              className="mb-8 rounded-2xl border border-rose-200 bg-white p-5"
            >
              <p className="mb-3 text-sm font-semibold text-rose-800">
                Páginas relacionadas
              </p>
              <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap">
                {related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-medium text-rose-600 underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-4 text-lg leading-relaxed text-gray-700 [&_a]:font-medium [&_a]:text-rose-700 [&_a]:underline [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
              {children}
            </div>

            {faqs && faqs.length > 0 ? (
              <section className="mt-10" aria-labelledby="preguntas-guia">
                <h2
                  id="preguntas-guia"
                  className="mb-4 text-2xl font-bold text-gray-900"
                >
                  Preguntas frecuentes
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                        <span>{faq.question}</span>
                        <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                          ▼
                        </span>
                      </summary>
                      <p className="mt-4 text-gray-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="mt-12 rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">{ctaTitle}</h2>
              <p className="mb-4 text-gray-600">{ctaBody}</p>
              <p className="mb-6 text-sm text-gray-600">
                WhatsApp {BUSINESS_PHONE_DISPLAY}. Horario de atención:{" "}
                {BUSINESS_HOURS.daysLabel}, de {BUSINESS_HOURS.opens} a{" "}
                {BUSINESS_HOURS.closes}. La dirección se coordina por mensaje.
              </p>
              <WhatsAppCTA href={whatsappHref}>{ctaLabel}</WhatsAppCTA>
              <p className="mt-6 flex flex-col items-center gap-2 text-sm sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  href="/agendar-hora-fonoaudiologo-infantil-chillan"
                  className="font-medium text-rose-700 underline"
                >
                  Cómo agendar la hora
                </Link>
                <Link
                  href="/contacto-fonoaudiologa-chillan"
                  className="font-medium text-rose-700 underline"
                >
                  Datos de contacto
                </Link>
                <Link
                  href="/fonoaudiologa-ninos-chillan"
                  className="font-medium text-rose-700 underline"
                >
                  Fonoaudiología infantil en Chillán
                </Link>
              </p>
            </div>

            {showBackLink ? (
              <p className="mt-8 text-center text-sm">
                <Link
                  href={backHref}
                  className="font-medium text-rose-600 underline"
                >
                  {backLabel}
                </Link>
              </p>
            ) : null}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
