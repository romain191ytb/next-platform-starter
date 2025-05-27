import DiscordPreview from "@/components/discord-preview"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PreviewPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Aperçu de l'intégration Discord</h1>

        <div className="mb-8">
          <p className="text-lg mb-4">Voici comment votre lien apparaîtra lorsqu'il sera partagé sur Discord :</p>

          <DiscordPreview />
        </div>

        <div className="flex justify-center">
          <Link href="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-slate-800 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Informations techniques</h2>
          <p className="mb-4">
            Cette prévisualisation est rendue possible grâce aux métadonnées Open Graph et aux balises spécifiques à
            Discord. Lorsque vous partagez un lien vers votre site sur Discord, ces métadonnées sont utilisées pour
            générer une carte riche.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">Métadonnées utilisées :</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code className="bg-slate-700 px-2 py-1 rounded">og:title</code> - Le titre de la carte
            </li>
            <li>
              <code className="bg-slate-700 px-2 py-1 rounded">og:description</code> - La description sous le titre
            </li>
            <li>
              <code className="bg-slate-700 px-2 py-1 rounded">og:image</code> - L'image générée dynamiquement
            </li>
            <li>
              <code className="bg-slate-700 px-2 py-1 rounded">theme-color</code> - La couleur de la bordure (violet)
            </li>
          </ul>

          <p className="mt-6">
            N'oubliez pas de remplacer "votre-domaine.com" par votre vrai domaine dans les fichiers de métadonnées.
          </p>
        </div>
      </div>
    </div>
  )
}
