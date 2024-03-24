import Posts from "@/components/posts";
import TagsOfSide from "@/components/tags-of-side";
import Pagination from "@/components/pagination";

import { getAllPost, getAllTags } from "@/utils/post";

import { siteConfig } from "@/config";

export default function HomePage() {
  const posts = getAllPost(["title", "summary", "datetime", "tags"]);
  const tags = getAllTags();

  const totalPages = Math.ceil(posts.length / siteConfig.sizePerPage);

  return (
    <div className="flex flex-col ">
      <Posts posts={posts} />
      <Pagination currentPage={1} totalPages={totalPages} />
      <TagsOfSide tags={tags} className="order-first" />
    </div>
  );
}
