const sizes = {
  sm: "px-1.5 py-0.5 bg-gray-100 text-xs rounded-full",
  md: "px-2 py-0.5 bg-gray-100 text-sm rounded-full",
};

interface TagProps {
  title: string;
  size?: keyof typeof sizes;
}

export default function Tag({ title, size = "md" }: TagProps) {
  return <span className={sizes[size]}>{title.replace(/ /g, "_")}</span>;
}
