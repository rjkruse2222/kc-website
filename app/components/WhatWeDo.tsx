export default function WhatWeDo() {
  return (
    <section className="what-we-do-section relative bg-[#003067] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="relative z-10">
            {/* "What We Do" Label */}
            <div className="super-text-left mb-4">
              <p className="text-white uppercase tracking-[4px] text-sm font-normal">
                What We Do
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-8">
              Kruse & Crawford Provides Accounting Services Across a Number of Industries
            </h2>

            {/* Button */}
            <a
              href="/industries"
              className="bracket-button inline-block px-6 py-2 text-white text-base font-normal uppercase opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              ALL INDUSTRIES
            </a>
          </div>

          {/* Right Column: Floating Image */}
          <div className="relative">
            <div
              className="floating-image relative md:absolute md:right-0 md:-translate-y-[28%]"
              style={{ maxWidth: '560px' }}
            >
              <img
                src="/images/home-what-we-do.svg"
                alt="What We Do"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
