export default function WhyChooseUs() {
  const differences = [
    {
      traditional: 'Once-a-year tax filing',
      us: 'Year-round strategic partnership',
      icon: '📅'
    },
    {
      traditional: 'Historical data entry',
      us: 'Forward-looking tax planning',
      icon: '🎯'
    },
    {
      traditional: 'Basic compliance',
      us: 'AI-driven insights & analytics',
      icon: '🤖'
    },
    {
      traditional: 'Reactive approach',
      us: 'Proactive wealth building',
      icon: '💰'
    },
    {
      traditional: 'Limited communication',
      us: 'Continuous open dialogue',
      icon: '💬'
    },
    {
      traditional: 'Generic services',
      us: 'Holistic business solutions',
      icon: '🔄'
    }
  ];

  return (
    <section className="why-choose-us py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#003067] uppercase tracking-[3px] text-xs font-semibold rounded-full">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-[#003067] leading-tight mb-4">
            Not Your Typical CPA Firm
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            We've reimagined what a modern CPA firm should be
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differences.map((diff, index) => (
            <div key={index} className="comparison-card bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#9bd9e4] hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{diff.icon}</div>
              <div className="mb-4">
                <div className="text-xs uppercase tracking-wide text-[#666] mb-2">Traditional CPAs</div>
                <div className="text-sm text-[#999] line-through">{diff.traditional}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-[#003067] font-semibold mb-2">Kruse & Crawford</div>
                <div className="text-base font-semibold text-[#003067]">{diff.us}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#003067] text-white font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-[#9bd9e4] hover:text-[#003067] transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Free Strategic Review
          </a>
        </div>
      </div>
    </section>
  );
}
