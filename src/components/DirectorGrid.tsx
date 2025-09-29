"use client";

import { TeamMember } from "@/types/team";
import { Skeleton } from "@heroui/react";
import BlurImage from "./blur-image";
import React, { useEffect, useState } from "react";
import { DirectorTeam } from "@/lib/team";
import { motion } from "framer-motion";

function DirectorGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const [hovered, setHovered] = useState<unknown>(null);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderTeamMember = (
    member: TeamMember,
    index: number,
    isLarge: boolean = false
  ) => (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered(null)}
      whileHover={{ scale: 1.05 }}
      key={index}
      className={`bg-white dark:bg-[#333333] rounded-lg overflow-hidden shadow-sm flex flex-col items-center p-6 ${hovered !== null && hovered !== index && "blur-sm scale-[0.98]"}`}
    >
      {isLoading ? (
        <Skeleton
          className={`rounded-full ${isLarge ? "w-48 h-48" : "w-32 h-32"} mb-4`}
        />
      ) : (
        <div
          className={`relative ${
            isLarge ? "w-48 h-48" : "w-32 h-32"
          } mb-4 rounded-full overflow-hidden`}
        >
          <BlurImage
            src={member.image}
            alt={member.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
      )}

      <div className="text-center w-full">
        {isLoading ? (
          <>
            <Skeleton
              className={`h-${isLarge ? "6" : "5"} w-3/4 mx-auto mb-2`}
            />
            <Skeleton className="h-4 w-1/2 mx-auto mb-3" />
            <Skeleton className="h-4 w-full mx-auto mb-1" />
            <Skeleton className="h-4 w-full mx-auto mb-1" />
            <Skeleton className="h-4 w-4/5 mx-auto" />
          </>
        ) : (
          <>
            <h3
              className={`${
                isLarge ? "text-xl" : "text-lg"
              } font-semibold text-dark`}
            >
              {member.name}
            </h3>
            <p className="text-primary font-medium mb-3">{member.role}</p>
            {/* <p className={`hidden md:block text-dark ${isLarge ? "text-base" : "text-sm"}`}>
              {member.bio}
            </p> */}
          </>
        )}
      </div>
    </motion.div>
  );
  return (
    <div className="w-fit mx-auto grid grid-cols-4 max-w-7xl gap-8 md:gap-12 lg:gap-16">
      {DirectorTeam.map((member, index) =>
        renderTeamMember(member, index, false)
      )}
    </div>
  );
}

export default DirectorGrid;
