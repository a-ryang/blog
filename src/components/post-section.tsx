import { siteConfig } from "@/config";

import PostItem from "./post-item";

type Props = {
  posts: Post[];
};

export default function PostSection({ posts }: Props) {
  const recentPosts = posts.slice(0, siteConfig.sizePerPage);

  return (
    <section className="w-full">
      <h1 className="hidden">글 목록</h1>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.slug} className="my-4">
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
