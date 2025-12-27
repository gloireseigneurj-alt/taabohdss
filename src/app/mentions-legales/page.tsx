'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/components/LanguageProvider'

export default function MentionsLegalesPage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'fr' 
              ? 'Informations légales et réglementaires'
              : 'Legal and regulatory information'}
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'fr' ? 'Éditeur du site' : 'Site Publisher'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Taabo HDSS</p>
                <p className="text-muted-foreground">
                  Centre Suisse de Recherches Scientifiques en Côte d'Ivoire (CSRS)
                  <br />
                  08 BP 841 Abidjan 08
                  <br />
                  Côte d'Ivoire
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">
                  {language === 'fr' ? 'Contact' : 'Contact'}
                </p>
                <p className="text-muted-foreground">
                  Email: info@taabohdss.ci
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'fr' ? 'Propriété intellectuelle' : 'Intellectual Property'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                {language === 'fr'
                  ? 'L\'ensemble des contenus (textes, images, graphiques, logos, etc.) présents sur ce site sont la propriété exclusive du Taabo HDSS ou de ses partenaires. Toute reproduction, distribution, transmission ou stockage du contenu sans autorisation écrite préalable est strictement interdit.'
                  : 'All contents (texts, images, graphics, logos, etc.) present on this website are the exclusive property of Taabo HDSS or its partners. Any reproduction, distribution, transmission or storage of content without prior written permission is strictly prohibited.'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'fr' ? 'Limitation de responsabilité' : 'Limitation of Liability'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                {language === 'fr'
                  ? 'Le Taabo HDSS s\'efforce de fournir des informations exactes et à jour sur ce site. Cependant, il ne garantit pas l\'exactitude, la complétude ou l\'actualité des informations. Le Taabo HDSS ne peut être tenu responsable des dommages directs ou indirects résultant de l\'accès ou de l\'utilisation de ce site.'
                  : 'Taabo HDSS strives to provide accurate and up-to-date information on this website. However, it does not guarantee the accuracy, completeness or timeliness of the information. Taabo HDSS shall not be liable for any direct or indirect damages resulting from access to or use of this website.'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'fr' ? 'Liens externes' : 'External Links'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                {language === 'fr'
                  ? 'Ce site peut contenir des liens vers des sites externes. Le Taabo HDSS n\'est pas responsable du contenu de ces sites tiers et n\'endosse pas leur contenu ou leurs politiques.'
                  : 'This website may contain links to external websites. Taabo HDSS is not responsible for the content of these third-party websites and does not endorse their content or policies.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
