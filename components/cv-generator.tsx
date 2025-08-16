"use client"

import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica'
  },
  header: {
    marginBottom: 20,
    borderBottom: 2,
    borderBottomColor: '#3B82F6',
    paddingBottom: 10
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 5
  },
  title: {
    fontSize: 16,
    color: '#3B82F6',
    marginBottom: 10
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 10,
    color: '#6B7280'
  },
  section: {
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    borderBottom: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 3
  },
  text: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.4,
    marginBottom: 5
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  },
  skill: {
    backgroundColor: '#EFF6FF',
    color: '#1D4ED8',
    padding: '4 8',
    borderRadius: 4,
    fontSize: 9,
    fontWeight: 'bold'
  },
  experienceItem: {
    marginBottom: 12
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1F2937'
  },
  experienceCompany: {
    fontSize: 10,
    color: '#3B82F6',
    marginBottom: 3
  },
  experienceDate: {
    fontSize: 9,
    color: '#6B7280',
    marginBottom: 5
  },
  experienceDescription: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.3
  },
  projectItem: {
    marginBottom: 10
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1F2937'
  },
  projectTech: {
    fontSize: 9,
    color: '#6B7280',
    marginBottom: 3
  },
  projectDescription: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.3
  }
})

// Datos del CV (esto se puede extraer a un archivo separado)
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

// Componente del documento PDF
export const CVDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{cvData.personalInfo.name}</Text>
        <Text style={styles.title}>{cvData.personalInfo.title}</Text>
        <View style={styles.contactInfo}>
          <Text>{cvData.personalInfo.email}</Text>
          <Text>{cvData.personalInfo.phone}</Text>
          <Text>{cvData.personalInfo.location}</Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>RESUMEN PROFESIONAL</Text>
        <Text style={styles.text}>{cvData.summary}</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>HABILIDADES TÉCNICAS</Text>
        
        <Text style={[styles.text, { fontWeight: 'bold', marginTop: 5 }]}>Frontend:</Text>
        <View style={styles.skillsContainer}>
          {cvData.skills.frontend.map((skill, index) => (
            <Text key={index} style={styles.skill}>{skill}</Text>
          ))}
        </View>

        <Text style={[styles.text, { fontWeight: 'bold', marginTop: 8 }]}>Backend:</Text>
        <View style={styles.skillsContainer}>
          {cvData.skills.backend.map((skill, index) => (
            <Text key={index} style={styles.skill}>{skill}</Text>
          ))}
        </View>

        <Text style={[styles.text, { fontWeight: 'bold', marginTop: 8 }]}>Mobile & Otros:</Text>
        <View style={styles.skillsContainer}>
          {[...cvData.skills.mobile, ...cvData.skills.databases, ...cvData.skills.tools].map((skill, index) => (
            <Text key={index} style={styles.skill}>{skill}</Text>
          ))}
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPERIENCIA PROFESIONAL</Text>
        {cvData.experience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.experienceTitle}>{exp.title}</Text>
            <Text style={styles.experienceCompany}>{exp.company}</Text>
            <Text style={styles.experienceDate}>{exp.period}</Text>
            <Text style={styles.experienceDescription}>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROYECTOS DESTACADOS</Text>
        {cvData.projects.map((project, index) => (
          <View key={index} style={styles.projectItem}>
            <Text style={styles.projectTitle}>{project.name}</Text>
            <Text style={styles.projectTech}>{project.technologies}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCACIÓN</Text>
        {cvData.education.map((edu, index) => (
          <View key={index}>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>{edu.degree}</Text> - {edu.institution} ({edu.year})
            </Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
)

export default CVDocument
