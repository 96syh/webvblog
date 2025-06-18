import { Sidebar } from "@/components/Sidebar"
import { ExternalLink, Star, Laptop, Smartphone, Cloud, Code, Palette, Headphones } from "lucide-react"

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-8">
          <ToolsContent />
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-4">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold text-[#494b4f]">Rain</h1>
        </header>
        <ToolsContent />
      </div>
    </div>
  )
}

function ToolsContent() {
  const toolCategories = [
    {
      title: "Development",
      icon: <Code size={20} />,
      tools: [
        {
          name: "VS Code",
          description: "My primary code editor with extensive customization",
          category: "Editor",
          link: "https://code.visualstudio.com/",
          rating: 5,
          favorite: true
        },
        {
          name: "GitHub",
          description: "Version control and collaboration platform",
          category: "Version Control",
          link: "https://github.com",
          rating: 5,
          favorite: true
        },
        {
          name: "Vercel",
          description: "Deployment platform for frontend frameworks",
          category: "Deployment",
          link: "https://vercel.com",
          rating: 5,
          favorite: false
        },
        {
          name: "Postman",
          description: "API development and testing tool",
          category: "API Testing",
          link: "https://postman.com",
          rating: 4,
          favorite: false
        }
      ]
    },
    {
      title: "Design",
      icon: <Palette size={20} />,
      tools: [
        {
          name: "Figma",
          description: "Collaborative interface design tool",
          category: "Design",
          link: "https://figma.com",
          rating: 5,
          favorite: true
        },
        {
          name: "Unsplash",
          description: "High-quality stock photography",
          category: "Photography",
          link: "https://unsplash.com",
          rating: 4,
          favorite: false
        },
        {
          name: "Coolors",
          description: "Color palette generator and explorer",
          category: "Color",
          link: "https://coolors.co",
          rating: 4,
          favorite: false
        },
        {
          name: "Font Pair",
          description: "Font pairing suggestions and inspiration",
          category: "Typography",
          link: "https://fontpair.co",
          rating: 4,
          favorite: false
        }
      ]
    },
    {
      title: "Productivity",
      icon: <Laptop size={20} />,
      tools: [
        {
          name: "Notion",
          description: "All-in-one workspace for notes, tasks, and collaboration",
          category: "Organization",
          link: "https://notion.so",
          rating: 5,
          favorite: true
        },
        {
          name: "Linear",
          description: "Issue tracking and project management",
          category: "Project Management",
          link: "https://linear.app",
          rating: 5,
          favorite: true
        },
        {
          name: "RaycastKit",
          description: "Productivity tools and launcher for macOS",
          category: "Launcher",
          link: "https://raycast.com",
          rating: 4,
          favorite: false
        },
        {
          name: "Obsidian",
          description: "Knowledge management and note-taking",
          category: "Notes",
          link: "https://obsidian.md",
          rating: 4,
          favorite: false
        }
      ]
    },
    {
      title: "Hardware",
      icon: <Laptop size={20} />,
      tools: [
        {
          name: "MacBook Pro M2",
          description: "Primary development machine",
          category: "Computer",
          link: "",
          rating: 5,
          favorite: true
        },
        {
          name: "iPhone 14 Pro",
          description: "Mobile device for testing and daily use",
          category: "Mobile",
          link: "",
          rating: 4,
          favorite: false
        },
        {
          name: "AirPods Pro",
          description: "Wireless earbuds for music and calls",
          category: "Audio",
          link: "",
          rating: 4,
          favorite: false
        },
        {
          name: "Magic Mouse",
          description: "Apple's wireless mouse",
          category: "Input",
          link: "",
          rating: 3,
          favorite: false
        }
      ]
    }
  ]

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
        <h1 className="text-3xl font-bold text-[#494b4f]">我使用的工具</h1>
        <p className="text-[#999a9b] text-lg max-w-2xl mx-auto">
          精心整理的工具、软件和硬件列表，帮助我保持高效并创造更好的作品。
          定期更新，分享我发现的新收藏。
        </p>
      </div>

      {/* Favorites Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8">
        <h2 className="text-xl font-semibold text-[#494b4f] mb-4 flex items-center gap-2">
          <Star size={20} className="text-yellow-400 fill-current" />
          Current Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolCategories.flatMap(cat => cat.tools.filter(tool => tool.favorite)).map((tool, index) => (
            <div key={index} className="p-4 bg-[#fafafa] rounded-lg border">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-[#494b4f]">{tool.name}</h3>
                {tool.link && (
                  <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-[#999a9b] hover:text-[#9a6a48] transition-colors">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <p className="text-[#999a9b] text-sm mb-2">{tool.description}</p>
              <div className="flex items-center gap-1">
                {renderStars(tool.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tool Categories */}
      <div className="space-y-8">
        {toolCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-[#494b4f] mb-6 flex items-center gap-2">
              <span className="text-[#9a6a48]">{category.icon}</span>
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.tools.map((tool, toolIndex) => (
                <div key={toolIndex} className="border border-gray-200 rounded-lg p-4 hover:border-[#bd8c66] transition-all duration-200">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[#494b4f]">{tool.name}</h3>
                        {tool.favorite && (
                          <Star size={14} className="text-yellow-400 fill-current" />
                        )}
                      </div>
                      <span className="text-xs text-[#999a9b] bg-[#f0f0f0] px-2 py-1 rounded">
                        {tool.category}
                      </span>
                    </div>
                    {tool.link && (
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#999a9b] hover:text-[#9a6a48] transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <p className="text-[#999a9b] text-sm mb-3 leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="flex items-center gap-1">
                    {renderStars(tool.rating)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Recommendation CTA */}
      <section className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <h2 className="text-xl font-semibold text-[#494b4f] mb-4">Have a Recommendation?</h2>
        <p className="text-[#999a9b] mb-6 max-w-2xl mx-auto">
          I'm always looking for new tools that can improve my workflow. If you have a favorite tool
          that you think I should try, let me know!
        </p>
        <a
          href="/guestbook"
          className="inline-flex items-center gap-2 bg-[#494b4f] hover:bg-[#9a6a48] text-white px-6 py-3 rounded-lg transition-colors font-medium"
        >
          Share a Tool
          <ExternalLink size={16} />
        </a>
      </section>
    </div>
  )
}
