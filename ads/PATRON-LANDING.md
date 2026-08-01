# Patrón landing Google Ads

Usar para cada cluster. Ejemplo vivo: `/ads/voz-disfonia-online`.  
Craft Impeccable (2026-08-01): [`01-voz-disfonia-online/CRAFT.md`](./01-voz-disfonia-online/CRAFT.md).

---

## UI / librerías

| Pieza | Uso |
|-------|-----|
| Iconos | `lucide-react` — solo en **señales**; pasos van numerados |
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
| Sticky CTA | sin animación de entrada | siempre visible en mobile |

Respeta `prefers-reduced-motion` (globals.css).

### Performance (obligatorio)

| Regla | Detalle |
|-------|---------|
| Imagen hero | `priority` + `fetchPriority="high"` + `quality={75}` + `sizes` reales |
| Asset | Usar `katia-ads-hero.jpg` (Ads). Regenerar con `sips` si cambia la foto |
| Below-fold | clase `content-auto` (`content-visibility: auto`) |
| Client JS | `AdsFaq` (dynamic) + `AdsStickyCta` (fixed; oculta vs `#ads-cta-final`) |
| Link Google | `maps?cid=…` vía `GOOGLE_BUSINESS_PROFILE_URL` |
| Noindex | siempre |
| Padding | spacer en `AdsStickyCta` (colapsa si la barra está oculta); no `pb-24` fijo en main |

---

## Reglas

| Regla | Detalle |
|-------|---------|
| Ruta | `app/ads/{slug}/page.tsx` |
| Layout | `app/ads/layout.tsx` (lean, sin footer sitio) |
| SEO | **siempre** `buildNoIndexMetadata` — noindex |
| CTA | solo `WhatsAppCTA` + `whatsappUrl` (nunca teléfono hardcode) |
| CTAs en página | **2** visibles: hero + final. Sticky mobile es el mismo CTA (no un tercero conceptual). **Sin** CTA intermedio en “Cómo funciona” |
| Foto | `/katia-ads-hero.jpg` en hero (liviana) |
| Reseñas | 2 máx., índices message-match del cluster |
| Copy CTA | Hero/sticky: “Quiero ayuda con mi voz”. Final: “Empezar por WhatsApp”. Evitar “Evaluar mi voz por WhatsApp” |
| Geo | país (Chile), **sin ciudades** en H1 |
| Docs cluster | `ads/NN-slug/README.md` + `CRAFT.md` si hay decisiones Impeccable |

---

## Orden de secciones (obligatorio)

1. **Hero** — badge Google ★ · H1 keywords · 1 frase dolor · CTA WhatsApp · foto  
2. **Señales** — lista de 3 (icono + texto), **sin cards**  
3. **Cómo funciona** — 3 pasos **numerados** (secuencia), sin CTA mid  
4. **Reseñas Google** — `AdsGoogleReviews` con índices del cluster (máx. 2)  
5. **FAQ** — `AdsFaq` (acordeón; **3** preguntas frías: online≈presencial, Chile, primer paso)  
6. **Por qué Katia** — 1 línea credencial (antes de reseñas)  
7. **Reseñas Google** — `AdsGoogleReviews` con índices del cluster (máx. 2)  
8. **CTA final** — un botón WhatsApp  
9. **Sticky mobile** — `AdsStickyCta` (fuera del flujo visual desktop)

**Opcional:** `AdsPatientQuotes` solo con testimonios reales del cluster (nunca inventar). En voz/disfonía actual: omitido.

No agregar: cards decorativas, stats inventados, precios, largos párrafos SEO, emojis, CTA intermedio.

---

## Componentes reutilizables

```
app/ads/_components/AdsGoogleTrust.tsx
  AdsGoogleBadge      → ★ + N reseñas → link Maps cid
  AdsGoogleReviews    → quotes filtrados (reviewIndexes + limit)

app/ads/_components/AdsFaq.tsx
  AdsFaq              → acordeón (grid-rows) + focus-visible

app/ads/_components/AdsStickyCta.tsx
  AdsStickyCta        → barra fija WhatsApp (mobile only)

app/ads/_components/AdsPatientQuotes.tsx
  AdsPatientQuotes    → opcional; testimonios reales del cluster
```

**Link Google:** `GOOGLE_BUSINESS_PROFILE_URL` / `GOOGLE_REVIEWS_URL` (`maps?cid=…`). No usar `g.page`.

Índices reseñas (`GOOGLE_REVIEWS` en `lib/google-reviews.ts`):

| Index | Autor | Uso sugerido |
|-------|--------|--------------|
| 0–3 | Marcela P., Gonzalo, Marcela O., Arantzazu | infantil |
| 4 | Raimundo Rodríguez | genérico / avances |
| 5 | Carolina Rojas | adulto / recuperación |

---

## Checklist nueva landing

```
[ ] Carpeta app/ads/{slug}/page.tsx + class ads-landing
[ ] metadata = buildNoIndexMetadata(...)
[ ] H1 = keyword principal del cluster (frase)
[ ] Foto Katia en hero (sin opacity animation)
[ ] AdsGoogleBadge arriba
[ ] AdsGoogleReviews con índices correctos (limit 2)
[ ] Sin CTA mid; sticky mobile + pb-24
[ ] WA_MSG menciona cluster + "llegué por Google"
[ ] ads/{NN}-{slug}/README.md (+ CRAFT.md si aplica)
[ ] Probar local: /ads/{slug} (mobile sticky + FAQ)
```

---

## Anuncio ↔ landing

| Elemento anuncio | Landing |
|------------------|---------|
| H1 anuncio | = H1 o primeras palabras del H1 |
| “online” / “videollamada” | visible above the fold |
| Final URL | `https://www.katialafono.cl/ads/{slug}` |
| Negativas | `GOOGLEADS/google-ads-negativas-online.md` |
