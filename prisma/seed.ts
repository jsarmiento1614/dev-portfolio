import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...')

  // Crear usuario autor por defecto
  const author = await prisma.user.upsert({
    where: { email: 'jsarmiento1614@gmail.com' },
    update: {},
    create: {
      email: 'jsarmiento1614@gmail.com',
      name: 'Jesús Sarmiento',
      role: 'ADMIN',
    },
  })

  console.log('✅ Usuario creado:', author.name)

  // Crear tags por defecto
  const defaultTags = [
    { name: 'React', slug: 'react', color: '#61DAFB', description: 'Librería de JavaScript para interfaces de usuario' },
    { name: 'Next.js', slug: 'nextjs', color: '#000000', description: 'Framework de React para producción' },
    { name: 'Angular', slug: 'angular', color: '#DD0031', description: 'Plataforma para aplicaciones web' },
    { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E', description: 'Lenguaje de programación web' },
    { name: 'TypeScript', slug: 'typescript', color: '#3178C6', description: 'JavaScript con tipado estático' },
    { name: 'Web Development', slug: 'web-development', color: '#00D8FF', description: 'Desarrollo de aplicaciones web' },
    { name: 'Frontend', slug: 'frontend', color: '#FF6B6B', description: 'Desarrollo del lado del cliente' },
    { name: 'Backend', slug: 'backend', color: '#4ECDC4', description: 'Desarrollo del lado del servidor' },
    { name: 'Full Stack', slug: 'full-stack', color: '#45B7D1', description: 'Desarrollo completo de aplicaciones' },
    { name: 'Performance', slug: 'performance', color: '#96CEB4', description: 'Optimización y rendimiento' },
  ]

  for (const tag of defaultTags) {
    await prisma.tag.upsert({
      where: { slug: tag.slug },
      update: {},
      create: tag,
    })
  }

  console.log('✅ Tags creados')

  // Migrar posts existentes desde MDX
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  
  if (fs.existsSync(postsDirectory)) {
    const fileNames = fs.readdirSync(postsDirectory)
    
    for (const fileName of fileNames) {
      if (fileName.endsWith('.mdx')) {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        // Calcular tiempo de lectura
        const wordCount = content.split(/\s+/).length
        const readingTime = Math.ceil(wordCount / 200)

        // Crear o actualizar post
        const post = await prisma.post.upsert({
          where: { slug },
          update: {
            title: data.title,
            description: data.description,
            content: { mdx: content, frontmatter: data },
            readingTime,
            authorId: author.id,
            status: 'PUBLISHED',
            publishedAt: new Date(data.date),
          },
          create: {
            slug,
            title: data.title,
            description: data.description,
            content: { mdx: content, frontmatter: data },
            readingTime,
            authorId: author.id,
            status: 'PUBLISHED',
            publishedAt: new Date(data.date),
          },
        })

        // Conectar tags
        if (data.tags && Array.isArray(data.tags)) {
          for (const tagName of data.tags) {
            const tag = await prisma.tag.findFirst({
              where: { 
                OR: [
                  { name: { equals: tagName, mode: 'insensitive' } },
                  { slug: tagName.toLowerCase().replace(/\s+/g, '-') }
                ]
              }
            })

            if (tag) {
              await prisma.postTag.upsert({
                where: {
                  postId_tagId: {
                    postId: post.id,
                    tagId: tag.id
                  }
                },
                update: {},
                create: {
                  postId: post.id,
                  tagId: tag.id
                }
              })
            }
          }
        }

        console.log(`✅ Post migrado: ${post.title}`)
      }
    }
  }

  console.log('🎉 Seed completado!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
