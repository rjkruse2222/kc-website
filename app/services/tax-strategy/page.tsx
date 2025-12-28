'use client';

import { useState } from 'react';
import Link from 'next/link';

const taxServices = [
  {
    title: 'Tax Planning & Projections',
    description: 'Year-round tax planning with quarterly projections to optimize your tax position before year-end.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Entity Structure Optimization',
    description: 'Strategic analysis of your business structure to maximize tax efficiency and liability protection.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Multi-State Tax Compliance',
    description: 'Navigate complex multi-state tax obligations with expert guidance on nexus and apportionment.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'R&D Tax Credits',
    description: 'Identify and capture research and development tax credits that many businesses overlook.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Exit & Succession Planning',
    description: 'Tax-efficient strategies for business transitions, sales, and generational wealth transfer.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'IRS Representation',
    description: 'Expert representation during audits, appeals, and resolution of tax disputes with taxing authorities.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const caseStudies = [
  {
    industry: 'Manufacturing',
    baseline: 'Paying 32% effective tax rate',
    strategy: 'R&D credit identification + cost segregation study + entity restructuring',
    impact: 'Reduced effective rate to 22%',
    timeline: '18 months'
  },
  {
    industry: 'Professional Services',
    baseline: 'Multi-state nexus exposure',
    strategy: 'Nexus study + voluntary disclosure agreements + apportionment optimization',
    impact: 'Avoided $180K in penalties',
    timeline: '6 months'
  },
  {
    industry: 'Real Estate',
    baseline: 'Large capital gains exposure from property sale',
    strategy: '1031 exchange structuring + installment sale + opportunity zone investment',
    impact: 'Deferred $2.1M in taxes',
    timeline: '12 months'
  }
];

const faqs = [
  {
    question: 'How is tax strategy different from tax preparation?',
    answer: 'Tax preparation is backward-looking: filing returns for what already happened. Tax strategy is forward-looking: making proactive decisions throughout the year to minimize your tax burden before year-end. We do both, but strategy is where real savings happen.'
  },
  {
    question: 'When should I start tax planning for the year?',
    answer: 'The best time is January 1st. The second best time is now. We work with clients year-round, but the earlier we engage, the more opportunities we have to optimize your tax position. Many tax-saving strategies must be implemented before year-end.'
  },
  {
    question: 'Do you work with businesses outside of Ohio?',
    answer: 'Yes. While we are based in Cincinnati, we serve clients across multiple states. Our expertise in multi-state taxation makes us particularly well-suited for businesses with operations or customers in multiple jurisdictions.'
  },
  {
    question: 'What size businesses do you typically work with?',
    answer: 'We specialize in small to lower middle market companies, typically with revenues between $1M and $50M. This is the sweet spot where sophisticated tax strategy can make a significant impact, but many firms overlook.'
  },
  {
    question: 'How do you charge for tax strategy services?',
    answer: 'We offer both project-based and ongoing engagement models. For most clients, we recommend an annual strategy engagement that includes quarterly planning sessions, year-end optimization, and return preparation. Contact us for a custom quote.'
  }
];

export default function TaxStrategyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003067]/90 via-[#003067]/85 to-[#002050]/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/home-hero-tall.jpg)' }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">
          <Link
            href="/services"
            className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>

          <div className="inline-block px-6 py-2 rounded-full bg-[#9bd9e4]/20 border border-white/20 mb-8">
            <span className="text-[#9bd9e4] text-sm font-semibold uppercase tracking-wider">Tax Strategy</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide uppercase max-w-4xl">
            Proactive Tax Strategy,<br />
            <span className="font-semibold">Not Just Preparation</span>
          </h1>

          <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
            We don&apos;t wait until April. Our year-round approach to tax planning helps you make
            strategic decisions when they can still make a difference.
          </p>

          <a
            href="mailto:info@kruseandcrawford.com?subject=Tax%20Strategy%20Inquiry"
            className="inline-flex items-center px-10 py-5 bg-[#9bd9e4] text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Tax Review
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#9bd9e4] text-xs font-semibold uppercase tracking-[4px] mb-4">Our Approach</div>
              <h2 className="text-3xl md:text-4xl font-light text-[#003067] uppercase tracking-wide mb-8">
                Year-Round Planning,<br />
                <span className="font-semibold">Year-Round Results</span>
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#003067] mb-3">Quarterly Planning Sessions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We meet with you quarterly to review your financial position, project year-end results,
                    and identify tax-saving opportunities while there&apos;s still time to act.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#003067] mb-3">Entity Optimization</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Is your business structure still serving you? We analyze whether S-Corp, C-Corp,
                    partnership, or other structures could reduce your overall tax burden.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#003067] mb-3">Integration with Your Accountant</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you use our Client Accounting services, your tax strategy is seamlessly integrated
                    with your monthly financials. Real-time data means better decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#003067] to-[#002050] rounded-2xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-light text-[#9bd9e4] mb-4">12+</div>
                  <div className="text-white text-xl uppercase tracking-wide">Tax Planning</div>
                  <div className="text-white/70">Touchpoints Per Year</div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#9bd9e4]/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#9bd9e4] text-xs font-semibold uppercase tracking-[4px] mb-4">What We Do</div>
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] uppercase tracking-wide">
              Tax Strategy Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taxServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-[#9bd9e4]/20 flex items-center justify-center mb-6 group-hover:bg-[#003067] transition-colors duration-500">
                  <span className="text-[#003067] group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#003067] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#9bd9e4] text-xs font-semibold uppercase tracking-[4px] mb-4">Results</div>
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] uppercase tracking-wide mb-4">
              Client Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from real clients. Names and specific details have been anonymized to protect client privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="inline-block px-4 py-1 rounded-full bg-[#003067] text-white text-sm font-semibold mb-6">
                  {study.industry}
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Baseline</div>
                    <div className="text-gray-700">{study.baseline}</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Strategy</div>
                    <div className="text-gray-700">{study.strategy}</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="text-2xl font-semibold text-[#003067] mb-1">{study.impact}</div>
                  <div className="text-sm text-gray-500">Achieved in {study.timeline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#9bd9e4] text-xs font-semibold uppercase tracking-[4px] mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] uppercase tracking-wide">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-[#9bd9e4] flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#003067] via-[#003067] to-[#002050] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9bd9e4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#9bd9e4]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-wide mb-6">
            Ready to Minimize Your Tax Burden?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Schedule a complimentary tax strategy review to identify opportunities for your business.
          </p>
          <a
            href="mailto:info@kruseandcrawford.com?subject=Tax%20Strategy%20Review%20Request"
            className="inline-flex items-center px-10 py-5 bg-[#9bd9e4] text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
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
