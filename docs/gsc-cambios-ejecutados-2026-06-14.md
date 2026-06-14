# Cambios ejecutados desde auditoría GSC — 2026-06-14

- Sitio: `sc-domain:katialafono.cl`
- Informe base: `docs/gsc-informe-2026-06-14.md`
- Motivo: ola 2 de snippets en páginas con 0% CTR pese a buena posición; iteración sobre ola del 2026-06-08.

## Resumen

Se reescribieron `title` y `meta description` en 7 URLs. Enfoque: lenguaje de padres, keyword principal al inicio del title y CTA WhatsApp. No se tocaron rutas, canonicals, contenido visible ni sitemap.

## Snippets publicados

| Página | Title | Meta description |
| --- | --- | --- |
| `/` | Fonoaudiología infantil Chillán \| Katia Domínguez | Fonoaudióloga para niños en Chillán: lenguaje, habla, TEL y lectoescritura. Evaluación presencial con +20 años de experiencia. Agenda por WhatsApp. |
| `/fonoaudiologa-ninos-chillan` | Fonoaudióloga infantil Chillán \| Evaluación y terapia | ¿Tu hijo habla poco, pronuncia mal o no comprende? Fonoaudióloga infantil en Chillán. Evaluación ~60 min con informe. Coordina por WhatsApp. |
| `/chillan/tel` | TEL en niños Chillán \| ¿Habla poco o no se entiende? | Dificultad para comprender, expresarse o armar frases puede ser TEL/TDL. Evaluación fonoaudiológica infantil en Chillán con orientación escolar. WhatsApp. |
| `/chillan/tea-comunicacion` | TEA y autismo Chillán \| Comunicación infantil | Apoyo fonoaudiológico para niños con TEA: lenguaje, comunicación funcional y habilidades sociales. Evaluación presencial en Chillán. Escribe por WhatsApp. |
| `/agendar-hora-fonoaudiologo-infantil-chillan` | Agendar fonoaudióloga Chillán \| WhatsApp hoy | Pide hora para evaluación infantil en Chillán: envía edad del niño y motivo de consulta. Respuesta en horario hábil. Atención presencial. |
| `/servicios/tea-trastorno-espectro-autista` | Terapia TEA Chillán \| Comunicación y lenguaje autismo | Fonoaudiología para niños con autismo/TEA en Chillán: comunicación funcional, lenguaje y participación escolar. Evaluación presencial. Agenda WhatsApp. |
| `/recursos` | Guías lenguaje infantil \| Recursos para padres Chillán | Señales de alerta, hitos del lenguaje y estimulación en casa. Recursos gratuitos de fonoaudióloga infantil en Chillán. Evalúa cuándo consultar. |

## Archivos modificados

| Archivo | Cambio |
| --- | --- |
| `app/page.tsx` | Title/meta home (keyword fonoaudiología al inicio) |
| `app/fonoaudiologa-ninos-chillan/page.tsx` | Title/meta pilar infantil |
| `app/chillan/[slug]/page.tsx` | Overrides tel y tea-comunicacion |
| `app/(site)/agendar-hora-fonoaudiologo-infantil-chillan/page.tsx` | Title/meta agendar |
| `app/servicios/tea-trastorno-espectro-autista/page.tsx` | Title/meta servicio TEA |
| `app/recursos/page.tsx` | Title/meta hub recursos |
| `scripts/gsc-checklist.mjs` | 8 URLs en inspección post-deploy |

## Checklist GSC (2026-06-14)

Ejecutado con `npm run gsc:checklist`. Resultado:

- Sitemaps: 0 warnings (contador 0/81 indexadas sigue siendo artefacto del API)
- Inspección 4 URLs ola 1: **4/4 PASS** — indexadas
- Pendiente manual: solicitar indexación en UI tras deploy de ola 2

Enlaces directos GSC (solicitar indexación tras deploy):

1. [Home](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2F)
2. [TEL](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2Fchillan%2Ftel)
3. [TEA comunicación](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2Fchillan%2Ftea-comunicacion)
4. [Pilar infantil](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2Ffonoaudiologa-ninos-chillan)
5. [Agendar](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2Fagendar-hora-fonoaudiologo-infantil-chillan)
6. [Servicios](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2Fservicios)
7. [TEA servicio](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2Fservicios%2Ftea-trastorno-espectro-autista)
8. [Recursos](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2Frecursos)

Extra (redirect legacy, no snippet):

- [lenguaje-infantil → pilar](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Akatialafono.cl&url=https%3A%2F%2Fwww.katialafono.cl%2Fchillan%2Flenguaje-infantil)

## Seguimiento

1. Deployar cambios.
2. Solicitar indexación de las 8 URLs en GSC.
3. Medir CTR por página a los 7 y 28 días (`npm run gsc:report:md`).
4. No abrir ola 3 hasta ver tendencia de esta ola.
