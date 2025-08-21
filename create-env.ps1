# Script para crear el archivo .env.local correctamente
$content = @"
# Database - Prisma with Accelerate
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19yYlJWakZqSmtOSU1POVU5elVIbTYiLCJhcGlfa2V5IjoiMDFLMzVBVlk2TkpENDFYOUc1QzNDMkM5MEsiLCJ0ZW5hbnRfaWQiOiI3M2EzMDM0MTBkY2QyZTgyMDRkZjJkYzkzZDE0NjU2Njg5ZDRjZTgzYjQ1MGY5YjI5NzRkYzliOTA3NGZkOWRlIiwiaW50ZXJuYWxfc2VjcmV0IjoiMjQ1MTQ1ZmItMGNhMi00MTc4LTkwYjgtZmQ3MzE5ZjczZTc2In0._lCczLHeifmC8CyHRdJTno0tBzIqi8aXaIw9mz3-los"
DIRECT_URL="postgres://73a303410dcd2e8204df2dc93d14656689d4ce83b450f9b2974dc9b9074fd9de:sk_rbRVjFjJkNIMO9U9zUHm6@db.prisma.io:5432/?sslmode=require"

# API Security
API_SECRET="dev-portfolio-super-secret-2024"
NEXTJS_API_URL="http://localhost:3000"

# External Services
RESEND_API_KEY=re_gwWtb34P_2uCkZzzZepgbrDw2XFjVS8rq
NEXT_PUBLIC_GA_ID=G-WQS9GT3YJF

# N8n Integration
N8N_WEBHOOK_SECRET="n8n-webhook-secret-2024"

# AI Services
OPENAI_API_KEY="sk-xxxxxxxxxx"
ANTHROPIC_API_KEY="sk-ant-xxxxxxxxxx"
"@

$content | Out-File -FilePath ".env.local" -Encoding UTF8 -NoNewline
Write-Host "Archivo .env.local creado correctamente"
