import { Sidebar } from "@/components/Sidebar"
import { Book, ExternalLink, Star, Calendar } from "lucide-react"

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-8">
          <BooksContent />
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-4">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold text-[#494b4f]">Rain</h1>
        </header>
        <BooksContent />
      </div>
    </div>
  )
}

function BooksContent() {
  const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "read",
      rating: 5,
      category: "Development",
      year: "2024",
      description: "A masterpiece on writing maintainable, readable code. Essential for every developer."
    },
    {
      title: "Don't Make Me Think",
      author: "Steve Krug",
      status: "read",
      rating: 5,
      category: "UX Design",
      year: "2024",
      description: "Timeless principles of intuitive web design and usability."
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      status: "read",
      rating: 4,
      category: "Productivity",
      year: "2024",
      description: "Practical strategies for building good habits and breaking bad ones."
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      status: "reading",
      rating: 0,
      category: "Design",
      year: "2024",
      description: "Classic book on design principles and how design affects our daily interactions."
    },
    {
      title: "System Design Interview",
      author: "Alex Xu",
      status: "want-to-read",
      rating: 0,
      category: "Development",
      year: "2025",
      description: "Comprehensive guide to system design concepts and interview preparation."
    }
  ]

  const stats = {
    totalRead: books.filter(book => book.status === 'read').length,
    currentlyReading: books.filter(book => book.status === 'reading').length,
    wantToRead: books.filter(book => book.status === 'want-to-read').length,
    avgRating: books.filter(book => book.rating > 0).reduce((acc, book) => acc + book.rating, 0) / books.filter(book => book.rating > 0).length
  }

  const renderStars = (rating: number) => {
    if (rating === 0) return <span className="text-[#999a9b] text-sm">Not rated</span>
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={12}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'read': return 'bg-green-100 text-green-800'
      case 'reading': return 'bg-blue-100 text-blue-800'
      case 'want-to-read': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'read': return '已读'
      case 'reading': return '在读'
      case 'want-to-read': return '想读'
      default: return status
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#494b4f]">我阅读的书籍</h1>
        <p className="text-[#999a9b] text-lg max-w-2xl mx-auto">
          影响我对开发、设计和生活思考的书籍合集。
          总是在学习新东西。
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">{stats.totalRead}</div>
          <div className="text-[#999a9b] text-sm">已读书籍</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">{stats.currentlyReading}</div>
          <div className="text-[#999a9b] text-sm">正在阅读</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">{stats.wantToRead}</div>
          <div className="text-[#999a9b] text-sm">想要阅读</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-[#9a6a48]">{stats.avgRating.toFixed(1)}</div>
          <div className="text-[#999a9b] text-sm">平均评分</div>
        </div>
      </div>

      {/* Books Grid */}
      <section>
        <h2 className="text-2xl font-semibold text-[#494b4f] mb-6">阅读清单</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-[#bd8c66] transition-all duration-200 hover:shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#494b4f] mb-1">{book.title}</h3>
                  <p className="text-[#999a9b] text-sm mb-2">by {book.author}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(book.status)}`}>
                      {getStatusText(book.status)}
                    </span>
                    <span className="text-xs text-[#999a9b] bg-[#f0f0f0] px-2 py-1 rounded">
                      {book.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#999a9b] text-sm">
                  <Calendar size={14} />
                  <span>{book.year}</span>
                </div>
              </div>

              <p className="text-[#999a9b] text-sm mb-4 leading-relaxed">
                {book.description}
              </p>

              <div className="flex items-center gap-1">
                {renderStars(book.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendation CTA */}
      <section className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <h2 className="text-xl font-semibold text-[#494b4f] mb-4">有书籍推荐吗？</h2>
        <p className="text-[#999a9b] mb-6 max-w-2xl mx-auto">
          我总是在寻找下一本好书。如果您有改变您对开发、设计或生活看法的书籍，
          我很想了解！
        </p>
        <a
          href="/guestbook"
          className="inline-flex items-center gap-2 bg-[#494b4f] hover:bg-[#9a6a48] text-white px-6 py-3 rounded-lg transition-colors font-medium"
        >
          <Book size={16} />
          推荐书籍
        </a>
      </section>
    </div>
  )
}
