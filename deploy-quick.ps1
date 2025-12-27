# deploy-quick.ps1
# Script de déploiement rapide pour Taabo HDSS
# Utilise le repository: https://github.com/gloireseigneurj-alt/taabohdss.git

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "TAABO HDSS - DEPLOIEMENT GITHUB PAGES" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Étape 1: Vérifier git
Write-Host "1. Verification de git..." -ForegroundColor Yellow
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "   ERROR: Git n'est pas installé!" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: Git trouvé" -ForegroundColor Green

# Étape 2: Vérifier si c'est un repo git
if (-not (Test-Path ".git")) {
    Write-Host "2. Initialisation du repository Git..." -ForegroundColor Yellow
    git init
    git remote add origin https://github.com/gloireseigneurj-alt/taabohdss.git
    Write-Host "   OK: Repository initialisé" -ForegroundColor Green
} else {
    Write-Host "2. Repository Git existant détecté" -ForegroundColor Green
    $remote = git config --get remote.origin.url
    Write-Host "   Remote: $remote" -ForegroundColor Gray
}

# Étape 3: Build statique
Write-Host "3. Build pour GitHub Pages..." -ForegroundColor Yellow
$env:GITHUB_ACTIONS = "true"
npm run build:static
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: Build échoué!" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: Build réussi" -ForegroundColor Green

# Étape 4: Préparation des fichiers
Write-Host "4. Préparation des fichiers..." -ForegroundColor Yellow
if (-not (Test-Path "out")) {
    mkdir out | Out-Null
}
echo "" > out/.nojekyll
if (Test-Path ".next/static") {
    Copy-Item -Path ".next/static" -Destination "out/.next" -Recurse -Force
}
if (Test-Path "public") {
    Copy-Item -Path "public/*" -Destination "out" -Recurse -Force -Exclude ".DS_Store"
}
Write-Host "   OK: Fichiers préparés" -ForegroundColor Green

# Étape 5: Ajouter et commiter les changements
Write-Host "5. Ajout des fichiers au Git..." -ForegroundColor Yellow
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
if ($LASTEXITCODE -ne 0) {
    Write-Host "   Aucun changement à commiter (OK)" -ForegroundColor Gray
} else {
    Write-Host "   OK: Changements committés" -ForegroundColor Green
}

# Étape 6: Déploiement gh-pages
Write-Host "6. Déploiement vers GitHub Pages..." -ForegroundColor Yellow
npx gh-pages -d out -t
if ($LASTEXITCODE -eq 0) {
    Write-Host "   OK: Déploiement réussi!" -ForegroundColor Green
} else {
    Write-Host "   ERROR: Déploiement échoué!" -ForegroundColor Red
    exit 1
}

# Étape 7: Pousser vers main (optionnel)
Write-Host "7. Push vers GitHub (optionnel)..." -ForegroundColor Yellow
Write-Host "   Souhaitez-vous pousser les changements vers main? (Y/N)" -ForegroundColor Cyan
$response = Read-Host "   Réponse"
if ($response.ToUpper() -eq "Y" -or $response.ToUpper() -eq "OUI") {
    git push -u origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   OK: Changements poussés vers main" -ForegroundColor Green
    } else {
        Write-Host "   Changements non poussés (vous pouvez le faire manuellement)" -ForegroundColor Yellow
    }
} else {
    Write-Host "   Skipped" -ForegroundColor Gray
}

# Résumé final
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "DEPLOIEMENT COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Votre site est maintenant en ligne à:" -ForegroundColor Cyan
Write-Host "https://gloireseigneurj-alt.github.io/taabohdss/" -ForegroundColor White -BackgroundColor DarkBlue
Write-Host ""
Write-Host "Vérification:" -ForegroundColor Yellow
Write-Host "1. Attendez 5-10 secondes" -ForegroundColor Gray
Write-Host "2. Actualisez la page (F5)" -ForegroundColor Gray
Write-Host "3. Videz le cache si nécessaire (Ctrl+Shift+Del)" -ForegroundColor Gray
Write-Host ""
