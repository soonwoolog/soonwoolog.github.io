import type { NotionBlockResponse } from "nextjs-notion-integration";
import Container from "components/Container";
import RenderBlock from "components/notion/blocks/RenderBlock";

export function NotionPage({ blocks }: { blocks: NotionBlockResponse }) {
  return (
    <Container>
      <div className="px-6 py-16 pt-16 pb-48 mx-auto -mb-48 text-center md:pb-96 md:-mb-96">
        <div className="max-w-3xl mx-auto">
          <div className="font-bold tracking-tight text-gray-900 text-w-4xl sm:text-4xl text-2xl">{blocks.title}</div>
        </div>
      </div>
      <div className="mb-24">
        {blocks.content.map((block, idx) => (
          <RenderBlock key={idx} block={block} />
        ))}
      </div>
    </Container>
  );
}

export default NotionPage;
