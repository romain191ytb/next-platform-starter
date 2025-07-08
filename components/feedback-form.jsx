"use client"

import { useState } from "react"
import { Card } from "./card"

export function FeedbackForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true) // remplacer par un appel Server Action plus tard
  }

  return (
    <Card className="max-w-md mx-auto">
      {sent ? (
        <p className="text-center font-semibold">Merci pour votre feedback !</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
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
