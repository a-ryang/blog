import { notFound } from "next/navigation";

import markdownToHtml from "@/utils/markdown-to-html";
import { getPostBySlugWithYear } from "@/utils/post";

import ViewCounter from "@/components/view-counter";

import PostRenderer from "@/components/post-renderer";
import PostComment from "@/components/post-comment";

export async function generateMetadata({
  params: { year, slug },
}: {
  params: { year: string; slug: string };
}) {
  const post = getPostBySlugWithYear(year, slug, ["title"]);

  if (!post) {
    return {};
  }

  return {
    title: post.frontMatter.title,
  };
}

export default async function PostDetail({
  params,
}: {
  params: { year: string; slug: string };
}) {
  const { year, slug } = params;
  const post = getPostBySlugWithYear(year, slug, [
    "title",
    "datetime",
    "content",
  ]);

  if (!post) notFound();

  const { frontMatter, content } = post;

  const realContent = await markdownToHtml(content);

  return (
    <>
      <article className="w-full max-w-3xl mx-auto lg:mt-20">
        <header className="pt-10 pb-10 border-b border-b-gray-300">
          <h1 className="text-3xl text-center lg:text-4xl leading-normal font-semibold">
            {frontMatter.title}
          </h1>
          <div className="mt-4 text-center">
            <span className="text-mute text-sm">
              <time dateTime={"2024-01-01"}>{frontMatter.datetime}</time> ·{" "}
              <ViewCounter isViewCounted={true} slug={slug} />
            </span>
          </div>
        </header>

        <div className="pt-10">
          <PostRenderer post={realContent} />
        </div>
      </article>
      <PostComment />
    </>
  );
}
