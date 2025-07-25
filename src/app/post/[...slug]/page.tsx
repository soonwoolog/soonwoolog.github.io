import { getNotionPageBySlug } from "nextjs-notion-integration";
import NotionPage from "components/notion/NotionPage";

export default async function NotionPostPage({ params }: { params: { slug: string[] } }) {
  const data = await getNotionPageBySlug(params.slug);
  return <NotionPage blocks={data} />;
}
