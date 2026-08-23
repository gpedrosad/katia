#!/usr/bin/env node
/**
 * Apaga AI Max en search-adultos-online (o GOOGLE_ADS_CAMPAIGN_ID).
 *
 * Si bundling_required = REQUIRED, la API responde AI_MAX_MUST_BE_ENABLED
 * al poner enable_ai_max=false hasta optar out de TEXT_ASSET_AUTOMATION.
 *
 * Uso: npm run google-ads:disable-ai-max
 * Solo mutar cuando el humano lo pida.
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { google } from "googleapis";
import { GoogleAdsApi } from "google-ads-api";

const CUSTOMER_ID = (process.env.GOOGLE_ADS_CUSTOMER_ID ?? "2147001598").replace(
  /-/g,
  "",
);
const CAMPAIGN_ID = (process.env.GOOGLE_ADS_CAMPAIGN_ID ?? "24093796310").replace(
  /-/g,
  "",
);
const DEVELOPER_TOKEN = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
const OAUTH_CLIENT_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_ADS_OAUTH_CLIENT_PATH ?? ".secrets/gcp-oauth-client-ads.json",
);
const OAUTH_TOKEN_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_ADS_OAUTH_TOKEN_PATH ?? ".secrets/google-ads-oauth-token.json",
);

const loadOAuth = () => {
  if (!DEVELOPER_TOKEN) throw new Error("Falta GOOGLE_ADS_DEVELOPER_TOKEN");
  if (!existsSync(OAUTH_TOKEN_PATH)) {
    throw new Error("No hay token OAuth. Ejecuta: npm run google-ads:auth");
  }
  const raw = JSON.parse(readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const oauth = raw.installed ?? raw.web ?? raw;
  const tokens = JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8"));
  if (!tokens.refresh_token) {
    throw new Error("Token sin refresh_token. Ejecuta: npm run google-ads:auth");
  }
  return { oauth, tokens };
};

const getAccessToken = async (oauth, tokens) => {
  const oauth2 = new google.auth.OAuth2(oauth.client_id, oauth.client_secret);
  oauth2.setCredentials({ refresh_token: tokens.refresh_token });
  const { token } = await oauth2.getAccessToken();
  if (!token) throw new Error("No se pudo refrescar access token");
  return token;
};

const mutateCampaigns = async (accessToken, operations) => {
  const url = `https://googleads.googleapis.com/v23/customers/${CUSTOMER_ID}/campaigns:mutate`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "developer-token": DEVELOPER_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ operations }),
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text };
  }
  if (!res.ok) {
    const msg =
      json?.error?.details?.[0]?.errors?.[0]?.message ??
      json?.error?.message ??
      text;
    throw new Error(`HTTP ${res.status}: ${msg}`);
  }
  return json;
};

async function main() {
  const { oauth, tokens } = loadOAuth();
  const client = new GoogleAdsApi({
    client_id: oauth.client_id,
    client_secret: oauth.client_secret,
    developer_token: DEVELOPER_TOKEN,
  });
  const customer = client.Customer({
    customer_id: CUSTOMER_ID,
    refresh_token: tokens.refresh_token,
  });

  const beforeRows = await customer.query(`
    SELECT campaign.name, campaign.ai_max_setting.enable_ai_max,
      campaign.ai_max_setting.bundling_required,
      campaign.asset_automation_settings
    FROM campaign WHERE campaign.id = ${CAMPAIGN_ID}
  `);
  const before = beforeRows[0]?.campaign;
  if (!before) throw new Error(`Campaña ${CAMPAIGN_ID} no encontrada`);

  const enabled = before.ai_max_setting?.enable_ai_max === true;
  console.log(
    `\nCampaña: ${before.name} (${CAMPAIGN_ID})\nAI Max ahora: ${enabled ? "ON" : "OFF"}\nbundling_required: ${before.ai_max_setting?.bundling_required}\n`,
  );

  if (!enabled) {
    console.log("Ya está apagado. Nada que hacer.\n");
    return;
  }

  const accessToken = await getAccessToken(oauth, tokens);
  const resourceName = `customers/${CUSTOMER_ID}/campaigns/${CAMPAIGN_ID}`;

  // 1) Opt-out text automation (necesario si bundling REQUIRED)
  console.log("1) OPTED_OUT TEXT_ASSET_AUTOMATION + FINAL_URL_EXPANSION…");
  await mutateCampaigns(accessToken, [
    {
      update: {
        resourceName,
        assetAutomationSettings: [
          {
            assetAutomationType: "TEXT_ASSET_AUTOMATION",
            assetAutomationStatus: "OPTED_OUT",
          },
          {
            assetAutomationType: "FINAL_URL_EXPANSION_TEXT_ASSET_AUTOMATION",
            assetAutomationStatus: "OPTED_OUT",
          },
        ],
      },
      updateMask: "assetAutomationSettings",
    },
  ]);

  // 2) Disable AI Max (updateMask explícito; false no puede omitirse)
  console.log("2) enable_ai_max = false…");
  await mutateCampaigns(accessToken, [
    {
      update: {
        resourceName,
        aiMaxSetting: { enableAiMax: false },
      },
      updateMask: "aiMaxSetting.enableAiMax",
    },
  ]);

  const afterRows = await customer.query(`
    SELECT campaign.ai_max_setting.enable_ai_max, campaign.asset_automation_settings
    FROM campaign WHERE campaign.id = ${CAMPAIGN_ID}
  `);
  const after = afterRows[0]?.campaign?.ai_max_setting;
  console.log(
    `\n✓ AI Max: ${after?.enable_ai_max ? "ON (falló)" : "OFF"}\n`,
  );
  if (after?.enable_ai_max) process.exit(1);
}

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
