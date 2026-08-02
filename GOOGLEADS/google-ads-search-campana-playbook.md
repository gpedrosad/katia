# Playbook: crear campaña Search (Ads online)

**Actualizado:** 2026-08-02  
**Cuenta:** Katialafono `2147001598`  
**Uso:** cada vez que abras un cluster nuevo, pide al agente: *“campaña Search para cluster X según playbook”*.

## Qué estamos haciendo (modelo)

1 campaña Search **por cluster** (no mezclar infantil + voz en la misma).  
1 grupo de anuncios ≈ 1 landing `/ads/{slug}`.  
Conversión principal: **Contacto** (clic WhatsApp) `AW-18364805586/rBy6CNrQsNocENLjgrVE`.  
Keywords: **solo frase** `"..."`.  
Geo: **Chile**. Red: **solo Búsqueda**.

Orden de clusters: `google-ads-keywords-online-ranking.md`.  
**Landings Ads:** Voz / disfonía → `/ads/voz-disfonia-online` · Fono adultos → `/ads/fono-adultos-online`.

## Checklist creación (UI Google Ads)

### Campaña
| Campo | Valor |
|-------|--------|
| Tipo | Búsqueda |
| Objetivo | Clientes potenciales / Conversiones |
| Conversión | Contacto (principal) |
| Geo | Chile |
| Idioma | Español |
| Redes | Solo Búsqueda (sin Display / sin partners si quieres más control) |
| Presupuesto inicio | $8.000–$15.000 CLP/día (ajustar) |
| Puja | Maximizar conversiones (tras datos) o CPC manual al inicio |

### Grupo
| Campo | Valor |
|-------|--------|
| Nombre | Igual al cluster (ej. `Voz disfonía online`) |
| URL final | `https://www.katialafono.cl/ads/{slug}` |
| Keywords | Bloque del ranking del cluster (frase) |
| Negativas | Base cuenta + bloque del cluster (adultos/voz, infantil, etc.) → `google-ads-negativas-online.md` |

### RSA (anuncio)
| Pieza | Regla |
|-------|--------|
| Títulos | **Hasta 15**; pedir al agente **≥7** distintos · **máx. 30 caracteres c/u** |
| Descripciones | 2–4 · **máx. 90 caracteres** |
| Message-match | H1/H2 del README del cluster (`ads/NN-slug/README.md`) |
| CTA implícito | WhatsApp / videollamada / online Chile |

### Assets de negocio (cuenta)
| Campo | Valor |
|-------|--------|
| Único / servicio | Copy corto del cluster (ver README Ads) |
| Tel | `+56995497838` solo si mides llamadas |
| GBP | Ficha Katia (Maps cid) |
| Tag sitio | Ya en web · doc `google-ads-tag-conversiones.md` |

## Prompt para el agente (copiar)

```
Según GOOGLEADS/google-ads-search-campana-playbook.md y el cluster {NOMBRE}:
1) Keywords frase a pegar
2) Negativas (qué bloques del md)
3) URL final
4) 7–15 títulos RSA ≤30 caracteres
5) 2–4 descripciones ≤90 caracteres
6) Checklist UI resumido
No mutar la API Ads hasta que lo pida.
```

## Fuentes por cluster

| Dato | Dónde |
|------|--------|
| Keywords + ranking | `google-ads-keywords-online-ranking.md` |
| Negativas | `google-ads-negativas-online.md` |
| Landing / H1 anuncio | `ads/NN-slug/README.md` + `ads/PATRON-LANDING.md` |
| Tag / conversión | `google-ads-tag-conversiones.md` |
| API lectura | `google-ads-api-setup.md` · `npm run google-ads:report` |

## No hacer

- Keyword **amplia**
- Final URL = home (usar `/ads/...`)
- Mezclar adultos e infantil en un grupo
- Negativizar `online` / `videollamada` / `virtual` en campañas online
- Mutar campañas por API sin pedido explícito
