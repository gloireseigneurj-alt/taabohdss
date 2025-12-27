'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Briefcase } from 'lucide-react'

const mockCalls = [
  {
    id: '1',
    title: { fr: 'Chercheur en Épidémiologie', en: 'Epidemiology Researcher' },
    description: { fr: 'Recherche d\'un chercheur qualifié pour rejoindre notre équipe.', en: 'Looking for a qualified researcher to join our team.' },
    type: 'job',
    deadline: '2026-01-31',
  },
  {
    id: '2',
    title: { fr: 'Stage en Santé Publique', en: 'Public Health Internship' },
    description: { fr: 'Opportunité de stage pour étudiants en santé publique.', en: 'Internship opportunity for public health students.' },
    type: 'internship',
    deadline: '2026-02-15',
  },
]

const typeLabels = {
  job: { fr: 'Emploi', en: 'Job' },
  internship: { fr: 'Stage', en: 'Internship' },
  project: { fr: 'Projet', en: 'Project' },
  funding: { fr: 'Financement', en: 'Funding' },
}

export default function CallsPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {language === 'fr' ? 'Appels à Candidatures' : 'Calls for Applications'}
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            {language === 'fr'
              ? 'Opportunités d\'emploi, stages et collaborations'
              : 'Job opportunities, internships, and collaborations'}
          </p>

          <div className="space-y-6">
            {mockCalls.map((call) => (
              <Card key={call.id}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="default" className="flex items-center gap-1">
                      {call.type === 'job' ? <Briefcase className="h-3 w-3" /> : null}
                      {typeLabels[call.type as keyof typeof typeLabels]?.[language] || call.type}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(call.deadline).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{call.title[language]}</CardTitle>
                  <CardDescription>{call.description[language]}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
