"use client";
import Image from "next/image";
import React from "react";

export default function Innovative3DEngineering() {
  return (
    <div className="min-h-screen bg-white text-[#0B1E3F] p-8 md:p-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center uppercase">
        Innovative 3D Engineering Solutions for the Oil and Gas Industry
      </h1>

      <div className="flex flex-col items-center mb-10">
        <Image
          src="/images/faro-3d-scanning.jpg" // place your image in /public/images/
          alt="Innovative 3D Engineering Solutions for the Oil and Gas Industry"
          width={900}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 leading-relaxed text-justify">
        <section>
          <h2 className="text-xl font-bold uppercase mb-2">STEEL STRUCTURE DESIGN</h2>
          <p>
           ADVANCED ANALYSIS AND 3D MODELING OF STEEL STRUCTURE INTEGRITY, SAFETY, AND FULL COMPLIANCE WITH INDUSTRY AN
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase mb-2">PIPING ENGINEERING</h2>
          <p>
           END-TO-END 3D DESIGN AND MODELING OF COMPLEX PIPING PRECISION, CONSTRUCTABILITY, AND OPTIMIZED INSTALLATΙΟΙ
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase mb-2">MECHANICAL VESSEL ENGINEERINGt</h2>
          <p>
           .SPECIALIZED DESIGN AND PERFORMANCE ANALYSIS OF MECHA SIMULATION TOOLS TO ENSURE DURABILITY, EFFICIENCY, AND
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase mb-2">INSTRUMENTATION DESIGN</h2>
          <p>
           ACCURATE 3D MODELING AND LAYOUT PLANNING FOR INSTRUMENTATION SYSTEMS, SUPPORTING ENHANCED CONTROL, MONITORING ACCURACY, AND STREAMLINED PLANT OPERATIONS.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase mb-2">ELECTRICAL SYSTEMS ENGINEERING</h2>
          <p>
           COMPREHENSIVE 3D MODELING AND COORDINATION OF ELECTRICAL SYSTEMS FOR SEAMLESS INTEGRATION, OPERATIONAL CONTINUITY, AND SAFETY ASSURANCE.
          </p>
        </section>
      </div>
    </div>
  );
}