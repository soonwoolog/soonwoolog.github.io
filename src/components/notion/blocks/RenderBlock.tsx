import NotionText from "components/notion/blocks/NotionText";

export default function RenderBlock({ block }: { block: any }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="leading-[28px] text-lg">
          <NotionText text={block.content} />
        </p>
      );
    case "heading_1":
      return <div className="pt-16 text-3xl font-semibold">{block.content}</div>;
    case "heading_2":
      return <div className="pt-8 text-2xl font-semibold">{block.content}</div>;
    case "heading_3":
      return <div className="pt-8 text-xl font-semibold">{block.content}</div>;
    case "bulleted_list_item":
      return (
        <li className="text-lg">
          <NotionText text={block.content} />
        </li>
      );
    default:
      return null;
  }
}
