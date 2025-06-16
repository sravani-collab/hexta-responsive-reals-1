import Image from 'next/image'
import Link from 'next/link'
import { getServiceImageUrl } from '@/lib/s3'

const services = [
  {
    id: 'it-services',
    title: 'IT Services',
    description: 'Comprehensive IT solutions tailored to your business needs, including software development, cloud services, and cybersecurity.',
    image: getServiceImageUrl('it-serv.png'),
    link: '/services'
  },
  {
    id: 'engineering-services',
    title: 'Engineering Services',
    description: 'Innovative engineering solutions for complex challenges, including system design, automation, and industrial IoT applications.',
    image: getServiceImageUrl('engg-serv.png'),
    link: '/services'
  }
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-dark mb-2">OUR SERVICES</h2>
          <div className="h-px w-28 bg-dark mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="p-6">
                <div className="bg-primary text-black dark:text-white py-2 px-4 inline-block mb-4 rounded">
                  <h3 className="font-semibold">{service.title}</h3>
                </div>
                <p className="text-dark mb-4">{service.description}</p>
                <Link 
                  href={service.link}
                  className="text-primary font-semibold hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/services"
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