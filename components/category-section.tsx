import Link from "next/link"
import { ShieldAlert, ShoppingBag, Gamepad2, Map, Utensils, Bug } from "lucide-react"

export default function CategorySection() {
  return (
    <section>
      <div className="relative w-full h-48 mb-8 overflow-hidden rounded-lg banner-background">
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <h1 className="text-4xl font-bold text-white">CATÉGORIES</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/login" className="category-card">
          <ShieldAlert className="h-5 w-5 text-blue-400" />
          <span className="font-medium">Connexion</span>
        </Link>

        <Link href="/shop" className="category-card">
          <ShoppingBag className="h-5 w-5 text-primary" />
          <span className="font-medium">Boutique</span>
        </Link>

        <Link href="/guide" className="category-card">
          <Gamepad2 className="h-5 w-5 text-gray-400" />
          <span className="font-medium">Guide du Jeu</span>
        </Link>

        <Link href="/activities" className="category-card">
          <Map className="h-5 w-5 text-green-400" />
          <span className="font-medium">Activités Légales</span>
        </Link>

        <Link href="/restaurants" className="category-card">
          <Utensils className="h-5 w-5 text-yellow-400" />
          <span className="font-medium">Restaurants</span>
        </Link>

        <Link href="/bugs" className="category-card">
          <Bug className="h-5 w-5 text-purple-400" />
          <span className="font-medium">Signaler un Bug</span>
        </Link>
      </div>
    </section>
  )
}
