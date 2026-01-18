'use client';

import Link from 'next/link';

export default function TechnologyCaseStudyPage() {
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
            <span className="text-gray-600 text-sm">Technology</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#003067] leading-tight mb-4">
            R&D Tax Credits Recovered for Software Development Firm
          </h1>
          <p className="text-xl text-gray-600">
            How identifying qualifying research activities and filing amended returns recovered $89,000 in overlooked credits.
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
                A software development company had been conducting qualifying research and development activities for years without realizing they were eligible for R&D tax credits. After a comprehensive review, we identified qualifying activities, documented the research process, and filed amended returns to recover credits for the prior three tax years.
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                [Detailed executive summary to be provided by client]
              </p>
            </section>

            {/* The Challenge */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003067] mb-4 pb-2 border-b-2 border-[#9bd9e4]">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The client, a growing software company, faced several misconceptions about R&D credits:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#003067] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Believed R&D credits were only for &quot;laboratory research&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#003067] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Thought software development didn&apos;t qualify as &quot;research&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#003067] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Lacked documentation of their development process</span>
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
                We conducted a thorough R&D tax credit study following IRS guidelines and the four-part test:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[#003067] mb-3">Phase 1: Activity Identification</h3>
                <p className="text-gray-700">
                  Interviewed development team members to identify all potentially qualifying activities including new product development, improvements to existing software, and infrastructure innovations.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[#003067] mb-3">Phase 2: Four-Part Test Analysis</h3>
                <p className="text-gray-700">
                  Evaluated each activity against the IRS four-part test: Permitted Purpose, Technological Uncertainty, Process of Experimentation, and Technological in Nature.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[#003067] mb-3">Phase 3: Documentation & Calculation</h3>
                <p className="text-gray-700">
                  Created contemporaneous documentation and calculated qualified research expenses (QREs) using both the regular and alternative simplified credit methods.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[#003067] mb-3">Phase 4: Amended Return Filing</h3>
                <p className="text-gray-700">
                  Prepared and filed amended returns for the three open tax years to claim previously uncaptured credits.
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
                    <div className="text-4xl font-bold text-[#9bd9e4] mb-2">$89K</div>
                    <div className="text-white/80 text-sm">Total Credits Recovered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#9bd9e4] mb-2">3</div>
                    <div className="text-white/80 text-sm">Years of Amended Returns</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#9bd9e4] mb-2">$XXK</div>
                    <div className="text-white/80 text-sm">Annual Ongoing Credits</div>
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
                    Many software development activities qualify for R&D credits—not just &quot;laboratory research.&quot;
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#9bd9e4]/10 rounded-lg">
                  <div className="w-8 h-8 bg-[#003067] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p className="text-gray-700">
                    Amended returns can recover credits from prior years (generally 3 years back).
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#9bd9e4]/10 rounded-lg">
                  <div className="w-8 h-8 bg-[#003067] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p className="text-gray-700">
                    Proper documentation is essential—establishing a process now creates ongoing credits.
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
                    <dd className="text-[#003067] font-semibold">Technology / Software</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Company Size</dt>
                    <dd className="text-[#003067] font-semibold">[To be provided]</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Credits Recovered</dt>
                    <dd className="text-[#003067] font-semibold text-2xl">$89,000</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Strategy Used</dt>
                    <dd className="text-[#003067] font-semibold">R&D Tax Credits + Amended Returns</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider">Timeline</dt>
                    <dd className="text-[#003067] font-semibold">[To be provided]</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="bg-[#003067] rounded-xl p-6 text-center">
                <h3 className="font-bold text-white mb-3">Are you missing R&D credits?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Many software and technology companies qualify. Let&apos;s find out if you do.
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
            Every business situation is unique. Let&apos;s discuss how R&D tax credits could benefit your company.
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
