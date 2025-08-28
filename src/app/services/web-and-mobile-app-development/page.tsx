
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import ServiceLayout from "@/components/service-layout";
import { getProjectImageUrl } from "@/lib/s3";

export const metadata:Metadata = {
  title: `Web & Mobile App Development | ${siteConfig.name}`,
};

const WebAndMobilePage = () => {
  return (
    <ServiceLayout
      title="Web & Mobile App Development"
      description="Custom web and mobile applications built to deliver exceptional user experiences and drive engagement."
      image={getProjectImageUrl("ERP-updated.svg")}
      category="IT Services"
      tags={['React', 'Next.js', 'Node.js', 'iOS', 'Android', 'Flutter']}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Custom Web Development</h2>
          <p>
            We build responsive, high-performance web applications tailored to your specific business needs. Using modern frameworks like React and Next.js, we create dynamic and scalable solutions that provide a seamless user experience across all devices. From e-commerce platforms to complex web portals, we have the expertise to bring your vision to life.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Native & Hybrid Mobile Apps</h2>
          <p>
            Reach your customers on the go with our mobile app development services. We specialize in creating native apps for iOS and Android, as well as cross-platform solutions using technologies like Flutter and React Native. Our focus is on performance, usability, and creating a consistent brand experience across all platforms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">UI/UX Design</h2>
          <p>
            A great user experience is at the heart of every successful application. Our UI/UX design team works closely with you to create intuitive and visually appealing interfaces that are easy to navigate and a joy to use. We follow a user-centered design process, from wireframing and prototyping to final design, to ensure the end product meets the needs of your target audience.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">API & Backend Development</h2>
          <p>
            Power your applications with robust and scalable backend systems. We design and build secure APIs and microservices that support your front-end applications and integrate with third-party services. Our backend solutions are built for performance and reliability, ensuring your applications can handle any workload.
          </p>
        </section>
      </div>
    </ServiceLayout>
  );
};

export default WebAndMobilePage;
