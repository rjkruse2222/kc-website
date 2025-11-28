'use client';

import { useEffect, useRef, useState } from 'react';

// Minimalist Luxury Design
// Ultra-clean, high-end aesthetic with lots of white space
// Premium positioning for the $1M-$50M market

export default function Home14() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero - Minimalist Statement */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Subtle Background Element */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/4">
          <div className="w-full h-full rounded-full border border-[#003067]/5" />
          <div className="absolute inset-8 rounded-full border border-[#003067]/5" />
          <div className="absolute inset-16 rounded-full border border-[#003067]/5" />
        </div>

        <div className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <span className="inline-block text-[#9bd9e4] text-sm tracking-[0.3em] uppercase font-light">
              Kruse & Crawford CPAs
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#003067] leading-[1.1] mb-8 tracking-tight">
            We don't just do taxes.
            <br />
            <span className="font-semibold">We build fortunes.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Strategic tax planning and CFO services for Cincinnati businesses doing $1M-$50M in revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact-us"
              className="group px-10 py-5 bg-[#003067] text-white text-sm tracking-widest uppercase font-medium hover:bg-[#001840] transition-all duration-500"
            >
              <span className="flex items-center gap-3">
                Begin
                <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="tel:5132722200"
              className="text-[#003067] text-sm tracking-widest uppercase font-light hover:text-[#9bd9e4] transition-colors"
            >
              (513) 272-2200
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#003067]/20 to-[#003067]/40" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        ref={(el) => { sectionRefs.current[0] = el; }}
        className="py-32 px-6 opacity-0 transition-all duration-1000"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#9bd9e4] text-xs tracking-[0.3em] uppercase mb-6 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#003067] leading-tight mb-8">
                The traditional CPA model is
                <span className="font-semibold"> broken</span>
              </h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p>
                  Most accountants are reactive. They wait until April, tally what happened, and send you a bill. By then, it's too late to optimize anything.
                </p>
                <p>
                  We believe true value comes from a year-round partnership. Quarterly planning sessions. Proactive strategy. Continuous communication.
                </p>
                <p>
                  That's how fortunes are built.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                  src="/images/home-hero-tall.jpg"
                  alt="Strategic planning"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#003067] text-white p-8">
                <div className="text-4xl font-light mb-1">Since</div>
                <div className="text-5xl font-semibold">2005</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Elegant Grid */}
      <section
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="py-32 px-6 bg-[#fafafa] opacity-0 transition-all duration-1000"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#9bd9e4] text-xs tracking-[0.3em] uppercase mb-4 block">Services</span>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#003067]">
              Two disciplines.
              <span className="font-semibold"> One focus.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#003067]/10">
            {/* Service 1 */}
            <div className="bg-white p-12 md:p-16 group hover:bg-[#003067] transition-colors duration-500">
              <div className="text-[120px] font-extralight text-[#003067]/10 group-hover:text-white/10 leading-none mb-8 transition-colors">
                01
              </div>
              <h3 className="text-2xl font-light text-[#003067] group-hover:text-white mb-4 transition-colors">
                Strategic Tax Planning
              </h3>
              <p className="text-gray-500 group-hover:text-white/70 font-light leading-relaxed mb-8 transition-colors">
                Year-round proactive strategies designed quarterly. Entity structure. Compensation planning. Credit mapping. Every legal method to reduce your burden.
              </p>
              <a
                href="/services/tax"
                className="inline-flex items-center text-[#003067] group-hover:text-[#9bd9e4] text-sm tracking-wider uppercase font-medium transition-colors"
              >
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-12 md:p-16 group hover:bg-[#003067] transition-colors duration-500">
              <div className="text-[120px] font-extralight text-[#003067]/10 group-hover:text-white/10 leading-none mb-8 transition-colors">
                02
              </div>
              <h3 className="text-2xl font-light text-[#003067] group-hover:text-white mb-4 transition-colors">
                Outsourced CFO
              </h3>
              <p className="text-gray-500 group-hover:text-white/70 font-light leading-relaxed mb-8 transition-colors">
                Executive-level financial guidance without the six-figure salary. Strategic insight for scaling businesses. Fortune 500 thinking at SMB prices.
              </p>
              <a
                href="/services/cfo"
                className="inline-flex items-center text-[#003067] group-hover:text-[#9bd9e4] text-sm tracking-wider uppercase font-medium transition-colors"
              >
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Clean Horizontal */}
      <section
        ref={(el) => { sectionRefs.current[2] = el; }}
        className="py-20 px-6 bg-[#003067] opacity-0 transition-all duration-1000"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { number: "$50M+", label: "Tax savings identified" },
              { number: "150+", label: "Businesses served" },
              { number: "20+", label: "Years experience" },
              { number: "4.9", label: "Google rating" }
            ].map((stat, i) => (
              <div key={i} className="text-center py-8 px-4">
                <div className="text-4xl md:text-5xl font-extralight text-white mb-2">{stat.number}</div>
                <div className="text-white/50 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Client */}
      <section
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="py-32 px-6 opacity-0 transition-all duration-1000"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#9bd9e4] text-xs tracking-[0.3em] uppercase mb-6 block">Who We Serve</span>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#003067] leading-tight mb-12">
            Built for businesses with
            <span className="font-semibold"> $1M-$50M</span> in revenue
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              {
                title: "Established Businesses",
                description: "You've proven your model. Now you need sophisticated tax strategy to keep more of what you earn."
              },
              {
                title: "Growth-Focused Owners",
                description: "You're scaling and need financial guidance that matches your ambition."
              },
              {
                title: "Strategic Thinkers",
                description: "You value proactive planning over reactive paperwork."
              }
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-medium text-[#003067] mb-3">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Minimalist */}
      <section
        ref={(el) => { sectionRefs.current[4] = el; }}
        className="py-32 px-6 bg-[#fafafa] opacity-0 transition-all duration-1000"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#9bd9e4] text-xs tracking-[0.3em] uppercase mb-4 block">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#003067]">
              Your partners in
              <span className="font-semibold"> building wealth</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {[
              {
                name: "Richard Kruse",
                credentials: "CPA",
                role: "Managing Partner",
                bio: "Strategic tax planning specialist with two decades of experience optimizing outcomes for Cincinnati's growing businesses.",
                image: "/images/rick-kruse.jpg"
              },
              {
                name: "Jennifer Crawford",
                credentials: "CPA",
                role: "Partner",
                bio: "CFO services expert dedicated to providing enterprise-level financial guidance to small and medium businesses.",
                image: "/images/jennifer-crawford.jpg"
              }
            ].map((person, i) => (
              <div key={i} className="text-center">
                <div className="w-48 h-48 mx-auto mb-8 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-light text-[#003067]">
                  {person.name}, <span className="text-[#9bd9e4]">{person.credentials}</span>
                </h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">{person.role}</p>
                <p className="text-gray-500 font-light leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Single Featured */}
      <section
        ref={(el) => { sectionRefs.current[5] = el; }}
        className="py-32 px-6 opacity-0 transition-all duration-1000"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#9bd9e4] text-6xl font-serif mb-8">"</div>
          <blockquote className="text-2xl md:text-3xl font-extralight text-[#003067] leading-relaxed mb-12">
            Kruse & Crawford transformed how we approach tax planning. Their proactive strategies identified over $85,000 in savings in the first year alone. They're not accountants. They're strategic partners.
          </blockquote>
          <div>
            <div className="text-[#003067] font-medium">Michael Chen</div>
            <div className="text-gray-400 text-sm">CEO, TechFlow Manufacturing</div>
          </div>
        </div>
      </section>

      {/* CTA - Elegant */}
      <section className="py-32 px-6 bg-[#003067]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-white leading-tight mb-8">
            Ready to build
            <span className="font-semibold"> your fortune?</span>
          </h2>
          <p className="text-xl text-white/60 font-light mb-12 max-w-xl mx-auto">
            Schedule a consultation and discover how proactive tax planning can transform your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact-us"
              className="group px-12 py-5 bg-white text-[#003067] text-sm tracking-widest uppercase font-medium hover:bg-[#9bd9e4] transition-all duration-500"
            >
              <span className="flex items-center gap-3">
                Schedule Consultation
                <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white/40 text-sm">
              <span>105 E 4th St, Longworth Hall</span>
              <span className="hidden md:block">·</span>
              <span>Cincinnati, OH 45202</span>
              <span className="hidden md:block">·</span>
              <span>(513) 272-2200</span>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for fade-in animation */}
      <style jsx>{`
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        section[ref] {
          transform: translateY(30px);
        }
      `}</style>
    </main>
  );
}
