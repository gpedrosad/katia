# Google Ads — etiqueta y conversiones (katialafono.cl)

**Actualizado:** 2026-08-01  
**Cuenta Ads:** gpedrosadom@gmail.com  
**Tag ID:** `AW-18364805586`  
**Teléfono NAP / Ads:** `+56995497838` (display `9 9549 7838`) — WhatsApp mismo número

## Qué hay en el código

| Pieza | Dónde |
|-------|--------|
| Etiqueta gtag (base) | `app/_components/GoogleAdsTag.tsx` → cargada en `app/layout.tsx` |
| ID Ads | `lib/ads-tracking.ts` → `GOOGLE_ADS_ID` (default `AW-18364805586`) |
| Lead WhatsApp | `trackWhatsAppLead()` en clic de `WhatsAppCTA` y `StickyWhatsApp` |
| Env | `.env.example` → `NEXT_PUBLIC_GOOGLE_ADS_*` |

**No usamos GTM** para Ads: gtag directo es suficiente.

## Eventos

1. Al cargar cualquier página: `gtag('config', 'AW-18364805586')`
2. Al clic WhatsApp:
   - `dataLayer` → `{ event: "whatsapp_lead", label }`
   - `gtag('event', 'whatsapp_lead', …)`
   - Si existe env `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO` → también `gtag('event', 'conversion', { send_to })`

## Pendiente (conversión primaria)

1. En Google Ads: Conversiones → sitio web → acción **Clic WhatsApp** (o “Contacto”).
2. Copiar el `send_to` completo: `AW-18364805586/XXXXXXXX`.
3. En Vercel (Production) y `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-18364805586
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO=AW-18364805586/XXXXXXXX
```

4. Redeploy. Probar clic en `/ads/voz-disfonia-online` y ver “Conversiones recientes” / Tag Assistant.

## Cuentas vinculadas (setup Ads)

| Fuente | ¿Vincular? |
|--------|------------|
| GBP Katia (ficha con reseñas) | Sí, si es la misma entidad |
| Tel `+56995497838` | Opcional (llamadas); lead principal = WhatsApp |
| YouTube personal / Merchant Idea Madera | **No** |
| App | **No** |

## Verificación rápida

```bash
# Tras deploy: en Chrome DevTools → Network filtrar "google" / "gtag"
# o extensión Google Tag Assistant en https://www.katialafono.cl
```

Landing Ads de referencia: `/ads/voz-disfonia-online` · patrón `ads/PATRON-LANDING.md`.
