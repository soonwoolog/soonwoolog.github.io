import { getNotionPageBySlug } from "nextjs-notion-integration";
import NotionPage from "components/notion/page/NotionPage";

export default async function NotionPostPage(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const data = await getNotionPageBySlug(params.slug);
  return <NotionPage blocks={data} />;
}
