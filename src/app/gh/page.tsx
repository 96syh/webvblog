import { Sidebar } from "@/components/Sidebar"
import { PageTransition } from "@/components/PageTransition"
import { Github, ExternalLink, Star, GitFork, Eye } from "lucide-react"
import { redirect } from "next/navigation"

export const metadata = {
  title: "GitHub Profile",
  description: "View Craig's GitHub profile and open source contributions.",
}

// This is a redirect page that shows GitHub info then redirects
export default function GitHubPage() {
  // In a real app, you'd redirect immediately or after a short delay
  // For demo purposes, we'll show a nice page first

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 transition-colors duration-200">
        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <Sidebar />
          <main className="flex-1 lg:ml-64 p-8">
            <GitHubContent />
          </main>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden p-4">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-[#494b4f] dark:text-white">Rain</h1>
          </header>
          <GitHubContent />
        </div>
      </div>
    </PageTransition>
  )
}

function GitHubContent() {
  const stats = {
    repositories: 25,
    followers: 128,
    following: 89,
    contributions: 342
  }

  const repositories = [
    {
      name: "craig-portfolio",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      language: "TypeScript",
      stars: 12,
      forks: 3,
      updated: "2 days ago"
    },
    {
      name: "notion-blog-cms",
      description: "A headless CMS solution using Notion API for blog content management",
      language: "JavaScript",
      stars: 8,
      forks: 2,
      updated: "1 week ago"
    },
    {
      name: "productivity-dashboard",
      description: "A comprehensive dashboard for tracking habits and productivity metrics",
      language: "React",
      stars: 15,
      forks: 4,
      updated: "3 days ago"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Github className="text-[#9a6a48] dark:text-[#bd8c66]" size={32} />
          <h1 className="text-3xl font-bold text-[#494b4f] dark:text-white">GitHub Profile</h1>
        </div>
        <p className="text-[#999a9b] dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my open source contributions and projects. Building tools that make development more efficient and enjoyable.
        </p>
      </div>

      {/* Redirect Notice */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <ExternalLink className="text-blue-600 dark:text-blue-400" size={20} />
          <h3 className="font-medium text-blue-900 dark:text-blue-100">Redirecting to GitHub</h3>
        </div>
        <p className="text-blue-700 dark:text-blue-300 mb-4">
          You'll be redirected to my GitHub profile in a few seconds, or click the button below to go immediately.
        </p>
        <a
          href="https://github.com/craig"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
        >
          <Github size={16} />
          Visit GitHub Profile
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center transition-colors duration-200">
          <div className="text-2xl font-bold text-[#494b4f] dark:text-white">{stats.repositories}</div>
          <div className="text-xs text-[#999a9b] dark:text-gray-400">Repositories</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center transition-colors duration-200">
          <div className="text-2xl font-bold text-[#494b4f] dark:text-white">{stats.followers}</div>
          <div className="text-xs text-[#999a9b] dark:text-gray-400">Followers</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center transition-colors duration-200">
          <div className="text-2xl font-bold text-[#494b4f] dark:text-white">{stats.following}</div>
          <div className="text-xs text-[#999a9b] dark:text-gray-400">Following</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center transition-colors duration-200">
          <div className="text-2xl font-bold text-[#494b4f] dark:text-white">{stats.contributions}</div>
          <div className="text-xs text-[#999a9b] dark:text-gray-400">Contributions</div>
        </div>
      </div>

      {/* Featured Repositories */}
      <section>
        <h2 className="text-2xl font-semibold text-[#494b4f] dark:text-white mb-6">Featured Repositories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-[#bd8c66] dark:hover:border-[#bd8c66] transition-all duration-200 hover:shadow-sm">
              <h3 className="font-semibold text-[#494b4f] dark:text-white mb-2">{repo.name}</h3>
              <p className="text-[#999a9b] dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {repo.description}
              </p>

              <div className="flex items-center justify-between text-xs text-[#999a9b] dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  {repo.language}
                </span>
                <span>Updated {repo.updated}</span>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#999a9b] dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Star size={12} />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} />
                  {repo.forks}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activity */}
      <section className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
        <h3 className="text-lg font-semibold text-[#494b4f] dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-[#999a9b] dark:text-gray-400">Pushed 3 commits to craig-portfolio</span>
            <span className="text-xs text-[#999a9b] dark:text-gray-400">2 days ago</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-[#999a9b] dark:text-gray-400">Created new repository: analytics-dashboard</span>
            <span className="text-xs text-[#999a9b] dark:text-gray-400">4 days ago</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-[#999a9b] dark:text-gray-400">Opened pull request in productivity-tools</span>
            <span className="text-xs text-[#999a9b] dark:text-gray-400">1 week ago</span>
          </div>
        </div>
      </section>

      {/* Auto-redirect script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(function() {
              window.open('https://github.com/craig', '_blank');
            }, 5000);
          `
        }}
      />
    </div>
  )
}
