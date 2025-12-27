'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const mockProjects = [
  {
    id: '1',
    title: { fr: 'Étude sur le paludisme', en: 'Malaria study' },
    description: { fr: 'Recherche sur les stratégies de prévention du paludisme dans la zone rurale.', en: 'Research on malaria prevention strategies in rural areas.' },
    domain: 'infectious_disease',
    status: 'ongoing',
  },
  {
    id: '2',
    title: { fr: 'Surveillance des maladies chroniques', en: 'Chronic disease surveillance' },
    description: { fr: 'Suivi à long terme des maladies non transmissibles dans la population.', en: 'Long-term monitoring of non-communicable diseases in the population.' },
    domain: 'non_transmissible',
    status: 'ongoing',
  },
  {
    id: '3',
    title: { fr: 'Interventions nutritionnelles', en: 'Nutritional interventions' },
    description: { fr: 'Évaluation des programmes de nutrition infantile.', en: 'Evaluation of child nutrition programs.' },
    domain: 'interventions',
    status: 'completed',
  },
]

export default function ResearchPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {language === 'fr' ? 'Recherche & Projets' : 'Research & Projects'}
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            {language === 'fr'
              ? 'Découvrez nos projets de recherche actifs et terminés'
              : 'Discover our active and completed research projects'}
          </p>

          <div className="space-y-6">
            {mockProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title[language]}</CardTitle>
                      <CardDescription>{project.description[language]}</CardDescription>
                    </div>
                    <Badge variant={project.status === 'ongoing' ? 'default' : 'secondary'}>
                      {project.status === 'ongoing'
                        ? (language === 'fr' ? 'En cours' : 'Ongoing')
                        : (language === 'fr' ? 'Terminé' : 'Completed')}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
