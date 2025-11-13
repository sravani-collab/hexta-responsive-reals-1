"use client"

import Image from "next/image"
import React from "react"

export default function LegalServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B1E3F] px-6 md:px-16 py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 uppercase tracking-wide">
     MAXIMIZING POTENTIAL IN OIL AND GAS, REFINERIES, PETRO CHEMICALS, CHEMICAL & FERTILIZERS, POWER PLANT
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <Image
          src="/images/legal-services.jpg" // <-- Place your uploaded image here
          alt="Legal Services"
          width={900}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto leading-relaxed text-justify space-y-6">
        <p className="text-lg">
         HEXTASPHERE TECHNOLOGIES DELIVERS INNOVATIVE, RELIABLE, AND SUSTAINABLE ENGINEERING SOLUTIONS ACROSS THE INDUSTRIES VALUE CHAIN-SUPPORTING BASIC DESIGN, FEASIBILTY, PROJECT IMPLEMENTATION, & OPERATIONS. OUR FOCUS IS ON ENHANCING OPERATIONAL PERFORMANCE, SAFETY, AND EFFICIENCY THROUGH ADVANCED TECHNOLOGY AND DOMAIN EXPERTISE.
WE SPECIALIZE IN 3D ENGINEERING AND DESIGN SERVICES TAILORED SPECIFICALLY TO THE COMPLEX DEMANDS OF DIFFERENT INDUSTRIES. OUR MULTI-DISCIPLINARY CAPABILITIES ENSURE ACCURATE, EFFICIENT, AND STREAMLINED PROJECT EXECUTION-REDUCING RISKS, OPTIMIZING WORKFLOWS, AND IMPROVING PROJECT OUTCOMES.
        </p>

      
      </div>
    </div>
  )
}