import Image from 'next/image'
import { Case } from '@/components/cases-with-infinite-slide'

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
            <h2 className="text-2xl md:text-3xl font-semibold text-dark   dark:text-white mb-4">What Our Clients Say</h2>
            <p className="text-dark dark:text-gray-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it—here&apos;s what our clients have to say about working with HextaSphere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-light dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src="https://cdn.hextasphere.com/clients/client-temp.png"
                      alt="Testimonial author"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-dark   dark:text-white">Robert Johnson</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">CTO, GlobalBank</p>
                </div>
              </div>
              <p className="text-dark dark:text-gray-300 italic">
                &quot;HextaSphere delivered a blockchain solution that transformed our cross-border transaction processes. Their expertise and collaborative approach made them an invaluable partner.&quot;
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-light dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src="https://cdn.hextasphere.com/clients/client-temp.png"
                      alt="Testimonial author"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-dark   dark:text-white">Maria Rodriguez</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Director of IT, GAIL</p>
                </div>
              </div>
              <p className="text-dark dark:text-gray-300 italic">
                &quot;The document management system HextaSphere developed has significantly improved our operational efficiency and compliance posture. Their understanding of the energy sector was evident throughout the project.&quot;
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-light dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src="https://cdn.hextasphere.com/clients/client-temp.png"
                      alt="Testimonial author"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-dark   dark:text-white">David Chang</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">CEO, HealthInnovate</p>
                </div>
              </div>
              <p className="text-dark dark:text-gray-300 italic">
                &quot;Working with HextaSphere on our AI patient monitoring system was a game-changer. Their technical expertise, combined with a genuine understanding of healthcare challenges, resulted in a solution that&apos;s saving lives.&quot;
              </p>
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
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-white text-primary rounded font-semibold hover:bg-gray-100 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  )
}