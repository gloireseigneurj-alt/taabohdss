'use client'

import Link from 'next/link'
import { ArrowRight, Users, FileText, Activity, MapPin, Calendar, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/components/LanguageProvider'

// Données mockées pour la page d'accueil
const mockStats = [
  { icon: Users, label: { fr: 'Ménages suivis', en: 'Households tracked' }, value: '12,500+' },
  { icon: Activity, label: { fr: 'Population', en: 'Population' }, value: '75,000+' },
  { icon: FileText, label: { fr: 'Publications', en: 'Publications' }, value: '150+' },
  { icon: Calendar, label: { fr: 'Années de surveillance', en: 'Years of surveillance' }, value: '15+' },
]

const mockNews = [
  {
    id: '1',
    title: { fr: 'Nouveau projet de recherche sur le paludisme', en: 'New malaria research project' },
    excerpt: { fr: 'Le Taabo HDSS lance une nouvelle étude sur la prévention du paludisme dans la région.', en: 'Taabo HDSS launches a new study on malaria prevention in the region.' },
    category: 'research',
    date: '2025-12-15',
    imageUrl: '/placeholder-news-1.jpg',
  },
  {
    id: '2',
    title: { fr: 'Publication du rapport annuel 2024', en: 'Annual report 2024 published' },
    excerpt: { fr: 'Découvrez les principales activités et résultats de l\'année 2024.', en: 'Discover the main activities and results of 2024.' },
    category: 'report',
    date: '2025-12-10',
    imageUrl: '/placeholder-news-2.jpg',
  },
  {
    id: '3',
    title: { fr: 'Formation du personnel local', en: 'Local staff training' },
    excerpt: { fr: 'Session de formation sur les nouvelles méthodes de collecte de données.', en: 'Training session on new data collection methods.' },
    category: 'news',
    date: '2025-12-05',
    imageUrl: '/placeholder-news-3.jpg',
  },
]

const mockResources = [
  {
    id: '1',
    title: { fr: 'Policy Brief - Maladies Non Transmissibles', en: 'Policy Brief - Non-Communicable Diseases' },
    type: 'policy_brief',
    year: 2024,
    downloads: 245,
  },
  {
    id: '2',
    title: { fr: 'Rapport Annuel 2023', en: 'Annual Report 2023' },
    type: 'report',
    year: 2024,
    downloads: 389,
  },
  {
    id: '3',
    title: { fr: 'Données Démographiques 2020-2024', en: 'Demographic Data 2020-2024' },
    type: 'data',
    year: 2024,
    downloads: 521,
  },
]

export default function HomePage() {
  const { language, t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              {t('hero.subtitle')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/a-propos/">
                <Button size="lg" className="text-base">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact/">
                <Button size="lg" variant="outline" className="text-base">
                  {t('nav.contact')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mockStats.map((stat, index) => (
              <Card key={index} className="text-center border-2">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label[language]}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'fr' ? 'À propos du Taabo HDSS' : 'About Taabo HDSS'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'fr'
                  ? 'Le Taabo HDSS est un système de surveillance démographique et de santé créé en 2009 par le Centre Suisse de Recherches Scientifiques en Côte d\'Ivoire (CSRS).'
                  : 'Taabo HDSS is a health and demographic surveillance system established in 2009 by the Swiss Center for Scientific Research in Côte d\'Ivoire (CSRS).'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    {t('about.mission')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {language === 'fr'
                      ? 'Mener une surveillance démographique et sanitaire continue pour soutenir la recherche sur les maladies.'
                      : 'Conduct continuous demographic and health surveillance to support disease research.'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {t('about.history')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {language === 'fr'
                      ? 'Créé en 2009 au centre-sud de la Côte d\'Ivoire, le site couvre une population de plus de 75 000 habitants.'
                      : 'Established in 2009 in south-central Ivory Coast, the site covers a population of over 75,000 inhabitants.'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {t('about.objectives')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {language === 'fr'
                      ? 'Soutenir la recherche sur les maladies infectieuses, non transmissibles et les interventions de santé.'
                      : 'Support research on infectious diseases, non-communicable diseases, and health interventions.'}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="/a-propos/">
                <Button size="lg" variant="outline">
                  {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">{t('nav.news')}</h2>
                <p className="text-muted-foreground">
                  {language === 'fr' ? 'Dernières actualités et annonces' : 'Latest news and announcements'}
                </p>
              </div>
              <Link href="/actualites/">
                <Button variant="ghost">
                  {language === 'fr' ? 'Voir tout' : 'View All'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {mockNews.map((news) => (
                <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-primary/30" />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {news.category}
                    </Badge>
                    <CardTitle className="line-clamp-2 text-lg">
                      {news.title[language]}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {new Date(news.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {news.excerpt[language]}
                    </p>
                    <Link href="/actualites/">
                      <Button variant="ghost" size="sm" className="w-full">
                        {language === 'fr' ? 'Lire la suite' : 'Read More'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('nav.resources')}</h2>
              <p className="text-lg text-muted-foreground">
                {language === 'fr'
                  ? 'Accédez à nos publications, rapports et données de recherche'
                  : 'Access our publications, reports, and research data'}
              </p>
            </div>

            <div className="space-y-4">
              {mockResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">
                            {resource.type}
                          </Badge>
                          <Badge variant="secondary">
                            {resource.year}
                          </Badge>
                        </div>
                        <h3 className="font-semibold mb-2">
                          {resource.title[language]}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            {resource.downloads} {language === 'fr' ? 'téléchargements' : 'downloads'}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/ressources/">
                <Button size="lg">
                  {language === 'fr' ? 'Voir toutes les ressources' : 'View All Resources'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {language === 'fr'
                ? 'Intéressé par notre travail ?'
                : 'Interested in our work?'}
            </h2>
            <p className="text-lg opacity-90">
              {language === 'fr'
                ? 'Contactez-nous pour en savoir plus sur nos projets de recherche ou pour explorer des collaborations.'
                : 'Contact us to learn more about our research projects or explore collaborations.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact/">
                <Button size="lg" variant="secondary" className="text-base">
                  {t('nav.contact')}
                </Button>
              </Link>
              <Link href="/partenaires/">
                <Button size="lg" variant="outline" className="text-base bg-transparent border-white text-white hover:bg-white/10">
                  {t('nav.partners')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
