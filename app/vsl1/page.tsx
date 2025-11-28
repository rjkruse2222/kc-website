'use client';

import { useState, useEffect } from 'react';

// VSL1 - High-Income W2 Professionals
// Target: Doctors, Lawyers, Executives, Tech Workers making $200K+

export default function VSL1() {
  const [showCTA, setShowCTA] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);

  // Show CTA after 30 seconds (simulating video watch time)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage((prev) => {
        if (prev >= 30) setShowCTA(true);
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Dr. Michael Chen",
      title: "Orthopedic Surgeon",
      income: "$680K W2 Income",
      savings: "$127,000",
      quote: "I was paying nearly 45% in combined taxes. Rick's strategies helped me legally reduce that to under 30%. The ROI was immediate."
    },
    {
      name: "Sarah Williams",
      title: "Corporate Attorney",
      income: "$425K Partner Draw",
      savings: "$84,000",
      quote: "As a partner at a law firm, I thought I knew taxes. I was wrong. The entity restructuring alone saved me six figures over two years."
    },
    {
      name: "David Martinez",
      title: "Tech Executive",
      income: "$520K Total Comp",
      savings: "$95,000",
      quote: "Between RSUs, bonuses, and base salary, my tax situation was complex. They optimized everything from timing to charitable strategies."
    }
  ];

  const mediaLogos = [
    { name: "Forbes", src: "/images/media/forbes.svg" },
    { name: "Inc", src: "/images/media/inc.svg" },
    { name: "Yahoo Finance", src: "/images/media/yahoo.svg" },
    { name: "Cincinnati Business Courier", src: "/images/media/cbc.svg" }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Sticky CTA Bar - Appears after video */}
      {showCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#003067] to-[#004a8f] py-4 px-6 z-50 shadow-2xl animate-slide-up">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-bold">Ready to legally reduce your tax bill?</p>
              <p className="text-white/70 text-sm">Limited spots available for Q4 planning</p>
            </div>
            <a
              href="#apply"
              className="px-8 py-3 bg-[#9bd9e4] text-[#003067] font-bold rounded-lg hover:bg-white transition-colors whitespace-nowrap"
            >
              Apply for Strategy Session
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        {/* Top Bar */}
        <div className="bg-[#003067] py-3 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="text-white font-bold text-xl">KRUSE & CRAWFORD</div>
            <div className="hidden md:flex items-center gap-6 text-white/80 text-sm">
              <span>Licensed CPAs</span>
              <span>|</span>
              <span>Cincinnati, OH</span>
              <span>|</span>
              <span>(513) 272-2200</span>
            </div>
          </div>
        </div>

        {/* Main Hero */}
        <div className="flex-1 flex items-center py-16 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Headline */}
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-bold uppercase tracking-wider rounded mb-6">
                For High-Income Professionals Making $200K+
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                How High-Income Professionals<br />
                <span className="text-[#9bd9e4]">Legally Cut Their Tax Bill</span><br />
                By $50,000-$150,000+ Per Year
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
                Without risky schemes. Without offshore accounts. Using strategies the IRS specifically allows but your current CPA probably doesn't know.
              </p>
            </div>

            {/* Video Container */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border-4 border-[#9bd9e4]/30 shadow-2xl shadow-[#9bd9e4]/10">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="w-24 h-24 bg-[#9bd9e4] rounded-full flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-transform shadow-xl shadow-[#9bd9e4]/30">
                    <svg className="w-10 h-10 text-[#003067] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white/60 text-lg">Click to watch the free training</p>
                  <p className="text-white/40 text-sm mt-2">12 minutes | No email required</p>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                  <div
                    className="h-full bg-[#9bd9e4] transition-all duration-1000"
                    style={{ width: `${Math.min(timeOnPage * 3.33, 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Below Video CTA */}
            <div className="text-center">
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-12 py-5 bg-[#9bd9e4] text-[#003067] text-lg font-bold rounded-lg hover:bg-white transition-colors shadow-xl shadow-[#9bd9e4]/20"
              >
                Apply for a Free Strategy Session →
              </a>
              <p className="text-white/50 text-sm mt-4">
                Limited to 5 new clients per month | Currently accepting applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Logos */}
      <section className="py-12 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-white/40 text-sm uppercase tracking-wider mb-8">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {mediaLogos.map((logo, i) => (
              <div key={i} className="h-8 opacity-50 hover:opacity-100 transition-opacity">
                <div className="text-white/60 font-bold text-xl">{logo.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Here's The Problem With Being a<br />
            <span className="text-[#9bd9e4]">High-Income W2 Employee...</span>
          </h2>

          <div className="space-y-6">
            {[
              "You're in the highest tax brackets (32-37%) with almost NO deductions",
              "Your employer withholds taxes before you even see your paycheck",
              "Most CPAs just file what happened — they don't PLAN to reduce your bill",
              "You're told 'there's nothing you can do' about your tax situation",
              "Every year you write a massive check to the IRS and feel sick about it"
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-red-900/20 border border-red-500/30 rounded-xl">
                <span className="text-red-500 text-2xl">✗</span>
                <p className="text-lg text-white/90">{problem}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl text-white/80 italic">
              "The tax code is 6,871 pages long. It wasn't written to be fair.<br />
              <span className="text-[#9bd9e4] font-semibold">It was written to reward those who know how to use it."</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#003067]/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            What If You Could <span className="text-[#9bd9e4]">Legally</span> Keep<br />
            $50,000-$150,000+ More Every Year?
          </h2>
          <p className="text-center text-white/70 text-lg mb-12">
            Here's what strategic tax planning looks like for high-income professionals:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Entity Optimization",
                description: "Strategic business structures that allow deductions W2 employees can't access",
                icon: "🏢"
              },
              {
                title: "Retirement Maximization",
                description: "Beyond your 401(k): Cash balance plans, defined benefit structures, mega backdoor strategies",
                icon: "📈"
              },
              {
                title: "Real Estate Professional Status",
                description: "Qualify to offset W2 income with rental losses (even with a full-time job)",
                icon: "🏠"
              },
              {
                title: "Charitable Giving Strategies",
                description: "Donor-advised funds, charitable trusts, and bunching strategies that maximize impact",
                icon: "🎁"
              },
              {
                title: "Income Timing & Deferral",
                description: "Strategic timing of bonuses, RSUs, and other compensation",
                icon: "⏰"
              },
              {
                title: "State Tax Optimization",
                description: "Legal strategies for multi-state situations and remote work arrangements",
                icon: "🗺️"
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#9bd9e4]/50 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Real Results From <span className="text-[#9bd9e4]">Real Clients</span>
          </h2>
          <p className="text-center text-white/60 mb-12">
            High-income professionals just like you who took action
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#9bd9e4] rounded-full flex items-center justify-center text-[#003067] font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-[#9bd9e4] text-sm">{t.title}</div>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-[#003067]/50 rounded-lg">
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Annual Tax Savings</div>
                  <div className="text-3xl font-black text-[#9bd9e4]">{t.savings}</div>
                  <div className="text-white/50 text-sm">{t.income}</div>
                </div>

                <p className="text-white/80 italic">"{t.quote}"</p>

                <div className="flex text-yellow-400 mt-4">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works:<br />
            <span className="text-[#9bd9e4]">Our 4-Step Process</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Apply & Qualify",
                description: "Complete a brief application so we can understand your situation. Not everyone qualifies — we only work with clients where we can deliver significant results."
              },
              {
                step: "02",
                title: "Strategy Session",
                description: "A 45-minute deep-dive into your tax situation. We'll identify specific opportunities and show you exactly how much you could save."
              },
              {
                step: "03",
                title: "Custom Tax Plan",
                description: "Receive a written tax reduction plan with specific strategies, projected savings, and implementation timeline."
              },
              {
                step: "04",
                title: "Implementation & Support",
                description: "We execute the plan, handle all documentation, and provide year-round support. Quarterly check-ins ensure we capture every opportunity."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-[#9bd9e4] rounded-xl flex items-center justify-center text-[#003067] font-black text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Credibility */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden">
                <img src="/images/rick-kruse.jpg" alt="Richard Kruse, CPA" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <span className="text-[#9bd9e4] uppercase tracking-wider text-sm font-semibold">Your Tax Strategist</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">Richard Kruse, CPA</h2>
              <p className="text-white/70 mb-6">
                With over 20 years of experience, Rick has helped hundreds of high-income professionals legally reduce their tax burden by tens of thousands of dollars annually.
              </p>
              <p className="text-white/70 mb-6">
                Unlike traditional CPAs who simply file what happened, Rick and his team specialize in proactive tax strategy — finding opportunities before they expire, not after.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Licensed CPA in Ohio
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  $50M+ in client tax savings
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  150+ high-income clients served
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-[#9bd9e4]">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "I'm a W2 employee. Can I really reduce my taxes?",
                a: "Yes. While W2 employees have fewer deductions than business owners, strategic planning around entity structures, retirement vehicles, real estate, and timing can yield significant savings. Most W2 professionals we work with save $50,000-$150,000+ annually."
              },
              {
                q: "Is this legal? I don't want IRS problems.",
                a: "Everything we do is 100% legal and within IRS guidelines. We're licensed CPAs with professional liability insurance. We never recommend aggressive or 'gray area' strategies. Every strategy we implement has clear legal precedent."
              },
              {
                q: "What if I already have a CPA?",
                a: "Most CPAs are compliance-focused — they file returns but don't strategize. We can work alongside your existing CPA, providing the strategic layer they don't offer. Many clients keep their current CPA for preparation while we handle planning."
              },
              {
                q: "What's the minimum income to work with you?",
                a: "We typically work with professionals earning $200,000+ annually. Below this threshold, the complexity of advanced strategies often doesn't justify the investment. However, we evaluate each situation individually."
              },
              {
                q: "How much does this cost?",
                a: "Our fees vary based on complexity, but typically range from $5,000-$25,000 for comprehensive strategy and implementation. We guarantee our strategies will save you more than you invest, or we'll refund the difference."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/60">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="py-24 px-6 bg-gradient-to-b from-[#003067] to-[#001840]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Keep More of<br />
            <span className="text-[#9bd9e4]">What You Earn?</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Apply for a free strategy session. We'll review your situation and show you exactly how much you could save — with no obligation.
          </p>

          {/* Application Form */}
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold mb-6">Apply for Your Free Strategy Session</h3>
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-white/70 text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#9bd9e4]"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#9bd9e4]"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Annual Income</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#9bd9e4]">
                  <option value="" className="bg-gray-900">Select your income range</option>
                  <option value="200-300" className="bg-gray-900">$200,000 - $300,000</option>
                  <option value="300-500" className="bg-gray-900">$300,000 - $500,000</option>
                  <option value="500-1m" className="bg-gray-900">$500,000 - $1,000,000</option>
                  <option value="1m+" className="bg-gray-900">$1,000,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Primary Income Source</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#9bd9e4]">
                  <option value="" className="bg-gray-900">Select your income type</option>
                  <option value="w2" className="bg-gray-900">W2 Employee</option>
                  <option value="business" className="bg-gray-900">Business Owner</option>
                  <option value="real-estate" className="bg-gray-900">Real Estate Professional</option>
                  <option value="mixed" className="bg-gray-900">Multiple Sources</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#9bd9e4] text-[#003067] font-bold text-lg rounded-lg hover:bg-white transition-colors"
              >
                Submit Application →
              </button>
            </form>
            <p className="text-white/40 text-xs mt-4 text-center">
              We review all applications within 24 hours. Qualified applicants will receive a calendar link to schedule their free session.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/40 text-sm">
            <span>✓ 100% Free Session</span>
            <span>✓ No Obligation</span>
            <span>✓ Results Guaranteed</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">
            © 2024 Kruse & Crawford CPAs | 105 E 4th St, Longworth Hall, Cincinnati, OH 45202
          </div>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </main>
  );
}
