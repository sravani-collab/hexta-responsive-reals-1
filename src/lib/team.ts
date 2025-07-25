import { getTeamImageUrl } from "@/lib/s3";

// IT Division team members
export const itDivisionTeam = [
  {
    name: "Ravi Kiran Marka",
    role: "Director - IT",
    division: "Engineering Division",
    image: getTeamImageUrl("ravi-kiran.jpeg"),
    bio: "Ravi Kiran Marka: Director - IT: Mr. Ravikiran Marka, a seasoned Sales and business expert brings experience from previous roles at Intelliswift Software, Inc., AT&T, Discover Financial Services and Paradigm Infotech. Ravikiran Marka holds a MBA degree in 2009 - 2010 from the University of Sunderland. Having worked for more than 11 years in the US, he is now the Director - IT for Hextasphere and will manage the IT Business, Training & Development and recruiting verticals of Hextasphere.",
  },
];

// Engineering Division team members
export const engineeringDivisionTeam = [
  {
    name: "Srinivasa Rao Vavilapalli",
    role: "Managing Director",
    division: "Engineering Division",
    image: getTeamImageUrl("srinivasa-rao-vavilapalli.jpeg"),
    bio: "Srinivasa Rao, DME, BE Graduate in Mechanical Engineering having 30 years work experience in Middle East & West Africa with GREEN & BROWN field projects in Oil & Gas (upstream) Onshore, Offshore facilities and Marine. Ensures engineering issues related to piping design, fabrication, installation (includes cable & Piping), testing, pre-mechanical completion, and pre-commissioning are resolved consistent with the project technical and schedule requirements.",
  },

  {
    name: "Dr. Kantubukta Srinivasa Rao",
    role: "Director",
    division: "Engineering Division",
    image: getTeamImageUrl("srinivasa-rao-kantubukta.jpeg"),
    bio: "Dr. Kantubukta Srinivasa Rao, a Chemical Engineering graduate from Andhra University and a certified Energy Auditor accredited by the Bureau of Energy Efficiency, New Delhi, brings over 24 years of experience—including 12 years internationally—in process engineering, feasibility studies, HAZOP/HAZID analysis, detailed engineering, plant operations, and technology development. He has played key roles in the pre-commissioning, commissioning, and start-up of major petrochemical and oil & gas projects, working with renowned organizations such as IPCL, ONGC Petro Additions Ltd. (OPaL), Petro Rabigh, Borough, and Turkmen Bashi Refinery. His multidisciplinary expertise and leadership have been instrumental in the execution of both greenfield and brownfield projects across India and abroad.",
  },
];

// Legacy export for backward compatibility
export const teamMembers = [...itDivisionTeam, ...engineeringDivisionTeam];
