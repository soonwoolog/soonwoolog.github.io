import type { NotionText } from "nextjs-notion-integration";

export default function NotionText({ content }: { content: NotionText[] }) {
  if (!content) return null;
  return content.map((value, idx) => {
    return <span key={idx}>{value.text}</span>;
  });
}
