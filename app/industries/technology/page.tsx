'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const challenges = [
  { title: 'Revenue Recognition Complexity', description: 'ASC 606 creates real challenges for SaaS, especially with implementation services, usage-based pricing, and multi-element arrangements.' },
  { title: 'Burn Rate Management', description: 'Running at a loss while building toward scale requires precise cash forecasting and runway management.' },
  { title: 'Investor and Board Reporting', description: 'VCs and boards expect specific metrics: MRR, ARR, churn, CAC, LTV. General accountants don\'t speak this language.' },
  { title: 'Equity Compensation', description: 'Stock options, restricted stock, and other equity instruments create accounting and tax complexity.' },
  { title: 'Rapid Change', description: 'Business models evolve quickly. Your financial systems need to keep pace.' }
];

const cfoServices = [
  'SaaS metrics dashboard: MRR, ARR, churn, expansion revenue, NRR',
  'Revenue recognition systems compliant with ASC 606',
  'Burn rate tracking and runway forecasting',
  'Board reporting packages with the metrics investors expect',
  'Financial modeling for fundraising and strategic planning',
  '409A valuations and cap table management support'
];

const taxStrategies = [
  'R&D tax credits, including the payroll tax election for pre-revenue companies',
  'State tax nexus analysis and planning',
  'Stock option planning (ISOs vs. NSOs, 83(b) elections)',
  'Entity structure for founder tax efficiency',
  'M&A and exit planning from a tax perspective'
];

const faqs = [
  { question: 'Can startups really use R&D credits against payroll taxes?', answer: 'Yes. Qualified small businesses (under $5M revenue, less than 5 years old) can elect to apply up to $500,000 of R&D credits annually against payroll taxes instead of income taxes. This provides real cash value even when you\'re pre-profit.' },
  { question: 'What SaaS metrics do investors expect to see?', answer: 'At minimum: MRR, ARR, gross and net churn, expansion revenue, CAC, LTV, and LTV:CAC ratio. More sophisticated investors also want to see NRR (Net Revenue Retention), magic number, and burn multiple. We build dashboards that track all of these.' },
  { question: 'How do you handle ASC 606 for SaaS?', answer: 'We establish revenue recognition policies that comply with ASC 606 while being practical to implement. This includes handling implementation fees, usage-based components, and contract modifications correctly. Getting this wrong creates audit issues and restatement risk.' },
  { question: 'What is a 409A valuation and when do I need one?', answer: 'A 409A valuation determines the fair market value of your common stock for purposes of issuing stock options. You need one before granting options and should update it annually or after material events like funding rounds. We coordinate with valuation firms and integrate results into your equity management.' }
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

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" alt="Technology" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-cyan-300 mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Industries</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-cyan-500/20 backdrop-blur-sm rounded-full mb-8 border border-cyan-400/30">
              <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 text-sm font-semibold tracking-wider uppercase">Technology</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Financial Infrastructure
              <span className="block text-cyan-400 mt-2">for Scale</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              SaaS metrics, revenue recognition, and growth-stage financial leadership for technology companies building toward profitability or exit.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg">
              Discuss Your Metrics & Growth
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
              <span className="text-cyan-500 font-semibold tracking-wider text-sm uppercase">Industry Challenges</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Tech Finance Is Different</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Technology companies operate on different economics than traditional businesses. The metrics that matter, the accounting complexities, and the stakeholder expectations all require specialized understanding.
              </p>

              <div className="space-y-4">
                {challenges.map((c, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#003067] mb-1">{c.title}</h4>
                      <p className="text-gray-600 text-sm">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Tech dashboard" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">$500K</div>
                <div className="text-sm opacity-90">R&D Credit Payroll Offset</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-500 font-semibold tracking-wider text-sm uppercase">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Financial Leadership for Growth Stage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CFO Services */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-[#003067] text-white text-xs font-semibold rounded-full mb-4">Primary Service</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Outsourced Controller & CFO Services</h3>
              <p className="text-gray-600 mb-6">We provide the financial function that growth-stage tech companies need:</p>
              <ul className="space-y-3">
                {cfoServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tax Strategy */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full mb-4">Tax Strategy</div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Tax Strategy for Technology</h3>
              <p className="text-gray-600 mb-6">With proper financial infrastructure, we optimize your tax position:</p>
              <ul className="space-y-3">
                {taxStrategies.map((strategy, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80" alt="Tech" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">By The Numbers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Key Statistics</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">$500K</div>
              <div className="text-white/80">Annual R&D credit payroll tax offset for startups</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">ASC 606</div>
              <div className="text-white/80">Still creating audit issues 6+ years after implementation</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">EGS</div>
              <div className="text-white/80">Efficient Growth Score tracked by leading SaaS CFOs</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-cyan-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-cyan-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-cyan-100/50 transition-colors">
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-cyan-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-cyan-500 rotate-180' : ''}`}>
                    <svg className={`w-4 h-4 transition-colors ${openFaq === idx ? 'text-white' : 'text-cyan-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="absolute inset-0 bg-cyan-600/90" />
            </div>
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Discuss Your Metrics & Growth Plan</h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">Schedule a consultation to review your financial infrastructure and growth trajectory.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-bold rounded-full hover:bg-[#003067] hover:text-white transition-all duration-300">
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
