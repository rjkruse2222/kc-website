'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Kruse & Crawford transformed our approach to business finances. Their proactive tax strategies saved us over $150K in the first year alone. They're true partners, not just number crunchers.",
      author: "Michael Chen",
      company: "TechStart Solutions",
      industry: "Technology",
      savings: "$150K+ saved"
    },
    {
      quote: "After 15 years with a traditional CPA, switching to Kruse & Crawford was eye-opening. Their year-round partnership model means we're always optimized, never scrambling at tax time.",
      author: "Sarah Martinez",
      company: "Martinez Manufacturing",
      industry: "Manufacturing",
      savings: "48-hour response time"
    },
    {
      quote: "The AI-driven analytics and cloud solutions gave us real-time visibility we never had before. Rick and Jennifer don't just handle our accounting—they help us strategize for growth.",
      author: "David Thompson",
      company: "Thompson Retail Group",
      industry: "Retail",
      savings: "$200K+ saved"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials-section py-24 md:py-32 bg-gradient-to-br from-[#003067] via-[#003067] to-[#002050] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9bd9e4]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9bd9e4]/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 backdrop-blur-sm text-white uppercase tracking-[3px] text-xs font-semibold rounded-full border border-white/20">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Trusted by Cincinnati's<br />
            <span className="font-semibold">Best Businesses</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl text-white leading-relaxed text-center mb-8 italic">
            "{current.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="text-center mb-8">
            <div className="text-white font-semibold text-lg mb-1">{current.author}</div>
            <div className="text-[#9bd9e4] text-sm mb-2">{current.company}</div>
            <div className="text-white/70 text-xs uppercase tracking-wide">{current.industry}</div>
          </div>

          {/* Savings Badge */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-2 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full text-sm">
              {current.savings}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#9bd9e4] w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#9bd9e4] text-[#003067] font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-white transform hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
          >
            Join 100+ Cincinnati Businesses
          </a>
        </div>
      </div>
    </section>
  );
}
