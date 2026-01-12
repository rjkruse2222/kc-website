'use client';

import { useState } from 'react';
import Link from 'next/link';

const challenges = [
  { title: 'Tax Bracket Management', description: 'High earners face the highest marginal rates and often miss opportunities to shift income to lower-tax years or categories.' },
  { title: 'Investment Tax Complexity', description: 'Capital gains, qualified dividends, and alternative investments each have different tax treatments that require coordination.' },
  { title: 'Estate Exposure', description: 'Without proper planning, significant wealth can be lost to estate taxes upon transfer to the next generation.' },
  { title: 'Alternative Minimum Tax', description: 'AMT creates a parallel tax system that can eliminate the benefit of many deductions and strategies.' }
];

const solutions = [
  { title: 'Income Timing Strategies', description: 'Accelerate deductions, defer income, and shift income between years to minimize lifetime tax burden.', savings: 'Reduce effective tax rate' },
  { title: 'Investment Tax Planning', description: 'Coordinate investment decisions with tax consequences, including asset location, harvesting losses, and managing gains.', savings: 'Keep more investment returns' },
  { title: 'Charitable Giving Optimization', description: 'Structure charitable giving using donor-advised funds, appreciated securities, and qualified charitable distributions.', savings: 'Maximize charitable impact' },
  { title: 'Estate Tax Planning', description: 'Design estate plans that minimize transfer taxes while achieving your wealth transfer objectives.', savings: 'Protect family wealth' },
  { title: 'Business Owner Integration', description: 'Coordinate personal tax planning with business entity strategies for executives and entrepreneurs.', savings: 'Holistic tax optimization' },
  { title: 'Retirement Distribution Planning', description: 'Optimize Social Security timing, Roth conversions, and required minimum distributions for lifetime tax efficiency.', savings: 'Reduce retirement taxes' }
];

const caseStudy = {
  title: 'Executive Saves $195K Through Coordinated Planning',
  description: 'A corporate executive with significant equity compensation was paying more in taxes than necessary. We implemented a coordinated strategy including charitable giving with appreciated stock, strategic option exercises, Roth conversions during lower-income years, and estate planning to reduce future transfer taxes.',
  savings: '$195,000',
  strategy: 'Multi-Year Coordinated Tax Plan'
};

const faqs = [
  { question: 'When should I exercise my stock options?', answer: 'The optimal timing depends on your current tax bracket, expected stock price movement, AMT exposure, and diversification needs. ISOs and NSOs have different tax rules. We model various scenarios to recommend the best strategy for your specific situation.' },
  { question: 'Should I do Roth conversions?', answer: 'Roth conversions make sense when you expect future tax rates to be higher than current rates, have cash to pay taxes without touching retirement funds, have a long time horizon, or want to reduce future RMDs. We analyze your projected tax situation across multiple years to determine if and how much to convert.' },
  { question: 'How can I reduce estate taxes?', answer: 'Strategies include using the annual gift exclusion, funding irrevocable life insurance trusts, making direct payments for education and medical expenses, establishing grantor retained annuity trusts, and charitable planning. The right approach depends on your specific wealth transfer goals.' },
  { question: 'What charitable giving strategy is most tax-efficient?', answer: 'Donating appreciated securities avoids capital gains tax while providing a full fair market value deduction. Bunching multiple years of giving into a single year can help itemize deductions. Donor-advised funds provide flexibility in timing. Qualified charitable distributions from IRAs after age 70.5 reduce taxable income without itemizing.' }
];

export default function HighIncomeIndividualsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-white">
      <section className="relative bg-[#003067] overflow-hidden">
        <div className="absolute inset-0"><div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#9bd9e4]/10 rounded-full blur-3xl" /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <Link href="/industries" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>All Industries
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">High-Income Individuals</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Earn More,<span className="block text-[#9bd9e4] mt-2">Keep More</span></h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10">Individuals earning $400,000 or more face the highest tax rates and the most complex tax situations. We help executives, entrepreneurs, and high-income professionals minimize taxes and protect wealth.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-colors">Discuss Your Situation<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Common Challenges</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">What High Earners Face</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, i) => (<div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4"><svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div><h3 className="font-bold text-[#003067] mb-2">{c.title}</h3><p className="text-gray-600 text-sm">{c.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Solutions</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">How We Help High-Income Clients</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => (<div key={i} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"><h3 className="text-xl font-bold text-[#003067] mb-3">{s.title}</h3><p className="text-gray-600 leading-relaxed mb-4">{s.description}</p><div className="pt-4 border-t border-gray-100"><span className="text-[#9bd9e4] font-semibold text-sm">{s.savings}</span></div></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#003067]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Case Study</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2><p className="text-white/80 leading-relaxed mb-8">{caseStudy.description}</p><div className="flex gap-8"><div><div className="text-3xl font-bold text-[#9bd9e4]">{caseStudy.savings}</div><div className="text-white/60 text-sm">Annual Tax Savings</div></div><div><div className="text-lg font-semibold text-white">{caseStudy.strategy}</div><div className="text-white/60 text-sm">Strategy Used</div></div></div></div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">FAQ</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">Common Questions</h2></div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-[#003067] pr-8">{faq.question}</span><svg className={`w-5 h-5 text-[#9bd9e4] flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button><div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}><div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div></div></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center"><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">Ready to Optimize Your Personal Taxes?</h2><p className="text-xl text-gray-600 mb-10">Schedule a confidential consultation to discover strategies designed for high-income individuals.</p><Link href="/contact" className="inline-flex items-center px-10 py-5 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-colors">Schedule Consultation<svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link></div>
      </section>
    </main>
  );
}
