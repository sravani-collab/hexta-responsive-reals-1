import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
// import { siteConfig } from "@/config/site";
import Link from "next/link";
// Service content components
const ProcessEngineering = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Process Engineering
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our Process Engineering services include comprehensive coverage of all client requirements with enhanced cost estimation support.
      </p>
      <Link href="/services/engineering/process-engineering" className=" font-medium md:text-xl text-xl text-white">
            Learn More →
          </Link>
    </div>
  );
};

const MaximizingPotential = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Maximizing Potential in Oil & Gas, Refineries, Petro Chemicals, Chemical & Fertilizers, Power Plant
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We adopt combination of in-built automation tools and checklists for engineering activities including documents, drawings and intelligent models.
      </p>
      <Link href="/services/engineering/maximizing-potential" className=" font-medium md:text-xl text-xl text-white">
            Learn More →
          </Link>
    </div>
  );
};

const Innovative3DEngineering = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Innovative 3d Engineering Solutions for the Oil & Gas Industry
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Comprehensive As-Built Engineering services including site surveys, laser scanning, 3D modeling, and updating of drawings and documents.
      </p>
      <Link href="/services/engineering/innovative-3d-engineering" className="font-medium md:text-xl text-xl text-white">
            Learn More →
          </Link>
    </div>
  );
};

const  ReverseEngineering= () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Reverse Engineering & Restoration using Faro 3d Scanning
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        High-precision engineering support services for fabrication and construction projects with advanced methodologies.
      </p>
      <Link href="/services/engineering/reverse-engineering" className="font-medium md:text-xl text-xl text-white">
            Learn More →
          </Link>
    </div>
  );
};

const EnvironmentalSolutions = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       Environmental Solutions for all Industries      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our Process Simulation services help in optimizing operations and enhancing productivity through advanced modeling techniques.
      </p>
      <Link href="/services/engineering/environmental-solutions" className="font-medium md:text-xl text-xl text-white">
            Learn More →
          </Link>
    </div>
  );
};
const CorporateLiasoningPage = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Corporate Liasioning      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        High-precision engineering support services for 3D modeling and visualization in the oil and gas sector.
      </p>
      <Link href="/services/engineering/corporate-liasoning" className="font-medium md:text-xl text-xl text-white">
            Learn More →
          </Link>
    </div>
  );
};
const LegalServices = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
          Legal Services      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        High-precision engineering support services for reverse engineering using FARO scanners.
      </p>
      <Link href="/services/engineering/legal-service" className="font-medium md:text-xl text-xl text-white">
            Learn More →
          </Link>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <ProcessEngineering />,
    className: "md:col-span-1",
  },
  {
    id: 2,
    content: <MaximizingPotential />,
    className: "md:col-span-2",
  },
  {
    id: 3,
    content: <Innovative3DEngineering />,
    className: "md:col-span-2",
  },
  {
    id: 4,
    content: <ReverseEngineering />,
    className: "md:col-span-1",
  },
  {
    id: 5, content: <EnvironmentalSolutions />,
    className: "md:col-span-1",
  },
  { id: 6, content: <LegalServices />,
    className: "md:col-span-1",
  },
  { id: 7, content: <CorporateLiasoningPage />,
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