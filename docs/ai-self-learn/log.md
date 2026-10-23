# Log self-learn (append-only)

Formato: `YYYY-MM-DD | tema | hecho | acción/implicación`

---

## 2026-10-23

- Voz online mercados, copy | En las 9 páginas de país se quitaron descargos de licencia, seguro, colegiación, NHS, Medicare, matrícula y «no es en francés». La meta queda en positivo: terapia de voz en español, videollamada desde Chile, adultos, horario según zona horaria. No se afirma licencia, seguro, precio ni consulta local. El otorrino sigue mirando las cuerdas. | Changelog `SEO-CHANGELOG.md`.

## 2026-10-23

- Voz online mercados | 14 URLs nuevas. Países: `/voz-online/espana` (logopeda; Madrid y Barcelona dentro, sin URL propia), `/voz-online/argentina` (fonoaudióloga online; foniatría = médico, no esta hora), `/voz-online/miami`, `/voz-online/estados-unidos` (NY, Texas, California dentro), `/voz-online/canada` (Toronto y Montreal; sesión no es en francés), `/voz-online/reino-unido` (Londres dentro; sin NHS), `/voz-online/alemania`, `/voz-online/suiza`, `/voz-online/australia`. Temas: call center/teletrabajo, menopausia, voz tras resfrío o COVID, proyección de voz, presbifonía (solo voz; sin deglución ni audición). Horario publicado lun–vie 10:00–18:00 hora de Chile; la hora se coordina por WhatsApp sin desfase fijo. Sin precios, seguros ni licencias locales. No se creó calentamiento, higiene, docentes, ronquera, fatiga ni cantantes aficionados (ya existen). Agendar infantil no se enlaza (`/agendar` → hora de niños). | Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar las 14 URLs y reenviar sitemap; medir ~2026-11-06..11-13.

## 2026-10-22

- SEO Lote 16 | Tres URLs nuevas, sin otras ciudades: `/preguntas/el-tel-se-cura` (sin cura ni porcentajes), `/voz-online/disfonia-por-estres` y `/voz-online/disfonia-espasmodica` (complemento; el médico diagnostica; sin fármacos ni dosis). No se creó `/voz-online/nodulos-cirugia-o-terapia`: el H1 y las FAQ de `/voz-online/nodulos-vocales-tratamiento-online` ya cubren cirugía o terapia. Tarjetas solo en los hubs. Sitemap del build 134, lastmod `2026-10-22T12:19:27.000Z`. GSC 90d 07-24..10-21: 85 clic / 5.790 imp / pos 8,1 | Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar las 3 URLs y reenviar sitemap; medir ~2026-11-05..11-12.

## 2026-10-21

- SEO Lote 15 | Tres URLs nuevas de voz online, sin ciudad: `/voz-online/afonia-perdi-la-voz`, `/voz-online/ejercicios-para-la-voz` y `/voz-online/reflujo-y-voz` (esta última en lugar de adultos mayores: el sitio no dice que la terapia de voz atienda adulto mayor, ni ofrece deglución o audición). Tarjetas solo en el hub. Sitemap del build 131. Apex http sigue en dos 308 (Vercel → https apex → www). GSC 90d 07-23..10-20: 87 clic / 5.670 imp / pos 8,1 | Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar las 3 URLs y reenviar sitemap; medir ~2026-11-04..11-11.

## 2026-10-20

- SEO Lote 14 | `/recursos/estimular-lenguaje-en-casa` pasa al cluster «terapia de lenguaje en casa / cómo empezar» y cede «estimulación del lenguaje» a `/servicios/estimulacion-temprana-del-lenguaje-chillan` (ancla «estimulación del lenguaje en Chillán»). `/recursos/primera-evaluacion-fonoaudiologica-infantil` queda como guía de padres («qué esperar y cómo preparar»); la query «evaluacion fonoaudiologica» sigue en `/servicios/evaluacion-fonoaudiologica`. Duración alineada a los 60 minutos ya publicados en el servicio. Sitemap vivo 128 URLs; apex http sigue en dos 308 (Vercel → https apex → www). `lastmod` de `/sintomas/mi-hijo-no-habla-bien-chillan` en el sitemap vivo (`2026-10-15`) no coincide con git (`2026-10-13`); el generador local sí coincide, no se cambió `sitemap.ts` | Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar las 2 guías y reenviar sitemap; medir ~2026-11-03..11-10.
- SEO voz online adultos | Hub retitulado a «Terapia de voz online para adultos en Chile». Páginas nuevas solo donde no había intención: `/voz-online/polipos-en-las-cuerdas-vocales` (terapia de apoyo, otorrino primero) y `/voz-online/como-es-la-sesion-de-voz-online`. Titles de disfonía (solo H1), ronquera, voz cansada, profesores, cantantes/locutores, nódulos e higiene. Entrada en home y `/servicios`. Sin páginas de ciudad, sin `/ads`, sin `/sitelink`. Sitemap autodescubre los `page.tsx` | Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar 12 URLs y medir ~2026-11-03..11-10.

## 2026-10-19

- SEO Lote 13 | Segundo pase Lote 7. Hitos retitle «¿A qué edad hablan los niños?» (223 imp, 0 clic, pos 9,9). Home solo description (fonoaudióloga/fonoaudiología Chillán + voz online, sin «fonoaudiología infantil» en title/H1). `/servicios` hub con listado agrupado y OfferCatalog. Tratamientos de retraso del lenguaje y trastorno fonológico: intro de terapia, MedicalWebPage `dateModified` 2026-10-19; la consulta de edades queda en hitos y las señales fonológicas en `/chillan/trastorno-fonologico`. Google aún no rastreó el Lote 7 | Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar las 6 URLs y medir ~2026-11-02..11-09. Sitemap GSC bajado el 2026-10-11 (85 URLs; vivo 126).

## 2026-10-18

- SEO Lote 12 | Cuello = rastreo, no robots. `/glosario/tdl` entra al índice del glosario y se enlaza desde TEL, disfasia y la comparación TEL vs retraso. Estimulación temprana se retargetea a «estimulación del lenguaje infantil en Chillán» y separa la consulta de la guía de casa. `/chillan/retraso-del-habla` y `/chillan/trastorno-fonologico` quedan como señales y entregan el tratamiento a `/tratamientos/*` (sin 301). Contacto gana ContactPage sobre el `#business` de `lib/site.ts` | Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar comparaciones, glosarios Lote 6, señales de alerta y contacto; reenviar sitemap. El `page.tsx` de `/evaluacion-fonoaudiologica-infantil-chillan` sigue, pero ya hay 308 a `/servicios/evaluacion-fonoaudiologica`.

## 2026-10-17

- SEO Lote 11 | Cuello = descubrimiento/indexación. `/glosario/logopeda` pasa a página estática (logopeda = España, fonoaudiólogo = Chile). `/servicios/conciencia-fonologica-chillan` queda como la consulta, sin canonical ni 301. `/servicios/trastornos-del-habla` pasa a hub de dislalia, fonológico, apraxia, tartamudez y disartria. Lote 5 gana bloque «Guías relacionadas». `lastmod` del sitemap deja de ser el mtime del checkout | Changelog `SEO-CHANGELOG.md`. `pendiente:` indexar logopeda, conciencia fonológica y hubs ronda 1–2; reenviar sitemap (GSC lo bajó el 2026-10-11, 85 URLs). Apex https ya 308 a www; http apex hace un salto extra en Vercel.
- SEO técnico | Sitemap autodescubre `page.tsx` (excluye noindex, redirects y `[slug]` sin datos); títulos ≤60 y metas ≤155; canonical por página; BreadcrumbList en el pilar; schema negocio sin `priceRange` y un solo `@id` `#business`; foto hero JPG ~107 KB | `pendiente:` pedir indexación del sitemap en GSC post-deploy. Next usa `app/` si existe: rutas nuevas en `src/app/` no se sirven ni entran al sitemap.
- SEO ronda 2 | Hubs nuevos `/lenguaje-infantil`, `/dislalia`, `/tartamudez`, `/lectoescritura` (3-4 guías c/u) + 4 preguntas y 3 guías de casa. Enlaces desde pilar, footer, recursos, síntomas y comparaciones. Retrato con alt por página, `sizes` y lazy fuera del LCP | Doc `docs/seo-oportunidades-ronda2.md`. `pendiente:` indexar URLs nuevas. No Fonasa, no precio, no otras ciudades.

## 2026-10-16

- SEO | Lote 10 segundo pase Lote 4 (dislalia ×3, lectoescritura/dislexia ×4, informe PIE, apraxia ×2, 3 síntomas, terapia de lenguaje, disfemia solo enlaces) | Roles y snippets con hechos ya publicados; redirect del informe: source con ó no matchea `%C3%B3`, se agregó el path codificado (308); no city pages, no ads, no Lotes 5-9. Changelog `SEO-CHANGELOG.md`
- GSC | Corte 90d 2026-07-18→2026-10-15: 87 clic / 5.407 imp / pos 8,1 · 7d 10-09..10-15: 8/587 vs 7d previos 5/629 | `pendiente:` indexar 15 URLs y medir ~2026-10-30..11-06

## 2026-10-15

- SEO | Lote 9 segundo pase Lote 3 (glosario TEL, chillan/tel, TEA, 8 voz-online no-ciudad) + agendar (164 imp/0/pos 6,4) + tratamiento TEL Chillán (142 imp/0/pos 9,7) | Title/H1/FAQ/snippet con hechos ya publicados; no city pages, no ads, no Lotes 4-8. Changelog `SEO-CHANGELOG.md`
- GSC | Corte 90d 2026-07-17→2026-10-14: 87 clic / 5.335 imp / pos 8,1 · 7d 10-08..10-14: 10/597 vs 7d previos 2/609 | `pendiente:` indexar 13 URLs y medir ~2026-10-29..11-05

## 2026-10-13

- SEO | Lote 8 segundo pase páginas Lote 2 (estimular casa, TEL servicio, voz online nacional, evaluación, sobre Katia, 3 síntomas) | Query-match title/H1/FAQ/snippet; sin inventar datos; no se tocaron Lotes 3-7 ni city pages. Changelog `SEO-CHANGELOG.md`
- GSC | Corte 90d 2026-07-15→2026-10-12: 87 clic / 5.146 imp / CTR 1,7% / pos 8,0 · 7d 7/542 pos 8,2 | Fresh pull 10-13 bloqueado: OAuth `invalid_grant` → `npm run gsc:auth` antes del próximo informe

## 2026-09-29

- Meta | Funnel consciente del problema (no oferta): anuncio nombra el momento; landing educa/calma; CTA paso chico; consulta después | Landing **8,5/10** post-ajuste. Doc `app/meta/primeros-30-dias-tea/funnel-consciente-del-problema.md`
- Meta | Ranking Reddit dolores post-TEA: #1 lenguaje/comunicación (~14) · #2 qué hago primero (~6) · #3 duelo/culpa · #4 elegir terapeuta | 5–11 casi solo títulos; no usarlos como insight cerrado. Doc `app/meta/primeros-30-dias-tea/dolores-padres-reddit.md`

## 2026-09-10

- Ads | Chillán 7–10 sep: 38 imp / 4 clic / $2.937 / **1 conv** (9 sep, `fonoaudiologo chillan`) | $1.000/día rinde; anamnesis/Comunicados no volvieron
- Ads | Chillán +18 negativas (77→95): amplia pefe/teprosif/plon/celf + frase apraxia intervención / pefe de | Cierra tests clínicos nuevos (`pefe de 7 a 12 años`, `apraxia … intervención`)

## 2026-09-06

- Ads | Ambas campañas **PAUSED** · budget $1.000 c/u (antes $5.000 online / $2.000 presencial) | No sirven hasta reactivar; presencial también `BUDGET_CONSTRAINED`
- Ads | Post-fix 24 ago–3 sep: online `fono-adultos` 74 imp / 6 clic / $6.082 / **1 conv** (31 ago, `fonoaudiologo online`) · presencial 73 / 10 / $9.296 / **2 conv** (27 y 31 ago) | CPA presencial ~$4.648; docentes-voz $0 post-pausa
- Ads | RSA Chillán `821895167715` **APPROVED** · RSA viejo 404 sigue pausado · RSA fono-adultos que convierte (`819480015118`) ON | El rechazo era histórico; el anuncio nuevo sí pasó
- Ads | Bid bajo en `fonoaudiologia online` funcionó: 18 imp / 0 clic / $0 post-23 | Dejó de quemar; exacta `fonoaudiologo online` sí trajo el lead
- Ads | Search terms presencial basura: `anamnesis infantil…` $1.940/0 · marca `comunicados chillán` $539 · tests clínicos 0 clic | Negativizar anamnesis/pauta/test/competidor si se reabre
- Ads | Chillán +25 negativas (52→77): amplia anamnesis/pauta/krefft/protocolo/cesfam/hospital + frase comunicados/andessalud/doctoralia/test apraxia | Cierra gasto clínico y de competidor
- Ads | Chillán **ENABLED** $1.000/día · online sigue PAUSED | Un clic/día máx.; primer serve lunes 8 sep (lun–jue)
- Ads | All-time: online 40 clic / $35.476 / 7 conv · presencial 10 / $9.296 / 2 | 9 WhatsApp totales; sequía 7–30 ago; 3 conv nuevas post-fix

## 2026-08-26

- SEO | SERP scrape infantil Chile 63/207 keywords (Apify scraperlink, gl=CL) · opp cualitativa 0–100 sin volumen/CPC/DA | Informe `docs/seo-oportunidades-serp-infantil-chile-2026-08-26.md`
- SEO | Top opp 93 LOW: `mi hijo de 2 años no forma frases` + `niño de 2 años no habla` · 19 LOW · 8 locales Chillán | Reforzar síntoma/hitos; no páginas Fonasa/precio sin confirmar
- GSC | Corte 90d `2026-05-25`→`2026-08-23`: 88 clics / 4.074 imp / CTR 2,16% / pos 7,6 | Crece visibilidad; cuello principal = CTR y ajuste query→landing
- SEO | `terapia de lenguaje chillán` opp 69 LOW; ruta exacta `/servicios/terapia-de-lenguaje-infantil-chillan` está vacía/redirigida a `/servicios/terapia-lenguaje-infantil` por `next.config.ts` | No tratarla como página standalone al analizar GSC
- SEO | Ejecutado sprint CTR/query-match: home, pilar niños, servicios, agendar, sobre, terapia/evaluación lenguaje, retraso, fonológico y síntomas padre 2-4 años | Titles/H1/FAQ/enlaces internos apuntan a `2 años no habla/no forma frases`, `habla poco`, `3-4 no se le entiende`

## 2026-08-23

- Ads | Campaña `24172404146` `search-fono-presencial-chillan` → **ENABLED** | Landing prod 200; RSA viejo `822009115409` DISAPPROVED `DESTINATION_NOT_WORKING`; RSA nuevo `821895167715` URL `?gads=1` en revisión
- Ads | Landing presencial `/ads/fono-presencial-chillan` + campaña `24172404146` PAUSED · $2.000/día · lun–jue · +keywords | Activar tras deploy; grupo `201984702120`
- SEO/GEO | Análisis 90d GSC: 180 queries, 243 combos query+page, 7 oportunidades priorizadas | Canvas `gsc-seo-geo-opportunities`
- SEO | Home: title "Fonoaudióloga en Chillán — Katia Domínguez | Evaluación infantil + informe" · keywords +fonoaudiólogo +fonoaudiología infantil | CTR SERP mejorado
- SEO | Hitos: H1 → "¿A qué edad empiezan a hablar los niños?" · title captura "a qué edad hablan" (pos ~2, sin página ad-hoc hasta ahora) | Captar long-tail informacional
- SEO | TEL: title → "TEL: ¿Se Cura?" · H1 responde la pregunta directamente · keywords "tel se cura" | Pos ~8 con 40 imp
- SEO | PIE: FAQ JSON-LD schema añadido · title + keywords optimizados | 125 imp / 9 clics, facilitar rich results
- SEO | Estimular en casa: title "Actividades por Edad" · keywords +terapia de lenguaje en casa | Captar padres informacionales
- SEO | Voz hub: title "Especialista en Voz Online — Disfonía, Nódulos, Fatiga" · keywords explícitos | Intención comercial cercana al top
- SEO | Evaluación: title "60 min + Informe" · FAQ nueva "¿Qué es?" + "¿A qué edad evaluar?" · FAQ schema ampliado | Pos 29, contenido para escalar
- Ads | OAuth renovado OK · informe 30d: 319 imp / 34 clic / $29.394 / 6 conv | `docs/google-ads-informe-2026-08-23.md`
- Ads | **0 conv desde 7 ago** · ~$20.9k gastados sin lead nuevo | Urgente cortar gasto muerto
- Ads | `docentes-voz` $8.611 / 9 clic / 0 conv · `fonoaudiologia online` $8.743 / 10 / 0 | Pausar o bajar fuerte
- Ads | AI Max OFF · presupuesto $5.000 · IS 30% · lost budget 64% · lost rank 6% · LIMITED | Cuello otra vez presupuesto, pero sin conversión
- Ads | Motor que convierte: `fono-adultos` 5/6 · `fatiga-vocal` 1 · `voz-disfonia` 0 clic | Mantener foco adultos
- Ads | **Mutaciones aplicadas (23 ago):** RSA swap (819480015118 ON, 820647565901 OFF) · pausados docentes-voz + voz-disfonia · bidding → Manual CPC (eCPC OFF) · 4 keywords EXACT (fonoaudiologo/a online $1500, fonoaudiología online $1500, fatiga vocal tratamiento $1200) · bid `fonoaudiologia online` bajado $500 · 8 negativas nuevas agregadas

## 2026-08-11

- Ads | RSA `fono-adultos` nuevo `820647565901` (15 títulos query-match); anterior `819480015118` PAUSED | Lista en `ads/02-fono-adultos-online/README.md`
- Ads | AI Max apagado en `search-adultos-online` (`enable_ai_max=false`) | Primero OPTED_OUT `TEXT_ASSET_AUTOMATION` (bundling REQUIRED bloqueaba el off)
- Ads | Revisión all-time: 150 imp / 13 clics / 6 conv / $9.870 · 0 conv nuevas desde 7 ago | `docs/google-ads-informe-2026-08-11.md`
- Ads | Cuello: ya no presupuesto (0% lost) sino BIDDING_STRATEGY_LIMITED · rank lost 21,6% · IS 78% | Revisar techo CPC / puja
- Ads | `fonoaudiologia online` 3 clic / $2.281 / 0 conv | Vigilar o bajar puja keyword
- Ads | `docentes-voz` sigue $1.924 / 0 conv (sin pausar) | Pendiente decisión

## 2026-08-06

- Ads | Negativas frase API en `search-adultos-online`: clinica alemana, clínica alemana, indisa, santa maria/maría, davila/dávila, redsalud | Mutación OK (humano pidió)
- Ads | Informe API 7d/30d iguales: 89 imp / 9 clics / 5 conv / $6.571 | `docs/google-ads-informe-2026-08-06.md`
- Ads | Presupuesto diario subió a $5.000; IS 12,8% · 85% perdido por presupuesto | Aún cuello de botella
- Ads | `fono-adultos` 5/5 conv (CPA ~$929); keywords `fonoaudiologa/o online` | Mantener foco
- Ads | `docentes-voz` $1.924 / 0 conv | Pausar o bajar CPC
- Ads | Negativas AI_MAX (integramedica, etc.) del 4 ago aún visibles | Aplicar en campaña
- Ads | OAuth refresh ~7d (app testing) | Re-auth con `npm run google-ads:auth` cuando `invalid_grant`

## 2026-08-01

- GBP | `g.page/r/CQTz_OxX_3IBEAE` redirige a google.com (roto) | Reemplazado por `maps?cid=8785110851903218280` (ficha con 42 reseñas, verificado en browser)
- Ads | Links “ver reseñas / ficha” usan Maps cid | No usar `/review` de g.page
- Ads | Impeccable animate+distill+polish+optimize en `/ads/voz-disfonia-online` | Hero motion LCP-safe; lista señales; pasos numerados; sin CTA mid; sticky mobile; reseñas 5,4; docs `CRAFT.md` + patrón
- Ads | Doc craft | `ads/01-voz-disfonia-online/CRAFT.md` · actualizar `PATRON-LANDING.md`
- Ads | FAQ 3 + línea “Por qué Katia” + CWV lab mobile prod | Perf 99 · LCP 2,2s · CLS 0 · TBT 32ms (Lighthouse CLI; PSI key/cuota faltó)
- Ads | Negativas online ampliadas | `GOOGLEADS/google-ads-negativas-online.md`; separar base, ciudades, presencial/local, adultos/niños y clusters voz/TEA/ACV/deglución; no negativizar `online/virtual` en campañas online
- Ads | Plan confirmado solo terapia online | Negativas ajustadas: quitar ciudades sueltas por defecto, reforzar presencial/local, terapia genérica no fono, telemedicina/trámites, urgencia, países fuera Chile
- Ads | Reseñas con GoogleMark + 6 en desktop | Reutilizar `AdsGoogleTrust.tsx`; documentado en `ads/PATRON-LANDING.md` § Reseñas Google
- Ads | Tag gtag `AW-18364805586` + whatsapp_lead | Doc `GOOGLEADS/google-ads-tag-conversiones.md`; conversión send_to pendiente en Vercel
- Ads | Tel NAP Ads | `+56995497838` (mismo WhatsApp)
- Ads | Conversión Contacto send_to | `AW-18364805586/rBy6CNrQsNocENLjgrVE` (clic WhatsApp; medir como Clic, no page load)
- Ads | API lectura Katialafono | customer `2147001598` OK directo; **no** `LOGIN_CUSTOMER_ID=8057859597` (permission denied); scripts `google-ads:*`; informe vacío 0 campañas (cuenta nueva)

## 2026-07-24

- GBP | Ficha canónica Maps = `https://g.page/r/CQTz_OxX_3IBEAE` (la de las reseñas) | `hasMap`/`sameAs`/footer apuntan ahí; no share.google
- GBP | Perfil share.google SOIeUwKImRCdMJTrN era el share del panel; reseñas viven en g.page CQTz… | Usar g.page como URL principal
- GBP | UI muestra “¿Eres propietario?” | Verificar claim/verificación con Katia
- Maps | Posible duplicado “katia Dominguez” cerca del pin principal | Revisar fusión/ocultar
- NAP | Schema tenía opens 09:00; GBP abre 10:00 | Código alineado a 10:00–18:00
- NAP | reviewCount web 40 vs GBP 42 | Actualizado a 42
- Código | Centralizado MedicalBusiness + links footer/contacto/reseñas | Doc `docs/gbp-vinculacion-web-2026-07-24.md`
- Proceso | Creado self-learn INDEX+log + regla Cursor | Leer INDEX antes de re-auditar

## 2026-07-17

- GSC | 25 clics / 1247 imp / CTR 2% / pos 8,1 | Titles P0 aún sin atribución clara
- GSC | OAuth invalid_grant → re-auth OK | Token renovado
- SEO | Pos 2–3 con 0 CTR en servicios/agendar/retraso = mayor gap | Prioridad rewrite/recrawl

## 2026-07-09

- SEO | Titles/metas P0+P1 aplicados (home, sobre, agendar, servicios, retraso, pilar, apraxia) | Live en prod
- GSC | Informe 11 jun–9 jul: 32 clics / 1279 imp / CTR 2,5% / pos 7,5 | Baseline pre-title
