export default function CTABand({
  headline,
  primaryText = "Contact Us",
  primaryLink = "mailto:info@kruseandcrawford.com",
  secondaryText = "View Case Studies",
  secondaryLink = "/case-studies"
}: {
  headline: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
}) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-[#004a8f]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {headline}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryLink}
            className="inline-flex items-center justify-center px-8 py-4 bg-light-blue text-primary font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            {primaryText}
          </a>
          <a
            href={secondaryLink}
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold uppercase text-sm tracking-wide rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white transition-all duration-300"
          >
            {secondaryText}
          </a>
        </div>
      </div>
    </section>
  );
}
