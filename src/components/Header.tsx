'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Globe } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useLanguage } from '@/components/LanguageProvider'

const navigation = [
  { href: '/', key: 'home' },
  { href: '/a-propos/', key: 'about' },
  { href: '/zone-etude/', key: 'studyArea' },
  { href: '/recherche/', key: 'research' },
  { href: '/ressources/', key: 'resources' },
  { href: '/equipe/', key: 'team' },
  { href: '/partenaires/', key: 'partners' },
  { href: '/actualites/', key: 'news' },
  { href: '/appels-candidatures/', key: 'calls' },
  { href: '/contact/', key: 'contact' },
]

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">TH</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">Taabo HDSS</div>
            <div className="text-xs text-muted-foreground">Côte d'Ivoire</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        {/* Language Switcher & Contact */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleLanguage}
            className="hidden sm:flex items-center space-x-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-semibold">
              {language === 'fr' ? 'EN' : 'FR'}
            </span>
          </button>

          <Link href="/contact/">
            <span className="hidden sm:inline-flex px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors cursor-pointer">
              {t('nav.contact')}
            </span>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <button className="p-2 hover:bg-accent rounded-md">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 w-full px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{language === 'fr' ? 'English' : 'Français'}</span>
                  </button>
                </div>
                <Link href="/contact/">
                  <span className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors cursor-pointer">
                    {t('nav.contact')}
                  </span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
