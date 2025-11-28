'use client';

// Router Option 1: Simple Dark Cards with Background Image
// Clean, professional design matching VSL1 aesthetic

import Link from 'next/link';

export default function Router1() {
  const options = [
    {
      icon: '💼',
      title: 'High-Income Professional',
      subtitle: 'W2 employee earning $200K+',
      description: 'Doctors, lawyers, executives, tech workers, consultants',
      href: '/vsl1',
      highlight: '$50K-$150K+ potential savings'
    },
    {
      icon: '🏢',
      title: 'Business Owner',
      subtitle: 'S-corp, LLC, or entrepreneur',
      description: 'Agencies, practices, consultancies, e-commerce, services',
      href: '/vsl3',
      highlight: '40-60% tax reduction strategies'
    },
    {
      icon: '🏠',
      title: 'Real Estate Investor',
      subtitle: 'Rentals, flipping, or syndication',
      description: 'Landlords, flippers, syndicators, RE professionals',
      href: '/vsl2',
      highlight: 'Pay little to no taxes legally'
    },
    {
      icon: '📊',
      title: 'Multiple Income Sources',
      subtitle: 'Combination of the above',
      description: "Not sure which applies? We'll help you figure it out",
      href: '/vsl4',
      highlight: 'Personalized strategy quiz'
    }
  ];

  return (
    <main className="min-h-screen text-white relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/home-hero-tall.jpg)' }}
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003067]/95 via-[#001a3a]/90 to-[#0a0a0a]/95" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-[#003067]/80 backdrop-blur-sm py-4 px-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="text-white font-bold text-xl">KRUSE & CRAWFORD</div>
            <div className="hidden md:flex items-center gap-6 text-white/80 text-sm">
              <span>Licensed CPAs</span>
              <span>|</span>
              <span>Cincinnati, OH</span>
              <span>|</span>
              <span>(513) 272-2200</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          {/* Headline */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#9bd9e4]/20 backdrop-blur-sm border border-[#9bd9e4]/30 rounded-full text-[#9bd9e4] text-sm font-medium mb-6">
              Strategic Tax Planning for High Earners
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Which Best Describes<br />
              <span className="text-[#9bd9e4]">Your Situation?</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Select your primary income type to see tax strategies specifically designed for you.
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {options.map((option, i) => (
              <Link
                key={i}
                href={option.href}
                className="group block p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:border-[#9bd9e4]/50 hover:bg-white/15 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{option.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white group-hover:text-[#9bd9e4] transition-colors">
                      {option.title}
                    </h2>
                    <p className="text-[#9bd9e4] text-sm font-medium mt-1">
                      {option.subtitle}
                    </p>
                    <p className="text-white/60 text-sm mt-2">
                      {option.description}
                    </p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#9bd9e4]/20 rounded-full text-[#9bd9e4] text-xs font-semibold">
                      {option.highlight}
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-white/30 group-hover:text-[#9bd9e4] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center gap-6 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-white/60 text-sm">20+ Years Experience</span>
              <span className="text-white/30">|</span>
              <span className="text-white/60 text-sm">$50M+ Client Savings</span>
              <span className="text-white/30">|</span>
              <span className="text-white/60 text-sm">150+ Clients Served</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center text-white/50 text-sm">
            © 2024 Kruse & Crawford CPAs | 105 E 4th St, Longworth Hall, Cincinnati, OH 45202
          </div>
        </footer>
      </div>
    </main>
  );
}
