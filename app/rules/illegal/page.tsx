import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertTriangle,
  Users,
  Pill,
  Briefcase,
  Building,
  PenIcon as Gun,
  ShieldAlert,
  HandIcon as HandcuffIcon,
  Handshake,
  BikeIcon as Motorcycle,
  Video,
  DollarSign,
  Banknote,
  Truck,
  Flame,
  User,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

export default function IllegalRPRulesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-destructive">Règles RP Illégales</h1>
            <Separator className="mb-6" />

            <Alert className="mb-6 border-destructive/50 bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <AlertTitle>Avis Important</AlertTitle>
              <AlertDescription>
                Ces règles régissent les activités de roleplay criminel. Rappelez-vous que toutes les actions
                criminelles doivent toujours adhérer aux directives générales de roleplay et aux règles du serveur.
              </AlertDescription>
            </Alert>

            <Tabs defaultValue="principes" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
                <TabsTrigger value="principes">Principes Généraux</TabsTrigger>
                <TabsTrigger value="activites">Activités Criminelles</TabsTrigger>
                <TabsTrigger value="interactions">Interactions</TabsTrigger>
                <TabsTrigger value="equipement">Équipement & Ressources</TabsTrigger>
              </TabsList>

              {/* Principes Généraux */}
              <TabsContent value="principes" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      Points Importants & Interdictions Générales
                    </CardTitle>
                    <CardDescription>
                      Règles fondamentales à respecter pour toutes les activités illégales
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-destructive flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" /> Interdictions Générales
                        </h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Retour en quartier après poursuite :</span> Pas de retour
                            quartier après une course-poursuite, avec la police ou un groupe.
                          </li>
                          <li>
                            <span className="font-medium">Mensonges sur blessures :</span> Ne mentez pas sur les
                            blessures, évitez les fausses allégations et ne campez pas un quartier.
                          </li>
                          <li>
                            <span className="font-medium">Trash-talk :</span> Évitez le trash-talk sans raison valable.
                            Soyez fairplay envers les autres joueurs.
                          </li>
                          <li>
                            <span className="font-medium">Copbaït :</span> Il est interdit de faire du copbaït
                            (provoquer les policiers dans le seul but d'engager une course poursuite).
                          </li>
                          <li>
                            <span className="font-medium">Destruction d'items :</span> Il est interdit de détruire ses
                            items durant une procédure avec la Police.
                          </li>
                          <li>
                            <span className="font-medium">Fuite en instance :</span> Il est interdit de rentrer dans une
                            instance pour échapper à la police.
                          </li>
                        </ul>
                      </div>

                      <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-yellow-500 flex items-center gap-2">
                          <Handshake className="h-5 w-5" /> Alliances & Relations Entre Groupes
                        </h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Interdiction d'alliance générale :</span> Il est interdit de
                            créer des alliances (entre Indépendant, PF, gang ou orga), sauf pour des raisons
                            commerciales.
                          </li>
                          <li>
                            <span className="font-medium">Partage d'informations :</span> Les échanges d'informations
                            entre groupes sont autorisés.
                          </li>
                          <li>
                            <span className="font-medium">Alliance par situation :</span> Une alliance par histoire
                            uniquement. Tu ne peux t'allier qu'avec un seul groupe pour une situation spécifique.
                          </li>
                          <li>
                            <span className="font-medium">Limitation contre la police :</span> Deux groupes maximum
                            contre la police lors d'actions coordonnées.
                          </li>
                        </ul>
                        <div className="mt-3 bg-yellow-500/10 p-3 rounded-md text-sm italic">
                          Exemple : Si les Familles ont un conflit avec les Ballas, ils ne peuvent s'allier qu'avec un
                          groupe. Celui-ci ne pourra pas changer tout au long de la confrontation peu importe les aléas
                          du RP. Il faudra attendre de changer de scène/confrontation pour pouvoir changer d'allié.
                        </div>
                      </div>

                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-blue-500 flex items-center gap-2">
                          <Motorcycle className="h-5 w-5" /> Règles sur l'utilisation des véhicules
                        </h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Motos interdites :</span> L'utilisation des motos est
                            interdite pour les braquages, la vente de drogue et toute activité impliquant la police
                            (sauf pour les MC dans le cadre d'un CVC).
                          </li>
                          <li>
                            <span className="font-medium">Véhicules interdits pour braquages :</span>
                            <ul className="space-y-1 list-disc pl-6 mt-1">
                              <li>Véhicules super sportifs (même les véhicules boutiques)</li>
                              <li>Véhicules d'entreprise ou de location</li>
                              <li>Fuite par l'eau avec un bateau (négociable mais tenue de plongée interdite)</li>
                            </ul>
                          </li>
                          <li>
                            <span className="font-medium">Plans mules :</span> Autorisés uniquement avec des véhicules
                            type mule/vans, après 5-7 minutes de course poursuite minimum.
                          </li>
                          <li>
                            <span className="font-medium">Plans pneus :</span> Autorisés seulement en cas de courses
                            poursuite avec de gros enjeux (braquage pacifique, prise d'otage multiple).
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-purple-500 flex items-center gap-2">
                          <Video className="h-5 w-5" /> Les Best Off & Contenu Médiatique
                        </h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Approbation requise :</span> Accord des référents illégaux
                            avant publication.
                          </li>
                          <li>
                            <span className="font-medium">Contenu autorisé :</span>
                            <ul className="space-y-1 list-disc pl-6 mt-1">
                              <li>Moments drôles, mises en situation, image positive du groupe et du serveur</li>
                              <li>Maximum 50% de scènes de GF, contextualisées</li>
                            </ul>
                          </li>
                          <li>
                            <span className="font-medium">Contenu interdit :</span>
                            <ul className="space-y-1 list-disc pl-6 mt-1">
                              <li>Vidéos exclusivement axées sur les conflits (GF)</li>
                              <li>Commentaires, musiques provocantes ou contenu incitant à la haine</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Flame className="h-5 w-5 text-orange-500" />
                      Fear RP & Comportement
                    </CardTitle>
                    <CardDescription>
                      Règles concernant le respect du Fear RP et le comportement attendu
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-orange-500">Fear RP & Respect</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Fear Police :</span> Prenez en compte que la Police est une
                            force de défense supérieure. Vous devez avoir peur d'un agent de police.
                          </li>
                          <li>
                            <span className="font-medium">Fear Otage :</span> Il est interdit de ne pas respecter le
                            "Fear Otage", c'est-à-dire ignorer le risque de mort RP pour le joueur pris en otage.
                          </li>
                          <li>
                            <span className="font-medium">Exceptions au Fear :</span> Le fear RP n'est pas obligatoire
                            face aux armes suivantes : clé anglaise, lampe torche, marteau, pioche et club de golf.
                          </li>
                        </ul>
                      </div>

                      <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-red-500">Comportements Interdits</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Trash au sol :</span> Il est strictement interdit de trash une
                            personne qui est au sol, même s'il s'agit de votre ami.
                          </li>
                          <li>
                            <span className="font-medium">Provocation :</span> Les insinuations du style "vous êtes le
                            pire groupe", "vous allez pas durer" sont interdites.
                          </li>
                          <li>
                            <span className="font-medium">Tenues :</span> Portez une tenue cohérente avec votre
                            personnage ou groupe. Il est strictement interdit de porter un gilet pare-balles factice.
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-blue-500">Fusillade & Situations de Combat</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Après réanimation :</span> Si un EMS vous réanime pendant une
                            fusillade, vous avez interdiction de participer à nouveau à la fusillade en cours.
                          </li>
                          <li>
                            <span className="font-medium">Zone Defcon :</span> Lorsqu'il y a des tirs dans une zone, la
                            zone est placée en "defcon" durant 20 minutes. Si vous êtes sur les lieux à l'arrivée des
                            policiers, ils ont le droit de vous fouiller.
                          </li>
                          <li>
                            <span className="font-medium">Tir lors de prise d'otages :</span> Il est interdit de tirer
                            lorsque le groupe adverse a des otages (risque de mort RP des otages).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Activités Criminelles */}
              <TabsContent value="activites" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-destructive" />
                      Braquages
                    </CardTitle>
                    <CardDescription>Règles concernant les différents types de braquages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-blue-500">Types de Braquages</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                          <div className="border rounded-lg p-3">
                            <h4 className="font-medium text-blue-500">Supérettes & ATM</h4>
                            <ul className="space-y-1 list-disc pl-5 mt-1 text-sm">
                              <li>Pas de limite par semaine</li>
                              <li>Véhicules standards autorisés</li>
                              <li>Négociations simples</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h4 className="font-medium text-blue-500">Fleeca & Bijouteries</h4>
                            <ul className="space-y-1 list-disc pl-5 mt-1 text-sm">
                              <li>Limite de 2 par semaine par groupe</li>
                              <li>Préparation plus élaborée</li>
                              <li>Négociations plus complexes</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h4 className="font-medium text-blue-500">Pacifique Bank</h4>
                            <ul className="space-y-1 list-disc pl-5 mt-1 text-sm">
                              <li>Braquage sous dossier uniquement</li>
                              <li>Préparation très élaborée</li>
                              <li>Négociations complexes</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h4 className="font-medium text-blue-500">Limitations</h4>
                            <ul className="space-y-1 list-disc pl-5 mt-1 text-sm">
                              <li>Pas de braquage en zone safe</li>
                              <li>Respect du Mass RP</li>
                              <li>Préparation adéquate requise</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-red-500">Interdictions Spécifiques</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Loot otages :</span> Il est interdit de loot les otages.
                          </li>
                          <li>
                            <span className="font-medium">Armes interdites :</span> Interdit d'utiliser : clé anglaise,
                            lampe torche, marteau et pioche.
                          </li>
                          <li>
                            <span className="font-medium">Négociateur police :</span> Interdiction de PO un négociateur
                            police durant une scène de braquage.
                          </li>
                          <li>
                            <span className="font-medium">Braquage service public :</span>
                            <ul className="space-y-1 list-disc pl-6 mt-1">
                              <li>Braquage d'EMS en service : Interdit</li>
                              <li>Braquage membre du Gouvernement : Strictement interdit</li>
                              <li>Faux appels pour piéger : Interdit</li>
                              <li>Braquage sur point d'entreprise : Interdit</li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-green-500">Conseils & Bonnes Pratiques</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Préparation :</span> Assurez-vous d'avoir un plan de fuite
                            viable et des véhicules appropriés.
                          </li>
                          <li>
                            <span className="font-medium">Négociation :</span> Soyez clair dans vos demandes et donnez
                            du temps aux forces de l'ordre pour répondre.
                          </li>
                          <li>
                            <span className="font-medium">Otages :</span> Traitez vos otages avec un minimum de respect,
                            cela facilitera les négociations.
                          </li>
                          <li>
                            <span className="font-medium">Fuite :</span> Ayez plusieurs plans de secours en cas d'échec
                            du plan principal.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Pill className="h-5 w-5 text-green-500" />
                      Drogues & Trafic
                    </CardTitle>
                    <CardDescription>
                      Règles concernant la production, le transport et la vente de substances illicites
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-green-500 flex items-center gap-2">
                            <Truck className="h-5 w-5" /> Récolte & Transport
                          </h3>
                          <ul className="space-y-2 list-disc pl-6 mt-2">
                            <li>
                              Toutes récoltes, production et transfert de drogue doivent être faits dans des véhicules
                              de catégorie Vans.
                            </li>
                            <li>
                              Les indépendants/petites frappes peuvent collecter des matières premières pour les gangs &
                              organisations contre compensation financière.
                            </li>
                          </ul>
                        </div>

                        <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-green-500 flex items-center gap-2">
                            <Flame className="h-5 w-5" /> Production
                          </h3>
                          <ul className="space-y-2 list-disc pl-6 mt-2">
                            <li>
                              <span className="font-medium">Gangs :</span> Peuvent produire Weed, Extasie.
                            </li>
                            <li>
                              <span className="font-medium">Organisations :</span> Peuvent produire Cock, Meth, LSD
                              etc...
                            </li>
                          </ul>
                        </div>

                        <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-green-500 flex items-center gap-2">
                            <Banknote className="h-5 w-5" /> Vente
                          </h3>
                          <ul className="space-y-2 list-disc pl-6 mt-2">
                            <li>
                              <span className="font-medium">Chaîne de distribution :</span>
                              <ul className="space-y-1 list-disc pl-6 mt-1">
                                <li>Organisations → Gangs</li>
                                <li>Gangs → Petites frappes/Indépendants</li>
                              </ul>
                            </li>
                            <li>
                              <span className="font-medium">Vente aux PNJ :</span> Autorisée pour tous sauf
                              organisations.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-red-500">Restrictions & Interdictions</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Gangs dans la rue :</span> Les Gangs ne vendent pas leurs
                            propres drogues dans la rue.
                          </li>
                          <li>
                            <span className="font-medium">Organisations :</span> Peuvent vendre uniquement des drogues
                            événements dans la rue.
                          </li>
                          <li>
                            <span className="font-medium">Vente interdite :</span>
                            <ul className="space-y-1 list-disc pl-6 mt-1">
                              <li>À moto, vélo, et quad (sauf MC avec accord)</li>
                              <li>En Zone Safe</li>
                            </ul>
                          </li>
                          <li>
                            <span className="font-medium">Points illégaux :</span> Interdit de braquer les points GoFast
                            et points de revente de pêche illégale.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Interactions */}
              <TabsContent value="interactions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HandcuffIcon className="h-5 w-5 text-yellow-500" />
                      Prises d'Otage & Rançons
                    </CardTitle>
                    <CardDescription>Règles concernant les prises d'otage, négociations et rançons</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-yellow-500">Conditions & Limitations</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Raisons valables :</span> Pour braquer quelqu'un, vous devez
                            avoir de réelles raisons RP (vous ne pouvez pas le braquer sans raison).
                          </li>
                          <li>
                            <span className="font-medium">Contexte approprié :</span>
                            <ul className="space-y-1 list-disc pl-6 mt-1">
                              <li>Conflit RP et/ou scène de braquage</li>
                              <li>Attention aux zones de Mass RP</li>
                              <li>Pas de braquage en zone safe</li>
                            </ul>
                          </li>
                          <li>
                            <span className="font-medium">Rançon :</span>
                            <ul className="space-y-1 list-disc pl-6 mt-1">
                              <li>Maximum  par otage</li>
                              <li>Maximum  par prise d'otage</li>
                              <li>Évitez les abus de demandes</li>
                            </ul>
                          </li>
                          <li>
                            <span className="font-medium">Objets personnels :</span> Autorisation de voler chaînes,
                            lunettes, habits (sans abus).
                          </li>
                        </ul>
                      </div>

                      <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-red-500">Interdictions Spécifiques</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Loot d'armes :</span> Interdit de looter une arme sur un
                            joueur (sauf accord du Staff).
                          </li>
                          <li>
                            <span className="font-medium">Téléphone :</span> Vous pouvez prendre le téléphone mais devez
                            le rendre. Interdit de supprimer contacts/informations.
                          </li>
                          <li>
                            <span className="font-medium">Racket aléatoire :</span> Le racket de joueurs au hasard est
                            interdit. Autorisé uniquement avec motivations RP.
                          </li>
                          <li>
                            <span className="font-medium">Limite de loot :</span> Maximum 50% des items lors d'un
                            racket.
                          </li>
                          <li>
                            <span className="font-medium">Retrait forcé :</span> Interdit de forcer un joueur à retirer
                            de l'argent de sa banque.
                          </li>
                          <li>
                            <span className="font-medium">Points protégés :</span> Interdit de voler sur points de pêche
                            illégale, GoFast, vente d'objets illégaux, zones safes.
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-blue-500">Rendez-vous & Négociations</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Instances :</span> Interdit d'organiser des rendez-vous
                            illégaux dans des instances.
                          </li>
                          <li>
                            <span className="font-medium">Sécurité des otages :</span> Interdit de tirer quand le groupe
                            adverse a des otages.
                          </li>
                          <li>
                            <span className="font-medium">Munitions en CVC :</span> Interdit de récupérer des munitions
                            pendant une prise d'otage en CVC.
                          </li>
                          <li>
                            <span className="font-medium">Timing :</span> Après un rendez-vous, attendre 5 minutes et
                            être à +2km pour prendre des otages.
                          </li>
                          <li>
                            <span className="font-medium">Otages existants :</span> Interdit de tenter de prendre des
                            otages si le groupe adverse en a déjà.
                          </li>
                        </ul>
                      </div>

                      <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-orange-500">Conséquences & Mort RP</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Mort RP possible :</span> Un otage peut subir une mort RP s'il
                            ne montre pas de peur ou si son groupe ne se présente pas à la négociation.
                          </li>
                          <li>
                            <span className="font-medium">Tirs autorisés :</span> Autorisés sous certaines conditions
                            (manque de respect, si le groupe avec otages tire). Fusillades interdites durant
                            rendez-vous.
                          </li>
                          <li>
                            <span className="font-medium">Rush otages :</span> Il est interdit de précipiter une prise
                            d'otages.
                          </li>
                          <li>
                            <span className="font-medium">Faux otages :</span> Il est interdit de prendre de faux
                            otages.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-blue-500" />
                      Arnaques & Transactions
                    </CardTitle>
                    <CardDescription>
                      Règles concernant les transactions, arnaques et prêts entre joueurs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-blue-500">Transactions & Arnaques</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Arnaques interdites :</span> Toute forme d'arnaque (fausses
                            ventes d'armes, biens immobiliers, drogues) est contraire aux règles.
                          </li>
                          <li>
                            <span className="font-medium">Transactions véhicules :</span> Prises en compte seulement si
                            l'acheteur n'a pas eu la possibilité de vérifier au préalable.
                          </li>
                          <li className="italic text-sm">
                            Exemple : Si le vendeur prétend que le véhicule possède certaines performances, l'acheteur
                            peut se rendre avec lui au garage pour vérification.
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-purple-500">Prêts d'Items & Armes</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Responsabilité RP :</span> Le prêt d'armes est géré en RP. Si
                            un joueur abuse de votre confiance, le staff n'interviendra pas.
                          </li>
                          <li>
                            <span className="font-medium">Récupération :</span> Vous êtes en droit de récupérer vos
                            biens par des moyens illégaux RP.
                          </li>
                          <li>
                            <span className="font-medium">Exceptions :</span>
                            <ul className="space-y-1 list-disc pl-6 mt-1">
                              <li>Prêt entre groupes officiels illégaux (PF officielle, Gang, Organisation)</li>
                              <li>Prêt d'un chef à son membre</li>
                            </ul>
                          </li>
                          <li>
                            <span className="font-medium">Propriétés :</span> Cette règle ne s'applique pas aux vols
                            dans les propriétés.
                          </li>
                        </ul>
                      </div>

                      <Alert className="bg-red-500/10 border-red-500/30">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <AlertDescription>
                          Il est interdit de transformer ces pratiques en business. Toute personne abusant de ces règles
                          sera sanctionnée.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Équipement & Ressources */}
              <TabsContent value="equipement" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gun className="h-5 w-5 text-purple-500" />
                      Armes & Munitions
                    </CardTitle>
                    <CardDescription>
                      Règles concernant la possession, l'utilisation et le commerce d'armes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-purple-500">Armes Blanches</h3>
                          <div className="mt-3 space-y-3">
                            <div>
                              <h4 className="font-medium">Armes légales :</h4>
                              <p className="text-sm text-muted-foreground">
                                Batte de baseball, Club de golf, Clé anglaise, Couteau, Cran d'arrêt, Marteau, Pied de
                                biche, Queue de billard, Poing américain
                              </p>
                              <p className="text-xs italic mt-1">
                                Si vous n'en faites pas usage, ces armes ne vous seront pas saisies
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium">Armes illégales :</h4>
                              <p className="text-sm text-muted-foreground">
                                Matraque, Machette, Tesson de bouteille, Hachette, Hache, Dague
                              </p>
                              <p className="text-xs italic mt-1">
                                Même sans usage, elles peuvent être saisies en cas de délit ou lors d'une palpation en
                                defcon
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-purple-500">Possession & Limitations</h3>
                          <ul className="space-y-2 list-disc pl-6 mt-2">
                            <li>
                              <span className="font-medium">Vente restreinte :</span> Organisations et gangs interdits
                              de vendre armes automatiques ou lourdes aux PF/Indépendants.
                            </li>
                            <li>
                              <span className="font-medium">Achat interdit :</span> Interdit d'acheter des armes non
                              autorisées par le règlement pour votre statut.
                            </li>
                            <li>
                              <span className="font-medium">Nombre d'armes :</span> Maximum deux armes sur vous (ex: un
                              tec9 et un Glock).
                            </li>
                          </ul>
                          <div className="mt-3 bg-purple-500/10 p-3 rounded-md text-sm italic">
                            Seuls les PF officiels, gangs et organisations sont autorisés à acheter et revendre tout
                            type d'arme.
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-blue-500">Statuts & Autorisations</h3>
                        <p className="mt-2 mb-4">
                          Les armes accessibles dépendent de votre statut (Indépendant, Petite frappe, Petite frappe
                          officielle, Gang ou Organisation).
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="border rounded-lg p-3">
                            <h4 className="font-medium text-blue-500">Indépendants</h4>
                            <Badge className="mt-1 mb-2">Restrictions Maximales</Badge>
                            <ul className="space-y-1 list-disc pl-5 text-sm">
                              <li>Armes blanches légales</li>
                              <li>Armes de poing basiques</li>
                              <li>Pas d'armes automatiques</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h4 className="font-medium text-blue-500">Petites Frappes</h4>
                            <Badge className="mt-1 mb-2">Restrictions Modérées</Badge>
                            <ul className="space-y-1 list-disc pl-5 text-sm">
                              <li>Armes blanches légales et illégales</li>
                              <li>Armes de poing avancées</li>
                              <li>Pas d'armes lourdes</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h4 className="font-medium text-blue-500">Gangs & Organisations</h4>
                            <Badge className="mt-1 mb-2">Peu de Restrictions</Badge>
                            <ul className="space-y-1 list-disc pl-5 text-sm">
                              <li>Toutes armes blanches</li>
                              <li>Armes automatiques</li>
                              <li>Armes lourdes (selon statut)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      Ressources & Économie
                    </CardTitle>
                    <CardDescription>
                      Règles concernant l'économie illégale et la gestion des ressources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-green-500">Limitations Financières</h3>
                        <ul className="space-y-2 list-disc pl-6 mt-2">
                          <li>
                            <span className="font-medium">Rançons :</span>
                            <ul className="space-y-1 list-disc pl-6 mt-1">
                              <li>Maximum 5 000$ par otage</li>
                              <li>Maximum 15 000$ par prise d'otage</li>
                            </ul>
                          </li>
                          <li>
                            <span className="font-medium">Racket :</span> Maximum 50% des items lors d'un racket (argent
                            ou cargaison).
                          </li>
                          <li>
                            <span className="font-medium">Braquages :</span> Les gains doivent être proportionnels au
                            risque et à l'effort.
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-blue-500">Hiérarchie Économique</h3>
                        <p className="mt-2 mb-4">
                          L'économie illégale suit une structure hiérarchique stricte qui doit être respectée :
                        </p>
                        <div className="relative">
                          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500/20"></div>
                          <div className="space-y-6 relative">
                            <div className="flex items-start">
                              <div className="absolute left-8 w-8 h-0.5 bg-blue-500/20"></div>
                              <div className="bg-blue-500/10 rounded-full p-2 z-10">
                                <Briefcase className="h-5 w-5 text-blue-500" />
                              </div>
                              <div className="ml-12 bg-card/50 p-3 rounded-lg border flex-1">
                                <h4 className="font-medium">Organisations</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Au sommet de la chaîne. Produisent les drogues les plus complexes (Cock, Meth, LSD).
                                  Vendent aux gangs mais pas aux PNJ.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="absolute left-8 w-8 h-0.5 bg-blue-500/20"></div>
                              <div className="bg-blue-500/10 rounded-full p-2 z-10">
                                <Users className="h-5 w-5 text-blue-500" />
                              </div>
                              <div className="ml-12 bg-card/50 p-3 rounded-lg border flex-1">
                                <h4 className="font-medium">Gangs</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Niveau intermédiaire. Produisent Weed et Extasie. Achètent aux organisations et
                                  vendent aux petites frappes/indépendants.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="absolute left-8 w-8 h-0.5 bg-blue-500/20"></div>
                              <div className="bg-blue-500/10 rounded-full p-2 z-10">
                                <User className="h-5 w-5 text-blue-500" />
                              </div>
                              <div className="ml-12 bg-card/50 p-3 rounded-lg border flex-1">
                                <h4 className="font-medium">Petites Frappes & Indépendants</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Base de la pyramide. Achètent aux gangs et vendent aux PNJ. Peuvent collecter des
                                  matières premières pour les échelons supérieurs.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Alert className="bg-yellow-500/10 border-yellow-500/30">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        <AlertDescription>
                          Le respect de cette hiérarchie est essentiel pour maintenir l'équilibre économique du serveur.
                          Les infractions peuvent entraîner des sanctions.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Note importante */}
            <Alert className="mt-6 bg-destructive/10 border-destructive/30">
              <ShieldAlert className="h-5 w-5 text-destructive" />
              <AlertDescription>
                Ces règlements sont en vigueur pour toutes les activités illégales sur le serveur. Le non-respect de ces
                règles peut entraîner des sanctions administratives, allant jusqu'au bannissement.
              </AlertDescription>
            </Alert>
          </div>
        </main>
      </div>
    </div>
  )
}
