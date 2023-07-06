import Image from "next/image";
import Link from "next/link";
import DateFormatter from "../common/DateFormatter";

type Items = {
  [key: string]: string;
};

const PostPreview = ({ post }: { post: Items }) => {
  return (
    <div className="group w-full border-b border-neutral-200 dark:border-dark-100">
      <Link href={`/blog/${post.slug}`} className="flex w-full py-10">
        {post?.thumbnail && (
          <div className="relative rounded-md overflow-hidden mr-4">
            <div className="absolute w-full h-full bg-gray-400 opacity-5"></div>
            <Image
              alt={`cover image for ${post.title}`}
              src={post?.thumbnail}
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div>
          <h3 className="font-semibold text-2xl group-hover:underline">
            {post.title}
          </h3>
          <p className="mt-4 mb-2 md:mb-3.5 dark:text-neutral-300">
            {post.excerpt}
          </p>
          <DateFormatter dateString={post.date} />
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
