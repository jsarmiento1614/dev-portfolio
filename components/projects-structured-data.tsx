interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  featured?: boolean
  link?: string
  github?: string
}

interface ProjectsStructuredDataProps {
  projects: Project[]
  pageTitle?: string
  pageDescription?: string
}

export default function ProjectsStructuredData({ projects, pageTitle, pageDescription }: ProjectsStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://jsarmiento.vercel.app/proyectos#page",
        "name": pageTitle,
        "description": pageDescription,
        "url": "https://jsarmiento.vercel.app/proyectos",
        "mainEntity": {
          "@type": "ItemList",
          "@id": "https://jsarmiento.vercel.app/proyectos#projects",
          "name": "Portfolio de Proyectos de Desarrollo",
          "description": "Colección de proyectos web y móviles desarrollados por Jesús Sarmiento",
          "numberOfItems": projects.length,
          "itemListElement": projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "CreativeWork",
              "@id": `https://jsarmiento.vercel.app/proyectos#${project.id}`,
              "name": project.title,
              "description": project.description,
              "image": {
                "@type": "ImageObject",
                "url": `https://jsarmiento.vercel.app${project.image}`,
                "caption": `Captura de pantalla del proyecto ${project.title}`,
                "description": `Vista previa del proyecto ${project.title} - ${project.description.substring(0, 100)}`
              },
              "creator": {
                "@type": "Person",
                "@id": "https://jsarmiento.vercel.app/#person",
                "name": "Jesús Sarmiento"
              },
              "genre": project.category,
              "keywords": project.technologies.join(", "),
              "about": project.technologies.map(tech => ({
                "@type": "Thing",
                "name": tech
              })),
              "programmingLanguage": project.technologies.filter(tech => 
                ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "Node.js", "Vue.js", "Python", "Java"].includes(tech)
              ),
              ...(project.link && {
                "url": project.link,
                "sameAs": project.link
              }),
              ...(project.github && {
                "codeRepository": project.github
              }),
              "dateCreated": "2023",
              "inLanguage": "es-ES",
              "license": "https://creativecommons.org/licenses/by/4.0/",
              "isAccessibleForFree": true,
              "educationalUse": "demonstration",
              "audience": {
                "@type": "Audience",
                "audienceType": "developers, businesses, startups"
              }
            }
          }))
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": "https://jsarmiento.vercel.app"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Proyectos",
              "item": "https://jsarmiento.vercel.app/proyectos"
            }
          ]
        },
        "author": {
          "@type": "Person",
          "@id": "https://jsarmiento.vercel.app/#person",
          "name": "Jesús Sarmiento"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://jsarmiento.vercel.app/#organization",
          "name": "Jesús Sarmiento Development"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://jsarmiento.vercel.app/proyectos#webpage",
        "url": "https://jsarmiento.vercel.app/proyectos",
        "name": pageTitle,
        "description": pageDescription,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://jsarmiento.vercel.app/#website"
        },
        "about": {
          "@type": "Thing",
          "name": "Desarrollo Web y Móvil"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "developers, businesses, startups"
        },
        "inLanguage": "es-ES",
        "isAccessibleForFree": true,
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "mainEntity": {
          "@type": "ItemList",
          "@id": "https://jsarmiento.vercel.app/proyectos#projects",
          "name": "Portfolio de Proyectos",
          "numberOfItems": projects.length,
          "itemListElement": projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "CreativeWork",
              "@id": `https://jsarmiento.vercel.app/proyectos#${project.id}`,
              "name": project.title,
              "description": project.description,
              "image": {
                "@type": "ImageObject",
                "url": `https://jsarmiento.vercel.app${project.image}`,
                "caption": `Captura de pantalla del proyecto ${project.title}`
              },
              "creator": {
                "@type": "Person",
                "@id": "https://jsarmiento.vercel.app/#person",
                "name": "Jesús Sarmiento"
              },
              "genre": project.category,
              "keywords": project.technologies.join(", "),
              "dateCreated": "2023",
              "inLanguage": "es-ES",
              "license": "https://creativecommons.org/licenses/by/4.0/",
              "isAccessibleForFree": true
            }
          }))
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
