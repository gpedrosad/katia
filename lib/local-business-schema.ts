import {
  BUSINESS_GEO,
  BUSINESS_HOURS,
  BUSINESS_NAME,
  BUSINESS_PHONE_E164,
  GOOGLE_BUSINESS_ALTERNATE_NAME,
  GOOGLE_BUSINESS_PROFILE_URL,
  GOOGLE_KNOWLEDGE_PANEL_URL,
  INSTAGRAM_PROFILE_URL,
  SERVICE_AREA_CITY,
  SERVICE_AREA_COUNTRY,
  SERVICE_AREA_REGION,
  SITE_URL,
} from "./site";
import {
  buildGoogleAggregateRatingJsonLd,
  buildGoogleReviewsJsonLd,
} from "./google-reviews";

export const MEDICAL_BUSINESS_ID = `${SITE_URL}/#business`;

type BuildMedicalBusinessOptions = {
  description?: string;
  /** Incluir aggregateRating + review (home). Default false. */
  includeReviews?: boolean;
  /** URL de la página como mainEntityOfPage. */
  pageUrl?: string;
  extra?: Record<string, unknown>;
};

/**
 * Schema MedicalBusiness canónico (NAP + GBP).
 * Usar el mismo @id en todas las páginas para una sola entidad.
 */
export function buildMedicalBusinessJsonLd({
  description,
  includeReviews = false,
  pageUrl = SITE_URL,
  extra,
}: BuildMedicalBusinessOptions = {}) {
  return {
    "@type": "MedicalBusiness",
    "@id": MEDICAL_BUSINESS_ID,
    name: BUSINESS_NAME,
    alternateName: GOOGLE_BUSINESS_ALTERNATE_NAME,
    description,
    url: SITE_URL,
    mainEntityOfPage: pageUrl,
    telephone: BUSINESS_PHONE_E164,
    image: `${SITE_URL}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SERVICE_AREA_CITY,
      addressRegion: SERVICE_AREA_REGION,
      addressCountry: SERVICE_AREA_COUNTRY,
    },
    areaServed: {
      "@type": "City",
      name: SERVICE_AREA_CITY,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: SERVICE_AREA_REGION,
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_GEO.latitude,
      longitude: BUSINESS_GEO.longitude,
    },
    hasMap: GOOGLE_BUSINESS_PROFILE_URL,
    sameAs: [
      GOOGLE_BUSINESS_PROFILE_URL,
      GOOGLE_KNOWLEDGE_PANEL_URL,
      INSTAGRAM_PROFILE_URL,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: BUSINESS_HOURS.opens,
        closes: BUSINESS_HOURS.closes,
      },
    ],
    ...(includeReviews
      ? {
          aggregateRating: buildGoogleAggregateRatingJsonLd(),
          review: buildGoogleReviewsJsonLd(),
        }
      : {}),
    ...extra,
  };
}
