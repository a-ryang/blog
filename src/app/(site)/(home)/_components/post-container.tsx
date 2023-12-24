import Pagination from "./pagination";
import PostList from "./post-list";

interface PostContainerProps {}

export default function PostContainer({}: PostContainerProps) {
  return (
    <>
      <PostList posts={posts} />
      <Pagination currentPage={1} totalPages={totalPages} />
    </>
  );
}
