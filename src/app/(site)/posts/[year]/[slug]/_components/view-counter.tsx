"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface ViewCounterProps {
  slug: string;
}

export default function ViewCounter({ slug }: ViewCounterProps) {
  const { data } = useQuery<{ total: number }>({
    queryKey: ["views", slug],
    queryFn: () => fetch(`/api/views/${slug}`).then((res) => res.json()),
  });

  useEffect(() => {
    const increaseViews = () => fetch(`/api/views/${slug}`, { method: "POST" });

    increaseViews();
  }, [slug]);

  if (!data) return <span>~ views</span>;

  const views = data.total;

  return <span>{`${views} views`}</span>;
}
