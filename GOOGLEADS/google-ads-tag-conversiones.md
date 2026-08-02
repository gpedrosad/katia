# Google Ads — etiqueta y conversiones (katialafono.cl)

**Actualizado:** 2026-08-02  
**Cuenta Ads:** gpedrosadom@gmail.com  
**Tag ID:** `AW-18364805586`  
**Conversión Contacto (Clic WhatsApp):** `AW-18364805586/rBy6CNrQsNocENLjgrVE`  
**Teléfono NAP / Ads:** `+56995497838` (display `9 9549 7838`) — WhatsApp mismo número

## Qué hay en el código

| Pieza | Dónde |
|-------|--------|
| Etiqueta gtag (base) | `app/_components/GoogleAdsTag.tsx` → `app/layout.tsx` |
| ID Ads | `lib/ads-tracking.ts` → `GOOGLE_ADS_ID` |
| `send_to` conversión | `GOOGLE_ADS_CONVERSION_SEND_TO` (default Contacto arriba) |
| Lead WhatsApp | `trackWhatsAppLead()` en `WhatsAppCTA` y `StickyWhatsApp` |

**No usamos GTM.** gtag directo.

## Cómo medir en Ads (UI)

En el asistente del fragmento de evento:

1. **Paso 1:** elige **Clic** (no “Carga de página”).
2. No pegues el snippet a mano en el HTML: ya dispara en el `onClick` de WhatsApp.
3. Confirma / listo en Ads.

## Eventos al clic WhatsApp

```js
gtag('event', 'whatsapp_lead', { … });
gtag('event', 'conversion', {
  send_to: 'AW-18364805586/rBy6CNrQsNocENLjgrVE',
  value: 1.0,
  currency: 'CLP',
});
```

## Env (opcional; ya hay default en código)

```bash
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-18364805586
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO=AW-18364805586/rBy6CNrQsNocENLjgrVE
```

Tras push a `main` → deploy Vercel → probar clic en `/ads/voz-disfonia-online` con Tag Assistant.

## Cuentas vinculadas

| Fuente | ¿Vincular? |
|--------|------------|
| GBP Katia (ficha con reseñas) | Sí |
| Tel `+56995497838` | Opcional; lead = WhatsApp |
| YouTube personal / Merchant Idea Madera | **No** |
| App | **No** |
