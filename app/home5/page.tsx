import { Metadata } from 'next';
import CTABand from '../components/alternate/CTABand';
import IndustryTile from '../components/alternate/IndustryTile';

export const metadata: Metadata = {
  title: 'Cincinnati CPA for Tax Strategy & Cloud Accounting | Nationwide | Kruse and Crawford',
  description: 'A Cincinnati CPA delivering proactive tax planning and modern cloud accounting—serving clients locally and nationwide. Contact us.',
  keywords: 'Cincinnati CPA tax planning, Cincinnati cloud accounting, nationwide tax strategist',
};

export default function Home5() {
  const services = [
    {
      title: 'Tax Strategy',
      bullets: [
        'Year‑round proactive tax planning',
        'Entity structure & compensation optimization',
        'R&D credits, cost segregation, timing strategies',
        'Multi‑state nexus planning',
        'Quarterly review sessions',
        'Annual tax return preparation or coordination'
      ],
      link: '/tax-strategy'
    },
    {
      title: 'Cloud Accounting (QBO/Xero)',
      bullets: [
        'Monthly close & reconciliation (target Day 10)',
        'Management reporting & KPI dashboards',
        'AP/AR workflows & cash management',
        'Integration with Gusto, Ramp, Bill.com, Expensify',
        'Sales tax coordination',
        'CFO-level advisory for growing businesses'
      ],
      link: '/cloud-accounting'
    }
  ];

  const industries = [
    {
      title: 'Real Estate & Construction',
      description: 'Entity optimization and cost segregation coordination',
      bullets: [
        'Cost segregation studies',
        'Job costing & WIP tracking',
        'Multi‑state contractor compliance'
      ],
      link: '/industries/real-estate-construction'
    },
    {
      title: 'Food & Beverage',
      description: 'POS integration and inventory management',
      bullets: [
        'POS & inventory systems',
        'Tip reporting & payroll optimization',
        'Multi‑location sales tax'
      ],
      link: '/industries/food-beverage'
    },
    {
      title: 'Manufacturing',
      description: 'R&D credits and inventory optimization',
      bullets: [
        'R&D credit identification',
        'Inventory method optimization',
        'Section 263A compliance'
      ],
      link: '/industries/manufacturing'
    },
    {
      title: 'Life Sciences',
      description: 'Grant accounting and burn reporting',
      bullets: [
        'R&D credit cadence',
        'Grant compliance & reporting',
        'Multi‑entity consolidation'
      ],
      link: '/industries/life-sciences'
    },
    {
      title: 'High‑Income Individuals',
      description: 'Comprehensive personal tax strategy',
      bullets: [
        'Equity compensation planning',
        'K‑1 portfolio coordination',
        'Charitable & estate strategies'
      ],
      link: '/industries/private-clients'
    }
  ];

  const localReviews = [
    {
      author: 'Tom R.',
      location: 'Cincinnati, OH',
      text: 'Finally found a Cincinnati CPA who understands modern cloud accounting and proactive tax planning. Great local team.',
      rating: 5
    },
    {
      author: 'Lisa M.',
      location: 'Mason, OH',
      text: 'We meet in person quarterly and the rest is handled seamlessly online. Best of both worlds.',
      rating: 5
    },
    {
      author: 'David K.',
      location: 'Remote (Colorado)',
      text: 'Based in Colorado but work with Kruse & Crawford remotely. Exceptional service regardless of location.',
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Schema Markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AccountingService',
            name: 'Kruse and Crawford',
            image: 'https://kruseandcrawford.com/images/logo.png',
            '@id': 'https://kruseandcrawford.com',
            url: 'https://kruseandcrawford.com',
            telephone: '+1-513-555-0100',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Business Way',
              addressLocality: 'Cincinnati',
              addressRegion: 'OH',
              postalCode: '45202',
              addressCountry: 'US'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 39.1031,
              longitude: -84.5120
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
              ],
              opens: '08:00',
              closes: '17:00'
            },
            priceRange: '$$',
            areaServed: ['Cincinnati', 'Ohio', 'United States']
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
              Cincinnati Tax Strategy & Cloud Accounting—Serving Clients Nationwide
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
              In‑person in Cincinnati. Remote nationwide.
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

            {/* Local NAP */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <div className="text-sm text-white/90 space-y-2">
                <p className="font-semibold text-light-blue">Kruse and Crawford</p>
                <p>123 Business Way, Cincinnati, OH 45202</p>
                <p>
                  <a href="tel:+15135550100" className="hover:text-light-blue transition-colors">
                    (513) 555-0100
                  </a>
                  {' • '}
                  <a href="mailto:info@kruseandcrawford.com" className="hover:text-light-blue transition-colors">
                    info@kruseandcrawford.com
                  </a>
                </p>
                <p>Monday–Friday: 8:00 AM – 5:00 PM EST</p>
                <a
                  href="#map"
                  className="inline-block text-light-blue hover:text-white font-semibold underline mt-2"
                >
                  View Map & Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-light-blue mr-3 flex-shrink-0 mt-1">✓</span>
                      <span className="text-text-dark">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-light-blue transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-8 h-8 text-light-blue"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Trusted by Cincinnati Businesses & Beyond
            </h2>
            <p className="text-lg text-text-gray">
              Serving clients locally and nationwide since 2005
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {localReviews.map((review, index) => (
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
                  <p className="text-sm text-text-gray">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-white rounded-lg px-6 py-4 shadow-md">
              <p className="text-sm text-text-gray mb-2">Member of</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <span className="font-semibold text-primary">AICPA</span>
                <span className="text-text-gray">•</span>
                <span className="font-semibold text-primary">Ohio Society of CPAs</span>
                <span className="text-text-gray">•</span>
                <span className="font-semibold text-primary">Cincinnati Chamber of Commerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Know Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Industries We Know
          </h2>
          <p className="text-lg text-text-gray mb-12 max-w-3xl">
            We focus on industries where we can deliver deep expertise and measurable results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <IndustryTile key={index} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Getting Started
          </h2>

          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">
              How to Contact Us
            </h3>
            <div className="space-y-4 text-text-dark">
              <p>
                <strong>Email (preferred):</strong>{' '}
                <a
                  href="mailto:info@kruseandcrawford.com"
                  className="text-primary hover:text-light-blue underline"
                >
                  info@kruseandcrawford.com
                </a>
              </p>
              <p>
                Share a few details about your situation, goals, and timeline. We\'ll reply within 1 business day with next steps.
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:+15135550100"
                  className="text-primary hover:text-light-blue underline"
                >
                  (513) 555-0100
                </a>
              </p>
              <p>
                <strong>In-Person (Cincinnati):</strong> Available for local clients. We're happy to meet at our Cincinnati office or at your location.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">
              What to Prepare
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-light-blue mr-2 flex-shrink-0">→</span>
                <span className="text-text-dark">Recent tax returns (2–3 years)</span>
              </li>
              <li className="flex items-start">
                <span className="text-light-blue mr-2 flex-shrink-0">→</span>
                <span className="text-text-dark">Current financials (P&L, Balance Sheet)</span>
              </li>
              <li className="flex items-start">
                <span className="text-light-blue mr-2 flex-shrink-0">→</span>
                <span className="text-text-dark">Entity documents (formation, S-corp election, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-light-blue mr-2 flex-shrink-0">→</span>
                <span className="text-text-dark">Brief description of your goals and any specific concerns</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Typical Timeline
            </h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-primary">Week 1</div>
                <div className="text-text-dark">Discovery conversation & engagement letter</div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-primary">Week 2</div>
                <div className="text-text-dark">Document review & diagnostic</div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-primary">Week 3–4</div>
                <div className="text-text-dark">Strategy development & plan presentation</div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-primary">Ongoing</div>
                <div className="text-text-dark">Implementation, quarterly reviews, annual filing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section id="map" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Visit Our Cincinnati Office
          </h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '400px' }}>
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-8">
                <svg
                  className="w-16 h-16 text-primary mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-lg font-semibold text-primary mb-2">
                  123 Business Way, Cincinnati, OH 45202
                </p>
                <a
                  href="https://maps.google.com/?q=Cincinnati+OH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-[#004a8f] transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <CTABand
        headline="Ready to get started?"
        primaryText="Contact Us"
        secondaryText="View Case Studies"
      />
    </main>
  );
}
