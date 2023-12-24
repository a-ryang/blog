import Link from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config";

const variants = {
  light: "bg-gray-100 hover:bg-blue-500 hover:text-inverte",
  filled: "bg-gray-900 text-inverte",
};

const sizes = {
  sm: "px-1.5 py-0.5 text-xs",
  md: "px-2 py-1 text-sm",
};

interface TagProps {
  title: string;
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export default function Tag({
  title,
  href,
  size = "md",
  variant = "light",
}: TagProps) {
  return (
    <Link
      href={href ? href : `${siteConfig.path.tags}/${title}/1`}
      className={clsx(sizes[size], variants[variant], "rounded-full ")}
    >
      {title}
    </Link>
  );
}
