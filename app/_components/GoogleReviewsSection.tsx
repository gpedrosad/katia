import Link from "next/link";
import {
  GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_AGGREGATE,
  GOOGLE_REVIEWS_LIST_URL,
} from "@/lib/google-reviews";
import { TestimonialCard } from "./TestimonialCard";

type GoogleReviewsSectionProps = {
  /** Cuántas reseñas mostrar en grid (todas si se omite). */
  limit?: number;
  heading?: string;
  subheading?: string;
  className?: string;
};

export function GoogleReviewsSection({
  limit = 6,
  heading = "Lo que dicen las familias en Google",
  subheading = `Valoración ${GOOGLE_REVIEWS_AGGREGATE.ratingValue} con ${GOOGLE_REVIEWS_AGGREGATE.reviewCount} reseñas en Google`,
  className = "",
}: GoogleReviewsSectionProps) {
  const items = GOOGLE_REVIEWS.slice(0, limit);

  return (
    <section className={className}>
      <div className="mb-10 text-center">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-1" aria-hidden>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-6 w-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xl font-bold text-gray-900">
            {GOOGLE_REVIEWS_AGGREGATE.ratingValue}
          </span>
          <span className="text-gray-600">
            ({GOOGLE_REVIEWS_AGGREGATE.reviewCount} reseñas en Google)
          </span>
        </div>
        <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">{subheading}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((review) => (
          <TestimonialCard
            key={review.authorNameSchema}
            name={review.authorName}
            text={review.text}
            date="Google"
          />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        Reseñas verificadas en Google Business Profile.
      </p>
      <p className="mt-4 text-center">
        <a
          href={GOOGLE_REVIEWS_LIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-rose-600 hover:underline"
        >
          Ver todas las reseñas en Google →
        </a>
      </p>
    </section>
  );
}
