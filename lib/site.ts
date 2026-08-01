export const SITE_URL = "https://www.katialafono.cl";
export const WHATSAPP_NUMBER = "56995497838";

/**
 * NAP canónico — mantener idéntico en web, GBP, Instagram y citaciones.
 * Calle exacta: no publicar en schema/footer; se coordina por WhatsApp.
 */
export const BUSINESS_NAME = "Katia Domínguez";
/** Nombre tal como aparece hoy en Google Business Profile / Maps. */
export const GOOGLE_BUSINESS_ALTERNATE_NAME =
  "Fonoaudiologa Katia Dominguez - Chillan";
export const BUSINESS_PHONE_E164 = "+56995497838";
export const BUSINESS_PHONE_DISPLAY = "9 9549 7838";
export const SERVICE_AREA_CITY = "Chillán";
export const SERVICE_AREA_REGION = "Región de Ñuble";
export const SERVICE_AREA_COUNTRY = "CL";

/** CID de Google Maps (ficha con las reseñas). g.page/r/… está roto → google.com. */
export const GOOGLE_MAPS_CID = "8785110851903218280";
/** Feature id Maps (hex) — misma ficha. */
export const GOOGLE_MAPS_FID = "0x51ceb051a2dde6f:0x79eafbc6381ee268";
/** Perfil GBP canónico en Maps (abre ficha + reseñas). */
export const GOOGLE_BUSINESS_PROFILE_URL = `https://www.google.com/maps?cid=${GOOGLE_MAPS_CID}`;
/**
 * Ver reseñas: misma ficha Maps (listado de opiniones).
 * No usar g.page/…/review (redirige mal / solo sirve para escribir).
 */
export const GOOGLE_REVIEWS_URL = GOOGLE_BUSINESS_PROFILE_URL;
/** Knowledge Graph mid del negocio (panel de búsqueda). */
export const GOOGLE_KGMID = "/g/11mz8n1czr";
export const GOOGLE_KNOWLEDGE_PANEL_URL = `https://www.google.com/search?kgmid=${encodeURIComponent(GOOGLE_KGMID)}&q=${encodeURIComponent(GOOGLE_BUSINESS_ALTERNATE_NAME)}`;
/** Coordenadas aproximadas del pin en Maps (Chillán). */
export const BUSINESS_GEO = {
  latitude: -36.5814696,
  longitude: -72.0705339,
} as const;
export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/katialafono/";
/** Horario de atención alineado a GBP (abre 10:00). */
export const BUSINESS_HOURS = {
  opens: "10:00",
  closes: "18:00",
  daysLabel: "lunes a viernes",
} as const;

/** Ruta de imagen OG generada por app/opengraph-image.tsx (metadata file convention). */
export const OG_IMAGE = "/opengraph-image";

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
