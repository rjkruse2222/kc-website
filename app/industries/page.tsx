'use client';

import Link from 'next/link';
import { useState } from 'react';

const industries = [
  {
    name: 'Real Estate & Construction',
    slug: 'real-estate-construction',
    description: 'Cost segregation, 1031 exchanges, REPS status optimization, and project-based accounting for developers, investors, and contractors.',
    highlight: 'Up to 40% accelerated depreciation',
    color: 'from-amber-500/20 to-orange-500/20',
    accentColor: 'bg-amber-500',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    description: 'R&D tax credits, equipment depreciation strategies, inventory accounting, and cost optimization for manufacturers of all sizes.',
    highlight: 'R&D credits up to 10% of qualified expenses',
    color: 'from-slate-500/20 to-zinc-500/20',
    accentColor: 'bg-slate-500',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    name: 'Food & Beverage',
    slug: 'food-beverage',
    description: 'Multi-location accounting, tip credit optimization, inventory management, and franchise financial strategies for restaurants and food businesses.',
    highlight: 'FICA tip credit optimization',
    color: 'from-rose-500/20 to-red-500/20',
    accentColor: 'bg-rose-500',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Technology',
    slug: 'technology',
    description: 'R&D tax credits, stock option planning, SaaS revenue recognition, and growth-stage financial strategy for tech companies.',
    highlight: 'Startup R&D credits against payroll tax',
    color: 'from-violet-500/20 to-purple-500/20',
    accentColor: 'bg-violet-500',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Practice valuations, compliance support, retirement planning, and tax strategy for medical practices and healthcare organizations.',
    highlight: 'Qualified retirement plan strategies',
    color: 'from-teal-500/20 to-cyan-500/20',
    accentColor: 'bg-teal-500',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    name: 'B2B Services',
    slug: 'b2b-services',
    description: 'Entity structuring, partner compensation planning, and growth strategies for consultants, agencies, and professional service firms.',
    highlight: 'Pass-through entity optimization',
    color: 'from-blue-500/20 to-indigo-500/20',
    accentColor: 'bg-blue-500',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Life Sciences',
    slug: 'life-sciences',
    description: 'R&D tax credits, grant accounting, IP strategies, and financial planning for biotech, pharma, and medical device companies.',
    highlight: 'Orphan drug credit opportunities',
    color: 'from-emerald-500/20 to-green-500/20',
    accentColor: 'bg-emerald-500',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    name: 'High-Income Individuals',
    slug: 'high-income-individuals',
    description: 'Personal tax strategy, estate planning, investment tax optimization, and wealth preservation for executives and high earners.',
    highlight: 'Estate and gift tax planning',
    color: 'from-yellow-500/20 to-amber-500/20',
    accentColor: 'bg-yellow-500',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }
];

const stats = [
  { value: '8', label: 'Industry Specializations' },
  { value: '20+', label: 'Years Experience' },
  { value: '50', label: 'States Served' },
  { value: '$50M+', label: 'Client Tax Savings' },
];

export default function IndustriesPage() {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  // Split industries for the bento layout
  const featured = industries[0];
  const topRow = industries.slice(1, 4);
  const bottomRow = industries.slice(4);

  return (
    <main className="bg-[#fafafa] overflow-hidden">
      {/* Hero Section - Immersive with floating icons */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#003067] via-[#002855] to-[#001a3a] overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#9bd9e4]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#9bd9e4]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#003067]/50 rounded-full blur-3xl" />
        </div>

        {/* Floating industry icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {industries.map((industry, idx) => {
            const positions = [
              { top: '15%', left: '8%', size: 'w-16 h-16', delay: '0s' },
              { top: '25%', right: '12%', size: 'w-14 h-14', delay: '0.5s' },
              { top: '60%', left: '5%', size: 'w-12 h-12', delay: '1s' },
              { top: '70%', right: '8%', size: 'w-16 h-16', delay: '1.5s' },
              { top: '10%', right: '25%', size: 'w-10 h-10', delay: '2s' },
              { top: '80%', left: '20%', size: 'w-14 h-14', delay: '2.5s' },
              { top: '40%', right: '5%', size: 'w-12 h-12', delay: '3s' },
              { top: '85%', right: '30%', size: 'w-10 h-10', delay: '3.5s' },
            ];
            const pos = positions[idx];
            return (
              <div
                key={industry.slug}
                className={`absolute ${pos.size} text-white/20 animate-float`}
                style={{
                  top: pos.top,
                  left: pos.left,
                  right: pos.right,
                  animationDelay: pos.delay,
                }}
              >
                {industry.icon}
              </div>
            );
          })}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#9bd9e4]" />
              <span className="text-[#9bd9e4] text-sm font-semibold tracking-widest uppercase">
                Industry Expertise
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Your industry.
              <span className="block text-[#9bd9e4]">Our specialty.</span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-10">
              Every industry has unique tax opportunities and challenges. We bring deep expertise in your sector to maximize savings and minimize risk.
            </p>

            <a
              href="#industries"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#003067] font-semibold rounded-full hover:bg-[#9bd9e4] transition-all duration-300"
            >
              Explore Industries
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Featured Industry - Full width showcase */}
      <section id="industries" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          {/* Featured large card */}
          <Link
            href={`/industries/${featured.slug}`}
            className="group relative block mb-8"
            onMouseEnter={() => setHoveredIndustry(featured.slug)}
            onMouseLeave={() => setHoveredIndustry(null)}
          >
            <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${featured.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-12 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${featured.accentColor}/10 mb-6`}>
                    <div className={`w-2 h-2 rounded-full ${featured.accentColor}`} />
                    <span className="text-[#003067] text-sm font-semibold">Featured Industry</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mb-6 group-hover:text-[#003067] transition-colors">
                    {featured.name}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featured.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#003067] text-white rounded-full text-sm font-medium mb-8">
                    <svg className="w-4 h-4 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {featured.highlight}
                  </div>

                  <div className="flex items-center gap-2 text-[#003067] font-semibold">
                    Explore {featured.name}
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    {/* Decorative rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#003067]/10 animate-spin-slow" />
                    <div className="absolute inset-4 rounded-full border-2 border-[#003067]/5" />
                    <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#003067] to-[#002050] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="w-24 h-24 text-white">
                        {featured.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Bento Grid - Top Row (3 cards) */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {topRow.map((industry, idx) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative block"
                onMouseEnter={() => setHoveredIndustry(industry.slug)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative p-8 h-full flex flex-col">
                    <div className={`w-14 h-14 rounded-2xl ${industry.accentColor}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`w-7 h-7 ${industry.accentColor.replace('bg-', 'text-')}`}>
                        {industry.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#003067] mb-3">
                      {industry.name}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {industry.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#003067] font-medium text-sm group-hover:text-[#003067]">
                      Learn more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bento Grid - Bottom Row (4 cards with varied sizes) */}
          <div className="grid md:grid-cols-4 gap-6">
            {bottomRow.map((industry, idx) => {
              // Make first and last cards span 2 columns on larger screens for variety
              const isWide = idx === 0;

              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className={`group relative block ${isWide ? 'md:col-span-2' : ''}`}
                  onMouseEnter={() => setHoveredIndustry(industry.slug)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                >
                  <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                    {/* Hover gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className={`relative p-8 h-full flex ${isWide ? 'flex-row items-center gap-8' : 'flex-col'}`}>
                      <div className={`w-14 h-14 rounded-2xl ${industry.accentColor}/10 flex items-center justify-center ${isWide ? '' : 'mb-6'} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <div className={`w-7 h-7 ${industry.accentColor.replace('bg-', 'text-')}`}>
                          {industry.icon}
                        </div>
                      </div>

                      <div className={isWide ? 'flex-grow' : ''}>
                        <h3 className="text-xl font-bold text-[#003067] mb-3">
                          {industry.name}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {industry.description}
                        </p>

                        <div className="flex items-center gap-2 text-[#003067] font-medium text-sm">
                          Learn more
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Floating cards */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9bd9e4]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#003067]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Why It Matters</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-8">
                Generic advice<br />
                <span className="text-[#9bd9e4]">costs you money.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A CPA who does not understand your industry will miss opportunities that someone with specialized knowledge would catch. Tax laws, deductions, and strategies vary significantly by sector.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We invest the time to understand the unique aspects of your business. This deep knowledge translates directly into tax savings and better financial decisions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#9bd9e4] hover:text-[#003067] transition-all duration-300"
              >
                Discuss Your Industry
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative bg-[#fafafa] rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-5xl md:text-6xl font-bold text-[#003067] mb-3 group-hover:text-[#9bd9e4] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative bg-gradient-to-br from-[#003067] to-[#002050] rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9bd9e4]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9bd9e4]/5 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don&apos;t see your industry?
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
                We work with businesses across many sectors. Contact us to discuss your specific situation and discover opportunities you might be missing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#003067] font-bold rounded-full hover:bg-[#9bd9e4] transition-colors shadow-lg hover:shadow-xl"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.3;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </main>
  );
}
