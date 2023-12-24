"use client";

import { useState } from "react";

import Deferrer from "@/components/deferrer";

import MarkdownEditor from "./markdown-editor";
import MarkdownPreview from "./markdown-preview";

interface PostWriterProps {}

export default function PostWriterContainer({}: PostWriterProps) {
  const [markdown, setMarkdown] = useState(`# hi!`);

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
        <button>저장</button>
      </div>
    </section>
  );
}
