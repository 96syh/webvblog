"use client"

import { Sidebar } from "@/components/Sidebar"
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard"
import { PageTransition } from "@/components/PageTransition"
import { BarChart3, Shield } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 transition-colors duration-200">
        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <Sidebar />
          <main className="flex-1 lg:ml-64 p-8">
            <AnalyticsContent />
          </main>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden p-4">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-[#494b4f] dark:text-white">Rain</h1>
          </header>
          <AnalyticsContent />
        </div>
      </div>
    </PageTransition>
  )
}

function AnalyticsContent() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BarChart3 className="text-[#9a6a48] dark:text-[#bd8c66]" size={32} />
          <h1 className="text-3xl font-bold text-[#494b4f] dark:text-white">Analytics Dashboard</h1>
        </div>
        <p className="text-[#999a9b] dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Track user engagement, popular content, and website performance metrics.
          All data is stored locally and respects user privacy.
        </p>
      </div>

      {/* Privacy Notice */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Shield className="text-blue-600 dark:text-blue-400 mt-0.5" size={18} />
          <div className="text-sm">
            <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-1">Privacy-First Analytics</h3>
            <p className="text-blue-700 dark:text-blue-300">
              This dashboard uses local browser storage to track engagement. No personal data is collected
              or transmitted to external servers. You can clear your analytics data anytime by clearing
              your browser's local storage.
            </p>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <AnalyticsDashboard />

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-[#494b4f] dark:text-white mb-3">How It Works</h3>
          <ul className="space-y-2 text-sm text-[#999a9b] dark:text-gray-400">
            <li>• Page views are tracked automatically when you navigate</li>
            <li>• Time spent is calculated when you leave a page</li>
            <li>• Sessions expire after 30 minutes of inactivity</li>
            <li>• All data is stored locally in your browser</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-[#494b4f] dark:text-white mb-3">Metrics Explained</h3>
          <ul className="space-y-2 text-sm text-[#999a9b] dark:text-gray-400">
            <li>• <strong>Total Views:</strong> Number of page visits</li>
            <li>• <strong>Unique Visitors:</strong> First-time visitors to the site</li>
            <li>• <strong>Sessions:</strong> Browsing sessions (30min timeout)</li>
            <li>• <strong>Avg. Time:</strong> Average time spent per page</li>
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors duration-200">
        <h3 className="text-lg font-semibold text-[#494b4f] dark:text-white mb-3">Data Management</h3>
        <p className="text-[#999a9b] dark:text-gray-400 mb-4 text-sm">
          Want to start fresh? You can clear all analytics data stored in your browser.
        </p>
        <button
          onClick={() => {
            if (confirm('Are you sure you want to clear all analytics data? This action cannot be undone.')) {
              localStorage.removeItem('craig-portfolio-analytics')
              localStorage.removeItem('craig-portfolio-session')
              localStorage.removeItem('craig-portfolio-visitor')
              window.location.reload()
            }
          }}
          className="bg-red-100 hover:bg-red-200 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-700 dark:text-red-400 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
        >
          Clear Analytics Data
        </button>
      </div>
    </div>
  )
}
