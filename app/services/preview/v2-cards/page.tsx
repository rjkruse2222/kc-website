'use client';

import Link from 'next/link';
import { useState } from 'react';
import NewsletterSection from '../../../components/NewsletterSection';

const services = [
  {
    title: 'Tax Strategy',
    subtitle: 'Year-round partnership',
    description: 'We work with you throughout the year to find opportunities, plan ahead, and make sure you\'re never surprised.',
    features: ['Quarterly check-ins', 'Proactive planning', 'Clear communication'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    link: '/services/tax-strategy',
    accent: '#003067',
  },
  {
    title: 'Client Accounting',
    subtitle: 'Flexible packages',
    description: 'From bookkeeping basics to full CFO support. Start with what you need, add more as you grow.',
    features: ['Essential tier', 'Growth tier', 'Enterprise tier'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    link: '/services/client-accounting',
    accent: '#9bd9e4',
  },
];

const benefits = [
  { icon: '📊', title: 'Real-time visibility', desc: 'We know your numbers, so we plan proactively' },
  { icon: '🤝', title: 'Seamless coordination', desc: 'One team, one strategy, zero gaps' },
  { icon: '📅', title: 'Year-round partnership', desc: 'We\'re here whenever you have questions' },
  { icon: '💡', title: 'Strategic insights', desc: 'Data-driven decisions for your business' },
];

export default function ServicesPageV2() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="bg-[#fafafa]">
      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns { animation: ken-burns 20s ease-out forwards; }
      `}</style>

      {/* Hero - Ken Burns Photo Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
              alt="Professional team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/85 to-[#003067]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#9bd9e4]" />
                <span className="text-[#9bd9e4] text-sm font-semibold tracking-widest uppercase">Our Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Year-Round
                <span className="block text-[#9bd9e4] mt-2">CPA Partnership</span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Your accounting and tax strategy should work as one. We combine proactive tax planning with reliable financial management.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#our-services"
                  className="group px-8 py-4 bg-white text-[#003067] font-semibold rounded-full hover:bg-[#9bd9e4] transition-all duration-300 shadow-lg"
                >
                  Explore Our Services
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl">
                <img
                  src="/images/services-lifecycle.svg"
                  alt="Year-Round CPA Partnership cycle"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Grid */}
      <section id="our-services" className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
              Two ways we help
            </h2>
            <p className="text-gray-600 text-lg">
              We keep it simple. Two core services, each designed to give you exactly what you need.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, idx) => (
              <Link
                key={service.title}
                href={service.link}
                className="group relative block h-[500px] rounded-3xl overflow-hidden"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hoveredCard === idx ? 'scale-110' : 'scale-100'}`}
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${hoveredCard === idx ? 'opacity-100' : 'opacity-90'}`} />

                {/* Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                  style={{ backgroundColor: service.accent, transform: hoveredCard === idx ? 'scaleX(1)' : 'scaleX(0.3)', transformOrigin: 'left' }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span className="text-white/60 text-sm font-medium mb-2">{service.subtitle}</span>
                  <h3 className="text-4xl font-bold text-white mb-4">{service.title}</h3>
                  <p className={`text-white/80 leading-relaxed mb-6 transition-all duration-300 ${hoveredCard === idx ? 'opacity-100 max-h-24' : 'opacity-70 max-h-16 overflow-hidden'}`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-300 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'}`}>
                    {service.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className={`flex items-center gap-2 text-white font-semibold transition-all duration-300 ${hoveredCard === idx ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                    Learn more
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9bd9e4]"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="font-bold text-[#003067] mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Photo */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1920&q=80"
            alt="Strategic planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">By The Numbers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Proven Results
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '20', label: 'Years serving Cincinnati' },
              { value: '12+', label: 'Check-ins per year' },
              { value: '$50M', label: 'Client revenue sweet spot' },
              { value: '100%', label: 'Financial visibility' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-7xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[#9bd9e4] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection variant="light" />

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#003067]/90" />
            </div>

            <div className="relative p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s talk about your business.
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                No pressure, no sales pitch. Just a conversation about where you are and how we might help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#003067] font-bold rounded-full hover:bg-[#9bd9e4] transition-colors shadow-lg"
              >
                Schedule a Conversation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
