@echo off
REM deploy.bat - Déploiement simple pour Taabo HDSS
REM Double-cliquez sur ce fichier pour déployer automatiquement

echo.
echo =====================================
echo TAABO HDSS - DEPLOIEMENT GITHUB PAGES
echo =====================================
echo.

REM Vérifier PowerShell
where powershell >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: PowerShell n'est pas disponible!
    pause
    exit /b 1
)

REM Lancer le script PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy-quick.ps1"
pause
