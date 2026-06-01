# Ranking de cambios GSC - 2026-06-01

- Fuente base: [gsc-informe-2026-06-01.md](/Users/gonzalo/katia/docs/gsc-informe-2026-06-01.md)
- Sitio: `sc-domain:katialafono.cl`
- Periodo analizado: `2026-05-04` -> `2026-06-01`

## Lectura rapida

- El sitio mejora en eficiencia: `22` clics, `772` impresiones, `2.85%` CTR y posicion media `8.4`.
- El problema principal ya no es ranking puro; ahora el mayor gap esta en conversion SERP sobre URLs que ya aparecen arriba.
- Persisten dos riesgos tecnicos: mezcla de host `www` / sin `www` y sitemaps con `81` URLs enviadas y `0` indexadas en ambas variantes.

## Ranking por prioridad

### 1. Alta - Optimizar snippet SERP de las paginas con mayor uplift inmediato

**Por que va primero**

- Hay varias URLs en posiciones `2.2` a `4.9` con `0` clics y muchas impresiones.
- Es el cambio con impacto mas directo en negocio sin depender de un recrawl tecnico grande.

**URLs objetivo**

| URL | Impresiones | CTR actual | CTR esperado | Clicks extra potenciales |
| --- | --- | --- | --- | --- |
| `<https://www.katialafono.cl/chillan/tel>` | 143 | 0.00% | 15.00% | 21.5 |
| `<https://www.katialafono.cl/>` | 382 | 0.52% | 6.00% | 20.9 |
| `<https://www.katialafono.cl/chillan/lenguaje-infantil>` | 136 | 0.00% | 15.00% | 20.4 |
| `<https://www.katialafono.cl/servicios>` | 125 | 0.00% | 15.00% | 18.8 |
| `<https://www.katialafono.cl/agendar-hora-fonoaudiologo-infantil-chillan>` | 75 | 0.00% | 15.00% | 11.3 |
| `<https://www.katialafono.cl/fonoaudiologa-ninos-chillan>` | 186 | 0.00% | 6.00% | 11.2 |

**Cambio recomendado**

- Reescribir `title` y `meta description` alineados a la consulta principal.
- Incluir beneficio, ubicacion (`Chillan`) y CTA claro.
- Revisar si el H1 y el snippet prometen lo mismo.

### 2. Alta - Unificar host canonico y limpiar senales duplicadas entre `www` y sin `www`

**Por que va segundo**

- GSC sigue viendo impresiones en dos hosts.
- La home reparte senales: `https://www.katialafono.cl/` y `https://katialafono.cl/`.
- La muestra de URL Inspection confirma que la version sin `www` redirige, pero sigue apareciendo en reportes y sitemap.

**Evidencia**

- Hosts observados: `www.katialafono.cl` y `katialafono.cl`.
- Home sin `www`: `258` impresiones, `5` clics.
- Home con `www`: `382` impresiones, `2` clics.
- Sigue existiendo sitemap en ambos hosts.

**Cambio recomendado**

- Mantener un solo canonico final: `https://www.katialafono.cl/`.
- Forzar `301` de cualquier URL sin `www` a `www`.
- Revisar canonicals, links internos, sitemap y cualquier enlace hardcodeado.
- Dejar solo el sitemap del host canonico como referencia operativa.

### 3. Alta - Validar la discrepancia de indexacion de sitemap en GSC UI

**Por que sigue arriba**

- Ambos sitemaps reportan `81` URLs enviadas y `0` indexadas.
- Eso contradice el hecho de que varias paginas ya tienen impresiones y clics.
- Puede ser un problema real de cobertura o una lectura incompleta del endpoint usado.

**Cambio recomendado**

- Revisar en GSC UI:
  `Indexacion -> Sitemaps`
- Inspeccionar manualmente estas URLs:
  `https://www.katialafono.cl/`
  `https://www.katialafono.cl/chillan/tel`
  `https://www.katialafono.cl/chillan/lenguaje-infantil`
  `https://www.katialafono.cl/servicios`
  `https://www.katialafono.cl/agendar-hora-fonoaudiologo-infantil-chillan`
- Confirmar estado `indexada`, canonical elegido por Google y cobertura.
- Reenviar solo el sitemap canonico despues de la validacion.

### 4. Media - Empujar paginas no marca que ya estan creciendo en impresiones

**Por que va despues**

- Hay paginas con crecimiento de impresiones pero sin conversion a clic.
- Ya existe demanda; falta mejorar match de intencion y jerarquia interna.

**Paginas a reforzar**

- `/chillan/lenguaje-infantil` `+72` impresiones
- `/chillan/trastorno-fonologico` `+30`
- `/agendar-hora-fonoaudiologo-infantil-chillan` `+23`
- `/servicios/terapia-lenguaje-infantil` `+22`
- `/recursos` `+15`

**Cambio recomendado**

- Mejorar enlazado interno desde home, `/servicios` y clusters relacionados.
- Ajustar subtitulos, FAQs y copy above the fold para la consulta exacta.
- Añadir CTA visible y diferenciador clinico local.

### 5. Media - Escalar las URLs que ya muestran traccion real

**Por que va quinta**

- Algunas paginas ya probaron que pueden captar clics.
- Tiene sentido consolidarlas una vez corregidos los problemas anteriores.

**Paginas con mejor senal**

- `/chillan/apraxia-del-habla`: `5` clics, `25%` CTR, posicion `2.5`
- `/voz-online/fonoaudiologa-voz-concepcion`: `2` clics, `20%` CTR
- `/servicios/problemas-lectoescritura-chillan`: `2` clics, `100%` CTR sobre poco volumen

**Cambio recomendado**

- Replicar su estructura y propuesta de valor en URLs hermanas.
- Crear enlaces desde paginas hub y desde `/servicios`.
- Revisar si estas paginas merecen bloques de testimonios, FAQs o schema adicional.

## Que no priorizaria ahora

- Queries de glosario con posiciones `>70` como `dislalia` y variantes.
- Paginas con impresiones minimas y sin senal de negocio local inmediata.
- Cambios amplios de arquitectura antes de cerrar host, sitemap y snippets.

## Orden de ejecucion sugerido

1. Snippets de las 6 URLs objetivo.
2. Canonical + redirects + links internos + sitemap unico en `www`.
3. Verificacion manual en GSC UI de indexacion e inspeccion.
4. Refuerzo interno de las paginas no marca con mas impresiones.
5. Escalado de templates ganadores.
