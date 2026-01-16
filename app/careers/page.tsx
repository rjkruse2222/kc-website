import Link from 'next/link';

export const metadata = {
  title: 'Careers | Kruse & Crawford CPAs',
  description: 'Join Kruse & Crawford CPAs - a national CPA firm offering remote work flexibility, growth opportunities, and a culture that values work-life balance.',
};

const benefits = [
  {
    title: 'Remote-First Culture',
    description: 'Work from anywhere in the US. Our team spans the country, connected by technology and shared values.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Meaningful Work',
    description: 'Help business owners keep more of what they earn. See the direct impact of your work on real people.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Continuous Learning',
    description: 'CPE coverage, conference attendance, and mentorship from experienced professionals who care about your growth.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible scheduling and reasonable hours, even during tax season. We believe burnout helps no one.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Competitive Compensation',
    description: 'Market-rate pay, performance bonuses, health insurance, and 401(k) matching. Your value is recognized.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Client Variety',
    description: 'Work with businesses across industries from tech startups to manufacturing. No two days are the same.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];

const values = [
  {
    title: 'Client First',
    description: 'Every decision starts with what\'s best for our clients. Their success is our success.'
  },
  {
    title: 'Proactive, Not Reactive',
    description: 'We anticipate needs and solve problems before they become crises. That\'s true partnership.'
  },
  {
    title: 'Continuous Improvement',
    description: 'We\'re always learning, always getting better. Complacency is the enemy of excellence.'
  },
  {
    title: 'Integrity Always',
    description: 'We do what\'s right, even when it\'s hard. Our reputation is built on trust.'
  }
];

const positions = [
  {
    title: 'Senior Tax Manager',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Lead complex tax engagements for our growing client base. Requires 5+ years of public accounting experience and CPA license.'
  },
  {
    title: 'Staff Accountant',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Support our client accounting team with monthly close, reconciliations, and financial reporting. 1-3 years experience preferred.'
  },
  {
    title: 'Tax Preparer (Seasonal)',
    location: 'Remote (US)',
    type: 'Seasonal',
    description: 'Join our team for tax season. Prepare individual and business returns under manager supervision. CPA or EA preferred.'
  }
];

export default function CareersPage() {
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
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Build Your Career
              <span className="block text-[#9bd9e4] mt-2">From Anywhere</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10">
              Join a national firm that values flexibility, growth, and meaningful work. We're building something special, and we want you to be part of it.
            </p>
            <a
              href="#positions"
              className="inline-flex items-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-colors"
            >
              View Open Positions
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Why Join Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">
              A Different Kind of CPA Firm
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've built a firm that puts people first, both clients and team members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[#003067] flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003067] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-8">
                What We Stand For
              </h2>
              <div className="space-y-6">
                {values.map((value, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#9bd9e4] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#003067]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#003067] mb-1">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#003067] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Life at K&C</h3>
              <div className="space-y-4 text-white/80">
                <p>
                  "I was tired of the grind at a big firm. At K&C, I have flexibility, interesting clients, and partners who actually care about my development."
                </p>
                <p className="text-sm text-white/60">
                  — Team Member, Remote from Texas
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#9bd9e4]">100%</div>
                    <div className="text-white/60 text-sm">Remote</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#9bd9e4]">50</div>
                    <div className="text-white/60 text-sm">States</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#9bd9e4]">20+</div>
                    <div className="text-white/60 text-sm">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">
              Current Opportunities
            </h2>
            <p className="text-gray-600">
              All positions are remote within the United States.
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#9bd9e4] transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#003067] mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">{position.location}</span>
                      <span className="px-3 py-1 bg-[#9bd9e4]/20 text-[#003067] text-sm rounded-full">{position.type}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{position.description}</p>
                  </div>
                  <Link
                    href="/careers/apply"
                    className="inline-flex items-center px-6 py-3 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#002050] transition-colors whitespace-nowrap"
                  >
                    Apply Now
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Don't see a position that fits? We're always interested in talented people.
            </p>
            <Link
              href="/careers/apply"
              className="inline-flex items-center text-[#003067] font-semibold hover:text-[#9bd9e4] transition-colors"
            >
              Send us your resume
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#003067]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            We're looking for people who care about doing great work and want flexibility in how they do it.
          </p>
          <Link
            href="/careers/apply"
            className="inline-flex items-center px-10 py-5 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-colors"
          >
            Apply Now
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
