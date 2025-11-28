'use client';

import { useState, useEffect } from 'react';

// VSL2 - Real Estate Investors & Professionals
// Target: Landlords, Flippers, Syndicators, RE Professionals

export default function VSL2() {
  const [showCTA, setShowCTA] = useState(false);
  const [selectedProperties, setSelectedProperties] = useState('');
  const [estimatedSavings, setEstimatedSavings] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowCTA(true), 25000);
    return () => clearTimeout(timer);
  }, []);

  // Simple savings calculator based on properties
  useEffect(() => {
    const savingsMap: { [key: string]: number } = {
      '1-3': 25000,
      '4-10': 75000,
      '11-25': 150000,
      '25+': 300000
    };
    setEstimatedSavings(savingsMap[selectedProperties] || 0);
  }, [selectedProperties]);

  const strategies = [
    {
      title: "Cost Segregation Studies",
      savings: "$50K-$500K+ in Year 1",
      description: "Accelerate depreciation on commercial and residential properties to generate massive paper losses that offset your other income.",
      icon: "🏗️"
    },
    {
      title: "Real Estate Professional Status",
      savings: "Unlimited Loss Deductions",
      description: "Qualify as a Real Estate Professional and use rental losses to offset W2, business, and investment income — even with a full-time job.",
      icon: "👔"
    },
    {
      title: "1031 Exchange Strategies",
      savings: "Defer 100% of Gains",
      description: "Properly structure like-kind exchanges to defer capital gains indefinitely. We coordinate with qualified intermediaries.",
      icon: "🔄"
    },
    {
      title: "Entity Structuring",
      savings: "Asset Protection + Tax Benefits",
      description: "Optimize your LLC, S-corp, and holding company structure for both tax efficiency and liability protection.",
      icon: "🏢"
    },
    {
      title: "Opportunity Zones",
      savings: "Reduce or Eliminate Gains",
      description: "Invest capital gains into Qualified Opportunity Funds for deferral, reduction, and potential elimination of taxes.",
      icon: "📍"
    },
    {
      title: "STR Tax Loopholes",
      savings: "Massive Year 1 Deductions",
      description: "Short-term rentals with average stays under 7 days can generate non-passive losses that offset all income types.",
      icon: "🏖️"
    }
  ];

  const caseStudies = [
    {
      title: "Multifamily Investor",
      situation: "Owned 12 units across 3 properties. Paying $45K/year in taxes on rental income.",
      solution: "Cost segregation + REPS status qualification + entity restructuring",
      result: "$0 federal tax liability for 3 consecutive years",
      savings: "$135,000+"
    },
    {
      title: "Fix & Flip Operator",
      situation: "15 flips/year generating $400K profit. Paying ordinary income rates.",
      solution: "S-corp election + reasonable salary strategy + retirement plan",
      result: "Converted $180K from ordinary to long-term rates",
      savings: "$52,000/year"
    },
    {
      title: "W2 Employee + Landlord",
      situation: "Engineer earning $350K with 4 rental properties. Couldn't use rental losses.",
      solution: "REPS qualification through spouse + STR conversion + cost seg",
      result: "Now uses $95K in rental losses against W2 income",
      savings: "$38,000/year"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
      {/* Floating CTA */}
      {showCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-amber-600 to-amber-500 py-4 px-6 z-50 shadow-2xl">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-black">Stop paying taxes on your real estate income</p>
              <p className="text-black/70 text-sm">See if you qualify for our RE tax strategies</p>
            </div>
            <a
              href="#apply"
              className="px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-colors whitespace-nowrap"
            >
              Get Your Free Analysis
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col">
        {/* Top Bar */}
        <div className="bg-black/50 backdrop-blur-sm py-3 px-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="text-white font-bold text-xl">KRUSE & CRAWFORD</div>
            <div className="hidden md:block text-amber-400 text-sm font-medium">
              Real Estate Tax Strategists
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                For Real Estate Investors & Professionals
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                How Real Estate Investors<br />
                <span className="text-amber-400">Pay Little to No Taxes</span><br />
                (Legally)
              </h1>

              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-4">
                The wealthy don't get rich on real estate income. They get rich on real estate <em>tax benefits</em>. Here's how to unlock them.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-white/50 text-sm mb-8">
                <span>✓ Cost Segregation</span>
                <span>✓ REPS Qualification</span>
                <span>✓ 1031 Exchanges</span>
                <span>✓ STR Loopholes</span>
                <span>✓ Entity Structuring</span>
              </div>
            </div>

            {/* Video */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-transform shadow-xl">
                    <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white/60">Watch: Real Estate Tax Strategies That Actually Work</p>
                  <p className="text-amber-400/60 text-sm mt-2">15 minutes | No opt-in required</p>
                </div>
              </div>
            </div>

            {/* Quick Calculator */}
            <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h3 className="text-xl font-bold text-center mb-6">Quick Savings Estimate</h3>
              <div className="grid md:grid-cols-2 gap-6 items-end">
                <div>
                  <label className="block text-white/70 text-sm mb-2">How many properties do you own?</label>
                  <select
                    value={selectedProperties}
                    onChange={(e) => setSelectedProperties(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="" className="bg-gray-900">Select...</option>
                    <option value="1-3" className="bg-gray-900">1-3 properties</option>
                    <option value="4-10" className="bg-gray-900">4-10 properties</option>
                    <option value="11-25" className="bg-gray-900">11-25 properties</option>
                    <option value="25+" className="bg-gray-900">25+ properties</option>
                  </select>
                </div>
                <div className="text-center md:text-right">
                  {estimatedSavings > 0 && (
                    <div>
                      <p className="text-white/60 text-sm">Estimated Annual Savings</p>
                      <p className="text-4xl font-black text-amber-400">${estimatedSavings.toLocaleString()}+</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-12 py-5 bg-amber-500 text-black text-lg font-bold rounded-lg hover:bg-amber-400 transition-colors shadow-xl"
              >
                Get My Free Tax Analysis →
              </a>
              <p className="text-white/40 text-sm mt-4">
                We'll show you exactly which strategies apply to your portfolio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Most Real Estate Investors<br />
            <span className="text-amber-400">Leave Money on the Table</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-red-900/20 border border-red-500/30 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                What Most Investors Do
              </h3>
              <ul className="space-y-3 text-white/70">
                <li>• Use basic depreciation (27.5 years)</li>
                <li>• Can't use losses against W2 income</li>
                <li>• Pay capital gains on every sale</li>
                <li>• Miss out on bonus depreciation</li>
                <li>• Wrong entity structure</li>
                <li>• Leave credits unclaimed</li>
              </ul>
            </div>

            <div className="p-8 bg-green-900/20 border border-green-500/30 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                What Smart Investors Do
              </h3>
              <ul className="space-y-3 text-white/70">
                <li>• Cost seg to front-load depreciation</li>
                <li>• Qualify as RE Professional</li>
                <li>• 1031 into larger properties</li>
                <li>• Capture 60-80% Year 1 deductions</li>
                <li>• Strategic entity layering</li>
                <li>• Energy credits, historic credits</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl text-amber-400 font-semibold">
              "The tax code has hundreds of pages dedicated to real estate benefits.<br />
              Most CPAs have read none of them."
            </p>
          </div>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              6 Strategies That <span className="text-amber-400">Change Everything</span>
            </h2>
            <p className="text-white/60 text-lg">
              These are the same strategies used by the wealthiest real estate investors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((s, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-amber-500/50 transition-colors group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {s.title}
                </h3>
                <div className="text-amber-400 text-sm font-semibold mb-3">{s.savings}</div>
                <p className="text-white/60 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results From <span className="text-amber-400">Real Investors</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((c, i) => (
              <div key={i} className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl overflow-hidden">
                <div className="bg-amber-500 text-black px-6 py-3 font-bold">
                  {c.title}
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Situation</div>
                    <p className="text-white/80 text-sm">{c.situation}</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Strategy</div>
                    <p className="text-amber-400 text-sm font-medium">{c.solution}</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Result</div>
                    <p className="text-white/80 text-sm">{c.result}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Total Savings</div>
                    <div className="text-3xl font-black text-amber-400">{c.savings}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPS Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              The <span className="text-amber-400">Real Estate Professional Status</span> Game-Changer
            </h2>
            <p className="text-white/80 text-center text-lg mb-8">
              This one designation can change everything about your tax situation. Here's who qualifies:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">You May Qualify If:</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    Your spouse doesn't work (or works part-time)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    You self-manage your properties
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    You have short-term rentals
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    You're in real estate full-time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    You're a broker, agent, or property manager
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Benefits of REPS:</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    Rental losses become "non-passive"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    Offset W2, business, and investment income
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    No $25K passive loss limitation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    Stack with cost seg for massive deductions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    Legally pay $0 in federal taxes
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-10 py-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors"
              >
                See If You Qualify for REPS →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Strategist */}
      <section className="py-20 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden">
              <img src="/images/rick-kruse.jpg" alt="Richard Kruse" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-amber-400 uppercase tracking-wider text-sm">Your Real Estate Tax Strategist</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">Richard Kruse, CPA</h2>
              <p className="text-white/70 mb-4">
                Rick has helped hundreds of real estate investors structure their portfolios for maximum tax efficiency. From single-family landlords to commercial syndicators, he understands the unique opportunities in real estate taxation.
              </p>
              <p className="text-white/70 mb-6">
                His approach: find every legal strategy, document it properly, and help you keep more of your rental income and equity gains.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-white/80">
                  <span className="text-amber-400">✓</span> Cost segregation specialist
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <span className="text-amber-400">✓</span> REPS qualification expert
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <span className="text-amber-400">✓</span> 1031 exchange coordination
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <span className="text-amber-400">✓</span> Entity structuring for RE portfolios
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common <span className="text-amber-400">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How much does a cost segregation study cost?",
                a: "Studies typically range from $3,000-$15,000 depending on property value and complexity. However, the tax savings usually exceed the cost by 10-50x. We can estimate your ROI before you commit."
              },
              {
                q: "Can I qualify for REPS if I have a W2 job?",
                a: "Yes, with proper structuring. If your spouse qualifies, you can file jointly and use the benefits. We also have strategies involving STRs and material participation that can work for W2 employees."
              },
              {
                q: "I already depreciate my properties. Why do I need cost seg?",
                a: "Standard depreciation spreads deductions over 27.5 years. Cost segregation front-loads 60-80% into years 1-5 using bonus depreciation. This acceleration creates massive paper losses now, when they're most valuable."
              },
              {
                q: "Will these strategies trigger an audit?",
                a: "These are all IRS-sanctioned strategies with clear legal precedent. Proper documentation is key. We ensure every strategy is fully supported and audit-defensible."
              },
              {
                q: "Do you work with out-of-state investors?",
                a: "Yes. Real estate tax strategy can be done entirely remotely. We work with investors across the country who own properties in multiple states."
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
      <section id="apply" className="py-24 px-6 bg-gradient-to-b from-amber-600/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Stop Overpaying on Your<br />
            <span className="text-amber-400">Real Estate Taxes</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Get a free portfolio tax analysis. We'll identify exactly which strategies apply to your situation and estimate your potential savings.
          </p>

          <div className="max-w-md mx-auto bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
            <h3 className="text-xl font-bold mb-6">Get Your Free RE Tax Analysis</h3>
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-white/70 text-sm mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Number of Properties</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-500">
                  <option value="" className="bg-gray-900">Select...</option>
                  <option value="1-3" className="bg-gray-900">1-3 properties</option>
                  <option value="4-10" className="bg-gray-900">4-10 properties</option>
                  <option value="11-25" className="bg-gray-900">11-25 properties</option>
                  <option value="25+" className="bg-gray-900">25+ properties</option>
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Estimated Portfolio Value</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-500">
                  <option value="" className="bg-gray-900">Select...</option>
                  <option value="500k-1m" className="bg-gray-900">$500K - $1M</option>
                  <option value="1m-3m" className="bg-gray-900">$1M - $3M</option>
                  <option value="3m-10m" className="bg-gray-900">$3M - $10M</option>
                  <option value="10m+" className="bg-gray-900">$10M+</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-amber-500 text-black font-bold text-lg rounded-lg hover:bg-amber-400 transition-colors"
              >
                Get My Free Analysis →
              </button>
            </form>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/40 text-sm">
            <span>✓ Free Analysis</span>
            <span>✓ No Obligation</span>
            <span>✓ Savings Estimate Included</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">
            © 2024 Kruse & Crawford CPAs | Cincinnati, OH
          </div>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
