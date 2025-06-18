import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import ErrorBoundary from "@/components/ErrorBoundary";
import { AnalyticsProvider } from "@/contexts/AnalyticsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rain - 大学教授 & 算法工程师",
    template: "%s | Rain"
  },
  description: "来自辽宁沈阳的网页开发者。我喜欢创造直观的界面，通过周到的细节实现干净、平衡的设计和令人愉悦的用户体验。",
  keywords: ["web developer", "designer", "portfolio", "Next.js", "React", "Notion", "productivity"],
  authors: [{ name: "Craig Hart" }],
  creator: "Craig Hart",
  metadataBase: new URL("https://same-650p1yaddd3-latest.netlify.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://same-650p1yaddd3-latest.netlify.app",
    title: "Craig Hart - Web Developer & Designer",
    description: "Web developer based in Hebei, China. Creating intuitive interfaces with clean, balanced designs.",
    siteName: "Craig Hart Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Craig Hart Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Craig Hart - Web Developer & Designer",
    description: "Web developer based in Hebei, China. Creating intuitive interfaces with clean, balanced designs.",
    images: ["/og-image.png"],
    creator: "@craighart"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#494b4f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Craig Hart",
              jobTitle: "Web Developer",
              url: "https://same-650p1yaddd3-latest.netlify.app",
              sameAs: [
                "https://github.com/craig",
                "https://twitter.com/craighart"
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hebei",
                addressCountry: "China"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#fafafa] dark:bg-gray-900 transition-colors duration-200`}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange={false}
          >
            <AnalyticsProvider>
              {children}
              <Analytics />
            </AnalyticsProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
