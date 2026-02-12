import SibApiV3Sdk from "sib-api-v3-sdk";

const client = SibApiV3Sdk.ApiClient.instance;

// IMPORTANT: set api-key auth correctly
const apiKey = client.authentications["api-key"];

if (!process.env.BREVO_API_KEY) {
  throw new Error("BREVO_API_KEY is missing in environment variables");
}

apiKey.apiKey = process.env.BREVO_API_KEY;

// Export transactional email API
export const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();
