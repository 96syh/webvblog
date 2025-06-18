"use client"

import { Play, Music } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { LazyImage } from "./LazyImage"

export function MusicWidget() {
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 transition-colors duration-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4">
        {/* Album Art */}
        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0 relative">
          {imageLoading && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Music size={20} className="text-gray-400 dark:text-gray-500 animate-pulse" />
            </div>
          )}
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-600">
              <Music size={20} className="text-gray-400 dark:text-gray-500" />
            </div>
          ) : (
            <motion.img
              src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/23/f5/92/23f592cc-2090-06fc-9ca2-0cc6c95900e4/190295418267.jpg/200x200bb.jpg"
              alt="Post Malone (feat. RANI) Album Cover"
              className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true)
                setImageLoading(false)
              }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>

        {/* Song Info */}
        <div className="flex-1 min-w-0">
          <motion.p
            className="text-[#999a9b] dark:text-gray-400 text-xs lg:text-sm mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Now Playing
          </motion.p>
          <motion.h3
            className="font-semibold text-[#494b4f] dark:text-white mb-1 text-sm lg:text-base truncate"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Post Malone (feat. RANI)
          </motion.h3>
          <motion.p
            className="text-[#999a9b] dark:text-gray-400 text-xs lg:text-sm truncate"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Sam Feldt
          </motion.p>
        </div>

        {/* Play Button */}
        <motion.a
          href="https://music.apple.com/in/album/post-malone-feat-rani/1462755250?i=1462755255"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#494b4f] hover:bg-[#9a6a48] dark:bg-[#6b7280] dark:hover:bg-[#9a6a48] text-white px-3 lg:px-4 py-2 rounded-lg transition-all duration-200 flex-shrink-0 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Play size={14} fill="currentColor" className="group-hover:scale-110 transition-transform duration-200" />
          <span className="text-xs lg:text-sm hidden sm:inline">Play</span>
        </motion.a>
      </div>
    </motion.section>
  )
}
