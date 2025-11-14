"use client";
import Image from "next/image";
import React from "react";

export default function MaximizingPotential() {
  return (
    <div className="min-h-screen bg-white text-[#0B1E3F][#FFFF] p-8 md:p-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center uppercase">
        Environmental Sloutions for all Industries
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
          <h2 className="text-xl font-bold uppercase mb-2">As-Built Modeling</h2>
          <p>
            Development of highly accurate 3D models of existing facilities for
            design validation, maintenance planning, and operational visualization.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase mb-2">Construction Quality Control</h2>
          <p>
            Verification of construction work against design specifications to
            identify deviations early and ensure compliance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase mb-2">Facility Management</h2>
          <p>
            Comprehensive digital asset documentation to support layout optimization,
            inventory planning, and safety improvements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase mb-2">Maintenance & Repair Support</h2>
          <p>
            Precise dimensional data to enable efficient component replacement,
            retrofitting, and repair with reduced downtime and cost.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase mb-2">Safety & Training Simulations</h2>
          <p>
            Creation of immersive digital environments for operator training and remote
            walk-throughs to enhance safety preparedness.
          </p>
        </section>
      </div>
    </div>
  );
}