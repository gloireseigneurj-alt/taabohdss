# setup-git.ps1 - Configuration Git pour Taabo HDSS (Windows PowerShell)

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Configuration Git pour Taabo HDSS" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier que Git est installé
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: Git n'est pas installé!" -ForegroundColor Red
    Write-Host "Téléchargez-le depuis: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Demander les informations
Write-Host "Entrez vos informations Git:" -ForegroundColor Yellow
$gitName = Read-Host "Nom (ex: Jean Doe)"
$gitEmail = Read-Host "Email (ex: jean@example.com)"

if (-not $gitName -or -not $gitEmail) {
    Write-Host "ERROR: Nom et Email sont requis!" -ForegroundColor Red
    exit 1
}

# Configurer Git globalement
Write-Host ""
Write-Host "Configuration de Git..." -ForegroundColor Yellow
git config --global user.name "$gitName"
git config --global user.email "$gitEmail"

if ($LASTEXITCODE -eq 0) {
    Write-Host "   OK: Configuration sauvegardée" -ForegroundColor Green
} else {
    Write-Host "   ERROR: Erreur lors de la configuration" -ForegroundColor Red
    exit 1
}

# Vérifier la configuration
Write-Host ""
Write-Host "Configuration vérifée:" -ForegroundColor Gray
Write-Host "  Nom: $(git config --global user.name)" -ForegroundColor Gray
Write-Host "  Email: $(git config --global user.email)" -ForegroundColor Gray
Write-Host ""

# Initialiser le repository (si pas déjà fait)
if (-not (Test-Path ".git")) {
    Write-Host "Initialisation du repository Git..." -ForegroundColor Yellow
    
    git init
    git remote add origin https://github.com/gloireseigneurj-alt/taabohdss.git
    
    Write-Host "  OK: Repository initialisé" -ForegroundColor Green
    Write-Host "  Remote: https://github.com/gloireseigneurj-alt/taabohdss.git" -ForegroundColor Gray
    
    # Premier commit
    Write-Host ""
    Write-Host "Création du premier commit..." -ForegroundColor Yellow
    git add .
    git commit -m "Initial commit - Taabo HDSS ($(Get-Date -Format 'yyyy-MM-dd HH:mm'))"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  OK: Premier commit créé" -ForegroundColor Green
    } else {
        Write-Host "  ERROR: Erreur lors du commit" -ForegroundColor Red
    }
} else {
    Write-Host "Repository Git déjà existant" -ForegroundColor Green
    $remote = git config --get remote.origin.url
    Write-Host "  Remote: $remote" -ForegroundColor Gray
}

# Afficher la configuration Git
Write-Host ""
Write-Host "=========================================" -ForegroundColor Green
Write-Host "✅ Configuration complète!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""

Write-Host "Statut Git:" -ForegroundColor Yellow
git status
Write-Host ""

Write-Host "Prochaines étapes:" -ForegroundColor Cyan
Write-Host "  1. npm install" -ForegroundColor White
Write-Host "  2. npm run dev" -ForegroundColor White
Write-Host "  3. Faire vos modifications" -ForegroundColor White
Write-Host "  4. Exécuter: powershell -ExecutionPolicy Bypass -File deploy-quick.ps1" -ForegroundColor White
Write-Host ""

Write-Host "Documentation:" -ForegroundColor Gray
Write-Host "  - DEPLOIEMENT_RAPIDE.md" -ForegroundColor Gray
Write-Host "  - COMMANDES.md" -ForegroundColor Gray
Write-Host ""
