import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Kruse & Crawford CPAs',
  description: 'Learn about Kruse & Crawford CPAs - a national CPA firm headquartered in Cincinnati, serving small to mid-market businesses across the country with tax strategy and accounting services.',
};

const timeline = [
  {
    year: '2005',
    title: 'Founded',
    description: 'Richard Kruse Sr. establishes the firm in Cincinnati with a vision of providing personalized, year-round financial guidance to growing businesses.'
  },
  {
    year: '2010',
    title: 'Expanding Services',
    description: 'The firm grows beyond traditional tax preparation to offer comprehensive business advisory and CFO services.'
  },
  {
    year: '2015',
    title: 'Next Generation',
    description: 'Richard Kruse joins the firm, bringing fresh perspectives while honoring the founding principles.'
  },
  {
    year: '2020',
    title: 'Going National',
    description: 'Cloud-based solutions enable us to serve clients nationwide while maintaining the personal relationships we are known for.'
  },
  {
    year: 'Today',
    title: 'Coast to Coast',
    description: 'A national firm with 8 team members across Ohio, Texas, Georgia, New Jersey, and Illinois, serving clients in all 50 states.'
  }
];

const values = [
  {
    title: 'Year-Round Partnership',
    description: 'We believe tax strategy is a 12-month process, not a once-a-year event. Your success requires ongoing attention.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Personal Relationships',
    description: 'You will never be just an account number. We take the time to understand your business, your goals, and your challenges.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Proactive Guidance',
    description: 'We do not wait for problems to find you. We identify opportunities and challenges before they impact your bottom line.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Honest Advice',
    description: 'We tell you what you need to hear, not what you want to hear. Your financial success depends on clear, honest counsel.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#003067] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#9bd9e4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9bd9e4]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Built on Relationships,
              <span className="block text-[#9bd9e4] mt-2">Driven by Results</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              For nearly two decades, Kruse & Crawford has been more than a CPA firm. Headquartered in Cincinnati with team members across the country, we are trusted advisors who treat your business as if it were our own.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Tribute Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#003067] to-[#002050] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/rick-sr.jpg"
                  alt="Richard Kruse Sr., Founder of Kruse & Crawford CPAs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9bd9e4]/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#003067]/10 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">In Memoriam</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">
                Richard Kruse Sr.
                <span className="block text-xl font-normal text-gray-500 mt-2">Founder (1954 - 2023)</span>
              </h2>

              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Before founding Kruse & Crawford in 2005, Rick Sr. served as a partner at two large regional accounting firms. But he saw something missing in public accounting: genuine, personal relationships with clients. He believed small business owners deserved the same caliber of financial guidance that large corporations receive.
                </p>
                <p className="mb-6">
                  Rick Sr. was not your typical accountant. He spent countless hours with those in recovery, crediting Alcoholics Anonymous with saving his own life. As a sponsor for many years, he helped many others find sobriety. He brought that same dedication to service into his professional life, treating every client's success as his personal responsibility.
                </p>
                <p className="mb-6 italic border-l-4 border-[#9bd9e4] pl-6">
                  "It isn't how much you make, it is how much you keep."
                </p>
                <p>
                  Those words captured his philosophy perfectly. And they remain the foundation of everything we do today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Partner Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content - Left side this time */}
            <div className="order-2 lg:order-1">
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Leadership</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">
                Richard Kruse
                <span className="block text-xl font-normal text-gray-500 mt-2">Managing Partner, CPA, CTP</span>
              </h2>

              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-6">
                  Rick grew up watching his father build relationships with clients. He learned that accounting is not about numbers on a spreadsheet. It is about the families, employees, and dreams those numbers represent. He has spent his entire professional career at K&C and became a partner in 2019.
                </p>
                <p className="mb-6">
                  Today, as Managing Partner, Rick carries forward the firm's founding principles while bringing modern tools and strategies to serve clients better. He specializes in tax strategy for small to mid-market businesses across Food & Beverage, Real Estate, Manufacturing, Technology, Healthcare, and other industries.
                </p>
                <p>
                  Rick serves as Treasurer for Charlie's 3/4 House and enjoys spending time with his family, working out, golf, and fishing.
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#003067]/10 text-[#003067] text-sm font-medium rounded-full">
                  Certified Public Accountant (CPA)
                </span>
                <span className="px-4 py-2 bg-[#003067]/10 text-[#003067] text-sm font-medium rounded-full">
                  Certified Tax Planner (CTP)
                </span>
                <span className="px-4 py-2 bg-[#003067]/10 text-[#003067] text-sm font-medium rounded-full">
                  AICPA Member
                </span>
                <span className="px-4 py-2 bg-[#003067]/10 text-[#003067] text-sm font-medium rounded-full">
                  Ohio Society of CPAs
                </span>
              </div>
            </div>

            {/* Photo - Right side */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#9bd9e4]/30 to-[#003067]/20 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/headshot-rick-jr.png"
                  alt="Richard Kruse, Managing Partner of Kruse & Crawford CPAs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#003067]/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">
              Our Philosophy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every client relationship and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-[#003067] flex items-center justify-center mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003067] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">
              Key Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#9bd9e4] via-[#003067] to-[#9bd9e4]" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <span className="text-[#9bd9e4] font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-bold text-[#003067] mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#003067] rounded-full transform -translate-x-1/2 border-4 border-white shadow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#003067]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#9bd9e4] mb-2">20+</div>
              <div className="text-white/80">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#9bd9e4] mb-2">50</div>
              <div className="text-white/80">States Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#9bd9e4] mb-2">150+</div>
              <div className="text-white/80">Clients Nationwide</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#9bd9e4] mb-2">$50M+</div>
              <div className="text-white/80">Client Tax Savings</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#9bd9e4] mb-2">12+</div>
              <div className="text-white/80">Touchpoints Per Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-[#003067] to-[#002050] rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9bd9e4]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9bd9e4]/10 rounded-full blur-2xl" />

            <div className="relative text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                <svg className="w-8 h-8 text-[#9bd9e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Informed
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-lg mx-auto">
                Get tax strategies and insights delivered to your inbox. No spam, just valuable content.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent transition-all backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#9bd9e4] text-[#003067] font-bold rounded-xl hover:bg-white transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-sm text-white/50 mt-6">
                Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Schedule a conversation to see if we are a good fit for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-all duration-300"
          >
            Get in Touch
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
