# 🎯 DÉMARRAGE - PREMIÈRE UTILISATION

## 🎬 Étapes Initiales (Une seule fois)

### Étape 1️⃣: Configurer Git
```powershell
# Ouvrir PowerShell et executer:
powershell -ExecutionPolicy Bypass -File setup-git.ps1
```

**Ce script:**
- ✅ Configure votre nom et email Git
- ✅ Initialise le repository Git local
- ✅ Ajoute le remote GitHub
- ✅ Crée le premier commit

### Étape 2️⃣: Installer les dépendances
```bash
npm install
```

Cela télécharge tous les packages nécessaires (~500MB)

### Étape 3️⃣: Vérifier que tout fonctionne
```bash
npm run dev
```

Ouvrez: **http://localhost:3000**

---

## 🔄 Cycle de Développement (Répétition)

### 1. Avant de travailler
```bash
npm run dev
# Naviguer sur http://localhost:3000
```

### 2. Faire vos modifications
Éditez les fichiers dans:
- `src/app/` - Pages (chaque dossier = une route)
- `src/components/` - Composants réutilisables
- `src/lib/` - Utilitaires
- `public/` - Images et assets

Les changements se mettent à jour automatiquement! (HMR)

### 3. Avant de déployer
```bash
# Arrêter le serveur dev (Ctrl+C)
npm run lint       # Vérifier le code
npm run build:static  # Tester le build
```

### 4. Déployer sur GitHub Pages
```powershell
# Windows
powershell -ExecutionPolicy Bypass -File deploy-quick.ps1

# Ou simplement double-cliquer
deploy.bat
```

---

## 📁 Comment Ajouter une Nouvelle Page

### Exemple: Créer `/ma-page`

#### 1. Créer le dossier
```
src/app/ma-page/
```

#### 2. Créer le fichier page.tsx
```typescript
// src/app/ma-page/page.tsx
export default function MaPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Ma Page</h1>
        <p className="text-lg text-muted-foreground mt-4">
          Contenu de ma page
        </p>
      </div>
    </div>
  )
}
```

#### 3. Ajouter le lien dans Header.tsx
```typescript
// src/components/Header.tsx
const navigation = [
  // ... autres liens
  { href: '/ma-page', key: 'myPage' },  // AJOUTER CETTE LIGNE
]
```

#### 4. Ajouter la traduction
```typescript
// src/components/LanguageProvider.tsx - chercher translations
export const translations = {
  'nav.myPage': {
    fr: 'Ma Page',
    en: 'My Page',
  },
  // ... autres traductions
}
```

#### 5. Tester
```bash
# Rafraîchir http://localhost:3000
# Vous devriez voir le nouveau lien dans le menu
```

---

## 🌐 Comment Ajouter une Traduction

Les traductions sont dans: `src/components/LanguageProvider.tsx`

### Ajouter une nouvelle clé:
```typescript
'mon.texte': {
  fr: 'Mon texte en français',
  en: 'My text in English',
}
```

### Utiliser dans un composant:
```tsx
const { t, language } = useLanguage()

// Utiliser t() pour une clé
<h1>{t('mon.texte')}</h1>

// Ou check la langue
{language === 'fr' ? 'Français' : 'English'}
```

---

## 📝 Modifier une Page Existante

### Exemple: Modifier l'accueil

1. Ouvrir: `src/app/page.tsx`
2. Faire vos changements
3. Sauvegarder (Ctrl+S)
4. Le site se met à jour automatiquement

---

## 🖼️ Ajouter des Images

### 1. Placer l'image dans `public/`
```
public/
├── mon-image.jpg
├── logo.png
└── ...
```

### 2. L'utiliser dans le code
```tsx
// Option 1: Balise img simple
<img src="/mon-image.jpg" alt="Description" />

// Option 2: Balise Image Next.js
import Image from 'next/image'
<Image 
  src="/mon-image.jpg" 
  alt="Description"
  width={800}
  height={600}
/>
```

---

## 🎨 Personnaliser les Couleurs

### Modifier le thème Tailwind
Fichier: `tailwind.config.ts`

```typescript
export default {
  theme: {
    colors: {
      primary: '#FF6B6B',      // Changer la couleur primaire
      // ... autres couleurs
    }
  }
}
```

---

## 🔗 Ajouter un Lien

### Utiliser toujours `<Link>` de Next.js
```tsx
import Link from 'next/link'

// ✅ BON
<Link href="/page">Cliquez ici</Link>

// ❌ MAUVAIS
<a href="/page">Cliquez ici</a>
```

---

## 📱 Tester le Responsive

Ouvrir **F12** → **Toggle device toolbar** (Ctrl+Shift+M)

Tester sur:
- ✅ Desktop (1920px)
- ✅ Tablet (768px)
- ✅ Mobile (375px)

---

## 🧪 Tests Avant Déploiement

```bash
# 1. Vérifier la syntaxe
npm run lint

# 2. Builder
npm run build:static

# 3. Vérifier le dossier out/
# Vous devriez voir:
# - out/index.html
# - out/.next/static/
# - out/public/

# 4. Tester localement
npm run start
# http://localhost:3000
```

---

## 🚀 Déployer les Changements

Une fois que tout fonctionne:

```powershell
# Option 1: Script automatisé
powershell -ExecutionPolicy Bypass -File deploy-quick.ps1

# Option 2: Double-clic sur deploy.bat
```

Le site sera mis à jour à:
**https://gloireseigneurj-alt.github.io/taabohdss/**

⏱️ Attendez 5-10 secondes, puis actualisez (F5)

---

## 🐛 Si Quelque Chose Casse

### Annuler les changements
```bash
# Retourner à la dernière version
git reset --hard HEAD~1

# Ou recharger depuis GitHub
git pull origin main
```

### Chercher l'erreur
```bash
# Vérifier les erreurs
npm run lint

# Voir les logs du build
npm run build:static 2>&1 | more
```

---

## 📚 Ressources Utiles

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org/docs)

---

## 🆘 Aide Rapide

| Problème | Solution |
|----------|----------|
| Site en blanc | F12 → Console → Chercher les erreurs 404 |
| "npm not found" | Installer Node.js depuis nodejs.org |
| "git not found" | Installer Git depuis git-scm.com |
| Déploiement échoue | Vérifier que gh-pages est installé: `npm install gh-pages --save-dev` |
| Site ne se met pas à jour | Ctrl+Shift+Del (vider le cache) |

---

**Vous êtes prêt! 🎉**

Questions? Consultez:
- `DEPLOIEMENT_RAPIDE.md` - Déploiement express
- `COMMANDES.md` - Toutes les commandes
- `DEPLOIEMENT.md` - Guide complet
