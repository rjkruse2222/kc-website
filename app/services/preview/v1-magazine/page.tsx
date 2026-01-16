'use client';

import Link from 'next/link';
import NewsletterSection from '../../../components/NewsletterSection';

export default function ServicesPageV1() {
  return (
    <main className="bg-[#fafafa]">
      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-ken-burns { animation: ken-burns 20s ease-out forwards; }
        .animate-fade-up { animation: fade-up 0.8s ease-out forwards; }
      `}</style>

      {/* Hero - Ken Burns Photo Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Ken Burns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
              alt="Professional team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/85 to-[#003067]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left animate-fade-up">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#9bd9e4]" />
                <span className="text-[#9bd9e4] text-sm font-semibold tracking-widest uppercase">Our Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Year-Round
                <span className="block text-[#9bd9e4] mt-2">CPA Partnership</span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Your accounting and tax strategy should work as one. We combine proactive tax planning with reliable financial management.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#our-services"
                  className="group px-8 py-4 bg-white text-[#003067] font-semibold rounded-full hover:bg-[#9bd9e4] transition-all duration-300 shadow-lg"
                >
                  Explore Our Services
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Right: Lifecycle Image */}
            <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full max-w-xl">
                <img
                  src="/images/services-lifecycle.svg"
                  alt="Year-Round CPA Partnership cycle"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Editorial Style - Services */}
      <section id="our-services" className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section intro */}
          <div className="max-w-2xl mb-24">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">What We Offer</span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#003067] mt-4 mb-8 leading-tight">
              Two ways we help you grow.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We keep it simple. Two core services, each designed to give you exactly what you need.
            </p>
          </div>

          {/* Tax Strategy - Full width editorial */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-xl">
              {/* Image side */}
              <div className="relative h-80 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                  alt="Tax strategy planning"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#003067]/80 to-transparent" />
                <div className="absolute bottom-8 left-8 lg:hidden">
                  <span className="text-7xl font-bold text-white/20">01</span>
                </div>
              </div>

              {/* Content side */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <span className="text-8xl font-bold text-[#003067]/10 hidden lg:block mb-4">01</span>
                <h3 className="text-4xl font-bold text-[#003067] mb-6">Tax Strategy</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We don&apos;t just file your taxes. We work with you year-round to find opportunities,
                  plan ahead, and make sure you&apos;re never surprised. Think of us as your tax partner,
                  not just your preparer.
                </p>

                <ul className="space-y-4 mb-10">
                  {['Quarterly check-ins, not just annual filings', 'Proactive strategies tailored to your situation', 'Clear communication, no jargon'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#9bd9e4]" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services/tax-strategy"
                  className="inline-flex items-center gap-3 text-[#003067] font-semibold hover:text-[#9bd9e4] transition-colors group"
                >
                  Learn about Tax Strategy
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Client Accounting - Full width editorial (reversed) */}
          <div>
            <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-xl">
              {/* Content side */}
              <div className="p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                <span className="text-8xl font-bold text-[#9bd9e4]/20 hidden lg:block mb-4">02</span>
                <h3 className="text-4xl font-bold text-[#003067] mb-6">Client Accounting</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  From bookkeeping basics to full CFO support, we offer flexible packages
                  that match where your business is right now. Start with what you need,
                  and add more as you grow.
                </p>

                {/* Tier preview */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {['Essential', 'Growth', 'Enterprise'].map((tier, idx) => (
                    <span
                      key={tier}
                      className={`px-5 py-2 rounded-full text-sm font-medium ${idx === 1 ? 'bg-[#003067] text-white' : 'bg-gray-100 text-gray-700 hover:bg-[#9bd9e4] hover:text-[#003067]'} transition-colors cursor-pointer`}
                    >
                      {tier}
                    </span>
                  ))}
                </div>

                <Link
                  href="/services/client-accounting"
                  className="inline-flex items-center gap-3 text-[#003067] font-semibold hover:text-[#9bd9e4] transition-colors group"
                >
                  View Packages
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Image side */}
              <div className="relative h-80 lg:h-auto order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Client accounting services"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#9bd9e4]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Together - Photo Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1920&q=80"
            alt="Strategic planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Why Both?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
                Your finances,
                <span className="block text-[#9bd9e4]">working together.</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                When your tax strategy and accounting live under one roof, good things happen.
                We see the full picture, catch opportunities early, and help you make better decisions.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Real-time visibility', desc: 'We know your numbers, so we can plan proactively' },
                  { title: 'Seamless coordination', desc: 'One team, one strategy, zero gaps' },
                  { title: 'Year-round partnership', desc: "We're here whenever you have questions" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#9bd9e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '20', label: 'Years serving Cincinnati' },
                { value: '12+', label: 'Check-ins per year' },
                { value: '$50M', label: 'Client revenue sweet spot' },
                { value: '100%', label: 'Financial visibility' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-[#9bd9e4] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection variant="light" />

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#003067]/90" />
            </div>

            <div className="relative p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s talk about your business.
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                No pressure, no sales pitch. Just a conversation about where you are and how we might help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#003067] font-bold rounded-full hover:bg-[#9bd9e4] transition-colors shadow-lg"
              >
                Schedule a Conversation
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
