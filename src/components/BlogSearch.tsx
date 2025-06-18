"use client"

import { useState, useMemo } from "react"
import { Search, Filter, X, Calendar, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { BlogPost } from "@/lib/notion"

interface BlogSearchProps {
  posts: BlogPost[]
  onFilteredPosts: (posts: BlogPost[]) => void
}

export function BlogSearch({ posts, onFilteredPosts }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<"date" | "title" | "readTime">("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [showFilters, setShowFilters] = useState(false)

  // Extract all unique tags from posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    posts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [posts])

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    const filtered = posts.filter(post => {
      // Search filter
      const matchesSearch = !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      // Tag filter
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => post.tags.includes(tag))

      return matchesSearch && matchesTags
    })

    // Sort posts
    filtered.sort((a, b) => {
      let comparison = 0

      switch (sortBy) {
        case "date":
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
          break
        case "title":
          comparison = a.title.localeCompare(b.title)
          break
        case "readTime":
          const aTime = Number.parseInt(a.readTime?.split(" ")[0] || "0")
          const bTime = Number.parseInt(b.readTime?.split(" ")[0] || "0")
          comparison = aTime - bTime
          break
      }

      return sortOrder === "desc" ? -comparison : comparison
    })

    return filtered
  }, [posts, searchQuery, selectedTags, sortBy, sortOrder])

  // Update parent component with filtered posts
  useMemo(() => {
    onFilteredPosts(filteredPosts)
  }, [filteredPosts, onFilteredPosts])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTags([])
    setSortBy("date")
    setSortOrder("desc")
  }

  const hasActiveFilters = searchQuery || selectedTags.length > 0 || sortBy !== "date" || sortOrder !== "desc"

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#999a9b] dark:text-gray-400" size={18} />
        <input
          type="text"
          placeholder="搜索文章..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-12 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#bd8c66] dark:focus:border-[#bd8c66] transition-colors bg-white dark:bg-gray-800 text-[#494b4f] dark:text-white"
        />
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded transition-colors ${
            showFilters ? 'text-[#9a6a48] dark:text-[#bd8c66]' : 'text-[#999a9b] dark:text-gray-400'
          } hover:text-[#9a6a48] dark:hover:text-[#bd8c66]`}
        >
          <Filter size={18} />
        </button>
      </div>

      {/* Search Results Summary */}
      <div className="flex items-center justify-between text-sm text-[#999a9b] dark:text-gray-400">
        <span>
          共 {posts.length} 篇文章，显示 {filteredPosts.length} 篇
          {searchQuery && ` 匹配 "${searchQuery}"`}
        </span>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-[#9a6a48] dark:text-[#bd8c66] hover:underline"
          >
            <X size={14} />
            清除筛选
          </button>
        )}
      </div>

      {/* Advanced Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-4">
              {/* Sort Options */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#494b4f] dark:text-white">排序方式</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "date", label: "日期", icon: Calendar },
                    { value: "title", label: "标题", icon: Filter },
                    { value: "readTime", label: "阅读时间", icon: Clock }
                  ].map(({ value, label, icon: Icon }) => (
                    <button
                      key={value}
                      onClick={() => setSortBy(value as any)}
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs transition-colors ${
                        sortBy === value
                          ? 'bg-[#9a6a48] text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-[#999a9b] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <Icon size={12} />
                      {label}
                    </button>
                  ))}
                  <button
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-[#999a9b] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {sortOrder === "asc" ? "↑ 升序" : "↓ 降序"}
                  </button>
                </div>
              </div>

              {/* Tag Filters */}
              {allTags.length > 0 && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#494b4f] dark:text-white">按标签筛选</label>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <motion.button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-xs transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-[#9a6a48] text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-[#999a9b] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.button>
                    ))}
                  </div>
                  {selectedTags.length > 0 && (
                    <div className="text-xs text-[#999a9b] dark:text-gray-400">
                      已选择: {selectedTags.join(", ")}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
