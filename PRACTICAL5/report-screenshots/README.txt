WEB102 Practical 05 - Report Screenshots
=========================================

STEP 1 - Start the app (REQUIRED before screenshots):
  Right-click START-APP.ps1 in PRACTICAL5 folder -> Run with PowerShell
  OR in PowerShell:
    cd PRACTICAL5\TikTok_Server
    npm run kill-port
    npm run db:reset
    npm run dev
  Then new terminal:
    cd PRACTICAL5\TikTok_Frontend
    npm run dev

STEP 2 - Copy browser screenshots:
  Run: powershell -ExecutionPolicy Bypass -File copy-screenshots.ps1

STEP 3 - Manual Supabase dashboard (log in at supabase.com):
  - Project overview (page 3)
  - Storage -> videos bucket (page 4)
  - Storage -> thumbnails bucket (page 4)
  - Policies for videos (page 5)
  - Policies for thumbnails (page 5)
  - Files inside videos bucket after upload (page 12)

STEP 4 - Code screenshots from Cursor (Win+Shift+S):
  TikTok_Server/src/lib/supabase.js
  TikTok_Server/src/services/storageService.js
  TikTok_Server/src/controllers/videoController.js
  TikTok_Server/prisma/schema.prisma
  TikTok_Frontend/src/services/uploadService.js
  TikTok_Frontend/src/app/upload/page.jsx
  TikTok_Frontend/src/components/ui/VideoCard.jsx

Test login: user1@example.com / password123

Cursor-captured PNG names (after copy-screenshots.ps1):
  01-app-home-feed.png
  02-login-page.png
  03-upload-auth-required.png
  04-supabase-sign-in.png
  05-home-failed-load-videos.png
  06-signup-page.png
