'use client'

import { MapPin, Users, Home, Activity } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/components/LanguageProvider'

const villages = [
  { name: 'Taabo', households: '2,500', population: '15,000' },
  { name: 'Tiémélékro', households: '1,800', population: '10,500' },
  { name: 'Ahondo', households: '1,200', population: '7,200' },
  { name: 'Kodiakoffikro', households: '950', population: '5,700' },
  { name: 'Taabo Cité', households: '1,400', population: '8,400' },
  { name: 'Lilikra', households: '800', population: '4,800' },
]

const healthFacilities = [
  { name: 'Centre de santé de Taabo', type: 'primary' },
  { name: 'Dispensaire de Tiémélékro', type: 'secondary' },
  { name: 'Poste de santé d\'Ahondo', type: 'secondary' },
]

export default function StudyAreaPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {language === 'fr' ? 'Zone d\'Étude' : 'Study Area'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'fr'
                ? 'Découvrez la zone couverte par le Taabo HDSS au centre-sud de la Côte d\'Ivoire.'
                : 'Discover the area covered by Taabo HDSS in south-central Ivory Coast.'}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'fr' ? 'Présentation Générale' : 'General Overview'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'fr'
                  ? 'Localisation et caractéristiques de la zone d\'étude'
                  : 'Location and characteristics of the study area'}
              </p>
            </div>

            <Card className="border-2 mb-8">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {language === 'fr' ? 'Localisation' : 'Location'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'fr'
                        ? 'Le Taabo HDSS est situé au centre-sud de la Côte d\'Ivoire, dans la région du Lagunes, à environ 150 km au nord-ouest d\'Abidjan. La zone d\'étude s\'étend autour du lac de Taabo, créé par le barrage hydroélectrique de Taabo.'
                        : 'Taabo HDSS is located in south-central Ivory Coast, in the Lagunes region, about 150 km northwest of Abidjan. The study area extends around Taabo Lake, created by the Taabo hydroelectric dam.'}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Activity className="h-5 w-5 text-primary" />
                      {language === 'fr' ? 'Contexte Écologique' : 'Ecological Context'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'fr'
                        ? 'La zone se caractérise par un climat tropical humide avec deux saisons : une saison des pluies (avril à novembre) et une saison sèche (décembre à mars). L\'agriculture, la pêche et l\'élevage sont les principales activités économiques.'
                        : 'The area is characterized by a humid tropical climate with two seasons: a rainy season (April to November) and a dry season (December to March). Agriculture, fishing, and livestock are the main economic activities.'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-2">75,000+</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'Population totale' : 'Total population'}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Home className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-2">12,500+</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'Ménages' : 'Households'}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-2">6</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'Villages' : 'Villages'}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Villages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'fr' ? 'Villages Couverts' : 'Covered Villages'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'fr'
                  ? 'Les villages inclus dans la zone de surveillance du Taabo HDSS'
                  : 'Villages included in the Taabo HDSS surveillance area'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {villages.map((village, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {village.name}
                      <Badge variant="secondary">
                        <MapPin className="h-3 w-3 mr-1" />
                        Village
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {language === 'fr' ? 'Ménages' : 'Households'}
                        </span>
                        <span className="font-semibold">{village.households}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {language === 'fr' ? 'Population' : 'Population'}
                        </span>
                        <span className="font-semibold">{village.population}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health Infrastructure Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'fr' ? 'Infrastructure Sanitaire' : 'Health Infrastructure'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'fr'
                  ? 'Structures de santé dans la zone d\'étude'
                  : 'Health facilities in the study area'}
              </p>
            </div>

            <div className="space-y-4">
              {healthFacilities.map((facility, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{facility.name}</h3>
                        <Badge variant={facility.type === 'primary' ? 'default' : 'secondary'}>
                          {facility.type === 'primary'
                            ? (language === 'fr' ? 'Centre primaire' : 'Primary center')
                            : (language === 'fr' ? 'Dispensaire' : 'Dispensary')}
                        </Badge>
                      </div>
                      <Activity className="h-8 w-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'fr' ? 'Carte de la Zone' : 'Area Map'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'fr'
                ? 'Localisation géographique de la zone d\'étude'
                : 'Geographic location of the study area'}
            </p>
            <Card className="border-2 p-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-muted-foreground">
                <MapPin className="h-24 w-24 text-primary/20" />
                <p className="text-lg">
                  {language === 'fr'
                    ? 'Carte interactive en cours de développement'
                    : 'Interactive map under development'}
                </p>
                <p className="text-sm">
                  {language === 'fr'
                    ? 'La zone couvre environ 600 km² autour du lac de Taabo'
                    : 'The area covers approximately 600 km² around Taabo Lake'}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
