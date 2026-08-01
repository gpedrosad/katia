"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { buildFaqJsonLd, type GeoFAQItem } from "@/app/_components/GeoFAQ";

type AdsFaqProps = {
  items: GeoFAQItem[];
  heading?: string;
};

export function AdsFaq({
  items,
  heading = "Preguntas frecuentes",
}: AdsFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const jsonLd = buildFaqJsonLd(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section aria-labelledby="ads-faq-heading">
        <h2
          id="ads-faq-heading"
          className="text-center text-2xl font-bold text-rose-950"
        >
          {heading}
        </h2>
        <div className="mt-6 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
          {items.map((item, i) => {
            const open = openIndex === i;
            const panelId = `ads-faq-panel-${i}`;
            const buttonId = `ads-faq-button-${i}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-150 hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rose-400"
                  >
                    <span className="text-base font-semibold text-rose-950">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-rose-700 transition-transform duration-200 ease-out ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!open}
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`px-5 pb-4 text-sm leading-relaxed text-stone-600 transition-opacity duration-200 motion-reduce:transition-none ${
                        open ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
