# Cluster 1 — Voz / disfonía online

| Campo | Valor |
|-------|--------|
| Landing | `/ads/voz-disfonia-online` |
| Patrón | [`../PATRON-LANDING.md`](../PATRON-LANDING.md) |
| Craft | [`CRAFT.md`](./CRAFT.md) (Impeccable 2026-08-01) |
| Index | noindex |
| Reseñas Google | índices **5, 4, 0, 1, 2, 3** (voz primero; 6 en desktop / 2 mobile) |
| Foto | `/katia-ads-hero.jpg` (~79 KB) |
| Sticky CTA | mobile only (`AdsStickyCta`) |

## Anuncio

**H1:** Terapia de Voz Online  
**H2:** Tratamiento Disfonía · Videollamada  
**H2:** Todo Chile  
**Desc:** Fonoaudióloga Katia Domínguez. Ayuda con tu voz por WhatsApp.  
**URL:** `https://www.katialafono.cl/ads/voz-disfonia-online`  
**Playbook campaña:** [`../GOOGLEADS/google-ads-search-campana-playbook.md`](../GOOGLEADS/google-ads-search-campana-playbook.md)

### Títulos RSA (≤30 caracteres) — 2026-08-02

```
Terapia de Voz Online
Tratamiento Disfonía Online
Voz Online por Videollamada
Fonoaudióloga de Voz Online
Rehabilitación Vocal Online
Atiende en Todo Chile
Agenda Hoy por WhatsApp
```

### Descripciones RSA (≤90 caracteres) — 2026-08-02

```
Fonoaudióloga Katia Domínguez. Terapia de voz y disfonía por videollamada en todo Chile.
¿Voz ronca o cansada? Evaluación online y plan a tu medida. Escríbenos por WhatsApp.
Rehabilitación vocal sin traslados. Atención por videollamada. Te respondemos hoy.
Valoración 5,0 en Google. Agenda tu terapia de voz online y empieza a cuidar tu voz.
```

## CTAs (copy)

| Ubicación | Texto |
|-----------|--------|
| Hero + sticky | Quiero ayuda con mi voz |
| Final | Empezar por WhatsApp |
**URL:** `/ads/voz-disfonia-online`

## Secciones (live)

1. Hero (`AdsGoogleBadge` con “G” · H1 · dolor · CTA · foto)  
2. Señales (lista ×3)  
3. Cómo funciona (pasos 1–3, sin CTA mid)  
4. Por qué Katia (1 línea)  
5. Reseñas Google (`AdsGoogleReviews`: 6 desktop / 2 mobile + “G”)  
6. FAQ (3: online≈presencial, Chile, primer paso)  
7. CTA final + sticky mobile

Reutilizar patrón: [`../PATRON-LANDING.md`](../PATRON-LANDING.md) § **Reseñas Google**.

## CWV móvil (lab)

| Fuente | Fecha | Perf | LCP | CLS | TBT |
|--------|-------|------|-----|-----|-----|
| Lighthouse mobile → prod | 2026-08-01 | **99** | 2,2s (bueno) | 0 | 32ms |

Nota: `PAGESPEED_API_KEY` ausente / cuota PSI anónima agotada → medido con Lighthouse CLI. Re-correr post-deploy de este branch:

```bash
npx lighthouse https://www.katialafono.cl/ads/voz-disfonia-online --only-categories=performance --form-factor=mobile --quiet
# o con key: PAGESPEED_URLS=…/ads/voz-disfonia-online npm run pagespeed:report
```
