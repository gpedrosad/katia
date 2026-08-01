import Script from "next/script";
import { GOOGLE_ADS_ID } from "@/lib/ads-tracking";

/**
 * Etiqueta base de Google Ads. Carga en todo el sitio (incl. /ads).
 * Conversión WhatsApp: NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO=AW-…/label
 */
export function GoogleAdsTag() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}
