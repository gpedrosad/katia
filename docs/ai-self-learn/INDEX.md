# INDEX — hechos densos (leer primero)

Actualizado: **2026-08-01**

## Identidad / NAP

- Nombre canónico web/schema: `Katia Domínguez`
- Nombre GBP Maps: `Fonoaudiologa Katia Dominguez - Chillan` → `alternateName`
- Tel: `+56995497838` / display `9 9549 7838` (Ads/GBP/WhatsApp = mismo número)
- Área: Chillán, Región de Ñuble, CL — **sin calle pública** (se da por WhatsApp)
- Horario atención: lun–vie **10:00–18:00** (alineado GBP; antes schema 09:00)
- Web canónica: `https://www.katialafono.cl` (apex → www 308)

## Google Business Profile

- Ficha canónica Maps: `https://www.google.com/maps?cid=8785110851903218280` (42 reseñas) — **verificado 2026-08-01**
- `g.page/r/CQTz…` está **roto** (redirige a google.com) — no usar
- kgmid (panel búsqueda): `/g/11mz8n1czr`
- Rating 5.0 · **42** reseñas
- Código: `lib/site.ts` (`GOOGLE_MAPS_CID`, `GOOGLE_BUSINESS_PROFILE_URL`)
- Doc: `docs/gbp-vinculacion-web-2026-07-24.md`
- `pendiente:` verificar claim GBP + posible duplicado Maps `katia Dominguez`

## Ads / landings

- Ejemplo: `/ads/voz-disfonia-online` · patrón `ads/PATRON-LANDING.md` · craft `ads/01-voz-disfonia-online/CRAFT.md`
- Reseñas Ads: siempre `AdsGoogleBadge` + `AdsGoogleReviews` (`AdsGoogleTrust.tsx`) con SVG **GoogleMark**; desktop ~6 / mobile 2; datos en `lib/google-reviews.ts`
- Motion: solo hero (CSS `.ads-landing`); foto sin fade opacity (LCP)
- UI: señales en lista; pasos numerados; sin CTA mid; sticky WhatsApp mobile; FAQ ×3; 1 línea “Por qué Katia”
- Reseñas voz: índices **5, 4, 0, 1, 2, 3**; Maps `cid` no `g.page`
- CWV lab mobile prod (2026-08-01): Perf **99** · LCP **2,2s** · CLS **0** · TBT 32ms
- Negativas online: `GOOGLEADS/google-ads-negativas-online.md`; plan Ads = terapia fonoaudiológica online; no negativizar `online/virtual/videollamada`; no usar ciudades sueltas como negativas por defecto.
- Tag Google Ads: `AW-18364805586` + conversión Contacto `AW-18364805586/rBy6CNrQsNocENLjgrVE` en clic WhatsApp · doc `GOOGLEADS/google-ads-tag-conversiones.md`
- Ads API (lectura): customer `2147001598` (acceso directo; no LOGIN MCC) · `.secrets` symlink · `npm run google-ads:report` · doc `GOOGLEADS/google-ads-api-setup.md`
- Skill: `.agents/skills/impeccable` (`animate` / `distill` / `polish` / `optimize`)

## GSC / SEO orgánico (último corte)

- Informe: `docs/gsc-informe-2026-07-17.md` · canvas evaluación 17 jul
- 28d (19 jun–17 jul): 25 clics · 1.247 imp · CTR 2,00% · pos 8,1
- Titles/metas P0 desplegados **9 jul**; impacto aún prematuro (~8d al corte)
- Mayor desperdicio: URLs pos ~2–3 con 0% CTR (`/servicios`, `/agendar`, `/retraso`)
- Home CTR 1,22%→1,35%; `/sobre-katia` 1,14%→2,00%; pilar niños 0% / 195 imp
- Auth GSC: OAuth en `.secrets/gsc-oauth-token.json` · `npm run gsc:report:md` · site `sc-domain:katialafono.cl`
- Contador sitemap 0/84 = **falsa alarma** (páginas indexadas por otros medios)

## Stack / convenciones

- Next.js App Router · metadata vía `buildPageMetadata` (`lib/seo.ts`)
- Schema negocio: siempre `@id` `https://www.katialafono.cl/#business`
- Skills: `.agents/skills/google-search-console`, `local-seo`, `seo-geo`, `conversion-psychology`, `impeccable`
- Panel interno GSC: `/interno/gsc`

## No hacer (aprendido)

- No re-auditar indexación por el “0 indexadas” del sitemap sin URL Inspection
- No publicar calle en schema/footer sin decisión explícita
- No regenerar informe GSC sin token válido (`invalid_grant` → `npm run gsc:auth`)
- No usar `g.page` ni fade opacity en LCP de landings Ads
