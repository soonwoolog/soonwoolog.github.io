import { init } from "nextjs-notion-integration";

const apiKey = process.env.NOTION_API_KEY;
const dbId = process.env.NOTION_DATABASE_ID;

if (!apiKey || !dbId) {
  throw new Error("Notion credentials are missing");
}

init(apiKey, dbId);
