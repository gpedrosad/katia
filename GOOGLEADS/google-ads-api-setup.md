# Google Ads API — Katialafono (este repo)

**Actualizado:** 2026-08-11  
**Cuenta:** Katialafono · `GOOGLE_ADS_CUSTOMER_ID=2147001598`  
**Campaña Search:** `search-adultos-online` · `24093796310`  
**Campaña local pausada:** `search-fono-presencial-chillan` · `24172404146`  
**MCC:** Gonzalo Pedrosa · `8057859597` (existe; **no** poner como `LOGIN_CUSTOMER_ID` para Katialafono — el OAuth tiene acceso **directo** a `2147001598`; con login MCC la API responde permission denied)  
**Credenciales:** mismas que `/Users/gonzalo/gonzalopedrosa` vía symlink `.secrets`

## Reglas

- **Solo lectura** hasta que el humano pida mutar campañas.
- No usar MCP para Ads.
- No commitear `.env.local` ni `.secrets/`.
- **AI Max debe estar OFF** en Search online (expansión basura: marcas, ciudades, genéricos). Si vuelve a ON → apagar (sección abajo).

## Setup local (una vez)

```bash
# Ya debería existir (misma máquina que gonzalopedrosa):
ls -la .secrets   # → …/gonzalopedrosa/.secrets

# Si no:
ln -sf /Users/gonzalo/gonzalopedrosa/.secrets .secrets

# En .env.local (ver .env.example):
# GOOGLE_ADS_OAUTH_CLIENT_PATH=.secrets/gcp-oauth-client-ads.json
# GOOGLE_ADS_OAUTH_TOKEN_PATH=.secrets/google-ads-oauth-token.json
# GOOGLE_ADS_DEVELOPER_TOKEN=<mismo que gonzalopedrosa>
# GOOGLE_ADS_CUSTOMER_ID=2147001598
# GOOGLE_ADS_LOGIN_CUSTOMER_ID=8057859597
```

Si el token OAuth expiró (`invalid_grant`):

```bash
npm run google-ads:auth
# Login con gpedrosadom@gmail.com (MCC)
```

## Comandos

```bash
npm run google-ads:list-accounts   # IDs accesibles
npm run google-ads:report          # → docs/google-ads-informe-YYYY-MM-DD.md
npm run google-ads:auth            # renovar OAuth
npm run google-ads:disable-ai-max  # apaga AI Max si está ON (mutación; pedir antes)
npm run google-ads:create-fono-presencial -- --apply  # crea campaña local PAUSED
```

## AI Max — apagar si está ON

**Estado deseado:** `campaign.ai_max_setting.enable_ai_max = false` en `search-adultos-online`.

**Por qué importa:** con AI Max ON aparecen términos `AI_MAX` (marcas clínicas, ciudades, genéricos como `servicio`) que no son keywords nuestras.

### Verificar

```sql
SELECT campaign.name, campaign.ai_max_setting.enable_ai_max,
  campaign.ai_max_setting.bundling_required,
  campaign.asset_automation_settings
FROM campaign
WHERE campaign.id = 24093796310
```

O en revisión Ads: si search terms traen match `AI_MAX` recientes → revisar flag.

### Procedimiento (API REST v23)

Si `enable_ai_max` ya es `false` → no hacer nada.

Si está `true`:

1. **OPTED_OUT** de automatización de texto (obligatorio cuando `bundling_required = REQUIRED`; si no, la API responde `AI_MAX_MUST_BE_ENABLED` al poner false):
   - `TEXT_ASSET_AUTOMATION` → `OPTED_OUT`
   - `FINAL_URL_EXPANSION_TEXT_ASSET_AUTOMATION` → `OPTED_OUT`
2. **`aiMaxSetting.enableAiMax = false`** con `updateMask: "aiMaxSetting.enableAiMax"` (el mask debe ir explícito; un `false` omitido no actualiza).

Script del repo (hace 1+2 y verifica):

```bash
npm run google-ads:disable-ai-max
# opcional: GOOGLE_ADS_CAMPAIGN_ID=…
```

Hecho OK el **2026-08-11** en `24093796310`.

La campaña presencial `24172404146` se creó el **2026-08-23** con AI Max OFF,
solo Google Search y segmentación por presencia en Chillán/Chillán Viejo.

### Fallback (si no se pudiera apagar el flag)

En cada ad group: `ai_max_ad_group_setting.disable_search_term_matching = true` (corta la expansión de queries; no apaga todo AI Max).

## Código

| Pieza | Path |
|-------|------|
| Cliente read-only | `lib/google-ads-client.ts` |
| Auth / list | `scripts/google-ads-auth.mjs` |
| Informe | `scripts/google-ads-report.mjs` |
| Apagar AI Max | `scripts/google-ads-disable-ai-max.mjs` |
| Crear Search presencial | `scripts/google-ads-create-fono-presencial.mjs` |
| Tag conversión web | `GOOGLEADS/google-ads-tag-conversiones.md` |

## Relación con gtag

- **gtag `AW-18364805586`:** medición de conversiones en el sitio (WhatsApp).
- **Ads API:** lectura de campañas, costos, términos, landings.

Son capas distintas; ambas hacen falta.
