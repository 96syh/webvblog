"use client"

import { Home, User, Briefcase, FileText, Wrench, Book, Headphones, MessageCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 }
  }
}

export function Sidebar() {
  return (
    <motion.aside
      className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 fixed h-full overflow-y-auto transition-colors duration-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header with Logo and Theme Toggle */}
      <motion.div className="flex items-center justify-between mb-8" variants={itemVariants}>
        <h1 className="text-xl font-bold text-[#494b4f] dark:text-white">Rain</h1>
        <ThemeToggle />
      </motion.div>

      {/* Main Navigation */}
      <motion.nav className="mb-8" variants={itemVariants}>
        <ul className="space-y-3">
          <motion.li whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/" className="flex items-center gap-3 text-[#494b4f] dark:text-white hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors group">
              <Home size={18} className="group-hover:scale-110 transition-transform duration-200" />
              <span>首页</span>
            </Link>
          </motion.li>
          <motion.li whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/about" className="flex items-center gap-3 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors group">
              <User size={18} className="group-hover:scale-110 transition-transform duration-200" />
              <span>关于</span>
            </Link>
          </motion.li>
          <motion.li whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/work" className="flex items-center gap-3 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors group">
              <Briefcase size={18} className="group-hover:scale-110 transition-transform duration-200" />
              <span>项目</span>
            </Link>
          </motion.li>
          <motion.li whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/blog" className="flex items-center gap-3 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors group">
              <FileText size={18} className="group-hover:scale-110 transition-transform duration-200" />
              <span>博客</span>
            </Link>
          </motion.li>
        </ul>
      </motion.nav>

      {/* More Section */}
      <motion.div className="mb-8" variants={itemVariants}>
        <h3 className="text-sm font-semibold text-[#494b4f] dark:text-white mb-4">更多</h3>
        <ul className="space-y-3">
          <motion.li whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/tools" className="flex items-center gap-3 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors group">
              <Wrench size={16} className="group-hover:scale-110 transition-transform duration-200" />
              <span>工具</span>
            </Link>
          </motion.li>
          <motion.li whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/books" className="flex items-center gap-3 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors group">
              <Book size={16} className="group-hover:scale-110 transition-transform duration-200" />
              <span>书籍</span>
            </Link>
          </motion.li>
          <motion.li whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/podcasts" className="flex items-center gap-3 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors group">
              <Headphones size={16} className="group-hover:scale-110 transition-transform duration-200" />
              <span>音乐</span>
            </Link>
          </motion.li>
          <motion.li whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/guestbook" className="flex items-center gap-3 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors group">
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform duration-200" />
              <span>留言板</span>
            </Link>
          </motion.li>
          <motion.li whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/analytics" className="flex items-center gap-3 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors group">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="group-hover:scale-110 transition-transform duration-200">
                <path d="M3 3v18h18" />
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
              </svg>
              <span>分析</span>
            </Link>
          </motion.li>
        </ul>
      </motion.div>

      {/* Social Links */}
      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold text-[#494b4f] dark:text-white mb-4">社交</h3>
        <ul className="space-y-3">
          <motion.li
            whileHover={{ x: 6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/threads" className="block text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-all duration-200 text-sm py-1 px-2 rounded-md hover:bg-[#9a6a48]/5 dark:hover:bg-[#bd8c66]/5">
              Threads
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ x: 6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/weibo" className="block text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-all duration-200 text-sm py-1 px-2 rounded-md hover:bg-[#9a6a48]/5 dark:hover:bg-[#bd8c66]/5">
              Weibo
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ x: 6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/gh" className="block text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-all duration-200 text-sm py-1 px-2 rounded-md hover:bg-[#9a6a48]/5 dark:hover:bg-[#bd8c66]/5">
              GitHub
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ x: 6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/mastodon" className="block text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-all duration-200 text-sm py-1 px-2 rounded-md hover:bg-[#9a6a48]/5 dark:hover:bg-[#bd8c66]/5">
              Mastodon
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ x: 6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/x" className="block text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-all duration-200 text-sm py-1 px-2 rounded-md hover:bg-[#9a6a48]/5 dark:hover:bg-[#bd8c66]/5">
              X.com
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </motion.aside>
  )
}
