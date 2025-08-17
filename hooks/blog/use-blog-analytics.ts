'use client'

import { useEffect } from 'react'
import { useAnalytics } from '@/hooks/use-analytics'
import { useVercelAnalytics } from '@/hooks/use-vercel-analytics'

interface UseBlogAnalyticsProps {
  postSlug?: string
  postTitle?: string
}

export function useBlogAnalytics({ postSlug, postTitle }: UseBlogAnalyticsProps = {}) {
  const { trackEvent } = useAnalytics()
  const { track } = useVercelAnalytics()

  const trackBlogView = (slug: string, title: string) => {
    trackEvent('blog_post_view', {
      post_slug: slug,
      post_title: title,
      timestamp: new Date().toISOString()
    })

    track('blog_post_view', {
      post_slug: slug,
      post_title: title
    })
  }

  const trackBlogSearch = (query: string, resultsCount: number) => {
    trackEvent('blog_search', {
      search_query: query,
      results_count: resultsCount,
      timestamp: new Date().toISOString()
    })

    track('blog_search', {
      search_query: query,
      results_count: resultsCount
    })
  }

  const trackTagClick = (tag: string) => {
    trackEvent('blog_tag_click', {
      tag: tag,
      timestamp: new Date().toISOString()
    })

    track('blog_tag_click', {
      tag: tag
    })
  }

  const trackNewsletterSignup = (email: string) => {
    trackEvent('newsletter_signup', {
      email: email,
      timestamp: new Date().toISOString()
    })

    track('newsletter_signup', {
      email: email
    })
  }

  const trackShare = (platform: string, postSlug: string, postTitle: string) => {
    trackEvent('blog_share', {
      platform: platform,
      post_slug: postSlug,
      post_title: postTitle,
      timestamp: new Date().toISOString()
    })

    track('blog_share', {
      platform: platform,
      post_slug: postSlug,
      post_title: postTitle
    })
  }

  // Track blog view when component mounts (if postSlug is provided)
  useEffect(() => {
    if (postSlug && postTitle) {
      trackBlogView(postSlug, postTitle)
    }
  }, [postSlug, postTitle])

  return {
    trackBlogView,
    trackBlogSearch,
    trackTagClick,
    trackNewsletterSignup,
    trackShare
  }
}
