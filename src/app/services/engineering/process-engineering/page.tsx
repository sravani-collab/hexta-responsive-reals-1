"use client"

import Image from "next/image"
import React from "react"

export default function LegalServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B1E3F][#FFFF] px-6 md:px-16 py-20">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 uppercase tracking-wide">
       PROCESS ENGINEERING 
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <Image
          src="/images/legal-services.jpg" 
          alt="PROCESS ENGINEERING"
          width={900}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto leading-relaxed text-justify space-y-6">
        <p className="text-lg">
         AT HEXTASPHERE TECHNOLOGIES, WE DESIGN ENERGY-EFFICIENT, SAFE, AND COST-EFFECTIVE PROCESS SYSTEMS USING ADVANCED SIMULATION AND ENGINEERING METHODOLOGIES. OUR PROCESS ENGINEERING SOLUTIONS FOCUS ON SUSTAINABILITY, OPERATIONAL RELIABILITY, AND REGULATORY COMPLIANCE-ENSURING THAT EVERY DESIGN IS PRACTICAL, SCALABLE, AND OPTIMIZED FOR LONG-TERM PERFORMANCE.
WE ALSO SPECIALIZE IN QUANTITATIVE RISK ANALYSIS (QRA) FOR HIGH-RISK INDUSTRIAL ENVIRONMENTS, INCLUDING LPG TERMINALS AND REFINERY OPERATIONS. OUR QRA SERVICES INVOLVE IDENTIFYING POTENTIAL HAZARDS, EVALUATING RISK LEVELS, AND IMPLEMENTING TARGETED MITIGATION STRATEGIES TO SAFEGUARD ASSETS, PERSONNEL, AND THE ENVIRONMENT. BY INTEGRATING ANALYTICAL RIGOR WITH INDUSTRY BEST PRACTICES, WE ENABLE ORGANIZATIONS TO OPERATE WITH ENHANCED SAFETY ASSURANCE AND REDUCED RISK EXPOSURE.
        </p>
      </div>
    </div>
  )
}