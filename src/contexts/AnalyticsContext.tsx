"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"

interface AnalyticsData {
  pageViews: Record<string, number>
  timeSpent: Record<string, number>
  popularContent: Array<{ path: string; views: number; avgTime: number }>
  totalSessions: number
  uniqueVisitors: number
}

interface AnalyticsContextType {
  data: AnalyticsData
  trackPageView: (path: string) => void
  trackTimeSpent: (path: string, seconds: number) => void
  trackEvent: (event: string, properties?: Record<string, any>) => void
  getPopularContent: () => Array<{ path: string; views: number; avgTime: number }>
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [data, setData] = useState<AnalyticsData>({
    pageViews: {},
    timeSpent: {},
    popularContent: [],
    totalSessions: 0,
    uniqueVisitors: 0
  })
  const [startTime, setStartTime] = useState<number>(Date.now())

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('craig-portfolio-analytics')
    if (savedData) {
      try {
        setData(JSON.parse(savedData))
      } catch (error) {
        console.error('Failed to parse analytics data:', error)
      }
    }

    // Track session
    const sessionKey = 'craig-portfolio-session'
    const lastSession = localStorage.getItem(sessionKey)
    const now = Date.now()

    if (!lastSession || now - Number.parseInt(lastSession) > 30 * 60 * 1000) { // 30 minutes
      setData(prev => ({ ...prev, totalSessions: prev.totalSessions + 1 }))
    }

    localStorage.setItem(sessionKey, now.toString())

    // Track unique visitor
    const visitorKey = 'craig-portfolio-visitor'
    if (!localStorage.getItem(visitorKey)) {
      localStorage.setItem(visitorKey, 'true')
      setData(prev => ({ ...prev, uniqueVisitors: prev.uniqueVisitors + 1 }))
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('craig-portfolio-analytics', JSON.stringify(data))
  }, [data])

  // Track page changes
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname)
      setStartTime(Date.now())
    }

    return () => {
      // Track time spent when leaving page
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      if (timeSpent > 5) { // Only track if spent more than 5 seconds
        trackTimeSpent(pathname, timeSpent)
      }
    }
  }, [pathname])

  const trackPageView = (path: string) => {
    setData(prev => ({
      ...prev,
      pageViews: {
        ...prev.pageViews,
        [path]: (prev.pageViews[path] || 0) + 1
      }
    }))
  }

  const trackTimeSpent = (path: string, seconds: number) => {
    setData(prev => {
      const currentTime = prev.timeSpent[path] || 0
      const views = prev.pageViews[path] || 1
      const newTotalTime = currentTime + seconds

      return {
        ...prev,
        timeSpent: {
          ...prev.timeSpent,
          [path]: newTotalTime
        }
      }
    })
  }

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    // Send to external analytics if needed
    if (typeof gtag !== 'undefined') {
      gtag('event', event, properties)
    }

    console.log('Analytics Event:', event, properties)
  }

  const getPopularContent = () => {
    return Object.entries(data.pageViews)
      .map(([path, views]) => ({
        path,
        views,
        avgTime: data.timeSpent[path] ? Math.floor(data.timeSpent[path] / views) : 0
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10)
  }

  return (
    <AnalyticsContext.Provider value={{
      data,
      trackPageView,
      trackTimeSpent,
      trackEvent,
      getPopularContent
    }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext)
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}
