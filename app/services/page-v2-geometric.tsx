import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Kruse & Crawford CPAs',
  description: 'Comprehensive tax strategy and client accounting services for growing businesses.',
};

/**
 * CONCEPT 2: "Geometric Precision"
 *
 * Design Direction:
 * - Clean, structured grid with geometric accents
 * - Diagonal lines and angular shapes as visual motifs
 * - High contrast between sections
 * - Professional, modern, systematic feel
 * - Inspired by architectural/engineering aesthetics
 */

export default function ServicesPageGeometric() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Hero - Diagonal split design */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Diagonal background split */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <div
            className="absolute inset-0 bg-[#003067]"
            style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 30% 100%)' }}
          />
        </div>

        {/* Geometric accent lines */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-[#003067]/10 rotate-45" />
        <div className="absolute bottom-20 right-40 w-60 h-60 border border-white/10 rotate-12" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full">
          <div className="grid grid-cols-12 gap-8">
            {/* Left content */}
            <div className="col-span-12 lg:col-span-6">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-[#9bd9e4] rotate-45" />
                <span className="text-[#003067] text-sm tracking-[0.2em] uppercase font-semibold">Services</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#003067] leading-[1.1] mb-8">
                Precision
                <span className="block text-[#9bd9e4]">in every</span>
                number.
              </h1>

              <p className="text-lg text-gray-600 max-w-md mb-8">
                Two specialized services. Twenty years refined.
                Structured for your success.
              </p>

              <div className="flex gap-4">
                <a href="#services" className="px-8 py-4 bg-[#003067] text-white font-semibold hover:bg-[#004a8f] transition-colors">
                  View Services
                </a>
                <a href="mailto:info@kruseandcrawford.com" className="px-8 py-4 border-2 border-[#003067] text-[#003067] font-semibold hover:bg-[#003067] hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Right content - service preview cards stacked */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 hidden lg:block">
              <div className="relative">
                {/* Card 1 - offset */}
                <div className="relative bg-white shadow-2xl p-8 transform translate-y-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#9bd9e4] flex items-center justify-center">
                      <span className="text-[#003067] font-bold">01</span>
                    </div>
                    <span className="text-[#003067] font-bold text-xl">Tax Strategy</span>
                  </div>
                  <p className="text-gray-600 text-sm">Year-round planning, not just filing.</p>
                </div>

                {/* Card 2 - offset more */}
                <div className="relative bg-[#003067] shadow-2xl p-8 transform translate-x-8 -translate-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#9bd9e4] flex items-center justify-center">
                      <span className="text-[#003067] font-bold">02</span>
                    </div>
                    <span className="text-white font-bold text-xl">Client Accounting</span>
                  </div>
                  <p className="text-white/70 text-sm">From bookkeeping to CFO services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-32 bg-gray-50 relative">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #003067 1px, transparent 1px),
              linear-gradient(to bottom, #003067 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-[1400px] mx-auto px-8 relative">
          <div className="text-center mb-20">
            <span className="text-[#9bd9e4] text-sm tracking-[0.3em] uppercase font-semibold">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4">
              Two services. One goal.
            </h2>
          </div>

          {/* Service Cards - Large format */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Tax Strategy */}
            <div className="group relative bg-white border-r border-b border-gray-200 p-12 lg:p-16 hover:bg-[#003067] transition-all duration-500">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-0 right-0 w-full h-full bg-[#9bd9e4] group-hover:bg-white transition-colors duration-500" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
              </div>

              <div className="relative">
                <span className="text-8xl font-bold text-gray-100 group-hover:text-white/10 absolute -top-8 -left-4 transition-colors duration-500">01</span>

                <div className="relative pt-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#003067] group-hover:text-white mb-6 transition-colors duration-500">
                    Tax Strategy
                  </h3>

                  <p className="text-gray-600 group-hover:text-white/80 mb-8 transition-colors duration-500 max-w-sm">
                    Strategic tax planning that anticipates, not reacts.
                    We work year-round to position your business optimally.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {['Proactive planning', 'Entity optimization', 'Multi-state compliance', 'Exit strategies'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#9bd9e4] rotate-45" />
                        <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/services/tax-strategy"
                    className="inline-flex items-center gap-3 text-[#003067] group-hover:text-[#9bd9e4] font-semibold transition-colors duration-500"
                  >
                    Learn More
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Client Accounting */}
            <div className="group relative bg-white border-b border-gray-200 p-12 lg:p-16 hover:bg-[#003067] transition-all duration-500">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-0 right-0 w-full h-full bg-[#9bd9e4] group-hover:bg-white transition-colors duration-500" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
              </div>

              <div className="relative">
                <span className="text-8xl font-bold text-gray-100 group-hover:text-white/10 absolute -top-8 -left-4 transition-colors duration-500">02</span>

                <div className="relative pt-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#003067] group-hover:text-white mb-6 transition-colors duration-500">
                    Client Accounting
                  </h3>

                  <p className="text-gray-600 group-hover:text-white/80 mb-8 transition-colors duration-500 max-w-sm">
                    Scalable accounting solutions that grow with you.
                    From essential bookkeeping to full CFO services.
                  </p>

                  {/* Tier indicators */}
                  <div className="flex gap-2 mb-10">
                    {['Essential', 'Growth', 'Enterprise'].map((tier, idx) => (
                      <div
                        key={tier}
                        className={`px-4 py-2 text-sm font-medium border transition-colors duration-500 ${
                          idx === 1
                            ? 'bg-[#9bd9e4] border-[#9bd9e4] text-[#003067]'
                            : 'border-gray-300 text-gray-600 group-hover:border-white/30 group-hover:text-white/70'
                        }`}
                      >
                        {tier}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/services/client-accounting"
                    className="inline-flex items-center gap-3 text-[#003067] group-hover:text-[#9bd9e4] font-semibold transition-colors duration-500"
                  >
                    View Packages
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section - Geometric blocks */}
      <section className="py-32 bg-[#003067] relative overflow-hidden">
        {/* Geometric accents */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#9bd9e4]/5 rotate-45 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 border-2 border-white/5 rotate-12 translate-x-1/4 translate-y-1/4" />

        <div className="max-w-[1400px] mx-auto px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] text-sm tracking-[0.3em] uppercase font-semibold">Integration</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
                Better together.
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-md">
                When your tax strategy and accounting are integrated,
                every financial decision is informed by both perspectives.
                Real-time visibility enables proactive optimization.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '12+', label: 'Planning sessions' },
                  { value: '100%', label: 'Visibility' },
                  { value: '20', label: 'Years experience' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-white/5">
                    <div className="text-3xl font-bold text-[#9bd9e4]">{stat.value}</div>
                    <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual diagram */}
            <div className="relative h-80 hidden lg:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-[#9bd9e4] flex items-center justify-center">
                <span className="text-white font-bold text-lg text-center">Your<br />Business</span>
              </div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Tax</span>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Accounting</span>
              </div>
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320">
                <line x1="80" y1="80" x2="160" y2="140" stroke="#9bd9e4" strokeWidth="2" strokeDasharray="4" />
                <line x1="320" y1="240" x2="240" y2="180" stroke="#9bd9e4" strokeWidth="2" strokeDasharray="4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Clean geometric */}
      <section className="py-32 bg-white relative">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gray-50" />

        <div className="max-w-[1400px] mx-auto px-8 relative">
          <div className="bg-[#003067] p-12 lg:p-20 relative overflow-hidden">
            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#9bd9e4]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />

            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s build something together.
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
                Schedule a consultation to explore how our structured approach
                can support your business goals.
              </p>
              <a
                href="mailto:info@kruseandcrawford.com?subject=Service%20Inquiry"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#9bd9e4] text-[#003067] font-bold hover:bg-white transition-colors"
              >
                Schedule Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
