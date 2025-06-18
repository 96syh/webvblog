import { Sidebar } from "@/components/Sidebar"
import { MainContent } from "@/components/MainContent"
import { PageTransition } from "@/components/PageTransition"
import { InteractiveBackground } from "@/components/InteractiveBackground"

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 transition-colors duration-200 relative">
        <InteractiveBackground />
        {/* Desktop Layout */}
        <div className="hidden lg:flex relative z-10">
          <Sidebar />
          <MainContent />
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden relative z-10">
          <MainContent isMobile={true} />
        </div>
      </div>
    </PageTransition>
  )
}
