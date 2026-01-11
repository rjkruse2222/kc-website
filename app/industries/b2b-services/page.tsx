'use client';

import { useState } from 'react';
import Link from 'next/link';

const challenges = [
  { title: 'Entity Selection', description: 'Choosing between LLC, S-Corp, and C-Corp has major implications for taxation, owner compensation, and eventual exit.' },
  { title: 'Partner Compensation', description: 'Balancing guaranteed payments, distributions, and profits interests creates complexity and potential disputes.' },
  { title: 'Project-Based Revenue', description: 'Recognizing revenue across long-term projects while managing tax timing requires careful planning.' },
  { title: 'Scaling Tax Efficiently', description: 'Growing from solo practitioner to multi-partner firm requires restructuring to remain tax-efficient.' }
];

const solutions = [
  { title: 'Entity Structuring', description: 'Design the optimal legal structure for tax efficiency, liability protection, and growth flexibility.', savings: 'Reduce self-employment tax' },
  { title: 'Partner Compensation Planning', description: 'Structure partner draws, guaranteed payments, and profit allocations for tax efficiency and fairness.', savings: 'Align incentives with taxes' },
  { title: 'Revenue Recognition', description: 'Implement accounting methods that optimize cash flow while properly recognizing project-based revenue.', savings: 'Improve tax timing' },
  { title: 'Retirement Plan Design', description: 'Design retirement plans that work for partners with different income levels and contribution preferences.', savings: 'Maximize tax-deferred savings' },
  { title: 'Deferred Compensation', description: 'Structure non-qualified deferred compensation to shift income to lower-tax years.', savings: 'Defer and reduce taxes' },
  { title: 'Exit Planning', description: 'Plan for partner buy-outs, firm sales, and succession with tax-efficient structures.', savings: 'Maximize exit proceeds' }
];

const caseStudy = {
  title: 'Consulting Firm Restructures, Saves $73K',
  description: 'A 5-partner consulting firm was structured as a general partnership, exposing partners to maximum self-employment tax. We restructured as an S-Corporation with appropriate partner compensation, implemented a profit-sharing retirement plan, and established a deferred compensation arrangement for senior partners.',
  savings: '$73,000',
  strategy: 'S-Corp Election + Retirement Plan'
};

const faqs = [
  { question: 'When should I convert to an S-Corporation?', answer: 'Generally when your net earnings from self-employment exceed $60,000-$80,000 annually. At that point, the S-Corp structure allows you to pay yourself a reasonable salary and take additional profits as distributions not subject to self-employment tax. We analyze your specific numbers to determine the optimal timing.' },
  { question: 'How should partners be compensated?', answer: 'Partner compensation can include guaranteed payments, profit allocations, and distributions. The optimal mix depends on partner contribution levels, tax situations, and firm cash flow needs. We design structures that balance tax efficiency with fairness and operational needs.' },
  { question: 'What retirement plan works best for partnerships?', answer: 'It depends on the partners\' ages, income levels, and preferences. Options include SEP-IRAs, SIMPLE IRAs, 401(k) plans with profit sharing, and defined benefit plans. For firms with income disparity between partners, certain designs work better than others.' },
  { question: 'How do I plan for a partner buy-out?', answer: 'Start planning years in advance. Structure the firm\'s operating agreement to address buy-out mechanics, valuation methods, and payment terms. Consider whether Section 736(b) payments or installment sales provide better tax treatment for both parties.' }
];

export default function B2BServicesPage() {
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
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">B2B Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Serve Clients,<span className="block text-[#9bd9e4] mt-2">Serve Yourself</span></h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10">Professional service firms face unique challenges from partner compensation to retirement planning. We help consulting firms, agencies, and B2B service providers optimize their tax position.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-colors">Discuss Your Firm<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Industry Challenges</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">What Service Firms Face</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, i) => (<div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4"><svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div><h3 className="font-bold text-[#003067] mb-2">{c.title}</h3><p className="text-gray-600 text-sm">{c.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Solutions</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">How We Help Service Firms</h2></div>
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
        <div className="max-w-3xl mx-auto px-6 text-center"><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">Ready to Optimize Your Firm's Taxes?</h2><p className="text-xl text-gray-600 mb-10">Schedule a consultation to discover entity structures and strategies designed for professional service firms.</p><Link href="/contact" className="inline-flex items-center px-10 py-5 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-colors">Schedule Consultation<svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link></div>
      </section>
    </main>
  );
}
