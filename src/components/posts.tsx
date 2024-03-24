import { siteConfig } from "@/config";

import PostItem from "./post-item";

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  const recentPosts = posts.slice(0, siteConfig.sizePerPage);
  return recentPosts.map((post) => <PostItem post={post} key={post.slug} />);
}
