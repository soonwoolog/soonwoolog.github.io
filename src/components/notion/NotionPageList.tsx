import { NotionPageResponse } from "nextjs-notion-integration";
import Link from "next/link";

export function NotionPageList({ posts }: { posts: NotionPageResponse[] }) {
  return (
    <div>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">All Posts</h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map(post => {
          return (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <Link href={`/post/${post.slug}`}>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>
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
    </div>
  );
}

export default NotionPageList;
