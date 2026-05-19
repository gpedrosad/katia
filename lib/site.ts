export const SITE_URL = "https://www.katialafono.cl";
export const WHATSAPP_NUMBER = "56995497838";
export const OG_IMAGE = `${SITE_URL}/KatiaDominguezFonoaudiologa.png`;

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
