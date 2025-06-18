"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { type ReactNode, useRef } from "react"

interface EnhancedButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
}

export function EnhancedButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false
}: EnhancedButtonProps) {
  const ref = useRef<HTMLElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group"

  const variantClasses = {
    primary: "bg-[#494b4f] hover:bg-[#9a6a48] text-white focus:ring-[#bd8c66] shadow-lg hover:shadow-xl",
    secondary: "bg-[#9a6a48] hover:bg-[#494b4f] text-white focus:ring-[#bd8c66] shadow-md hover:shadow-lg",
    outline: "border-2 border-[#494b4f] text-[#494b4f] hover:bg-[#494b4f] hover:text-white focus:ring-[#bd8c66] dark:border-[#bd8c66] dark:text-[#bd8c66] dark:hover:bg-[#bd8c66] dark:hover:text-gray-900"
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-6 py-3 text-lg rounded-xl"
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`

  const buttonContent = (
    <motion.div
      className={buttonClasses}
      ref={ref as any}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: disabled ? 1 : 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{
        scale: disabled ? 1 : 0.95,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      onClick={disabled ? undefined : onClick}
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        initial={false}
        whileTap={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.3, 0],
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"
        }}
      />

      {/* Content */}
      <motion.span
        className="relative z-10 flex items-center gap-2"
        style={{ transform: "translateZ(20px)" }}
      >
        {children}
      </motion.span>

      {/* Floating particles effect */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  )

  if (href && !disabled) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}
