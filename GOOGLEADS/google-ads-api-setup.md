# Google Ads API — Katialafono (este repo)

**Actualizado:** 2026-08-02  
**Cuenta:** Katialafono · `GOOGLE_ADS_CUSTOMER_ID=2147001598`  
**MCC:** Gonzalo Pedrosa · `8057859597` (existe; **no** poner como `LOGIN_CUSTOMER_ID` para Katialafono — el OAuth tiene acceso **directo** a `2147001598`; con login MCC la API responde permission denied)  
**Credenciales:** mismas que `/Users/gonzalo/gonzalopedrosa` vía symlink `.secrets`

## Reglas

- **Solo lectura** hasta que el humano pida mutar campañas.
- No usar MCP para Ads.
- No commitear `.env.local` ni `.secrets/`.

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
```

## Código

| Pieza | Path |
|-------|------|
| Cliente read-only | `lib/google-ads-client.ts` |
| Auth / list | `scripts/google-ads-auth.mjs` |
| Informe | `scripts/google-ads-report.mjs` |
| Tag conversión web | `GOOGLEADS/google-ads-tag-conversiones.md` |

## Relación con gtag

- **gtag `AW-18364805586`:** medición de conversiones en el sitio (WhatsApp).
- **Ads API:** lectura de campañas, costos, términos, landings.

Son capas distintas; ambas hacen falta.
