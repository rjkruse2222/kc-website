'use client';

import { useState } from 'react';
import Link from 'next/link';

const challenges = [
  { title: 'Tip Credit Complexity', description: 'FICA tip credits and tip reporting requirements are complex and often miscalculated.' },
  { title: 'Multi-Location Management', description: 'Multiple locations mean multiple state filings, complex intercompany transactions, and consolidated reporting.' },
  { title: 'Inventory Shrinkage', description: 'Food waste and shrinkage create accounting challenges and tax planning opportunities.' },
  { title: 'Cash Flow Volatility', description: 'Seasonal fluctuations and thin margins require careful cash flow and tax payment planning.' }
];

const solutions = [
  { title: 'FICA Tip Credit Optimization', description: 'Maximize federal tip credits by properly calculating and documenting tipped employee wages.', savings: 'Up to 7.65% of tip wages' },
  { title: 'Multi-Location Accounting', description: 'Consolidated reporting with location-level visibility for better decision making and tax optimization.', savings: 'Identify underperforming locations' },
  { title: 'Inventory Management', description: 'Implement systems to track and account for food costs, waste, and theft with tax-optimal treatment.', savings: 'Maximize cost deductions' },
  { title: 'Entity Structuring', description: 'Optimize ownership structure across multiple locations for liability protection and tax efficiency.', savings: 'Reduce overall tax burden' },
  { title: 'Work Opportunity Tax Credit', description: 'Capture WOTC credits for hiring employees from qualifying target groups.', savings: 'Up to $9,600 per eligible hire' },
  { title: 'Equipment & Leasehold Improvements', description: 'Maximize deductions for restaurant equipment, build-outs, and improvements.', savings: 'Accelerate depreciation' }
];

const caseStudy = {
  title: 'Restaurant Group Saves $89K',
  description: 'A multi-location restaurant group was missing FICA tip credits and WOTC opportunities. We implemented proper tip reporting, claimed retroactive credits, and established a WOTC screening process for new hires.',
  savings: '$89,000',
  strategy: 'FICA Tip Credits + WOTC'
};

const faqs = [
  { question: 'What is the FICA tip credit?', answer: 'Employers can claim a tax credit for the employer share of FICA taxes paid on employee tips that exceed the minimum wage. This can be significant for restaurants with tipped employees.' },
  { question: 'How does WOTC work for restaurants?', answer: 'The Work Opportunity Tax Credit provides credits for hiring employees from target groups including veterans, food stamp recipients, and others. With high turnover in food service, this can generate substantial credits.' },
  { question: 'Should each location be a separate entity?', answer: 'Often yes, for liability protection. But the optimal structure depends on state taxes, financing needs, and exit strategy. We design structures that balance protection with tax efficiency.' },
  { question: 'How should I account for food waste?', answer: 'Proper tracking of spoilage, waste, and theft is essential for accurate financial reporting and maximizing deductions. We help implement systems that capture this information correctly.' }
];

export default function FoodBeveragePage() {
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
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">Food & Beverage</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Flavor Your<span className="block text-[#9bd9e4] mt-2">Bottom Line</span></h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10">From tip credits to multi-location accounting, food service businesses have unique tax opportunities. We help restaurants and food businesses keep more of every dollar.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-colors">Discuss Your Business<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Industry Challenges</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">What Food & Beverage Businesses Face</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, i) => (<div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4"><svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div><h3 className="font-bold text-[#003067] mb-2">{c.title}</h3><p className="text-gray-600 text-sm">{c.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Solutions</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">How We Help Food & Beverage Clients</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => (<div key={i} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"><h3 className="text-xl font-bold text-[#003067] mb-3">{s.title}</h3><p className="text-gray-600 leading-relaxed mb-4">{s.description}</p><div className="pt-4 border-t border-gray-100"><span className="text-[#9bd9e4] font-semibold text-sm">{s.savings}</span></div></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#003067]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Case Study</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2><p className="text-white/80 leading-relaxed mb-8">{caseStudy.description}</p><div className="flex gap-8"><div><div className="text-3xl font-bold text-[#9bd9e4]">{caseStudy.savings}</div><div className="text-white/60 text-sm">Annual Savings</div></div><div><div className="text-lg font-semibold text-white">{caseStudy.strategy}</div><div className="text-white/60 text-sm">Strategy Used</div></div></div></div>
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
        <div className="max-w-3xl mx-auto px-6 text-center"><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">Ready to Optimize Your Restaurant Taxes?</h2><p className="text-xl text-gray-600 mb-10">Schedule a consultation to discover credits and deductions you may be missing.</p><Link href="/contact" className="inline-flex items-center px-10 py-5 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-colors">Schedule Consultation<svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link></div>
      </section>
    </main>
  );
}
