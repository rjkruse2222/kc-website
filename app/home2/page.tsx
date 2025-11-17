import { Metadata } from 'next';
import TrustBar from '../components/alternate/TrustBar';
import CTABand from '../components/alternate/CTABand';
import FAQSection from '../components/alternate/FAQSection';
import PricingCard from '../components/alternate/PricingCard';
import StackLogos from '../components/alternate/StackLogos';

export const metadata: Metadata = {
  title: 'Cloud Accounting (QBO/Xero) + CFO | Packages from $500 | Kruse and Crawford',
  description: 'Clean books, on‑time closes, reporting, and tax strategy in one monthly subscription. Compare Good/Better/Best packages. Contact us.',
  keywords: 'cloud accounting, outsourced bookkeeping, QBO accountant, Xero accountant, outsourced CFO, monthly accounting packages',
};

export default function Home2() {
  const packages = [
    {
      tier: 'GOOD',
      name: 'Essentials',
      price: 'Starting at $500',
      bestFor: 'Best for: Single-entity businesses with straightforward transactions',
      included: [
        'Monthly close (target Day 10)',
        'Bank & credit card reconciliations',
        'P&L, Balance Sheet, Cash Flow reports',
        'Basic AP/AR coordination',
        '1099 preparation',
        'Tax-ready books for year-end filing'
      ],
      notIncluded: [
        'Tax return preparation',
        'Payroll processing (we coordinate with Gusto/ADP)',
        'Sales tax filings',
        'Multi-entity consolidation'
      ]
    },
    {
      tier: 'BETTER',
      name: 'Growth',
      price: 'Starting at $1,000',
      bestFor: 'Best for: Growing businesses needing KPIs and tax coordination',
      included: [
        'Everything in Essentials',
        'Management reporting pack (custom KPIs)',
        'Monthly dashboard with trends',
        'Quarterly tax planning touchpoints',
        'Enhanced AP/AR workflows',
        'Sales/use tax coordination',
        'Vendor/customer aging reports'
      ],
      notIncluded: [
        'Tax return preparation',
        'Payroll processing',
        'Sales tax filings (add-on available)',
        'Full CFO advisory (see Scale package)'
      ],
      featured: true
    },
    {
      tier: 'BEST',
      name: 'Scale/CFO',
      price: 'Starting at $2,000',
      bestFor: 'Best for: Scaling companies needing CFO-level advisory',
      included: [
        'Everything in Growth',
        'Cash flow forecasting (13-week)',
        'Budget vs. actual variance deck',
        'Pricing & margin analysis',
        'Multi-entity consolidation',
        'Partner-level review each quarter',
        'Board/investor reporting support'
      ],
      notIncluded: [
        'Tax return preparation (add-on available)',
        'Payroll processing',
        'Fundraising services',
        'Legal/HR advisory'
      ]
    }
  ];

  const addOns = [
    'Cleanup/catch-up project (one-time)',
    'Inventory implementation & management',
    'POS integration (restaurants, retail)',
    'Sales tax registration & filings',
    'Custom reporting & dashboards',
    'Expedited close SLA (Day 5 target)'
  ];

  const outcomes = [
    {
      title: 'Close On Time',
      description: 'Know your numbers by Day 10—no more scrambling at month-end.'
    },
    {
      title: 'Audit-Ready Financials',
      description: 'Clean books with proper documentation and support for every transaction.'
    },
    {
      title: 'Cash Clarity',
      description: 'Understand your cash position and forecast with confidence.'
    },
    {
      title: 'Tax Surprises Reduced',
      description: 'Quarterly tax touchpoints mean no April shocks—just proactive planning.'
    }
  ];

  const faqs = [
    {
      question: 'Do you replace my in-house bookkeeper or augment them?',
      answer: 'Both. Some clients fully outsource to us; others keep an in-house person for daily entry while we handle the monthly close, reporting, and advisory. We can structure the engagement either way.'
    },
    {
      question: 'Do you handle payroll?',
      answer: 'We coordinate payroll but don\'t process it directly. We integrate seamlessly with Gusto, ADP, and Paychex to ensure payroll flows correctly into your books and payroll taxes are properly accrued.'
    },
    {
      question: 'What if I need to start mid-year?',
      answer: 'No problem. We\'ll do a quick diagnostic of your current state, prioritize any cleanup needed, and get you on the monthly cadence. Most mid-year starts are fully operational within 3-4 weeks.'
    },
    {
      question: 'Can you handle inventory and COGS?',
      answer: 'Yes. Inventory and COGS are standard for manufacturing, retail, and F&B clients. We implement proper systems (perpetual or periodic) and tie physical counts to your books. This may require additional setup or a higher-tier package.'
    },
    {
      question: 'What if I have multiple entities?',
      answer: 'Multi-entity consolidation is included in the Scale/CFO package. For 2-3 entities, we can often handle it in the Growth package. We\'ll scope it during discovery.'
    },
    {
      question: 'How quickly can we get started?',
      answer: 'Week 1: Access & app connections. Week 2: COA review & cleanup scope. Week 3: First monthly close. Week 4: Tax baseline & quarterly cadence set. Most clients are fully operational within 30 days.'
    },
    {
      question: 'What accounting software do you support?',
      answer: 'We primarily work in QuickBooks Online and Xero. If you\'re on another platform (Sage, NetSuite, etc.), contact us—we can often accommodate or help you transition.'
    },
    {
      question: 'Is tax preparation included?',
      answer: 'No, but it\'s available as an add-on. Many clients pair our cloud accounting package with our tax strategy and preparation services for a complete solution.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Cloud Accounting & CFO Services',
            provider: {
              '@type': 'AccountingService',
              name: 'Kruse and Crawford'
            },
            offers: [
              {
                '@type': 'Offer',
                name: 'Essentials Package',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  price: '500',
                  priceCurrency: 'USD',
                  unitText: 'MONTH'
                }
              },
              {
                '@type': 'Offer',
                name: 'Growth Package',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  price: '1000',
                  priceCurrency: 'USD',
                  unitText: 'MONTH'
                }
              },
              {
                '@type': 'Offer',
                name: 'Scale/CFO Package',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  price: '2000',
                  priceCurrency: 'USD',
                  unitText: 'MONTH'
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white overflow-hidden min-h-[560px]">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(/images/home-hero-tall.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#003067]/80 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cloud Accounting + CFO—Built for On‑Time Closes and Lower‑Stress Taxes
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
              QBO/Xero, Gusto, Ramp, Bill.com, Expensify—implemented and operated by our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="mailto:info@kruseandcrawford.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold uppercase text-sm tracking-wide rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span>★★★★★ Google Reviews</span>
              <span className="text-white/40">•</span>
              <span>Cincinnati HQ</span>
              <span className="text-white/40">•</span>
              <span>Nationwide clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Choose Your Package
          </h2>
          <p className="text-lg text-text-gray mb-12 text-center max-w-3xl mx-auto">
            All packages include dedicated team support, secure client portal, and integration with your existing stack.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>

          {/* Add-Ons Row */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Common Add-Ons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addOn, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-light-blue mr-2">+</span>
                  <span className="text-text-dark">{addOn}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Onboarding Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">Week 1</span>
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Access & Connections</h3>
              <p className="text-sm text-text-gray">
                Set up secure access to your accounting software and connect all apps
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">Week 2</span>
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">COA & Cleanup</h3>
              <p className="text-sm text-text-gray">
                Standardize chart of accounts and scope any cleanup needed
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">Week 3</span>
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">First Close</h3>
              <p className="text-sm text-text-gray">
                Complete first monthly close and draft KPI dashboard
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">Week 4</span>
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Tax Baseline</h3>
              <p className="text-sm text-text-gray">
                Set tax baseline and establish quarterly planning cadence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Cloud Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Your Cloud Stack
          </h2>
          <p className="text-lg text-text-gray mb-8">
            We standardize your financial operations on best-in-class cloud tools, with proper controls, integrations, and documentation.
          </p>
          <StackLogos />
          <p className="text-sm text-text-gray mt-6">
            + Industry-specific tools for POS, inventory, project management, and more
          </p>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  {outcome.title}
                </h3>
                <p className="text-sm text-text-gray">{outcome.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-[#004a8f] hover:shadow-xl transition-all duration-300"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA Band */}
      <CTABand headline="Ready to get started?" />
    </main>
  );
}
