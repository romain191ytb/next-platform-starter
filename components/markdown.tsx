"use client"

import type { ReactNode } from "react"
import MarkdownToJsx from "markdown-to-jsx"
import { CodeBlock } from "./code-block"

interface Props {
  content: string
  className?: string
}

/**
 * Remplacement léger de l’ancien composant Markdown :
 * – Rend du markdown simple.
 * – Garde la coloration grâce à components/code-block.
 */
export function Markdown({ content, className }: Props) {
  const Highlighted = ({ children }: { children: ReactNode }) => {
    // récupère la langue éventuelle "lang-xxx" placée par markdown-to-jsx
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const match = /lang-(\w+)/.exec(children?.props?.className || "")
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const code = children?.props?.children
    return <CodeBlock code={code} lang={match ? match[1] : undefined} title={children?.props?.title} lineNumbers />
  }

  return (
    <MarkdownToJsx className={`markdown ${className ?? ""}`} options={{ overrides: { pre: Highlighted } }}>
      {content}
    </MarkdownToJsx>
  )
}
