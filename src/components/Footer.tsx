'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'

const quickLinks = [
  { href: '/a-propos', key: 'nav.about' },
  { href: '/zone-etude', key: 'nav.studyArea' },
  { href: '/recherche', key: 'nav.research' },
  { href: '/ressources', key: 'nav.resources' },
  { href: '/equipe', key: 'nav.team' },
  { href: '/actualites', key: 'nav.news' },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t bg-muted/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">TH</span>
              </div>
              <div>
                <div className="font-semibold">Taabo HDSS</div>
                <div className="text-sm text-muted-foreground">Côte d'Ivoire</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('footer.quickLinks')}</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Centre Suisse de Recherches Scientifiques en Côte d'Ivoire (CSRS)
                  <br />
                  08 BP 841 Abidjan 08, Côte d'Ivoire
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@taabohdss.ci" className="hover:text-primary">
                  info@taabohdss.ci
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+225 XX XX XX XX XX</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold">Suivez-nous</h3>
            <div className="flex space-x-2">
              <a
                href="#"
                aria-label="Facebook"
                className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Taabo HDSS. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/mentions-legales" className="text-muted-foreground hover:text-primary">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-muted-foreground hover:text-primary">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
