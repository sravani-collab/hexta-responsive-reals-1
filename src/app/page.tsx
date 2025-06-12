// import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import Workflow from '@/components/home/Workflow'
import WorkProcess from '@/components/home/WorkProcess'
import ProjectsSection from '@/components/home/ProjectsSection'
// import ClientsSection from '@/components/home/ClientsSection'
import { HeroSectionOne } from '@/components/home/HeroTest'
import DroneSection from '@/components/home/DroneComponentTest'
import AnimatedLogoCloud from '@/components/home/AnimatedIconCloud'

export default function Home() {
  return (
    <>
    <HeroSectionOne />
      {/* <HeroSection /> */}
      <Workflow />
      <WorkProcess />
      <DroneSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <ClientsSection /> */}
      <AnimatedLogoCloud />
    </>
  )
}