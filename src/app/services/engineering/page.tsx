import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
// import { siteConfig } from "@/config/site";
import Link from "next/link";

// Service content components
const PreBidContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Pre-Bid Engineering
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our Pre-bid services include comprehensive coverage of all client requirements with enhanced cost estimation support.
      </p>
    </div>
  );
};

const FEEDContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        FEED & Detailed Engineering
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We adopt combination of in-built automation tools and checklists for engineering activities including documents, drawings and intelligent models.
      </p>
    </div>
  );
};

const AsBuiltContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        As-Built Engineering
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Comprehensive As-Built Engineering services including site surveys, laser scanning, 3D modeling, and updating of drawings and documents.
      </p>
    </div>
  );
};

const FabricationContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Fabrication & Construction Support
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        High-precision engineering support services for fabrication and construction projects with advanced methodologies.
      </p>
    </div>
  );
};

const ProcessSimulationContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Process Simulation, Sustainability and Quality Risk Analysis
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our Process Simulation services help in optimizing operations and enhancing productivity through advanced modeling techniques.
      </p>
    </div>
  );
};
const OG3DContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        3D Solutions for Oil & Gas Industry
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        High-precision engineering support services for 3D modeling and visualization in the oil and gas sector.
      </p>
    </div>
  );
};
const ReverseContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Reverse Engineering through FARO Scanners
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        High-precision engineering support services for reverse engineering using FARO scanners.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <PreBidContent />,
    className: "md:col-span-1",
  },
  {
    id: 2,
    content: <FEEDContent />,
    className: "md:col-span-2",
  },
  {
    id: 3,
    content: <AsBuiltContent />,
    className: "md:col-span-2",
  },
  {
    id: 4,
    content: <FabricationContent />,
    className: "md:col-span-1",
  },
  {
    id: 5, content: <ProcessSimulationContent />,
    className: "md:col-span-1",
  },
  { id: 6, content: <ReverseContent />,
    className: "md:col-span-1",
  },
  { id: 7, content: <OG3DContent />,
    className: "md:col-span-1",
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
              <WobbleCard
                key={card.id}
                containerClassName={card.className}
                className=""
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