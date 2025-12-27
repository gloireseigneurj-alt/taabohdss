# 🚀 GUIDE RAPIDE DEPLOIEMENT - TAABO HDSS

## 📍 Votre Repository GitHub
```
https://github.com/gloireseigneurj-alt/taabohdss.git
URL finale: https://gloireseigneurj-alt.github.io/taabohdss/
```

---

## ⚡ Déploiement Express (1 commande)

### Option 1: Script PowerShell Automatisé
```powershell
powershell -ExecutionPolicy Bypass -File deploy-quick.ps1
```

**Ce script:**
✅ Initialise Git (si nécessaire)  
✅ Build le site pour GitHub Pages  
✅ Prépare les fichiers  
✅ Commit et push automatiquement  
✅ Déploie sur gh-pages  

### Option 2: Commandes Manuelles (PowerShell)
```powershell
# 1. Build
set GITHUB_ACTIONS=true
npm run build:static

# 2. Préparer les fichiers
mkdir out -Force
echo "" > out/.nojekyll
xcopy /E /I .next\static out\
xcopy /E /I public out\

# 3. Initialiser Git (première fois seulement)
git init
git remote add origin https://github.com/gloireseigneurj-alt/taabohdss.git

# 4. Commit
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# 5. Déployer
npx gh-pages -d out -t

# 6. Push vers main (optionnel)
git push -u origin main
```

### Option 3: Bash/Linux/Mac
```bash
# 1. Build
export GITHUB_ACTIONS=true
npm run build:static

# 2. Préparer
mkdir -p out
touch out/.nojekyll
cp -r .next/static out/
cp -r public/* out/

# 3. Initialiser (première fois)
git init
git remote add origin https://github.com/gloireseigneurj-alt/taabohdss.git

# 4. Commit et push
git add .
git commit -m "Deploy: $(date)"
npx gh-pages -d out -t
git push -u origin main
```

---

## 🔄 Flux Standard (Première fois)

### 1️⃣ Installation des dépendances
```bash
npm install
```

### 2️⃣ Déployer avec le script
```powershell
powershell -ExecutionPolicy Bypass -File deploy-quick.ps1
```

### 3️⃣ Configurer GitHub Pages (une seule fois)
1. Allez à: **https://github.com/gloireseigneurj-alt/taabohdss**
2. **Settings** > **Pages**
3. **Source**: Deploy from a branch
4. **Branch**: `gh-pages`
5. **Folder**: `/` (root)
6. Cliquez **Save**

### 4️⃣ Vérifier
Visitez: **https://gloireseigneurj-alt.github.io/taabohdss/**

---

## 🔄 Mises à Jour Futures

Après chaque modification du code:

```powershell
# Simple (recommandé)
powershell -ExecutionPolicy Bypass -File deploy-quick.ps1

# Ou avec npm
npm run deploy:win
```

---

## ✅ Checklist Avant Déploiement

- [ ] Les dépendances sont installées (`npm install`)
- [ ] Aucune erreur TypeScript (`npm run lint`)
- [ ] Vous êtes connecté à Git (`git config user.name`)
- [ ] Vous avez accès à push sur le repo

---

## 🐛 Dépannage

### Le script dit "Git n'est pas installé"
**Solution:** Installez Git depuis https://git-scm.com/download/win

### "ERROR: Build échoué"
**Solution:** Vérifiez les erreurs avec:
```powershell
npm run build:static
```

### "gh-pages n'existe pas"
**Solution:** Installez-le:
```bash
npm install gh-pages --save-dev
```

### Le site n'apparaît pas après déploiement
**Solution:**
1. Attendez 5-10 minutes
2. Videz le cache du navigateur (Ctrl+Shift+Del)
3. Vérifiez que la branche `gh-pages` existe sur GitHub
4. Vérifiez que GitHub Pages est activé dans Settings > Pages

### "fatal: remote origin already exists"
**Solution:** Si le repo est déjà initialisé:
```powershell
git remote remove origin
git remote add origin https://github.com/gloireseigneurj-alt/taabohdss.git
```

---

## 📊 Fichiers Générés au Déploiement

```
out/
├── index.html
├── a-propos/
├── actualites/
├── contact/
├── equipe/
├── mentions-legales/
├── partenaires/
├── politique-confidentialite/
├── recherche/
├── ressources/
├── zone-etude/
├── .next/static/  (CSS, JS)
├── public/        (images, assets)
└── .nojekyll      (désactive Jekyll)
```

---

## 🎯 URLs des Pages

| Page | URL |
|------|-----|
| Accueil | https://gloireseigneurj-alt.github.io/taabohdss/ |
| À Propos | https://gloireseigneurj-alt.github.io/taabohdss/a-propos/ |
| Actualités | https://gloireseigneurj-alt.github.io/taabohdss/actualites/ |
| Contact | https://gloireseigneurj-alt.github.io/taabohdss/contact/ |
| Mentions Légales | https://gloireseigneurj-alt.github.io/taabohdss/mentions-legales/ |
| Politique Confidentialité | https://gloireseigneurj-alt.github.io/taabohdss/politique-confidentialite/ |

---

## 💾 Branche de Déploiement

- **main**: Code source (ce que vous éditez)
- **gh-pages**: Site publié (généré automatiquement)

---

## 🚀 Après le Premier Déploiement

Chaque fois que vous poussez vers `main`:

```bash
git add .
git commit -m "Description du changement"
git push origin main
```

Puis redéployez:
```powershell
powershell -ExecutionPolicy Bypass -File deploy-quick.ps1
```

---

**Statut:** ✅ Prêt à déployer!
