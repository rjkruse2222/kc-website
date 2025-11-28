'use client';

import { useEffect, useRef, useState } from 'react';

// Social Proof & Trust Focused Design
// Heavy emphasis on credibility, testimonials, and trust signals

export default function Home11() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Kruse & Crawford transformed how we approach tax planning. Their proactive strategies saved us over $85,000 in the first year alone.",
      author: "Michael Chen",
      title: "CEO, TechFlow Manufacturing",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "Finally, a CPA firm that understands growing businesses. They're not just accountants, they're strategic partners in our success.",
      author: "Sarah Williams",
      title: "Owner, Williams Restaurant Group",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "The CFO services have been invaluable. We get Fortune 500-level financial guidance at a fraction of the cost.",
      author: "David Martinez",
      title: "Founder, Martinez Construction",
      image: "/images/testimonial-3.jpg"
    }
  ];

  const trustStats = [
    { number: "20+", label: "Years Combined Experience" },
    { number: "150+", label: "Businesses Served" },
    { number: "$50M+", label: "Tax Savings Identified" },
    { number: "4.9★", label: "Google Rating" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Trust-Focused */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(/images/home-hero-tall.jpg)',
            height: '120%',
            top: '-10%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/85 to-[#003067]/70 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-[#9bd9e4] border-2 border-white flex items-center justify-center">
                    <span className="text-[#003067] font-bold text-xs">★</span>
                  </div>
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">Trusted by 150+ Cincinnati businesses</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              The CPA Firm That<br />
              <span className="font-bold">Grows With You</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-xl">
              Strategic tax planning and outsourced CFO services for businesses doing $1M-$50M. We don't just file returns. We build fortunes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#9bd9e4] text-[#003067] font-bold uppercase text-sm tracking-wide rounded-lg hover:bg-white transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                Schedule Free Consultation
              </a>
              <a
                href="tel:5132722200"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold uppercase text-sm tracking-wide rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (513) 272-2200
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed CPAs
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Since 2005
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cincinnati Based
              </div>
            </div>
          </div>

          {/* Google Reviews Card */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/google-logo.svg" alt="Google" className="h-8" />
                <div>
                  <div className="flex text-yellow-400 text-xl">★★★★★</div>
                  <p className="text-gray-500 text-sm">4.9 rating · 50+ reviews</p>
                </div>
              </div>
              <div className="space-y-4">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-lg transition-all duration-500 ${i === activeTestimonial ? 'bg-[#003067]/5 scale-105' : 'opacity-60'}`}
                  >
                    <p className="text-gray-700 text-sm italic mb-2">"{t.quote.substring(0, 80)}..."</p>
                    <p className="text-[#003067] font-semibold text-sm">{t.author}</p>
                  </div>
                ))}
              </div>
              <a href="/reviews" className="mt-6 block text-center text-[#003067] font-semibold hover:text-[#9bd9e4] transition-colors">
                Read all reviews →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#003067] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#9bd9e4] mb-1">{stat.number}</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem-Agitate-Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#003067] uppercase tracking-[3px] text-xs font-semibold rounded-full mb-4">
              Why Business Owners Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] mb-4">
              Tired of <span className="font-bold">Reactive Accounting?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">The Old Way</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Annual tax surprises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Reactive advice after the fact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Slow responses when you need answers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Missed deductions and credits</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">→</div>
                <p className="text-gray-600 font-medium">There's a better way</p>
              </div>
            </div>

            <div className="bg-[#003067] rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">The K&C Way</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-[#9bd9e4]">✓</span>
                  <span>Year-round proactive tax planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9bd9e4]">✓</span>
                  <span>Strategic advice before decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9bd9e4]">✓</span>
                  <span>Same-day response guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9bd9e4]">✓</span>
                  <span>Every credit, every deduction, every time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] mb-4">
              Two Services, <span className="font-bold">Maximum Impact</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We focus on what we do best so you can focus on running your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#9bd9e4]">
              <div className="w-16 h-16 bg-[#9bd9e4]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#003067]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Strategic Tax Planning</h3>
              <p className="text-gray-600 mb-6">
                Proactive tax strategies designed quarterly, not reactively in April. We identify every legal opportunity to reduce your tax burden.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Quarterly planning sessions
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Entity structure optimization
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Credit and deduction mapping
                </li>
              </ul>
              <a href="/services/tax-planning" className="inline-flex items-center text-[#003067] font-semibold hover:text-[#9bd9e4] transition-colors">
                Learn more →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#003067]">
              <div className="w-16 h-16 bg-[#003067]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#003067]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003067] mb-4">Outsourced CFO Services</h3>
              <p className="text-gray-600 mb-6">
                Executive-level financial guidance without the six-figure salary. Get the strategic insight your business needs to scale.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Financial reporting and analysis
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cash flow management
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Growth strategy planning
                </li>
              </ul>
              <a href="/services/cfo-services" className="inline-flex items-center text-[#003067] font-semibold hover:text-[#9bd9e4] transition-colors">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Testimonial */}
      <section className="py-20 bg-[#003067]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="flex justify-center text-[#9bd9e4] text-3xl mb-4">★★★★★</div>
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed mb-8">
            "{testimonials[activeTestimonial].quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#9bd9e4] flex items-center justify-center text-[#003067] font-bold text-xl">
              {testimonials[activeTestimonial].author.charAt(0)}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">{testimonials[activeTestimonial].author}</p>
              <p className="text-white/70">{testimonials[activeTestimonial].title}</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === activeTestimonial ? 'bg-[#9bd9e4] w-8' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] mb-4">
              Meet Your <span className="font-bold">Trusted Advisors</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
                <img src="/images/rick-kruse.jpg" alt="Richard Kruse" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#003067]">Richard Kruse, CPA</h3>
              <p className="text-[#9bd9e4] font-medium mb-3">Managing Partner</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                20+ years of experience helping Cincinnati businesses optimize their tax strategies and financial operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
                <img src="/images/jennifer-crawford.jpg" alt="Jennifer Crawford" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#003067]">Jennifer Crawford, CPA</h3>
              <p className="text-[#9bd9e4] font-medium mb-3">Partner</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Specializing in small business accounting and CFO services, helping owners make informed financial decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#003067] to-[#002050]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Ready to <span className="font-bold">Build Your Fortune?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Schedule a free consultation and discover how proactive tax planning can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#9bd9e4] text-[#003067] font-bold uppercase text-sm tracking-wide rounded-lg hover:bg-white transform hover:-translate-y-1 transition-all duration-300 shadow-2xl"
            >
              Schedule Free Consultation
            </a>
            <a
              href="tel:5132722200"
              className="inline-flex items-center justify-center px-10 py-5 bg-white/10 text-white font-semibold uppercase text-sm tracking-wide rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Call (513) 272-2200
            </a>
          </div>
          <p className="mt-8 text-white/60 text-sm">
            105 E 4th St, Longworth Hall · Cincinnati, OH 45202
          </p>
        </div>
      </section>
    </main>
  );
}
