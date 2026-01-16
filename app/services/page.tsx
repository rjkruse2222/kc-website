import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Kruse & Crawford CPAs',
  description: 'Year-round CPA partnership offering outsourced accounting and strategic tax services for Cincinnati businesses.',
  keywords: 'Cincinnati CPA services, tax strategy, client accounting, CFO services, bookkeeping Cincinnati',
};

export default function ServicesPage() {
  return (
    <main className="bg-[#fafafa]">
      {/* Hero - Split layout with lifecycle image */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#9bd9e4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-[#003067]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003067] leading-tight mb-6">
                Year-Round
                <span className="block text-[#9bd9e4] mt-2">CPA Partnership</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg mx-auto">
                Your accounting and tax strategy should work as one. We combine proactive tax planning with reliable financial management, giving you clarity and confidence to make smarter business decisions all year long.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#our-services"
                  className="group px-8 py-4 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#9bd9e4] hover:text-[#003067] transition-all duration-300 hover:shadow-lg"
                >
                  Explore Our Services
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-[#003067] text-[#003067] font-semibold rounded-full hover:bg-[#003067] hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right: Lifecycle Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img
                  src="/images/services-lifecycle.svg"
                  alt="Year-Round CPA Partnership cycle showing Tax Filings, Strategy, Outsourced Accounting, Business Forecasting, and more"
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#003067]/40">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#003067]/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Services Overview - Cards with personality */}
      <section id="our-services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
              Two ways we help
            </h2>
            <p className="text-gray-600 text-lg">
              We keep it simple. Two core services, each one designed to give you
              exactly what you need at your stage of growth.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tax Strategy Card */}
            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              {/* Top accent bar */}
              <div className="h-2 bg-gradient-to-r from-[#003067] to-[#004a8f]" />

              <div className="p-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#003067] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-[#003067] mb-4">Tax Strategy</h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  We don&apos;t just file your taxes. We work with you year-round to find opportunities,
                  plan ahead, and make sure you&apos;re never surprised. Think of us as your tax partner,
                  not just your preparer.
                </p>

                {/* Key benefits */}
                <div className="space-y-3 mb-8">
                  {[
                    'Quarterly check-ins, not just annual filings',
                    'Proactive strategies tailored to your situation',
                    'Clear communication, no jargon'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#9bd9e4] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services/tax-strategy"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#9bd9e4] hover:text-[#003067] transition-all duration-300"
                >
                  Learn about Tax Strategy
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#003067]/5 rounded-bl-full" />
            </div>

            {/* Client Accounting Card */}
            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              {/* Top accent bar */}
              <div className="h-2 bg-gradient-to-r from-[#9bd9e4] to-[#7bc4d0]" />

              <div className="p-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#9bd9e4] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#003067]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-[#003067] mb-4">Client Accounting</h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  From bookkeeping basics to full CFO support, we offer flexible packages
                  that match where your business is right now. Start with what you need,
                  and add more as you grow.
                </p>

                {/* Tier preview - friendly pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-[#003067] hover:text-white transition-colors cursor-pointer">
                    Essential
                  </span>
                  <span className="px-4 py-2 bg-[#003067] rounded-full text-sm font-medium text-white">
                    Growth
                  </span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-[#003067] hover:text-white transition-colors cursor-pointer">
                    Enterprise
                  </span>
                </div>

                <Link
                  href="/services/client-accounting"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-[#003067] hover:text-white transition-all duration-300"
                >
                  View Packages
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9bd9e4]/10 rounded-bl-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Together Section - Warm testimonial feel */}
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

            {/* Stats in warm style */}
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

      {/* CTA - Warm and inviting */}
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
