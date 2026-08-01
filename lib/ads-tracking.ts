/** ID de Google Ads (gtag). Override con NEXT_PUBLIC_GOOGLE_ADS_ID. */
export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || "AW-18364805586";

/**
 * Dispara tracking de lead WhatsApp para Google Ads.
 * - Siempre: dataLayer + gtag event `whatsapp_lead`
 * - Si hay send_to: también `conversion` (acción de Google Ads)
 */
export function trackWhatsAppLead(label?: string) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "whatsapp_lead", label: label ?? "" });

  const gtag = window.gtag;
  if (!gtag) return;

  gtag("event", "whatsapp_lead", {
    event_category: "engagement",
    event_label: label ?? "",
    send_to: GOOGLE_ADS_ID,
  });

  const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO?.trim();
  if (sendTo) {
    gtag("event", "conversion", { send_to: sendTo });
  }
}
