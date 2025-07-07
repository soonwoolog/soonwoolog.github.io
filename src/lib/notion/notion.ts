require("dotenv").config();
import { Client } from "@notionhq/client";
import { NotionResult } from "./notion-config";
import { getFormattedQuery } from "./notion-block-renderer";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID as string;

/**
 * Query a Notion database
 * @returns A formatted array of Notion database query
 * */
export async function getPosts(): Promise<NotionResult[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Last edited time",
        direction: "ascending"
      }
    ]
  });

  return getFormattedQuery(response);
}

export const getContent = async (pageId: string) => {
  const { results: blocks } = await notion.blocks.children.list({ block_id: pageId });
  return blocks;
};
