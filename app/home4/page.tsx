import { Metadata } from 'next';
import CTABand from '../components/alternate/CTABand';
import CaseStudyCard from '../components/alternate/CaseStudyCard';
import StackLogos from '../components/alternate/StackLogos';

export const metadata: Metadata = {
  title: 'Case Studies in Tax Strategy & Cloud Accounting | Kruse and Crawford',
  description: 'See how strategy + disciplined monthly accounting produced measurable outcomes across our core industries. Contact us.',
  keywords: 'tax planning results, cloud accounting case study, CPA tax advisor',
};

export default function Home4() {
  const featuredCases = [
    {
      industry: 'Real Estate & Construction',
      clientType: 'Multi-property real estate investor',
      problem: 'Investor held 8 properties in personal name with no formal tax strategy. Entity structure review never done. Missing cost segregation opportunities.',
      strategy: 'Entity restructure (LLC → S-corp elections), coordinated cost seg studies on 5 properties, implemented quarterly estimated tax modeling, set up proper basis tracking.',
      modules: ['Entity optimization', 'Cost segregation coordination', 'Multi-state nexus planning', 'Basis tracking system'],
      impact: '$240K in accelerated deductions over 3-year period. Reduced self-employment tax exposure. Clean documentation for future dispositions.',
      timeline: '90 days to full implementation; ongoing quarterly reviews',
      stack: 'QBO, Bill.com, custom reporting for property-level P&L'
    },
    {
      industry: 'Manufacturing / Life Sciences',
      clientType: 'Mid-market precision manufacturer',
      problem: 'Company invested heavily in process improvement and product development but was unaware of R&D credit eligibility. No documentation system in place.',
      strategy: 'R&D credit study covering 3 open tax years, implemented quarterly project tracking system, payroll tax offset election, state credit analysis (OH, KY).',
      modules: ['R&D credit identification', 'Documentation cadence', 'Payroll tax offset', 'Multi-state credit optimization'],
      impact: '$340K federal credit + $85K state credits over initial 3-year study. $120K annual ongoing benefit with quarterly documentation.',
      timeline: '6 weeks to initial study completion; quarterly documentation cadence established',
      stack: 'Xero, Gusto, custom project tracking module'
    },
    {
      industry: 'Food & Beverage',
      clientType: '4-location restaurant group',
      problem: 'Manual inventory tracking led to unclear COGS and food cost variance. Tip reporting was inconsistent. No formal sales tax compliance across locations.',
      strategy: 'Integrated POS systems (Toast) to accounting, implemented perpetual inventory with weekly variance reporting, tip credit optimization, multi-jurisdiction sales tax setup.',
      modules: ['POS integration', 'Perpetual inventory system', 'FICA tip credit', 'Multi-location sales tax compliance'],
      impact: 'Reduced food cost variance from 8% to 3%. Identified $48K annual FICA tip credit. Clean sales tax compliance across OH, KY, IN.',
      timeline: '8 weeks for full POS/inventory integration; monthly monitoring established',
      stack: 'QBO, Toast POS, Gusto, Avalara for sales tax'
    }
  ];

  const playbooks = [
    {
      title: 'Entity & Compensation',
      description: 'The right entity structure and compensation strategy can save tens of thousands annually.',
      bullets: [
        'S-corp vs. LLC vs. C-corp election analysis',
        'Reasonable compensation modeling to minimize audit risk',
        'Multi-entity structure for asset protection and tax optimization'
      ]
    },
    {
      title: 'Timing & Credits',
      description: 'When you recognize income and what credits you claim matter as much as how much you earn.',
      bullets: [
        'Income timing strategies (cash vs. accrual, installment sales)',
        'R&D, energy, and other federal/state credits',
        'Retirement contribution layering (401k, SEP, defined benefit)'
      ]
    },
    {
      title: 'Clean Close & Controls',
      description: 'Tax strategy built on messy books is guesswork. We start with accurate monthly financials.',
      bullets: [
        'Monthly close (target Day 10) with full reconciliations',
        'Proper chart of accounts and classification',
        'Documentation standards that hold up under audit'
      ]
    },
    {
      title: 'Multi-State & Nexus',
      description: 'Operating across state lines? Nexus planning and apportionment can produce significant savings.',
      bullets: [
        'Nexus scans to identify filing obligations',
        'Apportionment planning for multi-state businesses',
        'Coordination with state-specific advisors when needed'
      ]
    }
  ];

  const reviews = [
    {
      author: 'Sarah M.',
      role: 'Real Estate Investor',
      text: 'Kruse and Crawford identified opportunities I didn\'t know existed. The cost seg alone paid for years of their service.',
      rating: 5
    },
    {
      author: 'Michael T.',
      role: 'Manufacturing CEO',
      text: 'The R&D credit process was seamless. They documented everything and coordinated directly with our engineering team.',
      rating: 5
    },
    {
      author: 'Jennifer L.',
      role: 'Restaurant Owner',
      text: 'Finally have clarity on my food costs and COGS. The POS integration was a game changer for our operations.',
      rating: 5
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
            '@type': 'Organization',
            name: 'Kruse and Crawford',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: reviews.length
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white overflow-hidden min-h-[480px]">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(/images/home-hero-tall.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#003067]/90 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Strategy You Can See
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
              Selected client stories—baseline, strategy, measured results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                View Case Studies
              </a>
              <a
                href="mailto:info@kruseandcrawford.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold uppercase text-sm tracking-wide rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Featured Case Studies
          </h2>

          <div className="space-y-12">
            {featuredCases.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-lg">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-light-blue/20 text-primary text-xs font-semibold rounded-full mb-3">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {study.clientType}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-text-gray uppercase tracking-wide mb-2">
                        Problem
                      </h4>
                      <p className="text-text-dark leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-text-gray uppercase tracking-wide mb-2">
                        Strategy
                      </h4>
                      <p className="text-text-dark leading-relaxed mb-3">
                        {study.strategy}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.modules.map((module, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white text-primary text-xs font-medium rounded-full border border-primary/20"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-text-gray uppercase tracking-wide mb-2">
                        Measured Impact
                      </h4>
                      <p className="text-lg font-semibold text-primary leading-relaxed">
                        {study.impact}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-text-gray uppercase tracking-wide mb-2">
                        Timeline
                      </h4>
                      <p className="text-text-dark">
                        {study.timeline}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-text-gray uppercase tracking-wide mb-2">
                        Stack Used
                      </h4>
                      <p className="text-sm text-text-dark">
                        {study.stack}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Playbooks Behind the Wins Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            The Playbooks Behind the Wins
          </h2>
          <p className="text-lg text-text-gray mb-12 max-w-3xl">
            Every case study follows proven frameworks we've refined across hundreds of engagements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {playbooks.map((playbook, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {playbook.title}
                </h3>
                <p className="text-text-gray mb-4">
                  {playbook.description}
                </p>
                <ul className="space-y-2">
                  {playbook.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-light-blue mr-2 flex-shrink-0">→</span>
                      <span className="text-text-dark text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="mailto:info@kruseandcrawford.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-[#004a8f] hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Your Cloud Accounting System Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Your Cloud Accounting System
          </h2>
          <p className="text-lg text-text-gray mb-8">
            These results are only possible because we tie tax strategy to accurate, timely financials. We implement and operate your cloud accounting stack so the numbers are always clean.
          </p>
          <StackLogos />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/cloud-accounting"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary text-primary font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              Cloud Accounting Packages
            </a>
            <a
              href="/tax-strategy"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary text-primary font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              Tax Strategy Services
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            What Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-light-blue"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-dark mb-4 italic">"{review.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-primary">{review.author}</p>
                  <p className="text-sm text-text-gray">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/search?q=kruse+and+crawford+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-light-blue font-semibold underline"
            >
              See all Google reviews →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <CTABand
        headline="Ready to write your success story?"
        primaryText="Contact Us"
        secondaryText="View Case Studies"
      />
    </main>
  );
}
