"use client";

import { useState } from "react";

import { siteConfig } from "@/config";

import Tag from "./tag";

interface TagListProps {
  tags: string[];
  activeTag?: string;
}

export default function TagList({ tags, activeTag }: TagListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const MAX_TAGS = 9;

  const displayedTags = isOpen ? tags : tags.slice(0, MAX_TAGS);

  return (
    <aside className="w-full mt-10 lg:max-w-xs">
      <h1 className="text-sm font-semibold">TAGS</h1>

      <ul className="flex flex-wrap gap-2 mt-2">
        <li>
          <Tag
            title="전체"
            href={siteConfig.path.home}
            variant={activeTag ? "light" : "filled"}
          />
        </li>
        {displayedTags.map((tag) => (
          <li key={tag}>
            <Tag title={tag} variant={tag === activeTag ? "filled" : "light"} />
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
