import { getAllPosts } from "@/lib/api";
import PostPreview from "@/components/post/PostPreview";

const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <div className="container mx-auto px-4 xl:px-0 max-w-6xl ">
      <main className="py-20">
        <h2 className="sr-only">Blog</h2>

        {posts.map((post) => (
          <PostPreview post={post} />
        ))}
      </main>
    </div>
  );
};

export default Blog;
