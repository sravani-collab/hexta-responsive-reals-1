"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import  StackIcon  from 'tech-stack-icons'
import { Smartphone, Globe, Zap, Shield, Code,  CheckCircle, ArrowRight } from 'lucide-react'
import { Skeleton } from '@heroui/react'

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

const techStack = [
  {
    id: 1,
    logo: <StackIcon name="react" className="w-8 h-8" />,
    name: "React"
  },
  {
    id: 2,
    logo: <StackIcon name="nextjs2" className="w-8 h-8" />,
    name: "Next.js"
  },
  {
    id: 4,
    logo: <StackIcon name="flutter" className="w-8 h-8" />,
    name: "Flutter"
  },
  {
    id: 5,
    logo: <StackIcon name="typescript" className="w-8 h-8" />,
    name: "TypeScript"
  },
  {
    id: 6,
    logo: <StackIcon name="nodejs" className="w-8 h-8" />,
    name: "Node.js"
  },
  {
    id: 7,
    logo: <StackIcon name="electron" className="w-8 h-8" />,
    name: "Electron"
  },
  {
    id: 8,
    logo: <StackIcon name="docker" className="w-8 h-8" />,
    name: "Docker"
  },
  {
    id: 9,
    logo: <StackIcon name="nuxtjs" className="w-8 h-8" />,
    name: "NuxtJS"
  },
  {
    id: 10,
    logo: <StackIcon name="aws" className="w-8 h-8"  />,
    name: "AWS"
  }
]

const WebMobileDevPage: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Applications",
      description: "Responsive, fast-loading web applications built with modern frameworks like React, Next.js, and Vue.js for optimal user experience."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps using React Native, Flutter, and Swift for iOS and Android platforms."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimized",
      description: "Lightning-fast applications with optimized code, efficient caching strategies, and modern performance techniques."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security implementation with encryption, secure authentication, and compliance with industry standards."
    }
  ]

  const technologies = [
    "React", "Next.js", "React Native", "Flutter", "TypeScript", "Node.js",
    "Python", "Swift", "Kotlin", "AWS", "Docker", "GraphQL"
  ]

  const benefits = [
    "Cross-platform compatibility",
    "Scalable architecture",
    "Real-time functionality",
    "Cloud integration",
    "API development",
    "Database optimization"
  ]

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
                  Web & Mobile Development
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Cutting-Edge
                  <span className="text-primary block">Applications</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  We build modern web and mobile applications using the latest frameworks 
                  for unmatched performance and reliability.
                </p>
              </div>
              <div className="flex  flex-col sm:flex-row gap-4">
                <Button size="lg" className="group text-white">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Portfolio
                </Button>
              </div>
            </motion.div>

            {/* Hero Image - Z Pattern (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-card border border-border rounded-lg p-4 shadow-lg"
                  >
                    <Globe className="w-8 h-8 text-primary mb-2" />
                    <Skeleton className="h-2 m bg-primary/20 rounded mb-1" />
                    <Skeleton className="h-2 bg-primary/10 rounded w-2/3" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="bg-card border border-border rounded-lg p-4 shadow-lg mt-8"
                  >
                    <Smartphone className="w-8 h-8 text-primary mb-2" />
                    <Skeleton className="h-2 m bg-primary/20 rounded mb-1" />
                    <Skeleton className="h-2 bg-primary/10 rounded w-2/3" />
                  </motion.div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-primary rounded-full p-3"
                >
                  <Code className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Z Pattern Middle (Left) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Modern Technology Stack
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We leverage the most advanced frameworks and tools to deliver 
                  applications that are fast, secure, and built to scale.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <TechBadge key={tech} name={tech} delay={index * 0.1} />
                ))}
              </div>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack Visual - Z Pattern Middle (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 bg-white rounded">{tech.logo}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Z Pattern End (Bottom Right) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features Visual - Z Pattern (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
                ></motion.div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-full p-16 relative">
                  <div className="grid grid-cols-2 gap-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-card border border-border rounded-lg p-6 shadow-lg"
                    >
                      <Zap className="w-8 h-8 mb-2" />
                      <div className="text-sm font-medium text-foreground">Performance</div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-card border border-border rounded-lg p-6 shadow-lg"
                    >
                      <Shield className="w-8 h-8 text-primary mb-2" />
                      <div className="text-sm font-medium text-foreground">Security</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Why Choose Our Development Services?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our expert team delivers applications that combine cutting-edge 
                  technology with proven reliability and exceptional user experience.
                </p>
              </div>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    delay={index * 0.1}
                  />
                ))}
              </div>
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
              Ready to Build Your Next Application?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Let&apos;s discuss your project and create something amazing together. 
              Our team is ready to turn your ideas into reality.
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

export default WebMobileDevPage
