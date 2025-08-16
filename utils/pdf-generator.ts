import jsPDF from 'jspdf'

// Datos del CV
const cvData = {
  personalInfo: {
    name: "Jesús Alberto Sarmiento Bautista",
    title: "Full Stack Developer & UX/UI Designer",
    email: "jsarmiento1614@gmail.com",
    phone: "+504 9999-9999",
    location: "Honduras",
    linkedin: "linkedin.com/in/jesus-sarmiento",
    github: "github.com/jesus-sarmiento"
  },
  summary: "Desarrollador Full Stack con más de 6 años de experiencia en desarrollo web y móvil. Especializado en Angular, React, .NET/C#, y tecnologías modernas. Enfocado en crear experiencias digitales excepcionales que combinan funcionalidad y diseño.",
  skills: {
    frontend: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    backend: [".NET/C#", "Node.js", "Java", "RESTful APIs"],
    mobile: ["Flutter", "Xamarin"],
    databases: ["SQL Server", "PostgreSQL", "MongoDB"],
    tools: ["Docker", "Git", "Azure", "Figma", "Adobe Creative Suite"]
  },
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Freelance",
      period: "2018 - Presente",
      description: "Desarrollo de aplicaciones web y móviles para diversos clientes. Liderazgo en proyectos de modernización tecnológica y optimización de procesos."
    },
    {
      title: "Full Stack Developer", 
      company: "Proyectos Corporativos",
      period: "2016 - 2018",
      description: "Desarrollo de sistemas empresariales con tecnologías .NET y Angular. Implementación de soluciones escalables y mantenibles."
    }
  ],
  projects: [
    {
      name: "Plataforma de Gestión Empresarial",
      technologies: "Angular, .NET Core, SQL Server",
      description: "Sistema completo de gestión empresarial con módulos de facturación, inventario y reportes."
    },
    {
      name: "Aplicación de Encuestas Móvil",
      technologies: "Flutter, Firebase", 
      description: "App móvil para recolección de datos con sincronización offline y analytics en tiempo real."
    },
    {
      name: "Sistema de Trading",
      technologies: "React, Node.js, MongoDB",
      description: "Plataforma de trading automatizado con dashboard en tiempo real y sistema de alertas."
    }
  ],
  education: [
    {
      degree: "Ingeniería en Sistemas",
      institution: "Universidad Tecnológica",
      year: "2018"
    }
  ]
}

export async function generatePDF(): Promise<Blob> {
  try {
    const doc = new jsPDF()
    let yPosition = 20

  // Configurar fuentes y colores
  const primaryColor: [number, number, number] = [59, 130, 246] // #3B82F6
  const textColor: [number, number, number] = [31, 41, 55] // #1F2937
  const grayColor: [number, number, number] = [107, 114, 128] // #6B7280

  // Header
  doc.setFontSize(24)
  doc.setTextColor(...textColor)
  doc.setFont('helvetica', 'bold')
  doc.text(cvData.personalInfo.name, 20, yPosition)
  yPosition += 10

  doc.setFontSize(14)
  doc.setTextColor(...primaryColor)
  doc.setFont('helvetica', 'normal')
  doc.text(cvData.personalInfo.title, 20, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setTextColor(...grayColor)
  doc.text(`${cvData.personalInfo.email} | ${cvData.personalInfo.phone} | ${cvData.personalInfo.location}`, 20, yPosition)
  yPosition += 15

  // Línea separadora
  doc.setDrawColor(...primaryColor)
  doc.setLineWidth(0.5)
  doc.line(20, yPosition, 190, yPosition)
  yPosition += 10

  // Resumen Profesional
  doc.setFontSize(12)
  doc.setTextColor(...textColor)
  doc.setFont('helvetica', 'bold')
  doc.text('RESUMEN PROFESIONAL', 20, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  const summaryLines = doc.splitTextToSize(cvData.summary, 170)
  doc.text(summaryLines, 20, yPosition)
  yPosition += summaryLines.length * 5 + 8

  // Habilidades Técnicas
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('HABILIDADES TÉCNICAS', 20, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('Frontend:', 20, yPosition)
  yPosition += 5
  doc.setFont('helvetica', 'normal')
  doc.text(cvData.skills.frontend.join(', '), 20, yPosition)
  yPosition += 8

  doc.setFont('helvetica', 'bold')
  doc.text('Backend:', 20, yPosition)
  yPosition += 5
  doc.setFont('helvetica', 'normal')
  doc.text(cvData.skills.backend.join(', '), 20, yPosition)
  yPosition += 8

  doc.setFont('helvetica', 'bold')
  doc.text('Mobile & Otros:', 20, yPosition)
  yPosition += 5
  doc.setFont('helvetica', 'normal')
  const otherSkills = [...cvData.skills.mobile, ...cvData.skills.databases, ...cvData.skills.tools]
  doc.text(otherSkills.join(', '), 20, yPosition)
  yPosition += 15

  // Experiencia Profesional
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('EXPERIENCIA PROFESIONAL', 20, yPosition)
  yPosition += 8

  cvData.experience.forEach((exp) => {
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...textColor)
    doc.text(exp.title, 20, yPosition)
    yPosition += 5

    doc.setFontSize(10)
    doc.setTextColor(...primaryColor)
    doc.text(exp.company, 20, yPosition)
    yPosition += 5

    doc.setTextColor(...grayColor)
    doc.text(exp.period, 20, yPosition)
    yPosition += 5

    doc.setTextColor(...textColor)
    const descLines = doc.splitTextToSize(exp.description, 170)
    doc.text(descLines, 20, yPosition)
    yPosition += descLines.length * 4 + 8
  })

  // Proyectos Destacados
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('PROYECTOS DESTACADOS', 20, yPosition)
  yPosition += 8

  cvData.projects.forEach((project) => {
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...textColor)
    doc.text(project.name, 20, yPosition)
    yPosition += 5

    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...grayColor)
    doc.text(project.technologies, 20, yPosition)
    yPosition += 5

    doc.setTextColor(...textColor)
    const projLines = doc.splitTextToSize(project.description, 170)
    doc.text(projLines, 20, yPosition)
    yPosition += projLines.length * 4 + 6
  })

  // Educación
  if (yPosition < 250) { // Solo agregar si hay espacio
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('EDUCACIÓN', 20, yPosition)
    yPosition += 8

    cvData.education.forEach((edu) => {
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text(`${edu.degree} - ${edu.institution} (${edu.year})`, 20, yPosition)
      yPosition += 5
    })
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
