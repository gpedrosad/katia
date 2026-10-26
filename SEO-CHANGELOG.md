# SEO CHANGELOG — katialafono.cl

Log de optimizaciones SEO on-page, ordenadas por fecha (más reciente primero).

## Formato

```
## YYYY-MM-DD: Título del lote/sprint

### Contexto
- Métricas GSC previas (clics, impresiones, CTR, posición)
- Objetivos del lote

### Páginas optimizadas
- URL: breve descripción de cambios (title, description, H1, contenido, schema, enlaces)

### Métricas esperadas
- KPI objetivo a medir en ~14-21 días post-indexación
```

---

## 2026-10-26: SEO Lote 21 — logopeda y logopedia, ancla de estimulación del lenguaje y hub de recursos

### Contexto

**Datos GSC (90 días 2026-07-28 al 2026-10-25, sc-domain:katialafono.cl, dataState=all, pull 2026-10-26):**
- **91 clics**
- **6.654 impresiones**
- **Posición promedio: 8,2**

**Últimos 7 días (2026-10-19 al 2026-10-25):** 9 clics / 1.529 imp vs 7 días previos (2026-10-12 al 2026-10-18): 9 clics / 638 imp. El 2026-10-25 hubo 327 impresiones (récord del periodo).

Home `/` sigue congelada (Lote 13, medir hasta ~2026-11-09). No se tocó `/fonoaudiologa-ninos-chillan`, el hub `/servicios`, `/recursos/*` salvo el hub `/recursos`, `/voz-online/*`, ni las URLs de los Lotes 17–20. Sin páginas de otras ciudades, sin `/ads`, sin `/sitelink`. Sin precios, estadísticas ni credenciales nuevas. La edad 0 a 3 años de la estimulación es la ya publicada en el servicio.

Elegibilidad: `git log --since=2026-10-19` vacío en cada archivo editado.

### Páginas optimizadas

Titles absolutos (`buildPageMetadata`), ≤60. Descriptions entre 120 y 155.

#### 1. `/glosario/logopeda`
**Métricas GSC:** 29 imp, 0 clics, pos 9,2. La home rankea «logopedia» (31 imp, pos 6,9, 0 clics) y «logopeda» (18 imp, pos 2,6, 0 clics). Último cambio: 2026-10-17 (`846e899`, Lote 11).

- **Title (41 → 38):** «¿Qué es un logopeda? | Logopedia infantil» → «Logopeda y logopedia: qué son en Chile»
- **Description (145 → 151):** de «nombres de España» a que logopeda y logopedia nombran, en España y otros países, al fonoaudiólogo y a la fonoaudiología de Chile, qué hace un logopeda infantil y cómo buscarlo
- **H1:** se mantiene «¿Qué es un logopeda?»
- **Respuesta rápida:** logopeda es la persona y logopedia la disciplina; en España y en algunos otros países así se llama al fonoaudiólogo y a la fonoaudiología de Chile; qué hace un logopeda infantil; en Chile se busca como fonoaudiólogo o fonoaudióloga
- **FAQ nuevas** (mismo texto visible y en FAQPage): «¿Logopedia y fonoaudiología son lo mismo?» y «¿Un logopeda atiende a niños y adultos?». Las dos FAQ viejas de definición ahora dicen «España y algunos otros países», sin listar países
- **Enlaces:** se mantiene fonoaudióloga infantil en Chillán. Se agrega en el cuerpo «terapia de voz online» hacia `/voz-online/fonoaudiologa-de-voz-online` (hub sin ciudad, solo voz de adultos) y la misma URL en «Para seguir». No se editó ninguna página de voz
- **Article `dateModified`:** 2026-10-26

#### 2. Ancla «estimulación del lenguaje» → `/servicios/estimulacion-temprana-del-lenguaje-chillan`

La query (68 imp, pos 32) sigue cayendo en `/recursos/estimular-lenguaje-en-casa`. Esa guía no se editó (Lote 14, 2026-10-20: cedió el término y se retargeteó a «terapia de lenguaje en casa»). Un enlace contextual por página, con el ancla exacta. La edad 0 a 3 años es la del servicio.

- `/lenguaje-infantil/nino-de-18-meses-no-habla` (último cambio 2026-10-17, `6d8fe10`): frase en «Dónde sigue la evaluación en Chillán»
- `/lenguaje-infantil/entiende-pero-no-habla` (2026-10-17, `6d8fe10`): frase al cierre, solo si tiene entre 0 y 3 años
- `/guias-padres/pantallas-y-lenguaje-infantil` (2026-10-16, `bfeb2b5`): el enlace al servicio ya estaba; el ancla pasa de «estimulación temprana del lenguaje» a «estimulación del lenguaje». El enlace «estimulación del lenguaje en casa» sigue yendo a la guía
- `/guias-padres/lectura-compartida-de-cuentos` (2026-10-16, `bfeb2b5`): frase nueva, solo de 0 a 3 años. «Estimulación del lenguaje en casa» sigue en la guía
- `/guias-padres/de-los-gestos-a-las-palabras` (2026-10-17, `6d8fe10`): frase nueva de la consulta presencial de 0 a 3 años, distinta de la guía de casa

No se cambió title, meta ni H1 de esas cinco.

#### 3. `/recursos`
**Métricas GSC:** 44 imp, pos 12,7. Último cambio del `page.tsx`: 2026-10-17 (`6d8fe10`). Eligible.

- **Title (57 → 49):** «Recursos y Guías Fonoaudiología Infantil | Padres Chillán» → «Guías para padres sobre lenguaje y habla infantil»
- **Description (127 → 151):** hitos, señales de alerta, qué puedes hacer en casa y cómo preparar la primera evaluación en Chillán
- **H1:** se mantiene «Recursos y guías para padres»
- **Enlaces:** `/guias-padres`, `/preguntas` y `/lenguaje-infantil` ya estaban en «Más guías por tema». No se duplicaron

### Omitidas

- `/recursos/estimular-lenguaje-en-casa`: editada el 2026-10-20 (`53550ae`, Lote 14). Fuera del corte. No se le devolvió «estimulación del lenguaje»
- `/recursos/hitos-del-lenguaje-por-edad` (2026-10-19), `/recursos/primera-evaluacion-fonoaudiologica-infantil` (2026-10-20) y `/recursos/senales-de-alerta-del-lenguaje-y-habla` (2026-10-24): fuera del corte. El hub `/recursos` sí era eligible y se retocó solo title y description
- `/glosario/tel` (2026-10-25) y `/glosario/dislalia` (2026-10-24): fuera del corte. No se usaron como origen del ancla
- `/lenguaje-infantil/a-los-3-anos-habla-poco` (2026-10-24) y `/lenguaje-infantil/a-que-edad-empieza-a-hablar-un-bebe` (2026-10-25): fuera del corte
- Home, pilar, `/servicios`, `/voz-online/*`, `/ads/*`, `/sitelink/*` y páginas de otras ciudades: no se editaron

### Métricas esperadas

Medir ~2026-11-09 al 2026-11-16:
- «logopeda» y «logopedia» en `/glosario/logopeda`, no en la home. CTR > 0 en esa URL
- «estimulación del lenguaje» en `/servicios/estimulacion-temprana-del-lenguaje-chillan`. La guía de casa se sigue midiendo por «terapia de lenguaje en casa»
- El hub `/recursos` se lee como guías para padres sobre lenguaje y habla infantil

### Técnico

- No se editó `app/sitemap.ts` ni `lib/seo-routes.ts`. Sin URLs nuevas.
- Canonical `https://www.katialafono.cl` + path, `index, follow`. FAQPage de `/glosario/logopeda`: 8 preguntas, el mismo texto visible.
- **Build:** `npm run build` pasó (Next.js 16.1.1). 180 páginas estáticas, las mismas del Lote 20. Sin URLs nuevas.
- **Sitemap del build posterior al commit `c5289a3`:** 162 URLs (`<loc>`). Sin `/ads` ni `/sitelink`. `/glosario/logopeda`, `/recursos`, `/lenguaje-infantil/nino-de-18-meses-no-habla`, `/lenguaje-infantil/entiende-pero-no-habla`, `/guias-padres/pantallas-y-lenguaje-infantil`, `/guias-padres/lectura-compartida-de-cuentos` y `/guias-padres/de-los-gestos-a-las-palabras` quedan con `lastmod` `2026-10-26T12:09:53.000Z`. `/recursos/estimular-lenguaje-en-casa` sigue en `2026-10-20T12:16:51.000Z` y `/voz-online/fonoaudiologa-de-voz-online` en `2026-10-24T04:02:09.000Z`: no se editaron. Home sigue en `2026-10-20T03:04:08.000Z`. No se tocó `app/sitemap.ts`.

---

## 2026-10-25: SEO Lote 20 — primeras palabras del bebé, diagnóstico del TEL y CTR corto

### Contexto

**Datos GSC (90 días 2026-07-27 al 2026-10-24, sc-domain:katialafono.cl, dataState=all, pull 2026-10-25):**
- **91 clics**
- **6.376 impresiones**
- **Posición promedio: 8,1**

**Últimos 7 días (2026-10-18 al 2026-10-24):** 9 clics / 1.253 imp vs 7 días previos (2026-10-11 al 2026-10-17): 11 clics / 646 imp. Impresiones diarias: 224 el 2026-10-23 y 258 el 2026-10-24.

Casi todo el sitio se editó entre el 2026-10-18 y el 2026-10-24. Este lote abre dos URLs nuevas (se indexan en ~12–24 h), un enlace de descubrimiento y un pase de title y meta solo en páginas cuyo último cambio de title, meta o cuerpo es del 2026-10-18 o anterior.

No se tocó home, el pilar, `/servicios`, hitos, `/recursos/*`, `/ads/*`, `/sitelink/*`, voz online, otras ciudades, ni el cuerpo de los Lotes 17, 18 y 19. En los hubs solo se agregó tarjeta (`articulos.ts` y `catalogo.ts`). No se reescribió `app/lenguaje-infantil/page.tsx` ni `app/preguntas/page.tsx`.

### Páginas nuevas

Entran solas al sitemap. Titles absolutos, todos ≤60. Descriptions entre 120 y 155. FAQPage con el mismo texto visible. Sin decretos, nombres de test, edades de corte, duraciones, precios ni estadísticas nuevas. Las edades del bebé son las ya publicadas en hitos.

1. `/lenguaje-infantil/a-que-edad-empieza-a-hablar-un-bebe` — title y H1 «¿A qué edad empieza a hablar un bebé?» (37). Meta 154. Ángulo: balbuceo, gestos y primeras palabras («mamá», «agua») entre los 11 y 14 meses; algunos a los 10 y otros a los 15; consultar si a los 18 meses no hay ninguna. No compite con hitos, que sigue con «a qué edad hablan los niños». Respuesta rápida: 50 palabras. 5 FAQ. Article + FAQPage + BreadcrumbList. Ancla «a qué edad hablan los niños» hacia hitos. También enlaza 18 meses, a los 3 años habla poco, retraso del lenguaje en Chillán y agendar. Tarjeta al inicio de `app/lenguaje-infantil/articulos.ts` (entra a `lib/seo-routes.ts` y al `hasPart` del hub).

2. `/preguntas/como-se-diagnostica-el-tel` — title y H1 «¿Cómo se diagnostica el TEL en niños?» (37). Meta 142. Quién evalúa (fonoaudióloga, entrevista, observación y pruebas de lenguaje), que el diagnóstico no sale de un comentario del colegio ni de una sola prueba, qué llevar si ya hay informes, y qué pasa después (terapia o informe para PIE / escuela de lenguaje, sin prometer cupo). Distinta de «¿el TEL se cura?», del servicio, del glosario y de TEL vs retraso. Chillán porque ahí atiende Katia. 5 FAQ además de la pregunta del H1 (FAQPage de `GeoFAQ`, mismo texto visible). Enlaces: esas cuatro páginas, evaluación, informe PIE, escuela de lenguaje o fonoaudióloga y agendar. Tarjeta en `catalogo.ts`.

### Enlace de descubrimiento

- `/tratamientos/retraso-del-lenguaje-chillan`: una frase nueva hacia la guía del bebé. No se cambió title, meta, H1 ni el resto del cuerpo. El párrafo que manda las edades a hitos se quedó igual. Último pase de esa URL: 2026-10-19 (Lote 13); por eso el cambio es solo el enlace.

### CTR (title y meta; H1 y cuerpo intactos)

Elegibles: último cambio de title, meta o cuerpo el 2026-10-18 o antes (`git log`).

#### 1. `/glosario/tel`
**Métricas GSC:** 50 imp, 0 clics, pos 8,4 (90 d). Último cambio de cuerpo: 2026-10-18 (`988009c`, Lote 12, un enlace). Title y meta de antes, del 2026-10-15.

- **Title (38 → 39):** «¿Qué es el TEL? Definición breve (TDL)» → «¿Qué es el TEL? No es solo hablar tarde»
- **Description (155 → 151):** de «definición breve» y «el tratamiento está en otra página» a la situación (no es solo hablar tarde), el 7 % ya publicado y la evaluación en Chillán
- **H1:** se mantiene «¿Qué es el TEL (TDL)?»

#### 2. `/sintomas/mi-hijo-no-habla-bien-chillan`
**Métricas GSC:** 28 imp, 0 clics, pos 6,1 (90 d). Último cambio: 2026-10-13 (`ebeb33d`, Lote 8).

- **Title (51 → 43):** «Mi hijo no habla bien: ¿Cuándo consultar? — Chillán» → «Mi hijo no habla bien: qué hacer en Chillán»
- **Description (141 → 148):** no se le entiende fuera de casa, habla como bebé o a los 2 años no junta dos palabras; señales por edad y evaluación en Chillán
- **H1:** se mantiene «Mi hijo no habla bien o no se le entiende: cuándo consultar en Chillán»

### Omitidas

- `/tratamientos/trastorno-fonologico-chillan` (115 imp, pos 8,4, 0 clics): el cuerpo y una FAQ se reescribieron el 2026-10-19 (`fe6acc6`, Lote 13). Fuera del corte.
- `/servicios/informe-fonoaudiologico-pie-chillan` (99 imp, pos 6,7, 2 clics): el 2026-10-24 (`c9d2441`, Lote 18) se agregaron enlaces a escuela de lenguaje y a PIE vs terapia. Fuera del corte.

### Métricas esperadas

Medir ~2026-11-08 al 2026-11-15:
- Indexar las 2 URLs nuevas. Las queries de bebé («a que edad empiezan a hablar los bebes» y cercanas) se miden en la guía nueva, no en el tratamiento de retraso. «A qué edad hablan los niños» se sigue midiendo en hitos.
- «tel diagnostico» y «cómo se diagnostica el TEL» en la pregunta nueva, sin quitarle «el tel se cura» a su página ni «qué es el TEL» al glosario.
- CTR > 0 en `/glosario/tel` y en `/sintomas/mi-hijo-no-habla-bien-chillan`.

### Técnico

- Rutas nuevas por `articulos.ts` y `catalogo.ts`, que ya alimentan `lib/seo-routes.ts`. No se editó `app/sitemap.ts`.
- Canonical `https://www.katialafono.cl` + path, `index, follow`, en las dos URLs nuevas y en las dos de CTR. FAQPage: 5 preguntas en la guía del bebé y 6 en el diagnóstico del TEL (la del H1 más 5), el mismo texto visible. Article y BreadcrumbList en la guía del bebé.
- **Build:** `npm run build` pasó (Next.js 16.1.1). 180 páginas estáticas (178 del Lote 19 más estas 2).
- **Sitemap del build posterior al commit `efbe17a`:** 162 URLs (`<loc>`). Sin `/ads` ni `/sitelink`. Las dos URLs nuevas, `/glosario/tel`, `/sintomas/mi-hijo-no-habla-bien-chillan` y `/tratamientos/retraso-del-lenguaje-chillan` quedan con `lastmod` `2026-10-25T12:13:51.000Z`. Los hubs `/lenguaje-infantil` y `/preguntas` siguen en `2026-10-17T04:04:19.000Z` y `2026-10-17T02:56:48.000Z`: no se editó su `page.tsx`; la tarjeta entra por `articulos.ts` y `catalogo.ts`. `/tratamientos/trastorno-fonologico-chillan` sigue en `2026-10-19T12:26:58.000Z` y `/servicios/informe-fonoaudiologico-pie-chillan` en `2026-10-24T04:02:09.000Z`: no se editaron.

---

## 2026-10-24: SEO Lote 19 — CTR en página 1 e intención de TEA y terapia de lenguaje

### Contexto

**Datos GSC (90 días 2026-07-26 al 2026-10-23, sc-domain:katialafono.cl, dataState=all, pull 2026-10-24):**
- **90 clics**
- **6.158 impresiones**
- **Posición promedio: 8,1**

**Últimos 7 días (2026-10-17 al 2026-10-23):** 9 clics / 1.005 imp vs 7 días previos (2026-10-10 al 2026-10-16): 9 clics / 597 imp. Desde el 2026-10-19 las impresiones diarias van de 150 a 223 (223 el 2026-10-23).

Lote chico. Solo páginas cuyo último pase de title y cuerpo es del 2026-10-16 o anterior. El commit del 2026-10-17 (`6d8fe10`, ronda 2) en lectoescritura, TEA y terapia de lenguaje cambió el retrato y, en dos de ellas, un enlace a un hub nuevo. No reescribió title ni cuerpo. Se siguió el alcance del brief.

No se tocó home, el pilar, `/servicios`, hitos, `/recursos/*`, `/ads/*`, `/sitelink/*`, voz online, otras ciudades, ni las URLs de los Lotes 17 y 18.

### Páginas optimizadas

Titles absolutos (`buildPageMetadata`), todos ≤60. Descriptions entre 120 y 155. Sin precios, cupos, estadísticas nuevas ni promesas. El 40 % de retraso de lenguaje en TEA ya estaba publicado y se mantuvo.

#### 1. `/sintomas/nino-no-entiende-instrucciones-chillan`
**Métricas GSC:** 47 imp, 0 clics, pos 6,1. Queries vistas: «para niños autistas», «tea no verbal». Último pase de contenido: 2026-10-13.

- **Title (40 → 47):** «Niño no entiende instrucciones | Chillán» → «No entiende instrucciones: qué hacer en Chillán»
- **Description (149 → 133):** de déficit de comprensión o atención a la situación concreta («ven» o dos pasos), comprensión del lenguaje y, a veces, TEA, sin diagnosticar, más qué hacer y evaluación en Chillán
- **H1:** se mantiene «¿Tu hijo no entiende instrucciones? Ayuda en Chillán»
- **Respuesta rápida:** una frase de que a veces se relaciona con TEA y que esta página no lo diagnostica
- **Enlaces nuevos:** `/servicios/tea-trastorno-espectro-autista` y `/chillan/tea-comunicacion`
- FAQPage sigue saliendo del mismo arreglo visible. No se agregaron preguntas

#### 2. `/servicios/dificultades-lectoescritura`
**Métricas GSC:** 44 imp, 0 clics, pos 6,6. Último pase de title: 2026-10-16.

- **Title (47 → 47):** «Mi hijo no aprende a leer ni escribir | Chillán» → «Lee lento o confunde letras | Evalúa en Chillán»
- **Description (147 → 142):** lee lento, confunde b/d o evita leer; qué evaluar (conciencia fonológica y comprensión) y evaluación en Chillán. La dislexia sigue en su página
- **H1:** se mantiene «Mi hijo no aprende a leer ni escribir»
- **Respuesta rápida:** la primera frase ahora dice que la evaluación en Chillán mira esas bases. El resto (rol de la página y diagnóstico formal en evaluaciones especializadas) no se reescribió
- **FAQPage:** se alineó al texto visible. Faltaban «¿Cuánto tiempo toma mejorar la lectura?» y «¿Qué relación tiene la lectura con el lenguaje oral?». No se reescribieron las respuestas (siguen los plazos que ya estaban)

#### 3. `/sintomas/hijo-no-arma-frases-chillan`
**Métricas GSC:** 31 imp, 0 clics, pos 6,4. Query «3 años y medio». Último pase de contenido: 2026-10-13.

- **Title (43 → 47):** «Mi hijo de 2 años no forma frases | Chillán» → «No arma frases a los 3 años | Evalúa en Chillán»
- **Description (146 → 141):** a los 3 años, oraciones de 3 o 4 palabras (hito ya publicado). Si a los 3, o con 3 años y medio, sigue en palabras sueltas, evaluación en Chillán
- **H1:** «Mi hijo de 2 años no forma frases: cuándo consultar en Chillán» → «No arma frases a los 2 o 3 años: cuándo consultar en Chillán». El H1 solo de 2 años no coincidía con la query que ya rankea
- **Edad:** «3 años y medio» no es un hito del sitio. El «y medio» publicado es 2 años y medio (conteo de palabras en hitos). Aquí nombra la edad del niño. La expectativa citada es la de los 3 años: oraciones de 3 o 4 palabras
- **Enlace nuevo:** `/lenguaje-infantil/a-los-3-anos-habla-poco`
- La FAQ de edad usa el mismo texto en la página y en el FAQPage

#### 4. `/servicios/tea-trastorno-espectro-autista`
**Métricas GSC:** 86 imp, 1 clic, pos 10,1. Último pase de title: 2026-10-15.

- **Title (45 → 43):** «Fonoaudiología para TEA en Chillán | Lenguaje» → «Fonoaudióloga TEA en Chillán | Comunicación»
- **Description (147 → 154):** comunicación en niños con autismo, lenguaje y pragmática, y que esta URL es el servicio. Agenda la evaluación
- **H1:** «Fonoaudiología para niños con TEA en Chillán» → «Fonoaudióloga para niños con autismo en Chillán»
- **Ángulo:** esta página es el servicio (qué trabaja la fonoaudióloga y cómo es la primera consulta). `/chillan/tea-comunicacion` sigue como guía local de señales (title «Comunicación y Lenguaje en Niños con TEA | Chillán», H1 «TEA y Comunicación en Chillán»). No comparten H1
- **FAQ nuevas, mismo texto en FAQPage:** «¿Esta página es la guía de señales de TEA en Chillán?» y «¿Si no sigue instrucciones, es autismo?». Sin estadística nueva y sin prometer resultado. La segunda enlaza el síntoma
- **Enlace nuevo** en la respuesta rápida: `/sintomas/nino-no-entiende-instrucciones-chillan`. El de `/chillan/tea-comunicacion` ya estaba
- **FAQPage:** la respuesta de la primera consulta ahora incluye la frase visible de las señales locales, que el JSON-LD omitía

#### 5. `/servicios/terapia-lenguaje-infantil`
**Métricas GSC:** 45 imp, 1 clic, pos 15,0. Query «especialista en terapia de lenguaje para niños» (pos 11,5). Último pase de title: 2026-10-16.

- **Title (46 → 44):** «Especialista en terapia de lenguaje para niños» → «Especialista en terapia de lenguaje infantil»
- **Description (146 → 153):** «terapia de lenguaje infantil» y «para niños», pocas palabras o sin frases, evaluación y plan con los padres. No se metió «fonoaudiólogo Chillán»: eso queda en home y en el pilar
- **H1:** alineado al title
- **Respuesta rápida:** 53 palabras. Antes eran unas 32. Manda la fonoaudiología infantil en general al pilar
- **Enlaces:** el pilar se mantiene con el ancla ya establecida «Fonoaudiología infantil en Chillán». Se agregó «Agendar la evaluación» hacia `/agendar-hora-fonoaudiologo-infantil-chillan`
- **Keywords:** se sacaron «fonoaudióloga para niños Chillán» y «fonoaudiología infantil Chillán»
- **FAQPage:** el nombre visible de las sesiones no coincidía con el schema, y faltaba la pregunta de precio (sin cifra: pide el valor por WhatsApp). Se alineó al texto visible. No se reescribieron las duraciones que ya estaban

### Anclas «fonoaudiólogo / fonoaudióloga en Chillán»

No se editó copy. En las cinco URLs elegibles el enlace contextual al pilar ya existía, con el ancla que fijaron el Lote 10 y el Lote 13: «fonoaudiología infantil en Chillán» → `/fonoaudiologa-ninos-chillan`. La home se quedó con «fonoaudióloga infantil en Chillán». Cambiar el ancla a «fonoaudióloga» mezclaría esos dos intents.

- `/chillan/dislalia`, `/chillan/apraxia-del-habla`, `/chillan/lectoescritura`: ancla «Fonoaudiología infantil en Chillán» en la respuesta rápida. El template `/chillan/[slug]` se tocó el 2026-10-18 (Lote 12) por otros slugs; el copy de estos tres sigue en `dateModified` 2026-10-16
- `/tratamientos/dislalia-infantil-chillan`: ancla «fonoaudiología infantil en Chillán». El 2026-10-17 solo se agregó el enlace a `/dislalia`
- `/servicios/terapia-lenguaje-infantil`: misma ancla, conservada en el pase de intención de arriba

### Métricas esperadas

Medir ~2026-11-07 al 2026-11-14:
- CTR > 0 en las tres URLs de página 1 que hoy están en 0 clics
- `/servicios/tea-trastorno-espectro-autista` sube de pos ~10 sin quitarle impresiones de señales a `/chillan/tea-comunicacion`
- «especialista en terapia de lenguaje para niños» y «terapia de lenguaje infantil» se quedan en `/servicios/terapia-lenguaje-infantil`, no en la query genérica de fonoaudiólogo en Chillán

### Técnico

- Sin URLs nuevas. No se tocó `app/sitemap.ts` ni `lib/seo-routes.ts`
- **Build:** `npm run build` pasó (Next.js 16.1.1). 178 páginas estáticas, igual que el Lote 18
- **Sitemap del build posterior al commit `614f497`:** 160 URLs (`<loc>`). Sin `/ads` ni `/sitelink`. Las cinco páginas editadas quedan con `lastmod` `2026-10-24T12:18:15.000Z`. `/chillan/dislalia`, `/chillan/apraxia-del-habla` y `/chillan/lectoescritura` siguen en `2026-10-18T12:22:21.000Z` (template del Lote 12) y `/tratamientos/dislalia-infantil-chillan` en `2026-10-17T04:04:19.000Z`: no se editaron en este lote

---

## 2026-10-24: SEO Lote 18 — clúster infantil, edad del habla y voz online en positivo

### Contexto

Sin pull nuevo de GSC. Se usa el corte del Lote 17 (90 días 2026-07-25 al 2026-10-22): **89 clics / 5.950 impresiones / posición 8,1**. El encargo trae la query «a que edad hablan los niños» en ~254 impresiones y posición 9,8. Esa URL es `/recursos/hitos-del-lenguaje-por-edad`. El title ya se cambió el 2026-10-19 y el último rastreo conocido sigue siendo el 2026-09-21, así que no se reescribió: un segundo pase antes del recrawl repetiría el Lote 13. Se refuerza con el ancla exacta desde hubs antiguos y con una pregunta distinta (a qué edad se le entiende).

Lote de fin de semana, más grande que el diario. Clúster infantil (tartamudez, dislexia/dislalia, lenguaje, escuela) más dos FAQ de voz online en positivo. Sin páginas de otras ciudades chilenas. Sin `/ads` ni `/sitelink`. No se reescribió el cuerpo de las URLs del Lote 17 ni de `/voz-online/miami`: solo se enlazan desde páginas más antiguas y desde el párrafo de países del hub de voz.

### Páginas nuevas

Entran solas al sitemap. Titles absolutos, todos ≤60. Descriptions entre 120 y 155. FAQPage con el mismo texto visible. Sin precios, cupos, colegios, licencias, seguros ni estadísticas nuevas. Edades solo las ya publicadas en hitos y glosario.

1. `/tartamudez/se-traba-al-leer-en-el-colegio` — title «Se traba al leer en el colegio: qué hacer» (41). Meta 148. Lectura en voz alta y respuesta en la sala. Distinta de «no quiere hablar en el jardín» y de «empezó de repente». Sin cura. 5 FAQ. Article + FAQPage + BreadcrumbList. Tarjeta en `app/tartamudez/articulos.ts`.

2. `/tartamudez/hay-tartamudez-en-la-familia` — title «Hay tartamudez en la familia: cuándo evaluar» (44). Meta 137. El antecedente no decide solo. La señal publicada es antecedente más empeoramiento, sin porcentaje de herencia. 5 FAQ. Tarjeta en el hub.

3. `/lenguaje-infantil/a-los-3-anos-habla-poco` — title «A los 3 años habla poco: qué mirar» (34). Meta 140. Oraciones hacia los 3 años. No repite la guía de dos palabras (hacia los 2) ni la de 18 meses. Sin un número de palabras inventado para los 3. 5 FAQ. Tarjeta en `articulos.ts`.

4. `/lectoescritura/el-colegio-dice-dislexia` — title «El colegio dice dislexia: qué evaluar» (37). Meta 136. La palabra del colegio no es el diagnóstico. El diagnóstico formal sigue en evaluaciones especializadas, como ya dice la comparación del Lote 17. 5 FAQ. Tarjeta en `articulos.ts`. Enlaza `/comparaciones/dislexia-vs-dislalia`.

5. `/preguntas/el-pie-reemplaza-la-terapia` — title «¿El PIE reemplaza la terapia particular?» (40). Meta 142. El PIE es apoyo en el colegio. La consulta evalúa, hace terapia y el informe. No es la escuela de lenguaje: esa decisión sigue en la URL del Lote 17. 5 FAQ además de la pregunta del H1. Tarjeta en `catalogo.ts`.

6. `/preguntas/a-que-edad-se-le-entiende` — title «¿A qué edad se le entiende lo que dice?» (39). Meta 150. A los 3, oraciones que extraños entienden en gran parte; hacia los 4 y 5, más claridad; si a los 4 cuesta entenderlo, evaluar. El ancla «a qué edad hablan los niños» apunta a hitos. 5 FAQ además del H1. No compite con el H1 de hitos.

7. `/comparaciones/dislalia-vs-disartria` — title «Dislalia vs disartria: qué las distingue» (40). Meta 151. Tabla con hechos del glosario. El médico acompaña la disartria. Si hay masticación o tragar, se lo comentas al médico; la hora mira la claridad del habla. Una línea separa la apraxia. 5 FAQ. Article + FAQPage + BreadcrumbList. Tarjeta en `/comparaciones`, más una frase del cuerpo hacia dislexia vs dislalia.

8. `/voz-online/terapia-de-voz-desde-otro-pais` — title «Terapia de voz online desde otro país» (37). Meta 138. Videollamada desde Chile, adultos, horario lun–vie 10:00–18:00 hora de Chile coordinado a tu zona. Enlace de cuerpo a `/voz-online/miami` y al resto de mercados. Sin descargos de licencia ni seguro. 5 FAQ.

9. `/voz-online/cuanto-dura-la-terapia-de-voz` — title «¿Cuánto dura la terapia de voz online?» (38). Meta 145. Sin número de sesiones. El plan sale de la evaluación vocal. Enlace a Miami y a la página de otro país. 5 FAQ.

### Enlaces de descubrimiento

Hacia el Lote 17 y Miami, desde páginas cuyo último commit de contenido era anterior al 2026-10-17, salvo la tarjeta y una frase en hubs que ya listan el clúster:

- `/sobre-katia-dominguez-fonoaudiologa-chillan` (rastreada 2026-10-21 a 2026-10-23): tartamudez de repente, dislexia vs dislalia, escuela de lenguaje, ancla de hitos y Miami.
- `/chillan`: las tres URLs del Lote 17.
- `/tratamientos/tel-trastorno-especifico-lenguaje-chillan`: escuela de lenguaje o fonoaudióloga.
- `/servicios/informe-fonoaudiologico-pie-chillan`: escuela de lenguaje y PIE vs terapia.
- `/glosario/dislalia`: dislexia vs dislalia y dislalia vs disartria.
- `/sintomas/nino-pronuncia-mal-chillan` y `/tratamientos/apraxia-del-habla-infantil-chillan`: dislalia vs disartria. Pronunciación también enlaza dislexia vs dislalia.
- `/sintomas/hijo-habla-poco-edad-chillan`: a los 3 años habla poco y el ancla «a qué edad hablan los niños».
- `/recursos/senales-de-alerta-del-lenguaje-y-habla`: el mismo ancla, más la pregunta de a qué edad se le entiende.
- `/voz-online/paralisis-cordal-rehabilitacion-online`: Miami y terapia desde otro país.
- Hub `/voz-online/fonoaudiologa-de-voz-online`: dos tarjetas nuevas y, en el párrafo de países, enlace de cuerpo a Miami. No se reescribió el resto del hub.

No se tocó `/ads`, `/sitelink`, home, `/servicios`, el pilar, hitos, ni el cuerpo de las 3 URLs del Lote 17 ni de las páginas de mercado del 2026-10-23.

### Métricas esperadas

Indexar las 9 URLs, reenviar el sitemap y pedir inspección de las 3 del Lote 17 y de `/voz-online/miami`. Medir ~2026-11-07 al 2026-11-14. La query de edad se mide en hitos, no en la pregunta nueva.

### Técnico

- Rutas nuevas en `lib/seo-routes.ts` (comparación y voz a mano; el resto entra por `articulos.ts` y `catalogo.ts`).
- **Build:** `npm run build` pasó (Next.js 16.1.1). 178 páginas estáticas (169 del Lote 17 más estas 9).
- **Sitemap del build:** 160 URLs (`<loc>`), 151 del lote anterior más estas 9. Las nueve están, con canonical a `https://www.katialafono.cl` + su path, `index, follow` y FAQPage. lastmod `2026-10-24T04:02:09.000Z` (commit `c9d2441`). Sin `/ads` ni `/sitelink`. No se tocó `app/sitemap.ts`.

---

## 2026-10-23: SEO Lote 17 — dislexia vs dislalia, tartamudez de repente y escuela de lenguaje

### Contexto

**Datos GSC (90 días 2026-07-25 al 2026-10-22, sc-domain:katialafono.cl, dataState=all, pull 2026-10-23):**
- **89 clics**
- **5.950 impresiones**
- **Posición promedio: 8,1**

**Últimos 7 días (2026-10-16 al 2026-10-22):** 10 clics / 891 imp vs 7 días previos (2026-10-09 al 2026-10-15): 8 clics / 672 imp. Desde el 2026-10-19 las impresiones diarias subieron a 150–178.

**URL Inspection (2026-10-23):** Google está rastreando más. `/sobre-katia`, `/fonoaudiologa-ninos-chillan`, `/servicios/evaluacion-fonoaudiologica` y `/preguntas/que-hace-un-fonoaudiologo-infantil` se rastrearon entre el 2026-10-21 y el 2026-10-23. Las páginas del Lote 16 (`/preguntas/el-tel-se-cura`, `/voz-online/disfonia-por-estres`) y las de mercado de anoche (`/voz-online/espana`, `/voz-online/presbifonia`) están indexadas. `/voz-online/miami` está «crawled, currently not indexed» y no se tocó. Home último rastreo 2026-10-18; hitos 2026-09-21; `/servicios/tel-trastorno-especifico-lenguaje` 2026-08-20.

El clúster de voz online recibió 14 páginas el 2026-10-23. Este lote vuelve al clúster infantil (el negocio de Chillán), con URLs nuevas sin ciudad o con contexto Chillán, porque las URLs nuevas se indexan más rápido.

La ronda 2 empezó a mostrar impresiones esta semana (`/lenguaje-infantil/habla-como-bebe` 25, `/preguntas/que-hace-un-fonoaudiologo-infantil` 22, `/preguntas/necesito-orden-medica-para-fonoaudiologo` 19, `/preguntas/es-normal-no-pronunciar-la-r-a-los-4` 15). No se editaron.

**SERP Chile (2026-10-21):** «dislalia» tiene PAA «¿Cuál es la diferencia entre dislexia y dislalia?». «tartamudez niños» tiene PAA sobre por qué empieza y qué hacer, y related «Porque un niño empieza a tartamudear de repente» y «La tartamudez tiene cura». No hay página de katialafono.cl en el top 10 de dislalia ni de tartamudez niños. «escuela de lenguaje chillan» mostró 1 impresión en posición 1 vía `/tratamientos/tel-trastorno-especifico-lenguaje-chillan`.

**Páginas congeladas:** no se editó copy ni metadata de Lotes 10–16, de las 14 páginas de voz online ni del copy de mercado del 2026-10-23, de la ronda 2, home, `/servicios` y `/servicios/*`, pilar, `/sobre-katia`, hitos, `/tratamientos/*`, `/chillan/*`, `/glosario/*`, `/comparaciones/*` ya existentes, `/recursos/*`, `/voz-online/*`, `/preguntas/*` ya existentes, `/tartamudez/*` ya existentes, `/dislalia/*` ni `/lectoescritura/*`. En los hubs solo se agregó tarjeta. No se tocó `/ads/*` ni `/sitelink/*`. No hay páginas nuevas de otras ciudades.

### Páginas nuevas

Entran solas al sitemap (se descubren los `page.tsx`). Titles absolutos, todos ≤60. Descriptions entre 120 y 155. FAQPage con el mismo texto visible. Sin estadísticas, porcentajes, precios, cupos, edades de corte ni colegios inventados.

1. `/comparaciones/dislexia-vs-dislalia` — title «Dislexia vs dislalia: diferencias y cuándo consultar» (52). Meta 138. H1 «Diferencia entre dislexia y dislalia». Respuesta rápida: 55 palabras (dislalia = habla; dislexia = lectoescritura; pueden coincidir; quién evalúa). Tabla, señales por edad ya publicadas en el glosario (4-5, 5-6, preescolar, 6-8 / primero y segundo básico). 5 FAQ. Una línea de disartria enlaza `/glosario/disartria`, sin página nueva. Article + FAQPage + BreadcrumbList (Inicio → Comparaciones). Enlaces: hub y las otras 3 comparaciones, glosario de dislalia y dislexia, `/dislalia`, `/lectoescritura`, tratamiento de dislalia en Chillán, `/chillan/dislexia`, dificultades de lectoescritura, agendar y evaluación. Tarjeta nueva en `/comparaciones`. Ruta en `lib/seo-routes.ts`.

2. `/tartamudez/empezo-a-tartamudear-de-repente` — title y H1 «Empezó a tartamudear de repente: qué hacer» (42). Meta 151. Respuesta rápida: 55 palabras. Ángulo distinto de `/tartamudez/repite-palabras-a-los-3`: esa guía es de una edad y de repetir la palabra entera; esta es del inicio brusco en preescolar. Sin cura prometida. En casa: calma, no completar palabras, no decir «habla más lento». Cuándo evaluar: sonidos, bloqueos, tensión, evitación, más de 6 meses, antecedentes familiares con empeoramiento (hechos ya publicados). 5 FAQ, incluida «¿La tartamudez tiene cura?» y «¿Es por algo que hicimos?». Article (fecha 2026-10-23, sin cambiar el helper compartido de las guías congeladas) + FAQPage + BreadcrumbList. Enlaces: hub, las otras 3 guías, `/chillan/disfemia`, `/sintomas/nino-tartamudea-chillan`, `/glosario/disfemia` y agendar. Tarjeta en el hub vía `app/tartamudez/articulos.ts` (también `hasPart` y `lib/seo-routes.ts`). No se reescribió el title, la description ni el cuerpo del hub.

3. `/preguntas/escuela-de-lenguaje-o-fonoaudiologa` — title y H1 «¿Escuela de lenguaje o fonoaudióloga particular?» (48). Meta 151. Escuela de lenguaje = establecimiento educacional; la consulta particular evalúa, hace terapia y el informe para postular o para el PIE. No se excluyen. Chillán nombrado porque ahí atiende Katia. Sin colegios, cupos, costos ni requisitos que el repo no publique: el establecimiento informa los suyos. 5 FAQ además de la pregunta del H1 (FAQPage de `GeoFAQ`, mismo texto visible). Enlaces: TEL servicio y tratamiento Chillán, informe PIE, `/preguntas/el-tel-se-cura`, derivación del jardín, informe del colegio, `/glosario/tel`, agendar y el hub. Tarjeta en `/preguntas` vía `catalogo.ts` (`hasPart`). No se editó `app/preguntas/page.tsx`.

### Métricas esperadas

Indexar las 3 URLs y reenviar el sitemap. Medir ~2026-11-06 al 2026-11-13.

### Técnico

- **Build:** `npm run build` pasó (Next.js 16.1.1). 169 páginas estáticas. El primer intento del typecheck se quedó sin heap; el build que pasó usó `NODE_OPTIONS=--max-old-space-size=4096`.
- **Sitemap del build previo al commit:** 151 URLs (`<loc>`), 148 del lote de voz online más estas 3. Las tres nuevas están, indexables (`index, follow`) y con canonical a `https://www.katialafono.cl` + su path. FAQPage con 5, 5 y 6 preguntas (la de escuela incluye la pregunta del H1), el mismo texto visible. Article en la comparación y en la guía de tartamudez. BreadcrumbList en las tres.
- **lastmod:** el build posterior al commit `2b67b73` lista las tres URLs nuevas y el hub `/comparaciones` con `2026-10-23T12:18:04.000Z`, la fecha git de esos `page.tsx`. Un build anterior al commit había caído al mtime (`2026-10-23T12:13:45.283Z`, `2026-10-23T12:14:11.555Z` y `2026-10-23T12:14:10.967Z`). `/tartamudez` sigue en `2026-10-17T04:04:19.000Z` y `/preguntas` en `2026-10-17T02:56:48.000Z`: no se editó su `page.tsx`; la tarjeta entra por `articulos.ts` y `catalogo.ts`. No se tocó `app/sitemap.ts`.

---

## 2026-10-23: Mercados de voz online — copy en positivo

Gonzalo pidió sacar los descargos negativos de las 9 páginas de mercado (`espana`, `argentina`, `miami`, `estados-unidos`, `canada`, `reino-unido`, `alemania`, `suiza`, `australia`).

Se quitaron de title, meta, cuerpo, FAQ y schema las frases de licencia, colegiación, matrícula, obra social, seguro, NHS, Medicare, Logopädie local, título local y «no es en francés». Las FAQ que solo decían eso se eliminaron. El FAQPage sigue saliendo del mismo texto visible.

La meta nueva dice terapia de voz en español, por videollamada desde Chile, para adultos, con el horario coordinado a la zona horaria. No se afirma licencia local, seguro, precio ni consulta en el país. El otorrino sigue como el médico que mira las cuerdas.

En el hub solo se ajustó la frase del bloque de países y la tarjeta de Alemania, que repetía «no Logopädie local».

### Metas nuevas

- `/voz-online/espana` (137): Logopedia de la voz para adultos en España, por videollamada desde Chile con una fonoaudióloga. El horario se coordina a tu zona horaria.
- `/voz-online/argentina` (150): Fonoaudióloga online para adultos en Argentina: terapia de voz en español, por videollamada desde Chile. El horario se coordina según tu zona horaria.
- `/voz-online/miami` (152): Terapia de voz en español para adultos en Miami y Florida, por videollamada desde Chile con una fonoaudióloga. El horario se coordina a tu zona horaria.
- `/voz-online/estados-unidos` (145): Terapia de voz en español para adultos en Nueva York, Texas y California, por videollamada desde Chile. El horario se coordina a tu zona horaria.
- `/voz-online/canada` (153): Terapia de voz en español para adultos en Toronto, Montreal y el resto de Canadá, por videollamada desde Chile. El horario se coordina a tu zona horaria.
- `/voz-online/reino-unido` (139): Terapia de voz en español para adultos en Londres y el Reino Unido, por videollamada desde Chile. El horario se coordina a tu zona horaria.
- `/voz-online/alemania` (149): Terapia de voz en español para adultos en Alemania, por videollamada desde Chile con una fonoaudióloga. El horario se coordina según tu zona horaria.
- `/voz-online/suiza` (146): Terapia de voz en español para adultos en Suiza, por videollamada desde Chile con una fonoaudióloga. El horario se coordina según tu zona horaria.
- `/voz-online/australia` (150): Terapia de voz en español para adultos en Australia, por videollamada desde Chile con una fonoaudióloga. El horario se coordina según tu zona horaria.

---

## 2026-10-23: Voz online — España, Argentina, mercados en español y temas nuevos

### Contexto

Gonzalo pidió empujar la terapia de voz online para adultos y abrirla, con honestidad, a pacientes que ya atiende fuera de Chile. Prioridad: mercados con población hispanohablante y mayor capacidad de pago. La sesión sigue siendo por videollamada desde Chile. El horario publicado sigue siendo lunes a viernes, 10:00 a 18:00, hora de Chile (`lib/site.ts`). La hora concreta se coordina por WhatsApp según la zona horaria del paciente. No se publica un desfase en horas.

No se inventan precios, monedas, seguros, licencias, matrículas, colegiaciones, resultados ni agendas locales. No hay Fonasa ni Isapre en estas páginas. No hay hreflang: mismo idioma `es`, canonical a sí misma. FAQPage sale de `GeoFAQ` con el mismo texto visible.

No se tocó `/ads`, `/sitelink`, home, header ni footer. En el hub `/voz-online/fonoaudiologa-de-voz-online` solo se agregaron tarjetas (temas nuevos y un bloque de países). No se reescribió el copy previo del hub.

La forma de agendar de la voz online sigue siendo WhatsApp, más el enlace a `/voz-online/como-es-la-sesion-de-voz-online`. No se enlaza `/agendar`: esa ruta redirige a la hora de fonoaudiología infantil en Chillán.

### Páginas que no se crearon

- **Madrid y Barcelona.** Misma lengua, mismo término (logopeda) y la misma videollamada que `/voz-online/espana`. Una URL por ciudad sería un duplicado. Quedan nombradas dentro de España.
- **Nueva York, Houston/Texas y Los Ángeles/California.** La sesión no cambia por ciudad y no hay consulta local. Quedan como secciones de `/voz-online/estados-unidos`. Miami sí tiene URL: la búsqueda «fonoaudióloga en español / speech therapist en español» en Florida es la que Gonzalo pidió aparte.
- **Toronto, Montreal y Londres** como URL propia. Toronto y Montreal están en `/voz-online/canada` (Montreal aclara que la sesión no es en francés). Londres está en `/voz-online/reino-unido`.
- **`/voz-online/europa`.** No hace falta: España (logopeda, residente), Reino Unido (speech therapist, NHS), Alemania (Logopädie) y Suiza (varios idiomas oficiales, sesión solo en español) no comparten la misma búsqueda.
- **México, Colombia y Perú.** Gonzalo pidió reemplazarlos por los mercados de arriba. Argentina se mantiene.
- **Calentamiento vocal.** Ya es el H1 y una keyword de `/voz-online/ejercicios-para-la-voz`.
- **Higiene vocal, docentes, voz ronca y fatiga al final del día.** Ya existen: `/voz-online/higiene-vocal-cuidado-voz`, `/voz-online/terapia-vocal-docentes-profesores`, `/voz-online/voz-ronca-causas-tratamiento`, `/voz-online/fatiga-vocal-tratamiento-online`.
- **Cantantes aficionados.** `/voz-online/rehabilitacion-vocal-profesionales-voz` ya rankea «terapia voz cantantes» y cubre calentamiento y proyección del profesional. Una segunda URL de canto canibalizaría esa página.

### Páginas nuevas

Entran solas al sitemap (se descubren los `page.tsx`). También quedaron en `lib/seo-routes.ts`. Titles absolutos, todos ≤60. Descriptions entre 120 y 155.

#### Mercados

1. `/voz-online/espana` — «Logopedia de la voz online si estás en España» (45). Meta 153. Logopeda / logopedia de la voz. Sin colegiación española. Madrid y Barcelona, misma videollamada.
2. `/voz-online/argentina` — «Fonoaudióloga online de la voz en Argentina» (43). Meta 144. Separa foniatría (médico) de fonoaudióloga. Sin matrícula ni obra social.
3. `/voz-online/miami` — «Fonoaudióloga en español online en Miami» (40). Meta 153. Speech therapist en español. Florida en esta URL. Sin licencia de EE.UU. ni seguro.
4. `/voz-online/estados-unidos` — «Terapia de voz en español en Estados Unidos» (43). Meta 151. Secciones de Nueva York, Texas/Houston y California/Los Ángeles. Enlaza Miami. Sin licencia estatal ni seguro.
5. `/voz-online/canada` — «Fonoaudióloga en español online en Canadá» (41). Meta 151. Toronto y Montreal. La sesión no es en francés. Sin licencia canadiense.
6. `/voz-online/reino-unido` — «Terapia de voz en español en el Reino Unido» (43). Meta 152. Londres dentro de la página. Sin NHS ni registro local.
7. `/voz-online/alemania` — «Terapia de voz en español si vives en Alemania» (46). Meta 143. Logopädie frente a logopeda en español. Sin seguro alemán.
8. `/voz-online/suiza` — «Terapia de voz en español si vives en Suiza» (43). Meta 144. Sesión en español aunque el cantón hable otro idioma. Sin título ni seguro suizo.
9. `/voz-online/australia` — «Fonoaudióloga en español online en Australia» (44). Meta 135. Speech pathologist en español. Sin Medicare ni licencia local. La distancia no se traduce a un desfase publicado.

#### Temas en Chile

10. `/voz-online/voz-en-call-center` — «Voz en call center y teletrabajo: terapia online» (48). Meta 144. No compite con la voz cansada del final del día ni con docentes.
11. `/voz-online/voz-y-menopausia` — «Voz y menopausia: cambios y terapia de voz» (42). Meta 152. No diagnostica hormonas. Distinta de la presbifonía.
12. `/voz-online/voz-despues-de-un-resfrio` — «La voz no vuelve tras un resfrío o el COVID» (43). Meta 149. No trata la infección. El otorrino mira las cuerdas. Distinta de ronquera general y de afonía.
13. `/voz-online/proyeccion-de-voz` — «Proyección de voz para hablar en público» (40). Meta 153. No es oratoria, ni docentes, ni cantantes, ni call center.
14. `/voz-online/presbifonia` — «Presbifonía: la voz en la adultez mayor» (39). Meta 147. Gonzalo la pidió en este lote. Antes no se había creado porque el sitio no ofrecía adulto mayor, deglución ni audición. La página deja ese límite: solo voz, sin deglución ni audición, sin diagnosticar por cámara.

Cada página enlaza el hub, al menos tres páginas del clúster y la sesión (ahí está cómo agendar), más WhatsApp.

Sitemap del build: **148** URLs (`<loc>`), 134 del lote anterior más estas 14. Canonical de cada página a sí misma. Sin `hreflang`. FAQPage con el mismo texto que las preguntas visibles.

### Métricas esperadas

Indexar las 14 URLs y reenviar el sitemap. Medir ~2026-11-06 al 2026-11-13.

---

## 2026-10-22: SEO Lote 16 — ¿el TEL se cura?, disfonía por estrés y disfonía espasmódica

### Contexto

**Datos GSC (90 días 2026-07-24 al 2026-10-21, sc-domain:katialafono.cl, dataState=all, pull 2026-10-22):**
- **85 clics**
- **5.790 impresiones**
- **Posición promedio: 8,1**

**Últimos 7 días (2026-10-15 al 2026-10-21):** 6 clics / 791 imp vs 7 días previos (2026-10-08 al 2026-10-14): 11 clics / 690 imp. Suben las impresiones y bajan los clics.

**URL Inspection (2026-10-22):** las páginas nuevas del Lote 15 (`/voz-online/afonia-perdi-la-voz`, `/voz-online/ejercicios-para-la-voz`, `/voz-online/reflujo-y-voz`) se rastrearon e indexaron en unas 12 horas. Las páginas editadas en los Lotes 8–14 siguen sin recrawl (por ejemplo `/servicios/tel-trastorno-especifico-lenguaje` último rastreo 2026-08-20, hitos 2026-09-21, `/voz-online/fonoaudiologa-de-voz-online` 2026-10-05). Un segundo pase sobre páginas ya editadas sigue siendo prematuro. Las URLs nuevas siguen siendo la palanca más rápida.

**Demanda sin página propia:** «el tel se cura» 27 imp / pos 9,5 / 0 clics, solo a través de `/servicios/tel-trastorno-especifico-lenguaje` (servicio congelado, sin recrawl desde el 2026-08-20). «tel diagnostico» ~6 imp. Estudio de SERP de voz (2026-10-21): disfonía espasmódica, disfonía por estrés o tensión, y la duda de nódulos (¿desaparecen solos? / cirugía o terapia). Se pidió reforzar la terapia de voz online para adultos, en todo Chile.

**Páginas congeladas:** no se editó copy ni metadata de Lotes 10–15, ronda 2, home, `/servicios` y `/servicios/*`, pilar, hitos, `/tratamientos/*`, `/chillan/*`, `/glosario/*`, `/comparaciones/*`, `/recursos/*`, ni del resto de `/voz-online/*` y `/preguntas/*`. En los hubs solo se agregaron tarjeta o enlace. No se tocó `/ads/*` ni `/sitelink/*`. No hay páginas nuevas de otras ciudades.

**Objetivo:** una pregunta directa sobre si el TEL se cura, y dos páginas de voz online sin ciudad. Medir ~2026-11-05 al 2026-11-12.

### Página que no se creó

No se creó `/voz-online/nodulos-cirugia-o-terapia`. `/voz-online/nodulos-vocales-tratamiento-online` ya es esa decisión: el H1 es «¿Se pueden tratar los nódulos vocales sin cirugía?», la respuesta rápida dice que la terapia suele ir primero y la cirugía queda si no hay respuesta o el otorrino la indica, y las FAQ preguntan si siempre hay que operar y qué es mejor, operar o hacer terapia. El solape con «cirugía o terapia» es demasiado alto. El ángulo «¿desaparecen solos?» no alcanza para una segunda URL que competiría con una página congelada.

### Páginas nuevas

Entran solas al sitemap (se descubren los `page.tsx`). La pregunta también queda en `app/preguntas/catalogo.ts` (y por eso en `lib/seo-routes.ts` y en el `hasPart` del hub). Las dos de voz quedaron en `lib/seo-routes.ts`. Canonical a sí mismas. Titles absolutos (`buildPageMetadata`), sin el sufijo de marca, todos ≤60 caracteres. Descriptions ≤155.

#### 1. `/preguntas/el-tel-se-cura`
- **Title:** «¿El TEL se cura? Lo que pasa con el trastorno del lenguaje» (58 caracteres)
- **H1:** «¿El TEL se cura?»
- **Description:** el TEL no se cura, acompaña y puede mejorar mucho con terapia y apoyo; edad, colegio y diagnóstico (129)
- **Respuesta bajo el H1:** 58 palabras. En `/preguntas` ese texto es el párrafo del patrón, no una caja aparte
- **Sin** porcentajes, plazos ni promesa de cura
- **FAQPage:** la pregunta del H1 más «¿El TEL dura toda la vida?», «¿Cuánto dura la terapia?» (sin inventar duración; el cuerpo enlaza `/preguntas/cuanto-dura-una-terapia-de-lenguaje`), «¿Cómo se diagnostica el TEL?» y «¿TEL y TDL son lo mismo?». El schema usa el mismo texto visible
- **BreadcrumbList:** Inicio / Preguntas / ¿El TEL se cura?
- **Enlaces:** servicio TEL, tratamiento TEL Chillán, comparación TEL vs retraso, agendar, glosario TEL, glosario TDL, informe PIE, pilar infantil (lo agrega el componente) y tres preguntas ya publicadas

#### 2. `/voz-online/disfonia-por-estres`
- **Title / H1:** «Disfonía por estrés o tensión: cuando la voz se aprieta» (55)
- **Description:** respiración, postura y hábitos; el otorrino descarta la lesión (140)
- **Respuesta rápida:** 54 palabras, bajo el H1
- **Hechos ya publicados:** disfonía por tensión muscular (estrés y sobrecarga, dolor o apriete), respiración, postura, higiene (silencio, no carraspear, no gritar), ronquera de más de dos semanas, la videollamada no reemplaza la nasofibrolaringoscopía
- **Schema:** FAQPage (4 preguntas visibles), Service con `areaServed` Chile, WebPage `datePublished` y `dateModified` 2026-10-22, BreadcrumbList
- **Enlaces:** hub, disfonía, fatiga vocal, afonía, disfonía espasmódica, higiene, ejercicios, cómo es la sesión, evaluación vocal, pilar infantil

#### 3. `/voz-online/disfonia-espasmodica`
- **Title / H1:** «Disfonía espasmódica: qué es y cómo ayuda la terapia de voz» (59)
- **Description:** la diagnostican el otorrino o el neurólogo; la terapia es complemento, sin cura (147)
- **Respuesta rápida:** 50 palabras
- **Límite:** condición neurológica; sin cura, sin cifras, sin nombres de fármacos ni dosis. El tratamiento médico lo decide el médico
- **Schema:** FAQPage (5 preguntas visibles), Service con `areaServed` Chile, WebPage `datePublished` y `dateModified` 2026-10-22, BreadcrumbList
- **Enlaces:** hub, disfonía por estrés, parálisis cordal, tratamiento de disfonía, higiene, cómo es la sesión, evaluación vocal, ejercicios, pilar infantil

### Enlaces agregados

- Tarjeta nueva en `/preguntas`: el índice sale de `app/preguntas/catalogo.ts`. No se cambió title, description, H1 ni los párrafos de `/preguntas`.
- Tarjetas nuevas en el bloque del hub `/voz-online/fonoaudiologa-de-voz-online`: «Disfonía por estrés» y «Disfonía espasmódica». No se cambió title, description, H1 ni el párrafo del hub.
- No hay un componente de «páginas relacionadas» en `/voz-online/*`. `RelatedGuides` no se usa en esa línea. Las dos páginas se enlazan entre sí y cada una apunta al hub y a más de tres páginas de voz ya existentes.
- No se editaron home, footer, header, `/ads`, `/sitelink` ni landings de ciudad.

### Chequeo técnico

- **Build:** `npm run build` pasó (Next.js 16.1.1). 152 páginas estáticas (149 del Lote 15 más estas 3).
- **Sitemap del build previo al commit:** 134 URLs (antes 131). Las tres nuevas están, indexables (`index, follow`) y con canonical a `https://www.katialafono.cl` + su path. Service `areaServed` Chile en las dos de voz. FAQPage con 5, 4 y 5 preguntas, el mismo texto visible. BreadcrumbList en las tres.
- **lastmod:** el build posterior al commit `13c0cbb` lista las tres URLs nuevas y el hub de voz con `2026-10-22T12:19:27.000Z`, la fecha git de esos `page.tsx`. Un build anterior al commit había caído al mtime `2026-10-22T12:15:40.006Z`. `/preguntas` sigue en `2026-10-17T02:56:48.000Z`: no se editó su `page.tsx`; la tarjeta entra por `catalogo.ts`. No se tocó `app/sitemap.ts`.
- **`/voz-online/terapia-de-voz-adultos-mayores`:** no existe en el repo, no está en el sitemap y no hay enlaces en `*.ts` / `*.tsx`.
- **Apex:** no se cambió código de redirección.

### Métricas esperadas

- Las tres URLs nuevas se rastrean rápido, como las del Lote 15.
- «el tel se cura» deja de depender solo de la página de servicio congelada.
- Disfonía por estrés y disfonía espasmódica entran al cluster de voz online de adultos, sin competir con las landings de ciudad.
- Nódulos sigue en `/voz-online/nodulos-vocales-tratamiento-online`.

### Indexar en GSC

`/preguntas/el-tel-se-cura`, `/voz-online/disfonia-por-estres` y `/voz-online/disfonia-espasmodica`. Reenviar el sitemap.

---

## 2026-10-21: SEO Lote 15 — afonía, ejercicios para la voz y reflujo

### Contexto

**Datos GSC (90 días 2026-07-23 al 2026-10-20, sc-domain:katialafono.cl, dataState=all, pull 2026-10-21):**
- **87 clics**
- **5.670 impresiones**
- **Posición promedio: 8,1**

**Últimos 7 días (2026-10-14 al 2026-10-20):** 8 clics / 753 imp vs 7 días previos (2026-10-07 al 2026-10-13): 8 clics / 682 imp

**URL Inspection (2026-10-21):** Google todavía no volvió a rastrear páginas editadas en los Lotes 8–14 (por ejemplo `/servicios/evaluacion-fonoaudiologica` último rastreo 2026-09-26, `/servicios/tel-trastorno-especifico-lenguaje` 2026-08-20, hitos 2026-09-21, `/voz-online/fonoaudiologa-de-voz-online` 2026-10-05). Un segundo pase sobre páginas ya editadas es prematuro. Las dos URLs nuevas del 2026-10-20 (`/voz-online/polipos-en-las-cuerdas-vocales` y `/voz-online/como-es-la-sesion-de-voz-online`) sí se rastrearon e indexaron el mismo día.

**Demanda de voz online en GSC (90 días):** «fonoaudiólogo especialista en voz» 30 imp / 3 clics / pos 7,8; «fonoaudiologo online» 10 imp / pos 19; «fonoaudiologia voz» 8 imp / pos 29; «rehabilitacion de la voz en profesionales» 5 imp / pos 28; «fonoaudiologia adulto mayor» 4 imp / pos 2,5 y «fonoaudiólogo adulto» 4 imp / pos 3,8 (ambas caen en la home, que es de niños); «impostar voz» 1 imp; «fono online funciona» 1 imp. `/voz-online/paralisis-cordal-rehabilitacion-online` 152 imp. `/voz-online/higiene-vocal-cuidado-voz` 67 imp / 3 clics.

**Páginas congeladas:** no se editó copy ni metadata de Lotes 9–14, ronda 2, home, `/servicios`, pilar, hitos, `/tratamientos/*`, `/chillan/*`, `/glosario/*`, `/comparaciones/*`, estimulación temprana, guías de casa y primera evaluación, ni del resto de `/voz-online/*`. En el hub solo se agregaron tres tarjetas. No se tocó `/ads/*` ni `/sitelink/*`. No hay páginas nuevas de otras ciudades.

**Objetivo:** contenido nuevo en la línea de terapia de voz online para adultos, en todo Chile. Medir ~2026-11-04 al 2026-11-11.

### Página que se cambió

No se creó `/voz-online/terapia-de-voz-adultos-mayores`. El copy del sitio dice «adultos» y no abre la terapia de voz a adultos mayores, ni ofrece deglución ni audición. «Adulto mayor» solo aparece como palabra negativa de Ads. En su lugar: `/voz-online/reflujo-y-voz`, porque la ronquera por reflujo y el cuidado «evitar comer tarde» ya están publicados (ronquera e higiene) y no tenían URL propia.

### Páginas nuevas

Entran solas al sitemap (se descubren los `page.tsx`). También quedaron en `lib/seo-routes.ts`. Cada una tiene FAQPage (las mismas 4 preguntas visibles), Service con `areaServed` Chile, BreadcrumbList, WebPage con `datePublished` y `dateModified` 2026-10-21, y CTA de WhatsApp. Canonical a sí mismas. El otorrinolaringólogo diagnostica; la videollamada no reemplaza el examen de laringe.

#### 1. `/voz-online/afonia-perdi-la-voz`
- **Title / H1:** «Me quedé sin voz (afonía): qué hacer y cuándo consultar» (55 caracteres)
- **Description:** cuándo ver al otorrino y cuándo la terapia ayuda si la afonía vuelve por el uso (147)
- **Respuesta rápida:** 59 palabras, bajo el H1
- **Enlaces:** hub, disfonía, higiene vocal, voz cansada, ronquera, evaluación, cómo es la sesión, reflujo y voz, pilar infantil

#### 2. `/voz-online/ejercicios-para-la-voz`
- **Title / H1:** «Ejercicios para la voz: calentamiento y cuidado vocal» (53)
- **Description:** se indican después de la evaluación; sin prometer resultados (151)
- **Respuesta rápida:** 59 palabras
- **Hechos ya publicados:** bostezos, tarareos suaves, resonancia, no carraspear, silencio vocal, al menos 2 litros de agua
- **Enlaces:** hub, docentes, cantantes y locutores, evaluación, cómo es la sesión, higiene, disfonía, afonía

#### 3. `/voz-online/reflujo-y-voz`
- **Title / H1:** «Voz ronca por reflujo: qué hace la terapia de voz» (49)
- **Description:** el gastroenterólogo o el otorrino tratan el ácido; la terapia apoya los hábitos (145)
- **Respuesta rápida:** 57 palabras
- **Enlaces:** hub, ronquera, higiene, evaluación, cómo es la sesión, disfonía, afonía

### Enlaces agregados

- Tarjetas nuevas en el bloque del hub `/voz-online/fonoaudiologa-de-voz-online`: «Me quedé sin voz», «Ejercicios para la voz», «Reflujo y voz». No se cambió title, description, H1 ni el párrafo del hub.
- No hay un componente de «páginas relacionadas» en `/voz-online/*`. `RelatedGuides` no se usa en esa línea. Las tres páginas se enlazan entre sí y cada una apunta al hub y a más de tres páginas de voz ya existentes, así que no quedan huérfanas.
- No se editaron home, footer, header, `/ads` ni landings de ciudad.

### Chequeo técnico

- **Build:** `npm run build` pasó (Next.js 16.1.1). 149 páginas estáticas. Hizo falta `NODE_OPTIONS=--max-old-space-size=6144` en esta máquina; el primer intento se quedó sin heap en el chequeo de TypeScript.
- **Sitemap del build:** 131 URLs (antes 128). Las tres nuevas están, indexables en el HTML (`index, follow`) y con canonical a `https://www.katialafono.cl` + su path.
- **lastmod:** el build posterior al commit lista las tres URLs con `2026-10-21T12:12:48.000Z`, la fecha git de sus `page.tsx`. El hub queda con la misma fecha porque se le agregaron tarjetas. Un build anterior al commit había caído al mtime `2026-10-21T12:08:51Z`. No se tocó `app/sitemap.ts`.
- **Apex:** `http://katialafono.cl/` responde 308 a `https://katialafono.cl/` (Vercel) y ese segundo salto 308 va a `https://www.katialafono.cl/` (200). `https://katialafono.cl/` hace un solo 308 a www. No se cambió código. El salto directo a www se configura en dominios de Vercel.

### Métricas esperadas

- Las tres URLs nuevas se rastrean rápido, como pólipos y «cómo es la sesión» el 2026-10-20.
- Capturan afonía, ejercicios / calentamiento vocal y ronquera por reflujo sin competir con la home infantil ni con las landings de ciudad.
- «fonoaudiología adulto mayor» sigue sin página propia hasta que el copy del sitio diga que la terapia de voz atiende a adultos mayores.

### Indexar en GSC

`/voz-online/afonia-perdi-la-voz`, `/voz-online/ejercicios-para-la-voz` y `/voz-online/reflujo-y-voz`. Reenviar el sitemap.

---

## 2026-10-20: SEO Lote 14 — terapia en casa, primera evaluación y chequeo de rastreo

### Contexto

**Datos GSC (90 días 2026-07-22 al 2026-10-19, sc-domain:katialafono.cl, dataState=all, pull 2026-10-20):**
- **88 clics**
- **5.577 impresiones**
- **Posición promedio: 8,1**

**Últimos 7 días (2026-10-13 al 2026-10-19):** 9 clics / 671 imp vs 7 días previos (2026-10-06 al 2026-10-12): 7 clics / 608 imp

**URL Inspection (2026-10-20):** ninguna página del Lote 8 (editada el 2026-10-13) fue rastreada de nuevo. Último rastreo: estimular en casa 2026-09-10, TEL 2026-08-20, evaluación 2026-09-26, sobre Katia 2026-09-21, síntomas entre 2026-08-20 y 2026-10-03. Los números de GSC siguen viendo la versión anterior. `/recursos/primera-evaluacion-fonoaudiologica-infantil` sí se rastreó el 2026-10-16. `/voz-online/polipos-en-las-cuerdas-vocales` sigue desconocida para Google.

**Sitemap:** GSC (www) lo bajó el 2026-10-11 con 85 URLs. El sitemap vivo lista 128.

**Solape:** el Lote 12 dejó «estimulación del lenguaje» en `/servicios/estimulacion-temprana-del-lenguaje-chillan`. Esta guía seguía con ese término en title y H1, y en GSC aparece en pos 33 (61 imp, 0 clics). Su cluster real es «terapia de lenguaje en casa / cómo empezar» (pos ~10-16).

**Primera evaluación:** 90 días 77 imp / 0 clics / pos 8,4. En 7 días subió de 19 a 33 imp. La única query visible es «evaluacion fonoaudiologica» (3 imp, pos 39,7), que pertenece a `/servicios/evaluacion-fonoaudiologica`.

**Páginas congeladas:** no se editó copy ni metadata del resto del Lote 8, Lotes 9–13, ronda 2, home, `/servicios`, pilar, hitos, `/tratamientos/*`, `/chillan/*`, `/glosario/*`, `/comparaciones/*`, estimulación temprana, `/voz-online/*`, `/ads/*` ni `/sitelink/*`. Enlazar hacia ellas sí.

**Objetivo:** ceder «estimulación del lenguaje» a la página de servicio y capturar el cluster de terapia en casa; subir el CTR de la guía de la primera evaluación sin competir con el servicio. Medir ~2026-11-03 al 2026-11-10.

### Páginas optimizadas

#### 1. `/recursos/estimular-lenguaje-en-casa`
- **Title:** `"Estimulación del Lenguaje en Casa | Terapia de Lenguaje"` → `"Terapia de lenguaje en casa: cómo empezar con tu hijo"` (53 caracteres; `buildPageMetadata` usa título absoluto)
- **Description:** cómo empezar: seguir la atención, modelar, expandir y no interrogar; 15-20 minutos varias veces al día (dato ya publicado)
- **H1:** «Terapia de lenguaje en casa: cómo empezar con tu hijo»
- **Respuesta rápida:** 52 palabras, justo bajo el H1, a «¿Cómo empezar la terapia de lenguaje en casa?»
- **H2:** «¿Cómo empezar la terapia de lenguaje en casa?», «¿Cómo hacer terapia de lenguaje en casa paso a paso?», «¿Cuándo no basta con lo que haces en casa?»
- **Enlace:** una sola mención, con ancla «estimulación del lenguaje en Chillán», hacia `/servicios/estimulacion-temprana-del-lenguaje-chillan`. Se sacó el término del title, del H1, de las keywords principales y de la FAQ «¿Qué es la estimulación del lenguaje?»
- **FAQPage:** el schema repite las preguntas visibles. Se mantienen las de cómo hacer, cómo empezar, tiempo, pantallas y cuándo evaluar
- **Article:** `dateModified` 2026-10-20. Sin cifras ni técnicas nuevas

#### 2. `/recursos/primera-evaluacion-fonoaudiologica-infantil`
- **Title:** `"Primera evaluación fonoaudiológica infantil"` → `"Primera evaluación: qué esperar y cómo preparar a tu hijo"` (57 caracteres)
- **Description:** qué pasa en la sesión, qué llevar, cómo explicárselo y el informe
- **H1:** «Primera evaluación fonoaudiológica: qué esperar y cómo preparar a tu hijo»
- **Respuesta rápida** bajo el H1: entrevista, juego, pruebas, unos 60 minutos, cómo explicarlo y el informe. Los 60 minutos y el informe escrito son los ya publicados en `/servicios/evaluacion-fonoaudiologica`. Se dejó atrás el rango «60 a 90 minutos», que no está en esa página de servicio
- **FAQ + FAQPage:** «¿Qué llevar a la primera evaluación?», «¿Cómo le explico a mi hijo que va al fonoaudiólogo?», «¿Qué pasa después de la evaluación?». El schema usa el mismo texto visible
- **CTA:** bloque con ancla «evaluación fonoaudiológica en Chillán» hacia `/servicios/evaluacion-fonoaudiologica` y enlace a `/agendar-hora-fonoaudiologo-infantil-chillan`
- **Article:** `dateModified` 2026-10-20
- No se compite por «evaluacion fonoaudiologica»: ese término queda en el servicio

### Chequeo técnico (sin cambio de código)

- **Sitemap vivo:** las 8 URLs del Lote 8 y las dos de voz (`/voz-online/polipos-en-las-cuerdas-vocales`, `/voz-online/como-es-la-sesion-de-voz-online`) están, con `lastmod` por página. En 9 de esas 10 el `lastmod` coincide con el último commit del `page.tsx` (el generador usa git y, si no hay historial, `lib/page-lastmod.json`).
- **Excepción:** `/sintomas/mi-hijo-no-habla-bien-chillan` sale en el sitemap vivo como `2026-10-15T12:13:31Z`. Git y el JSON dicen `2026-10-13T12:55:27Z`. El generador local, con el mismo código, devuelve la fecha de git. No se tocó `app/sitemap.ts`: no hay un fallo reproducible que corregir. El JSON de respaldo no incluye las dos páginas nuevas de voz (en producción no importa: el build sí tiene git y el `lastmod` vivo es `2026-10-20`).
- **Indexación:** las 10 responden 200, `index, follow` y canonical a sí mismas en `https://www.katialafono.cl`.
- **Enlaces entrantes** (archivos distintos, sin la propia página; `/seo-links` es noindex y no entra):
  - estimular en casa: 16 (footer, índice de recursos, guías y síntomas)
  - TEL: 9 (footer, home, `/servicios`)
  - hub de voz: 20 (footer, header, home y `/servicios`)
  - evaluación fonoaudiológica: 43
  - sobre Katia: 7 (footer y home)
  - niño no entiende instrucciones: 5
  - mi hijo no habla bien: 9
  - hijo no arma frases: 16
  - pólipos: 5, entre ellas el hub de voz
  - cómo es la sesión: 6, entre ellas el hub de voz
- **Apex:** `http://katialafono.cl/` sigue en dos saltos 308: primero a `https://katialafono.cl/` (Vercel) y después a `https://www.katialafono.cl/` (200). No se cambió código. El salto directo a www se configura en dominios de Vercel.

### Métricas esperadas

- La guía de casa deja de rankear «estimulación del lenguaje» y gana clics en «cómo empezar / cómo hacer terapia de lenguaje en casa».
- La guía de la primera evaluación sube el CTR con el snippet de qué esperar y cómo preparar, y la query «evaluacion fonoaudiologica» se queda en el servicio.
- Que Google rastree de nuevo la guía de casa (último rastreo 2026-09-10) y descubra `/voz-online/polipos-en-las-cuerdas-vocales`.

### Indexar en GSC

`/recursos/estimular-lenguaje-en-casa` y `/recursos/primera-evaluacion-fonoaudiologica-infantil`. Reenviar el sitemap (GSC lo bajó el 2026-10-11).

---

## 2026-10-20: SEO voz online adultos — hub, títulos y dos páginas nuevas

### Contexto

Sin pull nuevo de GSC. El último corte sigue siendo el del Lote 13 (90 días al 2026-10-18: 90 clics / 5.495 imp / pos 8,1).

La línea de voz ya tenía hub y páginas de disfonía, nódulos, fatiga, docentes, profesionales, higiene, ronquera, evaluación y parálisis. No se crearon páginas de ciudades. No se tocó `/ads` ni `/sitelink`.

**Objetivo:** que el servicio nacional (terapia de voz online para adultos) se lea en títulos, H1 y enlaces, y cubrir solo las intenciones que no tenían URL. Medir ~2026-11-03 al 2026-11-10.

### Páginas nuevas

- `/voz-online/polipos-en-las-cuerdas-vocales` — terapia de apoyo. El otorrino diagnostica; la videollamada no reemplaza el examen ni una cirugía indicada. FAQPage + Service `areaServed` Chile.
- `/voz-online/como-es-la-sesion-de-voz-online` — qué es la videollamada, para quién, cómo sigue después de la evaluación y cuándo ver al otorrino antes. FAQPage + Service `areaServed` Chile.

Entran solas al sitemap (se descubren los `page.tsx`). También quedaron en `lib/seo-routes.ts`.

### Títulos (antes → después)

| URL | Title antes | Title después | H1 antes | H1 después |
| --- | --- | --- | --- | --- |
| `/voz-online/fonoaudiologa-de-voz-online` | Fonoaudióloga Especialista en Voz Online \| Todo Chile | Terapia de voz online para adultos en Chile | Fonoaudióloga especialista en voz online para todo Chile | Terapia de voz online para adultos en todo Chile |
| `/voz-online/tratamiento-disfonia-online` | (igual) Tratamiento Disfonía Online Chile \| ¿Ronquera persistente? | (igual) | Saca esa ronquera de tu vida con Tratamiento de Disfonía Online | Tratamiento de disfonía online |
| `/voz-online/voz-ronca-causas-tratamiento` | ¿Por qué tengo la voz ronca? Causas y qué hacer | Ronquera persistente: por qué y qué hacer | ¿Por qué tengo la voz ronca? | Ronquera persistente: ¿por qué tengo la voz ronca? |
| `/voz-online/fatiga-vocal-tratamiento-online` | ¿Por qué se me cansa la voz? Fatiga vocal online | Voz cansada: ¿por qué se me cansa la voz? | ¿Por qué se me cansa la voz? | Voz cansada: ¿por qué se me cansa la voz? |
| `/voz-online/terapia-vocal-docentes-profesores` | Terapia vocal para docentes \| Online | Voz cansada en profesores \| Terapia online | ¿Sobrevives apenas tus clases porque tu voz no da más? | Voz cansada en profesores: terapia vocal online |
| `/voz-online/rehabilitacion-vocal-profesionales-voz` | Rehabilitación de la Voz en Profesionales \| Online | Cantantes y locutores: terapia vocal online | Rehabilitación de la voz en profesionales | Terapia vocal para cantantes y locutores |
| `/voz-online/nodulos-vocales-tratamiento-online` | Nódulos Vocales: ¿Se curan sin cirugía? \| Online | Nódulos en las cuerdas vocales \| Terapia | (igual) ¿Se pueden tratar los nódulos vocales sin cirugía? | (igual) |
| `/voz-online/higiene-vocal-cuidado-voz` | ¿Cómo Cuidar la Voz? Higiene Vocal Día a Día | Higiene vocal: cómo cuidar la voz cada día | ¿Cómo cuidar la voz? Higiene vocal | Higiene vocal: cómo cuidar la voz |

El hub gana respuesta directa, Service con `areaServed` Chile y tarjetas a las páginas del cluster (incluidas las dos nuevas). Las de ciudad no se editaron.

### Entrada desde el sitio infantil

- Home: la frase de voz online del hero ahora enlaza, y hay una tarjeta «¿Eres adulto? Terapia de voz online en todo Chile».
- `/servicios`: la misma frase, enlazada, bajo la intro. La tarjeta de voz online ya existía; solo se ajustó su descripción.

### Métricas esperadas

- Impresiones del hub en «terapia de voz online», «fonoaudióloga voz online» y «fonoaudiología voz adultos».
- Que Google descubra las dos URLs nuevas.
- Clics desde home y `/servicios` hacia el hub.

### Indexar en GSC

`/voz-online/fonoaudiologa-de-voz-online`, `/voz-online/polipos-en-las-cuerdas-vocales`, `/voz-online/como-es-la-sesion-de-voz-online`, `/voz-online/tratamiento-disfonia-online`, `/voz-online/voz-ronca-causas-tratamiento`, `/voz-online/fatiga-vocal-tratamiento-online`, `/voz-online/terapia-vocal-docentes-profesores`, `/voz-online/rehabilitacion-vocal-profesionales-voz`, `/voz-online/nodulos-vocales-tratamiento-online`, `/voz-online/higiene-vocal-cuidado-voz`, `/` y `/servicios`. Reenviar el sitemap.

---

## 2026-10-19: SEO Lote 13 — segundo pase de las páginas del Lote 7

### Contexto

**Datos GSC (90 días 2026-07-21 al 2026-10-18, sc-domain:katialafono.cl, pull 2026-10-19):**
- **90 clics**
- **5.495 impresiones**
- **Posición promedio: 8,1**

**Últimos 7 días (2026-10-12 al 2026-10-18):** 9 clics / 628 imp vs 7 días previos (2026-10-05 al 2026-10-11): 7 clics / 707 imp

**URL Inspection (2026-10-19):** Google todavía no vio el Lote 7 (2026-10-12). Último rastreo: hitos 2026-09-21, `/fonoaudiologa-ninos-chillan` 2026-10-09, `/servicios` 2026-10-11, `/tratamientos/retraso-del-lenguaje-chillan` 2026-10-05, `/tratamientos/trastorno-fonologico-chillan` 2026-09-11. Home sí se rastreó el 2026-10-18. Todas indexadas.

**Sitemap:** GSC (www) lo bajó el 2026-10-11 con 85 URLs. El sitemap vivo lista 126.

**Query principal:** «a que edad hablan los niños» en hitos, 223 imp, 0 clics, pos 9,9. El title no contenía la consulta.

**Páginas congeladas:** no se editó copy ni metadata de Lotes 8–12, `/chillan/*`, `/glosario/*`, `/comparaciones/*`, `/voz-online/*` (salvo el enlace al hub desde `/servicios`), `/ads/*` ni `/sitelink/*`. Enlazar hacia ellas sí.

**Objetivo:** que el snippet de hitos responda la consulta, recuperar el hub `/servicios`, separar home y pilar en «fonoaudiología infantil», y marcar los dos tratamientos como páginas de terapia en Chillán. Medir ~2026-11-02 al 2026-11-09.

### Páginas optimizadas

#### 1. `/recursos/hitos-del-lenguaje-por-edad`
- **Title:** `"¿A qué edad hablan los niños? Hitos del lenguaje por edad"` (57 caracteres; `buildPageMetadata` usa título absoluto, no agrega la marca)
- **Description:** respuesta directa (11–14 meses) + tabla, señales de alerta y cuándo consultar
- **H1:** «¿A qué edad hablan los niños?»
- **Respuesta rápida:** párrafo de 53 palabras, justo bajo el H1, que empieza «Los niños empiezan a hablar…». Mismas edades que ya estaban en la página
- **FAQ nuevas, con el mismo texto en FAQPage:** «¿A qué edad hablan los bebés?», «¿A qué edad hablan bien los niños?», «¿Hablan antes las niñas que los niños?» (sin cifra ni estudio)
- **Bloque:** «¿Y si mi hijo no habla a esa edad?» hacia el tratamiento de retraso del lenguaje y las señales de alerta. También enlace al tratamiento del trastorno fonológico
- **Schema:** Article y WebPage con `dateModified` 2026-10-19

#### 2. `/fonoaudiologa-ninos-chillan`
- **Title y H1:** se mantienen («Fonoaudiología infantil en Chillán»)
- **FAQ visibles = FAQPage:** qué cubre, desde qué edad consultar, cómo es la primera evaluación en Chillán (60 min, informe y plan) y presencial vs voz online para adultos
- **Enlaces:** agendar hora, evaluación, tratamiento del retraso del lenguaje y tratamiento del trastorno fonológico, con ancla descriptiva

#### 3. `/` (home)
- **Solo description.** Title y H1 se mantienen: «Fonoaudióloga infantil en Chillán»
- La description nombra fonoaudióloga y fonoaudiología en Chillán, y la terapia de voz online en todo Chile. No se agregó «fonoaudiología infantil» al title ni al H1. No se tocó el layout

#### 4. `/servicios`
- **Title y H1:** «Servicios de fonoaudiología infantil en Chillán»
- **Description** propia, distinta de home y del pilar
- **Listado agrupado** con ancla descriptiva: evaluación, terapia del lenguaje, retraso del lenguaje, terapia del habla, trastornos del habla, trastorno fonológico, TEL, TEA, lectoescritura, informe PIE, conciencia fonológica, estimulación del lenguaje y el hub de voz online
- **OfferCatalog** del `MedicalBusiness` repite esa lista visible

#### 5. `/tratamientos/trastorno-fonologico-chillan` y `/tratamientos/retraso-del-lenguaje-chillan`
- **Title y description:** se mantienen
- **Intro** de cada una dice que es el tratamiento en Chillán: para quién, qué mira la evaluación y cómo son las sesiones
- Retraso del lenguaje no vuelve a la consulta de edades: manda a hitos
- Trastorno fonológico deja las señales en `/chillan/trastorno-fonologico` (ancla «señales y cuándo consultar»)
- **FAQ** nueva en cada una, schema alineado al texto visible
- **MedicalWebPage** + Service, `dateModified` 2026-10-19
- Enlaces entrantes desde hitos, `/servicios` y el pilar

### Métricas esperadas

- CTR de «a que edad hablan los niños» en hitos (hoy 223 imp, 0 clics, pos 9,9).
- Impresiones de `/servicios`, que venían cayendo (49, 45, 27, 13, 6, 6, 3).
- Menos solape de «fonoaudiología infantil» entre home y el pilar.
- Que Google vuelva a rastrear las dos páginas de tratamiento (último rastreo 2026-09-11 y 2026-10-05).

---

## 2026-10-18: SEO Lote 12 — prioridad de rastreo en páginas Lote 6

### Contexto

**Datos GSC (90 días 2026-07-20 al 2026-10-17, dataState=all, pull 2026-10-18):**
- **89 clics**
- **5.490 impresiones**
- **Posición promedio: 8,0**

**Últimos 7 días (2026-10-11 al 2026-10-17):** 10 clics / 634 imp vs 7 días previos (2026-10-04 al 2026-10-10): 5 clics / 727 imp

**URL Inspection (2026-10-18):** las 23 URLs del Lote 6 siguen en 0 impresiones a los 7 días. Descubiertas y sin indexar: `/comparaciones`, `/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje`, glosario de retraso del lenguaje, conciencia fonológica, disartria, disfemia, praxias y TDL, y `/recursos/senales-de-alerta-del-lenguaje-y-habla`. Desconocidas para Google: `/comparaciones/dislalia-vs-trastorno-fonologico`, `/comparaciones/tel-vs-retraso-del-lenguaje`, `/glosario/trastorno-fonologico` y `/contacto-fonoaudiologa-chillan`. Indexadas pero sin recrawl desde antes del Lote 6: estimulación temprana (último rastreo 2026-08-28), evaluación del habla (2026-06-17), `/chillan/trastorno-fonologico` (2026-09-26) y `/chillan/retraso-del-habla` (2026-10-11).

**Sitemap:** GSC lo bajó el 2026-10-11 (85 URLs). El sitemap vivo ya lista 126. Técnicas básicas en 200, index,follow y canonical propio. El cuello es prioridad de rastreo. Sin URLs nuevas.

**Huérfana:** `/glosario/tdl` no tenía enlaces entrantes internos (solo a sí misma) y no salía en el índice del glosario.

**Query:** «estimulación del lenguaje» (59 imp, pos 33,5, 90 días) cae en `/recursos/estimular-lenguaje-en-casa`. La página de servicio no recibía esa query.

**Páginas congeladas:** no se editó el copy de home, Lotes 7–11, rondas 1–2, `/recursos/*`, `/tratamientos/*`, `/sintomas/*`, `/voz-online/*`, `/ads/*` ni `/sitelink/*`. Enlazar hacia ellas desde páginas de este lote sí. El hub `/glosario` no se reescribió: TDL entra porque el listado sale de `GLOSARIO_TERMINOS`.

**Objetivo:** que Google descubra las páginas Lote 6 desde URLs que ya conoce, separar la estimulación profesional de la guía de casa, y que `/chillan/retraso-del-habla` y `/chillan/trastorno-fonologico` dejen de competir con los tratamientos. Medir ~2026-11-01 al 2026-11-08.

### Páginas optimizadas

#### 1. `/servicios/estimulacion-temprana-del-lenguaje-chillan`
- **Title:** `"Estimulación del lenguaje infantil en Chillán"`
- **Description:** servicio presencial de 0 a 3 años, distinto de la guía para casa
- **H1:** «Estimulación del lenguaje infantil en Chillán»
- **Contenido:** se sacó la frase de «estudios internacionales» (no hay fuente en el sitio). Quedan las edades que ya estaban (balbuceo, 12, 18 y 24 meses / 50 palabras). Sección nueva que separa la consulta de lo que se hace en casa
- **FAQ + FAQPage:** 3 preguntas visibles, el schema repite el mismo texto
- **Enlaces:** guía de casa, hitos, lenguaje infantil, señales de alerta, diferencia TEL vs retraso, retraso del lenguaje, TDL, agendar, contacto, evaluación del habla

#### 2. `/servicios/evaluacion-del-habla-infantil-chillan`
- **Title:** se mantiene «Evaluación del habla infantil en Chillán»
- **Description:** pronunciación y claridad; distinta de la evaluación del lenguaje y de la evaluación fonoaudiológica completa
- **H1:** se mantiene
- **Contenido:** la intro dice que es la pronunciación, no el lenguaje ni la evaluación completa
- **FAQ:** pregunta nueva de las tres evaluaciones. Schema solo de lo visible
- **Enlaces:** praxias, evaluación fonoaudiológica completa (ancla con esas palabras), señales de trastorno fonológico, diferencia dislalia vs trastorno fonológico, `/dislalia`, glosario de trastorno fonológico, tratamiento, disartria, disfemia, señales de alerta, contacto

#### 3. `/chillan/retraso-del-habla`
- **Rol:** señales y cuándo consultar. El tratamiento queda en `/tratamientos/retraso-del-habla-chillan`
- **Title:** `"Retraso del habla en Chillán | Señales"`
- **H1:** «Retraso del habla en Chillán»
- **Sin 301, noindex ni canonical**
- **Enlaces:** tratamiento, glosario, diferencia habla vs lenguaje, retraso del lenguaje, señales de alerta, contacto

#### 4. `/chillan/trastorno-fonologico`
- **Rol:** señales y cuándo consultar. El tratamiento queda en `/tratamientos/trastorno-fonologico-chillan`
- **Title:** `"Trastorno fonológico en Chillán | Señales"`
- **H1:** «Trastorno fonológico en Chillán»
- **Sin 301, noindex ni canonical**
- **Enlaces:** tratamiento, glosario, diferencia con dislalia, evaluación del habla, señales de alerta, contacto

#### 5. Huérfana `/glosario/tdl`
- Entra al índice de `/glosario` por el listado de datos (el copy del hub no se reescribió) y queda en `STATIC_GLOSSARY_SLUGS` para no chocar con `[slug]`
- Enlaces nuevos desde `/glosario/tel`, `/glosario/disfasia` y `/comparaciones/tel-vs-retraso-del-lenguaje`
- **FAQ schema:** el JSON-LD usa el texto visible de cada respuesta. La cita ASHA sigue en la página, aparte

#### 6. Segundo pase de comparaciones y glosario Lote 6
- **Titles** con «diferencia entre» o «qué es» / «qué son», dentro de 60 caracteres
- `/comparaciones`, las 3 hijas y los términos Lote 6 (trastorno fonológico, retraso del lenguaje, conciencia fonológica, disfasia, disartria, apraxia, disfemia, praxias) ganan enlaces contextuales a señales de alerta, contacto, TDL o la evaluación del habla, según el tema
- WhatsApp de las comparaciones de dislalia y de TEL pasa por `whatsappUrl()`

#### 7. `/contacto-fonoaudiologa-chillan`
- **ContactPage** nuevo, con `mainEntity` al `@id` `#business`
- El `MedicalBusiness` (subtipo de LocalBusiness) sigue saliendo de `lib/site.ts`: teléfono, Chillán, Ñuble, horario lun–vie 10:00–18:00. Sin calle
- Enlace a las señales de alerta

### Código muerto (no se borró)

`app/(site)/evaluacion-fonoaudiologica-infantil-chillan/page.tsx` sigue en el repo, pero `next.config.ts` responde **308** a `/servicios/evaluacion-fonoaudiologica`. La pregunta de consolidación del Lote 6 ya está resuelta por ese redirect. La ruta está excluida del sitemap.

### Recomendaciones para Gonzalo

1. En GSC, pedir indexación de `/glosario/tdl`, las 3 comparaciones, los glosarios Lote 6 que siguen en «desconocida» o «descubierta, sin rastrear», `/recursos/senales-de-alerta-del-lenguaje-y-habla` y `/contacto-fonoaudiologa-chillan`. Reenviar el sitemap (la última descarga es del 2026-10-11).
2. No consolidar todavía `/chillan/retraso-del-habla` ni `/chillan/trastorno-fonologico` con sus tratamientos. Si hacia el 2026-11-08 siguen en la misma query que `/tratamientos/*`, recién ahí un 301 o canonical al tratamiento.
3. Medir si «estimulación del lenguaje» empieza a mostrarse en la página de servicio y no solo en la guía de casa.
4. No borrar todavía el `page.tsx` de `/evaluacion-fonoaudiologica-infantil-chillan`: el 308 ya manda a `/servicios/evaluacion-fonoaudiologica`.

### Métricas esperadas

- Impresiones en las URLs Lote 6 que hoy están en 0 (objetivo: que Google las rastree).
- «estimulación del lenguaje» asociada a `/servicios/estimulacion-temprana-del-lenguaje-chillan`.
- `/chillan/retraso-del-habla` y `/chillan/trastorno-fonologico` dejan de competir con la página de tratamiento del mismo tema.

---

## 2026-10-17: SEO Lote 11 — indexación, logopeda, conciencia fonológica y hub de trastornos del habla

### Contexto

**Datos GSC (90 días 2026-07-19 al 2026-10-16, dataState=all, pull 2026-10-17):**
- **89 clics**
- **5.469 impresiones**
- **Posición promedio: 8,0**

**Últimos 7 días (2026-10-10 al 2026-10-16):** 9 clics / 649 imp vs 7 días previos (2026-10-03 al 2026-10-09): 5 clics / 711 imp

**URL Inspection (2026-10-17):** `/glosario/logopeda` descubierta, nunca rastreada. `/servicios/conciencia-fonologica-chillan` rastreada, sin indexar. `/servicios/trastornos-del-habla` indexada, 14 imp, pos 54,6; la query visible es «fonoaudiologo chillan» en pos 92. Queries «logopeda» (25 imp, pos 2,5), «logopedia» (29, pos 6,9) y «logopeda infantil» (5) caen en la home con 0 clics. Páginas Lote 5 indexadas con casi 0 imp: test (2), evaluación del lenguaje (3), terapia del habla (3), retraso del habla (1), mi hijo no comprende (7).

**Sitemap GSC:** última descarga 2026-10-11 (85 URLs). El sitemap vivo ya lista más (126 al corte del brief).

**Páginas congeladas:** no se editó home ni lo tocado por Lotes 6–10 ni por las rondas 1–2 (PRs #2–#5), salvo el alcance explícito de este lote. En particular no se editaron `/ads/*`, `/sitelink/*` ni landings de otras ciudades. El footer ya enlazaba los hubs nuevos; no se tocó.

**Objetivo:** que Google tenga una página de logopeda que valga indexar, una conciencia fonológica distinta del glosario, un hub de trastornos del habla que descubra `/dislalia` y `/tartamudez`, y `lastmod` por página. Medir ~2026-10-31 al 2026-11-07.

### Páginas optimizadas

#### 1. `/glosario/logopeda`
**Estado previo:** descubierta, sin indexar. La ficha del glosario dinámico era corta.

**Cambios:**
- **Página estática** (el template `[slug]` no se tocó; el slug sale de `STATIC_GLOSSARY_SLUGS`)
- **Title:** `"¿Qué es un logopeda? | Logopedia infantil"`
- **Description:** logopeda/logopedia = nombres de España; fonoaudiólogo/fonoaudiología en Chile; qué hace un logopeda infantil y cómo buscarlo
- **H1:** «¿Qué es un logopeda?»
- **Contenido:** logopeda vs logopedia, equivalente en Chile, qué trabaja en niños (hechos ya publicados), cómo buscarlo, cuándo consultar, horario desde `lib/site.ts`
- **FAQ + FAQPage:** 6 preguntas visibles, el schema repite el mismo texto
- **Enlaces:** pilar, `/lenguaje-infantil`, `/dislalia`, `/tartamudez`, agendar, qué hace un fonoaudiólogo infantil
- **Enlazada desde** `/glosario`, `/servicios/trastornos-del-habla` y las tres páginas de servicio Lote 5 (indexadas)

#### 2. `/servicios/conciencia-fonologica-chillan`
**Estado previo:** rastreada, sin indexar. Se parecía al glosario.

**Cambios:**
- **No hay canonical ni 301.** La página queda como la evaluación y la estimulación en la consulta. La definición sigue en `/glosario/conciencia-fonologica`
- **Title:** `"Conciencia fonológica en la consulta | Chillán"`
- **H1:** «Evaluación de conciencia fonológica en Chillán»
- **Contenido:** qué se mira en la sesión (rimas, sílabas, sonido inicial, cambiar un sonido), edad 4–5 años, enlace a lectoescritura y a las tres guías
- **FAQ:** pregunta nueva de rol (esta no es la definición) más las dos de edad y la conexión con lectoescritura. Schema solo de lo visible
- **Recomendación:** si en ~21 días sigue sin indexar, valorar canonical al glosario. No se hizo ahora

#### 3. `/servicios/trastornos-del-habla`
**Métricas GSC previas:** 14 imp, pos 54,6; query «fonoaudiologo chillan» pos 92

**Cambios:**
- **Title:** `"Trastornos del habla infantil | Dislalia y tartamudez"`
- **Description / H1:** mapa de trastornos del habla infantil, no landing genérica de fonoaudiólogo en Chillán
- **Intro:** la query de fonoaudióloga Chillán se manda al pilar; logopeda se manda al glosario
- **Contenido:** tarjetas de dislalia, trastorno fonológico, apraxia, tartamudez/disfemia y disartria, cada una con enlaces a hub, tratamiento o glosario ya existentes
- **FAQ:** las cuatro respuestas que ya estaban, más la pregunta de qué ordena la página. El schema cubre las cinco (antes el JSON-LD omitía una visible)
- **Enlaces de descubrimiento:** `/dislalia`, `/tartamudez`, `/lenguaje-infantil`, terapia del habla, logopeda

#### 4. Segundo pase de descubrimiento en páginas Lote 5
Titles y descriptions se mantienen: ya nombran el intent. Se agregó un bloque «Guías relacionadas».

- `/servicios/test-de-lenguaje-infantil-chillan`: lenguaje infantil, entiende y no habla, palabras sin frases, informe del colegio, solo una evaluación, logopeda
- `/servicios/evaluacion-del-lenguaje-infantil-chillan`: lenguaje infantil, habla como bebé, palabras sin frases, gestos a palabras, cuándo consultar, logopeda
- `/servicios/terapia-del-habla-infantil-chillan`: dislalia (hub, cambia sonidos, se entiende solo en casa), tartamudez (hub y qué hacer al trabarse), logopeda
- `/tratamientos/retraso-del-habla-chillan`: dislalia, se entiende solo en casa, habla como bebé, corregir al hablar mal, tartamudez como caso distinto, guías de casa
- `/sintomas/mi-hijo-no-comprende-chillan`: lenguaje infantil, entiende y no habla (caso contrario), otitis y audición, educadora, cuándo consultar, fono o psicólogo

### Técnico

- **Sitemap `lastmod`:** en producción todas las URLs salían con el mismo segundo (`2026-10-17T04:05:15Z`) porque `lastModified` usaba el mtime del checkout. Ahora es la fecha del último commit de cada `page.tsx`. Si el build no tiene ese historial, usa `lib/page-lastmod.json`. Si una URL tiene página concreta y template `[slug]`, gana la concreta (así `/glosario/logopeda` no hereda la fecha del glosario dinámico).
- **Hubs ronda 1 y 2:** siguen en el sitemap (cada uno con su `page.tsx`) y en el footer. Además quedan enlazados desde páginas indexadas no congeladas (trastornos del habla y Lote 5).
- **Apex:** `https://katialafono.cl` ya responde **308** a `https://www.katialafono.cl` (`next.config.ts`, host `katialafono.cl`). `http://katialafono.cl` responde **308** a `https://katialafono.cl/` (HTTPS de Vercel) y recién el siguiente salto llega a www. No se cambió código: el primer salto es del hosting.
- **robots.txt:** sin cambios (`/seo-links`, `/interno`).

### Recomendaciones para Gonzalo

1. En GSC, pedir indexación de `/glosario/logopeda`, `/servicios/conciencia-fonologica-chillan`, `/servicios/trastornos-del-habla` y de los hubs de ronda 1–2 que siguen en «URL desconocida». Reenviar el sitemap (la última descarga es del 2026-10-11).
2. En dominios de Vercel, redirigir el apex (http y https) directo a `https://www.katialafono.cl` para evitar la cadena de dos 308.
3. No consolidar todavía conciencia fonológica ni «mi hijo no comprende» vs «no entiende instrucciones». Si conciencia sigue rastreada y sin indexar hacia el 2026-11-07, recién ahí un canonical al glosario.
4. Medir ~14–21 días: impresiones de «logopeda» / «logopedia» en `/glosario/logopeda` (hoy 0 porque no está indexada) y si «fonoaudiologo chillan» deja de ser la query de trastornos del habla.

### Métricas esperadas

- Indexación de `/glosario/logopeda` y de `/servicios/conciencia-fonologica-chillan`.
- `/servicios/trastornos-del-habla` deja de promediar pos ~50 por la query genérica de Chillán.
- Impresiones en las guías de ronda 2 descubiertas desde estas páginas indexadas.

---

## 2026-10-17: Ronda 2 — cobertura informativa para padres

### Contexto

- La ronda 1 ya publicó `/preguntas` y `/guias-padres`.
- Esta ronda abre los clusters que aún no tenían hub informativo y suma páginas en preguntas y guías.
- Sin datos clínicos nuevos, sin Fonasa, sin precio y sin páginas de otras ciudades.
- Detalle de oportunidades que no se implementan ahora: `docs/seo-oportunidades-ronda2.md`.

### Páginas nuevas

- `/lenguaje-infantil` y 4 guías (18 meses, entiende y no habla, habla como bebé, palabras sin frases).
- `/dislalia` y 3 guías (la S, cambia sonidos, solo se entiende en casa). La erre a los 4 sigue en `/preguntas`.
- `/tartamudez` y 3 guías (repeticiones a los 3, qué hacer al trabarse, silencio en el jardín).
- `/lectoescritura` y 3 guías (confunde letras, letras al revés, primero básico).
- 4 preguntas: fono o psicólogo, esperar a los 4, informe del colegio, habla en casa y calla en el jardín.
- 3 guías de casa: abuelos, gestos a palabras, qué contarle a la educadora.

### Enlaces e imágenes

- Enlaces desde el pilar, el footer, recursos, síntomas, comparaciones, terapia de lenguaje, dislalia (tratamiento) y tartamudez (síntoma).
- Inventario en `lib/seo-routes.ts`. El sitemap las toma solas al existir `page.tsx`.
- Retrato: alt descriptivo por página, `sizes`, carga diferida fuera del hero. El hero sigue con prioridad.

### Métricas esperadas

- Indexación de las URLs nuevas en GSC.
- En ~14-21 días: impresiones en las queries de padre de cada guía, sin caídas fuertes de las landings Chillán que ya rankean el mismo tema.

---

## 2026-10-16: SEO Lote 10 — Segundo pase data-driven en páginas Lote 4

### Contexto

**Datos GSC (90 días 2026-07-18 al 2026-10-15, dataState=all, pull 2026-10-16):**
- **87 clics totales**
- **5.407 impresiones**
- **CTR promedio: 1,6%**
- **Posición promedio: 8,1**

**Datos últimos 7 días (2026-10-09 al 2026-10-15):** 8 clics / 587 imp vs 7 días previos (2026-10-02 al 2026-10-08): 5 clics / 629 imp

**Páginas congeladas (Lotes 5-9, 2026-10-09 al 2026-10-15, más home editada el 2026-10-12):** Sin cambios de contenido. En particular `/`, `/servicios`, `/fonoaudiologa-ninos-chillan`, `/recursos/*`, `/agendar-hora-fonoaudiologo-infantil-chillan`, `/voz-online/*` no-ciudad, tratamientos TEL / retraso / trastorno fonológico, servicios de evaluación, TEL y TEA, `/glosario/tel`, `/chillan/tel`, `/chillan/tea-comunicacion`, sobre Katia y el resto de Lotes 5-8. Solo se enlazó hacia ellas.

**No se editaron** landings de ciudad (`/voz-online/fonoaudiologa-voz-*`), `/ads/*` ni `/sitelink/*`.

**Problema detectado:**
1. Cluster dislalia sin dueño claro y la página de tratamiento empeoró: `/tratamientos/dislalia-infantil-chillan` 36 imp / 0 / pos 27,4 (antes pos 22,6; query «dislalia» pos 2,5 y «fonoaudiologo chillan» pos 85,8). `/chillan/dislalia` 15 imp / 0 / pos 24,7. `/glosario/dislalia` 19 imp / 0 / pos 8,5. El glosario repetía el plan de tratamiento.
2. Lectoescritura/dislexia: `/servicios/dificultades-lectoescritura` 49 imp / 1 / pos 6,4 (buen puesto, CTR bajo). `/chillan/dislexia` 54 imp / 1 / pos 16,9 («fonoaudiologia dislexia» pos 10,5). `/glosario/dislexia` 18 imp / 1 / pos 6,1. `/chillan/lectoescritura` 11 imp / 0 / pos 16,1.
3. Informe PIE: 90 imp / 2 / pos 6,5 (7d 10 imp vs 7). Query «informe fonoaudiologico» pos 10,7. GSC muestra 1 imp en `/servicios/informe-fonoaudiol%C3%B3gico-pie-chillan`. El redirect con «ó» ya estaba en `next.config.ts`, pero no matchea el path codificado (`url.parse` no decodifica `%C3%B3`). Se agregó el source codificado.
4. Apraxia: tratamiento 22 imp / 0 / pos 11,0; `/chillan/apraxia-del-habla` 18 imp / 2 / pos 7,8 (se mantienen title y description).
5. Síntomas: tartamudez 39 imp / 2 / pos 9,8 («tartamudez en niños de 2 a 3 años» pos 1; «escala fils» pos 30,5, sin contenido nuevo porque la escala no está en el repo). Habla poco 39 imp / 1 / pos 4,3 (~3% CTR). Pronuncia mal 16 imp / 0 / pos 13,7.
6. `/servicios/terapia-lenguaje-infantil` 41 imp / 1 / pos 15,4 («especialista en terapia de lenguaje para niños» pos 11,5).
7. `/chillan/disfemia` 41 imp / 6 / pos 5,8 (~15% CTR): solo enlaces internos. Title y description sin cambio.
8. «fonoaudiologo chillan» 29 imp / pos 16,9 cae en muchas URLs profundas. En las páginas de este lote hay un enlace contextual a `/fonoaudiologa-ninos-chillan`. No se metió esa query en los titles.

**Objetivo:** Roles distintos en cada cluster, snippet en palabras de padres y FAQ solo con hechos ya publicados. Medir ~2026-10-30 al 2026-11-06.

### Páginas optimizadas

#### 1. `/tratamientos/dislalia-infantil-chillan`
**Métricas GSC previas:** 36 imp, 0 clics, pos 27,4

**Cambios:**
- **Title:** `"Tratamiento Dislalia Infantil Chillán | Terapia Pronunciación"` → `"Tratamiento de Dislalia Infantil en Chillán"`
- **Description:** De rotacismo/sigmatismo/postítulo a cómo es el tratamiento (r, s, praxias, juego, práctica en casa)
- **H1:** Se mantiene «Tratamiento de dislalia infantil en Chillán»
- **Contenido:** Caja de respuesta: esta página es el tratamiento. Se quitó la definición larga del primer párrafo
- **FAQ:** Nueva pregunta de rol (esta es la página de tratamiento). El resto de la FAQ ya existía
- **Schema:** `dateModified` 2026-10-16
- **Enlaces:** glosario, `/chillan/dislalia` y pilar

**Objetivo:** Que «dislalia» / «tratamiento dislalia Chillán» consoliden aquí; la pos media baja hoy por «fonoaudiologo chillan» (pos 85,8), que debe ir al pilar

---

#### 2. `/glosario/dislalia`
**Métricas GSC previas:** 19 imp, 0 clics, pos 8,5

**Cambios:**
- **Title:** `"Definición Dislalia | ¿Qué es y cómo se trata?"` → `"¿Qué es la dislalia? | Definición breve"`
- **Description:** Definición corta (omitir, sustituir, distorsionar) y envío al tratamiento
- **Contenido:** Se sacó el paso a paso del tratamiento (estaba duplicado). Quedan definición, tipos y edad de consulta, con enlace a la página de tratamiento
- **Schema:** `dateModified` 2026-10-16
- **WhatsApp:** pasa por `whatsappUrl()`
- **Enlace:** pilar

**Objetivo CTR:** > 2% en pos ~8, sin competir por «tratamiento»

---

#### 3. `/chillan/dislalia`
**Métricas GSC previas:** 15 imp, 0 clics, pos 24,7

**Cambios:**
- **Title:** `"Dislalia en Chillán | Señales y cuándo consultar"` → `"Dislalia en Chillán | Señales por edad"`
- **Description:** Señales locales («tasa» por casa) y aviso de que el tratamiento está en otra página
- **H1:** Se mantiene «Dislalia en Chillán». Bajada y cuerpo pasan de «tratamiento» a señales
- **FAQ + caja:** Esta página no es el tratamiento
- **Schema:** `dateModified` 2026-10-16
- **Enlaces:** tratamiento (dueño), glosario y pilar. La tarjeta de servicio ahora apunta al tratamiento

**Objetivo:** Dejar de competir con la página de tratamiento

---

#### 4. `/servicios/dificultades-lectoescritura`
**Métricas GSC previas:** 49 imp, 1 clic, pos 6,4

**Cambios:**
- **Title:** `"Dificultades de Lectura y Escritura Chillán | Fonoaudiología"` → `"Mi hijo no aprende a leer ni escribir | Chillán"`
- **Description:** Palabras de padres (lee lento, confunde b/d, evita leer) y aviso de que la dislexia tiene su página
- **H1:** `"Mi hijo no aprende a leer ni escribir"` + caja de respuesta
- **Schema:** `dateModified` 2026-10-16
- **Enlaces:** `/chillan/dislexia`, glosario, `/chillan/lectoescritura`, pilar
- No se afirma que Katia diagnostique dislexia. Se mantiene el hecho ya publicado: el diagnóstico formal es con evaluaciones especializadas

**Objetivo CTR:** > 4% en pos ~6 (hoy ~2%)

---

#### 5. `/chillan/dislexia`
**Métricas GSC previas:** 54 imp, 1 clic, pos 16,9

**Cambios:**
- **Title:** `"Dislexia y Fonoaudiología Chillán | Evaluación Lectura"` → `"Fonoaudiología y Dislexia en Chillán"`
- **Description / H1:** Query «fonoaudiología y dislexia»: evaluación de bases del lenguaje oral
- **Contenido:** Caja y FAQ que separan definición, servicio de lectoescritura y diagnóstico formal (hecho ya publicado, sin atribuirlo a Katia)
- **Schema:** `dateModified` 2026-10-16
- **Enlaces:** glosario, servicio, lectoescritura local, pilar

**Objetivo:** Subir «fonoaudiologia dislexia» desde pos ~10,5

---

#### 6. `/glosario/dislexia`
**Métricas GSC previas:** 18 imp, 1 clic, pos 6,1

**Cambios:**
- **Title:** `"Definición Dislexia | ¿Qué es y cómo ayuda la fonoaudiología?"` → `"¿Qué es la dislexia? | Definición breve"`
- **Description:** Definición corta y envío a la evaluación local
- **Contenido:** Párrafo solo en este slug que enlaza Chillán, servicio, lectoescritura local y pilar. El resto del template de glosario no cambia
- **Schema:** `dateModified` 2026-10-16 solo en este slug (los otros términos siguen en 2026-05-20)

**Objetivo:** Mantener pos ~6 y el rol de definición

---

#### 7. `/chillan/lectoescritura`
**Métricas GSC previas:** 11 imp, 0 clics, pos 16,1

**Cambios:**
- **Title:** `"Dificultades de Lectoescritura Chillán | Base Lenguaje"` → `"Lectoescritura en Chillán | Base del lenguaje"`
- **Description / H1:** Página local de la base en el lenguaje oral, distinta del servicio y de dislexia
- **FAQ + caja** con enlaces a las otras tres
- **Schema:** `dateModified` 2026-10-16
- **Glosario de la tarjeta:** `/glosario/conciencia-fonologica`

**Objetivo:** ≥1 clic y snippet que no duplique al servicio

---

#### 8. `/servicios/informe-fonoaudiologico-pie-chillan`
**Métricas GSC previas:** 90 imp, 2 clics, pos 6,5

**Cambios:**
- **Title:** `"Informe Fonoaudiológico para PIE Chillán | Colegio Decreto 170"` → `"Informe Fonoaudiológico | Qué es y quién lo pide"`
- **Description:** Qué es (evaluación, test y plan) y quién lo pide (colegio/PIE, escuela de lenguaje, pediatra)
- **H1:** `"Informe fonoaudiológico: qué es y quién lo pide"` + caja con hechos ya escritos (60 min, TEPROSIF-R, TECAL, STSG, Decreto 170)
- **FAQ:** Sin preguntas nuevas
- **Schema:** `dateModified` 2026-10-16
- **Enlace:** pilar
- **Redirect:** se mantiene el 308 del path con «ó» y se agrega el source `%C3%B3`, que es la forma en que llega el request (el anterior no redirigía)

**Objetivo CTR:** > 4% en pos ~6 (hoy ~2,2%)

---

#### 9. `/tratamientos/apraxia-del-habla-infantil-chillan`
**Métricas GSC previas:** 22 imp, 0 clics, pos 11,0

**Cambios:**
- **Title:** `"Tratamiento Apraxia del Habla Infantil Chillán | CAS"` → `"Tratamiento de Apraxia del Habla en Chillán"`
- **Description / H1:** Cómo es la terapia (aprendizaje motor y práctica en casa). Las señales quedan en `/chillan/apraxia-del-habla`
- **FAQ:** Pregunta de rol. El resto ya existía
- **Schema:** `dateModified` 2026-10-16
- **Enlace:** pilar

**Objetivo:** ≥1 clic y snippet distinto al de la página que ya convierte

---

#### 10. `/chillan/apraxia-del-habla` (light touch)
**Métricas GSC previas:** 18 imp, 2 clics, pos 7,8

**Cambios:** Title y description **sin cambio**. Caja que deja las señales aquí y el tratamiento en la otra página. FAQ de una pregunta. `dateModified` 2026-10-16. Enlaces a tratamiento, glosario de apraxia y pilar. La tarjeta principal ahora va al tratamiento.

**Objetivo:** Mantener los clics (hoy ~11% CTR)

---

#### 11. `/sintomas/nino-tartamudea-chillan`
**Métricas GSC previas:** 39 imp, 2 clics, pos 9,8

**Cambios:**
- **Title:** `"Mi hijo tartamudea | ¿Es normal o preocupante? Chillán"` → `"Tartamudez en niños de 2 a 3 años | ¿Es normal?"`
- **Description / H1 / caja:** La respuesta ya publicada (disfluencia normal entre 2 y 5 años; consultar si hay sonidos, bloqueos, tensión o más de 6 meses)
- **No se creó** contenido sobre la escala FILS
- **Schema:** `dateModified` 2026-10-16
- **Enlace:** pilar (el de `/chillan/disfemia` ya estaba)

**Objetivo:** Sostener la query en pos 1 y CTR > 5%

---

#### 12. `/sintomas/hijo-habla-poco-edad-chillan`
**Métricas GSC previas:** 39 imp, 1 clic, pos 4,3

**Cambios:**
- **Title:** `"Mi hijo de 2 años habla poco: ¿es normal? | Chillán"` → `"Mi hijo de 2 años habla poco: ¿es normal?"`
- **Description:** La respuesta en el snippet: unas 50 palabras y frases de dos («mamá agua»)
- **H1 + caja** con ese mismo hecho (ya estaba en la FAQ)
- **Schema:** `dateModified` 2026-10-16
- **Enlace:** pilar

**Objetivo CTR:** > 6% en pos ~4 (hoy ~2,6%)

---

#### 13. `/sintomas/nino-pronuncia-mal-chillan`
**Métricas GSC previas:** 16 imp, 0 clics, pos 13,7

**Cambios:**
- **Title:** `"Mi hijo no se le entiende al hablar | Pronuncia mal Chillán"` → `"No se le entiende al hablar | Pronunciación Chillán"`
- **Description / H1:** «habla como bebé», «tasa» por casa, 3-4 años
- **Schema:** `dateModified` 2026-10-16
- **Enlaces:** tratamiento de dislalia (ya estaba) y pilar

**Objetivo:** ≥1 clic

---

#### 14. `/servicios/terapia-lenguaje-infantil`
**Métricas GSC previas:** 41 imp, 1 clic, pos 15,4

**Cambios:**
- **Title:** `"Terapia de Lenguaje Infantil Chillán | Especialista Niños"` → `"Especialista en terapia de lenguaje para niños"`
- **Description / H1:** La query exacta, con Chillán y el alcance ya escrito (retraso, pocas palabras, frases, evaluación y padres)
- **Schema:** `dateModified` 2026-10-16
- **Enlace:** pilar

**Objetivo:** Subir la query desde pos ~11,5; CTR > 3%

---

#### 15. `/chillan/disfemia` (solo enlaces)
**Métricas GSC previas:** 41 imp, 6 clics, pos 5,8

**Cambios:** Title y description **sin cambio** (siguen saliendo de `titulo` y `descripcion` en `patologias.ts`). Párrafo con enlaces a `/sintomas/nino-tartamudea-chillan`, `/glosario/disfemia` y el pilar. La tarjeta de glosario ahora va a `/glosario/disfemia`. `dateModified` 2026-10-16.

**Objetivo:** Mantener CTR ~15%

### Métricas esperadas

Medir ~2026-10-30 al 2026-11-06, tras indexación:
1. **CTR `/servicios/dificultades-lectoescritura`:** > 4% (baseline pos 6,4, 1/49)
2. **CTR `/servicios/informe-fonoaudiologico-pie-chillan`:** > 4% (baseline pos 6,5, 2/90)
3. **CTR `/sintomas/hijo-habla-poco-edad-chillan`:** > 6% (baseline pos 4,3, 1/39)
4. **Cluster dislalia:** la query «dislalia» se queda en el tratamiento; glosario y `/chillan/dislalia` bajan impresiones de esa query
5. **`/chillan/dislexia`:** «fonoaudiologia dislexia» mejor que pos 10,5
6. **`/chillan/disfemia` y `/chillan/apraxia-del-habla`:** no perder los clics actuales
7. **Pilar:** más impresiones de «fonoaudiologo chillan» y menos en URLs profundas de este lote (hoy pos 20-90)

### Próximos pasos

1. Pedir indexación en GSC de las 15 URLs (la del informe con tilde no: debe seguir redirigiendo).
2. No crear una página de escala FILS ni afirmar diagnóstico de dislexia sin un hecho nuevo en el repo.
3. Lote 11, si estos snippets no mueven el CTR: la query «fonoaudiologo chillan» en el pilar (congelado hasta medir este lote) y el grupo «terapia de lenguaje en casa».

## 2026-10-15: SEO Lote 9 — Segundo pase data-driven en páginas Lote 3 + 2 páginas Lote 1

### Contexto

**Datos GSC (90 días 2026-07-17 al 2026-10-14, dataState=all, pull 2026-10-15):**
- **87 clics totales**
- **5.335 impresiones**
- **CTR promedio: 1,6%**
- **Posición promedio: 8,1**

**Datos últimos 7 días (2026-10-08 al 2026-10-14):** 10 clics / 597 imp vs 7 días previos (2026-10-01 al 2026-10-07): 2 clics / 609 imp

**Páginas congeladas (Lotes 4-8, 2026-10-08 al 2026-10-13):** Sin cambios. En particular home, `/servicios`, `/fonoaudiologa-ninos-chillan`, `/recursos/hitos-del-lenguaje-por-edad`, `/tratamientos/retraso-del-lenguaje-chillan`, `/tratamientos/trastorno-fonologico-chillan`, páginas Lote 8 (`/recursos/estimular-lenguaje-en-casa`, `/servicios/tel-trastorno-especifico-lenguaje`, `/voz-online/fonoaudiologa-de-voz-online`, `/servicios/evaluacion-fonoaudiologica`, `/sobre-katia-dominguez-fonoaudiologa-chillan`, 3 síntomas) y el resto de Lotes 4-6. Solo se enlazó hacia ellas.

**No se editaron** landings de ciudad (`/voz-online/fonoaudiologa-voz-*`), `/ads/*` ni `/sitelink/*`.

**Problema detectado:**
1. `/agendar-hora-fonoaudiologo-infantil-chillan`: 164 imp / 0 clics / pos 6,4 (7d 7 vs 3). Posición de clic sin clics: el snippet no dice qué es la primera hora.
2. `/tratamientos/tel-trastorno-especifico-lenguaje-chillan`: 142 imp / 0 clics / pos 9,7. Queries «tel» 21 imp pos 20,3; «tel diagnostico» 2 imp pos 8,5; «escuela de lenguaje chillan» 1 imp pos 1. Tenía que quedar como página de tratamiento local, distinta del servicio (¿se cura?, congelado) y del glosario (definición).
3. `/glosario/tel` 46 imp / 0 / pos 8,6 y `/chillan/tel` 7 imp / 0 / pos 6,0: roles todavía poco explícitos en el snippet.
4. `/servicios/tea-trastorno-espectro-autista`: 78 imp / 1 clic / pos 10,4. Faltaba enlace visible a `/chillan/tea-comunicacion` y FAQ de padres.
5. Voz online no-ciudad (Lote 3, ~8 días): parálisis cordal 149 imp / 5 clics / pos 8,8 (light touch); higiene 65 / 2 / 7,5; rehabilitación profesionales 28 / 0 / 11,8 («rehabilitacion de la voz en profesionales» pos 27,7, «impostar voz» pos 8); fatiga 27 / 0 / 8,9; nódulos 23 / 1 / 8,3; evaluación vocal 16 / 0 / 6,0 (snippet); voz ronca 14 / 0 / 10,1; docentes 16 / 2 / 7,6 (light touch).

**Objetivo:** Query-match de title/H1/snippet y FAQ con hechos ya publicados. Medir ~2026-10-29 al 2026-11-05.

### Páginas optimizadas

#### 1. `/agendar-hora-fonoaudiologo-infantil-chillan`
**Métricas GSC previas:** 164 imp, 0 clics, pos 6,4

**Cambios:**
- **Title:** `"Agendar Hora Fonoaudiólogo Infantil en Chillán | Respuesta en 24h"` → `"Agendar Hora Fonoaudiólogo Infantil en Chillán"`
- **Description:** De copy genérico de WhatsApp a primera cita = evaluación (60-90 min), informe y plan, lun–vie 10:00–18:00 (`lib/site.ts` + guía de primera evaluación ya publicada)
- **H1:** `"Agendar hora fonoaudiólogo infantil en Chillán"`
- **Contenido:** Caja de respuesta rápida; pasos en tú; sección «Qué ocurre en la primera cita»
- **FAQ + FAQPage:** Cómo agendar, qué incluye la primera hora, qué llevar, comunas de Ñuble, horario
- **Schema:** `ContactPage` con `dateModified` 2026-10-15 y horario lun–vie
- **Enlaces:** `/recursos/primera-evaluacion-fonoaudiologica-infantil` y `/servicios/evaluacion-fonoaudiologica`

**Objetivo:** CTR > 2% en pos ~6 (hoy 0%)

---

#### 2. `/tratamientos/tel-trastorno-especifico-lenguaje-chillan`
**Métricas GSC previas:** 142 imp, 0 clics, pos 9,7

**Cambios:**
- **Title:** `"Tratamiento TEL en Chillán | Trastorno Específico del Lenguaje Infantil"` → `"Tratamiento del TEL en Chillán | Cómo es la terapia"`
- **Description / H1:** Foco en tratamiento local, no en la definición
- **Contenido:** Caja de respuesta; sección «Cómo es la terapia» (evaluación, plan, 1-2 sesiones/semana y 1-3 años ya publicados en el servicio/glosario, casa y colegio); sección «Terapia particular y escuela de lenguaje» (no se afirma que Katia trabaje en una escuela; el informe para postular ya está en la página de informe PIE)
- **FAQ:** Cómo es el tratamiento, qué esperar, cómo se diagnostica, diferencia con escuela de lenguaje, informe escolar. Se sacó «¿El TEL se cura?» de esta FAQ para no competir con `/servicios/tel-trastorno-especifico-lenguaje`
- **Schema:** `dateModified` 2026-10-15
- **Enlaces:** glosario, `/chillan/tel`, servicio «¿se cura?», comparación TEL vs retraso, informe PIE

**Objetivo:** ≥1 clic; bajar «tel» desde pos ~20; el snippet de «escuela de lenguaje chillan» debe decir que esta página no es una escuela

---

#### 3. `/glosario/tel`
**Métricas GSC previas:** 46 imp, 0 clics, pos 8,6

**Cambios (light):**
- **Title:** `"Definición TEL (TDL) | Qué es el Trastorno del Desarrollo del Lenguaje"` → `"¿Qué es el TEL? Definición breve (TDL)"`
- **Description:** Definición corta + 7% ya publicado + envío al tratamiento
- **Lead:** Deja explícito que el tratamiento en Chillán está en otra página
- **Enlaces:** Tarjeta a tratamiento Chillán y a `/comparaciones/tel-vs-retraso-del-lenguaje`. El CTA superior a «¿Se cura el TEL?» se mantiene
- **Schema:** `dateModified` 2026-10-15
- **WhatsApp:** pasa por `whatsappUrl()` (mismo número)

**Objetivo CTR:** > 2%

---

#### 4. `/chillan/tel`
**Métricas GSC previas:** 7 imp, 0 clics, pos 6,0

**Cambios (light, solo el slug `tel` en `patologias.ts` y overrides/bloques `slug === "tel"`):**
- **Title:** `"TEL en niños Chillán | ¿Habla poco o no se entiende?"` → `"TEL en Chillán | Evaluación y terapia local"`
- **Description:** Hub local: señales, evaluación, definición y tratamiento en otras páginas
- **H1:** `"TEL en Chillán"`
- **Contenido:** Caja de respuesta que separa hub / glosario / tratamiento; FAQ visibles alineadas al schema
- **Schema:** `dateModified` 2026-10-15 solo en este slug
- **No cambió** el HTML de los otros slugs de `/chillan/[slug]`

**Objetivo:** Mantener pos ~6 y que el snippet no compita con glosario ni con tratamiento

---

#### 5. `/servicios/tea-trastorno-espectro-autista`
**Métricas GSC previas:** 78 imp, 1 clic, pos 10,4

**Cambios:**
- **Title:** `"Fonoaudiología TEA Chillán | Comunicación y lenguaje en autismo"` → `"Fonoaudiología para TEA en Chillán | Lenguaje"`
- **Description:** Pregunta de padres + 40% ya publicado
- **H1:** `"Fonoaudiología para niños con TEA en Chillán"`
- **Contenido:** Caja de respuesta; FAQ de la primera consulta en Chillán; la FAQ de niños no verbales entra al `FAQPage` (ya estaba visible)
- **Enlace:** `/chillan/tea-comunicacion` en la caja, en la FAQ y en relacionados
- **Schema:** `dateModified` 2026-10-15

**Objetivo CTR:** > 2,5%

---

#### 6. `/voz-online/paralisis-cordal-rehabilitacion-online` (light touch)
**Métricas GSC previas:** 149 imp, 5 clics, pos 8,8

**Cambios:** Title, description y H1 sin cambio. `dateModified` 2026-10-15. Se quitó el `FAQPage` duplicado (quedó uno). Enlace a `/voz-online/voz-ronca-causas-tratamiento`.

**Objetivo:** Mantener CTR (hoy ~3,4%)

---

#### 7. `/voz-online/higiene-vocal-cuidado-voz`
**Métricas GSC previas:** 65 imp, 2 clics, pos 7,5

**Cambios:**
- **Title:** `"Higiene Vocal: Cómo Cuidar tu Voz Todos los Días"` → `"¿Cómo Cuidar la Voz? Higiene Vocal Día a Día"`
- **H1:** `"¿Cómo cuidar la voz? Higiene vocal"` + caja de respuesta (hábitos ya listados en la página)
- **Enlaces:** rehabilitación de profesionales y terapia para docentes
- **Schema:** `dateModified` 2026-10-15

**Objetivo CTR:** > 4%

---

#### 8. `/voz-online/rehabilitacion-vocal-profesionales-voz`
**Métricas GSC previas:** 28 imp, 0 clics, pos 11,8

**Cambios:**
- **Title:** `"Rehabilitación de la Voz en Profesionales | Online Chile"` → `"Rehabilitación de la Voz en Profesionales | Online"`
- **H1:** De gancho emocional a `"Rehabilitación de la voz en profesionales"` (el gancho queda como bajada)
- **Contenido:** Caja de respuesta + FAQ «¿Qué es impostar la voz?» usando el sentido ya escrito en la página (forzar un tono, p. ej. grave artificial)
- **Enlaces:** fatiga, nódulos, higiene, docentes, evaluación
- **Schema:** `dateModified` 2026-10-15

**Objetivo:** Subir «rehabilitacion de la voz en profesionales» desde pos ~28; CTR > 3%

---

#### 9. `/voz-online/fatiga-vocal-tratamiento-online`
**Métricas GSC previas:** 27 imp, 0 clics, pos 8,9

**Cambios:**
- **Title:** `"Fatiga Vocal: ¿Por qué se me cansa la voz? Tratamiento Online"` → `"¿Por qué se me cansa la voz? Fatiga vocal online"`
- **H1:** `"¿Por qué se me cansa la voz?"` + caja con la definición ya publicada
- **Enlaces:** higiene, nódulos, docentes, evaluación
- **Schema:** `dateModified` 2026-10-15

**Objetivo CTR:** > 3%

---

#### 10. `/voz-online/nodulos-vocales-tratamiento-online`
**Métricas GSC previas:** 23 imp, 1 clic, pos 8,3

**Cambios:**
- **Title:** `"Nódulos Vocales: Tratamiento Online | ¿Se pueden curar sin cirugía?"` → `"Nódulos Vocales: ¿Se curan sin cirugía? | Online"`
- **H1:** `"¿Se pueden tratar los nódulos vocales sin cirugía?"` + caja (terapia como primera línea, hecho ya en la FAQ)
- **Enlaces:** voz ronca, higiene, fatiga, evaluación
- **Schema:** `dateModified` 2026-10-15

**Objetivo CTR:** > 4%

---

#### 11. `/voz-online/evaluacion-vocal-online`
**Métricas GSC previas:** 16 imp, 0 clics, pos 6,0

**Cambios:**
- **Title:** `"Evaluación Vocal Online | ¿Qué incluye el diagnóstico de voz?"` → `"Evaluación Vocal Online | Qué incluye el diagnóstico"`
- **Description / H1 / caja:** La primera frase lista anamnesis, GRBAS/CAPE-V, acústico, tiempos de fonación, s/z e informe (ya estaba en la FAQ, no en el H1)
- **Enlaces:** voz ronca, fatiga, nódulos
- **Schema:** `WebPage` `dateModified` 2026-10-15

**Objetivo CTR:** > 4% en pos ~6 (hoy 0%)

---

#### 12. `/voz-online/voz-ronca-causas-tratamiento`
**Métricas GSC previas:** 14 imp, 0 clics, pos 10,1

**Cambios:**
- **Title:** `"Voz Ronca: ¿Por qué y qué hacer? Tratamiento Online Chile"` → `"¿Por qué tengo la voz ronca? Causas y qué hacer"`
- **H1:** `"¿Por qué tengo la voz ronca?"` + caja (vibración asimétrica, >2 semanas, causas ya listadas)
- **Enlaces:** fatiga y docentes
- **Schema:** `dateModified` 2026-10-15

**Objetivo CTR:** > 3%

---

#### 13. `/voz-online/terapia-vocal-docentes-profesores` (light touch)
**Métricas GSC previas:** 16 imp, 2 clics, pos 7,6

**Cambios:** Title y H1 sin cambio (ya convierten). Caja de respuesta con lo que ya dice la FAQ (proyección sin gritar, higiene, calentamiento, horario escolar). Enlaces a higiene, rehabilitación de profesionales y fatiga. `dateModified` 2026-10-15. Se conserva el 58% ASHA ya publicado.

**Objetivo:** Mantener CTR alto (> 10%)

### Métricas esperadas

**Medición ~2026-10-29 al 2026-11-05 (14-21 días post-indexación):**

- `/agendar-hora-fonoaudiologo-infantil-chillan`: ≥1 clic (CTR > 2% sobre ~164 imp/90d)
- `/tratamientos/tel-trastorno-especifico-lenguaje-chillan`: ≥1 clic; pos < 15 en «tel»
- `/glosario/tel`: ≥1 clic
- `/servicios/tea-trastorno-espectro-autista`: ≥2 clics
- `/voz-online/evaluacion-vocal-online`: ≥1 clic
- `/voz-online/paralisis-cordal-rehabilitacion-online`: no perder los ~5 clics / 90d
- Totales sitio: mantener o mejorar 10 clics / 597 imp semanales

### Siguientes pasos

1. Pedir indexación en GSC de las 13 URLs
2. No reescribir estas páginas ni las de Lotes 4-8 hasta el corte (~2026-10-29)
3. Lote 10 candidato: páginas con impresiones que este lote no tocó (ver ideas en el informe del lote, no en URLs de ciudad ni ads)

---

## 2026-10-13: SEO Lote 8 — Segundo pase data-driven en páginas Lote 2 (7 días)

### Contexto

**Datos GSC (90 días 2026-07-15 al 2026-10-12, dataState=all; pull 10-13 no posible por OAuth expirado):**
- **87 clics totales**
- **5.146 impresiones**
- **CTR promedio: 1,7%**
- **Posición promedio: 8,0**

**Datos últimos 7 días (2026-10-06 al 2026-10-12):** 7 clics / 542 imp / pos 8,2 vs 7 días previos: 6 / 605 / pos 7,5

**Páginas congeladas (Lotes 3-7, city pages de voz-online, `/ads`, `/sitelink`):** Sin cambios. Relacionadas TEL/evaluación listadas en el brief tampoco se editaron (`/tratamientos/tel-trastorno-especifico-lenguaje-chillan`, `/glosario/tel`, `/comparaciones/tel-vs-retraso-del-lenguaje`, `/evaluacion-fonoaudiologica-infantil-chillan`, `/recursos/primera-evaluacion-fonoaudiologica-infantil`).

**Problema detectado (páginas Lote 2, ~7 días post-cambio):**
1. `/recursos/estimular-lenguaje-en-casa`: 302 imp / 4 clics / pos 14,8. Query «estimulación del lenguaje» 55 imp pos 34; cluster «cómo hacer/empezar terapia de lenguaje en casa» pos 9-16 con 0 clics.
2. `/servicios/tel-trastorno-especifico-lenguaje`: 82 imp / 0 clics / pos 10,7. «el tel se cura» 22 imp pos 9,4; «tel diagnostico» sin captura.
3. `/voz-online/fonoaudiologa-de-voz-online`: 262 imp / 9 clics / pos 8,6; 7d 0/35. Queries «fonoaudiólogo especialista en voz», «fonoaudiologo online», «fonoaudiologia voz». H1 previo no tenía keyword.
4. `/servicios/evaluacion-fonoaudiologica`: 119 imp / 1 clic / pos 9,9. Query exacta «evaluacion fonoaudiologica» 36 imp pos 18.
5. `/sobre-katia-dominguez-fonoaudiologa-chillan`: 208 imp / 3 clics / pos 6,5. «katia dominguez» pos 11 (home gana); «fonoaudiologo chillan» pos 55.
6. Síntomas Lote 2 con casi nulas impresiones: `/sintomas/nino-no-entiende-instrucciones-chillan` (42 imp pos 5,4), `/sintomas/mi-hijo-no-habla-bien-chillan` (28 imp pos 5,8), `/sintomas/hijo-no-arma-frases-chillan` (26 imp pos 5,8).

**Objetivo:** Query-match on-page (title/H1/H2/FAQ/snippet) sin inventar datos clínicos, duraciones ni NAP. Medir 14-21 días post-indexación.

### Páginas optimizadas

#### 1. `/recursos/estimular-lenguaje-en-casa`
**Métricas GSC previas:** 302 imp 90d, 4 clics, pos 14,8; 7d 0/25

**Cambios:**
- **Title:** `"¿Cómo Empezar a Estimular el Lenguaje en Casa? Guía Práctica"` → `"Estimulación del Lenguaje en Casa | Terapia de Lenguaje"`
- **Description / H1:** Incluyen «estimulación del lenguaje» y «cómo hacer terapia de lenguaje en casa»
- **Contenido:** Caja de respuesta rápida; H2 «¿Qué es la estimulación del lenguaje?» y «¿Cómo hacer terapia de lenguaje en casa?» (reutiliza pautas ya existentes: seguir atención, modelar, expandir, no interrogar)
- **FAQ:** Añadidas las 3 queries GSC; se mantiene el dato ya publicado de 15-20 minutos (no se inventó duración nueva)
- **Schema:** `dateModified` 2026-10-13
- **Enlaces:** Terapia de lenguaje infantil + evaluación

**Objetivo:** Bajar de pos ~34 en «estimulación del lenguaje» y capturar el cluster «terapia de lenguaje en casa» (CTR > 2%)

---

#### 2. `/servicios/tel-trastorno-especifico-lenguaje`
**Métricas GSC previas:** 82 imp, 0 clics, pos 10,7 — «el tel se cura» 0/22 pos 9,4

**Cambios:**
- **Title:** `"TEL: ¿Se Cura? Tratamiento del Trastorno Específico del Lenguaje — Chillán"` → `"¿El TEL Se Cura? Diagnóstico y Tratamiento | Chillán"`
- **Description / H1 / caja de respuesta:** «El TEL no se cura» + mejora con terapia intensiva (copy ya existente)
- **Contenido:** Sección «¿Cómo se diagnostica el TEL?» con hechos ya en la página (evaluación, sin causa evidente, inteligencia conservada)
- **FAQ + schema:** «¿Qué es el TEL?» visible; «¿Cómo se diagnostica el TEL?»
- **Enlaces:** A `/glosario/tel` y `/comparaciones/tel-vs-retraso-del-lenguaje` (páginas no editadas)
- **No se añadieron** porcentajes, duraciones ni tests nuevos; se conservan 7% y 1-3 años ya publicados

**Objetivo CTR:** > 3% en «el tel se cura»; visibilidad en «tel diagnostico»

---

#### 3. `/voz-online/fonoaudiologa-de-voz-online`
**Métricas GSC previas:** 262 imp, 9 clics, pos 8,6; 7d 0/35

**Cambios:**
- **Title:** `"Fonoaudióloga de Voz Online — Todo Chile, 100% por Videollamada"` → `"Fonoaudióloga Especialista en Voz Online | Todo Chile"`
- **H1:** De copy emocional sin keyword a `"Fonoaudióloga especialista en voz online para todo Chile"` (el gancho emocional queda como subtítulo)
- **Keywords / body:** «fonoaudiólogo especialista en voz», «fonoaudiologo online», «fonoaudióloga online», «fonoaudiologia voz»
- **FAQ:** Qué hace una especialista en voz; atención online en todo Chile
- **No se editaron** landings de ciudad (`/voz-online/fonoaudiologa-voz-*`)

**Objetivo:** Subir «fonoaudiologo online» (pos ~20) y «especialista en voz» (pos ~11); CTR > 3%

---

#### 4. `/servicios/evaluacion-fonoaudiologica`
**Métricas GSC previas:** 119 imp, 1 clic, pos 9,9 — query exacta pos 18,1 (36 imp)

**Cambios:**
- **Title:** `"Evaluación Fonoaudiológica Infantil en Chillán — 60 min + Informe"` → `"Evaluación Fonoaudiológica: Qué Es, 60 min e Informe | Chillán"`
- **H1:** `"Evaluación fonoaudiológica: qué es y cómo se hace en Chillán"`
- **Contenido:** Caja de respuesta + H2 «¿Qué es una evaluación fonoaudiológica?» (60 min, informe para el colegio: datos ya en FAQ)
- **No se editaron** `/evaluacion-fonoaudiologica-infantil-chillan` ni `/recursos/primera-evaluacion-fonoaudiologica-infantil`

**Objetivo ranking:** Top 10 en «evaluacion fonoaudiologica» (desde pos ~18)

---

#### 5. `/sobre-katia-dominguez-fonoaudiologa-chillan`
**Métricas GSC previas:** 208 imp, 3 clics, pos 6,5 — «fonoaudiologo chillan» pos 55

**Cambios:**
- **Title:** `"Katia Domínguez, Fonoaudióloga Infantil en Chillán"` → `"Katia Domínguez, Fonoaudióloga en Chillán | Fonoaudiólogo Infantil"`
- **Keywords:** «katia dominguez» sin tilde; «fonoaudiologo chillan»
- **Cuerpo:** U. de Chile + postítulo en trastorno fonológico (ya en home); horario lun–vie 10:00–18:00 desde `lib/site.ts`; 5,0 / 42 reseñas desde `lib/google-reviews.ts`
- **FAQ:** «¿Quién es Katia Domínguez?»; «¿Hay fonoaudiólogo en Chillán para niños?»
- **No se inventó** calle, precios ni credenciales nuevas

**Objetivo:** Visibilidad en «fonoaudiologo chillan» (desde pos 55); marca «katia dominguez» sin canibalizar de más la home

---

#### 6–8. Síntomas Lote 2 (baja impresión, pos ~5-6)

**`/sintomas/nino-no-entiende-instrucciones-chillan`** (42 imp): caja de respuesta comprensión vs atención; H2 «qué puede estar pasando» con contenido (ya no solo un párrafo de links); FAQ «¿Qué hago si mi hijo no entiende lo que le digo?»

**`/sintomas/mi-hijo-no-habla-bien-chillan`** (28 imp): caja de respuesta; bloques «no se le entiende» / «habla como bebé» / habla vs lenguaje (hechos ya en FAQ)

**`/sintomas/hijo-no-arma-frases-chillan`** (26 imp): caja de respuesta con hito 18-24 meses ya publicado; se corrigió el enlace interno que apuntaba a sí mismo → `/sintomas/mi-hijo-no-habla-bien-chillan`; enlace a estimular en casa

**Objetivo:** Ampliar cobertura de queries hermanas (impresiones) manteniendo pos top ~5-6; CTR > 3%

### Métricas esperadas

**Medición 14-21 días (post-indexación ~2026-10-27 al 2026-11-03):**

- `/recursos/estimular-lenguaje-en-casa`: pos < 20 en «estimulación del lenguaje»; ≥1 clic en cluster «terapia de lenguaje en casa»
- `/servicios/tel-trastorno-especifico-lenguaje`: ≥1 clic en «el tel se cura»
- `/voz-online/fonoaudiologa-de-voz-online`: pos < 15 en «fonoaudiologo online» / «especialista en voz»
- `/servicios/evaluacion-fonoaudiologica`: pos < 12 en «evaluacion fonoaudiologica»
- `/sobre-katia-dominguez-fonoaudiologa-chillan`: impresiones en «fonoaudiologo chillan»
- Totales sitio: mantener o mejorar 7 clics / 542 imp semanales

### Siguientes pasos

1. Solicitar indexación GSC de las 8 URLs
2. No tocar estas páginas ni las de Lotes 3-7 hasta el siguiente corte (~14-21 días)

---

## 2026-10-12: SEO Lote 7 — Segundo pase data-driven en páginas Lote 1 (7 días) + linking interno

### Contexto

**Datos GSC (90 días 2026-07-15 al 2026-10-12):**
- **87 clics totales**
- **5.146 impresiones**
- **CTR promedio: 1,7%**
- **Posición promedio: 8,0**

**Datos últimos 7 días (2026-10-06 al 2026-10-12):** 7 clics / 542 imp / pos 8,2 vs 7 días previos (2026-09-29 al 2026-10-05): 6 clics / 605 imp / pos 7,5

**Páginas congeladas (Lotes 2-6, desde 2026-10-06):** Mantener sin cambios para medir impacto. Solo optimizar páginas Lote 1 (2026-10-05, ahora con 7 días de indexación) y agregar enlaces desde Lote 1.

**Problema detectado:**
1. `/recursos/hitos-del-lenguaje-por-edad`: 451 imp en 90d, **0 clics**, pos ~9-10 en query principal "a que edad hablan los niños" (173 imp, pos 9.9). Múltiples variantes ("a qué edad hablan los bebés", "cuantas palabras por edad", "cuando hablan fluido", "primeras palabras"). Necesita respuesta directa para featured snippet, tabla de hitos, secciones matching queries y FAQ expandido.
2. `/fonoaudiologa-ninos-chillan`: Compite con home en queries genéricas ("fonoaudiólogo", "fonoaudióloga") pero rankea mal en su query objetivo "fonoaudiología infantil" (pos 17-26) y "fonoaudiólogo infantil chillán". Necesita diferenciación clara hacia fonoaudiología infantil.
3. **Linking interno:** Páginas Lote 1 no enlazan suficientemente entre sí ni a páginas de comparación Lote 6.

**Objetivo:** Mejorar ranking y CTR en hitos (objetivo top 5, > 1% CTR), diferenciar pilar infantil hacia su query objetivo, fortalecer red de enlaces internos desde Lote 1.

### Páginas optimizadas

#### 1. `/recursos/hitos-del-lenguaje-por-edad`
**Métricas GSC previas:** 451 imp en 90d, 0 clics, pos 9.9 (query "a que edad hablan los niños" 173 imp)

**Cambios:**
- **Contenido:**
  - Agregada **caja de respuesta rápida** al inicio: "Los niños suelen decir sus primeras palabras entre los 11 y 14 meses, a los 2 años combinan unas 50 palabras en frases de dos palabras…" (optimizada para featured snippet)
  - Agregada **tabla resumen de hitos** con columnas: Edad / Palabras aproximadas / Frases-Comprensión / Inteligibilidad (12m, 18m, 2a, 3a, 4a, 5a)
  - Agregada sección **"¿A qué edad los niños hablan bien (con fluidez)?"** matching query variant
  - Agregada sección **"¿Cuántas palabras debería decir mi hijo por edad?"** con lista por edad (12m: 1-2 palabras; 18m: 10-20; 2a: ~50; 2.5a: 200-300; 3a: 500-1000; 4-5a: miles)
- **FAQ:** Agregadas preguntas adicionales: "¿A los cuántos años habla un niño?", "¿A qué edad los niños dicen sus primeras palabras?" (matching variantes de búsqueda)
- **Schema:** Actualizado `dateModified` a 2026-10-12
- **Title/description:** Mantenidos (ya optimizados en Lote 1)

**Objetivo CTR:** > 1% en 21 días, objetivo ranking top 5 para query principal

---

#### 2. `/fonoaudiologa-ninos-chillan`
**Métricas GSC previas:** 185 imp, 0 clics en query objetivo "fonoaudiología infantil" (pos 17.6)

**Cambios:**
- **Title:** `"Fonoaudióloga Infantil en Chillán | Especialista en Niños"` → `"Fonoaudiología Infantil en Chillán | Fonoaudióloga Especialista en Niños"` (query objetivo al inicio)
- **Description:** Expandida con "fonoaudiología infantil en Chillán: evaluación y terapia de lenguaje, habla, pronunciación, lectoescritura, TEL y TDL para niños…"
- **H1:** `"Fonoaudióloga infantil en Chillán para niños"` → `"Fonoaudiología infantil en Chillán"` (foco en query objetivo)
- **Contenido:**
  - Agregada sección completa **"¿Qué es la fonoaudiología infantil?"** con 4 bloques: Lenguaje (comprensión/expresión), Habla y pronunciación, Lectoescritura, TEL/TDL y otras dificultades
  - Cada bloque enlaza a páginas de tratamiento/servicio relevantes (retraso-lenguaje, TEL, dislalia, trastorno-fonologico, retraso-habla, apraxia, lectoescritura, conciencia-fonologica, dislexia, TEA, informe PIE)

**Objetivo ranking:** Mejorar de pos 17-26 a top 10 en "fonoaudiología infantil (Chillán)" en 21 días

---

#### 3. Linking interno desde páginas Lote 1

**Cambios en home (`/`):**
- Agregado enlace contextual a `/fonoaudiologa-ninos-chillan` con anchor "fonoaudiología infantil en Chillán" en sección About
- Ya existía enlace a `/recursos/hitos-del-lenguaje-por-edad` en sección servicios

**Cambios en `/servicios`:**
- Agregados enlaces a comparaciones Lote 6 en párrafo relacionados: `/comparaciones/dislalia-vs-trastorno-fonologico`, `/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje`, `/comparaciones/tel-vs-retraso-del-lenguaje`
- Ya existía enlace a hitos del lenguaje

**Cambios en `/tratamientos/retraso-del-lenguaje-chillan`:**
- Agregados 3 enlaces en sección "Recursos relacionados":
  - `/recursos/hitos-del-lenguaje-por-edad` (Hitos del lenguaje)
  - `/comparaciones/tel-vs-retraso-del-lenguaje` (TEL vs Retraso lenguaje)
  - `/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje` (Habla vs Lenguaje)

**Cambios en `/tratamientos/trastorno-fonologico-chillan`:**
- Agregados 2 enlaces en sección "Recursos relacionados":
  - `/recursos/hitos-del-lenguaje-por-edad` (Hitos del lenguaje)
  - `/comparaciones/dislalia-vs-trastorno-fonologico` (Dislalia vs Trastorno fonológico)

**Páginas editadas sin cambio de metadata:** `/` (home), `/servicios`, `/tratamientos/retraso-del-lenguaje-chillan`, `/tratamientos/trastorno-fonologico-chillan`

### Métricas esperadas

**Objetivos de medición 14-21 días (post-indexación ~2026-10-19 al 2026-10-26):**

- **`/recursos/hitos-del-lenguaje-por-edad`:**
  - CTR > 1% (actual: 0%)
  - Ranking top 5 para "a que edad hablan los niños" (actual: pos 9.9)
  - Al menos 3-5 clics semanales
- **`/fonoaudiologa-ninos-chillan`:**
  - Ranking < 10 para "fonoaudiología infantil" (actual: pos 17.6)
  - Al menos 1 clic en query objetivo
- **Comparaciones Lote 6:**
  - Activación con primeras impresiones (actualmente 0 imp)
- **Totales sitio:**
  - Mantener o mejorar 7 clics / 542 imp semanales
  - Consolidar pos 8.0 o mejorar

---

## 2026-10-11: SEO Lote 6 — Comparaciones, glosario zero-imp, hubs y páginas sin impresiones

### Contexto

**Datos GSC (90 días 2026-07-11 al 2026-10-08):**
- **85 clics totales**
- **5.112 impresiones**
- **CTR promedio: 1,66%**
- Posición promedio: 8,0

**Datos últimos 7 días (10-02 al 10-08):** 5 clics / 629 imp / pos 7,95 vs 7 días previos 9 / 589 / pos 8,2

**Páginas congeladas (Lotes 1-5):** Home, pilar infantil, todos los recursos previos, agendar-hora, servicios principales (evaluacion-fonoaudiologica, tel, terapia-lenguaje-infantil, trastornos-del-habla, tea, dificultades-lectoescritura, test-de-lenguaje, evaluacion-lenguaje, terapia-del-habla, conciencia-fonologica, informe-pie), sobre-katia, todos los tratamientos previos (tel, dislalia, trastorno-fonologico, retraso-lenguaje, retraso-habla, apraxia), glosario dinámicos previos (dislalia, tel, retraso-habla, tea, trastorno-fonologico, retraso-lenguaje, conciencia-fonologica, disfasia, disartria, apraxia-del-habla, disfemia, dislexia, praxias-orofaciales, logopeda), todos /chillan/* previos (dislalia, tel, apraxia, dislexia, lectoescritura, disfemia, tea-comunicacion), todos /sintomas/* previos (mi-hijo-no-habla-bien, nino-pronuncia-mal, hijo-habla-poco-edad, hijo-no-arma-frases, nino-no-entiende-instrucciones, nino-tartamudea, mi-hijo-no-comprende), voz-online previos (todos excepto tratamiento-disfonia).

**Problema detectado:** Hub `/comparaciones` y páginas hijas con **0 impresiones en 90 días**. Múltiples términos glosario (trastorno-fonologico, retraso-lenguaje, conciencia-fonologica, disfasia, disartria, apraxia, disfemia, praxias, tdl) con **0 impresiones**. Páginas de servicio (`/recursos/senales-alerta`, `/servicios/estimulacion-temprana-chillan`, `/evaluacion-del-habla-infantil-chillan`, `/evaluacion-fonoaudiologica-infantil-chillan`, `/contacto-fonoaudiologa-chillan`), hubs `/chillan` y `/sintomas`, y patologías chillan `retraso-del-habla` y `trastorno-fonologico` sin impresiones. `/voz-online/tratamiento-disfonia-online` no trabajado en lotes previos.

**Objetivo:** Activar páginas con 0 impresiones mediante títulos query-matched ("diferencia entre X y Y", "¿Qué es X?"), descriptions con ejemplos concretos, FAQs con FAQPage schema, tablas comparativas, enlaces internos a páginas de servicio/tratamiento y contenido diferenciado por intent (definición vs tratamiento vs señales).

### Páginas optimizadas

#### 1. `/comparaciones` — Hub comparaciones
**Métricas GSC previas:** 0 imp en 90 días

**Cambios:**
- **Title:** `"Comparaciones clínicas | Fonoaudiología infantil Chillán"` → `"Diferencia entre... | Comparaciones Fonoaudiología Infantil Chillán"`
- **Description:** Expandida con "Diferencia entre dislalia y trastorno fonológico, TEL vs retraso del lenguaje, retraso del habla vs lenguaje. Tabla comparativa, señales y cuándo consultar en Chillán."
- **Keywords:** Añadido "diferencia entre dislalia trastorno fonológico", "TEL vs retraso del lenguaje", "retraso del habla vs retraso del lenguaje", "comparación fonoaudiología"
- **H1:** Reforzado con pregunta "¿Cuál es la diferencia entre...?"
- **Objetivo:** Capturar queries "diferencia entre X y Y" con hub claro

**Objetivo CTR:** > 2% en 21 días (nueva, activar con query match)

---

#### 2. `/comparaciones/dislalia-vs-trastorno-fonologico`
**Métricas GSC previas:** 0 imp

**Cambios:**
- **Title:** `"Dislalia vs Trastorno Fonológico | Diferencias y Cuándo Consultar"` → `"Diferencia entre Dislalia y Trastorno Fonológico | Tabla Comparativa"`
- **Description:** Query exacta "¿Cuál es la diferencia entre dislalia y trastorno fonológico? Tabla comparativa, ejemplos, señales por edad y cuándo consultar fonoaudióloga en Chillán."
- **Keywords:** Añadido "diferencia entre dislalia y trastorno fonológico", "comparación dislalia trastorno fonológico"
- **Contenido:** Tabla comparativa ya presente, FAQPage schema ya presente, enlaces internos OK
- **Objetivo:** Capturar queries "diferencia entre dislalia y trastorno fonológico"

**Objetivo CTR:** > 3% en 21 días

---

#### 3. `/comparaciones/tel-vs-retraso-del-lenguaje`
**Métricas GSC previas:** 0 imp

**Cambios:**
- **Title:** `"TEL vs Retraso del Lenguaje | Diferencias y Cuándo Consultar"` → `"Diferencia entre TEL y Retraso del Lenguaje | ¿Es transitorio o persistente?"`
- **Description:** Query "¿Cuál es la diferencia entre TEL y retraso del lenguaje? Tabla comparativa, evolución, prevalencia y cuándo evaluar con fonoaudióloga en Chillán."
- **Keywords:** Añadido "diferencia entre TEL y retraso del lenguaje", "cuándo TEL cuándo retraso lenguaje"
- **Objetivo:** Diferenciación transitorio (retraso) vs persistente (TEL)

**Objetivo CTR:** > 3% en 21 días

---

#### 4. `/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje`
**Métricas GSC previas:** 0 imp

**Cambios:**
- **Title:** `"Retraso del Habla vs Retraso del Lenguaje | Diferencias"` → `"Diferencia entre Retraso del Habla y Retraso del Lenguaje | Tabla"`
- **Description:** Query "¿Cuál es la diferencia entre retraso del habla y del lenguaje? Tabla comparativa: pronunciación vs vocabulario/frases, ejemplos, señales y evaluación en Chillán."
- **Keywords:** Añadido "diferencia entre retraso del habla y lenguaje", "pronunciación vs vocabulario niños"
- **Objetivo:** Tabla clarifica pronunciación (habla) vs vocabulario/comprensión (lenguaje)

**Objetivo CTR:** > 3% en 21 días

---

#### 5. Glosario términos — Titles "¿Qué es X?" y descriptions con definición
**Métricas GSC previas:** 0 imp en 90 días cada uno

**Cambios globales:**
- **Patrón title:** Cambiado a formato "¿Qué es X? | [aspecto diferenciador]" para capturar featured snippets
- **Patrón description:** Iniciado con "Definición de X:" seguido de características, diferencias y cuándo evaluar
- **Keywords:** Añadido "qué es X", "X definición", "definición X" y diferenciaciones clave

**Términos optimizados:**
- `/glosario/trastorno-fonologico`: Title "¿Qué es el Trastorno Fonológico? | Patrones de error del habla"; description con "patrones sistemáticos de errores (omisiones, sustituciones)", diferencia con dislalia
- `/glosario/retraso-del-lenguaje`: Title "¿Qué es el Retraso del Lenguaje? | Definición, señales y hitos"; description con "desarrollo más lento (vocabulario, frases, comprensión)", diferencia con TEL
- `/glosario/conciencia-fonologica`: Title "¿Qué es la Conciencia Fonológica? | Rimas, sílabas y fonemas"; description con "habilidad para reconocer sonidos sin leer", base lectoescritura
- `/glosario/disfasia`: Title "¿Qué es la Disfasia? | Término antiguo para TEL/TDL"; description con "nombre tradicional del TEL", relación con TDL
- `/glosario/disartria`: Title "¿Qué es la Disartria? | Alteración neuromuscular del habla"; description con "alteración de músculos (labios, lengua)", diferencia con dislalia
- `/glosario/apraxia-del-habla`: Title "¿Qué es la Apraxia del Habla Infantil? | AHS Definición"; description con "dificultad para programar movimientos", errores inconsistentes
- `/glosario/disfemia`: Title "¿Qué es la Disfemia? | Tartamudez Definición y Señales"; description con "alteración de fluidez (repeticiones, prolongaciones, bloqueos)", cuándo intervenir
- `/glosario/praxias-orofaciales`: Title "¿Qué son las Praxias Orofaciales? | Ejercicios boca y lengua"; description con "ejercicios para fortalecer labios, lengua", cuándo se usan
- `/glosario/tdl` (no editable, estático): Ya optimizado en glosario/tdl/page.tsx previo

**Objetivo CTR:** > 2,5% en 21 días (definiciones orientadas a snippets)

---

#### 6. `/recursos/senales-de-alerta-del-lenguaje-y-habla`
**Métricas GSC previas:** 0 imp

**Cambios:**
- **Title:** `"Señales de Alerta del Lenguaje y el Habla en Niños"` → `"Señales de Alerta del Lenguaje y Habla en Niños por Edad | Chillán"`
- **Description:** Expandida con "Señales de alerta del lenguaje y habla por edad (0-5 años): cuándo no responde al nombre, no arma frases, pronuncia mal. Checklist y cuándo evaluar en Chillán."
- **Keywords:** Añadido "señales de alerta habla por edad", "niño no responde al nombre", "no arma frases edad"
- **Contenido:** Ya tiene listas por edad (0-2, 2-3, 4-5 años), checklist práctico y FAQ con FAQPage schema
- **Objetivo:** Capturar queries "señales de alerta lenguaje" por edad específica

**Objetivo CTR:** > 3% en 21 días

---

#### 7. `/servicios/estimulacion-temprana-del-lenguaje-chillan`
**Métricas GSC previas:** 0 imp

**Cambios:**
- **Title:** `"Estimulación Temprana del Lenguaje en Chillán | 0 a 3 Años"` → `"Estimulación Temprana del Lenguaje Chillán | Profesional 0-3 Años"`
- **Description:** Reforzado "Estimulación profesional del lenguaje para bebés y niños 0-3 años en Chillán. Intervención fonoaudiológica presencial: balbuceo, primeras palabras, comprensión."
- **Keywords:** Añadido "estimulación del lenguaje profesional", "bebé no balbucea", "fonoaudióloga 0-3 años Chillán"
- **Objetivo:** Diferenciarse de guía DIY `/recursos/estimular-lenguaje-en-casa` (pos 34, 55 imp en lote anterior); esta es servicio profesional

**Objetivo CTR:** > 2% en 21 días

---

#### 8. `/servicios/evaluacion-del-habla-infantil-chillan`
**Métricas GSC previas:** 0 imp

**Cambios:**
- **Title:** `"Evaluación del Habla Infantil en Chillán | Pronunciación"` → `"Evaluación del Habla Infantil Chillán | Articulación y Pronunciación"`
- **Description:** Más específica "Evaluación específica del habla en Chillán: articulación, fonología, inteligibilidad, fluidez. Para niños con dislalia, trastorno fonológico o habla poco clara. Con informe."
- **Keywords:** Añadido "evaluación articulación niños", "evaluación fonología Chillán"
- **Objetivo:** Diferenciarse como evaluación específica del habla (no lenguaje general)

**Decisión:** **Se mantiene independiente** de `/servicios/evaluacion-fonoaudiologica` (general, lenguaje+habla+lectura, tocada en Lote 2) y `/evaluacion-fonoaudiologica-infantil-chillan` (general infantil, optimizada aquí). Intent distinto: esta es solo habla/articulación.

**Objetivo CTR:** > 2,5% en 21 días

---

#### 9. `/evaluacion-fonoaudiologica-infantil-chillan`
**Métricas GSC previas:** 0 imp

**Cambios:**
- **Title:** `"Evaluación Fonoaudiológica Infantil en Chillán | Lenguaje y Habla"` → `"Evaluación Fonoaudiológica Infantil Chillán | Lenguaje, Habla, Lectura"`
- **Description:** Reforzada como completa "Evaluación fonoaudiológica completa en Chillán: lenguaje (vocabulario, frases, comprensión), habla (articulación), fluidez, lectoescritura. Con informe para colegio/PIE."
- **Keywords:** Añadido "evaluación completa lenguaje Chillán", "informe fonoaudiológico PIE"
- **Objetivo:** Evaluación completa (lenguaje + habla + lectura), diferente de evaluación específica del habla

**Decisión:** **Se mantiene independiente** de `/servicios/evaluacion-fonoaudiologica` (servicio general sin geo, tocada en Lote 2) y `/servicios/evaluacion-del-habla-infantil-chillan` (solo habla, optimizada aquí). Intent distinto: esta es completa infantil en Chillán.

**Candidato consolidación:** Revisar post-Lote 6 si `/evaluacion-fonoaudiologica-infantil-chillan` y `/servicios/evaluacion-fonoaudiologica` (frozen) canibalizan. Diferenciación: una es geo Chillán infantil, otra es servicio general. Por ahora se mantienen separadas con cross-links claros.

**Objetivo CTR:** > 2,5% en 21 días

---

#### 10. `/contacto-fonoaudiologa-chillan`
**Métricas GSC previas:** 0 imp

**Cambios:**
- **Title:** `"Contacto Fonoaudióloga en Chillán | Agenda por WhatsApp"` → `"Contacto Fonoaudióloga Infantil Chillán | WhatsApp y Horarios"`
- **Description:** Más específica con datos reales "Contacto fonoaudióloga infantil en Chillán: WhatsApp 9 9549 7838, horario lunes-viernes 10:00-18:00. Cómo agendar evaluación, qué llevar, ubicación presencial Ñuble."
- **Keywords:** Añadido "WhatsApp fonoaudióloga Chillán", "horario fonoaudióloga infantil", "fonoaudióloga presencial Chillán"
- **Contenido:** Ya incluye LocalBusiness/MedicalBusiness schema con datos de `lib/site.ts` (NAP, horario, WhatsApp)
- **Objetivo:** Página de contacto clara con info práctica (horarios, cómo agendar, qué llevar)

**Objetivo CTR:** > 2% en 21 días

---

#### 11. `/chillan/retraso-del-habla`
**Métricas GSC previas:** 0 imp

**Cambios (overrides en chillan/[slug]/page.tsx):**
- **Title override:** Añadido `"Retraso del Habla Chillán | Niño habla poco o no se le entiende"`
- **Description override:** `"Habla poco o se le entiende mal para su edad: señales de retraso del habla en Chillán. Evaluación fonoaudiológica, articulación y claridad. Agenda por WhatsApp."`
- **Keywords override:** Añadido "niño habla poco edad", "no se le entiende al hablar", "claridad del habla niños"
- **Objetivo:** Diferenciarse de `/chillan/retraso-del-lenguaje` (frozen Lote 1): habla = pronunciación/claridad, lenguaje = vocabulario/frases

**Objetivo CTR:** > 2% en 21 días

---

#### 12. `/chillan/trastorno-fonologico`
**Métricas GSC previas:** 0 imp

**Cambios (overrides en chillan/[slug]/page.tsx):**
- **Title override:** Añadido `"Trastorno Fonológico Chillán | Patrones de error en sonidos"`
- **Description override:** `"Patrones de error en varios sonidos (omite, sustituye, simplifica): trastorno fonológico. Evaluación especializada en Chillán. Postítulo fonología. WhatsApp."`
- **Keywords override:** Añadido "patrones fonológicos", "errores fonológicos niños", "postítulo fonología"
- **Objetivo:** Diferenciarse de `/tratamientos/trastorno-fonologico-chillan` (frozen Lote 1) y `/glosario/trastorno-fonologico` (optimizado aquí): página local con señales específicas y CTA

**Objetivo CTR:** > 2% en 21 días

---

#### 13. `/chillan` — Hub patologías Chillán
**Métricas GSC previas:** 0 imp

**Cambios:**
- **Title:** `"Patologías del lenguaje y habla en Chillán"` → `"Tratamiento por Patología en Chillán | Fonoaudiología Infantil"`
- **Description:** Expandida con "Tratamiento fonoaudiológico en Chillán por patología: dislalia, TEL/TDL, retraso lenguaje/habla, trastorno fonológico, apraxia, dislexia, tartamudez, TEA. Presencial +20 años."
- **Keywords:** Añadido "tratamiento dislalia Chillán", "TEL Chillán", "trastorno fonológico Chillán", "fonoaudióloga patologías infantiles"
- **Objetivo:** Hub claro de tratamiento por patología en Chillán

**Objetivo CTR:** > 2% en 21 días

---

#### 14. `/sintomas` — Hub síntomas
**Métricas GSC previas:** 0 imp

**Cambios:**
- **Title:** `"Síntomas frecuentes en niños | Fonoaudiología Chillán"` → `"Síntomas Frecuentes en Niños | Mi hijo no habla bien, pronuncia mal..."`
- **Description:** Expandida con ejemplos "Guías por síntoma: hijo habla poco, pronuncia mal, no arma frases, no entiende instrucciones, tartamudea. Señales, causas y cuándo evaluar en Chillán."
- **Keywords:** Añadido "mi hijo no habla bien", "niño pronuncia mal", "hijo no arma frases", "síntomas habla infantil"
- **Objetivo:** Hub de síntomas con wording de padres

**Objetivo CTR:** > 2% en 21 días

---

#### 15. `/voz-online/tratamiento-disfonia-online`
**Métricas GSC previas:** 0 imp (no trabajado en lotes previos)

**Cambios:**
- **Title:** `"Tratamiento de Disfonía Online | Fonoaudióloga Chile"` → `"Tratamiento Disfonía Online Chile | ¿Ronquera persistente?"`
- **Description:** Query "Tratamiento de disfonía online para todo Chile: voz ronca, áspera o tensa que persiste. Rehabilitación vocal 100% por videollamada. Agenda evaluación hoy."
- **Keywords:** Añadido "disfonía tratamiento", "voz ronca tratamiento", "rehabilitación vocal online Chile"
- **Contenido:** Ya tiene FAQPage schema, testimonios, tipos de disfonía y proceso online
- **Objetivo:** Capturar queries "disfonía tratamiento" / "tratamiento disfonía online"

**Objetivo CTR:** > 2,5% en 21 días

---

#### 16. Redirect URL encoding — `/servicios/informe-fonoaudiológico-pie-chillan`
**GSC:** 1 impresión en variante con tilde (ya reportado en Lote 3)

**Verificación:** Redirect 301 ya presente en `next.config.ts` línea 108-111:
```typescript
{
  source: "/servicios/informe-fonoaudiológico-pie-chillan",
  destination: "/servicios/informe-fonoaudiologico-pie-chillan",
  permanent: true,
},
```

**Acción:** Ya resuelto. No requiere cambios.

---

### Otras mejoras transversales

1. **Títulos query-matched:** Hub `/comparaciones` y páginas hijas con "Diferencia entre X y Y" para capturar featured snippets comparativos
2. **Glosario definiciones:** Formato "¿Qué es X?" en titles para snippets informativos; descriptions iniciadas con "Definición de X:"
3. **Diferenciación intent:** Evaluación habla (articulación específica) vs evaluación completa (lenguaje+habla+lectura) vs servicio general evaluacion-fonoaudiologica (frozen)
4. **Estimulación profesional vs DIY:** `/servicios/estimulacion-temprana-chillan` (servicio) claramente diferenciada de `/recursos/estimular-lenguaje-en-casa` (guía padres, frozen)
5. **Hubs activados:** `/comparaciones`, `/chillan` y `/sintomas` con keywords de páginas hijas y wording de padres
6. **Datos reales en contacto:** WhatsApp, horarios, ubicación desde `lib/site.ts` (no inventados)
7. **Cross-links:** Comparaciones → glosario + tratamiento; glosario → tratamiento Chillán + servicio; chillan patologías → glosario + servicio
8. **FAQPage schema:** Ya presente en todas las comparaciones y glosario; contenido específico por página

### Candidatos a consolidación (para Gonzalo)

1. **`/evaluacion-fonoaudiologica-infantil-chillan`** vs **`/servicios/evaluacion-fonoaudiologica`** (frozen Lote 2):
   - Posible overlap: ambas son evaluación completa de lenguaje y habla
   - Diferenciación aplicada: una es geo Chillán infantil específica; otra es servicio general sin geo
   - Evaluar post-Lote 6 si vale la pena dos páginas o consolidar en una sola con variaciones geo
   - Por ahora se mantienen separadas con cross-links claros

### Métricas a monitorear (GSC)

**Periodo de medición:** 14-21 días post-indexación (desde 2026-10-11)

**KPIs Lote 6:**
1. **CTR general del sitio:** objetivo > 1,8% (baseline 1,66%)
2. **Impresiones páginas 0-imp:** objetivo > 10 imp cada una en 21 días (baseline 0, activación)
3. **CTR `/comparaciones/*` (hub + 3 hijas):** objetivo > 2,5% (nuevas, query "diferencia entre")
4. **CTR glosario optimizados (8 términos):** objetivo > 2,5% (definiciones snippet)
5. **CTR `/recursos/senales-alerta`:** objetivo > 3% (checklist por edad)
6. **CTR hubs (`/chillan`, `/sintomas`):** objetivo > 2% (activación)
7. **Clics totales:** objetivo estable o +5% sobre baseline 85 clics/90d (páginas nuevas sumando)

**URLs a seguir de cerca:**
- `/comparaciones/dislalia-vs-trastorno-fonologico` (esperado 1-2 imp iniciales, CTR 2,5%)
- `/comparaciones/tel-vs-retraso-del-lenguaje` (esperado 1-2 imp, CTR 2,5%)
- `/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje` (esperado 1-2 imp, CTR 2,5%)
- Glosario `/trastorno-fonologico`, `/retraso-lenguaje`, `/conciencia-fonologica` (esperado 2-5 imp cada uno, snippets)
- `/recursos/senales-de-alerta-del-lenguaje-y-habla` (esperado 5-10 imp, checklist)
- `/servicios/estimulacion-temprana-del-lenguaje-chillan` (esperado 3-5 imp, servicio profesional)
- `/contacto-fonoaudiologa-chillan` (esperado 2-3 imp, contacto local)
- `/voz-online/tratamiento-disfonia-online` (esperado 3-5 imp, query "disfonía tratamiento")

### Siguientes pasos

1. **Post-deploy:**
   - Solicitar indexación manual en GSC para las 30+ URLs optimizadas (comparaciones, glosario, servicios, hubs)
   - Validar que los cambios de metadata se reflejan en SERPs (inspeccionar URL)
   - Verificar que tablas comparativas renderizan correctamente en mobile

2. **Monitoreo:**
   - Revisar GSC en 7 días (primeras impresiones de páginas 0-imp)
   - Revisar GSC en 14-21 días (medición completa activación)
   - Comparar impresiones 0 → X para cada página optimizada
   - Monitorear si query "diferencia entre X y Y" captura comparaciones

3. **Ideas Lote 7 (post-21d, esperar medición):**
   - Si páginas 0-imp siguen sin impresiones: revisar canonical, sitemap, estructura de URL
   - Si `/comparaciones` activa bien: considerar más comparaciones (ej. "apraxia vs dislalia", "trastorno fonológico vs retraso del habla")
   - Si glosario snippets capturan: añadir DefinedTerm schema explícito (no presente en formato actual)
   - Revisar candidato consolidación `/evaluacion-fonoaudiologica-infantil-chillan` vs `/servicios/evaluacion-fonoaudiologica`
   - Otras páginas sitemap con 0 imp aún no tocadas (si las hay)

---

## 2026-10-09: SEO Lote 5 — Recursos hub, TEA comunicación, páginas de baja visibilidad y nuevo glosario

### Contexto

**Datos GSC (90 días 2026-07-11 al 2026-10-08):**
- **82 clics totales**
- **5.004 impresiones**
- **CTR promedio: 1,6%**
- Posición promedio: 8,0

**Datos últimos 7 días (2026-10-02 al 10-08):** 2 clics / 521 imp / pos 8,1 vs 7 días previos (9-25 al 10-01): 9 clics / 589 imp / pos 8,2

**Páginas congeladas (Lotes 1-4):** Home, pilar infantil, todos los recursos, agendar-hora, servicios principales, sobre-katia, todos los tratamientos previos (TEL, dislalia, trastorno fonológico, retraso del lenguaje, apraxia), glosario/tel/dislalia/dislexia, todos /chillan/* excepto tea-comunicacion, todos /sintomas/* excepto mi-hijo-no-comprende, todas /voz-online/*.

**Problema detectado:** 
1. `/recursos` (43 imp, pos 11.8, 1 click): hub sin schema CollectionPage ni intro optimizada para "guías/recursos fonoaudiología infantil padres".
2. `/chillan/tea-comunicacion` (18 imp, pos 9, 0 clicks): query "katya dominguez" aterriza aquí; necesita diferenciación vs servicio general TEA, title/description para padres buscando "comunicación lenguaje niños TEA/autismo Chillán", FAQs específicas.
3. **Páginas de baja visibilidad (1-7 imp cada una):** test-de-lenguaje, terapia-del-habla, evaluacion-del-lenguaje, conciencia-fonologica (servicios Chillán), retraso-del-habla (tratamiento), mi-hijo-no-comprende (síntoma) — algunas sin diferenciación clara vs páginas congeladas.
4. **Queries logopeda:** "logopeda" (35 imp), "logopedia" (27), "logopeda infantil" (5) aterrizan en home con 0 clicks — necesitan página glosario explicando término España vs Chile.

**Objetivo:** Sharpear hub recursos con schema, diferenciar TEA local, optimizar páginas de baja visibilidad con titles/descriptions únicos (o marcar consolidación si canibalizan), capturar queries "logopeda" con nuevo glosario.

### Páginas optimizadas

#### 1. `/recursos` — Hub recursos padres
**Métricas GSC previas:** 43 imp, pos 11.8, 1 click

**Cambios:**
- **Title:** `"Guías lenguaje infantil | Recursos para padres Chillán"` → `"Recursos y Guías Fonoaudiología Infantil | Padres Chillán"`
- **Description:** Expandida con "Guías prácticas de fonoaudiología infantil para padres en Chillán: hitos del lenguaje por edad, señales de alerta, estimulación en casa y preparación para la primera consulta. Todo gratuito."
- **H1:** `"Recursos para padres"` → `"Recursos y guías para padres"`
- **Intro:** Reescrita con "Guías prácticas de fonoaudiología infantil para padres en Chillán: cuándo preocuparse, cómo estimular en casa y qué esperar de la evaluación fonoaudiológica."
- **Keywords:** Añadido "recursos fonoaudiología padres Chillán", "guías fonoaudiología infantil", "recursos padres fonoaudióloga"
- **Schema:** Añadido `CollectionPage` JSON-LD con hasPart apuntando a cada guía (hitos, señales alerta, estimular en casa, primera evaluación)

**Objetivo CTR:** > 3% en 21 días (hub debe convertir mejor con schema y descripción específica)

---

#### 2. `/chillan/tea-comunicacion` — Landing local TEA
**Métricas GSC previas:** 18 imp, pos 9, 0 clicks (query "katya dominguez" aterriza aquí)

**Cambios:**
- **Title override:** `"TEA y autismo Chillán | Comunicación infantil"` → `"Comunicación y Lenguaje en Niños con TEA | Chillán"`
- **Description override:** Mejorada "Comunicación y lenguaje en niños con TEA/autismo en Chillán: apoyo fonoaudiológico presencial para lenguaje funcional, pragmática y habilidades sociales. 40% tiene retraso significativo. Agenda WhatsApp."
- **FAQs específicas:** Añadidas 3 preguntas al schema FAQPage: "¿Qué trabaja la fonoaudióloga con niños con TEA en Chillán?", "¿A qué edad conviene iniciar terapia fonoaudiológica en niños con TEA?", "¿El tratamiento es solo para niños con TEA que no hablan?"
- **Glosario link:** Actualizado de `/glosario` genérico a `/glosario/tea` (definición específica)
- **Objetivo:** Claramente diferenciado de `/servicios/tea-trastorno-espectro-autista` (local Chillán, práctico, señales + agendar vs servicio general nacional)

**Objetivo CTR:** > 3% en 21 días (posición 9, diferenciación local + FAQs específicas deben capturar query)

---

#### 3. Páginas de baja visibilidad — Diferenciación y optimización

##### `/servicios/test-de-lenguaje-infantil-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"Test de Lenguaje para Niños en Chillán | Evaluación Formal"` → `"Test de Lenguaje Infantil en Chillán | TECAL, TEPROSIF-R, STSG"`
- **Description:** Más específica con nombres de test "TEPROSIF-R fonología, TECAL comprensión, STSG gramática. Informe válido para PIE y escuelas de lenguaje."
- **Keywords:** Añadido "test de lenguaje infantil Chillán", "TECAL Chillán", "TEPROSIF-R Chillán", "test lenguaje PIE", "informe fonoaudiológico PIE"
- **Objetivo:** Intent claro = aplicación formal de test (diferente de evaluación general)

**Decisión:** **Se mantiene independiente** — intent distinto (test formales TECAL/TEPROSIF vs evaluación fonoaudiológica integral).

---

##### `/servicios/evaluacion-del-lenguaje-infantil-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"Evaluación de lenguaje infantil | Niño habla poco Chillán"` → `"Evaluación Lenguaje Infantil Chillán | Vocabulario y Comprensión"`
- **Description:** Reforzada diferencia con evaluación fonoaudiológica integral: "Evaluación específica del lenguaje (no habla) en Chillán: vocabulario, comprensión, frases, morfosintaxis. Para niños que hablan poco, no arman frases o entienden menos. Con informe."
- **Keywords:** Añadido "evaluación lenguaje expresivo comprensivo", "vocabulario niños Chillán", "niño habla poco evaluación"
- **Objetivo:** Diferenciarse como evaluación **específica del lenguaje** (no habla/voz/deglución)

**Decisión:** **Se mantiene independiente** — intent distinto vs `/servicios/evaluacion-fonoaudiologica` (general, incluye habla/voz/deglución). Cross-links claros entre ambas en contenido.

---

##### `/servicios/terapia-del-habla-infantil-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"Terapia del Habla Infantil en Chillán | Fonoaudióloga Especialista"` → `"Terapia del Habla Infantil Chillán | Articulación y Pronunciación"`
- **Description:** Clarificada diferencia habla vs lenguaje: "Terapia del habla (no lenguaje) en Chillán: articulación, pronunciación, claridad, fluidez. Tratamiento presencial de cómo produce los sonidos. Fonoaudióloga infantil."
- **Keywords:** Añadido "terapia del habla infantil Chillán", "articulación niños Chillán", "pronunciación infantil", "claridad del habla", "terapia articulatoria"
- **Objetivo:** Diferenciarse como terapia **del habla** (articulación, claridad) vs terapia de lenguaje (vocabulario, frases)

**Decisión:** **Se mantiene independiente** — intent distinto vs `/servicios/trastornos-del-habla` (condiciones específicas vs proceso terapéutico).

---

##### `/servicios/conciencia-fonologica-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"Conciencia Fonológica en Niños | Fonoaudióloga en Chillán"` → `"Conciencia Fonológica Niños Chillán | Base para Leer y Escribir"`
- **Description:** Reforzada "Evaluación y estimulación de conciencia fonológica en Chillán: habilidad clave para lectoescritura exitosa. Rimas, sílabas, fonemas. Fonoaudióloga infantil presencial."
- **Keywords:** Añadido "conciencia fonológica Chillán", "estimulación conciencia fonológica", "base lectoescritura", "rimas niños Chillán", "fonoaudióloga lectura"

**Decisión:** **Se mantiene independiente** — intent único (pre-lectoescritura, habilidad fonológica específica).

---

##### `/tratamientos/retraso-del-habla-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"Terapia Retraso del Habla en Niños | Chillán"` → `"Retraso del Habla Chillán | Niño no se le entiende al hablar"`
- **Description:** Wording padres "Tratamiento retraso del habla en niños en Chillán: cuando habla poco, se le entiende mal o articula con dificultad. Evaluación y terapia presencial. Mejoramos claridad."
- **Keywords:** Añadido "niño no se le entiende al hablar", "claridad del habla niños"

**Decisión:** **Se mantiene independiente** — intent distinto vs `/tratamientos/retraso-del-lenguaje-chillan` (frozen). **Habla vs lenguaje son áreas diferentes:** habla = producción/articulación/claridad; lenguaje = vocabulario/frases/comprensión. No es canibalización.

---

##### `/sintomas/mi-hijo-no-comprende-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"¿Mi hijo no comprende? | Señales Chillán"` → `"Mi hijo no comprende bien | Lenguaje comprensivo Chillán"`
- **Description:** Diferenciada de instrucciones simples: "Si tu hijo no comprende preguntas, relatos o conversaciones para su edad (más allá de instrucciones simples), conoce señales de alerta. Consulta fonoaudióloga Chillán."
- **Keywords:** Añadido "niño no entiende preguntas", "lenguaje comprensivo"
- **Objetivo:** Intento leve de diferenciación vs `/sintomas/nino-no-entiende-instrucciones-chillan` (frozen) — esta página es comprensión general (preguntas, relatos); la congelada es instrucciones específicas

**Decisión:** **Candidato a consolidación** — overlap significativo con `/sintomas/nino-no-entiende-instrucciones-chillan`. Gonzalo debe evaluar si vale la pena mantener ambas o consolidar en una sola página "comprensión/instrucciones". Diferenciac leve aplicada en copy para medir si captura query distinta ("no comprende" general vs "no entiende instrucciones" específica).

---

#### 4. `/glosario/logopeda` — Nuevo término (captura queries España)
**Métricas GSC previas:** Queries existentes en home: "logopeda" (35 imp), "logopedia" (27), "logopeda infantil" (5), 0 clicks

**Cambios:**
- **Nueva página creada:** `/glosario/logopeda`
- **Title:** `"¿Qué es Logopeda? | Logopedia vs Fonoaudiología"`
- **Description:** `"Logopeda y logopedia son términos usados en España para lo que en Chile llamamos fonoaudiólogo y fonoaudiología. Misma profesión, nombres diferentes."`
- **Keywords:** `"logopeda"`, `"logopedia"`, `"logopeda infantil"`, `"diferencia logopeda fonoaudiólogo"`, `"logopeda España Chile"`
- **Contenido:** Definición breve explicando que logopeda = término España, fonoaudiólogo = término Chile/Latinoamérica. Misma formación, distinto nombre. Si estás en Chile buscas "fonoaudiólogo infantil Chillán".
- **Links internos:** A `/fonoaudiologa-ninos-chillan` (pilar) y `/agendar-hora-fonoaudiologo-infantil-chillan` (CTA). Añadir links **desde** esta página hacia frozen está OK; no editamos las frozen para linkear a esta.
- **Sitemap:** Ya incluido automáticamente vía `getGlosarioTermUrls()` en `app/sitemap.ts`

**Objetivo CTR:** > 2% en 21 días (capturar queries "logopeda" que buscan información desde España/otros países y explicar nomenclatura Chile)

---

### Candidatos a consolidación (para Gonzalo)

1. **`/sintomas/mi-hijo-no-comprende-chillan`** vs **`/sintomas/nino-no-entiende-instrucciones-chillan`** (frozen):
   - Overlap significativo en intent: ambas sobre comprensión infantil.
   - Diferenciación leve aplicada: "no comprende" = general (preguntas, relatos); "no entiende instrucciones" = específico (seguir órdenes).
   - Evaluar post-Lote 5 si vale la pena dos páginas o consolidar en una sola.

### Otras mejoras transversales

1. **Schema CollectionPage en hub:** `/recursos` ahora tiene schema que lista las 4 guías como hasPart (mejor señal para Google sobre estructura de contenido).
2. **FAQs específicas TEA:** Añadidas al schema existing de `/chillan/tea-comunicacion` (3 preguntas únicas sobre pragmática, intervención temprana, perfiles verbales/no verbales).
3. **Diferenciación habla vs lenguaje reforzada:** En titles/descriptions de evaluacion-del-lenguaje, terapia-del-habla, retraso-del-habla clarificamos que lenguaje ≠ habla (vocabulario/frases vs articulación/sonidos).
4. **Cross-links desde páginas nuevas:** logopeda glosario linkea a pilar y agendar; servicios Chillán ya tienen links a evaluacion general/terapias principales (no editamos frozen para linkear desde ellas).

### Métricas a monitorear (GSC)

**Periodo de medición:** 14-21 días post-indexación (desde 2026-10-09)

**KPIs Lote 5:**
1. **CTR general del sitio:** objetivo > 1,8% (baseline 1,6%)
2. **CTR `/recursos`:** objetivo > 3% (baseline 1 click/43 imp ≈ 2,3% — mejorar con schema y descripción)
3. **CTR `/chillan/tea-comunicacion`:** objetivo > 3% (baseline 0%, pos 9 — FAQs + diferenciación local deben activar)
4. **CTR `/glosario/logopeda`:** objetivo > 2% (nueva, capturar 35+27+5 = 67 imp totales de queries "logopeda")
5. **Impresiones páginas de baja visibilidad:** objetivo +50% sobre baseline < 7 imp (optimización de titles debe subir visibilidad)

**URLs a seguir de cerca:**
- `/recursos` (43 imp → esperado 1-2 clics con CTR 3%)
- `/chillan/tea-comunicacion` (18 imp → esperado 1 clic con CTR 3%)
- `/glosario/logopeda` (nueva, esperado capturar queries "logopeda*" con ~1-2 clics iniciales)
- `/servicios/test-de-lenguaje-infantil-chillan` (< 7 imp → medir si sube con titles específicos de test TECAL/TEPROSIF)
- `/tratamientos/retraso-del-habla-chillan` (< 7 imp → medir si captura queries "niño no se le entiende" diferenciado de retraso lenguaje)

**Consolidación candidato a revisar:**
- `/sintomas/mi-hijo-no-comprende-chillan` vs `/sintomas/nino-no-entiende-instrucciones-chillan`: revisar en 21 días si hay diferenciación de queries o si consolidan en una sola página.

### Siguientes pasos

1. **Post-deploy:**
   - Solicitar indexación manual en GSC para 9 URLs optimizadas + 1 nueva (logopeda)
   - Validar que los cambios de metadata se reflejan en SERPs (inspeccionar URL)
   - Verificar schema CollectionPage de recursos en validador Google

2. **Monitoreo:**
   - Revisar GSC en 7 días (tendencia temprana de impresiones en páginas de baja visibilidad)
   - Revisar GSC en 14-21 días (medición completa CTR + queries capturadas por logopeda)
   - Evaluar candidato consolidación mi-hijo-no-comprende vs nino-no-entiende-instrucciones

3. **Ideas Lote 6 (futuras, post-21d):**
   - Si páginas baja visibilidad no suben: considerar noindex o redirect a página principal similar (si confirma canibalización post-data).
   - Si `/glosario/logopeda` captura bien queries "logopeda*": considerar otros términos internacionales (ej. "speech therapist" redirigido a pilar con anchor en idioma).
   - Revisar otras páginas `/servicios/*-chillan` no tocadas en Lotes 1-5 con > 10 imp sin clics.

---

## 2026-10-08: SEO Lote 4 — Dislalia, tartamudez, lectoescritura, apraxia, síntomas e informe PIE

### Contexto

**Datos GSC (90 días 2026-07-10 al 2026-10-07):**
- **81 clics totales**
- **4.923 impresiones**
- **CTR promedio: 1,65%**
- Posición promedio: 8,0

**Datos últimos 7 días completos (30 sep–6 oct):** 5 clics / 577 imp vs 7d previos (23–29 sep): 10 / 579 imp

**Problemas detectados:**
1. **Canibalización dislalia:** 3 páginas (`/tratamientos/dislalia-infantil-chillan` 35 imp/0 clicks pos 22.6, `/chillan/dislalia` 13 imp pos 20.5, `/glosario/dislalia` 12 imp pos 8.3) compitiendo sin intents diferenciados.
2. **Tartamudez:** `/sintomas/nino-tartamudea-chillan` (41 imp/2 clicks pos 9.6) necesita match con queries de padres ("tartamudez en niños de 2 a 3 años"); `/chillan/disfemia` (38 imp/6 clicks pos 5) va bien, solo light touch.
3. **Lectoescritura/dislexia cluster sin diferenciación:** `/servicios/dificultades-lectoescritura` (48 imp/1 click pos 6.5 — snippet opportunity), `/chillan/dislexia` (52 imp pos 15.7), `/chillan/lectoescritura` (10 imp pos 12.7), `/glosario/dislexia` (11 imp).
4. **Apraxia:** `/tratamientos/apraxia-del-habla-infantil-chillan` (20 imp pos 8.8) y `/chillan/apraxia-del-habla` (16 imp/2 clicks pos 4.5 — light touch en esta).
5. **Informe PIE:** `/servicios/informe-fonoaudiologico-pie-chillan` (88 imp/3 clicks pos 6.7) — query principal "informe fonoaudiológico" pos 11.
6. **Síntomas snippets:** `/sintomas/hijo-habla-poco-edad-chillan` (36 imp pos 4.1/1 click) y `/sintomas/nino-pronuncia-mal-chillan` (19 imp pos 12.7) necesitan titles como búsquedas de padres.
7. **Servicios therapy:** `/servicios/terapia-lenguaje-infantil` (33 imp pos 14.8, query "especialista en terapia de lenguaje para niños") y `/servicios/trastornos-del-habla` (12 imp pos 48.6) necesitan sharpen.
8. **Primera evaluación:** `/recursos/primera-evaluacion-fonoaudiologica-infantil` (27 imp, 13 en últimos 7d, pos 8.5) — query "qué esperar en la primera evaluación fonoaudiológica de tu hijo".

**Objetivo:** Diferenciar intents en clusters (dislalia, lectoescritura), mejorar titles/descriptions con wording de padres, añadir FAQ donde falte, cross-links estratégicos y evitar canibalización.

### Páginas optimizadas

#### 1. `/tratamientos/dislalia-infantil-chillan` — Página principal de tratamiento dislalia
**Métricas GSC previas:** 35 imp, 0 clics, pos 22.6

**Cambios:**
- **Title:** `"Tratamiento Dislalia Infantil | Chillán"` → `"Tratamiento Dislalia Infantil Chillán | Terapia Pronunciación"`
- **Description:** Añadido "postítulo en trastornos fonológicos", más específica con rotacismo/sigmatismo
- **Keywords:** Añadido "tratamiento dislalia Chillán", "problemas articulación"
- **Cross-link section:** Añadido texto explicativo clarificando que **esta es la página principal de tratamiento**, con links diferenciados a `/glosario/dislalia` (definición corta) y `/chillan/dislalia` (señales locales)

**Objetivo CTR:** > 2% en 21 días (subir desde pos 22.6)

---

#### 2. `/glosario/dislalia` — Definición breve que canaliza a tratamiento
**Métricas GSC previas:** 12 imp, pos 8.3

**Cambios:**
- **Title:** `"¿Qué es la Dislalia? | Causas, Síntomas y Tratamiento"` → `"Definición Dislalia | ¿Qué es y cómo se trata?"`
- **Description:** Reforzado como "definición breve", añadido "diferencia dislalia y trastorno fonológico"
- **Keywords:** Añadido "definición dislalia", "qué significa dislalia", "diferencia dislalia y trastorno fonológico"
- **CTA box prominente:** Añadido box rose-50 destacado al inicio con "→ Si buscas **tratamiento de dislalia en Chillán**, ve a:" con links prominentes a `/tratamientos/dislalia-infantil-chillan` (principal, negrita), `/chillan/dislalia` (señales), `/agendar-*`
- **Objetivo:** Página de glosario (definición) que funnela a las páginas de tratamiento, no compite

**Objetivo CTR:** > 3% en 21 días

**Decisión canibalización:** **Se mantienen las 3 páginas independientes** con intents diferenciados: `/glosario/dislalia` = definición breve → `/tratamientos/dislalia-infantil-chillan` = tratamiento especializado principal → `/chillan/dislalia` = señales locales específicas de cuándo llevar. Cross-links claros entre ellas.

---

#### 3. `/chillan/dislalia` — Señales locales (patologias.ts)
**Métricas GSC previas:** 13 imp, pos 20.5

**Cambios:**
- **Title override:** Añadido `"Dislalia en Chillán | Señales y cuándo consultar"`
- **Description override:** `"¿Tu hijo omite sonidos o dice 'tasa' por casa? Señales de dislalia por edad en Chillán. Evaluación presencial con fonoaudióloga especialista. Agenda por WhatsApp."`
- **Objetivo:** Diferenciarse como página de señales locales, complementa tratamiento

**Objetivo CTR:** > 2,5% en 21 días

---

#### 4. `/sintomas/nino-tartamudea-chillan` — Wording padres + FAQ edad
**Métricas GSC previas:** 41 imp, 2 clicks, pos 9.6

**Cambios:**
- **Title:** `"Mi hijo tartamudea | Evaluación Chillán"` → `"Mi hijo tartamudea | ¿Es normal o preocupante? Chillán"`
- **Description:** Añadido edad específica "2-3 años", "cuándo es disfluencia normal y cuándo consultar"
- **Keywords:** Añadido "tartamudez en niños de 2 a 3 años", "disfluencia normal"
- **FAQ ampliado:** +2 preguntas: "¿Qué tipo de disfluencias son normales en niños pequeños?" (repetir palabras enteras sin tensión vs repeticiones de sonidos con esfuerzo), "¿A qué edad debería preocuparme?" (guidance general sin números específicos)
- **Cross-link:** Añadido link a `/chillan/disfemia`

**Objetivo CTR:** > 4% en 21 días (capturar queries padres con hijos 2-3 años)

---

#### 5. `/servicios/dificultades-lectoescritura` — Snippet opportunity
**Métricas GSC previas:** 48 imp, 1 click, pos 6.5

**Cambios:**
- **Title:** `"Dificultades de Lectura y Escritura en Chillán | Fonoaudióloga"` → `"Dificultades de Lectura y Escritura Chillán | Fonoaudiología"`
- **Description:** Más específica "conciencia fonológica, decodificación, fluidez y comprensión lectora. Base del lenguaje oral para leer y escribir"
- **Keywords:** Añadido "comprensión lectora niños", cambiado "dislexia tratamiento Chillán" por "conciencia fonológica Chillán" (diferenciación)
- **FAQ ampliado:** +1 pregunta "¿Qué relación tiene la lectura con el lenguaje oral?" (explicación bases lingüísticas)

**Objetivo CTR:** > 5% en 21 días (posición top 6 debe convertir más, snippet opportunity)

---

#### 6. `/chillan/dislexia` — Evaluación dislexia Chillán (patologias.ts)
**Métricas GSC previas:** 52 imp, pos 15.7

**Cambios:**
- **Title override:** Añadido `"Dislexia y Fonoaudiología Chillán | Evaluación Lectura"`
- **Description override:** `"La dislexia tiene base en lenguaje oral (conciencia fonológica). Evaluación fonoaudiológica en Chillán para dificultades de lectura y bases del lenguaje. Agenda por WhatsApp."`
- **Objetivo:** Diferenciarse como página de evaluación/tratamiento local de dislexia vs servicio general de lectoescritura

**Objetivo CTR:** > 2% en 21 días, subir ranking con query "fonoaudiologia dislexia"

---

#### 7. `/chillan/lectoescritura` — Base lenguaje (patologias.ts)
**Métricas GSC previas:** 10 imp, pos 12.7

**Cambios:**
- **Title override:** Añadido `"Dificultades de Lectoescritura Chillán | Base Lenguaje"`
- **Description override:** `"Problemas de lectura o escritura suelen tener base en lenguaje oral. Evaluación y tratamiento fonoaudiológico en Chillán para conciencia fonológica y lectoescritura. WhatsApp."`
- **Objetivo:** Enfoque en bases del lenguaje oral, complementa servicio general

**Objetivo CTR:** > 2,5% en 21 días

---

#### 8. `/glosario/dislexia` — Definición dislexia (terminos.ts)
**Métricas GSC previas:** 11 imp

**Cambios:**
- **metaTitle:** `"¿Qué es la Dislexia? | Lectura, Lenguaje y Fonoaudiología"` → `"Definición Dislexia | ¿Qué es y cómo ayuda la fonoaudiología?"`
- **metaDescription:** Reforzado "definición de dislexia", "señales, diferencias"
- **keywords:** Añadido "dislexia definición", "fonoaudiología dislexia"
- **subtitle:** Añadido "Definición breve:"
- **Objetivo:** Claramente definición que explica rol de fonoaudiología

**Objetivo CTR:** > 3% en 21 días

**Decisión canibalización lectoescritura:** **Se mantienen las 4 páginas independientes** con intents diferenciados: `/glosario/dislexia` = definición → `/chillan/dislexia` = evaluación/tratamiento dislexia local → `/servicios/dificultades-lectoescritura` = servicio general de lectoescritura → `/chillan/lectoescritura` = base lenguaje oral. Cross-links entre ellas.

---

#### 9. `/tratamientos/apraxia-del-habla-infantil-chillan` — Tratamiento apraxia
**Métricas GSC previas:** 20 imp, pos 8.8

**Cambios:**
- **Title:** `"Apraxia del Habla Infantil | Tratamiento Chillán"` → `"Tratamiento Apraxia del Habla Infantil Chillán | CAS"`
- **Description:** Más específica "errores inconsistentes, esfuerzo visible al hablar. Evaluación diferencial y terapia de aprendizaje motor presencial"
- **Keywords:** Añadido "tratamiento apraxia habla Chillán", "errores inconsistentes habla"

**Objetivo CTR:** > 3% en 21 días

**Nota:** `/chillan/apraxia-del-habla` (16 imp, 2 clicks, pos 4.5) ya funciona bien — NO se editó (light touch, mantener performer).

---

#### 10. `/servicios/informe-fonoaudiologico-pie-chillan` — Informe PIE colegio
**Métricas GSC previas:** 88 imp, 3 clicks, pos 6.7 (query "informe fonoaudiológico" pos 11)

**Cambios:**
- **Title:** `"Informe Fonoaudiológico PIE y Escuelas de Lenguaje — Chillán | Katia Domínguez"` → `"Informe Fonoaudiológico para PIE Chillán | Colegio Decreto 170"`
- **Description:** Match query exacta "informe fonoaudiológico para PIE", añadido "informe para colegio"
- **Keywords:** Añadido "informe fonoaudiológico para PIE", "informe para colegio"
- **FAQ ampliado:** +1 pregunta "¿El informe es válido para cualquier colegio en Chillán?" (sí, Decreto 170 válido toda región)

**Objetivo CTR:** > 5% en 21 días (posición 6.7 top, query específica "informe fonoaudiológico para PIE")

---

#### 11. `/sintomas/hijo-habla-poco-edad-chillan` — Snippet wording padres
**Métricas GSC previas:** 36 imp, pos 4.1, 1 click

**Cambios:**
- **Title:** `"Mi hijo de 2 años habla poco | Chillán"` → `"Mi hijo de 2 años habla poco: ¿es normal? | Chillán"`
- **Description:** Más específica con pregunta directa "¿Tu hijo de 2 años habla poco o dice pocas palabras?", añadido "qué hacer mientras tanto"
- **Keywords:** Añadido "mi hijo de 2 años habla poco", "hijo habla poco para su edad"

**Objetivo CTR:** > 6% en 21 días (posición top 4 debe convertir muy bien)

**Cross-links:** Ya enlaza bien a `/tratamientos/retraso-del-lenguaje-chillan` (frozen), no se alteró ese link.

---

#### 12. `/sintomas/nino-pronuncia-mal-chillan` — Wording "no se le entiende"
**Métricas GSC previas:** 19 imp, pos 12.7

**Cambios:**
- **Title:** `"Mi hijo no pronuncia bien | Fonoaudiología Chillán"` → `"Mi hijo no se le entiende al hablar | Pronuncia mal Chillán"`
- **Description:** Wording coloquial padres "habla como bebé o no se le entiende a los 3-4 años"
- **Keywords:** Añadido "mi hijo no se le entiende al hablar", "habla como bebé"

**Objetivo CTR:** > 4% en 21 días (capturar wording específico padres)

**Cross-links:** Ya enlaza bien a `/tratamientos/dislalia-infantil-chillan` y `/tratamientos/trastorno-fonologico-chillan` (ambos frozen), no se alteraron esos links.

---

#### 13. `/servicios/terapia-lenguaje-infantil` — Especialista niños
**Métricas GSC previas:** 33 imp, pos 14.8 (query "especialista en terapia de lenguaje para niños")

**Cambios:**
- **Title:** `"Terapia de Lenguaje en Chillán | Fonoaudióloga Infantil"` → `"Terapia de Lenguaje Infantil Chillán | Especialista Niños"`
- **Description:** Captura query exacta "Especialista en terapia de lenguaje para niños en Chillán"
- **Keywords:** Añadido "especialista en terapia de lenguaje para niños"

**Objetivo CTR:** > 3% en 21 días (subir desde pos 14.8 con query match)

---

#### 14. `/servicios/trastornos-del-habla` — Sharpen title
**Métricas GSC previas:** 12 imp, pos 48.6

**Cambios:**
- **Title:** `"Tratamiento de Trastornos del Habla en Chillán | Dislalia, Pronunciación"` → `"Trastornos del Habla Chillán | Dislalia, Articulación"`
- **Description:** Añadido "postítulo en trastornos fonológicos", más específica con apraxia y disartria
- **Keywords:** Añadido "trastornos fonológicos Chillán", "articulación del habla infantil"

**Objetivo CTR:** > 2% en 21 días (muy bajo ranking, optimización de base)

---

#### 15. `/recursos/primera-evaluacion-fonoaudiologica-infantil` — Match query
**Métricas GSC previas:** 27 imp (13 en últimos 7d), pos 8.5

**Cambios:**
- **Title:** `"Primera Evaluación Fonoaudiológica Infantil | Qué Esperar"` → `"Qué esperar en la primera evaluación fonoaudiológica de tu hijo"`
- **Description:** Match query exacta "qué esperar en la primera evaluación fonoaudiológica de tu hijo", más detallada "(60-90 min), qué llevar, cómo es la sesión, qué incluye el informe y qué pasa después"
- **Keywords:** Añadido "qué esperar en la primera evaluación fonoaudiológica", "qué esperar evaluación fonoaudiológica de tu hijo"

**Objetivo CTR:** > 4% en 21 días (rising, posición 8.5, capturar query long-tail)

**Cross-links:** Ya enlaza bien a servicios de evaluación, no se alteraron.

---

### Otras mejoras transversales

1. **Diferenciación de intents:** Cada cluster (dislalia, lectoescritura) tiene roles claros: glosario = definición → tratamiento = página principal → chillan = señales locales.
2. **Cross-links estratégicos:** Links claros entre páginas del mismo cluster con texto explicativo.
3. **Titles con wording de padres:** "mi hijo de 2 años habla poco", "no se le entiende al hablar", "¿es normal o preocupante?"
4. **Descriptions específicas:** Edad, señales concretas, capturan queries long-tail.
5. **FAQ con guidance general:** Sin inventar números, respuestas no-numéricas sobre cuándo preocuparse.

### Métricas a monitorear (GSC)

**Periodo de medición:** 14-21 días post-indexación

**KPIs Lote 4:**
1. **CTR general del sitio:** objetivo > 2% (baseline 1,65%)
2. **CTR `/sintomas/hijo-habla-poco-edad-chillan`:** objetivo > 6% (baseline pos 4.1, debe convertir muy bien)
3. **CTR `/servicios/dificultades-lectoescritura`:** objetivo > 5% (baseline pos 6.5, snippet opportunity)
4. **CTR `/servicios/informe-fonoaudiologico-pie-chillan`:** objetivo > 5% (baseline pos 6.7, query específica)
5. **CTR `/glosario/dislalia`:** objetivo > 3% (baseline pos 8.3, definición que funnela)
6. **Clics totales:** objetivo +15% sobre baseline de 81 clics/90d

**URLs a seguir de cerca:**
- `/tratamientos/dislalia-infantil-chillan` (35 imp/pos 22.6 → subir ranking con diferenciación)
- `/sintomas/hijo-habla-poco-edad-chillan` (36 imp/pos 4.1 → ~2 clics esperados con CTR 6%)
- `/servicios/dificultades-lectoescritura` (48 imp/pos 6.5 → ~2-3 clics con CTR 5%)
- `/servicios/informe-fonoaudiologico-pie-chillan` (88 imp → ~4-5 clics con CTR 5%)
- `/sintomas/nino-tartamudea-chillan` (41 imp → ~2 clics con CTR 4%)

### Siguientes pasos

1. **Post-deploy:**
   - Solicitar indexación manual en GSC para las 15 URLs optimizadas
   - Validar que los cambios de metadata se reflejan en SERPs (inspeccionar URL)
   - Verificar cross-links funcionan correctamente

2. **Monitoreo:**
   - Revisar GSC en 7 días (tendencia temprana)
   - Revisar GSC en 14-21 días (medición completa)
   - Comparar queries con 0 clics vs nuevas queries con clics
   - Monitorear si la diferenciación dislalia/lectoescritura reduce canibalización

3. **Ideas Lote 5 (basadas en datos, esperar post-21d):**
   - **Síntomas adicionales:** Revisar otros `/sintomas/*-chillan` con impresiones > 15 que no se tocaron en Lotes 1-4.
   - **Recursos bajo CTR:** Revisar `/recursos/*` con volumen que no se optimizaron aún.
   - **Queries emergentes:** Analizar GSC post-Lote 4 para identificar nuevas queries con impresiones pero sin clics.
   - **Glosario adicional:** Otros términos en `/glosario/[slug]` (terminos.ts) con > 10 imp que necesiten diferenciación o FAQ más robustas.

---

## 2026-10-07: SEO Lote 3 — TEL cannibalization, voz-online CTR y TEA

### Contexto

**Datos GSC (90 días al 2026-10-06):**
- **82 clics totales**
- **4.930 impresiones**
- **CTR promedio: 1,66%**
- Posición promedio: 8,0

**Datos últimos 7d (30 sep–6 oct):** 5 clics / 510 imp vs 7d previos 10 / 579 imp

**Problemas detectados:**
1. **Canibalización TEL:** 4 páginas compiten (`/tratamientos/tel-*-chillan` 161 imp/frozen, `/servicios/tel-*` 74 imp/frozen, `/glosario/tel` 52 imp/0 clicks pos 8.6, `/chillan/tel` 6 imp). Las dos primeras están congeladas (Lotes 1-2).
2. **Voz-online bajo CTR o 0 clics:** `/paralisis-cordal` (140 imp/6 clicks/4.29% CTR/pos 8.5 — mejor performer), `/higiene-vocal` (54 imp/2 clicks), `/rehabilitacion-vocal-profesionales` (26 imp/0 clicks/pos 11.9 — query "rehabilitacion de la voz en profesionales" pos 27.7), `/fatiga-vocal` (25 imp/0), `/nodulos-vocales` (22 imp/1), `/evaluacion-vocal` (19 imp/0/pos 5.6 — problema snippet), `/voz-ronca` (13 imp/0), `/terapia-vocal-docentes` (16 imp/2 clicks, light touch).
3. **TEA bajo CTR:** `/servicios/tea-*` (72 imp/0 clicks/pos 9.1) + `/chillan/tea-comunicacion` (17 imp/0/pos 8.8).
4. **URL encoding:** `/servicios/informe-fonoaudiol%C3%B3gico-pie-chillan` obtuvo 1 impresión — verificar redirect.

**Objetivo:** Diferenciar páginas TEL, mejorar CTR/FAQ en voz-online capturando queries específicas ("¿se cura?", "por qué se me cansa la voz", "rehabilitacion de la voz"), y optimizar TEA title/description para búsqueda padres Chillán.

### Páginas optimizadas

#### 1. `/glosario/tel` — Diferenciación TEL: definición breve
**Métricas GSC previas:** 52 imp, 0 clics, pos 8.6

**Cambios:**
- **Title:** `"¿Qué es el TEL? | Trastorno Específico del Lenguaje Explicado"` → `"Definición TEL (TDL) | Qué es el Trastorno del Desarrollo del Lenguaje"`
- **Description:** Reforzado como definición breve: "TEL o TDL: trastorno del neurodesarrollo que afecta lenguaje sin causa aparente. Diferencias con retraso simple. Definición breve, tipos y cuándo sospechar."
- **Keywords:** Añadido "definición TEL", "qué significa TEL", "diferencia TEL y retraso lenguaje"
- **Estructura:** Header con "Definición breve:" + CTA box rose-50 destacado "→ Si buscas **tratamiento TEL en Chillán**, ve a:" con links prominentes a `/tratamientos/tel-*-chillan` (principal), `/servicios/tel-*` (¿se cura?), `/agendar-*`
- **Objetivo:** Claramente una página de glosario (definición) que canaliza a las páginas de tratamiento, no compite con ellas

**Objetivo CTR:** > 2% en 21 días

**Decisión canibalización `/chillan/tel`:** **Se mantiene como página independiente** (no canonical). `/chillan/tel` tiene solo 6 imp/pos 6.2 (muy bajo volumen) y es una landing local con contenido único (señales específicas, CTA local, template patologias.ts con datos propios). No es un duplicado thin. El flujo queda: glosario (definición) → tratamiento Chillán (frozen, local) / servicio (frozen, ¿se cura?).

---

#### 2. `/voz-online/paralisis-cordal-rehabilitacion-online`
**Métricas GSC previas:** 140 imp, 6 clicks, CTR 4,29%, pos 8,5

**Cambios:**
- **Title:** `"Parálisis de Cuerda Vocal: Rehabilitación Online | Chile"` → `"Parálisis Cordal: Rehabilitación Vocal Online | ¿Se recupera?"`
- **Description:** Añadido stat "6-12 meses con terapia mejoran cierre glótico post-cirugía o viral. Fonoaudióloga especialista voz."
- **Keywords:** Añadido "parálisis cuerda vocal", "parálisis cordal", "fonoaudióloga especialista en voz"
- **FAQ ampliado:** +2 preguntas: "¿Qué ejercicios se hacen para parálisis cordal?" (empujes laríngeos, LSVT, VFE), "¿La parálisis de cuerda vocal se cura?" (6-12 meses)
- **Schema:** +FAQPage schema (antes solo MedicalWebPage)
- **Intro párrafo:** Reforzado "rehabilitación online altamente efectiva en 6-12 meses"
- **Cross-link:** Añadido link a hub `/voz-online/fonoaudiologa-de-voz-online`

**Objetivo CTR:** > 5% en 21 días (mantener performer top)

---

#### 3. `/voz-online/higiene-vocal-cuidado-voz`
**Métricas GSC previas:** 54 imp, 2 clicks, CTR 3,7%, pos 7,5

**Cambios:**
- **Title:** `"Higiene Vocal: Cómo Cuidar tu Voz | Fonoaudióloga Online Chile"` → `"Higiene Vocal: Cómo Cuidar tu Voz Todos los Días"`
- **Description:** "10 reglas de oro para cuidar tu voz: hidratación, evitar carraspear, descansos vocales. Asesoría fonoaudióloga especialista online para Chile."
- **Keywords:** Añadido "cómo cuidar la voz", "cuidado de la voz", "consejos voz profesionales"
- **FAQ ampliado:** +2 preguntas: "¿Qué alimentos son malos para la voz?", "¿Cómo descansar la voz correctamente?" (respuesta genérica)

**Objetivo CTR:** > 4% en 21 días

---

#### 4. `/voz-online/rehabilitacion-vocal-profesionales-voz`
**Métricas GSC previas:** 26 imp, 0 clicks, pos 11,9 (query "rehabilitacion de la voz en profesionales" pos 27,7)

**Cambios:**
- **Title:** `"Rehabilitación Vocal para Profesionales de la Voz | Online Chile"` → `"Rehabilitación de la Voz en Profesionales | Online Chile"`
- **Description:** Captura query exacta "rehabilitacion de la voz en profesionales": "¿Eres locutor, cantante o profesor y tu voz falla? Rehabilitación vocal online para recuperar resistencia y proyección."
- **Keywords:** Añadido "rehabilitacion de la voz en profesionales" (query exacta)
- **FAQ ampliado:** +2 preguntas: "¿Qué incluye la rehabilitación de la voz en profesionales?", "¿Puedo seguir trabajando durante la rehabilitación vocal?"

**Objetivo CTR:** > 3% en 21 días (capturar query pos 27.7)

---

#### 5. `/voz-online/fatiga-vocal-tratamiento-online`
**Métricas GSC previas:** 25 imp, 0 clicks, pos 8,9

**Cambios:**
- **Title:** `"Fatiga Vocal: Causas y Tratamiento Online | Chile"` → `"Fatiga Vocal: ¿Por qué se me cansa la voz? Tratamiento Online"`
- **Description:** Responde query directa "se me cansa la voz": "¿Llegas al viernes sin voz o te duele la garganta al hablar? Tratamiento online para fatiga vocal: respiración, técnica y proyección sin tensión."
- **Keywords:** Añadido "se me cansa la voz", "voz cansada tratamiento online"
- **FAQ ampliado:** +2 preguntas: "¿Por qué se me cansa la voz al final del día?", "¿Cuánto dura el tratamiento para fatiga vocal?" (respuesta genérica)

**Objetivo CTR:** > 4% en 21 días

---

#### 6. `/voz-online/nodulos-vocales-tratamiento-online`
**Métricas GSC previas:** 22 imp, 1 click, CTR 4,5%, pos 8,7

**Cambios:**
- **Title:** `"Nódulos Vocales: Tratamiento Online sin Cirugía | Chile"` → `"Nódulos Vocales: Tratamiento Online | ¿Se pueden curar sin cirugía?"`
- **Description:** "Tratamiento fonoaudiológico online para nódulos vocales. Terapia conservadora como primera línea antes de cirugía. Reduce tamaño y mejora calidad vocal."
- **Keywords:** Añadido "nodulos cuerdas vocales", "tratamiento nódulos sin cirugía"
- **FAQ ampliado:** +2 preguntas: "¿Cuánto tiempo tarda en mejorar un nódulo vocal con terapia?" (respuesta genérica), "¿Qué es mejor: operar o hacer terapia vocal?"

**Objetivo CTR:** > 5% en 21 días

---

#### 7. `/voz-online/evaluacion-vocal-online`
**Métricas GSC previas:** 19 imp, 0 clicks, pos 5,6 — **problema snippet crítico** (posición top 6 sin clics)

**Cambios:**
- **Title:** `"Evaluación Vocal Online | Diagnóstico de Voz Chile"` → `"Evaluación Vocal Online | ¿Qué incluye el diagnóstico de voz?"`
- **Description:** Más específica: "Evaluación fonoaudiológica de voz online: análisis acústico, perceptual (GRBAS), tiempos fonación e informe con plan de tratamiento. Todo Chile por videollamada."
- **Keywords:** Añadido "diagnóstico de voz", "análisis vocal Chile"
- **FAQ ampliado:** +2 preguntas: "¿Cuánto dura una evaluación vocal?" (respuesta genérica), "¿Necesito tener diagnóstico otorrino antes de la evaluación?"

**Objetivo CTR:** > 6% en 21 días (posición top debe convertir)

---

#### 8. `/voz-online/voz-ronca-causas-tratamiento`
**Métricas GSC previas:** 13 imp, 0 clicks, pos 10,0

**Cambios:**
- **Title:** `"Voz Ronca: Causas y Tratamiento Online | Fonoaudióloga Chile"` → `"Voz Ronca: ¿Por qué y qué hacer? Tratamiento Online Chile"`
- **Description:** "Ronquera persistente (>2 semanas) sin resfriado requiere evaluación. Causas: mal uso vocal, laringitis, reflujo, nódulos. Tratamiento fonoaudiológico online."
- **Keywords:** Añadido "por qué tengo la voz ronca", "disfonía tratamiento online"
- **FAQ ampliado:** +2 preguntas: "¿Qué hacer si tengo voz ronca todo el tiempo?", "¿La voz ronca crónica es grave?"

**Objetivo CTR:** > 3% en 21 días

---

#### 9. `/voz-online/terapia-vocal-docentes-profesores`
**Métricas GSC previas:** 16 imp, 2 clicks, CTR 12,5%, pos 7,5 — **light touch** (ya convierte bien)

**Cambios:**
- **Title:** `"Terapia Vocal para Docentes y Profesores | Online Chile"` → `"Terapia Vocal para Docentes Online | Salva tu voz de profesor"`
- **Description:** Stat ASHA "58% de docentes desarrollará trastorno de voz. Terapia fonoaudiológica online para profesores: técnica vocal, proyección sin gritar, prevención disfonía."
- **Keywords:** Añadido "voz profesores", "disfonía docente", "terapia voz profesores online"
- **FAQ ampliado:** +2 preguntas: "¿Cuánto dura la terapia vocal para profesores?" (respuesta genérica), "¿Qué pasa si no trato la disfonía docente?"

**Objetivo CTR:** > 13% en 21 días (mantener alta conversión)

---

#### 10. `/servicios/tea-trastorno-espectro-autista`
**Métricas GSC previas:** 72 imp, 0 clicks, pos 9,1

**Cambios:**
- **Title:** `"Terapia TEA Chillán | Comunicación y lenguaje autismo"` → `"Fonoaudiología TEA Chillán | Comunicación y lenguaje en autismo"`
- **Description:** Añadido stat 40%: "Apoyo fonoaudiológico para niños con autismo/TEA en Chillán: comunicación funcional, lenguaje expresivo y comprensión. 40% con retraso lenguaje. Evaluación presencial."
- **Keywords:** Añadido "autismo fonoaudiología Chillán", "lenguaje en TEA"
- **Cross-link:** Página ya linkeada con `/chillan/tea-comunicacion` (17 imp/0/pos 8.8) — ambas se mantienen separadas (local vs servicio general) con contenido diferenciado

**Objetivo CTR:** > 2,5% en 21 días

---

#### 11. Redirect URL encoding: `/servicios/informe-fonoaudiol%C3%B3gico-pie-chillan`
**GSC:** 1 impresión en variante con tilde

**Cambios:**
- Añadido redirect 301 en `next.config.ts` de `/servicios/informe-fonoaudiológico-pie-chillan` (con ó) → `/servicios/informe-fonoaudiologico-pie-chillan` (sin tilde, canónica)

**Objetivo:** Consolidar señales en URL canónica

---

### Otras mejoras transversales

1. **FAQPage schema:** Añadido en `/voz-online/paralisis-cordal-rehabilitacion-online` (antes solo tenía MedicalWebPage). Resto de páginas voz-online ya tenían FAQPage.
2. **Cross-links voz-online:** Todas las páginas voz-online ahora linkean al hub `/voz-online/fonoaudiologa-de-voz-online` en breadcrumbs.
3. **Keywords sin tilde:** Añadido "fonoaudióloga especialista en voz" (con tilde) + variantes sin tilde en keywords de voz-online.
4. **Titles con preguntas directas:** "¿Se recupera?", "¿Por qué se me cansa la voz?", "¿Por qué y qué hacer?", "¿Qué incluye el diagnóstico?" capturan intent informacional de búsquedas long-tail.
5. **Descriptions con stats concretos:** "6-12 meses", "58% de docentes", "40% con retraso lenguaje" agregan credibilidad y especificidad.

### Métricas a monitorear (GSC)

**Periodo de medición:** 14-21 días post-indexación

**KPIs Lote 3:**
1. **CTR general del sitio:** objetivo > 2,2% (baseline 1,66%)
2. **CTR `/glosario/tel`:** objetivo > 2% (baseline 0%, pos 8.6)
3. **CTR `/voz-online/evaluacion-vocal-online`:** objetivo > 6% (baseline 0%, pos 5.6 crítico)
4. **CTR `/voz-online/paralisis-cordal`:** objetivo > 5% (baseline 4.29%, mantener top performer)
5. **CTR `/servicios/tea-*`:** objetivo > 2,5% (baseline 0%, pos 9.1)
6. **Clics totales:** objetivo +20% sobre baseline de 82 clics/90d

**URLs a seguir de cerca:**
- `/voz-online/evaluacion-vocal-online` (19 imp/pos 5.6 → esperado 1 clic con CTR 6%)
- `/voz-online/rehabilitacion-vocal-profesionales-voz` (26 imp/pos 11.9 → esperado 1 clic si sube ranking con query match)
- `/servicios/tea-trastorno-espectro-autista` (72 imp → esperado 2 clics con CTR 2.5%)
- `/glosario/tel` (52 imp → esperado 1 clic con CTR 2%)

### Siguientes pasos

1. **Post-deploy:**
   - Solicitar indexación manual en GSC para las 11 URLs optimizadas
   - Validar que los cambios de metadata se reflejan en SERPs (inspeccionar URL)
   - Verificar redirect `informe-fonoaudiológico` → `informe-fonoaudiologico`

2. **Monitoreo:**
   - Revisar GSC en 7 días (tendencia temprana)
   - Revisar GSC en 14-21 días (medición completa)
   - Comparar queries con 0 clics vs nuevas queries con clics en voz-online

3. **Ideas Lote 4 (futuras, basadas en datos):**
   - **Tratamientos locales Chillán con volumen medio:** `/tratamientos/trastorno-fonologico-chillan` (frozen Lote 1, revisar post-21d)
   - **Recursos bajo CTR:** `/recursos/estimular-lenguaje-en-casa` (frozen Lote 2, revisar post-21d)
   - **Síntomas Chillán bajo CTR:** `/sintomas/nino-no-entiende-instrucciones-chillan` (frozen Lote 2), `/sintomas/mi-hijo-no-habla-bien-chillan` (frozen Lote 2), `/sintomas/hijo-no-arma-frases-chillan` (frozen Lote 2) — revisar post-21d.
   - **Glosario / definiciones adicionales:** Páginas glosario con > 10 imp que necesiten diferenciación o FAQ más robustas.

---

## 2026-10-06: SEO Lote 2 — CTR en voz online, recursos y síntomas

### Contexto

**Datos GSC (90 días al 2026-10-05):**
- **86 clics totales**
- **6.118 impresiones**
- **CTR promedio: 1,4%**
- Posición promedio: ~7,6

**Problema detectado:** URLs de voz online, recursos y síntomas con impresiones pero CTR bajo o cero clics. Queries específicas sin captura (ej. "el tel se cura", "mi hijo de 2 años no forma frases").

**Objetivo:** Mejorar CTR optimizando titles para responder queries directas, descriptions con pasos concretos y keywords con variantes sin tilde.

### Páginas optimizadas

#### 1. `/voz-online/fonoaudiologa-voz-antofagasta`
**Métricas GSC previas:** 453 imp, CTR 0,88%

**Cambios:**
- **Title:** `"Fonoaudióloga de Voz Online desde Antofagasta | Terapia Vocal"` — aclara "desde Antofagasta" + "terapia de voz online"
- **Keywords:** Añadido "fonoaudiólogo Antofagasta" y variantes locales
- **Description:** Explicita "100% por videollamada sin traslados"

**Objetivo CTR:** > 2% en 21 días

---

#### 2. `/recursos/estimular-lenguaje-en-casa`
**Métricas GSC previas:** 283 imp, pos 15

**Cambios:**
- **Title:** `"¿Cómo Empezar a Estimular el Lenguaje en Casa? Guía Práctica"` — responde query "cómo empezar"
- **Description:** Paso a paso + errores que evitar (no interrogar, no corregir todo)
- **Keywords:** Añadido "cómo empezar a estimular el lenguaje"

**Objetivo CTR:** > 2,5% en 21 días

---

#### 3. `/voz-online/fonoaudiologa-de-voz-online`
**Métricas GSC previas:** 219 imp

**Cambios:**
- **Title:** `"Fonoaudióloga de Voz Online — Todo Chile, 100% por Videollamada"` — refuerza cobertura + modalidad
- **Description:** Añadido "100% online por videollamada para todo Chile" + "sin traslados, agenda flexible"
- **Keywords:** Añadido "terapia de voz online todo Chile" y "videollamada fonoaudióloga"

**Objetivo CTR:** > 2% en 21 días

---

#### 4. `/sobre-katia-dominguez-fonoaudiologa-chillan`
**Métricas GSC previas:** 218 imp, pos 5,6

**Cambios:**
- **Keywords:** Añadido "fonoaudiólogo Chillán" (variante masculina)
- **Nota:** Credenciales "+20 años" ya existentes en description, no se inventaron datos

**Objetivo CTR:** > 3% en 21 días (posición top)

---

#### 5. `/servicios/evaluacion-fonoaudiologica`

**Cambios:**
- **Keywords:** Añadido "evaluacion fonoaudiologica" (sin tilde) + "informe para el colegio"
- **Description:** Reforzado "informe escrito para el colegio" (dato que ya existía en contenido)

**Objetivo CTR:** > 2% en 21 días

---

#### 6. `/servicios/tel-trastorno-especifico-lenguaje`
**Métricas GSC previas:** 73 imp, 0 clics  
**Query real:** "el tel se cura" (pos 9)

**Cambios:**
- **Title:** `"TEL: ¿Se Cura? Tratamiento del Trastorno Específico del Lenguaje"` — responde query directa
- **Description:** Explicita "no se cura pero mejora mucho con terapia intensiva"

**Objetivo CTR:** > 3% en 21 días (capturar query específica)

---

#### 7. `/sintomas/nino-no-entiende-instrucciones-chillan`
**Métricas GSC previas:** pos 5, 0 clics

**Cambios:**
- **Title:** `"Niño no entiende instrucciones: ¿Comprensión o atención?"` — plantea distinción clave
- **Description:** "Puede ser déficit de comprensión o atención" + cuándo evaluar

**Objetivo CTR:** > 4% en 21 días (posición top 5)

---

#### 8. `/sintomas/mi-hijo-no-habla-bien-chillan`
**Métricas GSC previas:** pos 6, 0 clics

**Cambios:**
- **Title:** `"Mi hijo no habla bien: ¿Cuándo consultar?"` — responde preocupación principal
- **Description:** "no se le entiende, habla como bebé" + señales por edad
- **Keywords:** Añadido "no se le entiende al hablar" y "habla como bebé"

**Objetivo CTR:** > 4% en 21 días (posición top 6)

---

#### 9. `/sintomas/hijo-no-arma-frases-chillan`
**Métricas GSC previas:** pos 5,6, 0 clics

**Cambios:**
- **Title:** `"Mi hijo de 2 años no forma frases: solo «mamá ven», «más pan»"` — edad específica + ejemplos concretos
- **Description:** "palabras sueltas como «mamá ven» o «más pan»" (ejemplos reales que usan padres)

**Objetivo CTR:** > 5% en 21 días (posición top, intent muy específico)

---

### Otras mejoras transversales

1. **Keywords con variantes sin tilde:** "evaluacion fonoaudiologica", "fonoaudiólogo" (masculino) en páginas clave
2. **Titles con preguntas directas:** "¿Cuándo consultar?", "¿Se cura?", "¿Comprensión o atención?" capturan queries informacionales
3. **Descriptions con ejemplos concretos:** Frases específicas que padres usan ("mamá ven", "más pan", "habla como bebé")

### Métricas a monitorear (GSC)

**Periodo de medición:** 14-21 días post-indexación

**KPIs Lote 2:**
1. **CTR general del sitio:** objetivo > 2% (baseline 1,4%)
2. **CTR `/servicios/tel-trastorno-especifico-lenguaje`:** objetivo > 3% (capturar "el tel se cura")
3. **CTR `/sintomas/hijo-no-arma-frases-chillan`:** objetivo > 5% (posición top + intent específico)
4. **Clics totales:** objetivo +25% sobre baseline de 86 clics/90d

**URLs a seguir de cerca:**
- `/servicios/tel-trastorno-especifico-lenguaje` (73 imp, query "el tel se cura" pos 9 → esperado 2-3 clics)
- `/sintomas/hijo-no-arma-frases-chillan` (pos 5,6 → esperado 3-4 clics con CTR 5%)
- `/voz-online/fonoaudiologa-voz-antofagasta` (453 imp → esperado 9 clics con CTR 2%)

### Siguientes pasos

1. **Post-deploy:**
   - Solicitar indexación manual en GSC para las 9 URLs optimizadas
   - Validar que los cambios de metadata se reflejan en SERPs (inspeccionar URL)

2. **Monitoreo:**
   - Revisar GSC en 7 días (tendencia temprana)
   - Revisar GSC en 14-21 días (medición completa)
   - Comparar queries con 0 clics vs nuevas queries con clics

3. **Lote 3 (futuro):**
   - Páginas tratamientos locales con impresiones (ej. TEL, retraso del lenguaje)
   - Optimización de URLs con > 15 impresiones y CTR < 1%

---

## 2026-10-05: SEO Lote 1 — CTR y query-match en URLs prioritarias

### Contexto

**Datos GSC (90 días al 2026-10-05):**
- 59 páginas indexadas
- 88 clics totales
- 6.230 impresiones
- CTR promedio: 1,41%
- Posición promedio: 7,6

**Problema detectado:** Alto volumen de impresiones en páginas clave pero CTR muy bajo o cero clics.

**Objetivo:** Mejorar CTR en páginas prioritarias optimizando title, description, contenido inicial y enlaces internos.

### Páginas optimizadas

#### 1. `/` (Home)
**Métricas GSC previas:** 1.794 imp, 23 clics, CTR 1,28%, pos 5,35  
**Queries principales sin clics:** "fonoaudiologa" (277/0), "fonoaudiólogo" (194/0)

**Cambios:**
- **Title:** `"Fonoaudióloga Infantil en Chillán | Terapia de Lenguaje"` → `"Fonoaudióloga en Chillán | Evaluación y Terapia de Lenguaje Infantil"`
  - Incluye tanto "fonoaudióloga" como "fonoaudiólogo" (query alternativa)
  - Añade "evaluación" (intento transaccional)
  - Más directo y específico
- **Description:** Expandida con CTA clara: "Agenda tu hora por WhatsApp y te respondo en menos de 24 horas"
  - Añade urgencia y reduce fricción
- **FAQ mejoradas:**
  - "¿Qué problemas trata una fonoaudióloga infantil?" (más específico)
  - "¿Cómo es la primera consulta con el fonoaudiólogo?" (captura variante masculina)
  - Respuesta más completa sobre edad de evaluación con ASHA como autoridad
- **Enlaces internos:** Añadidos links a `/recursos/hitos-del-lenguaje-por-edad` y `/agendar-hora-fonoaudiologo-infantil-chillan`

**Objetivo CTR:** > 2,5% en 21 días

---

#### 2. `/fonoaudiologa-ninos-chillan`
**Métricas GSC previas:** 538 imp, 4 clics, CTR 0,74%, pos 7,57

**Cambios:**
- **Title:** `"Fonoaudióloga para Niños en Chillán | Lenguaje y Habla"` → `"Fonoaudióloga Infantil en Chillán | Especialista en Niños"`
  - Refuerza "infantil" (búsqueda padre-madre)
  - "Especialista" aumenta autoridad percibida
- **Description:** Añadido "+20 años de experiencia" para credibilidad y expansión con "evaluación fonoaudiológica infantil con informe"

**Objetivo CTR:** > 1,5% en 21 días

---

#### 3. `/recursos/hitos-del-lenguaje-por-edad`
**Métricas GSC previas:** 250 imp, 0 clics, pos 8,55  
**Queries principales:** "hitos del lenguaje por edad" (2 imp), "a qué edad hablan los niños" (91 imp)

**Cambios:**
- **Title:** Más específico y keyword-rich: `"¿A qué edad hablan los niños? Hitos del lenguaje 0-5 años | Fonoaudióloga"`
  - Responde directamente la pregunta principal (a qué edad hablan)
  - Añade rango de edad "0-5 años" para especificidad
  - "Fonoaudióloga" refuerza E-E-A-T
- **Description:** Hook emocional + keywords: "A los 12 meses primeras palabras, a los 2 años unas 50 palabras y frases de 2 palabras. Guía con hitos del lenguaje por edad, señales de alerta y cuándo consultar. Por Katia Domínguez, fonoaudióloga con +20 años en Chillán."
  - Respuesta directa en snippet
  - Autoridad (nombre + experiencia + ciudad)
- **Keywords:** Añadido "a qué edad hablan los bebés" (búsqueda alternativa)
- **Contenido:**
  - Añadido link a `/agendar-hora-fonoaudiologo-infantil-chillan` en intro
  - Enlaces a `/servicios` y `/tratamientos/retraso-del-lenguaje-chillan` en sección "Qué hacer"

**Objetivo CTR:** > 3% en 21 días (posición buena, snippet débil)

---

#### 4. `/agendar-hora-fonoaudiologo-infantil-chillan`
**Métricas GSC previas:** 188 imp, 0 clics, pos 5,49  
**Alerta:** Posición excelente (5,49) con 0 clics = snippet pobre

**Cambios:**
- **Title:** `"Agendar Fonoaudióloga Infantil en Chillán | WhatsApp"` → `"Agendar Hora Fonoaudiólogo Infantil en Chillán | Respuesta en 24h"`
  - "Respuesta en 24h" reduce fricción y da certeza
  - Captura variante "fonoaudiólogo" (masculino)
- **Description:** Añadido "Te respondemos el mismo día, horario flexible para familias"
  - CTA urgente
  - Beneficio familiar (horario escolar compatible)
- **Contenido:** Añadido link a `/recursos/hitos-del-lenguaje-por-edad` en cuerpo

**Objetivo CTR:** > 5% en 21 días (posición top, debe convertir mejor)

---

#### 5. `/servicios`
**Métricas GSC previas:** 185 imp, 0 clics, pos 8,43

**Cambios:**
- **Title:** `"Terapia de Lenguaje y Fonoaudiología Infantil | Chillán"` → `"Servicios de Fonoaudiología Infantil en Chillán | Terapia de Lenguaje"`
  - "Servicios" captura búsquedas informacionales
  - Estructura más clara (qué → dónde)
- **Description:** Expandida con servicios específicos: "terapia de lenguaje y habla, evaluación fonoaudiológica con informe, TEL, dificultades de pronunciación y lectoescritura. +20 años de experiencia. Agenda por WhatsApp."
  - Keywords densas
  - CTA final
- **Enlaces internos:** Añadidos links a `/recursos/hitos-del-lenguaje-por-edad` y `/agendar-hora-fonoaudiologo-infantil-chillan`

**Objetivo CTR:** > 2% en 21 días

---

#### 6. `/tratamientos/tel-trastorno-especifico-lenguaje-chillan`
**Métricas GSC previas:** 173 imp, 0 clics, pos 7,51

**Cambios:**
- **Title:** `"Tratamiento TEL (Trastorno del Lenguaje) | Chillán"` → `"Tratamiento TEL en Chillán | Trastorno Específico del Lenguaje Infantil"`
  - "Trastorno Específico del Lenguaje" completo para búsquedas long-tail
  - "Infantil" especifica público
- **Description:** Añadido "El TEL afecta al 7% de los niños. Agenda tu evaluación." (dato estadístico + urgencia)
- **Keywords:** Añadido "TEL Chillán", "tratamiento TEL"

**Objetivo CTR:** > 2% en 21 días

---

#### 7. `/tratamientos/trastorno-fonologico-chillan`
**Métricas GSC previas:** 140 imp, 0 clics, pos 5,14  
**Alerta:** Ranking excelente (5,14) sin clics

**Cambios:**
- **Title:** `"Mi hijo no pronuncia bien | Trastorno fonológico Chillán"` → `"Trastorno Fonológico en Chillán | Mi hijo no se le entiende al hablar"`
  - "No se le entiende" = lenguaje coloquial de padres (dolor específico)
  - Title tipo problema-solución
- **Description:** "¿Tu hijo de 3-4 años no se le entiende o habla como bebé?" (pregunta directa, edad específica)
  - "Terapia presencial con conciencia fonológica" (técnica + local)
- **Keywords:** Añadido "niño no se le entiende", "pronunciación infantil"

**Objetivo CTR:** > 4% en 21 días (posición top 5)

---

#### 8. `/tratamientos/retraso-del-lenguaje-chillan`
**Métricas GSC previas:** 106 imp, 0 clics, pos 2,80  
**Alerta crítica:** Posición 2,8 promedio (top 3) con 0 clics = snippet no optimizado para intención

**Cambios:**
- **Title:** `"Mi hijo habla poco: retraso del lenguaje | Chillán"` → `"Retraso del Lenguaje en Chillán | Mi hijo de 2 años no habla o habla poco"`
  - Edad específica "2 años" (query frecuente)
  - Dos variantes: "no habla" + "habla poco"
- **Description:** "¿Tu hijo de 2 años no habla, habla poco o no arma frases? Tratamiento de retraso del lenguaje infantil en Chillán: evaluación fonoaudiológica, terapia de lenguaje presencial y plan personalizado. La intervención temprana mejora resultados."
  - Pregunta directa (intent match)
  - Proceso completo (evaluación → tratamiento → plan)
  - Beneficio emocional (intervención temprana)
- **Keywords:** Añadido "mi hijo de 2 años no habla", "niño habla poco"

**Objetivo CTR:** > 8% en 21 días (posición excepcional, debe capturar tráfico)

---

### Otras mejoras transversales

1. **Enlaces internos estratégicos:**
   - Home → hitos-del-lenguaje + agendar-hora
   - hitos-del-lenguaje ↔ agendar-hora, servicios, retraso-del-lenguaje
   - servicios ↔ hitos-del-lenguaje, agendar-hora
   - agendar-hora → hitos-del-lenguaje

2. **Consistencia de FAQs:**
   - Expandidas con datos ASHA (7% prevalencia TEL)
   - Variaciones lingüísticas (fonoaudióloga/fonoaudiólogo)
   - Respuestas más completas y orientadas a padres

3. **Schema mantenido:**
   - No se modificó schema existente (ya optimizado)
   - FAQPage, Service, Article schemas activos

### Métricas a monitorear (GSC)

**Periodo de medición:** 14-21 días post-indexación (solicitar indexación manual en GSC)

**KPIs Lote 1:**
1. **CTR general del sitio:** objetivo > 2,5% (baseline 1,41%)
2. **CTR Home:** objetivo > 2,5% (baseline 1,28%)
3. **CTR /retraso-del-lenguaje-chillan:** objetivo > 8% (posición top 3)
4. **CTR /trastorno-fonologico-chillan:** objetivo > 4% (posición top 5)
5. **Clics totales:** objetivo +50% sobre baseline de 88 clics/90d

**URLs a seguir de cerca:**
- `/recursos/hitos-del-lenguaje-por-edad` (250 imp → esperado 7-8 clics con CTR 3%)
- `/agendar-hora-fonoaudiologo-infantil-chillan` (188 imp → esperado 9-10 clics con CTR 5%)
- `/tratamientos/retraso-del-lenguaje-chillan` (106 imp → esperado 8 clics con CTR 8%)

### Siguientes pasos

1. **Post-deploy:**
   - Solicitar indexación manual en GSC para las 8 URLs optimizadas
   - Validar que los cambios de metadata se reflejan en SERPs (inspeccionar URL)

2. **Monitoreo:**
   - Revisar GSC en 7 días (tendencia temprana)
   - Revisar GSC en 14-21 días (medición completa)
   - Comparar queries con 0 clics vs nuevas queries con clics

3. **Lote 2 (futuro):**
   - Páginas voz-online con volumen (Antofagasta, voz online, parálisis cordal)
   - `/recursos/estimular-lenguaje-en-casa` (284 imp, CTR 1,4%, pos 15)
   - Optimización de URLs con > 20 impresiones y CTR < 1%

---

## Template para futuros lotes

```markdown
## YYYY-MM-DD: Título del lote

### Contexto
- Baseline GSC: X clics, Y imp, Z% CTR, pos W
- Problema: ...
- Objetivo: ...

### Páginas optimizadas
#### URL
**Métricas previas:** ...  
**Cambios:** ...  
**Objetivo:** ...

### Métricas a monitorear
- KPI 1: ...
- KPI 2: ...

### Siguientes pasos
1. ...
2. ...
```
