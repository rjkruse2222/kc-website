'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <a href="/" aria-label="Kruse & Crawford CPAs - Home">
              <Image
                src="/images/logo-kruse-and-crawford.svg"
                alt="Kruse & Crawford CPAs"
                width={200}
                height={60}
                priority
              />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <a href="/" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] focus:ring-offset-2 rounded transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] focus:ring-offset-2 rounded transition-colors">
              About
            </a>
            <a href="/services" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] focus:ring-offset-2 rounded transition-colors">
              Services
            </a>
            <a href="/industries" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] focus:ring-offset-2 rounded transition-colors">
              Industries
            </a>
            <a href="/careers" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] focus:ring-offset-2 rounded transition-colors">
              Careers
            </a>
            <a href="/insights" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] focus:ring-offset-2 rounded transition-colors">
              Insights
            </a>
            <a href="/contact" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] focus:ring-offset-2 rounded transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#9bd9e4]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav id="mobile-menu" className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] rounded px-2 py-1 transition-colors">
                Home
              </a>
              <a href="/about" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] rounded px-2 py-1 transition-colors">
                About
              </a>
              <a href="/services" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] rounded px-2 py-1 transition-colors">
                Services
              </a>
              <a href="/industries" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] rounded px-2 py-1 transition-colors">
                Industries
              </a>
              <a href="/careers" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] rounded px-2 py-1 transition-colors">
                Careers
              </a>
              <a href="/insights" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] rounded px-2 py-1 transition-colors">
                Insights
              </a>
              <a href="/contact" className="text-sm uppercase text-gray-700 hover:text-[#003067] focus:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] rounded px-2 py-1 transition-colors">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
