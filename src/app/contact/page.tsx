'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/components/LanguageProvider'

export default function ContactPage() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: 'general',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', type: 'general', message: '' })

    // Réinitialiser après 5 secondes
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'fr'
                ? 'Nous serons ravis de répondre à vos questions et d\'échanger sur nos activités de recherche.'
                : 'We would be happy to answer your questions and discuss our research activities.'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    {language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-600">
                        {language === 'fr'
                          ? 'Message envoyé avec succès!'
                          : 'Message sent successfully!'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr'
                          ? 'Nous vous répondrons dans les plus brefs délais.'
                          : 'We will get back to you as soon as possible.'}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {language === 'fr' ? 'Nom complet *' : 'Full name *'}
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={
                            language === 'fr' ? 'Votre nom' : 'Your name'
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {language === 'fr' ? 'Adresse email *' : 'Email address *'}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={
                            language === 'fr' ? 'votre@email.com' : 'your@email.com'
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="type">
                          {language === 'fr' ? 'Type de demande' : 'Request type'}
                        </Label>
                        <select
                          id="type"
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="general">
                            {language === 'fr' ? 'Général' : 'General'}
                          </option>
                          <option value="partnership">
                            {language === 'fr' ? 'Partenariat' : 'Partnership'}
                          </option>
                          <option value="research">
                            {language === 'fr' ? 'Recherche' : 'Research'}
                          </option>
                          <option value="press">
                            {language === 'fr' ? 'Presse' : 'Press'}
                          </option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">
                          {language === 'fr' ? 'Sujet' : 'Subject'}
                        </Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder={
                            language === 'fr' ? 'Sujet de votre message' : 'Message subject'
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          {language === 'fr' ? 'Message *' : 'Message *'}
                        </Label>
                        <Textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={
                            language === 'fr'
                              ? 'Écrivez votre message ici...'
                              : 'Write your message here...'
                          }
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting
                          ? (language === 'fr' ? 'Envoi en cours...' : 'Sending...')
                          : (language === 'fr' ? 'Envoyer le message' : 'Send message')}
                        </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>
                    {language === 'fr' ? 'Coordonnées' : 'Contact Information'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {language === 'fr' ? 'Adresse' : 'Address'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Centre Suisse de Recherches Scientifiques en Côte d'Ivoire (CSRS)
                        <br />
                        08 BP 841 Abidjan 08, Côte d'Ivoire
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {language === 'fr' ? 'Email' : 'Email'}
                      </h3>
                      <a
                        href="mailto:info@taabohdss.ci"
                        className="text-sm text-primary hover:underline"
                      >
                        info@taabohdss.ci
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {language === 'fr' ? 'Téléphone' : 'Phone'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        +225 XX XX XX XX XX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {language === 'fr' ? 'Horaires d\'ouverture' : 'Opening hours'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'fr'
                          ? 'Lundi - Vendredi: 8h00 - 17h00'
                          : 'Monday - Friday: 8:00 AM - 5:00 PM'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>
                    {language === 'fr'
                      ? 'Pour les demandes de partenariat'
                      : 'For partnership inquiries'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm opacity-90">
                    {language === 'fr'
                      ? 'Le Taabo HDSS est toujours ouvert aux nouvelles collaborations avec des institutions de recherche, des ONG et des organisations internationales.'
                      : 'Taabo HDSS is always open to new collaborations with research institutions, NGOs, and international organizations.'}
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => setFormData({ ...formData, type: 'partnership' })}
                  >
                    {language === 'fr'
                      ? 'En savoir plus sur nos partenariats'
                      : 'Learn more about our partnerships'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
