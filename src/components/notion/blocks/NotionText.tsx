export default function NotionText({ text }: { text: any }) {
  if (!text) return null;
  return <span>{text}</span>;
}
