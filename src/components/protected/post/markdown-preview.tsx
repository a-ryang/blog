"use client";

import "./prism-vsc-dark-plus.css";
import "./prism-plugin.css";

import { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrism from "rehype-prism";
import rehypeStringify from "rehype-stringify";

import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import "prismjs/components/prism-java.min";
import "prismjs/components/prism-javascript.min";
import "prismjs/components/prism-css.min";

import useThrottle from "@/hooks/use-throttle";

interface MarkdownPreviewProps {
  markdown: string;
}

export default function MarkdownPreview({ markdown }: MarkdownPreviewProps) {
  const [html, setHtml] = useState<string>("");

  const throttledMarkdownToHtml = useThrottle(30, (markdown: string) =>
    unified() // 플러그인 기반의 문서 처리
      .use(remarkParse) // markdown 텍스트를 MDAST (Markdown Abstract Syntax Tree)로 변환
      .use(remarkRehype) // MDAST를 HAST (Hypertext Abstract Syntax Tree)로 변환
      .use(rehypePrism, {
        plugins: ["line-numbers", "toolbar", "copy-to-clipboard"],
      }) // prism 하이라이팅
      .use(rehypeStringify) // HAST를 HTML 문자열로 변환
      .process(markdown)
      .then((file) => setHtml(String(file))),
  );

  useEffect(() => {
    throttledMarkdownToHtml(markdown);
  }, [markdown, throttledMarkdownToHtml]);

  return (
    <article className="prose flex-1">
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </article>
  );
}
