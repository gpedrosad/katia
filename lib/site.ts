export const SITE_URL = "https://www.katialafono.cl";
export const WHATSAPP_NUMBER = "56995497838";

/** NAP canónico (alineado Google Business Profile): nombre sin sufijos geo. */
export const BUSINESS_NAME = "Katia Domínguez";
export const BUSINESS_PHONE_E164 = "+56995497838";
export const SERVICE_AREA_CITY = "Chillán";
export const SERVICE_AREA_REGION = "Región de Ñuble";
/** Ruta de imagen OG generada por app/opengraph-image.tsx (metadata file convention). */
export const OG_IMAGE = "/opengraph-image";

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
