"use client"

import { Mail } from "lucide-react"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
    setEmail('')

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 transition-colors duration-200" id="newsletter" aria-labelledby="newsletter-heading">
      <h2 id="newsletter-heading" className="text-lg lg:text-xl font-semibold text-[#494b4f] dark:text-white mb-4">Subscribe</h2>
      <p className="text-[#999a9b] dark:text-gray-400 mb-6 text-sm lg:text-base">
        Get notified when I post something new. Unsubscribe at any time.
      </p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-green-800 font-medium">✨ Thanks for subscribing!</p>
          <p className="text-green-600 text-sm mt-1">You'll hear from me soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#999a9b] dark:text-gray-400" size={18} aria-hidden="true" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              aria-label="Email address for newsletter subscription"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#bd8c66] dark:focus:border-[#bd8c66] transition-colors bg-white dark:bg-gray-800 text-[#494b4f] dark:text-white"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !email}
            className="bg-[#494b4f] hover:bg-[#9a6a48] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-colors font-medium whitespace-nowrap flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
      )}
    </section>
  )
}
