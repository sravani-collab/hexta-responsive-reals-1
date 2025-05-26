import Image from 'next/image'
import { getCareerImageUrl } from '@/lib/s3'
// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import { Button } from '@heroui/react'
import { Mail} from 'lucide-react'

// Benefits data
const benefits = [
  {
    title: 'Health & Wellness',
    items: [
      'Comprehensive health, dental, and vision insurance',
      'Mental health coverage',
      'Ergonomic home office stipend'
    ]
  },
  {
    title: 'Work-Life Balance',
    items: [
      'Flexible work schedules',
      'Generous paid time off',
      'Paid parental leave',
      'Company holidays and floating personal days'
    ]
  },
  {
    title: 'Financial Benefits',
    items: [
      'Competitive salary',
      'Performance bonuses',
      'Stock options',
      'Professional development budget'
    ]
  },
  {
    title: 'Growth & Development',
    items: [
      'Continued education opportunities',
      'Conference attendance',
      'Certification reimbursement',
      'Mentorship programs',
      'Career advancement paths'
    ]
  }
]

export default function CareersPage() {
  return (
    <>
      {/* Careers Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-black dark:text-white mb-4">Join Our Team</h1>
          <p className="text-lg text-black dark:text-black dark:text-white max-w-2xl">
            Discover exciting career opportunities at HextaSphere and be part of a team that&apos;s building innovative technology solutions.
          </p>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">Why Join HextaSphere?</h2>
              <p className="text-dark mb-4">
                At HextaSphere, we&apos;re more than just a technology company—we&apos;re a community of innovators, problem-solvers, and lifelong learners working together to create meaningful impact through technology.
              </p>
              <p className="text-dark mb-8">
                We believe that great ideas can come from anywhere, and we foster an environment where creativity and collaboration thrive. Our team members enjoy challenging work, growth opportunities, and a supportive culture that values work-life balance.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-light rounded-md p-4">
                  <h3 className="font-semibold text-primary mb-2">Innovation</h3>
                  <p className="text-sm text-dark">Work on cutting-edge technologies and challenging projects</p>
                </div>
                <div className="bg-light rounded-md p-4">
                  <h3 className="font-semibold text-primary mb-2">Growth</h3>
                  <p className="text-sm text-dark">Continuous learning and career development opportunities</p>
                </div>
                <div className="bg-light rounded-md p-4">
                  <h3 className="font-semibold text-primary mb-2">Impact</h3>
                  <p className="text-sm text-dark">Create solutions that solve real-world problems</p>
                </div>
                <div className="bg-light rounded-md p-4">
                  <h3 className="font-semibold text-primary mb-2">Balance</h3>
                  <p className="text-sm text-dark">Flexible work arrangements that respect your life outside work</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-md overflow-hidden">
                <Image
                  src={getCareerImageUrl("hexta-office.webp")}
                  alt="HextaSphere team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-md overflow-hidden">
                <Image
                  src={getCareerImageUrl("big-3-hexta.webp")}
                  alt="HextaSphere workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-md overflow-hidden">
                <Image
                  src={getCareerImageUrl("hexta-x-mm.jpg")}
                  alt="HextaSphere team event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-md overflow-hidden">
                <Image
                  src={getCareerImageUrl("divya-hexta.jpg")}
                  alt="HextaSphere office environment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Employee Benefits</h2>
            <p className="text-dark max-w-3xl mx-auto">
              We offer a comprehensive benefits package designed to support your health, wellbeing, and professional growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-dark text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team Section (Replaces Open Positions) */}
      <section className="py-16" id="openings">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Join Our Team</h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <p className="text-dark text-lg leading-relaxed mb-6">
              At <strong>Hextasphere</strong>, we strive to build innovative and scalable solutions. Right now, we are <strong>not hiring</strong> for any positions.
            </p>
            <p className="text-dark text-lg leading-relaxed mb-6">
              However, if you believe you have exceptional skills and can bring value to our team, we would love to hear from you.
            </p>
            <p className="text-dark text-lg leading-relaxed mb-6">
              Feel free to send your resume and portfolio to{' '}
              <a href="mailto:career@hextasphere.com" className="text-primary font-semibold hover:underline">
                career@hextasphere.com
              </a>
            </p>
            
            <div className="bg-light rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-dark mb-4">Please note:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-dark">Our team carefully reviews each application.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-dark">If your skills align with our vision, we&apos;ll reach out to discuss potential opportunities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-dark">We review applications on a rolling basis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-dark">If there&apos;s a fit, we&apos;ll get in touch!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Process Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Our Application Process</h2>
            <p className="text-dark max-w-3xl mx-auto">
              We&apos;ve designed a straightforward application process to help us get to know you better and ensure mutual fit.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline Line */}
              <div className="absolute left-8 top-0 h-full w-0.5 bg-primary hidden md:block"></div>
              
              {/* Process Steps */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary text-black dark:text-white rounded-full flex items-center justify-center font-bold text-sm z-10">1</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary mb-2">Application Review</h3>
                    <p className="text-dark">
                      Our recruiting team carefully reviews your application, resume, and any additional materials you submit to assess your qualifications for the role.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary text-black dark:text-white rounded-full flex items-center justify-center font-bold text-sm z-10">2</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary mb-2">Initial Interview</h3>
                    <p className="text-dark">
                      If your background aligns with our needs, we&apos;ll schedule an initial interview to discuss your experience, skills, and interest in the role and HextaSphere.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary text-black dark:text-white rounded-full flex items-center justify-center font-bold text-sm z-10">3</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary mb-2">Technical Assessment</h3>
                    <p className="text-dark">
                      Depending on the role, you may be asked to complete a technical assessment, coding challenge, case study, or design exercise to demonstrate your skills.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary text-black dark:text-white rounded-full flex items-center justify-center font-bold text-sm z-10">4</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary mb-2">Team Interviews</h3>
                    <p className="text-dark">
                      Meet with potential team members and stakeholders to dive deeper into your expertise and assess team fit. This may include a panel interview or multiple one-on-one sessions.
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary text-black dark:text-white rounded-full flex items-center justify-center font-bold text-sm z-10">5</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary mb-2">Final Decision & Offer</h3>
                    <p className="text-dark">
                      After completing all interviews, we&apos;ll make a decision and extend an offer to the selected candidate, including details about compensation, benefits, and start date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-black dark:text-white text-lg max-w-2xl mx-auto mb-8">
            Even though we&apos;re not currently hiring, we&apos;re always interested in connecting with talented individuals who could be a great fit for our team.
          </p>
          <Button variant="bordered" as="a" href="mailto:career@hextasphere.com"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
        >
            Send Your Resume <Mail className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}