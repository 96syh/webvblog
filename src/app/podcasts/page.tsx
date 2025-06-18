import { Sidebar } from "@/components/Sidebar"
import { Headphones, ExternalLink, Star, Clock } from "lucide-react"

export default function PodcastsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-8">
          <PodcastsContent />
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-4">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold text-[#494b4f]">Rain</h1>
        </header>
        <PodcastsContent />
      </div>
    </div>
  )
}

function PodcastsContent() {
  const podcasts = [
    {
      title: "Syntax",
      hosts: "Wes Bos & Scott Tolinski",
      category: "Web Development",
      description: "A tasty treats podcast for web developers covering web development tips, tricks, and techniques.",
      status: "active",
      rating: 5,
      favorite: true,
      episodes: "600+",
      link: "https://syntax.fm"
    },
    {
      title: "Design Better",
      hosts: "Aarron Walter & Eli Woolery",
      category: "Design",
      description: "A deep dive into the methods, tools, and tactics used by today's most successful design teams.",
      status: "active",
      rating: 4,
      favorite: true,
      episodes: "100+",
      link: "https://designbetter.co/podcast"
    },
    {
      title: "The Changelog",
      hosts: "Adam Stacoviak & Jerod Santo",
      category: "Software Development",
      description: "Conversations with the hackers, leaders, and innovators of the software world.",
      status: "active",
      rating: 4,
      favorite: false,
      episodes: "500+",
      link: "https://changelog.com/podcast"
    },
    {
      title: "Shop Talk Show",
      hosts: "Dave Rupert & Chris Coyier",
      category: "Web Development",
      description: "An internet radio show about the internet where they interview web developers and designers.",
      status: "active",
      rating: 4,
      favorite: false,
      episodes: "550+",
      link: "https://shoptalkshow.com"
    },
    {
      title: "Notion Office Hours",
      hosts: "Notion Team",
      category: "Productivity",
      description: "Tips, tricks, and workflows for getting the most out of Notion.",
      status: "active",
      rating: 4,
      favorite: true,
      episodes: "50+",
      link: "https://notion.so/podcast"
    },
    {
      title: "Full Stack Radio",
      hosts: "Adam Wathan",
      category: "Full Stack Development",
      description: "A podcast for developers interested in building great software products.",
      status: "active",
      rating: 5,
      favorite: false,
      episodes: "200+",
      link: "https://fullstackradio.com"
    }
  ]

  const categories = [...new Set(podcasts.map(p => p.category))]
  const favoriteCount = podcasts.filter(p => p.favorite).length

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={12}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ))
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#494b4f]">我收听的播客</h1>
        <p className="text-[#999a9b] text-lg max-w-2xl mx-auto">
          精心整理的播客清单，让我了解网页开发、设计和生产力相关信息。
          通勤或编程时的完美伴侣。
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">{podcasts.length}</div>
          <div className="text-[#999a9b] text-sm">播客总数</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">{favoriteCount}</div>
          <div className="text-[#999a9b] text-sm">收藏播客</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">{categories.length}</div>
          <div className="text-[#999a9b] text-sm">分类数量</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">∞</div>
          <div className="text-[#999a9b] text-sm">收听时长</div>
        </div>
      </div>

      {/* Favorites */}
      <section className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8">
        <h2 className="text-xl font-semibold text-[#494b4f] mb-4 flex items-center gap-2">
          <Star size={20} className="text-yellow-400 fill-current" />
          当前收藏
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {podcasts.filter(podcast => podcast.favorite).map((podcast, index) => (
            <div key={index} className="p-4 bg-[#fafafa] rounded-lg border">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-[#494b4f]">{podcast.title}</h3>
                <a href={podcast.link} target="_blank" rel="noopener noreferrer" className="text-[#999a9b] hover:text-[#9a6a48] transition-colors">
                  <ExternalLink size={14} />
                </a>
              </div>
              <p className="text-[#999a9b] text-sm mb-2">by {podcast.hosts}</p>
              <div className="flex items-center gap-1 mb-2">
                {renderStars(podcast.rating)}
              </div>
              <span className="text-xs text-[#999a9b] bg-white px-2 py-1 rounded border">
                {podcast.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* All Podcasts */}
      <section>
        <h2 className="text-2xl font-semibold text-[#494b4f] mb-6">所有播客</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {podcasts.map((podcast, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-[#bd8c66] transition-all duration-200 hover:shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-[#494b4f]">{podcast.title}</h3>
                    {podcast.favorite && (
                      <Star size={16} className="text-yellow-400 fill-current" />
                    )}
                  </div>
                  <p className="text-[#999a9b] text-sm mb-2">Hosted by {podcast.hosts}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-[#999a9b] bg-[#f0f0f0] px-2 py-1 rounded">
                      {podcast.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#999a9b]">
                      <Clock size={12} />
                      <span>{podcast.episodes} episodes</span>
                    </div>
                  </div>
                </div>
                <a
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#999a9b] hover:text-[#9a6a48] transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <p className="text-[#999a9b] text-sm mb-4 leading-relaxed">
                {podcast.description}
              </p>

              <div className="flex items-center gap-1">
                {renderStars(podcast.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8">
        <h2 className="text-xl font-semibold text-[#494b4f] mb-4">分类</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span key={index} className="bg-[#fafafa] text-[#494b4f] text-sm px-3 py-2 rounded-lg border">
              {category} ({podcasts.filter(p => p.category === category).length})
            </span>
          ))}
        </div>
      </section>

      {/* Recommendation CTA */}
      <section className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <h2 className="text-xl font-semibold text-[#494b4f] mb-4">知道好播客吗？</h2>
        <p className="text-[#999a9b] mb-6 max-w-2xl mx-auto">
          我总是在寻找新的播客加入我的收听列表。如果您有涵盖
          开发、设计或生产力的收藏播客，请告诉我！
        </p>
        <a
          href="/guestbook"
          className="inline-flex items-center gap-2 bg-[#494b4f] hover:bg-[#9a6a48] text-white px-6 py-3 rounded-lg transition-colors font-medium"
        >
          <Headphones size={16} />
          推荐播客
        </a>
      </section>
    </div>
  )
}
