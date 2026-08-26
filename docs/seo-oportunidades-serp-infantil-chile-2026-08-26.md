# Oportunidades SEO — Fonoaudiología infantil Chile

**Fecha scrape:** 2026-08-26  
**SERP:** Top 10 orgánico Google Chile, español (`gl=CL`, `hl=es`, `lr=lang_es`, `cr=countryCL`)  
**Actor:** Apify `scraperlink/google-search-results-serp-scraper`  
**Opportunity:** cualitativo sobre la SERP (0–100). **No** es volumen, CPC ni Domain Authority.

## Método

| Componente | Rango | Qué mide |
|---|---|---|
| Debilidad SERP | 0–40 | Directorios, Q&A Doctoralia, redes, internacional, marca (Nestlé/Pampers), academia/empleo, URLs off-intent |
| Relevancia Chile infantil | 0–30 | Encaje con padres + fono infantil en Chile |
| Valor de intención | 0–20 | Informational / local / commercial / transactional |
| Winnability | LOW 10 · MEDIUM 5 · HIGH 1 | Qué tan disputable es el Top 10 |

**No se inventó** volumen, CPC ni autoridad de dominio.

## Cobertura

| | N |
|---|---|
| Keywords pedidas | 207 |
| Con SERP real (puntuadas) | **63** |
| Sin SERP medible | **144** (límite mensual gratuito scraperlink; el segundo Actor de Apify cortó al renovar billing) |
| Mejor score | **93** · `mi hijo de 2 años no forma frases` |
| Dificultad LOW | 19 |
| Locales Chillán con SERP | 8 |

Las 144 sin scrape **no se puntúan**. El intent de esa lista es inferido por la query, no por Google.

Competidores locales frecuentes en Chillán: `katialafono.cl`, `andessaludchillan.cl`, `centrofonoaudiologicocomunicados.cl`, Doctoralia.

## Cómo usarlo (katialafono)

- El score alto = **SERP floja**, no “mucha gente busca eso”. Cruzar con GSC antes de crear páginas.
- No abrir una URL por keyword. Agrupar en páginas síntoma/recurso que **ya existen**.
- **No** rankear a propósito `fonasa` / `precio` hasta confirmar si Katia atiende Fonasa y qué se puede decir del arancel (`lib/site.ts` no tiene ni Fonasa ni precio).
- `fonoaudiólogo online` (score 44) es **adultos/voz**, no infantil presencial.

### Mapeo a rutas existentes

| Cluster del scrape (score alto) | Página a reforzar (no crear otra) |
|---|---|
| 2 años no forma frases / no habla / habla poco | `/sintomas/hijo-no-arma-frases-chillan`, `/sintomas/hijo-habla-poco-edad-chillan`, `/sintomas/mi-hijo-no-habla-bien-chillan` |
| 18 meses no habla | pilar `/fonoaudiologa-ninos-chillan` + hitos |
| 3–4 años no se le entiende / habla mal | `/sintomas/nino-pronuncia-mal-chillan`, `/sintomas/mi-hijo-no-habla-bien-chillan` |
| habla como bebé / no pronuncia | `/sintomas/nino-pronuncia-mal-chillan`, `/tratamientos/dislalia-infantil-chillan` |
| evaluación de lenguaje infantil | `/servicios/evaluacion-del-lenguaje-infantil-chillan` |
| estimular en casa / ejercicios | `/recursos/estimular-lenguaje-en-casa` |
| a qué edad / hitos (144 sin SERP) | `/recursos/hitos-del-lenguaje-por-edad` (H1 ya apunta a “a qué edad”) |
| local Chillán (fono / terapia) | pilar + home + `/ads/fono-presencial-chillan` (noindex; Ads no orgánico) |
| TEL / TDL / dislalia / apraxia / tartamudez (144) | `/tratamientos/*-chillan`, `/chillan/tel`, glosario |

`pendiente:` titles/H1 de síntoma en lenguaje de padre (`mi hijo de 2 años no forma frases`) + FAQ por edad. No 63 landings nuevas.

## Locales Chillán (8 con SERP)

| # | Keyword | Opp | Diff | Intent |
|---|---|---|---|---|
| 7 | fonoaudiólogo infantil chillán fonasa | 70 | MEDIUM | local |
| 8 | fonoaudiólogo chillán precio | 69 | MEDIUM | local |
| 11 | terapia de lenguaje chillán | 69 | LOW | local |
| 13 | fonoaudiología infantil chillán | 66 | MEDIUM | local |
| 14 | fonoaudióloga infantil chillán | 66 | MEDIUM | local |
| 22 | fonoaudiólogo chillán fonasa | 62 | HIGH | local |
| 26 | fonoaudiólogo niños chillán | 61 | MEDIUM | local |
| 30 | fonoaudiólogo chillán | 59 | MEDIUM | local |

Debilidad típica: Doctoralia / 2x3 / Cronoshare, a veces empleo o otra ciudad. `terapia de lenguaje chillán` es la más winnable (LOW, 6 directorios).

## Ranking (63 con SERP)

| # | Keyword | Opp | Diff | Intent | Debilidad SERP | Rel. |
|---|---|---|---|---|---|---|
| 1 | mi hijo de 2 años no forma frases | 93 | LOW | informational | 1 dir.; 1 Q&A Doctoralia; 4 sociales; 4 intl. | 28 |
| 2 | niño de 2 años no habla | 93 | LOW | informational | 1 dir.; 1 Q&A; 2 sociales; 7 intl. | 28 |
| 3 | evaluación de lenguaje infantil | 75 | LOW | informational | 1 social; 7 intl.; 5 off-intent; 1 academia | 14 |
| 4 | mi hijo de 3 años no se le entiende | 74 | LOW | informational | 3 dir.; 2 Q&A; 2 off-intent; 1 marca | 28 |
| 5 | mi hijo de 4 años no se le entiende | 74 | LOW | informational | 3 dir.; 2 Q&A; 2 off-intent; 1 marca | 28 |
| 6 | mi hijo habla como bebé | 71 | LOW | informational | 3 dir.; 2 Q&A; 3 marca | 26 |
| 7 | fonoaudiólogo infantil chillán fonasa | 70 | MEDIUM | local | 3 dir.; 4 otra ciudad | 30 |
| 8 | fonoaudiólogo chillán precio | 69 | MEDIUM | local | 4 dir.; 1 social; 1 off-intent | 29 |
| 9 | mi hijo de 4 años habla mal | 69 | LOW | informational | 2 dir.; 2 Q&A; 1 intl. | 28 |
| 10 | niño de 18 meses no habla | 69 | LOW | informational | 3 dir.; 2 Q&A; 1 marca | 28 |
| 11 | terapia de lenguaje chillán | 69 | LOW | local | 6 dir. | 30 |
| 12 | niño no forma frases | 67 | LOW | informational | 3 dir.; 2 Q&A; 1 marca | 26 |
| 13 | fonoaudiología infantil chillán | 66 | MEDIUM | local | 5 dir.; empleo | 30 |
| 14 | fonoaudióloga infantil chillán | 66 | MEDIUM | local | 5 dir.; empleo | 30 |
| 15 | mi hijo de 2 años habla poco | 66 | LOW | informational | 3 dir.; 2 Q&A; SERP 9/10 | 28 |
| 16 | mi hijo de 2 años no habla | 66 | LOW | informational | 3 dir.; 2 Q&A; 1 marca | 28 |
| 17 | mi hijo todavía no habla | 66 | LOW | informational | 2 dir.; 2 Q&A; 1 intl.; 1 marca | 26 |
| 18 | niño de 2 años habla poco | 66 | LOW | informational | 3 dir.; 2 Q&A; 1 marca | 28 |
| 19 | niño dice pocas palabras | 66 | LOW | informational | 2 dir.; 2 Q&A; 1 intl.; 1 marca | 26 |
| 20 | niño no pronuncia bien | 65 | LOW | informational | 2 dir.; 2 Q&A | 26 |
| 21 | mi hijo de 3 años habla poco | 64 | LOW | informational | 3 dir.; 2 Q&A | 28 |
| 22 | fonoaudiólogo chillán fonasa | 62 | HIGH | local | 4 dir.; 2 otra ciudad | 29 |
| 23 | mi hijo habla pero no se le entiende | 62 | MEDIUM | informational | 2 dir.; 1 Q&A; 3 off-intent | 26 |
| 24 | niño de 3 años no se le entiende | 62 | MEDIUM | informational | 2 dir.; 1 Q&A; 2 off-intent; 1 marca | 28 |
| 25 | fonoaudiólogo fonasa | 61 | MEDIUM | transactional | 3 dir.; 1 social | 24 |
| 26 | fonoaudiólogo niños chillán | 61 | MEDIUM | local | 5 dir. | 30 |
| 27 | mi hijo de 18 meses no habla | 61 | MEDIUM | informational | 2 dir.; 1 Q&A; 2 marca; SERP 9/10 | 28 |
| 28 | mi hijo no dice palabras | 61 | LOW | informational | 2 dir.; 2 Q&A; 1 marca | 26 |
| 29 | precio fonoaudiólogo | 60 | MEDIUM | transactional | 3 dir.; 1 off-intent | 24 |
| 30 | fonoaudiólogo chillán | 59 | MEDIUM | local | 3 dir.; 2 academia | 27 |
| 31 | niño habla poco | 59 | LOW | informational | 3 dir.; 2 Q&A | 26 |
| 32 | niño habla pero no se entiende | 58 | MEDIUM | informational | 2 dir.; 1 Q&A; 2 off-intent | 26 |
| 33 | fonoaudiólogo precio | 57 | MEDIUM | transactional | 2 dir.; 1 off-intent | 24 |
| 34 | niño no habla | 57 | MEDIUM | informational | 2 dir.; 1 Q&A; 1 marca; SERP 9/10 | 26 |
| 35 | mi hijo de 3 años no habla | 56 | MEDIUM | informational | 2 dir.; 1 Q&A; 1 marca; SERP 9/10 | 28 |
| 36 | cómo estimular el lenguaje en niños | 55 | MEDIUM | informational | 1 dir.; 1 marca; 1 academia; SERP 9/10 | 26 |
| 37 | fonoaudiólogo infantil fonasa | 55 | MEDIUM | transactional | 3 dir. | 26 |
| 38 | niño no habla bien | 55 | MEDIUM | informational | 2 dir.; 1 Q&A; 1 marca | 26 |
| 39 | mi hijo no entiende cuando le hablo | 52 | MEDIUM | informational | 2 dir.; 1 Q&A; 1 marca | 26 |
| 40 | mi hijo no forma frases | 52 | MEDIUM | informational | 2 dir.; 1 Q&A; 1 marca | 26 |
| 41 | mi hijo no quiere hablar | 52 | MEDIUM | informational | 1 dir.; 1 Q&A; 4 off-intent; 2 marca | 14 |
| 42 | ejercicios para retraso del lenguaje | 50 | MEDIUM | informational | 1 dir.; 1 social; 2 academia | 22 |
| 43 | mi hijo no habla bien | 49 | MEDIUM | informational | 1 dir.; 1 Q&A; 1 marca | 26 |
| 44 | terapia de lenguaje infantil | 49 | MEDIUM | commercial | 2 academia | 26 |
| 45 | evaluación fonoaudiológica infantil | 48 | MEDIUM | commercial | 2 academia | 26 |
| 46 | fonoaudiología infantil | 48 | MEDIUM | commercial | 1 dir. | 26 |
| 47 | fonoaudióloga infantil | 48 | MEDIUM | commercial | 1 dir. | 26 |
| 48 | fonoaudiólogo | 48 | MEDIUM | commercial | 1 dir.; 2 academia; SERP 9/10 | 20 |
| 49 | fonoaudiólogo infantil chile | 48 | MEDIUM | commercial | 1 dir. | 26 |
| 50 | terapia del habla infantil | 48 | MEDIUM | commercial | 2 academia; SERP 9/10 | 26 |
| 51 | fonoaudiólogo infantil | 47 | HIGH | commercial | 1 dir. | 26 |
| 52 | retraso del habla 3 años | 47 | MEDIUM | informational | 2 dir.; 1 Q&A; SERP 9/10 | 22 |
| 53 | retraso del habla en niños | 47 | HIGH | informational | 1 dir.; 1 academia | 26 |
| 54 | retraso del habla infantil | 47 | MEDIUM | informational | 1 dir.; SERP 9/10 | 26 |
| 55 | mi hijo no sigue instrucciones | 46 | MEDIUM | informational | 1 marca | 26 |
| 56 | fonoaudiólogo niños | 44 | HIGH | commercial | 1 dir. | 26 |
| 57 | fonoaudiólogo online | 44 | MEDIUM | commercial | 1 dir.; 1 academia | 20 |
| 58 | retraso del lenguaje cuándo preocuparse | 44 | MEDIUM | informational | 1 dir.; 1 Q&A; SERP 9/10 | 22 |
| 59 | terapia de lenguaje | 41 | MEDIUM | commercial | 1 dir.; 1 academia | 20 |
| 60 | terapia del habla | 41 | MEDIUM | commercial | 1 dir.; SERP 9/10 | 20 |
| 61 | evaluación fonoaudiológica | 39 | MEDIUM | commercial | SERP 9/10 | 20 |
| 62 | cómo estimular el lenguaje en casa | 38 | MEDIUM | informational | 1 dir. | 22 |
| 63 | evaluación del habla infantil | 34 | MEDIUM | informational | 2 academia | 14 |

dir. = Doctoralia / 2x3 / Cronoshare. marca = Nestlé / Pampers. intl. = fuera de Chile.

## Prioridad de contenido (orgánico)

1. **P0 — lenguaje de padre, 2–4 años** (opp 69–93, casi todas LOW): 2 años no habla / no forma frases; 3–4 no se le entiende. Una página (o H1/FAQ de las de síntoma) que responda la edad en el título.
2. **P1 — local Chillán sin Fonasa/precio** (69–66 LOW/MEDIUM): `terapia de lenguaje chillán`, `fonoaudióloga/ía infantil chillán`.
3. **P2 — 18 meses / “todavía no habla” / “habla como bebé”**.
4. **No P0:** `fonoaudiólogo infantil` genérico Chile (HIGH, opp 47), Fonasa/precio sin dato de negocio, `fonoaudiólogo online`.

## Keywords sin SERP (144)

Intent inferido. Útiles como backlog de FAQ/hitos, no como scores.

**Local / comercial:** fonoaudióloga · fonoaudiólogo infantil online · cuánto cuesta un fonoaudiólogo · fonoaudióloga chillán · fonoaudiólogo infantil chillán · evaluación fonoaudiológica chillán · terapia del habla chillán · cuándo llevar a un niño al fonoaudiólogo · cómo saber si mi hijo necesita fonoaudiólogo · señales para llevar al niño al fonoaudiólogo · fonoaudiólogo autismo · fonoaudiólogo autismo niños · fonoaudiología autismo · fonoaudiología TEA · fonoaudiólogo TEA · fonoaudiólogo TEA niños · terapia lenguaje autismo

**Padre / síntoma (sin edad o con edad no scrapeada):** mi hijo no habla · habla poco · no pronuncia bien · no junta palabras · dice pocas palabras · de 1 año no habla · de 2 años no dice palabras · de 3 años no forma frases · niño de 2 años no dice palabras · de 3 años no habla / habla poco · de 4 años no habla bien · mi hijo pronuncia mal · no pronuncia la r / rr / s · habla enredado / poco claro · cambia u omite letras · tartamudez (2–4 años, evolutiva, cuándo preocuparse, tratamiento) · no entiende instrucciones · no responde preguntas · lenguaje en niños con autismo · estimulación lenguaje autismo

**Hitos / desarrollo:** a qué edad hablan · a qué edad debe hablar · cuándo debe empezar · cuándo preocuparse si no habla · cuántas palabras (1 año / 18 meses / 2 / 3 años) · qué / cómo debe hablar (2–4 años) · hitos del lenguaje/habla (por edad) · desarrollo del lenguaje/habla (1–4 años) · vocabulario 2–3 años · lenguaje esperado por edad

**Retraso / TDL / TEL / fonológico / dislalia / apraxia:** retraso del lenguaje/habla (infantil, 2–3 años, síntomas, señales, causas, cuándo preocuparse) · TDL / TEL · trastorno fonológico · trastorno de los sonidos del habla · dislalia (síntomas, tratamiento, ejercicios) · apraxia del habla infantil · a qué edad se pronuncia r / rr / s · ejercicios para pronunciar r / rr · problemas de pronunciación

**Estimular:** cómo estimular el lenguaje · ejercicios / actividades / juegos · ejercicios de lenguaje para niños · cómo hacer que mi hijo hable · cómo ayudar a un niño que habla poco · comprensión del lenguaje infantil
