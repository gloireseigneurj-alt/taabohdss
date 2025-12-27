# 🐛 Corrections - Déploiement GitHub Pages

## ✅ Problèmes Identifiés et Corrigés

### 1. **Pages manquantes**
**Problème:** Deux pages étaient linkées dans le Footer mais n'existaient pas:
- `/mentions-legales`
- `/politique-confidentialite`

**Solution:** ✅ Création des deux pages avec contenu multilingue

### 2. **Lien cassé dans la homepage**
**Problème:** La section actualités tentait de linker vers `/actualites/{id}` mais aucune page dynamique n'existait

**Solution:** ✅ Redirection vers `/actualites` (la page liste)

### 3. **Configuration Next.js pour GitHub Pages**
**Problème:** La configuration mélait les modes dev et GitHub Pages

**Solution:** ✅ Configuration séparée:
- Dev mode: `trailingSlash: false`
- GitHub Pages (GITHUB_ACTIONS=true): 
  - `output: "export"` (export statique)
  - `basePath: "/taabohdss"`
  - `images: { unoptimized: true }`
  - `trailingSlash: true`

### 4. **Scripts de déploiement**
**Problème:** Les scripts build et deploy ne correspondaient pas aux dossiers de sortie

**Solution:** ✅ Correction des chemins de copie de fichiers:
```powershell
# Anciennement: npm run deploy
# Maintenant: les fichiers de .next/static et public sont copiés dans out/
```

### 5. **Script PowerShell fix-deploy.ps1**
**Problème:** Le script était incomplet et ne gérait pas correctement les fichiers exportés

**Solution:** ✅ Refonte complète avec:
- Vérification des prérequis
- Nettoyage automatique des builds précédents
- Export statique propre
- Copie correcte des fichiers
- Instructions détaillées pour GitHub Pages

---

## 📋 Fichiers Modifiés

1. ✅ **next.config.ts** - Configuration séparée dev/prod
2. ✅ **package.json** - Scripts de deploy corrigés
3. ✅ **fix-deploy.ps1** - Script PowerShell refactorisé
4. ✅ **src/app/mentions-legales/page.tsx** - Nouvelle page créée
5. ✅ **src/app/politique-confidentialite/page.tsx** - Nouvelle page créée
6. ✅ **src/app/page.tsx** - Lien actualites/{id} corrigé

---

## 🚀 Instructions de Déploiement

### 1. **Vérification locale**
```bash
# Tester le build local
npm run build

# Tester le build pour GitHub Pages
set GITHUB_ACTIONS=true
npm run build:static
```

### 2. **Préparation du repository GitHub**

```bash
# Initialiser git
git init
git add .
git commit -m "Initial commit - Taabo HDSS"

# Créer un repo sur GitHub nommé 'taabo-hdss'
# Puis ajouter le remote
git remote add origin https://github.com/YOUR-USERNAME/taabo-hdss.git
git branch -M main
git push -u origin main
```

### 3. **Configurer GitHub Pages**

1. Allez à: **Settings** > **Pages**
2. Sélectionnez: **Deploy from a branch**
3. Branche: **gh-pages**
4. Dossier: **/ (root)**

### 4. **Déploiement avec gh-pages** (Windows PowerShell)

```powershell
# Option 1: Script PowerShell automatisé
powershell -ExecutionPolicy Bypass -File fix-deploy.ps1

# Option 2: Commandes NPM
npm run deploy:win
```

### 5. **Déploiement avec gh-pages** (Bash/Linux/Mac)

```bash
# Build et déploiement
npm run build:static
npx gh-pages -d out -t
```

---

## 🔍 Structure de Déploiement Finale

```
GitHub Pages (gh-pages branch)
├── index.html
├── a-propos/index.html
├── actualites/index.html
├── appels-candidatures/index.html
├── contact/index.html
├── equipe/index.html
├── mentions-legales/index.html
├── partenaires/index.html
├── politique-confidentialite/index.html
├── recherche/index.html
├── ressources/index.html
├── zone-etude/index.html
├── .next/static/... (CSS, JS)
├── public/... (assets statiques)
└── .nojekyll (désactiver Jekyll)
```

---

## ✨ Routes Disponibles

| Route | Fichier | Statut |
|-------|---------|--------|
| `/` | `src/app/page.tsx` | ✅ Accueil |
| `/a-propos` | `src/app/a-propos/page.tsx` | ✅ À Propos |
| `/actualites` | `src/app/actualites/page.tsx` | ✅ Actualités |
| `/appels-candidatures` | `src/app/appels-candidatures/page.tsx` | ✅ Appels |
| `/contact` | `src/app/contact/page.tsx` | ✅ Contact |
| `/equipe` | `src/app/equipe/page.tsx` | ✅ Équipe |
| `/mentions-legales` | `src/app/mentions-legales/page.tsx` | ✅ CRÉÉE |
| `/partenaires` | `src/app/partenaires/page.tsx` | ✅ Partenaires |
| `/politique-confidentialite` | `src/app/politique-confidentialite/page.tsx` | ✅ CRÉÉE |
| `/recherche` | `src/app/recherche/page.tsx` | ✅ Recherche |
| `/ressources` | `src/app/ressources/page.tsx` | ✅ Ressources |
| `/zone-etude` | `src/app/zone-etude/page.tsx` | ✅ Zone Étude |

---

## 📝 Notes Importantes

1. **BasePath pour GitHub Pages:** `/taabohdss` est configuré dans `next.config.ts`
   - Cela signifie que le site sera à: `https://username.github.io/taabohdss/`
   - Les liens Next.js `<Link href="/page">` gèrent automatiquement le basePath

2. **Pas d'API routes:** Comme vous utilisez `output: "export"`, les API routes ne fonctionnent pas
   - À utiliser: formulaires côté client avec email externe ou webhook

3. **Images:** Toutes les images doivent être en statique (dossier `public/`)
   - Pas d'optimisation next/image en mode export

4. **Trailing Slash:** Configuré pour `true` en production
   - `/page` → `/page/` (plus compatible avec GitHub Pages)

---

## 🔗 URL Finale

Après déploiement, votre site sera accessible à:
```
https://YOUR-USERNAME.github.io/taabohdss/
```

---

## 🆘 Dépannage

### Le site ne charge pas après déploiement
- Vérifiez que `gh-pages` est activé dans Settings > Pages
- Vérifiez que la branche `gh-pages` a les fichiers (utilisez Git)
- Attendez 5-10 minutes après le déploiement

### Les CSS ne chargent pas
- Vérifiez le `basePath` dans `next.config.ts`
- Inspectez la console du navigateur (F12) pour les erreurs 404

### Les liens sont cassés
- Assurez-vous que tous les fichiers `page.tsx` existent dans `src/app/`
- Vérifiez les chemins avec `<Link href="/path">` vs `<a href="/path">`

---

**Date:** 27 Décembre 2025  
**Statut:** ✅ Prêt pour GitHub Pages
