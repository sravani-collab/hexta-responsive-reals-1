"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode
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
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  )
}

interface TechBadgeProps {
  name: string
  delay?: number
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
        {name}
      </Badge>
    </motion.div>
  )
}

const ProcessEngineeringPage: React.FC = () => {
  
 
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Z Pattern Start (Top Left) */}
 <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                 Engineering Services
                </Badge>
                 <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
Process Engineering
                 </h2>
             <p className="text-lg text-muted-foreground leading-relaxed">
 At Hextasphere Technologies, we design energy efficient, safe, and cost-effective process systems using advanced simulation and engineering methodologies. Our process engineering solutions focus on sustainability, operational reliability, and regulatory compliance-ensuring that every design is practical, scalable, and optimized for long-term performance.
          <div className="max-w-4xl mx-auto leading-relaxed text-justify space-y-6"></div>

                </p>
                 <p className="text-lg font-semibold">
          <span className="font-bold">Key Focus:</span> Regulatory coordination, clearance facilitation, and compliance management.
        </p>
              </div>
              </motion.div>
               <div className="relative h-68  rounded-lg overflow-hidden">
                <img src="/images/services/engg/process.png"alt="corporate"className="object-cover"/></div>
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

export default ProcessEngineeringPage
