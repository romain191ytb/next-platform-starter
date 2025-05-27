import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Star, Award, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

export default function PoliceHierarchyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-primary">Hiérarchie de la Police</h1>
            <Separator className="mb-6" />

            <div className="space-y-8">
              {/* L'État Major */}
              <Card>
                <CardHeader className="bg-primary/10">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    L'État Major
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-6">
                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-primary">Commandant</h3>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        Le commandant est le responsable du département, en charge de la liaison avec le gouvernement et
                        les entreprises, il a toute les permissions sur le service.
                      </p>
                    </li>

                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-primary">Capitaine</h3>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        Le capitaine est le responsable-adjoint du département, en charge de la liaison avec le
                        gouvernement et les entreprises et doit veillez à la bonne entente avec la BCSO et coordonne
                        l'ensemble de l'effectif.
                      </p>
                    </li>

                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-primary">Lieutenant</h3>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        Le lieutenant est responsable des divisions, en charge de veiller au bon fonctionnement des
                        unités et du bon travail de leur référents, ainsi que de veiller à la bonne réalisation des
                        missions données aux gradés du commandement.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Le Commandement */}
              <Card>
                <CardHeader className="bg-blue-900/10">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-500" />
                    Le Commandement
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-6">
                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-blue-500">Sergent Chef</h3>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        Le sergent chef est le responsable du commandement et de la liaison entre l'État Major et le
                        Commandement.
                      </p>
                    </li>

                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-blue-500">Sergent II</h3>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        Le sergent II est un agent confirmé du commandement, il dispose de l'ensemble des autorisations
                        pour la bonne gestion de ses effectifs.
                      </p>
                    </li>

                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-blue-500">Sergent I</h3>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        Le sergent I est un agent novice au sein du commandement, il doit veiller à l'application du
                        règlement, prend des lead OP et doit conseiller les O.S pour qu'ils s'améliorent et doit aussi
                        prendre ses marques aux sein de l'équipe du commandement.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Les Agents */}
              <Card>
                <CardHeader className="bg-blue-500/10">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    Les Agents
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-6">
                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-blue-400">Senior Lead Officer</h3>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        Le senior lead officer est un officier d'expérience, c'est en toute logique qu'il dispose de
                        permissions plus grandes, il dirige les rookies et officiers, il peut réaliser des dispatchs,
                        effectuer des convocations avec un membre du commandement. La promotion à ce grade n'est pas
                        automatique et se fait uniquement sous décision de l'État Major ou peut demander à l'obtenir car
                        il ne veut pas rentrer dans le commandement.
                      </p>
                    </li>

                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-blue-400">Officier III</h3>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        L'officier III est un membre du service pouvant être amené à prendre des lead OP lorsqu'aucuns
                        supérieurs ne sont disponibles, il peut aussi passer son brevet III et peut prétendre à passer
                        officier supérieur il est un officier confirmé et doit montrer l'exemple.
                      </p>
                    </li>

                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-blue-400">Officier II</h3>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        L'officier II est un membre aguerri du service, il commence à prendre de l'importance et a
                        obligation de se spécialiser dans une unité principale pour monter en grade.
                      </p>
                    </li>

                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-blue-400">Officier I</h3>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        L'officier I a terminé sa période d'essai, il peut maintenant rejoindre une unité et doit
                        valider ses formations complémentaires pour monter en grade.
                      </p>
                    </li>

                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-blue-400">Rookie</h3>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        Le rookie est un agent en période d'essai, la moindre erreur mènera à un radiation du programme
                        de formation. Il doit valider ses formations élémentaires pour être promu au grade supérieur.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
