# fix-deploy.ps1
Write-Host "TAABO HDSS - DEPLOIEMENT GITHUB PAGES" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan

# 1. VERIFICATION CONFIG
Write-Host "1. Verification configuration..." -ForegroundColor Yellow

# Verifier next.config.ts
if (Test-Path "next.config.ts") {
    $config = Get-Content -Path "next.config.ts" -Raw
    if ($config -match "pages-router|exportPathMap") {
        Write-Host "   ERROR: Configuration incompatible detaillee" -ForegroundColor Red
        Write-Host "   Utilisez le mode App Router avec export statique" -ForegroundColor Red
        exit 1
    }
    Write-Host "   OK: next.config.ts valide" -ForegroundColor Green
} else {
    Write-Host "   ERROR: next.config.ts non trouve" -ForegroundColor Red
    exit 1
}

# 2. NETTOYAGE
Write-Host "2. Nettoyage des anciens builds..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "   Dossier .next supprime" -ForegroundColor Gray
}
if (Test-Path "out") {
    Remove-Item -Path "out" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "   Dossier out supprime" -ForegroundColor Gray
}

# 3. FICHIER .nojekyll
Write-Host "3. Creation du fichier .nojekyll..." -ForegroundColor Yellow
New-Item -Path ".nojekyll" -ItemType File -Force | Out-Null
Write-Host "   OK: .nojekyll cree" -ForegroundColor Green

# 4. BUILD POUR GITHUB PAGES
Write-Host "4. Construction du site pour GitHub Pages..." -ForegroundColor Yellow
$env:GITHUB_ACTIONS = "true"

try {
    npm run build:static
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   OK: Build reussi" -ForegroundColor Green
    } else {
        Write-Host "   ERROR: Build a echoue avec le code $LASTEXITCODE" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "   ERROR: Exception lors du build: $_" -ForegroundColor Red
    exit 1
}

# 5. VERIFICATION RESULTAT
Write-Host "5. Verification du resultat du build..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Write-Host "   OK: Dossier .next cree" -ForegroundColor Green
    if (Test-Path ".next/static") {
        $fileCount = (Get-ChildItem -Path ".next/static" -Recurse -File | Measure-Object).Count
        Write-Host "   Fichiers statiques: $fileCount" -ForegroundColor Gray
    }
} else {
    Write-Host "   ERROR: Dossier .next non cree" -ForegroundColor Red
    Write-Host "   Verifiez votre configuration next.config.ts" -ForegroundColor Yellow
    exit 1
}

# 6. PREPARATION POUR GITHUB PAGES
Write-Host "6. Preparation des fichiers pour GitHub Pages..." -ForegroundColor Yellow
if (-not (Test-Path "out")) {
    New-Item -Path "out" -ItemType Directory -Force | Out-Null
}

# Copier les fichiers statiques
if (Test-Path ".next/static") {
    Copy-Item -Path ".next/static" -Destination "out/.next" -Recurse -Force
    Write-Host "   Fichiers statiques copies" -ForegroundColor Gray
}

# Copier les fichiers publics
if (Test-Path "public") {
    Copy-Item -Path "public/*" -Destination "out" -Recurse -Force -Exclude ".DS_Store"
    Write-Host "   Dossier public copie" -ForegroundColor Gray
}

# Copier le fichier .nojekyll
Copy-Item -Path ".nojekyll" -Destination "out/.nojekyll" -Force
Write-Host "   Fichier .nojekyll copie" -ForegroundColor Gray

# Verifier les fichiers HTML exportes
if (Test-Path ".next/server") {
    $htmlFiles = Get-ChildItem -Path ".next/server" -Filter "*.html" -Recurse
    if ($htmlFiles.Count -gt 0) {
        foreach ($file in $htmlFiles) {
            $destPath = "out/" + $file.Name
            Copy-Item -Path $file.FullName -Destination $destPath -Force
        }
        Write-Host "   Fichiers HTML copies ($($htmlFiles.Count) fichiers)" -ForegroundColor Gray
    }
}

# 7. INFORMATION DE DEPLOIEMENT
Write-Host "7. Informations de deploiement..." -ForegroundColor Cyan
$outFileCount = (Get-ChildItem -Path "out" -Recurse -File | Measure-Object).Count
Write-Host "   Total de fichiers dans out/: $outFileCount" -ForegroundColor Gray

Write-Host ""
Write-Host "PREPARATION COMPLETE!" -ForegroundColor Green
Write-Host "Prochaines etapes:" -ForegroundColor Cyan
Write-Host "  1. Initialisez git: git init" -ForegroundColor White
Write-Host "  2. Ajoutez le remote: git remote add origin https://github.com/gloireseigneurj-alt/taabohdss.git" -ForegroundColor White
Write-Host "  3. Poussez vers GitHub: git push -u origin main" -ForegroundColor White
Write-Host "  4. Allez a Settings > Pages et selectionnez 'Deploy from a branch'" -ForegroundColor White
Write-Host "  5. Selectionnez la branche gh-pages" -ForegroundColor White
Write-Host ""
Write-Host "DEPLOIEMENT AVEC gh-pages:" -ForegroundColor Cyan
Write-Host "  npx gh-pages -d out -t" -ForegroundColor White
Write-Host ""
Write-Host "URL finale: https://gloireseigneurj-alt.github.io/taabohdss/" -ForegroundColor Green
Write-Host ""