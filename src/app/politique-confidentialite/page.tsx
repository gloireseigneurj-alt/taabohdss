'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/components/LanguageProvider'

export default function PolitiqueConfidentialitePage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'fr' 
              ? 'Comment nous protégeons vos données'
              : 'How we protect your data'}
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'fr' ? 'Introduction' : 'Introduction'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                {language === 'fr'
                  ? 'Le Taabo HDSS s\'engage à respecter votre vie privée et à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.'
                  : 'Taabo HDSS is committed to respecting your privacy and protecting your personal data. This privacy policy explains how we collect, use and protect your information.'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'fr' ? 'Collecte de données' : 'Data Collection'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                {language === 'fr'
                  ? 'Nous collectons les informations que vous nous fournissez volontairement par le biais de nos formulaires de contact. Ces informations incluent votre nom, adresse email, numéro de téléphone et message.'
                  : 'We collect information that you voluntarily provide to us through our contact forms. This information includes your name, email address, phone number and message.'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'fr' ? 'Utilisation des données' : 'Data Usage'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                {language === 'fr'
                  ? 'Les données que vous nous fournissez sont utilisées uniquement pour répondre à vos demandes et améliorer nos services. Nous ne partageons vos données avec des tiers sans votre consentement.'
                  : 'The data you provide to us is used only to respond to your requests and improve our services. We do not share your data with third parties without your consent.'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'fr' ? 'Sécurité des données' : 'Data Security'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                {language === 'fr'
                  ? 'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre l\'accès non autorisé, la modification ou la destruction.'
                  : 'We implement appropriate security measures to protect your personal data against unauthorized access, modification or destruction.'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'fr' ? 'Vos droits' : 'Your Rights'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                {language === 'fr'
                  ? 'Vous avez le droit d\'accéder à, de corriger, de supprimer ou de demander une copie de vos données personnelles. Pour exercer ces droits, veuillez nous contacter via email.'
                  : 'You have the right to access, correct, delete or request a copy of your personal data. To exercise these rights, please contact us by email.'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'fr' ? 'Contact' : 'Contact'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                {language === 'fr'
                  ? 'Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à:'
                  : 'For any questions about this privacy policy, please contact us at:'}
              </p>
              <p className="font-semibold text-foreground">
                info@taabohdss.ci
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
