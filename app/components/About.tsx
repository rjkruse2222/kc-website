export default function About() {
  return (
    <section
      className="who-we-are-section py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Two-column layout: Tall pie chart left, content right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: Tall Pie Chart Graphic */}
          <div className="flex items-start justify-center pt-12">
            <div
              className="w-full max-w-[400px] h-[600px]"
              style={{
                backgroundImage: 'url(/images/graph-rising-loop.svg)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center'
              }}
            ></div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* "Who We Are" Label */}
            <div className="mb-4">
              <span className="text-[#003067] uppercase tracking-[4px] text-xs font-semibold">
                Who We Are
              </span>
            </div>

            {/* Heading and Description in flexible layout */}
            <div className="space-y-6">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#003067] leading-tight">
                KRUSE & CRAWFORD<br />
                IS YOUR CINCINNATI<br />
                ACCOUNTING TEAM
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg text-[#666] leading-relaxed max-w-xl">
                Kruse and Crawford is a Cincinnati based accounting and business advisory firm that specializes in small to lower middle market companies. We are headquartered in historic Longworth Hall. We started in 2005 and offer services such as accounting, tax preparation, financial statement reporting, and management consulting. Let Kruse and Crawford be your one-stop shop for all your business's needs.
              </p>
            </div>

            {/* "OUR SERVICES" Section with horizontal line */}
            <div className="pt-8">
              <div className="flex items-center gap-4">
                <div className="flex-grow h-px bg-[#9bd9e4]"></div>
                <span className="text-[#003067] uppercase tracking-[4px] text-xs font-semibold whitespace-nowrap">
                  Our Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
