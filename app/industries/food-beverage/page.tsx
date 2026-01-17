'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Rising Food Costs', description: 'Food spoils. Portions vary. Theft happens. Without real time food costing you can\'t react fast enough.' },
  { title: 'Labor Cost Volatility', description: 'Schedules shift weekly based on demand. Overtime creeps in. Tracking true labor costs per location or shift is complex.' },
  { title: 'Cash Flow Seasonality', description: 'Sales fluctuate dramatically by season, day of week, and even weather. Cash planning requires understanding your specific patterns.' },
  { title: 'Multi-Location Complexity', description: 'Each location is its own profit center. Consolidated reporting that still shows location-level performance is essential.' },
  { title: 'Third-Party Delivery Commissions', description: 'Delivery platforms take 15-30% of each order. Understanding true profitability by channel matters more than ever.' }
];

const cfoServices = [
  'Weekly flash reports showing sales, labor, and prime costs',
  'Inventory tracking and real time food costing',
  'Multi-location consolidated and comparative reporting',
  'Cash flow forecasting that accounts for your sales patterns',
  'POS integration and revenue reconciliation',
  'Franchise reporting and royalty calculations'
];

const taxStrategies = [
  'FICA tip credit calculations and compliance',
  'Cost segregation for owned or leased restaurant build-outs',
  'Qualified Opportunity Zone planning for new locations',
  'Entity structure optimization for multi-location operations',
  'Sales tax compliance across jurisdictions'
];

const faqs = [
  { question: 'What should my prime cost percentage be?', answer: 'Prime cost targets vary by concept—fine dining, QSR, and bars each have different benchmarks. What matters is knowing your target and tracking against it weekly. We help you establish the right benchmark for your concept and build systems to monitor it.' },
  { question: 'How do FICA tip credits work?', answer: 'Employers can claim a tax credit for FICA taxes paid on employee tips that exceed minimum wage. This can save thousands per tipped employee annually. We calculate and document these credits as part of your tax planning.' },
  { question: 'How do you handle multi-location reporting?', answer: 'We build consolidated reporting that shows overall performance while maintaining visibility into each location as its own profit center. This lets you compare performance, identify issues, and make informed decisions about expansion or closure.' },
  { question: 'Can you integrate with our POS system?', answer: 'Yes. We integrate with major POS systems to automate revenue reconciliation and provide real-time visibility into sales performance. This eliminates manual data entry and catches discrepancies quickly.' }
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

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80" alt="Restaurant interior" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-orange-300 mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-orange-500/20 backdrop-blur-sm rounded-full mb-8 border border-orange-400/30">
              <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-orange-300 text-sm font-semibold tracking-wider uppercase">Food & Beverage</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Financial Control
              <span className="block text-orange-400 mt-2">for Thin-Margin Operations</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              Multi-location accounting, inventory management, and cash flow planning for restaurants, food service, and hospitality businesses operating on tight margins.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-400 transition-all duration-300 shadow-lg">
              Let's Look at Your Prime Costs
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
              <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Hospitality Runs on Razor-Thin Margins</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The food and beverage industry operates differently than almost any other business. Unique challenges require specialized financial management.
              </p>

              <div className="space-y-4">
                {challenges.map((c, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#003067] mb-1">{c.title}</h4>
                      <p className="text-gray-600 text-sm">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Restaurant kitchen" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">82%</div>
                <div className="text-sm opacity-90">Failures from Cash Flow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Restaurant-Ready Financial Management</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CFO Services */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-[#003067] text-white text-xs font-semibold rounded-full mb-4">Primary Service</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Outsourced Controller & CFO Services</h3>
              <p className="text-gray-600 mb-6">We provide the back-office financial function that lets you focus on operations:</p>
              <ul className="space-y-3">
                {cfoServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tax Strategy */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-4">Tax Strategy</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Tax Strategy for Hospitality</h3>
              <p className="text-gray-600 mb-6">Beyond operational accounting, we optimize your tax position:</p>
              <ul className="space-y-3">
                {taxStrategies.map((strategy, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80" alt="Restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold tracking-wider text-sm uppercase">By The Numbers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Key Statistics</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">Weekly</div>
              <div className="text-white/80">Prime cost tracking is essential for thin margins</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">$1000s</div>
              <div className="text-white/80">FICA tip credit savings per employee annually</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">82%</div>
              <div className="text-white/80">Business failures trace to cash flow problems</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-orange-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-orange-100/50 transition-colors">
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-orange-500 rotate-180' : ''}`}>
                    <svg className={`w-4 h-4 transition-colors ${openFaq === idx ? 'text-white' : 'text-orange-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80" alt="Restaurant" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-orange-600/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Look at Your Prime Costs</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to review your cash flow and find opportunities you may be missing.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-600 font-bold rounded-full hover:bg-[#003067] hover:text-white transition-all duration-300">
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
