'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const getLanguageInfo = (className?: string) => {
    if (!className) return { displayName: 'Código' }
    
    const match = className.match(/language-(\w+)/)
    if (match) {
      const lang = match[1].toLowerCase()
      
      const languageMap: { [key: string]: string } = {
        'js': 'JavaScript',
        'jsx': 'React',
        'ts': 'TypeScript',
        'tsx': 'React TS',
        'py': 'Python',
        'css': 'CSS',
        'html': 'HTML',
        'bash': 'Bash',
        'json': 'JSON',
        'yaml': 'YAML',
        'sql': 'SQL',
        'php': 'PHP',
        'java': 'Java',
        'cpp': 'C++',
        'c': 'C',
        'go': 'Go',
        'rust': 'Rust',
        'swift': 'Swift',
        'kotlin': 'Kotlin',
        'dart': 'Dart',
        'vue': 'Vue',
        'angular': 'Angular',
        'svelte': 'Svelte'
      }
      
      return { displayName: languageMap[lang] || lang.toUpperCase() }
    }
    
    return { displayName: 'Código' }
  }

  const extractCodeText = (children: React.ReactNode): string => {
    if (typeof children === 'string') {
      return children
    }
    if (children && typeof children === 'object') {
      if ('props' in children && children.props) {
        const props = children.props as any
        if (typeof props.children === 'string') {
          return props.children
        }
        if (Array.isArray(props.children)) {
          return props.children.map(extractCodeText).join('')
        }
        return extractCodeText(props.children)
      }
      if (Array.isArray(children)) {
        return children.map(extractCodeText).join('')
      }
    }
    return ''
  }

  const handleCopy = async () => {
    const codeText = extractCodeText(children)
    try {
      await navigator.clipboard.writeText(codeText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Error al copiar:', error)
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = codeText
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const { displayName } = getLanguageInfo(className)

  return (
    <div className="relative group mb-6">
      {/* Header con lenguaje y botón de copiar */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-gray-700">
        <span className="text-gray-300 text-sm font-medium">
          {displayName}
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 w-7 p-0 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200 rounded"
          onClick={handleCopy}
          title={copied ? '¡Copiado!' : 'Copiar código'}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      {/* Contenido del código */}
      <pre className="bg-gray-800 text-gray-200 p-4 rounded-b-lg overflow-x-auto text-sm leading-relaxed">
        {children}
      </pre>
    </div>
  )
}
