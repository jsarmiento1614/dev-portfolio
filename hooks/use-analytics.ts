import { useCallback } from 'react'
import { 
  event, 
  trackContactForm, 
  trackProjectView, 
  trackDownloadCV, 
  trackSocialLink 
} from '@/lib/analytics'

export const useAnalytics = () => {
  const trackEvent = useCallback((action: string, category: string, label: string, value?: number) => {
    event({ action, category, label, value })
  }, [])

  const trackContact = useCallback(() => {
    trackContactForm()
  }, [])

  const trackProject = useCallback((projectName: string) => {
    trackProjectView(projectName)
  }, [])

  const trackCVDownload = useCallback(() => {
    trackDownloadCV()
  }, [])

  const trackSocial = useCallback((platform: string) => {
    trackSocialLink(platform)
  }, [])

  return {
    trackEvent,
    trackContact,
    trackProject,
    trackCVDownload,
    trackSocial
  }
}
