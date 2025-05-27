"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo GalacticRP" width={40} height={40} className="rounded-full" />
            <span className="hidden font-bold sm:inline-block text-xl">GalacticRP V2</span>
          </Link>
        </div>

        <div className="flex items-center justify-between flex-1">
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                  Accueil <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/">Accueil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/patch-notes">Notes de Mise à Jour</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/login" className="text-muted-foreground transition-colors hover:text-foreground">
              Connexion
            </Link>

            <Link
              href="https://discord.gg/SJ3qu4brjn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Discord
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                  Boutique <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/shop">Boutique</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/shop/premium">Premium</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center">
            <div className="relative mr-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Rechercher..."
                className="w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:w-[200px] lg:w-[300px]"
              />
            </div>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-2">
          <Link href="/" className="block p-2 hover:bg-secondary rounded-md">
            Accueil
          </Link>
          <Link href="/patch-notes" className="block p-2 hover:bg-secondary rounded-md">
            Notes de Mise à Jour
          </Link>
          <Link href="/login" className="block p-2 hover:bg-secondary rounded-md">
            Connexion
          </Link>
          <Link href="https://discord.gg/SJ3qu4brjn" className="block p-2 hover:bg-secondary rounded-md">
            Discord
          </Link>
          <Link href="/shop" className="block p-2 hover:bg-secondary rounded-md">
            Boutique
          </Link>
        </div>
      )}
    </header>
  )
}
