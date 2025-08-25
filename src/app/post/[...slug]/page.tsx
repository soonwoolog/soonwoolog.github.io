import "@/lib/init";
import { getNotionPageBySlug } from "nextjs-notion-integration";
import NotionPage from "components/notion/page/NotionPage";

export default async function NotionPageBySlug(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const blocks = await getNotionPageBySlug(params.slug);
  return <NotionPage {...blocks} />;
}
