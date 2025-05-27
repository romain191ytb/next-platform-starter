import Link from "next/link"
import { FileText, Monitor, Building2, ShieldAlert } from "lucide-react"

export default function RulesSection() {
  return (
    <section className="mb-12">
      <div className="relative w-full h-48 mb-8 overflow-hidden rounded-lg banner-background">
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <h1 className="text-4xl font-bold text-white">RÈGLES</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/rules/general" className="category-card">
          <FileText className="h-5 w-5 text-primary" />
          <span className="font-medium">Règles Générales</span>
        </Link>

        <Link href="/rules/roleplay" className="category-card">
          <Monitor className="h-5 w-5 text-primary" />
          <span className="font-medium">Règles de Roleplay</span>
        </Link>

        <Link href="/rules/legal" className="category-card">
          <Building2 className="h-5 w-5 text-primary" />
          <span className="font-medium">Règles RP Légales</span>
        </Link>

        <Link href="/rules/illegal" className="category-card">
          <ShieldAlert className="h-5 w-5 text-destructive" />
          <span className="font-medium">Règles RP Illégales</span>
        </Link>
      </div>
    </section>
  )
}
