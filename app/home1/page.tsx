import { Metadata } from 'next';
import TrustBar from '../components/alternate/TrustBar';
import CTABand from '../components/alternate/CTABand';
import FAQSection from '../components/alternate/FAQSection';
import IndustryTile from '../components/alternate/IndustryTile';
import CaseStudyCard from '../components/alternate/CaseStudyCard';
import StackLogos from '../components/alternate/StackLogos';

export const metadata: Metadata = {
  title: 'Proactive Tax Strategy for Owners & Investors | Kruse and Crawford',
  description: 'Year‑round tax planning for businesses, investors, and high‑income taxpayers—powered by clean cloud books. Contact us.',
  keywords: 'tax strategy CPA, proactive tax planning, real estate tax planning CPA, high‑income tax planning, nationwide CPA, Cincinnati tax strategy',
};

export default function Home1() {
  const industries = [
    {
      title: 'Real Estate & Construction',
      description: 'Entity optimization and cost segregation coordination',
      bullets: [
        'Cost segregation coordination and documentation',
        'Entity structure optimization for portfolio owners',
        'Multi-state nexus planning for contractors'
      ],
      link: '/industries/real-estate-construction'
    },
    {
      title: 'Food & Beverage',
      description: 'Tax strategies for restaurants and hospitality',
      bullets: [
        'Tip credit and payroll optimization',
        'FICA tip credit maximization',
        'Multi-location sales tax coordination'
      ],
      link: '/industries/food-beverage'
    },
    {
      title: 'Manufacturing',
      description: 'Credits and inventory method optimization',
      bullets: [
        'R&D credit identification and documentation',
        'Inventory method selection (FIFO/LIFO)',
        'Section 263A compliance and planning'
      ],
      link: '/industries/manufacturing'
    },
    {
      title: 'Life Sciences',
      description: 'R&D credits and grant reporting',
      bullets: [
        'Quarterly R&D credit documentation cadence',
        'Grant accounting and burn rate reporting',
        'Multi-entity structure planning'
      ],
      link: '/industries/life-sciences'
    },
    {
      title: 'High‑Income Individuals',
      description: 'Comprehensive personal tax strategy',
      bullets: [
        'Equity compensation planning and timing',
        'K‑1 portfolio optimization',
        'Charitable giving and real estate strategies'
      ],
      link: '/industries/private-clients'
    }
  ];

  const caseStudies = [
    {
      industry: 'Real Estate',
      baseline: 'Property investor with S-corp pass-through, minimal planning',
      strategy: 'Cost seg study coordination, entity restructure, timing strategies',
      impact: 'Identified $180K+ in accelerated deductions over 3-year period',
      timeline: '90 days to implementation'
    },
    {
      industry: 'Manufacturing',
      baseline: 'Mid-market manufacturer unaware of R&D credit eligibility',
      strategy: 'R&D credit study, documentation system, payroll tax offset election',
      impact: '$275K federal credit + state credits over 2 years',
      timeline: '6 weeks to filing'
    },
    {
      industry: 'High-Income',
      baseline: 'Executive with equity comp, no proactive tax planning',
      strategy: 'ISO exercise timing, charitable bunching, entity election review',
      impact: 'Reduced AMT exposure, optimized $150K+ in equity comp timing',
      timeline: 'Ongoing quarterly adjustments'
    }
  ];

  const faqs = [
    {
      question: 'Do you work with clients nationwide?',
      answer: 'Yes. We serve clients across the United States. Tax strategy work is conducted remotely via secure document sharing and video calls. We are licensed CPAs and registered in multiple states.'
    },
    {
      question: 'How do you handle multi-state tax issues?',
      answer: 'We conduct nexus scans as part of every engagement, identifying state filing obligations and apportionment opportunities. For complex multi-state matters, we coordinate with local counsel when needed.'
    },
    {
      question: 'What is the typical timeline?',
      answer: 'Discovery takes 1-2 weeks. The diagnostic and plan build typically requires 2-3 weeks. Implementation begins immediately after plan approval, with quarterly review touchpoints.'
    },
    {
      question: 'Can you coordinate with my existing tax preparer?',
      answer: 'Absolutely. Many clients retain their current preparer for compliance while we handle strategic planning. We provide a detailed roadmap your preparer can execute, or we can handle both strategy and preparation.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We use bank-level encryption for all document transfers (secure portal), multi-factor authentication, and follow AICPA data security standards. All team members complete annual security training.'
    },
    {
      question: 'What is NOT included in tax strategy?',
      answer: 'Basic tax return preparation is separate (though we offer it). Legal entity formation, legal opinions, and investment advice are outside our scope. We coordinate with your attorney and advisor as needed.'
    },
    {
      question: 'Do I need clean books before starting?',
      answer: 'Not necessarily. If your books need cleanup or you want ongoing accounting support, we offer integrated cloud accounting packages that power the tax strategy work. Clean monthly books make tax planning far more effective.'
    },
    {
      question: 'How much can I expect to save?',
      answer: 'Results vary by situation. We focus on identifying legal, audit-defensible strategies. Many clients see multiples of our fee in tax savings, but we never guarantee specific dollar outcomes. We provide conservative estimates during the diagnostic phase.'
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
            '@type': 'AccountingService',
            name: 'Kruse and Crawford',
            description: 'Proactive tax strategy and planning for businesses and investors',
            url: 'https://kruseandcrawford.com',
            areaServed: 'US',
            serviceType: ['Tax Strategy', 'Tax Planning', 'Business Advisory']
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white overflow-hidden min-h-[560px] md:min-h-[560px]">
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
              Year‑Round Tax Strategy That Holds Up—Not Just in April
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
              Entity, compensation, timing, credits, and multi‑state—built into a written plan you can execute this quarter.
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
            <TrustBar
              items={[
                '★★★★★ Google Reviews',
                'QBO • Xero • Gusto • Ramp • Bill.com • Expensify',
                'Real Estate & Construction • F&B • Manufacturing • Life Sciences • High‑Income Individuals'
              ]}
            />
            <p className="mt-6 text-sm text-white/70 italic">
              Selected clients have identified significant legal savings via entity/comp optimization, credits, and timing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Who We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <IndustryTile key={index} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* What's in Your Tax Strategy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            What's in Your Tax Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Strategy Modules</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">→</span>
                  <span className="text-text-dark">Entity structure & elections review</span>
                </li>
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">→</span>
                  <span className="text-text-dark">S‑corp compensation modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">→</span>
                  <span className="text-text-dark">Income timing & character optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">→</span>
                  <span className="text-text-dark">Deduction/credit mapping (R&D, energy, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">→</span>
                  <span className="text-text-dark">Multi‑state nexus scan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">→</span>
                  <span className="text-text-dark">Retirement vehicle layering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">→</span>
                  <span className="text-text-dark">Documentation standards & audit defense</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Deliverables</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">✓</span>
                  <span className="text-text-dark">Written tax strategy plan (PDF)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">✓</span>
                  <span className="text-text-dark">90‑day execution roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">✓</span>
                  <span className="text-text-dark">Quarterly strategy review sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">✓</span>
                  <span className="text-text-dark">Annual filing coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-light-blue mr-3">✓</span>
                  <span className="text-text-dark">Year‑round email/phone support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Discovery</h3>
              <p className="text-sm text-text-gray">Initial email exchange to understand your situation and goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Diagnostic</h3>
              <p className="text-sm text-text-gray">Document request + paid analysis to identify opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Plan Build</h3>
              <p className="text-sm text-text-gray">1–2 weeks to deliver written strategy and roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Implementation</h3>
              <p className="text-sm text-text-gray">Execute plan + quarterly reviews and adjustments</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="mailto:info@kruseandcrawford.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-[#004a8f] hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Results & Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Results & Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {caseStudies.map((study, index) => (
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

      {/* Cloud Accounting Powers the Plan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Cloud Accounting Powers the Plan
          </h2>
          <p className="text-lg text-text-gray mb-8">
            Effective tax strategy requires accurate, timely financial data. Our cloud accounting system ensures your books are clean, your monthly close is on time, and your tax planning is built on solid numbers.
          </p>
          <StackLogos />
          <a
            href="/cloud-accounting"
            className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary text-primary font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            See Our Cloud Accounting Packages
          </a>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA Band */}
      <CTABand headline="Ready to map your plan?" />
    </main>
  );
}
