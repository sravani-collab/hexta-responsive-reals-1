import Link from 'next/link'
import { Button } from "@heroui/react"
// import Image from 'next/image'
import ProjectCard from '@/components/projects/ProjectCard'
import { getProjectImageUrl } from '@/lib/s3'

// Featured projects from the Figma file
const projects = [
  {
    id: "erp",
    title: "Custom ERP Solutions",
    description:
      "Transforming business operations with tailored ERP solutions for enhanced efficiency and productivity.",
    category: "Enterprise Solutions",
    image: getProjectImageUrl("ERP-updated.svg"),
    tags: ["ERP", "Business Solutions", "Automation", "Integration"],
    date: "2024-01-15",
    readTime: "5 min",
    featured: true,
    slug: "/projects/blog/custom-erp-solutions",
  },
  {
    id: "edms",
    title: "HextaValut EDMS",
    description:
      "Transforming document management with HextaValut EDMS for enhanced collaboration and efficiency.",
    category: "Enterprise Solutions",
    image: getProjectImageUrl("dashboard.svg"),
    tags: ["EDMS", "Document Management", "Collaboration", "Efficiency"],
    date: "2024-01-15",
    readTime: "10 min",
    featured: true,
    slug: "/projects/blog/hextavault-edms",
  }
];


export default function ProjectsSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-dark mb-2">OUR PROJECTS</h2>
          <div className="h-px w-28 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="bordered" as={Link} href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
          >
            View All
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}