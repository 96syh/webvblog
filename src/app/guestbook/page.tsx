"use client"

import { Sidebar } from "@/components/Sidebar"
import { MessageCircle, Send, Mail, User, Calendar } from "lucide-react"
import { useState } from "react"

export default function GuestbookPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-8">
          <GuestbookContent />
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-4">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold text-[#494b4f]">Rain</h1>
        </header>
        <GuestbookContent />
      </div>
    </div>
  )
}

function GuestbookContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'message'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '', type: 'message' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Sample guestbook entries
  const entries = [
    {
      name: "Sarah Chen",
      message: "Love your clean design aesthetic! The tools page was super helpful for discovering new productivity apps.",
      date: "2024-12-20",
      type: "feedback"
    },
    {
      name: "Alex Rodriguez",
      message: "Your theBlock project sounds awesome! Would love to collaborate on Notion-related tools.",
      date: "2024-12-18",
      type: "collaboration"
    },
    {
      name: "Maya Patel",
      message: "Just discovered your site through the Notion community. Really impressed with your work!",
      date: "2024-12-15",
      type: "message"
    },
    {
      name: "Jordan Kim",
      message: "Recommendation: Check out 'The User Experience Team of One' book - perfect for your reading list!",
      date: "2024-12-12",
      type: "recommendation"
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'feedback': return 'bg-blue-100 text-blue-800'
      case 'collaboration': return 'bg-purple-100 text-purple-800'
      case 'recommendation': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeText = (type: string) => {
    switch (type) {
      case 'feedback': return '反馈'
      case 'collaboration': return '合作'
      case 'recommendation': return '推荐'
      default: return '消息'
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="text-4xl mb-4">✨</div>
          <h2 className="text-2xl font-bold text-[#494b4f] mb-4">谢谢您！</h2>
          <p className="text-[#999a9b] mb-6">
            您的消息已收到。感谢您抽出时间联系我！
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#494b4f] hover:bg-[#9a6a48] text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            发送另一条消息
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#494b4f]">留言板</h1>
        <p className="text-[#999a9b] text-lg max-w-2xl mx-auto">
          留下消息、分享反馈或者打个招呼！我喜欢与开发者、
          设计师和创作者同行建立联系。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8">
          <h2 className="text-xl font-semibold text-[#494b4f] mb-6 flex items-center gap-2">
            <MessageCircle size={20} />
            留言
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#494b4f] mb-2">
                姓名 *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#999a9b]" size={18} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#bd8c66] transition-colors"
                  placeholder="您的姓名"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#494b4f] mb-2">
                邮箱 *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#999a9b]" size={18} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#bd8c66] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-[#494b4f] mb-2">
                消息类型
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#bd8c66] transition-colors"
              >
                <option value="message">普通消息</option>
                <option value="feedback">反馈</option>
                <option value="collaboration">合作</option>
                <option value="recommendation">推荐</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#494b4f] mb-2">
                消息 *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#bd8c66] transition-colors resize-none"
                placeholder="您的消息..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#494b4f] hover:bg-[#9a6a48] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  发送中...
                </>
              ) : (
                <>
                  <Send size={16} />
                  发送消息
                </>
              )}
            </button>
          </form>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8">
          <h2 className="text-xl font-semibold text-[#494b4f] mb-6">最近的消息</h2>

          <div className="space-y-4">
            {entries.map((entry, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#494b4f] text-sm">{entry.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded ${getTypeColor(entry.type)}`}>
                        {getTypeText(entry.type)}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-[#999a9b]">
                        <Calendar size={12} />
                        <span>{new Date(entry.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[#999a9b] text-sm leading-relaxed">
                  {entry.message}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-[#999a9b] text-sm">
              {entries.length} messages and counting! 💬
            </p>
          </div>
        </div>
      </div>

      {/* Other Ways to Connect */}
      <section className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <h2 className="text-xl font-semibold text-[#494b4f] mb-4">其他联系方式</h2>
        <p className="text-[#999a9b] mb-6">
          偏好其他平台？您也可以在这些社交网络上找到我。
        </p>
        <div className="flex justify-center gap-4">
          <a href="/x" className="text-[#999a9b] hover:text-[#9a6a48] transition-colors">X.com</a>
          <a href="/gh" className="text-[#999a9b] hover:text-[#9a6a48] transition-colors">GitHub</a>
          <a href="/mastodon" className="text-[#999a9b] hover:text-[#9a6a48] transition-colors">Mastodon</a>
          <a href="/threads" className="text-[#999a9b] hover:text-[#9a6a48] transition-colors">Threads</a>
        </div>
      </section>
    </div>
  )
}
