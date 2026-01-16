'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Complex Income Sources', description: 'Multiple income streams from investments, business ownership, and compensation create complex tax planning needs.' },
  { title: 'Investment Taxation', description: 'Capital gains, qualified dividends, and alternative investments each have unique tax treatment requiring coordination.' },
  { title: 'Estate Planning', description: 'Wealth transfer strategies require careful coordination between estate, gift, and income tax planning.' },
  { title: 'Charitable Giving', description: 'Maximizing the tax benefit of charitable intent requires sophisticated giving strategies beyond simple cash donations.' }
];

const solutions = [
  { title: 'Comprehensive Tax Planning', description: 'Year-round proactive planning to minimize taxes across all income sources, investments, and wealth transfer strategies.', savings: 'Reduce effective tax rate', highlight: true },
  { title: 'Investment Tax Strategy', description: 'Coordinate investment decisions with tax planning including tax-loss harvesting, asset location, and timing of gains.', savings: 'Optimize after-tax returns' },
  { title: 'Charitable Giving Design', description: 'Structure charitable giving through donor-advised funds, charitable trusts, and appreciated asset donations for maximum impact.', savings: 'Amplify charitable impact' },
  { title: 'Executive Compensation', description: 'Navigate stock options, RSUs, deferred compensation, and other executive pay with tax-optimal strategies.', savings: 'Minimize taxes on equity' },
  { title: 'Real Estate Strategy', description: 'Optimize real estate investments through proper entity structuring, 1031 exchanges, and qualified opportunity zones.', savings: 'Defer and reduce gains' },
  { title: 'Estate & Gift Planning', description: 'Coordinate lifetime giving, trust strategies, and estate plans to transfer wealth tax-efficiently.', savings: 'Preserve family wealth' }
];

const caseStudy = {
  title: 'Business Sale Saves Owner $890K in Taxes',
  description: 'A business owner preparing to sell their company came to us before the transaction. We implemented a charitable remainder trust for highly appreciated stock, structured the sale to maximize installment sale treatment, and coordinated with qualified opportunity zone investments to defer and reduce capital gains.',
  savings: '$890,000',
  strategy: 'CRT + Installment Sale + QOZ'
};

const faqs = [
  { question: 'How do I minimize taxes on a business sale?', answer: 'Multiple strategies can reduce taxes on a business sale including installment sales to spread recognition, charitable remainder trusts for appreciated stock, qualified opportunity zone reinvestment, and proper deal structuring between asset and stock sales. Planning should begin 2-3 years before the anticipated sale.' },
  { question: 'What charitable giving strategies provide the best tax benefits?', answer: 'Donating appreciated securities rather than cash, bunching donations into donor-advised funds, establishing charitable remainder trusts, and qualified charitable distributions from IRAs can all amplify the tax benefits of your charitable giving while supporting causes you care about.' },
  { question: 'How should I handle stock option exercises?', answer: 'The optimal strategy depends on your option type (ISO vs NSO), stock price trajectory, your other income, and liquidity needs. We analyze factors including AMT implications, holding period requirements, and concentration risk to develop a multi-year exercise strategy.' },
  { question: 'When should I start estate planning?', answer: 'Now. The current estate and gift tax exemption is scheduled to drop significantly in 2026. Strategies like grantor retained annuity trusts, intentionally defective grantor trusts, and family limited partnerships take time to implement properly.' }
];

export default function HighIncomeIndividualsPage() {
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
            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80" alt="Luxury wealth" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-amber-300 mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-amber-500/20 backdrop-blur-sm rounded-full mb-8 border border-amber-500/30">
              <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-sm font-semibold tracking-wider uppercase">High-Income Individuals</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Build Wealth,
              <span className="block text-amber-400 mt-2">Protect It Too</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              High-income individuals face unique tax challenges from investment income to estate planning. We help you keep more of what you have earned through proactive, sophisticated tax strategies.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-[#003067] font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg">
              Discuss Your Situation
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
              <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Unique Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">What High Earners Face</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">Wealth creates unique tax complexities that require specialized knowledge.</p>

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
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80" alt="Executive professional" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">QSBS Gain Exclusion</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">How We Help High Earners</h2>
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
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80" alt="Business planning" className="w-full h-full object-cover" />
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
                <div className="text-white/60 text-sm">Tax Savings</div>
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
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80" alt="Wealth" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-amber-600/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for Proactive Tax Planning?</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to discover strategies that protect and grow your wealth.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-600 font-bold rounded-full hover:bg-amber-50 transition-all duration-300">
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
