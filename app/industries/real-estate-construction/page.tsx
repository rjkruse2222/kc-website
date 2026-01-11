'use client';

import { useState } from 'react';
import Link from 'next/link';

const challenges = [
  {
    title: 'Complex Depreciation Rules',
    description: 'Real estate depreciation schedules are complex, and many property owners miss opportunities to accelerate deductions.'
  },
  {
    title: 'Entity Structure Decisions',
    description: 'Choosing between LLCs, S-Corps, and partnerships significantly impacts your tax liability and liability protection.'
  },
  {
    title: 'Capital Gains Exposure',
    description: 'Property sales can trigger significant capital gains taxes without proper planning and timing.'
  },
  {
    title: 'Multi-State Compliance',
    description: 'Properties in multiple states create complex nexus and filing requirements that many CPAs overlook.'
  }
];

const solutions = [
  {
    title: 'Cost Segregation Studies',
    description: 'Accelerate depreciation by identifying building components that qualify for shorter recovery periods, generating immediate tax savings.',
    savings: 'Up to 40% faster depreciation'
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
  strategy: 'Cost Segregation + Bonus Depreciation'
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
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#003067] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#9bd9e4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9bd9e4]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <Link
            href="/industries"
            className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Industries
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
              Real Estate & Construction
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Build Wealth,
              <span className="block text-[#9bd9e4] mt-2">Keep More of It</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10">
              Real estate offers powerful tax advantages, but only if you know how to use them. From cost segregation to 1031 exchanges, we help investors and developers maximize every deduction.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-colors"
            >
              Discuss Your Portfolio
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">
              What Real Estate Owners Face
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#003067] mb-2">{challenge.title}</h3>
                <p className="text-gray-600 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">
              How We Help Real Estate Clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine deep real estate tax knowledge with proactive planning to help you build and preserve wealth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#003067] mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{solution.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-[#9bd9e4] font-semibold text-sm">{solution.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 md:py-32 bg-[#003067]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Case Study</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                {caseStudy.title}
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                {caseStudy.description}
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-[#9bd9e4]">{caseStudy.savings}</div>
                  <div className="text-white/60 text-sm">First-Year Savings</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">{caseStudy.strategy}</div>
                  <div className="text-white/60 text-sm">Strategy Used</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <div className="text-white/60 text-sm mb-4">Results Breakdown</div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white">Property Value</span>
                  <span className="text-white font-semibold">$2,500,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white">Reclassified Components</span>
                  <span className="text-white font-semibold">$720,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white">Accelerated Depreciation</span>
                  <span className="text-white font-semibold">$576,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9bd9e4] font-semibold">Tax Savings (Year 1)</span>
                  <span className="text-[#9bd9e4] font-bold text-xl">$180,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#9bd9e4] flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">
            Ready to Optimize Your<br />Real Estate Taxes?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Schedule a consultation to discuss your portfolio and discover opportunities you may be missing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-colors"
          >
            Schedule Consultation
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
