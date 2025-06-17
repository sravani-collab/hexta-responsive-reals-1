import { Case } from '@/components/cases-with-infinite-slide'
import Link from 'next/link'
import { Button } from '@heroui/react'
import { Phone } from 'lucide-react'
import { TypingAnimation } from '@/components/magicui/typing-animation'

export const metadata = {
  title: 'Our Clients | HextaSphere',
  description: 'Discover the companies and organizations that trust HextaSphere for their IT and engineering needs.'
}



// Case studies data
// const caseStudies = [
//   {
//     client: 'GAIL',
//     industry: 'Energy & Oil',
//     title: 'Digital Transformation of Document Management',
//     description: 'How we helped GAIL modernize their document management system, improving efficiency and compliance.',
//     image: getClientImageUrl('gail.jpeg'),
//     slug: 'gail-document-management'
//   },
//   {
//     client: 'GlobalBank',
//     industry: 'Financial Services',
//     title: 'Blockchain-Based Transaction System',
//     description: 'Implementing a secure, transparent blockchain solution for cross-border transactions.',
//     image: getClientImageUrl('client-temp.png'),
//     slug: 'globalbank-blockchain'
//   },
//   {
//     client: 'HealthInnovate',
//     industry: 'Healthcare & Pharmaceuticals',
//     title: 'AI-Powered Patient Monitoring',
//     description: 'Developing an intelligent system to track patient vital signs and predict potential health issues.',
//     image: getClientImageUrl('client-temp.png'),
//     slug: 'healthinnovate-ai-monitoring'
//   },
// ]

export default function ClientsPage() {
  return (
    <>
      {/* Clients Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Our Clients</h1>
          <p className="text-lg text-black dark:text-white max-w-2xl">
            We partner with organizations across industries to deliver innovative technology solutions that drive business growth.
          </p>
        </div>
      </section>
      
      {/* Client Showcase - Using CSS for theme switching */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark   dark:text-white mb-4">Trusted by Leading Organizations</h2>
            <p className="text-dark dark:text-gray-300 max-w-3xl mx-auto">
              At HextaSphere, we take pride in the partnerships we&apos;ve built with clients across a diverse range of industries.
            </p>
            <Case />
          </div>
          
          
        </div>
      </section>
      
      {/* Case Studies Section */}
      {/* <section className="py-16 bg-light dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark   dark:text-white mb-4">Case Studies</h2>
            <p className="text-dark dark:text-gray-300 max-w-3xl mx-auto">
              Explore how our solutions have helped clients overcome challenges and achieve their business objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-primary font-semibold">{study.client}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{study.industry}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark   dark:text-white mb-3">{study.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{study.description}</p>
                  <a 
                    href={`/case-studies/${study.slug}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    Read Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="/case-studies"
              className="inline-block px-6 py-3 bg-primary text-black dark:text-white rounded font-semibold hover:bg-opacity-90 transition"
            >
              View All Case Studies
            </a>
          </div>
        </div>
      </section>
       */}
       
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-dark dark:text-gray-300 max-w-7xl mx-auto text-xl pt-8">
              <TypingAnimation>Your story could be next. Check back soon for stories from our clients.</TypingAnimation>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnership CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-black dark:text-white text-lg max-w-2xl mx-auto mb-8">
            Join our growing list of satisfied clients and discover how HextaSphere can help you achieve your technology goals.
          </p>
          <Button variant="bordered" as={Link} href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
            >
              Get in Touch <Phone className="w-5 h-5 ml-2" />
            </Button>
        </div>
      </section>
    </>
  )
}