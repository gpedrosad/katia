/** ID de Google Ads (gtag). Override con NEXT_PUBLIC_GOOGLE_ADS_ID. */
export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || "AW-18364805586";

/**
 * Conversión "Contacto" / Clic WhatsApp.
 * Override: NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO
 */
export const GOOGLE_ADS_CONVERSION_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO?.trim() ||
  "AW-18364805586/rBy6CNrQsNocENLjgrVE";

/**
 * Dispara tracking de lead WhatsApp para Google Ads.
 * Equivale al fragmento "Clic" de Ads (`gtag_report_conversion`), pero sin
 * `return false` ni redirect: el CTA abre WhatsApp en pestaña nueva.
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

  // Fragmento Contacto: AW-18364805586/rBy6CNrQsNocENLjgrVE
  gtag("event", "conversion", {
    send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
    value: 1.0,
    currency: "CLP",
  });
}
