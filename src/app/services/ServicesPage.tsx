'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  BarChart4, 
  Users, 
  Cpu, 
  Cog, 
  Microchip, 
  GitMerge, 
  Wrench, 
  Gauge,
  Phone 
} from 'lucide-react';
import { Button } from '@heroui/react';
import Link from 'next/link';

// Import Lottie dynamically to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Service data - in a real app, this would likely come from a CMS or API
const services = [
  {
    id: 'it-services',
    title: 'IT Services',
    description: 'Comprehensive IT solutions tailored to your business needs.',
    lottieAnimation: '/lottie/web-designer.json', // Replace with your actual Lottie JSON file path
    icon: 'it',
    slug: 'it',
    offerings: [
      {
        title: 'Custom Software Development',
        description: 'Bespoke software solutions tailored to your specific business requirements, from concept to deployment and maintenance.',
        icon: 'code'
      },
      {
        title: 'Web & Mobile App Development',
        description: 'Responsive web applications and native mobile apps for iOS and Android, built with modern frameworks and best practices.',
        icon: 'smartphone'
      },
      {
        title: 'Cloud Services',
        description: 'Strategic cloud migration, architecture design, and managed services across AWS, Azure, and Google Cloud platforms.',
        icon: 'cloud'
      },
      {
        title: 'Cybersecurity',
        description: 'Comprehensive security assessment, implementation, and monitoring to protect your critical business assets and data.',
        icon: 'shield'
      },
      {
        title: 'Data Analytics & AI',
        description: 'Advanced data analysis, business intelligence solutions, and AI implementations to derive actionable insights from your data.',
        icon: 'chart'
      },
      {
        title: 'IT Consulting',
        description: 'Strategic technology guidance to help you make informed decisions about your IT infrastructure and digital transformation.',
        icon: 'users'
      }
    ]
  },
  {
    id: 'engineering-services',
    title: 'Engineering Services',
    description: 'Innovative engineering solutions for complex challenges.',
    lottieAnimation: '/lottie/engineering.json', // Replace with your actual Lottie JSON file path
    icon: 'engineering',
    slug: 'engineering',
    offerings: [
      {
        title: 'Industrial IoT',
        description: 'Connected systems for manufacturing, energy, and industrial environments that enable real-time monitoring and control.',
        icon: 'cpu'
      },
      {
        title: 'Automation Solutions',
        description: 'Process automation systems that improve efficiency, reduce errors, and free up human resources for higher-value tasks.',
        icon: 'cog'
      },
      {
        title: 'Embedded Systems',
        description: 'Custom embedded software and firmware development for specialized hardware and IoT devices.',
        icon: 'microchip'
      },
      {
        title: 'System Integration',
        description: 'Seamless integration of diverse systems and technologies to create unified, efficient operational environments.',
        icon: 'merge'
      },
      {
        title: 'Predictive Maintenance',
        description: 'AI-powered systems that predict equipment failures before they occur, minimizing downtime and maintenance costs.',
        icon: 'tool'
      },
      {
        title: 'Engineering Consultation',
        description: 'Expert guidance on complex engineering challenges, technology selection, and implementation strategies.',
        icon: 'gauge'
      }
    ]
  }
];

// Helper function to get the correct icon component
const getIcon = (iconName: string, className: string = "w-5 h-5") => {
  switch (iconName) {
    case 'code': return <Code className={className} />;
    case 'smartphone': return <Smartphone className={className} />;
    case 'cloud': return <Cloud className={className} />;
    case 'shield': return <Shield className={className} />;
    case 'chart': return <BarChart4 className={className} />;
    case 'users': return <Users className={className} />;
    case 'cpu': return <Cpu className={className} />;
    case 'cog': return <Cog className={className} />;
    case 'microchip': return <Microchip className={className} />;
    case 'merge': return <GitMerge className={className} />;
    case 'tool': return <Wrench className={className} />;
    case 'gauge': return <Gauge className={className} />;
    default: return <Cog className={className} />;
  }
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Our Services</h1>
          <p className="text-lg text-black dark:text-white max-w-2xl">
            HextaSphere delivers comprehensive technology solutions to address complex business challenges.
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.id} className="rounded-lg overflow-hidden shadow-md text-primary" id={service.slug}>
                <div className="relative h-64">
                  <LottieContainer 
                    animationPath={service.lottieAnimation} 
                    title={service.title} 
                  />
                </div>
                <div className="p-6">
                  <p className="text-dark mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-semibold text-dark mb-4">What We Offer</h3>
                  <div className="space-y-6">
                    {service.offerings.map((offering, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 flex-shrink-0 bg-purple-500 rounded-full flex items-center justify-center">
                          {getIcon(offering.icon, "w-5 h-5 text-black dark:text-white")}
                        </div>
                        <div>
                          <h4 className="font-semibold text-dark">{offering.title}</h4>
                          <p className="text-sm text-gray-600">{offering.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="bg-light rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-dark mb-4">Ready to Transform Your Business?</h3>
            <p className="text-dark mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and learn how our services can help you achieve your business goals.
            </p>
            <Button variant="bordered" as={Link} href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
            >
              Get in Touch <Phone className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// Define types for the LottieContainer props
interface LottieContainerProps {
  animationPath: string;
  title: string;
}

// Lottie container component with title at the top
const LottieContainer = ({ animationPath, title }: LottieContainerProps) => {
  const lottieRef = useRef(null);

  // Load animation data
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        // In a real implementation, you'd import directly or fetch the JSON
        // Here we're assuming the JSON file is available at the public path
        const response = await fetch(animationPath);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to load Lottie animation:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAnimation();
  }, [animationPath]);

  return (
    <div className="relative h-full w-full">
      {/* Title at the top with larger text */}
      <div className="absolute -top- left-0 right-0 z-10 bg-dark bg-opacity-70 p-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white text-center">{title}</h2>
      </div>
      
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : animationData ? (
        <div className="h-full w-full flex items-center justify-center pt-20"> {/* Added pt-20 for spacing below title */}
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: '85%', height: '85%', maxHeight: '160px', background: 'transparent' }}
            lottieRef={lottieRef}
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-transparent flex items-center justify-center pt-20">
          <p className="text-gray-500">Animation not available</p>
        </div>
      )}
      
      {/* Semi-transparent overlay for consistency */}
      <div className="absolute inset-0 bg-dark bg-opacity-20 z-0"></div>
    </div>
  );
};