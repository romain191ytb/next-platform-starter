import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "New Last RP - Communauté de Roleplay Discord",
  description:
    "Site officiel du serveur de roleplay Discord New Last RP. Découvrez nos règlements, guides et rejoignez notre communauté RP immersive!",
  openGraph: {
    title: "RÈGLEMENT DU SERVEUR - NEW LAST RP 🚀",
    description:
      "Bienvenue sur New Last RP! Afin de garantir une expérience RP immersive et agréable pour tous, merci de prendre connaissance et de respecter notre règlement.",
    images: [
      {
        url: "https://votre-domaine.com/api/og",
        width: 800,
        height: 600,
        alt: "Règlement du serveur New Last RP",
      },
    ],
    type: "website",
    siteName: "New Last RP",
  },
  twitter: {
    card: "summary_large_image",
    title: "RÈGLEMENT DU SERVEUR - NEW LAST RP 🚀",
    description: "Bienvenue sur New Last RP! Découvrez nos règlements et rejoignez notre communauté RP immersive!",
    images: ["https://votre-domaine.com/api/og"],
  },
  metadataBase: new URL("https://votre-domaine.com"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
