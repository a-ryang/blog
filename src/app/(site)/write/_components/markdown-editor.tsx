"use client";

import "./markdown-editor.css";
import { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, ViewUpdate } from "@codemirror/view";
import { markdown as langMarkdown } from "@codemirror/lang-markdown";

interface EditorProps {
  initialMarkdown?: string;

  onChangeMarkdown: (markdown: string) => void;
}

export default function MarkdownEditor({
  initialMarkdown,
  onChangeMarkdown,
}: EditorProps) {
  const editor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editor.current) return;

    const updateListenerExtension = EditorView.updateListener.of(
      (update: ViewUpdate) => {
        if (update.docChanged) {
          const newValue = update.state.doc.toString();

          onChangeMarkdown(newValue);
        }
      },
    );

    const markdown = initialMarkdown ?? "";

    const state = EditorState.create({
      doc: markdown,
      extensions: [
        updateListenerExtension,
        langMarkdown(),
        EditorView.lineWrapping,
      ],
    });
    const view = new EditorView({ state, parent: editor.current });

    view.focus();
    onChangeMarkdown(markdown);

    return () => {
      view.destroy();
    };
  }, []);

  return <div ref={editor} />;
}
