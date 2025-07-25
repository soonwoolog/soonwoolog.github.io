import { getNotionPageList } from "nextjs-notion-integration";
import NotionPageList from "components/notion/NotionPageList";

export async function Home() {
  const posts = await getNotionPageList();
  return <NotionPageList posts={posts} />;
}

export default Home;
