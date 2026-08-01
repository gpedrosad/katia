import {
  GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_AGGREGATE,
  GOOGLE_BUSINESS_PROFILE_LIST_URL,
  GOOGLE_REVIEWS_LIST_URL,
} from "@/lib/google-reviews";

type AdsGoogleTrustProps = {
  /**
   * Índices en GOOGLE_REVIEWS. Si se omite, muestra todas las reseñas cargadas.
   */
  reviewIndexes?: number[];
  /** Máximo a mostrar (default: todas). */
  limit?: number;
};

/** Link al perfil GBP (ver ficha / reseñas). No usar /review (escribir reseña). */
const GOOGLE_PROFILE_HREF = GOOGLE_BUSINESS_PROFILE_LIST_URL;

export function AdsGoogleBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={GOOGLE_PROFILE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm shadow-sm ring-1 ring-stone-200/80 transition-colors hover:bg-stone-50 ${className}`}
    >
      <span className="font-semibold text-amber-600" aria-hidden>
        ★ {GOOGLE_REVIEWS_AGGREGATE.ratingValue}
      </span>
      <span className="text-stone-600">
        Google · {GOOGLE_REVIEWS_AGGREGATE.reviewCount} reseñas
      </span>
    </a>
  );
}

export function AdsGoogleReviews({
  reviewIndexes,
  limit,
}: AdsGoogleTrustProps) {
  const reviews = (
    reviewIndexes
      ? reviewIndexes.map((i) => GOOGLE_REVIEWS[i]).filter(Boolean)
      : [...GOOGLE_REVIEWS]
  ).slice(0, limit ?? GOOGLE_REVIEWS.length);

  /** En mobile solo 2; desde sm se ven el resto. */
  const mobileVisible = 2;

  return (
    <section className="border-t border-stone-200/70 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-4xl font-extrabold tracking-tight text-rose-950">
            {GOOGLE_REVIEWS_AGGREGATE.ratingValue}
          </span>
          <span className="text-amber-500 text-xl" aria-hidden>
            ★★★★★
          </span>
        </div>
        <p className="mt-1 text-sm text-stone-600">
          {GOOGLE_REVIEWS_AGGREGATE.reviewCount} reseñas en Google
        </p>

        <div className="mt-8 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.authorNameSchema}
              className={`rounded-2xl border border-stone-200 bg-[#faf8f6] p-5${
                i >= mobileVisible ? " hidden sm:block" : ""
              }`}
            >
              <p className="text-amber-500 text-sm" aria-label="5 de 5">
                ★★★★★
              </p>
              <blockquote className="mt-2 text-sm leading-relaxed text-stone-700">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-3 text-xs font-medium text-stone-500">
                {r.authorName} · Google
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={GOOGLE_REVIEWS_LIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-rose-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            Ver todas las reseñas en Google
            <span aria-hidden>→</span>
          </a>
          <a
            href={GOOGLE_PROFILE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-stone-600 underline-offset-2 hover:text-rose-800 hover:underline"
          >
            Ver ficha en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
