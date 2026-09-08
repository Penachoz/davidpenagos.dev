"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

export function MarkdownPreview({
  markdown,
  className,
}: {
  markdown: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose-github text-sm leading-relaxed text-foreground",
        className,
      )}
    >
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-3 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-6 mb-2 border-b border-border pb-1 text-xl font-semibold">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-5 mb-2 text-base font-semibold">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-3 text-[15px] text-foreground/90">{children}</p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-sky-400 underline-offset-2 hover:underline"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="mb-3 list-disc space-y-1 pl-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-3 list-decimal space-y-1 pl-5">{children}</ol>
          ),
          li: ({ children }) => <li className="text-[15px]">{children}</li>,
          hr: () => <hr className="my-5 border-border" />,
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          code: ({ children, className }) => {
            const inline = !className;
            if (inline) {
              return (
                <code className="rounded bg-muted px-1 py-0.5 font-mono text-[13px]">
                  {children}
                </code>
              );
            }
            return (
              <code className="block overflow-x-auto rounded-md bg-muted p-3 font-mono text-xs">
                {children}
              </code>
            );
          },
          img: ({ src, alt }) => (
            // shields.io badges
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt ?? ""} className="my-1 mr-1 inline h-5" />
          ),
          table: ({ children }) => (
            <div className="mb-4 overflow-x-auto">
              <table className="w-full text-left text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-border px-2 py-1.5 font-medium">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-border/70 px-2 py-1.5">{children}</td>
          ),
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}
