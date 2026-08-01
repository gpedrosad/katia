# Log self-learn (append-only)

Formato: `YYYY-MM-DD | tema | hecho | acción/implicación`

---

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
