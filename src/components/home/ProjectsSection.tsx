import Link from 'next/link'
// import Image from 'next/image'
import ProjectCard from '@/components/projects/ProjectCard'
import { getProjectImageUrl } from '@/lib/s3'

// Featured projects from the Figma file
const featuredProjects = [
  {
    id: 'dms-oil-gas',
    title: 'DMS tailored for Oil & Gas industry',
    description: 'Developed a custom e-commerce platform with advanced features like real-time inventory management and secure payment processing.',
    image: getProjectImageUrl('dms.png'),
    slug: 'dms-oil-gas'
  },
  {
    id: 'blockchain',
    title: 'Blockchain - Smart Contracts',
    description: 'Implemented a blockchain-based voting system for secure and transparent elections, ensuring vote integrity and voter privacy.',
    image: getProjectImageUrl('blockchain.png'),
    slug: 'blockchain-smart-contracts'
  },
  {
    id: 'health-app',
    title: 'Health & Fitness App',
    description: 'Created a cross-platform mobile app for tracking workouts, nutrition, and health metrics, integrating with wearable devices.',
    image: getProjectImageUrl('health.png'),
    slug: 'health-fitness-app'
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Dashboard',
    description: 'Built a responsive web application for visualizing complex financial data in real-time with customizable reports and analytics.',
    image: getProjectImageUrl('financial-dashboard.png'),
    slug: 'financial-dashboard'
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-dark mb-2">OUR PROJECTS</h2>
          <div className="h-px w-28 bg-dark mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center px-6 py-2 bg-primary text-black dark:text-white rounded text-sm"
          >
            View All
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}