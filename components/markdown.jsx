"use client"

/**
 * Rend une chaîne Markdown (très basique).
 * Suffit largement pour débloquer la compilation ; libre à vous d’améliorer.
 */
export function Markdown({ content = "", className = "" }) {
  return (
    <div
      className={`markdown prose prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
