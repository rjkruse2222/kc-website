'use client';

// Router Option 1: Simple Dark Cards
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
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="bg-[#003067] py-4 px-6">
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
          <div className="inline-block px-4 py-2 bg-[#9bd9e4]/20 border border-[#9bd9e4]/30 rounded-full text-[#9bd9e4] text-sm font-medium mb-6">
            Strategic Tax Planning for High Earners
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Which Best Describes<br />
            <span className="text-[#9bd9e4]">Your Situation?</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Select your primary income type to see tax strategies specifically designed for you.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {options.map((option, i) => (
            <Link
              key={i}
              href={option.href}
              className="group block p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#9bd9e4]/50 hover:bg-white/10 transition-all duration-300"
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
                  <p className="text-white/50 text-sm mt-2">
                    {option.description}
                  </p>
                  <div className="mt-4 inline-block px-3 py-1 bg-[#9bd9e4]/10 rounded-full text-[#9bd9e4] text-xs font-semibold">
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
          <div className="flex flex-wrap justify-center gap-8 text-white/40 text-sm">
            <span>20+ Years Experience</span>
            <span>|</span>
            <span>$50M+ Client Savings</span>
            <span>|</span>
            <span>150+ Clients Served</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white/40 text-sm">
          © 2024 Kruse & Crawford CPAs | 105 E 4th St, Longworth Hall, Cincinnati, OH 45202
        </div>
      </footer>
    </main>
  );
}
