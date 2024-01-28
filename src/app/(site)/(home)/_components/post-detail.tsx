"use client";

import ViewCounter from "@/components/view-counter";

import Tag from "./tag";

interface PostDetailProps {
  slug: string;
  datetime: string;
  tags: string[];
}

export default function PostDetail({ slug, datetime, tags }: PostDetailProps) {
  return (
    <div className="mt-2 space-x-2">
      <time dateTime={datetime} className="text-xs text-mute">
        {datetime}
      </time>
      <span className="text-xs text-mute">·</span>
      <span className="text-xs text-mute">
        <ViewCounter isViewCounted={false} slug={slug} />{" "}
      </span>
      {tags.length > 0 && <span className="text-xs text-mute">·</span>}
      {tags.map((tag) => (
        <Tag title={tag} size="sm" key={tag} />
      ))}
    </div>
  );
}
