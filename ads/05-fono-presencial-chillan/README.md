# Cluster 5 — Fonoaudióloga infantil presencial Chillán

| Campo | Valor |
|-------|--------|
| Landing | `/ads/fono-presencial-chillan` |
| Patrón | [`../PATRON-LANDING.md`](../PATRON-LANDING.md) |
| Index | noindex |
| Reseñas Google | índices **0, 1, 2, 3, 4, 5** (infantil primero; 6 desktop / 2 mobile) |
| Foto | `/katia-ads-hero.jpg` |
| Sticky CTA | mobile only (`AdsStickyCta`) |
| Oferta | Consulta **presencial infantil** en Chillán (lenguaje, habla, lectoescritura). **No es para adultos.** Sin calle pública. |

## Configuración de campaña

| Campo | Valor |
|-------|-------|
| Campaña | `search-fono-presencial-chillan` · `24172404146` |
| Estado inicial | **PAUSED** — activar solo tras desplegar y revisar presupuesto |
| Grupo | `fono-presencial-chillan` · `201984702120` |
| RSA | `822009115409` · 15 títulos + 4 descripciones |
| Budget | `15813234161` |
| Tipo / red | Search · solo Google Search · sin partners · sin Display |
| Conversión | `Contacto` · WhatsApp · `7705733210` · principal |
| Presupuesto inicial | **$2.000 CLP/día** |
| Puja inicial | CPC manual · máx. **$1.000 CLP** · eCPC OFF |
| Idioma | Español · `languageConstants/1003` |
| Ubicación | Presencia física en Chillán ciudad/comuna + Chillán Viejo |
| Geos | `9048036`, `9228298`, `9244397` |
| AI Max | **OFF** |
| Horario Ads | Sin restricción inicial; revisar con datos reales |
| Política salud | Search contextual, sin audiencias; exención API explícita para keyword marcada |

La campaña se crea pausada con `npm run google-ads:create-fono-presencial -- --apply`.
El script primero valida toda la mutación, es idempotente y verifica la configuración final.
Para validar sin crear: `npm run google-ads:create-fono-presencial -- --validate-only`.

Creada y verificada por API el **2026-08-23**. La URL de producción aún debe
desplegarse antes de activar la campaña.

## Anuncio

**H1:** Fonoaudióloga para niños en Chillán  
**H2:** Consulta infantil presencial  
**H2:** Evaluación de lenguaje  
**URL:** `https://www.katialafono.cl/ads/fono-presencial-chillan`  
**Path:** `/presencial/chillan`  
**Playbook:** [`../../GOOGLEADS/google-ads-search-campana-playbook.md`](../../GOOGLEADS/google-ads-search-campana-playbook.md)

### Títulos RSA (≤30 caracteres)

```
Fonoaudióloga para Niños
Fonoaudióloga Infantil
Fonoaudióloga Niños Chillán
Fono Infantil Chillán
Terapia Infantil Chillán
Evaluación Infantil
Terapia de Lenguaje Niños
Fonoaudióloga en Chillán
Agenda por WhatsApp
Katia Domínguez Chillán
Consulta Infantil Chillán
Fonoaudiología Infantil
Lenguaje y Habla Niños
Fono para tu Hijo Chillán
Presencial Infantil Ñuble
```

### Descripciones RSA (≤90 caracteres)

```
Katia Domínguez, fonoaudióloga infantil en Chillán. Agenda por WhatsApp.
Evaluación infantil de lenguaje, habla y lectoescritura. Dirección al coordinar.
Valoración 5,0 en Google. Atención presencial para niños en Chillán y Ñuble.
Cuéntanos qué te preocupa. Coordinamos evaluación presencial en horario hábil.
```

## CTAs (copy)

| Ubicación | Texto |
|-----------|--------|
| Hero + sticky | Quiero agendar para mi hijo |
| Final | Empezar por WhatsApp |

## Keywords frase

```
"fonoaudiologa ninos chillan"
"fonoaudiologa para ninos chillan"
"fonoaudiologa infantil chillan"
"fonoaudiologia infantil chillan"
"terapia de lenguaje chillan"
"terapia de lenguaje ninos chillan"
"fonoaudiologa chillan"
"fonoaudiologo chillan"
"fonoaudiologa en chillan"
"evaluacion fonoaudiologica infantil"
"fonoaudiologa presencial chillan"
"fonoaudiologia chillan"
"fonoaudiologo en chillan"
"fonoaudiologo ninos chillan"
"fonoaudiologo infantil chillan"
"fonoaudiologa nuble"
"fonoaudiologa en nuble"
"fonoaudiologia nuble"
"fonoaudiologo nuble"
"terapia del habla chillan"
"terapia de habla chillan"
"evaluacion fonoaudiologica chillan"
"evaluacion de lenguaje chillan"
"consulta fonoaudiologica chillan"
"fonoaudiologa chillan viejo"
"fonoaudiologa ninos nuble"
"fonoaudiologa infantil nuble"
"retraso del lenguaje chillan"
"fonoaudiologa para ninos"
"fonoaudiologa infantil"
"fonoaudiologia infantil"
"terapia de lenguaje ninos"
"fonoaudiologa para mi hijo chillan"
"fonoaudiologa cerca chillan"
```

## Negativas de campaña (amplias)

Además de variantes con/sin tilde cuando corresponde:

```
empleo
trabajo
vacante
sueldo
carrera
universidad
práctica
internado
estudiante
tesis
pdf
gratis
gratuito
curso
diplomado
material
juegos
láminas
actividades
qué es
definición
wikipedia
youtube
online
virtual
videollamada
zoom
a distancia
domicilio
a domicilio
adulto
adultos
voz
vocal
disfonía
docente
docentes
profesor
profesores
cantante
canto
otorrino
psicólogo
psicóloga
terapeuta ocupacional
```

## Servicios a promocionar (≤25 caracteres)

URL de cada uno: `https://www.katialafono.cl/ads/fono-presencial-chillan`

```
Fonoaudióloga infantil
Consulta niños Chillán
Evaluación infantil
Terapia de lenguaje
Terapia del habla
Fonoaudiología Ñuble
```

## Notas

- Cluster **local presencial infantil**. Geo Ads: presencia en Chillán/Chillán Viejo; no “todo Chile”.
- H1 lleva **niños** + ciudad. No usar copy de adultos/voz.
- La Región de Ñuble completa no se agrega al lanzamiento para evitar clics lejanos.
- Las negativas se crean a nivel campaña en concordancia amplia.
- No mezclar con campañas de voz/adultos online.
- Los “servicios a promocionar” quedan documentados para la UI; la API crea keywords + RSA.
