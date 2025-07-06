import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  ShieldAlert,
  HandIcon as Handcuffs,
  BirdIcon as Helicopter,
  Truck,
  Target,
  Map,
  User,
  Building,
  PenIcon as Gun,
  Search,
  Home,
  Users,
  Siren,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

export default function PoliceRulesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-primary">Règlements de la Police</h1>
            <Separator className="mb-6" />

            <Tabs defaultValue="procedures" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
                <TabsTrigger value="procedures">Procédures</TabsTrigger>
                <TabsTrigger value="operations">Opérations</TabsTrigger>
                <TabsTrigger value="comportement">Comportement</TabsTrigger>
                <TabsTrigger value="relations">Relations</TabsTrigger>
              </TabsList>

              {/* Procédures */}
              <TabsContent value="procedures" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Handcuffs className="h-5 w-5 text-primary" />
                      Arrestation et Équipement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Arrestation :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Pour chaque scène Police où il y a une arrestation qui mène à une mise en cellule: un casier
                          judiciaire doit impérativement être fait afin de garder une trace de l'arrestation sur le MDT
                          Police et ainsi faciliter le job des référents Police.
                        </li>
                        <li>
                          Pour toutes les infractions de délit mineur à délit moyen vous devez juste mettre les amendes.
                        </li>
                        <li>
                          Pour toutes les infractions de délit majeur à crime une procédure complète est obligatoire.
                        </li>
                        <li>
                          En code noir toutes scènes illégal sera perçu comme déclaration de guerre contre les forces de
                          l'ordre, donc vous devez prendre en compte le fear LSPD car votre vie sera mise en danger.{" "}
                          <span className="text-red-500">(Mort RP)</span>
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Équipement :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>L'usage de votre équipement doit être fait de manière raisonnable et justifiable.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5 text-primary" />
                      Perquisitions et Indics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Perquisitions :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Les perquisitions se font sous dossier auprès du procureur, sauf exception (accord du staff).
                        </li>
                        <li>
                          Les perquisitions des groupes officiels doivent avoir au préalable été validé par les
                          Référents Polices et Référents Légaux.
                        </li>
                        <li>
                          Lorsqu'un individu fuit dans une propriété les agents des forces de l'ordre ont le droit de
                          perquisitionner la propriété afin de sanctionner le joueur de manière RP.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Indics :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Les indics se font sous dossier auprès du staff pour en assurer le fair play, il faut donc que
                          la personne souhaitant devenir indic soit au préalable validé par le staff ou les dirigeants
                          de la POLICE.
                        </li>
                        <li>
                          Il faut comprendre que nous ne pouvons pas nous permettre de laisser n'importe quelle
                          information circulée, certains se font virer de leur groupe, et veulent se venger par rancœur,
                          il est donc nécessaire que les indics soient correctement encadrés afin de ne pas vous faire
                          perdre votre temps avec des informations douteuses.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-primary" />
                      Division d'Enquête Banalisée
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-500">Identification :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Pour chaque sortie de banalisé hors enquête (drogues, suicide, banque, ect...) la tenue de
                          service Police est obligatoire.
                        </li>
                        <li>
                          Vous n'avez absolument pas le droit d'utiliser des véhicules non homologués (véhicules
                          concessionnaires) : vous avez un large choix de véhicules banalisé vous devez les utiliser.
                        </li>
                        <li>
                          Les tenues civiles sont seulement autorisées pour les enquêtes. Avec plaque, vous devez être
                          identifiable par les citoyens
                        </li>
                        <li>
                          Vous êtes dans l'obligation de communiquer votre matricule si un citoyen vous le demande.{" "}
                          <span className="text-red-500">(SAUF DEFCON)</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Opérations */}
              <TabsContent value="operations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Helicopter className="h-5 w-5 text-primary" />
                      Hélicoptère et Stockage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Hélicoptère :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          L'utilisation des hélicoptères est réservée uniquement aux membres de l'Air Support Division.
                        </li>
                        <li>
                          La prise des plaques depuis un hélico ne peut être prise en compte si la plaque n'est pas
                          clairement apparente (votre photos doit être RP et doit être vue).
                        </li>
                        <li>
                          De plus, les hélicoptères ne peuvent rester que 60 minutes en mouvement et un refuel de 5
                          minutes (minimum) doit être fait avant de repartir.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Stockage :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Le stockage d'armement ou d'équipement de Police dans les coffres de voitures de patrouille
                          est interdit.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-primary" />
                      Convois, Wipe/Départ, et Tirs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Convois :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Lorsque vous voyez des convois, il vous faut de réel raison RP de les suivre, armes sorties et
                          vues, pétage de convoi en tout genre, mais vous devez les craindre et appeler des renforts !
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Wipe, Départ des services de Police ou licenciement :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Si vous quittez les services de Police, vous êtes dans l'obligation de wipe avant de partir
                          dans l'illégal ou d'effectuer quelconque actions illégales, si ce n'est pas respecté, vous
                          serez <span className="text-red-500">wipe et sanctionné</span>.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Tirs :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Les tirs dans les pneus sont autorisés en cas de No fear ou de troll pour les agents des
                          forces de l'ordre, les agents de Police devront toutefois justifier leur acte avec un rec à
                          l'appuie.
                        </li>
                        <li>
                          Les forces de l'ordres ne sont pas autorisés à tirer en premier,{" "}
                          <span className="text-blue-400">
                            mise à part pour des sommations (3 sommations par la voix{" "}
                            <span className="font-bold">OBLIGATOIRE</span>)
                          </span>{" "}
                          (Exemple de sommations: Halte Police ! Halte ou je fais feu).
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      Braquages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-500">Règle général au braquage :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Votre rôle est de faire sortir les personnes afin qu'une course poursuite puisse avoir lieu,
                          vous devez donc attendre dans votre véhicule et ne pas forcer l'arrestation.
                        </li>
                        <li>Favorisez les négociations, puis la course poursuite</li>
                        <li>
                          La sécurité des otages est votre priorité, les assauts sont déconseillés (autorisation
                          uniquement si les otages sont en danger, avec tirs à restreindre & avec rec à l'appuie pour
                          justifier l'assaut), vous vous devez d'être fair play dans les négociations également
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Otage :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Les otages ne doivent pas être traité comme des criminels, aucun abus ne sera toléré !</li>
                        <li>
                          Un otage n'est pas supposé être fouillé puis loot et si vous vous apercevez qu'il peut s'agir
                          d'un potentielle complice, il faut comprendre qu'ils ont déjà été contraint de participer à
                          une scène otage, vous devez être fair play vis à vis de cela!
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Course poursuite/Règles relatives au course poursuite :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Braquage de supérette/ATM : Le nombre de véhicule doit être proportionnel au nombre de
                          personne dans le véhicule. (maximum 2 véhicules par véhicule illégal)
                        </li>
                        <li>
                          Braquage de Bijouterie/Fleeca/Pacifique banque: Le nombre de véhicule peut être supérieur au
                          véhicule (côté illégal) en effet ce sont des braquages relativement important mais soyez tout
                          de même fair play
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gun className="h-5 w-5 text-primary" />
                      Armes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-950/20 border border-blue-600/30 rounded-md">
                        <p className="text-blue-400">
                          La Police n'a pas pour but de tirer, vous n'êtes pas autorisé à tirer (sauf exception, tirs de
                          suppression, et sommation)
                        </p>
                      </div>

                      <h3 className="text-lg font-semibold">Réglementation armes :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Maximum une arme lourde sortie s'il n'y a pas d'armes lourdes sortie en face.</li>
                        <li>
                          Les armes ne sont à sortir qu'en cas de Defcon mise à part dans les situations qui le
                          requièrent (armes lourdes en face) la Police a le droit à avoir une arme lourde
                          supplémentaire.
                        </li>
                        <li>
                          Exemple: Pacifique banque avec 3 tec9 sortie côté illégale | La Police peut sortir 4 armes
                          lourdes.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Munitions Polices :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Pistolet de combat: Munitions: 90</li>
                        <li>MP5: Munitions: 150</li>
                        <li>M4A1: Munitions: 200</li>
                        <li>Spas-12: Munitions: 30</li>
                        <li>G-36: Munitions: 200</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Comportement */}
              <TabsContent value="comportement" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Notions de Base
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Cohérence RP :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Le terme "argent sale" ou "Drogue" ne doit pas être utilisé vous êtes conscient que le suspect
                          à une grosse liasse d'argent ou un sachet suspect mais il ne faut pas faire de distinction
                          entre de l'argent propre ou sale, à la limite vous pouvez la qualifier d'argent non déclaré{" "}
                          <span className="text-blue-400">APRÈS</span> avoir demandé un justificatif au suspect.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Respect du Mass RP :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          En tant qu'agent de police vous n'avez pas à aller sans renfort dans des lieux-dits dangereux{" "}
                          <span className="text-blue-400">SANS</span> raison (quartiers de gang, fusillade sauf
                          exceptions...)
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">PdP RP :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Les pdp sont strictement interdits soyez fairplay, si un joueur abuse ne répondez pas par des
                          pdp!
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Fear RP :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Si vous êtes pris en otage, vous devez avoir peur pour votre vie, ou pour celle de l'otage.
                        </li>
                        <li>
                          En tant qu'agent de police vous n'avez pas à aller sans renfort dans des lieux-dits dangereux
                          (quartiers de gang, fusillade sauf exceptions...)
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Raccourcis RP :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Une couleur ne définit pas automatiquement l'appartenance à un groupe illégal !</li>
                        <li>
                          De même, une personne masquée ne peut être reconnue si elle ne vous laisse pas d'indice.
                        </li>
                        <li>
                          Les raccourcis RP sont sanctionnables, une couleur ne définit pas un joueur comme appartenant
                          à un gang ou une organisation, tant qu'il n'y a pas de revendication, il doit vous sembler
                          être un simple civil.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-primary" />
                      Photos preuve, Win RP, et Fairplay
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Photos preuve :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Uniquement des photos prise avec votre téléphone de façon RP ou jumelle.</li>
                      </ul>

                      <h3 className="text-lg font-semibold">Win RP :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Nous ne sommes pas là pour gagner à tout prix, nous sommes là pour offrir des scènes. Vous
                          êtes membres des forces de l'ordre, vous êtes sur-armés, sous kevlar, et vos armes vous sont
                          données gratuitement, prenez le en considération ! Vous n'avez rien à perdre !
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Fairplay :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Ce n'est pas car un joueur est masqué qu'il faut obligatoirement le fouiller et le loot, vous
                          lui faites un rappel, lui signaler que le port du masque est interdit, pareil pour le Holster.
                          (Sauf si l'individu n'est pas coopérant)
                        </li>
                        <li>
                          Ne prenez pas l'intégralité de l'inventaire des joueurs, uniquement les biens illégaux à la
                          limite.
                        </li>
                        <li>Ne pas loot les joueurs coma (sauf exception fusillade...)</li>
                        <li>
                          Interdiction de prendre la carte d'identité d'un joueur sans lui avoir demandé au préalable
                          (même s'il est coma, prenez son ID au pire si nécessaire).
                        </li>
                      </ul>

                      <div className="mt-4 p-4 bg-blue-950/20 border border-blue-600/30 rounded-md">
                        <p className="text-blue-400 italic">
                          À éviter: les scènes: fouilles, loot, ciao: sauf exception fusillades ou avec accord du staff.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Agent en Civil
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-500">Civil :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Les membres de la Police en civil n'ont pas le droit d'avoir leur équipement Police en dehors
                          de leur service !
                        </li>
                        <li>
                          Cette règle vise à vous protéger afin qu'aucun débordement ne puisse avoir lieu en cas de
                          tilt, ou de scène désagréable.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Comportement en civil :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Vous restez membre de la Police vous ne pouvez pas vous permettre de devenir des "gangster" en
                          dehors de votre service. (Pas de bagarre, de menaces ect...)
                        </li>
                        <li>
                          De plus, vous n'avez pas le droit d'effectuer d'actions illégales, quelles qu'elles soient,
                          c'est interdit. (Pêche illégale, GoFast ect...)
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Cohérence RP :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Vous n'avez pas le droit de divulguer des informations internes de la Police !</li>
                      </ul>

                      <h3 className="text-lg font-semibold">Vente :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Il est <span className="font-bold">STRICTEMENT</span> interdit de vendre des équipements
                          Police à des civils. (lourdes sanctions en cas de non respect)
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Relations */}
              <TabsContent value="relations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Map className="h-5 w-5 text-primary" />
                      Points Illégaux et Quartiers Chauds
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-500">Points illégaux :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Les forces de l'ordre ne peuvent pas chercher les points de drogues, ni même les camper une
                          fois découverts (sauf exception division) qui ont le droit de passer de temps à autre afin de
                          vérifier les points.
                        </li>
                        <li>
                          Il est interdit de camper ou de tourner fréquemment autour des points de drogue sauf DOA
                          (traitement + fabrication).
                        </li>
                        <li>
                          Vous avez le droit de vous y rendre mais cela doit être fait uniquement au bout d'un certain
                          temps (référez vous à vos lead divisions), vous devez le notifier dans un salon discord afin
                          que vos collègues n'y retournent pas de suite non plus.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Quartier chaud :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Lors d'une interpellation dans un quartier chaud il vaut mieux faire au plus vite afin
                          d'éviter de créer des tensions.
                        </li>
                        <li>
                          Les quartiers ne sont pas des zones de non droits pour les agents de Police, il est dans leur
                          droit que de passer dans les quartiers lorsqu'ils sont en course poursuite ou alors
                          patrouille.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">À surveiller :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Le Go Fast et la pêche illégale sont des points sur lesquels vous pouvez effectuer des
                          vérifications fréquemment !
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Relation Police vs Joueurs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-950/20 border border-blue-600/30 rounded-md">
                        <p className="text-blue-400 font-semibold">
                          Il est interdit de braquer un Policier en service sauf :
                        </p>
                      </div>

                      <ul className="space-y-2 list-disc pl-6">
                        <li>En cas de sécurisation des Leads: OG ou Jefe & Double OG ou Bras droit.</li>
                        <li>En cas d'attaque de convoi de fonds/brinks/prisonniers.</li>
                        <li>
                          En cas de sécurisation d'une arme lourde (avec une forte valeur monétaire : n'en abusez pas).
                        </li>
                        <li>
                          En cas d'événement mais l'annoncer au préalable aux référents Police afin de s'assurer qu'on
                          puisse surveiller cela.
                        </li>
                        <li>
                          Prenez en compte que la Police est une force de défense supérieur c'est-à-dire que vous devez
                          avoir peur d'un agent de police.
                        </li>
                      </ul>

                      <div className="p-4 bg-red-950/20 border border-red-600/30 rounded-md">
                        <p className="text-red-500 font-semibold">Le fear Police est à respecter dans son ensemble.</p>
                      </div>

                      <div className="p-4 bg-blue-950/20 border border-blue-600/30 rounded-md">
                        <p className="text-blue-400 font-semibold">
                          Il est interdit de faire du copbaït (consiste à venir narquer les policiers dans l'unique but
                          d'engager une course poursuite ou une scène police).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Siren className="h-5 w-5 text-primary" />
                      Interdictions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Il est interdit de nuire au course poursuite dans leur ensemble et par conséquent de tenter de
                          rentrer volontairement dans les véhicules de Police afin de créer volontairement des
                          accidents.
                        </li>
                        <li>Il est interdit de détruire ses items durant une procédure avec la Police.</li>
                        <li>Il est interdit de rentrer dans une instance.</li>
                      </ul>

                      <div className="p-4 bg-blue-950/20 border border-blue-600/30 rounded-md">
                        <p className="text-blue-400 italic">
                          Sachez que si vous le faites une perquisition, descente pourra être autorisée.
                        </p>
                      </div>

                      <div className="p-4 bg-blue-950/20 border border-blue-600/30 rounded-md">
                        <p className="text-blue-400 font-semibold">
                          Lorsque la police arrive sur une scène illégale, la première réaction à avoir est de fuir !
                        </p>
                      </div>

                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Les plans pneus et le fait de faire les pneus des agents de police est strictement interdit.
                        </li>
                        <li>
                          Il est interdit de fuir à l'eau avec le véhicule afin de terminer une scène police (sauf
                          accord du staff).
                        </li>
                        <li>
                          Si quelqu'un est arrêté il est impossible de faire une prise d'otage pour négocier sa
                          libération, une arrestation est définitive.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldAlert className="h-5 w-5 text-primary" />
                      Relation Police vs Illégal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-500">Fusillade :</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>
                          Fusillade/Tirs lorsqu'une fusillade est en cours, si un EMS intervient et vous réanime vous
                          avez interdiction de participer à nouveau à la fusillade en cours, vous avez été blessé et
                          vous devez agir en conséquence.
                        </li>
                        <li>
                          Lorsqu'il y a des tirs dans une zone, la zone est placée en "defcon" durant 20 minutes; par
                          conséquent si vous êtes sur les lieux au moment de l'arrivée des policiers ils ont le droit de
                          vous fouiller.
                        </li>
                        <li>Trash au Sol & comportement inapproprié INTERDIT !</li>
                        <li>
                          Il vous est STRICTEMENT interdit de trash une personne qui est au sol, même s'il s'agit de
                          votre ami, ce n'est pas tolérable.
                        </li>
                        <li>
                          Les agents des forces de l'ordre n'ont pas le droit de trash, provoquer ou avoir des
                          comportements déplacés.
                        </li>
                        <li>
                          De plus nous ne souhaitons pas qu'il y ait des insinuations du style: "vous êtes la pire
                          groupe", "vous allez pas durer, vous allez prendre l'avion rapidement"
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold">Fusillade :</h3>
                      <div className="p-4 bg-blue-950/20 border border-blue-600/30 rounded-md">
                        <p className="text-blue-400">
                          Vous devez jouer votre fear, vous ne pouvez pas tout simplement intervenir dans une fusillade.
                          Vous devez avoir peur de la mort et vous faire abattre.
                        </p>
                      </div>

                      <h3 className="text-lg font-semibold">3 situations fusillades:</h3>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Vous ne voyez pas les tirs: vous ne saisissez personnes. (Rec à l'appui)</li>
                        <li>Vous voyez les tirs: vous saisissez tous le monde sans procédure. (Rec à l'appui)</li>
                        <li>
                          Vous vous faites tirer dessus: vous saisissez tous le monde et procédure. (Rec à l'appui)
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Note importante */}
            <Alert className="mt-6 bg-primary/10 border-primary/30">
              <ShieldAlert className="h-5 w-5 text-primary" />
              <AlertDescription>
                Ces règlements sont en vigueur pour tous les membres de la LSPD et du BCSO. Le non-respect de ces règles
                peut entraîner des sanctions disciplinaires, allant jusqu'à la révocation.
              </AlertDescription>
            </Alert>
          </div>
        </main>
      </div>
    </div>
  )
}
