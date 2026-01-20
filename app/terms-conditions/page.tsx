import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Kruse & Crawford CPAs',
  description: 'Terms and Conditions for using the Kruse & Crawford CPAs website and services.',
};

export default function TermsConditionsPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003067] mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12 not-prose">
              <h2 className="text-lg font-semibold text-[#003067] mb-4">Table of Contents</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#acceptance" className="text-[#003067] hover:underline">1. Acceptance of Terms</a></li>
                <li><a href="#services" className="text-[#003067] hover:underline">2. Description of Services</a></li>
                <li><a href="#website-use" className="text-[#003067] hover:underline">3. Website Use</a></li>
                <li><a href="#intellectual-property" className="text-[#003067] hover:underline">4. Intellectual Property</a></li>
                <li><a href="#disclaimer" className="text-[#003067] hover:underline">5. Disclaimer of Warranties</a></li>
                <li><a href="#limitation" className="text-[#003067] hover:underline">6. Limitation of Liability</a></li>
                <li><a href="#indemnification" className="text-[#003067] hover:underline">7. Indemnification</a></li>
                <li><a href="#professional-services" className="text-[#003067] hover:underline">8. Professional Services</a></li>
                <li><a href="#governing-law" className="text-[#003067] hover:underline">9. Governing Law</a></li>
                <li><a href="#changes" className="text-[#003067] hover:underline">10. Changes to Terms</a></li>
                <li><a href="#contact" className="text-[#003067] hover:underline">11. Contact Information</a></li>
              </ul>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Welcome to the Kruse & Crawford CPAs website. By accessing or using our website, you agree to be bound by these Terms and Conditions. Please read them carefully before using our site or services.
            </p>

            <h2 id="acceptance" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use this website. We reserve the right to modify these terms at any time, and your continued use of the website following any changes constitutes acceptance of those changes.
            </p>

            <h2 id="services" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              2. Description of Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kruse & Crawford CPAs provides accounting, tax planning, tax preparation, business advisory, and related professional services. The information provided on this website is for general informational purposes only and does not constitute professional advice. Specific advice should be sought from a qualified professional based on your individual circumstances.
            </p>

            <h2 id="website-use" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              3. Website Use
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree to use this website only for lawful purposes and in a manner that does not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Violate any applicable local, state, national, or international law</li>
              <li>Infringe on the rights of others</li>
              <li>Interfere with the operation of the website</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Transmit any harmful code, viruses, or malicious software</li>
              <li>Collect or harvest information about other users</li>
              <li>Engage in any activity that could damage, disable, or impair the website</li>
            </ul>

            <h2 id="intellectual-property" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Kruse & Crawford CPAs or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
            </p>

            <h2 id="disclaimer" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 leading-relaxed">
              THIS WEBSITE AND ITS CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>

            <h2 id="limitation" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, KRUSE & CRAWFORD CPAS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THIS WEBSITE, REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER THEORY. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID, IF ANY, FOR ACCESSING THIS WEBSITE.
            </p>

            <h2 id="indemnification" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              7. Indemnification
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Kruse & Crawford CPAs, its partners, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising out of or related to your use of this website, your violation of these Terms and Conditions, or your violation of any rights of a third party.
            </p>

            <h2 id="professional-services" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              8. Professional Services
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Professional services provided by Kruse & Crawford CPAs are governed by separate engagement letters and agreements. These Terms and Conditions apply to your use of this website and do not supersede any written agreement you may have with us regarding professional services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The information on this website does not constitute tax, legal, or accounting advice. Tax laws and regulations are complex and subject to change. You should consult with a qualified professional regarding your specific situation before taking any action based on information found on this website.
            </p>

            <h2 id="governing-law" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              9. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Ohio, without regard to its conflict of law provisions. Any dispute arising under these terms shall be resolved exclusively in the state or federal courts located in Hamilton County, Ohio.
            </p>

            <h2 id="changes" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this website. The &quot;Last updated&quot; date at the top of this page indicates when these terms were last revised. Your continued use of the website after any changes constitutes acceptance of the revised terms.
            </p>

            <h2 id="contact" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              11. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 not-prose">
              <p className="font-semibold text-[#003067] mb-2">Kruse & Crawford CPAs</p>
              <p className="text-gray-600 text-sm">120 E 8th St, Suite 200</p>
              <p className="text-gray-600 text-sm">Cincinnati, OH 45202</p>
              <p className="text-gray-600 text-sm mt-2">
                Phone: <a href="tel:+15133812345" className="text-[#003067] hover:underline">(513) 381-2345</a>
              </p>
              <p className="text-gray-600 text-sm">
                Email: <a href="mailto:info@kruseandcrawford.com" className="text-[#003067] hover:underline">info@kruseandcrawford.com</a>
              </p>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-[#003067] hover:text-[#9bd9e4] transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
