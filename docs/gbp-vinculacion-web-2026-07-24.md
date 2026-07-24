# Vinculación Google Business Profile ↔ web

**Fecha:** 2026-07-24  
**Ficha canónica (con reseñas):** [g.page/r/CQTz_OxX_3IBEAE](https://g.page/r/CQTz_OxX_3IBEAE)  
**Sitio:** `https://www.katialafono.cl`

## Objetivo

Hacer que Google (y usuarios) traten **una sola entidad**: misma profesional, mismo teléfono, mismo perfil Maps y misma web.

## Estado previo

| Dirección | Estado |
| --- | --- |
| GBP → web | OK (`Sitio web` = www.katialafono.cl) |
| Web → GBP | Solo link de reseñas (`g.page/.../review`) |
| Schema | Sin `sameAs` / `hasMap`; horario 09:00; 40 reseñas |
| NAP nombre | GBP largo vs schema corto |

## Cambios en código (2026-07-24)

### Constantes (`lib/site.ts`, `lib/google-reviews.ts`)

- NAP: `BUSINESS_NAME`, teléfono, ciudad/región
- `GOOGLE_BUSINESS_PROFILE_URL` = `https://g.page/r/CQTz_OxX_3IBEAE` (ficha con reseñas)
- `GOOGLE_REVIEWS_URL` = `…/review`
- `GOOGLE_KGMID` = `/g/11mz8n1czr`
- `INSTAGRAM_PROFILE_URL`
- Horario alineado a GBP: **10:00–18:00** lun–vie
- `reviewCount` = **42**

### Schema canónico (`lib/local-business-schema.ts`)

`buildMedicalBusinessJsonLd()` con:

- `@id` fijo: `https://www.katialafono.cl/#business`
- `alternateName` = nombre GBP
- `address` (localidad, sin calle pública)
- `geo`, `hasMap`, `sameAs` (perfil + knowledge panel + Instagram)
- `openingHoursSpecification` 10:00–18:00

Usado en: home (con reviews), `/servicios`, `/contacto…`, `/sobre-katia…`.

### UI

- Footer: teléfono + “Ver ficha en Google Maps”
- Sección reseñas: link reseñas **y** ficha Maps
- Contacto: horario NAP + link a ficha Google

## Pendiente humano (fuera de código)

1. **Reclamar/verificar** GBP si aparece “¿Eres propietario?”
2. Revisar posible **duplicado** Maps: `katia Dominguez` vs ficha principal
3. Ideal: renombrar GBP hacia marca canónica (`Katia Domínguez` + descriptor)
4. Misma cuenta Google en GBP + Search Console

## Cómo actualizar reseñas

Editar `GOOGLE_REVIEWS_AGGREGATE.reviewCount` en `lib/google-reviews.ts` y, si aplica, el array `GOOGLE_REVIEWS`.

## Referencias rápidas

| Recurso | Valor |
| --- | --- |
| Ficha Maps (canónica) | https://g.page/r/CQTz_OxX_3IBEAE |
| Reseñas | https://g.page/r/CQTz_OxX_3IBEAE/review |
| kgmid | `/g/11mz8n1czr` |
| Self-learn | `docs/ai-self-learn/` |
