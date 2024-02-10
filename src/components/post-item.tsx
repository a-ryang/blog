import Link from "next/link";

import { siteConfig } from "@/config";

import PostDetail from "./post-detail";

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { frontMatter, slug } = post;
  const { title, summary, datetime, tags } = frontMatter;

  const href = `${siteConfig.path.postDetail}/${slug}`;

  const slugWithoutYear = slug.split("/")[1];

  return (
    <article className="flex flex-col py-10 border-b border-base-300">
      <header>
        <h1 className="hover:underline text-xl font-bold overflow-hidden text-ellipsis line-clamp-2">
          <Link href={href}>{title} </Link>
        </h1>
      </header>
      {summary && <p className="mt-2 text-sm text-mute">{summary}</p>}
      <PostDetail slug={slugWithoutYear} datetime={datetime} tags={tags} />
    </article>
  );
}
