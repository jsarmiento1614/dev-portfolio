'use client'

import { useState, useEffect } from 'react'
import { Post, getAllPosts } from '@/lib/blog'

export function useBlogPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const allPosts = await getAllPosts()
        setPosts(allPosts)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar los posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const getPostsByTag = (tag: string) => {
    return posts.filter(post => post.tags.includes(tag))
  }

  const getPostsByAuthor = (author: string) => {
    return posts.filter(post => post.author === author)
  }

  const searchPosts = (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.description.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }

  return {
    posts,
    loading,
    error,
    getPostsByTag,
    getPostsByAuthor,
    searchPosts
  }
}
