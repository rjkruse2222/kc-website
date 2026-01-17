'use client';

import Link from 'next/link';

export default function ManufacturingCaseStudyPage() {
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
            <span className="text-gray-600 text-sm">Manufacturing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#003067] leading-tight mb-4">
            Entity Restructuring Saves Manufacturing Company $127,000
          </h1>
          <p className="text-xl text-gray-600">
            How strategic S-Corp election and compensation planning transformed a growing manufacturer&apos;s tax situation.
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
                A growing manufacturing company operating as a sole proprietorship was paying excessive self-employment taxes on their business income. After analyzing their situation, we implemented an S-Corporation election combined with a reasonable compensation strategy, resulting in first-year tax savings of $127,000.
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                [Detailed executive summary to be provided by client]
              </p>
            </section>

            {/* The Challenge */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003067] mb-4 pb-2 border-b-2 border-[#9bd9e4]">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The client, a successful manufacturing business owner, faced several tax challenges:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#003067] rounded-full mt-2 flex-shrink-0"></span>
                  <span>All business income was subject to self-employment tax (15.3%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#003067] rounded-full mt-2 flex-shrink-0"></span>
                  <span>No distinction between active income and return on capital</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#003067] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Limited retirement plan contribution options</span>
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
                We conducted a comprehensive analysis of the client&apos;s business operations, income patterns, and long-term goals. Our recommended strategy included:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[#003067] mb-3">Phase 1: Entity Analysis</h3>
                <p className="text-gray-700">
                  Evaluated the tax implications of various entity structures including S-Corporation, C-Corporation, and maintaining sole proprietorship status.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[#003067] mb-3">Phase 2: S-Corp Election</h3>
                <p className="text-gray-700">
                  Implemented S-Corporation election with proper documentation and compliance procedures.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[#003067] mb-3">Phase 3: Compensation Planning</h3>
                <p className="text-gray-700">
                  Established reasonable compensation based on industry benchmarks and IRS guidelines, balancing tax efficiency with compliance requirements.
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
                    <div className="text-4xl font-bold text-[#9bd9e4] mb-2">$127K</div>
                    <div className="text-white/80 text-sm">First-Year Tax Savings</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#9bd9e4] mb-2">15%</div>
                    <div className="text-white/80 text-sm">Reduction in Effective Tax Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#9bd9e4] mb-2">$XXK</div>
                    <div className="text-white/80 text-sm">Annual Ongoing Savings</div>
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
                    Entity structure significantly impacts tax liability for profitable businesses.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#9bd9e4]/10 rounded-lg">
                  <div className="w-8 h-8 bg-[#003067] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p className="text-gray-700">
                    Reasonable compensation planning requires careful analysis and documentation.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#9bd9e4]/10 rounded-lg">
                  <div className="w-8 h-8 bg-[#003067] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p className="text-gray-700">
                    Proactive tax planning creates opportunities that reactive filing cannot capture.
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
                    <dd className="text-[#003067] font-semibold">Manufacturing</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Company Size</dt>
                    <dd className="text-[#003067] font-semibold">[To be provided]</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Tax Savings</dt>
                    <dd className="text-[#003067] font-semibold text-2xl">$127,000</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Strategy Used</dt>
                    <dd className="text-[#003067] font-semibold">S-Corp Election + Compensation Planning</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Timeline</dt>
                    <dd className="text-[#003067] font-semibold">[To be provided]</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="bg-[#003067] rounded-xl p-6 text-center">
                <h3 className="font-bold text-white mb-3">Could this work for you?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Schedule a complimentary review to see if entity restructuring could reduce your tax burden.
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
                  <Link href="/services/tax-strategy/case-studies/technology-rd-credits" className="block group">
                    <div className="text-sm font-medium text-[#003067] group-hover:text-[#9bd9e4] transition-colors">R&D Credits Recovered for Software Firm</div>
                    <div className="text-xs text-gray-500">Technology • $89,000 saved</div>
                  </Link>
                  <Link href="/services/tax-strategy/case-studies/real-estate-cost-segregation" className="block group">
                    <div className="text-sm font-medium text-[#003067] group-hover:text-[#9bd9e4] transition-colors">Cost Segregation Accelerates Depreciation</div>
                    <div className="text-xs text-gray-500">Real Estate • $64,000 saved</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-[#003067] mb-4">Ready to explore your options?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every business situation is unique. Let&apos;s discuss how strategic tax planning could benefit your company.
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
