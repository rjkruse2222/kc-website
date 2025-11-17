import { Metadata } from 'next';
import CTABand from '../components/alternate/CTABand';
import CaseStudyCard from '../components/alternate/CaseStudyCard';

export const metadata: Metadata = {
  title: 'Tax Strategy & Cloud Accounting for Real Estate, F&B, Manufacturing & Life Sciences | Kruse and Crawford',
  description: 'Pick your path. Niche‑specific tax strategy and cloud accounting for owners, investors, and high‑income individuals. Contact us.',
  keywords: 'real estate CPA, construction accounting, restaurant accounting, manufacturing CPA, life sciences R&D credit CPA, high‑income tax planning',
};

export default function Home3() {
  const industries = [
    {
      title: 'Real Estate & Construction',
      description: 'Entity/comp, cost seg coordination, WIP/job costing',
      image: '/images/home-finacial-reporting.jpg',
      link: '/industries/real-estate-construction',
      highlights: [
        'Cost segregation coordination',
        'Entity structure optimization',
        'Job costing & WIP tracking',
        'Multi-state contractor compliance'
      ]
    },
    {
      title: 'Food & Beverage',
      description: 'POS & inventory, tips/payroll, COGS discipline, sales tax',
      image: '/images/home-tax-preparation.jpg',
      link: '/industries/food-beverage',
      highlights: [
        'POS integration & reconciliation',
        'Inventory & COGS management',
        'Tip reporting & payroll optimization',
        'Multi-location sales tax'
      ]
    },
    {
      title: 'Manufacturing',
      description: 'Inventory methods, capitalization rules, 263A readiness, credits',
      image: '/images/home-hero-tall.jpg',
      link: '/industries/manufacturing',
      highlights: [
        'R&D credit identification',
        'Inventory method optimization (FIFO/LIFO)',
        'Section 263A compliance',
        'Overhead allocation systems'
      ]
    },
    {
      title: 'Life Sciences',
      description: 'R&D credit cadence, grant/burn reporting, multi‑entity',
      image: '/images/home-finacial-reporting.jpg',
      link: '/industries/life-sciences',
      highlights: [
        'Quarterly R&D credit documentation',
        'Grant accounting & compliance',
        'Burn rate & runway reporting',
        'Multi-entity consolidation'
      ]
    },
    {
      title: 'High‑Income Individuals',
      description: 'Equity comp, K‑1s, charitable planning, real estate holdings',
      image: '/images/home-tax-preparation.jpg',
      link: '/industries/private-clients',
      highlights: [
        'Equity compensation planning',
        'K‑1 portfolio coordination',
        'Charitable giving strategies',
        'Real estate investment structuring'
      ]
    }
  ];

  const caseStudies = [
    {
      industry: 'Real Estate & Construction',
      baseline: 'Growing contractor with no formal job costing system',
      strategy: 'Implemented WIP tracking, cost seg coordination, entity restructure',
      impact: 'Improved job profitability visibility, identified $200K+ in accelerated deductions'
    },
    {
      industry: 'Food & Beverage',
      baseline: 'Multi-location restaurant with manual inventory and unclear COGS',
      strategy: 'POS integration, perpetual inventory system, tip credit optimization',
      impact: 'Reduced food cost variance by 4%, captured $40K+ in annual FICA tip credits'
    },
    {
      industry: 'Manufacturing',
      baseline: 'Manufacturer unaware of R&D credit eligibility',
      strategy: 'R&D credit study, FIFO to LIFO conversion analysis, 263A review',
      impact: '$325K in federal/state credits over 2 years, improved inventory valuation'
    },
    {
      industry: 'Life Sciences',
      baseline: 'Biotech startup with grant funding, no formal burn reporting',
      strategy: 'Grant accounting system, monthly burn dashboard, R&D credit cadence',
      impact: 'Clean grant compliance, board-ready metrics, $180K R&D credit over 18 months'
    },
    {
      industry: 'High-Income Individuals',
      baseline: 'Executive with complex equity comp, multiple K-1s, no coordination',
      strategy: 'Equity exercise timing plan, K-1 consolidation, QCD + DAF strategy',
      impact: 'Optimized $200K+ in equity timing, reduced AGI via charitable planning'
    }
  ];

  const pitfalls = [
    {
      industry: 'Real Estate',
      pitfall: 'Missing cost seg studies or delaying them until sale',
      solution: 'We coordinate cost seg at acquisition and track through disposal'
    },
    {
      industry: 'F&B',
      pitfall: 'Tip reporting chaos and missed FICA tip credits',
      solution: 'Automated tip allocation and annual credit calculation'
    },
    {
      industry: 'Manufacturing',
      pitfall: 'Overlooking R&D credits in product development and process improvement',
      solution: 'Quarterly project tracking and documentation cadence'
    },
    {
      industry: 'Life Sciences',
      pitfall: 'Grant compliance failures and unclear burn metrics for investors',
      solution: 'Dedicated grant accounting and board-ready dashboards'
    },
    {
      industry: 'Private Clients',
      pitfall: 'Uncoordinated advisors leading to missed tax opportunities',
      solution: 'Centralized tax coordination across CPAs, attorneys, and wealth managers'
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
            '@type': 'ItemList',
            itemListElement: industries.map((industry, index) => ({
              '@type': 'Service',
              position: index + 1,
              name: industry.title,
              description: industry.description,
              provider: {
                '@type': 'AccountingService',
                name: 'Kruse and Crawford'
              }
            }))
          })
        }}
      />

      {/* Hero Section with Industry Grid */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary via-primary to-[#004a8f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Built for Your Industry. Tuned to Your Taxes.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Choose your path to niche‑specific tax strategy and cloud accounting.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {industries.map((industry, index) => (
              <a
                key={index}
                href={industry.link}
                className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-light-blue mb-4">
                      {industry.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-2">
                    {industry.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-text-dark flex items-start">
                        <span className="text-light-blue mr-2 flex-shrink-0">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@kruseandcrawford.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-light-blue text-primary font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
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
        </div>
      </section>

      {/* Why Niche Expertise Matters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Why Niche Expertise Matters
          </h2>
          <p className="text-lg text-text-gray mb-12 max-w-3xl">
            Generic accounting misses industry-specific tax strategies and compliance requirements. We focus on the industries we know deeply, ensuring you capture every legal advantage and avoid costly mistakes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pitfalls.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="inline-block px-3 py-1 bg-light-blue/20 text-primary text-xs font-semibold rounded-full mb-4">
                  {item.industry}
                </div>
                <h3 className="font-semibold text-primary mb-2">Common Pitfall</h3>
                <p className="text-sm text-text-dark mb-4">{item.pitfall}</p>
                <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                <p className="text-sm text-text-dark">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Every Client Gets Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            What Every Client Gets
          </h2>
          <p className="text-lg text-text-gray mb-12 text-center max-w-3xl mx-auto">
            Regardless of industry, our standardized system ensures clean books, proactive tax planning, and zero surprises.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Monthly Close</h3>
              <p className="text-sm text-text-gray">On-time financials (target Day 10) with clean reconciliations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">KPI Pack</h3>
              <p className="text-sm text-text-gray">Custom dashboards tracking industry-relevant metrics</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Quarterly Tax Touchpoints</h3>
              <p className="text-sm text-text-gray">Proactive planning to avoid April surprises</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Annual Integration</h3>
              <p className="text-sm text-text-gray">Tax preparation or coordination with your existing preparer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies by Niche Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Case Studies by Niche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {caseStudies.slice(0, 3).map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            {caseStudies.slice(3).map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
          <div className="text-center">
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-[#004a8f] hover:shadow-xl transition-all duration-300"
            >
              View All Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <CTABand
        headline="Tell us your industry and goals."
        primaryText="Contact Us"
        secondaryText="View Case Studies"
      />
    </main>
  );
}
