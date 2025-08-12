// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID!, {
      page_location: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Eventos personalizados para el portafolio
export const trackContactForm = () => {
  event({
    action: 'submit_contact_form',
    category: 'engagement',
    label: 'contact_form_submission'
  })
}

export const trackProjectView = (projectName: string) => {
  event({
    action: 'view_project',
    category: 'engagement',
    label: projectName
  })
}

export const trackDownloadCV = () => {
  event({
    action: 'download_cv',
    category: 'engagement',
    label: 'cv_download'
  })
}

export const trackSocialLink = (platform: string) => {
  event({
    action: 'click_social_link',
    category: 'engagement',
    label: platform
  })
}

// Declare gtag as a global variable
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}
