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
| Meta TEL | Sin corte no natural | Falla: quedó `...lenguaje sin Evaluación...` |
| Title servicios | Sin «Katia Domínguez» duplicado | OK |

---

## 2. Sitemaps (GSC UI)

1. Ir a **Indexación → Sitemaps**
2. Abrir `https://www.katialafono.cl/sitemap.xml`
3. Anotar:
   - Tipo de warning (si sigue)
   - Enviadas vs indexadas
4. Si el warning es «URLs no indexadas»: contrastar con **Indexación → Páginas** (no asumir desindexación masiva)

**Registrar en** `gsc-evaluacion-completa-2026-05-20.md` §5 tabla resultados.

---

## 3. Inspección de URL (GSC UI)

Para cada URL → **Inspeccionar URL** → si es indexable → **Solicitar indexación**

| URL | Objetivo |
| --- | --- |
| https://www.katialafono.cl/ | Home con nuevo snippet |
| https://www.katialafono.cl/chillan/tel | Meta corregida |
| https://www.katialafono.cl/fonoaudiologa-ninos-chillan | Pilar infantil |
| https://www.katialafono.cl/agendar-hora-fonoaudiologo-infantil-chillan | Conversión |

**Opcional:** re-inspeccionar `https://katialafono.cl/` (debe redirigir; canonical www).

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
