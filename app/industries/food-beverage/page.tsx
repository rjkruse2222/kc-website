'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Tip Credit Complexity', description: 'FICA tip credits and tip reporting requirements are complex and often miscalculated.' },
  { title: 'Multi-Location Management', description: 'Multiple locations mean multiple state filings, complex intercompany transactions, and consolidated reporting.' },
  { title: 'Inventory Shrinkage', description: 'Food waste and shrinkage create accounting challenges and tax planning opportunities.' },
  { title: 'Cash Flow Volatility', description: 'Seasonal fluctuations and thin margins require careful cash flow and tax payment planning.' }
];

const solutions = [
  { title: 'FICA Tip Credit Optimization', description: 'Maximize federal tip credits by properly calculating and documenting tipped employee wages.', savings: 'Up to 7.65% of tip wages', highlight: true },
  { title: 'Multi-Location Accounting', description: 'Consolidated reporting with location-level visibility for better decision making and tax optimization.', savings: 'Identify underperforming locations' },
  { title: 'Inventory Management', description: 'Implement systems to track and account for food costs, waste, and theft with tax-optimal treatment.', savings: 'Maximize cost deductions' },
  { title: 'Entity Structuring', description: 'Optimize ownership structure across multiple locations for liability protection and tax efficiency.', savings: 'Reduce overall tax burden' },
  { title: 'Work Opportunity Tax Credit', description: 'Capture WOTC credits for hiring employees from qualifying target groups.', savings: 'Up to $9,600 per eligible hire' },
  { title: 'Equipment & Leasehold Improvements', description: 'Maximize deductions for restaurant equipment, build-outs, and improvements.', savings: 'Accelerate depreciation' }
];

const caseStudy = {
  title: 'Restaurant Group Saves $89K',
  description: 'A multi-location restaurant group was missing FICA tip credits and WOTC opportunities. We implemented proper tip reporting, claimed retroactive credits, and established a WOTC screening process for new hires.',
  savings: '$89,000',
  strategy: 'FICA Tip Credits + WOTC'
};

const faqs = [
  { question: 'What is the FICA tip credit?', answer: 'Employers can claim a tax credit for the employer share of FICA taxes paid on employee tips that exceed the minimum wage. This can be significant for restaurants with tipped employees.' },
  { question: 'How does WOTC work for restaurants?', answer: 'The Work Opportunity Tax Credit provides credits for hiring employees from target groups including veterans, food stamp recipients, and others. With high turnover in food service, this can generate substantial credits.' },
  { question: 'Should each location be a separate entity?', answer: 'Often yes, for liability protection. But the optimal structure depends on state taxes, financing needs, and exit strategy. We design structures that balance protection with tax efficiency.' },
  { question: 'How should I account for food waste?', answer: 'Proper tracking of spoilage, waste, and theft is essential for accurate financial reporting and maximizing deductions. We help implement systems that capture this information correctly.' }
];

export default function FoodBeveragePage() {
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
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80" alt="Restaurant dining" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-rose-300 mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-rose-500/20 backdrop-blur-sm rounded-full mb-8 border border-rose-500/30">
              <div className="w-2.5 h-2.5 bg-rose-400 rounded-full animate-pulse" />
              <span className="text-rose-300 text-sm font-semibold tracking-wider uppercase">Food & Beverage</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Flavor Your
              <span className="block text-rose-400 mt-2">Bottom Line</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              From tip credits to multi-location accounting, food service businesses have unique tax opportunities. We help restaurants and food businesses keep more of every dollar.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-400 transition-all duration-300 shadow-lg">
              Discuss Your Business
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
              <span className="text-rose-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">What Restaurants Face</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">Food service has unique tax complexities that require specialized knowledge.</p>

              <div className="space-y-4">
                {challenges.map((c, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-rose-50 transition-colors">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#003067] mb-1">{c.title}</h4>
                      <p className="text-gray-600 text-sm">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" alt="Restaurant kitchen" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-rose-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">7.65%</div>
                <div className="text-sm opacity-90">Tip Credit Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-rose-500 font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">How We Help Food & Beverage Clients</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, idx) => (
              <div key={idx} className={`group bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl ${s.highlight ? 'border-rose-200 shadow-lg lg:col-span-2' : 'border-gray-100 hover:border-rose-200'}`}>
                {s.highlight && <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-xs font-semibold rounded-full mb-4">Most Popular</div>}
                <h3 className="text-xl font-bold text-[#003067] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="w-2 h-2 bg-rose-500 rounded-full" />
                  <span className="text-rose-600 font-semibold text-sm">{s.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study with Photo Background */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80" alt="Restaurant interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="text-rose-400 font-semibold tracking-wider text-sm uppercase">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">{caseStudy.description}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-rose-400 mb-1">{caseStudy.savings}</div>
                <div className="text-white/60 text-sm">Annual Savings</div>
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
            <span className="text-rose-500 font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-rose-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-rose-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-rose-100/50 transition-colors">
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-rose-500 rotate-180' : ''}`}>
                    <svg className={`w-4 h-4 transition-colors ${openFaq === idx ? 'text-white' : 'text-rose-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80" alt="Restaurant" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-rose-600/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Optimize Your Restaurant Taxes?</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to discover credits and deductions you may be missing.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-rose-600 font-bold rounded-full hover:bg-rose-50 transition-all duration-300">
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
