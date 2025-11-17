"use client"

import Image from "next/image"
import React from "react"

export default function LegalServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B1E3F][#FFFF] px-6 md:px-16 py-20">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8  tracking-wide">
      Process Engineering
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
          At Hextasphere Technologies, we design energy efficient, safe, and cost-effective process systems using advanced simulation and engineering methodologies. Our process engineering solutions focus on sustainability, operational reliability, and regulatory compliance-ensuring that every design is practical, scalable, and optimized for long-term performance.
          <div className="max-w-4xl mx-auto leading-relaxed text-justify space-y-6"></div>
          <p className="text-lg"></p>
          We also specialize in quantitative risk analysis(QRA) for high-risk industrial environments, including LPG terminals and refinery operations. Our QRA services involve identifying potential hazards, evaluating risk levels, and implementing targeted mitigation strategies to safeguard assets, personnel, and the environment. By integrating analytical rigor with industry best practices, we enable organizations to operate with enhanced saety assurance and reduced risk exposure.
        </p>
      </div>
    </div>
  )
}