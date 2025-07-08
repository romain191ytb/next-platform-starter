import type { Metadata } from "next"

export const discordMetadata: Metadata = {
  metadataBase: new URL("https://www.newlastrp.fr"),
  title: "RÈGLEMENT DU SERVEUR - PURESIDE V RP 🚀",
  description: "Bienvenue sur Pureside V RP",
  openGraph: {
    title: "RÈGLEMENT DU SERVEUR - PURESIDE V RP 🚀",
    description: "Bienvenue sur Pureside V RP",
    url: "https://www.newlastrp.fr",
    siteName: "Pureside V RP",
    images: [
      {
        url: "https://www.newlastrp.fr/images/logo-nlrp.png",
        width: 800,
        height: 600,
        alt: "Règlement du serveur Pureside V RP",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RÈGLEMENT DU SERVEUR - PURESIDE V RP 🚀",
    description: "Bienvenue sur Pureside V RP",
    images: ["https://www.newlastrp.fr/images/logo-nlrp.png"],
  },
}
