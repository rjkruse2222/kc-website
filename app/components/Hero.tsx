export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#05346a] to-[#084a8f] text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Decorative Left Accent Bar */}
      <div
        className="absolute left-[10%] top-0 w-[30px] h-[200px] bg-[#9bd9e4] z-10"
        style={{
          clipPath: 'polygon(0 0, 100% 0%, 100% 90%, 0% 100%)'
        }}
      ></div>

      {/* Decorative Left Accent Bar - Bottom */}
      <div
        className="absolute left-[10%] bottom-0 w-[30px] h-[200px] bg-[#9bd9e4] z-10"
        style={{
          clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0% 100%)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            FOCUS ON GROWING YOUR BUSINESS,<br />
            LET US BE YOUR TRUSTED ADVISOR
          </h1>
          <button className="mt-8 px-8 py-3 bg-[#2ea3f2] hover:bg-[#05346a] text-white font-semibold rounded transition-all duration-300 text-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
