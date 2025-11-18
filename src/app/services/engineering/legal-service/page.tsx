"use client";
import Image from "next/image";
import React from "react";

export default function LegalServices() {
  return (
    <div className="min-h-screen bg-white text-[#0B1E3F][#FFFF] p-8 md:p-20">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center ">
        Legal Services
      </h1>
     
     <div className="flex flex-col items-center mb-10">
        <Image
          src="/images/faro-3d-scanning.jpg" 
          alt="Innovative 3D Engineering Solutions for the Oil and Gas Industry"
          width={900}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto leading-relaxed text-justify space-y-6">
        <p className="text-lg">
        We provide expert legal support across project lifecycles, offering contract management, compliance advisory, and risk mitigation to safeguard your business interests.
       </p>
        <p className="text-lg font-semibold">
          <span className="font-bold">Key Focus:</span> Contract drafting, due
          diligence, and regulatory advisory.
        </p>
      </div>
    </div>
  )
}