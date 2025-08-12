const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuración de imágenes a generar
const images = [
  { input: 'public/favicon-16x16.svg', output: 'public/favicon-16x16.png', size: 16 },
  { input: 'public/favicon-32x32.svg', output: 'public/favicon-32x32.png', size: 32 },
  { input: 'public/apple-touch-icon.svg', output: 'public/apple-touch-icon.png', size: 180 },
  { input: 'public/android-chrome-192x192.svg', output: 'public/android-chrome-192x192.png', size: 192 },
  { input: 'public/android-chrome-512x512.svg', output: 'public/android-chrome-512x512.png', size: 512 },
  { input: 'public/og-image.svg', output: 'public/og-image.png', size: 1200, height: 630 }
];

async function generateImages() {
  console.log('🖼️  Generando imágenes PNG desde SVG...');
  
  for (const image of images) {
    try {
      if (fs.existsSync(image.input)) {
        const outputPath = path.resolve(image.output);
        const outputDir = path.dirname(outputPath);
        
        // Crear directorio si no existe
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        
        // Configurar sharp
        let sharpInstance = sharp(image.input).resize(image.size, image.height || image.size);
        
        // Para el favicon, mantener transparencia
        if (image.output.includes('favicon')) {
          sharpInstance = sharpInstance.png();
        } else {
          sharpInstance = sharpInstance.png({ quality: 90 });
        }
        
        await sharpInstance.toFile(image.output);
        console.log(`✅ Generado: ${image.output}`);
      } else {
        console.log(`⚠️  No encontrado: ${image.input}`);
      }
    } catch (error) {
      console.error(`❌ Error generando ${image.output}:`, error.message);
    }
  }
  
  console.log('🎉 Proceso completado!');
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generateImages().catch(console.error);
}

module.exports = { generateImages };
