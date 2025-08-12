import { track } from '@vercel/analytics'

export const useVercelAnalytics = () => {
  const trackEvent = (name: string, properties?: Record<string, any>) => {
    track(name, properties)
  }

  const trackContact = () => {
    track('contact_form_submit', {
      source: 'portfolio_contact_form'
    })
  }

  const trackProject = (projectName: string) => {
    track('project_view', {
      project_name: projectName,
      source: 'portfolio_projects'
    })
  }

  const trackSocial = (platform: string) => {
    track('social_link_click', {
      platform,
      source: 'portfolio_social'
    })
  }

  const trackPageView = (page: string) => {
    track('page_view', {
      page,
      source: 'portfolio_navigation'
    })
  }

  const trackDownload = (fileType: string) => {
    track('file_download', {
      file_type: fileType,
      source: 'portfolio_download'
    })
  }

  const trackScroll = (section: string) => {
    track('section_scroll', {
      section,
      source: 'portfolio_scroll'
    })
  }

  return {
    trackEvent,
    trackContact,
    trackProject,
    trackSocial,
    trackPageView,
    trackDownload,
    trackScroll
  }
}
