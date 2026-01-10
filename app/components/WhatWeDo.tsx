export default function WhatWeDo() {
  return (
    <section
      className="what-we-do-section relative bg-gradient-to-br from-[#003067] via-[#003067] to-[#002050] py-24 md:py-32 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Decorative Gradient Blur - hidden from screen readers */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9bd9e4]/10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9bd9e4]/5 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div>
            {/* "What We Do" Label */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 backdrop-blur-sm text-white uppercase tracking-[3px] text-xs font-semibold rounded-full border border-white/20">
                Our Approach
              </span>
            </div>

            {/* Heading */}
            <h2 id="services-heading" className="text-3xl md:text-5xl font-light text-white leading-tight mb-6">
              Two Core Services,<br />
              <span className="font-semibold">Maximum Impact</span>
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-10">
              We focus exclusively on outsourced accounting/CFO services and strategic tax planning. This specialization allows us to deliver exceptional results for our clients.
            </p>

            {/* Service Features */}
            <ul className="space-y-4 mb-10" role="list">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#9bd9e4] flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                  <svg className="w-5 h-5 text-[#003067]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Outsourced Accounting &amp; CFO</h3>
                  <p className="text-white/90 text-sm">Complete financial operations management without the overhead of a full-time team</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#9bd9e4] flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                  <svg className="w-5 h-5 text-[#003067]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Strategic Tax Planning</h3>
                  <p className="text-white/90 text-sm">Proactive tax strategies that minimize liability and maximize your business value</p>
                </div>
              </li>
            </ul>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-[#9bd9e4] mb-2">$1M-$50M</div>
                <div className="text-sm text-white/90 uppercase tracking-wide">Target Business Size</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-[#9bd9e4] mb-2">Since 2005</div>
                <div className="text-sm text-white/90 uppercase tracking-wide">Trusted Expertise</div>
              </div>
            </div>

            {/* Button */}
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#003067] transform hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
            >
              Learn More About Our Services
            </a>
          </div>

          {/* Right Column: Decorative Floating Image */}
          <div className="relative flex justify-center md:justify-end" aria-hidden="true">
            <div className="floating-image relative" style={{ maxWidth: '500px' }}>
              <img
                src="/images/home-what-we-do.svg"
                alt=""
                role="presentation"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
