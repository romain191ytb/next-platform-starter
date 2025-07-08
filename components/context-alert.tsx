"use client"

import { Alert } from "./alert"
import { Markdown } from "./markdown"

/**
 * Affiche un message si `addedChecksFunction` renvoie du texte
 * ou si l’environnement Netlify n’est pas détecté.
 */
export function ContextAlert({
  addedChecksFunction,
  className,
}: {
  addedChecksFunction?: (ctx: string | undefined) => string | null
  className?: string
}) {
  const ctx = process.env.NEXT_PUBLIC_NETLIFY_CONTEXT // ou undefined en local

  let markdownText: string | null = null
  if (!ctx) {
    markdownText = "Pour la pleine fonctionnalité, déployez sur Netlify ou lancez `netlify dev` en local."
  } else if (addedChecksFunction) {
    markdownText = addedChecksFunction(ctx)
  }

  if (!markdownText) return null

  return (
    <Alert className={className}>
      <Markdown content={markdownText} />
    </Alert>
  )
}
