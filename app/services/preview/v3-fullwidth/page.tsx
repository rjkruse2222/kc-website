'use client';

import Link from 'next/link';
import NewsletterSection from '../../../components/NewsletterSection';

export default function ServicesPageV3() {
  return (
    <main className="bg-[#fafafa]">
      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes parallax {
          0% { transform: translateY(0); }
          100% { transform: translateY(-30px); }
        }
        .animate-ken-burns { animation: ken-burns 20s ease-out forwards; }
      `}</style>

      {/* Hero - Ken Burns Photo Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
            <div className="text-center lg:text-left">
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
                  href="#tax-strategy"
                  className="group px-8 py-4 bg-white text-[#003067] font-semibold rounded-full hover:bg-[#9bd9e4] transition-all duration-300 shadow-lg"
                >
                  Explore Our Services
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
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

      {/* Service 1: Tax Strategy - Full Width Dramatic */}
      <section id="tax-strategy" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80"
            alt="Tax strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="text-8xl font-bold text-white/10">01</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Tax Strategy
              </h2>

              <p className="text-xl text-white/80 leading-relaxed mb-8">
                We don&apos;t just file your taxes. We work with you year-round to find opportunities,
                plan ahead, and make sure you&apos;re never surprised. Think of us as your tax partner,
                not just your preparer.
              </p>

              <div className="space-y-4 mb-12">
                {[
                  'Quarterly check-ins, not just annual filings',
                  'Proactive strategies tailored to your situation',
                  'Clear communication, no jargon'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#9bd9e4]" />
                    <span className="text-white/90 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services/tax-strategy"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#003067] font-bold rounded-full hover:bg-[#9bd9e4] transition-all duration-300 shadow-lg group"
              >
                Learn About Tax Strategy
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: '12+', label: 'Check-ins per year' },
                    { value: '100%', label: 'Year-round support' },
                    { value: '$0', label: 'Surprise tax bills' },
                    { value: '∞', label: 'Strategic conversations' },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-4">
                      <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-[#9bd9e4] text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Client Accounting - Full Width Dramatic */}
      <section id="client-accounting" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Client accounting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Tiers */}
            <div className="hidden lg:block order-1 lg:order-1">
              <div className="space-y-4">
                {[
                  { name: 'Essential', desc: 'Core bookkeeping & reconciliation', highlight: false },
                  { name: 'Growth', desc: 'Essential + financial reporting & cash flow', highlight: true },
                  { name: 'Enterprise', desc: 'Growth + full CFO advisory support', highlight: false },
                ].map((tier, idx) => (
                  <div
                    key={tier.name}
                    className={`p-8 rounded-2xl transition-all duration-300 ${tier.highlight ? 'bg-white text-[#003067] scale-105 shadow-2xl' : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'}`}
                  >
                    <h4 className={`text-2xl font-bold mb-2 ${tier.highlight ? 'text-[#003067]' : 'text-white'}`}>{tier.name}</h4>
                    <p className={tier.highlight ? 'text-gray-600' : 'text-white/70'}>{tier.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="text-8xl font-bold text-white/10">02</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Client Accounting
              </h2>

              <p className="text-xl text-white/80 leading-relaxed mb-8">
                From bookkeeping basics to full CFO support, we offer flexible packages
                that match where your business is right now. Start with what you need,
                and add more as you grow.
              </p>

              <div className="space-y-4 mb-12">
                {[
                  'Scalable packages that grow with you',
                  'Real-time financial visibility',
                  'Strategic CFO-level insights'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#9bd9e4]" />
                    <span className="text-white/90 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services/client-accounting"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg group"
              >
                View Packages
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Together Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Why Both?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-8">
              Your finances, working together.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              When your tax strategy and accounting live under one roof, good things happen.
              We see the full picture, catch opportunities early, and help you make better decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '👁️', title: 'Real-time visibility', desc: 'We know your numbers, so we can plan proactively' },
              { icon: '🤝', title: 'Seamless coordination', desc: 'One team, one strategy, zero gaps' },
              { icon: '📅', title: 'Year-round partnership', desc: "We're here whenever you have questions" },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-10 bg-[#fafafa] rounded-3xl hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold text-[#003067] mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 bg-[#003067]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '20', label: 'Years serving Cincinnati' },
              { value: '12+', label: 'Check-ins per year' },
              { value: '$50M', label: 'Client revenue sweet spot' },
              { value: '100%', label: 'Financial visibility' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[#9bd9e4]">{stat.label}</div>
              </div>
            ))}
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
