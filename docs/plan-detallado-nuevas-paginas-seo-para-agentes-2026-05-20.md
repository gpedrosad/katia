# Plan Detallado de Nuevas Páginas SEO Para Agentes

**Proyecto:** `www.katialafono.cl`  
**Objetivo:** definir nuevas URLs con intención SEO clara, contenido específico y reglas de implementación para que varios agentes puedan desarrollarlas en paralelo sin canibalización ni conflictos de escritura.  
**Base estratégica:** GSC 2026-04-22 → 2026-05-20, auditoría SEO del repo, keywords de Ads y arquitectura actual del sitio.

---

## 1. Resumen estratégico

La web ya tiene visibilidad inicial en:

- intención local transaccional: `fonoaudiologa`, `fonoaudiologia`, `fonoaudiologo chillan`
- intención clínica local: `TEL`, `dislalia`, `trastorno fonológico`, `lectoescritura`
- intención de agenda/evaluación
- intención informativa de padres

Lo que falta ahora **no son más aliases geo**, sino:

1. **Entidad y confianza local**
   - página de profesional
   - página de contacto/consulta

2. **Servicios transaccionales más específicos**
   - evaluación del lenguaje
   - evaluación del habla

3. **Cobertura informativa útil que hoy el hub `/recursos` promete pero no desarrolla**
   - hitos del lenguaje
   - señales de alerta
   - estimulación en casa
   - primera evaluación

4. **Una comparación clínica faltante**
   - retraso del habla vs retraso del lenguaje

5. **Una pieza de glosario faltante**
   - retraso del habla

---

## 2. Cómo usar este documento con varios agentes

### Regla principal

Cada agente debe trabajar en **una sola URL o un lote con write set exclusivo**.  
Ningún agente de páginas individuales debe tocar:

- `app/sitemap.ts`
- `lib/seo-routes.ts`
- `app/recursos/page.tsx`
- `app/_components/*`
- `app/layout.tsx`
- `app/page.tsx`
- `app/_components/Footer.tsx`
- `app/_components/Header.tsx`

Esos cambios deben quedar para un **agente integrador final**.

### Patrones visuales y técnicos a copiar

Usar como referencias:

- servicio: `app/servicios/evaluacion-fonoaudiologica/page.tsx`
- comparación: `app/(site)/comparaciones/tel-vs-retraso-del-lenguaje/page.tsx`
- glosario: `app/glosario/dislalia/page.tsx`
- hub recursos: `app/recursos/page.tsx`

### Helpers y componentes a reutilizar

- `buildPageMetadata` desde `@/lib/seo`
- `SITE_URL` y `whatsappUrl` desde `@/lib/site`
- `Header`
- `Footer`
- `Breadcrumbs`
- `WhatsAppCTA`
- `StickyWhatsApp`
- `GeoFAQ` cuando convenga

### Reglas SEO para todas las páginas nuevas

- canonical autorreferente
- una sola intención principal por URL
- metadata única y específica
- enlazado interno hacia:
  - home
  - servicio o hub relacionado
  - una URL de agenda o evaluación
- CTA clara a WhatsApp
- copy localizado a `Chillán`, `Ñuble`, `Chile` cuando la intención sea local
- `FAQPage` visible y también en JSON-LD
- evitar tono enciclopédico genérico; escribir para padres que evalúan consulta real

### Regla de canibalización

No crear páginas que compitan con:

- `/`
- `/fonoaudiologa-ninos-chillan`
- `/servicios`
- `/servicios/evaluacion-fonoaudiologica`
- `/glosario/dislalia`
- `/glosario/tel`

Si una página nueva toca esos temas, debe hacerlo desde un ángulo distinto.

---

## 3. Lotes de trabajo por agente

### Agente 1

- `/sobre-katia-dominguez-fonoaudiologa-chillan`

### Agente 2

- `/contacto-fonoaudiologa-chillan`

### Agente 3

- `/servicios/evaluacion-del-lenguaje-infantil-chillan`

### Agente 4

- `/servicios/evaluacion-del-habla-infantil-chillan`

### Agente 5

- `/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje`

### Agente 6

- `/glosario/retraso-del-habla`

### Agente 7

- `/recursos/hitos-del-lenguaje-por-edad`

### Agente 8

- `/recursos/senales-de-alerta-del-lenguaje-y-habla`

### Agente 9

- `/recursos/estimular-lenguaje-en-casa`

### Agente 10

- `/recursos/primera-evaluacion-fonoaudiologica-infantil`

### Agente integrador final

- `app/sitemap.ts`
- `lib/seo-routes.ts`
- `app/recursos/page.tsx`
- enlazado contextual en páginas existentes si hace falta

---

## 4. Briefs ultra específicos por página

---

## Página 1

### URL

`/sobre-katia-dominguez-fonoaudiologa-chillan`

### Archivo sugerido

`app/(site)/sobre-katia-dominguez-fonoaudiologa-chillan/page.tsx`

### Tipo

Página entidad / confianza local.

### Objetivo SEO

Capturar y reforzar:

- `katia`
- `dominguez`
- `doctora katia`
- `fonoaudiologa chillan`
- búsquedas de validación antes de contacto

### Intención

Usuarios que quieren saber quién atiende, su experiencia, formación y si confiar.

### No debe competir con

- `/fonoaudiologa-ninos-chillan`

Esta URL no es para vender el servicio principal por keyword, sino para reforzar entidad, E-E-A-T y marca.

### Metadata exacta

- `title`: `Katia Domínguez | Fonoaudióloga Infantil en Chillán`
- `description`: `Conoce a Katia Domínguez, fonoaudióloga infantil en Chillán con más de 20 años de experiencia en lenguaje, habla y lectoescritura.`
- `keywords`:
  - `Katia Domínguez`
  - `fonoaudióloga Chillán`
  - `fonoaudióloga infantil Chillán`
  - `fonoaudióloga niños Chillán`

### H1 exacto

`Katia Domínguez, fonoaudióloga infantil en Chillán`

### Hero exacto

Subtítulo:

`Más de 20 años de experiencia acompañando a niños y familias en evaluación y tratamiento de lenguaje, habla, TEL, TEA y lectoescritura.`

Bullets del hero:

- `Atención presencial en Chillán`
- `Experiencia clínica con infancia y etapa escolar`
- `Informe y plan de tratamiento cuando corresponde`

### Estructura exacta

#### H2: `Mi enfoque de trabajo`

Explicar:

- evaluación clara antes de intervenir
- objetivos concretos y medibles
- trabajo con familia y colegio
- lenguaje simple para explicar resultados

#### H2: `Áreas en las que acompaño`

Cards o lista:

- retraso del lenguaje
- retraso del habla
- TEL / TDL
- dislalia y trastorno fonológico
- lectoescritura
- comunicación en TEA

Cada item debe enlazar a una URL real del sitio.

#### H2: `Formación y experiencia clínica`

Incluir:

- más de 20 años de experiencia
- experiencia con niños en edad preescolar y escolar
- experiencia en evaluación, terapia y coordinación con familia/colegio

No inventar títulos académicos específicos si no están confirmados.

#### H2: `Cómo trabajo la primera consulta`

Explicar:

- entrevista inicial
- observación/evaluación
- devolución preliminar
- informe y pasos siguientes

#### H2: `¿Cuándo conviene consultar?`

Lista concreta:

- habla poco para su edad
- cuesta entenderle
- no sigue instrucciones
- dificultad para armar frases
- colegio sugiere evaluación

#### H2: `Preguntas frecuentes sobre la profesional`

FAQ visible con 4 preguntas:

1. `¿Katia Domínguez atiende niños en Chillán?`
2. `¿Qué problemas evalúa una fonoaudióloga infantil?`
3. `¿Se puede pedir informe para el colegio?`
4. `¿Cómo agendo una hora?`

### Schema requerido

- `Person`
- `MedicalBusiness` o `ProfessionalService`
- `FAQPage`
- `BreadcrumbList`

### Enlaces internos obligatorios

Salida:

- `/fonoaudiologa-ninos-chillan`
- `/servicios/evaluacion-fonoaudiologica`
- `/agendar-hora-fonoaudiologo-infantil-chillan`
- `/servicios/terapia-lenguaje-infantil`
- `/servicios/trastornos-del-habla`

Entrada que deberá agregar el integrador:

- home
- footer
- página de contacto

### CTA exacta

Texto botón:

`Agendar evaluación por WhatsApp`

Texto WhatsApp:

`Hola, quiero agendar una evaluación con Katia Domínguez`

### Criterio de terminado

- parece una página de confianza real, no una landing genérica
- deja claro quién atiende, dónde y qué hace
- enlaza a servicio y agenda

---

## Página 2

### URL

`/contacto-fonoaudiologa-chillan`

### Archivo sugerido

`app/(site)/contacto-fonoaudiologa-chillan/page.tsx`

### Tipo

Página local transaccional.

### Objetivo SEO

Capturar intención de contacto y apoyo a Google Business Profile.

### Metadata exacta

- `title`: `Contacto Fonoaudióloga en Chillán | Agenda por WhatsApp`
- `description`: `Contacto y agenda con fonoaudióloga infantil en Chillán. Horarios, ubicación, qué llevar a la consulta y cómo reservar evaluación.`
- `keywords`:
  - `contacto fonoaudióloga Chillán`
  - `agendar fonoaudiólogo infantil Chillán`
  - `hora fonoaudiólogo infantil Chillán`
  - `consulta fonoaudiología Chillán`

### H1 exacto

`Contacto y agenda de fonoaudiología infantil en Chillán`

### Estructura exacta

#### H2: `Cómo agendar`

Explicar en 3 pasos:

1. escribir por WhatsApp
2. indicar edad y motivo
3. recibir horarios disponibles

#### H2: `Horario de respuesta`

Explicar:

- respuesta en horario hábil
- lunes a viernes
- atención presencial en Chillán

#### H2: `Qué información conviene enviar`

Checklist:

- edad del niño
- motivo principal
- si hay derivación del colegio
- si ya existen informes

#### H2: `Qué llevar a la primera consulta`

Checklist:

- informes previos
- cuaderno o comunicación escolar si aplica
- dudas concretas de la familia

#### H2: `Ubicación y cobertura`

Si la dirección exacta no debe publicarse:

- decir `atención presencial en Chillán, Región de Ñuble`
- aclarar que la ubicación exacta se comparte al coordinar

Si sí se puede publicar, añadir mapa y dirección.

#### H2: `Preguntas frecuentes sobre contacto`

FAQ visible:

1. `¿Atiendes solo en Chillán?`
2. `¿Cuánto demora la respuesta por WhatsApp?`
3. `¿Puedo agendar si el colegio pidió evaluación?`
4. `¿Qué pasa después de escribir?`

### Schema requerido

- `MedicalBusiness` o `LocalBusiness`
- `FAQPage`
- `BreadcrumbList`

### Enlaces internos obligatorios

- `/agendar-hora-fonoaudiologo-infantil-chillan`
- `/servicios/evaluacion-fonoaudiologica`
- `/sobre-katia-dominguez-fonoaudiologa-chillan`

### CTA exacta

`Escribir por WhatsApp ahora`

Texto WhatsApp:

`Hola, quiero consultar horarios para una evaluación fonoaudiológica en Chillán`

### Criterio de terminado

- tiene utilidad real de contacto
- reduce fricción
- puede funcionar como URL de apoyo para perfiles externos

---

## Página 3

### URL

`/servicios/evaluacion-del-lenguaje-infantil-chillan`

### Archivo sugerido

`app/(site)/servicios/evaluacion-del-lenguaje-infantil-chillan/page.tsx`

### Tipo

Servicio long-tail local.

### Objetivo SEO

Capturar:

- `evaluacion del lenguaje infantil chillan`
- `evaluacion del lenguaje niños chillan`
- `donde evaluar lenguaje de mi hijo`

### Diferencia frente a la evaluación general

Esta página debe enfocarse en:

- comprensión
- vocabulario
- frases
- morfosintaxis
- narración
- seguimiento de instrucciones

No duplicar la página genérica de evaluación.

### Metadata exacta

- `title`: `Evaluación del Lenguaje Infantil en Chillán | Fonoaudióloga`
- `description`: `Evaluación del lenguaje infantil en Chillán para niños que hablan poco, no arman frases o no comprenden bien. Incluye informe y orientación clínica.`
- `keywords`:
  - `evaluación del lenguaje infantil Chillán`
  - `evaluación del lenguaje niños Chillán`
  - `habla poco evaluación`
  - `comprensión lenguaje niños`

### H1 exacto

`Evaluación del lenguaje infantil en Chillán`

### Estructura exacta

#### Hero

Subtítulo exacto:

`Para niños que hablan poco, arman frases cortas, entienden menos de lo esperado o presentan dudas en su desarrollo del lenguaje.`

Bullets:

- `Sesión presencial de aproximadamente 60 minutos`
- `Revisión comprensiva y expresiva`
- `Informe y recomendaciones`

#### H2: `¿Qué evalúo cuando reviso el lenguaje?`

Cards:

- vocabulario
- comprensión verbal
- longitud y estructura de frases
- uso del lenguaje en contexto
- relato y secuencias
- señales de TEL/TDL o retraso del lenguaje

#### H2: `Señales para pedir esta evaluación`

Lista:

- dice pocas palabras
- no junta dos o tres palabras
- le cuesta seguir instrucciones
- parece entender menos que otros niños
- el colegio sugiere evaluación

#### H2: `Diferencia entre evaluar lenguaje y evaluar habla`

Tabla corta:

- lenguaje = comprender y expresar ideas
- habla = producir sonidos claramente

Enlazar a la futura página de evaluación del habla.

#### H2: `Qué recibes al terminar`

- devolución
- informe
- orientación diagnóstica
- propuesta de pasos siguientes

#### H2: `Preguntas frecuentes`

1. `¿Esta evaluación sirve si mi hijo habla poco?`
2. `¿Sirve para sospecha de TEL o retraso del lenguaje?`
3. `¿Incluye informe para colegio o PIE si corresponde?`
4. `¿Cuánto dura la evaluación?`

### Schema requerido

- `Service`
- `FAQPage`
- `BreadcrumbList`

### Enlaces internos obligatorios

- `/servicios/evaluacion-fonoaudiologica`
- `/servicios/terapia-lenguaje-infantil`
- `/chillan/tel`
- `/tratamientos/retraso-del-lenguaje-chillan`
- `/agendar-hora-fonoaudiologo-infantil-chillan`

### CTA exacta

`Agendar evaluación del lenguaje`

Texto WhatsApp:

`Hola, quiero agendar una evaluación del lenguaje infantil en Chillán`

---

## Página 4

### URL

`/servicios/evaluacion-del-habla-infantil-chillan`

### Archivo sugerido

`app/(site)/servicios/evaluacion-del-habla-infantil-chillan/page.tsx`

### Tipo

Servicio long-tail local.

### Objetivo SEO

Capturar:

- `evaluacion del habla infantil chillan`
- `evaluacion del habla niños chillan`
- `mi hijo no pronuncia bien`

### Diferencia frente a la evaluación general

Enfoque en:

- articulación
- fonología
- inteligibilidad
- fluidez
- praxias orofaciales

### Metadata exacta

- `title`: `Evaluación del Habla Infantil en Chillán | Pronunciación`
- `description`: `Evaluación del habla infantil en Chillán para niños con dificultad para pronunciar, hablar claro o hacerse entender. Incluye informe y orientación.`
- `keywords`:
  - `evaluación del habla infantil Chillán`
  - `evaluación pronunciación niños`
  - `niño pronuncia mal evaluación`
  - `fonoaudióloga habla Chillán`

### H1 exacto

`Evaluación del habla infantil en Chillán`

### Estructura exacta

#### Hero

Subtítulo:

`Para niños a los que cuesta entenderles, pronuncian mal varios sonidos o presentan dudas en articulación, fonología o fluidez.`

#### H2: `¿Qué revisa esta evaluación?`

- sonidos alterados
- patrones fonológicos
- inteligibilidad
- praxias orofaciales
- fluidez
- impacto escolar y social

#### H2: `Cuándo pedir esta evaluación`

- omite sonidos
- cambia letras
- cuesta entenderle fuera de la familia
- se frustra al hablar
- persisten errores después de los 5 años

#### H2: `¿Dislalia, trastorno fonológico o retraso del habla?`

Explicar que la evaluación ayuda a diferenciar.

#### H2: `Qué incluye el informe`

- resumen clínico
- sonidos o patrones afectados
- diagnóstico orientativo
- propuesta de tratamiento

#### H2: `Preguntas frecuentes`

1. `¿Sirve para dislalia?`
2. `¿Sirve si mi hijo pronuncia mal la r o la s?`
3. `¿Cómo sé si es habla o lenguaje?`
4. `¿A qué edad debería evaluarlo?`

### Schema requerido

- `Service`
- `FAQPage`
- `BreadcrumbList`

### Enlaces internos obligatorios

- `/servicios/evaluacion-fonoaudiologica`
- `/servicios/trastornos-del-habla`
- `/glosario/dislalia`
- `/chillan/dislalia`
- `/chillan/trastorno-fonologico`
- `/agendar-hora-fonoaudiologo-infantil-chillan`

### CTA exacta

`Agendar evaluación del habla`

Texto WhatsApp:

`Hola, quiero agendar una evaluación del habla infantil en Chillán`

---

## Página 5

### URL

`/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje`

### Archivo sugerido

`app/(site)/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje/page.tsx`

### Tipo

Comparación clínica orientada a padres.

### Objetivo SEO

Resolver una duda de alto valor clínico sin abrir dos páginas informativas redundantes.

### Metadata exacta

- `title`: `Retraso del Habla vs Retraso del Lenguaje | Diferencias`
- `description`: `Diferencias entre retraso del habla y retraso del lenguaje: señales, ejemplos y cuándo conviene evaluar a tu hijo en Chillán.`
- `keywords`:
  - `retraso del habla vs retraso del lenguaje`
  - `diferencia retraso del habla y lenguaje`
  - `habla poco vs lenguaje`

### H1 exacto

`Retraso del habla vs retraso del lenguaje: qué cambia y cuándo consultar`

### Estructura exacta

#### Intro

Explicar:

- no son lo mismo
- uno se relaciona más con cómo suenan las palabras
- el otro con comprender/usar lenguaje

#### H2: `Tabla comparativa`

Aspectos:

- qué está afectado
- cómo suena el niño
- comprensión
- ejemplos típicos
- impacto escolar
- evaluación recomendada

#### H2: `Señales más frecuentes de retraso del habla`

- se le entiende poco
- omite sílabas
- cambia sonidos

#### H2: `Señales más frecuentes de retraso del lenguaje`

- vocabulario limitado
- no arma frases
- cuesta seguir instrucciones

#### H2: `¿Pueden aparecer juntos?`

Sí, explicar que pueden coexistir.

#### H2: `Qué tipo de evaluación ayuda a diferenciarlos`

Enlazar evaluación general, evaluación del lenguaje y futura evaluación del habla.

#### H2: `Preguntas frecuentes`

1. `¿Hablar poco significa retraso del lenguaje?`
2. `¿Pronunciar mal significa retraso del habla?`
3. `¿Pueden coexistir ambos problemas?`
4. `¿Qué evaluación conviene pedir primero?`

### Schema requerido

- `Article`
- `FAQPage`
- `BreadcrumbList`

### Enlaces internos obligatorios

- `/tratamientos/retraso-del-habla-chillan`
- `/tratamientos/retraso-del-lenguaje-chillan`
- `/servicios/evaluacion-fonoaudiologica`
- `/servicios/evaluacion-del-lenguaje-infantil-chillan`
- `/servicios/evaluacion-del-habla-infantil-chillan`
- `/agendar-hora-fonoaudiologo-infantil-chillan`

### CTA exacta

`Pedir evaluación para diferenciarlo`

Texto WhatsApp:

`Hola, quiero evaluar si mi hijo tiene retraso del habla o del lenguaje`

---

## Página 6

### URL

`/glosario/retraso-del-habla`

### Archivo sugerido

`app/glosario/retraso-del-habla/page.tsx`

### Tipo

Glosario clínico citables.

### Objetivo SEO

Capturar intención definicional hoy no resuelta como URL propia:

- `qué es retraso del habla`
- `retraso del habla significado`
- `retraso del habla en niños`

### Metadata exacta

- `title`: `¿Qué es el Retraso del Habla? | Signos y Tratamiento`
- `description`: `Qué es el retraso del habla en niños, señales de alerta, diferencias con retraso del lenguaje y cuándo consultar a fonoaudióloga en Chillán.`
- `keywords`:
  - `qué es retraso del habla`
  - `retraso del habla significado`
  - `retraso del habla en niños`
  - `diferencia retraso del habla`

### H1 exacto

`¿Qué es el retraso del habla?`

### Estructura exacta

#### Header

Badge:

`Trastornos del habla`

Lead:

`El retraso del habla ocurre cuando un niño produce menos sonidos o habla con menor claridad de lo esperado para su edad, aunque a veces comprenda mejor de lo que logra expresar con pronunciación clara.`

#### H2: `Definición de retraso del habla`

Explicar con ejemplos cotidianos.

#### H2: `Señales frecuentes`

- habla poco
- se entiende menos de lo esperado
- omite sílabas
- simplifica palabras
- se frustra al hablar

#### H2: `¿Es lo mismo que retraso del lenguaje?`

No. Enlazar a la comparación y al glosario de retraso del lenguaje si existe.

#### H2: `Causas posibles`

No afirmar diagnósticos absolutos. Mencionar:

- desarrollo más lento
- dificultades fonológicas
- factores auditivos
- otros factores del desarrollo

#### H2: `Cuándo consultar`

- si el habla no progresa
- si no le entienden fuera de la familia
- si persiste más allá de la edad esperada

#### H2: `Tratamiento`

- evaluación
- definición de objetivos
- terapia del habla
- trabajo con familia

#### H2: `Preguntas frecuentes`

1. `¿Qué significa retraso del habla?`
2. `¿Es lo mismo que retraso del lenguaje?`
3. `¿Se puede mejorar con terapia?`
4. `¿Cuándo llevar al fonoaudiólogo?`
5. `¿Cómo saber si mi hijo necesita evaluación?`

### Schema requerido

- `Article`
- `FAQPage`
- `BreadcrumbList`

### Enlaces internos obligatorios

- `/tratamientos/retraso-del-habla-chillan`
- `/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje`
- `/servicios/evaluacion-del-habla-infantil-chillan`
- `/agendar-hora-fonoaudiologo-infantil-chillan`

### Fuente clínica

Usar al menos una fuente estilo ASHA si está disponible y citarla en copy/FAQ.

### CTA exacta

`Consultar por retraso del habla`

Texto WhatsApp:

`Hola, quiero consultar por retraso del habla en mi hijo`

---

## Página 7

### URL

`/recursos/hitos-del-lenguaje-por-edad`

### Archivo sugerido

`app/recursos/hitos-del-lenguaje-por-edad/page.tsx`

### Tipo

Recurso educativo evergreen.

### Objetivo SEO

Capturar búsquedas top-of-funnel y reforzar autoridad parental.

### Metadata exacta

- `title`: `Hitos del Lenguaje por Edad | Guía para Padres`
- `description`: `Qué esperar del lenguaje de un niño a los 12 meses, 2 años, 3 años, 4 años y 5 años. Guía práctica con señales de alerta.`
- `keywords`:
  - `hitos del lenguaje por edad`
  - `desarrollo del lenguaje infantil`
  - `qué debe decir un niño por edad`
  - `lenguaje 2 años`

### H1 exacto

`Hitos del lenguaje por edad: qué esperar y cuándo consultar`

### Estructura exacta

#### Intro

Explicar que cada niño tiene ritmo propio, pero existen hitos orientativos.

#### H2 por edad

- `12 meses`
- `18 meses`
- `2 años`
- `3 años`
- `4 años`
- `5 años`

Cada bloque debe incluir:

- qué suele comprender
- qué suele decir
- ejemplos concretos
- señal de alerta principal

#### H2: `Señales de alerta que no conviene esperar`

Checklist transversal.

#### H2: `Qué hacer si tu hijo no cumple algunos hitos`

- observar
- registrar ejemplos
- pedir evaluación si hay varias señales

#### H2: `Preguntas frecuentes`

1. `¿Es normal que mi hijo de 2 años hable poco?`
2. `¿Cuántas palabras debería decir a los 2 años?`
3. `¿Cuándo preocuparse por el lenguaje?`
4. `¿Cuándo conviene evaluar?`

### Schema requerido

- `Article`
- `FAQPage`
- `BreadcrumbList`

### Enlaces internos obligatorios

- `/recursos`
- `/sintomas/mi-hijo-no-habla-bien-chillan`
- `/sintomas/hijo-habla-poco-edad-chillan`
- `/servicios/evaluacion-del-lenguaje-infantil-chillan`
- `/agendar-hora-fonoaudiologo-infantil-chillan`

### CTA exacta

`Quiero evaluar el lenguaje de mi hijo`

Texto WhatsApp:

`Hola, tengo dudas sobre los hitos del lenguaje de mi hijo y quiero evaluarlo`

---

## Página 8

### URL

`/recursos/senales-de-alerta-del-lenguaje-y-habla`

### Archivo sugerido

`app/recursos/senales-de-alerta-del-lenguaje-y-habla/page.tsx`

### Tipo

Recurso educativo con fuerte puente a conversión.

### Metadata exacta

- `title`: `Señales de Alerta del Lenguaje y el Habla en Niños`
- `description`: `Conoce las señales de alerta del lenguaje y habla en niños: cuándo esperar, cuándo observar y cuándo pedir evaluación fonoaudiológica.`
- `keywords`:
  - `señales de alerta lenguaje niños`
  - `señales de alerta habla niños`
  - `cuándo preocuparse por el habla`
  - `cuándo consultar fonoaudiólogo`

### H1 exacto

`Señales de alerta del lenguaje y el habla en niños`

### Estructura exacta

#### H2: `Alertas antes de los 2 años`

#### H2: `Alertas entre 2 y 3 años`

#### H2: `Alertas entre 4 y 5 años`

#### H2: `Alertas que requieren consultar antes`

- no responde al nombre
- no sigue instrucciones simples
- habla muy poco
- no se entiende casi nada
- frustración intensa al comunicarse

#### H2: `Qué observar en casa durante una semana`

Checklist práctico para padres.

#### H2: `Cuándo pedir evaluación`

CTA clínica clara.

#### H2: `Preguntas frecuentes`

1. `¿Qué señales indican que no conviene seguir esperando?`
2. `¿Cuándo una dificultad es normal y cuándo no?`
3. `¿Hablar poco siempre es problema?`
4. `¿Qué tipo de evaluación conviene pedir?`

### Schema requerido

- `Article`
- `FAQPage`
- `BreadcrumbList`

### Enlaces internos obligatorios

- `/recursos/hitos-del-lenguaje-por-edad`
- `/sintomas/mi-hijo-no-habla-bien-chillan`
- `/sintomas/nino-pronuncia-mal-chillan`
- `/servicios/evaluacion-del-lenguaje-infantil-chillan`
- `/servicios/evaluacion-del-habla-infantil-chillan`

### CTA exacta

`Quiero salir de la duda con una evaluación`

Texto WhatsApp:

`Hola, detecté señales de alerta en el lenguaje o habla de mi hijo y quiero orientación`

---

## Página 9

### URL

`/recursos/estimular-lenguaje-en-casa`

### Archivo sugerido

`app/recursos/estimular-lenguaje-en-casa/page.tsx`

### Tipo

Recurso evergreen con utilidad práctica.

### Metadata exacta

- `title`: `Cómo Estimular el Lenguaje en Casa | Guía para Padres`
- `description`: `Ideas simples para estimular el lenguaje en casa según la edad del niño. Juegos, rutinas y qué evitar si habla poco o le cuesta expresarse.`
- `keywords`:
  - `estimular lenguaje en casa`
  - `cómo ayudar a mi hijo a hablar`
  - `ejercicios de lenguaje para niños`
  - `estimulación del lenguaje infantil`

### H1 exacto

`Cómo estimular el lenguaje en casa sin presionar a tu hijo`

### Estructura exacta

#### H2: `Antes de empezar: qué sí funciona`

- seguir la atención del niño
- hablar más lento
- modelar sin corregir cada error
- repetir y expandir

#### H2: `Ideas para niños de 1 a 2 años`

#### H2: `Ideas para niños de 2 a 3 años`

#### H2: `Ideas para niños de 3 a 5 años`

#### H2: `Qué evitar`

- interrogar
- exigir repetición constante
- exceso de pantallas
- corregir todo el tiempo

#### H2: `Cuándo la estimulación en casa no alcanza`

Puente fuerte a evaluación.

#### H2: `Preguntas frecuentes`

1. `¿Se puede estimular el lenguaje sin ser especialista?`
2. `¿Cuánto tiempo al día conviene dedicar?`
3. `¿Las pantallas retrasan el lenguaje?`
4. `¿Cuándo conviene evaluar en vez de seguir esperando?`

### Schema requerido

- `Article`
- `FAQPage`
- `BreadcrumbList`

### Enlaces internos obligatorios

- `/recursos/hitos-del-lenguaje-por-edad`
- `/recursos/senales-de-alerta-del-lenguaje-y-habla`
- `/servicios/terapia-lenguaje-infantil`
- `/servicios/evaluacion-del-lenguaje-infantil-chillan`

### CTA exacta

`Quiero una evaluación si esto no mejora`

Texto WhatsApp:

`Hola, estoy estimulando el lenguaje en casa pero sigo con dudas y quiero evaluar a mi hijo`

---

## Página 10

### URL

`/recursos/primera-evaluacion-fonoaudiologica-infantil`

### Archivo sugerido

`app/recursos/primera-evaluacion-fonoaudiologica-infantil/page.tsx`

### Tipo

Recurso transaccional-informativo.

### Metadata exacta

- `title`: `Primera Evaluación Fonoaudiológica Infantil | Qué Esperar`
- `description`: `Qué esperar de la primera evaluación fonoaudiológica infantil: cuánto dura, qué llevar, qué incluye el informe y cómo se decide el tratamiento.`
- `keywords`:
  - `primera evaluación fonoaudiológica infantil`
  - `qué esperar evaluación fonoaudiológica`
  - `qué llevar a evaluación del lenguaje`
  - `informe fonoaudiológico niños`

### H1 exacto

`Primera evaluación fonoaudiológica infantil: qué esperar`

### Estructura exacta

#### H2: `Cuándo conviene pedir una primera evaluación`

#### H2: `Cómo suele ser la sesión`

- entrevista con familia
- observación del niño
- pruebas según edad y motivo
- devolución preliminar

#### H2: `Qué llevar a la consulta`

- informes previos
- antecedentes médicos
- observaciones del colegio
- preguntas de la familia

#### H2: `Qué información entrega el informe`

- resultados
- fortalezas y dificultades
- orientación diagnóstica
- sugerencias de intervención

#### H2: `Qué pasa después de evaluar`

- seguimiento
- frecuencia de terapia si corresponde
- coordinación con familia/colegio

#### H2: `Preguntas frecuentes`

1. `¿Cuánto dura la primera evaluación?`
2. `¿Mi hijo debe ir preparado de alguna forma?`
3. `¿Siempre se entrega informe?`
4. `¿La evaluación define si necesita terapia?`

### Schema requerido

- `Article`
- `FAQPage`
- `BreadcrumbList`

### Enlaces internos obligatorios

- `/servicios/evaluacion-fonoaudiologica`
- `/servicios/evaluacion-del-lenguaje-infantil-chillan`
- `/servicios/evaluacion-del-habla-infantil-chillan`
- `/agendar-hora-fonoaudiologo-infantil-chillan`

### CTA exacta

`Agendar primera evaluación`

Texto WhatsApp:

`Hola, quiero agendar la primera evaluación fonoaudiológica de mi hijo`

---

## 5. Instrucciones para el agente integrador final

### Tareas

1. Agregar todas las nuevas URLs a `app/sitemap.ts`
2. Agregar todas las nuevas URLs a `lib/seo-routes.ts`
3. Convertir `/recursos` en hub real con cards enlazando a:
   - `/recursos/hitos-del-lenguaje-por-edad`
   - `/recursos/senales-de-alerta-del-lenguaje-y-habla`
   - `/recursos/estimular-lenguaje-en-casa`
   - `/recursos/primera-evaluacion-fonoaudiologica-infantil`
4. Añadir enlaces a `sobre` y `contacto` desde footer
5. Añadir enlaces contextuales desde:
   - home
   - `/fonoaudiologa-ninos-chillan`
   - `/servicios/evaluacion-fonoaudiologica`
6. Revisar que no existan nuevos aliases innecesarios
7. Verificar que cada página nueva tenga:
   - canonical correcta
   - breadcrumbs
   - JSON-LD
   - CTA WhatsApp

### Tareas de medición posteriores

Después del deploy:

1. reenviar `sitemap.xml` en GSC
2. inspeccionar nuevas URLs
3. anotar fecha de publicación
4. medir impresiones y CTR a 28 días

---

## 6. Qué NO crear todavía

No abrir aún estas URLs:

- `/fonoaudiologa-pediatrica-chillan`
- `/fonoaudiologo-de-ninos-chillan`
- `/fonoaudiologo-para-ninos-chillan`
- `/tel-vs-tdl`
- `/causas-de-la-dislalia`
- `/dislalia-organica`
- `/retraso-del-lenguaje-significado`
- páginas por ciudad extra de infantil fuera de Chillán

Razón:

- riesgo alto de canibalización
- volumen incierto
- ya hay URLs madre suficientes
- ahora conviene profundizar intención, no multiplicar aliases

---

## 7. Orden recomendado de despliegue

### Ola 1

- sobre
- contacto
- evaluación del lenguaje
- evaluación del habla

### Ola 2

- comparación retraso del habla vs retraso del lenguaje
- glosario retraso del habla

### Ola 3

- 4 recursos hijos

### Ola 4

- integración + sitemap + hub `/recursos` + GSC

---

## 8. Criterio de éxito a 60 días

- nuevas páginas indexadas
- primeras impresiones en long-tail transaccional e informativa
- mejor apoyo a queries locales de evaluación
- crecimiento de impresiones en `/recursos/*`
- refuerzo de entidad de marca con `Katia Domínguez`
- más rutas útiles para enlazado interno y citabilidad

