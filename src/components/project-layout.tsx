import { ReactNode } from 'react'
import Link from 'next/link'
import BlurImage from './blur-image'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

interface ProjectLayoutProps {
  children: ReactNode
  title: string
  description?: string
  date?: string
  category?: string
  tags?: string[]
  author?: string
  image?: string
  readTime?: string
}

export default function ProjectLayout({
  children,
  title,
  description,
  date,
  category,
  tags = [],
  author,
  image,
  readTime
}: ProjectLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <Link 
            href="/projects" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
          
          {/* Hero Content */}
          <div className="max-w-4xl">
            {category && (
              <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
                {category}
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              {title}
            </h1>
            
            {description && (
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                {description}
              </p>
            )}
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              {date && (
                <span>{new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              )}
              {author && <span>by {author}</span>}
              {readTime && <span>{readTime} read</span>}
            </div>
            
            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      {image && (
        <section className="relative">
          <div className="container mx-auto px-4 -mt-16">
            <div className="relative h-96 md:h-[60vh] rounded-lg overflow-hidden">
              <BlurImage
                src={image}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>
      )}
      
      {/* Content */}
      <main className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {children}
            </article>
          </div>
        </div>
      </main>
      
      {/* Navigation Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              View All Projects
            </Link>
            
            <div className="mt-4 md:mt-0">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Discuss This Project
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}