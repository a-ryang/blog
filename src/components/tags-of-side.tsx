"use client";

import { useState } from "react";

import { siteConfig } from "@/config";

import TagItem from "./tag-item";

type Props = {
  tags: string[];
  activeTag?: string;
  className?: string;
};

export default function TagsOfSide({ tags, activeTag, className = "" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const MAX_TAGS = 9;

  const displayedTags = isOpen ? tags : tags.slice(0, MAX_TAGS);

  return (
    <aside className={`my-10 ${className}`}>
      <h1 className="text-sm font-semibold">TAGS</h1>

      <ul className="flex flex-wrap gap-2 mt-2">
        <li>
          <TagItem
            title="전체"
            href={siteConfig.path.home}
            variant={activeTag ? "light" : "filled"}
          />
        </li>
        {displayedTags.map((tag) => (
          <li key={tag}>
            <TagItem
              title={tag}
              variant={tag === activeTag ? "filled" : "light"}
            />
          </li>
        ))}
      </ul>
      {tags.length > MAX_TAGS && (
        <div className="flex justify-center">
          <button onClick={() => setIsOpen(!isOpen)} className="mt-2">
            <span className="text-sm">{isOpen ? "접기" : "펼치기"}</span>
          </button>
        </div>
      )}
    </aside>
  );
}
