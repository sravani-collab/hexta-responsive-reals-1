import Image from 'next/image';
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
import { getServiceImageUrl } from '@/lib/s3';

// Service data - updated to use SVG images instead of Lottie
const services = [
  {
    id: 'it-services',
    title: 'IT Services',
    description: 'Comprehensive IT solutions tailored to your business needs.',
    svgImage: getServiceImageUrl('it-serv-inside-min.jpg'),
    icon: 'it',
    slug: 'it',
    offerings: [
      {
        title: 'IT Staffing',
        description: 'IT Staffing services to help businesses find and retain top IT talent, ensuring they have the right skills to meet their needs.',
        icon: 'chart',
        slug: 'it-staffing'
      },
      {
        title: 'IT Consulting',
        description: 'IT Consulting services to help businesses optimize their IT infrastructure and processes, ensuring seamless operations and improved efficiency.',
        icon: 'code',
        slug: 'it-consulting'
      },
      {
        title: 'Web & Mobile App Development',
        description: 'Responsive web applications and native mobile apps for iOS and Android, built with modern frameworks and best practices.',
        icon: 'smartphone',
        slug: 'web-and-mobile-app-development'
      },
      {
        title: 'DevSecOps',
        description: 'Implementing DevSecOps practices to integrate security into the software development lifecycle, ensuring robust and secure applications.',
        icon: 'cloud',
        slug: 'devsecops'
      },
    ]
  },
  {
    id: 'engineering-services',
    title: 'Engineering Services',
    description: 'Innovative engineering solutions for complex challenges.',
        svgImage: getServiceImageUrl('engg-serv-inside-min.jpg'),

    icon: 'engineering',
    slug: 'engineering',
    offerings: [
      {
        title: "3D Engineering Solutions",
        description: "Advanced 3D modelling of complex pipeline systems, analysis of steel structures, ensuring accuracy and efficiency in design and installation.",
        icon: "microchip",
        slug: "3d-engineering-solutions"
      },
      {
        title: 'Process Simulation, Sustainability and Quantitative Risk Analysis',
        description: 'Designing energy efficient systems that meet regulatory standards, and providing QRA services for LPG terminals and refineries.',
        icon: 'merge',
        slug: "process-simulation-sustainability-and-quantitative-risk-analysis"
      },
      {
        title: 'Environmental Solutions for Oil and Gas',
        description: 'Innovative technologies and strategies to minimize environmental impact and enhance sustainability in oil and gas operations.',
        icon: 'shield',
        slug: "environmental-solutions-for-oil-and-gas"
      },
      {
        title: 'Reverse Engineering through FARO Scanning',
        description: 'High-precision 3D scanning services for accurate measurements and modeling in construction, manufacturing, and engineering projects.',
        icon: 'microchip',
        slug: "reverse-engineering-through-faro-scanning"
      },
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
      <section className="py-4 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.id} className="rounded-lg overflow-hidden shadow-md text-primary flex flex-col" id={service.slug}>
                {/* Title above the image */}
                <div className="p-6 bg-primary">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark text-center">{service.title}</h2>
                </div>
                <div className="px-6">
                  <SvgImageContainer 
                    imagePath={service.svgImage} 
                    title={service.title} 
                  />
                </div>
                <div className="px-6 pb-6 flex-1">
                  <p className="text-dark mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-semibold text-dark mb-4">What We Offer</h3>
                  <div className="space-y-6">
                    {service.offerings.map((offering, index) => (
                      <Link href={offering.slug ? `/services/${offering.slug}` : '#'} key={index}>
                        <div className="flex gap-4 py-4">
                          <div className="w-10 h-10 flex-shrink-0 bg-purple-500 rounded-full flex items-center justify-center">
                            {getIcon(offering.icon, "w-5 h-5 text-white")}
                          </div>
                          <div>
                            <h4 className="font-semibold text-dark">{offering.title}</h4>
                            <p className="text-sm text-gray-600">{offering.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="bg-secondary-50 dark:bg-secondary rounded-lg p-8 text-center">
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

// Define types for the SvgImageContainer props
interface SvgImageContainerProps {
  imagePath: string;
  title: string;
}

const SvgImageContainer = ({ imagePath, title, isFirst = false }: SvgImageContainerProps & { isFirst?: boolean }) => {
  return (
    <div className="w-full py-6">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
          priority={isFirst}
          quality={80}
        />
      </div>
    </div>
  );
};