'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Practice Valuation', description: 'Understanding true practice value is critical for buy-ins, buy-outs, and succession planning but often miscalculated.' },
  { title: 'Compliance Burden', description: 'Healthcare regulations create complex reporting requirements that intersect with tax planning in ways general CPAs miss.' },
  { title: 'Compensation Structures', description: 'Physician compensation models have significant tax implications that vary by entity type and ownership structure.' },
  { title: 'Retirement Planning', description: 'High-earning healthcare professionals need sophisticated retirement strategies beyond basic 401(k) plans.' }
];

const solutions = [
  { title: 'Practice Valuations', description: 'Accurate valuations for buy-ins, partner additions, succession planning, and exit strategy development.', savings: 'Know your true value', highlight: true },
  { title: 'Entity Optimization', description: 'Structure your practice to minimize self-employment tax, optimize distributions, and protect assets.', savings: 'Reduce SE tax significantly' },
  { title: 'Retirement Plan Design', description: 'Design defined benefit plans, cash balance plans, and 401(k) profit sharing to maximize tax-deferred savings.', savings: 'Save $100K+ annually' },
  { title: 'Compensation Planning', description: 'Optimize partner compensation structures to balance tax efficiency with practice cash flow needs.', savings: 'Tax-efficient distributions' },
  { title: 'Real Estate Strategy', description: 'Structure practice real estate ownership for asset protection, retirement income, and tax efficiency.', savings: 'Build wealth outside practice' },
  { title: 'Succession Planning', description: 'Plan for practice transitions with strategies that minimize taxes and maximize value transfer.', savings: 'Protect lifetime value' }
];

const caseStudy = {
  title: 'Medical Practice Saves $156K with Cash Balance Plan',
  description: 'A multi-physician practice was maxing out standard 401(k) contributions but partners wanted to shelter more income. We designed a cash balance pension plan layered on top of their existing 401(k) that allowed each physician to contribute an additional $150,000-$250,000 annually in tax-deferred savings.',
  savings: '$156,000',
  strategy: 'Cash Balance Plan + 401(k)'
};

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

      {/* Hero Section - Ken Burns Photo */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80" alt="Modern hospital" className="w-full h-full object-cover" />
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
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-teal-500/20 backdrop-blur-sm rounded-full mb-8 border border-teal-500/30">
              <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-sm font-semibold tracking-wider uppercase">Healthcare</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Heal Patients,
              <span className="block text-teal-400 mt-2">Build Wealth</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              Healthcare professionals face unique tax challenges from practice valuation to retirement planning. We help you build wealth while you focus on patient care.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-400 transition-all duration-300 shadow-lg">
              Discuss Your Practice
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
              <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">What Healthcare Practices Face</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">Healthcare has unique tax complexities that require specialized knowledge.</p>

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
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="Doctor with patient" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">$300K+</div>
                <div className="text-sm opacity-90">Annual Retirement Contribution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">How We Help Healthcare Practices</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, idx) => (
              <div key={idx} className={`group bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl ${s.highlight ? 'border-teal-200 shadow-lg lg:col-span-2' : 'border-gray-100 hover:border-teal-200'}`}>
                {s.highlight && <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-4">Most Popular</div>}
                <h3 className="text-xl font-bold text-[#003067] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span className="text-teal-600 font-semibold text-sm">{s.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study with Photo Background */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=80" alt="Medical equipment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="text-teal-400 font-semibold tracking-wider text-sm uppercase">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">{caseStudy.description}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-1">{caseStudy.savings}</div>
                <div className="text-white/60 text-sm">Annual Tax Savings</div>
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
              <div className="absolute inset-0 bg-teal-700/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Optimize Your Practice Finances?</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to discover tax strategies and retirement solutions designed for healthcare professionals.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-teal-600 font-bold rounded-full hover:bg-teal-50 transition-all duration-300">
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
