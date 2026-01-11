'use client';

import { useState } from 'react';
import Link from 'next/link';

const painPoints = [
  { icon: '📊', title: 'Flying Blind', description: 'You make decisions without knowing your real numbers. Profitability is a guess, not a certainty.' },
  { icon: '⏰', title: 'Constant Catch-Up', description: 'Your books are always months behind. Tax time is stressful because nothing is organized.' },
  { icon: '💸', title: 'Cash Flow Surprises', description: 'You never know if you can make payroll until the last minute. Cash flow is a mystery.' },
  { icon: '🎯', title: 'No North Star', description: 'You lack KPIs and benchmarks. You have no idea how you compare to industry peers.' },
  { icon: '😰', title: 'Tax Season Panic', description: 'Every year is a scramble to gather documents. You fear what your CPA will find.' },
  { icon: '🔄', title: 'Reactive Mode', description: 'You spend time fixing problems instead of growing your business. The urgent crowds out the important.' }
];

const chapters = [
  { week: '1', title: 'The Foundation Assessment', description: 'Audit your current financial systems, identify gaps, and establish your baseline. Learn the five critical reports every business owner needs.' },
  { week: '2', title: 'Chart of Accounts Mastery', description: 'Structure your chart of accounts for meaningful insights. Learn how proper categorization reveals hidden opportunities.' },
  { week: '3', title: 'Cash Flow Architecture', description: 'Build a 13-week cash flow forecast. Understand the difference between profit and cash, and why both matter.' },
  { week: '4', title: 'Closing Process Design', description: 'Create a monthly close process that delivers accurate numbers within 10 business days. Establish your financial calendar.' },
  { week: '5', title: 'KPI Dashboard Creation', description: 'Identify the 5-7 metrics that actually drive your business. Build dashboards that tell a story at a glance.' },
  { week: '6', title: 'Budgeting That Works', description: 'Create a budget process that takes hours, not weeks. Learn rolling forecasts and variance analysis.' },
  { week: '7', title: 'Tax Integration', description: 'Connect your monthly financials to tax planning. Eliminate surprises and capture deductions year-round.' },
  { week: '8', title: 'Systems & Sustainability', description: 'Document your processes, train your team, and build systems that run without constant oversight.' }
];

const trustSignals = [
  { metric: '20+', label: 'Years Experience' },
  { metric: '500+', label: 'Businesses Helped' },
  { metric: '$50M+', label: 'Client Tax Savings' },
  { metric: '50', label: 'States Served' }
];

const faqs = [
  { question: 'Is this ebook really free?', answer: 'Yes, completely free. We believe in providing value upfront. If the content resonates with you and you want help implementing these strategies, we\'re here. But there\'s no obligation.' },
  { question: 'Who is this ebook for?', answer: 'Business owners with $1M-$50M in revenue who want better financial visibility but don\'t have an in-house CFO. It\'s for entrepreneurs who are tired of flying blind and ready to run their business by the numbers.' },
  { question: 'How long does the 8-week program take to implement?', answer: 'Each week represents 3-5 hours of focused work. You can go faster if you have dedicated time, or spread it out over a longer period. The framework adapts to your pace.' },
  { question: 'Do I need accounting software to use this?', answer: 'Yes, you should have basic accounting software like QuickBooks, Xero, or similar. The ebook focuses on using your existing tools more effectively, not selling you new software.' }
];

export default function FinancialClarityBlueprintPage() {
  const [formData, setFormData] = useState({ name: '', email: '', businessSize: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9bd9e4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#003067]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#003067] text-white text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
                Free Ebook
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#003067] leading-tight mb-6">
                The 8-Week Financial
                <span className="block text-[#9bd9e4]">Clarity Blueprint</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Stop flying blind. Build the financial systems that give you complete visibility into your business in just 8 weeks.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>45 Pages</span>
                <span className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>8-Week Program</span>
                <span className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#9bd9e4]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" /></svg>Templates Included</span>
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold text-[#003067] mb-2">Get Your Free Copy</h3>
                  <p className="text-gray-600 mb-6">Enter your details below for instant access.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Annual Revenue</label>
                      <select
                        required
                        value={formData.businessSize}
                        onChange={(e) => setFormData({ ...formData, businessSize: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent transition-all"
                      >
                        <option value="">Select range...</option>
                        <option value="under-1m">Under $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m-10m">$5M - $10M</option>
                        <option value="10m-25m">$10M - $25M</option>
                        <option value="25m-50m">$25M - $50M</option>
                        <option value="over-50m">Over $50M</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-[#003067] text-white font-bold rounded-lg hover:bg-[#002050] transition-colors"
                    >
                      Download Free Ebook
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#003067] mb-2">Check Your Email!</h3>
                  <p className="text-gray-600 mb-6">Your ebook is on its way. Look for an email from Kruse & Crawford CPAs.</p>
                  <Link href="/contact" className="text-[#003067] font-semibold hover:text-[#9bd9e4] transition-colors">
                    Want to discuss your finances? Let's talk →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Sound Familiar?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">
              Most Business Owners Struggle With These
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              If any of these resonate, this ebook was written for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="font-bold text-[#003067] mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">What's Inside</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4 mb-6">
              8 Weeks to Financial Clarity
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each week builds on the last, giving you a complete financial foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chapters.map((chapter, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#003067] text-white flex items-center justify-center font-bold mb-4">
                  {chapter.week}
                </div>
                <h3 className="font-bold text-[#003067] mb-2">{chapter.title}</h3>
                <p className="text-gray-600 text-sm">{chapter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-24 md:py-32 bg-[#003067]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">About the Author</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Richard Kruse, CPA
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Richard is the Managing Partner of Kruse & Crawford CPAs, a national firm helping small to mid-market businesses achieve financial clarity. With over 20 years of experience, he has helped hundreds of business owners transform their relationship with their finances.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                This ebook distills the systems and frameworks he has developed working with businesses across industries, from manufacturing to technology to professional services.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustSignals.map((signal, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-bold text-[#9bd9e4]">{signal.metric}</div>
                    <div className="text-white/60 text-sm">{signal.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-500">[Richard Kruse Photo]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mt-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#003067] pr-8">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#9bd9e4] flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">
            Ready for Financial Clarity?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Download the free ebook and start building the financial systems your business deserves.
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center px-10 py-5 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-colors"
          >
            Get Your Free Copy
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
