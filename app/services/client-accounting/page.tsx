'use client';

import { useState } from 'react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Essential',
    tier: 'Good',
    price: 'Custom',
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
    featured: false
  },
  {
    name: 'Growth',
    tier: 'Better',
    price: 'Custom',
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
    featured: true
  },
  {
    name: 'Enterprise',
    tier: 'Best',
    price: 'Custom',
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
    featured: false
  }
];

const techStack = [
  { name: 'QuickBooks Online', abbr: 'QBO' },
  { name: 'Xero', abbr: 'Xero' },
  { name: 'Gusto', abbr: 'Gusto' },
  { name: 'Ramp', abbr: 'Ramp' },
  { name: 'Bill.com', abbr: 'Bill.com' },
  { name: 'Expensify', abbr: 'Expensify' }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We learn about your business, current challenges, and goals to recommend the right tier.'
  },
  {
    step: '02',
    title: 'Assessment',
    description: 'We review your existing systems, processes, and financial data to create a transition plan.'
  },
  {
    step: '03',
    title: 'Onboarding',
    description: 'We set up your accounts, integrate your tools, and establish monthly rhythms.'
  },
  {
    step: '04',
    title: 'Ongoing Partnership',
    description: 'Regular meetings, real-time reporting, and strategic guidance as your business grows.'
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
  const [expandedTier, setExpandedTier] = useState<number | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-[#003067] via-[#003067] to-[#002050]">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#9bd9e4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#9bd9e4]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
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
            <span className="text-[#9bd9e4] text-sm font-semibold uppercase tracking-wider">Client Accounting</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide uppercase max-w-4xl">
            Accounting That<br />
            <span className="font-semibold">Scales With You</span>
          </h1>

          <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
            From bookkeeping basics to full CFO services. Choose the level that fits your
            business today and grow from there.
          </p>

          <a
            href="#pricing"
            className="inline-flex items-center px-10 py-5 bg-[#9bd9e4] text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Packages
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Tier Overview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#9bd9e4] text-xs font-semibold uppercase tracking-[4px] mb-4">Choose Your Level</div>
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] uppercase tracking-wide mb-6">
              Three Tiers, One Goal:<br />
              <span className="font-semibold">Your Financial Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every tier includes a dedicated team, monthly reporting, and direct access to CPAs.
              The difference is in the depth of services and strategic support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <div className="text-4xl font-light text-[#003067] mb-2">Essential</div>
              <div className="text-gray-500">Core bookkeeping &amp; compliance</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#003067] text-white">
              <div className="text-4xl font-light mb-2">Growth</div>
              <div className="text-white/70">Full accounting department</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <div className="text-4xl font-light text-[#003067] mb-2">Enterprise</div>
              <div className="text-gray-500">CFO-level strategic guidance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section id="pricing" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 transition-all duration-500 ${
                  tier.featured
                    ? 'bg-[#003067] text-white shadow-2xl lg:scale-105 lg:-my-4'
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#9bd9e4] text-[#003067] px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <div className={`text-sm font-semibold uppercase tracking-wider mb-2 ${tier.featured ? 'text-[#9bd9e4]' : 'text-gray-500'}`}>
                    {tier.tier}
                  </div>
                  <h3 className={`text-3xl font-semibold mb-3 ${tier.featured ? 'text-white' : 'text-[#003067]'}`}>
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className={`text-4xl font-bold ${tier.featured ? 'text-white' : 'text-[#003067]'}`}>
                      {tier.price}
                    </span>
                    <span className={`ml-2 ${tier.featured ? 'text-white/70' : 'text-gray-500'}`}>/month</span>
                  </div>
                  <p className={`text-sm ${tier.featured ? 'text-white/80' : 'text-gray-600'}`}>
                    {tier.bestFor}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className={`text-sm font-semibold mb-4 ${tier.featured ? 'text-white' : 'text-[#003067]'}`}>
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-3">
                    {tier.included.slice(0, expandedTier === idx ? undefined : 6).map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <span className="text-[#9bd9e4] mr-3 mt-0.5 flex-shrink-0">
                          {item.startsWith('Everything') ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </span>
                        <span className={`text-sm ${tier.featured ? 'text-white/90' : 'text-gray-700'} ${item.startsWith('Everything') ? 'font-semibold' : ''}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {tier.included.length > 6 && (
                    <button
                      onClick={() => setExpandedTier(expandedTier === idx ? null : idx)}
                      className={`mt-4 text-sm font-medium ${tier.featured ? 'text-[#9bd9e4] hover:text-white' : 'text-[#003067] hover:text-[#9bd9e4]'} transition-colors`}
                    >
                      {expandedTier === idx ? 'Show less' : `+ ${tier.included.length - 6} more services`}
                    </button>
                  )}
                </div>

                <a
                  href="mailto:info@kruseandcrawford.com?subject=Client%20Accounting%20Inquiry%20-%20${tier.name}"
                  className={`block text-center px-8 py-4 rounded-lg font-semibold uppercase text-sm tracking-wide transition-all duration-300 ${
                    tier.featured
                      ? 'bg-[#9bd9e4] text-[#003067] hover:bg-white hover:shadow-xl'
                      : 'bg-[#003067] text-white hover:bg-[#004a8f] hover:shadow-xl'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
            <p>*Month-end Close includes bank, credit, and balance sheet reconciliations</p>
            <p>*Financial Statement Preparation includes balance sheet, P&amp;L, statement of cash flow, and budget variance reporting</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#9bd9e4] text-xs font-semibold uppercase tracking-[4px] mb-4">Integrations</div>
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] uppercase tracking-wide mb-6">
              We Work With Your Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seamless integration with the platforms you already use.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="px-8 py-4 bg-gray-50 rounded-xl border-2 border-transparent hover:border-[#003067] hover:bg-white transition-all duration-300"
              >
                <span className="text-lg font-semibold text-[#003067]">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#9bd9e4] text-xs font-semibold uppercase tracking-[4px] mb-4">How It Works</div>
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] uppercase tracking-wide">
              Getting Started Is Easy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#9bd9e4] to-transparent -translate-x-4" />
                )}
                <div className="text-6xl font-light text-[#9bd9e4]/30 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-[#003067] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
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
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
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
            Find Your Perfect Fit
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Not sure which tier is right for you? Let&apos;s talk. We&apos;ll recommend the best
            starting point based on your business needs and growth plans.
          </p>
          <a
            href="mailto:info@kruseandcrawford.com?subject=Client%20Accounting%20Consultation"
            className="inline-flex items-center px-10 py-5 bg-[#9bd9e4] text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
