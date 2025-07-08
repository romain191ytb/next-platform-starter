"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "./card"

export function FeedbackForm() {
  const [sent, setSent] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Ici on simule l’envoi ; branchez un Server Action plus tard
    setSent(true)
  }

  return (
    <Card className="max-w-md mx-auto">
      {sent ? (
        <p className="text-center font-semibold">Merci pour votre retour !</p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <h3 className="text-xl font-bold text-center">Feedback</h3>
          <input name="name" className="input w-full" placeholder="Votre nom" required />
          <textarea name="message" className="input w-full" rows={4} placeholder="Votre message" required />
          <button type="submit" className="btn w-full">
            Envoyer
          </button>
        </form>
      )}
    </Card>
  )
}
