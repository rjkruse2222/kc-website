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
          <div>
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#003067] leading-[1.3] mb-10">
              WE DON'T JUST DO TAXES,<br />
              WE BUILD FORTUNES
            </h2>

            {/* Philosophy Section */}
            <div className="mb-10">
              <div className="mb-4">
                <span className="text-[#003067] uppercase tracking-[4px] text-xs font-semibold">
                  Our Philosophy
                </span>
              </div>
              <p className="text-base md:text-lg text-[#666] leading-[1.8] max-w-xl">
                The traditional CPA model is broken and we believe true value comes from a year round partnership, not just once a year data entry. That's why we take a holistic approach for our clients that revolves around accounting and tax strategy and continuous open communication.
              </p>
            </div>

            {/* Mission Section */}
            <div>
              <div className="mb-4">
                <span className="text-[#003067] uppercase tracking-[4px] text-xs font-semibold">
                  Our Mission
                </span>
              </div>
              <p className="text-base md:text-lg text-[#666] leading-[1.8] max-w-xl">
                We empower small businesses through strategic tax reduction, AI-driven analytics, and cloud solutions. We handle financial complexities so owners can focus on growth. Our client-centric approach is built on trustworthiness, responsiveness, and excellence. We strive to create a thriving workplace while driving our clients' financial success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
