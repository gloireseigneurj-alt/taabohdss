'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traductions
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.studyArea': 'Zone d\'étude',
    'nav.research': 'Recherche',
    'nav.resources': 'Ressources',
    'nav.team': 'Équipe',
    'nav.partners': 'Partenaires',
    'nav.news': 'Actualités',
    'nav.calls': 'Appels à candidatures',
    'nav.contact': 'Contact',

    // Hero section
    'hero.title': 'Surveillance Démographique et de Santé',
    'hero.subtitle': 'Taabo HDSS - Côte d\'Ivoire',
    'hero.description': 'Un site de recherche sur les maladies infectieuses, non transmissibles et les interventions de santé au centre-sud de la Côte d\'Ivoire',
    'hero.cta': 'Découvrir nos activités',

    // About section
    'about.mission': 'Notre Mission',
    'about.history': 'Notre Historique',
    'about.objectives': 'Nos Objectifs',
    'about.impact': 'Notre Impact',

    // Footer
    'footer.description': 'Le Taabo HDSS mène une surveillance démographique et sanitaire continue pour soutenir la recherche sur les maladies infectieuses, non transmissibles et les interventions de santé.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.studyArea': 'Study Area',
    'nav.research': 'Research',
    'nav.resources': 'Resources',
    'nav.team': 'Team',
    'nav.partners': 'Partners',
    'nav.news': 'News',
    'nav.calls': 'Calls for Applications',
    'nav.contact': 'Contact',

    // Hero section
    'hero.title': 'Health and Demographic Surveillance',
    'hero.subtitle': 'Taabo HDSS - Ivory Coast',
    'hero.description': 'A research site on infectious diseases, non-communicable diseases, and health interventions in the south-central region of Ivory Coast',
    'hero.cta': 'Discover Our Activities',

    // About section
    'about.mission': 'Our Mission',
    'about.history': 'Our History',
    'about.objectives': 'Our Objectives',
    'about.impact': 'Our Impact',

    // Footer
    'footer.description': 'Taabo HDSS conducts continuous demographic and health surveillance to support research on infectious diseases, non-communicable diseases, and health interventions.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
