import { getAllPost, getAllTags } from "@/utils/post";
import { siteConfig } from "@/config";

import PostList from "./_components/post-list";
import TagList from "./_components/tag-list";
import Pagination from "./_components/pagination";

export default function HomePage() {
  const posts = getAllPost(["title", "summary", "datetime", "tags"]);
  const tags = getAllTags();

  const totalPages = Math.ceil(posts.length / siteConfig.sizePerPage);

  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse lg:gap-10">
        <TagList tags={tags} />
        <PostList posts={posts} />
      </div>
      <Pagination currentPage={1} totalPages={totalPages} />
    </div>
  );
}
