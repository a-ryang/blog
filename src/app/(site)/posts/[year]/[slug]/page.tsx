import markdownToHtml from "@/utils/markdown-to-html";
import { getPostBySlugWithYear } from "@/utils/post";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: params.slug,
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
    <article className="w-full max-w-3xl mx-auto">
      <header className="pt-10 pb-10 border-b border-b-gray-300">
        <h1 className="text-3xl lg:text-5xl leading-normal font-semibold">
          {frontMatter.title}
        </h1>
        <div className="mt-4">
          <time dateTime={"2024-01-01"} className="text-mute">
            {frontMatter.datetime}
          </time>
        </div>
      </header>

      <div className="min-h-screen pt-10">
        <div
          dangerouslySetInnerHTML={{ __html: realContent }}
          className="prose"
        />
      </div>
    </article>
  );
}
