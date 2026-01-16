'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'R&D Credit Complexity', description: 'Technology companies often miss qualified research activities because they assume only formal R&D departments qualify.' },
  { title: 'Stock Compensation', description: 'ISOs, NSOs, and RSUs each have different tax implications that can cost employees and companies thousands if mishandled.' },
  { title: 'Revenue Recognition', description: 'SaaS and subscription models create complex revenue recognition issues that affect both GAAP and tax reporting.' },
  { title: 'Multi-State Nexus', description: 'Remote employees and digital sales create nexus in multiple states, triggering filing obligations many tech companies overlook.' }
];

const solutions = [
  { title: 'R&D Tax Credit Studies', description: 'Identify qualifying activities including software development, cloud infrastructure improvements, and algorithm development.', savings: 'Up to 10% of qualified expenses', highlight: true },
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
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" alt="Technology circuit board" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-violet-300 mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-violet-500/20 backdrop-blur-sm rounded-full mb-8 border border-violet-500/30">
              <div className="w-2.5 h-2.5 bg-violet-400 rounded-full animate-pulse" />
              <span className="text-violet-300 text-sm font-semibold tracking-wider uppercase">Technology</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Scale Smart,
              <span className="block text-violet-400 mt-2">Tax Smarter</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              From R&D credits to stock option planning, tech companies have unique tax opportunities at every stage of growth. We help you capture credits, optimize equity compensation, and plan for the exit.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-violet-500 text-white font-bold rounded-full hover:bg-violet-400 transition-all duration-300 shadow-lg">
              Discuss Your Business
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
              <span className="text-violet-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">What Tech Companies Face</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">Technology has unique tax complexities that require specialized knowledge.</p>

              <div className="space-y-4">
                {challenges.map((c, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-violet-50 transition-colors">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#003067] mb-1">{c.title}</h4>
                      <p className="text-gray-600 text-sm">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80" alt="Developer coding" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-violet-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">10%</div>
                <div className="text-sm opacity-90">R&D Credit Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-violet-500 font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">How We Help Tech Companies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, idx) => (
              <div key={idx} className={`group bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl ${s.highlight ? 'border-violet-200 shadow-lg lg:col-span-2' : 'border-gray-100 hover:border-violet-200'}`}>
                {s.highlight && <div className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full mb-4">Most Popular</div>}
                <h3 className="text-xl font-bold text-[#003067] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="w-2 h-2 bg-violet-500 rounded-full" />
                  <span className="text-violet-600 font-semibold text-sm">{s.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study with Photo Background */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&q=80" alt="Tech workspace" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="text-violet-400 font-semibold tracking-wider text-sm uppercase">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{caseStudy.title}</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">{caseStudy.description}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-violet-400 mb-1">{caseStudy.savings}</div>
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
            <span className="text-violet-500 font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-violet-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-violet-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-violet-100/50 transition-colors">
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-violet-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-violet-500 rotate-180' : ''}`}>
                    <svg className={`w-4 h-4 transition-colors ${openFaq === idx ? 'text-white' : 'text-violet-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" alt="Technology" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-violet-700/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Optimize Your Tech Company Taxes?</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to discover R&D credits and tax strategies you may be missing.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-violet-600 font-bold rounded-full hover:bg-violet-50 transition-all duration-300">
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
