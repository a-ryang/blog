declare interface FrontMatter {
  title: string;
  summary: string;
  datetime: string;
  tags: string[];
  isPublished: boolean;
}

declare interface Post {
  slug: string;
  frontMatter: FrontMatter;
  content: string;
}
