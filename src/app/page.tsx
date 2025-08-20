import "@/lib/init";
import Container from "components/Container";
import { getNotionPageList } from "nextjs-notion-integration";
import NotionPageList from "components/notion/page/NotionPageList";

export default async function Home() {
  const posts = await getNotionPageList();
  return (
    <Container>
      <div className="py-8">
        <div className="my-8 text-3xl font-bold text-grey-900">Latest articles</div>
      </div>
      <NotionPageList posts={posts} />
    </Container>
  );
}
