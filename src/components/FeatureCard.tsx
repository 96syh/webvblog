"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
  href: string
  icon: string
}

export function FeatureCard({ title, description, href, icon }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="block"
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-[#bd8c66] dark:hover:border-[#bd8c66] transition-all duration-200 hover:shadow-sm group h-full"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="text-2xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {icon}
          </motion.div>
          <div className="flex-1">
            <h3 className="font-semibold text-[#494b4f] dark:text-white group-hover:text-[#9a6a48] dark:group-hover:text-[#bd8c66] transition-colors mb-1">
              {title}
            </h3>
            <p className="text-[#999a9b] dark:text-gray-400 text-sm">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
