$src = Join-Path $env:LOCALAPPDATA 'Temp\cursor\screenshots'
$dest = $PSScriptRoot

if (-not (Test-Path $src)) {
  Write-Host "No screenshots at $src"
  exit 1
}

Copy-Item (Join-Path $src '*.png') $dest -Force
Get-ChildItem $dest -Filter *.png | Sort-Object Name | Format-Table Name, @{N='KB';E={[math]::Round($_.Length/1KB,1)}}
