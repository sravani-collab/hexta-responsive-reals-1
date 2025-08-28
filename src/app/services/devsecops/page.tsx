
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import ServiceLayout from "@/components/service-layout";
import { getProjectImageUrl } from "@/lib/s3";

export const metadata:Metadata = {
  title: `DevSecOps | ${siteConfig.name}`,
};

const DevSecOpsPage = () => {
  return (
    <ServiceLayout
      title="DevSecOps"
      description="Integrating security into every stage of the software development lifecycle to build resilient and secure applications."
      image={getProjectImageUrl("ERP-updated.svg")}
      category="IT Services"
      tags={['CI/CD', 'Automation', 'Infrastructure as Code', 'Security Scanning', 'Compliance']}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Continuous Integration & Delivery (CI/CD)</h2>
          <p>
            We help you implement robust CI/CD pipelines that automate the build, test, and deployment processes. By integrating security checks into every stage of the pipeline, we ensure that vulnerabilities are identified and addressed early, reducing risk and improving the overall quality of your software.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Infrastructure as Code (IaC)</h2>
          <p>
            Treat your infrastructure as code to achieve consistency, scalability, and security. We use tools like Terraform and Ansible to automate the provisioning and management of your infrastructure, ensuring that it is secure and compliant by design. This approach eliminates manual errors and provides a solid foundation for your applications.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Automated Security Scanning</h2>
          <p>
            Our DevSecOps approach includes the integration of automated security scanning tools into your development workflow. This includes static application security testing (SAST), dynamic application security testing (DAST), and software composition analysis (SCA). By automating the scanning process, we help you identify and remediate vulnerabilities quickly and efficiently.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Compliance & Governance</h2>
          <p>
            We help you navigate the complex landscape of regulatory compliance. Our experts work with you to implement security controls and processes that meet industry standards such as GDPR, HIPAA, and PCI DSS. We also provide continuous monitoring and reporting to ensure ongoing compliance and governance.
          </p>
        </section>
      </div>
    </ServiceLayout>
  );
};

export default DevSecOpsPage;
