'use client';

import Link from 'next/link';
import { useState } from 'react';

const industries = [
  {
    name: 'Real Estate & Construction',
    slug: 'real-estate-construction',
    tagline: 'We know how fast-paced the real estate and construction industries are.',
    description: 'Cost segregation, 1031 exchanges, REPS status optimization, and project-based accounting.',
    color: '#f59e0b',
    lightColor: '#fef3c7',
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <rect x="20" y="50" width="35" height="50" rx="4" fill="currentColor" opacity="0.2"/>
        <rect x="25" y="55" width="10" height="12" rx="2" fill="currentColor" opacity="0.4"/>
        <rect x="40" y="55" width="10" height="12" rx="2" fill="currentColor" opacity="0.4"/>
        <rect x="25" y="72" width="10" height="12" rx="2" fill="currentColor" opacity="0.4"/>
        <rect x="40" y="72" width="10" height="12" rx="2" fill="currentColor" opacity="0.4"/>
        <rect x="65" y="30" width="40" height="70" rx="4" fill="currentColor" opacity="0.3"/>
        <rect x="70" y="35" width="12" height="15" rx="2" fill="currentColor" opacity="0.5"/>
        <rect x="88" y="35" width="12" height="15" rx="2" fill="currentColor" opacity="0.5"/>
        <rect x="70" y="55" width="12" height="15" rx="2" fill="currentColor" opacity="0.5"/>
        <rect x="88" y="55" width="12" height="15" rx="2" fill="currentColor" opacity="0.5"/>
        <rect x="70" y="75" width="12" height="15" rx="2" fill="currentColor" opacity="0.5"/>
        <rect x="88" y="75" width="12" height="15" rx="2" fill="currentColor" opacity="0.5"/>
        <path d="M10 100H110" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
        <circle cx="85" cy="20" r="15" fill="currentColor" opacity="0.15"/>
      </svg>
    ),
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    tagline: 'The business of making things generates uniquely challenging environments.',
    description: 'R&D tax credits, equipment depreciation, inventory accounting, and cost optimization.',
    color: '#64748b',
    lightColor: '#f1f5f9',
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <circle cx="40" cy="50" r="25" stroke="currentColor" strokeWidth="4" opacity="0.3"/>
        <circle cx="40" cy="50" r="15" stroke="currentColor" strokeWidth="4" opacity="0.2"/>
        <circle cx="40" cy="50" r="5" fill="currentColor" opacity="0.4"/>
        <circle cx="85" cy="70" r="20" stroke="currentColor" strokeWidth="4" opacity="0.3"/>
        <circle cx="85" cy="70" r="10" stroke="currentColor" strokeWidth="4" opacity="0.2"/>
        <circle cx="85" cy="70" r="3" fill="currentColor" opacity="0.4"/>
        <path d="M57 42L70 58" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.25"/>
        <rect x="15" y="85" width="90" height="10" rx="5" fill="currentColor" opacity="0.15"/>
        <rect x="25" y="95" width="8" height="15" fill="currentColor" opacity="0.2"/>
        <rect x="55" y="95" width="8" height="15" fill="currentColor" opacity="0.2"/>
        <rect x="85" y="95" width="8" height="15" fill="currentColor" opacity="0.2"/>
      </svg>
    ),
  },
  {
    name: 'Food & Beverage',
    slug: 'food-beverage',
    tagline: 'The perfect recipe of knowledge and service capabilities.',
    description: 'Multi-location accounting, tip credit optimization, and franchise strategies.',
    color: '#f43f5e',
    lightColor: '#ffe4e6',
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <ellipse cx="60" cy="85" rx="40" ry="15" fill="currentColor" opacity="0.15"/>
        <path d="M30 75C30 75 35 40 60 40C85 40 90 75 90 75" stroke="currentColor" strokeWidth="4" opacity="0.3" strokeLinecap="round"/>
        <path d="M25 80C25 80 40 85 60 85C80 85 95 80 95 80" stroke="currentColor" strokeWidth="4" opacity="0.3" strokeLinecap="round"/>
        <ellipse cx="60" cy="35" rx="12" ry="8" fill="currentColor" opacity="0.2"/>
        <path d="M55 27C55 27 50 15 60 15C70 15 65 27 65 27" stroke="currentColor" strokeWidth="3" opacity="0.3" strokeLinecap="round"/>
        <circle cx="45" cy="60" r="5" fill="currentColor" opacity="0.25"/>
        <circle cx="70" cy="55" r="4" fill="currentColor" opacity="0.25"/>
        <circle cx="55" cy="70" r="3" fill="currentColor" opacity="0.25"/>
        <circle cx="75" cy="68" r="4" fill="currentColor" opacity="0.25"/>
      </svg>
    ),
  },
  {
    name: 'Technology',
    slug: 'technology',
    tagline: 'Fueled by innovation, where fast-paced change is the norm.',
    description: 'R&D tax credits, stock option planning, and SaaS revenue recognition.',
    color: '#8b5cf6',
    lightColor: '#ede9fe',
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <rect x="20" y="25" width="80" height="55" rx="8" stroke="currentColor" strokeWidth="4" opacity="0.3"/>
        <rect x="30" y="35" width="25" height="8" rx="2" fill="currentColor" opacity="0.25"/>
        <rect x="30" y="48" width="40" height="6" rx="2" fill="currentColor" opacity="0.2"/>
        <rect x="30" y="58" width="35" height="6" rx="2" fill="currentColor" opacity="0.2"/>
        <circle cx="82" cy="50" r="12" fill="currentColor" opacity="0.15"/>
        <path d="M78 50L82 54L88 46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
        <rect x="45" y="80" width="30" height="8" rx="2" fill="currentColor" opacity="0.2"/>
        <rect x="35" y="88" width="50" height="12" rx="4" fill="currentColor" opacity="0.15"/>
        <circle cx="25" cy="15" r="5" fill="currentColor" opacity="0.2"/>
        <circle cx="95" cy="20" r="8" fill="currentColor" opacity="0.15"/>
        <circle cx="100" cy="85" r="6" fill="currentColor" opacity="0.1"/>
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    tagline: 'Navigating complexity and operational challenges.',
    description: 'Practice valuations, compliance support, and retirement planning.',
    color: '#14b8a6',
    lightColor: '#ccfbf1',
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <circle cx="60" cy="55" r="35" stroke="currentColor" strokeWidth="4" opacity="0.2"/>
        <rect x="52" y="35" width="16" height="40" rx="3" fill="currentColor" opacity="0.3"/>
        <rect x="40" y="47" width="40" height="16" rx="3" fill="currentColor" opacity="0.3"/>
        <path d="M35 95C35 95 45 85 60 85C75 85 85 95 85 95" stroke="currentColor" strokeWidth="4" opacity="0.2" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="8" fill="currentColor" opacity="0.15"/>
        <circle cx="90" cy="35" r="6" fill="currentColor" opacity="0.1"/>
        <path d="M20 70L25 75L35 65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.25"/>
      </svg>
    ),
  },
  {
    name: 'B2B Services',
    slug: 'b2b-services',
    tagline: 'Diversifying and becoming more competitive every day.',
    description: 'Entity structuring, partner compensation, and growth strategies.',
    color: '#3b82f6',
    lightColor: '#dbeafe',
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="18" fill="currentColor" opacity="0.2"/>
        <circle cx="40" cy="35" r="8" fill="currentColor" opacity="0.25"/>
        <path d="M28 50C28 50 32 58 40 58C48 58 52 50 52 50" fill="currentColor" opacity="0.2"/>
        <circle cx="80" cy="40" r="18" fill="currentColor" opacity="0.2"/>
        <circle cx="80" cy="35" r="8" fill="currentColor" opacity="0.25"/>
        <path d="M68 50C68 50 72 58 80 58C88 58 92 50 92 50" fill="currentColor" opacity="0.2"/>
        <circle cx="60" cy="80" r="18" fill="currentColor" opacity="0.2"/>
        <circle cx="60" cy="75" r="8" fill="currentColor" opacity="0.25"/>
        <path d="M48 90C48 90 52 98 60 98C68 98 72 90 72 90" fill="currentColor" opacity="0.2"/>
        <path d="M50 50L55 65" stroke="currentColor" strokeWidth="3" opacity="0.2" strokeLinecap="round"/>
        <path d="M70 50L65 65" stroke="currentColor" strokeWidth="3" opacity="0.2" strokeLinecap="round"/>
        <path d="M55 45L65 45" stroke="currentColor" strokeWidth="3" opacity="0.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Life Sciences',
    slug: 'life-sciences',
    tagline: 'Few industries are exploding like life sciences.',
    description: 'R&D credits, grant accounting, IP strategies, and financial planning.',
    color: '#10b981',
    lightColor: '#d1fae5',
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <ellipse cx="60" cy="95" rx="30" ry="10" fill="currentColor" opacity="0.15"/>
        <path d="M50 85V45C50 40 55 35 60 35C65 35 70 40 70 45V85" stroke="currentColor" strokeWidth="4" opacity="0.3"/>
        <circle cx="60" cy="55" r="20" stroke="currentColor" strokeWidth="4" opacity="0.2"/>
        <circle cx="52" cy="50" r="5" fill="currentColor" opacity="0.3"/>
        <circle cx="68" cy="52" r="4" fill="currentColor" opacity="0.25"/>
        <circle cx="58" cy="62" r="6" fill="currentColor" opacity="0.2"/>
        <path d="M40 30C40 30 50 20 60 20C70 20 80 30 80 30" stroke="currentColor" strokeWidth="3" opacity="0.2" strokeLinecap="round"/>
        <circle cx="40" cy="30" r="5" fill="currentColor" opacity="0.2"/>
        <circle cx="80" cy="30" r="5" fill="currentColor" opacity="0.2"/>
      </svg>
    ),
  },
  {
    name: 'High-Income Individuals',
    slug: 'high-income-individuals',
    tagline: 'Complex wealth requires sophisticated strategies.',
    description: 'Personal tax strategy, estate planning, and wealth preservation.',
    color: '#eab308',
    lightColor: '#fef9c3',
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <path d="M60 20L75 50H95L80 70L88 100L60 82L32 100L40 70L25 50H45L60 20Z" fill="currentColor" opacity="0.15"/>
        <path d="M60 30L72 52H88L76 68L82 90L60 76L38 90L44 68L32 52H48L60 30Z" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
        <circle cx="60" cy="58" r="15" fill="currentColor" opacity="0.2"/>
        <path d="M55 55V62M65 55V62M55 58H65" stroke="currentColor" strokeWidth="2" opacity="0.4" strokeLinecap="round"/>
        <circle cx="25" cy="35" r="6" fill="currentColor" opacity="0.1"/>
        <circle cx="95" cy="40" r="4" fill="currentColor" opacity="0.15"/>
        <circle cx="20" cy="80" r="5" fill="currentColor" opacity="0.1"/>
      </svg>
    ),
  }
];

const stats = [
  { value: '8', label: 'Industry Specializations' },
  { value: '20+', label: 'Years Experience' },
  { value: '50', label: 'States Served' },
  { value: '$50M+', label: 'Client Tax Savings' },
];

export default function IndustriesPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <main className="bg-[#fafafa] overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out infinite; animation-delay: -3s; }
        .animate-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }
      `}</style>

      {/* Hero Section - Clean with Illustration Grid */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[#003067] to-[#001a3a] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239bd9e4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating illustrations in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-32 h-32 text-[#9bd9e4]/20 animate-float">
            {industries[3].illustration}
          </div>
          <div className="absolute bottom-[20%] left-[5%] w-28 h-28 text-[#9bd9e4]/15 animate-float-delayed">
            {industries[0].illustration}
          </div>
          <div className="absolute top-[40%] right-[5%] w-24 h-24 text-[#9bd9e4]/10 animate-float">
            {industries[6].illustration}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                {[0,1,2].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#9bd9e4]" style={{ opacity: 1 - i * 0.3 }} />
                ))}
              </div>
              <span className="text-[#9bd9e4] text-sm font-semibold tracking-widest uppercase">
                Industry Expertise
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Your industry.
              <span className="block text-[#9bd9e4] mt-2">Our specialty.</span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-10">
              Every industry has unique tax opportunities and challenges. We bring deep expertise in your sector to maximize savings and minimize risk.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#industries"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#003067] font-semibold rounded-full hover:bg-[#9bd9e4] transition-all duration-300"
              >
                Explore Industries
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid - Illustrated Cards */}
      <section id="industries" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Specialized Knowledge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Deep industry expertise means better strategies, more savings, and fewer surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative block"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="relative h-full bg-white rounded-3xl overflow-hidden transition-all duration-500 border-2 hover:shadow-2xl"
                  style={{
                    borderColor: hoveredIndex === idx ? industry.color : 'transparent',
                    boxShadow: hoveredIndex === idx ? `0 25px 50px -12px ${industry.color}30` : undefined
                  }}
                >
                  {/* Illustration container */}
                  <div
                    className="relative h-40 flex items-center justify-center overflow-hidden transition-colors duration-300"
                    style={{ backgroundColor: hoveredIndex === idx ? industry.lightColor : '#f8fafc' }}
                  >
                    <div
                      className="w-28 h-28 transition-all duration-500"
                      style={{
                        color: industry.color,
                        transform: hoveredIndex === idx ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0)'
                      }}
                    >
                      {industry.illustration}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Color dot */}
                    <div
                      className="w-3 h-3 rounded-full mb-4 transition-transform duration-300"
                      style={{
                        backgroundColor: industry.color,
                        transform: hoveredIndex === idx ? 'scale(1.5)' : 'scale(1)'
                      }}
                    />

                    <h3 className="text-lg font-bold text-[#003067] mb-2">
                      {industry.name}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>

                    <div
                      className="flex items-center gap-2 font-semibold text-sm transition-colors duration-300"
                      style={{ color: industry.color }}
                    >
                      Learn more
                      <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters - With Illustrations */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative illustrations */}
        <div className="absolute top-20 right-10 w-40 h-40 text-gray-100 opacity-50">
          {industries[1].illustration}
        </div>
        <div className="absolute bottom-20 left-10 w-32 h-32 text-gray-100 opacity-50">
          {industries[4].illustration}
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Why It Matters</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-8">
                Generic advice
                <span className="block text-[#9bd9e4]">costs you money.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A CPA who does not understand your industry will miss opportunities that someone with specialized knowledge would catch.
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
                  className="group relative bg-gradient-to-br from-[#003067] to-[#002050] rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#9bd9e4] font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#003067]/5 to-[#9bd9e4]/10">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative illustrations */}
            <div className="absolute -top-8 -right-8 w-32 h-32 text-[#9bd9e4]/10">
              {industries[2].illustration}
            </div>
            <div className="absolute -bottom-8 -left-8 w-28 h-28 text-[#003067]/10">
              {industries[5].illustration}
            </div>

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003067] to-[#9bd9e4] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-4">
                Stay Informed
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Get industry-specific tax insights and strategic tips delivered to your inbox.
              </p>

              {subscribed ? (
                <div className="flex items-center justify-center gap-3 text-emerald-600 font-semibold">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:border-[#9bd9e4] focus:ring-2 focus:ring-[#9bd9e4]/20 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#9bd9e4] hover:text-[#003067] transition-all duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative bg-gradient-to-br from-[#003067] to-[#001a3a] rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 text-white/5">
              {industries[7].illustration}
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 text-white/5">
              {industries[3].illustration}
            </div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don&apos;t see your industry?
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
                We work with businesses across many sectors. Contact us to discover opportunities you might be missing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#003067] font-bold rounded-full hover:bg-[#9bd9e4] transition-colors shadow-lg"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
