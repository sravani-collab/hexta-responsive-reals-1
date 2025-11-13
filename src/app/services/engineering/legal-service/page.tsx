"use client"

import Image from "next/image"
import React from "react"

export default function LegalServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B1E3F] px-6 md:px-16 py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 uppercase tracking-wide">
        Legal Services
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
          We provide expert legal support across project lifecycles, offering
          contract management, compliance advisory, and risk mitigation to
          safeguard your business interests.
        </p>

        <p className="text-lg font-semibold">
          <span className="font-bold">Key Focus:</span> Contract drafting, due
          diligence, and regulatory advisory.
        </p>
      </div>
    </div>
  )
}