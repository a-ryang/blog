import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

import DateFormatter from "@/components/common/DateFormatter";

const Post = async ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug, [
    "title",
    "author",
    "date",
    "content",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container mx-auto px-4 xl:px-0 max-w-6xl ">
      <main className="py-20">
        <article>
          <header className="pb-10">
            <h1 className="mb-3 text-4xl font-semibold">{post.title}</h1>
            <DateFormatter dateString={post.date} />
          </header>

          <div
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </main>
    </div>
  );
};

export default Post;
