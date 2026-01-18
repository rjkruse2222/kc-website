'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

const tiers = [
  {
    name: 'Essential',
    tier: 'Foundation',
    price: 'Starting at $500',
    bestFor: 'Startups and small businesses needing reliable bookkeeping and financial clarity',
    included: [
      'Automated Bookkeeping',
      'Business Meeting to Review Monthly Results',
      'Financial Statement Preparation*',
      'Month-end Close*',
      'Month-end Reporting',
      'Account Reconciliations',
      'Bank Reconciliations',
      'Tax Preparation'
    ],
    featured: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    name: 'Growth',
    tier: 'Most Popular',
    price: 'Starting at $1,500',
    bestFor: 'Growing businesses requiring deeper financial oversight and operational support',
    included: [
      'Everything in Essential, plus:',
      'AP Processing',
      'AR Processing and Invoicing',
      'Accounting and Finance Department Oversight',
      'Accounting Policy and Procedures Analysis',
      'Audit Support',
      'Budget to Actual Analysis',
      'Monthly Financial Reporting',
      'Budget Preparation Support',
      'Class Tracking and Reporting by Department or Region',
      'ERP Optimization'
    ],
    featured: true,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    name: 'Enterprise',
    tier: 'Full CFO',
    price: 'Starting at $3,500',
    bestFor: 'Established businesses seeking full CFO-level strategic financial guidance',
    included: [
      'Everything in Growth, plus:',
      'Business Review Meeting + 1 Senior Level Session',
      'Budget and Forecasting',
      'Cash and Cash Flow Management',
      'Financial Modeling and Growth Strategy',
      'Fundraising Support',
      'Investor and Bank Relations',
      'KPI Development, Dashboarding and Reporting',
      'Profitability Analysis',
      'Scenario and Strategy Planning',
      'Weekly Review Meetings'
    ],
    featured: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We learn about your business, current challenges, and goals to recommend the right tier.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80'
  },
  {
    step: '02',
    title: 'Assessment',
    description: 'We review your existing systems, processes, and financial data to create a transition plan.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
  },
  {
    step: '03',
    title: 'Onboarding',
    description: 'We set up your accounts, integrate your tools, and establish monthly rhythms.',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80'
  },
  {
    step: '04',
    title: 'Ongoing Partnership',
    description: 'Regular meetings, real-time reporting, and strategic guidance as your business grows.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80'
  }
];

const faqs = [
  {
    question: 'Can I upgrade between tiers?',
    answer: 'Absolutely. Many clients start with Essential and upgrade to Growth or Enterprise as their business scales. We make transitions seamless with no disruption to your monthly reporting.'
  },
  {
    question: 'What accounting software do you work with?',
    answer: 'We primarily work with QuickBooks Online and Xero, but can integrate with most modern accounting platforms. We also connect with tools like Gusto, Ramp, Bill.com, and Expensify for a complete financial ecosystem.'
  },
  {
    question: 'How quickly can we get started?',
    answer: 'Most clients are fully onboarded within 2-4 weeks, depending on the complexity of your current systems. We handle the heavy lifting of data migration and system setup.'
  },
  {
    question: 'Do you replace my existing bookkeeper?',
    answer: 'We can work alongside your existing team or handle everything in-house. Many clients transition their bookkeeping to us to get the benefits of our integrated approach and senior-level oversight.'
  },
  {
    question: 'How does pricing work?',
    answer: 'Pricing is based on transaction volume, complexity, and the tier you choose. We provide fixed monthly pricing so you always know what to expect. Contact us for a custom quote based on your specific needs.'
  }
];

export default function ClientAccountingPage() {
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

      {/* Hero Section - Ken Burns with blue overlay */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
              alt="Financial planning and accounting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/85 to-[#003067]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#9bd9e4] mb-8 transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Services</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#9bd9e4]/20 backdrop-blur-sm rounded-full mb-8 border border-[#9bd9e4]/30">
              <div className="w-2.5 h-2.5 bg-[#9bd9e4] rounded-full animate-pulse" />
              <span className="text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase">Client Accounting Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Accounting that
              <span className="block text-[#9bd9e4] mt-2">scales with you.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              From bookkeeping basics to full CFO services. Choose the level that fits your
              business today and grow from there.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg"
              >
                View Packages
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Overview - Quick comparison */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Choose Your Level</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
              Three tiers, one goal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every tier includes a dedicated team, monthly reporting, and direct access to CPAs.
              The difference is in the depth of services and strategic support.
            </p>
          </div>

          {/* Quick tier comparison */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`group relative rounded-3xl p-8 transition-all duration-500 cursor-pointer ${
                  tier.featured
                    ? 'bg-gradient-to-br from-[#003067] to-[#004a8f] text-white shadow-xl'
                    : 'bg-white hover:shadow-xl border border-gray-100'
                }`}
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  tier.featured ? 'bg-white/20' : 'bg-[#9bd9e4]/20'
                }`}>
                  <div className={tier.featured ? 'text-white' : 'text-[#003067]'}>
                    {tier.icon}
                  </div>
                </div>
                <div className={`text-sm font-semibold mb-2 ${tier.featured ? 'text-[#9bd9e4]' : 'text-[#9bd9e4]'}`}>
                  {tier.tier}
                </div>
                <h3 className={`text-3xl font-bold mb-3 ${tier.featured ? 'text-white' : 'text-[#003067]'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm leading-relaxed ${tier.featured ? 'text-white/80' : 'text-gray-600'}`}>
                  {tier.bestFor}
                </p>
                <div className={`mt-6 flex items-center gap-2 text-sm font-semibold ${
                  tier.featured ? 'text-[#9bd9e4]' : 'text-[#003067]'
                }`}>
                  View details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards Section - Detailed (no expand/collapse) */}
      <section id="pricing" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Detailed Packages</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
              Everything included
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                  tier.featured
                    ? 'bg-gradient-to-br from-[#003067] to-[#004a8f] text-white shadow-2xl lg:scale-105 lg:-my-4'
                    : 'bg-white shadow-lg hover:shadow-2xl border border-gray-100'
                }`}
              >
                {/* Top accent */}
                <div className={`h-2 ${tier.featured ? 'bg-[#9bd9e4]' : 'bg-gradient-to-r from-[#003067] to-[#004a8f]'}`} />

                {tier.featured && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-[#9bd9e4] text-[#003067] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                      Recommended
                    </div>
                  </div>
                )}

                <div className="p-8 md:p-10">
                  <div className="mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      tier.featured ? 'bg-white/20' : 'bg-[#9bd9e4]/20'
                    }`}>
                      <div className={tier.featured ? 'text-white' : 'text-[#003067]'}>
                        {tier.icon}
                      </div>
                    </div>

                    <div className={`text-sm font-semibold uppercase tracking-wider mb-2 ${tier.featured ? 'text-[#9bd9e4]' : 'text-gray-500'}`}>
                      {tier.tier}
                    </div>
                    <h3 className={`text-3xl font-bold mb-3 ${tier.featured ? 'text-white' : 'text-[#003067]'}`}>
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline mb-4">
                      <span className={`text-2xl font-bold ${tier.featured ? 'text-white' : 'text-[#003067]'}`}>
                        {tier.price}
                      </span>
                      <span className={`ml-2 ${tier.featured ? 'text-white/70' : 'text-gray-500'}`}>/month</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${tier.featured ? 'text-white/80' : 'text-gray-600'}`}>
                      {tier.bestFor}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className={`text-sm font-semibold mb-4 ${tier.featured ? 'text-white' : 'text-[#003067]'}`}>
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-3">
                      {tier.included.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start">
                          <span className="text-[#9bd9e4] mr-3 mt-0.5 flex-shrink-0">
                            {item.startsWith('Everything') ? (
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            )}
                          </span>
                          <span className={`text-sm ${tier.featured ? 'text-white/90' : 'text-gray-700'} ${item.startsWith('Everything') ? 'font-semibold' : ''}`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`block text-center px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                      tier.featured
                        ? 'bg-[#9bd9e4] text-[#003067] hover:bg-white hover:shadow-xl'
                        : 'bg-[#003067] text-white hover:bg-[#9bd9e4] hover:text-[#003067] hover:shadow-xl'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 leading-relaxed">
              *Month-end Close includes bank, credit, and balance sheet reconciliations<br />
              *Financial Statement Preparation includes balance sheet, P&amp;L, statement of cash flow, and budget variance reporting
            </p>
          </div>
        </div>
      </section>

      {/* Process Section - With images */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
              Getting started is easy
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From first call to ongoing partnership, we make the transition smooth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Connector line */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-[#9bd9e4] to-[#9bd9e4]/20 -translate-x-4 z-0" />
                )}

                <div className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003067]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-5xl font-bold text-white/30">
                      {step.step}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#003067] mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
              Common questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#9bd9e4]/10 rounded-2xl overflow-hidden border border-gray-100 hover:border-[#9bd9e4]/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#9bd9e4]/10 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openFaq === idx ? 'bg-[#003067]' : 'bg-[#9bd9e4]/20'
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-all duration-300 ${
                        openFaq === idx ? 'text-white rotate-180' : 'text-[#003067]'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
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

      {/* Newsletter */}
      <NewsletterSection variant="light" />

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-gradient-to-br from-[#003067] to-[#004a8f] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Soft decorative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9bd9e4]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9bd9e4]/5 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Find your perfect fit.
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                Not sure which tier is right for you? Let&apos;s talk. We&apos;ll recommend the best
                starting point based on your business needs and growth plans.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-colors shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
