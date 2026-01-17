'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Revenue Cycle Delays', description: 'Unlike retail, healthcare gets paid weeks or months after service, often with adjustments, denials, and audits.' },
  { title: 'Payer Mix Complexity', description: 'Medicare, Medicaid, commercial insurance, and self-pay each have different rates, timing, and compliance requirements.' },
  { title: 'Regulatory Burden', description: 'HIPAA, OIG compliance, Stark Law, and ever-changing healthcare regulations require financial systems that support compliance.' },
  { title: 'Practice Valuation', description: 'Whether for buy-in, buy-out, or sale, understanding practice value requires healthcare-specific methodologies.' },
  { title: 'Physician Compensation', description: 'Structuring compensation that motivates productivity while maintaining compliance requires careful planning.' }
];

const cfoServices = [
  'Revenue cycle analysis and collection optimization',
  'Payer contract analysis and reimbursement tracking',
  'Provider productivity reporting and compensation modeling',
  'Practice benchmarking against industry standards',
  'Cash flow management accounting for reimbursement timing',
  'HIPAA-compliant financial systems and processes'
];

const taxStrategies = [
  'Practice entity structure (S-Corp, partnership, etc.) for physician tax efficiency',
  'Retirement plan design maximizing physician contributions',
  'Equipment depreciation and Section 179 planning',
  'Real estate ownership structures for practice property',
  'Succession and transition tax planning'
];

const faqs = [
  { question: 'What retirement plan allows the highest contributions?', answer: 'For high-earning healthcare professionals, a cash balance plan combined with a 401(k) can allow total annual contributions exceeding $300,000 depending on age and compensation. These plans are particularly effective for practices with older, higher-earning partners.' },
  { question: 'Should my practice be an S-Corp or LLC?', answer: 'It depends on your state, number of partners, and compensation structure. S-Corps can provide self-employment tax savings, but have restrictions and reasonable compensation requirements. We analyze your specific situation to recommend the optimal structure.' },
  { question: 'How should I structure real estate ownership?', answer: 'Many practitioners benefit from owning practice real estate in a separate entity that leases to the practice. This provides asset protection, creates retirement income, and offers additional tax planning opportunities. The optimal structure depends on your specific situation.' },
  { question: 'When should I start succession planning?', answer: 'Ideally 5-10 years before your planned exit. Early planning allows you to structure the transition tax-efficiently, groom successors, and maximize the value you extract from your life\'s work. Waiting until you are ready to leave limits your options.' }
];

export default function HealthcarePage() {
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
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80" alt="Healthcare facility" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-teal-300 mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-teal-500/20 backdrop-blur-sm rounded-full mb-8 border border-teal-400/30">
              <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-sm font-semibold tracking-wider uppercase">Healthcare</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Practice Management
              <span className="block text-teal-400 mt-2">Meets Financial Strategy</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              Revenue cycle optimization, compliance-aware accounting, and strategic financial guidance for medical practices and healthcare organizations.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-400 transition-all duration-300 shadow-lg">
              Review Your Practice Finances
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
              <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Healthcare Finance Has Unique Complexity</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Medical practices face financial challenges that general accountants simply don't understand.
              </p>

              <div className="space-y-4">
                {challenges.map((c, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#003067] mb-1">{c.title}</h4>
                      <p className="text-gray-600 text-sm">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" alt="Medical practice" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-teal-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">$100K+</div>
                <div className="text-sm opacity-90">Annual Retirement Contributions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Financial Systems That Support Patient Care</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CFO Services */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-[#003067] text-white text-xs font-semibold rounded-full mb-4">Primary Service</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Outsourced Controller & CFO Services</h3>
              <p className="text-gray-600 mb-6">We handle the financial complexity so you can focus on patients:</p>
              <ul className="space-y-3">
                {cfoServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tax Strategy */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full mb-4">Tax Strategy</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Tax Strategy for Healthcare</h3>
              <p className="text-gray-600 mb-6">With the financial foundation in place, we optimize your tax position:</p>
              <ul className="space-y-3">
                {taxStrategies.map((strategy, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=80" alt="Healthcare" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-teal-400 font-semibold tracking-wider text-sm uppercase">By The Numbers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Key Statistics</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">82%</div>
              <div className="text-white/80">Business failures trace to cash flow, compounded by reimbursement delays</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">$100K+</div>
              <div className="text-white/80">Possible annual physician retirement contributions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">Specific</div>
              <div className="text-white/80">Healthcare multiples and valuation methodologies required</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-teal-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-teal-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-teal-100/50 transition-colors">
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-teal-500 rotate-180' : ''}`}>
                    <svg className={`w-4 h-4 transition-colors ${openFaq === idx ? 'text-white' : 'text-teal-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80" alt="Healthcare" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-teal-600/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Review Your Practice Finances</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to find opportunities and improve your financial position.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-teal-600 font-bold rounded-full hover:bg-[#003067] hover:text-white transition-all duration-300">
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
