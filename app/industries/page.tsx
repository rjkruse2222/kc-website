import Link from 'next/link';

export const metadata = {
  title: 'Industries We Serve | Kruse & Crawford CPAs',
  description: 'Kruse & Crawford CPAs provides specialized tax strategy and accounting services for Real Estate, Manufacturing, Healthcare, Technology, and other industries nationwide.',
};

const industries = [
  {
    name: 'Real Estate & Construction',
    slug: 'real-estate-construction',
    description: 'Cost segregation, 1031 exchanges, REPS status optimization, and project-based accounting for developers, investors, and contractors.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    description: 'R&D tax credits, equipment depreciation strategies, inventory accounting, and cost optimization for manufacturers of all sizes.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    name: 'Food & Beverage',
    slug: 'food-beverage',
    description: 'Multi-location accounting, tip credit optimization, inventory management, and franchise financial strategies for restaurants and food businesses.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Technology',
    slug: 'technology',
    description: 'R&D tax credits, stock option planning, SaaS revenue recognition, and growth-stage financial strategy for tech companies.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Practice valuations, compliance support, retirement planning, and tax strategy for medical practices and healthcare organizations.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    name: 'B2B Services',
    slug: 'b2b-services',
    description: 'Entity structuring, partner compensation planning, and growth strategies for consultants, agencies, and professional service firms.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Life Sciences',
    slug: 'life-sciences',
    description: 'R&D tax credits, grant accounting, IP strategies, and financial planning for biotech, pharma, and medical device companies.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    name: 'High-Income Individuals',
    slug: 'high-income-individuals',
    description: 'Personal tax strategy, estate planning, investment tax optimization, and wealth preservation for executives and high earners.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }
];

export default function IndustriesPage() {
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
              Industry Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Specialized Knowledge
              <span className="block text-[#9bd9e4] mt-2">For Your Industry</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Every industry has unique tax opportunities and challenges. We bring deep expertise in your sector to maximize savings and minimize risk.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#9bd9e4] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-[#003067] flex items-center justify-center mb-6 text-white group-hover:bg-[#9bd9e4] group-hover:text-[#003067] transition-colors duration-300">
                  {industry.icon}
                </div>
                <h2 className="text-xl font-bold text-[#003067] mb-3 group-hover:text-[#9bd9e4] transition-colors">
                  {industry.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                <span className="inline-flex items-center text-[#003067] font-medium text-sm group-hover:text-[#9bd9e4] transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Why It Matters</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-8">
                Generic Advice<br />
                <span className="text-[#9bd9e4]">Costs You Money</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A CPA who does not understand your industry will miss opportunities that someone with specialized knowledge would catch. Tax laws, deductions, and strategies vary significantly by sector.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We invest the time to understand the unique aspects of your business. This deep knowledge translates directly into tax savings and better financial decisions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#002050] transition-colors"
              >
                Discuss Your Industry
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-[#003067] mb-2">8</div>
                <div className="text-gray-600 text-sm">Industry Specializations</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-[#003067] mb-2">$50M+</div>
                <div className="text-gray-600 text-sm">Client Tax Savings</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-[#003067] mb-2">20+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-[#003067] mb-2">50</div>
                <div className="text-gray-600 text-sm">States Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#003067]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Do Not See Your Industry?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            We work with businesses across many sectors. Contact us to discuss your specific situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-colors"
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
