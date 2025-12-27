'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const mockTeam = [
  { name: 'Dr. Jean Koffi', position: { fr: 'Directeur', en: 'Director' }, category: 'direction' },
  { name: 'Dr. Aminata Diallo', position: { fr: 'Chercheur Senior', en: 'Senior Researcher' }, category: 'researcher' },
  { name: 'Kouassi Yao', position: { fr: 'Coordinateur Technique', en: 'Technical Coordinator' }, category: 'technical' },
]

export default function TeamPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {language === 'fr' ? 'Notre Équipe' : 'Our Team'}
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            {language === 'fr'
              ? 'Les professionnels qui font avancer notre recherche'
              : 'The professionals advancing our research'}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {mockTeam.map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.position[language]}</p>
                      <Badge variant="outline" className="mt-2">{member.category}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
