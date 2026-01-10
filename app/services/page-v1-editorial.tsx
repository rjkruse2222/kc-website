import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Kruse & Crawford CPAs',
  description: 'Comprehensive tax strategy and client accounting services for growing businesses.',
};

/**
 * CONCEPT 1: "Editorial Magazine"
 *
 * Design Direction:
 * - Inspired by high-end business magazine layouts
 * - Large, confident typography with dramatic scale contrast
 * - Asymmetric grid with intentional white space
 * - Horizontal rules and editorial details
 * - Sophisticated, established firm aesthetic
 */

export default function ServicesPageEditorial() {
  return (
    <main className="bg-white">
      {/* Editorial Hero - Full bleed with dramatic typography */}
      <section className="relative min-h-[85vh] flex items-end pb-20 overflow-hidden">
        {/* Background with subtle texture */}
        <div className="absolute inset-0 bg-[#003067]">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Large decorative number */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[40vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">
          02
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full">
          {/* Eyebrow with horizontal rule */}
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-20 bg-[#9bd9e4]" />
            <span className="text-[#9bd9e4] text-sm tracking-[0.3em] uppercase font-medium">Our Services</span>
          </div>

          {/* Main headline - dramatic scale */}
          <h1 className="text-white leading-[0.85] mb-12">
            <span className="block text-[clamp(3rem,12vw,10rem)] font-extralight tracking-tight">Two</span>
            <span className="block text-[clamp(3rem,12vw,10rem)] font-bold tracking-tight">Services.</span>
            <span className="block text-[clamp(1.5rem,4vw,3rem)] font-light text-white/60 mt-4 tracking-wide">Unlimited potential.</span>
          </h1>

          {/* Subtext positioned to the right */}
          <div className="max-w-md ml-auto text-right">
            <p className="text-white/70 text-lg leading-relaxed">
              We believe in focus. Two specialized services,
              refined over two decades, delivering results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Service Blocks - Asymmetric Editorial Layout */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-8">

          {/* Tax Strategy - Left aligned, large */}
          <article className="grid grid-cols-12 gap-8 mb-40">
            <div className="col-span-12 lg:col-span-7">
              {/* Large service number */}
              <div className="flex items-baseline gap-6 mb-8">
                <span className="text-[8rem] font-extralight text-[#003067]/10 leading-none">01</span>
                <div className="h-px flex-1 bg-[#003067]/10" />
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#003067] tracking-tight mb-8">
                Tax<br />Strategy
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-10">
                Proactive planning that works year-round, not just at filing time.
                We identify opportunities before they pass and structure your
                business to minimize tax burden legally and strategically.
              </p>

              {/* Capability list - editorial style */}
              <div className="border-t border-[#003067]/10 pt-8">
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                  {[
                    'Year-round tax planning',
                    'Quarterly projections',
                    'Entity optimization',
                    'Multi-state compliance',
                    'R&D tax credits',
                    'Exit planning'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#9bd9e4] rounded-full" />
                      <span className="text-[#003067] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/services/tax-strategy"
                className="inline-flex items-center gap-4 mt-12 group"
              >
                <span className="text-[#003067] font-semibold text-lg border-b-2 border-[#003067] pb-1 group-hover:border-[#9bd9e4] transition-colors">
                  Explore Tax Strategy
                </span>
                <svg className="w-6 h-6 text-[#003067] group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Visual element - right side */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-center">
              <div className="relative w-full aspect-square max-w-md ml-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#003067] to-[#001a3a] rounded-sm" />
                <div className="absolute inset-4 border border-[#9bd9e4]/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#9bd9e4] text-9xl font-extralight">%</span>
                </div>
              </div>
            </div>
          </article>

          {/* Divider */}
          <div className="flex items-center gap-8 my-20">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#003067]/20 to-transparent" />
          </div>

          {/* Client Accounting - Right aligned, offset */}
          <article className="grid grid-cols-12 gap-8">
            {/* Visual element - left side */}
            <div className="col-span-12 lg:col-span-5 flex items-center order-2 lg:order-1">
              <div className="relative w-full aspect-square max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9bd9e4] to-[#7bc4d0]" />
                <div className="absolute inset-4 border border-[#003067]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-[#003067]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6 order-1 lg:order-2">
              {/* Large service number */}
              <div className="flex items-baseline gap-6 mb-8">
                <span className="text-[8rem] font-extralight text-[#003067]/10 leading-none">02</span>
                <div className="h-px flex-1 bg-[#003067]/10" />
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#003067] tracking-tight mb-8">
                Client<br />Accounting
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-10">
                From essential bookkeeping to full CFO services.
                We scale with your business, providing the financial
                clarity and strategic insight you need at every stage.
              </p>

              {/* Tier preview */}
              <div className="border-t border-[#003067]/10 pt-8">
                <div className="flex flex-wrap gap-4">
                  {['Essential', 'Growth', 'Enterprise'].map((tier, idx) => (
                    <div
                      key={tier}
                      className={`px-6 py-3 border ${idx === 1 ? 'bg-[#003067] text-white border-[#003067]' : 'border-[#003067]/20 text-[#003067]'}`}
                    >
                      <span className="font-medium">{tier}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/services/client-accounting"
                className="inline-flex items-center gap-4 mt-12 group"
              >
                <span className="text-[#003067] font-semibold text-lg border-b-2 border-[#003067] pb-1 group-hover:border-[#9bd9e4] transition-colors">
                  View Packages
                </span>
                <svg className="w-6 h-6 text-[#003067] group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Stats Band - Editorial style */}
      <section className="py-24 bg-[#003067] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-[1400px] mx-auto px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-white/10">
            {[
              { value: '2005', label: 'Established', sub: 'Cincinnati roots' },
              { value: '12+', label: 'Touch Points', sub: 'Per year, per client' },
              { value: '$50M', label: 'Client Range', sub: 'Our sweet spot' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:px-12">
                <div className="text-6xl md:text-7xl font-extralight text-[#9bd9e4] mb-4">{stat.value}</div>
                <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
                <div className="text-white/50 text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Clean editorial */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mb-6">
            Ready to work together?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Schedule a consultation to discuss how our focused approach
            can serve your business.
          </p>
          <a
            href="mailto:info@kruseandcrawford.com?subject=Service%20Inquiry"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#003067] text-white font-semibold hover:bg-[#004a8f] transition-colors"
          >
            Start the Conversation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
