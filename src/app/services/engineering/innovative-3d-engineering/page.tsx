"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  delay?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full bg-card border-border hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-4">
          {icon && (
            <div className="w-10 h-10 flex items-center justify-center rounded bg-muted/10">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  )
}

const Innovative3DEngineeringPage: React.FC = () => {
  const features: { title: string; description: string }[] = [
    {
      title: "Steel Structure Design",
      description: "Responsive, fast-loading web applications built with modern frameworks like React, Next.js, and Vue.js for optimal user experience."
    },
    {
      title: "Piping Engineering",
      description: "Native and cross-platform mobile apps using React Native, Flutter, and Swift for iOS and Android platforms."
    },
    {
      title: " Mechanical Vessel Engineering",
      description: "Lightning-fast applications with optimized code, efficient caching strategies, and modern performance techniques."
    },
    {
      title: "Instrumentation Design",
      description: "Bank-level security implementation with encryption, secure authentication, and compliance with industry standards."
    },
    {
      title: "Electrical System Engineering",
      description: " Comprehensive 3d modeling and coordination of electrical systems for seamless integration, operational continuity, and safety assurance."
    },
    

    
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4 mt-8">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                 Engineering Services
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                 Innovative 3d Engineering </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our expert team delivers applications that combine cutting-edge 
                  technology with proven reliability and exceptional user experience.
                </p>
              </div>
              
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    delay={index * 0.1}
                  />
                ))}
              </div>
              </motion.div>
                          
               <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-2 lg:order-2 flex justify-center"
                >
                  <img
                   src="/images/services/engg/3d.png" 
                   alt="3d"
                   className="rounded-lg shadow-lg max-w-full h-auto"
                   />
                </motion.div>
          
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Start Your Engineering Project?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
                                         Contact us today to discuss your Engineering Requirements and learn how our Expertise can support your project success.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground  hover:bg-primary-foreground hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Innovative3DEngineeringPage
