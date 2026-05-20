# Evaluación completa SEO — katialafono.cl

**Fecha:** 2026-05-20  
**Propiedad GSC:** `sc-domain:katialafono.cl`  
**Periodo analizado:** 2026-04-22 → 2026-05-20 (28 días)  
**Periodo comparado:** 2026-03-24 → 2026-04-21 (28 días)  
**Fuentes:** Search Console API, skill *google-search-console*, skill *seo-audit*, skill *seo-geo*, auditoría técnica en vivo (`curl`)

**Informe API detallado (datos crudos):** [`gsc-informe-2026-05-20.md`](./gsc-informe-2026-05-20.md)  
**Panel interno:** `/interno/gsc` (local: http://localhost:3000/interno/gsc)

---

## Resumen ejecutivo

| Métrica | Actual | Anterior | Δ | Lectura |
| --- | --- | --- | --- | --- |
| Clics | **22** | 10 | **+120%** | Crecimiento en volumen bajo |
| Impresiones | **854** | 766 | **+11,5%** | Más visibilidad SERP |
| CTR | **2,58%** | 1,31% | **+1,27 pp** | Mejora global, muy desigual por URL |
| Posición media | **16,6** | 4,5 | **+12,1** (peor) | Dilución por URLs nuevas visibles (glosario, landings) |

**Diagnóstico en una frase:** el sitio **gana exposición** pero **no convierte** en las URLs que más impresiones generan (home www, landings Chillán posición 2–3 con 0% CTR). El **77% de clics es móvil** (pos. 5,9); desktop arrastra posición media (38,6). **Casi todo el tráfico es no-marca** (0 clics de marca detectados).

**Prioridad absoluta (P0):** unificar señal **www** (redirect 307 + canonical + sitemap ya apuntan a www, pero **10 de 22 clics** van a `katialafono.cl` sin www mientras **337 impresiones** están en home www con CTR 0,30%). Corregir snippets en 5 URLs con mayor gap de CTR.

---

## 1. Rendimiento y tendencias (skill: Google Search Console)

### 1.1 KPIs y serie diaria

- Picos de impresiones sin clics: 28 abr (49 imp), 6–10 may, 13 may, 16–17 may.
- Mejores días de posición: 12 may (pos. 3,9), 17–18 may (pos. 2,1–3,9).
- Único clic transaccional local claro: **«fonoaudiologia chillan»** (1 clic, 14 imp., pos. 6,5 → landing apex).

### 1.2 CTR vs benchmark (top 8 URLs — gap teórico ~138 clics/mes)

| URL | Imp. | CTR | Esperado | Gap | Potencial clics |
| --- | --- | --- | --- | --- | --- |
| https://www.katialafono.cl/ | 337 | 0,30% | 10% | +9,70 pp | ~33 |
| https://www.katialafono.cl/chillan/tel | 159 | 0% | 15% | +15 pp | ~24 |
| https://www.katialafono.cl/chillan/lenguaje-infantil | 150 | 0% | 15% | +15 pp | ~23 |
| https://www.katialafono.cl/servicios | 149 | 0,67% | 15% | +14,33 pp | ~21 |
| https://www.katialafono.cl/agendar-hora-fonoaudiologo-infantil-chillan | 82 | 0% | 15% | +15 pp | ~12 |
| https://www.katialafono.cl/fonoaudiologa-ninos-chillan | 193 | 0% | 6% | +6 pp | ~12 |
| https://www.katialafono.cl/fonoaudiologia-infantil-chillan | 83 | 1,20% | 10% | +8,80 pp | ~7 |
| https://www.katialafono.cl/chillan/tea-comunicacion | 49 | 2,04% | 15% | +12,96 pp | ~6 |

### 1.3 Consultas prioritarias (impresiones, 0 clics, posición útil)

| Consulta | Imp. | Pos. | Acción |
| --- | --- | --- | --- |
| fonoaudiologa | 46 | 6,7 | Title/meta: infantil + Chillán + agenda |
| fonoaudiologia | 45 | 3,5 | Mismo; home absorbe 44 imp. |
| fonoaudiologo chillan | 7 | 2,4 | Recuperar -1 clic vs periodo anterior |
| fonoaudiología infantil | 6 | 9,0 | Alinear `/fonoaudiologia-infantil-chillan` |
| katia / doctora katia | 19 | 1–3,5 | Marca en title, E-E-A-T |

### 1.4 Tendencias

**Consultas en alza:** dislalia (+14 imp.), qué es la dislalia (+13), katia (+9), fonoaudiologia chillan (+1 clic).  
**Consultas en baja:** fonoaudiologo chillan (-1 clic, -11 imp.), fonoaudiologia (-27 imp.), speech (-18 imp.).

**Páginas en alza (impresiones sin clics):** `/chillan/lenguaje-infantil` (+150), `/agendar-hora-...` (+82), `/glosario/dislalia` (+67), `/glosario/tel` (+53).  
**Páginas en baja:** `/fonoaudiologa-ninos-chillan` (-2 clics, -96 imp.), `/chillan/retraso-del-habla`, `/chillan/dislalia`, `/chillan/lectoescritura`.

### 1.5 Segmentación

| Segmento | Clics | Imp. | CTR | Pos. |
| --- | --- | --- | --- | --- |
| Móvil | 17 (77%) | 570 | 2,98% | 5,9 |
| Desktop | 5 | 278 | 1,80% | 38,6 |
| Chile (chl) | 21 | 699 | 3,00% | 6,3 |
| España (esp) | 0 | 92 (11%) | 0% | 75,6 |

### 1.6 Sitemaps e indexación

| Sitemap | Warnings | Enviadas | Indexadas (API) |
| --- | --- | --- | --- |
| www.katialafono.cl/sitemap.xml | **1** | 64 | 0 |
| katialafono.cl/sitemap.xml | 0 | 64 | 0 |

**Nota:** 0/64 en informe de sitemaps **no implica** sitio fuera del índice. Inspección URL: `https://katialafono.cl/` → **PASS**, indexada. Revisar warning en UI GSC. Sitemap en vivo: **71 URLs** (código `sitemap.ts` + `SITE_URL` www).

**Alerta:** `https://katialafono.cl/agendar` → NEUTRAL («Google no reconoce esta URL»). Validar ruta real de agendamiento (`/agendar-hora-fonoaudiologo-infantil-chillan`).

---

## 2. Auditoría técnica (skill: SEO Audit)

### 2.1 Crawlability — estado

| Check | Resultado |
| --- | --- |
| robots.txt | OK en www; apex 307 → www |
| Sitemap | OK, 71 `<loc>` todas www |
| Bots IA | Permitidos (GPTBot, PerplexityBot, ClaudeBot, etc.) |
| Disallow | Solo `/seo-links` (correcto) |
| Redirect apex | **307** → www (recomendable **301** si Vercel/CDN lo permite) |

### 2.2 www vs non-www — evidencia

```
curl -sI https://katialafono.cl/     → 307 → https://www.katialafono.cl/
curl -sI https://www.katialafono.cl/ → 200
```

- Código: `SITE_URL = "https://www.katialafono.cl"`, canonical en HTML → www.
- GSC: clics concentrados en apex; impresiones en www → **fragmentación de señales**.

### 2.3 On-page crítico (acciones title/meta)

| URL | Imp. | Problema detectado | Acción |
| --- | --- | --- | --- |
| `/chillan/tel` | 159 | Meta truncada/duplicada en HTML | Reescribir title + meta 150–155 car. con CTA Chillán |
| `/chillan/lenguaje-infantil` | 150 | Canonical → `/fonoaudiologa-ninos-chillan`; 0% CTR | 301 al pilar o alinear snippet al canonical |
| `/fonoaudiologa-ninos-chillan` | 193 | Title largo, pos. 3,7, 0 clics | Acortar title; meta con dolor + prueba social |
| `/agendar-hora-fonoaudiologo-infantil-chillan` | 82 | Intención agendar, 0 clics | Title «Agendar fonoaudiólogo infantil Chillán» |
| `/servicios` | 149 | Doble marca en title (layout + página) | Un solo «Katia Domínguez» en SERP |

### 2.4 Qué NO tocar

- `/seo-links` — noindex + disallow
- `/interno/gsc` — panel interno, noindex
- Landings con `canonicalPath` intencional (consolidación): no quitar canonical sin estrategia; preferir dejar de enlazar o 301
- Arquitectura programática Chillán / glosario / voz-online (el problema es snippet y hosts, no el volumen de URLs)

---

## 3. Estrategia SEO/GEO (skill: SEO-GEO)

### 3.1 Mapa de intención

| Intención | Ejemplos GSC | Prioridad negocio |
| --- | --- | --- |
| Transaccional local | fonoaudiologia chillan, fonoaudiologo chillan | **Alta** |
| Informativa | dislalia, qué es TEL, definición tel | Media (funnel → Chillán) |
| Marca | katia, doctora katia | Media (capturar 0 clics actuales) |
| Ruido | logopeda, speech, tráfico España | Baja / no perseguir |

### 3.2 Clusters keyword (impresiones sin clics)

1. Fonoaudiología genérica (~120 imp.) → home  
2. Dislalia definicional (~45 imp.) → `/glosario/dislalia` (pos. 81+)  
3. TEL/TDL (~35 imp.) → `/glosario/tel`  
4. Landings Chillán tel + lenguaje (309 imp. combinadas, pos. 2)  
5. Fonoaudiologa niños Chillán (193 imp., pos. 3,7)  
6. Agendar (82 imp.)  
7. Voz / cuerdas vocales (pos. 76–89) — secundario  
8. Marca katia (18 imp.)  
9. Logopedia/speech — ruido internacional  
10. Higiene vocal — long-tail voz  

### 3.3 GEO (citabilidad IA)

| Tipo | Rol | Acción |
| --- | --- | --- |
| Glosario | Definiciones citables (ChatGPT, Perplexity) | Answer-first, FAQPage schema, autoría, enlace a Chillán |
| Landings Chillán | Conversión local | MedicalBusiness + areaServed; no competir con glosario en definiciones |
| Voz online | Nicho secundario | Mantener; PDF guía higiene vocal opcional |

**Prueba manual GEO (próximo mes):** prompts «qué es dislalia», «TEL en niños Chile» — registrar si citan katialafono.cl.

### 3.4 España (92 imp., 0 clics)

No invertir en rankings España. Refuerzo geo en copy: «Chillán, Ñuble, Chile». Evitar optimizar «logopeda» como keyword principal.

---

## 4. Plan de acción consolidado

### P0 — 72 horas

| # | Acción | Responsable | Verificación |
| --- | --- | --- | --- |
| 1 | Confirmar www como URL canónica única (301 si posible; revisar enlaces internos/backlinks) | Dev | Una sola URL home en GSC «Páginas» |
| 2 | Abrir warning sitemap www en GSC → Sitemaps | SEO | Warning resuelto o documentado |
| 3 | URL Inspection: agendar, home www, `/chillan/tel`, `/fonoaudiologa-ninos-chillan` | SEO | PASS o acción de indexación |
| 4 | Reescribir title/meta home www (337 imp., CTR 0,30%) | Contenido | CTR home >1% en 28 d |
| 5 | Corregir meta rota `/chillan/tel` | Contenido | `curl` sin truncado |
| 6 | Corregir title duplicado `/servicios` | Contenido | Sin doble marca en SERP |

### P1 — 2 semanas

| # | Acción |
| --- | --- |
| 7 | Pack CTR: `/chillan/lenguaje-infantil`, `/agendar-hora-...`, `/fonoaudiologa-ninos-chillan`, `/chillan/tea-comunicacion` |
| 8 | Recuperar query «fonoaudiologo chillan» |
| 9 | Glosario dislalia/TEL: FAQ schema + enlaces a landings Chillán |
| 10 | Resolver alias `/chillan/lenguaje-infantil` (301 o dejar de enlazar) |

### P2 — 30 días

| # | Acción |
| --- | --- |
| 11 | Estrategia no-marca: contenido y enlaces para `fonoaudiologa` / `fonoaudiologia` |
| 12 | Revisar páginas voz-online fuera de Chillán (¿cannibalización?) |
| 13 | Seguimiento tráfico `esp` — umbral 15% imp sin clics → decisión hreflang/noindex |
| 14 | `lastmod` en sitemap por URL realmente actualizada |

---

## 5. Marco de evaluación de cambios

Usar esta tabla al aplicar cada cambio (copiar fila por fila en el próximo informe).

| Fecha cambio | Cambio aplicado | URLs afectadas | KPI objetivo | Revisar en GSC (fecha) | Resultado |
| --- | --- | --- | --- | --- | --- |
| 2026-05-20 | Ola 1: titles/metas + redirects lenguaje-infantil/agendar | /, /chillan/tel, /fonoaudiologa-ninos-chillan, /agendar-*, /servicios | CTR home ≥1%; tel ≥3% | 2026-06-19 | pendiente deploy |
| 2026-05-20 | Ola 2: glosario GEO + hubs + sitemap lastmod | /glosario/*, /chillan, /servicios | clics glosario; enlaces internos | 2026-06-19 | pendiente deploy |
| | | | | | |
| _ej. 2026-05-22_ | _Title home www_ | _/_ | _CTR home >1%_ | _2026-06-19_ | _pendiente_ |

### Baseline (guardar para comparación)

| Métrica | Valor 2026-05-20 |
| --- | --- |
| Clics (28 d) | 22 |
| Impresiones (28 d) | 854 |
| CTR global | 2,58% |
| Posición media | 16,6 |
| Clics home www | 1 |
| Imp. home www | 337 |
| CTR home www | 0,30% |
| Clics apex home | 10 |
| Imp. `/chillan/tel` | 159 |
| Imp. `/fonoaudiologa-ninos-chillan` | 193 |
| Imp. España / total | 92 / 854 (10,8%) |
| Sitemap indexadas/enviadas | 0 / 64 |

### Objetivos orientativos — periodo 2026-06-22 → 2026-07-20

| Métrica | Objetivo |
| --- | --- |
| Clics | ≥ 35 (+60% vs baseline) |
| CTR landings pos. <5 | ≥ 3% en `/chillan/tel` y `/lenguaje-infantil` |
| Clics no-marca | ≥ 5 |
| Host en impresiones | ≥ 90% en www |
| Glosario dislalia/TEL | Posición media < 40 en cluster definicional |
| Clics `/agendar-*` | ≥ 2 |
| Imp. España / total | < 10% o estable sin inversión |

---

## 6. Checklist de monitoreo mensual

### Datos (API / CLI)

- [ ] `npm run gsc:report` — resumen consola
- [ ] `npm run gsc:report:md` — nuevo `docs/gsc-informe-YYYY-MM-DD.md`
- [ ] Actualizar sección «Baseline» y «Resultado» en este documento (o crear `gsc-evaluacion-completa-YYYY-MM-DD.md`)

### Google Search Console (UI)

- [ ] Performance 28 d vs 28 d anterior (no solo 2 puntos)
- [ ] Trending queries y páginas (Insights)
- [ ] Page indexing: indexed vs not indexed (tendencia)
- [ ] Sitemaps: warning, 0/64 vs inspección manual 5 URLs
- [ ] Core Web Vitals (móvil primero)
- [ ] Manual actions / security

### Técnico

- [ ] `curl -sI https://katialafono.cl/` — sigue 307/301 a www
- [ ] Conteo `<loc>` en sitemap vs GSC enviadas
- [ ] CTR audit top 10 URLs por impresiones

### GEO (manual)

- [ ] 3 prompts en ChatGPT + Perplexity (dislalia, TEL Chile, fonoaudiologa Chillán)
- [ ] Registrar citas a katialafono.cl

### Operativo

- [ ] Anotar deploys / cambios CMS en tabla §5
- [ ] Screenshot gráficos Performance + Indexing
- [ ] Revisar panel `/interno/gsc`

---

## 7. Comandos de referencia

```bash
# Regenerar datos
npm run gsc:report
npm run gsc:report:md

# Verificación técnica rápida
curl -sI https://katialafono.cl/
curl -sI https://www.katialafono.cl/
curl -s https://www.katialafono.cl/robots.txt | head -20
curl -s https://www.katialafono.cl/sitemap.xml | grep -c '<loc>'

# Typecheck panel
npx tsc --noEmit

# Panel local
npm run dev
# → http://localhost:3000/interno/gsc
```

---

## 8. Archivos y skills usados

| Recurso | Ruta |
| --- | --- |
| Informe API | `docs/gsc-informe-2026-05-20.md` |
| Este documento | `docs/gsc-evaluacion-completa-2026-05-20.md` |
| Skill GSC | `.agents/skills/google-search-console/SKILL.md` |
| Skill auditoría | `.agents/skills/seo-audit/SKILL.md` |
| Skill SEO/GEO | `.agents/skills/seo-geo/SKILL.md` |
| Panel | `app/interno/gsc/` |
| Config sitio | `lib/site.ts`, `app/robots.ts`, `app/sitemap.ts` |

---

*Generado con datos API del 2026-05-20 y análisis paralelo por skills GSC, seo-audit y seo-geo. Próxima revisión recomendada: 2026-06-20.*
