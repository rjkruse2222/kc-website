export default function Hero() {
  return (
    <section className="hero-section relative bg-cover bg-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/images/home-hero-tall.jpg)'
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 md:py-40 text-center">
        <div className="max-w-5xl mx-auto" style={{ width: '90%' }}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 uppercase">
            FOCUS ON GROWING YOUR BUSINESS,<br />
            LET US BE YOUR TRUSTED ADVISOR
          </h1>
          <a
            href="/contact-us"
            className="bracket-button inline-block px-6 py-2 text-white text-base font-normal uppercase opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
