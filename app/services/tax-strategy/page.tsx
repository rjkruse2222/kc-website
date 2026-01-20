'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your complete financial picture—business structure, income sources, family situation, and goals—to understand your unique tax profile.'
  },
  {
    number: '02',
    title: 'Create Your Tax Plan',
    description: 'We develop a customized tax strategy with specific actions, timelines, and projected savings tailored to your situation.'
  },
  {
    number: '03',
    title: 'Implement the Plan',
    description: 'We execute the strategy alongside you, making the necessary changes to your structure, timing, and financial decisions.'
  },
  {
    number: '04',
    title: 'Quarterly Check-ins',
    description: 'Regular meetings throughout the year to review progress, adjust strategies, and identify new opportunities as your situation evolves.'
  },
  {
    number: '05',
    title: 'Tax Preparation',
    description: 'Your tax returns are prepared by the same team that built your strategy—no handoffs, no miscommunication, no missed deductions.'
  },
  {
    number: '06',
    title: 'Ongoing Monitoring',
    description: 'Tax laws change. Your business changes. We continuously monitor for new opportunities and adjust your strategy accordingly.'
  }
];

const caseStudies = [
  {
    id: 'manufacturing-entity-restructure',
    industry: 'Manufacturing',
    title: 'Entity Restructuring Saves $127K',
    summary: 'A growing manufacturer was paying excessive self-employment taxes. Strategic restructuring transformed their tax situation.',
    savings: '$127,000',
    strategy: 'S-Corp Election + Compensation Planning',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
  },
  {
    id: 'technology-rd-credits',
    industry: 'Technology',
    title: 'R&D Credits Recovered for Software Firm',
    summary: 'A software company had no idea they qualified for R&D tax credits. We identified qualifying activities and recovered three years of credits.',
    savings: '$89,000',
    strategy: 'R&D Tax Credits + Amended Returns',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80'
  },
  {
    id: 'real-estate-cost-segregation',
    industry: 'Real Estate',
    title: 'Cost Segregation Accelerates Depreciation',
    summary: 'A property investor was depreciating buildings over 39 years. A cost segregation study unlocked immediate tax savings.',
    savings: '$64,000',
    strategy: 'Cost Segregation + Bonus Depreciation',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
  }
];

const faqs = [
  {
    question: 'How is tax strategy different from tax preparation?',
    answer: 'Tax preparation is backward-looking: filing returns for what already happened. Tax strategy is forward-looking: making proactive decisions throughout the year to minimize your tax burden before year-end. We do both—your tax preparation is included in every engagement—but strategy is where the real savings happen.'
  },
  {
    question: 'What does the investment look like?',
    answer: 'The investment varies based on the complexity of your situation. Our tax strategy engagements start at $10,000, with monthly advisory fees starting at $250. Every situation is different—a business with multiple entities, real estate holdings, and multi-state operations requires more planning than a single-entity business. We\'ll provide a clear proposal after understanding your specific needs.'
  },
  {
    question: 'What if the savings don\'t cover the investment?',
    answer: 'We stand behind our work. If we can\'t identify tax savings that exceed your investment in our services, we\'ll make it right. We\'ve never had to invoke this guarantee—our average client sees returns of 3x or more on their tax planning investment.'
  },
  {
    question: 'When should I start tax planning?',
    answer: 'The best time is January 1st. The second best time is now. We work with clients year-round, but the earlier we engage, the more opportunities we have to optimize your tax position. Many tax-saving strategies must be implemented before year-end.'
  },
  {
    question: 'What size businesses do you work with?',
    answer: 'We specialize in small to lower middle market companies with revenues between $1M and $50M. This is the sweet spot where sophisticated tax strategy makes a significant impact, but where many firms don\'t provide this level of service.'
  },
  {
    question: 'Do you work with businesses outside Ohio?',
    answer: 'Yes. While our headquarters is in Cincinnati, we serve clients in all 50 states. Our expertise in multi-state taxation makes us particularly well-suited for businesses with operations or customers in multiple states.'
  }
];

export default function TaxStrategyPage() {
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

      {/* Hero Section - Ken Burns Effect */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <img
              src="/images/tax-strategy-hero.jpg"
              alt="Night sky representing unique tax strategy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-[#9bd9e4] mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Services</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#9bd9e4]/20 backdrop-blur-sm rounded-full mb-8 border border-[#9bd9e4]/30">
              <div className="w-2.5 h-2.5 bg-[#9bd9e4] rounded-full animate-pulse" />
              <span className="text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase">Tax Strategy</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Your Tax Strategy,
              <span className="block text-[#9bd9e4] mt-2">As Unique As You</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              Taxes are the largest expense most business owners pay over their lifetime. Your largest expense deserves your closest attention—and a strategy built specifically for you.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg">
              Build Your Strategy
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantee Section - Prominent */}
      <section className="py-16 bg-[#003067]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-[#9bd9e4]/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-[#9bd9e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Our Guarantee</h2>
              <p className="text-white/80 text-lg max-w-2xl">
                Your tax savings will exceed your investment in our services—or we make it right. We&apos;ve built our practice on this promise, and we&apos;ve never had to break it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '3x+', label: 'Average ROI', sublabel: 'on tax planning investment' },
              { value: '20+', label: 'Years Experience', sublabel: 'serving our clients' },
              { value: '4', label: 'Strategic Reviews', sublabel: 'quarterly planning sessions' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl font-bold text-[#003067] mb-2">{stat.value}</div>
                <div className="text-gray-900 font-medium">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Process Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">How We Work With You</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tax strategy is a year-round partnership, not a once-a-year transaction. Here&apos;s how we work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9bd9e4]">
                <div className="text-5xl font-bold text-[#9bd9e4]/30 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-[#003067] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#003067]/5 rounded-full">
              <svg className="w-5 h-5 text-[#003067]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#003067] font-medium">Tax preparation is always included—no separate fees, no surprises.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Real Results</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">Client Success Stories</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every client situation is different. Here&apos;s how strategic tax planning made a measurable impact for businesses like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <Link
                key={idx}
                href={`/services/tax-strategy/case-studies/${study.id}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003067]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-[#9bd9e4] text-[#003067] text-xs font-semibold rounded-full">{study.industry}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#003067] mb-2 group-hover:text-[#9bd9e4] transition-colors">{study.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{study.summary}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-xs text-gray-500">Tax Savings</div>
                      <div className="text-xl font-bold text-[#003067]">{study.savings}</div>
                    </div>
                    <div className="flex items-center gap-2 text-[#9bd9e4] font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Read More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Year-Round Partnership Visual */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1920&q=80"
            alt="Strategic planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Why Year-Round?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
                Tax Strategy is a<br />
                <span className="text-[#9bd9e4]">12-Month Process</span>
              </h2>

              <div className="space-y-6">
                {[
                  { quarter: 'Q1', title: 'Planning & Projections', desc: 'Set the foundation with initial projections and identify early opportunities.' },
                  { quarter: 'Q2', title: 'Mid-Year Review', desc: 'Assess progress and adjust strategies based on actual performance.' },
                  { quarter: 'Q3', title: 'Pre Year-End Strategy', desc: 'Execute tax-saving moves while there\'s still time to make an impact.' },
                  { quarter: 'Q4', title: 'Year-End Optimization', desc: 'Final adjustments and preparation for seamless tax filing.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${idx === 3 ? 'bg-[#9bd9e4]' : 'bg-white/10'}`}>
                      <span className={`font-bold ${idx === 3 ? 'text-[#003067]' : 'text-white'}`}>{item.quarter}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                <div className="text-7xl md:text-8xl font-bold text-[#9bd9e4] mb-4">4</div>
                <div className="text-white text-2xl font-medium mb-2">Strategic Reviews</div>
                <div className="text-white/70 mb-8">Every Year</div>
                <p className="text-white/80">
                  While others meet once a year to file, we meet quarterly to plan. That&apos;s the difference between tax preparation and tax strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-[#9bd9e4] transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100/50 transition-colors"
                >
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#9bd9e4]/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-[#9bd9e4] rotate-180' : ''}`}>
                    <svg className={`w-4 h-4 transition-colors ${openFaq === idx ? 'text-white' : 'text-[#9bd9e4]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <img
                src="/images/tax-strategy-hero.jpg"
                alt="Tax strategy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#003067]/90" />
            </div>
            <div className="relative p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Your<br />Custom Tax Strategy?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                Schedule a complimentary tax strategy review to identify opportunities unique to your situation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-all duration-300"
              >
                Schedule Your Review
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
