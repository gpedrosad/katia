# SEO CHANGELOG — katialafono.cl

Log de optimizaciones SEO on-page, ordenadas por fecha (más reciente primero).

## Formato

```
## YYYY-MM-DD: Título del lote/sprint

### Contexto
- Métricas GSC previas (clics, impresiones, CTR, posición)
- Objetivos del lote

### Páginas optimizadas
- URL: breve descripción de cambios (title, description, H1, contenido, schema, enlaces)

### Métricas esperadas
- KPI objetivo a medir en ~14-21 días post-indexación
```

---

## 2026-10-09: SEO Lote 5 — Recursos hub, TEA comunicación, páginas de baja visibilidad y nuevo glosario

### Contexto

**Datos GSC (90 días 2026-07-11 al 2026-10-08):**
- **82 clics totales**
- **5.004 impresiones**
- **CTR promedio: 1,6%**
- Posición promedio: 8,0

**Datos últimos 7 días (2026-10-02 al 10-08):** 2 clics / 521 imp / pos 8,1 vs 7 días previos (9-25 al 10-01): 9 clics / 589 imp / pos 8,2

**Páginas congeladas (Lotes 1-4):** Home, pilar infantil, todos los recursos, agendar-hora, servicios principales, sobre-katia, todos los tratamientos previos (TEL, dislalia, trastorno fonológico, retraso del lenguaje, apraxia), glosario/tel/dislalia/dislexia, todos /chillan/* excepto tea-comunicacion, todos /sintomas/* excepto mi-hijo-no-comprende, todas /voz-online/*.

**Problema detectado:** 
1. `/recursos` (43 imp, pos 11.8, 1 click): hub sin schema CollectionPage ni intro optimizada para "guías/recursos fonoaudiología infantil padres".
2. `/chillan/tea-comunicacion` (18 imp, pos 9, 0 clicks): query "katya dominguez" aterriza aquí; necesita diferenciación vs servicio general TEA, title/description para padres buscando "comunicación lenguaje niños TEA/autismo Chillán", FAQs específicas.
3. **Páginas de baja visibilidad (1-7 imp cada una):** test-de-lenguaje, terapia-del-habla, evaluacion-del-lenguaje, conciencia-fonologica (servicios Chillán), retraso-del-habla (tratamiento), mi-hijo-no-comprende (síntoma) — algunas sin diferenciación clara vs páginas congeladas.
4. **Queries logopeda:** "logopeda" (35 imp), "logopedia" (27), "logopeda infantil" (5) aterrizan en home con 0 clicks — necesitan página glosario explicando término España vs Chile.

**Objetivo:** Sharpear hub recursos con schema, diferenciar TEA local, optimizar páginas de baja visibilidad con titles/descriptions únicos (o marcar consolidación si canibalizan), capturar queries "logopeda" con nuevo glosario.

### Páginas optimizadas

#### 1. `/recursos` — Hub recursos padres
**Métricas GSC previas:** 43 imp, pos 11.8, 1 click

**Cambios:**
- **Title:** `"Guías lenguaje infantil | Recursos para padres Chillán"` → `"Recursos y Guías Fonoaudiología Infantil | Padres Chillán"`
- **Description:** Expandida con "Guías prácticas de fonoaudiología infantil para padres en Chillán: hitos del lenguaje por edad, señales de alerta, estimulación en casa y preparación para la primera consulta. Todo gratuito."
- **H1:** `"Recursos para padres"` → `"Recursos y guías para padres"`
- **Intro:** Reescrita con "Guías prácticas de fonoaudiología infantil para padres en Chillán: cuándo preocuparse, cómo estimular en casa y qué esperar de la evaluación fonoaudiológica."
- **Keywords:** Añadido "recursos fonoaudiología padres Chillán", "guías fonoaudiología infantil", "recursos padres fonoaudióloga"
- **Schema:** Añadido `CollectionPage` JSON-LD con hasPart apuntando a cada guía (hitos, señales alerta, estimular en casa, primera evaluación)

**Objetivo CTR:** > 3% en 21 días (hub debe convertir mejor con schema y descripción específica)

---

#### 2. `/chillan/tea-comunicacion` — Landing local TEA
**Métricas GSC previas:** 18 imp, pos 9, 0 clicks (query "katya dominguez" aterriza aquí)

**Cambios:**
- **Title override:** `"TEA y autismo Chillán | Comunicación infantil"` → `"Comunicación y Lenguaje en Niños con TEA | Chillán"`
- **Description override:** Mejorada "Comunicación y lenguaje en niños con TEA/autismo en Chillán: apoyo fonoaudiológico presencial para lenguaje funcional, pragmática y habilidades sociales. 40% tiene retraso significativo. Agenda WhatsApp."
- **FAQs específicas:** Añadidas 3 preguntas al schema FAQPage: "¿Qué trabaja la fonoaudióloga con niños con TEA en Chillán?", "¿A qué edad conviene iniciar terapia fonoaudiológica en niños con TEA?", "¿El tratamiento es solo para niños con TEA que no hablan?"
- **Glosario link:** Actualizado de `/glosario` genérico a `/glosario/tea` (definición específica)
- **Objetivo:** Claramente diferenciado de `/servicios/tea-trastorno-espectro-autista` (local Chillán, práctico, señales + agendar vs servicio general nacional)

**Objetivo CTR:** > 3% en 21 días (posición 9, diferenciación local + FAQs específicas deben capturar query)

---

#### 3. Páginas de baja visibilidad — Diferenciación y optimización

##### `/servicios/test-de-lenguaje-infantil-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"Test de Lenguaje para Niños en Chillán | Evaluación Formal"` → `"Test de Lenguaje Infantil en Chillán | TECAL, TEPROSIF-R, STSG"`
- **Description:** Más específica con nombres de test "TEPROSIF-R fonología, TECAL comprensión, STSG gramática. Informe válido para PIE y escuelas de lenguaje."
- **Keywords:** Añadido "test de lenguaje infantil Chillán", "TECAL Chillán", "TEPROSIF-R Chillán", "test lenguaje PIE", "informe fonoaudiológico PIE"
- **Objetivo:** Intent claro = aplicación formal de test (diferente de evaluación general)

**Decisión:** **Se mantiene independiente** — intent distinto (test formales TECAL/TEPROSIF vs evaluación fonoaudiológica integral).

---

##### `/servicios/evaluacion-del-lenguaje-infantil-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"Evaluación de lenguaje infantil | Niño habla poco Chillán"` → `"Evaluación Lenguaje Infantil Chillán | Vocabulario y Comprensión"`
- **Description:** Reforzada diferencia con evaluación fonoaudiológica integral: "Evaluación específica del lenguaje (no habla) en Chillán: vocabulario, comprensión, frases, morfosintaxis. Para niños que hablan poco, no arman frases o entienden menos. Con informe."
- **Keywords:** Añadido "evaluación lenguaje expresivo comprensivo", "vocabulario niños Chillán", "niño habla poco evaluación"
- **Objetivo:** Diferenciarse como evaluación **específica del lenguaje** (no habla/voz/deglución)

**Decisión:** **Se mantiene independiente** — intent distinto vs `/servicios/evaluacion-fonoaudiologica` (general, incluye habla/voz/deglución). Cross-links claros entre ambas en contenido.

---

##### `/servicios/terapia-del-habla-infantil-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"Terapia del Habla Infantil en Chillán | Fonoaudióloga Especialista"` → `"Terapia del Habla Infantil Chillán | Articulación y Pronunciación"`
- **Description:** Clarificada diferencia habla vs lenguaje: "Terapia del habla (no lenguaje) en Chillán: articulación, pronunciación, claridad, fluidez. Tratamiento presencial de cómo produce los sonidos. Fonoaudióloga infantil."
- **Keywords:** Añadido "terapia del habla infantil Chillán", "articulación niños Chillán", "pronunciación infantil", "claridad del habla", "terapia articulatoria"
- **Objetivo:** Diferenciarse como terapia **del habla** (articulación, claridad) vs terapia de lenguaje (vocabulario, frases)

**Decisión:** **Se mantiene independiente** — intent distinto vs `/servicios/trastornos-del-habla` (condiciones específicas vs proceso terapéutico).

---

##### `/servicios/conciencia-fonologica-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"Conciencia Fonológica en Niños | Fonoaudióloga en Chillán"` → `"Conciencia Fonológica Niños Chillán | Base para Leer y Escribir"`
- **Description:** Reforzada "Evaluación y estimulación de conciencia fonológica en Chillán: habilidad clave para lectoescritura exitosa. Rimas, sílabas, fonemas. Fonoaudióloga infantil presencial."
- **Keywords:** Añadido "conciencia fonológica Chillán", "estimulación conciencia fonológica", "base lectoescritura", "rimas niños Chillán", "fonoaudióloga lectura"

**Decisión:** **Se mantiene independiente** — intent único (pre-lectoescritura, habilidad fonológica específica).

---

##### `/tratamientos/retraso-del-habla-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"Terapia Retraso del Habla en Niños | Chillán"` → `"Retraso del Habla Chillán | Niño no se le entiende al hablar"`
- **Description:** Wording padres "Tratamiento retraso del habla en niños en Chillán: cuando habla poco, se le entiende mal o articula con dificultad. Evaluación y terapia presencial. Mejoramos claridad."
- **Keywords:** Añadido "niño no se le entiende al hablar", "claridad del habla niños"

**Decisión:** **Se mantiene independiente** — intent distinto vs `/tratamientos/retraso-del-lenguaje-chillan` (frozen). **Habla vs lenguaje son áreas diferentes:** habla = producción/articulación/claridad; lenguaje = vocabulario/frases/comprensión. No es canibalización.

---

##### `/sintomas/mi-hijo-no-comprende-chillan`
**Métricas GSC previas:** < 7 imp

**Cambios:**
- **Title:** `"¿Mi hijo no comprende? | Señales Chillán"` → `"Mi hijo no comprende bien | Lenguaje comprensivo Chillán"`
- **Description:** Diferenciada de instrucciones simples: "Si tu hijo no comprende preguntas, relatos o conversaciones para su edad (más allá de instrucciones simples), conoce señales de alerta. Consulta fonoaudióloga Chillán."
- **Keywords:** Añadido "niño no entiende preguntas", "lenguaje comprensivo"
- **Objetivo:** Intento leve de diferenciación vs `/sintomas/nino-no-entiende-instrucciones-chillan` (frozen) — esta página es comprensión general (preguntas, relatos); la congelada es instrucciones específicas

**Decisión:** **Candidato a consolidación** — overlap significativo con `/sintomas/nino-no-entiende-instrucciones-chillan`. Gonzalo debe evaluar si vale la pena mantener ambas o consolidar en una sola página "comprensión/instrucciones". Diferenciac leve aplicada en copy para medir si captura query distinta ("no comprende" general vs "no entiende instrucciones" específica).

---

#### 4. `/glosario/logopeda` — Nuevo término (captura queries España)
**Métricas GSC previas:** Queries existentes en home: "logopeda" (35 imp), "logopedia" (27), "logopeda infantil" (5), 0 clicks

**Cambios:**
- **Nueva página creada:** `/glosario/logopeda`
- **Title:** `"¿Qué es Logopeda? | Logopedia vs Fonoaudiología"`
- **Description:** `"Logopeda y logopedia son términos usados en España para lo que en Chile llamamos fonoaudiólogo y fonoaudiología. Misma profesión, nombres diferentes."`
- **Keywords:** `"logopeda"`, `"logopedia"`, `"logopeda infantil"`, `"diferencia logopeda fonoaudiólogo"`, `"logopeda España Chile"`
- **Contenido:** Definición breve explicando que logopeda = término España, fonoaudiólogo = término Chile/Latinoamérica. Misma formación, distinto nombre. Si estás en Chile buscas "fonoaudiólogo infantil Chillán".
- **Links internos:** A `/fonoaudiologa-ninos-chillan` (pilar) y `/agendar-hora-fonoaudiologo-infantil-chillan` (CTA). Añadir links **desde** esta página hacia frozen está OK; no editamos las frozen para linkear a esta.
- **Sitemap:** Ya incluido automáticamente vía `getGlosarioTermUrls()` en `app/sitemap.ts`

**Objetivo CTR:** > 2% en 21 días (capturar queries "logopeda" que buscan información desde España/otros países y explicar nomenclatura Chile)

---

### Candidatos a consolidación (para Gonzalo)

1. **`/sintomas/mi-hijo-no-comprende-chillan`** vs **`/sintomas/nino-no-entiende-instrucciones-chillan`** (frozen):
   - Overlap significativo en intent: ambas sobre comprensión infantil.
   - Diferenciación leve aplicada: "no comprende" = general (preguntas, relatos); "no entiende instrucciones" = específico (seguir órdenes).
   - Evaluar post-Lote 5 si vale la pena dos páginas o consolidar en una sola.

### Otras mejoras transversales

1. **Schema CollectionPage en hub:** `/recursos` ahora tiene schema que lista las 4 guías como hasPart (mejor señal para Google sobre estructura de contenido).
2. **FAQs específicas TEA:** Añadidas al schema existing de `/chillan/tea-comunicacion` (3 preguntas únicas sobre pragmática, intervención temprana, perfiles verbales/no verbales).
3. **Diferenciación habla vs lenguaje reforzada:** En titles/descriptions de evaluacion-del-lenguaje, terapia-del-habla, retraso-del-habla clarificamos que lenguaje ≠ habla (vocabulario/frases vs articulación/sonidos).
4. **Cross-links desde páginas nuevas:** logopeda glosario linkea a pilar y agendar; servicios Chillán ya tienen links a evaluacion general/terapias principales (no editamos frozen para linkear desde ellas).

### Métricas a monitorear (GSC)

**Periodo de medición:** 14-21 días post-indexación (desde 2026-10-09)

**KPIs Lote 5:**
1. **CTR general del sitio:** objetivo > 1,8% (baseline 1,6%)
2. **CTR `/recursos`:** objetivo > 3% (baseline 1 click/43 imp ≈ 2,3% — mejorar con schema y descripción)
3. **CTR `/chillan/tea-comunicacion`:** objetivo > 3% (baseline 0%, pos 9 — FAQs + diferenciación local deben activar)
4. **CTR `/glosario/logopeda`:** objetivo > 2% (nueva, capturar 35+27+5 = 67 imp totales de queries "logopeda")
5. **Impresiones páginas de baja visibilidad:** objetivo +50% sobre baseline < 7 imp (optimización de titles debe subir visibilidad)

**URLs a seguir de cerca:**
- `/recursos` (43 imp → esperado 1-2 clics con CTR 3%)
- `/chillan/tea-comunicacion` (18 imp → esperado 1 clic con CTR 3%)
- `/glosario/logopeda` (nueva, esperado capturar queries "logopeda*" con ~1-2 clics iniciales)
- `/servicios/test-de-lenguaje-infantil-chillan` (< 7 imp → medir si sube con titles específicos de test TECAL/TEPROSIF)
- `/tratamientos/retraso-del-habla-chillan` (< 7 imp → medir si captura queries "niño no se le entiende" diferenciado de retraso lenguaje)

**Consolidación candidato a revisar:**
- `/sintomas/mi-hijo-no-comprende-chillan` vs `/sintomas/nino-no-entiende-instrucciones-chillan`: revisar en 21 días si hay diferenciación de queries o si consolidan en una sola página.

### Siguientes pasos

1. **Post-deploy:**
   - Solicitar indexación manual en GSC para 9 URLs optimizadas + 1 nueva (logopeda)
   - Validar que los cambios de metadata se reflejan en SERPs (inspeccionar URL)
   - Verificar schema CollectionPage de recursos en validador Google

2. **Monitoreo:**
   - Revisar GSC en 7 días (tendencia temprana de impresiones en páginas de baja visibilidad)
   - Revisar GSC en 14-21 días (medición completa CTR + queries capturadas por logopeda)
   - Evaluar candidato consolidación mi-hijo-no-comprende vs nino-no-entiende-instrucciones

3. **Ideas Lote 6 (futuras, post-21d):**
   - Si páginas baja visibilidad no suben: considerar noindex o redirect a página principal similar (si confirma canibalización post-data).
   - Si `/glosario/logopeda` captura bien queries "logopeda*": considerar otros términos internacionales (ej. "speech therapist" redirigido a pilar con anchor en idioma).
   - Revisar otras páginas `/servicios/*-chillan` no tocadas en Lotes 1-5 con > 10 imp sin clics.

---

## 2026-10-08: SEO Lote 4 — Dislalia, tartamudez, lectoescritura, apraxia, síntomas e informe PIE

### Contexto

**Datos GSC (90 días 2026-07-10 al 2026-10-07):**
- **81 clics totales**
- **4.923 impresiones**
- **CTR promedio: 1,65%**
- Posición promedio: 8,0

**Datos últimos 7 días completos (30 sep–6 oct):** 5 clics / 577 imp vs 7d previos (23–29 sep): 10 / 579 imp

**Problemas detectados:**
1. **Canibalización dislalia:** 3 páginas (`/tratamientos/dislalia-infantil-chillan` 35 imp/0 clicks pos 22.6, `/chillan/dislalia` 13 imp pos 20.5, `/glosario/dislalia` 12 imp pos 8.3) compitiendo sin intents diferenciados.
2. **Tartamudez:** `/sintomas/nino-tartamudea-chillan` (41 imp/2 clicks pos 9.6) necesita match con queries de padres ("tartamudez en niños de 2 a 3 años"); `/chillan/disfemia` (38 imp/6 clicks pos 5) va bien, solo light touch.
3. **Lectoescritura/dislexia cluster sin diferenciación:** `/servicios/dificultades-lectoescritura` (48 imp/1 click pos 6.5 — snippet opportunity), `/chillan/dislexia` (52 imp pos 15.7), `/chillan/lectoescritura` (10 imp pos 12.7), `/glosario/dislexia` (11 imp).
4. **Apraxia:** `/tratamientos/apraxia-del-habla-infantil-chillan` (20 imp pos 8.8) y `/chillan/apraxia-del-habla` (16 imp/2 clicks pos 4.5 — light touch en esta).
5. **Informe PIE:** `/servicios/informe-fonoaudiologico-pie-chillan` (88 imp/3 clicks pos 6.7) — query principal "informe fonoaudiológico" pos 11.
6. **Síntomas snippets:** `/sintomas/hijo-habla-poco-edad-chillan` (36 imp pos 4.1/1 click) y `/sintomas/nino-pronuncia-mal-chillan` (19 imp pos 12.7) necesitan titles como búsquedas de padres.
7. **Servicios therapy:** `/servicios/terapia-lenguaje-infantil` (33 imp pos 14.8, query "especialista en terapia de lenguaje para niños") y `/servicios/trastornos-del-habla` (12 imp pos 48.6) necesitan sharpen.
8. **Primera evaluación:** `/recursos/primera-evaluacion-fonoaudiologica-infantil` (27 imp, 13 en últimos 7d, pos 8.5) — query "qué esperar en la primera evaluación fonoaudiológica de tu hijo".

**Objetivo:** Diferenciar intents en clusters (dislalia, lectoescritura), mejorar titles/descriptions con wording de padres, añadir FAQ donde falte, cross-links estratégicos y evitar canibalización.

### Páginas optimizadas

#### 1. `/tratamientos/dislalia-infantil-chillan` — Página principal de tratamiento dislalia
**Métricas GSC previas:** 35 imp, 0 clics, pos 22.6

**Cambios:**
- **Title:** `"Tratamiento Dislalia Infantil | Chillán"` → `"Tratamiento Dislalia Infantil Chillán | Terapia Pronunciación"`
- **Description:** Añadido "postítulo en trastornos fonológicos", más específica con rotacismo/sigmatismo
- **Keywords:** Añadido "tratamiento dislalia Chillán", "problemas articulación"
- **Cross-link section:** Añadido texto explicativo clarificando que **esta es la página principal de tratamiento**, con links diferenciados a `/glosario/dislalia` (definición corta) y `/chillan/dislalia` (señales locales)

**Objetivo CTR:** > 2% en 21 días (subir desde pos 22.6)

---

#### 2. `/glosario/dislalia` — Definición breve que canaliza a tratamiento
**Métricas GSC previas:** 12 imp, pos 8.3

**Cambios:**
- **Title:** `"¿Qué es la Dislalia? | Causas, Síntomas y Tratamiento"` → `"Definición Dislalia | ¿Qué es y cómo se trata?"`
- **Description:** Reforzado como "definición breve", añadido "diferencia dislalia y trastorno fonológico"
- **Keywords:** Añadido "definición dislalia", "qué significa dislalia", "diferencia dislalia y trastorno fonológico"
- **CTA box prominente:** Añadido box rose-50 destacado al inicio con "→ Si buscas **tratamiento de dislalia en Chillán**, ve a:" con links prominentes a `/tratamientos/dislalia-infantil-chillan` (principal, negrita), `/chillan/dislalia` (señales), `/agendar-*`
- **Objetivo:** Página de glosario (definición) que funnela a las páginas de tratamiento, no compite

**Objetivo CTR:** > 3% en 21 días

**Decisión canibalización:** **Se mantienen las 3 páginas independientes** con intents diferenciados: `/glosario/dislalia` = definición breve → `/tratamientos/dislalia-infantil-chillan` = tratamiento especializado principal → `/chillan/dislalia` = señales locales específicas de cuándo llevar. Cross-links claros entre ellas.

---

#### 3. `/chillan/dislalia` — Señales locales (patologias.ts)
**Métricas GSC previas:** 13 imp, pos 20.5

**Cambios:**
- **Title override:** Añadido `"Dislalia en Chillán | Señales y cuándo consultar"`
- **Description override:** `"¿Tu hijo omite sonidos o dice 'tasa' por casa? Señales de dislalia por edad en Chillán. Evaluación presencial con fonoaudióloga especialista. Agenda por WhatsApp."`
- **Objetivo:** Diferenciarse como página de señales locales, complementa tratamiento

**Objetivo CTR:** > 2,5% en 21 días

---

#### 4. `/sintomas/nino-tartamudea-chillan` — Wording padres + FAQ edad
**Métricas GSC previas:** 41 imp, 2 clicks, pos 9.6

**Cambios:**
- **Title:** `"Mi hijo tartamudea | Evaluación Chillán"` → `"Mi hijo tartamudea | ¿Es normal o preocupante? Chillán"`
- **Description:** Añadido edad específica "2-3 años", "cuándo es disfluencia normal y cuándo consultar"
- **Keywords:** Añadido "tartamudez en niños de 2 a 3 años", "disfluencia normal"
- **FAQ ampliado:** +2 preguntas: "¿Qué tipo de disfluencias son normales en niños pequeños?" (repetir palabras enteras sin tensión vs repeticiones de sonidos con esfuerzo), "¿A qué edad debería preocuparme?" (guidance general sin números específicos)
- **Cross-link:** Añadido link a `/chillan/disfemia`

**Objetivo CTR:** > 4% en 21 días (capturar queries padres con hijos 2-3 años)

---

#### 5. `/servicios/dificultades-lectoescritura` — Snippet opportunity
**Métricas GSC previas:** 48 imp, 1 click, pos 6.5

**Cambios:**
- **Title:** `"Dificultades de Lectura y Escritura en Chillán | Fonoaudióloga"` → `"Dificultades de Lectura y Escritura Chillán | Fonoaudiología"`
- **Description:** Más específica "conciencia fonológica, decodificación, fluidez y comprensión lectora. Base del lenguaje oral para leer y escribir"
- **Keywords:** Añadido "comprensión lectora niños", cambiado "dislexia tratamiento Chillán" por "conciencia fonológica Chillán" (diferenciación)
- **FAQ ampliado:** +1 pregunta "¿Qué relación tiene la lectura con el lenguaje oral?" (explicación bases lingüísticas)

**Objetivo CTR:** > 5% en 21 días (posición top 6 debe convertir más, snippet opportunity)

---

#### 6. `/chillan/dislexia` — Evaluación dislexia Chillán (patologias.ts)
**Métricas GSC previas:** 52 imp, pos 15.7

**Cambios:**
- **Title override:** Añadido `"Dislexia y Fonoaudiología Chillán | Evaluación Lectura"`
- **Description override:** `"La dislexia tiene base en lenguaje oral (conciencia fonológica). Evaluación fonoaudiológica en Chillán para dificultades de lectura y bases del lenguaje. Agenda por WhatsApp."`
- **Objetivo:** Diferenciarse como página de evaluación/tratamiento local de dislexia vs servicio general de lectoescritura

**Objetivo CTR:** > 2% en 21 días, subir ranking con query "fonoaudiologia dislexia"

---

#### 7. `/chillan/lectoescritura` — Base lenguaje (patologias.ts)
**Métricas GSC previas:** 10 imp, pos 12.7

**Cambios:**
- **Title override:** Añadido `"Dificultades de Lectoescritura Chillán | Base Lenguaje"`
- **Description override:** `"Problemas de lectura o escritura suelen tener base en lenguaje oral. Evaluación y tratamiento fonoaudiológico en Chillán para conciencia fonológica y lectoescritura. WhatsApp."`
- **Objetivo:** Enfoque en bases del lenguaje oral, complementa servicio general

**Objetivo CTR:** > 2,5% en 21 días

---

#### 8. `/glosario/dislexia` — Definición dislexia (terminos.ts)
**Métricas GSC previas:** 11 imp

**Cambios:**
- **metaTitle:** `"¿Qué es la Dislexia? | Lectura, Lenguaje y Fonoaudiología"` → `"Definición Dislexia | ¿Qué es y cómo ayuda la fonoaudiología?"`
- **metaDescription:** Reforzado "definición de dislexia", "señales, diferencias"
- **keywords:** Añadido "dislexia definición", "fonoaudiología dislexia"
- **subtitle:** Añadido "Definición breve:"
- **Objetivo:** Claramente definición que explica rol de fonoaudiología

**Objetivo CTR:** > 3% en 21 días

**Decisión canibalización lectoescritura:** **Se mantienen las 4 páginas independientes** con intents diferenciados: `/glosario/dislexia` = definición → `/chillan/dislexia` = evaluación/tratamiento dislexia local → `/servicios/dificultades-lectoescritura` = servicio general de lectoescritura → `/chillan/lectoescritura` = base lenguaje oral. Cross-links entre ellas.

---

#### 9. `/tratamientos/apraxia-del-habla-infantil-chillan` — Tratamiento apraxia
**Métricas GSC previas:** 20 imp, pos 8.8

**Cambios:**
- **Title:** `"Apraxia del Habla Infantil | Tratamiento Chillán"` → `"Tratamiento Apraxia del Habla Infantil Chillán | CAS"`
- **Description:** Más específica "errores inconsistentes, esfuerzo visible al hablar. Evaluación diferencial y terapia de aprendizaje motor presencial"
- **Keywords:** Añadido "tratamiento apraxia habla Chillán", "errores inconsistentes habla"

**Objetivo CTR:** > 3% en 21 días

**Nota:** `/chillan/apraxia-del-habla` (16 imp, 2 clicks, pos 4.5) ya funciona bien — NO se editó (light touch, mantener performer).

---

#### 10. `/servicios/informe-fonoaudiologico-pie-chillan` — Informe PIE colegio
**Métricas GSC previas:** 88 imp, 3 clicks, pos 6.7 (query "informe fonoaudiológico" pos 11)

**Cambios:**
- **Title:** `"Informe Fonoaudiológico PIE y Escuelas de Lenguaje — Chillán | Katia Domínguez"` → `"Informe Fonoaudiológico para PIE Chillán | Colegio Decreto 170"`
- **Description:** Match query exacta "informe fonoaudiológico para PIE", añadido "informe para colegio"
- **Keywords:** Añadido "informe fonoaudiológico para PIE", "informe para colegio"
- **FAQ ampliado:** +1 pregunta "¿El informe es válido para cualquier colegio en Chillán?" (sí, Decreto 170 válido toda región)

**Objetivo CTR:** > 5% en 21 días (posición 6.7 top, query específica "informe fonoaudiológico para PIE")

---

#### 11. `/sintomas/hijo-habla-poco-edad-chillan` — Snippet wording padres
**Métricas GSC previas:** 36 imp, pos 4.1, 1 click

**Cambios:**
- **Title:** `"Mi hijo de 2 años habla poco | Chillán"` → `"Mi hijo de 2 años habla poco: ¿es normal? | Chillán"`
- **Description:** Más específica con pregunta directa "¿Tu hijo de 2 años habla poco o dice pocas palabras?", añadido "qué hacer mientras tanto"
- **Keywords:** Añadido "mi hijo de 2 años habla poco", "hijo habla poco para su edad"

**Objetivo CTR:** > 6% en 21 días (posición top 4 debe convertir muy bien)

**Cross-links:** Ya enlaza bien a `/tratamientos/retraso-del-lenguaje-chillan` (frozen), no se alteró ese link.

---

#### 12. `/sintomas/nino-pronuncia-mal-chillan` — Wording "no se le entiende"
**Métricas GSC previas:** 19 imp, pos 12.7

**Cambios:**
- **Title:** `"Mi hijo no pronuncia bien | Fonoaudiología Chillán"` → `"Mi hijo no se le entiende al hablar | Pronuncia mal Chillán"`
- **Description:** Wording coloquial padres "habla como bebé o no se le entiende a los 3-4 años"
- **Keywords:** Añadido "mi hijo no se le entiende al hablar", "habla como bebé"

**Objetivo CTR:** > 4% en 21 días (capturar wording específico padres)

**Cross-links:** Ya enlaza bien a `/tratamientos/dislalia-infantil-chillan` y `/tratamientos/trastorno-fonologico-chillan` (ambos frozen), no se alteraron esos links.

---

#### 13. `/servicios/terapia-lenguaje-infantil` — Especialista niños
**Métricas GSC previas:** 33 imp, pos 14.8 (query "especialista en terapia de lenguaje para niños")

**Cambios:**
- **Title:** `"Terapia de Lenguaje en Chillán | Fonoaudióloga Infantil"` → `"Terapia de Lenguaje Infantil Chillán | Especialista Niños"`
- **Description:** Captura query exacta "Especialista en terapia de lenguaje para niños en Chillán"
- **Keywords:** Añadido "especialista en terapia de lenguaje para niños"

**Objetivo CTR:** > 3% en 21 días (subir desde pos 14.8 con query match)

---

#### 14. `/servicios/trastornos-del-habla` — Sharpen title
**Métricas GSC previas:** 12 imp, pos 48.6

**Cambios:**
- **Title:** `"Tratamiento de Trastornos del Habla en Chillán | Dislalia, Pronunciación"` → `"Trastornos del Habla Chillán | Dislalia, Articulación"`
- **Description:** Añadido "postítulo en trastornos fonológicos", más específica con apraxia y disartria
- **Keywords:** Añadido "trastornos fonológicos Chillán", "articulación del habla infantil"

**Objetivo CTR:** > 2% en 21 días (muy bajo ranking, optimización de base)

---

#### 15. `/recursos/primera-evaluacion-fonoaudiologica-infantil` — Match query
**Métricas GSC previas:** 27 imp (13 en últimos 7d), pos 8.5

**Cambios:**
- **Title:** `"Primera Evaluación Fonoaudiológica Infantil | Qué Esperar"` → `"Qué esperar en la primera evaluación fonoaudiológica de tu hijo"`
- **Description:** Match query exacta "qué esperar en la primera evaluación fonoaudiológica de tu hijo", más detallada "(60-90 min), qué llevar, cómo es la sesión, qué incluye el informe y qué pasa después"
- **Keywords:** Añadido "qué esperar en la primera evaluación fonoaudiológica", "qué esperar evaluación fonoaudiológica de tu hijo"

**Objetivo CTR:** > 4% en 21 días (rising, posición 8.5, capturar query long-tail)

**Cross-links:** Ya enlaza bien a servicios de evaluación, no se alteraron.

---

### Otras mejoras transversales

1. **Diferenciación de intents:** Cada cluster (dislalia, lectoescritura) tiene roles claros: glosario = definición → tratamiento = página principal → chillan = señales locales.
2. **Cross-links estratégicos:** Links claros entre páginas del mismo cluster con texto explicativo.
3. **Titles con wording de padres:** "mi hijo de 2 años habla poco", "no se le entiende al hablar", "¿es normal o preocupante?"
4. **Descriptions específicas:** Edad, señales concretas, capturan queries long-tail.
5. **FAQ con guidance general:** Sin inventar números, respuestas no-numéricas sobre cuándo preocuparse.

### Métricas a monitorear (GSC)

**Periodo de medición:** 14-21 días post-indexación

**KPIs Lote 4:**
1. **CTR general del sitio:** objetivo > 2% (baseline 1,65%)
2. **CTR `/sintomas/hijo-habla-poco-edad-chillan`:** objetivo > 6% (baseline pos 4.1, debe convertir muy bien)
3. **CTR `/servicios/dificultades-lectoescritura`:** objetivo > 5% (baseline pos 6.5, snippet opportunity)
4. **CTR `/servicios/informe-fonoaudiologico-pie-chillan`:** objetivo > 5% (baseline pos 6.7, query específica)
5. **CTR `/glosario/dislalia`:** objetivo > 3% (baseline pos 8.3, definición que funnela)
6. **Clics totales:** objetivo +15% sobre baseline de 81 clics/90d

**URLs a seguir de cerca:**
- `/tratamientos/dislalia-infantil-chillan` (35 imp/pos 22.6 → subir ranking con diferenciación)
- `/sintomas/hijo-habla-poco-edad-chillan` (36 imp/pos 4.1 → ~2 clics esperados con CTR 6%)
- `/servicios/dificultades-lectoescritura` (48 imp/pos 6.5 → ~2-3 clics con CTR 5%)
- `/servicios/informe-fonoaudiologico-pie-chillan` (88 imp → ~4-5 clics con CTR 5%)
- `/sintomas/nino-tartamudea-chillan` (41 imp → ~2 clics con CTR 4%)

### Siguientes pasos

1. **Post-deploy:**
   - Solicitar indexación manual en GSC para las 15 URLs optimizadas
   - Validar que los cambios de metadata se reflejan en SERPs (inspeccionar URL)
   - Verificar cross-links funcionan correctamente

2. **Monitoreo:**
   - Revisar GSC en 7 días (tendencia temprana)
   - Revisar GSC en 14-21 días (medición completa)
   - Comparar queries con 0 clics vs nuevas queries con clics
   - Monitorear si la diferenciación dislalia/lectoescritura reduce canibalización

3. **Ideas Lote 5 (basadas en datos, esperar post-21d):**
   - **Síntomas adicionales:** Revisar otros `/sintomas/*-chillan` con impresiones > 15 que no se tocaron en Lotes 1-4.
   - **Recursos bajo CTR:** Revisar `/recursos/*` con volumen que no se optimizaron aún.
   - **Queries emergentes:** Analizar GSC post-Lote 4 para identificar nuevas queries con impresiones pero sin clics.
   - **Glosario adicional:** Otros términos en `/glosario/[slug]` (terminos.ts) con > 10 imp que necesiten diferenciación o FAQ más robustas.

---

## 2026-10-07: SEO Lote 3 — TEL cannibalization, voz-online CTR y TEA

### Contexto

**Datos GSC (90 días al 2026-10-06):**
- **82 clics totales**
- **4.930 impresiones**
- **CTR promedio: 1,66%**
- Posición promedio: 8,0

**Datos últimos 7d (30 sep–6 oct):** 5 clics / 510 imp vs 7d previos 10 / 579 imp

**Problemas detectados:**
1. **Canibalización TEL:** 4 páginas compiten (`/tratamientos/tel-*-chillan` 161 imp/frozen, `/servicios/tel-*` 74 imp/frozen, `/glosario/tel` 52 imp/0 clicks pos 8.6, `/chillan/tel` 6 imp). Las dos primeras están congeladas (Lotes 1-2).
2. **Voz-online bajo CTR o 0 clics:** `/paralisis-cordal` (140 imp/6 clicks/4.29% CTR/pos 8.5 — mejor performer), `/higiene-vocal` (54 imp/2 clicks), `/rehabilitacion-vocal-profesionales` (26 imp/0 clicks/pos 11.9 — query "rehabilitacion de la voz en profesionales" pos 27.7), `/fatiga-vocal` (25 imp/0), `/nodulos-vocales` (22 imp/1), `/evaluacion-vocal` (19 imp/0/pos 5.6 — problema snippet), `/voz-ronca` (13 imp/0), `/terapia-vocal-docentes` (16 imp/2 clicks, light touch).
3. **TEA bajo CTR:** `/servicios/tea-*` (72 imp/0 clicks/pos 9.1) + `/chillan/tea-comunicacion` (17 imp/0/pos 8.8).
4. **URL encoding:** `/servicios/informe-fonoaudiol%C3%B3gico-pie-chillan` obtuvo 1 impresión — verificar redirect.

**Objetivo:** Diferenciar páginas TEL, mejorar CTR/FAQ en voz-online capturando queries específicas ("¿se cura?", "por qué se me cansa la voz", "rehabilitacion de la voz"), y optimizar TEA title/description para búsqueda padres Chillán.

### Páginas optimizadas

#### 1. `/glosario/tel` — Diferenciación TEL: definición breve
**Métricas GSC previas:** 52 imp, 0 clics, pos 8.6

**Cambios:**
- **Title:** `"¿Qué es el TEL? | Trastorno Específico del Lenguaje Explicado"` → `"Definición TEL (TDL) | Qué es el Trastorno del Desarrollo del Lenguaje"`
- **Description:** Reforzado como definición breve: "TEL o TDL: trastorno del neurodesarrollo que afecta lenguaje sin causa aparente. Diferencias con retraso simple. Definición breve, tipos y cuándo sospechar."
- **Keywords:** Añadido "definición TEL", "qué significa TEL", "diferencia TEL y retraso lenguaje"
- **Estructura:** Header con "Definición breve:" + CTA box rose-50 destacado "→ Si buscas **tratamiento TEL en Chillán**, ve a:" con links prominentes a `/tratamientos/tel-*-chillan` (principal), `/servicios/tel-*` (¿se cura?), `/agendar-*`
- **Objetivo:** Claramente una página de glosario (definición) que canaliza a las páginas de tratamiento, no compite con ellas

**Objetivo CTR:** > 2% en 21 días

**Decisión canibalización `/chillan/tel`:** **Se mantiene como página independiente** (no canonical). `/chillan/tel` tiene solo 6 imp/pos 6.2 (muy bajo volumen) y es una landing local con contenido único (señales específicas, CTA local, template patologias.ts con datos propios). No es un duplicado thin. El flujo queda: glosario (definición) → tratamiento Chillán (frozen, local) / servicio (frozen, ¿se cura?).

---

#### 2. `/voz-online/paralisis-cordal-rehabilitacion-online`
**Métricas GSC previas:** 140 imp, 6 clicks, CTR 4,29%, pos 8,5

**Cambios:**
- **Title:** `"Parálisis de Cuerda Vocal: Rehabilitación Online | Chile"` → `"Parálisis Cordal: Rehabilitación Vocal Online | ¿Se recupera?"`
- **Description:** Añadido stat "6-12 meses con terapia mejoran cierre glótico post-cirugía o viral. Fonoaudióloga especialista voz."
- **Keywords:** Añadido "parálisis cuerda vocal", "parálisis cordal", "fonoaudióloga especialista en voz"
- **FAQ ampliado:** +2 preguntas: "¿Qué ejercicios se hacen para parálisis cordal?" (empujes laríngeos, LSVT, VFE), "¿La parálisis de cuerda vocal se cura?" (6-12 meses)
- **Schema:** +FAQPage schema (antes solo MedicalWebPage)
- **Intro párrafo:** Reforzado "rehabilitación online altamente efectiva en 6-12 meses"
- **Cross-link:** Añadido link a hub `/voz-online/fonoaudiologa-de-voz-online`

**Objetivo CTR:** > 5% en 21 días (mantener performer top)

---

#### 3. `/voz-online/higiene-vocal-cuidado-voz`
**Métricas GSC previas:** 54 imp, 2 clicks, CTR 3,7%, pos 7,5

**Cambios:**
- **Title:** `"Higiene Vocal: Cómo Cuidar tu Voz | Fonoaudióloga Online Chile"` → `"Higiene Vocal: Cómo Cuidar tu Voz Todos los Días"`
- **Description:** "10 reglas de oro para cuidar tu voz: hidratación, evitar carraspear, descansos vocales. Asesoría fonoaudióloga especialista online para Chile."
- **Keywords:** Añadido "cómo cuidar la voz", "cuidado de la voz", "consejos voz profesionales"
- **FAQ ampliado:** +2 preguntas: "¿Qué alimentos son malos para la voz?", "¿Cómo descansar la voz correctamente?" (respuesta genérica)

**Objetivo CTR:** > 4% en 21 días

---

#### 4. `/voz-online/rehabilitacion-vocal-profesionales-voz`
**Métricas GSC previas:** 26 imp, 0 clicks, pos 11,9 (query "rehabilitacion de la voz en profesionales" pos 27,7)

**Cambios:**
- **Title:** `"Rehabilitación Vocal para Profesionales de la Voz | Online Chile"` → `"Rehabilitación de la Voz en Profesionales | Online Chile"`
- **Description:** Captura query exacta "rehabilitacion de la voz en profesionales": "¿Eres locutor, cantante o profesor y tu voz falla? Rehabilitación vocal online para recuperar resistencia y proyección."
- **Keywords:** Añadido "rehabilitacion de la voz en profesionales" (query exacta)
- **FAQ ampliado:** +2 preguntas: "¿Qué incluye la rehabilitación de la voz en profesionales?", "¿Puedo seguir trabajando durante la rehabilitación vocal?"

**Objetivo CTR:** > 3% en 21 días (capturar query pos 27.7)

---

#### 5. `/voz-online/fatiga-vocal-tratamiento-online`
**Métricas GSC previas:** 25 imp, 0 clicks, pos 8,9

**Cambios:**
- **Title:** `"Fatiga Vocal: Causas y Tratamiento Online | Chile"` → `"Fatiga Vocal: ¿Por qué se me cansa la voz? Tratamiento Online"`
- **Description:** Responde query directa "se me cansa la voz": "¿Llegas al viernes sin voz o te duele la garganta al hablar? Tratamiento online para fatiga vocal: respiración, técnica y proyección sin tensión."
- **Keywords:** Añadido "se me cansa la voz", "voz cansada tratamiento online"
- **FAQ ampliado:** +2 preguntas: "¿Por qué se me cansa la voz al final del día?", "¿Cuánto dura el tratamiento para fatiga vocal?" (respuesta genérica)

**Objetivo CTR:** > 4% en 21 días

---

#### 6. `/voz-online/nodulos-vocales-tratamiento-online`
**Métricas GSC previas:** 22 imp, 1 click, CTR 4,5%, pos 8,7

**Cambios:**
- **Title:** `"Nódulos Vocales: Tratamiento Online sin Cirugía | Chile"` → `"Nódulos Vocales: Tratamiento Online | ¿Se pueden curar sin cirugía?"`
- **Description:** "Tratamiento fonoaudiológico online para nódulos vocales. Terapia conservadora como primera línea antes de cirugía. Reduce tamaño y mejora calidad vocal."
- **Keywords:** Añadido "nodulos cuerdas vocales", "tratamiento nódulos sin cirugía"
- **FAQ ampliado:** +2 preguntas: "¿Cuánto tiempo tarda en mejorar un nódulo vocal con terapia?" (respuesta genérica), "¿Qué es mejor: operar o hacer terapia vocal?"

**Objetivo CTR:** > 5% en 21 días

---

#### 7. `/voz-online/evaluacion-vocal-online`
**Métricas GSC previas:** 19 imp, 0 clicks, pos 5,6 — **problema snippet crítico** (posición top 6 sin clics)

**Cambios:**
- **Title:** `"Evaluación Vocal Online | Diagnóstico de Voz Chile"` → `"Evaluación Vocal Online | ¿Qué incluye el diagnóstico de voz?"`
- **Description:** Más específica: "Evaluación fonoaudiológica de voz online: análisis acústico, perceptual (GRBAS), tiempos fonación e informe con plan de tratamiento. Todo Chile por videollamada."
- **Keywords:** Añadido "diagnóstico de voz", "análisis vocal Chile"
- **FAQ ampliado:** +2 preguntas: "¿Cuánto dura una evaluación vocal?" (respuesta genérica), "¿Necesito tener diagnóstico otorrino antes de la evaluación?"

**Objetivo CTR:** > 6% en 21 días (posición top debe convertir)

---

#### 8. `/voz-online/voz-ronca-causas-tratamiento`
**Métricas GSC previas:** 13 imp, 0 clicks, pos 10,0

**Cambios:**
- **Title:** `"Voz Ronca: Causas y Tratamiento Online | Fonoaudióloga Chile"` → `"Voz Ronca: ¿Por qué y qué hacer? Tratamiento Online Chile"`
- **Description:** "Ronquera persistente (>2 semanas) sin resfriado requiere evaluación. Causas: mal uso vocal, laringitis, reflujo, nódulos. Tratamiento fonoaudiológico online."
- **Keywords:** Añadido "por qué tengo la voz ronca", "disfonía tratamiento online"
- **FAQ ampliado:** +2 preguntas: "¿Qué hacer si tengo voz ronca todo el tiempo?", "¿La voz ronca crónica es grave?"

**Objetivo CTR:** > 3% en 21 días

---

#### 9. `/voz-online/terapia-vocal-docentes-profesores`
**Métricas GSC previas:** 16 imp, 2 clicks, CTR 12,5%, pos 7,5 — **light touch** (ya convierte bien)

**Cambios:**
- **Title:** `"Terapia Vocal para Docentes y Profesores | Online Chile"` → `"Terapia Vocal para Docentes Online | Salva tu voz de profesor"`
- **Description:** Stat ASHA "58% de docentes desarrollará trastorno de voz. Terapia fonoaudiológica online para profesores: técnica vocal, proyección sin gritar, prevención disfonía."
- **Keywords:** Añadido "voz profesores", "disfonía docente", "terapia voz profesores online"
- **FAQ ampliado:** +2 preguntas: "¿Cuánto dura la terapia vocal para profesores?" (respuesta genérica), "¿Qué pasa si no trato la disfonía docente?"

**Objetivo CTR:** > 13% en 21 días (mantener alta conversión)

---

#### 10. `/servicios/tea-trastorno-espectro-autista`
**Métricas GSC previas:** 72 imp, 0 clicks, pos 9,1

**Cambios:**
- **Title:** `"Terapia TEA Chillán | Comunicación y lenguaje autismo"` → `"Fonoaudiología TEA Chillán | Comunicación y lenguaje en autismo"`
- **Description:** Añadido stat 40%: "Apoyo fonoaudiológico para niños con autismo/TEA en Chillán: comunicación funcional, lenguaje expresivo y comprensión. 40% con retraso lenguaje. Evaluación presencial."
- **Keywords:** Añadido "autismo fonoaudiología Chillán", "lenguaje en TEA"
- **Cross-link:** Página ya linkeada con `/chillan/tea-comunicacion` (17 imp/0/pos 8.8) — ambas se mantienen separadas (local vs servicio general) con contenido diferenciado

**Objetivo CTR:** > 2,5% en 21 días

---

#### 11. Redirect URL encoding: `/servicios/informe-fonoaudiol%C3%B3gico-pie-chillan`
**GSC:** 1 impresión en variante con tilde

**Cambios:**
- Añadido redirect 301 en `next.config.ts` de `/servicios/informe-fonoaudiológico-pie-chillan` (con ó) → `/servicios/informe-fonoaudiologico-pie-chillan` (sin tilde, canónica)

**Objetivo:** Consolidar señales en URL canónica

---

### Otras mejoras transversales

1. **FAQPage schema:** Añadido en `/voz-online/paralisis-cordal-rehabilitacion-online` (antes solo tenía MedicalWebPage). Resto de páginas voz-online ya tenían FAQPage.
2. **Cross-links voz-online:** Todas las páginas voz-online ahora linkean al hub `/voz-online/fonoaudiologa-de-voz-online` en breadcrumbs.
3. **Keywords sin tilde:** Añadido "fonoaudióloga especialista en voz" (con tilde) + variantes sin tilde en keywords de voz-online.
4. **Titles con preguntas directas:** "¿Se recupera?", "¿Por qué se me cansa la voz?", "¿Por qué y qué hacer?", "¿Qué incluye el diagnóstico?" capturan intent informacional de búsquedas long-tail.
5. **Descriptions con stats concretos:** "6-12 meses", "58% de docentes", "40% con retraso lenguaje" agregan credibilidad y especificidad.

### Métricas a monitorear (GSC)

**Periodo de medición:** 14-21 días post-indexación

**KPIs Lote 3:**
1. **CTR general del sitio:** objetivo > 2,2% (baseline 1,66%)
2. **CTR `/glosario/tel`:** objetivo > 2% (baseline 0%, pos 8.6)
3. **CTR `/voz-online/evaluacion-vocal-online`:** objetivo > 6% (baseline 0%, pos 5.6 crítico)
4. **CTR `/voz-online/paralisis-cordal`:** objetivo > 5% (baseline 4.29%, mantener top performer)
5. **CTR `/servicios/tea-*`:** objetivo > 2,5% (baseline 0%, pos 9.1)
6. **Clics totales:** objetivo +20% sobre baseline de 82 clics/90d

**URLs a seguir de cerca:**
- `/voz-online/evaluacion-vocal-online` (19 imp/pos 5.6 → esperado 1 clic con CTR 6%)
- `/voz-online/rehabilitacion-vocal-profesionales-voz` (26 imp/pos 11.9 → esperado 1 clic si sube ranking con query match)
- `/servicios/tea-trastorno-espectro-autista` (72 imp → esperado 2 clics con CTR 2.5%)
- `/glosario/tel` (52 imp → esperado 1 clic con CTR 2%)

### Siguientes pasos

1. **Post-deploy:**
   - Solicitar indexación manual en GSC para las 11 URLs optimizadas
   - Validar que los cambios de metadata se reflejan en SERPs (inspeccionar URL)
   - Verificar redirect `informe-fonoaudiológico` → `informe-fonoaudiologico`

2. **Monitoreo:**
   - Revisar GSC en 7 días (tendencia temprana)
   - Revisar GSC en 14-21 días (medición completa)
   - Comparar queries con 0 clics vs nuevas queries con clics en voz-online

3. **Ideas Lote 4 (futuras, basadas en datos):**
   - **Tratamientos locales Chillán con volumen medio:** `/tratamientos/trastorno-fonologico-chillan` (frozen Lote 1, revisar post-21d)
   - **Recursos bajo CTR:** `/recursos/estimular-lenguaje-en-casa` (frozen Lote 2, revisar post-21d)
   - **Síntomas Chillán bajo CTR:** `/sintomas/nino-no-entiende-instrucciones-chillan` (frozen Lote 2), `/sintomas/mi-hijo-no-habla-bien-chillan` (frozen Lote 2), `/sintomas/hijo-no-arma-frases-chillan` (frozen Lote 2) — revisar post-21d.
   - **Glosario / definiciones adicionales:** Páginas glosario con > 10 imp que necesiten diferenciación o FAQ más robustas.

---

## 2026-10-06: SEO Lote 2 — CTR en voz online, recursos y síntomas

### Contexto

**Datos GSC (90 días al 2026-10-05):**
- **86 clics totales**
- **6.118 impresiones**
- **CTR promedio: 1,4%**
- Posición promedio: ~7,6

**Problema detectado:** URLs de voz online, recursos y síntomas con impresiones pero CTR bajo o cero clics. Queries específicas sin captura (ej. "el tel se cura", "mi hijo de 2 años no forma frases").

**Objetivo:** Mejorar CTR optimizando titles para responder queries directas, descriptions con pasos concretos y keywords con variantes sin tilde.

### Páginas optimizadas

#### 1. `/voz-online/fonoaudiologa-voz-antofagasta`
**Métricas GSC previas:** 453 imp, CTR 0,88%

**Cambios:**
- **Title:** `"Fonoaudióloga de Voz Online desde Antofagasta | Terapia Vocal"` — aclara "desde Antofagasta" + "terapia de voz online"
- **Keywords:** Añadido "fonoaudiólogo Antofagasta" y variantes locales
- **Description:** Explicita "100% por videollamada sin traslados"

**Objetivo CTR:** > 2% en 21 días

---

#### 2. `/recursos/estimular-lenguaje-en-casa`
**Métricas GSC previas:** 283 imp, pos 15

**Cambios:**
- **Title:** `"¿Cómo Empezar a Estimular el Lenguaje en Casa? Guía Práctica"` — responde query "cómo empezar"
- **Description:** Paso a paso + errores que evitar (no interrogar, no corregir todo)
- **Keywords:** Añadido "cómo empezar a estimular el lenguaje"

**Objetivo CTR:** > 2,5% en 21 días

---

#### 3. `/voz-online/fonoaudiologa-de-voz-online`
**Métricas GSC previas:** 219 imp

**Cambios:**
- **Title:** `"Fonoaudióloga de Voz Online — Todo Chile, 100% por Videollamada"` — refuerza cobertura + modalidad
- **Description:** Añadido "100% online por videollamada para todo Chile" + "sin traslados, agenda flexible"
- **Keywords:** Añadido "terapia de voz online todo Chile" y "videollamada fonoaudióloga"

**Objetivo CTR:** > 2% en 21 días

---

#### 4. `/sobre-katia-dominguez-fonoaudiologa-chillan`
**Métricas GSC previas:** 218 imp, pos 5,6

**Cambios:**
- **Keywords:** Añadido "fonoaudiólogo Chillán" (variante masculina)
- **Nota:** Credenciales "+20 años" ya existentes en description, no se inventaron datos

**Objetivo CTR:** > 3% en 21 días (posición top)

---

#### 5. `/servicios/evaluacion-fonoaudiologica`

**Cambios:**
- **Keywords:** Añadido "evaluacion fonoaudiologica" (sin tilde) + "informe para el colegio"
- **Description:** Reforzado "informe escrito para el colegio" (dato que ya existía en contenido)

**Objetivo CTR:** > 2% en 21 días

---

#### 6. `/servicios/tel-trastorno-especifico-lenguaje`
**Métricas GSC previas:** 73 imp, 0 clics  
**Query real:** "el tel se cura" (pos 9)

**Cambios:**
- **Title:** `"TEL: ¿Se Cura? Tratamiento del Trastorno Específico del Lenguaje"` — responde query directa
- **Description:** Explicita "no se cura pero mejora mucho con terapia intensiva"

**Objetivo CTR:** > 3% en 21 días (capturar query específica)

---

#### 7. `/sintomas/nino-no-entiende-instrucciones-chillan`
**Métricas GSC previas:** pos 5, 0 clics

**Cambios:**
- **Title:** `"Niño no entiende instrucciones: ¿Comprensión o atención?"` — plantea distinción clave
- **Description:** "Puede ser déficit de comprensión o atención" + cuándo evaluar

**Objetivo CTR:** > 4% en 21 días (posición top 5)

---

#### 8. `/sintomas/mi-hijo-no-habla-bien-chillan`
**Métricas GSC previas:** pos 6, 0 clics

**Cambios:**
- **Title:** `"Mi hijo no habla bien: ¿Cuándo consultar?"` — responde preocupación principal
- **Description:** "no se le entiende, habla como bebé" + señales por edad
- **Keywords:** Añadido "no se le entiende al hablar" y "habla como bebé"

**Objetivo CTR:** > 4% en 21 días (posición top 6)

---

#### 9. `/sintomas/hijo-no-arma-frases-chillan`
**Métricas GSC previas:** pos 5,6, 0 clics

**Cambios:**
- **Title:** `"Mi hijo de 2 años no forma frases: solo «mamá ven», «más pan»"` — edad específica + ejemplos concretos
- **Description:** "palabras sueltas como «mamá ven» o «más pan»" (ejemplos reales que usan padres)

**Objetivo CTR:** > 5% en 21 días (posición top, intent muy específico)

---

### Otras mejoras transversales

1. **Keywords con variantes sin tilde:** "evaluacion fonoaudiologica", "fonoaudiólogo" (masculino) en páginas clave
2. **Titles con preguntas directas:** "¿Cuándo consultar?", "¿Se cura?", "¿Comprensión o atención?" capturan queries informacionales
3. **Descriptions con ejemplos concretos:** Frases específicas que padres usan ("mamá ven", "más pan", "habla como bebé")

### Métricas a monitorear (GSC)

**Periodo de medición:** 14-21 días post-indexación

**KPIs Lote 2:**
1. **CTR general del sitio:** objetivo > 2% (baseline 1,4%)
2. **CTR `/servicios/tel-trastorno-especifico-lenguaje`:** objetivo > 3% (capturar "el tel se cura")
3. **CTR `/sintomas/hijo-no-arma-frases-chillan`:** objetivo > 5% (posición top + intent específico)
4. **Clics totales:** objetivo +25% sobre baseline de 86 clics/90d

**URLs a seguir de cerca:**
- `/servicios/tel-trastorno-especifico-lenguaje` (73 imp, query "el tel se cura" pos 9 → esperado 2-3 clics)
- `/sintomas/hijo-no-arma-frases-chillan` (pos 5,6 → esperado 3-4 clics con CTR 5%)
- `/voz-online/fonoaudiologa-voz-antofagasta` (453 imp → esperado 9 clics con CTR 2%)

### Siguientes pasos

1. **Post-deploy:**
   - Solicitar indexación manual en GSC para las 9 URLs optimizadas
   - Validar que los cambios de metadata se reflejan en SERPs (inspeccionar URL)

2. **Monitoreo:**
   - Revisar GSC en 7 días (tendencia temprana)
   - Revisar GSC en 14-21 días (medición completa)
   - Comparar queries con 0 clics vs nuevas queries con clics

3. **Lote 3 (futuro):**
   - Páginas tratamientos locales con impresiones (ej. TEL, retraso del lenguaje)
   - Optimización de URLs con > 15 impresiones y CTR < 1%

---

## 2026-10-05: SEO Lote 1 — CTR y query-match en URLs prioritarias

### Contexto

**Datos GSC (90 días al 2026-10-05):**
- 59 páginas indexadas
- 88 clics totales
- 6.230 impresiones
- CTR promedio: 1,41%
- Posición promedio: 7,6

**Problema detectado:** Alto volumen de impresiones en páginas clave pero CTR muy bajo o cero clics.

**Objetivo:** Mejorar CTR en páginas prioritarias optimizando title, description, contenido inicial y enlaces internos.

### Páginas optimizadas

#### 1. `/` (Home)
**Métricas GSC previas:** 1.794 imp, 23 clics, CTR 1,28%, pos 5,35  
**Queries principales sin clics:** "fonoaudiologa" (277/0), "fonoaudiólogo" (194/0)

**Cambios:**
- **Title:** `"Fonoaudióloga Infantil en Chillán | Terapia de Lenguaje"` → `"Fonoaudióloga en Chillán | Evaluación y Terapia de Lenguaje Infantil"`
  - Incluye tanto "fonoaudióloga" como "fonoaudiólogo" (query alternativa)
  - Añade "evaluación" (intento transaccional)
  - Más directo y específico
- **Description:** Expandida con CTA clara: "Agenda tu hora por WhatsApp y te respondo en menos de 24 horas"
  - Añade urgencia y reduce fricción
- **FAQ mejoradas:**
  - "¿Qué problemas trata una fonoaudióloga infantil?" (más específico)
  - "¿Cómo es la primera consulta con el fonoaudiólogo?" (captura variante masculina)
  - Respuesta más completa sobre edad de evaluación con ASHA como autoridad
- **Enlaces internos:** Añadidos links a `/recursos/hitos-del-lenguaje-por-edad` y `/agendar-hora-fonoaudiologo-infantil-chillan`

**Objetivo CTR:** > 2,5% en 21 días

---

#### 2. `/fonoaudiologa-ninos-chillan`
**Métricas GSC previas:** 538 imp, 4 clics, CTR 0,74%, pos 7,57

**Cambios:**
- **Title:** `"Fonoaudióloga para Niños en Chillán | Lenguaje y Habla"` → `"Fonoaudióloga Infantil en Chillán | Especialista en Niños"`
  - Refuerza "infantil" (búsqueda padre-madre)
  - "Especialista" aumenta autoridad percibida
- **Description:** Añadido "+20 años de experiencia" para credibilidad y expansión con "evaluación fonoaudiológica infantil con informe"

**Objetivo CTR:** > 1,5% en 21 días

---

#### 3. `/recursos/hitos-del-lenguaje-por-edad`
**Métricas GSC previas:** 250 imp, 0 clics, pos 8,55  
**Queries principales:** "hitos del lenguaje por edad" (2 imp), "a qué edad hablan los niños" (91 imp)

**Cambios:**
- **Title:** Más específico y keyword-rich: `"¿A qué edad hablan los niños? Hitos del lenguaje 0-5 años | Fonoaudióloga"`
  - Responde directamente la pregunta principal (a qué edad hablan)
  - Añade rango de edad "0-5 años" para especificidad
  - "Fonoaudióloga" refuerza E-E-A-T
- **Description:** Hook emocional + keywords: "A los 12 meses primeras palabras, a los 2 años unas 50 palabras y frases de 2 palabras. Guía con hitos del lenguaje por edad, señales de alerta y cuándo consultar. Por Katia Domínguez, fonoaudióloga con +20 años en Chillán."
  - Respuesta directa en snippet
  - Autoridad (nombre + experiencia + ciudad)
- **Keywords:** Añadido "a qué edad hablan los bebés" (búsqueda alternativa)
- **Contenido:**
  - Añadido link a `/agendar-hora-fonoaudiologo-infantil-chillan` en intro
  - Enlaces a `/servicios` y `/tratamientos/retraso-del-lenguaje-chillan` en sección "Qué hacer"

**Objetivo CTR:** > 3% en 21 días (posición buena, snippet débil)

---

#### 4. `/agendar-hora-fonoaudiologo-infantil-chillan`
**Métricas GSC previas:** 188 imp, 0 clics, pos 5,49  
**Alerta:** Posición excelente (5,49) con 0 clics = snippet pobre

**Cambios:**
- **Title:** `"Agendar Fonoaudióloga Infantil en Chillán | WhatsApp"` → `"Agendar Hora Fonoaudiólogo Infantil en Chillán | Respuesta en 24h"`
  - "Respuesta en 24h" reduce fricción y da certeza
  - Captura variante "fonoaudiólogo" (masculino)
- **Description:** Añadido "Te respondemos el mismo día, horario flexible para familias"
  - CTA urgente
  - Beneficio familiar (horario escolar compatible)
- **Contenido:** Añadido link a `/recursos/hitos-del-lenguaje-por-edad` en cuerpo

**Objetivo CTR:** > 5% en 21 días (posición top, debe convertir mejor)

---

#### 5. `/servicios`
**Métricas GSC previas:** 185 imp, 0 clics, pos 8,43

**Cambios:**
- **Title:** `"Terapia de Lenguaje y Fonoaudiología Infantil | Chillán"` → `"Servicios de Fonoaudiología Infantil en Chillán | Terapia de Lenguaje"`
  - "Servicios" captura búsquedas informacionales
  - Estructura más clara (qué → dónde)
- **Description:** Expandida con servicios específicos: "terapia de lenguaje y habla, evaluación fonoaudiológica con informe, TEL, dificultades de pronunciación y lectoescritura. +20 años de experiencia. Agenda por WhatsApp."
  - Keywords densas
  - CTA final
- **Enlaces internos:** Añadidos links a `/recursos/hitos-del-lenguaje-por-edad` y `/agendar-hora-fonoaudiologo-infantil-chillan`

**Objetivo CTR:** > 2% en 21 días

---

#### 6. `/tratamientos/tel-trastorno-especifico-lenguaje-chillan`
**Métricas GSC previas:** 173 imp, 0 clics, pos 7,51

**Cambios:**
- **Title:** `"Tratamiento TEL (Trastorno del Lenguaje) | Chillán"` → `"Tratamiento TEL en Chillán | Trastorno Específico del Lenguaje Infantil"`
  - "Trastorno Específico del Lenguaje" completo para búsquedas long-tail
  - "Infantil" especifica público
- **Description:** Añadido "El TEL afecta al 7% de los niños. Agenda tu evaluación." (dato estadístico + urgencia)
- **Keywords:** Añadido "TEL Chillán", "tratamiento TEL"

**Objetivo CTR:** > 2% en 21 días

---

#### 7. `/tratamientos/trastorno-fonologico-chillan`
**Métricas GSC previas:** 140 imp, 0 clics, pos 5,14  
**Alerta:** Ranking excelente (5,14) sin clics

**Cambios:**
- **Title:** `"Mi hijo no pronuncia bien | Trastorno fonológico Chillán"` → `"Trastorno Fonológico en Chillán | Mi hijo no se le entiende al hablar"`
  - "No se le entiende" = lenguaje coloquial de padres (dolor específico)
  - Title tipo problema-solución
- **Description:** "¿Tu hijo de 3-4 años no se le entiende o habla como bebé?" (pregunta directa, edad específica)
  - "Terapia presencial con conciencia fonológica" (técnica + local)
- **Keywords:** Añadido "niño no se le entiende", "pronunciación infantil"

**Objetivo CTR:** > 4% en 21 días (posición top 5)

---

#### 8. `/tratamientos/retraso-del-lenguaje-chillan`
**Métricas GSC previas:** 106 imp, 0 clics, pos 2,80  
**Alerta crítica:** Posición 2,8 promedio (top 3) con 0 clics = snippet no optimizado para intención

**Cambios:**
- **Title:** `"Mi hijo habla poco: retraso del lenguaje | Chillán"` → `"Retraso del Lenguaje en Chillán | Mi hijo de 2 años no habla o habla poco"`
  - Edad específica "2 años" (query frecuente)
  - Dos variantes: "no habla" + "habla poco"
- **Description:** "¿Tu hijo de 2 años no habla, habla poco o no arma frases? Tratamiento de retraso del lenguaje infantil en Chillán: evaluación fonoaudiológica, terapia de lenguaje presencial y plan personalizado. La intervención temprana mejora resultados."
  - Pregunta directa (intent match)
  - Proceso completo (evaluación → tratamiento → plan)
  - Beneficio emocional (intervención temprana)
- **Keywords:** Añadido "mi hijo de 2 años no habla", "niño habla poco"

**Objetivo CTR:** > 8% en 21 días (posición excepcional, debe capturar tráfico)

---

### Otras mejoras transversales

1. **Enlaces internos estratégicos:**
   - Home → hitos-del-lenguaje + agendar-hora
   - hitos-del-lenguaje ↔ agendar-hora, servicios, retraso-del-lenguaje
   - servicios ↔ hitos-del-lenguaje, agendar-hora
   - agendar-hora → hitos-del-lenguaje

2. **Consistencia de FAQs:**
   - Expandidas con datos ASHA (7% prevalencia TEL)
   - Variaciones lingüísticas (fonoaudióloga/fonoaudiólogo)
   - Respuestas más completas y orientadas a padres

3. **Schema mantenido:**
   - No se modificó schema existente (ya optimizado)
   - FAQPage, Service, Article schemas activos

### Métricas a monitorear (GSC)

**Periodo de medición:** 14-21 días post-indexación (solicitar indexación manual en GSC)

**KPIs Lote 1:**
1. **CTR general del sitio:** objetivo > 2,5% (baseline 1,41%)
2. **CTR Home:** objetivo > 2,5% (baseline 1,28%)
3. **CTR /retraso-del-lenguaje-chillan:** objetivo > 8% (posición top 3)
4. **CTR /trastorno-fonologico-chillan:** objetivo > 4% (posición top 5)
5. **Clics totales:** objetivo +50% sobre baseline de 88 clics/90d

**URLs a seguir de cerca:**
- `/recursos/hitos-del-lenguaje-por-edad` (250 imp → esperado 7-8 clics con CTR 3%)
- `/agendar-hora-fonoaudiologo-infantil-chillan` (188 imp → esperado 9-10 clics con CTR 5%)
- `/tratamientos/retraso-del-lenguaje-chillan` (106 imp → esperado 8 clics con CTR 8%)

### Siguientes pasos

1. **Post-deploy:**
   - Solicitar indexación manual en GSC para las 8 URLs optimizadas
   - Validar que los cambios de metadata se reflejan en SERPs (inspeccionar URL)

2. **Monitoreo:**
   - Revisar GSC en 7 días (tendencia temprana)
   - Revisar GSC en 14-21 días (medición completa)
   - Comparar queries con 0 clics vs nuevas queries con clics

3. **Lote 2 (futuro):**
   - Páginas voz-online con volumen (Antofagasta, voz online, parálisis cordal)
   - `/recursos/estimular-lenguaje-en-casa` (284 imp, CTR 1,4%, pos 15)
   - Optimización de URLs con > 20 impresiones y CTR < 1%

---

## Template para futuros lotes

```markdown
## YYYY-MM-DD: Título del lote

### Contexto
- Baseline GSC: X clics, Y imp, Z% CTR, pos W
- Problema: ...
- Objetivo: ...

### Páginas optimizadas
#### URL
**Métricas previas:** ...  
**Cambios:** ...  
**Objetivo:** ...

### Métricas a monitorear
- KPI 1: ...
- KPI 2: ...

### Siguientes pasos
1. ...
2. ...
```
