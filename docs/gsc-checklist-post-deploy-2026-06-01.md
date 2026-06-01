# Checklist GSC post-deploy - Ola 2 (2026-06-01)

- Baseline: [gsc-informe-2026-06-01.md](/Users/gonzalo/katia/docs/gsc-informe-2026-06-01.md)
- Prioridades: [gsc-prioridades-2026-06-01.md](/Users/gonzalo/katia/docs/gsc-prioridades-2026-06-01.md)
- Propiedad: `sc-domain:katialafono.cl`

## Cambios ya aplicados en código

- Snippets SEO actualizados en home, pilar infantil, `TEL / TDL`, `/servicios` y `/agendar-hora-fonoaudiologo-infantil-chillan`.
- Redirects directos desde `katialafono.cl` a la URL final canónica para reducir cadenas en URLs legacy.
- `sitemap.ts` actualizado con `lastModified` `2026-06-01`.

## 1. Verificación técnica rápida post-deploy

```bash
curl -sI https://katialafono.cl/agendar | grep -iE 'HTTP|location'
curl -sI https://katialafono.cl/chillan/lenguaje-infantil | grep -iE 'HTTP|location'
curl -sI https://katialafono.cl/servicios/problemas-lectoescritura-chillan | grep -iE 'HTTP|location'
curl -s https://www.katialafono.cl/ | grep -o '<title>[^<]*</title>'
curl -s https://www.katialafono.cl/chillan/tel | grep -o '<meta name="description"[^>]*>'
curl -s https://www.katialafono.cl/servicios | grep -o '<meta name="description"[^>]*>'
curl -s https://www.katialafono.cl/agendar-hora-fonoaudiologo-infantil-chillan | grep -o '<title>[^<]*</title>'
```

Esperado:

- `katialafono.cl/agendar` -> redirect permanente directo a `/agendar-hora-fonoaudiologo-infantil-chillan`
- `katialafono.cl/chillan/lenguaje-infantil` -> redirect permanente directo a `/fonoaudiologa-ninos-chillan`
- `katialafono.cl/servicios/problemas-lectoescritura-chillan` -> redirect permanente directo a `/servicios/dificultades-lectoescritura`
- Home con title nuevo de fonoaudiología en Chillán
- `/chillan/tel` con snippet nuevo de `TEL / TDL`
- `/servicios` y `/agendar-*` con snippet nuevo

## 2. Sitemaps en GSC UI

Ir a `Indexación -> Sitemaps` y revisar:

- `https://www.katialafono.cl/sitemap.xml`
- `https://katialafono.cl/sitemap.xml`

Registrar:

- `Enviadas`
- `Indexadas`
- Fecha de última lectura
- Si el sitemap apex sigue figurando como envío activo

Acción esperada:

- Usar solo `https://www.katialafono.cl/sitemap.xml` para futuros reenvíos
- Si la UI permite quitar el sitemap apex histórico, hacerlo
- Si no permite quitarlo o prefieres no tocarlo, al menos dejar de reenviarlo y documentar que el canon operativo es `www`

## 3. URL Inspection en GSC UI

Inspeccionar y, si corresponde, solicitar indexación para estas URLs:

- `https://www.katialafono.cl/`
- `https://www.katialafono.cl/chillan/tel`
- `https://www.katialafono.cl/fonoaudiologa-ninos-chillan`
- `https://www.katialafono.cl/servicios`
- `https://www.katialafono.cl/agendar-hora-fonoaudiologo-infantil-chillan`

Validar en cada una:

- `URL en Google` o estado equivalente
- Canonical elegido por Google = canonical declarado
- Sin bloqueo por robots
- Sin redirección inesperada

Chequeo extra:

- `https://katialafono.cl/`
- `https://katialafono.cl/agendar`

Ambas deberían resolverse como URLs con redirección hacia `www` y no como páginas indexables propias.

## 4. KPIs a observar en el próximo corte

- Home `https://www.katialafono.cl/`
  Objetivo: subir CTR desde `0.52%`
- `https://www.katialafono.cl/chillan/tel`
  Objetivo: salir de `0.00%` CTR con `143` impresiones
- `https://www.katialafono.cl/fonoaudiologa-ninos-chillan`
  Objetivo: capturar clics sobre `186` impresiones
- `https://www.katialafono.cl/servicios`
  Objetivo: capturar clics sobre `125` impresiones
- `https://www.katialafono.cl/agendar-hora-fonoaudiologo-infantil-chillan`
  Objetivo: capturar clics sobre `75` impresiones

## 5. Próximo informe automático

```bash
npm run gsc:report:md
```

Ventana recomendada:

- Entre `2026-06-15` y `2026-06-29`, para dar tiempo a recrawl y nueva lectura de snippets
