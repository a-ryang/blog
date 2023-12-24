import { notFound } from "next/navigation";

import TagList from "@/app/(site)/(home)/_components/tag-list";
import PostList from "@/app/(site)/(home)/_components/post-list";
import Pagination from "@/app/(site)/(home)/_components/pagination";
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
  const { tag, page } = params;

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
    <div>
      <div className="flex flex-col lg:flex-row-reverse lg:gap-10">
        <TagList tags={tags} activeTag={tag} />
        <PostList posts={postsFoundByTag} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl={`${siteConfig.path.tags}/${tag}`}
      />
    </div>
  );
}
