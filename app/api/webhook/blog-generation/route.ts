import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Esquema de validación para la generación de blog
const BlogGenerationSchema = z.object({
  topic: z.string().min(1, 'El tema es requerido'),
  keywords: z.array(z.string()).optional().default([]),
  tone: z.enum(['professional', 'casual', 'technical']).default('professional'),
  length: z.enum(['short', 'medium', 'long']).default('medium'),
  language: z.enum(['es', 'en']).default('es'),
  targetAudience: z.enum(['developers', 'beginners', 'advanced']).default('developers'),
  includeCodeExamples: z.boolean().default(true),
  category: z.string().optional()
})

export async function POST(request: NextRequest) {
  try {
    // Verificar webhook secret
    const webhookSecret = request.headers.get('x-webhook-secret')
    if (webhookSecret !== process.env.N8N_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = BlogGenerationSchema.parse(body)

    // Generar prompt personalizado para IA
    const prompt = generatePrompt(validatedData)
    
    // Generar slug único
    const slug = generateSlug(validatedData.topic)

    // Generar metadatos para el post
    const metadata = {
      title: validatedData.topic,
      description: generateDescription(validatedData.topic, validatedData.targetAudience),
      tags: [...validatedData.keywords, getCategoryTags(validatedData.category)].filter(Boolean),
      slug,
      tone: validatedData.tone,
      length: validatedData.length,
      language: validatedData.language,
      targetAudience: validatedData.targetAudience,
      includeCodeExamples: validatedData.includeCodeExamples,
      estimatedReadingTime: getEstimatedReadingTime(validatedData.length),
      seoTitle: generateSEOTitle(validatedData.topic),
      seoDescription: generateSEODescription(validatedData.topic, validatedData.keywords)
    }

    // Responder con el prompt y metadatos para N8n
    return NextResponse.json({
      success: true,
      prompt,
      metadata,
      instructions: {
        nextStep: 'Use este prompt con tu IA preferida (Claude, GPT-4, etc.)',
        expectedFormat: 'MDX con frontmatter',
        postEndpoint: `${process.env.NEXTJS_API_URL}/api/posts`,
        authHeader: `Bearer ${process.env.API_SECRET}`
      }
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error in blog generation webhook:', error)
    return NextResponse.json(
      { error: 'Error procesando la solicitud' },
      { status: 500 }
    )
  }
}

// Función para generar prompt personalizado
function generatePrompt(data: typeof BlogGenerationSchema._type): string {
  const lengthMap = {
    short: '800-1200 palabras',
    medium: '1500-2500 palabras',
    long: '3000-4500 palabras'
  }

  const toneMap = {
    professional: 'profesional y técnico, pero accesible',
    casual: 'relajado y conversacional, como hablando con un colega',
    technical: 'muy técnico y detallado, para desarrolladores experimentados'
  }

  const audienceMap = {
    developers: 'desarrolladores con experiencia en tecnologías web',
    beginners: 'personas que están aprendiendo desarrollo web',
    advanced: 'desarrolladores senior y arquitectos de software'
  }

  let prompt = `
Escribe un artículo de blog técnico en ${data.language === 'es' ? 'español' : 'inglés'} sobre "${data.topic}" con las siguientes especificaciones:

## CONTEXTO
Eres Jesús Sarmiento, un desarrollador full stack con más de 6 años de experiencia en React, Next.js, Angular, Node.js y tecnologías modernas. Escribes desde Honduras y compartes tu experiencia práctica con la comunidad de desarrolladores.

## ESPECIFICACIONES DEL ARTÍCULO
- **Longitud**: ${lengthMap[data.length]}
- **Tono**: ${toneMap[data.tone]}
- **Audiencia**: ${audienceMap[data.targetAudience]}
- **Palabras clave**: ${data.keywords.join(', ') || 'desarrollo web, programación, tecnología'}

## ESTRUCTURA REQUERIDA
1. **Introducción** (150-200 palabras)
   - Hook que capture la atención
   - Problema o situación que se va a resolver
   - Qué aprenderá el lector

2. **Desarrollo Principal** (70% del contenido)
   - Explicaciones claras y paso a paso
   - ${data.includeCodeExamples ? 'Ejemplos de código funcionales y comentados' : 'Conceptos teóricos bien explicados'}
   - Casos de uso reales de tu experiencia
   - Mejores prácticas y tips profesionales

3. **Ejemplos Prácticos** ${data.includeCodeExamples ? '(OBLIGATORIO)' : '(Opcional)'}
   ${data.includeCodeExamples ? `
   - Incluye al menos 2-3 ejemplos de código
   - Usa syntax highlighting apropiado
   - Comenta el código explicando partes importantes
   - Muestra tanto el código como el resultado esperado
   ` : ''}

4. **Conclusiones** (100-150 palabras)
   - Resumen de puntos clave
   - Próximos pasos para el lector
   - Invitación a comentar o compartir experiencias

## FORMATO Y ESTILO
- Usa formato MDX (Markdown con componentes React)
- Incluye frontmatter con metadatos
- Usa headings jerárquicos (H2, H3, H4)
- Incluye blockquotes para tips importantes
- Usa listas para organizar información
- Incluye enlaces a documentación oficial cuando sea relevante

## ELEMENTOS ESPECÍFICOS A INCLUIR
- Al menos 1 blockquote con un tip importante
- Uso de emojis sutiles para mejorar la legibilidad
- Referencias a tu experiencia personal cuando sea apropiado
- Llamadas a la acción para engagement (comentarios, compartir)

## PALABRAS CLAVE A INCORPORAR NATURALMENTE
${data.keywords.map(keyword => `- ${keyword}`).join('\n')}

## EJEMPLO DE FRONTMATTER
\`\`\`yaml
---
title: "${data.topic}"
description: "Descripción clara y atractiva del artículo"
date: "${new Date().toISOString().split('T')[0]}"
tags: [${data.keywords.map(k => `"${k}"`).join(', ')}]
author: "Jesús Sarmiento"
readingTime: ${getEstimatedReadingTime(data.length)}
seoTitle: "SEO optimizado title"
seoDescription: "Meta description para SEO"
---
\`\`\`

El contenido debe ser práctico, actualizado, y basado en experiencia real. Evita contenido genérico y enfócate en insights valiosos que realmente ayuden a ${audienceMap[data.targetAudience]}.
`

  return prompt.trim()
}

// Función para generar slug
function generateSlug(topic: string): string {
  return topic
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/-+/g, '-') // Múltiples guiones a uno
    .trim()
    .substring(0, 60) // Máximo 60 caracteres
}

// Función para generar descripción
function generateDescription(topic: string, audience: string): string {
  const audienceMap = {
    developers: 'desarrolladores',
    beginners: 'principiantes en desarrollo web',
    advanced: 'desarrolladores experimentados'
  }
  
  return `Guía completa sobre ${topic} para ${audienceMap[audience]}. Aprende las mejores prácticas, tips profesionales y ejemplos prácticos basados en experiencia real.`
}

// Función para obtener tags de categoría
function getCategoryTags(category?: string): string[] {
  const categoryTags: Record<string, string[]> = {
    'frontend': ['React', 'JavaScript', 'CSS', 'HTML'],
    'backend': ['Node.js', 'API', 'Database'],
    'fullstack': ['Full Stack', 'Web Development'],
    'mobile': ['Mobile Development', 'React Native'],
    'devops': ['DevOps', 'Deployment'],
    'performance': ['Performance', 'Optimization'],
    'testing': ['Testing', 'Quality Assurance']
  }
  
  return category ? categoryTags[category] || [] : []
}

// Función para estimar tiempo de lectura
function getEstimatedReadingTime(length: string): number {
  const timeMap = {
    short: 5,
    medium: 8,
    long: 15
  }
  
  return timeMap[length as keyof typeof timeMap] || 8
}

// Función para generar título SEO
function generateSEOTitle(topic: string): string {
  return `${topic} - Guía Completa | Jesús Sarmiento Developer`
}

// Función para generar descripción SEO
function generateSEODescription(topic: string, keywords: string[]): string {
  const keywordString = keywords.slice(0, 3).join(', ')
  return `Aprende ${topic} con ejemplos prácticos y mejores prácticas. Guía completa sobre ${keywordString} por Jesús Sarmiento, desarrollador full stack.`
}
