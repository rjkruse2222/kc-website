'use client';

import { useState } from 'react';
import Link from 'next/link';

const challenges = [
  { title: 'Missed R&D Credits', description: 'Many manufacturers do not realize their product development and process improvements qualify for R&D tax credits.', icon: '🔬' },
  { title: 'Equipment Depreciation', description: 'Maximizing Section 179 and bonus depreciation requires careful planning and timing of capital expenditures.', icon: '⚙️' },
  { title: 'Inventory Accounting', description: 'Complex inventory methods (LIFO, FIFO, weighted average) have significant tax implications often overlooked.', icon: '📦' },
  { title: 'Multi-State Nexus', description: 'Selling and shipping to multiple states creates complex filing obligations and apportionment challenges.', icon: '🗺️' }
];

const solutions = [
  { title: 'R&D Tax Credit Studies', description: 'Identify qualifying research activities and maximize federal and state R&D credits for product development and process improvements.', savings: 'Up to 10% of qualified expenses', highlight: true },
  { title: 'Equipment Strategy', description: 'Plan capital expenditures to maximize Section 179, bonus depreciation, and energy-efficient equipment credits.', savings: '100% first-year deduction possible' },
  { title: 'Inventory Optimization', description: 'Analyze and implement the most tax-efficient inventory accounting method for your business.', savings: 'Defer taxes with LIFO' },
  { title: 'Cost Accounting', description: 'Proper allocation of costs between inventory and period expenses to optimize tax position.', savings: 'Maximize current deductions' },
  { title: 'IC-DISC Export Incentive', description: 'Reduce taxes on export sales through Interest Charge Domestic International Sales Corporations.', savings: 'Up to 50% tax rate reduction on exports' },
  { title: 'State Tax Planning', description: 'Optimize multi-state apportionment and take advantage of state-specific manufacturing incentives.', savings: 'Reduce effective state tax rate' }
];

const caseStudy = {
  title: 'R&D Credits Save $127K Annually',
  description: 'A precision parts manufacturer assumed their work did not qualify for R&D credits. After our analysis, we identified qualifying activities including process improvements, prototyping, and quality testing. We also filed amended returns for three prior years.',
  savings: '$127,000',
  strategy: 'R&D Tax Credits + Amended Returns'
};

const faqs = [
  { question: 'Does my manufacturing work qualify for R&D credits?', answer: 'Many manufacturing activities qualify, including developing new products, improving existing products, creating prototypes, improving manufacturing processes, developing new techniques or formulas, and testing activities. You do not need a formal R&D department to qualify.' },
  { question: 'What is the best inventory method for manufacturers?', answer: 'It depends on your situation. LIFO can defer taxes in inflationary environments by matching recent (higher) costs against revenue. FIFO may be better if costs are declining or you need to show higher profits. We analyze your specific inventory patterns to recommend the optimal method.' },
  { question: 'How do I maximize equipment deductions?', answer: 'Strategic timing is key. Section 179 allows immediate deduction of equipment costs up to annual limits. Bonus depreciation allows 100% first-year deduction on qualifying property. We help plan capital expenditures to maximize these benefits each year.' },
  { question: 'What is an IC-DISC and how can it help?', answer: 'An Interest Charge Domestic International Sales Corporation (IC-DISC) is a tax structure that can reduce the effective tax rate on export sales. If you export products, this structure can convert ordinary income to qualified dividend income, potentially saving significant taxes.' }
];

export default function ManufacturingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#fafafa]">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes gear-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out infinite; animation-delay: -3s; }
        .animate-gear { animation: gear-spin 20s linear infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-slate-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-[#9bd9e4]/10 rounded-full blur-3xl animate-float-delayed" />

          {/* Floating gear icon */}
          <div className="absolute top-[20%] right-[12%] w-24 h-24 bg-slate-500/20 rounded-full flex items-center justify-center animate-gear backdrop-blur-sm border border-slate-500/30">
            <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-slate-300 mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-500/20 rounded-full mb-8 border border-slate-500/30">
              <div className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-pulse" />
              <span className="text-slate-300 text-sm font-semibold tracking-wider uppercase">Manufacturing</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Engineered for
              <span className="block text-slate-400 mt-2">Tax Efficiency</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 max-w-2xl">
              Manufacturing businesses have unique tax opportunities from R&D credits to equipment depreciation. We help you capture every deduction and credit you have earned.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-full hover:bg-white transition-all duration-300 hover:shadow-lg">
                Discuss Your Business
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-slate-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">What Manufacturers Face</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, i) => (
              <div key={i} className="group relative bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-[#003067] mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-slate-500 font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">How We Help Manufacturers</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className={`group relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl ${s.highlight ? 'border-slate-300 shadow-lg lg:col-span-2' : 'border-gray-100 hover:border-slate-200'}`}>
                {s.highlight && <div className="absolute top-4 right-4 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">Most Popular</div>}
                <h3 className="text-xl font-bold text-[#003067] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="w-2 h-2 bg-slate-500 rounded-full" />
                  <span className="text-slate-600 font-semibold text-sm">{s.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="text-slate-400 font-semibold tracking-wider text-sm uppercase">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{caseStudy.description}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-slate-300 mb-1">{caseStudy.savings}</div>
                <div className="text-white/50 text-sm">Annual Savings</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-white mb-1">{caseStudy.strategy}</div>
                <div className="text-white/50 text-sm">Strategy Used</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-slate-300 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-100/50 transition-colors">
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-slate-600 rotate-180' : ''}`}>
                    <svg className={`w-4 h-4 transition-colors ${openFaq === idx ? 'text-white' : 'text-slate-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Optimize Your Manufacturing Taxes?</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to discover credits and deductions you may be missing.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-800 font-bold rounded-full hover:bg-slate-100 transition-all duration-300">
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
