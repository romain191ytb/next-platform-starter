import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gamepad2, Map, Keyboard, Users, ShieldCheck, Car } from "lucide-react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

export default function GuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-primary">Guide du Jeu</h1>
            <Separator className="mb-6" />

            <Tabs defaultValue="getting-started" className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
                <TabsTrigger value="getting-started">Démarrage</TabsTrigger>
                <TabsTrigger value="controls">Contrôles</TabsTrigger>
                <TabsTrigger value="jobs">Emplois</TabsTrigger>
                <TabsTrigger value="vehicles">Véhicules</TabsTrigger>
                <TabsTrigger value="housing">Logement</TabsTrigger>
                <TabsTrigger value="commands">Commandes</TabsTrigger>
              </TabsList>

              <TabsContent value="getting-started" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gamepad2 className="h-5 w-5 text-primary" />
                      Bienvenue sur GalacticRP V2 
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Bienvenue sur GalacticRP V2 , un serveur de roleplay réaliste où vous pouvez vivre votre vie virtuelle
                      dans une ville animée. Ce guide vous aidera à démarrer avec les bases de notre serveur.
                    </p>

                    <div className="space-y-4 mt-4">
                      <div className="border-l-2 border-primary pl-4 py-1">
                        <p className="font-medium">Étape 1: Création de Personnage</p>
                        <p className="text-muted-foreground">
                          Commencez par créer votre personnage. Choisissez un nom, une apparence et un passé qui
                          s'intègrent dans notre environnement de roleplay réaliste.
                        </p>
                      </div>

                      <div className="border-l-2 border-primary pl-4 py-1">
                        <p className="font-medium">Étape 2: Configuration Initiale</p>
                        <p className="text-muted-foreground">
                          Après avoir créé votre personnage, vous apparaîtrez à la gare routière de la ville. Visitez la
                          mairie pour vous inscrire et obtenir une pièce d'identité et postuler à votre premier emploi.
                        </p>
                      </div>

                      <div className="border-l-2 border-primary pl-4 py-1">
                        <p className="font-medium">Étape 3: Trouver un Emploi</p>
                        <p className="text-muted-foreground">
                          Commencez par un emploi légal pour gagner de l'argent. Les options incluent chauffeur de taxi,
                          livreur, pêcheur ou travailler dans des entreprises locales.
                        </p>
                      </div>

                      <div className="border-l-2 border-primary pl-4 py-1">
                        <p className="font-medium">Étape 4: Construire Votre Vie</p>
                        <p className="text-muted-foreground">
                          Au fur et à mesure que vous gagnez de l'argent, vous pouvez acheter des véhicules, louer des
                          appartements et investir dans des entreprises. Votre réputation grandira en fonction de vos
                          actions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Bases du Roleplay
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Le roleplay est la fondation de notre serveur. Voici quelques principes de base à suivre:
                    </p>

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Restez En Personnage</h3>
                          <p className="text-sm text-muted-foreground">
                            Parlez et agissez toujours comme le ferait votre personnage. Utilisez les canaux HRP
                            désignés pour la communication hors personnage.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Valorisez Votre Vie</h3>
                          <p className="text-sm text-muted-foreground">
                            Agissez comme si votre personnage valorisait sa vie. Ne vous mettez pas dans des situations
                            inutilement dangereuses sans motivation roleplay appropriée.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Respectez les Autres</h3>
                          <p className="text-sm text-muted-foreground">
                            Respectez le roleplay des autres joueurs. N'interrompez pas les scènes ou ne forcez pas les
                            interactions sans contexte approprié.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Suivez les Règles du Serveur</h3>
                          <p className="text-sm text-muted-foreground">
                            Familiarisez-vous avec toutes les règles du serveur. Elles existent pour assurer une
                            expérience positive pour tous.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="controls" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Keyboard className="h-5 w-5 text-primary" />
                      Contrôles de Base
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">Mouvement</h3>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span>Marcher</span>
                            <span className="font-mono bg-secondary px-2 rounded">Z Q S D</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Courir</span>
                            <span className="font-mono bg-secondary px-2 rounded">SHIFT + Z</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Sauter</span>
                            <span className="font-mono bg-secondary px-2 rounded">ESPACE</span>
                          </li>
                          <li className="flex justify-between">
                            <span>S'accroupir</span>
                            <span className="font-mono bg-secondary px-2 rounded">CTRL</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Interaction</h3>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span>Interagir</span>
                            <span className="font-mono bg-secondary px-2 rounded">E</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Inventaire</span>
                            <span className="font-mono bg-secondary px-2 rounded">I</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Téléphone</span>
                            <span className="font-mono bg-secondary px-2 rounded">P</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Menu d'Émotes</span>
                            <span className="font-mono bg-secondary px-2 rounded">F3</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Véhicule</h3>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span>Entrer/Sortir du Véhicule</span>
                            <span className="font-mono bg-secondary px-2 rounded">F</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Moteur Marche/Arrêt</span>
                            <span className="font-mono bg-secondary px-2 rounded">M</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Verrouiller/Déverrouiller</span>
                            <span className="font-mono bg-secondary px-2 rounded">L</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Ceinture de Sécurité</span>
                            <span className="font-mono bg-secondary px-2 rounded">B</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Communication</h3>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span>Chat Vocal</span>
                            <span className="font-mono bg-secondary px-2 rounded">V (Maintenir)</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Chat Texte</span>
                            <span className="font-mono bg-secondary px-2 rounded">T</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Radio</span>
                            <span className="font-mono bg-secondary px-2 rounded">VERR MAJ</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Commandes</span>
                            <span className="font-mono bg-secondary px-2 rounded">/aide</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="jobs" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Map className="h-5 w-5 text-primary" />
                      Emplois Disponibles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Il y a de nombreux emplois disponibles dans la ville, allant des postes de débutant aux carrières
                      avancées nécessitant des compétences et qualifications spécifiques.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">Emplois de Débutant</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <span className="font-medium">Chauffeur de Taxi:</span> Transportez des citoyens dans la
                            ville
                          </li>
                          <li>
                            <span className="font-medium">Livreur:</span> Livrez des colis aux entreprises
                          </li>
                          <li>
                            <span className="font-medium">Pêcheur:</span> Attrapez et vendez du poisson au marché
                          </li>
                          <li>
                            <span className="font-medium">Éboueur:</span> Gardez la ville propre
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">Emplois Qualifiés</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <span className="font-medium">Mécanicien:</span> Réparez et modifiez des véhicules
                          </li>
                          <li>
                            <span className="font-medium">Agent Immobilier:</span> Vendez des propriétés aux citoyens
                          </li>
                          <li>
                            <span className="font-medium">Avocat:</span> Représentez des clients dans des affaires
                            juridiques
                          </li>
                          <li>
                            <span className="font-medium">Médecin:</span> Traitez les blessures et les maladies
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">Emplois Gouvernementaux</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <span className="font-medium">Officier de Police:</span> Faites respecter la loi et protégez
                            les citoyens
                          </li>
                          <li>
                            <span className="font-medium">EMS:</span> Fournissez des services médicaux d'urgence
                          </li>
                          <li>
                            <span className="font-medium">Juge:</span> Présidez les affaires judiciaires
                          </li>
                          <li>
                            <span className="font-medium">Bureau du Maire:</span> Gouvernez la ville
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">Opportunités d'Affaires</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <span className="font-medium">Propriétaire de Restaurant:</span> Ouvrez et gérez un
                            restaurant
                          </li>
                          <li>
                            <span className="font-medium">Propriétaire de Magasin:</span> Dirigez une entreprise de
                            vente au détail
                          </li>
                          <li>
                            <span className="font-medium">Propriétaire de Boîte de Nuit:</span> Exploitez un lieu de
                            divertissement
                          </li>
                          <li>
                            <span className="font-medium">Concessionnaire Automobile:</span> Vendez des véhicules aux
                            citoyens
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="vehicles" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="h-5 w-5 text-primary" />
                      Informations sur les Véhicules
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Les véhicules sont une partie essentielle de la vie dans la ville. Voici tout ce que vous devez
                      savoir sur l'achat, l'entretien et l'utilisation des véhicules.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-2">Achat de Véhicules</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Les véhicules peuvent être achetés dans divers concessionnaires à travers la ville. Chaque
                          concessionnaire se spécialise dans différents types de véhicules:
                        </p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          <li>Premium Deluxe Motorsport - Véhicules économiques et de milieu de gamme</li>
                          <li>Luxury Autos - Voitures de sport haut de gamme et véhicules de luxe</li>
                          <li>Sandy Shores Autos - Véhicules tout-terrain et utilitaires</li>
                          <li>Magasin de Bateaux - Diverses embarcations</li>
                          <li>Concessionnaire d'Aéronefs - Hélicoptères et avions (nécessite une licence de pilote)</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Entretien des Véhicules</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Les véhicules nécessitent un entretien régulier pour fonctionner correctement:
                        </p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          <li>Faites le plein dans les stations-service quand votre réservoir est bas</li>
                          <li>Réparez les dommages dans les ateliers de mécanique</li>
                          <li>Nettoyez votre véhicule dans les stations de lavage</li>
                          <li>Faites attention à l'état du moteur et des pneus</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Stockage des Véhicules</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Vos véhicules sont stockés dans divers garages à travers la ville:
                        </p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          <li>Garages personnels à votre résidence</li>
                          <li>Garages publics dans chaque quartier</li>
                          <li>Stockage spécial pour bateaux et aéronefs</li>
                          <li>Fourrière pour les véhicules saisis ou abandonnés</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Modifications de Véhicules</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Personnalisez vos véhicules dans les ateliers de modification:
                        </p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          <li>Améliorations de performance (moteur, transmission, freins, etc.)</li>
                          <li>Modifications cosmétiques (peinture, roues, kits carrosserie, etc.)</li>
                          <li>Personnalisation intérieure</li>
                          <li>Fonctionnalités spéciales (pneus pare-balles, blindage, etc.)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="housing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Système de Logement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Trouver un endroit à appeler chez soi est une partie importante de votre établissement dans la
                      ville. Voici tout ce que vous devez savoir sur le logement.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-2">Types de Logement</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-1">Appartements</h4>
                            <p className="text-sm text-muted-foreground">
                              Options de logement abordables au centre-ville. Diverses tailles disponibles, des studios
                              aux penthouses.
                            </p>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-1">Maisons</h4>
                            <p className="text-sm text-muted-foreground">
                              Propriétés indépendantes avec jardins et garages. Disponibles dans différents quartiers
                              avec des prix variés.
                            </p>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-1">Manoirs</h4>
                            <p className="text-sm text-muted-foreground">
                              Propriétés de luxe avec de vastes terrains, piscines et garages multiples. Situées dans
                              des quartiers exclusifs.
                            </p>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-1">Propriétés Commerciales</h4>
                            <p className="text-sm text-muted-foreground">
                              Espaces commerciaux pouvant être utilisés pour des entreprises. Certains incluent des
                              quartiers d'habitation au-dessus.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Achat de Propriété</h3>
                        <p className="text-sm text-muted-foreground mb-2">Pour acheter une propriété:</p>
                        <ol className="space-y-1 text-sm list-decimal pl-5">
                          <li>Visitez une agence immobilière ou consultez les annonces immobilières</li>
                          <li>Visitez les propriétés disponibles</li>
                          <li>Faites une offre par l'intermédiaire d'un agent immobilier</li>
                          <li>Finalisez l'achat à la mairie</li>
                          <li>Recevez vos clés et l'acte de propriété</li>
                        </ol>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Caractéristiques des Propriétés</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Les propriétés sont dotées de diverses caractéristiques:
                        </p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          <li>Espace de stockage pour objets et armes</li>
                          <li>Garde-robe pour les changements de vêtements</li>
                          <li>Espace de garage pour les véhicules (varie selon la propriété)</li>
                          <li>Mobilier et décoration personnalisables</li>
                          <li>Systèmes de sécurité pour prévenir les effractions</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Gestion de Propriété</h3>
                        <p className="text-sm text-muted-foreground mb-2">En tant que propriétaire, vous devrez:</p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          <li>Payer régulièrement les taxes foncières</li>
                          <li>Entretenir votre propriété pour éviter la détérioration</li>
                          <li>Gérer l'accès en donnant des clés aux personnes de confiance</li>
                          <li>Signaler toute effraction ou dommage à la police</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="commands" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Commandes Utiles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Voici quelques commandes essentielles pour vous aider à naviguer sur le serveur et interagir avec
                      le monde.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-2">Commandes Générales</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-secondary">
                                <th className="border px-4 py-2 text-left">Commande</th>
                                <th className="border px-4 py-2 text-left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/aide</td>
                                <td className="border px-4 py-2">Affiche une liste des commandes disponibles</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/me [action]</td>
                                <td className="border px-4 py-2">Effectue une action à la troisième personne</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/faire [description]</td>
                                <td className="border px-4 py-2">Décrit quelque chose dans l'environnement</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/hrp [message]</td>
                                <td className="border px-4 py-2">Envoie un message hors roleplay</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/signaler [problème]</td>
                                <td className="border px-4 py-2">Signale un problème aux administrateurs</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Commandes d'Interaction</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-secondary">
                                <th className="border px-4 py-2 text-left">Commande</th>
                                <th className="border px-4 py-2 text-left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/inventaire</td>
                                <td className="border px-4 py-2">Ouvre votre inventaire</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/donner [id] [objet] [quantité]</td>
                                <td className="border px-4 py-2">Donne un objet à un autre joueur</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/emote [nom de l'emote]</td>
                                <td className="border px-4 py-2">Effectue une emote spécifique</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/telephone</td>
                                <td className="border px-4 py-2">Ouvre votre téléphone</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/id</td>
                                <td className="border px-4 py-2">Montre votre ID aux joueurs à proximité</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Commandes Spécifiques aux Emplois</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-secondary">
                                <th className="border px-4 py-2 text-left">Commande</th>
                                <th className="border px-4 py-2 text-left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/police</td>
                                <td className="border px-4 py-2">Ouvre le menu de police (police uniquement)</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/ems</td>
                                <td className="border px-4 py-2">Ouvre le menu EMS (EMS uniquement)</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/mecanicien</td>
                                <td className="border px-4 py-2">Ouvre le menu mécanicien (mécaniciens uniquement)</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/taxi</td>
                                <td className="border px-4 py-2">Ouvre le menu taxi (chauffeurs de taxi uniquement)</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-mono">/emploi</td>
                                <td className="border px-4 py-2">Affiche des informations sur votre emploi actuel</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
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
