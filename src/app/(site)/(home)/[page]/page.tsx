import { notFound } from "next/navigation";

import { siteConfig } from "@/config";
import { getAllPost, getAllTags } from "@/utils/post";
import TagList from "../_components/tag-list";
import PostList from "../_components/post-list";
import Pagination from "../_components/pagination";

const { sizePerPage } = siteConfig;

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 빌드 시점에 경로를 정적으로 생성
export function generateStaticParams() {
  const posts = getAllPost([]);

  return [...new Array(Math.round(posts.length / sizePerPage)).keys()].map(
    (i) => ({ id: `${i + 1}` }),
  );
}

export default function PagenationPage({
  params,
}: {
  params: { page: string };
}) {
  const tags = getAllTags();
  const allPosts = getAllPost(["title", "summary", "datetime", "tags"]);
  const currentPage = parseInt(params.page);
  const totalPages = Math.ceil(allPosts.length / sizePerPage);

  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages)
    return notFound();

  const start = (currentPage - 1) * sizePerPage;
  const last = start + sizePerPage;

  const posts = allPosts.slice(start, last);

  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse lg:gap-10">
        <TagList tags={tags} />
        <PostList posts={posts} />
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
