'use client'

import { FileText, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/components/LanguageProvider'

const mockResources = [
  {
    id: '1',
    title: { fr: 'Policy Brief - Maladies Non Transmissibles', en: 'Policy Brief - Non-Communicable Diseases' },
    description: { fr: 'Analyse des tendances des maladies chroniques dans la zone d\'étude.', en: 'Analysis of chronic disease trends in the study area.' },
    type: 'policy_brief',
    year: 2024,
    category: 'santé',
    language: 'fr',
    downloads: 245,
  },
  {
    id: '2',
    title: { fr: 'Rapport Annuel 2023', en: 'Annual Report 2023' },
    description: { fr: 'Rapport complet des activités et résultats de l\'année 2023.', en: 'Complete report of 2023 activities and results.' },
    type: 'report',
    year: 2024,
    category: 'rapport',
    language: 'fr',
    downloads: 389,
  },
  {
    id: '3',
    title: { fr: 'Données Démographiques 2020-2024', en: 'Demographic Data 2020-2024' },
    description: { fr: 'Ensemble de données démographiques complètes en format CSV.', en: 'Complete demographic dataset in CSV format.' },
    type: 'data',
    year: 2024,
    category: 'données',
    language: 'fr',
    downloads: 521,
  },
  {
    id: '4',
    title: { fr: 'Article - Impact du paludisme sur la santé maternelle', en: 'Article - Malaria impact on maternal health' },
    description: { fr: 'Étude publiée dans le Journal of Tropical Medicine.', en: 'Study published in the Journal of Tropical Medicine.' },
    type: 'article',
    year: 2023,
    category: 'recherche',
    language: 'fr',
    downloads: 178,
  },
  {
    id: '5',
    title: { fr: 'Guide de Collecte de Données HDSS', en: 'HDSS Data Collection Guide' },
    description: { fr: 'Manuel détaillé des procédures de collecte de données.', en: 'Detailed manual of data collection procedures.' },
    type: 'guide',
    year: 2023,
    category: 'méthodologie',
    language: 'fr',
    downloads: 342,
  },
  {
    id: '6',
    title: { fr: 'Policy Brief - COVID-19 Response', en: 'Policy Brief - COVID-19 Response' },
    description: { fr: 'Stratégies de réponse à la pandémie dans les zones rurales.', en: 'Pandemic response strategies in rural areas.' },
    type: 'policy_brief',
    year: 2022,
    category: 'santé',
    language: 'en',
    downloads: 456,
  },
]

const typeLabels = {
  policy_brief: { fr: 'Policy Brief', en: 'Policy Brief' },
  report: { fr: 'Rapport', en: 'Report' },
  data: { fr: 'Données', en: 'Data' },
  article: { fr: 'Article', en: 'Article' },
  guide: { fr: 'Guide', en: 'Guide' },
  protocol: { fr: 'Protocole', en: 'Protocol' },
}

export default function ResourcesPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {language === 'fr' ? 'Ressources & Publications' : 'Resources & Publications'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'fr'
                ? 'Accédez à nos publications, rapports, policy briefs et données de recherche.'
                : 'Access our publications, reports, policy briefs, and research data.'}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder={
                      language === 'fr'
                        ? 'Rechercher des ressources...'
                        : 'Search resources...'
                    }
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline" className="md:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                {language === 'fr' ? 'Filtres' : 'Filters'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" className="cursor-pointer">
                {language === 'fr' ? 'Tous' : 'All'}
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Policy Briefs
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                {language === 'fr' ? 'Rapports' : 'Reports'}
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                {language === 'fr' ? 'Données' : 'Data'}
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                {language === 'fr' ? 'Articles' : 'Articles'}
              </Badge>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {mockResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">
                      {typeLabels[resource.type as keyof typeof typeLabels]?.[language] || resource.type}
                    </Badge>
                    <Badge variant="outline">
                      {resource.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    {resource.title[language]}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {resource.description[language]}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant={resource.language === 'fr' ? 'default' : 'secondary'} className="text-xs">
                        {resource.language.toUpperCase()}
                      </Badge>
                      <FileText className="h-4 w-4" />
                      <span>{resource.downloads}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      {language === 'fr' ? 'Télécharger' : 'Download'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              {language === 'fr'
                ? 'Vous ne trouvez pas ce que vous cherchez?'
                : 'Can\'t find what you\'re looking for?'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'fr'
                ? 'Contactez-nous pour obtenir de l\'aide à trouver les ressources dont vous avez besoin.'
                : 'Contact us for help finding the resources you need.'}
            </p>
            <Button size="lg" asChild>
              <a href="/contact/">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
