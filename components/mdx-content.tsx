'use client'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { CodeBlock } from './code-block'

interface MDXContentProps {
  source: string
}

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold text-gray-900 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6" {...props} />,
  p: (props: any) => <p className="text-gray-800 leading-relaxed mb-4" {...props} />,
  code: (props: any) => <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm" {...props} />,
  pre: (props: any) => <CodeBlock {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-purple-400 bg-purple-50 pl-6 py-2 italic text-gray-800" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside text-gray-800 mb-4 space-y-1" {...props} />,
  li: (props: any) => <li className="text-gray-800" {...props} />,
  table: (props: any) => <table className="border border-gray-200 w-full mb-4" {...props} />,
  th: (props: any) => <th className="bg-gray-50 text-gray-900 border border-gray-200 px-4 py-2" {...props} />,
  td: (props: any) => <td className="border border-gray-200 px-4 py-2 text-gray-800" {...props} />,
  a: (props: any) => <a className="text-purple-600 no-underline hover:underline" {...props} />,
  strong: (props: any) => <strong className="text-gray-900 font-semibold" {...props} />,
  em: (props: any) => <em className="italic text-gray-800" {...props} />,
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="max-w-none prose prose-lg">
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
