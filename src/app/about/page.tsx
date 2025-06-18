import { Sidebar } from "@/components/Sidebar"
import { Github, Mail, MapPin, Calendar } from "lucide-react"
import { PageTransition } from "@/components/PageTransition"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 transition-colors duration-200">
        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <Sidebar />
          <main className="flex-1 lg:ml-64 p-8">
            <AboutContent />
          </main>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden p-4">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-[#494b4f] dark:text-white">RAIN</h1>
          </header>
          <AboutContent />
        </div>
      </div>
    </PageTransition>
  )
}

function AboutContent() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto mb-6">
          <img
            src="https://ext.same-assets.com/3145676326/2274043439.png"
            alt="Craig Avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-3xl font-bold text-[#494b4f]">关于 Rain</h1>
        <p className="text-[#999a9b] text-lg">网页开发者 & 设计爱好者</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-[#494b4f] mb-4">自我介绍</h2>
          <p className="text-[#999a9b] leading-relaxed mb-4">
            你好！我是 Rain，一名来自辽宁沈阳的自由开发者。我专注于创造
            直观的用户界面，通过周到的细节提供干净、平衡的设计和令人愉悦的用户体验。
          </p>
          <p className="text-[#999a9b] leading-relaxed">
            我在网页开发的旅程由对构建数字体验的技术和创意双重热爱所驱动。我相信优秀的设计
            应该既美观又实用，创造用户喜爱的无缝交互体验。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#494b4f] mb-4">我的工作</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#fafafa] rounded-lg">
              <h3 className="font-semibold text-[#494b4f] mb-2">前端开发</h3>
              <p className="text-[#999a9b] text-sm">
                使用现代技术和最佳实践创建响应式、高性能的网页应用程序。
              </p>
            </div>
            <div className="p-4 bg-[#fafafa] rounded-lg">
              <h3 className="font-semibold text-[#494b4f] mb-2">UI/UX 设计</h3>
              <p className="text-[#999a9b] text-sm">
                设计优先考虑用户体验和可访问性的直观界面。
              </p>
            </div>
            <div className="p-4 bg-[#fafafa] rounded-lg">
              <h3 className="font-semibold text-[#494b4f] mb-2">生产力工具</h3>
              <p className="text-[#999a9b] text-sm">
                构建和整理帮助开发者和创作者更高效工作的工具。
              </p>
            </div>
            <div className="p-4 bg-[#fafafa] rounded-lg">
              <h3 className="font-semibold text-[#494b4f] mb-2">社区</h3>
              <p className="text-[#999a9b] text-sm">
                与开发者和设计师同行分享知识和协作。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#494b4f] mb-4">位置与联系</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#9a6a48]" />
              <span className="text-[#999a9b]">辽宁沈阳 (39.624°N / 118.178°E)</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-[#9a6a48]" />
              <span className="text-[#999a9b]">接受自由职业项目</span>
            </div>
            <div className="flex items-center gap-3">
              <Github size={18} className="text-[#9a6a48]" />
              <a href="/gh" className="text-[#9a6a48] hover:underline">github.com/96syh</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#9a6a48]" />
              <a href="mailto:craig@Rain" className="text-[#9a6a48] hover:underline">mrsong96sy@outlook.com</a>
            </div>
          </div>
        </section>
      </div>

      {/* Fun Facts */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8">
        <h2 className="text-xl font-semibold text-[#494b4f] mb-4">有趣的事实</h2>
        <ul className="space-y-2 text-[#999a9b]">
          <li>• 咖啡爱好者 - 总是在探索新的冲泡方法</li>
          <li>• Notion 大使和生产力工具收集者</li>
          <li>• 喜欢在编程时听播客</li>
          <li>• 相信好代码就像好文章 - 清晰而有目的</li>
          <li>• 在不断发展的网络世界中总是学习新东西</li>
        </ul>
      </div>
    </div>
  )
}
