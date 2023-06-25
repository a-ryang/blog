import Image from "next/image";
import Link from "next/link";
import DateFormatter from "../common/DateFormatter";

type Items = {
  [key: string]: string;
};

const PostPreview = ({ post }: { post: Items }) => {
  return (
    <div className="group w-full border-b border-neutral-200">
      <Link href={`/blog/${post.slug}`} className="inline-block w-full py-10">
        {post?.thumbnail && (
          <Image
            alt={`cover image for ${post.title}`}
            src={post.thumbnail}
            width={400}
            height={400}
            style={{ width: "100%" }}
            className="rounded-2xl"
          />
        )}
        <h3 className="font-semibold text-2xl group-hover:underline">
          {post.title}
        </h3>
        <p className="mt-4 mb-3.5">{post.excerpt}</p>
        <DateFormatter dateString={post.date} />
      </Link>
    </div>
  );
};

export default PostPreview;
