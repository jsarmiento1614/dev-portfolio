export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jsarmiento.dev/#person",
        "name": "Jesús Alberto Sarmiento Bautista",
        "givenName": "Jesús Alberto",
        "familyName": "Sarmiento Bautista",
        "url": "https://jsarmiento.dev",
        "image": {
          "@type": "ImageObject",
          "url": "https://jsarmiento.dev/jesus-sarmiento-profile.png",
          "width": 400,
          "height": 400,
          "caption": "Jesús Sarmiento - Desarrollador Full Stack"
        },
        "sameAs": [
          "https://github.com/jsarmiento",
          "https://linkedin.com/in/jsarmiento",
          "https://twitter.com/jsarmiento_dev"
        ],
        "jobTitle": "Desarrollador Full Stack",
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Desarrollador Full Stack",
          "occupationalCategory": "15-1254.00",
          "description": "Desarrollador especializado en tecnologías web frontend y backend, aplicaciones móviles y sistemas escalables"
        },
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance",
          "description": "Servicios independientes de desarrollo de software"
        },
        "description": "Desarrollador Full Stack con más de 6 años de experiencia especializado en React, Next.js, Angular y Node.js. Experto en crear aplicaciones web responsivas, aplicaciones móviles nativas y sistemas escalables para empresas y startups.",
        "knowsAbout": [
          "React.js",
          "Next.js", 
          "Angular",
          "Node.js",
          "TypeScript",
          "JavaScript",
          "PostgreSQL",
          "MongoDB",
          "Docker",
          "Desarrollo Web Frontend",
          "Desarrollo Backend",
          "Aplicaciones Móviles",
          "React Native",
          "Vue.js",
          "Express.js",
          "Arquitectura de Software",
          "APIs REST",
          "GraphQL",
          "Microservicios"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ES",
          "addressRegion": "España"
        },
        "knowsLanguage": [
          {
            "@type": "Language",
            "name": "Español",
            "alternateName": "es"
          },
          {
            "@type": "Language", 
            "name": "English",
            "alternateName": "en"
          }
        ],
        "email": "contacto@jsarmiento.dev",
        "telephone": "+34-XXX-XXX-XXX",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Universidad Tecnológica"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://jsarmiento.dev/#website",
        "name": "Jesús Sarmiento - Desarrollador Full Stack Portfolio",
        "alternateName": "jsarmiento.dev",
        "url": "https://jsarmiento.dev",
        "description": "Portfolio profesional de Jesús Sarmiento, desarrollador full stack especializado en React, Next.js, Angular y Node.js. Proyectos web y móviles para empresas.",
        "publisher": {
          "@id": "https://jsarmiento.dev/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://jsarmiento.dev/proyectos?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "es-ES"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://jsarmiento.dev/#service",
        "name": "Servicios de Desarrollo Full Stack",
        "description": "Desarrollo de aplicaciones web modernas, aplicaciones móviles nativas y sistemas backend escalables utilizando las últimas tecnologías.",
        "provider": {
          "@id": "https://jsarmiento.dev/#person"
        },
        "areaServed": {
          "@type": "Place",
          "name": "España"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Desarrollo",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Desarrollo Frontend React/Next.js",
                "description": "Creación de interfaces de usuario modernas y responsivas con React, Next.js y TypeScript"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Desarrollo Backend Node.js",
                "description": "APIs REST, GraphQL y microservicios con Node.js, Express y bases de datos"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Aplicaciones Móviles",
                "description": "Desarrollo de apps nativas y híbridas para iOS y Android"
              }
            }
          ]
        },
        "serviceType": "Desarrollo de Software",
        "serviceArea": {
          "@type": "Place",
          "name": "España"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://jsarmiento.dev/#organization",
        "name": "Jesús Sarmiento Development",
        "alternateName": "jsarmiento.dev",
        "url": "https://jsarmiento.dev",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jsarmiento.dev/og-image.svg",
          "width": 1200,
          "height": 630
        },
        "founder": {
          "@id": "https://jsarmiento.dev/#person"
        },
        "foundingDate": "2018",
        "description": "Estudio de desarrollo especializado en soluciones web y móviles modernas",
        "knowsAbout": [
          "Desarrollo Web",
          "Aplicaciones Móviles", 
          "React",
          "Next.js",
          "Node.js",
          "TypeScript"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34-XXX-XXX-XXX",
          "contactType": "customer service",
          "email": "contacto@jsarmiento.dev",
          "availableLanguage": ["es", "en"]
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
