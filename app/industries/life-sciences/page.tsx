'use client';

import { useState } from 'react';
import Link from 'next/link';

const challenges = [
  { title: 'R&D Credit Complexity', description: 'Life sciences companies often have qualifying activities across multiple functions but struggle to document and claim credits properly.' },
  { title: 'Grant Accounting', description: 'Government and foundation grants have complex accounting requirements that differ from traditional revenue recognition.' },
  { title: 'IP Monetization', description: 'Patents, licensing, and technology transfer create tax planning opportunities that require specialized knowledge.' },
  { title: 'Pre-Revenue Operations', description: 'Years of losses before commercialization require careful planning to preserve and utilize tax attributes.' }
];

const solutions = [
  { title: 'R&D Tax Credit Studies', description: 'Identify qualifying research activities across lab work, clinical trials, manufacturing process development, and regulatory submissions.', savings: 'Up to 10% of qualified expenses' },
  { title: 'Grant Accounting', description: 'Properly account for SBIR/STTR grants, NIH funding, and foundation awards with compliant cost allocation methods.', savings: 'Maintain grant compliance' },
  { title: 'IP Strategy', description: 'Structure intellectual property ownership and licensing for tax efficiency, considering domestic and international options.', savings: 'Reduce effective tax rate' },
  { title: 'NOL Planning', description: 'Preserve net operating losses through ownership changes and plan for optimal utilization when profitability arrives.', savings: 'Protect valuable tax assets' },
  { title: 'Qualified Small Business Stock', description: 'Structure to qualify for QSBS exclusion, potentially eliminating federal capital gains tax for early investors and founders.', savings: 'Up to 100% gain exclusion' },
  { title: 'State Incentives', description: 'Identify and capture state-specific life sciences incentives, including refundable R&D credits and biotech tax exemptions.', savings: 'Cash from state incentives' }
];

const caseStudy = {
  title: 'Biotech Captures $340K in Refundable R&D Credits',
  description: 'A pre-revenue biotech company assumed R&D credits were useless since they had no tax liability. We identified qualifying activities, documented eligible expenses, and claimed refundable R&D credits at both federal and state levels. The company received cash refunds despite having no taxable income.',
  savings: '$340,000',
  strategy: 'Refundable R&D Credits + State Incentives'
};

const faqs = [
  { question: 'Can we claim R&D credits without taxable income?', answer: 'Yes. Qualified small businesses (under $5M revenue, less than 5 years old) can take a portion of R&D credits against payroll taxes. Additionally, many states offer refundable R&D credits that generate cash regardless of profitability. We help pre-revenue companies capture these benefits.' },
  { question: 'What activities qualify for R&D credits in life sciences?', answer: 'Many activities qualify including drug development, clinical trials, manufacturing process development, formulation work, analytical method development, regulatory submissions, and quality system improvements. The key is documenting the technological uncertainty and experimentation involved.' },
  { question: 'How should we structure IP ownership?', answer: 'Optimal IP structuring depends on your commercialization strategy, investor requirements, and international considerations. Options include domestic holding structures, licensing arrangements, and in some cases international IP planning. We design structures aligned with your business strategy.' },
  { question: 'What happens to our NOLs if we raise another round?', answer: 'Ownership changes can limit NOL utilization under Section 382. We model potential limitations before funding rounds and work with your legal team to structure transactions that preserve as much of your tax attributes as possible.' }
];

export default function LifeSciencesPage() {
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
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">Life Sciences</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Innovate Science,<span className="block text-[#9bd9e4] mt-2">Optimize Taxes</span></h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10">Life sciences companies invest heavily in R&D with uncertain timelines to profitability. We help biotech, pharma, and medical device companies capture tax benefits at every stage of development.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-colors">Discuss Your Company<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Industry Challenges</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">What Life Sciences Companies Face</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, i) => (<div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4"><svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div><h3 className="font-bold text-[#003067] mb-2">{c.title}</h3><p className="text-gray-600 text-sm">{c.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Solutions</span><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">How We Help Life Sciences Companies</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => (<div key={i} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"><h3 className="text-xl font-bold text-[#003067] mb-3">{s.title}</h3><p className="text-gray-600 leading-relaxed mb-4">{s.description}</p><div className="pt-4 border-t border-gray-100"><span className="text-[#9bd9e4] font-semibold text-sm">{s.savings}</span></div></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#003067]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl"><span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Case Study</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2><p className="text-white/80 leading-relaxed mb-8">{caseStudy.description}</p><div className="flex gap-8"><div><div className="text-3xl font-bold text-[#9bd9e4]">{caseStudy.savings}</div><div className="text-white/60 text-sm">Cash Received</div></div><div><div className="text-lg font-semibold text-white">{caseStudy.strategy}</div><div className="text-white/60 text-sm">Strategy Used</div></div></div></div>
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
        <div className="max-w-3xl mx-auto px-6 text-center"><h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">Ready to Capture Life Sciences Tax Benefits?</h2><p className="text-xl text-gray-600 mb-10">Schedule a consultation to discover R&D credits and incentives designed for life sciences companies.</p><Link href="/contact" className="inline-flex items-center px-10 py-5 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-colors">Schedule Consultation<svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link></div>
      </section>
    </main>
  );
}
