import "@/styles/prism-vsc-dark-plus.css";
import "@/styles/prism-plugin.css";

import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

interface PostRendererProps {
  post: string;
}

export default function PostRenderer({ post }: PostRendererProps) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: post }}
      className="prose max-w-none"
    />
  );
}
