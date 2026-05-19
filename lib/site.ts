export const SITE_URL = "https://www.katialafono.cl";
export const WHATSAPP_NUMBER = "56995497838";
/** Ruta de imagen OG generada por app/opengraph-image.tsx (metadata file convention). */
export const OG_IMAGE = "/opengraph-image";

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
