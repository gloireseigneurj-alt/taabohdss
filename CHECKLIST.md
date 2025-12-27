# ✅ Checklist Pré-Déploiement GitHub Pages

## 🔍 Vérifications Techniques

- [x] **Configuration Next.js**
  - [x] `output: "export"` configuré pour GitHub Pages
  - [x] `basePath: "/taabohdss"` configuré
  - [x] `images: { unoptimized: true }`
  - [x] `trailingSlash` configuré correctement

- [x] **Toutes les routes linkées existent**
  - [x] `/` - Accueil ✅
  - [x] `/a-propos` - À Propos ✅
  - [x] `/actualites` - Actualités ✅
  - [x] `/appels-candidatures` - Appels ✅
  - [x] `/contact` - Contact ✅
  - [x] `/equipe` - Équipe ✅
  - [x] `/mentions-legales` - Mentions Légales ✅ CRÉÉE
  - [x] `/partenaires` - Partenaires ✅
  - [x] `/politique-confidentialite` - Politique ✅ CRÉÉE
  - [x] `/recherche` - Recherche ✅
  - [x] `/ressources` - Ressources ✅
  - [x] `/zone-etude` - Zone d'Étude ✅

- [x] **Pas de liens cassés**
  - [x] Tous les `href="/..."` pointent vers des pages existantes
  - [x] Pas de routes dynamiques non implémentées

- [x] **Pas de pages d'erreur (404)**
  - [x] Aucune page manquante dans la navigation

- [x] **Aucune erreur TypeScript/ESLint**
  - [x] Pas d'erreurs de compilation

## 📦 Dépendances

- [x] `next` - v15
- [x] `react` - Compatible
- [x] `typescript` - Configuré
- [x] `tailwindcss` - v4
- [x] `shadcn/ui` - Installé
- [x] `gh-pages` - Pour le déploiement

## 🌐 GitHub Setup

Avant de déployer, assurez-vous de:

- [ ] Créer un repository GitHub nommé `taabo-hdss`
- [ ] Initialiser git dans votre projet local
- [ ] Ajouter le remote GitHub
- [ ] Pousser le code vers `main`
- [ ] Aller à **Settings > Pages**
- [ ] Sélectionner "Deploy from a branch"
- [ ] Choisir branche `gh-pages`

## 🚀 Procédure de Déploiement

### Option 1: Avec PowerShell (Windows)
```powershell
powershell -ExecutionPolicy Bypass -File fix-deploy.ps1
npx gh-pages -d out -t
```

### Option 2: Avec npm
```bash
npm run deploy:win
```

### Option 3: Avec CI/CD GitHub Actions
Le fichier `.github/workflows/deploy.yml` est configuré pour déployer automatiquement lors d'un push sur `main`

## 🔐 Variables d'Environnement

Aucune variable d'environnement requise pour le déploiement de base.

**Optionnels (si vous activez des features avancées):**
- `GITHUB_ACTIONS=true` - Défini automatiquement pour les builds

## 📊 Tests Avant Déploiement

```bash
# Test du build local
npm run build

# Test du build pour GitHub Pages
set GITHUB_ACTIONS=true
npm run build:static

# Vérifier la structure de sortie
ls -la out/
```

## 🎯 URL de Destination

```
https://YOUR-USERNAME.github.io/taabohdss/
```

## ⏱️ Délai de Mise en Ligne

- Déploiement initial: 5-10 minutes
- Mise à jour après push: 2-3 minutes

## 🆘 Support

Si quelque chose ne fonctionne pas:

1. Vérifiez que `gh-pages` branche existe dans GitHub
2. Vérifiez le dossier `out/` est rempli après le build
3. Attendez quelques minutes avant de vérifier
4. Videz le cache du navigateur (Ctrl+Shift+Del)
5. Vérifiez la console du navigateur pour les erreurs 404

---

**Toutes les corrections ont été appliquées ✅**
**Le projet est prêt pour GitHub Pages!**
