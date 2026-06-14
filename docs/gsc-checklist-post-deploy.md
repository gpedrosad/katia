# Checklist GSC post-producción — Ola 1 (2026-05-20)

Estado al 2026-05-20:
- Producción ya verificada por `curl`.
- Pendiente: GSC UI, solicitud de indexación y corregir la meta publicada de `/chillan/tel`.

**Propiedad:** `sc-domain:katialafono.cl`  
**Baseline:** [`gsc-evaluacion-completa-2026-05-20.md`](./gsc-evaluacion-completa-2026-05-20.md)

---

## 1. Verificación técnica rápida (5 min)

```bash
curl -sI https://katialafono.cl/ | grep -i HTTP
curl -sI https://www.katialafono.cl/chillan/lenguaje-infantil | grep -iE 'HTTP|location'
curl -sI https://www.katialafono.cl/agendar | grep -iE 'HTTP|location'
curl -s "https://www.katialafono.cl/chillan/tel" | grep -o '<meta name="description"[^>]*>'
curl -s "https://www.katialafono.cl/servicios" | grep -o '<title>[^<]*</title>'
```

| Check | Esperado | Estado 2026-05-20 |
| --- | --- | --- |
| Apex | HTTP 308 → www | OK |
| `/chillan/lenguaje-infantil` | 308 → `/fonoaudiologa-ninos-chillan` | OK |
| `/agendar` | 308 → `/agendar-hora-fonoaudiologo-infantil-chillan` | OK |
| Meta TEL | Sin corte no natural | OK (2026-06-08) |
| Title servicios | Sin «Katia Domínguez» duplicado | OK |

---

## 2. Sitemaps (GSC UI)

**Ejecutado vía API 2026-06-08** (`npm run gsc:checklist` → [`gsc-checklist-ejecutado-2026-06-08.md`](./gsc-checklist-ejecutado-2026-06-08.md))

| Sitemap | Errores | Warnings | Enviadas | Indexadas (API) |
| --- | --- | --- | --- | --- |
| www.katialafono.cl/sitemap.xml | 0 | **0** ✅ | 81 | 0* |
| katialafono.cl/sitemap.xml | 0 | 0 | 81 | 0* |

\*El contador 0/81 en informe de sitemap **no implica** desindexación masiva. Las 4 URLs clave inspeccionadas están **indexadas**.

~~Warning en www~~ — **resuelto** (0 warnings al 2026-06-08).

**Acción opcional UI:** Indexación → Páginas (contrastar total indexadas vs 81 del sitemap).

---

## 3. Inspección de URL (GSC UI)

**Ejecutado vía API 2026-06-08 — 4/4 PASS, indexadas, fetch OK, canónica www.**

| URL | Verdict | Cobertura | Canónica Google |
| --- | --- | --- | --- |
| https://www.katialafono.cl/ | PASS | Enviada e indexada | www ✅ |
| https://www.katialafono.cl/chillan/tel | PASS | Enviada e indexada | www ✅ |
| https://www.katialafono.cl/fonoaudiologa-ninos-chillan | PASS | Enviada e indexada | www ✅ |
| https://www.katialafono.cl/agendar-hora-fonoaudiologo-infantil-chillan | PASS | Enviada e indexada | www ✅ |

### Pendiente manual (~5 min): Solicitar indexación

La API no puede pulsar «Solicitar indexación». Abre cada enlace y confirma:

1. [Home](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2F)
2. [/chillan/tel](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2Fchillan%2Ftel)
3. [/fonoaudiologa-ninos-chillan](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2Ffonoaudiologa-ninos-chillan)
4. [/agendar-hora-...](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2Fagendar-hora-fonoaudiologo-infantil-chillan)

---

## 4. Anotar en tabla de cambios (§5 evaluación)

| Fecha | Cambio | URLs | KPI | Revisar GSC |
| --- | --- | --- | --- | --- |
| 2026-05-20 | Ola 1: titles/metas + 308 lenguaje-infantil + agendar | `/, /chillan/tel, /fonoaudiologa-ninos-chillan, /agendar-*, /servicios` | CTR home ≥1%; tel ≥3% | 2026-06-19 |

---

## 5. Próximo informe automático

```bash
npm run gsc:report:md
```

**Cuándo:** ~21–28 días después de la validación en producción del 2026-05-20 (2026-06-10 a 2026-06-19).

Comparar con baseline: 22 clics, CTR home 0,30%, imp. tel 159.

---

## 6. Checklist mensual (resumen)

- [ ] Performance 28d vs 28d anterior
- [ ] Top URLs por impresiones — CTR
- [ ] Hosts: ≥90% impresiones en www
- [ ] Sitemap sin warning nuevo
- [ ] Screenshots Performance + guardar en `docs/`
