"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/notion"

interface BlogPostCardProps {
  post: BlogPost
  index: number
}

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-[#bd8c66] dark:hover:border-[#bd8c66] transition-all duration-200 hover:shadow-sm group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-lg font-semibold text-[#494b4f] dark:text-white mb-2 group-hover:text-[#9a6a48] dark:group-hover:text-[#bd8c66] transition-colors cursor-pointer">
              {post.title}
            </h3>
          </Link>
          <div className="flex items-center gap-4 text-sm text-[#999a9b] dark:text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
        </div>
        <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
          已发布
        </div>
      </div>

      <p className="text-[#999a9b] dark:text-gray-400 mb-4 leading-relaxed">
        {post.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, tagIndex) => (
          <motion.span
            key={`${tag}-${tagIndex}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
            className="bg-[#fafafa] dark:bg-gray-700 text-[#494b4f] dark:text-gray-300 text-xs px-2 py-1 rounded border dark:border-gray-600"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.article>
  )
}
