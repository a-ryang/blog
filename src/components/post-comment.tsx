"use client";

export default function Comment() {
  return (
    <section
      className="mt-20"
      ref={(el) => {
        if (!el) return;

        const script = document.createElement("script");

        script.src = "https://utteranc.es/client.js";
        script.async = true;
        script.setAttribute("repo", "a-ryang/blog");
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("label", "💬 comment");
        script.setAttribute("theme", "github-light");
        script.setAttribute("crossorigin", "anonymous");

        el.appendChild(script);
      }}
    >
      <h1 className="hidden">댓글</h1>
    </section>
  );
}
