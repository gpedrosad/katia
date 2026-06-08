# Informe urgente GSC - 2026-06-08

- Sitio: `sc-domain:katialafono.cl`
- Fuente principal: Search Console API, informe regenerado el `2026-06-08T12:54:22.922Z`
- Periodo actual: `2026-05-11` a `2026-06-08`
- Comparacion: `2026-04-12` a `2026-05-10`
- Archivo base: `docs/gsc-informe-2026-06-08.md`

## Diagnostico ejecutivo

El sitio no tiene un problema principal de ranking: la posicion media ponderada mejoro fuerte, de `15,9` a `6,3`. El problema urgente es convertir esa visibilidad en clics y cerrar senales tecnicas que GSC todavia interpreta como inconsistentes.

Metricas clave:

| KPI | Actual | Anterior | Lectura |
| --- | ---: | ---: | --- |
| Clics | 23 | 23 | Estancado |
| Impresiones | 764 | 902 | -15,3%, baja visibilidad total |
| CTR | 3.01% | 2.55% | Mejora leve, pero bajo para posiciones top |
| Posicion media | 6,3 | 15,9 | Mejora grande de ranking |

Conclusion: hay paginas en posiciones 2 a 4 con CTR 0% o muy bajo. Ese es el dinero sobre la mesa.

## Cambios con urgencia maxima

### P0 - Validar sitemap/indexacion en GSC UI

GSC API reporta dos sitemaps con `81` URLs enviadas y `0` indexadas:

- `https://www.katialafono.cl/sitemap.xml`
- `https://katialafono.cl/sitemap.xml`

Produccion se ve correcta: el apex redirige `308` a `www`, `robots.txt` apunta a `https://www.katialafono.cl/sitemap.xml`, y el sitemap publicado usa URLs `www`. Por eso el cambio urgente no es reescribir el sitemap a ciegas, sino validar en la UI de GSC:

1. Dejar enviado solo el sitemap canonico `https://www.katialafono.cl/sitemap.xml`.
2. Si la UI permite retirar el sitemap apex historico, retirarlo.
3. Reenviar el sitemap canonico.
4. Inspeccionar estas URLs y pedir indexacion/validacion si corresponde:
   - `https://www.katialafono.cl/`
   - `https://www.katialafono.cl/fonoaudiologa-ninos-chillan`
   - `https://www.katialafono.cl/chillan/tel`
   - `https://www.katialafono.cl/agendar-hora-fonoaudiologo-infantil-chillan`
   - `https://www.katialafono.cl/servicios`
   - `https://www.katialafono.cl/chillan/tea-comunicacion`

Exito esperado: GSC deja de mostrar `0 indexadas / 81 enviadas` o queda claro que es una limitacion/inconsistencia del API frente a la UI.

### P0 - Consolidar senales de host y URLs legacy

GSC todavia observa dos hosts con impresiones: `www.katialafono.cl` y `katialafono.cl`. Tambien aparecen URLs legacy con impresiones, por ejemplo `/chillan/lenguaje-infantil`, aunque produccion ya redirige a `/fonoaudiologa-ninos-chillan`.

Cambios/acciones:

1. Mantener `www` como unica version canonica.
2. En GSC, inspeccionar `https://katialafono.cl/` y confirmar que Google ve canonical `https://www.katialafono.cl/`.
3. Inspeccionar `https://www.katialafono.cl/chillan/lenguaje-infantil` y confirmar redireccion a `https://www.katialafono.cl/fonoaudiologa-ninos-chillan`.
4. Revisar el reporte Pages > Alternate page with proper canonical / Page with redirect para ver si esas URLs bajan durante los proximos 7 a 14 dias.

No encontre enlaces internos activos hacia las rutas legacy principales. El ruido parece venir de GSC/recrawl, no de links internos actuales.

### P0 - Cambiar titles/metas de paginas con buen ranking y CTR bajo

Estas paginas ya aparecen bien posicionadas, pero no capturan clics:

| URL | Impresiones | CTR | Posicion | Accion |
| --- | ---: | ---: | ---: | --- |
| `/` | 425 | 0.71% | 3,9 | Reescribir title/meta hacia intencion local y confianza |
| `/fonoaudiologa-ninos-chillan` | 194 | 0.52% | 6,0 | Reforzar "infantil", "Chillan", "evaluacion" |
| `/chillan/tel` | 102 | 0.00% | 2,5 | Hacer snippet para padres, no solo termino tecnico |
| `/agendar-hora-fonoaudiologo-infantil-chillan` | 93 | 0.00% | 2,8 | Hacerlo mas directo y accionable |
| `/servicios` | 93 | 1.08% | 3,0 | Separar evaluacion, lenguaje, habla, TEL y TEA |
| `/chillan/tea-comunicacion` | 82 | 0.00% | 3,1 | Reforzar "autismo/TEA", comunicacion infantil y atencion local |

Propuestas de title/meta:

| Pagina | Title sugerido | Meta sugerida |
| --- | --- | --- |
| `/` | `Fonoaudiologa infantil en Chillan | Katia Dominguez` | `Evaluacion y terapia para lenguaje, habla, TEL y lectoescritura en ninos. Atencion en Chillan con +20 anos de experiencia. Agenda por WhatsApp.` |
| `/fonoaudiologa-ninos-chillan` | `Fonoaudiologa para ninos en Chillan | Lenguaje y habla` | `Consulta por retraso del lenguaje, habla, TEL, pronunciacion o lectoescritura. Evaluacion infantil presencial en Chillan. Agenda por WhatsApp.` |
| `/chillan/tel` | `TEL / TDL en ninos en Chillan | Evaluacion fonoaudiologica` | `Si tu hijo tiene dificultad para comprender, expresarse o armar frases, agenda evaluacion TEL/TDL en Chillan con orientacion familiar y escolar.` |
| `/agendar-hora-fonoaudiologo-infantil-chillan` | `Agendar fonoaudiologa infantil en Chillan | WhatsApp` | `Pide hora para evaluacion fonoaudiologica infantil en Chillan. Envia edad, motivo de consulta y coordinamos horario por WhatsApp.` |
| `/servicios` | `Servicios de fonoaudiologia infantil en Chillan` | `Evaluacion, terapia de lenguaje, habla, TEL, TEA y lectoescritura para ninos en Chillan. Revisa el servicio adecuado y agenda por WhatsApp.` |
| `/chillan/tea-comunicacion` | `Fonoaudiologia para TEA en Chillan | Comunicacion infantil` | `Apoyo fonoaudiologico para ninos con TEA: comunicacion funcional, lenguaje y habilidades sociales. Evaluacion presencial en Chillan.` |

Medicion: comparar CTR por pagina 7 y 28 dias despues del deploy. No cambiar todas las paginas del sitio a la vez; priorizar estas 6 para poder medir.

Estado `2026-06-08`: ejecutado en codigo y registrado en `docs/gsc-cambios-ejecutados-2026-06-08.md`.

## Cambios importantes en las proximas 2 semanas

### P1 - Revisar rich results y Enhancements

El reporte API no muestra Search Appearance activa. El sitio tiene schema, pero GSC no esta reportando apariciones enriquecidas en este periodo.

Acciones:

1. Pasar las 6 URLs prioritarias por Rich Results Test.
2. Revisar en GSC > Enhancements si hay invalidez en breadcrumbs, FAQ, review snippets o entidades locales.
3. Agregar o normalizar `BreadcrumbList` JSON-LD en plantillas donde falte.
4. Mantener `MedicalBusiness`/`ProfessionalService` y `Service` sin duplicidades contradictorias.

### P1 - Revisar caidas de paginas con impresiones perdidas

Paginas con baja o perdida a mirar:

- `https://katialafono.cl/`: -5 clics y -167 impresiones. Es esperable si se esta consolidando en `www`, pero hay que confirmarlo.
- `/fonoaudiologia-infantil-chillan`: -92 impresiones, legacy hacia `/fonoaudiologa-ninos-chillan`.
- `/chillan/tel`: -72 impresiones, pero aun posicion 2,5 y CTR 0%.
- `/servicios`: -70 impresiones, posicion 3 y CTR 1.08%.

La lectura mas probable es consolidacion de host + titles poco clicables. No parece una penalizacion general porque la posicion media mejora.

### P1 - Core Web Vitals

El informe de API actual no trae datos de Core Web Vitals. Intente una comprobacion complementaria con PageSpeed Insights, pero la API respondio `429 quota exceeded`. Hay que validar manualmente en GSC:

1. Experience > Core Web Vitals > Mobile primero.
2. Revisar si hay URLs `Poor` o `Needs improvement`.
3. Si aparecen grupos por LCP/INP/CLS, priorizar las mismas 6 URLs de bajo CTR.

## Orden recomendado

1. Hoy: GSC UI, sitemap canonico, retirar/ignorar apex historico, inspeccionar URLs prioritarias.
2. Hoy/manana: deploy de titles/metas en las 6 paginas de mayor gap.
3. Esta semana: validar rich results y Enhancements.
4. En 7 dias: regenerar informe GSC y comparar CTR por pagina.
5. En 28 dias: decidir si se amplian cambios de snippets al resto del sitio.

## Nota de cautela

GSC oculta parte de las consultas por privacidad. Por eso el split marca/no marca es direccional, no contable al 100%. La prioridad sale de paginas, CTR, posicion y sitemaps, que son las senales mas claras del informe.
