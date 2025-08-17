'use client'

import { useState, useMemo } from 'react'
import { Post } from '@/lib/blog'

interface UseBlogSearchProps {
  posts: Post[]
}

export function useBlogSearch({ posts }: UseBlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filtrar por búsqueda de texto
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Filtrar por tags seleccionados
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        selectedTags.some(tag => post.tags.includes(tag))
      )
    }

    return filtered
  }, [posts, searchQuery, selectedTags])

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [posts])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedTags([])
  }

  return {
    searchQuery,
    setSearchQuery,
    selectedTags,
    toggleTag,
    clearFilters,
    filteredPosts,
    allTags
  }
}
