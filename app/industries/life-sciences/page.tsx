'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Investor-Driven Audit Pressure', description: 'As funding rounds grow, so do investor demands for audited financials. Many life sciences companies aren\'t ready when the request comes.' },
  { title: 'Clinical Trial Accruals', description: 'Accurately accruing clinical trial costs is one of the most complex areas in life sciences accounting. Getting it wrong creates audit problems.' },
  { title: 'Pre-Revenue Operations', description: 'Managing burn rate and runway while operating at a loss for years requires specialized financial planning.' },
  { title: 'Milestone Revenue Recognition', description: 'ASC 606 creates significant complexity for collaborative agreements and milestone-based payments.' },
  { title: 'Investor Reporting', description: 'Life sciences investors expect specific metrics and projections. Board packages require industry-specific financial presentation.' }
];

const cfoServices = [
  'Clinical trial accrual methodologies and tracking',
  'Burn rate management and runway forecasting',
  'Program-level cost tracking for R&D portfolio management',
  'Board and investor reporting packages',
  'Audit preparation with life sciences expertise',
  'Grant accounting for NIH, SBIR/STTR, and other funding sources'
];

const taxStrategies = [
  'R&D tax credits for qualifying research activities',
  'Orphan drug credit opportunities where applicable',
  'State tax incentives for life sciences investment',
  'IP planning and transfer pricing considerations',
  'Exit planning from a tax perspective'
];

const faqs = [
  { question: 'Can pre-revenue companies benefit from R&D credits?', answer: 'Yes. Qualified small businesses can elect to apply up to $500,000 of R&D credits annually against payroll taxes rather than income taxes. This allows pre-revenue startups to benefit from R&D credits even without taxable income.' },
  { question: 'What life sciences activities qualify for R&D credits?', answer: 'Many activities qualify including clinical trial design and execution, drug formulation development, medical device prototyping, diagnostic test development, process development for manufacturing, and software development for research applications.' },
  { question: 'How do you handle clinical trial accruals?', answer: 'We implement site-by-site accrual tracking, patient enrollment analysis, and protocol-based cost estimation. This ensures your financials accurately reflect incurred costs, which is critical for investor reporting and audit readiness.' },
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

      {/* Hero Section */}
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
              Financial Leadership
              <span className="block text-emerald-400 mt-2">for the Long Development Cycle</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              Grant accounting, clinical trial accruals, and strategic financial guidance for biotech, pharmaceutical, and medical device companies navigating from discovery to commercialization.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-all duration-300 shadow-lg">
              Discuss Your Development Stage
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
              <span className="text-emerald-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Life Sciences Finance Is Highly Specialized</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Life sciences companies face accounting complexity that most firms cannot handle.
              </p>

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

      {/* Our Approach Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-500 font-semibold tracking-wider text-sm uppercase">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Financial Systems for Discovery Through Commercialization</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CFO Services */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-[#003067] text-white text-xs font-semibold rounded-full mb-4">Primary Service</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Outsourced Controller & CFO Services</h3>
              <p className="text-gray-600 mb-6">We provide financial leadership throughout the development lifecycle:</p>
              <ul className="space-y-3">
                {cfoServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tax Strategy */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full mb-4">Tax Strategy</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Tax Strategy for Life Sciences</h3>
              <p className="text-gray-600 mb-6">With proper financial systems, we capture available tax benefits:</p>
              <ul className="space-y-3">
                {taxStrategies.map((strategy, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{strategy}</span>
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
          <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1920&q=80" alt="Research lab" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase">By The Numbers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Key Statistics</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">$500K</div>
              <div className="text-white/80">Annual R&D credit payroll tax offset for startups</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">ASC 606</div>
              <div className="text-white/80">R&D arrangements growing more complex each year</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-white/80">QSBS gain exclusion potential for 5+ year holds</div>
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
              <div className="absolute inset-0 bg-emerald-600/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Discuss Your Development Stage</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to build financial systems that support your path to commercialization.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 font-bold rounded-full hover:bg-[#003067] hover:text-white transition-all duration-300">
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
