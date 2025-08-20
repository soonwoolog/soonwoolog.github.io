import { NotionPageResponse } from "nextjs-notion-integration";
import Link from "next/link";

export function NotionPageList({ posts }: { posts: NotionPageResponse[] }) {
  return (
    <div className="grid gap-10 lg:gap-12 sm:grid-cos-2">
      {posts.map(post => {
        return (
          <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <Link href={`/post/${post.slug}`}>
              <div className="group relative grow">
                <div className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {post.title}
                </div>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">{post.date}</time>
                <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.category}
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export default NotionPageList;
