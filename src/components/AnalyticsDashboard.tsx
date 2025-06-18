"use client"

import { useAnalytics } from "@/contexts/AnalyticsContext"
import { BarChart3, TrendingUp, Eye, Clock, Users, Activity } from "lucide-react"
import { motion } from "framer-motion"

interface AnalyticsDashboardProps {
  className?: string
}

export function AnalyticsDashboard({ className = "" }: AnalyticsDashboardProps) {
  const { data, getPopularContent } = useAnalytics()
  const popularContent = getPopularContent()

  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`
    return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`
  }

  const getPageName = (path: string) => {
    switch (path) {
      case '/': return 'Home'
      case '/about': return 'About'
      case '/work': return 'Projects'
      case '/blog': return 'Blog'
      case '/tools': return 'Tools'
      case '/books': return 'Books'
      case '/podcasts': return 'Podcasts'
      case '/guestbook': return 'Guestbook'
      default: return path.replace('/', '').replace('-', ' ').toUpperCase()
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      className={`space-y-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Overview Stats */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" variants={itemVariants}>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center transition-colors duration-200">
          <div className="flex items-center justify-center mb-2">
            <Eye className="text-blue-500" size={20} />
          </div>
          <div className="text-2xl font-bold text-[#494b4f] dark:text-white">
            {Object.values(data.pageViews).reduce((sum, views) => sum + views, 0)}
          </div>
          <div className="text-xs text-[#999a9b] dark:text-gray-400">Total Views</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center transition-colors duration-200">
          <div className="flex items-center justify-center mb-2">
            <Users className="text-green-500" size={20} />
          </div>
          <div className="text-2xl font-bold text-[#494b4f] dark:text-white">
            {data.uniqueVisitors}
          </div>
          <div className="text-xs text-[#999a9b] dark:text-gray-400">Unique Visitors</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center transition-colors duration-200">
          <div className="flex items-center justify-center mb-2">
            <Activity className="text-purple-500" size={20} />
          </div>
          <div className="text-2xl font-bold text-[#494b4f] dark:text-white">
            {data.totalSessions}
          </div>
          <div className="text-xs text-[#999a9b] dark:text-gray-400">Sessions</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center transition-colors duration-200">
          <div className="flex items-center justify-center mb-2">
            <Clock className="text-orange-500" size={20} />
          </div>
          <div className="text-2xl font-bold text-[#494b4f] dark:text-white">
            {popularContent.length > 0
              ? formatTime(Math.floor(popularContent.reduce((sum, item) => sum + item.avgTime, 0) / popularContent.length))
              : '0s'
            }
          </div>
          <div className="text-xs text-[#999a9b] dark:text-gray-400">Avg. Time</div>
        </div>
      </motion.div>

      {/* Popular Content */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200"
        variants={itemVariants}
      >
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="text-[#9a6a48] dark:text-[#bd8c66]" size={20} />
          <h3 className="text-lg font-semibold text-[#494b4f] dark:text-white">Popular Content</h3>
        </div>

        {popularContent.length > 0 ? (
          <div className="space-y-3">
            {popularContent.slice(0, 5).map((item, index) => {
              const maxViews = Math.max(...popularContent.map(p => p.views))
              const viewsPercentage = (item.views / maxViews) * 100

              return (
                <motion.div
                  key={item.path}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-[#494b4f] dark:text-white">
                      {getPageName(item.path)}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-[#999a9b] dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {item.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {formatTime(item.avgTime)}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#9a6a48] to-[#bd8c66] h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${viewsPercentage}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-[#999a9b] dark:text-gray-400">
            <BarChart3 size={48} className="mx-auto mb-4 opacity-50" />
            <p>No analytics data yet</p>
            <p className="text-xs mt-1">Visit some pages to see analytics</p>
          </div>
        )}
      </motion.div>

      {/* Page Views Breakdown */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200"
        variants={itemVariants}
      >
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="text-[#9a6a48] dark:text-[#bd8c66]" size={20} />
          <h3 className="text-lg font-semibold text-[#494b4f] dark:text-white">Page Views</h3>
        </div>

        {Object.keys(data.pageViews).length > 0 ? (
          <div className="space-y-2">
            {Object.entries(data.pageViews)
              .sort(([,a], [,b]) => b - a)
              .map(([path, views], index) => (
                <motion.div
                  key={path}
                  className="flex items-center justify-between py-2 px-3 rounded bg-gray-50 dark:bg-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-sm text-[#494b4f] dark:text-white">
                    {getPageName(path)}
                  </span>
                  <span className="text-sm font-medium text-[#9a6a48] dark:text-[#bd8c66]">
                    {views} views
                  </span>
                </motion.div>
              ))
            }
          </div>
        ) : (
          <p className="text-center text-[#999a9b] dark:text-gray-400 py-4">
            No page views recorded yet
          </p>
        )}
      </motion.div>

      {/* Engagement Insights */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-[#494b4f] dark:text-white mb-4">Engagement Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="text-[#999a9b] dark:text-gray-400">Most Popular Page</div>
            <div className="font-medium text-[#494b4f] dark:text-white">
              {popularContent[0] ? getPageName(popularContent[0].path) : 'No data yet'}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-[#999a9b] dark:text-gray-400">Longest Session</div>
            <div className="font-medium text-[#494b4f] dark:text-white">
              {popularContent.length > 0
                ? formatTime(Math.max(...popularContent.map(p => p.avgTime)))
                : 'No data yet'
              }
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
