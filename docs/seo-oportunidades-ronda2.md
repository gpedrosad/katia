# Oportunidades SEO — ronda 2

**Fecha:** 2026-10-17  
**Sitio:** https://www.katialafono.cl  
**Qué se publicó en esta ronda:** hubs y guías de lenguaje infantil, dislalia, tartamudez y lectoescritura, más preguntas y guías para padres. El inventario está en `lib/seo-routes.ts` y el sitemap las descubre solas.

Esta nota es lo que **no** se convirtió en página. Sirve para la siguiente decisión. No inventa volumen, CPC ni autoridad de dominio. Las SERP citadas salen de `docs/seo-oportunidades-serp-infantil-chile-2026-08-26.md` (63 keywords con scrape; 144 sin puntaje).

## Qué quedó cubierto y qué no

Hecho en el sitio, con intención distinta de las landings «en Chillán»:

- Lenguaje: 18 meses sin palabras, entiende y no habla, habla como bebé, palabras que no se juntan.
- Dislalia: la ese, sonidos que cambian, habla que solo se entiende en casa. La erre a los 4 años ya estaba en `/preguntas`.
- Tartamudez: repetición a los 3, qué hacer cuando se traba, silencio en el jardín.
- Lectoescritura: letras confundidas, letras al revés, primero básico.
- Preguntas nuevas: fonoaudiólogo o psicólogo, esperar a los 4, informe del colegio, habla en casa y calla en el jardín.
- Casa: abuelos que dicen «ya va a hablar», del gesto a la palabra, qué contarle a la educadora.

No se abrieron páginas de otras ciudades, ni de Fonasa, ni de precio. `lib/site.ts` no tiene arancel ni convenio. El scrape de agosto marcó esas queries locales como flojas en la SERP y, a la vez, como temas que no se pueden afirmar.

`pendiente:` pedir indexación de las URLs nuevas en GSC y mirar, en 14-21 días, si las guías ganan impresiones sin quitarle clics a la landing Chillán del mismo tema.

## Temas que ves en la competencia

En el scrape de Chile, las dudas de padres («mi hijo no habla», «no forma frases», «no se le entiende») las ocupan directorios y sitios de preguntas (Doctoralia, 2x3, Cronoshare), redes y páginas de fuera de Chile. En hitos aparecen marcas (Nestlé, Pampers). En Chillán, los nombres que se repiten junto a katialafono son `andessaludchillan.cl`, `centrofonoaudiologicocomunicados.cl` y fichas de Doctoralia.

Eso no es una lista de volumen. Es el tipo de página que hoy responde la duda antes que un sitio de una fonoaudióloga.

Temas que esos resultados y las consultas de familias suelen nombrar, y que **esta ronda no publicó** a propósito:

| Tema | Por qué no hay URL nueva |
| --- | --- |
| Fonasa, bono, precio, «cuánto cuesta» | No hay dato en `lib/site.ts`. Publicarlo sería inventar. |
| Escala FILS u otro puntaje de fluidez | No está en el repo. La guía de tartamudez no la nombra. |
| Nombres de test (TECAL, TEPROSIF, PLON) como gancho | Ya existe `/servicios/test-de-lenguaje-infantil-chillan`. No abras otra URL por cada sigla. |
| Frenillo, deglución, respiración oral | Otra consulta. No la mezcles con dislalia sin una página propia y sin afirmar que Katia la trata si no está escrito. |
| Otras ciudades para niños | La línea infantil es Chillán. Las ciudades de `/voz-online` son de voz adulta y no se copian al lenguaje infantil. |
| «Fonoaudiólogo online» infantil | En el scrape esa query se lee como voz/adultos. No la uses para llenar la oferta de niños. |

Si más adelante quieres frenillo o deglución, primero confirma en el copy existente que es parte de la consulta. Si no está, no lo publiques.

## Google Business Profile

Datos que ya están y no hay que contradecir (ver `docs/ai-self-learn/INDEX.md` y `lib/site.ts`):

- Nombre en Maps: `Fonoaudiologa Katia Dominguez - Chillan`. En la web: Katia Domínguez.
- Teléfono único: `+56995497838` (display `9 9549 7838`).
- Horario: lunes a viernes, 10:00 a 18:00.
- Área: Chillán, Región de Ñuble. Sin calle pública en la web.
- Ficha: `https://www.google.com/maps?cid=8785110851903218280`. 42 reseñas, nota 5,0 al corte del índice.
- El enlace corto `g.page` está roto. No lo pongas en la web ni en publicaciones.
- `pendiente:` confirmar que la ficha está reclamada y si sigue el posible duplicado `katia Dominguez`.

Ideas para la ficha, sin inventar servicios:

1. Categoría principal alineada a fonoaudiología. Si hay una secundaria, que sea coherente con niños y con lenguaje, no con una especialidad que no atiendes.
2. Descripción (hasta 750 caracteres): en las primeras líneas, fonoaudióloga infantil en Chillán, evaluación y terapia de lenguaje y habla. Sin dirección de calle. Sin Fonasa. Sin precio.
3. Servicios de la ficha, con el mismo nombre que la web: lenguaje infantil, dislalia, tartamudez, lectoescritura, evaluación. Cada uno puede enlazar la guía nueva cuando Google deje poner URL.
4. Área de servicio: Chillán. Confirma tú si también corresponde Chillán Viejo; la campaña de Ads presencial lo usa como zona, y eso no sustituye lo que declares en la ficha.
5. Fotos: el retrato que ya usa la web, con una leyenda que diga quién eres y que atiendes en Chillán. No subas imágenes de stock de otros niños.
6. Publicaciones: una por guía nueva, con la pregunta del padre en el título y el enlace a la URL. No repitas la misma publicación para todas.
7. Preguntas y respuestas de la ficha: reutiliza las respuestas ya escritas en `/preguntas` (cuándo consultar, orden médica, qué dura la terapia). No agregues cifras que la web no tiene.
8. Reseñas: responde las nuevas con el nombre de pila y el motivo (lenguaje, pronunciación, lectura), sin pedir que escriban una keyword. 42 es el número publicado; no lo redondees ni lo subas en textos nuevos hasta volver a contarlo.
9. Horario de la ficha = horario de la web. Si cierras un día, cámbialo en los dos lados el mismo día.

## Enlaces externos (backlinks)

Prioridad: sitios donde ya te pueden nombrar con el mismo teléfono y sin una dirección inventada. No compres listados ni dejes el mismo texto ancla en todos.

**Colegios y jardines de Chillán y alrededores.** El informe para el colegio ya es un servicio (`/servicios/informe-fonoaudiologico-pie-chillan`). Una charla a apoderados o una página de «profesionales que orientan a las familias» en el sitio del establecimiento es un enlace natural. No publiques el nombre de un jardín aquí hasta que exista el acuerdo. Lleva a la reunión la guía que corresponde (lectoescritura, tartamudez o lenguaje), no un brochure genérico.

**Directorios de salud que ya rankean las dudas de padres.** Doctoralia y directorios del tipo 2x2/2x3 o Cronoshare aparecen en la SERP del scrape. Si abres ficha, copia NAP tal cual: nombre, teléfono, Chillán, sin calle, horario lun–vie 10:00–18:00, URL `https://www.katialafono.cl`. `pendiente:` anotar en el índice cuáles existen de verdad a tu nombre, para no duplicar fichas.

**Medios de Ñuble.** El diario de Chillán es La Discusión. Una nota de servicio (cómo saber si conviene evaluar el lenguaje, sin cifras inventadas) puede enlazar una guía. Radios locales sirven para la misma nota hablada; el enlace, si lo dan, que apunte a la guía y no solo a la home. No prometas una entrevista que no está agendada.

**Formación.** Carreras de fonoaudiología de la zona (Concepción y Chillán) a veces publican listas de campos clínicos o charlas a estudiantes. Ofrece una clase sobre dudas de padres, con enlace a `/preguntas` o `/guias-padres`. No escribas que ya eres campo clínico si no está acordado.

**Lo que no suma.** Granjas de directorios, comentarios con el enlace en blogs ajenos, intercambio masivo de enlaces, ni páginas de «fonoaudióloga en [otra ciudad]» para niños.

## Siguiente medición

1. Tras el deploy, inspección de URL en GSC para los cuatro hubs y una guía de cada cluster.
2. A las 2–3 semanas: impresiones y posición de las queries de padre, y si `/sintomas/*`, `/tratamientos/dislalia-infantil-chillan` y `/servicios/dificultades-lectoescritura` mantienen sus clics.
3. Si una guía nueva y una landing Chillán pelean la misma query, se refuerza el enlace hacia la que quieras como dueña del clic. No se borra la guía a la primera semana.
