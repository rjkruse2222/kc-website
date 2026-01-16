'use client';

import Link from 'next/link';
import { useState } from 'react';

const industries = [
  {
    name: 'Real Estate & Construction',
    slug: 'real-estate-construction',
    tagline: 'We know how fast-paced the real estate and construction industries are.',
    description: 'Cost segregation, 1031 exchanges, REPS status optimization, and project-based accounting for developers, investors, and contractors.',
    gradient: 'from-amber-400 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    tagline: 'The business of making things never fails to generate uniquely challenging environments.',
    description: 'R&D tax credits, equipment depreciation strategies, inventory accounting, and cost optimization for manufacturers of all sizes.',
    gradient: 'from-slate-400 to-zinc-600',
    bgGradient: 'from-slate-50 to-zinc-50',
  },
  {
    name: 'Food & Beverage',
    slug: 'food-beverage',
    tagline: 'We have the perfect recipe of knowledge and service capabilities.',
    description: 'Multi-location accounting, tip credit optimization, inventory management, and franchise financial strategies.',
    gradient: 'from-rose-400 to-red-500',
    bgGradient: 'from-rose-50 to-red-50',
  },
  {
    name: 'Technology',
    slug: 'technology',
    tagline: 'Fueled by innovation, the technology industry is one where fast-paced change is the norm.',
    description: 'R&D tax credits, stock option planning, SaaS revenue recognition, and growth-stage financial strategy.',
    gradient: 'from-violet-400 to-purple-600',
    bgGradient: 'from-violet-50 to-purple-50',
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    tagline: 'The healthcare industry is rife with complexity and operational challenges.',
    description: 'Practice valuations, compliance support, retirement planning, and tax strategy for medical practices.',
    gradient: 'from-teal-400 to-cyan-500',
    bgGradient: 'from-teal-50 to-cyan-50',
  },
  {
    name: 'B2B Services',
    slug: 'b2b-services',
    tagline: 'The B2B services industry continues to diversify and become more competitive.',
    description: 'Entity structuring, partner compensation planning, and growth strategies for professional service firms.',
    gradient: 'from-blue-400 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    name: 'Life Sciences',
    slug: 'life-sciences',
    tagline: 'Few industries are exploding in the U.S. today like the life sciences.',
    description: 'R&D tax credits, grant accounting, IP strategies, and financial planning for biotech and pharma.',
    gradient: 'from-emerald-400 to-green-600',
    bgGradient: 'from-emerald-50 to-green-50',
  },
  {
    name: 'High-Income Individuals',
    slug: 'high-income-individuals',
    tagline: 'Complex wealth requires sophisticated strategies.',
    description: 'Personal tax strategy, estate planning, investment tax optimization, and wealth preservation.',
    gradient: 'from-yellow-400 to-amber-500',
    bgGradient: 'from-yellow-50 to-amber-50',
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <main className="bg-[#fafafa] overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(3deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-3deg); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float 8s ease-in-out infinite; animation-delay: -4s; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
        .animate-morph { animation: morph 12s ease-in-out infinite; }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>

      {/* Hero Section - Organic Abstract */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003067] via-[#002855] to-[#9bd9e4]/30" />

        {/* Large morphing shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary blob */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#9bd9e4]/40 to-[#9bd9e4]/10 animate-morph animate-float" />

          {/* Secondary blob */}
          <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-gradient-to-tr from-white/10 to-[#9bd9e4]/20 animate-morph animate-float-delayed" style={{ animationDelay: '-3s' }} />

          {/* Small floating circles */}
          <div className="absolute top-[20%] left-[15%] w-24 h-24 rounded-full bg-white/10 animate-float" />
          <div className="absolute top-[60%] right-[20%] w-16 h-16 rounded-full bg-[#9bd9e4]/30 animate-float-reverse" />
          <div className="absolute bottom-[15%] left-[30%] w-20 h-20 rounded-full bg-white/5 animate-float-delayed" />

          {/* Gradient orbs */}
          <div className="absolute top-[30%] right-[35%] w-32 h-32 rounded-full bg-gradient-to-br from-[#9bd9e4]/30 to-transparent blur-2xl animate-float" />
          <div className="absolute bottom-[25%] left-[10%] w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl animate-float-reverse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#9bd9e4] animate-pulse" />
              <span className="text-[#9bd9e4] text-sm font-semibold tracking-widest uppercase">
                Industry Expertise
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Your industry.
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-[#9bd9e4] to-white bg-clip-text text-transparent">
                  Our specialty.
                </span>
              </span>
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
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafafa"/>
          </svg>
        </div>
      </section>

      {/* Industries Grid - Fluid Cards */}
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
              >
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent">
                  {/* Gradient header bar */}
                  <div className={`h-2 bg-gradient-to-r ${industry.gradient}`} />

                  {/* Hover background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Floating shape on hover */}
                  <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 group-hover:scale-150`} />

                  <div className="relative p-6 h-full flex flex-col min-h-[280px]">
                    {/* Color dot */}
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${industry.gradient} mb-4`} />

                    <h3 className="text-xl font-bold text-[#003067] mb-3 group-hover:text-[#003067] transition-colors">
                      {industry.name}
                    </h3>

                    <p className="text-gray-500 text-sm italic mb-3">
                      {industry.tagline}
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {industry.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#003067] font-semibold text-sm mt-4 pt-4 border-t border-gray-100">
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

      {/* Why Industry Expertise Matters - Abstract Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#9bd9e4]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#003067]/5 to-transparent rounded-full blur-3xl" />
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
                  className="group relative bg-gradient-to-br from-[#fafafa] to-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100"
                >
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003067] to-[#9bd9e4] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#003067] to-[#9bd9e4] bg-clip-text text-transparent mb-3">
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

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003067]/5 to-[#9bd9e4]/10" />

        {/* Floating shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full bg-[#9bd9e4]/20 animate-float" />
          <div className="absolute bottom-1/4 right-[15%] w-24 h-24 rounded-full bg-[#003067]/10 animate-float-delayed" />
        </div>

        <div className="relative max-w-3xl mx-auto px-8 text-center">
          <div className="bg-white rounded-[2rem] p-12 md:p-16 shadow-xl border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003067] to-[#9bd9e4] flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-4">
              Stay Informed
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Get industry-specific tax insights, deadline reminders, and strategic tips delivered to your inbox.
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
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative bg-gradient-to-br from-[#003067] to-[#002050] rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9bd9e4]/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float-delayed" />

            {/* Gradient line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9bd9e4]/30 to-transparent" />

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
