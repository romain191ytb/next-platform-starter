"use client"

import { Alert } from "./alert"
import { Markdown } from "./markdown"

/**
 * Affiche un message conditionnel selon le contexte Netlify ou la
 * fonction passée en props.
 */
export function ContextAlert({ addedChecksFunction, className = "" }) {
  const ctx = process.env.NEXT_PUBLIC_NETLIFY_CONTEXT
  let msg = null

  if (!ctx) {
    msg =
      "Fonctionnalités Netlify indisponibles : lancez `netlify dev` en local ou déployez sur Netlify pour les tester."
  } else if (addedChecksFunction) {
    msg = addedChecksFunction(ctx)
  }

  if (!msg) return null

  return (
    <Alert className={className}>
      <Markdown content={msg} />
    </Alert>
  )
}
