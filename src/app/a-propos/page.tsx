'use client'

import { Activity, Calendar, Users, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/components/LanguageProvider'

const timelineEvents = [
  {
    year: '2009',
    title: { fr: 'Création du site HDSS', en: 'HDSS site creation' },
    description: { fr: 'Le Taabo HDSS est créé par le Centre Suisse de Recherches Scientifiques en Côte d\'Ivoire (CSRS).', en: 'Taabo HDSS is established by the Swiss Center for Scientific Research in Côte d\'Ivoire (CSRS).' },
  },
  {
    year: '2010',
    title: { fr: 'Première collecte de données', en: 'First data collection' },
    description: { fr: 'Lancement de la première collecte de données démographiques dans la zone.', en: 'Launch of the first demographic data collection in the area.' },
  },
  {
    year: '2015',
    title: { fr: 'Expansion de la zone', en: 'Area expansion' },
    description: { fr: 'Extension de la zone de surveillance pour inclure plus de villages.', en: 'Extension of the surveillance area to include more villages.' },
  },
  {
    year: '2020',
    title: { fr: 'Publication de 100 articles', en: '100 publications milestone' },
    description: { fr: 'Atteinte du cap de 100 articles scientifiques publiés.', en: 'Reaching the milestone of 100 scientific publications.' },
  },
  {
    year: '2024',
    title: { fr: '15 ans de surveillance', en: '15 years of surveillance' },
    description: { fr: 'Célébration de 15 ans de surveillance continue de la santé et de la démographie.', en: 'Celebration of 15 years of continuous health and demographic surveillance.' },
  },
]

const objectives = [
  {
    icon: Users,
    title: { fr: 'Surveillance Démographique', en: 'Demographic Surveillance' },
    description: { fr: 'Collecte régulière de données sur les naissances, décès, migrations et structure familiale.', en: 'Regular collection of data on births, deaths, migrations, and family structure.' },
  },
  {
    icon: Activity,
    title: { fr: 'Surveillance Sanitaire', en: 'Health Surveillance' },
    description: { fr: 'Suivi des indicateurs de santé, des maladies et des interventions médicales.', en: 'Monitoring health indicators, diseases, and medical interventions.' },
  },
  {
    icon: Target,
    title: { fr: 'Recherche Scientifique', en: 'Scientific Research' },
    description: { fr: 'Support aux recherches sur les maladies infectieuses, non transmissibles et interventions de santé.', en: 'Support for research on infectious diseases, non-communicable diseases, and health interventions.' },
  },
  {
    icon: Calendar,
    title: { fr: 'Interventions de Santé', en: 'Health Interventions' },
    description: { fr: 'Évaluation de l\'impact des programmes de santé et interventions communautaires.', en: 'Evaluation of the impact of health programs and community interventions.' },
  },
]

export default function AboutPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {language === 'fr' ? 'À propos du Taabo HDSS' : 'About Taabo HDSS'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'fr'
                ? 'Découvrez notre mission, notre historique et notre impact dans la recherche sur la santé en Côte d\'Ivoire.'
                : 'Discover our mission, history, and impact in health research in Ivory Coast.'}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  {language === 'fr' ? 'Notre Mission' : 'Our Mission'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p>
                  {language === 'fr'
                    ? 'Le Taabo HDSS (Health and Demographic Surveillance System) est un site de recherche et de surveillance créé en 2009 par le Centre Suisse de Recherches Scientifiques en Côte d\'Ivoire (CSRS) et ses partenaires.'
                    : 'Taabo HDSS (Health and Demographic Surveillance System) is a research and surveillance site established in 2009 by the Swiss Center for Scientific Research in Côte d\'Ivoire (CSRS) and its partners.'}
                </p>
                <p>
                  {language === 'fr'
                    ? 'Notre mission est de mener une surveillance démographique et sanitaire continue à travers la collecte régulière de données axées sur les aspects démographiques et les indicateurs de santé.'
                    : 'Our mission is to conduct continuous demographic and health surveillance through regular data collection focused on demographic aspects and health indicators.'}
                </p>
                <p>
                  {language === 'fr'
                    ? 'Nous soutenons la recherche sur les maladies infectieuses, non transmissibles et les interventions de santé, afin d\'améliorer les politiques de santé publiques et les conditions de vie des populations.'
                    : 'We support research on infectious diseases, non-communicable diseases, and health interventions, to improve public health policies and living conditions of populations.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'fr' ? 'Nos Objectifs' : 'Our Objectives'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'fr'
                  ? 'Les piliers de notre activité de recherche et de surveillance'
                  : 'The pillars of our research and surveillance activities'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <objective.icon className="h-6 w-6 text-primary" />
                      {objective.title[language]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {objective.description[language]}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'fr' ? 'Notre Historique' : 'Our History'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'fr'
                  ? 'Les étapes clés de notre développement depuis 2009'
                  : 'Key milestones of our development since 2009'}
              </p>
            </div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex gap-4 md:gap-8">
                  <div className="flex flex-col items-center">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      {event.year}
                    </Badge>
                    {index < timelineEvents.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-4" />
                    )}
                  </div>
                  <Card className="flex-1">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {event.title[language]}
                      </h3>
                      <p className="text-muted-foreground">
                        {event.description[language]}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'fr' ? 'Notre Impact' : 'Our Impact'}
              </h2>
              <p className="text-lg opacity-90">
                {language === 'fr'
                  ? 'Chiffres clés et réalisations depuis notre création'
                  : 'Key figures and achievements since our establishment'}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">
                  {language === 'fr' ? 'Années de surveillance' : 'Years of surveillance'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-sm opacity-90">
                  {language === 'fr' ? 'Publications' : 'Publications'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">75K+</div>
                <div className="text-sm opacity-90">
                  {language === 'fr' ? 'Population suivie' : 'Population tracked'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-sm opacity-90">
                  {language === 'fr' ? 'Projets de recherche' : 'Research projects'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'fr' ? 'Créé avec le soutien de' : 'Created with the support of'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Centre Suisse de Recherches Scientifiques en Côte d'Ivoire (CSRS)
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Badge variant="outline" className="text-base px-6 py-3">
                CSRS
              </Badge>
              <Badge variant="outline" className="text-base px-6 py-3">
                Université de Bâle
              </Badge>
              <Badge variant="outline" className="text-base px-6 py-3">
                INDEPTH Network
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
