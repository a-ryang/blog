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
    <article className="flex flex-col py-4 border-b border-base-300">
      <Link href={href}>
        <h1 className="hover:underline font-medium overflow-hidden text-ellipsis line-clamp-2">
          {title}
        </h1>
        {summary && <p className="text-sm text-mute">{summary}</p>}
      </Link>
      <PostDetail slug={slugWithoutYear} datetime={datetime} tags={tags} />
    </article>
  );
}
