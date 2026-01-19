import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Image
              src="/images/logo-kruse-and-crawford.svg"
              alt="Kruse & Crawford CPAs"
              width={180}
              height={54}
              className="mb-4"
            />
            <p className="text-sm text-gray-500 leading-relaxed">
              Focus on growing your business, let us be your trusted advisor
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-[#003067] text-sm font-semibold uppercase mb-4 tracking-wider">
              About Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm hover:text-[#003067] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className="text-sm hover:text-[#003067] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/insights" className="text-sm hover:text-[#003067] transition-colors">
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#003067] text-sm font-semibold uppercase mb-4 tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-sm hover:text-[#003067] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/industries" className="text-sm hover:text-[#003067] transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="/resources" className="text-sm hover:text-[#003067] transition-colors">
                  All Resources
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-sm hover:text-[#003067] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" className="text-sm hover:text-[#003067] transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#003067] text-sm font-semibold uppercase mb-4 tracking-wider">
              Connect
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=120+E+8th+St+Suite+200+Cincinnati+OH+45202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#003067] transition-colors"
                >
                  120 E 8th St, Suite 200<br />
                  Cincinnati, OH 45202
                </a>
              </li>
              <li className="text-sm mt-3">
                <a href="tel:+15133812345" className="hover:text-[#003067] transition-colors">
                  (513) 381-2345
                </a>
              </li>
              <li className="text-sm">
                <a href="mailto:info@kruseandcrawford.com" className="hover:text-[#003067] transition-colors">
                  info@kruseandcrawford.com
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/kruse-crawford"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] rounded transition-colors"
                aria-label="Follow us on LinkedIn (opens in new tab)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/kruseandcrawford"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] rounded transition-colors"
                aria-label="Follow us on Facebook (opens in new tab)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/kruseandcrawfor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] rounded transition-colors"
                aria-label="Follow us on Twitter (opens in new tab)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>
              ©2026 – All Rights Reserved Kruse & Crawford |{' '}
              <a href="/privacy-policy" className="hover:text-[#003067] transition-colors">
                Privacy Policy
              </a>
              {' | '}
              <a href="/terms-conditions" className="hover:text-[#003067] transition-colors">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
