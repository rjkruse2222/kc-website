'use client';

import { useState } from 'react';
import Link from 'next/link';

const challenges = [
  {
    title: 'Complex Depreciation Rules',
    description: 'Real estate depreciation schedules are complex, and many property owners miss opportunities to accelerate deductions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Entity Structure Decisions',
    description: 'Choosing between LLCs, S-Corps, and partnerships significantly impacts your tax liability and liability protection.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  {
    title: 'Capital Gains Exposure',
    description: 'Property sales can trigger significant capital gains taxes without proper planning and timing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Multi-State Compliance',
    description: 'Properties in multiple states create complex nexus and filing requirements that many CPAs overlook.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    )
  }
];

const solutions = [
  {
    title: 'Cost Segregation Studies',
    description: 'Accelerate depreciation by identifying building components that qualify for shorter recovery periods, generating immediate tax savings.',
    savings: 'Up to 40% faster depreciation',
    highlight: true
  },
  {
    title: '1031 Exchange Planning',
    description: 'Defer capital gains taxes by properly structuring like-kind exchanges. We guide you through identification rules and timing requirements.',
    savings: 'Defer 100% of capital gains'
  },
  {
    title: 'REPS Status Optimization',
    description: 'Qualify as a Real Estate Professional to unlock unlimited passive loss deductions against ordinary income.',
    savings: 'Offset W-2 income with RE losses'
  },
  {
    title: 'Entity Structuring',
    description: 'Design the optimal ownership structure for liability protection, tax efficiency, and future exit planning.',
    savings: 'Reduce self-employment tax'
  },
  {
    title: 'Opportunity Zone Investment',
    description: 'Leverage Qualified Opportunity Zones for capital gains deferral and potential tax-free growth.',
    savings: 'Up to 15% basis step-up'
  },
  {
    title: 'Construction Accounting',
    description: 'Percentage of completion, job costing, and contractor-specific tax planning for construction businesses.',
    savings: 'Optimize revenue recognition'
  }
];

const caseStudy = {
  industry: 'Real Estate Investor',
  title: 'Cost Segregation Unlocks $180K',
  description: 'A commercial property investor was depreciating a recently purchased $2.5M office building over 39 years. After conducting a cost segregation study, we identified $720,000 in components eligible for accelerated depreciation. Combined with bonus depreciation, the client generated $180,000 in first-year tax savings.',
  savings: '$180,000',
  strategy: 'Cost Segregation + Bonus Depreciation',
  breakdown: [
    { label: 'Property Value', value: '$2,500,000' },
    { label: 'Reclassified Components', value: '$720,000' },
    { label: 'Accelerated Depreciation', value: '$576,000' },
  ]
};

const faqs = [
  {
    question: 'What is a cost segregation study?',
    answer: 'A cost segregation study is an engineering-based analysis that identifies building components that can be depreciated over 5, 7, or 15 years instead of 27.5 or 39 years. This accelerates deductions and generates immediate tax savings, especially powerful when combined with bonus depreciation rules.'
  },
  {
    question: 'Do I qualify for Real Estate Professional Status?',
    answer: 'To qualify as a Real Estate Professional (REPS), you must spend more than 750 hours per year in real property trades or businesses, and more than half your working time must be in real estate activities. Meeting these requirements allows you to deduct real estate losses against ordinary income without passive activity limitations.'
  },
  {
    question: 'How does a 1031 exchange work?',
    answer: 'A 1031 exchange allows you to defer capital gains taxes by reinvesting sale proceeds into a like-kind property. You have 45 days to identify replacement properties and 180 days to close. The rules are strict, and proper planning before the sale is essential to qualify.'
  },
  {
    question: 'Should I hold properties in an LLC?',
    answer: 'LLCs provide liability protection and flexibility, but the best structure depends on your situation. Factors include number of properties, investor involvement, state taxes, and exit strategy. We analyze your specific situation to recommend the optimal structure.'
  }
];

export default function RealEstateConstructionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#fafafa]">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.3); }
          50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.6); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out infinite; animation-delay: -3s; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#003067] via-[#003067] to-[#002050] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-[#9bd9e4]/10 rounded-full blur-3xl animate-float-delayed" />

          {/* Floating building icons */}
          <div className="absolute top-[15%] right-[15%] w-20 h-20 bg-amber-500/20 rounded-2xl flex items-center justify-center animate-float backdrop-blur-sm border border-amber-500/30">
            <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div className="absolute bottom-[25%] right-[25%] w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center animate-float-delayed backdrop-blur-sm border border-white/20">
            <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-white/60 hover:text-amber-400 mb-8 transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-amber-500/20 rounded-full mb-8 border border-amber-500/30">
              <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-sm font-semibold tracking-wider uppercase">Real Estate & Construction</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Build Wealth,
              <span className="block text-amber-400 mt-2">Keep More of It</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 max-w-2xl">
              Real estate offers powerful tax advantages, but only if you know how to use them. From cost segregation to 1031 exchanges, we help investors and developers maximize every deduction.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-[#003067] font-bold rounded-full hover:bg-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
              >
                Discuss Your Portfolio
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
                What Real Estate<br />Owners Face
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The real estate industry has unique tax complexities that require specialized knowledge. Many property owners leave money on the table because their CPA does not understand these nuances.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    {challenge.icon}
                  </div>
                  <h3 className="font-bold text-[#003067] mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
              How We Help Real Estate Clients
            </h2>
            <p className="text-gray-600 text-lg">
              We combine deep real estate tax knowledge with proactive planning to help you build and preserve wealth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl ${
                  solution.highlight
                    ? 'border-amber-200 shadow-lg shadow-amber-500/10 lg:col-span-2 lg:row-span-1'
                    : 'border-gray-100 hover:border-amber-200'
                }`}
              >
                {solution.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-[#003067] mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span className="text-amber-600 font-semibold text-sm">{solution.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 md:py-32 bg-[#003067] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9bd9e4]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-400 font-semibold tracking-wider text-sm uppercase">Case Study</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                {caseStudy.title}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {caseStudy.description}
              </p>

              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-bold text-amber-400 mb-1">{caseStudy.savings}</div>
                  <div className="text-white/50 text-sm">First-Year Savings</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-white mb-1">{caseStudy.strategy}</div>
                  <div className="text-white/50 text-sm">Strategy Used</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-white/60 text-sm font-medium mb-6">Results Breakdown</div>
              <div className="space-y-4">
                {caseStudy.breakdown.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/80">{item.label}</span>
                    <span className="text-white font-semibold">{item.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-amber-400 font-semibold">Tax Savings (Year 1)</span>
                  <span className="text-amber-400 font-bold text-2xl">{caseStudy.savings}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-200 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100/50 transition-colors"
                >
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-amber-500 rotate-180' : ''}`}>
                    <svg
                      className={`w-4 h-4 transition-colors ${openFaq === idx ? 'text-white' : 'text-amber-600'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/30 rounded-full blur-2xl" />

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Optimize Your<br />Real Estate Taxes?
              </h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">
                Schedule a consultation to discuss your portfolio and discover opportunities you may be missing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-600 font-bold rounded-full hover:bg-[#003067] hover:text-white transition-all duration-300"
              >
                Schedule Consultation
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
