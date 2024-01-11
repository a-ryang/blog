import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrism from "rehype-prism";
import rehypeStringify from "rehype-stringify";

import "prismjs/components/prism-java.min";
import "prismjs/components/prism-javascript.min";
import "prismjs/components/prism-css.min";
import "prismjs/components/prism-sql.min";

export default async function markdownToHtml(markdown: string) {
  const result = await unified() // 플러그인 기반의 문서 처리
    .use(remarkParse) // markdown 텍스트를 MDAST (Markdown Abstract Syntax Tree)로 변환
    .use(remarkRehype) // MDAST를 HAST (Hypertext Abstract Syntax Tree)로 변환
    .use(rehypePrism, {
      plugins: ["line-numbers", "toolbar", "copy-to-clipboard"],
    }) // prism 하이라이팅
    .use(rehypeStringify) // HAST를 HTML 문자열로 변환
    .process(markdown);

  return result.toString();
}
