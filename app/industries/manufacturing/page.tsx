'use client';

import { useState } from 'react';
import Link from 'next/link';

const challenges = [
  { title: 'Missed R&D Credits', description: 'Many manufacturers do not realize their product development and process improvements qualify for R&D tax credits.' },
  { title: 'Equipment Depreciation', description: 'Maximizing Section 179 and bonus depreciation requires careful planning and timing of capital expenditures.' },
  { title: 'Inventory Accounting', description: 'Complex inventory methods (LIFO, FIFO, weighted average) have significant tax implications often overlooked.' },
  { title: 'Multi-State Nexus', description: 'Selling and shipping to multiple states creates complex filing obligations and apportionment challenges.' }
];

const solutions = [
  { title: 'R&D Tax Credit Studies', description: 'Identify qualifying research activities and maximize federal and state R&D credits for product development and process improvements.', savings: 'Up to 10% of qualified expenses' },
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
    <main className="bg-white">
      <section className="relative bg-[#003067] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#9bd9e4]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <Link href="/industries" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Industries
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">Manufacturing</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Engineered for<span className="block text-[#9bd9e4] mt-2">Tax Efficiency</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10">
              Manufacturing businesses have unique tax opportunities from R&D credits to equipment depreciation. We help you capture every deduction and credit you have earned.
            </p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-colors">
              Discuss Your Business<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">What Manufacturers Face</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <h3 className="font-bold text-[#003067] mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">How We Help Manufacturers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-[#003067] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{s.description}</p>
                <div className="pt-4 border-t border-gray-100"><span className="text-[#9bd9e4] font-semibold text-sm">{s.savings}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#003067]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2>
            <p className="text-white/80 leading-relaxed mb-8">{caseStudy.description}</p>
            <div className="flex gap-8">
              <div><div className="text-3xl font-bold text-[#9bd9e4]">{caseStudy.savings}</div><div className="text-white/60 text-sm">Annual Savings</div></div>
              <div><div className="text-lg font-semibold text-white">{caseStudy.strategy}</div><div className="text-white/60 text-sm">Strategy Used</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <svg className={`w-5 h-5 text-[#9bd9e4] flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">Ready to Optimize Your Manufacturing Taxes?</h2>
          <p className="text-xl text-gray-600 mb-10">Schedule a consultation to discover credits and deductions you may be missing.</p>
          <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-colors">
            Schedule Consultation<svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
