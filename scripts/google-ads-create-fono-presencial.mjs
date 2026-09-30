#!/usr/bin/env node
/**
 * Crea la campaña Search local para /ads/fono-presencial-chillan.
 *
 * Seguridad:
 * - Sin --apply solo imprime el plan.
 * - Con --apply valida primero la mutación completa.
 * - La campaña siempre nace PAUSED.
 * - Si el nombre ya existe, no duplica recursos.
 */

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  enums,
  GoogleAdsApi,
  ResourceNames,
  toMicros,
} from "google-ads-api";

const CUSTOMER_ID = (process.env.GOOGLE_ADS_CUSTOMER_ID ?? "2147001598").replace(
  /-/g,
  "",
);
const DEVELOPER_TOKEN = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
const OAUTH_CLIENT_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_ADS_OAUTH_CLIENT_PATH ??
    ".secrets/gcp-oauth-client-ads.json",
);
const OAUTH_TOKEN_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_ADS_OAUTH_TOKEN_PATH ??
    ".secrets/google-ads-oauth-token.json",
);

const APPLY = process.argv.includes("--apply");
const VALIDATE_ONLY = process.argv.includes("--validate-only");
const CAMPAIGN_NAME = "search-fono-presencial-chillan";
const AD_GROUP_NAME = "fono-presencial-chillan";
const FINAL_URL =
  "https://www.katialafono.cl/ads/fono-presencial-chillan";
const DAILY_BUDGET_CLP = 2_000;
const MAX_CPC_CLP = 1_000;
const CAMPAIGN_ID = "24172404146";
const AD_GROUP_ID = "201984702120";
const BUDGET_ID = "15813234161";

/** Lunes a jueves, 00:00–24:00. Sin viernes ni fin de semana. */
const AD_SCHEDULE_DAYS = [
  enums.DayOfWeek.MONDAY,
  enums.DayOfWeek.TUESDAY,
  enums.DayOfWeek.WEDNESDAY,
  enums.DayOfWeek.THURSDAY,
];

const GEO_TARGETS = [
  { id: "9048036", label: "Chillan · City" },
  { id: "9228298", label: "Chillan · Municipality" },
  { id: "9244397", label: "Chillan Viejo · Municipality" },
];

const KEYWORDS = [
  "fonoaudiologa ninos chillan",
  "fonoaudiologa para ninos chillan",
  "fonoaudiologa infantil chillan",
  "fonoaudiologia infantil chillan",
  "terapia de lenguaje chillan",
  "terapia de lenguaje ninos chillan",
  "fonoaudiologa chillan",
  "fonoaudiologo chillan",
  "fonoaudiologa en chillan",
  "evaluacion fonoaudiologica infantil",
  "fonoaudiologa presencial chillan",
  "fonoaudiologia chillan",
  "fonoaudiologo en chillan",
  "fonoaudiologo ninos chillan",
  "fonoaudiologo infantil chillan",
  "fonoaudiologa nuble",
  "fonoaudiologa en nuble",
  "fonoaudiologia nuble",
  "fonoaudiologo nuble",
  "terapia del habla chillan",
  "terapia de habla chillan",
  "evaluacion fonoaudiologica chillan",
  "evaluacion de lenguaje chillan",
  "consulta fonoaudiologica chillan",
  "fonoaudiologa chillan viejo",
  "fonoaudiologa ninos nuble",
  "fonoaudiologa infantil nuble",
  "retraso del lenguaje chillan",
  "fonoaudiologa para ninos",
  "fonoaudiologa infantil",
  "fonoaudiologia infantil",
  "terapia de lenguaje ninos",
  "fonoaudiologa para mi hijo chillan",
  "fonoaudiologa cerca chillan",
];

/** Search contextual, sin audiencias: Google permite solicitar esta exención explícita. */
const POLICY_EXEMPTIONS = new Map([
  ["fonoaudiologia infantil chillan", "HEALTH_IN_PERSONALIZED_ADS"],
  ["fonoaudiologia chillan", "HEALTH_IN_PERSONALIZED_ADS"],
  ["fonoaudiologia nuble", "HEALTH_IN_PERSONALIZED_ADS"],
  ["fonoaudiologia infantil", "HEALTH_IN_PERSONALIZED_ADS"],
  ["evaluacion fonoaudiologica chillan", "HEALTH_IN_PERSONALIZED_ADS"],
  ["consulta fonoaudiologica chillan", "HEALTH_IN_PERSONALIZED_ADS"],
]);

const NEGATIVE_KEYWORDS = [
  "empleo",
  "trabajo",
  "vacante",
  "sueldo",
  "carrera",
  "universidad",
  "practica",
  "práctica",
  "internado",
  "estudiante",
  "tesis",
  "pdf",
  "gratis",
  "gratuito",
  "curso",
  "diplomado",
  "material",
  "juegos",
  "laminas",
  "láminas",
  "actividades",
  "que es",
  "qué es",
  "definicion",
  "definición",
  "wikipedia",
  "youtube",
  "online",
  "virtual",
  "videollamada",
  "zoom",
  "a distancia",
  "domicilio",
  "a domicilio",
  "adulto",
  "adultos",
  "voz",
  "vocal",
  "disfonia",
  "disfonía",
  "docente",
  "docentes",
  "profesor",
  "profesores",
  "cantante",
  "canto",
  "otorrino",
  "otorrinolaringologo",
  "otorrinolaringólogo",
  "psicologo",
  "psicólogo",
  "psicologa",
  "psicóloga",
  "terapeuta ocupacional",
  "cesfam",
  "hospital",
  "consultorio",
  "anamnesis",
  "pauta",
  "pauta krefft",
  "macarena krefft",
  "krefft",
  "protocolo",
  "screening",
  "tamizaje",
  "rubrica",
  "rúbrica",
  "escala de lenguaje",
  "pefe",
  "teprosif",
  "plon",
  "teledi",
  "celf",
  "idel",
  "baremo",
  "bateria",
  "batería",
  "manual de aplicacion",
  "manual de aplicación",
];

const NEGATIVE_KEYWORDS_PHRASE = [
  "comunicados",
  "centro fonoaudiologico integral",
  "centro fonoaudiológico integral",
  "andes salud",
  "andessalud",
  "doctoralia",
  "test para apraxia",
  "test de apraxia",
  "test apraxia",
  "pefe de",
  "apraxia intervencion",
  "apraxia intervención",
  "intervencion apraxia",
  "intervención apraxia",
  "apraxia del habla infantil intervencion",
  "apraxia del habla infantil intervención",
];

const HEADLINES = [
  "Fonoaudióloga para Niños",
  "Fonoaudióloga Infantil",
  "Fonoaudióloga Niños Chillán",
  "Fono Infantil Chillán",
  "Terapia Infantil Chillán",
  "Evaluación Infantil",
  "Terapia de Lenguaje Niños",
  "Fonoaudióloga en Chillán",
  "Agenda por WhatsApp",
  "Katia Domínguez Chillán",
  "Consulta Infantil Chillán",
  "Fonoaudiología Infantil",
  "Lenguaje y Habla Niños",
  "Fono para tu Hijo Chillán",
  "Presencial Infantil Ñuble",
];

const DESCRIPTIONS = [
  "Katia Domínguez, fonoaudióloga infantil en Chillán. Agenda por WhatsApp.",
  "Evaluación infantil de lenguaje, habla y lectoescritura. Dirección al coordinar.",
  "Valoración 5,0 en Google. Atención presencial para niños en Chillán y Ñuble.",
  "Cuéntanos qué te preocupa. Coordinamos evaluación presencial en horario hábil.",
];

const loadCustomer = () => {
  if (!DEVELOPER_TOKEN) {
    throw new Error("Falta GOOGLE_ADS_DEVELOPER_TOKEN en .env.local");
  }
  if (!existsSync(OAUTH_CLIENT_PATH) || !existsSync(OAUTH_TOKEN_PATH)) {
    throw new Error("Faltan credenciales OAuth. Ejecuta: npm run google-ads:auth");
  }

  const raw = JSON.parse(readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const oauth = raw.installed ?? raw.web ?? raw;
  const tokens = JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8"));
  if (!tokens.refresh_token) {
    throw new Error("Token sin refresh_token. Ejecuta: npm run google-ads:auth");
  }

  const client = new GoogleAdsApi({
    client_id: oauth.client_id,
    client_secret: oauth.client_secret,
    developer_token: DEVELOPER_TOKEN,
  });

  return client.Customer({
    customer_id: CUSTOMER_ID,
    refresh_token: tokens.refresh_token,
  });
};

const lengthOf = (text) => [...text].length;

const assertCopy = () => {
  const problems = [];
  for (const text of HEADLINES) {
    if (lengthOf(text) > 30) problems.push(`Título >30: ${text}`);
  }
  for (const text of DESCRIPTIONS) {
    if (lengthOf(text) > 90) problems.push(`Descripción >90: ${text}`);
  }
  for (const text of ["presencial", "chillan"]) {
    if (lengthOf(text) > 15) problems.push(`Path >15: ${text}`);
  }
  if (new Set(HEADLINES).size !== HEADLINES.length) {
    problems.push("Hay títulos RSA duplicados");
  }
  if (new Set(KEYWORDS).size !== KEYWORDS.length) {
    problems.push("Hay keywords duplicadas");
  }
  if (problems.length) throw new Error(problems.join("\n"));
};

const escapeGaql = (value) =>
  value.replaceAll("\\", "\\\\").replaceAll("'", "\\'");

const findExistingCampaign = async (customer) => {
  const rows = await customer.query(`
    SELECT campaign.id, campaign.name, campaign.status
    FROM campaign
    WHERE campaign.name = '${escapeGaql(CAMPAIGN_NAME)}'
      AND campaign.status != REMOVED
    LIMIT 1
  `);
  return rows[0]?.campaign;
};

const listExistingKeywords = async (customer) => {
  const rows = await customer.query(`
    SELECT ad_group_criterion.keyword.text
    FROM ad_group_criterion
    WHERE ad_group.id = ${AD_GROUP_ID}
      AND ad_group_criterion.type = KEYWORD
      AND ad_group_criterion.negative = FALSE
      AND ad_group_criterion.status != REMOVED
  `);
  return new Set(
    rows
      .map((row) => row.ad_group_criterion?.keyword?.text?.toLowerCase())
      .filter(Boolean),
  );
};

const adScheduleOp = (campaignResourceName, day) => ({
  entity: "campaign_criterion",
  operation: "create",
  resource: {
    campaign: campaignResourceName,
    ad_schedule: {
      day_of_week: day,
      start_hour: 0,
      start_minute: enums.MinuteOfHour.ZERO,
      end_hour: 24,
      end_minute: enums.MinuteOfHour.ZERO,
    },
  },
});

const listExistingScheduleDays = async (customer) => {
  const rows = await customer.query(`
    SELECT campaign_criterion.ad_schedule.day_of_week
    FROM campaign_criterion
    WHERE campaign.id = ${CAMPAIGN_ID}
      AND campaign_criterion.type = AD_SCHEDULE
      AND campaign_criterion.status != REMOVED
  `);
  return new Set(
    rows
      .map((row) => row.campaign_criterion?.ad_schedule?.day_of_week)
      .filter(Boolean),
  );
};

const keywordCreateOp = (text, adGroupResourceName) => {
  const policyName = POLICY_EXEMPTIONS.get(text);
  return {
    entity: "ad_group_criterion",
    operation: "create",
    resource: {
      ad_group: adGroupResourceName,
      status: enums.AdGroupCriterionStatus.ENABLED,
      keyword: {
        text,
        match_type: enums.KeywordMatchType.PHRASE,
      },
    },
    ...(policyName
      ? {
          exempt_policy_violation_keys: [
            { policy_name: policyName, violating_text: text },
          ],
        }
      : {}),
  };
};

const buildUpdateOperations = (missingKeywords, missingDays) => {
  const campaignResourceName = ResourceNames.campaign(CUSTOMER_ID, CAMPAIGN_ID);
  const operations = [
    {
      entity: "campaign_budget",
      operation: "update",
      resource: {
        resource_name: ResourceNames.campaignBudget(CUSTOMER_ID, BUDGET_ID),
        amount_micros: toMicros(DAILY_BUDGET_CLP),
      },
    },
    ...missingKeywords.map((text) =>
      keywordCreateOp(text, ResourceNames.adGroup(CUSTOMER_ID, AD_GROUP_ID)),
    ),
    ...missingDays.map((day) => adScheduleOp(campaignResourceName, day)),
  ];
  return operations;
};

const updateExisting = async (customer) => {
  const existingKeywords = await listExistingKeywords(customer);
  const missingKeywords = KEYWORDS.filter(
    (text) => !existingKeywords.has(text.toLowerCase()),
  );
  const existingDays = await listExistingScheduleDays(customer);
  const missingDays = AD_SCHEDULE_DAYS.filter((day) => !existingDays.has(day));
  const operations = buildUpdateOperations(missingKeywords, missingDays);

  console.log(
    `\nCampaña existente ${CAMPAIGN_NAME} (${CAMPAIGN_ID})\n` +
      `Presupuesto objetivo: $${DAILY_BUDGET_CLP.toLocaleString("es-CL")} CLP/día\n` +
      `Horario: lunes a jueves (sin viernes ni fin de semana)\n` +
      `Keywords nuevas: ${missingKeywords.length}\n` +
      (missingKeywords.length
        ? `  ${missingKeywords.join("\n  ")}\n`
        : "  (ninguna; ya estaban todas)\n") +
      `Días de anuncio nuevos: ${missingDays.length || "ninguno"}\n`,
  );

  if (!APPLY && !VALIDATE_ONLY) {
    console.log(
      "Plan local OK. Usa --validate-only o --apply para actualizar presupuesto y keywords.\n",
    );
    return;
  }

  console.log("Validando actualización en Google Ads…");
  await customer.mutateResources(operations, {
    validate_only: true,
    partial_failure: false,
  });
  if (VALIDATE_ONLY && !APPLY) {
    console.log("✓ Validación API correcta. No se mutó nada.\n");
    return;
  }
  console.log("✓ Validación API correcta. Aplicando…");
  await customer.mutateResources(operations, { partial_failure: false });

  const rows = await customer.query(`
    SELECT campaign_budget.amount_micros
    FROM campaign_budget
    WHERE campaign_budget.id = ${BUDGET_ID}
    LIMIT 1
  `);
  const amount = Number(rows[0]?.campaign_budget?.amount_micros ?? 0);
  if (amount !== toMicros(DAILY_BUDGET_CLP)) {
    throw new Error(
      `El presupuesto quedó en ${amount} micros, se esperaba ${toMicros(DAILY_BUDGET_CLP)}`,
    );
  }
  const after = await listExistingKeywords(customer);
  const stillMissing = KEYWORDS.filter((text) => !after.has(text.toLowerCase()));
  if (stillMissing.length) {
    throw new Error(`Faltaron keywords: ${stillMissing.join(", ")}`);
  }
  const daysAfter = await listExistingScheduleDays(customer);
  const stillMissingDays = AD_SCHEDULE_DAYS.filter((day) => !daysAfter.has(day));
  if (stillMissingDays.length) {
    throw new Error(`Faltaron días de anuncio: ${stillMissingDays.join(", ")}`);
  }
  console.log(
    `✓ Actualizado: presupuesto $${DAILY_BUDGET_CLP.toLocaleString("es-CL")} · keywords ${after.size} · lun–jue\n`,
  );
};

const buildOperations = () => {
  const budgetResourceName = ResourceNames.campaignBudget(CUSTOMER_ID, "-1");
  const campaignResourceName = ResourceNames.campaign(CUSTOMER_ID, "-2");
  const adGroupResourceName = ResourceNames.adGroup(CUSTOMER_ID, "-3");

  return [
    {
      entity: "campaign_budget",
      operation: "create",
      resource: {
        resource_name: budgetResourceName,
        name: `${CAMPAIGN_NAME} budget`,
        delivery_method: enums.BudgetDeliveryMethod.STANDARD,
        amount_micros: toMicros(DAILY_BUDGET_CLP),
        explicitly_shared: false,
      },
    },
    {
      entity: "campaign",
      operation: "create",
      resource: {
        resource_name: campaignResourceName,
        name: CAMPAIGN_NAME,
        campaign_budget: budgetResourceName,
        advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
        status: enums.CampaignStatus.PAUSED,
        manual_cpc: { enhanced_cpc_enabled: false },
        network_settings: {
          target_google_search: true,
          target_search_network: false,
          target_content_network: false,
        },
        geo_target_type_setting: {
          positive_geo_target_type: enums.PositiveGeoTargetType.PRESENCE,
          negative_geo_target_type: enums.NegativeGeoTargetType.PRESENCE,
        },
        ai_max_setting: { enable_ai_max: false },
        contains_eu_political_advertising:
          enums.EuPoliticalAdvertisingStatus
            .DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING,
      },
    },
    {
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignResourceName,
        language: { language_constant: "languageConstants/1003" },
        negative: false,
      },
    },
    ...GEO_TARGETS.map(({ id }) => ({
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignResourceName,
        location: { geo_target_constant: `geoTargetConstants/${id}` },
        negative: false,
      },
    })),
    ...AD_SCHEDULE_DAYS.map((day) => adScheduleOp(campaignResourceName, day)),
    ...NEGATIVE_KEYWORDS.map((text) => ({
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignResourceName,
        keyword: {
          text,
          match_type: enums.KeywordMatchType.BROAD,
        },
        negative: true,
      },
    })),
    ...NEGATIVE_KEYWORDS_PHRASE.map((text) => ({
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignResourceName,
        keyword: {
          text,
          match_type: enums.KeywordMatchType.PHRASE,
        },
        negative: true,
      },
    })),
    {
      entity: "ad_group",
      operation: "create",
      resource: {
        resource_name: adGroupResourceName,
        campaign: campaignResourceName,
        name: AD_GROUP_NAME,
        status: enums.AdGroupStatus.ENABLED,
        type: enums.AdGroupType.SEARCH_STANDARD,
        cpc_bid_micros: toMicros(MAX_CPC_CLP),
      },
    },
    ...KEYWORDS.map((text) => keywordCreateOp(text, adGroupResourceName)),
    {
      entity: "ad_group_ad",
      operation: "create",
      resource: {
        ad_group: adGroupResourceName,
        status: enums.AdGroupAdStatus.ENABLED,
        ad: {
          final_urls: [FINAL_URL],
          responsive_search_ad: {
            headlines: HEADLINES.map((text) => ({ text })),
            descriptions: DESCRIPTIONS.map((text) => ({ text })),
            path1: "presencial",
            path2: "chillan",
          },
        },
      },
    },
  ];
};

const printPlan = (operationCount) => {
  console.log(`
Campaña: ${CAMPAIGN_NAME} (PAUSED)
Grupo: ${AD_GROUP_NAME}
URL: ${FINAL_URL}
Presupuesto: $${DAILY_BUDGET_CLP.toLocaleString("es-CL")} CLP/día
CPC máx.: $${MAX_CPC_CLP.toLocaleString("es-CL")} CLP
Geos: ${GEO_TARGETS.map((geo) => `${geo.label} (${geo.id})`).join(", ")}
Keywords frase: ${KEYWORDS.length}
Negativas amplias: ${NEGATIVE_KEYWORDS.length} · frase: ${NEGATIVE_KEYWORDS_PHRASE.length}
RSA: ${HEADLINES.length} títulos + ${DESCRIPTIONS.length} descripciones
Operaciones atómicas: ${operationCount}
`);
};

const verify = async (customer) => {
  const rows = await customer.query(`
    SELECT campaign.id, campaign.name, campaign.status,
      campaign.ai_max_setting.enable_ai_max,
      campaign.network_settings.target_google_search,
      campaign.network_settings.target_search_network,
      campaign.network_settings.target_content_network,
      campaign.geo_target_type_setting.positive_geo_target_type,
      campaign_budget.id, campaign_budget.amount_micros
    FROM campaign
    WHERE campaign.name = '${escapeGaql(CAMPAIGN_NAME)}'
      AND campaign.status != REMOVED
    LIMIT 1
  `);
  const row = rows[0];
  if (!row) throw new Error("La API no devolvió la campaña recién creada");

  const campaign = row.campaign;
  const budget = row.campaign_budget;
  if (campaign.status !== enums.CampaignStatus.PAUSED) {
    throw new Error("La campaña no quedó PAUSED");
  }
  if (campaign.ai_max_setting?.enable_ai_max === true) {
    throw new Error("La campaña quedó con AI Max ON");
  }
  if (
    !campaign.network_settings?.target_google_search ||
    campaign.network_settings?.target_search_network ||
    campaign.network_settings?.target_content_network
  ) {
    throw new Error("La configuración de redes no coincide con el plan");
  }
  if (
    campaign.geo_target_type_setting?.positive_geo_target_type !==
    enums.PositiveGeoTargetType.PRESENCE
  ) {
    throw new Error("La campaña no quedó segmentada por presencia");
  }

  console.log(
    `✓ Campaña creada y verificada: ${campaign.name} (${campaign.id})\n` +
      `  Budget: ${budget.id} · Estado: PAUSED · AI Max: OFF\n`,
  );
};

async function main() {
  assertCopy();
  const customer = loadCustomer();
  const existing = await findExistingCampaign(customer);
  if (existing) {
    await updateExisting(customer);
    return;
  }

  const operations = buildOperations();
  printPlan(operations.length);

  if (!APPLY && !VALIDATE_ONLY) {
    console.log(
      "Plan local OK. Usa --validate-only para validar en Google Ads o --apply para crearla pausada.\n",
    );
    return;
  }

  console.log("Validando mutación completa en Google Ads…");
  await customer.mutateResources(operations, {
    validate_only: true,
    partial_failure: false,
  });
  if (VALIDATE_ONLY && !APPLY) {
    console.log("✓ Validación API correcta. No se crearon recursos.\n");
    return;
  }
  console.log("✓ Validación API correcta. Creando campaña PAUSED…");
  await customer.mutateResources(operations, { partial_failure: false });
  await verify(customer);
}

main().catch((error) => {
  const detail = error?.errors?.map((item) => item.message).join(" · ");
  console.error(`Error: ${detail || error.message || String(error)}`);
  if (error?.errors?.length) {
    console.error(JSON.stringify(error.errors, null, 2));
  }
  process.exit(1);
});
