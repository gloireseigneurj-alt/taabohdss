'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const mockPartners = [
  { name: 'CSRS', description: { fr: 'Centre Suisse de Recherches Scientifiques en Côte d\'Ivoire', en: 'Swiss Center for Scientific Research in Côte d\'Ivoire' }, type: 'institutional' },
  { name: 'Université de Bâle', description: { fr: 'Partenaire académique de longue date', en: 'Long-term academic partner' }, type: 'international' },
  { name: 'INDEPTH Network', description: { fr: 'Réseau international de sites HDSS', en: 'International network of HDSS sites' }, type: 'international' },
]

export default function PartnersPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {language === 'fr' ? 'Nos Partenaires' : 'Our Partners'}
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            {language === 'fr'
              ? 'Les institutions qui soutiennent notre recherche'
              : 'Institutions supporting our research'}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {mockPartners.map((partner) => (
              <Card key={partner.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <Badge variant="outline">{partner.type}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{partner.description[language]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
