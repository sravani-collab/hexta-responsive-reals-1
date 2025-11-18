"use client"

import Image from "next/image"
import React from "react"
export default function MaximizingPotential() {
  return (
    <div className="min-h-screen bg-white text-[#0B1E3F][#FFFF] px-8 md:px-16 py-20">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center ">
     Maximising Potential in Oil & Gas , Refineries
      </h1>
 <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center "> Petro Chemicals, Chemical & Fertilizers, Power Plant</h1>
      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <Image
          src="/images/legal-services.jpg" 
          alt="OIL&GAS"
          width={900}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto leading-relaxed text-justify space-y-6">
       <p className="text-bold-foreground mb-4 leading-relaxed">
        Hextasphere technologies delivers innovative, reliable and sustainable engineering solutions across the industries value chain-supporting basic design, feasibility, project implementation, & operations. Our focus is on enhancing operational performance, safety, and efficiency through advanced technology and somain expertise.

        We specialize in 3d engineering and design services tailored specifically to the complex demands of diferent industries. Our multi-disciplinary capabilities ensure accurate, efficient , and streamlined project execution-reducing risks, optimizing workflows, and improving project outcomes.
        </p>

      
      </div>
    </div>
  )
}