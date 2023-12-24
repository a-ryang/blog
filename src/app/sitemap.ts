import { siteConfig } from "@/config";
import { getAllPost } from "@/utils/post";

export default async function sitemap() {
  const { url, path } = siteConfig;
  const posts = getAllPost(["slug", "datetime"]);

  const blogs = posts.map((post) => ({
    url: `${url}${path.postDetail}/${post.slug}`,
    lastModified: new Date(post.frontMatter.datetime)
      .toISOString()
      .split("T")[0],
  }));

  const routes = [path.home, path.home].map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
