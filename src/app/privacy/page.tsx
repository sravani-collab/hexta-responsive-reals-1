import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: "HextaSphere's Privacy Policy - How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Privacy Policy Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-black dark:text-white max-w-2xl">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                HextaSphere Technologies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website at hextasphere.com (the &quot;Service&quot;) or engage with our IT and 
                Engineering services.
              </p>
              <p>
                By using our Service, you agree to the collection and use of information in accordance 
                with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
              <p>We may collect personally identifiable information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, phone number</li>
                <li>Company name and job title</li>
                <li>Mailing address</li>
                <li>Professional information relevant to our services</li>
                <li>Information provided through contact forms, consultations, or service inquiries</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">2.2 Technical Information</h3>
              <p>We automatically collect certain information when you visit our website:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website and search terms</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">2.3 Service-Related Information</h3>
              <p>When you engage our services, we may collect:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Project requirements and technical specifications</li>
                <li>Business information necessary for service delivery</li>
                <li>Communication records and project documentation</li>
                <li>Feedback and service evaluation data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing and delivering our IT and Engineering services</li>
                <li>Responding to inquiries and communicating about our services</li>
                <li>Improving our website and service offerings</li>
                <li>Sending service-related updates and notifications</li>
                <li>Marketing communications (with your consent)</li>
                <li>Analyzing website usage and performance</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
              <p>We do not sell or rent your personal information. We may share your information in these circumstances:</p>
              
              <h3 className="text-xl font-medium mb-3">4.1 Service Providers</h3>
              <p>We may share information with trusted third-party vendors who assist us in:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Website hosting and maintenance</li>
                <li>Email and communication services</li>
                <li>Analytics and performance monitoring</li>
                <li>Customer relationship management</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">4.2 Legal Requirements</h3>
              <p>We may disclose information when required by law or to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Comply with legal processes or government requests</li>
                <li>Protect our rights and property</li>
                <li>Investigate potential fraud or security issues</li>
                <li>Protect the safety of our users and the public</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">4.3 Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be 
                transferred as part of that transaction, subject to the same privacy protections.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure server infrastructure and access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response procedures</li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality and user experience</li>
                <li>Provide relevant content and advertisements</li>
              </ul>
              <p>
                You can control cookie settings through your browser preferences. Note that disabling 
                cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
              <p>
                We retain your information only as long as necessary to fulfill the purposes outlined 
                in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. 
                Specific retention periods depend on:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The nature of the information collected</li>
                <li>Legal and regulatory requirements</li>
                <li>Business and operational needs</li>
                <li>Your preferences and consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Access:</strong> Request information about data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Request limitation of data processing</li>
              </ul>
              <p>
                To exercise these rights, please contact us at info@hextasphere.com. We will respond 
                to your request within a reasonable timeframe and in accordance with applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
              <p>
                As we operate internationally with offices in India and the USA, your information may 
                be transferred to and processed in countries other than your own. We ensure appropriate 
                safeguards are in place for such transfers in compliance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to children under 13 (or the applicable age of consent 
                in your jurisdiction). We do not knowingly collect personal information from children. 
                If we become aware that we have collected information from a child, we will delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. This Privacy Policy does not 
                apply to those sites. We encourage you to review the privacy policies of any third-party 
                sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or 
                applicable laws. We will notify you of any material changes by posting the updated policy 
                on our website and updating the &quot;Last Updated&quot; date. Continued use of our services after 
                changes indicates acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
              <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-4">
                <h3 className="font-semibold mb-3">HextaSphere Technologies</h3>
                <p><strong>Email:</strong> info@hextasphere.com</p>
                <p><strong>Phone (India):</strong> +91 8977783448</p>
                <p><strong>Phone (USA):</strong> +1 4088829641</p>
                
                <div className="mt-4">
                  <p><strong>India Office:</strong></p>
                  <p>TF2, VUDA Complex,</p>
                  <p>Seethammadara,</p>
                  <p>Visakhapatnam, India</p>
                </div>
                
                <div className="mt-4">
                  <p><strong>USA Office:</strong></p>
                  <p>1560 E Southlake Blvd Ste:100</p>
                  <p>Southlake TX-76092</p>
                  <p>United States</p>
                </div>
              </div>
            </section>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This Privacy Policy is part of our commitment to transparency and data protection. 
                We regularly review and update our practices to ensure they meet the highest standards 
                of privacy and security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}