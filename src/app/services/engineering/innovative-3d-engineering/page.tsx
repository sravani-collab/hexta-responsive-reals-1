"use client";
import Image from "next/image";
import React from "react";

export default function Innovative3DEngineering() {
  return (
    <div className="min-h-screen bg-white text-[#0B1E3F][#FFFF] p-8 md:p-20">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center ">
        Innovative 3D Engineering Solutions 
      </h1>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center ">
         For the Oil and Gas Industry
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

      <div className="max-w-4xl mx-auto space-y-8 leading-relaxed text-justify">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center">Steel Structure Design</h2>
          <p>
          Advanced analysis and 3d modeling of steel structures to ensure structural integrity, safety, and full compliance with industry and regulatory standards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center">Piping Engineering</h2>
          <p>
          End-to-end 3d design and modeling of complex piping networks, ensuring precision, constructability, and optimized installation workflows.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center">Mechanical Vessel Engineering</h2>
          <p>
          Specialized design and performance analysis of mechanical vessels using advanced simulation tools to ensure surability, efficiency, and operational reliability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center">Instrumentation Design</h2>
          <p>
          Accuarte 3d modeling and layout planning for instrumentation systems, supporting enhanced control, monitoring accuracy, and streamlined plant operations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center">Electrical System Engineering</h2>
          <p>
           Comprehensive 3d modeling and coordination of electrical systems for seamless integration, operational continuity, and safety assurance.
          </p>
        </section>
      </div>
    </div>
  );
}