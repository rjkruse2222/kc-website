export default function About() {
  return (
    <section
      className="who-we-are-section py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Two-column layout: Large graphic left, content right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Large Pie Chart Graphic */}
          <div className="flex items-center justify-center">
            <div
              className="w-full max-w-[500px] h-[500px]"
              style={{
                backgroundImage: 'url(/images/graph-rising-loop.svg)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                filter: 'brightness(0.3) saturate(2)',
                opacity: 0.9
              }}
            ></div>
          </div>

          {/* Right: Content */}
          <div>
            {/* "Who We Are" Label */}
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#003067] uppercase tracking-[3px] text-xs font-semibold rounded-full">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-light text-[#003067] leading-tight mb-8">
              KRUSE & CRAWFORD<br />
              IS YOUR CINCINNATI<br />
              ACCOUNTING TEAM
            </h2>

            {/* Description */}
            <div className="mb-12">
              <p className="text-lg text-[#666] leading-relaxed">
                Kruse and Crawford is a Cincinnati based accounting and business advisory firm that specializes in small to lower middle market companies. We are headquartered in historic Longworth Hall. We started in 2005 and offer services such as accounting, tax preparation, financial statement reporting, and management consulting. Let Kruse and Crawford be your one-stop shop for all your business's needs.
              </p>
            </div>

            {/* "OUR SERVICES" Label */}
            <div className="text-left">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#003067] to-[#003067]/80 text-white uppercase tracking-[3px] text-xs font-semibold rounded-full shadow-lg">
                Our Services
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
