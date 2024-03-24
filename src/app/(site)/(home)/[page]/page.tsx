import { notFound } from "next/navigation";

import Pagination from "@/components/pagination";
import TagsOfSide from "@/components/tags-of-side";
import Posts from "@/components/posts";

import { getAllPost, getAllTags } from "@/utils/post";
import { siteConfig } from "@/config";

const { sizePerPage } = siteConfig;

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 빌드 시점에 경로를 정적으로 생성
export function generateStaticParams() {
  const posts = getAllPost([]);

  return [...new Array(Math.round(posts.length / sizePerPage)).keys()].map(
    (i) => ({ page: `${i + 1}` }),
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
    <div className="flex flex-col ">
      <Posts posts={posts} />
      <Pagination currentPage={1} totalPages={totalPages} />
      <TagsOfSide tags={tags} className="order-first" />
    </div>
  );
}
