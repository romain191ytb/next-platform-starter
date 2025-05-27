import Link from "next/link"
import { DiscIcon as Discord, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} GalacticRP. Tous droits réservés.
        </p>

        <div className="flex items-center gap-4">
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            Conditions d'Utilisation
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            Politique de Confidentialité
          </Link>
          <Link href="/rules" className="text-sm text-muted-foreground hover:text-foreground">
            Règles
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://discord.gg/SJ3qu4brjn" className="text-muted-foreground hover:text-foreground">
            <Discord className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </Link>
          <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
