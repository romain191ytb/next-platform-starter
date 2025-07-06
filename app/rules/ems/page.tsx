import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ShieldAlert, Check, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

export default function EMSRulesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-primary">Règlements des EMS</h1>
            <Separator className="mb-6" />

            <div className="space-y-8">
              {/* Section Autorisé */}
              <Card className="border-green-600/30 bg-green-950/10">
                <CardHeader className="bg-green-950/20">
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Actions Autorisées
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4 list-disc pl-6">
                    <li>
                      Un EMS peut soigner une personne dans un quartier uniquement si on lui a donné l'autorisation
                      d'entrer.
                    </li>
                    <li>
                      Un EMS est autorisé à vous mettre une ATA de 10 minutes s'il juge que la situation en nécessite.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section Interdit */}
              <Card className="border-red-600/30 bg-red-950/10">
                <CardHeader className="bg-red-950/20">
                  <CardTitle className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-500" />
                    Actions Interdites
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4 list-disc pl-6">
                    <li>
                      Il est strictement interdit pour les membres de la direction (directeur, co-directeur et directeur
                      des ressources humaines) de faire de l'illégal.
                    </li>
                    <li>
                      Il est formellement interdit de donner/vendre les matériels EMS (médikits, bandages, chaises
                      roulantes & brancards)
                    </li>
                    <li>
                      Il est <span className="font-bold">FORMELLEMENT INTERDIT</span> d'intervenir durant une fusillade,
                      veuillez attendre la fin de cette dernière pour intervenir.
                    </li>
                    <li>
                      Vous n'avez pas le droit d'utiliser votre service EMS en faisant de l'illégal. (Pour
                      soigner/réanimer un personnage.)
                    </li>
                    <li>
                      Il est interdit de usebug pour raccourcir l'animation de soin ou de réanimation sous peine de
                      sanction.
                    </li>
                    <li>Il est interdit de garder le service EMS une fois que la tenue est enlevée.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Note importante */}
              <Alert className="bg-primary/10 border-primary/30">
                <ShieldAlert className="h-5 w-5 text-primary" />
                <AlertDescription>
                  Ces règlements sont en vigueur pour tous les membres des services médicaux. Le non-respect de ces
                  règles peut entraîner des sanctions disciplinaires, allant jusqu'à la révocation.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
