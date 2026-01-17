'use client';

import Link from 'next/link';
import { useState } from 'react';

const industries = [
  {
    name: 'Real Estate, Construction & Trades',
    slug: 'real-estate-construction',
    tagline: 'We know how fast-paced the real estate, construction, and trades industries are.',
    description: 'Cost segregation, 1031 exchanges, REPS status optimization, and project-based accounting.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    color: '#f59e0b',
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    tagline: 'The business of making things generates uniquely challenging environments.',
    description: 'R&D tax credits, equipment depreciation, inventory accounting, and cost optimization.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    color: '#64748b',
  },
  {
    name: 'Food & Beverage',
    slug: 'food-beverage',
    tagline: 'The perfect recipe of knowledge and service capabilities.',
    description: 'Multi-location accounting, tip credit optimization, and franchise strategies.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    color: '#f43f5e',
  },
  {
    name: 'Technology',
    slug: 'technology',
    tagline: 'Fueled by innovation, where fast-paced change is the norm.',
    description: 'R&D tax credits, stock option planning, and SaaS revenue recognition.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    color: '#8b5cf6',
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    tagline: 'Navigating complexity and operational challenges.',
    description: 'Practice valuations, compliance support, and retirement planning.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    color: '#14b8a6',
  },
  {
    name: 'B2B Services',
    slug: 'b2b-services',
    tagline: 'Diversifying and becoming more competitive every day.',
    description: 'Entity structuring, partner compensation, and growth strategies.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    color: '#3b82f6',
  },
  {
    name: 'Life Sciences',
    slug: 'life-sciences',
    tagline: 'Few industries are exploding like life sciences.',
    description: 'R&D credits, grant accounting, IP strategies, and financial planning.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    color: '#10b981',
  },
  {
    name: 'High-Income Individuals',
    slug: 'high-income-individuals',
    tagline: 'Complex wealth requires sophisticated strategies.',
    description: 'Personal tax strategy, estate planning, and wealth preservation.',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80',
    color: '#eab308',
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
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-out forwards;
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
      `}</style>

      {/* Hero Section - Full-bleed Photography */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Ken Burns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
              alt="Modern office"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003067]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="h-px w-16 bg-[#9bd9e4]" />
              <span className="text-[#9bd9e4] text-sm font-semibold tracking-widest uppercase">
                Industry Expertise
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Deep expertise
              <span className="block text-[#9bd9e4] mt-2">for your industry</span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Every industry has unique tax opportunities. We bring specialized knowledge to maximize your savings and minimize risk.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="#industries"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#003067] font-semibold rounded-full hover:bg-[#9bd9e4] transition-all duration-300 shadow-lg"
              >
                Explore Industries
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Industries Grid - Magazine Style */}
      <section id="industries" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Specializations</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Real expertise means understanding the nuances that make your industry unique.
            </p>
          </div>

          {/* Magazine-style grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, idx) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <img
                  src={industry.image}
                  alt={industry.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hoveredIndex === idx ? 'scale-110' : 'scale-100'}`}
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${hoveredIndex === idx ? 'opacity-100' : 'opacity-80'}`} />

                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                  style={{
                    backgroundColor: industry.color,
                    opacity: hoveredIndex === idx ? 1 : 0,
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div
                    className="w-2 h-2 rounded-full mb-3 transition-transform duration-300"
                    style={{
                      backgroundColor: industry.color,
                      transform: hoveredIndex === idx ? 'scale(1.5)' : 'scale(1)',
                    }}
                  />

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#9bd9e4] transition-colors">
                    {industry.name}
                  </h3>

                  <p className={`text-white/70 text-sm leading-relaxed transition-all duration-300 ${hoveredIndex === idx ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`}>
                    {industry.description}
                  </p>

                  <div className={`flex items-center gap-2 text-white font-medium text-sm mt-3 transition-all duration-300 ${hoveredIndex === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Photo Background */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="Business meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">By The Numbers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Proven Results
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-7xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-[#9bd9e4] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Expertise Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80"
                      alt="Team collaboration"
                      className="w-full aspect-[4/5] object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80"
                      alt="Analysis"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&q=80"
                      alt="Strategy session"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&q=80"
                      alt="Business planning"
                      className="w-full aspect-[4/5] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="text-3xl font-bold text-[#003067]">20+</div>
                <div className="text-gray-600 text-sm">Years of expertise</div>
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl">
            <div className="w-20 h-20 rounded-full bg-[#003067] flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Get industry-specific insights, tax updates, and strategic tips delivered straight to your inbox.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-3 text-emerald-600 font-semibold py-4">
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
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#003067]/90" />
            </div>

            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don&apos;t see your industry?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
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
