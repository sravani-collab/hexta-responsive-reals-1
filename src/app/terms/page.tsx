import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: "HextaSphere's Terms of Service - Legal terms and conditions for using our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Terms of Service Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-black dark:text-white max-w-2xl">
            Legal terms and conditions governing the use of our website and services.
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
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
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you 
                and HextaSphere Technologies (&quot;HextaSphere,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) regarding your use of 
                our website at hextasphere.com (the &quot;Website&quot;) and our IT and Engineering services (the &quot;Services&quot;).
              </p>
              <p>
                By accessing or using our Website or Services, you agree to be bound by these Terms. 
                If you do not agree to these Terms, please do not use our Website or Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p>HextaSphere provides comprehensive technology solutions including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>IT Services:</strong> IT Staffing, IT Consulting, Web & Mobile App Development, DevSecOps</li>
                <li><strong>Engineering Services:</strong> Pre-Bid Engineering, FEED & Detailed Engineering, As-Built Engineering, Fabrication & Construction Support</li>
                <li><strong>Related Services:</strong> Technology consulting, system integration, and custom software development</li>
              </ul>
              <p>
                Specific service terms, deliverables, timelines, and pricing are detailed in separate 
                service agreements or statements of work executed between HextaSphere and clients.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Website Use</h2>
              
              <h3 className="text-xl font-medium mb-3">3.1 Permitted Use</h3>
              <p>You may use our Website for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Learning about our services and capabilities</li>
                <li>Contacting us for business inquiries</li>
                <li>Accessing public information and resources</li>
                <li>Engaging with our content in accordance with these Terms</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">3.2 Prohibited Use</h3>
              <p>You may not:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use the Website for any unlawful purpose or activity</li>
                <li>Attempt to gain unauthorized access to our systems or data</li>
                <li>Interfere with or disrupt the Website&apos;s functionality</li>
                <li>Copy, reproduce, or distribute our content without permission</li>
                <li>Use automated systems to access the Website excessively</li>
                <li>Submit false, misleading, or harmful information</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Service Agreements</h2>
              
              <h3 className="text-xl font-medium mb-3">4.1 Service Contracts</h3>
              <p>
                Professional services are provided under separate written agreements that specify:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Scope of work and deliverables</li>
                <li>Project timelines and milestones</li>
                <li>Payment terms and pricing</li>
                <li>Intellectual property rights</li>
                <li>Confidentiality obligations</li>
                <li>Performance standards and acceptance criteria</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">4.2 Service Standards</h3>
              <p>We commit to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Delivering services with professional competence</li>
                <li>Meeting agreed-upon timelines and specifications</li>
                <li>Maintaining confidentiality of client information</li>
                <li>Providing regular project updates and communication</li>
                <li>Following industry best practices and standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              
              <h3 className="text-xl font-medium mb-3">5.1 Our Intellectual Property</h3>
              <p>
                The Website and its content, including but not limited to text, graphics, images, logos, 
                software, and design, are owned by HextaSphere or our licensors and are protected by 
                copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-medium mb-3">5.2 Client Work Product</h3>
              <p>
                Intellectual property rights in custom work created specifically for clients are 
                typically transferred to the client upon full payment, as specified in individual 
                service agreements.
              </p>

              <h3 className="text-xl font-medium mb-3">5.3 Pre-existing Assets</h3>
              <p>
                HextaSphere retains rights to pre-existing methodologies, tools, frameworks, and 
                general knowledge used in service delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
              <p>Unless otherwise specified in individual service agreements:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Payment terms are Net 30 days from invoice date</li>
                <li>Late payments may incur interest charges at 1.5% per month</li>
                <li>All prices are exclusive of applicable taxes</li>
                <li>Disputed invoices must be reported within 15 days</li>
                <li>Continued services may be suspended for overdue accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding client information and projects. 
                Both parties agree to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Protect confidential information from unauthorized disclosure</li>
                <li>Use confidential information only for authorized purposes</li>
                <li>Return or destroy confidential information upon request</li>
                <li>Limit access to confidential information on a need-to-know basis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Warranties and Disclaimers</h2>
              
              <h3 className="text-xl font-medium mb-3">8.1 Service Warranty</h3>
              <p>
                We warrant that our services will be performed with professional competence and in 
                accordance with agreed specifications. Any defective work will be corrected at no 
                additional charge within a reasonable timeframe.
              </p>

              <h3 className="text-xl font-medium mb-3">8.2 Website Disclaimer</h3>
              <p>
                THE WEBSITE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL 
                WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF 
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, HEXTASPHERE&apos;S TOTAL LIABILITY FOR ANY CLAIMS 
                ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT 
                PAID BY CLIENT FOR THE SPECIFIC SERVICES GIVING RISE TO THE CLAIM.
              </p>
              <p>
                WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR 
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS 
                OPPORTUNITIES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless HextaSphere from any claims, damages, or 
                expenses arising from:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your use of the Website in violation of these Terms</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Infringement of third-party rights by your content or materials</li>
                <li>Your negligent or wrongful conduct</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
              <p>
                Either party may terminate service agreements according to the terms specified in 
                individual contracts. We reserve the right to terminate or suspend Website access 
                for violations of these Terms.
              </p>
              <p>
                Upon termination, all rights and obligations shall cease except those that by their 
                nature should survive, including confidentiality, payment obligations, and intellectual 
                property rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Force Majeure</h2>
              <p>
                Neither party shall be liable for delays or failures in performance due to causes 
                beyond their reasonable control, including but not limited to natural disasters, 
                government actions, war, terrorism, pandemic, or technical failures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Governing Law and Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the 
                jurisdiction where services are primarily performed. Any disputes shall be resolved 
                through binding arbitration or in courts of competent jurisdiction as specified in 
                individual service agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Privacy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which governs 
                the collection and use of your information and is incorporated by reference into these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective 
                upon posting on our Website. Your continued use of our Website or Services after 
                changes indicates acceptance of the modified Terms.
              </p>
              <p>
                Material changes affecting existing service agreements will be communicated separately 
                and may require explicit agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">16. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, the 
                remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">17. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and any applicable service agreements, 
                constitute the entire agreement between you and HextaSphere regarding the subject matter herein.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">18. Contact Information</h2>
              <p>
                If you have questions about these Terms, please contact us:
              </p>
              
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
                By using our Website or Services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}