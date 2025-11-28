'use client';

import { useState, useEffect } from 'react';

// VSL3 - Business Owners
// Target: S-corp owners, LLCs, entrepreneurs doing $500K-$10M revenue

export default function VSL3() {
  const [showCTA, setShowCTA] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowCTA(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  const strategies = [
    {
      title: "S-Corp Election & Salary Optimization",
      problem: "Paying self-employment tax on ALL your profits?",
      solution: "Proper S-corp structuring with optimized reasonable salary can save $15,000-$50,000+ in SE taxes alone.",
      savings: "$15K-$50K/year"
    },
    {
      title: "Retirement Plan Stacking",
      problem: "Maxing out your 401(k) at $23K?",
      solution: "Cash balance plans, defined benefit plans, and profit sharing can shelter $100K-$300K+ annually.",
      savings: "$100K-$300K sheltered"
    },
    {
      title: "Augusta Rule (Home Rental)",
      problem: "Paying for meeting space?",
      solution: "Rent your home to your business for up to 14 days tax-free. Take meetings at home, pay yourself tax-free rent.",
      savings: "$5K-$20K tax-free"
    },
    {
      title: "Accountable Plan Reimbursements",
      problem: "Paying business expenses personally?",
      solution: "Properly structured accountable plans let you reimburse yourself tax-free for home office, vehicle, travel, and more.",
      savings: "$10K-$30K/year"
    },
    {
      title: "Hiring Family Members",
      problem: "Kids not contributing to the business?",
      solution: "Legitimate employment of children and spouse can shift income to lower brackets and create deductions.",
      savings: "$5K-$15K/year"
    },
    {
      title: "R&D Tax Credits",
      problem: "Think R&D credits are only for labs?",
      solution: "Software, product development, process improvements often qualify. Credits offset taxes dollar-for-dollar.",
      savings: "$25K-$250K+ credits"
    }
  ];

  const comparisonData = [
    { metric: "Net Profit", before: "$400,000", after: "$400,000" },
    { metric: "Self-Employment Tax", before: "$30,600", after: "$15,300" },
    { metric: "Retirement Deduction", before: "$23,000", after: "$150,000" },
    { metric: "Home Office/Vehicle", before: "$2,000", after: "$18,000" },
    { metric: "Augusta Rule", before: "$0", after: "$15,000" },
    { metric: "Total Taxable Income", before: "$375,000", after: "$217,000" },
    { metric: "Federal Tax", before: "$98,000", after: "$42,000" },
    { metric: "ANNUAL SAVINGS", before: "", after: "$56,000+" }
  ];

  const industries = [
    "Consultants & Coaches",
    "Marketing Agencies",
    "IT & Software",
    "Medical Practices",
    "Law Firms",
    "Construction & Trades",
    "E-commerce",
    "Manufacturing",
    "Professional Services",
    "Restaurants & Food Service"
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Floating CTA */}
      {showCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#003067] py-4 px-6 z-50 shadow-2xl">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <p className="font-bold">Business owners: Stop overpaying on taxes</p>
              <p className="text-white/70 text-sm">See your custom savings estimate</p>
            </div>
            <a
              href="#apply"
              className="px-8 py-3 bg-[#9bd9e4] text-[#003067] font-bold rounded-lg hover:bg-white transition-colors whitespace-nowrap"
            >
              Get Your Free Analysis
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative bg-[#003067] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-[#9bd9e4] text-[#003067] text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              For Business Owners Making $200K+ Profit
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              How Business Owners Are<br />
              <span className="text-[#9bd9e4]">Legally Cutting Their Tax Bill</span><br />
              by 40-60%
            </h1>

            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Your CPA files your taxes. But do they <em>strategize</em> them? Most business owners overpay by $30,000-$100,000+ every year because their CPA doesn't plan ahead.
            </p>
          </div>

          {/* Video */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                <div className="w-20 h-20 bg-[#9bd9e4] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-[#003067] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/70 mt-4">Watch: 6 Tax Strategies Every Business Owner Needs</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#9bd9e4] text-[#003067] text-lg font-bold rounded-lg hover:bg-white transition-colors"
            >
              Get Your Free Tax Analysis →
            </a>
            <p className="text-white/50 text-sm mt-4">Takes 2 minutes | No obligation</p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-6">Industries We Serve</p>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => (
              <span key={i} className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Are You Making These<br />
            <span className="text-red-600">Expensive Tax Mistakes?</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Most business owners are. And it's costing them tens of thousands every year.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Operating as a sole prop or LLC taxed as a partnership when an S-corp would save you $15K-$50K/year",
              "Maxing out your 401(k) at $23K when you could shelter $100K-$300K in a cash balance plan",
              "Paying for business expenses personally instead of through tax-advantaged reimbursement plans",
              "Missing the Augusta Rule — renting your home to your business for up to 14 days TAX-FREE",
              "Not hiring your kids or spouse when legitimate employment could save thousands",
              "Thinking R&D credits are only for 'science labs' when your software/product development likely qualifies"
            ].map((mistake, i) => (
              <div key={i} className="flex gap-4 p-5 bg-red-50 rounded-xl border border-red-100">
                <span className="text-red-500 text-2xl flex-shrink-0">✗</span>
                <p className="text-gray-700">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Same Business. <span className="text-[#003067]">Different Strategy.</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            See how strategic tax planning transforms a $400K profit business
          </p>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-100">
              <div className="p-4 text-gray-500 font-medium"></div>
              <div className="p-4 text-center bg-red-50 border-b-4 border-red-500">
                <span className="font-bold text-red-700">Without Strategy</span>
              </div>
              <div className="p-4 text-center bg-green-50 border-b-4 border-green-500">
                <span className="font-bold text-green-700">With K&C Strategy</span>
              </div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-t ${i === comparisonData.length - 1 ? 'bg-[#003067] text-white' : ''}`}>
                <div className={`p-4 font-medium ${i === comparisonData.length - 1 ? 'text-white' : 'text-gray-700'}`}>
                  {row.metric}
                </div>
                <div className={`p-4 text-center ${i === comparisonData.length - 1 ? 'text-white/50' : 'text-red-600'}`}>
                  {row.before}
                </div>
                <div className={`p-4 text-center font-bold ${i === comparisonData.length - 1 ? 'text-[#9bd9e4] text-2xl' : 'text-green-600'}`}>
                  {row.after}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            *Example based on typical client. Your results will vary based on your specific situation.
          </p>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            6 Strategies That Could Save You<br />
            <span className="text-[#003067]">$50,000+ This Year</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Click each strategy to learn how it works
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {strategies.map((s, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                  activeTab === i
                    ? 'bg-[#003067] text-white border-[#003067]'
                    : 'bg-white border-gray-200 hover:border-[#9bd9e4]'
                }`}
                onClick={() => setActiveTab(i)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl font-bold ${activeTab === i ? 'text-white' : 'text-gray-900'}`}>
                    {s.title}
                  </h3>
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                    activeTab === i ? 'bg-[#9bd9e4] text-[#003067]' : 'bg-[#9bd9e4]/20 text-[#003067]'
                  }`}>
                    {s.savings}
                  </span>
                </div>
                <p className={`text-sm mb-3 ${activeTab === i ? 'text-red-300' : 'text-red-600'}`}>
                  {s.problem}
                </p>
                <p className={activeTab === i ? 'text-white/80' : 'text-gray-600'}>
                  {s.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Business Owners <span className="text-[#003067]">Like You</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I was paying self-employment tax on everything. The S-corp restructuring alone saved me $35,000 in year one.",
                name: "Mike R.",
                business: "Marketing Agency Owner",
                savings: "$47,000/year"
              },
              {
                quote: "I had no idea I could shelter $200K in a cash balance plan. That's $70K in tax savings this year.",
                name: "Dr. Lisa T.",
                business: "Dental Practice Owner",
                savings: "$72,000/year"
              },
              {
                quote: "The Augusta Rule and hiring my kids has been a game-changer. Plus the R&D credits I didn't know I qualified for.",
                name: "James K.",
                business: "Software Company Founder",
                savings: "$63,000/year"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.business}</p>
                  <p className="text-[#003067] font-bold mt-2">{t.savings} saved</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How We Work With <span className="text-[#003067]">Business Owners</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Free Tax Analysis",
                description: "We review your current situation and identify the biggest opportunities. You'll get a clear picture of potential savings."
              },
              {
                step: "2",
                title: "Custom Strategy Plan",
                description: "We build a written plan with specific strategies, estimated savings, and implementation steps tailored to your business."
              },
              {
                step: "3",
                title: "Implementation",
                description: "We handle the paperwork, entity restructuring, plan setups, and documentation. You focus on running your business."
              },
              {
                step: "4",
                title: "Quarterly Optimization",
                description: "Tax planning isn't a once-a-year event. We meet quarterly to capture new opportunities and adjust strategies."
              }
            ].map((s, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 bg-[#003067] rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Rick */}
      <section className="py-20 px-6 bg-[#003067] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gray-700 rounded-2xl overflow-hidden">
              <img src="/images/rick-kruse.jpg" alt="Richard Kruse" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-[#9bd9e4] uppercase tracking-wider text-sm">Your Tax Strategist</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Richard Kruse, CPA</h2>
              <p className="text-white/80 mb-4">
                For over 20 years, Rick has helped business owners structure their companies for maximum tax efficiency. He's not your typical CPA.
              </p>
              <p className="text-white/80 mb-6">
                While most accountants file what happened, Rick plans what SHOULD happen. His proactive approach has saved clients over $50M in taxes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[#9bd9e4]">✓</span>
                  S-corp & entity structuring specialist
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#9bd9e4]">✓</span>
                  Advanced retirement plan strategies
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#9bd9e4]">✓</span>
                  R&D tax credit expert
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
            Frequently Asked <span className="text-[#003067]">Questions</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What if I already have a CPA?",
                a: "Most CPAs focus on compliance (filing returns), not strategy. We can work alongside your existing CPA, handling the proactive tax planning they don't do. Many clients keep their current CPA for preparation while we handle strategy."
              },
              {
                q: "How much do I need to be making for this to work?",
                a: "Our strategies work best for business owners with $200K+ in net profit. Below this threshold, simpler strategies often suffice. However, we evaluate each situation individually."
              },
              {
                q: "Is the S-corp election really worth it?",
                a: "For most profitable businesses, yes. The SE tax savings typically range from $15K-$50K+ annually. We'll calculate your specific savings before recommending any changes."
              },
              {
                q: "How much does this cost?",
                a: "Our comprehensive strategy and implementation typically ranges from $5,000-$25,000 depending on complexity. We guarantee our strategies save you more than you invest, or we refund the difference."
              },
              {
                q: "When should I start planning?",
                a: "The best time was January 1st. The second best time is now. Tax planning is most effective when done proactively, not reactively in December or April."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="py-24 px-6 bg-[#003067]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            How Much Are You<br />
            <span className="text-[#9bd9e4]">Overpaying in Taxes?</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Get a free analysis of your business tax situation. We'll identify your biggest savings opportunities — no obligation.
          </p>

          <div className="max-w-md mx-auto bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Get Your Free Business Tax Analysis</h3>
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-gray-700 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#003067]"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#003067]"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Business Type</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#003067]">
                  <option value="">Select...</option>
                  <option value="sole-prop">Sole Proprietorship</option>
                  <option value="llc">LLC (Single or Multi-Member)</option>
                  <option value="s-corp">S-Corporation</option>
                  <option value="c-corp">C-Corporation</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Estimated Annual Profit</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#003067]">
                  <option value="">Select...</option>
                  <option value="200-500k">$200K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-3m">$1M - $3M</option>
                  <option value="3m+">$3M+</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#003067] text-white font-bold text-lg rounded-lg hover:bg-[#004a8f] transition-colors"
              >
                Get My Free Analysis →
              </button>
            </form>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
            <span>✓ Free Analysis</span>
            <span>✓ No Obligation</span>
            <span>✓ Results Guaranteed</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>© 2024 Kruse & Crawford CPAs | Cincinnati, OH</div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
