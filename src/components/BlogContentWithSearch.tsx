"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import type { BlogPost } from "@/lib/notion"
import { BlogPostCard } from "@/components/BlogPostCard"
import { BlogSearch } from "@/components/BlogSearch"

interface BlogContentWithSearchProps {
  posts: BlogPost[]
}

export function BlogContentWithSearch({ posts }: BlogContentWithSearchProps) {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts)

  const categories = [
    { name: "Development", count: posts.filter(p => p.tags.some(tag => tag.toLowerCase().includes('development'))).length },
    { name: "Design", count: posts.filter(p => p.tags.some(tag => tag.toLowerCase().includes('design'))).length },
    { name: "Productivity", count: posts.filter(p => p.tags.some(tag => tag.toLowerCase().includes('productivity'))).length },
    { name: "Tools", count: posts.filter(p => p.tags.some(tag => tag.toLowerCase().includes('tools'))).length },
    { name: "Thoughts", count: posts.filter(p => p.tags.some(tag => tag.toLowerCase().includes('thoughts'))).length },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#494b4f] dark:text-white">Blog</h1>
        <p className="text-[#999a9b] dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Thoughts on development, design, productivity, and the tools that help us create better experiences.
        </p>
      </div>

      {/* RSS and Newsletter */}
      <div className="flex justify-center">
        <div className="flex items-center gap-4">
          <a
            href="/feed"
            className="flex items-center gap-2 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248S0 22.546 0 20.752s1.456-3.248 3.252-3.248 3.251 1.454 3.251 3.248zM1.677 6.082v4.148c6.988 0 12.65 5.662 12.65 12.65h4.148c0-9.281-7.517-16.798-16.798-16.798zM1.677.334v4.148c11.625 0 21.046 9.421 21.046 21.046H27c0-13.624-11.049-24.673-24.673-24.673z"/>
            </svg>
            RSS Feed
          </a>
          <span className="text-[#999a9b] dark:text-gray-400">•</span>
          <a
            href="#newsletter"
            className="text-[#9a6a48] dark:text-[#bd8c66] hover:underline text-sm"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </div>

      {/* Search Component */}
      {posts.length > 0 && (
        <BlogSearch posts={posts} onFilteredPosts={setFilteredPosts} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {posts.length > 0 ? (
            <>
              <h2 className="text-xl font-semibold text-[#494b4f] dark:text-white mb-4">
                {filteredPosts.length === posts.length ? 'Latest Posts' : `Search Results (${filteredPosts.length})`}
              </h2>
              {filteredPosts.length > 0 ? (
                <div className="space-y-4">
                  {filteredPosts.map((post, index) => (
                    <BlogPostCard key={post.id} post={post} index={index} />
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center transition-colors duration-200">
                  <div className="text-4xl mb-4">🔍</div>
                  <h2 className="text-xl font-semibold text-[#494b4f] dark:text-white mb-4">No Posts Found</h2>
                  <p className="text-[#999a9b] dark:text-gray-400 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Coming Soon Message */
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center transition-colors duration-200">
              <div className="text-4xl mb-4">✍️</div>
              <h2 className="text-xl font-semibold text-[#494b4f] dark:text-white mb-4">文章即将发布</h2>
              <p className="text-[#999a9b] dark:text-gray-400 mb-6">
                我目前正在创作一些关于开发、设计和生产力的精彩内容。
                敬请期待更新！
              </p>
              <div className="inline-flex items-center gap-2 bg-[#f0f0f0] dark:bg-gray-700 px-4 py-2 rounded-lg text-sm text-[#999a9b] dark:text-gray-400">
                <Calendar size={16} />
                预计首篇文章：2025年初
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Categories */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
            <h3 className="font-semibold text-[#494b4f] dark:text-white mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div key={`${category.name}-${index}`} className="flex items-center justify-between">
                  <span className="text-[#999a9b] dark:text-gray-400 text-sm hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors cursor-pointer">
                    {category.name}
                  </span>
                  <span className="text-xs text-[#999a9b] dark:text-gray-400 bg-[#f0f0f0] dark:bg-gray-700 px-2 py-1 rounded">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
            <h3 className="font-semibold text-[#494b4f] dark:text-white mb-4">Recent Activity</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-[#999a9b] dark:text-gray-400">Started writing "The Art of Clean Code"</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-[#999a9b] dark:text-gray-400">Updated site design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-[#999a9b] dark:text-gray-400">Launched theBlock project</span>
              </div>
            </div>
          </div>

          {/* Subscribe CTA */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
            <h3 className="font-semibold text-[#494b4f] dark:text-white mb-3">Stay Updated</h3>
            <p className="text-[#999a9b] dark:text-gray-400 text-sm mb-4">
              Get notified when new posts are published.
            </p>
            <a
              href="#newsletter"
              className="block w-full bg-[#494b4f] hover:bg-[#9a6a48] text-white text-center py-2 rounded-lg transition-colors text-sm font-medium"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
