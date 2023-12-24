import { siteConfig } from "@/config";

import Post from "./post";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  const recentPosts = posts.slice(0, siteConfig.sizePerPage);

  return (
    <section className="w-full">
      <h1 className="hidden">글 목록</h1>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.slug} className="my-4">
            <Post post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
