import { Sidebar } from "@/components/Sidebar"
import { getBlogPosts } from "@/lib/notion"
import { BlogContentWithSearch } from "@/components/BlogContentWithSearch"
import { PageTransition } from "@/components/PageTransition"
import { Suspense } from "react"
import { BlogSkeleton } from "@/components/BlogSkeleton"

export const metadata = {
  title: "博客",
  description: "关于开发、设计、生产力以及帮助我们创造更好体验的工具的思考。",
}

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 transition-colors duration-200">
        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <Sidebar />
          <main className="flex-1 lg:ml-64 p-8">
            <Suspense fallback={<BlogSkeleton />}>
              <BlogContent />
            </Suspense>
          </main>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden p-4">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-[#494b4f] dark:text-white">Rain</h1>
          </header>
          <Suspense fallback={<BlogSkeleton />}>
            <BlogContent />
          </Suspense>
        </div>
      </div>
    </PageTransition>
  )
}

async function BlogContent() {
  const posts = await getBlogPosts()
  return <BlogContentWithSearch posts={posts} />
}
