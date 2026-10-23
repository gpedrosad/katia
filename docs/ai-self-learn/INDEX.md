# INDEX — hechos densos (leer primero)

Actualizado: **2026-10-23**

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
- Presencial Ads: `/ads/fono-presencial-chillan` · **solo niños** · campaña `24172404146` **ENABLED** (2026-09-06) · $1.000/día · LIMITED budget · horario **lun–jue** · geo presencia Chillán/Chillán Viejo · RSA `821895167715` **APPROVED** (`?gads=1`); el RSA `822009115409` sigue pausado (404 histórico)
- Reseñas Ads: siempre `AdsGoogleBadge` + `AdsGoogleReviews` (`AdsGoogleTrust.tsx`) con SVG **GoogleMark**; desktop ~6 / mobile 2; datos en `lib/google-reviews.ts`
- Motion: solo hero (CSS `.ads-landing`); foto sin fade opacity (LCP)
- UI: señales en lista; pasos numerados; sin CTA mid; sticky WhatsApp mobile; FAQ ×3; 1 línea “Por qué Katia”
- Reseñas voz: índices **5, 4, 0, 1, 2, 3**; Maps `cid` no `g.page`
- CWV lab mobile prod (2026-08-01): Perf **99** · LCP **2,2s** · CLS **0** · TBT 32ms
- Negativas online: `GOOGLEADS/google-ads-negativas-online.md`; plan Ads = terapia fonoaudiológica online; no negativizar `online/virtual/videollamada`; no usar ciudades sueltas como negativas por defecto.
- Tag Google Ads: `AW-18364805586` + conversión Contacto `AW-18364805586/rBy6CNrQsNocENLjgrVE` en clic WhatsApp · doc `GOOGLEADS/google-ads-tag-conversiones.md`
- Ads API (lectura): customer `2147001598` (acceso directo; no LOGIN MCC) · `.secrets` symlink · `npm run google-ads:report` · doc `GOOGLEADS/google-ads-api-setup.md`
- Playbook Search: `GOOGLEADS/google-ads-search-campana-playbook.md` (1 campaña/cluster; frase; landing `/ads/...`)
- Ads RSA `fono-adultos`: activo `819480015118` (el que convierte) · pausado `820647565901` (0 conv / $12.8k) · doc `ads/02-fono-adultos-online/README.md`
- Ads online: campaña `24093796310` **PAUSED** (2026-09-06) · budget $1.000 · grupos ON: `fono-adultos` + `fatiga-vocal` · pausados: `docentes-voz` + `voz-disfonia`
- Ads AI Max: **OFF** deseado en Search · si vuelve ON → `npm run google-ads:disable-ai-max` · procedimiento `GOOGLEADS/google-ads-api-setup.md` § AI Max (OPTED_OUT text automation antes si bundling REQUIRED)
- Corte Ads vivo (2026-09-06): ambas **PAUSED** · post-23 ago online 6 clic / $6.082 / 1 conv · presencial 10 clic / $9.296 / **2 conv** · all-time 9 conv / ~$44.8k
- Informe Ads (2026-08-23): `docs/google-ads-informe-2026-08-23.md` — 30d 319 imp / 34 clic / 6 conv / $29.394 · **0 conv desde 7 ago** (~$20.9k gastados) · AI Max OFF · LIMITED (budget lost 64% · rank 6%) · IS 30% · pausar candidato `docentes-voz` ($8.611/0) · keyword cara `fonoaudiologia online` ($8.743/10/0)
- Informe Ads (2026-08-11): `docs/google-ads-informe-2026-08-11.md` — all-time 150/13/6/$9.870 CPA~$1.645 · LIMITED ranking · IS 78%
- Informe Ads (2026-08-06): `docs/google-ads-informe-2026-08-06.md` — 104/11/6/$8.523 · IS 13%/85% presupuesto
- OAuth Ads renovado **2026-08-23** (`npm run google-ads:auth`); MCP oficial `google-ads-mcp` en `~/.cursor/mcp.json`
- Skill: `.agents/skills/impeccable` (`animate` / `distill` / `polish` / `optimize`)
- Meta TEA: ranking Reddit de dolores post-diagnóstico — #1 lenguaje/comunicación (~14 hilos); 1–4 con texto; 5–11 casi solo títulos (confirmar con familias) · doc `app/meta/primeros-30-dias-tea/dolores-padres-reddit.md` (2026-09-29)
- Meta TEA: funnel **consciente del problema** (no oferta) · landing **8,5/10** post-ajuste (H1 30 días, tipos de ayuda, FAQ emocional) · doc `app/meta/primeros-30-dias-tea/funnel-consciente-del-problema.md` (2026-09-29)

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
- Lote 8 (2026-10-13): segundo pase páginas Lote 2 · GSC 90d 07-15..10-12: **87 clic / 5.146 imp / CTR 1,7% / pos 8,0** · pull 10-13 no posible (`invalid_grant`) · changelog `SEO-CHANGELOG.md` · `pendiente:` indexar 8 URLs y medir 14-21 días
- Lote 9 (2026-10-15): segundo pase Lote 3 + agendar + tratamiento TEL Chillán · GSC 90d 07-17..10-14: **87 clic / 5.335 imp / pos 8,1** · 7d 10/597 vs 2/609 · changelog `SEO-CHANGELOG.md` · `pendiente:` indexar 13 URLs y medir ~2026-10-29..11-05
- Lote 10 (2026-10-16): segundo pase Lote 4 (dislalia, lectoescritura/dislexia, informe PIE, apraxia, 3 síntomas, terapia de lenguaje; disfemia solo enlaces) · GSC 90d 07-18..10-15: **87 clic / 5.407 imp / pos 8,1** · 7d 8/587 vs 5/629 · redirect informe: el source con ó no matcheaba `%C3%B3`; se agregó el path codificado · changelog `SEO-CHANGELOG.md` · `pendiente:` indexar 15 URLs y medir ~2026-10-30..11-06
- Congeladas post-Lote 10: Lotes 5-9 + home + city pages voz-online + `/ads` + `/sitelink` + páginas Lote 10 hasta el corte

- 2026-10-17: auditoría técnica (sitemap automático, metas ≤60/155, schema sin `priceRange`, `@id` `#business`). `pendiente:` validar sitemap en GSC post-deploy. Si existen `app/` y `src/app/`, Next solo usa `app/`.
- 2026-10-17: ronda 2 de cobertura informativa (lenguaje infantil, dislalia, tartamudez, lectoescritura + más preguntas y guías). Sin páginas de otras ciudades, sin Fonasa ni precio. Doc `docs/seo-oportunidades-ronda2.md`. `pendiente:` indexar las URLs nuevas y medir ~14-21 días.
- Lote 11 (2026-10-17): GSC 90d 07-19..10-16 **89 clic / 5.469 imp / pos 8,0** · 7d 9/649 vs 5/711. Logopeda descubierta sin rastrear; conciencia fonológica rastreada sin indexar; trastornos del habla pos 54,6 por «fonoaudiologo chillan». Sitemap prod con el mismo `lastmod` (mtime del clone). Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar logopeda + conciencia + hubs ronda 1–2 y reenviar sitemap.
- Lote 12 (2026-10-18): GSC 90d 07-20..10-17 **89 clic / 5.490 imp / pos 8,0** · 7d 10/634 vs 5/727. Las 23 URLs Lote 6 siguen en 0 imp. `/glosario/tdl` era huérfana. «estimulación del lenguaje» (59 imp, pos 33,5) cae en la guía de casa. Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar comparaciones, glosarios Lote 6, señales de alerta y contacto; reenviar sitemap (GSC lo bajó el 2026-10-11).
- Lote 13 (2026-10-19): segundo pase Lote 7. GSC 90d 07-21..10-18 **90 clic / 5.495 imp / pos 8,1** · 7d 9/628 vs 7/707. Hitos aún rastreada el 2026-09-21 (Lote 7 no visto). Title hitos pasa a «¿A qué edad hablan los niños?» (223 imp, 0 clic, pos 9,9). `/servicios` en caída de impresiones. Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar hitos, pilar, home, servicios y los 2 tratamientos; medir ~2026-11-02..11-09.
- 2026-10-20: lote voz online adultos. Hub title «Terapia de voz online para adultos en Chile». URLs nuevas: `/voz-online/polipos-en-las-cuerdas-vocales` y `/voz-online/como-es-la-sesion-de-voz-online` (apoyo al otorrino; sin ciudades). Entrada en home y `/servicios`. No se tocó `/ads`, `/sitelink` ni landings de ciudad. Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar las 12 URLs del lote y reenviar sitemap; medir ~2026-11-03..11-10.
- Lote 14 (2026-10-20): GSC 90d 07-22..10-19 **88 clic / 5.577 imp / pos 8,1** · 7d 9/671 vs 7/608. Guía de casa retarget a «terapia de lenguaje en casa»; «estimulación del lenguaje» queda en el servicio de Chillán. Primera evaluación: guía «qué esperar y cómo preparar», con CTA al servicio (60 min) y a agendar. Lote 8 aún sin recrawl. Sitemap vivo 128. Apex http: dos 308. Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar las 2 guías y reenviar sitemap; medir ~2026-11-03..11-10.
- Lote 15 (2026-10-21): GSC 90d 07-23..10-20 **87 clic / 5.670 imp / pos 8,1** · 7d 8/753 vs 8/682. Lotes 8–14 sin recrawl; pólipos y «cómo es la sesión» sí se indexaron el 2026-10-20. URLs nuevas: `/voz-online/afonia-perdi-la-voz`, `/voz-online/ejercicios-para-la-voz`, `/voz-online/reflujo-y-voz`. No se creó terapia de voz para adultos mayores (el copy no la ofrece; deglución y audición tampoco). Sitemap del build 131. Apex http sigue en dos 308. Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar las 3 URLs y reenviar sitemap; medir ~2026-11-04..11-11.
- Lote 16 (2026-10-22): GSC 90d 07-24..10-21 **85 clic / 5.790 imp / pos 8,1** · 7d 6/791 vs 11/690. Lote 15 indexado en ~12 h; Lotes 8–14 sin recrawl. URLs nuevas: `/preguntas/el-tel-se-cura`, `/voz-online/disfonia-por-estres`, `/voz-online/disfonia-espasmodica`. No se creó `/voz-online/nodulos-cirugia-o-terapia` (solapa con nódulos, página congelada). Sin otras ciudades, sin `/ads`, sin `/sitelink`. Sitemap del build 134. Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar las 3 URLs y reenviar sitemap; medir ~2026-11-05..11-12.
- 2026-10-23 (copy): las 9 páginas de mercado ya no niegan licencia, seguro, colegiación, NHS, Medicare ni matrícula. Meta en positivo: videollamada desde Chile, adultos, horario según zona horaria. Sin afirmar cobertura ni consulta local. Changelog `SEO-CHANGELOG.md`.
- Lote 17 (2026-10-23): clúster infantil, sin otras ciudades. URLs nuevas: `/comparaciones/dislexia-vs-dislalia`, `/tartamudez/empezo-a-tartamudear-de-repente`, `/preguntas/escuela-de-lenguaje-o-fonoaudiologa`. Tarjetas solo en los hubs. Sin cura de tartamudez, sin colegios ni cupos de escuela de lenguaje. GSC 90d 07-25..10-22: 89 clic / 5.950 imp / pos 8,1. Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar las 3 URLs y reenviar sitemap; medir ~2026-11-06..11-13.
- 2026-10-23: voz online internacional + temas. 14 URLs: `/voz-online/espana`, `/argentina`, `/miami`, `/estados-unidos`, `/canada`, `/reino-unido`, `/alemania`, `/suiza`, `/australia`, `/voz-en-call-center`, `/voz-y-menopausia`, `/voz-despues-de-un-resfrio`, `/proyeccion-de-voz`, `/presbifonia`. Videollamada desde Chile; horario lun–vie 10:00–18:00 hora de Chile; sin desfase publicado; sin precios, seguros ni licencias locales. Sin Madrid/Barcelona, sin NY/Houston/LA, sin Toronto/Montreal/Londres sueltos, sin Europa, sin México/Colombia/Perú. Presbifonía sí, pero sin deglución ni audición. Calentamiento, higiene, docentes, ronquera, fatiga y cantantes aficionados no se duplican. Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar las 14 URLs y reenviar sitemap; medir ~2026-11-06..11-13.

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
