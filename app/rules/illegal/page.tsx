"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Users,
  FileText,
  Shield,
  Sword,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Crown,
  Target,
  Clock,
  MapPin,
} from "lucide-react"

export default function IllegalRulesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          Règlements Illégaux
        </h1>
        <p className="text-lg text-muted-foreground">
          Toutes les règles concernant les activités illégales sur New Last RP
        </p>
      </div>

      <div className="space-y-8">
        {/* Créer un groupe illégal */}
        <Card className="border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Users className="h-6 w-6" />
              Créer un groupe illégal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-blue-700">
              Ici vous retrouverez toutes les informations afin de créer votre groupe illégal.
            </p>

            <Alert className="border-blue-300 bg-blue-100">
              <FileText className="h-4 w-4" />
              <AlertDescription className="text-blue-800">
                <strong>
                  Afin de créer votre groupe illégal, il vous faut tout d'abord constituer un dossier puis ensuite
                  ouvrir un ticket sur le discord illégal.
                </strong>
              </AlertDescription>
            </Alert>

            <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Votre dossier doit comprendre :
              </h4>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                  Une présentation de votre groupe
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                  Votre vision du RP illégal
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                  Des photos de vos tenues
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                  Une présentation des véhicules que vous allez utiliser
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                  Les objectifs de votre groupe et ce que vous souhaitez apporter sur le serveur
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                  Une photo de la localisation de votre QG <em>(Si disponible.)</em>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                  Le lexique de votre groupe s'il en possède, style biker/tribu ou gang latino
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                  Être 15 minimum
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Règles générales */}
        <Card className="border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <Shield className="h-6 w-6" />
              Règles générales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Crown className="h-4 w-4 mt-0.5 text-yellow-600" />
                <p className="text-red-700">
                  Un chef de groupe illégale a le droit de décider de la vie ou de la mort de ses membres, dès lors que
                  la personne dispose des rôles IG. Le loot est possible dans le cas où une scène a été faite.
                  <span className="text-red-600 font-medium">
                    (Les rôles Discord ne sont pas pris en compte, car cela relève du HRP.)
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 text-orange-600" />
                <div>
                  <p className="text-red-700">
                    Si votre groupe reçoit un avertissement, celui-ci sera enlevé lorsque le délai sera terminé.
                  </p>
                  <p className="text-red-600 font-bold">Au bout de 3 avertissements, le groupe est WIPE.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Sword className="h-4 w-4 mt-0.5 text-red-600" />
                <div>
                  <p className="text-red-700">
                    Il est très important de savoir que n'importe quelle arme à feu a le même impact chargé ou non. Une
                    arme est avant tout un moyen de pression.
                  </p>
                  <p className="text-red-600 font-medium">Vous devez donc privilégier le dialogue au gunfight</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-orange-600" />
                <div>
                  <p className="text-red-700">
                    Lorsque vous êtes <strong>en semaine de test</strong>,{" "}
                    <span className="text-red-600 font-medium">
                      il est interdit pour le groupe de tirer et de braquer un autre groupe, ou sur un point de drogue.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <Alert className="border-red-300 bg-red-100">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-red-800">
                <strong>
                  En présence de toute force de l'ordre, les groupes illégaux doivent obligatoirement fuir et jouer un
                  fear.
                </strong>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Activités autorisées */}
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <CheckCircle className="h-6 w-6" />
              Activités autorisées
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Lors d'une scène, le <span className="text-orange-600 font-medium">retour hôpital</span> est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  si au bout de 20min après la fin de la scène aucun EMS n'est intervenu.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  <span className="text-orange-600 font-medium">/porter un cadavre</span> est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  uniquement afin d'aider les EMS après un GF.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Les <span className="text-orange-600 font-medium">véhicules de la catégorie OFF-ROAD</span> (import ou
                  non) sont{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    LES SEULS AUTORISÉS
                  </Badge>{" "}
                  à traverser des chemins de terre, montagnes, et sont les seuls à pouvoir aller à Cayo.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  La <span className="text-orange-600 font-medium">demande de radio</span> lors d'un braquage est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉE
                  </Badge>{" "}
                  <span className="text-red-600 font-medium">
                    (l'otage n'a pas le droit de mentir sur la fréquence.)
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Si la <span className="text-orange-600 font-medium">personne est masquée</span>, il est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  de reconnaître ses tatouages, signe de gang, etc. Également de distinguer si c'est une femme ou un
                  homme, de comprendre son accent.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Il est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  de <span className="text-orange-600 font-medium">voler des véhicules civils</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Il est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  de faire une alliance <span className="text-orange-600 font-medium">pour faire du business</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Il est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  de <span className="text-orange-600 font-medium">vendre des armes à feu</span> obtenu illégalement.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Il est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  de <span className="text-orange-600 font-medium">loot uniquement 50%</span> de la marchandise ou de
                  l'argent sale/liquide sur une personne.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Il est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  de <span className="text-orange-600 font-medium">loot uniquement 50%</span> d'un coffre de
                  laboratoire.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Le nombre de véhicules{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  en convoi est de : <br />
                  <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                    6 + 1 backeuse (2 personnes max) (pour un total de 26 places)
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Il est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  de <span className="text-orange-600 font-medium">braquer des personnes</span> seulement si vous êtes
                  égaux ou en supériorité numérique.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Un groupe est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  à <span className="text-orange-600 font-medium">posséder 2 entreprises</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Il est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  de <span className="text-orange-600 font-medium">torturer quelqu'un</span>, dans la limite du
                  raisonnable. (Aucun membre coupé ne sera toléré.)
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Il est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  de <span className="text-orange-600 font-medium">fouiller une mallette</span> et de prendre la moitié
                  de son contenu.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Il est{" "}
                  <Badge variant="outline" className="text-green-700 border-green-600">
                    AUTORISÉ
                  </Badge>{" "}
                  de <span className="text-orange-600 font-medium">PO plusieurs groupes en même temps</span>{" "}
                  <span className="text-orange-600 font-medium">uniquement</span> s'ils sont présents sur un même point
                  chaud et que votre groupe est clairement en supériorité numérique. <br />
                  <span className="text-blue-600 font-medium">(Exemple : Zone de vente, points de drogues)</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activités interdites */}
        <Card className="border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <XCircle className="h-6 w-6" />
              Activités interdites
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert className="border-red-500 bg-red-100 mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-red-800">
                <strong>
                  Il est strictement INTERDIT de braquer et de tirer sur la zone de kevlar. Si vous ne respectez pas
                  cette règle, vous risquez un WIPE de votre groupe.
                </strong>
              </AlertDescription>
            </Alert>
            <div className="grid gap-2">
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Quand une <span className="text-orange-600 font-medium">personne est masquée</span>, il est{" "}
                  <Badge variant="destructive">INTERDIT</Badge> de la reconnaître ou affirmer que c'est une personne en
                  particulier.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Les <span className="text-orange-600 font-medium">tenues NE PERMETTENT PAS</span> d'affirmer que "X"
                  personne est liée à un crime.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">retourner à votre quartier/QG</span> pour éviter une
                  scène.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">
                    braquer une supérette comme diversion pour une autre
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Le <span className="text-orange-600 font-medium">face à face</span> est{" "}
                  <Badge variant="destructive">INTERDIT</Badge>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">BAIT</span>, que ce soit du côté illégal comme légal.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">dépouiller le cadavre</span> d'un joueur sur une scène.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">voler le véhicule</span> d'un joueur{" "}
                  <span className="text-orange-600 font-medium">pour le cacher</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">
                    faire une alliance entre groupe/organisation illégal pour faire la guerre à un autre
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  La <span className="text-orange-600 font-medium">vente ou donation des points illégaux</span> aux
                  forces de l'ordre est <Badge variant="destructive">INTERDITE</Badge>{" "}
                  <span className="text-orange-600 font-medium">SAUF</span> pour négocier des aménagements de peines.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">tirer en ville</span>, si vous souhaitez prendre
                  quelqu'un en otage, vous devez être dans une ruelle à l'abris des regards.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">loot les individus</span> et leurs véhicules si les
                  personnes sont coma.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">loot l'arme d'une personne</span>, sauf si vous avez eu
                  l'accord d'un GF ou un ticket.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">
                    forcer un joueur à vous faire un virement bancaire
                  </span>{" "}
                  ou de lui demander de retirer de l'argent.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">loot un joueur qui travaille</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">sauter dans l'eau avec son véhicule</span> en course
                  poursuite/en faisait de la drogue.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">STRICTEMENT INTERDIT</Badge> d'
                  <span className="text-orange-600 font-medium">arnaquer une personne</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">revendiquer une tenue ou des véhicules</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">fouiller un véhicule de la LSPD/BCSO</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">quitter un groupe sans avoir WIPE</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">revenir dans le même groupe</span> si vous l'avez quitté
                  il y a moins de 2 semaines.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">"backstab"</span> une fois que le GF est lancé.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">farm avec une moto</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">porter une tenue de plongée en GF</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">se tirer dessus sur un événement camion blindé</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Les <span className="text-orange-600 font-medium">rendez-vous illégaux devant ou dans les QG</span>{" "}
                  sont <Badge variant="destructive">INTERDITS</Badge>,{" "}
                  <span className="text-yellow-600 font-medium">une zone neutre doit être utilisée</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">
                    faire du RP PED si vous êtes sous bracelet électronique
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">se transformer en PED pour esquiver la LSPD</span>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prise d'otage */}
        <Card className="border-orange-200 bg-orange-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800">
              <Target className="h-6 w-6" />
              Prise d'otage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-2">
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> d'
                  <span className="text-orange-600 font-medium">attendre autour d'un QG</span> (dans les rues alentour)
                  pour suivre quelqu'un puis le PO.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">
                    PO quelqu'un s'il est visible depuis son QG et à moins de 200m
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">
                    PO quelqu'un qui sort d'un événement ou d'un rendez-vous à moins de 1km du lieu
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">
                    prendre en otage quelqu'un à l'intérieur d'une zone de MassRP
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">
                    braquer en ville, HORMIS pour une scène avec des raisons valables
                  </span>
                  . <br />
                  <span className="text-blue-600 font-medium">
                    Exemple : Fleeca, Banque Centrale, kidnapping (avec des vrais motifs RP qui vous seront demandés si
                    besoin) → vous avez 30s pour braquer quelqu'un
                  </span>{" "}
                  <br />
                  <em className="text-gray-600">
                    Cependant, si vous arrivez à attirer une personne dans une sombre ruelle, vous avez l'autorisation
                    de la braquer.
                  </em>
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">
                    PO sur une PO tant que la négociation n'est pas fini
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est <Badge variant="destructive">INTERDIT</Badge> de{" "}
                  <span className="text-orange-600 font-medium">
                    re PO le même groupe après avoir fait une interaction avec celui-ci
                  </span>
                  . <br />→ Il faut attendre minimum 1 heure.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Règles supplémentaires */}
        <Card className="border-purple-200 bg-purple-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <AlertTriangle className="h-6 w-6" />
              Règles supplémentaires importantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-red-300 bg-red-100">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-red-800">
                <strong>Les trash seront sévèrement punis, tout trash ou allusion HRP est interdit.</strong>
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de <span className="text-orange-600 font-medium">revenir sur zone après un GF</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de{" "}
                  <span className="text-orange-600 font-medium">remettre un kevlar pendant un GF</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de <span className="text-orange-600 font-medium">tirer sur un rendez-vous</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de <span className="text-orange-600 font-medium">braquer sur rendez-vous</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit d'
                  <span className="text-orange-600 font-medium">utiliser un véhicule pendant un GF sauf pour fuir</span>
                  . (retake interdit)
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit d'
                  <span className="text-orange-600 font-medium">
                    exploser les véhicules, de les voler ou même de voler ce qui est à l'intérieur
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  <span className="text-orange-600 font-medium">1 PO minimum</span> → jouer la PO en priorité, si NoFear
                  ou prise de pose du groupe adverse durant les prochains tapages = possibilité de tirer (pensez à
                  prendre un rec du NoFear)
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  Il est obligatoire de{" "}
                  <span className="text-orange-600 font-medium">drop lors du tapage de véhicule</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de{" "}
                  <span className="text-orange-600 font-medium">
                    tirer s'il n'y a pas eu d'interaction entre les 2 groupes
                  </span>{" "}
                  (dialogue ou PO avec négociation). Il est donc interdit de déclencher une fusillade sans raison.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de{" "}
                  <span className="text-orange-600 font-medium">prendre en otage quand le GF a déjà commencé</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de{" "}
                  <span className="text-orange-600 font-medium">tirer dans un laboratoire ou de rentrer dedans</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-blue-600" />
                <p>
                  <span className="text-orange-600 font-medium">
                    Après une fusillade, vous devez attendre 2 heures pour faire une interaction avec ce même groupe
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <p>
                  <span className="text-orange-600 font-medium">
                    Des plans pneus peuvent être autorisés à partir de 15 minutes de course poursuite minimum
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de{" "}
                  <span className="text-orange-600 font-medium">
                    prendre vos voitures et motos quand un GF est déclenché !
                  </span>{" "}
                  Une fois que le GF a commencé, vous sortez tous des véhicules.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de <span className="text-orange-600 font-medium">venir par vague sur un GF</span>, si
                  une voiture arrive après que le GF a commencé, il ne doit pas tirer.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de{" "}
                  <span className="text-orange-600 font-medium">
                    re tirer ou revenir sur scène après une réanimation
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de{" "}
                  <span className="text-orange-600 font-medium">tirer sur des EMS sans raison valable</span>, vous ne
                  pouvez pas les PO sans autorisation d'un admin ou plus pour une scène. De même pour les agents du
                  gouvernement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attaques de zone */}
        <Card className="border-yellow-200 bg-yellow-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-800">
              <MapPin className="h-6 w-6" />
              Attaques de zone
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-yellow-300 bg-yellow-100">
              <Clock className="h-4 w-4" />
              <AlertDescription className="text-yellow-800">
                <strong>La limite d'attaque de zone est fixée à 1 attaque par semaine.</strong>
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de{" "}
                  <span className="text-orange-600 font-medium">sortir de la zone pour les assaillants</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de{" "}
                  <span className="text-orange-600 font-medium">remonter en véhicule après avoir drop</span>.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 mt-0.5 text-red-600" />
                <p>
                  Il est interdit de{" "}
                  <span className="text-orange-600 font-medium">se rekev en pleine attaque de zone</span>.
                </p>
              </div>
            </div>

            <Alert className="border-red-300 bg-red-100">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-red-800">
                <strong>
                  Si votre groupe fait plus d'un day off dans la semaine, votre zone pourra être attaquée malgré votre
                  absence.
                </strong>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        {/* Activités criminelles */}
        <Card className="border-orange-200 bg-orange-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800">
              <Target className="h-6 w-6" />
              Braquages
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-orange-500 flex items-center gap-2">
                <Clock className="h-5 w-5" /> Cooldowns de Braquage
              </h3>
              <p className="text-orange-700 mb-3">Un cooldown est mis en place entre chaque braquage (par groupe) :</p>
              <ul className="space-y-2 list-disc pl-6 mt-2">
                <li>
                  <span className="font-medium">Fleeca :</span> 1 braquage tous les 7 jours
                </li>
                <li>
                  <span className="font-medium">Bijouterie :</span> 1 braquage tous les 7 jours
                </li>
                <li>
                  <span className="font-medium">Banque Pacific :</span> 1 braquage tous les 14 jours
                </li>
              </ul>
              <Alert className="mt-3 border-orange-300 bg-orange-100">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-orange-800">
                  <strong>IMPORTANT :</strong> Le cooldown est appliqué par groupe, il faudra donc bien organiser vos
                  équipes et vos actions en conséquences.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
