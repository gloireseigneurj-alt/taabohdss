#!/bin/bash
# setup-git.sh - Script de configuration Git pour le projet Taabo HDSS

echo "=========================================="
echo "Configuration Git pour Taabo HDSS"
echo "=========================================="
echo ""

# Demander le nom de l'utilisateur
read -p "Entrez votre nom (ex: Jean Doe): " GIT_NAME
read -p "Entrez votre email (ex: jean@example.com): " GIT_EMAIL

# Configurer Git globalement
echo "Configuration de Git..."
git config --global user.name "$GIT_NAME"
git config --global user.email "$GIT_EMAIL"

# Vérifier la configuration
echo ""
echo "Configuration vérifie:"
echo "Nom: $(git config --global user.name)"
echo "Email: $(git config --global user.email)"
echo ""

# Initialiser le repository (si pas déjà fait)
if [ ! -d ".git" ]; then
    echo "Initialisation du repository Git..."
    git init
    git remote add origin https://github.com/gloireseigneurj-alt/taabohdss.git
    git add .
    git commit -m "Initial commit - Taabo HDSS"
    echo "Repository initialisé!"
else
    echo "Repository Git déjà existant"
    echo "Remote: $(git config --get remote.origin.url)"
fi

echo ""
echo "=========================================="
echo "✅ Configuration complète!"
echo "=========================================="
echo ""
echo "Prochaines étapes:"
echo "1. npm install"
echo "2. npm run dev"
echo "3. Faire vos modifications"
echo "4. Exécuter: powershell -ExecutionPolicy Bypass -File deploy-quick.ps1"
echo ""
