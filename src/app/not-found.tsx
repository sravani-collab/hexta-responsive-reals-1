import Link from 'next/link'
import { Button } from '@heroui/react'
import { ArrowLeft, Home, Search } from 'lucide-react'
import { headers } from 'next/headers'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
    title: `Page Not Found | ${siteConfig.name}`,
    description: 'The page you are looking for does not exist.',
    openGraph: {
        title: `Page Not Found | ${siteConfig.name}`,
        description: 'The page you are looking for does not exist.',
    },
}

// Dynamically import client components
const AuroraBackground = dynamic(() => import('@/components/AuroraBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset" />
})

const AnimatedContent = dynamic(() => import('@/components/AnimatedContent'), {
  ssr: false,
  loading: () => (
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-500 via-purple-600 to-indigo-600 
            dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
            404
          </h1>
        </div>
        <div className="mb-12 h-16 flex items-center justify-center">
          <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300 font-light">
            Every great website has a few hidden pages.
          </p>
        </div>
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for what you're looking for..."
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm outline-none font-medium"
              disabled
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary dark:bg-primary-light text-white rounded-full">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Page Not Found
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
            The adventure ends here, but your journey with us doesn&apos;t have to.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href="/">
            <Button 
              size="lg" 
              className="min-w-[200px] group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Take Me Home
            </Button>
          </Link>
          
          <Button
            size="lg"
            className="min-w-[200px] group border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>
        <div className="border-t border-gray-200/20 dark:border-gray-700/20">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Don&apos;t worry, even the best explorers get lost sometimes. Let&apos;s get you back on track.
          </p>
        </div>
      </div>
    </div>
  )
})

// Server function to detect theme preference
async function getThemePreference() {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  
  // You could read from cookies for theme preference
  // For now, we'll default to dark theme on server
  return {
    isDarkTheme: true, // Default fallback
    userAgent
  }
}

export default async function NotFound() {
  const { isDarkTheme } = await getThemePreference()
  
  // Choose colors based on detected theme
  const auroraColorStops = isDarkTheme 
    ? ["#217496", "#3A29FF", "#6B46C1"] // Dark theme colors
    : ["#0066cc", "#1e40af", "#7c3aed"] // Light theme colors

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Aurora Background */}
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />
      }>
        <AuroraBackground 
          colorStops={auroraColorStops}
          isDarkTheme={isDarkTheme}
        />
      </Suspense>

      {/* Main Content with All Animations */}
      <Suspense fallback={
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r 
                from-blue-500 via-purple-600 to-indigo-600 
                dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
                404
              </h1>
            </div>
            <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300 font-light">
              Every great website has a few hidden pages.
            </p>
          </div>
        </div>
      }>
        <AnimatedContent />
      </Suspense>
    </div>
  )
}