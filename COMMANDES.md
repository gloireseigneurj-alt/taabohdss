# 🚀 COMMANDES ESSENTIELLES - TAABO HDSS

## 📍 Repository GitHub
```
https://github.com/gloireseigneurj-alt/taabohdss.git
```

## ⚡ COMMANDE UNIQUE POUR DEPLOYER

### Windows (PowerShell)
```powershell
powershell -ExecutionPolicy Bypass -File deploy-quick.ps1
```

### Windows (Double-clic)
```
double-clic sur: deploy.bat
```

### Linux/Mac (Bash)
```bash
bash deploy-quick.sh
```

---

## 📋 WORKFLOW COMPLET

### 1. Première installation
```bash
git clone https://github.com/gloireseigneurj-alt/taabohdss.git
cd taabohdss
npm install
```

### 2. Développement
```bash
npm run dev
# Ouvrir: http://localhost:3000
```

### 3. Apporter des modifications
Éditer les fichiers dans `src/`

### 4. Tester avant de déployer
```bash
# Vérifier les erreurs
npm run lint

# Tester le build
npm run build:static
```

### 5. Déployer (choose one)
```powershell
# Option A: Script rapide (recommandé)
powershell -ExecutionPolicy Bypass -File deploy-quick.ps1

# Option B: Commandes manuelles
npm run deploy:win

# Option C: GitHub Actions (automatique)
git add .
git commit -m "Description des changements"
git push origin main
```

---

## 🔧 COMMANDES DE DÉVELOPPEMENT

```bash
# Démarrer le serveur de développement (localhost:3000)
npm run dev

# Builder pour production (serveur Node.js)
npm run build
npm run start

# Builder pour GitHub Pages (export statique)
set GITHUB_ACTIONS=true
npm run build:static

# Vérifier le code
npm run lint

# Base de données
npm run db:generate
npm run db:push
npm run db:migrate
npm run db:reset
```

---

## 📁 STRUCTURE DE FICHIERS

```
/
├── src/
│   ├── app/              # Pages (chaque dossier = une route)
│   │   ├── page.tsx     # Accueil
│   │   ├── a-propos/
│   │   ├── actualites/
│   │   ├── contact/
│   │   ├── equipe/
│   │   ├── mentions-legales/     # NOUVEAU
│   │   ├── partenaires/
│   │   ├── politique-confidentialite/  # NOUVEAU
│   │   ├── recherche/
│   │   ├── ressources/
│   │   └── zone-etude/
│   ├── components/       # Composants réutilisables
│   └── lib/              # Utilitaires
├── public/               # Assets statiques (images, etc.)
├── .github/workflows/    # GitHub Actions CI/CD
├── deploy-quick.ps1      # Script de déploiement
├── deploy.bat            # Lanceur batch (Windows)
├── next.config.ts        # Configuration Next.js
├── package.json          # Dépendances
└── README.md             # Ce fichier

```

---

## 🔗 URLS IMPORTANTES

### En Développement
- Accueil: http://localhost:3000/
- À Propos: http://localhost:3000/a-propos

### En Production (GitHub Pages)
- Accueil: https://gloireseigneurj-alt.github.io/taabohdss/
- À Propos: https://gloireseigneurj-alt.github.io/taabohdss/a-propos/

---

## 🐛 DÉPANNAGE RAPIDE

### "npm command not found"
→ Installer Node.js: https://nodejs.org/

### "git command not found"
→ Installer Git: https://git-scm.com/

### "powershell command not found"
→ Windows uniquement, installer PowerShell Core

### Site n'apparaît pas après déploiement
→ Attendre 5-10 minutes et vider le cache (Ctrl+Shift+Del)

### Les CSS ne chargent pas
→ Vérifier que le basePath `/taabohdss` est configuré dans next.config.ts

---

## 📞 AIDE RAPIDE

**Documentation complète**: `DEPLOIEMENT.md`  
**Guide rapide**: `DEPLOIEMENT_RAPIDE.md`  
**Résumé des corrections**: `RESUME_CORRECTIONS.md`  

---

## 💾 GIT BASICS

```bash
# Voir l'état
git status

# Ajouter les changements
git add .

# Commit
git commit -m "Description du changement"

# Pousser vers GitHub
git push origin main

# Tirer les changements du serveur
git pull origin main

# Voir l'historique
git log
```

---

## ✅ CHECKLIST AVANT PUSH

- [ ] `npm run lint` ✅ (pas d'erreurs)
- [ ] `npm run build:static` ✅ (build réussi)
- [ ] Tester les liens dans le navigateur
- [ ] Vérifier les pages responsive (F12)
- [ ] Commit avec un message clair
- [ ] Push vers main

---

## 🎯 DÉPLOIEMENT AUTOMATIQUE

Une fois que vous poussez sur `main`:
1. GitHub Actions se déclenche automatiquement
2. Le site est builté et testé
3. Déployé sur gh-pages
4. Disponible à: https://gloireseigneurj-alt.github.io/taabohdss/

**Pas d'actions supplémentaires nécessaires!**

---

**Dernière mise à jour:** 27 Décembre 2025
**Statut:** ✅ Prêt à déployer
