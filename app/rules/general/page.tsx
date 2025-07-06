import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Info, Check, X } from "lucide-react"

export default function GeneralRulesPage() {
  return (
    <div className="container max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Règles Générales</h1>
      <Separator className="mb-6" />

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Bienvenue sur GalacticRP V2 ! Notre serveur est dédié à offrir une expérience de roleplay réaliste et
              immersive. Ces règles générales s'appliquent à tous les membres, indépendamment de leur rôle ou position
              au sein de la communauté.
            </p>
            <p>
              En rejoignant notre serveur, vous acceptez de suivre ces règles. Le non-respect peut entraîner des
              avertissements, des bannissements temporaires ou une exclusion permanente de la communauté.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Règles Essentielles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Respecter Tous les Membres</p>
                  <p className="text-muted-foreground">
                    Traitez tous les membres avec respect, indépendamment de leur rôle, expérience ou origine. Le
                    harcèlement, la discrimination et l'intimidation sont strictement interdits.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Pas de Metagaming</p>
                  <p className="text-muted-foreground">
                    L'utilisation d'informations obtenues en dehors du roleplay (Discord, streams, etc.) dans le
                    roleplay est strictement interdite.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Pas de Powergaming</p>
                  <p className="text-muted-foreground">
                    Forcer des scénarios sur d'autres joueurs ou créer des situations irréalistes qui vous donnent un
                    avantage injuste n'est pas autorisé.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Valoriser Votre Vie (VDM)</p>
                  <p className="text-muted-foreground">
                    Agissez toujours comme si votre personnage valorisait sa vie. Se mettre dans des situations
                    inutilement dangereuses sans roleplay approprié est interdit.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Pas de Random Death Match (RDM)</p>
                  <p className="text-muted-foreground">
                    Tuer des joueurs sans initiation de roleplay appropriée ou raison valable est strictement interdit.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <X className="h-5 w-5 text-destructive" />
              Comportements Interdits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Exploiter des Bugs ou Glitches</p>
                  <p className="text-muted-foreground">
                    L'utilisation de bugs, glitches ou exploits pour obtenir un avantage est strictement interdite.
                    Signalez tout bug que vous trouvez à l'équipe d'administration.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Contenu Offensant ou Inapproprié</p>
                  <p className="text-muted-foreground">
                    Le partage ou la création de contenu offensant, explicite ou inapproprié n'est pas autorisé. Cela
                    inclut, sans s'y limiter, le langage ou les images racistes, sexistes ou discriminatoires.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Briser le Personnage</p>
                  <p className="text-muted-foreground">
                    Briser constamment le personnage ou utiliser la communication hors personnage (HRP) dans les canaux
                    de roleplay perturbe l'immersion et est déconseillé.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Contourner la Modération</p>
                  <p className="text-muted-foreground">
                    Tenter de contourner les actions de modération, comme créer des comptes alternatifs pour contourner
                    les bannissements, entraînera une exclusion permanente de la communauté.
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
