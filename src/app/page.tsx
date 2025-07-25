import { getNotionPageList } from "nextjs-notion-integration";
import NotionPageList from "components/notion/page/NotionPageList";

export default async function Home() {
  const posts = await getNotionPageList();
  return <NotionPageList posts={posts} />;
}
