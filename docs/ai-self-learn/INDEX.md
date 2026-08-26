# INDEX — hechos densos (leer primero)

Actualizado: **2026-08-26**

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
- Presencial Ads: `/ads/fono-presencial-chillan` · **solo niños** · campaña `24172404146` **ENABLED** · $2.000/día · horario **lun–jue** · geo presencia Chillán/Chillán Viejo · RSA `821895167715` (URL `?gads=1`; el RSA `822009115409` quedó DISAPPROVED por 404 al crear)
- Reseñas Ads: siempre `AdsGoogleBadge` + `AdsGoogleReviews` (`AdsGoogleTrust.tsx`) con SVG **GoogleMark**; desktop ~6 / mobile 2; datos en `lib/google-reviews.ts`
- Motion: solo hero (CSS `.ads-landing`); foto sin fade opacity (LCP)
- UI: señales en lista; pasos numerados; sin CTA mid; sticky WhatsApp mobile; FAQ ×3; 1 línea “Por qué Katia”
- Reseñas voz: índices **5, 4, 0, 1, 2, 3**; Maps `cid` no `g.page`
- CWV lab mobile prod (2026-08-01): Perf **99** · LCP **2,2s** · CLS **0** · TBT 32ms
- Negativas online: `GOOGLEADS/google-ads-negativas-online.md`; plan Ads = terapia fonoaudiológica online; no negativizar `online/virtual/videollamada`; no usar ciudades sueltas como negativas por defecto.
- Tag Google Ads: `AW-18364805586` + conversión Contacto `AW-18364805586/rBy6CNrQsNocENLjgrVE` en clic WhatsApp · doc `GOOGLEADS/google-ads-tag-conversiones.md`
- Ads API (lectura): customer `2147001598` (acceso directo; no LOGIN MCC) · `.secrets` symlink · `npm run google-ads:report` · doc `GOOGLEADS/google-ads-api-setup.md`
- Playbook Search: `GOOGLEADS/google-ads-search-campana-playbook.md` (1 campaña/cluster; frase; landing `/ads/...`)
- Ads RSA `fono-adultos`: activo `820647565901` (15 títulos, 2026-08-11) · pausado `819480015118` · doc `ads/02-fono-adultos-online/README.md`
- Ads AI Max: **OFF** deseado en Search · si vuelve ON → `npm run google-ads:disable-ai-max` · procedimiento `GOOGLEADS/google-ads-api-setup.md` § AI Max (OPTED_OUT text automation antes si bundling REQUIRED)
- Informe Ads (2026-08-23): `docs/google-ads-informe-2026-08-23.md` — 30d 319 imp / 34 clic / 6 conv / $29.394 · **0 conv desde 7 ago** (~$20.9k gastados) · AI Max OFF · LIMITED (budget lost 64% · rank 6%) · IS 30% · pausar candidato `docentes-voz` ($8.611/0) · keyword cara `fonoaudiologia online` ($8.743/10/0)
- Informe Ads (2026-08-11): `docs/google-ads-informe-2026-08-11.md` — all-time 150/13/6/$9.870 CPA~$1.645 · LIMITED ranking · IS 78%
- Informe Ads (2026-08-06): `docs/google-ads-informe-2026-08-06.md` — 104/11/6/$8.523 · IS 13%/85% presupuesto
- OAuth Ads renovado **2026-08-23** (`npm run google-ads:auth`); MCP oficial `google-ads-mcp` en `~/.cursor/mcp.json`
- Skill: `.agents/skills/impeccable` (`animate` / `distill` / `polish` / `optimize`)

## GSC / SEO orgánico (último corte)

- SERP infantil CL 2026-08-26: `docs/seo-oportunidades-serp-infantil-chile-2026-08-26.md` · 63/207 keywords con scrape (144 cortadas por cuota Apify) · **no** es volumen/CPC/DA
- Mejor opp **93** LOW: `mi hijo de 2 años no forma frases` / `niño de 2 años no habla` (directorios + intl.) · 19 LOW · 8 locales Chillán
- Usar: reforzar síntoma/hitos existentes; **no** 63 URLs nuevas; **no** Fonasa/precio sin dato en `lib/site.ts`
- Informe GSC: `docs/gsc-informe-2026-08-23.md` · 90d (25 may–23 ago): **88 clics** · **4.074 imp** · CTR **2,16%** · pos **7,6**
- Cuello SEO 2026-08-23: visibilidad sube (+71% imp), pero CTR bajo en home/pilar/servicios/agendar/sobre/tratamientos; priorizar snippets + query→landing
- Hecho 2026-08-26: sprint CTR/query-match aplicado en home/pilar/servicios/agendar/sobre/tratamientos/síntomas; pedir indexación post-deploy y medir 14-21 días
- Ruta local `terapia de lenguaje chillán`: `/servicios/terapia-de-lenguaje-infantil-chillan` está vacía/redirigida a `/servicios/terapia-lenguaje-infantil`; no analizarla como página standalone
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
