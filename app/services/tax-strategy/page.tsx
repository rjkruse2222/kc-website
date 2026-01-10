'use client';

import { useState } from 'react';
import Link from 'next/link';

const processSteps = [
  {
    number: '01',
    title: 'Identify',
    description: 'We analyze your complete financial picture to uncover every tax-saving opportunity available to your business.'
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'We develop a customized tax plan with specific actions, timelines, and projected savings for your situation.'
  },
  {
    number: '03',
    title: 'Implement',
    description: 'We execute the strategy alongside you, ensuring every deduction is captured and every deadline is met.'
  }
];

const coreServices = [
  {
    title: 'Tax Planning & Projections',
    description: 'Year-round tax planning with quarterly projections to optimize your tax position before year-end. We identify opportunities while there is still time to act.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Entity Structure Optimization',
    description: 'Is your business structure still serving you? We analyze whether S-Corp, C-Corp, partnership, or other structures could reduce your overall tax burden.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'R&D Tax Credits',
    description: 'Many businesses leave money on the table. We identify and capture research and development credits that others overlook.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Multi-State Tax Compliance',
    description: 'Navigate complex multi-state tax obligations with expert guidance on nexus, apportionment, and voluntary disclosure agreements.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Exit & Succession Planning',
    description: 'Tax-efficient strategies for business transitions, sales, and generational wealth transfer. Plan your exit before you need it.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'IRS Representation',
    description: 'Expert representation during audits, appeals, and resolution of tax disputes. We handle the IRS so you can focus on your business.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const results = [
  { metric: '10%', label: 'Average Tax Rate Reduction', sublabel: 'for qualified clients' },
  { metric: '20+', label: 'Years Experience', sublabel: 'serving Cincinnati businesses' },
  { metric: '12+', label: 'Touchpoints Per Year', sublabel: 'proactive planning, not reactive filing' }
];

const faqs = [
  {
    question: 'How is tax strategy different from tax preparation?',
    answer: 'Tax preparation is backward-looking: filing returns for what already happened. Tax strategy is forward-looking: making proactive decisions throughout the year to minimize your tax burden before year-end. We do both, but strategy is where real savings happen.'
  },
  {
    question: 'When should I start tax planning?',
    answer: 'The best time is January 1st. The second best time is now. We work with clients year-round, but the earlier we engage, the more opportunities we have to optimize your tax position. Many tax-saving strategies must be implemented before year-end.'
  },
  {
    question: 'What size businesses do you work with?',
    answer: 'We specialize in small to lower middle market companies with revenues between $1M and $50M. This is the sweet spot where sophisticated tax strategy makes a significant impact, but where many firms fall short.'
  },
  {
    question: 'Do you work with businesses outside Ohio?',
    answer: 'Yes. While we are based in Cincinnati, we serve clients across multiple states. Our expertise in multi-state taxation makes us well-suited for businesses with operations or customers in multiple jurisdictions.'
  },
  {
    question: 'How do you charge for tax strategy?',
    answer: 'We offer both project-based and ongoing engagement models. Most clients choose an annual strategy engagement that includes quarterly planning sessions, year-end optimization, and return preparation. Contact us for a custom quote based on your needs.'
  }
];

export default function TaxStrategyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#003067] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#9bd9e4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9bd9e4]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <Link
            href="/services"
            className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Proactive Tax Strategy
              <span className="block text-[#9bd9e4] mt-2">Not Just Preparation</span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              Most CPAs wait until April. We work with you year-round to identify opportunities,
              implement strategies, and minimize your tax burden while there is still time to act.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact-us"
                className="group px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-all duration-300"
              >
                Schedule a Tax Review
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {results.map((item, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-[#003067] mb-2">{item.metric}</div>
                <div className="text-gray-900 font-medium">{item.label}</div>
                <div className="text-gray-500 text-sm">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">
              How We Work With You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Connector line */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#9bd9e4] to-transparent -translate-x-1/2 z-0" />
                )}

                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold text-[#9bd9e4]/30 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold text-[#003067] mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">
              Tax Strategy Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax planning designed for growing businesses. Every strategy is tailored to your specific situation and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-[#003067] flex items-center justify-center mb-6 group-hover:bg-[#9bd9e4] transition-colors duration-300">
                  <span className="text-white group-hover:text-[#003067] transition-colors duration-300">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#003067] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Year-Round Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Why Year-Round?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-8">
                Tax Strategy is a<br />
                <span className="text-[#9bd9e4]">12-Month Process</span>
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#003067] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">Q1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003067] mb-1">Planning & Projections</h4>
                    <p className="text-gray-600 text-sm">Set the foundation with initial projections and identify early opportunities.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#003067] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">Q2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003067] mb-1">Mid-Year Review</h4>
                    <p className="text-gray-600 text-sm">Assess progress and adjust strategies based on actual performance.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#003067] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">Q3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003067] mb-1">Pre Year-End Strategy</h4>
                    <p className="text-gray-600 text-sm">Execute tax-saving moves while there is still time to make an impact.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#9bd9e4] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#003067] font-bold">Q4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003067] mb-1">Year-End Optimization</h4>
                    <p className="text-gray-600 text-sm">Final adjustments and preparation for seamless tax filing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#003067] rounded-3xl p-12 text-center">
                <div className="text-6xl md:text-7xl font-bold text-[#9bd9e4] mb-4">12+</div>
                <div className="text-white text-xl font-medium mb-2">Tax Planning Touchpoints</div>
                <div className="text-white/70">Every Year</div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-white/80 text-sm">
                    While others meet once a year to file, we meet monthly to plan. That is the difference between tax preparation and tax strategy.
                  </p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9bd9e4]/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#9bd9e4] flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#003067] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#9bd9e4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#9bd9e4]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Minimize<br />Your Tax Burden?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Schedule a complimentary tax strategy review to identify opportunities for your business.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center px-10 py-5 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-all duration-300"
          >
            Schedule Your Review
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
