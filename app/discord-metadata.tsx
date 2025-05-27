import type { Metadata } from "next"

export const discordMetadata: Metadata = {
  metadataBase: new URL("https://www.newlastrp.fr"),
  title: "RÈGLEMENT DU SERVEUR - NEW LAST RP 🚀",
  description: "Bienvenue sur New Last RP",
  openGraph: {
    title: "RÈGLEMENT DU SERVEUR - NEW LAST RP 🚀",
    description: "Bienvenue sur New Last RP",
    url: "https://www.newlastrp.fr",
    siteName: "New Last RP",
    images: [
      {
        url: "https://www.newlastrp.fr/images/logo-nlrp.png",
        width: 800,
        height: 600,
        alt: "Règlement du serveur New Last RP",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RÈGLEMENT DU SERVEUR - NEW LAST RP 🚀",
    description: "Bienvenue sur New Last RP",
    images: ["https://www.newlastrp.fr/images/logo-nlrp.png"],
  },
}
