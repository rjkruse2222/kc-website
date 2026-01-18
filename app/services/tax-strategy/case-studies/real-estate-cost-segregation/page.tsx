'use client';

import Link from 'next/link';

export default function RealEstateCaseStudyPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Bar */}
      <div className="bg-[#003067] py-4">
        <div className="max-w-7xl mx-auto px-8">
          <Link href="/services/tax-strategy" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tax Strategy
          </Link>
        </div>
      </div>

      {/* Whitepaper Header */}
      <div className="border-b-4 border-[#003067]">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-[#9bd9e4] text-[#003067] text-xs font-bold uppercase tracking-wider">Case Study</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">Real Estate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#003067] leading-tight mb-4">
            Cost Segregation Study Accelerates Depreciation for Property Investor
          </h1>
          <p className="text-xl text-gray-600">
            How reclassifying building components unlocked $64,000 in immediate tax savings through accelerated depreciation.
          </p>
        </div>
      </div>

      {/* Whitepaper Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Executive Summary */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003067] mb-4 pb-2 border-b-2 border-[#9bd9e4]">Executive Summary</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A real estate investor who recently purchased a commercial building was depreciating the entire property over 39 years. A cost segregation study identified building components that could be depreciated over 5, 7, and 15 years instead, generating significant immediate tax savings through accelerated depreciation and bonus depreciation.
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                [Detailed executive summary to be provided by client]
              </p>
            </section>

            {/* The Challenge */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003067] mb-4 pb-2 border-b-2 border-[#9bd9e4]">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The client, a property investor, was missing depreciation opportunities:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#003067] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Entire building being depreciated over 39 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#003067] rounded-full mt-2 flex-shrink-0"></span>
                  <span>No analysis of shorter-life building components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#003067] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Missing opportunity for bonus depreciation on qualifying assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#003067] rounded-full mt-2 flex-shrink-0"></span>
                  <span>[Additional challenges to be provided]</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed italic">
                [Detailed challenge description to be provided by client]
              </p>
            </section>

            {/* Our Approach */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003067] mb-4 pb-2 border-b-2 border-[#9bd9e4]">Our Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We coordinated a comprehensive cost segregation study with qualified engineering professionals:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[#003067] mb-3">Phase 1: Property Analysis</h3>
                <p className="text-gray-700">
                  Reviewed purchase documents, appraisals, and construction records to understand the property&apos;s components and costs.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[#003067] mb-3">Phase 2: Engineering Study</h3>
                <p className="text-gray-700">
                  Conducted detailed engineering analysis to identify and value building components eligible for shorter depreciation lives (5, 7, and 15 years).
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[#003067] mb-3">Phase 3: Tax Impact Analysis</h3>
                <p className="text-gray-700">
                  Calculated the tax impact of reclassifying assets, including application of bonus depreciation to qualifying property.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[#003067] mb-3">Phase 4: Implementation</h3>
                <p className="text-gray-700">
                  Prepared required documentation and adjusted depreciation schedules. Filed Form 3115 to change accounting method for prior year properties.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed italic">
                [Detailed approach to be provided by client]
              </p>
            </section>

            {/* The Results */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003067] mb-4 pb-2 border-b-2 border-[#9bd9e4]">The Results</h2>
              <div className="bg-[#003067] text-white rounded-lg p-8 mb-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-[#9bd9e4] mb-2">$64K</div>
                    <div className="text-white/80 text-sm">First-Year Tax Savings</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#9bd9e4] mb-2">XX%</div>
                    <div className="text-white/80 text-sm">Of Building Reclassified</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#9bd9e4] mb-2">$XXK</div>
                    <div className="text-white/80 text-sm">Accelerated Depreciation</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                [Detailed results to be provided by client]
              </p>
            </section>

            {/* Key Takeaways */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003067] mb-4 pb-2 border-b-2 border-[#9bd9e4]">Key Takeaways</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#9bd9e4]/10 rounded-lg">
                  <div className="w-8 h-8 bg-[#003067] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p className="text-gray-700">
                    Cost segregation can significantly accelerate tax deductions for property owners.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#9bd9e4]/10 rounded-lg">
                  <div className="w-8 h-8 bg-[#003067] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p className="text-gray-700">
                    Studies can be performed on existing properties, not just new acquisitions.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#9bd9e4]/10 rounded-lg">
                  <div className="w-8 h-8 bg-[#003067] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p className="text-gray-700">
                    Bonus depreciation rules make cost segregation even more valuable for recent purchases.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Quick Facts */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#003067] mb-4 text-lg">Quick Facts</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Industry</dt>
                    <dd className="text-[#003067] font-semibold">Real Estate</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Property Type</dt>
                    <dd className="text-[#003067] font-semibold">[To be provided]</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Tax Savings</dt>
                    <dd className="text-[#003067] font-semibold text-2xl">$64,000</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Strategy Used</dt>
                    <dd className="text-[#003067] font-semibold">Cost Segregation + Bonus Depreciation</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Timeline</dt>
                    <dd className="text-[#003067] font-semibold">[To be provided]</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="bg-[#003067] rounded-xl p-6 text-center">
                <h3 className="font-bold text-white mb-3">Own commercial property?</h3>
                <p className="text-white/80 text-sm mb-4">
                  A cost segregation study could unlock significant tax savings. Let&apos;s find out.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-colors text-sm"
                >
                  Schedule Review
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Related Case Studies */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#003067] mb-4 text-lg">Related Case Studies</h3>
                <div className="space-y-4">
                  <Link href="/services/tax-strategy/case-studies/manufacturing-entity-restructure" className="block group">
                    <div className="text-sm font-medium text-[#003067] group-hover:text-[#9bd9e4] transition-colors">Entity Restructuring Saves $127K</div>
                    <div className="text-xs text-gray-500">Manufacturing • $127,000 saved</div>
                  </Link>
                  <Link href="/services/tax-strategy/case-studies/technology-rd-credits" className="block group">
                    <div className="text-sm font-medium text-[#003067] group-hover:text-[#9bd9e4] transition-colors">R&D Credits Recovered for Software Firm</div>
                    <div className="text-xs text-gray-500">Technology • $89,000 saved</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative bg-gradient-to-br from-[#003067] to-[#002050] rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9bd9e4]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9bd9e4]/10 rounded-full blur-2xl" />

            <div className="relative text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                <svg className="w-8 h-8 text-[#9bd9e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Informed
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-lg mx-auto">
                Get tax strategies and insights delivered to your inbox. No spam, just valuable content.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent transition-all backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#9bd9e4] text-[#003067] font-bold rounded-xl hover:bg-white transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-sm text-white/50 mt-6">
                Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-[#003067] mb-4">Ready to explore your options?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every property is unique. Let&apos;s discuss how cost segregation could benefit your real estate investments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#002050] transition-colors"
          >
            Schedule Your Complimentary Review
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
