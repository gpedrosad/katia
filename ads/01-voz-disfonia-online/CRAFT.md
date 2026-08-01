# Craft Impeccable — `/ads/voz-disfonia-online`

**Fecha:** 2026-08-01  
**Modo:** Persuade (landing Ads)  
**Skills aplicados:** `animate` · `distill` · `polish` · `optimize` (+ conversión)  
**Incumbente:** identidad rose/stone del sitio; no redesign de marca.

## Objetivo único

Que el visitante del anuncio **escriba por WhatsApp** (evaluación de voz). Todo lo demás es soporte.

## Decisiones (qué se hizo y por qué)

| Decisión | Por qué |
|----------|---------|
| Un momento de motion en el **hero** (copy stagger + foto scale) | Thesis `animate`: un focal, no fade en cada sección |
| Foto **sin** fade de opacity | No retrasar LCP |
| Señales como **lista**, no cards 3-col | `distill` + craft-floor: cards icon+título+texto no son estructura |
| Pasos **numerados**, sin iconos | La secuencia aporta significado; iconos repetían ruido |
| **Sin CTA** en “Cómo funciona” | Un solo job; hero + final (+ sticky) bastan |
| FAQ **3** preguntas frías | online≈presencial · Chile · primer paso (menos scroll) |
| 1 línea **Por qué Katia** antes de reseñas | Credencial sin inventar claims |
| Sticky WhatsApp **solo mobile**, se oculta si hero o CTA final están a la vista | Nunca dos CTAs a la vez (`#ads-cta-hero` + `#ads-cta-final`) |
| Reseñas índices **5, 4** (máx. 2) | Message-match adulto/recuperación; menos scroll |
| FAQ con `grid-rows` + focus-visible | Continuidad al abrir + teclado |
| Links Maps `cid=` | `g.page` roto |
| CWV móvil lab (prod, 2026-08-01) | Perf 99 · LCP 2,2s · CLS 0 · TBT 32ms |
## No hacer en esta landing

- Framer Motion / IntersectionObserver de reveals  
- Fade opacity en la imagen LCP  
- Inventar testimonios (`AdsPatientQuotes`)  
- CTA intermedio o más de 2 reseñas  
- Usar `g.page`  

## Archivos clave

| Archivo | Rol |
|---------|-----|
| `app/ads/voz-disfonia-online/page.tsx` | Landing |
| `app/ads/_components/AdsStickyCta.tsx` | Barra mobile |
| `app/ads/_components/AdsFaq.tsx` | Acordeón |
| `app/globals.css` | Clases `.ads-landing *` |
| `ads/PATRON-LANDING.md` | Patrón reutilizable |

## Seguimiento

- Oferta pendiente de producto: `$impeccable init` → `PRODUCT.md` (no bloquea refinements)  
- Medir en Ads: CTR landing → WhatsApp (`whatsapp_lead` en dataLayer)
