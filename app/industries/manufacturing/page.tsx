'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Inventory Complexity', description: 'Raw materials, work-in-process, finished goods. Each stage requires different tracking, valuation methods, and cost allocation.' },
  { title: 'Cost Accounting Gaps', description: 'Many manufacturers don\'t have accurate visibility into true product costs, including labor, overhead, and material variances.' },
  { title: 'Cash Tied Up in Operations', description: 'Inventory, receivables, and equipment purchases can consume cash faster than sales generate it.' },
  { title: 'Pricing Decisions in the Dark', description: 'Without accurate cost data, pricing becomes guesswork. You may be losing money on products you think are profitable.' },
  { title: 'Tariffs and Supply Chain Volatility', description: 'Material cost swings require rapid financial analysis and scenario planning.' }
];

const cfoServices = [
  'Standard cost systems with variance analysis',
  'Inventory valuation method selection (FIFO, LIFO, weighted average) and compliance',
  'WIP tracking and cost flow through production stages',
  'Cash flow forecasting that accounts for production cycles',
  'KPI dashboards showing gross margin, inventory turns, and production efficiency',
  'Bank and investor reporting with manufacturing-appropriate metrics'
];

const taxStrategies = [
  'R&D tax credits for product development and process improvements',
  'Section 179 and bonus depreciation on equipment purchases',
  'Domestic Production Activities deductions where applicable',
  'Inventory method optimization for tax timing benefits',
  'State incentives for manufacturing investment'
];

const faqs = [
  { question: 'Does my manufacturing work qualify for R&D credits?', answer: 'Many manufacturing activities qualify, including developing new products, improving existing products, creating prototypes, improving manufacturing processes, developing new techniques or formulas, and testing activities. The credit equals 6-8% of qualifying expenses.' },
  { question: 'What is the best inventory method for manufacturers?', answer: 'It depends on your situation. LIFO can defer taxes in inflationary environments by matching recent costs against revenue. FIFO may be better if costs are declining. The choice significantly impacts both taxes and reported margins.' },
  { question: 'How does cost accounting differ from regular accounting?', answer: 'Cost accounting allocates all manufacturing costs (materials, labor, overhead) to individual products. This reveals true profitability by product line and informs pricing decisions. Standard accounting only shows aggregate numbers.' },
  { question: 'Why do two manufacturers with identical operations report different margins?', answer: 'Accounting method choices—inventory valuation, overhead allocation, depreciation schedules—create significant differences in reported results. The underlying economics may be identical, but the financial statements tell different stories.' }
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

      {/* Hero Section */}
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
              Financial Infrastructure
              <span className="block text-slate-300 mt-2">for Production Excellence</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              From inventory valuation to cost accounting, we provide the financial systems and strategic oversight that manufacturers need to understand true product costs and scale profitably.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-500 text-white font-bold rounded-full hover:bg-slate-400 transition-all duration-300 shadow-lg">
              Review Your Cost Accounting
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-slate-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Manufacturing Demands Precision</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Manufacturing accounting isn't just bookkeeping. A slight miscalculation in product costing can mean the difference between healthy margins and unexpected losses.
              </p>

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
                <div className="text-3xl font-bold">6-8%</div>
                <div className="text-sm opacity-90">R&D Credit Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-slate-500 font-semibold tracking-wider text-sm uppercase">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Financial Systems Built for Production</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CFO Services */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-[#003067] text-white text-xs font-semibold rounded-full mb-4">Primary Service</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Outsourced Controller & CFO Services</h3>
              <p className="text-gray-600 mb-6">We implement and manage the financial infrastructure manufacturers need:</p>
              <ul className="space-y-3">
                {cfoServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tax Strategy */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-slate-500 text-white text-xs font-semibold rounded-full mb-4">Tax Strategy</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Tax Strategy for Manufacturers</h3>
              <p className="text-gray-600 mb-6">With accurate financials in place, we identify and capture tax opportunities:</p>
              <ul className="space-y-3">
                {taxStrategies.map((strategy, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=1920&q=80" alt="Factory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-slate-300 font-semibold tracking-wider text-sm uppercase">By The Numbers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Key Statistics</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-300 mb-2">6-8%</div>
              <div className="text-white/80">R&D credits as % of qualifying expenses</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-300 mb-2">LIFO</div>
              <div className="text-white/80">Can defer significant taxes in inflationary periods</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-300 mb-2">2x</div>
              <div className="text-white/80">Margin difference possible from accounting choices</div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Review Your Cost Accounting</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to find the gaps in your financial systems and uncover opportunities.</p>
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
