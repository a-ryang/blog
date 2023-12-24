import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import fg from "fast-glob";

import { extractYear, formatDatetime } from "./date";

type FrontMatterAndPostKeys = keyof FrontMatter | keyof Post;

const postsDirectory = join(process.cwd(), "posts");

function getPostByPath(path: string, fields: FrontMatterAndPostKeys[] = []) {
  const fileContents = fs.readFileSync(path, "utf8");
  const { data, content } = matter(fileContents);

  // front matter  추출
  const frontMatter = fields.reduce((acc, field) => {
    if (field in data) {
      acc[field as keyof FrontMatter] = data[field];
    }
    return acc;
  }, {} as Partial<FrontMatter>);

  // slug 추출
  const parts = path.split("/");
  const slugWithExtension = parts[parts.length - 1];
  const slug = slugWithExtension.split(".")[0];

  const post: Post = {
    frontMatter: frontMatter as FrontMatter,
    slug: `${extractYear(data.datetime)}/${slug}`,
    content: fields.includes("content") ? content : "",
  };

  if (post.frontMatter.datetime) {
    post.frontMatter.datetime = formatDatetime(post.frontMatter.datetime);
  }

  return post;
}

export function getPostBySlugWithYear(
  year: string,
  slug: string,
  fields: FrontMatterAndPostKeys[] = [],
) {
  const postPath = join(postsDirectory, `${year}/${slug}.md`);
  const post = getPostByPath(postPath, [...fields, "isPublished"]);
  return post;
}

export function getAllPostPath() {
  // 년도 내림차순으로 모든 슬러그 조회
  return fg.globSync(`${postsDirectory}/**/*.md`).reverse();
}

export function getAllPost(fields: FrontMatterAndPostKeys[]) {
  return getAllPostPath()
    .map((path) => getPostByPath(path, [...fields, "isPublished"]))
    .filter((post) => post.frontMatter.isPublished === true)
    .sort((post1, post2) =>
      post1.frontMatter.datetime > post2.frontMatter.datetime ? -1 : 1,
    );
}

export function getAllTags() {
  const tags = getAllPost(["tags"]).reduce<string[]>(
    (prev: string[], curr: Post) => {
      curr.frontMatter.tags.forEach((tag) => {
        prev.push(tag);
      });
      return prev;
    },
    [],
  );

  // 내림차순
  return [...new Set(tags)].sort((a, b) => a.localeCompare(b));
}
