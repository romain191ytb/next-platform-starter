import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Building2, Car, Wrench, Utensils, Warehouse, AlertTriangle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

export default function BusinessRulesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-primary">Règlements des Entreprises</h1>
            <Separator className="mb-6" />

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
                <TabsTrigger value="general">Général</TabsTrigger>
                <TabsTrigger value="dealership">Concessionnaire</TabsTrigger>
                <TabsTrigger value="mechanic">Mécanicien</TabsTrigger>
                <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
                <TabsTrigger value="farm">Entreprise de Farm</TabsTrigger>
              </TabsList>

              {/* Règles générales */}
              <TabsContent value="general" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      Règles Générales des Entreprises
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 list-disc pl-6">
                      <li>
                        Il est interdit pour les patrons de se servir dans le coffre de l'entreprise à des fins
                        personnelles.
                      </li>
                      <li>
                        Les entreprises hors boutique sans activité patronale pendant 1 semaine seront récupérées et
                        mises sous dossier. (hors absence prévenue)
                      </li>
                      <li>
                        Il est totalement interdit de vendre/donner son entreprise. Si vous ne souhaitez plus gérer
                        votre entreprise, vous devez faire un ticket et celle-ci sera remise sous dossier.
                      </li>
                      <li>
                        Le FISC est obligatoire pour les entreprises déclarées. Tout manquement entraînera des sanctions
                        RP et HRP.
                      </li>
                      <li>Un patron ne peut être patron que d'une seule et unique entreprise.</li>
                      <li>Un chef d'entreprise doit fournir une raison valable pour un licenciement.</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Règles concessionnaire */}
              <TabsContent value="dealership" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="h-5 w-5 text-primary" />
                      Règles pour les Concessionnaires
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 list-disc pl-6">
                      <li>
                        Il est interdit de vendre des véhicules d'entreprises, EMS, Police ou gouvernement sans
                        vérification auprès d'un admin du statut de la personne en HRP.
                      </li>
                      <li>
                        Il est interdit d'attribuer gratuitement des véhicules à ses amis. Toute personne voulant un
                        véhicule est dans l'obligation de le payer.
                      </li>
                    </ul>

                    <Alert className="mt-6 border-red-600/30 bg-red-950/10">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <AlertDescription>
                        Il est interdit de vendre des véhicules de services publics sans l'accord d'un gérant après
                        vérification.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Règles mécanicien */}
              <TabsContent value="mechanic" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-primary" />
                      Règles pour les Mécaniciens
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 list-disc pl-6">
                      <li>
                        Il est interdit d'installer des armes sur les véhicules pouvant les recevoir ainsi que le
                        blindage.
                      </li>
                      <li>
                        Il est interdit d'utiliser vos permissions en dehors de votre service.
                        <span className="text-blue-400 italic">
                          {" "}
                          Exemple : déverrouiller une voiture pour la voler.
                        </span>
                      </li>
                      <li>Il est interdit de usebug pour raccourcir l'animation de réparation ou autre.</li>
                      <li>Le nombre d'employés maximal est de 30 personnes.</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Règles restaurant */}
              <TabsContent value="restaurant" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      Règles pour les Restaurants
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 list-disc pl-6">
                      <li>
                        Il est interdit de se servir dans le coffre de l'entreprise pour sa consommation personnelle en
                        dehors d'un accord préalable avec la direction de l'entreprise.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Règles entreprise de farm */}
              <TabsContent value="farm" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Warehouse className="h-5 w-5 text-primary" />
                      Règles pour les Entreprises de Farm
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 list-disc pl-6">
                      <li>Elle peut s'obtenir via un dossier ou via la boutique.</li>
                      <li>
                        Si l'entreprise a été obtenue via la boutique, cette dernière est considérée comme un achat
                        boutique et restera la propriété de son acheteur même en cas de wipe ou mort RP.
                      </li>
                      <li>Le nombre d'employés maximal est de 30 personnes.</li>
                    </ul>

                    <Alert className="mt-6 border-red-600/30 bg-red-950/10">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <AlertDescription>
                        En cas d'absence prolongée sans avis préalable, l'entreprise sera mise sous dossier ou
                        supprimée.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
