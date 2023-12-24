"use client";

import { useState } from "react";

import Tag from "./tag";

interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const MAX_TAGS = 5;

  const displayedTags = isOpen ? tags : tags.slice(0, MAX_TAGS);

  return (
    <aside className="lg:max-w-xs">
      <h1 className="text-sm font-semibold">TAGS</h1>

      <ul className="flex flex-wrap gap-2 mt-2">
        {displayedTags.map((tag) => (
          <li key={tag} className="">
            <Tag title={tag} />
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
