import { isFullPage } from "@notionhq/client";
import { NotionResult, dateFormatOption } from "./notion-config";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

/**
 * Formats Notion database query results into a simplified NotionResult array.
 * @param response The full response from `notion.databases.query`.
 * */
export async function getFormattedQuery(queryResponse: QueryDatabaseResponse): Promise<NotionResult[]> {
  const results: NotionResult[] = queryResponse.results.filter(isFullPage).map(res => {
    const titleProperty = Object.values(res.properties).find(p => p.type === "title");
    const title = titleProperty ? titleProperty.title.map(t => t.plain_text).join("") : "";

    return {
      id: res.id,
      title: title,
      date: new Intl.DateTimeFormat("en-US", dateFormatOption).format(new Date(res.last_edited_time))
    };
  });

  return results;
}
