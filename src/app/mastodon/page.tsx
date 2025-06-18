import { Sidebar } from "@/components/Sidebar"
import { PageTransition } from "@/components/PageTransition"
import { ExternalLink, Users, Globe } from "lucide-react"

export const metadata = {
  title: "Mastodon Profile",
  description: "Connect with Craig on Mastodon, the decentralized social network.",
}

export default function MastodonPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 transition-colors duration-200">
        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <Sidebar />
          <main className="flex-1 lg:ml-64 p-8">
            <MastodonContent />
          </main>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden p-4">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-[#494b4f] dark:text-white">Rain</h1>
          </header>
          <MastodonContent />
        </div>
      </div>
    </PageTransition>
  )
}

function MastodonContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="text-[#6364ff]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.411 1.526-3.411 6.732 0 1.192-.023 2.618.015 4.129.148 5.937 1.17 11.783 7.057 13.204 2.755.666 5.124.808 7.029.712 3.457-.174 5.39-1.119 5.39-1.119l-.114-2.507s-2.467.778-5.237.682c-2.739-.09-5.628-.284-6.077-3.497-.041-.315-.062-.647-.062-.993 0 0 2.691.655 6.089.81 2.097.096 4.063-.123 6.058-.365 3.827-.463 7.155-2.856 7.572-5.045.658-3.453.604-8.43.604-8.43z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#494b4f] dark:text-white">Mastodon</h1>
        </div>
        <p className="text-[#999a9b] dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Join me on Mastodon, the decentralized social network where communities flourish and conversations matter.
        </p>
      </div>

      {/* Redirect Notice */}
      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <ExternalLink className="text-purple-600 dark:text-purple-400" size={20} />
          <h3 className="font-medium text-purple-900 dark:text-purple-100">Redirecting to Mastodon</h3>
        </div>
        <p className="text-purple-700 dark:text-purple-300 mb-4">
          You'll be redirected to my Mastodon profile in a few seconds, or click the button below to go immediately.
        </p>
        <a
          href="https://mastodon.social/@craig"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#6364ff] hover:bg-[#5355ee] text-white px-4 py-2 rounded-lg transition-colors font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.411 1.526-3.411 6.732 0 1.192-.023 2.618.015 4.129.148 5.937 1.17 11.783 7.057 13.204 2.755.666 5.124.808 7.029.712 3.457-.174 5.39-1.119 5.39-1.119l-.114-2.507s-2.467.778-5.237.682c-2.739-.09-5.628-.284-6.077-3.497-.041-.315-.062-.647-.062-.993 0 0 2.691.655 6.089.81 2.097.096 4.063-.123 6.058-.365 3.827-.463 7.155-2.856 7.572-5.045.658-3.453.604-8.43.604-8.43z"/>
          </svg>
          Follow on Mastodon
        </a>
      </div>

      {/* About Mastodon */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="text-[#6364ff]" size={20} />
            <h3 className="font-semibold text-[#494b4f] dark:text-white">Decentralized</h3>
          </div>
          <p className="text-[#999a9b] dark:text-gray-400 text-sm">
            Mastodon is a decentralized social network where no single entity controls your data or experience.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
          <div className="flex items-center gap-2 mb-3">
            <Users className="text-[#6364ff]" size={20} />
            <h3 className="font-semibold text-[#494b4f] dark:text-white">Community-Driven</h3>
          </div>
          <p className="text-[#999a9b] dark:text-gray-400 text-sm">
            Built by communities for communities, with a focus on healthy conversations and user control.
          </p>
        </div>
      </div>

      {/* Auto-redirect script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(function() {
              window.open('https://mastodon.social/@craig', '_blank');
            }, 5000);
          `
        }}
      />
    </div>
  )
}
