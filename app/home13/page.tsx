'use client';

import { useState, useRef, useEffect } from 'react';

// Problem-Solution Focused Design
// Story-driven approach that addresses pain points and presents K&C as the solution

export default function Home13() {
  const [activePain, setActivePain] = useState(0);
  const [formData, setFormData] = useState({ revenue: '', pain: '' });
  const heroRef = useRef<HTMLDivElement>(null);

  const painPoints = [
    {
      problem: "Surprised by your tax bill every April?",
      detail: "Most CPAs are reactive. They file what happened. We plan what should happen.",
      solution: "Quarterly tax planning sessions that identify savings before they expire",
      savings: "Average $35K+ in first-year savings"
    },
    {
      problem: "Outgrowing your bookkeeper but can't afford a CFO?",
      detail: "Growing businesses need strategic financial guidance, not just data entry.",
      solution: "Outsourced CFO services at a fraction of a full-time salary",
      savings: "Fortune 500 insight for SMB budgets"
    },
    {
      problem: "Making big decisions without financial clarity?",
      detail: "You can't grow what you can't measure. Old or messy books cost opportunities.",
      solution: "Real-time cloud accounting with monthly financial reviews",
      savings: "Decisions backed by data, not guesses"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery Call",
      description: "15-minute call to understand your situation",
      time: "Free"
    },
    {
      step: "2",
      title: "Financial Review",
      description: "We analyze your current tax situation and books",
      time: "1 week"
    },
    {
      step: "3",
      title: "Strategy Session",
      description: "Present opportunities and build your plan",
      time: "60 min"
    },
    {
      step: "4",
      title: "Implementation",
      description: "Execute strategies and track results",
      time: "Ongoing"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.opacity = `${1 - scrolled / 700}`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero - Question-Led */}
      <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <div
            ref={heroRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/home-hero-tall.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#9bd9e4]/20 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-[#003067] text-sm font-medium">Accepting new clients in Cincinnati</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#003067] leading-tight mb-6">
              What if your CPA<br />
              <span className="font-bold">actually saved you money?</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Most business owners overpay on taxes because their CPA is reactive.
              We take a different approach: year-round strategy, not just April paperwork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#003067] text-white font-semibold rounded-lg hover:bg-[#004a8f] transition-colors shadow-lg"
              >
                See If You Qualify
              </a>
              <a
                href="tel:5132722200"
                className="inline-flex items-center justify-center px-8 py-4 text-[#003067] font-semibold"
              >
                Or call (513) 272-2200 →
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-[#003067]">$50M+</div>
                <div className="text-gray-500 text-sm">Tax savings found</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#003067]">150+</div>
                <div className="text-gray-500 text-sm">Businesses served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#003067]">4.9★</div>
                <div className="text-gray-500 text-sm">Google rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] uppercase tracking-widest text-sm font-semibold">Sound Familiar?</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] mt-4">
              Common Problems We <span className="font-bold">Solve Every Day</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className={`group cursor-pointer transition-all duration-300 ${
                  i === activePain ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActivePain(i)}
              >
                <div className={`h-full rounded-2xl p-8 transition-all duration-300 ${
                  i === activePain
                    ? 'bg-[#003067] text-white shadow-2xl'
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}>
                  {/* Problem */}
                  <div className={`text-xl font-bold mb-4 ${i === activePain ? 'text-white' : 'text-[#003067]'}`}>
                    {pain.problem}
                  </div>

                  {/* Detail */}
                  <p className={`mb-6 ${i === activePain ? 'text-white/80' : 'text-gray-600'}`}>
                    {pain.detail}
                  </p>

                  {/* Solution */}
                  <div className={`p-4 rounded-lg mb-4 ${
                    i === activePain ? 'bg-white/10' : 'bg-[#9bd9e4]/10'
                  }`}>
                    <div className={`text-xs uppercase tracking-wider mb-2 ${
                      i === activePain ? 'text-[#9bd9e4]' : 'text-[#003067]'
                    }`}>
                      Our Solution
                    </div>
                    <p className={`text-sm font-medium ${i === activePain ? 'text-white' : 'text-gray-700'}`}>
                      {pain.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className={`flex items-center gap-2 ${i === activePain ? 'text-[#9bd9e4]' : 'text-[#003067]'}`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold">{pain.savings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#003067]">
              The Difference <span className="font-bold">Proactive Planning</span> Makes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Before */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full blur-2xl" />
              <div className="relative bg-red-50 rounded-2xl p-8 border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-500 text-2xl">😰</span>
                  </div>
                  <div>
                    <div className="text-xs text-red-500 uppercase tracking-wider font-semibold">Before K&C</div>
                    <div className="text-xl font-bold text-gray-800">Traditional CPA</div>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Annual tax bill surprises",
                    "Reactive advice after the fact",
                    "Missed deductions and credits",
                    "No strategic tax planning",
                    "Slow response times",
                    "Generic advice for all clients"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9bd9e4]/30 rounded-full blur-2xl" />
              <div className="relative bg-[#003067] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#9bd9e4] rounded-full flex items-center justify-center">
                    <span className="text-[#003067] text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#9bd9e4] uppercase tracking-wider font-semibold">With K&C</div>
                    <div className="text-xl font-bold text-white">Strategic Partner</div>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Quarterly tax projections",
                    "Proactive strategy recommendations",
                    "Every credit, every deduction",
                    "Year-round tax optimization",
                    "Same-day responses",
                    "Industry-specific expertise"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/90">
                      <span className="text-[#9bd9e4] mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] uppercase tracking-widest text-sm font-semibold">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#003067] mt-4">
              Your Path to <span className="font-bold">Tax Savings</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector Line */}
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-[#9bd9e4]/30" />
                )}

                <div className="bg-white rounded-2xl p-6 shadow-lg relative z-10">
                  <div className="w-14 h-14 bg-[#003067] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#003067] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <div className="text-[#9bd9e4] text-sm font-semibold">{step.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Calculator */}
      <section id="calculator" className="py-20 bg-[#003067]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Do We Work With <span className="font-bold">Businesses Like Yours?</span>
            </h2>
            <p className="text-white/70">Answer two quick questions to find out</p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-[#003067] font-semibold mb-3">
                  What's your annual revenue?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Under $1M", "$1M - $5M", "$5M - $20M", "$20M - $50M"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({ ...formData, revenue: option })}
                      className={`p-4 rounded-lg border-2 text-sm font-medium transition-all ${
                        formData.revenue === option
                          ? 'border-[#003067] bg-[#003067] text-white'
                          : 'border-gray-200 hover:border-[#9bd9e4] text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#003067] font-semibold mb-3">
                  What's your biggest challenge?
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {["High tax bills", "Need CFO guidance", "Messy books", "All of the above"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({ ...formData, pain: option })}
                      className={`p-4 rounded-lg border-2 text-sm font-medium transition-all text-left ${
                        formData.pain === option
                          ? 'border-[#003067] bg-[#003067] text-white'
                          : 'border-gray-200 hover:border-[#9bd9e4] text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result */}
            {formData.revenue && formData.pain && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-green-600 text-4xl mb-3">✓</div>
                <h3 className="text-xl font-bold text-[#003067] mb-2">Great news!</h3>
                <p className="text-gray-600 mb-6">
                  {formData.revenue !== "Under $1M"
                    ? "You're exactly the type of business we help. Let's talk about how we can reduce your tax burden."
                    : "While we typically work with $1M+ businesses, we'd be happy to discuss if we're the right fit."}
                </p>
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#003067] text-white font-semibold rounded-lg hover:bg-[#004a8f] transition-colors"
                >
                  Schedule Free Consultation
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center text-yellow-400 text-2xl mb-4">★★★★★</div>
            <h2 className="text-3xl md:text-4xl font-light text-[#003067]">
              What Business Owners <span className="font-bold">Say About Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Finally, a CPA who thinks strategically. They found $45K in savings our previous accountant missed.",
                author: "Michael R.",
                role: "Manufacturing CEO"
              },
              {
                quote: "The CFO services have transformed how we make decisions. Worth every penny.",
                author: "Sarah T.",
                role: "Restaurant Group Owner"
              },
              {
                quote: "Responsive, proactive, and actually understands our industry. Highly recommend.",
                author: "David L.",
                role: "Real Estate Investor"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-[#003067]">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#003067] to-[#001840]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Stop Overpaying. <span className="font-bold">Start Saving.</span>
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Book a free 15-minute discovery call and find out exactly how much you could save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#9bd9e4] text-[#003067] font-bold rounded-lg hover:bg-white transition-colors shadow-xl"
            >
              Book Free Discovery Call
            </a>
            <a
              href="tel:5132722200"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              📞 (513) 272-2200
            </a>
          </div>
          <p className="mt-8 text-white/50 text-sm">
            105 E 4th St, Longworth Hall · Cincinnati, OH 45202
          </p>
        </div>
      </section>
    </main>
  );
}
