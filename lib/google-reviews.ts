/**
 * Reseñas de Google Business Profile (GBP).
 * Actualizar al exportar nuevas reseñas desde Google.
 * Enlace del negocio: https://g.page/r/CQTz_OxX_3IBEAE/review
 */

export const GOOGLE_REVIEWS_LIST_URL =
  "https://g.page/r/CQTz_OxX_3IBEAE/review";

export const GOOGLE_REVIEWS_AGGREGATE = {
  ratingValue: "5.0",
  reviewCount: 40,
  bestRating: 5,
  worstRating: 1,
} as const;

export type GoogleReview = {
  /** Nombre corto en la UI */
  authorName: string;
  /** Nombre completo en JSON-LD (como en Google) */
  authorNameSchema: string;
  text: string;
};

/** Reseñas destacadas mostradas en la web (subset del total en GBP). */
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    authorName: "Marcela Pedrosa",
    authorNameSchema: "Marcela Andrea Pedrosa Ramirez",
    text: "Excelente fonoaudióloga. Intervención profesional, clara y bien estructurada, con evaluación precisa y seguimiento constante. Logró avances significativos en mi hijo.",
  },
  {
    authorName: "Gonzalo Larrea",
    authorNameSchema: "Gonzalo Larrea",
    text: "Excelente profesional, atendió a mi hijo y los avances fueron notables. Responsable, con mucha experiencia y muy cercana. Totalmente recomendada.",
  },
  {
    authorName: "Marcela Opazo",
    authorNameSchema: "Marcela Opazo Cid",
    text: "Excelente Profesional, muy cercana con sus pacientes y comprometida, nos ayudó como familia a superar el diagnóstico de nuestro pequeño asociado a problemas en el lenguaje.",
  },
  {
    authorName: "Arantzazu Larraza",
    authorNameSchema: "Arantzazu Larraza",
    text: "Atendió a mi hija de 10 años, fue una excelente experiencia de principio a fin. Es una profesional comprometida, entregada y muy lúdica! 100% recomendada.",
  },
  {
    authorName: "Raimundo Rodríguez",
    authorNameSchema: "Raimundo Rodríguez",
    text: "Excelente fonoaudióloga, en pocos meses su tratamiento hizo un cambio increíble. Se nota que ama lo que hace y se preocupa de verdad.",
  },
  {
    authorName: "Carolina Rojas",
    authorNameSchema: "Carolina Rojas",
    text: "La dedicación en la Fonoaudiología que entrega fue fundamental para mi recuperación. Su constancia y empatía me ayudó mucho, su trabajo cambia vidas.",
  },
];

export function buildGoogleAggregateRatingJsonLd() {
  return {
    "@type": "AggregateRating",
    ratingValue: GOOGLE_REVIEWS_AGGREGATE.ratingValue,
    reviewCount: String(GOOGLE_REVIEWS_AGGREGATE.reviewCount),
    bestRating: String(GOOGLE_REVIEWS_AGGREGATE.bestRating),
    worstRating: String(GOOGLE_REVIEWS_AGGREGATE.worstRating),
  };
}

export function buildGoogleReviewsJsonLd() {
  return GOOGLE_REVIEWS.map((review) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    author: {
      "@type": "Person",
      name: review.authorNameSchema,
    },
    reviewBody: review.text,
  }));
}
