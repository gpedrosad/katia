import { SeoLinksDirectory } from "./SeoLinksDirectory";
import { buildNoIndexMetadata } from "@/lib/seo";
import {
  SEO_ROUTE_SECTIONS,
  getSeoRouteCount,
} from "@/lib/seo-routes";

export const metadata = buildNoIndexMetadata(
  "Índice SEO (interno) | Katia Domínguez"
);

export default function SeoLinksPage() {
  const totalCount = getSeoRouteCount();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm font-medium uppercase tracking-wide text-amber-700">
            Uso interno · no indexar
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Índice de landings SEO
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Listado de todas las páginas SEO del sitio. Esta URL está excluida del
            sitemap y bloqueada en robots.txt con meta{" "}
            <code className="rounded bg-gray-200 px-1 text-sm">noindex</code>.
          </p>
        </header>

        <SeoLinksDirectory sections={SEO_ROUTE_SECTIONS} totalCount={totalCount} />
      </div>
    </main>
  );
}
