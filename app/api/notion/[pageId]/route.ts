import { getContent } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET(_: Request, context: { params: { pageId: string } }) {
  const pageId = context.params.pageId;
  const posts = await getContent(pageId);
  return NextResponse.json(posts);
}
