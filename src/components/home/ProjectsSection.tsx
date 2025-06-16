import Link from 'next/link'
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
    image: getProjectImageUrl("custom-erp.jpg"),
    tags: ["ERP", "Business Solutions", "Automation", "Integration"],
    date: "2024-01-15",
    readTime: "8 min",
    featured: true,
    slug: "/projects/blog/custom-erp-solutions",
  },
  {
    id: "edms",
    title: "HextaValut EDMS",
    description:
      "Transforming document management with HextaValut EDMS for enhanced collaboration and efficiency.",
    category: "Enterprise Solutions",
    image: getProjectImageUrl("hextavault-edms.png"),
    tags: ["EDMS", "Document Management", "Collaboration", "Efficiency"],
    date: "2024-01-15",
    readTime: "8 min",
    featured: true,
    slug: "/projects/blog/hextavalut-edms",
  },
  {
    id: "ocr",
    title: "OCR Tag Extraction",
    description:
      "Leveraging OCR technology to automate tag extraction from documents, enhancing data processing efficiency.",
    category: "Document Solutions",
    image: getProjectImageUrl("ocr-tag-extraction.png"),
    tags: ["OCR", "Document Management", "Automation", "Data Processing"],
    date: "2024-01-15",
    readTime: "8 min",
    featured: true,
    slug: "/projects/blog/ocr-tag-extraction",
  }
];


export default function ProjectsSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-dark mb-2">OUR PROJECTS</h2>
          <div className="h-px w-28 bg-dark mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
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