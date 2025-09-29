"use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Link from "next/link";
// import { useRouter } from "next/navigation";

// Service content components

export default function ITServicesPage() {
    // const router = useRouter();
    const DevSecOpsContent = () => {
      return (
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">
            DevSecOps Services
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Implementing DevSecOps practices to integrate security into the software development lifecycle, ensuring robust and secure applications.
          </p>
          <Link href="/services/devsecops" className=" hover:text-primary-200 font-medium">
            Learn More →
          </Link>
        </div>
      );
    };
    
    const ITStaffingContent = () => {
      return (
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">
            IT Staffing
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            IT Staffing services to help businesses find and retain top IT talent, ensuring they have the right skills to meet their needs.
          </p>
          <Link href="/services/it-staffing" className=" hover:text-primary-200 font-medium">
            Learn More →
          </Link>
        </div>
      );
    };
    
    // const ITConsultingContent = () => {
    //   return (
    //     <div>
    //       <p className="font-bold md:text-4xl text-xl text-white">
    //         IT Consulting
    //       </p>
    //       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    //         IT Consulting services to help businesses optimize their IT infrastructure and processes, ensuring seamless operations and improved efficiency.
    //       </p>
    //       <Link href="/services/it-consulting" className="hover:text-primary-200 font-medium z-40">
    //         Learn More →
    //       </Link>
    //     </div>
    //   );
    // };
    
    const WebMobileContent = () => {
      return (
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">
            Web & Mobile Development
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Responsive web applications and native mobile apps for iOS and Android, built with modern frameworks and best practices.
          </p>
          <Link href="/services/web-and-mobile-app-development" className=" hover:text-primary-200 font-medium">
            Learn More →
          </Link>
        </div>
      );
    };
    
    const cards = [
      {
        id: 1,
        content: <WebMobileContent />,
        className: "md:col-span-2 bg-pink-600",
        href: "/services/it/web-and-mobile-app-development"
      },
      {
        id: 3,
        content: <ITStaffingContent />,
        className: "col-span-2 bg-green-900",
        href: "/services/it/it-staffing"
      },
      {
        id: 4,
        content: <DevSecOpsContent />,
        className: "md:col-span-2",
        href: "/services/it/devsecops"
      },
    ];
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            IT Services
          </h1>
          <p className="text-lg text-black dark:text-white max-w-2xl">
            Comprehensive IT solutions tailored to your business needs, from staffing and consulting to development and security.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card) => (
              <WobbleCard
                key={card.id}
                containerClassName={card.className}
                className=""
                href={card.href}
              >
                {card.content}
              </WobbleCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-secondary-50 dark:bg-secondary rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-dark mb-4">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-dark mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your IT requirements and learn how our services can help you achieve your technology goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}