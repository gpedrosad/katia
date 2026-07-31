import {
  GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_AGGREGATE,
  GOOGLE_BUSINESS_PROFILE_LIST_URL,
} from "@/lib/google-reviews";

type AdsGoogleTrustProps = {
  /** Índices en GOOGLE_REVIEWS (lib/google-reviews.ts). Default: Carolina + Raimundo */
  reviewIndexes?: number[];
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
  reviewIndexes = [5, 4],
}: AdsGoogleTrustProps) {
  const reviews = reviewIndexes
    .map((i) => GOOGLE_REVIEWS[i])
    .filter(Boolean)
    .slice(0, 2);

  return (
    <section className="border-t border-stone-200/70 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
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

        <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.authorName}
              className="rounded-2xl border border-stone-200 bg-[#faf8f6] p-5"
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

        <a
          href={GOOGLE_PROFILE_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-800"
        >
          Ver perfil en Google
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
