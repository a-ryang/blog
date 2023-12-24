"use client";

import { useRef, useState } from "react";

import Deferrer from "@/components/deferrer";

import MarkdownEditor from "./markdown-editor";
import MarkdownPreview from "./markdown-preview";

interface PostWriterProps {}

export default function PostWriterContainer({}: PostWriterProps) {
  const [markdown, setMarkdown] = useState(`# hi!`);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  function handleDownloadMarkdown() {
    const formattedTitle = "제목";
    const currentDate = new Date().toISOString();

    const fileContent = `---
title: "${formattedTitle}"
summary: ""
datetime: "${currentDate}"
tags: ["1"]
---

${markdown}`;

    const blob = new Blob([fileContent], {
      type: "text/markdown;charset=utf-8",
    });
    const downloadUrl = URL.createObjectURL(blob);

    const downloadLink = downloadLinkRef.current;
    if (!downloadLink) return;

    downloadLink.href = downloadUrl;
    downloadLink.download = `${formattedTitle}.md`;
    downloadLink.click();

    console.log(downloadUrl);

    URL.revokeObjectURL(downloadUrl);
  }

  return (
    <section className="h-full">
      <h1 className="hidden">post writer</h1>
      <Deferrer>
        <div className="flex min-h-screen">
          <div className="p-4 flex-1">
            <MarkdownEditor
              initialMarkdown={markdown}
              onChangeMarkdown={(markdown) => setMarkdown(markdown)}
            />
          </div>
          <div className="p-4 flex-1 bg-base-100">
            <MarkdownPreview markdown={markdown} />
          </div>
        </div>
      </Deferrer>

      <div className="flex justify-center items-center fixed left-0 bottom-0 h-14 w-full bg-base-10 border border-top bd-default">
        <button onClick={handleDownloadMarkdown}>저장</button>
        <a href="#" ref={downloadLinkRef} className="hidden">
          Download
        </a>
      </div>
    </section>
  );
}
