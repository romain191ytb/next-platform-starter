import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-center text-primary">Connexion</h1>
            <Separator className="mb-6" />

            <Card>
              <CardHeader>
                <CardTitle>Connexion au Compte</CardTitle>
                <CardDescription>Entrez vos identifiants pour accéder à votre compte</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Nom d'utilisateur</Label>
                  <Input id="username" placeholder="Entrez votre nom d'utilisateur" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input id="password" type="password" placeholder="Entrez votre mot de passe" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full">Se Connecter</Button>
                <div className="text-sm text-center text-muted-foreground">
                  Vous n'avez pas de compte ?{" "}
                  <Link href="/register" className="text-primary hover:underline">
                    S'inscrire
                  </Link>
                </div>
              </CardFooter>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Des problèmes de connexion ?{" "}
                <Link href="/support" className="text-primary hover:underline">
                  Contacter le Support
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
