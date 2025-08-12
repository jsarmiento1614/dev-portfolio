#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🔍 Verificando configuración de Google Analytics...\n')

// Verificar archivo .env.local
const envPath = path.join(process.cwd(), '.env.local')
if (!fs.existsSync(envPath)) {
  console.log('❌ Archivo .env.local no encontrado')
  console.log('   Crea el archivo .env.local con: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX')
  process.exit(1)
}

const envContent = fs.readFileSync(envPath, 'utf8')
const gaIdMatch = envContent.match(/NEXT_PUBLIC_GA_ID=(G-[A-Z0-9]+)/)

if (!gaIdMatch) {
  console.log('❌ NEXT_PUBLIC_GA_ID no encontrado en .env.local')
  console.log('   Asegúrate de que el archivo contenga: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX')
  process.exit(1)
}

const gaId = gaIdMatch[1]
console.log(`✅ Google Analytics ID encontrado: ${gaId}`)

// Verificar que el ID tenga el formato correcto
if (!gaId.startsWith('G-')) {
  console.log('❌ El ID de Google Analytics debe comenzar con "G-"')
  process.exit(1)
}

// Verificar archivos de componentes
const requiredFiles = [
  'components/google-analytics.tsx',
  'components/vercel-analytics.tsx',
  'lib/analytics.ts',
  'hooks/use-analytics.ts',
  'hooks/use-vercel-analytics.ts'
]

console.log('\n📁 Verificando archivos de componentes...')
let allFilesExist = true

requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file)
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`)
  } else {
    console.log(`❌ ${file} - No encontrado`)
    allFilesExist = false
  }
})

if (!allFilesExist) {
  console.log('\n❌ Algunos archivos requeridos no existen')
  process.exit(1)
}

// Verificar integración en layout
const layoutPath = path.join(process.cwd(), 'app/layout.tsx')
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8')
  if (layoutContent.includes('GoogleAnalytics')) {
    console.log('✅ GoogleAnalytics integrado en layout.tsx')
  } else {
    console.log('❌ GoogleAnalytics no encontrado en layout.tsx')
  }
  
  if (layoutContent.includes('VercelAnalytics')) {
    console.log('✅ VercelAnalytics integrado en layout.tsx')
  } else {
    console.log('❌ VercelAnalytics no encontrado en layout.tsx')
  }
}

console.log('\n🎉 Configuración de Analytics verificada correctamente!')
console.log('\n📋 Próximos pasos:')
console.log('1. Ejecuta: npm run dev')
console.log('2. Abre http://localhost:3000')
console.log('3. Usa el botón "Debug Analytics" en la esquina inferior derecha')
console.log('4. Verifica en las herramientas de desarrollador (F12) > Network')
console.log('5. Busca requests a googletagmanager.com y vitals.vercel-insights.com')
console.log('\n📊 Para ver datos en Google Analytics:')
console.log('1. Ve a tu panel de Google Analytics')
console.log('2. Navega a Reports > Realtime > Overview')
console.log('3. Visita tu sitio web')
console.log('4. Deberías ver actividad en tiempo real')
console.log('\n📊 Para ver datos en Vercel Analytics:')
console.log('1. Ve a tu dashboard de Vercel')
console.log('2. Navega a Analytics > Web Analytics')
console.log('3. Visita tu sitio web')
console.log('4. Deberías ver datos en tiempo real')
