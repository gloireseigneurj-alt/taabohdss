'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from 'lucide-react'

const mockNews = [
  {
    id: '1',
    title: { fr: 'Nouveau projet de recherche sur le paludisme', en: 'New malaria research project' },
    excerpt: { fr: 'Le Taabo HDSS lance une nouvelle étude sur la prévention du paludisme.', en: 'Taabo HDSS launches a new malaria prevention study.' },
    category: 'research',
    date: '2025-12-15',
  },
  {
    id: '2',
    title: { fr: 'Publication du rapport annuel 2024', en: 'Annual report 2024 published' },
    excerpt: { fr: 'Découvrez les principales activités et résultats de l\'année 2024.', en: 'Discover the main activities and results of 2024.' },
    category: 'report',
    date: '2025-12-10',
  },
]

export default function NewsPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {language === 'fr' ? 'Actualités' : 'News'}
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            {language === 'fr'
              ? 'Dernières nouvelles et annonces'
              : 'Latest news and announcements'}
          </p>

          <div className="space-y-6">
            {mockNews.map((news) => (
              <Card key={news.id}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(news.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                    </span>
                  </div>
                  <CardTitle>{news.title[language]}</CardTitle>
                  <CardDescription>{news.excerpt[language]}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
