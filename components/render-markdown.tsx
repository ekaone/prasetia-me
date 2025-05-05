import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface MarkdownProps {
  children: string;
}

/**
 * Markdown component to use Next.js's Link component for better client-side navigation:
 *
 */

export default function Markdown({ children }: MarkdownProps) {
  return (
    <div className="prose prose-invert prose-sm max-w-none">
      <ReactMarkdown
        components={{
          a: ({ href, children }) => {
            // Check if the link is external
            const isExternal =
              href?.startsWith("http") || href?.startsWith("mailto:");

            // Use regular anchor for external links, Next/Link for internal
            return isExternal ? (
              <a
                href={href}
                className="text-orange-500 hover:text-orange-400 no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ) : (
              <Link
                href={href || "/"}
                className="text-orange-500 hover:text-orange-400 no-underline"
              >
                {children}
              </Link>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
