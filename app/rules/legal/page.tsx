import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Briefcase, BadgeCheck, Scale } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function LegalRPRulesPage() {
  return (
    <div className="container max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Règles RP Légales</h1>
      <Separator className="mb-6" />

      <Alert className="mb-6 border-primary/50 bg-primary/10">
        <BadgeCheck className="h-5 w-5 text-primary" />
        <AlertTitle>Directives de Roleplay Légal</AlertTitle>
        <AlertDescription>
          Ces règles régissent toutes les entreprises légales, agences gouvernementales et citoyens respectueux des lois
          dans l'environnement de roleplay.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Propriété & Exploitation d'Entreprise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Les entreprises légales sont une pierre angulaire de notre communauté de roleplay. Elles fournissent des
              services, des opportunités d'emploi et une stabilité économique à la ville.
            </p>

            <ul className="space-y-4 mt-4">
              <li className="border-l-2 border-primary pl-4 py-1">
                <p className="font-medium">Enregistrement d'Entreprise</p>
                <p className="text-muted-foreground">
                  Toutes les entreprises doivent être correctement enregistrées auprès du gouvernement de la ville.
                  Exploiter une entreprise non enregistrée est considéré comme illégal.
                </p>
              </li>

              <li className="border-l-2 border-primary pl-4 py-1">
                <p className="font-medium">Gestion des Employés</p>
                <p className="text-muted-foreground">
                  Les propriétaires d'entreprise doivent tenir des registres d'emploi appropriés et payer des impôts sur
                  tous les revenus. Les employés doivent être traités équitablement et rémunérés de manière appropriée.
                </p>
              </li>

              <li className="border-l-2 border-primary pl-4 py-1">
                <p className="font-medium">Heures d'Ouverture</p>
                <p className="text-muted-foreground">
                  Les entreprises doivent maintenir des heures d'ouverture cohérentes et informer les clients de tout
                  changement. Les entreprises abandonnées peuvent être sujettes à une reprise par la ville.
                </p>
              </li>

              <li className="border-l-2 border-primary pl-4 py-1">
                <p className="font-medium">Pratiques Concurrentielles</p>
                <p className="text-muted-foreground">
                  Bien que la concurrence soit encouragée, les entreprises doivent s'engager dans des pratiques
                  équitables. La fixation des prix, les comportements monopolistiques et le sabotage sont interdits.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Conduite Professionnelle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Les professionnels tels que les avocats, médecins, journalistes et autres praticiens agréés doivent
              adhérer à des codes de conduite spécifiques.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-card/50 p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Professionnels Juridiques</h3>
                <ul className="space-y-2 text-sm">
                  <li>Doivent réussir l'examen du barreau</li>
                  <li>Ne peuvent pas représenter des clients en conflit</li>
                  <li>Doivent maintenir la confidentialité des clients</li>
                  <li>Ne peuvent pas présenter sciemment de fausses preuves</li>
                </ul>
              </div>

              <div className="bg-card/50 p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Professionnels Médicaux</h3>
                <ul className="space-y-2 text-sm">
                  <li>Doivent être agréés par le conseil médical</li>
                  <li>Doivent fournir des soins à tous les patients</li>
                  <li>Doivent maintenir la confidentialité des patients</li>
                  <li>Ne peuvent pas effectuer de procédures sans consentement</li>
                </ul>
              </div>

              <div className="bg-card/50 p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Journalistes</h3>
                <ul className="space-y-2 text-sm">
                  <li>Doivent vérifier les informations avant publication</li>
                  <li>Doivent protéger les sources confidentielles</li>
                  <li>Ne peuvent pas fabriquer des histoires ou des preuves</li>
                  <li>Doivent respecter les lois sur la vie privée</li>
                </ul>
              </div>

              <div className="bg-card/50 p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Agents Immobiliers</h3>
                <ul className="space-y-2 text-sm">
                  <li>Doivent être agréés par la ville</li>
                  <li>Ne peuvent pas s'engager dans des pratiques discriminatoires</li>
                  <li>Doivent divulguer les défauts des propriétés</li>
                  <li>Ne peuvent pas s'engager dans des transactions frauduleuses</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Litiges Civils & Résolution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Les litiges civils entre citoyens ou entreprises doivent être résolus par les voies légales appropriées.
              La ville offre plusieurs méthodes de résolution des litiges.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Système Judiciaire</h3>
                <p className="text-sm text-muted-foreground">
                  La ville maintient un système judiciaire pour résoudre les litiges. Les affaires sont entendues par un
                  juge ou un jury selon la nature du litige. Les décisions de justice sont contraignantes et doivent
                  être respectées par toutes les parties.
                </p>
              </div>

              <div className="p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Médiation</h3>
                <p className="text-sm text-muted-foreground">
                  Pour les litiges mineurs, des services de médiation sont disponibles. Un tiers neutre aidera à
                  faciliter une résolution acceptable pour toutes les parties impliquées.
                </p>
              </div>

              <div className="p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Contrats & Accords</h3>
                <p className="text-sm text-muted-foreground">
                  Tous les contrats et accords doivent être correctement documentés et témoignés. Les accords verbaux
                  sont reconnus mais peuvent être difficiles à faire respecter sans preuve.
                </p>
              </div>

              <div className="p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Sanctions pour Non-Conformité</h3>
                <p className="text-sm text-muted-foreground">
                  Le non-respect des ordonnances judiciaires ou des accords de règlement peut entraîner des amendes, la
                  saisie d'actifs ou d'autres sanctions déterminées par le tribunal.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
