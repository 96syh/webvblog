import { Sidebar } from "@/components/Sidebar"
import { PageTransition } from "@/components/PageTransition"
import { ExternalLink, MessageCircle, Heart, Repeat2 } from "lucide-react"

export const metadata = {
  title: "X Profile",
  description: "Follow Craig on X (formerly Twitter) for updates and thoughts.",
}

export default function XPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 transition-colors duration-200">
        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <Sidebar />
          <main className="flex-1 lg:ml-64 p-8">
            <XContent />
          </main>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden p-4">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-[#494b4f] dark:text-white">Rain</h1>
          </header>
          <XContent />
        </div>
      </div>
    </PageTransition>
  )
}

function XContent() {
  const stats = {
    tweets: 342,
    followers: 1456,
    following: 289,
    likes: 2847
  }

  const recentTweets = [
    {
      content: "Just shipped a new feature for the portfolio site 🚀 Adding real-time analytics was more fun than expected. The intersection observer API is powerful!",
      timestamp: "2h",
      likes: 12,
      retweets: 3,
      replies: 5
    },
    {
      content: "Working with Framer Motion for the first time and I'm amazed by how smooth these animations can be. The learning curve is worth it! ✨",
      timestamp: "1d",
      likes: 28,
      retweets: 7,
      replies: 9
    },
    {
      content: "Hot take: Dark mode should be the default for all development tools. My eyes thank me every day 🌙",
      timestamp: "2d",
      likes: 45,
      retweets: 12,
      replies: 18
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="text-black dark:text-white">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#494b4f] dark:text-white">X Profile</h1>
        </div>
        <p className="text-[#999a9b] dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Follow me on X for development insights, design thoughts, and behind-the-scenes updates on my projects.
        </p>
      </div>

      {/* Redirect Notice */}
      <div className="bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <ExternalLink className="text-[#494b4f] dark:text-white" size={20} />
          <h3 className="font-medium text-[#494b4f] dark:text-white">Redirecting to X</h3>
        </div>
        <p className="text-[#999a9b] dark:text-gray-400 mb-4">
          You'll be redirected to my X profile in a few seconds, or click the button below to go immediately.
        </p>
        <a
          href="https://x.com/craig"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Follow on X
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center transition-colors duration-200">
          <div className="text-2xl font-bold text-[#494b4f] dark:text-white">{stats.tweets}</div>
          <div className="text-xs text-[#999a9b] dark:text-gray-400">Posts</div>
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
          <div className="text-2xl font-bold text-[#494b4f] dark:text-white">{stats.likes}</div>
          <div className="text-xs text-[#999a9b] dark:text-gray-400">Likes</div>
        </div>
      </div>

      {/* Recent Tweets */}
      <section>
        <h2 className="text-2xl font-semibold text-[#494b4f] dark:text-white mb-6">Recent Posts</h2>
        <div className="space-y-4">
          {recentTweets.map((tweet, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9a6a48] to-[#bd8c66] flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-[#494b4f] dark:text-white">Craig Hart</span>
                    <span className="text-[#999a9b] dark:text-gray-400 text-sm">@craig</span>
                    <span className="text-[#999a9b] dark:text-gray-400 text-sm">·</span>
                    <span className="text-[#999a9b] dark:text-gray-400 text-sm">{tweet.timestamp}</span>
                  </div>
                  <p className="text-[#494b4f] dark:text-gray-200 mb-3 leading-relaxed">
                    {tweet.content}
                  </p>
                  <div className="flex items-center gap-6 text-[#999a9b] dark:text-gray-400">
                    <div className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                      <MessageCircle size={16} />
                      <span className="text-sm">{tweet.replies}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-green-500 transition-colors cursor-pointer">
                      <Repeat2 size={16} />
                      <span className="text-sm">{tweet.retweets}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                      <Heart size={16} />
                      <span className="text-sm">{tweet.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Auto-redirect script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(function() {
              window.open('https://x.com/craig', '_blank');
            }, 5000);
          `
        }}
      />
    </div>
  )
}
