export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jsarmiento.vercel.app/#person",
        "name": "Jesús Alberto Sarmiento Bautista",
        "givenName": "Jesús Alberto",
        "familyName": "Sarmiento Bautista",
        "url": "https://jsarmiento.vercel.app",
        "image": {
          "@type": "ImageObject",
          "url": "https://jsarmiento.vercel.app/jesus-sarmiento-profile.png",
          "width": 400,
          "height": 400,
          "caption": "Jesús Sarmiento - Desarrollador Full Stack"
        },
        "sameAs": [
          "https://github.com/jsarmiento1614",
          "https://linkedin.com/in/jsarmiento1614",
          "https://twitter.com/jsarmiento1614"
        ],
        "jobTitle": "Desarrollador Full Stack",
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Desarrollador Full Stack",
          "occupationalCategory": "15-1254.00",
          "description": "Desarrollador especializado en tecnologías web frontend y backend, aplicaciones móviles y sistemas escalables",
          "estimatedSalary": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": {
              "@type": "QuantitativeValue",
              "minValue": 30000,
              "maxValue": 80000,
              "unitText": "YEAR"
            }
          },
          "occupationLocation": {
            "@type": "AdministrativeArea",
            "name": "Honduras",
            "addressCountry": "HN"
          }
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
          "addressCountry": "HN",
          "addressRegion": "Honduras"
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
        "email": "jsarmiento1614@gmail.com",
        "telephone": "+504 8785-7498",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Centro Universitario Tecnológico Ceutec",
          "url": "https://ceutec.hn/"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://jsarmiento.vercel.app/#website",
        "name": "Jesús Sarmiento - Desarrollador Full Stack Portfolio",
        "alternateName": "jsarmiento.vercel.app",
        "url": "https://jsarmiento.vercel.app",
        "description": "Portfolio profesional de Jesús Sarmiento, desarrollador full stack especializado en React, Next.js, Angular y Node.js. Proyectos web y móviles para empresas.",
        "publisher": {
          "@id": "https://jsarmiento.vercel.app/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://jsarmiento.vercel.app/proyectos?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "es-ES"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://jsarmiento.vercel.app/#service",
        "name": "Servicios de Desarrollo Full Stack",
        "description": "Desarrollo de aplicaciones web modernas, aplicaciones móviles nativas y sistemas backend escalables utilizando las últimas tecnologías.",
        "areaServed": {
          "@type": "Place",
          "name": "Honduras"
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
        "serviceArea": {
          "@type": "Place",
          "name": "Honduras"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "HN",
          "addressRegion": "Honduras"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://jsarmiento.vercel.app/#organization",
        "name": "Jesús Sarmiento Development",
        "alternateName": "jsarmiento.vercel.app",
        "url": "https://jsarmiento.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jsarmiento.vercel.app/og-image.svg",
          "width": 1200,
          "height": 630
        },
        "founder": {
          "@id": "https://jsarmiento.vercel.app/#person"
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
          "telephone": "+504 8785-7498",
          "contactType": "customer service",
          "email": "jsarmiento1614@gmail.com",
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
