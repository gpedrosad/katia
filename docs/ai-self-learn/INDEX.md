# INDEX — hechos densos (leer primero)

Actualizado: **2026-07-24**

## Identidad / NAP

- Nombre canónico web/schema: `Katia Domínguez`
- Nombre GBP Maps: `Fonoaudiologa Katia Dominguez - Chillan` → `alternateName`
- Tel: `+56995497838` / display `9 9549 7838`
- Área: Chillán, Región de Ñuble, CL — **sin calle pública** (se da por WhatsApp)
- Horario atención: lun–vie **10:00–18:00** (alineado GBP; antes schema 09:00)
- Web canónica: `https://www.katialafono.cl` (apex → www 308)

## Google Business Profile

- Ficha canónica (con reseñas): https://g.page/r/CQTz_OxX_3IBEAE
- Reseñas: https://g.page/r/CQTz_OxX_3IBEAE/review
- kgmid (panel búsqueda): `/g/11mz8n1czr`
- Rating 5.0 · **42** reseñas (sync código 2026-07-24)
- GBP → web ya OK; web → GBP: schema `sameAs`/`hasMap` + footer/contacto (2026-07-24)
- No usar share.google genérico como URL principal de Maps
- `pendiente:` verificar claim GBP + posible duplicado Maps `katia Dominguez`
- Doc: `docs/gbp-vinculacion-web-2026-07-24.md`
- Código: `lib/site.ts`, `lib/local-business-schema.ts`, `lib/google-reviews.ts`

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
- Skills: `.agents/skills/google-search-console`, `local-seo`, `seo-geo`, `conversion-psychology`
- Panel interno GSC: `/interno/gsc`

## No hacer (aprendido)

- No re-auditar indexación por el “0 indexadas” del sitemap sin URL Inspection
- No publicar calle en schema/footer sin decisión explícita
- No regenerar informe GSC sin token válido (`invalid_grant` → `npm run gsc:auth`)
