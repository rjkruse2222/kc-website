'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Missed R&D Credits', description: 'Many manufacturers do not realize their product development and process improvements qualify for R&D tax credits.' },
  { title: 'Equipment Depreciation', description: 'Maximizing Section 179 and bonus depreciation requires careful planning and timing of capital expenditures.' },
  { title: 'Inventory Accounting', description: 'Complex inventory methods (LIFO, FIFO, weighted average) have significant tax implications often overlooked.' },
  { title: 'Multi-State Nexus', description: 'Selling and shipping to multiple states creates complex filing obligations and apportionment challenges.' }
];

const solutions = [
  { title: 'R&D Tax Credit Studies', description: 'Identify qualifying research activities and maximize federal and state R&D credits for product development.', savings: 'Up to 10% of qualified expenses', highlight: true },
  { title: 'Equipment Strategy', description: 'Plan capital expenditures to maximize Section 179, bonus depreciation, and energy-efficient equipment credits.', savings: '100% first-year deduction possible' },
  { title: 'Inventory Optimization', description: 'Analyze and implement the most tax-efficient inventory accounting method for your business.', savings: 'Defer taxes with LIFO' },
  { title: 'Cost Accounting', description: 'Proper allocation of costs between inventory and period expenses to optimize tax position.', savings: 'Maximize current deductions' },
  { title: 'IC-DISC Export Incentive', description: 'Reduce taxes on export sales through Interest Charge Domestic International Sales Corporations.', savings: 'Up to 50% tax rate reduction on exports' },
  { title: 'State Tax Planning', description: 'Optimize multi-state apportionment and take advantage of state-specific manufacturing incentives.', savings: 'Reduce effective state tax rate' }
];

const caseStudy = {
  title: 'R&D Credits Save $127K Annually',
  description: 'A precision parts manufacturer assumed their work did not qualify for R&D credits. After our analysis, we identified qualifying activities including process improvements, prototyping, and quality testing.',
  savings: '$127,000',
  strategy: 'R&D Tax Credits + Amended Returns'
};

const faqs = [
  { question: 'Does my manufacturing work qualify for R&D credits?', answer: 'Many manufacturing activities qualify, including developing new products, improving existing products, creating prototypes, improving manufacturing processes, developing new techniques or formulas, and testing activities.' },
  { question: 'What is the best inventory method for manufacturers?', answer: 'It depends on your situation. LIFO can defer taxes in inflationary environments by matching recent costs against revenue. FIFO may be better if costs are declining.' },
  { question: 'How do I maximize equipment deductions?', answer: 'Strategic timing is key. Section 179 allows immediate deduction of equipment costs up to annual limits. Bonus depreciation allows 100% first-year deduction on qualifying property.' },
  { question: 'What is an IC-DISC and how can it help?', answer: 'An IC-DISC is a tax structure that can reduce the effective tax rate on export sales by converting ordinary income to qualified dividend income.' }
];

export default function ManufacturingPage() {
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
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80" alt="Manufacturing facility" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-slate-300 mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-500/20 backdrop-blur-sm rounded-full mb-8 border border-slate-400/30">
              <div className="w-2.5 h-2.5 bg-slate-300 rounded-full animate-pulse" />
              <span className="text-slate-200 text-sm font-semibold tracking-wider uppercase">Manufacturing</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Make Things,
              <span className="block text-slate-300 mt-2">Keep More Profit</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              The business of making things generates uniquely challenging environments. From R&D credits to equipment depreciation, we help manufacturers optimize every deduction.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-500 text-white font-bold rounded-full hover:bg-slate-400 transition-all duration-300 shadow-lg">
              Discuss Your Operations
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
              <span className="text-slate-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">What Manufacturers Face</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">Manufacturing has unique tax complexities that require specialized knowledge.</p>

              <div className="space-y-4">
                {challenges.map((c, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#003067] mb-1">{c.title}</h4>
                      <p className="text-gray-600 text-sm">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80" alt="Manufacturing equipment" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-slate-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">10%</div>
                <div className="text-sm opacity-90">R&D Credit Potential</div>
              </div>
            </div>
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
            {solutions.map((s, idx) => (
              <div key={idx} className={`group bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl ${s.highlight ? 'border-slate-200 shadow-lg lg:col-span-2' : 'border-gray-100 hover:border-slate-200'}`}>
                {s.highlight && <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full mb-4">Most Popular</div>}
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

      {/* Case Study with Photo Background */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=1920&q=80" alt="Factory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="text-slate-300 font-semibold tracking-wider text-sm uppercase">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">{caseStudy.description}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-slate-300 mb-1">{caseStudy.savings}</div>
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
            <span className="text-slate-500 font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-slate-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-100/50 transition-colors">
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-slate-500 rotate-180' : ''}`}>
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

      {/* Newsletter */}
      <NewsletterSection variant="light" />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80" alt="Manufacturing" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-700/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Optimize Your Manufacturing Taxes?</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to discover R&D credits and strategies you may be missing.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-700 font-bold rounded-full hover:bg-slate-100 transition-all duration-300">
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
