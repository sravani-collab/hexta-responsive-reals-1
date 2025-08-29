import { getTeamImageUrl } from "@/lib/s3";

// IT Division team members
export const itDivisionTeam = [
  {
    name: "Ravi Kiran Marka",
    role: "Director - IT",
    division: "Engineering Division",
    image: getTeamImageUrl("ravi-kiran.png"),
    bio: "Ravikiran Marka is an accomplished IT Consulting and Business Development Executive with 14+ years of experience driving multimillion-dollar growth, Fortune 500 client acquisition, and enterprise account management. As Vice President - Consulting Services at Hextasphere Technologies, he specializes in sales strategy, IT outsourcing, and consulting solutions, delivering measurable business impact. Recognized for building high-performing teams and securing marquee clients like Google, Facebook, Visa, Cisco, and GE, Ravikiran combines strategic vision with execution excellence to lead business growth in global markets.",
  },
];

// Engineering Division team members
export const engineeringDivisionTeam = [

  {
    name: "Dr. Kantubukta Srinivasa Rao",
    role: "Director",
    division: "Engineering Division",
    image: getTeamImageUrl("srinivasa-rao-kantubukta.jpeg"),
    bio: "Dr. Kantubukta Srinivasa Rao, a Chemical Engineering graduate from Andhra University and a certified Energy Auditor accredited by the Bureau of Energy Efficiency, New Delhi, brings over 24 years of experience—including 12 years internationally—in process engineering, feasibility studies, HAZOP/HAZID analysis, detailed engineering, plant operations, and technology development. He has played key roles in the pre-commissioning, commissioning, and start-up of major petrochemical and oil & gas projects, working with renowned organizations such as IPCL, ONGC Petro Additions Ltd. (OPaL), Petro Rabigh, Borough, and Turkmen Bashi Refinery.",
  },
];

// Legacy export for backward compatibility
export const teamMembers = [...itDivisionTeam, ...engineeringDivisionTeam];
