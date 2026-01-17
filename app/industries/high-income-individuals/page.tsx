'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Limited Deductions', description: 'W-2 employees have few write-offs. No business expenses, no retirement plan flexibility, no depreciation. Your taxable income is basically your gross income.' },
  { title: 'Bracket Creep', description: 'At $400K+, you\'re paying 35-37% federal plus state taxes plus the 3.8% Net Investment Income Tax. Nearly half your raises disappear.' },
  { title: 'Passive Loss Limitations', description: 'You\'ve heard real estate can reduce taxes, but passive activity rules block most W-2 earners from using those losses.' },
  { title: 'SALT Cap Pain', description: 'The $10,000 state and local tax deduction cap hits high earners in states like California, New York, and Ohio hard.' },
  { title: 'Excess Business Loss Limits', description: 'Section 461(l) caps business losses at $313,000 single / $626,000 married (2025), limiting aggressive loss strategies.' }
];

const realEstateStrategies = [
  { title: 'Short-Term Rental Loophole', description: 'Properties with average stays under 7 days aren\'t subject to passive activity rules. Losses can offset W-2 income directly.' },
  { title: 'Real Estate Professional Status', description: 'For spouses not working full-time, qualifying as a Real Estate Professional unlocks unlimited passive loss deductions against household income.' },
  { title: 'Cost Segregation + Bonus Depreciation', description: 'Accelerate depreciation on rental properties to generate large paper losses in year one.' },
  { title: 'Active Participation', description: 'Even without REPS, you can deduct up to $25,000 in rental losses if you actively participate (phases out above $150K AGI, but strategies exist).' }
];

const investmentStrategies = [
  { title: 'Oil & Gas Working Interests', description: 'Intangible drilling costs (IDCs) are immediately deductible and aren\'t subject to passive loss rules. Offset W-2 income dollar-for-dollar.' },
  { title: 'Conservation Easements', description: 'Donate development rights on qualified land for deductions potentially exceeding your investment. IRS scrutiny is high—proper structure is critical.' },
  { title: 'Qualified Opportunity Zone Funds', description: 'Defer capital gains and potentially eliminate tax on appreciation with 10+ year holds.' },
  { title: 'Tax-Efficient Asset Location', description: 'Place tax-inefficient investments (bonds, REITs) in retirement accounts; growth stocks in taxable accounts.' }
];

const charitableStrategies = [
  { title: 'Donor-Advised Funds', description: 'Bunch multiple years of giving into one year to exceed the standard deduction threshold. Get the deduction now, distribute to charities over time.' },
  { title: 'Appreciated Stock Donations', description: 'Donate stock instead of cash to avoid capital gains and still get the full fair market value deduction.' },
  { title: 'Charitable Remainder Trusts', description: 'Convert highly appreciated assets into lifetime income while getting an immediate deduction.' }
];

const incomeStrategies = [
  { title: 'Backdoor Roth Conversions', description: 'High earners can still fund Roth IRAs through the backdoor strategy—no income limits apply.' },
  { title: 'Deferred Compensation Planning', description: 'If available, defer income to lower-tax years (retirement, relocation, sabbatical).' },
  { title: 'Multi-Year Tax Projections', description: 'Plan stock option exercises, bonuses, and large transactions across tax years to minimize bracket exposure.' }
];

const businessOwnershipStrategies = [
  { title: 'Leverage + Depreciation', description: 'Finance equipment that cash flows from day one. The business covers the debt service while you claim 100% bonus depreciation on the full purchase price—creating paper losses that offset W-2 income.' },
  { title: 'Material Participation', description: 'Meet the 100-hour test (participate at least 100 hours annually and more than any other individual) to treat the activity as non-passive. Your losses then offset active income directly.' },
  { title: 'Asset Classes That Work', description: 'Car washes, crypto mining, laundromats, self-storage, equipment leasing—businesses where the equipment does the work and financing is readily available.' },
  { title: 'Cash Flow Positive, Tax Loss Negative', description: 'The math works because depreciation is a non-cash expense. You pocket the operating income while the depreciation deduction shelters your W-2.' }
];

const faqs = [
  { question: 'How does the short-term rental loophole work?', answer: 'Properties with an average guest stay of 7 days or less are not considered "rental activities" under passive activity rules. This means losses from these properties can offset your W-2 income without needing Real Estate Professional Status. Combined with cost segregation and bonus depreciation, you can generate significant paper losses in year one.' },
  { question: 'What is the 100-hour material participation test?', answer: 'To avoid passive loss limitations, you can materially participate in a business by working at least 100 hours during the year AND more hours than any other individual. This is often achievable for investor-owned businesses like car washes or laundromats where you handle management decisions, vendor relationships, and financial oversight.' },
  { question: 'Are oil & gas investments worth the risk?', answer: 'Oil & gas working interests offer immediate deductions (60-80% of investment in year one) that offset W-2 income dollar-for-dollar. However, they carry real economic risk. We recommend these only as part of a diversified tax strategy, with proper due diligence on the operator and economics of the wells.' },
  { question: 'How much can I really save with these strategies?', answer: 'It depends on your income and which strategies fit your situation. A combination of short-term rentals, business ownership, and charitable planning can reduce effective tax rates by 10-15 percentage points or more. We model scenarios specific to your situation before recommending any strategy.' }
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

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80" alt="Professional setting" className="w-full h-full object-cover" />
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
              <span className="text-amber-300 text-sm font-semibold tracking-wider uppercase">High-Income Professionals</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Tax Planning for
              <span className="block text-amber-400 mt-2">High Earners Who Want More</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              Advanced tax strategies for attorneys, physicians, tech executives, and other high-income W-2 professionals who are tired of writing six-figure checks to the IRS.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-[#003067] font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg">
              Find Strategies That Fit Your Situation
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
              <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">The Problem</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">The High-Income Tax Trap</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Earning a high W-2 salary is great—until April arrives. High-income professionals face a brutal tax reality.
              </p>

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
                <div className="text-3xl font-bold">37%+</div>
                <div className="text-sm opacity-90">Top Federal Rate + NIIT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Strategies Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Legal Strategies That Actually Work</h2>
            <p className="text-gray-600 text-lg">We identify the right combination of tax-advantaged investments, real estate strategies, and income planning for your specific situation.</p>
          </div>

          {/* Real Estate Strategies */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003067]">Real Estate Tax Strategies</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {realEstateStrategies.map((s, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all">
                  <h4 className="font-semibold text-[#003067] mb-2">{s.title}</h4>
                  <p className="text-gray-600 text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Strategies */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#003067] rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003067]">Investment-Based Tax Planning</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {investmentStrategies.map((s, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all">
                  <h4 className="font-semibold text-[#003067] mb-2">{s.title}</h4>
                  <p className="text-gray-600 text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Ownership Strategies */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-amber-600 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003067]">Business Ownership Planning</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {businessOwnershipStrategies.map((s, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all">
                  <h4 className="font-semibold text-[#003067] mb-2">{s.title}</h4>
                  <p className="text-gray-600 text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Charitable + Income Strategies */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Charitable */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#003067]">Charitable Strategies</h3>
              </div>
              <ul className="space-y-4">
                {charitableStrategies.map((s, idx) => (
                  <li key={idx}>
                    <h4 className="font-semibold text-[#003067] text-sm mb-1">{s.title}</h4>
                    <p className="text-gray-600 text-sm">{s.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Income Timing */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#003067]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#003067]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#003067]">Income Timing & Structure</h3>
              </div>
              <ul className="space-y-4">
                {incomeStrategies.map((s, idx) => (
                  <li key={idx}>
                    <h4 className="font-semibold text-[#003067] text-sm mb-1">{s.title}</h4>
                    <p className="text-gray-600 text-sm">{s.description}</p>
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
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80" alt="Business planning" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold tracking-wider text-sm uppercase">By The Numbers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Key Statistics</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-white/80 text-sm">Bonus depreciation (2026)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">60-80%</div>
              <div className="text-white/80 text-sm">Oil & gas IDCs deductible year one</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">$313K</div>
              <div className="text-white/80 text-sm">Section 461(l) limit (single, 2025)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">100 hrs</div>
              <div className="text-white/80 text-sm">Material participation test threshold</div>
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
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80" alt="Professional" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-amber-600/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Find Strategies That Fit Your Situation</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to review your tax picture and identify opportunities you may be missing.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-600 font-bold rounded-full hover:bg-[#003067] hover:text-white transition-all duration-300">
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
