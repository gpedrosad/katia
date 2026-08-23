# Log self-learn (append-only)

Formato: `YYYY-MM-DD | tema | hecho | acción/implicación`

---

## 2026-08-23

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
