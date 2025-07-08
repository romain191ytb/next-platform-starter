"use client"

import MarkdownToJsx from "markdown-to-jsx"
import { CodeBlock } from "./code-block"

interface MarkdownProps {
  content: string
  className?: string
}

/**
 * Rend du Markdown avec coloration syntaxique basique.
 * Utilise <CodeBlock /> déjà présent dans le projet.
 */
export function Markdown({ content, className }: MarkdownProps) {
  const HighlightedPre = ({ children }: any) => {
    const { props } = children
    const match = /lang-(\w+)/.exec(props?.className || "")
    return <CodeBlock code={props?.children} lang={match ? match[1] : undefined} title={props?.title} lineNumbers />
  }

  return (
    <MarkdownToJsx
      className={["markdown", className].filter(Boolean).join(" ")}
      options={{ overrides: { pre: HighlightedPre } }}
    >
      {content}
    </MarkdownToJsx>
  )
}
