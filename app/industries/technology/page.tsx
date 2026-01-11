'use client';

import { useState } from 'react';
import Link from 'next/link';

const challenges = [
  { title: 'R&D Credit Complexity', description: 'Technology companies often miss qualified research activities because they assume only formal R&D departments qualify.' },
  { title: 'Stock Compensation', description: 'ISOs, NSOs, and RSUs each have different tax implications that can cost employees and companies thousands if mishandled.' },
  { title: 'Revenue Recognition', description: 'SaaS and subscription models create complex revenue recognition issues that affect both GAAP and tax reporting.' },
  { title: 'Multi-State Nexus', description: 'Remote employees and digital sales create nexus in multiple states, triggering filing obligations many tech companies overlook.' }
];

const solutions = [
  { title: 'R&D Tax Credit Studies', description: 'Identify qualifying activities including software development, cloud infrastructure improvements, and algorithm development.', savings: 'Up to 10% of qualified expenses' },
  { title: 'Stock Option Planning', description: 'Optimize timing of exercises, elections, and sales to minimize tax burden for founders, executives, and employees.', savings: 'Reduce tax on equity gains' },
  { title: 'SaaS Revenue Strategy', description: 'Implement proper revenue recognition under ASC 606 and optimize tax timing for subscription-based businesses.', savings: 'Improve cash flow timing' },
  { title: 'Entity Structuring', description: 'Design optimal corporate structure for fundraising, IP protection, and eventual exit strategy.', savings: 'Maximize exit proceeds' },
  { title: 'State Tax Optimization', description: 'Manage multi-state nexus, optimize apportionment, and leverage state-specific tech incentives.', savings: 'Reduce effective state tax rate' },
  { title: 'Qualified Small Business Stock', description: 'Structure investments to qualify for QSBS exclusion, potentially eliminating capital gains on exit.', savings: 'Up to 100% gain exclusion' }
];

const caseStudy = {
  title: 'SaaS Company Captures $215K in R&D Credits',
  description: 'A growing SaaS company assumed their development work did not qualify for R&D credits because they were not creating "new technology." After our analysis, we identified qualifying activities across product development, infrastructure improvements, and data engineering. We also amended prior returns to capture missed credits.',
  savings: '$215,000',
  strategy: 'R&D Credits + Amended Returns'
};

const faqs = [
  { question: 'Does software development qualify for R&D credits?', answer: 'Yes, many software development activities qualify for R&D credits. This includes developing new applications, improving existing software, building internal tools, creating algorithms, and optimizing cloud infrastructure. The key is demonstrating technological uncertainty and a process of experimentation.' },
  { question: 'When should I exercise my stock options?', answer: 'The optimal timing depends on many factors including current stock value, expected growth, your tax bracket, AMT implications, and liquidity needs. ISOs have different rules than NSOs. We analyze your specific situation to recommend the best strategy for your equity compensation.' },
  { question: 'What is QSBS and how can it help me?', answer: 'Qualified Small Business Stock (QSBS) allows founders and early investors to exclude up to 100% of capital gains when selling C-corporation stock held for more than 5 years. Proper structuring from the start is essential to qualify. The potential tax savings can be substantial on a successful exit.' },
  { question: 'How do I handle sales tax for SaaS products?', answer: 'SaaS taxability varies significantly by state. Some states tax SaaS as tangible personal property, others exempt it, and some have specific digital services taxes. We help you determine where you have nexus, what is taxable, and how to properly collect and remit sales tax.' }
];

export default function TechnologyPage() {
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
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">Technology</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Scale Smart,<span className="block text-[#9bd9e4] mt-2">Tax Smarter</span></h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10">From R&D credits to stock option planning, tech companies have unique tax opportunities at every stage of growth. We help you capture credits, optimize equity compensation, and plan for the exit.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-colors">Discuss Your Business<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Industry Challenges</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">What Tech Companies Face</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, i) => (<div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4"><svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div><h3 className="font-bold text-[#003067] mb-2">{c.title}</h3><p className="text-gray-600 text-sm">{c.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Solutions</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">How We Help Tech Companies</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => (<div key={i} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"><h3 className="text-xl font-bold text-[#003067] mb-3">{s.title}</h3><p className="text-gray-600 leading-relaxed mb-4">{s.description}</p><div className="pt-4 border-t border-gray-100"><span className="text-[#9bd9e4] font-semibold text-sm">{s.savings}</span></div></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#003067]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Case Study</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2><p className="text-white/80 leading-relaxed mb-8">{caseStudy.description}</p><div className="flex gap-8"><div><div className="text-3xl font-bold text-[#9bd9e4]">{caseStudy.savings}</div><div className="text-white/60 text-sm">Total Credits Captured</div></div><div><div className="text-lg font-semibold text-white">{caseStudy.strategy}</div><div className="text-white/60 text-sm">Strategy Used</div></div></div></div>
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
        <div className="max-w-3xl mx-auto px-6 text-center"><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">Ready to Optimize Your Tech Company Taxes?</h2><p className="text-xl text-gray-600 mb-10">Schedule a consultation to discover R&D credits and tax strategies you may be missing.</p><Link href="/contact" className="inline-flex items-center px-10 py-5 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-colors">Schedule Consultation<svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link></div>
      </section>
    </main>
  );
}
