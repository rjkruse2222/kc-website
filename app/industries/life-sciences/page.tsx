'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'R&D Credit Complexity', description: 'Clinical trials, drug development, and research activities often qualify for substantial R&D credits that many firms miss.' },
  { title: 'Regulatory Compliance', description: 'FDA requirements and industry regulations create complex accounting and reporting obligations with tax implications.' },
  { title: 'IP Valuation', description: 'Patents, licensing arrangements, and intellectual property create valuation and transfer pricing challenges.' },
  { title: 'Funding Complexity', description: 'Grants, VC funding, and milestone payments create complex revenue recognition and tax timing issues.' }
];

const solutions = [
  { title: 'R&D Tax Credit Studies', description: 'Comprehensive analysis of clinical trials, drug development, medical device innovation, and research activities to maximize federal and state credits.', savings: 'Up to 10% of qualified expenses', highlight: true },
  { title: 'Grant Accounting', description: 'Proper accounting for NIH grants, SBIR/STTR awards, and other research funding with tax-optimal treatment.', savings: 'Maximize allowable costs' },
  { title: 'IP Strategy', description: 'Structure intellectual property ownership, licensing arrangements, and royalty streams for tax efficiency.', savings: 'Optimize IP income' },
  { title: 'Entity Structuring', description: 'Design optimal corporate structure for research entities, holding companies, and commercialization vehicles.', savings: 'Protect assets & reduce taxes' },
  { title: 'Startup Tax Planning', description: 'Navigate NOL carryforwards, Section 1202 QSBS exclusions, and other startup-specific tax benefits.', savings: 'Preserve valuable tax attributes' },
  { title: 'Exit Planning', description: 'Structure acquisitions, licensing deals, and IPOs to maximize after-tax proceeds for founders and investors.', savings: 'Maximize exit value' }
];

const caseStudy = {
  title: 'Biotech Startup Captures $340K in R&D Credits',
  description: 'A pre-revenue biotech company conducting clinical trials assumed they could not benefit from R&D credits without taxable income. We helped them utilize the payroll tax offset for qualified small businesses and structured their research agreements to maximize credit-eligible activities.',
  savings: '$340,000',
  strategy: 'Payroll Tax Offset + R&D Credits'
};

const faqs = [
  { question: 'Can pre-revenue companies benefit from R&D credits?', answer: 'Yes. Qualified small businesses can elect to apply up to $500,000 of R&D credits annually against payroll taxes rather than income taxes. This allows pre-revenue startups to benefit from R&D credits even without taxable income.' },
  { question: 'What life sciences activities qualify for R&D credits?', answer: 'Many activities qualify including clinical trial design and execution, drug formulation development, medical device prototyping, diagnostic test development, process development for manufacturing, and software development for research applications.' },
  { question: 'How should we structure IP ownership?', answer: 'The optimal structure depends on your commercialization strategy, investor requirements, and tax situation. Options include holding IP in separate entities, licensing arrangements, and cost-sharing agreements. We analyze your specific situation to recommend the best approach.' },
  { question: 'What is QSBS and how can it benefit our investors?', answer: 'Qualified Small Business Stock (Section 1202) allows investors in qualifying C-corporations to exclude up to 100% of capital gains on stock held more than 5 years. For life sciences companies, this can provide enormous tax savings on a successful exit.' }
];

export default function LifeSciencesPage() {
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
            <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80" alt="Laboratory research" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-emerald-300 mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-emerald-500/20 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/30">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-300 text-sm font-semibold tracking-wider uppercase">Life Sciences</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Innovate Science,
              <span className="block text-emerald-400 mt-2">Optimize Taxes</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              From R&D credits to IP strategy, life sciences companies have unique tax opportunities at every stage. We help biotech, pharma, and medical device companies maximize their tax position.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-all duration-300 shadow-lg">
              Discuss Your Company
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
              <span className="text-emerald-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">What Life Sciences Companies Face</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">Life sciences has unique tax complexities that require specialized knowledge.</p>

              <div className="space-y-4">
                {challenges.map((c, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#003067] mb-1">{c.title}</h4>
                      <p className="text-gray-600 text-sm">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80" alt="Scientist in lab" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">$500K</div>
                <div className="text-sm opacity-90">Annual Payroll Tax Offset</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-500 font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">How We Help Life Sciences Companies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, idx) => (
              <div key={idx} className={`group bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl ${s.highlight ? 'border-emerald-200 shadow-lg lg:col-span-2' : 'border-gray-100 hover:border-emerald-200'}`}>
                {s.highlight && <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-4">Most Popular</div>}
                <h3 className="text-xl font-bold text-[#003067] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-emerald-600 font-semibold text-sm">{s.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study with Photo Background */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1920&q=80" alt="Research lab" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">{caseStudy.description}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-1">{caseStudy.savings}</div>
                <div className="text-white/60 text-sm">Total Credits Captured</div>
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
            <span className="text-emerald-500 font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-emerald-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-emerald-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-emerald-100/50 transition-colors">
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-emerald-500 rotate-180' : ''}`}>
                    <svg className={`w-4 h-4 transition-colors ${openFaq === idx ? 'text-white' : 'text-emerald-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80" alt="Life sciences" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-emerald-700/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Optimize Your Life Sciences Taxes?</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to discover R&D credits and tax strategies designed for innovative companies.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-all duration-300">
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
