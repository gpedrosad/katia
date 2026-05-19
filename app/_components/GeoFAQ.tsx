export type GeoFAQItem = {
  question: string;
  answer: string;
};

type GeoFAQProps = {
  items: GeoFAQItem[];
  heading?: string;
  className?: string;
  /** When false, only renders visible FAQ (use if JSON-LD is defined elsewhere). */
  includeJsonLd?: boolean;
};

export function buildFaqJsonLd(items: GeoFAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function GeoFAQ({
  items,
  heading = "Preguntas frecuentes",
  className = "",
  includeJsonLd = true,
}: GeoFAQProps) {
  const jsonLd = buildFaqJsonLd(items);

  return (
    <>
      {includeJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <section className={className} aria-labelledby="geo-faq-heading">
        <h2 id="geo-faq-heading" className="text-2xl font-bold">
          {heading}
        </h2>
        <dl className="mt-6 space-y-6">
          {items.map((item) => (
            <div key={item.question}>
              <dt className="text-lg font-semibold">{item.question}</dt>
              <dd className="mt-2 text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
