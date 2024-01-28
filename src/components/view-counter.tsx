"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface ViewCounterProps {
  slug: string;
  isViewCounted?: boolean;
}

export default function ViewCounter({
  slug,
  isViewCounted = false,
}: ViewCounterProps) {
  const { data } = useQuery<{ total: number }>({
    queryKey: ["views", slug],
    queryFn: () => fetch(`/api/views/${slug}`).then((res) => res.json()),
  });

  useEffect(() => {
    const increaseViews = () => fetch(`/api/views/${slug}`, { method: "POST" });

    if (!isViewCounted) return;

    increaseViews();
  }, [slug, isViewCounted]);

  if (!data) return <span>~ views</span>;

  const views = data.total ?? 0;

  return <span>{`${views} views`}</span>;
}
