"use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Link from "next/link";

// Service content components
const MaximizingContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Maximizing Potential
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We specialize in 3D engineering and design services in the oil and gas sector.
      </p>
      <Link href="/services/engineering/maximizing-potential" className="hover:text-primary-200 font-medium">
        Learn More →
      </Link>
    </div>
  );
};

const InnovativeContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Innovative 3D Engineering Solutions
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This document details a company's 3D engineering and design services tailored for various industries, specifically focusing on the oil and gas sector.
      </p>
      <Link href="/services/engineering/3d-engineering-solutions" className="hover:text-primary-200 font-medium">
        Learn More →
      </Link>
    </div>
  );
};

const ReverseContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Reverse Engineering
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Specialized engineering services that leverage FARO 3D scanning technology. These services focus on capturing precise digital data of physical objects and environments for industrial and architectural use cases.
      </p>
      <Link href="/services/engineering/reverse-engineering" className="hover:text-primary-200 font-medium">
        Learn More →
      </Link>
    </div>
  );
};

const ProcessContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Process Engineering
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We design energy-efficient, safe, and cost-effective process systems using advanced simulation and engineering methodologies.
      </p>
      <Link href="/services/engineering/process-engineering" className="hover:text-primary-200 font-medium">
        Learn More →
      </Link>
    </div>
  );
};

const EnvironmentalContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Environmental Solutions For All Industries
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A comprehensive approach focused on mitigating ecological harm and promoting sustainability through systemic changes in technology, policy, and operations.
      </p>
      <Link href="/services/engineering/environmental-solutions" className="hover:text-primary-200 font-medium">
        Learn More →
      </Link>
    </div>
  );
};

const CorporateContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Corporate Liasioning
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Facilitate understanding, bridge gaps, and ensure smooth coordination to resolve conflicts or achieve shared objectives.
      </p>
      <Link href="/services/engineering/corporate-liasioning" className="hover:text-primary-200 font-medium">
        Learn More →
      </Link>
    </div>
  );
};

const LegalContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Legal Services
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We provide expert legal support across project lifecycles, offering contract management, compliance advisory, and risk mitigation to safeguard your business interests.
      </p>
      <Link href="/services/engineering/legal-services" className="hover:text-primary-200 font-medium">
        Learn More →
      </Link>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <MaximizingContent />,
    className: "md:col-span-1",
    href: "/services/engineering/maximizing-potential"
  },
  {
    id: 2,
    content: <InnovativeContent />,
    className: "md:col-span-2",
    href: "/services/engineering/innovative-3d-engineering"
  },
  {
    id: 3,
    content: <ReverseContent />,
    className: "md:col-span-2",
    href: "/services/engineering/reverse-engineering"
  },
  {
    id: 4,
    content: <ProcessContent />,
    className: "md:col-span-1",
    href: "/services/engineering/process-engineering"
  },
  {
    id: 5,
    content: <EnvironmentalContent />,
    className: "md:col-span-1",
    href: "/services/engineering/environmental-solutions"
  },
  {
    id: 6,
    content: <LegalContent />,
    className: "md:col-span-1",
    href: "/services/engineering/legal-services"
  },
  {
    id: 7,
    content: <CorporateContent />,
    className: "md:col-span-1",
    href: "/services/engineering/corporate-liasoning"
  }
];

export default function EngineeringServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Engineering Services
          </h1>
          <p className="text-lg text-black dark:text-white max-w-2xl">
            Innovative engineering solutions for complex challenges, from pre-bid to construction support with cutting-edge technologies.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div key={card.id} className={card.className}>
                <Link href={card.href || "#"} className="block h-full">
                  <WobbleCard
                    containerClassName="h-full"
                    className="cursor-pointer"
                  >
                    {card.content}
                  </WobbleCard>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-secondary-50 dark:bg-secondary rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-dark mb-4">
              Ready to Start Your Engineering Project?
            </h3>
            <p className="text-dark mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your engineering requirements and learn how our expertise can support your project success.
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