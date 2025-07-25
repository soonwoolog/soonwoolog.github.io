export function NotionHeading({ data }: { data: string }) {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">{data}</h2>
    </div>
  );
}

export default NotionHeading;
