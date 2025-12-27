# 🏥 Taabo HDSS - Système de Surveillance Démographique et de Santé

Site institutionnel du **Taabo Health and Demographic Surveillance System** (HDSS) basé en Côte d'Ivoire.

## 🌐 Accès au Site

**URL de Production:** https://gloireseigneurj-alt.github.io/taabohdss/

## 🏗️ Stack Technologique

- **Framework**: [Next.js 15](https://nextjs.org/) - React 19
- **Langage**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Composants UI**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Déploiement**: [GitHub Pages](https://pages.github.com/)

## 🚀 Démarrage Rapide

### Installation
```bash
# Cloner le repository
git clone https://github.com/gloireseigneurj-alt/taabohdss.git
cd taabohdss

# Installer les dépendances
npm install
```

### Développement Local
```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

### Build de Production
```bash
# Build pour développement
npm run build

# Build pour GitHub Pages
set GITHUB_ACTIONS=true
npm run build:static
```

## 📚 Commandes Disponibles

```bash
npm run dev           # Démarrer le développement (localhost:3000)
npm run build         # Build de production (serveur autonome)
npm run build:static  # Build pour GitHub Pages (export statique)
npm run start         # Démarrer le serveur de production
npm run lint          # Vérifier le code (ESLint)
npm run deploy:win    # Déployer sur GitHub Pages (Windows)
```

## 🌍 Pages et Routes

| Route | Description | Statut |
|-------|-------------|--------|
| `/` | Accueil | ✅ |
| `/a-propos` | À Propos du Taabo HDSS | ✅ |
| `/actualites` | Actualités et Annonces | ✅ |
| `/appels-candidatures` | Appels à Candidatures | ✅ |
| `/contact` | Formulaire de Contact | ✅ |
| `/equipe` | Équipe du Projet | ✅ |
| `/mentions-legales` | Mentions Légales | ✅ |
| `/partenaires` | Partenaires | ✅ |
| `/politique-confidentialite` | Politique de Confidentialité | ✅ |
| `/recherche` | Recherche et Publications | ✅ |
| `/ressources` | Ressources et Données | ✅ |
| `/zone-etude` | Zone d'Étude | ✅ |

## 🚀 Déploiement

### Déploiement Automatique (GitHub Actions)
À chaque push sur la branche `main`, le site est automatiquement:
1. ✅ Builté en mode export statique
2. ✅ Testé
3. ✅ Déployé sur GitHub Pages (branche `gh-pages`)

### Déploiement Manuel (Windows)
```powershell
# Utiliser le script PowerShell
powershell -ExecutionPolicy Bypass -File deploy-quick.ps1

# Ou utiliser le fichier batch
deploy.bat
```

### Déploiement Manuel (Bash/Linux/Mac)
```bash
# Build
export GITHUB_ACTIONS=true
npm run build:static

# Préparer les fichiers
mkdir -p out
touch out/.nojekyll
cp -r .next/static out/
cp -r public/* out/

# Déployer
git add .
git commit -m "Deploy: $(date)"
npx gh-pages -d out -t
```

## 📖 Guide Complet

Pour les instructions détaillées de déploiement, consultez:
- [DEPLOIEMENT.md](./DEPLOIEMENT.md) - Guide complet
- [DEPLOIEMENT_RAPIDE.md](./DEPLOIEMENT_RAPIDE.md) - Guide express
- [RESUME_CORRECTIONS.md](./RESUME_CORRECTIONS.md) - Résumé des corrections

## 🏛️ Institution

**Centre Suisse de Recherches Scientifiques en Côte d'Ivoire (CSRS)**
- 📍 08 BP 841 Abidjan 08, Côte d'Ivoire
- 📧 info@taabohdss.ci
- 🌐 https://taabohdss.ci

## 📊 Projet

Le **Taabo HDSS** est un système de surveillance démographique et de santé créé en **2009** qui:
- ✅ Suivi de **12,500+ ménages**
- ✅ Population de **75,000+ habitants**
- ✅ **150+ publications scientifiques**
- ✅ **15+ années de surveillance**

Domaines de recherche:
- 🔬 Maladies infectieuses
- 📊 Maladies non transmissibles  
- 💊 Interventions de santé
- 📈 Épidémiologie

## 🔐 Sécurité et Confidentialité

Ce site respecte les normes de confidentialité et de sécurité:
- ✅ Aucune collection de données personnelles (sauf via formulaire volontaire)
- ✅ HTTPS obligatoire
- ✅ Pas de cookies de tracking
- ✅ Politique de confidentialité disponible

Voir: [Politique de Confidentialité](./src/app/politique-confidentialite/)

## 📝 Licence

© 2025 Taabo HDSS / CSRS. Tous droits réservés.

## 🤝 Contribution

Pour contribuer:
1. Fork le repository
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou problème:
- 📧 Email: info@taabohdss.ci
- 🐛 Issues: [GitHub Issues](https://github.com/gloireseigneurj-alt/taabohdss/issues)

## ✨ Auteurs

- **Z.ai** - Scaffold et configuration initiale
- **Taabo HDSS Team** - Contenu et déploiement

## 🗓️ Changelog

### v1.0.0 (27 Décembre 2025)
- ✅ Initialisation du site
- ✅ Création de toutes les pages principales
- ✅ Configuration GitHub Pages
- ✅ Setup CI/CD avec GitHub Actions
- ✅ Support multilingue (FR/EN)

---

**État:** ✅ En production  
**Dernière mise à jour:** 27 Décembre 2025
