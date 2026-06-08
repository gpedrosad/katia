# Cambios ejecutados desde auditoria GSC - 2026-06-08

- Sitio: `sc-domain:katialafono.cl`
- Auditoria base: `docs/gsc-informe-2026-06-08.md`
- Priorizacion: `docs/gsc-urgencias-2026-06-08.md`
- Motivo: paginas con buena posicion media y CTR bajo en GSC.

## Resumen

Se ejecutaron cambios de `title` y `meta description` en las paginas con mayor oportunidad de CTR detectada por GSC. No se cambiaron rutas, canonicales, contenido visible, schema ni sitemap.

## Evidencia GSC usada

| Pagina | Impresiones | CTR | Posicion media | Decision |
| --- | ---: | ---: | ---: | --- |
| `/` | 425 | 0.71% | 3,9 | Reescribir snippet hacia fonoaudiologa infantil local y confianza |
| `/fonoaudiologa-ninos-chillan` | 194 | 0.52% | 6,0 | Reforzar lenguaje/habla, evaluacion infantil y WhatsApp |
| `/chillan/tel` | 102 | 0.00% | 2,5 | Cambiar de termino tecnico a problema que reconocen los padres |
| `/agendar-hora-fonoaudiologo-infantil-chillan` | 93 | 0.00% | 2,8 | Hacer el snippet mas directo y accionable |
| `/servicios` | 93 | 1.08% | 3,0 | Presentar listado de servicios concretos |
| `/chillan/tea-comunicacion` | 82 | 0.00% | 3,1 | Reforzar TEA/autismo, comunicacion infantil y atencion local |

## Archivos modificados

| Archivo | Cambio |
| --- | --- |
| `app/page.tsx` | Nuevo title/meta para home |
| `app/fonoaudiologa-ninos-chillan/page.tsx` | Nuevo title/meta para pagina infantil principal |
| `app/chillan/[slug]/page.tsx` | Overrides especificos de title/meta/keywords para `tel` y `tea-comunicacion` |
| `app/(site)/agendar-hora-fonoaudiologo-infantil-chillan/page.tsx` | Nuevo title/meta de agendamiento |
| `app/servicios/page.tsx` | Nuevo title/meta del hub de servicios |

## Snippets publicados en codigo

| Pagina | Title | Meta description |
| --- | --- | --- |
| `/` | `Fonoaudióloga infantil en Chillán \| Katia Domínguez` | `Evaluación y terapia para lenguaje, habla, TEL y lectoescritura en niños. Atención en Chillán con +20 años de experiencia. Agenda por WhatsApp.` |
| `/fonoaudiologa-ninos-chillan` | `Fonoaudióloga para niños en Chillán \| Lenguaje y habla` | `Consulta por retraso del lenguaje, habla, TEL, pronunciación o lectoescritura. Evaluación infantil presencial en Chillán. Agenda por WhatsApp.` |
| `/chillan/tel` | `TEL / TDL en niños en Chillán \| Evaluación fonoaudiológica` | `Si tu hijo tiene dificultad para comprender, expresarse o armar frases, agenda evaluación TEL/TDL en Chillán con orientación familiar y escolar.` |
| `/agendar-hora-fonoaudiologo-infantil-chillan` | `Agendar fonoaudióloga infantil en Chillán \| WhatsApp` | `Pide hora para evaluación fonoaudiológica infantil en Chillán. Envía edad, motivo de consulta y coordinamos horario por WhatsApp.` |
| `/servicios` | `Servicios de fonoaudiología infantil en Chillán` | `Evaluación, terapia de lenguaje, habla, TEL, TEA y lectoescritura para niños en Chillán. Revisa el servicio adecuado y agenda por WhatsApp.` |
| `/chillan/tea-comunicacion` | `Fonoaudiología para TEA en Chillán \| Comunicación infantil` | `Apoyo fonoaudiológico para niños con TEA: comunicación funcional, lenguaje y habilidades sociales. Evaluación presencial en Chillán.` |

## Seguimiento requerido

1. Deployar cambios.
2. En GSC, inspeccionar y solicitar recrawl de las 6 URLs.
3. Medir CTR por pagina a los 7 dias y a los 28 dias.
4. No ampliar el experimento al resto del sitio hasta ver tendencia inicial.

## Validacion local

- `npm run build`: OK. Next compilo y genero 90 paginas estaticas/SSG.
- ESLint sobre los 5 archivos modificados: OK.
- `npm run lint`: falla por issues preexistentes fuera del alcance de estos cambios:
  - links internos con `<a>` en paginas de sintomas;
  - comillas sin escapar en paginas de voz online y test de lenguaje;
  - imports no usados existentes;
  - JSX construido dentro de `try/catch` en `app/interno/gsc/page.tsx`.

Los errores de lint no apuntan a los archivos modificados por este cambio de snippets.
