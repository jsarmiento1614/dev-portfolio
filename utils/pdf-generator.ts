import jsPDF from 'jspdf'

// Datos del CV
const cvData = {
  personalInfo: {
    name: "Jesús Alberto Sarmiento Bautista",
    title: "Full Stack Developer & UX/UI Designer",
    email: "jsarmiento1614@gmail.com",
    phone: "+504 9999-9999",
    location: "Tegucigalpa, Honduras",
    linkedin: "linkedin.com/in/jesus-sarmiento",
    github: "github.com/jesus-sarmiento",
    portfolio: "jesus-sarmiento.dev"
  },
  summary: "Desarrollador Full Stack con más de 6 años de experiencia en desarrollo web y móvil. Especializado en Angular, React, .NET/C#, Java y tecnologías modernas. Enfocado en crear experiencias digitales excepcionales que combinan funcionalidad, diseño UX/UI y mejores prácticas de desarrollo. Experiencia liderando equipos y proyectos de modernización tecnológica.",
  education: [
    {
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Tecnológica Centroamericana (UNITEC)",
      location: "Tegucigalpa, Honduras",
      year: "2015 - 2019",
      details: "Enfoque en desarrollo de software, bases de datos y arquitectura de sistemas"
    }
  ],
  skills: {
    frontend: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    backend: [".NET/C#", "Node.js", "Java", "Spring Boot", "RESTful APIs", "GraphQL"],
    mobile: ["Flutter", "React Native", "Xamarin"],
    databases: ["SQL Server", "PostgreSQL", "MongoDB", "MySQL", "Firebase"],
    tools: ["Docker", "Git", "Azure", "AWS", "Figma", "Adobe Creative Suite", "Postman", "Jenkins"],
    design: ["UI/UX Design", "Prototyping", "Wireframing", "Design Systems", "User Research"]
  },
  languages: [
    {
      language: "Español",
      level: "Nativo"
    },
    {
      language: "Inglés",
      level: "Intermedio (B1-B2)"
    }
  ],
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Freelance / Consultor Independiente",
      period: "2020 - Presente",
      location: "Honduras",
      description: "Desarrollo de aplicaciones web y móviles para clientes internacionales. Liderazgo en proyectos de modernización tecnológica, arquitectura de sistemas y optimización de procesos empresariales.",
      achievements: [
        "Lideré la modernización de 5+ sistemas legacy a tecnologías modernas",
        "Incrementé la eficiencia operativa en un 40% mediante automatización",
        "Desarrollé aplicaciones para más de 10,000 usuarios activos"
      ]
    },
    {
      title: "Full Stack Developer", 
      company: "Empresa de Desarrollo de Software",
      period: "2018 - 2020",
      location: "Tegucigalpa, Honduras",
      description: "Desarrollo de sistemas empresariales con tecnologías .NET, Angular y Java. Implementación de soluciones escalables y mantenibles para diversos sectores industriales.",
      achievements: [
        "Desarrollé 3 sistemas empresariales completos",
        "Reduje tiempos de carga en un 60% mediante optimizaciones",
        "Mentoreé a 2 desarrolladores junior"
      ]
    },
    {
      title: "Desarrollador Web Junior",
      company: "Agencia Digital",
      period: "2016 - 2018", 
      location: "Tegucigalpa, Honduras",
      description: "Desarrollo de sitios web responsivos y aplicaciones básicas. Colaboración en proyectos de marketing digital y e-commerce.",
      achievements: [
        "Completé más de 20 proyectos web",
        "Implementé mejoras de SEO que aumentaron el tráfico en 35%",
        "Aprendí metodologías ágiles y trabajo en equipo"
      ]
    }
  ],
  projects: [
    {
      name: "Sistema de Trading Automatizado",
      period: "2023",
      technologies: "React, Node.js, MongoDB, WebSockets",
      description: "Plataforma backend para gestión y ejecución de estrategias de trading automatizado en mercados Forex, Criptomonedas e Índices bursátiles con lógica de horarios internacionales."
    },
    {
      name: "Plataforma de Gestión Empresarial",
      period: "2022",
      technologies: "Angular, .NET Core, SQL Server, Azure",
      description: "Sistema completo de gestión empresarial con módulos de facturación, inventario, reportes y dashboard analytics en tiempo real."
    },
    {
      name: "Aplicación de Encuestas Móvil",
      period: "2021",
      technologies: "Flutter, Firebase, Dart",
      description: "App móvil para recolección de datos con sincronización offline, geolocalización y analytics en tiempo real para investigación de mercados."
    },
    {
      name: "E-commerce B2B",
      period: "2021",
      technologies: "Next.js, Node.js, PostgreSQL, Stripe",
      description: "Plataforma de comercio electrónico B2B con sistema de pedidos, gestión de inventario y integración de pagos."
    }
  ],
  courses: [
    {
      name: "Advanced React and Redux",
      institution: "Udemy",
      year: "2023",
      duration: "40 horas"
    },
    {
      name: "AWS Cloud Practitioner",
      institution: "Amazon Web Services",
      year: "2022",
      duration: "Certificación"
    },
    {
      name: "UX/UI Design Specialization",
      institution: "Coursera - Google",
      year: "2022",
      duration: "6 meses"
    },
    {
      name: "Docker and Kubernetes",
      institution: "Docker Academy",
      year: "2021",
      duration: "30 horas"
    },
    {
      name: "Angular - The Complete Guide",
      institution: "Udemy",
      year: "2020",
      duration: "35 horas"
    }
  ],
  references: [
    {
      name: "María González",
      position: "Project Manager",
      company: "TechSolutions",
      phone: "+504 8888-8888",
      email: "maria.gonzalez@techsolutions.com",
      relationship: "Supervisora directa en proyecto de modernización"
    },
    {
      name: "Carlos Mendoza",
      position: "CTO",
      company: "InnovateHN",
      phone: "+504 7777-7777", 
      email: "carlos.mendoza@innovatehn.com",
      relationship: "Cliente en múltiples proyectos de desarrollo"
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
    doc.text(`Ubicacion: ${cvData.personalInfo.location}`, leftMargin, yPosition)
    yPosition += 5

    // Línea 3: Enlaces profesionales
    doc.text(`LinkedIn: ${cvData.personalInfo.linkedin}`, leftMargin, yPosition)
    yPosition += 5
    doc.text(`GitHub: ${cvData.personalInfo.github}`, leftMargin, yPosition)
    yPosition += 5
    doc.text(`Portfolio: ${cvData.personalInfo.portfolio}`, leftMargin, yPosition)
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
      yPosition += 4

      doc.text(edu.details, leftMargin, yPosition)
      yPosition += 10
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
      checkPageBreak(30)
      
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...textColor)
      doc.text(project.name, leftMargin, yPosition)
      
      doc.setFontSize(9)
      doc.setTextColor(...grayColor)
      doc.setFont('helvetica', 'normal')
      doc.text(`(${project.period})`, leftMargin + doc.getTextWidth(project.name) + 5, yPosition)
      yPosition += 6

      doc.setFontSize(9)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...primaryColor)
      doc.text('Tecnologias: ', leftMargin, yPosition)
      
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...grayColor)
      doc.text(project.technologies, leftMargin + doc.getTextWidth('Tecnologias: '), yPosition)
      yPosition += 5

      doc.setFontSize(9)
      doc.setTextColor(...textColor)
      const projLines = doc.splitTextToSize(project.description, contentWidth)
      doc.text(projLines, leftMargin, yPosition)
      yPosition += projLines.length * 3.5 + 8
    })
    addSectionSeparator()

    // CURSOS Y CERTIFICACIONES
    checkPageBreak(35)
    createSectionHeader('CURSOS Y CERTIFICACIONES')

    cvData.courses.forEach((course, index) => {
      checkPageBreak(15)
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...textColor)
      doc.text(course.name, leftMargin, yPosition)
      yPosition += 5

      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...primaryColor)
      doc.text(course.institution, leftMargin, yPosition)
      
      doc.setTextColor(...grayColor)
      doc.text(`| ${course.year} | ${course.duration}`, leftMargin + doc.getTextWidth(course.institution) + 5, yPosition)
      yPosition += 8
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
