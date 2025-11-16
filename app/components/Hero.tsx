export default function Hero() {
  return (
    <section className="hero-section relative bg-cover bg-center text-white overflow-hidden min-h-[700px] md:min-h-[800px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/images/home-hero-tall.jpg)'
        }}
      ></div>

      {/* Gradient Overlay for better depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#003067]/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-40 md:py-48 flex items-center min-h-[700px] md:min-h-[800px]">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block">
            <span className="text-[#9bd9e4] uppercase tracking-[3px] text-sm font-semibold">
              Since 2005
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
            Focus on Growing <br className="hidden md:block" />
            <span className="font-semibold">Your Business</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 text-white/90 max-w-2xl">
            Let us be your trusted advisor. Expert accounting and advisory services for Cincinnati businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold uppercase text-sm tracking-wide rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
