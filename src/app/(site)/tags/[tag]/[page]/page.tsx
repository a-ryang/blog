import { notFound } from "next/navigation";

import TagsOfSide from "@/components/tags-of-side";
import Posts from "@/components/posts";
import Pagination from "@/components/pagination";

import { getAllPost, getAllTags } from "@/utils/post";

import { siteConfig } from "@/config";

const { sizePerPage } = siteConfig;

export function generateStaticParams() {
  const posts = getAllPost(["tags"]);
  const tags = getAllTags();

  const paths: Array<{ tag: string; page: string }> = [];

  tags.forEach((tag) => {
    const postFoundByTag = posts.filter((post) =>
      post.frontMatter.tags.find((t) => t === tag),
    );

    [
      ...new Array(Math.round(postFoundByTag.length / sizePerPage)).keys(),
    ].forEach((i) => paths.push({ tag, page: `${i + 1}` }));
  });

  return paths;
}

export default function TagsPage({
  params,
}: {
  params: { tag: string; page: string };
}) {
  const { tag: encodedTag, page } = params;
  const tag = decodeURIComponent(encodedTag);

  const posts = getAllPost(["title", "summary", "datetime", "tags"]);
  const tags = getAllTags();

  const postsFoundByTag = posts.filter((post) =>
    post.frontMatter.tags.find((t) => t === tag),
  );

  const currentPage = parseInt(page);
  const totalPages = Math.ceil(postsFoundByTag.length / sizePerPage);

  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages)
    return notFound();

  return (
    <div className="flex flex-col ">
      <Posts posts={postsFoundByTag} />
      <Pagination currentPage={1} totalPages={totalPages} />
      <TagsOfSide tags={tags} activeTag={tag} className="order-first" />
    </div>
  );
}
