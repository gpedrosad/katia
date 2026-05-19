"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { SeoRouteSection } from "@/lib/seo-routes";

type Props = {
  sections: SeoRouteSection[];
  totalCount: number;
};

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function SeoLinksDirectory({ sections, totalCount }: Props) {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return sections;

    return sections
      .map((section) => ({
        ...section,
        routes: section.routes.filter(
          (r) =>
            normalize(r.label).includes(q) || normalize(r.path).includes(q)
        ),
      }))
      .filter((section) => section.routes.length > 0);
  }, [query, sections]);

  const visibleCount = filteredSections.reduce(
    (n, s) => n + s.routes.length,
    0
  );

  return (
    <>
      <div className="mb-8">
        <label htmlFor="seo-filter" className="sr-only">
          Filtrar landings
        </label>
        <input
          id="seo-filter"
          type="search"
          placeholder="Filtrar por título o ruta…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
          autoComplete="off"
        />
        <p className="mt-2 text-sm text-gray-500">
          {query
            ? `${visibleCount} de ${totalCount} enlaces`
            : `${totalCount} landings en total`}
        </p>
      </div>

      <nav
        aria-label="Secciones"
        className="mb-10 flex flex-wrap gap-2 rounded-xl border border-gray-200 bg-gray-50 p-4"
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 hover:text-rose-700 hover:ring-rose-200"
          >
            {section.title}
            <span className="ml-1 text-gray-400">({section.routes.length})</span>
          </a>
        ))}
      </nav>

      <div className="space-y-12">
        {filteredSections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-6">
            <h2 className="mb-4 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-900">
              {section.title}
              <span className="ml-2 text-base font-normal text-gray-400">
                {section.routes.length}
              </span>
            </h2>
            <ul className="columns-1 gap-x-8 sm:columns-2 lg:columns-3">
              {section.routes.map((r) => (
                <li key={r.path} className="mb-2 break-inside-avoid">
                  <Link
                    href={r.path}
                    className="group block rounded-md px-2 py-1.5 hover:bg-rose-50"
                  >
                    <span className="font-medium text-rose-700 group-hover:underline">
                      {r.label}
                    </span>
                    <span className="mt-0.5 block font-mono text-xs text-gray-500">
                      {r.path}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {filteredSections.length === 0 && (
        <p className="text-center text-gray-500">
          Ningún enlace coincide con el filtro.
        </p>
      )}
    </>
  );
}
