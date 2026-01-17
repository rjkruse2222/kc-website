'use client';

import Link from 'next/link';
import NewsletterSection from '../components/NewsletterSection';

export default function ServicesPage() {
  return (
    <main className="bg-[#fafafa]">
      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns { animation: ken-burns 20s ease-out forwards; }
      `}</style>

      {/* Hero - Blue background like industry pages */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
              alt="Business professionals in meeting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/85 to-[#003067]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#9bd9e4]/20 backdrop-blur-sm rounded-full mb-8 border border-[#9bd9e4]/30">
              <div className="w-2.5 h-2.5 bg-[#9bd9e4] rounded-full animate-pulse" />
              <span className="text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase">Our Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Year-Round
              <span className="block text-[#9bd9e4] mt-2">CPA Partnership</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              Your accounting and tax strategy should work as one. We combine proactive tax planning with reliable financial management, giving you clarity and confidence all year long.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#our-services"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg"
              >
                Explore Our Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with Image Cards */}
      <section id="our-services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
              Two ways we help
            </h2>
            <p className="text-gray-600 text-lg">
              We keep it simple. Two core services, each designed to give you
              exactly what you need at your stage of growth.
            </p>
          </div>

          {/* Service Cards with Images */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tax Strategy Card */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[500px]">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                  alt="Tax strategy and planning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003067] via-[#003067]/80 to-[#003067]/40" />
              </div>

              <div className="relative h-full flex flex-col justify-end p-10">
                <div className="inline-block px-3 py-1 bg-[#9bd9e4] text-[#003067] text-xs font-bold rounded-full mb-4 w-fit">
                  Tax Services
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">Tax Strategy</h3>

                <p className="text-white/80 leading-relaxed mb-6">
                  We don&apos;t just file your taxes. We work with you year-round to find opportunities,
                  plan ahead, and make sure you&apos;re never surprised. Think of us as your tax partner,
                  not just your preparer.
                </p>

                {/* Key benefits */}
                <div className="space-y-2 mb-8">
                  {[
                    'Quarterly check-ins, not just annual filings',
                    'Proactive strategies tailored to your situation',
                    'Clear communication, no jargon'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#9bd9e4] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/90 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services/tax-strategy"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-all duration-300 w-fit"
                >
                  Learn about Tax Strategy
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Client Accounting Card */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[500px]">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Financial reporting and analytics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003067] via-[#003067]/80 to-[#003067]/40" />
              </div>

              <div className="relative h-full flex flex-col justify-end p-10">
                <div className="inline-block px-3 py-1 bg-[#9bd9e4] text-[#003067] text-xs font-bold rounded-full mb-4 w-fit">
                  Accounting Services
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">Client Accounting</h3>

                <p className="text-white/80 leading-relaxed mb-6">
                  From bookkeeping basics to full CFO support, we offer flexible packages
                  that match where your business is right now. Start with what you need,
                  and add more as you grow.
                </p>

                {/* Tier preview */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30">
                    Essential
                  </span>
                  <span className="px-4 py-2 bg-[#9bd9e4] rounded-full text-sm font-medium text-[#003067]">
                    Growth
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30">
                    Enterprise
                  </span>
                </div>

                <Link
                  href="/services/client-accounting"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-all duration-300 w-fit"
                >
                  View Packages
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Lifecycle Graphic */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img
                src="/images/services-lifecycle.svg"
                alt="Year-Round CPA Partnership cycle showing Tax Filings, Strategy, Outsourced Accounting, Business Forecasting, and more"
                className="w-full h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Together Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Why Both?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-8">
                Your finances,<br />
                <span className="text-[#9bd9e4]">working together.</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                When your tax strategy and accounting live under one roof, good things happen.
                We see the full picture, catch opportunities early, and help you make better decisions.
                No more coordination headaches between different firms.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Real-time visibility', desc: 'We know your numbers, so we can plan proactively' },
                  { title: 'Seamless coordination', desc: 'One team, one strategy, zero gaps' },
                  { title: 'Year-round partnership', desc: "We're here whenever you have questions" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#9bd9e4]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#003067]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003067] mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats box */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#003067] to-[#004a8f] rounded-3xl p-12 text-center">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: '20', label: 'Years serving Cincinnati' },
                    { value: '12+', label: 'Check-ins per year' },
                    { value: '$50M', label: 'Client revenue sweet spot' },
                    { value: '100%', label: 'Financial visibility' },
                  ].map((stat, idx) => (
                    <div key={idx} className="p-4">
                      <div className="text-4xl md:text-5xl font-bold text-[#9bd9e4] mb-2">{stat.value}</div>
                      <div className="text-white/70 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#9bd9e4]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#003067]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection variant="light" />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-[#003067] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Soft decorative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9bd9e4]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9bd9e4]/5 rounded-full blur-2xl" />

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s talk about<br />your business.
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                No pressure, no sales pitch. Just a conversation about where you are,
                where you want to go, and how we might help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-colors"
              >
                Schedule a Conversation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
