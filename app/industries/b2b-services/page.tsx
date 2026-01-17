'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Utilization and Capacity', description: 'Your inventory is people\'s time. Understanding utilization rates, capacity, and pricing to maximize revenue per hour is essential.' },
  { title: 'Project Profitability', description: 'Which clients and projects actually make money? Many firms don\'t know until they build proper project accounting systems.' },
  { title: 'Cash Flow Timing', description: 'Milestone billing, retainers, and delayed payments create cash flow patterns that require active management.' },
  { title: 'Partner Compensation', description: 'Allocating profit among partners fairly while motivating performance requires clear financial data and agreed methodologies.' },
  { title: 'Scaling Challenges', description: 'Adding headcount requires capital before new revenue materializes. Growing too fast can break cash flow.' }
];

const cfoServices = [
  'Project accounting with profitability by client, project, and team member',
  'Utilization tracking and capacity planning',
  'Revenue recognition compliant with project-based requirements',
  'Cash flow forecasting accounting for billing cycles',
  'Partner reporting and allocation calculations',
  'KPI dashboards: revenue per employee, realization rates, backlog'
];

const taxStrategies = [
  'Entity structure optimization for pass-through taxation',
  'Reasonable compensation planning for S-Corp owners',
  'State tax nexus analysis for remote work and multi-state clients',
  'Retirement plan design for maximum owner contributions',
  'Qualified Business Income deduction optimization'
];

const faqs = [
  { question: 'When should I convert to an S-Corporation?', answer: 'Generally when your net earnings from self-employment exceed $60,000-$80,000 annually. At that point, the S-Corp structure allows you to pay yourself a reasonable salary and take additional profits as distributions not subject to self-employment tax. We analyze your specific numbers to determine the optimal timing.' },
  { question: 'How should partners be compensated?', answer: 'Partner compensation can include guaranteed payments, profit allocations, and distributions. The optimal mix depends on partner contribution levels, tax situations, and firm cash flow needs. We design structures that balance tax efficiency with fairness and operational needs.' },
  { question: 'What retirement plan works best for professional service firms?', answer: 'It depends on partner ages, income levels, and preferences. Options include SEP-IRAs, SIMPLE IRAs, 401(k) plans with profit sharing, and defined benefit plans. For firms with income disparity between partners, certain designs work better than others.' },
  { question: 'How do I improve project profitability?', answer: 'Start with accurate time tracking and project accounting. Once you can see which clients and projects are profitable, you can adjust pricing, scope management, and staffing. Many firms discover that their biggest clients are actually their least profitable.' }
];

export default function B2BServicesPage() {
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
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=80" alt="Business meeting" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-blue-300 mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-500/20 backdrop-blur-sm rounded-full mb-8 border border-blue-500/30">
              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-semibold tracking-wider uppercase">B2B Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Financial Clarity
              <span className="block text-blue-400 mt-2">for Service-Based Growth</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              Project accounting, utilization tracking, and strategic financial leadership for consultants, agencies, and professional service firms.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400 transition-all duration-300 shadow-lg">
              Analyze Your Project Profitability
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
              <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Service Businesses Have Hidden Complexity</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Professional service firms look simple on the surface but have distinct financial challenges.
              </p>

              <div className="space-y-4">
                {challenges.map((c, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#003067] mb-1">{c.title}</h4>
                      <p className="text-gray-600 text-sm">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80" alt="Team collaboration" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">15.3%</div>
                <div className="text-sm opacity-90">S-Corp SE Tax Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Financial Infrastructure for Professional Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CFO Services */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-[#003067] text-white text-xs font-semibold rounded-full mb-4">Primary Service</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Outsourced Controller & CFO Services</h3>
              <p className="text-gray-600 mb-6">We provide the financial systems that service businesses need to scale:</p>
              <ul className="space-y-3">
                {cfoServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tax Strategy */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-4">Tax Strategy</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Tax Strategy for Professional Services</h3>
              <p className="text-gray-600 mb-6">With accurate financial data, we optimize your tax position:</p>
              <ul className="space-y-3">
                {taxStrategies.map((strategy, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80" alt="Team strategy session" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">By The Numbers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Key Statistics</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">Rev/FTE</div>
              <div className="text-white/80">Key metric for service firm valuation</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">15.3%</div>
              <div className="text-white/80">S-Corp SE tax savings on distributions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">20%</div>
              <div className="text-white/80">QBI deduction for qualifying income</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-blue-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-100/50 transition-colors">
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-blue-500 rotate-180' : ''}`}>
                    <svg className={`w-4 h-4 transition-colors ${openFaq === idx ? 'text-white' : 'text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=80" alt="Business" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-600/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Analyze Your Project Profitability</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to build financial systems that help your service firm scale.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:bg-[#003067] hover:text-white transition-all duration-300">
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
