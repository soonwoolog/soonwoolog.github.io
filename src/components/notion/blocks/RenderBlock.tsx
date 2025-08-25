import type { NotionBlock } from "nextjs-notion-integration";
import NotionText from "components/notion/blocks/NotionText";

export default function RenderBlock({ block }: { block: NotionBlock }) {
  switch (block.blockType) {
    case "paragraph":
      return (
        <p className="leading-[28px] text-lg">
          <NotionText content={block.content} />
        </p>
      );
    case "heading_1":
      return (
        <div className="pt-16 text-3xl font-semibold">
          <NotionText content={block.content} />
        </div>
      );
    case "heading_2":
      return (
        <div className="pt-8 text-2xl font-semibold">
          <NotionText content={block.content} />
        </div>
      );
    case "heading_3":
      return (
        <div className="pt-8 text-xl font-semibold">
          <NotionText content={block.content} />
        </div>
      );
    case "bulleted_list_item":
      return (
        <li className="text-lg">
          <NotionText content={block.content} />
        </li>
      );
    default:
      return null;
  }
}
