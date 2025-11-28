'use client';

// Router Option 2: Visual/Illustrated Design
// Large cards with gradient backgrounds and more visual impact

import Link from 'next/link';

export default function Router2() {
  const options = [
    {
      icon: '💼',
      title: 'High-Income Professional',
      examples: ['Doctors', 'Lawyers', 'Executives', 'Tech Workers'],
      stats: '$50K-$150K+',
      statsLabel: 'avg. annual savings',
      href: '/vsl1',
      gradient: 'from-blue-600 to-blue-800',
      borderColor: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-400'
    },
    {
      icon: '🏢',
      title: 'Business Owner',
      examples: ['S-Corps', 'LLCs', 'Agencies', 'Practices'],
      stats: '40-60%',
      statsLabel: 'tax reduction',
      href: '/vsl3',
      gradient: 'from-emerald-600 to-emerald-800',
      borderColor: 'border-emerald-500/30',
      hoverBorder: 'hover:border-emerald-400'
    },
    {
      icon: '🏠',
      title: 'Real Estate Investor',
      examples: ['Landlords', 'Flippers', 'Syndicators', 'REPS'],
      stats: '$0',
      statsLabel: 'possible tax liability',
      href: '/vsl2',
      gradient: 'from-amber-600 to-amber-800',
      borderColor: 'border-amber-500/30',
      hoverBorder: 'hover:border-amber-400'
    },
    {
      icon: '📊',
      title: 'Multiple Sources',
      examples: ['Mixed Income', 'Side Business', 'Investments', 'Not Sure'],
      stats: '60 sec',
      statsLabel: 'quiz to find out',
      href: '/vsl4',
      gradient: 'from-purple-600 to-purple-800',
      borderColor: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-400'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm py-4 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">KRUSE & CRAWFORD</div>
          <div className="hidden md:block text-white/60 text-sm">
            Strategic Tax Planning | Cincinnati, OH
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* Headline */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Stop Overpaying<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              On Your Taxes
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Select your situation below to see strategies that could save you
            tens of thousands — or more — every year.
          </p>
        </div>

        {/* Options Grid - Large Visual Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {options.map((option, i) => (
            <Link
              key={i}
              href={option.href}
              className={`group relative overflow-hidden rounded-3xl border ${option.borderColor} ${option.hoverBorder} transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />

              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="text-6xl mb-6">{option.icon}</div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {option.title}
                </h2>

                {/* Examples */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {option.examples.map((ex, j) => (
                    <span key={j} className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm">
                      {ex}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-4xl font-black text-white">{option.stats}</div>
                    <div className="text-white/50 text-sm">{option.statsLabel}</div>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4">Not sure which applies to you?</p>
          <Link
            href="/vsl4"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Take our 60-second quiz to find out
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$50M+', label: 'Client Savings' },
              { value: '20+', label: 'Years Experience' },
              { value: '150+', label: 'Clients Served' },
              { value: '4.9★', label: 'Google Rating' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/30 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          © 2024 Kruse & Crawford CPAs | Licensed in Ohio | (513) 272-2200
        </div>
      </footer>
    </main>
  );
}
