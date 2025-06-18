import { Sidebar } from "@/components/Sidebar"
import { Github, ExternalLink, Calendar, Code, Palette } from "lucide-react"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-8">
          <WorkContent />
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-4">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold text-[#494b4f]">Rain</h1>
        </header>
        <WorkContent />
      </div>
    </div>
  )
}

function WorkContent() {
  const projects = [
    {
      title: "theBlock",
      description: "A collaborative project started by three Notion ambassadors, aiming to share information, tips, and articles written in Notion. Features a clean interface for content discovery and community engagement.",
      tech: ["Notion API", "React", "Next.js", "Tailwind CSS"],
      status: "Active",
      type: "Community Project",
      year: "2024"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my work, thoughts, and interests. Built with modern web technologies and focused on clean design and user experience.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      status: "Live",
      type: "Personal",
      year: "2024",
      link: "https://Rain"
    },
    {
      title: "Productivity Dashboard",
      description: "A comprehensive dashboard for tracking daily habits, tasks, and goals. Integrates with various productivity tools and provides insightful analytics.",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      status: "In Development",
      type: "Tool",
      year: "2024"
    },
    {
      title: "Design System Library",
      description: "A reusable component library focused on accessibility and clean design principles. Used across multiple projects to maintain consistency.",
      tech: ["React", "Storybook", "Styled Components", "Jest"],
      status: "Maintained",
      type: "Library",
      year: "2023"
    }
  ]

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "Design", items: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping"] },
    { category: "Tools", items: ["Git", "Docker", "Notion", "Linear", "Vercel"] },
    { category: "Backend", items: ["Node.js", "PostgreSQL", "API Design", "Serverless"] }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#494b4f]">工作与项目</h1>
        <p className="text-[#999a9b] text-lg max-w-2xl mx-auto">
          我参与过的项目合集，从个人实验到协作项目。
          每个项目都代表着一次学习之旅和对新技术的探索。
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">4+</div>
          <div className="text-[#999a9b] text-sm">活跃项目</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">2</div>
          <div className="text-[#999a9b] text-sm">年工作经验</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">15+</div>
          <div className="text-[#999a9b] text-sm">技术栈</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">∞</div>
          <div className="text-[#999a9b] text-sm">咖啡杯数</div>
        </div>
      </div>

      {/* Projects Grid */}
      <section>
        <h2 className="text-2xl font-semibold text-[#494b4f] mb-6">精选项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-[#bd8c66] transition-all duration-200 hover:shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#494b4f] mb-1">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-[#999a9b]">
                    <span className="bg-[#f0f0f0] px-2 py-1 rounded text-xs">{project.type}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-[#999a9b] hover:text-[#9a6a48] transition-colors">
                    <Github size={16} />
                  </button>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 text-[#999a9b] hover:text-[#9a6a48] transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[#999a9b] text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-[#fafafa] text-[#494b4f] text-xs px-2 py-1 rounded border">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  project.status === 'Live' ? 'bg-green-400' :
                  project.status === 'Active' ? 'bg-blue-400' :
                  project.status === 'In Development' ? 'bg-yellow-400' :
                  'bg-gray-400'
                }`} />
                <span className="text-xs text-[#999a9b]">{project.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold text-[#494b4f] mb-6">技能与技术栈</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                {skillGroup.category === 'Frontend' && <Code size={18} className="text-[#9a6a48]" />}
                {skillGroup.category === 'Design' && <Palette size={18} className="text-[#9a6a48]" />}
                {skillGroup.category === 'Tools' && <span className="text-[#9a6a48]">🛠️</span>}
                {skillGroup.category === 'Backend' && <span className="text-[#9a6a48]">⚙️</span>}
                <h3 className="font-semibold text-[#494b4f]">{skillGroup.category}</h3>
              </div>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-[#999a9b] text-sm">• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <h2 className="text-xl font-semibold text-[#494b4f] mb-4">让我们一起工作</h2>
        <p className="text-[#999a9b] mb-6 max-w-2xl mx-auto">
          我总是有兴趣参与令人兴奋的项目合作。无论您有想要实现的想法，
          还是需要帮助完善现有项目，让我们聊聊吧！
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:craig@Rain"
            className="bg-[#494b4f] hover:bg-[#9a6a48] text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            联系我
          </a>
          <a
            href="/guestbook"
            className="border border-[#494b4f] text-[#494b4f] hover:bg-[#494b4f] hover:text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            留言
          </a>
        </div>
      </section>
    </div>
  )
}
