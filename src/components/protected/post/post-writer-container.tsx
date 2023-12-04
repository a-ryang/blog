"use client";

import { useState } from "react";

import MarkdownEditor from "./markdown-editor";
import MarkdownPreview from "./markdown-preview";
import Deferrer from "@/components/ui/deferrer";

interface PostWriterProps {}

export default function PostWriterContainer({}: PostWriterProps) {
  const [markdown, setMarkdown] = useState(`# hi!`);

  return (
    <section className="flex h-full py-4">
      <h1 className="hidden">post writer</h1>
      <Deferrer>
        <MarkdownEditor
          initialMarkdown={markdown}
          onChangeMarkdown={(markdown) => setMarkdown(markdown)}
        />
        <MarkdownPreview markdown={markdown} />
      </Deferrer>

      <footer className="flex justify-center items-center fixed left-0 bottom-0 h-14 w-full border border-top bd-default">
        <button>임시 저장</button>
        <button>등록</button>
      </footer>
    </section>
  );
}
