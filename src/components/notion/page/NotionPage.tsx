import NotionHeading from "../blocks/NotionHeading";
import NotionPageTitle from "../page/NotionPageTitle";
import type { NotionBlockResponse } from "nextjs-notion-integration";

export function NotionPage({ blocks }: { blocks: NotionBlockResponse }) {
  return (
    <>
      <NotionPageTitle data={blocks.title} />
      {blocks.content.map((block, idx) => {
        return (
          <div key={idx}>
            {(() => {
              switch (block.type) {
                case "heading_1":
                  return <NotionHeading data={block.content} />;
                case "bulleted_list_item":
                  return <p>&#8226; {block.content}</p>;
                // ...
              }
            })()}
          </div>
        );
      })}
    </>
  );
}

export default NotionPage;
