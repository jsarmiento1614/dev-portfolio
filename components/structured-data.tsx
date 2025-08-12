export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jesús Sarmiento",
    "url": "https://jsarmiento.dev",
    "image": "https://jsarmiento.dev/jesus-sarmiento-profile.png",
    "sameAs": [
      "https://github.com/jsarmiento",
      "https://linkedin.com/in/jsarmiento",
      "https://twitter.com/jsarmiento_dev"
    ],
    "jobTitle": "Desarrollador Full Stack",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Desarrollador Full Stack especializado en React, Next.js, Angular y Node.js. Construyo experiencias digitales simples y efectivas.",
    "knowsAbout": [
      "React",
      "Next.js", 
      "Angular",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Desarrollo Web",
      "Aplicaciones Móviles"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    },
    "knowsLanguage": ["es", "en"]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
