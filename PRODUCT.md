# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Familias en Chile que buscan ordenar información después de un diagnóstico de autismo (TEA), especialmente durante las primeras semanas.
- Personas que llegan desde anuncios educativos en Meta y necesitan una ruta inicial clara, no una venta clínica inmediata.

## Product Purpose

El sitio de Katia Domínguez informa sobre fonoaudiología infantil y facilita el contacto con su consulta en Chillán. Esta landing específica entrega una guía educativa gratuita para ordenar preguntas, documentos, profesionales, colegio, derechos y próximos pasos durante los primeros 30 días posteriores a un diagnóstico de autismo.

## Positioning

La propuesta de esta landing no es recomendar terapias ni prometer resultados. Es transformar información dispersa en una ruta de revisión simple, respetuosa y accionable.

## Operating Context

- El tráfico principal de esta landing llega desde anuncios de Meta para audiencias frías.
- La descarga debe ser directa y sin solicitar datos de salud ni insinuar que se conoce la situación personal de quien visita.
- El contenido usa español de Chile y fuentes públicas chilenas cuando habla de derechos o educación.

## Capabilities and Constraints

- Stack existente: Next.js 16 App Router, TypeScript, Tailwind 4 y Vercel.
- La landing y el recurso son informativos. No evalúan, diagnostican ni reemplazan indicaciones de profesionales de salud o educación.
- La página debe estar en noindex y mantener una sola acción principal: descargar la guía gratuita.
- No se deben inventar precios, horarios, resultados, testimonios ni afirmaciones clínicas.

## Brand Commitments

- Marca: Katia Domínguez.
- Voz: clara, cercana, sobria y respetuosa.
- Referencia visual vinculante para esta campaña: sistema editorial de tinta, blanco suave, verde menta y anotaciones sobre texto descrito en /Users/gonzalo/Downloads/MATTDAVELLA-DESIGN-CURSOR.md, sin copiar activos ni identidad de terceros.

## Evidence on Hand

- Datos de marca y contacto en lib/site.ts.
- Foto profesional optimizada en public/katia-ads-hero.jpg.
- Fuentes oficiales disponibles para el recurso: Ley 21.545 en Biblioteca del Congreso Nacional; materiales de SENADIS sobre autismo; preguntas frecuentes del Ministerio de Educación para comunidades educativas.
- No hay testimonios ni resultados específicos vinculados a esta guía. No fabricarlos.

## Product Principles

- Primero claridad y orden; la oferta clínica queda fuera de esta primera interacción.
- Hablar del tema o de la situación general sin atribuir una condición al visitante o a su familia.
- Pedir la menor cantidad posible de información; para esta descarga, ninguna.
- Diferenciar siempre orientación educativa de evaluación o indicación profesional.
- Usar lenguaje respetuoso centrado en personas, apoyos y participación.

## Accessibility & Inclusion

- Contraste WCAG AA, navegación por teclado, objetivos táctiles de al menos 44 px y respeto por prefers-reduced-motion.
- La guía debe funcionar en pantalla e impresión, con tipografía legible, estructura escaneable y enlaces escritos de forma comprensible.
