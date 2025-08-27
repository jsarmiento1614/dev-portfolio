'use client'

import { CodeBlock } from './code-block'

interface CodeBlockWrapperProps {
  children: React.ReactNode
  className?: string
}

export function CodeBlockWrapper({ children, className }: CodeBlockWrapperProps) {
  return <CodeBlock className={className}>{children}</CodeBlock>
}
