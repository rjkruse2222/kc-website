'use client';

import { useState } from 'react';
import Link from 'next/link';

const challenges = [
  { title: 'Practice Valuation', description: 'Understanding true practice value is critical for buy-ins, buy-outs, and succession planning but often miscalculated.' },
  { title: 'Compliance Burden', description: 'Healthcare regulations create complex reporting requirements that intersect with tax planning in ways general CPAs miss.' },
  { title: 'Compensation Structures', description: 'Physician compensation models have significant tax implications that vary by entity type and ownership structure.' },
  { title: 'Retirement Planning', description: 'High-earning healthcare professionals need sophisticated retirement strategies beyond basic 401(k) plans.' }
];

const solutions = [
  { title: 'Practice Valuations', description: 'Accurate valuations for buy-ins, partner additions, succession planning, and exit strategy development.', savings: 'Know your true value' },
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
    <main className="bg-white">
      <section className="relative bg-[#003067] overflow-hidden">
        <div className="absolute inset-0"><div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#9bd9e4]/10 rounded-full blur-3xl" /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <Link href="/industries" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>All Industries
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">Healthcare</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Heal Patients,<span className="block text-[#9bd9e4] mt-2">Build Wealth</span></h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10">Healthcare professionals face unique tax challenges from practice valuation to retirement planning. We help you build wealth while you focus on patient care.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-colors">Discuss Your Practice<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Industry Challenges</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">What Healthcare Practices Face</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, i) => (<div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4"><svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div><h3 className="font-bold text-[#003067] mb-2">{c.title}</h3><p className="text-gray-600 text-sm">{c.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Solutions</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">How We Help Healthcare Practices</h2></div>
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
        <div className="max-w-3xl mx-auto px-6 text-center"><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">Ready to Optimize Your Practice Finances?</h2><p className="text-xl text-gray-600 mb-10">Schedule a consultation to discover tax strategies and retirement solutions designed for healthcare professionals.</p><Link href="/contact" className="inline-flex items-center px-10 py-5 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-colors">Schedule Consultation<svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link></div>
      </section>
    </main>
  );
}
