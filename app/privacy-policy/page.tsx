import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Kruse & Crawford CPAs',
  description: 'Privacy Policy for Kruse & Crawford CPAs - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003067] mb-4">
            Privacy Policy
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
                <li><a href="#information-we-collect" className="text-[#003067] hover:underline">1. Information We Collect</a></li>
                <li><a href="#how-we-use" className="text-[#003067] hover:underline">2. How We Use Your Information</a></li>
                <li><a href="#information-sharing" className="text-[#003067] hover:underline">3. Information Sharing</a></li>
                <li><a href="#data-security" className="text-[#003067] hover:underline">4. Data Security</a></li>
                <li><a href="#your-rights" className="text-[#003067] hover:underline">5. Your Rights</a></li>
                <li><a href="#cookies" className="text-[#003067] hover:underline">6. Cookies and Tracking</a></li>
                <li><a href="#third-party" className="text-[#003067] hover:underline">7. Third-Party Services</a></li>
                <li><a href="#changes" className="text-[#003067] hover:underline">8. Changes to This Policy</a></li>
                <li><a href="#contact" className="text-[#003067] hover:underline">9. Contact Us</a></li>
              </ul>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Kruse & Crawford CPAs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
            </p>

            <h2 id="information-we-collect" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Fill out forms on our website</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletter</li>
              <li>Engage us for professional services</li>
              <li>Contact us via email, phone, or mail</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Business information (company name, industry, revenue range)</li>
              <li>Financial information necessary to provide our services</li>
              <li>Tax-related documents and information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2 id="how-we-use" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our professional services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you information about our services, updates, and newsletters</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Protect against fraud and unauthorized transactions</li>
              <li>Analyze usage patterns to improve our website and services</li>
            </ul>

            <h2 id="information-sharing" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>With your consent:</strong> When you have given us explicit permission to share your information</li>
              <li><strong>Service providers:</strong> With trusted third parties who assist us in operating our website and providing services, subject to confidentiality agreements</li>
              <li><strong>Legal requirements:</strong> When required by law, subpoena, or other legal process</li>
              <li><strong>Professional obligations:</strong> As required by professional standards and regulations governing CPAs</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 id="data-security" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 id="your-rights" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal and professional retention requirements)</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 id="cookies" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              6. Cookies and Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that help us understand how you use our website. You can control cookies through your browser settings, though disabling cookies may affect website functionality.
            </p>

            <h2 id="third-party" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              7. Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 id="changes" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our website after any changes indicates your acceptance of the updated policy.
            </p>

            <h2 id="contact" className="text-2xl font-bold text-[#003067] mt-12 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 not-prose">
              <p className="font-semibold text-[#003067] mb-2">Kruse & Crawford CPAs</p>
              <p className="text-gray-600 text-sm">105 E 4th St, Suite 1200</p>
              <p className="text-gray-600 text-sm">Cincinnati, OH 45202</p>
              <p className="text-gray-600 text-sm mt-2">
                Phone: <a href="tel:+15132722200" className="text-[#003067] hover:underline">(513) 272-2200</a>
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
