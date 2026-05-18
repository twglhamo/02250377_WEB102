# Double-click or run: powershell -ExecutionPolicy Bypass -File START-APP.ps1
$root = $PSScriptRoot
$server = Join-Path $root 'TikTok_Server'
$frontend = Join-Path $root 'TikTok_Frontend'

Write-Host 'Stopping processes on port 8000 and 3000...' -ForegroundColor Cyan
8000, 3000 | ForEach-Object {
  Get-NetTCPConnection -LocalPort $_ -ErrorAction SilentlyContinue |
    ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }
}

Set-Location $server
if (Test-Path 'prisma\dev.db') { Remove-Item 'prisma\dev.db' -Force }
Write-Host 'Applying database migrations...' -ForegroundColor Cyan
npx prisma migrate deploy
npx prisma generate
Write-Host 'Seeding test data (user1@example.com / password123)...' -ForegroundColor Cyan
node prisma\seed.js

Write-Host 'Starting backend on http://localhost:8000 ...' -ForegroundColor Green
Start-Process powershell -ArgumentList '-NoExit', '-Command', "Set-Location '$server'; npm run dev"

Start-Sleep -Seconds 3
Write-Host 'Starting frontend on http://localhost:3000 ...' -ForegroundColor Green
Start-Process powershell -ArgumentList '-NoExit', '-Command', "Set-Location '$frontend'; npm run dev"

Start-Sleep -Seconds 8
Write-Host "`nHealth check:" -ForegroundColor Cyan
try {
  $api = Invoke-WebRequest 'http://localhost:8000/api/users' -UseBasicParsing -TimeoutSec 5
  Write-Host "  API: $($api.StatusCode) OK" -ForegroundColor Green
} catch {
  Write-Host "  API: FAILED - $($_.Exception.Message)" -ForegroundColor Red
}
try {
  $web = Invoke-WebRequest 'http://localhost:3000' -UseBasicParsing -TimeoutSec 5
  Write-Host "  Frontend: $($web.StatusCode) OK" -ForegroundColor Green
} catch {
  Write-Host "  Frontend: FAILED - $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`nOpen http://localhost:3000 and log in with user1@example.com / password123" -ForegroundColor Yellow
