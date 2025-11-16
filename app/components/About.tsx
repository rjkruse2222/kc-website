export default function About() {
  return (
    <section
      className="who-we-are-section py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative Background Element */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden md:block"
        style={{
          backgroundImage: 'url(/images/graph-rising-loop.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '400px',
          height: '400px',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Asymmetric Layout: 1/4 empty + 3/4 content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Empty 1/4 column for spacing */}
          <div className="hidden md:block"></div>

          {/* Main 3/4 content area */}
          <div className="md:col-span-3">
            {/* "Who We Are" Label */}
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#003067] uppercase tracking-[3px] text-xs font-semibold rounded-full">
                Who We Are
              </span>
            </div>

            {/* Two-column layout for heading + description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Left: Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-[#003067] leading-tight mb-4">
                  Kruse & Crawford<br />
                  <span className="font-semibold">is Your Cincinnati<br />
                  Accounting Team</span>
                </h2>
                <div className="w-24 h-1 bg-[#9bd9e4] rounded-full mt-6"></div>
              </div>

              {/* Right: Description */}
              <div className="flex flex-col justify-center">
                <p className="text-lg text-[#666] leading-relaxed mb-6">
                  Kruse and Crawford is a <strong className="text-[#003067] font-semibold">Cincinnati based accounting and business advisory firm</strong> that specializes in small to lower middle market companies.
                </p>
                <p className="text-base text-[#666] leading-relaxed">
                  Headquartered in historic Longworth Hall since 2005, we offer comprehensive services including accounting, tax preparation, financial statement reporting, and management consulting. Let us be your one-stop shop for all your business needs.
                </p>
              </div>
            </div>

            {/* "OUR SERVICES" Label */}
            <div className="text-right">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#003067] to-[#003067]/80 text-white uppercase tracking-[3px] text-xs font-semibold rounded-full shadow-lg">
                Our Services Below
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
