# Patrón landing Google Ads

Usar para cada cluster. Ejemplo vivo: `/ads/voz-disfonia-online`.  
Craft Impeccable (2026-08-01): [`01-voz-disfonia-online/CRAFT.md`](./01-voz-disfonia-online/CRAFT.md).

---

## UI / librerías

| Pieza | Uso |
|-------|-----|
| Iconos UI | `lucide-react` — solo en **señales**; pasos van numerados |
| Marca Google | SVG `GoogleMark` dentro de `AdsGoogleTrust.tsx` (no lucide, no PNG) |
| Animación | CSS only (scoped `.ads-landing`): hero focal + FAQ + CTA press. Sin Framer / sin scroll JS |
| Estilo | Tailwind 4; sin cards decorativas en señales; sin vibecoding |
| Foto Ads | `/katia-ads-hero.jpg` (~80 KB) — **no** el PNG 6 MB del sitio |
| Sticky CTA | `AdsStickyCta` — solo `md:hidden`; oculta si `#ads-cta-hero` o `#ads-cta-final` están visibles |

### Animaciones (thesis)

**Focal:** hero “respiración” — copy con stagger corto + foto `scale` (sin opacity en LCP) + CTA settle.

| Dónde | Clase | Notas |
|-------|--------|--------|
| Badge / H1 / lead | `ads-rise` + `ads-rise-d1…d2` | stagger ≤300 ms total |
| CTA hero | `ads-cta-enter` + `ads-cta-press` | glow único al entrar; active scale |
| Foto hero | `ads-photo-settle` | solo `transform: scale`; **nunca** fade opacity (LCP) |
| Señales / pasos / reseñas | sin entrance | |
| FAQ | grid-rows 0fr→1fr | continuidad al abrir/cerrar |
| Sticky CTA | sin animación de entrada | aparece solo si no hay CTA en viewport |

Respeta `prefers-reduced-motion` (globals.css).

### Performance (obligatorio)

| Regla | Detalle |
|-------|---------|
| Imagen hero | `priority` + `fetchPriority="high"` + `quality={75}` + `sizes` reales |
| Asset | Usar `katia-ads-hero.jpg` (Ads). Regenerar con `sips` si cambia la foto |
| Below-fold | clase `content-auto` (`content-visibility: auto`) |
| Client JS | `AdsFaq` (dynamic) + `AdsStickyCta` (fixed; oculta vs hero/final) |
| Link Google | `maps?cid=…` vía `GOOGLE_BUSINESS_PROFILE_URL` |
| Noindex | siempre |
| Spacer sticky | dentro de `AdsStickyCta` (colapsa si la barra está oculta) |

---

## Reseñas Google (reutilizar en cada landing)

**Fuente única de datos:** `lib/google-reviews.ts` (`GOOGLE_REVIEWS`, aggregate, URLs).  
**UI Ads:** `app/ads/_components/AdsGoogleTrust.tsx` — no reimplementar.

| Pieza | Componente | Qué hace |
|-------|------------|----------|
| Badge hero | `AdsGoogleBadge` | “G” multicolor + ★ rating + N reseñas → Maps |
| Bloque reseñas | `AdsGoogleReviews` | Header con “G” + rating · grilla de quotes · CTAs Maps |
| Ícono | `GoogleMark` (interno al archivo) | SVG “G” oficial (#4285F4 / #34A853 / #FBBC05 / #EA4335) |

### Cómo usarlo en una landing nueva

```tsx
import {
  AdsGoogleBadge,
  AdsGoogleReviews,
} from "@/app/ads/_components/AdsGoogleTrust";

// En el hero:
<AdsGoogleBadge className="ads-rise mb-5" />

// Antes del FAQ (tras “Por qué Katia”):
<AdsGoogleReviews
  reviewIndexes={[/* orden message-match del cluster */]}
  mobileLimit={2} // default; desktop muestra todas las del array
/>
```

### Reglas de reseñas

| Regla | Detalle |
|-------|---------|
| Desktop | Llenar grilla (`sm:2` / `lg:3`). Ideal **6** ítems (2×3). Nunca dejar solo 2 en desktop |
| Mobile | Solo las primeras `mobileLimit` (default **2**) |
| Orden | Message-match primero (adulto/voz, infantil, etc.), luego relleno |
| Links | Solo `GOOGLE_BUSINESS_PROFILE_URL` / `GOOGLE_REVIEWS_URL` (`maps?cid=…`). **No** `g.page` |
| Marca | Siempre el “G” en badge + header + cada tarjeta + botón “Ver todas…” |
| Textos | Reales de GBP; no inventar. Actualizar `reviewCount` en `lib/google-reviews.ts` |

Índices (`GOOGLE_REVIEWS`):

| Index | Autor | Uso sugerido |
|-------|--------|--------------|
| 0–3 | Marcela P., Gonzalo, Marcela O., Arantzazu | infantil |
| 4 | Raimundo Rodríguez | genérico / avances |
| 5 | Carolina Rojas | adulto / recuperación |

Ejemplo voz: `reviewIndexes={[5, 4, 0, 1, 2, 3]}`.

---

## Reglas generales

| Regla | Detalle |
|-------|---------|
| Ruta | `app/ads/{slug}/page.tsx` + `className="ads-landing"` en `<main>` |
| Layout | `app/ads/layout.tsx` (lean, sin footer sitio) |
| SEO | **siempre** `buildNoIndexMetadata` — noindex |
| CTA | solo `WhatsAppCTA` + `whatsappUrl` |
| CTAs en página | hero (`#ads-cta-hero`) + final (`#ads-cta-final`) + sticky mobile. **Sin** CTA mid |
| Copy CTA | Cluster-specific; voz: hero/sticky “Quiero ayuda con mi voz” · final “Empezar por WhatsApp” |
| Foto | `/katia-ads-hero.jpg` |
| Geo | país (Chile), **sin ciudades** en H1 |
| Docs cluster | `ads/NN-slug/README.md` (+ `CRAFT.md` si aplica) |

---

## Orden de secciones (obligatorio)

1. **Hero** — `AdsGoogleBadge` · H1 · frase dolor · CTA (`#ads-cta-hero`) · foto  
2. **Señales** — lista de 3 (icono + texto), **sin cards**  
3. **Cómo funciona** — 3 pasos **numerados**, sin CTA mid  
4. **Por qué Katia** — 1 línea credencial  
5. **Reseñas Google** — `AdsGoogleReviews` (índices del cluster; ver sección arriba)  
6. **FAQ** — `AdsFaq` · **3** preguntas frías (online≈presencial, Chile, primer paso)  
7. **CTA final** — `#ads-cta-final`  
8. **Sticky mobile** — `AdsStickyCta`

**Opcional:** `AdsPatientQuotes` solo con testimonios reales del cluster (nunca inventar).

No agregar: cards decorativas, stats inventados, precios, largos párrafos SEO, emojis, CTA intermedio.

---

## Componentes reutilizables

```
app/ads/_components/AdsGoogleTrust.tsx
  GoogleMark          → SVG “G” (interno; no exportar salvo necesidad)
  AdsGoogleBadge      → badge hero
  AdsGoogleReviews    → sección reseñas (reviewIndexes, mobileLimit)

app/ads/_components/AdsFaq.tsx
  AdsFaq              → acordeón (grid-rows) + focus-visible

app/ads/_components/AdsStickyCta.tsx
  AdsStickyCta        → barra fija WhatsApp (mobile; oculta si hero/final visibles)

app/ads/_components/AdsPatientQuotes.tsx
  AdsPatientQuotes    → opcional; testimonios reales del cluster
```

---

## Checklist nueva landing

```
[ ] app/ads/{slug}/page.tsx + class ads-landing
[ ] metadata = buildNoIndexMetadata(...)
[ ] H1 = keyword del cluster
[ ] Foto katia-ads-hero.jpg (sin fade opacity)
[ ] AdsGoogleBadge en hero (incluye “G”)
[ ] AdsGoogleReviews con reviewIndexes (6 ideal desktop; mobileLimit 2)
[ ] ids #ads-cta-hero y #ads-cta-final
[ ] AdsStickyCta + sin CTA mid
[ ] FAQ ×3
[ ] WA_MSG: cluster + "llegué por Google"
[ ] ads/{NN}-{slug}/README.md
[ ] Probar desktop (grilla 6) + mobile (2 reseñas + sticky)
```

---

## Anuncio ↔ landing

| Elemento anuncio | Landing |
|------------------|---------|
| H1 anuncio | = H1 o primeras palabras del H1 |
| “online” / “videollamada” | visible above the fold |
| Final URL | `https://www.katialafono.cl/ads/{slug}` |
| Negativas | `GOOGLEADS/google-ads-negativas-online.md` |
