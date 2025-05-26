import Link from 'next/link'
import BlurImage from '@/components/blur-image'
import { getProjectImageUrl } from '@/lib/s3'
import { ExpandableCards } from '@/components/projects/ExpandableCards'
import { Button } from '@heroui/react'
import { MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Our Projects | HextaSphere',
  description: 'Explore our innovative IT and Engineering solutions across various industries.'
}

// Sample project data - this could come from a CMS or database
const projects = [
  {
    id: 'smart-city-infrastructure',
    title: 'Smart City Infrastructure',
    description: 'Transforming urban landscapes with intelligent IoT solutions and sustainable infrastructure design.',
    category: 'Smart Infrastructure',
    image: getProjectImageUrl('smart-city-hero.jpg'),
    tags: ['IoT', 'Smart City', 'Infrastructure', 'Sustainability'],
    date: '2024-01-15',
    readTime: '8 min',
    featured: true,
    blogUrl: '/projects/blog/smart-city-infrastructure'
  },
  {
    id: 'oil-gas-automation',
    title: 'Oil & Gas Automation',
    description: 'Revolutionizing offshore operations with advanced SCADA systems and predictive maintenance solutions.',
    category: 'Industrial Automation',
    image: getProjectImageUrl('oil-gas-hero.jpg'),
    tags: ['SCADA', 'Oil & Gas', 'Automation', 'Offshore'],
    date: '2023-11-20',
    readTime: '10 min',
    featured: true,
    blogUrl: '/projects/blog/oil-gas-automation'
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain Supply Chain',
    description: 'Implementing transparent and secure supply chain management using blockchain technology.',
    category: 'Blockchain Technology',
    image: getProjectImageUrl('blockchain-supply.jpg'),
    tags: ['Blockchain', 'Supply Chain', 'Logistics', 'Security'],
    date: '2023-09-10',
    readTime: '6 min',
    featured: false,
    blogUrl: '/projects/blockchain-supply-chain'
  },
  {
    id: 'renewable-energy-grid',
    title: 'Renewable Energy Grid',
    description: 'Designing and implementing smart grid solutions for renewable energy management.',
    category: 'Energy Solutions',
    image: getProjectImageUrl('renewable-energy.jpg'),
    tags: ['Energy', 'Smart Grid', 'Renewable', 'Sustainability'],
    date: '2023-07-25',
    readTime: '7 min',
    featured: false,
    blogUrl: '/projects/renewable-energy-grid'
  },
  {
    id: 'ai-manufacturing',
    title: 'AI-Powered Manufacturing',
    description: 'Transforming production lines with artificial intelligence and machine learning optimization.',
    category: 'AI & Manufacturing',
    image: getProjectImageUrl('ai-manufacturing.jpg'),
    tags: ['AI', 'Manufacturing', 'Machine Learning', 'Optimization'],
    date: '2023-06-12',
    readTime: '9 min',
    featured: false,
    blogUrl: '/projects/ai-manufacturing'
  },
  {
    id: 'cybersecurity-framework',
    title: 'Enterprise Cybersecurity Framework',
    description: 'Comprehensive cybersecurity solutions protecting critical infrastructure and sensitive data.',
    category: 'Cybersecurity',
    image: getProjectImageUrl('cybersecurity.jpg'),
    tags: ['Cybersecurity', 'Enterprise', 'Data Protection', 'Infrastructure'],
    date: '2023-05-08',
    readTime: '5 min',
    featured: false,
    blogUrl: '/projects/cybersecurity-framework'
  }
]

const categories = [
  'All Projects',
  'Smart Infrastructure',
  'Industrial Automation',
  'Blockchain Technology',
  'Energy Solutions',
  'AI & Manufacturing',
  'Cybersecurity'
]

export default function ProjectsPage() {
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Discover how we&apos;re transforming industries with innovative IT and Engineering solutions. 
            Each project represents our commitment to excellence and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Highlighting our most impactful and innovative solutions across different industries.
            </p>
          </div>

          <ExpandableCards />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">More Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our complete portfolio of innovative solutions and successful implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <article key={project.id} className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <BlurImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <time>{new Date(project.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}</time>
                    <span className="mx-2">•</span>
                    <span>{project.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium text-gray-400 bg-gray-50 dark:bg-gray-600 rounded-full">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  {project.blogUrl && (
                    <Link 
                      href={project.blogUrl}
                      className="inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can bring your vision to life with our innovative solutions and expert team.
          </p>
          <Button variant="bordered" as={Link} href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
            >
              Start a Conversation <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
        </div>
      </section>
    </div>
  )
}