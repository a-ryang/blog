import PostSection from "@/components/post-section";
import TagsOfSide from "@/components/tags-of-side";
import Pagination from "@/components/pagination";

import { getAllPost, getAllTags } from "@/utils/post";

import { siteConfig } from "@/config";

export default function HomePage() {
  const posts = getAllPost(["title", "summary", "datetime", "tags"]);
  const tags = getAllTags();

  const totalPages = Math.ceil(posts.length / siteConfig.sizePerPage);

  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse lg:gap-10">
        <TagsOfSide tags={tags} />
        <PostSection posts={posts} />
      </div>
      <Pagination currentPage={1} totalPages={totalPages} />
    </div>
  );
}
