"use client";

import TagItem from "./tag-item";
import ViewCounter from "./view-counter";

type Props = {
  slug: string;
  datetime: string;
  tags: string[];
};

export default function PostDetail({ slug, datetime, tags }: Props) {
  return (
    <div className="mt-1 space-x-2">
      <time dateTime={datetime} className="text-xs text-mute">
        {datetime}
      </time>
      <span className="text-xs text-mute">·</span>
      <span className="text-xs text-mute">
        <ViewCounter isViewCounted={false} slug={slug} />{" "}
      </span>
      {tags.length > 0 && <span className="text-xs text-mute">·</span>}
      {tags.map((tag) => (
        <TagItem title={tag} size="sm" key={tag} />
      ))}
    </div>
  );
}
