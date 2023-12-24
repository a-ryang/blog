import Link from "next/link";
import Tag from "./tag";
import { siteConfig } from "@/config";

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const { frontMatter, slug } = post;
  const { title, summary, datetime, tags } = frontMatter;

  const href = `${siteConfig.path.postDetail}/${slug}`;

  return (
    <article className="flex flex-col py-10 border-b bd-default">
      <header>
        <h1 className="hover:underline text-xl font-bold overflow-hidden text-ellipsis line-clamp-2">
          <Link href={href}>{title}</Link>
        </h1>
      </header>

      {summary && <p className="mt-2 text-sm text-mute">{summary}</p>}

      <div className="mt-2 space-x-2">
        <time dateTime={datetime} className="text-xs text-mute">
          {datetime}
        </time>
        {tags.length > 0 && <span>·</span>}
        {tags.map((tag) => (
          <Tag title={tag} size="sm" key={tag} />
        ))}
      </div>
    </article>
  );
}
