"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Heart,
  FileText,
  Monitor,
  Building2,
  ShieldAlert,
  User,
  ShoppingBag,
  Gamepad2,
  Map,
  ChevronRight,
  Stethoscope,
  Briefcase,
} from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const [activeCategory, setActiveCategory] = useState("")

  useEffect(() => {
    // Set active category based on current path
    if (pathname === "/") {
      setActiveCategory("home")
    } else if (pathname.includes("/rules/general")) {
      setActiveCategory("rules-general")
    } else if (pathname.includes("/rules/roleplay")) {
      setActiveCategory("rules-roleplay")
    } else if (pathname.includes("/rules/legal")) {
      setActiveCategory("rules-legal")
    } else if (pathname.includes("/rules/police")) {
      setActiveCategory("rules-police")
    } else if (pathname.includes("/rules/ems")) {
      setActiveCategory("rules-ems")
    } else if (pathname.includes("/rules/business")) {
      setActiveCategory("rules-business")
    } else if (pathname.includes("/rules/illegal")) {
      setActiveCategory("rules-illegal")
    } else if (pathname.includes("/login")) {
      setActiveCategory("login")
    } else if (pathname.includes("/shop")) {
      setActiveCategory("shop")
    } else if (pathname.includes("/guide")) {
      setActiveCategory("guide")
    } else if (pathname.includes("/activities")) {
      setActiveCategory("activities")
    } else if (pathname.includes("/patch-notes")) {
      setActiveCategory("patch-notes")
    }
  }, [pathname])

  return (
    <aside className="w-64 border-r bg-background hidden md:block overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">RÈGLES & RÈGLEMENTS</h2>
      </div>

      <nav className="p-2 space-y-1">
        <Link href="/" className={`sidebar-item ${activeCategory === "home" ? "active" : ""}`}>
          <Heart className="h-4 w-4 text-primary" />
          <span>Accueil</span>
        </Link>

        <Link href="/patch-notes" className={`sidebar-item ${activeCategory === "patch-notes" ? "active" : ""}`}>
          <FileText className="h-4 w-4" />
          <span>Notes de Mise à Jour</span>
        </Link>

        <div className="py-1">
          <Link href="/rules/general" className={`sidebar-item ${activeCategory === "rules-general" ? "active" : ""}`}>
            <Monitor className="h-4 w-4" />
            <span>Règles Générales</span>
            <ChevronRight className="h-4 w-4 ml-auto" />
          </Link>
        </div>

        <div className="py-1">
          <Link
            href="/rules/roleplay"
            className={`sidebar-item ${activeCategory === "rules-roleplay" ? "active" : ""}`}
          >
            <User className="h-4 w-4" />
            <span>Règles de Roleplay</span>
            <ChevronRight className="h-4 w-4 ml-auto" />
          </Link>
        </div>

        <div className="py-1">
          <Link href="/rules/legal" className={`sidebar-item ${activeCategory === "rules-legal" ? "active" : ""}`}>
            <Building2 className="h-4 w-4" />
            <span>Règles RP Légales</span>
            <ChevronRight className="h-4 w-4 ml-auto" />
          </Link>
        </div>

        <div className="py-1">
          <Link href="/rules/police" className={`sidebar-item ${activeCategory === "rules-police" ? "active" : ""}`}>
            <ShieldAlert className="h-4 w-4" />
            <span>Règles Police</span>
            <ChevronRight className="h-4 w-4 ml-auto" />
          </Link>

          <div className="pl-6 mt-1 space-y-1">
            <Link
              href="/rules/police/hierarchy"
              className={`sidebar-item ${pathname.includes("/rules/police/hierarchy") ? "active" : ""}`}
            >
              <ShieldAlert className="h-4 w-4" />
              <span>Hiérarchie Police</span>
            </Link>
          </div>
        </div>

        <div className="py-1">
          <Link href="/rules/ems" className={`sidebar-item ${activeCategory === "rules-ems" ? "active" : ""}`}>
            <Stethoscope className="h-4 w-4" />
            <span>Règles EMS</span>
            <ChevronRight className="h-4 w-4 ml-auto" />
          </Link>
        </div>

        <div className="py-1">
          <Link
            href="/rules/business"
            className={`sidebar-item ${activeCategory === "rules-business" ? "active" : ""}`}
          >
            <Briefcase className="h-4 w-4" />
            <span>Règles Entreprises</span>
            <ChevronRight className="h-4 w-4 ml-auto" />
          </Link>
        </div>

        <div className="py-1">
          <Link href="/rules/illegal" className={`sidebar-item ${activeCategory === "rules-illegal" ? "active" : ""}`}>
            <ShieldAlert className="h-4 w-4 text-destructive" />
            <span>Règles RP Illégales</span>
            <ChevronRight className="h-4 w-4 ml-auto" />
          </Link>
        </div>
      </nav>

      <div className="p-4 border-t border-b">
        <h2 className="font-bold text-lg">GUIDES</h2>
      </div>

      <nav className="p-2 space-y-1">
        <Link href="/login" className={`sidebar-item ${activeCategory === "login" ? "active" : ""}`}>
          <ShieldAlert className="h-4 w-4" />
          <span>Connexion</span>
        </Link>

        <Link href="/shop" className={`sidebar-item ${activeCategory === "shop" ? "active" : ""}`}>
          <ShoppingBag className="h-4 w-4 text-primary" />
          <span>Boutique</span>
        </Link>

        <Link href="/guide" className={`sidebar-item ${activeCategory === "guide" ? "active" : ""}`}>
          <Gamepad2 className="h-4 w-4" />
          <span>Guide du Jeu</span>
          <ChevronRight className="h-4 w-4 ml-auto" />
        </Link>

        <Link href="/activities" className={`sidebar-item ${activeCategory === "activities" ? "active" : ""}`}>
          <Map className="h-4 w-4" />
          <span>Activités Légales</span>
          <ChevronRight className="h-4 w-4 ml-auto" />
        </Link>
      </nav>
    </aside>
  )
}
