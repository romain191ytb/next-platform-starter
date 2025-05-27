import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "New Last RP - Communauté de Roleplay Discord",
  description: "Site officiel du serveur de roleplay Discord New Last RP",
  applicationName: "New Last RP",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
