import ITServicesPage from "./ITServicesPage"
import { siteConfig } from "@/config/site"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `IT Services | ${siteConfig.name}`,
  description: "Comprehensive IT solutions including staffing, consulting, web & mobile development, and DevSecOps services.",
};

function page() {
  return (
    <ITServicesPage />
  )
}

export default page