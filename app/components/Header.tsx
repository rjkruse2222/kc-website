import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <a href="/">
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
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm uppercase text-gray-700 hover:text-[#003067] transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm uppercase text-gray-700 hover:text-[#003067] transition-colors">
              About
            </a>
            <div className="relative group">
              <a href="/services" className="text-sm uppercase text-gray-700 hover:text-[#003067] transition-colors">
                Services
              </a>
            </div>
            <div className="relative group">
              <a href="/industries" className="text-sm uppercase text-gray-700 hover:text-[#003067] transition-colors">
                Industries
              </a>
            </div>
            <a href="/careers" className="text-sm uppercase text-gray-700 hover:text-[#003067] transition-colors">
              Careers
            </a>
            <a href="/insights" className="text-sm uppercase text-gray-700 hover:text-[#003067] transition-colors">
              Insights
            </a>
            <a href="/contact" className="text-sm uppercase text-gray-700 hover:text-[#003067] transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
