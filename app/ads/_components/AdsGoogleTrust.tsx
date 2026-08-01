import {
  GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_AGGREGATE,
  GOOGLE_BUSINESS_PROFILE_LIST_URL,
  GOOGLE_REVIEWS_LIST_URL,
} from "@/lib/google-reviews";

type AdsGoogleTrustProps = {
  /**
   * Índices en GOOGLE_REVIEWS. Si se omite, muestra todas las reseñas cargadas.
   * Orden = prioridad (p. ej. adulto/voz primero).
   */
  reviewIndexes?: number[];
  /**
   * Cuántas se ven en mobile (&lt; sm). Default 2.
   * Desde `sm` se muestran todas las seleccionadas.
   */
  mobileLimit?: number;
};

/** Link al perfil GBP (ver ficha / reseñas). No usar /review (escribir reseña). */
const GOOGLE_PROFILE_HREF = GOOGLE_BUSINESS_PROFILE_LIST_URL;

/** “G” oficial multicolor — referencia visual a reseñas Google. */
function GoogleMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function AdsGoogleBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={GOOGLE_PROFILE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm shadow-sm ring-1 ring-stone-200/80 transition-colors hover:bg-stone-50 ${className}`}
    >
      <GoogleMark className="h-4 w-4 shrink-0" />
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
  mobileLimit = 2,
}: AdsGoogleTrustProps) {
  const reviews = reviewIndexes
    ? reviewIndexes.map((i) => GOOGLE_REVIEWS[i]).filter(Boolean)
    : [...GOOGLE_REVIEWS];

  return (
    <section className="border-t border-stone-200/70 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6">
        <div className="flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-50 px-3 py-1.5 ring-1 ring-stone-200/80">
            <GoogleMark className="h-5 w-5" />
            <span className="text-sm font-semibold text-stone-700">Google</span>
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-extrabold tracking-tight text-rose-950">
              {GOOGLE_REVIEWS_AGGREGATE.ratingValue}
            </span>
            <span className="text-amber-500 text-xl" aria-hidden>
              ★★★★★
            </span>
          </div>
          <p className="text-sm text-stone-600">
            {GOOGLE_REVIEWS_AGGREGATE.reviewCount} reseñas en Google
          </p>
        </div>

        <div className="mt-8 grid auto-rows-fr gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.authorNameSchema}
              className={`flex h-full flex-col rounded-2xl border border-stone-200 bg-[#faf8f6] p-5${
                i >= mobileLimit ? " hidden sm:flex" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-amber-500 text-sm" aria-label="5 de 5">
                  ★★★★★
                </p>
                <GoogleMark className="h-4 w-4 opacity-90" />
              </div>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-stone-700">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-1.5 text-xs font-medium text-stone-500">
                <span>{r.authorName}</span>
                <span aria-hidden>·</span>
                <span>Google</span>
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
            <GoogleMark className="h-4 w-4 shrink-0" />
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
