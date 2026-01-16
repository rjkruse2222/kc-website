'use client';

import Link from 'next/link';
import { useState } from 'react';

const industries = [
  {
    name: 'Real Estate & Construction',
    slug: 'real-estate-construction',
    tagline: 'We know how fast-paced the real estate and construction industries are.',
    description: 'Cost segregation, 1031 exchanges, REPS status optimization, and project-based accounting.',
    number: '01',
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    tagline: 'The business of making things generates uniquely challenging environments.',
    description: 'R&D tax credits, equipment depreciation, inventory accounting, and cost optimization.',
    number: '02',
  },
  {
    name: 'Food & Beverage',
    slug: 'food-beverage',
    tagline: 'The perfect recipe of knowledge and service capabilities.',
    description: 'Multi-location accounting, tip credit optimization, and franchise strategies.',
    number: '03',
  },
  {
    name: 'Technology',
    slug: 'technology',
    tagline: 'Fueled by innovation, where fast-paced change is the norm.',
    description: 'R&D tax credits, stock option planning, and SaaS revenue recognition.',
    number: '04',
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    tagline: 'Navigating complexity and operational challenges.',
    description: 'Practice valuations, compliance support, and retirement planning.',
    number: '05',
  },
  {
    name: 'B2B Services',
    slug: 'b2b-services',
    tagline: 'Diversifying and becoming more competitive every day.',
    description: 'Entity structuring, partner compensation, and growth strategies.',
    number: '06',
  },
  {
    name: 'Life Sciences',
    slug: 'life-sciences',
    tagline: 'Few industries are exploding like life sciences.',
    description: 'R&D credits, grant accounting, IP strategies, and financial planning.',
    number: '07',
  },
  {
    name: 'High-Income Individuals',
    slug: 'high-income-individuals',
    tagline: 'Complex wealth requires sophisticated strategies.',
    description: 'Personal tax strategy, estate planning, and wealth preservation.',
    number: '08',
  }
];

const stats = [
  { value: '8', label: 'Industries' },
  { value: '20+', label: 'Years' },
  { value: '50', label: 'States' },
  { value: '$50M+', label: 'Saved' },
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
    <main className="bg-white overflow-hidden">
      <style jsx>{`
        @keyframes line-grow {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-line-grow {
          animation: line-grow 1s ease-out forwards;
          transform-origin: left;
        }
      `}</style>

      {/* Hero Section - Editorial Minimal */}
      <section className="relative min-h-screen flex items-center">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gray-100" />
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-100" />
          <div className="absolute left-[90%] top-0 bottom-0 w-px bg-gray-100" />
        </div>

        <div className="max-w-7xl mx-auto px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-4 mb-12">
                <span className="text-[#9bd9e4] text-sm font-mono tracking-widest uppercase">
                  Industry Expertise
                </span>
                <div className="h-px w-24 bg-[#9bd9e4] animate-line-grow" />
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#003067] leading-[0.95] mb-8 tracking-tight">
                Your
                <span className="block font-bold">industry.</span>
                <span className="block text-[#9bd9e4] font-bold">Our specialty.</span>
              </h1>

              <p className="text-xl text-gray-500 leading-relaxed max-w-md mb-12 font-light">
                Every industry has unique opportunities. We bring specialized knowledge to maximize your savings.
              </p>

              <Link
                href="#industries"
                className="group inline-flex items-center gap-4 text-[#003067] font-medium"
              >
                <span className="relative">
                  Explore
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#003067] transform origin-left transition-transform group-hover:scale-x-150" />
                </span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats column */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-12">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-7xl font-light text-[#003067] mb-2 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest font-mono">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-gray-300">
            <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent" />
          </div>
        </div>
      </section>

      {/* Industries List - Editorial Style */}
      <section id="industries" className="py-32 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-20">
            <span className="text-[#9bd9e4] text-sm font-mono tracking-widest uppercase">Our Focus</span>
            <h2 className="text-5xl md:text-6xl font-light text-[#003067] mt-4 tracking-tight">
              Industries
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {industries.map((industry, idx) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block py-12 first:pt-0"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="text-[#9bd9e4] font-mono text-sm tracking-wider">
                      {industry.number}
                    </span>
                  </div>

                  {/* Name & Tagline */}
                  <div className="md:col-span-6">
                    <h3 className="text-3xl md:text-4xl font-light text-[#003067] mb-3 tracking-tight group-hover:text-[#9bd9e4] transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-gray-400 italic">
                      {industry.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-1 flex justify-end">
                    <svg
                      className={`w-6 h-6 text-[#003067] transition-all duration-300 ${hoveredIndex === idx ? 'translate-x-2 text-[#9bd9e4]' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Progress line on hover */}
                <div className="mt-8 h-px bg-gray-200 overflow-hidden">
                  <div
                    className={`h-full bg-[#9bd9e4] transition-transform duration-500 ease-out ${hoveredIndex === idx ? 'translate-x-0' : '-translate-x-full'}`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters - Clean Two Column */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-[#9bd9e4] text-sm font-mono tracking-widest uppercase">The Difference</span>
              <h2 className="text-5xl md:text-6xl font-light text-[#003067] mt-4 mb-8 tracking-tight leading-[1.1]">
                Generic advice
                <span className="block font-bold text-[#9bd9e4]">costs you money.</span>
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                A CPA who does not understand your industry will miss opportunities that specialized knowledge would catch. Tax laws, deductions, and strategies vary significantly by sector.
              </p>
              <p className="text-gray-500 leading-relaxed mb-12">
                We invest the time to understand the unique aspects of your business. This deep knowledge translates directly into tax savings and better financial decisions.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-[#003067] font-medium self-start"
              >
                <span className="relative">
                  Discuss your industry
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#003067] transform origin-left transition-transform group-hover:scale-x-125" />
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats (shown on smaller screens) */}
      <section className="py-20 bg-[#003067] lg:hidden">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-light text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#9bd9e4] uppercase tracking-widest font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Clean */}
      <section className="py-32 bg-[#fafafa]">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <span className="text-[#9bd9e4] text-sm font-mono tracking-widest uppercase">Newsletter</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#003067] mt-4 mb-6 tracking-tight">
            Stay informed
          </h2>
          <p className="text-gray-500 mb-12 font-light">
            Industry-specific insights delivered to your inbox.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-3 text-[#003067]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-light">Thank you for subscribing</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 bg-white border border-gray-200 focus:border-[#003067] outline-none transition-colors font-light"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#003067] text-white font-medium hover:bg-[#9bd9e4] hover:text-[#003067] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA Section - Ultra Minimal */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="border border-gray-200 p-16 md:p-24 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-[#003067] mb-6 tracking-tight">
              Don&apos;t see your industry?
            </h2>
            <p className="text-gray-500 text-lg max-w-md mx-auto mb-12 font-light">
              We work across many sectors. Let&apos;s discuss your specific situation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#003067] text-white font-medium hover:bg-[#9bd9e4] hover:text-[#003067] transition-all duration-300"
            >
              Get in touch
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer spacing line */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="h-px bg-gray-200" />
      </div>
    </main>
  );
}
