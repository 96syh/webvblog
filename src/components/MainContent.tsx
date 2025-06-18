"use client"

import { FeatureCard } from "./FeatureCard"
import { MapSection } from "./MapSection"
import { MusicWidget } from "./MusicWidget"
import { NewsletterSection } from "./NewsletterSection"
import { ExternalLink, Github, Menu } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface MainContentProps {
  isMobile?: boolean
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function MainContent({ isMobile = false }: MainContentProps) {
  return (
    <motion.main
      className={`flex-1 p-4 lg:p-8 ${!isMobile ? 'lg:ml-64' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Mobile Header */}
      {isMobile && (
        <motion.header
          className="flex items-center justify-between mb-8 lg:hidden"
          variants={itemVariants}
        >
          <h1 className="text-xl font-bold text-[#494b4f] dark:text-white">Rain</h1>
          <button className="p-2 text-[#494b4f] dark:text-white">
            <Menu size={24} />
          </button>
        </motion.header>
      )}

      <div className="max-w-4xl mx-auto space-y-8 lg:space-y-12">
        {/* Logo Header - Desktop Only */}
        {!isMobile && (
          <motion.div className="text-center" variants={itemVariants}>
            <h1 className="text-2xl font-bold text-[#494b4f] dark:text-white mb-8">Rain</h1>
          </motion.div>
        )}

        {/* Hero Section */}
        <motion.section className="text-center space-y-4" variants={itemVariants}>
          <motion.div
            className="w-16 h-16 mx-auto mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://ext.same-assets.com/3145676326/2274043439.png"
              alt="Craig Avatar"
              className="w-full h-full rounded-full"
            />
          </motion.div>
          <motion.p
            className="text-[#494b4f] dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            你好，欢迎来到我的博客。
          </motion.p>
        </motion.section>

        {/* Feature Cards Grid */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FeatureCard
              title="工具"
              description="我每天使用的工具"
              href="/tools"
              icon="🛠️"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FeatureCard
              title="书籍"
              description="发现我阅读的书籍"
              href="/books"
              icon="📚"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FeatureCard
              title="播客"
              description="我经常收听的播客"
              href="/podcasts"
              icon="🎧"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FeatureCard
              title="留言板"
              description="或者问我任何问题"
              href="/guestbook"
              icon="💬"
            />
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section className="space-y-4" variants={itemVariants}>
          <div className="flex items-center gap-2">
            <h2 className="text-lg lg:text-xl font-semibold text-[#494b4f] dark:text-white">项目</h2>
            <motion.a
              href="/gh"
              className="flex items-center gap-1 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              <span className="text-sm">GitHub</span>
            </motion.a>
          </div>
          <p className="text-[#999a9b] dark:text-gray-400 text-sm lg:text-base">
            我会平常在我的Github开源一些自己写的项目，
            可以在<Link href="/work" className="text-[#9a6a48] dark:text-[#bd8c66] hover:underline">这里</Link>查看。
          </p>
        </motion.section>

        {/* Blog Section */}
        <motion.section className="space-y-4" variants={itemVariants}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg lg:text-xl font-semibold text-[#494b4f] dark:text-white">文章</h2>
            <div className="flex items-center gap-2">
              <a href="/feed" className="text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248S0 22.546 0 20.752s1.456-3.248 3.252-3.248 3.251 1.454 3.251 3.248zM1.677 6.082v4.148c6.988 0 12.65 5.662 12.65 12.65h4.148c0-9.281-7.517-16.798-16.798-16.798zM1.677.334v4.148c11.625 0 21.046 9.421 21.046 21.046H27c0-13.624-11.049-24.673-24.673-24.673z"/>
                </svg>
              </a>
              <Link href="/blog" className="text-[#9a6a48] dark:text-[#bd8c66] hover:underline text-sm lg:text-base">所有文章</Link>
            </div>
          </div>
          <p className="text-[#999a9b] dark:text-gray-400 text-sm lg:text-base">点击查看。</p>
        </motion.section>

        {/* Map Section */}
        <motion.div variants={itemVariants}>
          <MapSection />
        </motion.div>

        {/* theBlock Project */}
        <motion.section
          className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 space-y-3 transition-colors duration-200"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="font-semibold text-[#494b4f] dark:text-white">theBlock</h3>
          <p className="text-[#999a9b] dark:text-gray-400 text-sm">
            
            在 Notion 中编写的信息、技巧和文章。
          </p>
        </motion.section>

        {/* Music Widget */}
        <motion.div variants={itemVariants}>
          <MusicWidget />
        </motion.div>

        {/* Newsletter Section */}
        <motion.div variants={itemVariants}>
          <NewsletterSection />
        </motion.div>

        {/* Mobile Navigation - Only show on mobile */}
        {isMobile && (
          <motion.nav
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:hidden transition-colors duration-200"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Link href="/" className="flex items-center gap-2 text-[#494b4f] dark:text-white hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors">
                <span>🏠</span>
                <span>首页</span>
              </Link>
              <Link href="/about" className="flex items-center gap-2 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors">
                <span>👤</span>
                <span>关于</span>
              </Link>
              <Link href="/work" className="flex items-center gap-2 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors">
                <span>💼</span>
                <span>项目</span>
              </Link>
              <Link href="/blog" className="flex items-center gap-2 text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors">
                <span>📝</span>
                <span>博客</span>
              </Link>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h4 className="text-sm font-semibold text-[#494b4f] dark:text-white mb-3">更多</h4>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/tools" className="text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors text-sm">工具</Link>
                <Link href="/books" className="text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors text-sm">书籍</Link>
                <Link href="/podcasts" className="text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors text-sm">播客</Link>
                <Link href="/guestbook" className="text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors text-sm">留言板</Link>
              </div>
            </div>
          </motion.nav>
        )}

        {/* Footer */}
        <motion.footer
          className="text-center py-6 lg:py-8 border-t border-gray-200 dark:border-gray-700"
          variants={itemVariants}
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <motion.a
              href="/threads"
              className="text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c0-7.5 6-13.5 13.5-13.5s13.5 6 13.5 13.5-6 13.5-13.5 13.5z"/>
              </svg>
            </motion.a>
            <motion.a
              href="/weibo"
              className="text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.66 20.96c-4.56 0-8.19-3.63-8.19-8.19 0-4.56 3.63-8.19 8.19-8.19 4.56 0 8.19 3.63 8.19 8.19 0 4.56-3.63 8.19-8.19 8.19z"/>
              </svg>
            </motion.a>
            <motion.a
              href="/gh"
              className="text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="/mastodon"
              className="text-[#999a9b] dark:text-gray-400 hover:text-[#9a6a48] dark:hover:text-[#bd8c66] transition-colors"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.411 1.526-3.411 6.732 0 1.192-.023 2.618.015 4.129.148 5.937 1.17 11.783 7.057 13.204 2.755.666 5.124.808 7.029.712 3.457-.174 5.39-1.119 5.39-1.119l-.114-2.507s-2.467.778-5.237.682c-2.739-.09-5.628-.284-6.077-3.497-.041-.315-.062-.647-.062-.993 0 0 2.691.655 6.089.81 2.097.096 4.063-.123 6.058-.365 3.827-.463 7.155-2.856 7.572-5.045.658-3.453.604-8.43.604-8.43z"/>
              </svg>
            </motion.a>
          </div>
          <p className="text-[#999a9b] dark:text-gray-400 text-sm">Copyright © 2025 Rain</p>
        </motion.footer>
      </div>
    </motion.main>
  )
}
