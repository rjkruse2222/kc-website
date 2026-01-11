'use client';

import { useState } from 'react';
import Link from 'next/link';

const teasers = [
  { title: 'The Entity Election', description: 'Why one simple election can save you $20,000+ in self-employment taxes every year.' },
  { title: 'The Retirement Loophole', description: 'How to legally shelter $200,000+ per year while slashing your current tax bill.' },
  { title: 'The Real Estate Strategy', description: 'Turn your W-2 income into tax-free growth using a strategy most CPAs have never heard of.' },
  { title: 'The Timing Secret', description: 'Shift income across years to stay in lower brackets without changing anything about your business.' },
  { title: 'The Credit Stack', description: 'Layer R&D credits, hiring credits, and energy credits to potentially eliminate your tax bill.' },
  { title: 'The Exit Plan', description: 'Structure now to pay zero capital gains when you sell your business, even on millions in proceeds.' }
];

const chapters = [
  { number: '01', title: 'The Tax Code Is Not Your Enemy', description: 'How the wealthy use the tax code exactly as intended, and why you should too.' },
  { number: '02', title: 'Entity Structuring Secrets', description: 'S-Corps, C-Corps, and the hybrid structures that minimize taxes across multiple brackets.' },
  { number: '03', title: 'The Retirement Arbitrage', description: 'Defined benefit plans, cash balance plans, and contribution strategies that shelter massive income.' },
  { number: '04', title: 'Real Estate as a Tax Shelter', description: 'Cost segregation, REPS status, and opportunity zones explained in plain English.' },
  { number: '05', title: 'Credit Stacking Strategies', description: 'R&D, WOTC, energy, and state credits that most businesses miss entirely.' },
  { number: '06', title: 'Income Timing Mastery', description: 'Defer, accelerate, and shift income across years for optimal lifetime tax efficiency.' },
  { number: '07', title: 'The QSBS Exit Strategy', description: 'Structure for a tax-free exit using Qualified Small Business Stock exclusions.' },
  { number: '08', title: 'Building Your Tax Team', description: 'How to find and work with advisors who proactively save you money.' }
];

const whoItsFor = [
  'Business owners earning $500K+ annually',
  'Executives with significant equity compensation',
  'Real estate investors seeking passive loss strategies',
  'High-income professionals (doctors, lawyers, consultants)',
  'Entrepreneurs planning an exit in the next 5 years',
  'Anyone tired of paying more than their fair share'
];

const faqs = [
  { question: 'Are these strategies legal?', answer: 'Absolutely. Every strategy in this ebook is 100% legal and sanctioned by the IRS tax code. These are not loopholes—they are intentional provisions designed to encourage certain behaviors. We simply help you take advantage of what the law already allows.' },
  { question: 'Why would you give this away for free?', answer: 'Because implementing these strategies requires professional guidance. We\'re confident that once you see what\'s possible, you\'ll want our help making it happen. Consider this ebook a demonstration of the value we provide.' },
  { question: 'My CPA says I\'m already doing everything possible.', answer: 'With respect to your CPA, most tax preparers focus on compliance—filing accurate returns. Tax strategy is different. It requires proactive planning, understanding of complex code sections, and the willingness to implement aggressive (but legal) positions. Few CPAs do this work.' },
  { question: 'Do I need to change my CPA to use these strategies?', answer: 'Not necessarily. Some clients use us for strategic planning while their existing CPA handles compliance. Others prefer one firm handling everything. We\'re flexible.' }
];

export default function TaxSavingSecretsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', income: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#003067]/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 text-sm font-bold tracking-wider uppercase rounded-full mb-6 animate-pulse">
                Free Download
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Tax Saving Secrets
                <span className="block text-yellow-400">of the 1%</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                The strategies wealthy business owners use to legally minimize their tax burden. No gimmicks. No gray areas. Just the playbook the 1% have been using for decades.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                <span className="flex items-center"><svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>52 Pages</span>
                <span className="flex items-center"><svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" /></svg>Real Dollar Savings</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-gray-400 text-sm">
                  <span className="text-white font-semibold">Warning:</span> This content may frustrate you when you realize how much you've been overpaying.
                </p>
              </div>
            </div>

            {/* Lead Form - Dark Theme */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold text-white mb-2">Get Instant Access</h3>
                  <p className="text-gray-400 mb-6">Enter your details for immediate download.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Annual Income</label>
                      <select
                        required
                        value={formData.income}
                        onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      >
                        <option value="" className="bg-gray-900">Select range...</option>
                        <option value="250k-500k" className="bg-gray-900">$250K - $500K</option>
                        <option value="500k-1m" className="bg-gray-900">$500K - $1M</option>
                        <option value="1m-2m" className="bg-gray-900">$1M - $2M</option>
                        <option value="2m-5m" className="bg-gray-900">$2M - $5M</option>
                        <option value="over-5m" className="bg-gray-900">Over $5M</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors"
                    >
                      Download Free Ebook
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      No spam. No selling your data. Just valuable content.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Check Your Inbox!</h3>
                  <p className="text-gray-400 mb-6">Your ebook is on its way. Start reading in the next 2 minutes.</p>
                  <Link href="/contact" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                    Ready to implement? Let's talk →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Section */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase">Inside the Ebook</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              What the Wealthy Know<br />(That You Don't... Yet)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teasers.map((teaser, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-400/50 transition-colors">
                <h3 className="font-bold text-white mb-2">{teaser.title}</h3>
                <p className="text-gray-400 text-sm">{teaser.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase">Chapter Breakdown</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              8 Chapters. Unlimited Savings.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chapters.map((chapter, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="text-yellow-400 font-bold text-sm mb-2">{chapter.number}</div>
                <h3 className="font-bold text-white mb-2">{chapter.title}</h3>
                <p className="text-gray-400 text-sm">{chapter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase">Is This For You?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                This Ebook Is For High Achievers
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                These strategies require a certain income level to implement effectively. If you're not quite there yet, bookmark this page for later. If you are, this could be the most valuable thing you read this year.
              </p>
              <ul className="space-y-4">
                {whoItsFor.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#003067] to-[#001a3d] rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">$50M+</div>
                <div className="text-white/60 mb-8">Saved for Clients</div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#9bd9e4]">20+</div>
                    <div className="text-white/60 text-sm">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#9bd9e4]">500+</div>
                    <div className="text-white/60 text-sm">Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#9bd9e4]">50</div>
                    <div className="text-white/60 text-sm">States</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-24 md:py-32 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="aspect-square bg-gray-800 rounded-xl flex items-center justify-center">
                <span className="text-gray-500">[Richard Kruse Photo]</span>
              </div>
            </div>
            <div>
              <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase">About the Author</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Richard Kruse, CPA
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Richard isn't your typical CPA. While most accountants focus on compliance and filing returns, Richard has spent 20+ years obsessing over one thing: how to legally minimize his clients' tax burden.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                As Managing Partner of Kruse & Crawford CPAs, he has personally helped hundreds of business owners and high-income individuals keep more of what they earn. The strategies in this ebook come directly from his client playbook.
              </p>
              <p className="text-white font-semibold">
                "The tax code is not the enemy. Ignorance of the tax code is."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Questions? Answered.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white pr-8">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-yellow-400 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-t from-[#003067]/20 to-transparent">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Overpaying. Start Today.
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Every day you wait is another day you're paying more than you should.
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center px-10 py-5 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-colors"
          >
            Get Your Free Copy Now
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
