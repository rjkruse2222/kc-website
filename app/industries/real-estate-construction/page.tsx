'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Complex Depreciation Rules', description: 'Real estate depreciation schedules are complex, and many property owners miss opportunities to accelerate deductions.' },
  { title: 'Entity Structure Decisions', description: 'Choosing between LLCs, S-Corps, and partnerships significantly impacts your tax liability and liability protection.' },
  { title: 'Capital Gains Exposure', description: 'Property sales can trigger significant capital gains taxes without proper planning and timing.' },
  { title: 'Multi-State Compliance', description: 'Properties in multiple states create complex nexus and filing requirements that many CPAs overlook.' }
];

const solutions = [
  { title: 'Cost Segregation Studies', description: 'Accelerate depreciation by identifying building components that qualify for shorter recovery periods.', savings: 'Up to 40% faster depreciation', highlight: true },
  { title: '1031 Exchange Planning', description: 'Defer capital gains taxes by properly structuring like-kind exchanges with strict timing requirements.', savings: 'Defer 100% of capital gains' },
  { title: 'REPS Status Optimization', description: 'Qualify as a Real Estate Professional to unlock unlimited passive loss deductions.', savings: 'Offset W-2 income with RE losses' },
  { title: 'Entity Structuring', description: 'Design the optimal ownership structure for liability protection and tax efficiency.', savings: 'Reduce self-employment tax' },
  { title: 'Opportunity Zone Investment', description: 'Leverage Qualified Opportunity Zones for capital gains deferral and tax-free growth.', savings: 'Up to 15% basis step-up' },
  { title: 'Construction Accounting', description: 'Percentage of completion, job costing, and contractor-specific tax planning.', savings: 'Optimize revenue recognition' }
];

const caseStudy = {
  title: 'Cost Segregation Unlocks $180K',
  description: 'A commercial property investor was depreciating a recently purchased $2.5M office building over 39 years. After conducting a cost segregation study, we identified $720,000 in components eligible for accelerated depreciation.',
  savings: '$180,000',
  strategy: 'Cost Segregation + Bonus Depreciation'
};

const faqs = [
  { question: 'What is a cost segregation study?', answer: 'A cost segregation study is an engineering-based analysis that identifies building components that can be depreciated over 5, 7, or 15 years instead of 27.5 or 39 years. This accelerates deductions and generates immediate tax savings.' },
  { question: 'Do I qualify for Real Estate Professional Status?', answer: 'To qualify as a Real Estate Professional (REPS), you must spend more than 750 hours per year in real property trades or businesses, and more than half your working time must be in real estate activities.' },
  { question: 'How does a 1031 exchange work?', answer: 'A 1031 exchange allows you to defer capital gains taxes by reinvesting sale proceeds into a like-kind property. You have 45 days to identify replacement properties and 180 days to close.' },
  { question: 'Should I hold properties in an LLC?', answer: 'LLCs provide liability protection and flexibility, but the best structure depends on your situation including number of properties, investor involvement, state taxes, and exit strategy.' }
];

export default function RealEstateConstructionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#fafafa]">
      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns { animation: ken-burns 20s ease-out forwards; }
      `}</style>

      {/* Hero Section - Ken Burns Photo */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
              alt="Modern building construction"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-amber-400 mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-amber-500/20 backdrop-blur-sm rounded-full mb-8 border border-amber-500/30">
              <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-sm font-semibold tracking-wider uppercase">Real Estate, Construction & Trades</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Build Wealth,
              <span className="block text-amber-400 mt-2">Keep More of It</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              We know how fast-paced the real estate, construction, and trades industries are. From cost segregation to 1031 exchanges, we help investors and developers maximize every deduction.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-[#003067] font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg">
              Discuss Your Portfolio
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges Section with Photo */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">What Real Estate Owners Face</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The real estate industry has unique tax complexities that require specialized knowledge. Many property owners leave money on the table.
              </p>

              <div className="space-y-4">
                {challenges.map((c, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#003067] mb-1">{c.title}</h4>
                      <p className="text-gray-600 text-sm">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction site"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">40%</div>
                <div className="text-sm opacity-90">Faster Depreciation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">How We Help Real Estate Clients</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, idx) => (
              <div key={idx} className={`group bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl ${s.highlight ? 'border-amber-200 shadow-lg lg:col-span-2' : 'border-gray-100 hover:border-amber-200'}`}>
                {s.highlight && <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-4">Most Popular</div>}
                <h3 className="text-xl font-bold text-[#003067] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span className="text-amber-600 font-semibold text-sm">{s.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study with Photo Background */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Real estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-semibold tracking-wider text-sm uppercase">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">{caseStudy.description}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-1">{caseStudy.savings}</div>
                <div className="text-white/60 text-sm">First-Year Savings</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-white mb-1">{caseStudy.strategy}</div>
                <div className="text-white/60 text-sm">Strategy Used</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-amber-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-amber-100/50 transition-colors">
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-amber-500 rotate-180' : ''}`}>
                    <svg className={`w-4 h-4 transition-colors ${openFaq === idx ? 'text-white' : 'text-amber-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection variant="light" />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Buildings" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-amber-600/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Optimize Your Real Estate Taxes?</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to discuss your portfolio and discover opportunities you may be missing.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-600 font-bold rounded-full hover:bg-[#003067] hover:text-white transition-all duration-300">
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
