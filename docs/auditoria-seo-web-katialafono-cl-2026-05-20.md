# Auditoría SEO — `www.katialafono.cl`

**Fecha:** 2026-05-20  
**Sitio auditado:** `https://www.katialafono.cl`  
**Proyecto local asociado:** este repositorio corresponde a la web de producción `www.katialafono.cl`.

## Alcance

Auditoría SEO técnica y on-page de la web publicada, cruzada con:

- HTML y respuestas en vivo (`200`, `308`, `robots.txt`, `sitemap.xml`)
- Código fuente del proyecto (`app/`, `lib/`)
- Informes locales de GSC ya presentes en `docs/`

## Resumen ejecutivo

La web está **bien desplegada a nivel base**: el host canónico `www` responde correctamente, el apex redirige con `308`, `robots.txt` no bloquea el sitio, el `sitemap.xml` usa URLs canónicas y existen datos estructurados en las páginas principales.

El problema principal hoy **no es de indexabilidad**, sino de **CTR y consistencia SEO**:

1. `/chillan/tel` tiene un bug real en la meta description.
2. La home mezcla la marca `Katia Lafono` en metadata con `Katia Domínguez` en el contenido visible.
3. GSC aún arrastra señales históricas mezcladas entre `katialafono.cl` y `www.katialafono.cl`, además de un warning pendiente en sitemap.

## Verificaciones realizadas

### Producción en vivo

- `https://katialafono.cl/` responde `308` a `https://www.katialafono.cl/`
- `https://www.katialafono.cl/` responde `200`
- `https://www.katialafono.cl/fonoaudiologia-infantil-chillan` responde `308` al pilar `/fonoaudiologa-ninos-chillan`
- `https://www.katialafono.cl/robots.txt` accesible
- `https://www.katialafono.cl/sitemap.xml` accesible

### Base SEO detectada

- `robots.txt` permite rastreo general y referencia `sitemap.xml`
- `sitemap.xml` publica URLs `www` y canónicas
- La home publica `title`, `meta description`, canonical, Open Graph, Twitter Cards y JSON-LD
- El proyecto ya incluye `llms.txt`

## Hallazgos priorizados

### P0. Meta description rota en `/chillan/tel`

**Estado:** problema real de producción/documentado en código.  
**Impacto:** alto en CTR y snippet quality.

**Evidencia:**

- El informe local ya marca que `/chillan/tel` sigue con una meta publicada con corte no natural.
- En [`app/chillan/[slug]/page.tsx`](/Users/gonzalo/katia/app/chillan/[slug]/page.tsx:30), la descripción se construye truncando `patologia.descripcion` y luego concatenando un sufijo fijo.
- En [`app/chillan/[slug]/patologias.ts`](/Users/gonzalo/katia/app/chillan/[slug]/patologias.ts:72), la descripción de `tel` es larga y termina quedando cortada antes del sufijo, lo que explica el snippet defectuoso.

**Lectura SEO:** la URL tiene impresiones altas para el tamaño actual del sitio, así que un snippet roto desperdicia una de las mejores oportunidades de clic.

### P0. Inconsistencia de marca en la home

**Estado:** problema real en metadata publicada.  
**Impacto:** alto en entidad, branded search y CTR.

**Evidencia:**

- La home visible y el schema usan `Katia Domínguez`.
- En [`app/layout.tsx`](/Users/gonzalo/katia/app/layout.tsx:23) el `title.default` y `openGraph.title` usan `Katia Lafono`.
- En el HTML publicado de la home se ve:
  - `<title>Fonoaudiología infantil Chillán | Katia Lafono</title>`
  - `og:title = Fonoaudiología infantil Chillán | Katia Lafono`
  - `twitter:title = Fonoaudióloga en Chillán | Katia Domínguez`

**Lectura SEO:** Google recibe señales mixtas de marca en la misma URL. Para una web local y personal, esto conviene unificarlo.

### P0. GSC todavía muestra residuos de mezcla `www` vs apex y warning de sitemap

**Estado:** técnicamente la producción ya está bien; el pendiente es de validación en GSC.  
**Impacto:** alto porque enturbia la lectura de rendimiento real.

**Evidencia:**

- En la documentación local:
  - [`gsc-evaluacion-completa-2026-05-20.md`](/Users/gonzalo/katia/docs/gsc-evaluacion-completa-2026-05-20.md:1)
  - [`gsc-informe-2026-05-20.md`](/Users/gonzalo/katia/docs/gsc-informe-2026-05-20.md:1)
- Aparecen clics aún asociados al apex y un warning en `https://www.katialafono.cl/sitemap.xml`.
- En vivo, la parte técnica ya está alineada:
  - apex `308` a `www`
  - canonical base `www`
  - sitemap `www`

**Lectura SEO:** el problema aquí no parece ser de implementación actual, sino de consolidación y revalidación en Search Console.

### P1. CTR muy bajo en URLs que ya tienen posición útil

**Estado:** oportunidad real de negocio.  
**Impacto:** alto.

**Evidencia GSC local:**

- `/` → 337 impresiones, CTR `0,30%`
- `/chillan/tel` → 159 impresiones, CTR `0%`
- `/fonoaudiologa-ninos-chillan` → 193 impresiones, CTR `0%`
- `/agendar-hora-fonoaudiologo-infantil-chillan` → 82 impresiones, CTR `0%`
- `/servicios` → 149 impresiones, CTR `0,67%`

**Lectura SEO:** el sitio ya logró visibilidad inicial. El cuello de botella ahora es hacer más clicables las URLs clave y consolidar snippets.

### P1. Siguen existiendo enlaces internos a aliases que hoy redirigen

**Estado:** problema de arquitectura interna, no de indexación.  
**Impacto:** medio-alto.

**Evidencia:**

- El código muestra enlaces internos a aliases y landings que hoy consolidan hacia `/fonoaudiologa-ninos-chillan`.
- Ejemplos detectados con búsqueda local en:
  - [`lib/seo-routes.ts`](/Users/gonzalo/katia/lib/seo-routes.ts:109)
  - [`app/(site)/chillan/page.tsx`](/Users/gonzalo/katia/app/(site)/chillan/page.tsx:58)
  - [`app/servicios/page.tsx`](/Users/gonzalo/katia/app/servicios/page.tsx:181)

**Lectura SEO:** si un alias ya hace `308`, lo correcto es que la propia web enlace directo a la URL final para evitar hops internos y repartir mejor la autoridad interna.

### P2. `speakable` de la home no coincide con la estructura real del HTML

**Estado:** detalle GEO/structured data.  
**Impacto:** medio-bajo.

**Evidencia:**

- En [`lib/seo.ts`](/Users/gonzalo/katia/lib/seo.ts:95), `buildWebPageJsonLd()` genera `cssSelector: ["article h1", "article > p:first-of-type"]`.
- En la home ([`app/page.tsx`](/Users/gonzalo/katia/app/page.tsx:174)), el `h1` y el párrafo principal no están dentro de un `article`.

**Lectura SEO:** no bloquea ranking web, pero sí reduce consistencia del marcado orientado a experiencias generativas o de voz.

## Fortalezas detectadas

- Host canónico ya resuelto: apex → `www`
- Redirect de alias principal ya funcionando
- `robots.txt` limpio y permisivo
- `sitemap.xml` coherente con URLs canónicas
- JSON-LD presente en home y en plantillas relevantes
- El sitio ya genera impresiones no-marca y empieza a abrir long-tail local

## Recomendaciones inmediatas

### En 72 horas

1. Corregir la meta description de `/chillan/tel`.
2. Unificar branding en metadata de la home: decidir entre `Katia Domínguez` y `Katia Lafono`, y usar una sola marca en `title`, `og:title`, `twitter:title`, schema y copy visible.
3. Abrir GSC y cerrar el warning del sitemap `www`.
4. Reinspeccionar en GSC:
   - `/`
   - `/chillan/tel`
   - `/fonoaudiologa-ninos-chillan`
   - `/agendar-hora-fonoaudiologo-infantil-chillan`

### En 1 a 2 semanas

1. Reemplazar enlaces internos que aún apuntan a aliases con `308`.
2. Reoptimizar snippets de las páginas con más impresiones y CTR bajo.
3. Medir si la consolidación de host y redirect mueve clics desde el apex hacia `www`.
4. Ajustar el `speakable` de la home para que seleccione nodos reales.

## Limitaciones de esta auditoría

- No pude incluir un score confiable de PageSpeed Insights porque la API pública respondió con cuota agotada durante la verificación.
- El análisis de rendimiento se apoya en los informes locales de GSC ya existentes en el repo, fechados el mismo día de esta auditoría.

## Documentos relacionados en este repo

- [`README.md`](/Users/gonzalo/katia/README.md)
- [`docs/gsc-evaluacion-completa-2026-05-20.md`](/Users/gonzalo/katia/docs/gsc-evaluacion-completa-2026-05-20.md)
- [`docs/gsc-informe-2026-05-20.md`](/Users/gonzalo/katia/docs/gsc-informe-2026-05-20.md)
- [`docs/cambios-prioritarios-seo-2026-05-20.md`](/Users/gonzalo/katia/docs/cambios-prioritarios-seo-2026-05-20.md)
