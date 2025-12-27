import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Kruse & Crawford CPAs',
  description: 'Comprehensive tax strategy and client accounting services for growing businesses. From proactive tax planning to full CFO services.',
  keywords: 'Cincinnati CPA services, tax strategy, client accounting, CFO services, bookkeeping Cincinnati',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-[#003067] via-[#003067] to-[#002050]">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#9bd9e4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#9bd9e4]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-[#9bd9e4]/20 border border-white/20 mb-8">
            <span className="text-[#9bd9e4] text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide uppercase">
            Two Core Services.<br />
            <span className="font-semibold">Maximum Impact.</span>
          </h1>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We focus on what matters most to growing businesses: keeping more of what you earn
            and maintaining financial clarity. Our integrated approach means your tax strategy
            and accounting work together seamlessly.
          </p>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* Tax Strategy Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#003067] to-[#002050] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-10 md:p-12">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-[#9bd9e4]/20 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors duration-500">
                  <svg className="w-8 h-8 text-[#003067] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>

                <h2 className="text-3xl font-light text-[#003067] group-hover:text-white mb-4 uppercase tracking-wide transition-colors duration-500">
                  Tax Strategy
                </h2>

                <p className="text-gray-600 group-hover:text-white/80 mb-8 transition-colors duration-500">
                  Proactive tax planning that goes beyond annual filing. We work year-round to minimize your tax burden and maximize your wealth.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    'Year-round tax planning & projections',
                    'Entity structure optimization',
                    'Multi-state tax compliance',
                    'Exit & succession planning'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#9bd9e4] mr-3 mt-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services/tax-strategy"
                  className="inline-flex items-center px-8 py-4 bg-[#003067] group-hover:bg-[#9bd9e4] text-white group-hover:text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Client Accounting Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#003067] to-[#002050] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-10 md:p-12">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-[#9bd9e4]/20 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors duration-500">
                  <svg className="w-8 h-8 text-[#003067] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>

                <h2 className="text-3xl font-light text-[#003067] group-hover:text-white mb-4 uppercase tracking-wide transition-colors duration-500">
                  Client Accounting
                </h2>

                <p className="text-gray-600 group-hover:text-white/80 mb-8 transition-colors duration-500">
                  Scalable accounting services from bookkeeping basics to full CFO support. Choose the level that fits your business today and grow from there.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    'Monthly bookkeeping & reconciliations',
                    'Financial statement preparation',
                    'Budget & cash flow management',
                    'CFO-level strategic guidance'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#9bd9e4] mr-3 mt-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services/client-accounting"
                  className="inline-flex items-center px-8 py-4 bg-[#003067] group-hover:bg-[#9bd9e4] text-white group-hover:text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  View Packages
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Both Services Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] uppercase tracking-wide mb-6">
              Better Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When your tax strategy and accounting are integrated, opportunities multiply.
              Real-time financial visibility enables proactive tax decisions throughout the year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: '12+',
                label: 'Tax Planning Touchpoints Per Year',
                desc: 'Not just one annual meeting'
              },
              {
                stat: '100%',
                label: 'Financial Visibility',
                desc: 'Know your numbers in real-time'
              },
              {
                stat: '2005',
                label: 'Serving Cincinnati Since',
                desc: 'Nearly two decades of expertise'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-[#003067] group transition-all duration-500">
                <div className="text-5xl font-light text-[#9bd9e4] mb-4">{item.stat}</div>
                <div className="text-lg font-semibold text-[#003067] group-hover:text-white mb-2 transition-colors duration-500">
                  {item.label}
                </div>
                <div className="text-gray-500 group-hover:text-white/70 transition-colors duration-500">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#003067] via-[#003067] to-[#002050] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9bd9e4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#9bd9e4]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-wide mb-6">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Schedule a consultation to discuss how we can help your business grow.
          </p>
          <a
            href="mailto:info@kruseandcrawford.com?subject=Service%20Inquiry"
            className="inline-flex items-center px-10 py-5 bg-[#9bd9e4] text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
