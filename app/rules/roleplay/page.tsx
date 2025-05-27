import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { User, MessageSquare, Clock, ShieldAlert, Headphones } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function RoleplayRulesPage() {
  return (
    <div className="container max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Règles de Roleplay</h1>
      <Separator className="mb-6" />

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Immersion</CardTitle>
            <CardDescription>Restez dans votre personnage à tout moment</CardDescription>
          </CardHeader>
        </Card>

        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Réalisme</CardTitle>
            <CardDescription>Agissez comme vous le feriez dans la vie réelle</CardDescription>
          </CardHeader>
        </Card>

        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Respect</CardTitle>
            <CardDescription>Respectez le roleplay des autres joueurs</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Développement du Personnage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Votre personnage est la fondation de votre expérience de roleplay. Prenez le temps de développer un
              personnage réaliste et convaincant avec une histoire, des motivations et des traits de personnalité.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Badge variant="outline">À FAIRE</Badge> Créer de la Profondeur
                </h3>
                <p className="text-sm text-muted-foreground">
                  Développez un personnage avec des forces, des faiblesses, des peurs et des aspirations. Les
                  personnages complexes créent un roleplay plus engageant.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Badge variant="destructive">À ÉVITER</Badge> Être Surpuissant
                </h3>
                <p className="text-sm text-muted-foreground">
                  Évitez de créer des personnages avec des capacités, compétences ou ressources irréalistes. Tout le
                  monde a des limites.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Badge variant="outline">À FAIRE</Badge> Permettre l'Évolution
                </h3>
                <p className="text-sm text-muted-foreground">
                  Laissez votre personnage évoluer en fonction de ses expériences. Le développement du personnage
                  devrait être un voyage.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Badge variant="destructive">À ÉVITER</Badge> Copier des Personnages
                </h3>
                <p className="text-sm text-muted-foreground">
                  Évitez de copier directement des personnages des médias. Inspirez-vous, mais créez quelque chose
                  d'original.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Directives d'Interaction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              La façon dont vous interagissez avec les autres joueurs est cruciale pour maintenir un environnement de
              roleplay positif. Ces directives assurent des interactions équitables et agréables pour tous.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Initier Correctement</h3>
                  <p className="text-sm text-muted-foreground">
                    Avant de vous engager dans un conflit ou des interactions significatives, établissez un contexte de
                    roleplay approprié. Approcher aléatoirement des joueurs avec une intention hostile sans préparation
                    est interdit.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Consentement dans les Scénarios Extrêmes</h3>
                  <p className="text-sm text-muted-foreground">
                    Pour les scénarios extrêmes (torture, contenu explicite, etc.), obtenez le consentement HRP (Hors
                    Roleplay) de tous les joueurs impliqués. Chacun a des niveaux de confort différents.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Accepter les Résultats</h3>
                  <p className="text-sm text-muted-foreground">
                    Toutes les interactions ne se dérouleront pas comme vous le souhaitez. Acceptez les défaites et les
                    revers comme faisant partie du voyage de votre personnage. Refuser de reconnaître les pertes
                    perturbe le roleplay.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Communication Appropriée</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilisez les canaux appropriés pour différents types de communication. Les conversations en
                    personnage (RP) doivent rester dans les canaux RP, tandis que les discussions HRP appartiennent aux
                    canaux HRP.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Temps et Continuité
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Maintenir une chronologie cohérente et respecter la continuité des événements est essentiel pour une
              expérience de roleplay cohérente.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-medium">Progression du Temps</h3>
                <p className="text-sm text-muted-foreground">
                  Notre serveur fonctionne sur une échelle de temps modifiée où un jour réel équivaut à environ une
                  semaine en jeu. Les événements majeurs et les jours fériés sont annoncés à l'avance.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-medium">Mémoire du Personnage</h3>
                <p className="text-sm text-muted-foreground">
                  Votre personnage doit se souvenir des interactions et événements passés. L'amnésie sélective par
                  commodité n'est pas autorisée. Si vous devez annuler (retcon) un événement, consultez toutes les
                  parties impliquées et un modérateur.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-medium">Gestion des Absences</h3>
                <p className="text-sm text-muted-foreground">
                  Si vous devez être absent pendant une période prolongée, fournissez une explication en personnage si
                  possible. Pour les absences imprévues, les modérateurs peuvent aider à établir une raison pour la
                  disparition de votre personnage.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-medium">Participation aux Événements</h3>
                <p className="text-sm text-muted-foreground">
                  Les événements à l'échelle du serveur affectent tous les personnages, qu'ils y participent ou non.
                  Restez informé des événements majeurs via les annonces et les canaux d'information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-primary" />
              Résolution des Conflits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Le conflit est une partie inévitable du roleplay, mais il doit être géré de manière appropriée pour
              assurer une expérience positive pour tous les impliqués.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-card/50 p-4 rounded-lg border">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-primary" /> Règles de Combat
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>Initiez le combat avec un contexte de roleplay approprié</li>
                  <li>Utilisez le système/les commandes de combat désignés</li>
                  <li>Acceptez les résultats déterminés par le système</li>
                  <li>Pas de déconnexion pendant un conflit (combat logging)</li>
                </ul>
              </div>

              <div className="bg-card/50 p-4 rounded-lg border">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-primary" /> Gestion des Litiges
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>Tentez de résoudre les litiges en HRP d'abord</li>
                  <li>Si non résolu, contactez un modérateur</li>
                  <li>Fournissez des captures d'écran ou des logs si disponibles</li>
                  <li>Acceptez les décisions des modérateurs</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-destructive" /> Politiques de Tolérance Zéro
              </h3>
              <p className="text-sm">Les actions suivantes entraîneront une action de modération immédiate:</p>
              <ul className="space-y-1 mt-2 text-sm">
                <li>• Harcèlement ou attaques ciblées sur les joueurs (pas les personnages)</li>
                <li>• Utilisation d'exploits ou de triches pour obtenir des avantages en roleplay</li>
                <li>• Perturbation délibérée des expériences de roleplay des autres</li>
                <li>• Partage d'informations personnelles d'autres joueurs</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Headphones className="h-5 w-5 text-primary" />
              Étiquette du Chat Vocal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Le chat vocal est une partie importante de notre expérience de roleplay. Ces directives assurent une
              communication claire et l'immersion.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Headphones className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Chat de Proximité</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilisez le chat vocal de proximité pour les conversations en personnage. Votre voix ne devrait être
                    entendue que par les personnages à une distance réaliste.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Headphones className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Voix du Personnage</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintenez une voix cohérente pour votre personnage. Bien que les modificateurs de voix soient
                    autorisés, ils ne devraient pas être perturbateurs ou difficiles à comprendre.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Headphones className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Bruit de Fond</h3>
                  <p className="text-sm text-muted-foreground">
                    Minimisez le bruit de fond et les interruptions. Utilisez l'appui-pour-parler si votre environnement
                    est bruyant. La musique ne doit être jouée que par des méthodes appropriées en jeu.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Headphones className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Canaux Vocaux HRP</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilisez les canaux vocaux HRP désignés pour les discussions hors personnage. Gardez ces
                    conversations séparées du roleplay pour maintenir l'immersion.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
