'use client'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { CodeBlock } from './code-block'

interface MDXContentProps {
  source: string
}

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold text-foreground mb-6 font-brand-primary" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold text-foreground mb-4 mt-8 font-brand-primary" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold text-foreground mb-3 mt-6 font-brand-primary" {...props} />,
  h4: (props: any) => <h4 className="text-lg font-bold text-foreground mb-2 mt-4 font-brand-primary" {...props} />,
  p: (props: any) => <p className="text-foreground leading-relaxed mb-4 font-brand-secondary" {...props} />,
  code: (props: any) => <code className="bg-muted text-destructive px-1 py-0.5 rounded text-sm font-mono border border-border" {...props} />,
  pre: (props: any) => <CodeBlock {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-primary bg-muted/50 pl-6 py-2 italic text-foreground mb-4 font-brand-secondary" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-foreground mb-4 space-y-1 pl-6" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside text-foreground mb-4 space-y-1 pl-6" {...props} />,
  li: (props: any) => <li className="text-foreground mb-1 font-brand-secondary" {...props} />,
  table: (props: any) => <table className="border border-border w-full mb-4" {...props} />,
  th: (props: any) => <th className="bg-muted text-foreground border border-border px-4 py-2 font-semibold font-brand-primary" {...props} />,
  td: (props: any) => <td className="border border-border px-4 py-2 text-foreground font-brand-secondary" {...props} />,
  a: (props: any) => <a className="text-primary hover:text-accent underline transition-colors" {...props} />,
  strong: (props: any) => <strong className="text-foreground font-semibold" {...props} />,
  em: (props: any) => <em className="italic text-foreground" {...props} />,
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none bg-card text-foreground">
      <MDXRemote 
        source={source} 
        components={components}
        options={{
          mdxOptions: {
            format: 'mdx',
          },
        }}
      />
    </div>
  )
}
