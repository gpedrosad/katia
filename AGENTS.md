# AGENTS.md — katialafono.cl

Mapa corto para agentes. Leer esto primero; abrir `docs/` solo si la tarea lo pide.

## Memoria self-learn (tokens)

Leer primero: [`docs/ai-self-learn/INDEX.md`](docs/ai-self-learn/INDEX.md).  
Cómo anotar: [`docs/ai-self-learn/README.md`](docs/ai-self-learn/README.md).  
Regla Cursor: `.cursor/rules/ai-self-learn.mdc`.

## Qué es

Web de **Katia Domínguez**, fonoaudióloga infantil en **Chillán** (Ñuble, Chile).  
Producción: https://www.katialafono.cl  
Stack: Next.js 16 App Router · TypeScript · Tailwind 4 · Vercel.

## Constantes (no hardcodear)

| Dónde | Qué |
| --- | --- |
| `lib/site.ts` | `SITE_URL`, WhatsApp, NAP, GBP (`maps?cid=…`), `whatsappUrl()` |
| `lib/local-business-schema.ts` | `buildMedicalBusinessJsonLd()` — `@id` canónico `#business` |
| `lib/google-reviews.ts` | Reseñas GBP + links ficha/reseñas |
| `lib/seo.ts` | `buildPageMetadata()`, `buildNoIndexMetadata()` |
| `lib/seo-routes.ts` | Inventario de rutas SEO (hubs, tratamientos, síntomas, voz) |

CTA principal: WhatsApp. Copy/geo: español de Chile (`es_CL`).

## Estructura de rutas

```
app/
  page.tsx                         # Home
  fonoaudiologa-ninos-chillan/     # Landing SEO pilar infantil
  chillan/[slug]/                 # Landings patología (datos en patologias.ts)
  ads/voz-disfonia-online/         # Landing Ads (noindex) — ver ads/PATRON-LANDING.md
  chillan/lenguaje-infantil/       # Redirect / SEO (no ads)
  servicios/                       # Servicios generales
  glosario/                        # Definiciones + FAQ
  recursos/                        # Guías padres
  (site)/                          # Layout con Header/Footer
    tratamientos/*-chillan/        # SEO tratamientos locales
    sintomas/*-chillan/            # SEO síntomas padres
    servicios/*-chillan/           # SEO servicios locales
    voz-online/                    # Línea voz (online / otras ciudades)
    contacto-*, agendar-*, etc.
  interno/gsc/                     # Dashboard GSC (noindex)
  _components/                     # Header, Footer, CTA, etc.
lib/                               # site, seo, gsc, pagespeed
docs/                              # Informes GSC/SEO (histórico; no leer todo)
docs/ai-self-learn/                # Memoria densa para agentes
.agents/skills/                    # Skills SEO locales del repo
```

## Cómo agregar contenido

1. **Patología Chillán** (`/chillan/{slug}`): entrada en `app/chillan/[slug]/patologias.ts` (titulo, señales, hrefs, whatsappText). Template en `page.tsx`. Tras `notFound()`, usar variable tipada (`const p = ...`).
2. **Página SEO nueva**: `buildPageMetadata({ path, title, description, keywords })`. Schema Service/FAQ cuando aporte. Enlaces a servicio + glosario + pilar.
3. **Ruta en inventario**: actualizar `lib/seo-routes.ts` y sitemap si aplica.
4. **Noindex**: `buildNoIndexMetadata` o `robots: { index: false }` (interno, ads si corresponde).

## Skills del repo (usar según tarea)

| Skill | Cuándo |
| --- | --- |
| `.agents/skills/seo-geo` | Keywords, schema, GEO/AI search |
| `.agents/skills/seo-audit` | Auditoría técnica on-page |
| `.agents/skills/programmatic-seo` | Páginas a escala / templates |
| `.agents/skills/google-search-console` | Datos GSC / informes |
| `.agents/skills/local-seo` | GBP, NAP, local |
| `.agents/skills/conversion-psychology` | Copy CTA / conversión |

## Scripts útiles

```bash
npm run dev
npm run build
npm run gsc:report:md      # → docs/gsc-informe-YYYY-MM-DD.md
npm run gsc:auth
npm run pagespeed:report
```

## Atajos GBP / local

| Tema | Dónde |
| --- | --- |
| NAP / GBP / schema | `lib/site.ts`, `lib/local-business-schema.ts`, `docs/gbp-vinculacion-web-2026-07-24.md` |
| Ficha Maps canónica | `https://www.google.com/maps?cid=8785110851903218280` |
| Landings Ads | `ads/PATRON-LANDING.md` (reseñas + `GoogleMark`) · craft `ads/01-voz-disfonia-online/CRAFT.md` |
| Tag / conversiones Ads | `GOOGLEADS/google-ads-tag-conversiones.md` · `AW-18364805586` · tel `+56995497838` |
| Ads API (lectura) | `GOOGLEADS/google-ads-api-setup.md` · `npm run google-ads:report` · customer `2147001598` |
| Playbook campaña Search | `GOOGLEADS/google-ads-search-campana-playbook.md` |
| GSC informe | `npm run gsc:report:md` → `docs/gsc-informe-*.md` |

## Reglas de trabajo

- Español Chile. Marca: **Katia Domínguez**. Ciudad: **Chillán**.
- No inventar precios, horarios ni direcciones: usar `lib/site.ts` / copy existente.
- No editar `docs/gsc-*.md` históricos salvo pedir informe nuevo.
- Cambios de URL/canonical/sitemap → avisar validación GSC post-deploy.
- Commits solo si el usuario lo pide. No push sin pedir.
- Preferir editar archivos existentes; no crear markdown largo de estrategia a menos que se pida.
- Tras hallazgos SEO/GBP estables: anotar en `docs/ai-self-learn/log.md` + `INDEX.md`.
