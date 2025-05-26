import { getProjectImageUrl } from './s3'

export interface ProjectMetadata {
  id: string
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  date: string
  readTime: string
  featured: boolean
  blogUrl: string
  author: string
  status: 'completed' | 'ongoing' | 'upcoming'
}

export const projectsDatabase: ProjectMetadata[] = [
  {
    id: 'smart-city-infrastructure',
    title: 'Smart City Infrastructure Project',
    description: 'Transforming urban landscapes with intelligent IoT solutions and sustainable infrastructure design.',
    category: 'Smart Infrastructure',
    image: getProjectImageUrl('smart-city-hero.jpg'),
    tags: ['IoT', 'Smart City', 'Infrastructure', 'Sustainability', 'Urban Planning'],
    date: '2024-01-15',
    readTime: '8 min',
    featured: true,
    blogUrl: '/projects/blog/smart-city-infrastructure',
    author: 'HextaSphere Engineering Team',
    status: 'completed'
  },
  {
    id: 'oil-gas-automation',
    title: 'Oil & Gas Automation Project',
    description: 'Revolutionizing offshore operations with advanced SCADA systems and predictive maintenance solutions.',
    category: 'Industrial Automation',
    image: getProjectImageUrl('oil-gas-hero.jpg'),
    tags: ['SCADA', 'Oil & Gas', 'Automation', 'Offshore', 'Predictive Maintenance'],
    date: '2023-11-20',
    readTime: '10 min',
    featured: true,
    blogUrl: '/projects/blog/oil-gas-automation',
    author: 'HextaSphere Industrial Team',
    status: 'completed'
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain Supply Chain',
    description: 'Implementing transparent and secure supply chain management using blockchain technology.',
    category: 'Blockchain Technology',
    image: getProjectImageUrl('blockchain-supply.jpg'),
    tags: ['Blockchain', 'Supply Chain', 'Logistics', 'Security', 'Transparency'],
    date: '2023-09-10',
    readTime: '6 min',
    featured: false,
    blogUrl: '/projects/blog/blockchain-supply-chain',
    author: 'HextaSphere Blockchain Team',
    status: 'completed'
  },
  {
    id: 'renewable-energy-grid',
    title: 'Renewable Energy Grid',
    description: 'Designing and implementing smart grid solutions for renewable energy management.',
    category: 'Energy Solutions',
    image: getProjectImageUrl('renewable-energy.jpg'),
    tags: ['Energy', 'Smart Grid', 'Renewable', 'Sustainability', 'Power Management'],
    date: '2023-07-25',
    readTime: '7 min',
    featured: false,
    blogUrl: '/projects/blog/renewable-energy-grid',
    author: 'HextaSphere Energy Team',
    status: 'completed'
  },
  {
    id: 'ai-manufacturing',
    title: 'AI-Powered Manufacturing',
    description: 'Transforming production lines with artificial intelligence and machine learning optimization.',
    category: 'AI & Manufacturing',
    image: getProjectImageUrl('ai-manufacturing.jpg'),
    tags: ['AI', 'Manufacturing', 'Machine Learning', 'Optimization', 'Industry 4.0'],
    date: '2023-06-12',
    readTime: '9 min',
    featured: false,
    blogUrl: '/projects/blog/ai-manufacturing',
    author: 'HextaSphere AI Team',
    status: 'completed'
  },
  {
    id: 'cybersecurity-framework',
    title: 'Enterprise Cybersecurity Framework',
    description: 'Comprehensive cybersecurity solutions protecting critical infrastructure and sensitive data.',
    category: 'Cybersecurity',
    image: getProjectImageUrl('cybersecurity.jpg'),
    tags: ['Cybersecurity', 'Enterprise', 'Data Protection', 'Infrastructure', 'Security'],
    date: '2023-05-08',
    readTime: '5 min',
    featured: false,
    blogUrl: '/projects/blog/cybersecurity-framework',
    author: 'HextaSphere Security Team',
    status: 'completed'
  }
]

// Helper functions for filtering and searching projects
export const getProjectById = (id: string): ProjectMetadata | undefined => {
  return projectsDatabase.find(project => project.id === id)
}

export const getFeaturedProjects = (): ProjectMetadata[] => {
  return projectsDatabase.filter(project => project.featured)
}

export const getProjectsByCategory = (category: string): ProjectMetadata[] => {
  if (category === 'All Projects') return projectsDatabase
  return projectsDatabase.filter(project => project.category === category)
}

export const getProjectsByStatus = (status: ProjectMetadata['status']): ProjectMetadata[] => {
  return projectsDatabase.filter(project => project.status === status)
}

export const getProjectsByTag = (tag: string): ProjectMetadata[] => {
  return projectsDatabase.filter(project => 
    project.tags.some(projectTag => 
      projectTag.toLowerCase().includes(tag.toLowerCase())
    )
  )
}

export const searchProjects = (query: string): ProjectMetadata[] => {
  const lowercaseQuery = query.toLowerCase()
  return projectsDatabase.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.category.toLowerCase().includes(lowercaseQuery) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

export const getAllCategories = (): string[] => {
  const categories = new Set(projectsDatabase.map(project => project.category))
  return ['All Projects', ...Array.from(categories)]
}

export const getAllTags = (): string[] => {
  const tags = new Set(projectsDatabase.flatMap(project => project.tags))
  return Array.from(tags).sort()
}

// Sort functions
export const sortProjectsByDate = (projects: ProjectMetadata[], order: 'asc' | 'desc' = 'desc'): ProjectMetadata[] => {
  return [...projects].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return order === 'desc' ? dateB - dateA : dateA - dateB
  })
}

export const sortProjectsByTitle = (projects: ProjectMetadata[], order: 'asc' | 'desc' = 'asc'): ProjectMetadata[] => {
  return [...projects].sort((a, b) => {
    return order === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  })
}

// Pagination helper
export const paginateProjects = (
  projects: ProjectMetadata[], 
  page: number = 1, 
  limit: number = 9
): { 
  projects: ProjectMetadata[], 
  totalPages: number, 
  currentPage: number,
  hasNext: boolean,
  hasPrev: boolean 
} => {
  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  const paginatedProjects = projects.slice(startIndex, endIndex)
  const totalPages = Math.ceil(projects.length / limit)
  
  return {
    projects: paginatedProjects,
    totalPages,
    currentPage: page,
    hasNext: page < totalPages,
    hasPrev: page > 1
  }
}