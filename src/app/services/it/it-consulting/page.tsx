
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import ServiceLayout from "@/components/service-layout";
import { getProjectImageUrl } from "@/lib/s3";

export const metadata:Metadata = {
  title: `IT Consulting | ${siteConfig.name}`,
};

const ITConsultingPage = () => {
  return (
    <ServiceLayout
      title="IT Consulting"
      description="Expert guidance to optimize your IT infrastructure, streamline operations, and drive business growth."
      image={getProjectImageUrl("ERP-updated.svg")}
      category="IT Services"
      tags={['IT Strategy', 'Digital Transformation', 'Cloud Advisory', 'Cybersecurity Consulting']}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Strategic IT Planning</h2>
          <p>
            Our IT consulting services begin with a comprehensive analysis of your current IT landscape. We work with you to develop a strategic roadmap that aligns your technology with your business goals. This includes assessing your existing infrastructure, identifying areas for improvement, and recommending solutions that will enhance efficiency and support future growth.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Digital Transformation</h2>
          <p>
            In today&apos;s fast-paced digital world, staying competitive requires continuous innovation. We help you navigate the complexities of digital transformation, from modernizing legacy systems to adopting new technologies like AI and IoT. Our experts guide you through every step of the process, ensuring a smooth and successful transition.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Cloud Advisory</h2>
          <p>
            The cloud offers immense opportunities for scalability, flexibility, and cost savings. Our cloud advisory services help you determine the right cloud strategy for your business, whether it&apos;s public, private, or hybrid. We assist with cloud migration, management, and optimization to ensure you get the most out of your cloud investment.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Cybersecurity Consulting</h2>
          <p>
            Protecting your digital assets is more critical than ever. Our cybersecurity consultants provide a holistic approach to security, from risk assessments and vulnerability testing to implementing robust security measures. We help you build a resilient security posture that defends against evolving threats and ensures compliance with industry regulations.
          </p>
        </section>
      </div>
    </ServiceLayout>
  );
};

export default ITConsultingPage;
