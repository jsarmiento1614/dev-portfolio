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

export default function ProjectsStructuredData({ 
  projects, 
  pageTitle = "Proyectos - Portfolio de Desarrollo",
  pageDescription = "Explora mi portfolio de proyectos web y móviles desarrollados con React, Next.js, Angular, Node.js y tecnologías modernas."
}: ProjectsStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://jsarmiento.dev/proyectos#page",
        "name": pageTitle,
        "description": pageDescription,
        "url": "https://jsarmiento.dev/proyectos",
        "mainEntity": {
          "@type": "ItemList",
          "@id": "https://jsarmiento.dev/proyectos#projects",
          "name": "Portfolio de Proyectos de Desarrollo",
          "description": "Colección de proyectos web y móviles desarrollados por Jesús Sarmiento",
          "numberOfItems": projects.length,
          "itemListElement": projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "CreativeWork",
              "@id": `https://jsarmiento.dev/proyectos#${project.id}`,
              "name": project.title,
              "description": project.description,
              "image": {
                "@type": "ImageObject",
                "url": `https://jsarmiento.dev${project.image}`,
                "caption": `Captura de pantalla del proyecto ${project.title}`,
                "description": `Vista previa del proyecto ${project.title} - ${project.description.substring(0, 100)}`
              },
              "creator": {
                "@type": "Person",
                "@id": "https://jsarmiento.dev/#person",
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
              "item": "https://jsarmiento.dev"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Proyectos",
              "item": "https://jsarmiento.dev/proyectos"
            }
          ]
        },
        "author": {
          "@type": "Person",
          "@id": "https://jsarmiento.dev/#person",
          "name": "Jesús Sarmiento"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://jsarmiento.dev/#organization",
          "name": "Jesús Sarmiento Development"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://jsarmiento.dev/proyectos#webpage",
        "url": "https://jsarmiento.dev/proyectos",
        "name": pageTitle,
        "description": pageDescription,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://jsarmiento.dev/#website"
        },
        "about": {
          "@type": "Thing",
          "name": "Desarrollo de Software",
          "sameAs": "https://es.wikipedia.org/wiki/Desarrollo_de_software"
        },
        "mentions": projects.map(project => ({
          "@type": "SoftwareApplication",
          "name": project.title,
          "description": project.description,
          "applicationCategory": project.category,
          "operatingSystem": "Web, Mobile",
          "programmingLanguage": project.technologies
        })),
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://jsarmiento.dev/og-image.svg",
          "width": 1200,
          "height": 630
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
