import jsPDF from 'jspdf'

// Datos del CV
const cvData = {
  personalInfo: {
    name: "Jesús Alberto Sarmiento Bautista",
    title: "Full Stack Developer & UX/UI Designer",
    email: "jsarmiento1614@gmail.com",
    phone: "+504 8785-7498",
    location: "La Entrada, Copán, Honduras",
    linkedin: "linkedin.com/in/jsarmiento1614",
    github: "github.com/jsarmiento1614",
    portfolio: "jsarmiento.vercel.app"
  },
  summary: "Desarrollador Full Stack con más de 6 años de experiencia en desarrollo web y móvil. Especializado en Angular, .NET/C#, Flutter y tecnologías modernas. Enfocado en crear experiencias digitales excepcionales que combinan funcionalidad, diseño UX/UI y mejores prácticas de desarrollo. Experiencia liderando equipos y proyectos de modernización tecnológica.",
  education: [
    {
      degree: "Ingeniería en Informática",
      institution: "CEUTEC de UNITEC",
      location: "San Pedro Sula, Honduras",
      year: "2020-06 - Act.",
      details: "Formación avanzada en desarrollo de software, gestión de bases de datos, arquitectura de sistemas y liderazgo de proyectos tecnológicos. Participación en proyectos prácticos y trabajos colaborativos enfocados en la resolución de problemas reales del sector TI."
    },
    {
      degree: "Técnico Universitario en Diseño y Desarrollo Web, Informática",
      institution: "CEUTEC de UNITEC",
      location: "San Pedro Sula, Honduras",
      year: "2017-06 - 2020-06",
      details: "Especialización en diseño y desarrollo de aplicaciones web, manejo de tecnologías frontend y backend, y fundamentos sólidos en experiencia de usuario (UX/UI). Desarrollo de proyectos integrales desde la conceptualización hasta la implementación."
    }
  ],
  skills: {
    frontend: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    backend: [".NET/C#", "Node.js", "Java", "RESTful APIs", "GraphQL"],
    mobile: ["Flutter", "Xamarin"],
    databases: ["SQL Server", "PostgreSQL", "MongoDB", "MySQL", "Firebase"],
    tools: ["Docker", "Git", "Azure", "Figma", "Adobe Creative Suite", "Postman"],
    design: ["UI/UX Design", "Prototyping", "Wireframing", "Design Systems", "User Research"]
  },
  languages: [
    {
      language: "Español",
      level: "Nativo"
    },
    {
      language: "Inglés",
      level: "Basico (A1-A2)"
    }
  ],
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Freelance / Consultor Independiente",
      period: "2020 - Presente",
      location: "Honduras",
      description: "Desarrollo de aplicaciones web y móviles para clientes internacionales. Apoyo en proyectos de modernización tecnológica, arquitectura de sistemas y optimización de procesos empresariales.",
      achievements: [
        "Apoye en la modernización de 3+ sistemas legacy a tecnologías modernas",
        "Implemente soluciones escalables y mantenibles para diversos sectores industriales",
        "Desarrollé aplicaciones para más de 10,000 usuarios activos"
      ]
    },
    {
      title: "Full Stack Developer", 
      company: "Grupo Leitz",
      period: "2019 - actualidad",
      location: "Tegucigalpa, Honduras",
      description: "Desarrollo de sistemas empresariales con tecnologías .NET, Angular y Java. Implementación de soluciones escalables y mantenibles para diversos sectores industriales.",
      achievements: [
        "Desarrollé 3 sistemas empresariales completos",
        "Apoye en la modernización de +5 sistemas legacy a tecnologías modernas",
        "Implementé soluciones escalables y mantenibles para diversos sectores industriales",
      ]
    },
    {
      title: "Desarrollador Web Junior",
      company: "Grupo Leitz",
      period: "2019 - 2020", 
      location: "Tegucigalpa, Honduras",
      description: "Desarrollo de sitios web responsivos y aplicaciones básicas.",
      achievements: [
        "Desarrollé 2 sistemas empresariales completos",
        "Implementé soluciones escalables y mantenibles para diversos sectores industriales",
      ]
    }
  ],
  projects: [
    {
      name: "Trading Automatizado - Plataforma Backend",
      period: "2025-05 - 2025-08",
      technologies: "TypeScript, Node.js, Prisma ORM, PostgreSQL, WebSockets, REST API, Docker, Redis",
      description: "Diseño e implementación de una plataforma backend para gestión y ejecución de estrategias de trading automatizado en mercados como Forex, Criptomonedas e Índices bursátiles. Desarrollo de lógica para determinar en tiempo real si un mercado está abierto o cerrado usando horarios internacionales y zonas horarias.",
      role: "Desarrollador Full Stack"
    },
    {
      name: "Randa Ticketera NFT UI/UX",
      period: "2024-12 - 2025-05",
      technologies: "React 18, Vite, Tailwind CSS, TypeScript, JavaScript ES6+",
      description: "Plataforma de ticketera NFT desarrollada con React 18. Sistema completo de gestión de eventos y tokens NFT.",
      role: "Desarrollador React"
    },
    {
      name: "Zero Variance - Ubiquity",
      period: "2023-05 - 2025-08",
      technologies: "Angular 15, .NET Core 8, SQL Server, TypeScript",
      description: "Sistema empresarial desarrollado con Angular 15, .NET Core 8 y SQL Server. Aplicación compleja para gestión de datos y análisis de varianza.",
      role: "Desarrollador Angular"
    },
    {
      name: "NexGen Virtual Office",
      period: "2021-12 - 2023-05",
      technologies: "Angular, TypeScript, Node.js, MongoDB",
      description: "Oficina virtual completa desarrollada con Angular. Sistema de gestión empresarial con múltiples módulos integrados.",
      role: "Desarrollador Web Angular"
    },
    {
      name: "Aplicación de Encuestas - Grupo Leitz (UX/UI)",
      period: "2021-04 - 2021-11",
      technologies: "Figma, UX Research, Prototyping, Mobile Design, Agricultural UX",
      description: "Diseño UX y prototipado de aplicación móvil para recolección, monitoreo y gestión de datos de cosecha de granos de café. Optimización de procesos agrícolas con experiencia de usuario centrada en el usuario.",
      role: "Diseñador UX/UI"
    },
    {
      name: "Manual de Marca Securex",
      period: "2021-12 - 2022-05",
      technologies: "Figma, Brand Identity, UI Design, Security UX, Prototyping",
      description: "Creación de identidad de marca y prototipo de aplicación para soluciones de seguridad residencial. Diseño de experiencia visual coherente y funcional con enfoque en seguridad y confianza.",
      role: "Diseñador UX/UI"
    }
  ],
  courses: [
    {
      name: "Inglés - Básico",
      institution: "Academia Europea",
      year: "Actualidad",
      duration: "En curso",
      description: "Curso para mejorar comunicación con hablantes del idioma",
      website: "https://academiaeuropea.com/"
    },
    {
      name: "CSS Avanzado",
      institution: "EDteam",
      year: "Completado",
      duration: "Curso completo",
      description: "Mejora de habilidades de maquetación web",
      instructor: "Álvaro Felipe",
      website: "www.edteam.com"
    },
    {
      name: "Flutter",
      institution: "Udemy",
      year: "Completado",
      duration: "Curso completo",
      description: "Desarrollo móvil con tecnología Flutter",
      instructor: "Fernando Herrera",
      website: "www.udemy.com"
    },
    {
      name: "API con .NET Core",
      institution: "EDteam",
      year: "Completado",
      duration: "Curso completo",
      description: "Creación de APIs con tecnología .NET Core",
      instructor: "Miguel Teheran",
      website: "www.edteam.com"
    }
  ],
  references: [
    {
      name: "José Carlos Estrada",
      position: "Project Manager",
      company: "MQA Americas",
      phone: "+502 4023-4035",
      email: "jestrada@mqaamericas.com",
      relationship: "Supervisor directo en proyectos de desarrollo empresarial"
    },
    {
      name: "Jorge Eduardo Alvares",
      position: "Desarrollador",
      company: "Grupo Leitz",
      phone: "+504 9480-5277",
      email: "jalvares@grupoleitz.com",
      relationship: "Colega desarrollador en múltiples proyectos colaborativos"
    }
  ]
}

export async function generatePDF(): Promise<Blob> {
  try {
    const doc = new jsPDF()
    let yPosition = 20
    const pageHeight = 280
    const leftMargin = 20
    const rightMargin = 190
    const contentWidth = 170

    // Configurar colores profesionales
    const primaryColor: [number, number, number] = [30, 58, 138] // Azul profesional más oscuro
    const textColor: [number, number, number] = [17, 24, 39] // Negro suave
    const grayColor: [number, number, number] = [75, 85, 99] // Gris medio
    const lightGrayColor: [number, number, number] = [156, 163, 175] // Gris claro
    const accentColor: [number, number, number] = [59, 130, 246] // Azul accent

    // Función para agregar nueva página si es necesario
    const checkPageBreak = (additionalSpace: number = 25) => {
      if (yPosition + additionalSpace > pageHeight) {
        doc.addPage()
        yPosition = 25
        return true
      }
      return false
    }

    // Función para crear header de sección
    const createSectionHeader = (title: string, showLine: boolean = true) => {
      yPosition += 8
      doc.setFontSize(13)
      doc.setTextColor(...primaryColor)
      doc.setFont('helvetica', 'bold')
      doc.text(title.toUpperCase(), leftMargin, yPosition)
      yPosition += 3

      if (showLine) {
        doc.setDrawColor(...primaryColor)
        doc.setLineWidth(0.5)
        doc.line(leftMargin, yPosition, leftMargin + 50, yPosition)
      }
      yPosition += 8
    }

    // Función para agregar separador sutil
    const addSectionSeparator = () => {
      yPosition += 5
      doc.setDrawColor(...lightGrayColor)
      doc.setLineWidth(0.2)
      doc.line(leftMargin, yPosition, rightMargin, yPosition)
      yPosition += 8
    }

    // HEADER - Información Personal
    doc.setFontSize(28)
    doc.setTextColor(...textColor)
    doc.setFont('helvetica', 'bold')
    doc.text(cvData.personalInfo.name, leftMargin, yPosition)
    yPosition += 12

    doc.setFontSize(16)
    doc.setTextColor(...accentColor)
    doc.setFont('helvetica', 'normal')
    doc.text(cvData.personalInfo.title, leftMargin, yPosition)
    yPosition += 10

    // Información de contacto organizada en líneas separadas
    doc.setFontSize(10)
    doc.setTextColor(...grayColor)
    doc.setFont('helvetica', 'normal')
    
    // Línea 1: Email y Teléfono
    doc.text(`Email: ${cvData.personalInfo.email}`, leftMargin, yPosition)
    doc.text(`Tel: ${cvData.personalInfo.phone}`, leftMargin + 90, yPosition)
    yPosition += 5

    // Línea 2: Ubicación
    doc.text(`Ubicación: ${cvData.personalInfo.location}`, leftMargin, yPosition)
    yPosition += 5

    // Línea 3: Enlaces profesionales
    doc.text(`LinkedIn: ${cvData.personalInfo.linkedin}`, leftMargin, yPosition)
    yPosition += 5
    doc.text(`GitHub: ${cvData.personalInfo.github}`, leftMargin, yPosition)
    yPosition += 5
    doc.text(`Portafolio: ${cvData.personalInfo.portfolio}`, leftMargin, yPosition)
    yPosition += 8

    // Línea separadora principal elegante
    doc.setDrawColor(...primaryColor)
    doc.setLineWidth(1)
    doc.line(leftMargin, yPosition, rightMargin, yPosition)
    yPosition += 15

    // RESUMEN PROFESIONAL
    checkPageBreak(35)
    createSectionHeader('RESUMEN PROFESIONAL')

    doc.setFontSize(10)
    doc.setTextColor(...textColor)
    doc.setFont('helvetica', 'normal')
    doc.setLineHeightFactor(1.3)
    const summaryLines = doc.splitTextToSize(cvData.summary, contentWidth)
    doc.text(summaryLines, leftMargin, yPosition)
    yPosition += summaryLines.length * 5 + 5
    addSectionSeparator()

    // EDUCACIÓN
    checkPageBreak(30)
    createSectionHeader('EDUCACION')

    cvData.education.forEach((edu) => {
      checkPageBreak(35)
      
      doc.setFontSize(12)
      doc.setTextColor(...textColor)
      doc.setFont('helvetica', 'bold')
      doc.text(edu.degree, leftMargin, yPosition)
      yPosition += 6

      doc.setFontSize(10)
      doc.setTextColor(...primaryColor)
      doc.setFont('helvetica', 'bold')
      doc.text(edu.institution, leftMargin, yPosition)
      yPosition += 4

      doc.setTextColor(...grayColor)
      doc.setFont('helvetica', 'normal')
      doc.text(`${edu.location} | ${edu.year}`, leftMargin, yPosition)
      yPosition += 5

      // Dividir los detalles en múltiples líneas
      doc.setFontSize(9)
      doc.setTextColor(...textColor)
      const detailLines = doc.splitTextToSize(edu.details, contentWidth)
      doc.text(detailLines, leftMargin, yPosition)
      yPosition += detailLines.length * 4 + 8
    })
    addSectionSeparator()

    // HABILIDADES TÉCNICAS
    checkPageBreak(50)
    createSectionHeader('HABILIDADES TECNICAS')

    const skillSections = [
      { title: 'Frontend', skills: cvData.skills.frontend },
      { title: 'Backend', skills: cvData.skills.backend },
      { title: 'Desarrollo Movil', skills: cvData.skills.mobile },
      { title: 'Bases de Datos', skills: cvData.skills.databases },
      { title: 'Herramientas DevOps', skills: cvData.skills.tools },
      { title: 'Diseno UX/UI', skills: cvData.skills.design }
    ]

    // Organizar skills en dos columnas
    const halfLength = Math.ceil(skillSections.length / 2)
    for (let i = 0; i < halfLength; i++) {
      const leftSection = skillSections[i]
      const rightSection = skillSections[i + halfLength]

      // Columna izquierda
      doc.setFontSize(10)
      doc.setTextColor(...primaryColor)
      doc.setFont('helvetica', 'bold')
      doc.text(`${leftSection.title}:`, leftMargin, yPosition)
      
      doc.setFontSize(9)
      doc.setTextColor(...textColor)
      doc.setFont('helvetica', 'normal')
      const leftSkills = leftSection.skills.slice(0, 4).join(', ')
      const leftLines = doc.splitTextToSize(leftSkills, 75)
      doc.text(leftLines, leftMargin, yPosition + 4)

      // Columna derecha (si existe)
      let rightLines: string[] = []
      if (rightSection) {
        doc.setFontSize(10)
        doc.setTextColor(...primaryColor)
        doc.setFont('helvetica', 'bold')
        doc.text(`${rightSection.title}:`, leftMargin + 95, yPosition)
        
        doc.setFontSize(9)
        doc.setTextColor(...textColor)
        doc.setFont('helvetica', 'normal')
        const rightSkills = rightSection.skills.slice(0, 4).join(', ')
        rightLines = doc.splitTextToSize(rightSkills, 75)
        doc.text(rightLines, leftMargin + 95, yPosition + 4)
      }

      yPosition += Math.max(leftLines.length * 3, rightLines.length * 3) + 10
    }
    addSectionSeparator()

    // IDIOMAS
    checkPageBreak(20)
    createSectionHeader('IDIOMAS')

    cvData.languages.forEach((lang, index) => {
      doc.setFontSize(10)
      doc.setTextColor(...textColor)
      doc.setFont('helvetica', 'bold')
      doc.text(`${lang.language}:`, leftMargin, yPosition)
      
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...grayColor)
      doc.text(lang.level, leftMargin + 30, yPosition)
      yPosition += 6
    })
    addSectionSeparator()

    // EXPERIENCIA LABORAL
    checkPageBreak(40)
    createSectionHeader('EXPERIENCIA LABORAL')

    cvData.experience.forEach((exp, index) => {
      checkPageBreak(45)
      
      // Cargo y empresa
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...textColor)
      doc.text(exp.title, leftMargin, yPosition)
      yPosition += 6

      doc.setFontSize(10)
      doc.setTextColor(...primaryColor)
      doc.setFont('helvetica', 'bold')
      doc.text(exp.company, leftMargin, yPosition)
      
      doc.setTextColor(...grayColor)
      doc.setFont('helvetica', 'normal')
      doc.text(`| ${exp.location}`, leftMargin + doc.getTextWidth(exp.company) + 5, yPosition)
      yPosition += 5

      doc.setTextColor(...grayColor)
      doc.text(exp.period, leftMargin, yPosition)
      yPosition += 8

      // Descripción
      doc.setTextColor(...textColor)
      doc.setFont('helvetica', 'normal')
      const descLines = doc.splitTextToSize(exp.description, contentWidth)
      doc.text(descLines, leftMargin, yPosition)
      yPosition += descLines.length * 4 + 5

      // Logros con viñetas
      if (exp.achievements) {
        doc.setFontSize(9)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(...primaryColor)
        doc.text('Logros destacados:', leftMargin, yPosition)
        yPosition += 5
        
        exp.achievements.forEach((achievement) => {
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(...grayColor)
          const achievementLines = doc.splitTextToSize(`- ${achievement}`, contentWidth - 10)
          doc.text(achievementLines, leftMargin + 5, yPosition)
          yPosition += achievementLines.length * 3.5 + 2
        })
      }
      
      yPosition += 8
      if (index < cvData.experience.length - 1) {
        addSectionSeparator()
      }
    })
    addSectionSeparator()

    // PROYECTOS DESTACADOS
    checkPageBreak(35)
    createSectionHeader('PROYECTOS DESTACADOS')

    cvData.projects.forEach((project, index) => {
      checkPageBreak(35)
      
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...textColor)
      doc.text(project.name, leftMargin, yPosition)
      yPosition += 5

      // Período y rol en la misma línea
      doc.setFontSize(9)
      doc.setTextColor(...primaryColor)
      doc.setFont('helvetica', 'bold')
      doc.text(`${project.period}`, leftMargin, yPosition)
      
      if ((project as any).role) {
        doc.setTextColor(...grayColor)
        doc.setFont('helvetica', 'normal')
        doc.text(`| ${(project as any).role}`, leftMargin + doc.getTextWidth(project.period) + 5, yPosition)
      }
      yPosition += 6

      // Tecnologías
      doc.setFontSize(9)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...primaryColor)
      doc.text('Tecnologias: ', leftMargin, yPosition)
      
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...grayColor)
      const techLines = doc.splitTextToSize(project.technologies, contentWidth - doc.getTextWidth('Tecnologias: '))
      doc.text(techLines, leftMargin + doc.getTextWidth('Tecnologias: '), yPosition)
      yPosition += Math.max(techLines.length * 3.5, 5) + 3

      // Descripción
      doc.setFontSize(9)
      doc.setTextColor(...textColor)
      doc.setFont('helvetica', 'normal')
      const projLines = doc.splitTextToSize(project.description, contentWidth)
      doc.text(projLines, leftMargin, yPosition)
      yPosition += projLines.length * 3.5 + 10
    })
    addSectionSeparator()

    // CURSOS Y CERTIFICACIONES
    checkPageBreak(35)
    createSectionHeader('CURSOS Y CERTIFICACIONES')

    cvData.courses.forEach((course, index) => {
      checkPageBreak(20)
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...textColor)
      doc.text(course.name, leftMargin, yPosition)
      yPosition += 5

      doc.setFontSize(9)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...primaryColor)
      doc.text(course.institution, leftMargin, yPosition)
      
      doc.setTextColor(...grayColor)
      doc.setFont('helvetica', 'normal')
      doc.text(`| ${course.year} | ${course.duration}`, leftMargin + doc.getTextWidth(course.institution) + 5, yPosition)
      yPosition += 4

      // Instructor si existe
      if ((course as any).instructor) {
        doc.setFontSize(8)
        doc.setTextColor(...grayColor)
        doc.text(`Instructor: ${(course as any).instructor}`, leftMargin, yPosition)
        yPosition += 4
      }

      // Descripción
      if ((course as any).description) {
        doc.setFontSize(8)
        doc.setTextColor(...textColor)
        const descLines = doc.splitTextToSize((course as any).description, contentWidth)
        doc.text(descLines, leftMargin, yPosition)
        yPosition += descLines.length * 3
      }

      // Website si existe
      if ((course as any).website) {
        doc.setFontSize(8)
        doc.setTextColor(...primaryColor)
        doc.text(`Web: ${(course as any).website}`, leftMargin, yPosition)
        yPosition += 4
      }

      yPosition += 6
    })
    addSectionSeparator()

    // REFERENCIAS
    checkPageBreak(30)
    createSectionHeader('REFERENCIAS PROFESIONALES')

    cvData.references.forEach((ref, index) => {
      checkPageBreak(25)
      
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...textColor)
      doc.text(ref.name, leftMargin, yPosition)
      yPosition += 5

      doc.setFontSize(10)
      doc.setTextColor(...primaryColor)
      doc.setFont('helvetica', 'bold')
      doc.text(ref.position, leftMargin, yPosition)
      
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...grayColor)
      doc.text(`| ${ref.company}`, leftMargin + doc.getTextWidth(ref.position) + 5, yPosition)
      yPosition += 5

      doc.setFontSize(9)
      doc.setTextColor(...grayColor)
      doc.text(`Email: ${ref.email}`, leftMargin, yPosition)
      yPosition += 4
      doc.text(`Telefono: ${ref.phone}`, leftMargin, yPosition)
      yPosition += 4
      doc.text(`Relacion: ${ref.relationship}`, leftMargin, yPosition)
      yPosition += 12
    })

    // Footer en la última página
    const totalPages = doc.getNumberOfPages()
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.setTextColor(...lightGrayColor)
      doc.text(`CV - ${cvData.personalInfo.name} | Pagina ${i} de ${totalPages}`, leftMargin, 290)
    }

    // Convertir a Blob
    const pdfBlob = doc.output('blob')
    
    // Verificar que el blob se generó correctamente
    if (!pdfBlob || pdfBlob.size === 0) {
      throw new Error('Error generando el PDF: blob vacío')
    }
    
    console.log('PDF generado exitosamente, tamaño:', pdfBlob.size, 'bytes')
    return pdfBlob
  } catch (error) {
    console.error('Error en generatePDF:', error)
    throw new Error(`Error generando PDF: ${error instanceof Error ? error.message : 'Error desconocido'}`)
  }
}
