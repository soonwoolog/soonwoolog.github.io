require("dotenv").config();
import { Client, isFullPage } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID as string;

export interface NotionResult {
  id: string;
  title: string;
  date: string;
}

const dateFormatOption: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

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

  const results: NotionResult[] = response.results.filter(isFullPage).map(res => ({
    id: res.id,
    title:
      Object.values(res.properties)
        .find(p => p.type === "title")
        ?.title.map(t => t.plain_text)
        .join("") ?? "",
    date: new Intl.DateTimeFormat("en-US", dateFormatOption).format(new Date(res.last_edited_time))
  }));

  return results;
}

export const getContent = async (pageId: string) => {
  const { results: blocks } = await notion.blocks.children.list({ block_id: pageId });
  return blocks;
};
