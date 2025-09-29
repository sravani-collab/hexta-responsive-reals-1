// import { WobbleCard } from "@/components/ui/wobble-card";
// import { LayoutGrid } from "@/components/ui/layout-grid";
import { Phone } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import { getServiceImageUrl } from "@/lib/s3";
import { Button } from "@heroui/react";
import { FocusCards } from "@/components/ui/focus-cards";

// Service data - updated to use SVG images instead of Lottie
// const services = [
//   {
//     id: 'it-services',
//     title: 'IT Services',
//     description: 'Comprehensive IT solutions tailored to your business needs.',
//     svgImage: getServiceImageUrl('it-serv-inside-min.jpg'),
//     icon: 'it',
//     slug: 'it',
//     offerings: [
//       {
//         title: 'IT Staffing',
//         description: 'IT Staffing services to help businesses find and retain top IT talent, ensuring they have the right skills to meet their needs.',
//         icon: 'chart',
//         slug: 'it-staffing'
//       },
//       {
//         title: 'IT Consulting',
//         description: 'IT Consulting services to help businesses optimize their IT infrastructure and processes, ensuring seamless operations and improved efficiency.',
//         icon: 'code',
//         slug: 'it-consulting'
//       },
//       {
//         title: 'Web & Mobile App Development',
//         description: 'Responsive web applications and native mobile apps for iOS and Android, built with modern frameworks and best practices.',
//         icon: 'smartphone',
//         slug: 'web-and-mobile-app-development'
//       },
//       {
//         title: 'DevSecOps',
//         description: 'Implementing DevSecOps practices to integrate security into the software development lifecycle, ensuring robust and secure applications.',
//         icon: 'cloud',
//         slug: 'devsecops'
//       },
//     ]
//   },
//   {
//     id: 'engineering-services',
//     title: 'Engineering Services',
//     description: 'Innovative engineering solutions for complex challenges.',
//         svgImage: getServiceImageUrl('engg-serv-inside-min.jpg'),

//     icon: 'engineering',
//     slug: 'engineering',
//     offerings: [
//       {
//         title: "Pre-Bid Engineering",
//         description: "Our Pre-bid services include comprehensive coverage of all client requirements",
//         icon: "microchip",
//         slug: "pre-bid-engineering"
//       },
//       {
//         title: 'FEED, Detailed & Design Engineering',
//         description: 'We adopt combination of in-built automation tools and checklists for Pre-bid engineering activities including documents, drawings and intelligent models in S3D, E3D, PDMS, CalWORKs, and AutoCAD Plant3D.',
//         icon: 'merge',
//         slug: "feed-detailed-design-engineering"
//       },
//       {
//         title: 'As-Built Engineering',
//         description: 'Innovative technologies and strategies to minimize environmental impact and enhance sustainability in oil and gas operations.',
//         icon: 'shield',
//         slug: "as-built-engineering"
//       },
//       {
//         title: 'Fabrication and Construction Support Engineering Services',
//         description: 'High-precision 3D scanning services for accurate measurements and modeling in construction, manufacturing, and engineering projects.',
//         icon: 'microchip',
//         slug: "fabrication-and-construction-support"
//       },
//     ]
//   }
// ];

// // Helper function to get the correct icon component
// const getIcon = (iconName: string, className: string = "w-5 h-5") => {
//   switch (iconName) {
//     case 'code': return <Code className={className} />;
//     case 'smartphone': return <Smartphone className={className} />;
//     case 'cloud': return <Cloud className={className} />;
//     case 'shield': return <Shield className={className} />;
//     case 'chart': return <BarChart4 className={className} />;
//     case 'users': return <Users className={className} />;
//     case 'cpu': return <Cpu className={className} />;
//     case 'cog': return <Cog className={className} />;
//     case 'microchip': return <Microchip className={className} />;
//     case 'merge': return <GitMerge className={className} />;
//     case 'tool': return <Wrench className={className} />;
//     case 'gauge': return <Gauge className={className} />;
//     default: return <Cog className={className} />;
//   }
// };


const cards = [
  {
    title: "IT Services",
    src: getServiceImageUrl("it-serv-inside-min.jpg"),
    href: "/services/it"
  },
  {
    title: "Engineering Services",
    src: getServiceImageUrl("engg-serv-inside-min.jpg"),
    href: "/services/engineering"
  }
]

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
            <div className="py-20 w-full">
      {/* <LayoutGrid cards={cards} /> */}
      <FocusCards cards={cards} />
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