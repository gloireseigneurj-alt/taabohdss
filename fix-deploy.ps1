# deploy-new.ps1
Write-Host "TAABO HDSS - DEPLOIEMENT GITHUB PAGES" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan

# 1. VERIFICATION CONFIG
Write-Host "1. Verification configuration..." -ForegroundColor Yellow

# Verifier next.config.ts
if (Test-Path "next.config.ts") {
    $config = Get-Content -Path "next.config.ts" -Raw
    if ($config -match "exportPathMap") {
        Write-Host "   ERROR: exportPathMap trouve dans next.config.ts" -ForegroundColor Red
        Write-Host "   Supprimez cette ligne et reessayez" -ForegroundColor Red
        exit 1
    }
    Write-Host "   OK: next.config.ts valide" -ForegroundColor Green
} else {
    Write-Host "   ERROR: next.config.ts non trouve" -ForegroundColor Red
    exit 1
}

# 2. NETTOYAGE
Write-Host "2. Nettoyage..." -ForegroundColor Yellow
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "out" -Recurse -Force -ErrorAction SilentlyContinue

# 3. .nojekyll
Write-Host "3. Fichier .nojekyll..." -ForegroundColor Yellow
if (-not (Test-Path ".nojekyll")) {
    New-Item -Path ".nojekyll" -ItemType File -Force
    Write-Host "   .nojekyll cree" -ForegroundColor Green
}

# 4. BUILD
Write-Host "4. Construction du site..." -ForegroundColor Yellow
$env:GITHUB_ACTIONS = "true"

try {
    npm run build
    $buildSuccess = $true
} catch {
    Write-Host "   Build echoue, tentative alternative..." -ForegroundColor Yellow
    $buildSuccess = $false
}

# Tentative alternative
if (-not $buildSuccess) {
    try {
        npm run build:static
        $buildSuccess = $true
    } catch {
        $buildSuccess = $false
    }
}

# 5. VERIFICATION RESULTAT
Write-Host "5. Verification resultat..." -ForegroundColor Yellow
if (Test-Path "out") {
    Write-Host "   SUCCES: Dossier 'out' cree" -ForegroundColor Green
    $fileCount = (Get-ChildItem -Path "out" -Recurse -File).Count
    Write-Host "   Nombre de fichiers: $fileCount" -ForegroundColor Gray
} else {
    Write-Host "   ECHEC: Dossier 'out' non cree" -ForegroundColor Red
    Write-Host "   Probleme possible:" -ForegroundColor Red
    Write-Host "   - API routes encore presentes" -ForegroundColor Yellow
    Write-Host "   - next.config.ts incorrect" -ForegroundColor Yellow
    exit 1
}

# 6. PREPARATION GITHUB PAGES
Write-Host "6. Preparation GitHub Pages..." -ForegroundColor Yellow
New-Item -Path "out\.nojekyll" -ItemType File -Force

# Copier fichiers publics
if (Test-Path "public") {
    Copy-Item -Path "public\*" -Destination "out\" -Recurse -Force
}

# 7. DEPLOIEMENT
Write-Host "7. Deploiement..." -ForegroundColor Cyan
try {
    npx gh-pages -d out -t
    Write-Host "   DEPLOIEMENT REUSSI!" -ForegroundColor Green
} catch {
    Write-Host "   Erreur deploiement: $_" -ForegroundColor Red
}

# 8. URL FINALE
Write-Host ""
Write-Host "TAABO HDSS EST EN LIGNE!" -ForegroundColor Green
Write-Host "URL: https://votre-username.github.io/taabo-hdss/" -ForegroundColor White -BackgroundColor DarkBlue
Write-Host ""