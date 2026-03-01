@echo off
setlocal enabledelayedexpansion

REM Add runtime config to all API route.ts files

set "api_dir=C:\Users\yasin\OneDrive\Masaüstü\asistifyy\celenkdiyari\src\app\api"
set "runtime_config=export const runtime = 'nodejs';"

for /r "%api_dir%" %%F in (route.ts) do (
    set "file=%%F"
    echo Processing: !file!
    
    REM Check if runtime config already exists
    findstr /m "export const runtime" "!file!" >nul
    if errorlevel 1 (
        REM Add runtime config as first line
        (
            echo !runtime_config!
            type "!file!"
        ) > "!file!.tmp"
        move /y "!file!.tmp" "!file!"
        echo Added runtime config to !file!
    ) else (
        echo Runtime config already exists in !file!
    )
)

echo Done!
