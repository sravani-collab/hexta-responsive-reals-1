"use client";
import Image from "next/image";
import React from "react";

export default function EnvironmentalSolutions() {
  return (
    <div className="min-h-screen bg-white text-[#0B1E3F][#FFFF] p-8 md:p-20">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center ">
        Environmental Sloutions
      </h1>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center ">
        For all Industries
      </h1>

      <div className="flex flex-col items-center mb-10">
        <Image
          src="/images/faro-3d-scanning.jpg" 
          alt="Environmental Sloutions for all Industries"
          width={900}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 leading-relaxed text-justify">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center">Environmental Impact Assessments (EIA)</h2>
          <p>
          Through evaluation of environmental risks associated with new and ongoing projects
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center">Waste Management</h2>
          <p>
          Development and implementation of safe, complaint systems for hazardous and non-hazardous waste handling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center">Pollution Control</h2>
          <p>
          Deployment of advanced technologies to reduce and monitor emissions affecting air, water, and soil quality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center">Spill Response & Remediation</h2>
          <p>
          Rapid containment and recovery solutions for ol spills and environmental incidents.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center">Sustainable Operations</h2>
          <p>
          Adoption of renewable energy practices and carbon-reduction strategies to support long-term sustainability goals.
          </p>
        </section>
      </div>
    </div>
  );
}