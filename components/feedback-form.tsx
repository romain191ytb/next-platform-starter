"use client"

import type React from "react"

/**
 * Stub très simple : suffisamment pour satisfaire l’import
 * et permettre une compilation sans erreurs.
 */
export function FeedbackForm() {
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert("Merci pour votre feedback !")
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm space-y-4 rounded-lg bg-gradient-card p-6">
      <h2 className="text-center text-xl font-bold text-gradient">Feedback</h2>
      <input name="name" className="input w-full" placeholder="Votre nom" required />
      <textarea name="message" className="input w-full" rows={4} placeholder="Votre message" required />
      <button type="submit" className="btn w-full">
        Envoyer
      </button>
    </form>
  )
}
