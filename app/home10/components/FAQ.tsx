'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How is Kruse & Crawford different from traditional CPA firms?',
      answer: 'We focus on year-round strategic partnerships, not just once-a-year tax filing. Our approach combines proactive tax planning, AI-driven analytics, and continuous communication to help you build wealth, not just stay compliant.'
    },
    {
      question: 'What size companies do you work with?',
      answer: 'We specialize in small to lower middle market companies with annual revenues between $1M-$50M. This focus allows us to provide personalized attention while offering sophisticated services typically reserved for larger enterprises.'
    },
    {
      question: 'Do I need to be located in Cincinnati?',
      answer: 'While we are headquartered in historic Longworth Hall in Cincinnati and primarily serve the Greater Cincinnati and Ohio area, our cloud-based systems allow us to work with clients throughout Ohio and neighboring states.'
    },
    {
      question: 'How do your pricing and engagement work?',
      answer: 'We offer flexible engagement models based on your needs—from full outsourced accounting and CFO services to strategic tax planning only. We provide transparent pricing after an initial consultation to understand your specific requirements. Most clients find our year-round partnership model more cost-effective than hiring full-time staff.'
    },
    {
      question: 'What technology do you use?',
      answer: 'We leverage best-in-class cloud accounting platforms, AI-driven analytics tools, and secure client portals to provide real-time visibility into your finances. Our technology stack is designed for efficiency, accuracy, and accessibility—you can access your data anytime, anywhere.'
    },
    {
      question: 'How quickly can we get started?',
      answer: 'After an initial discovery call (typically 30-45 minutes), we can have you onboarded within 1-2 weeks depending on the complexity of your situation. Our streamlined onboarding process is designed to minimize disruption to your business.'
    },
    {
      question: 'Do you handle both accounting and tax services?',
      answer: 'Yes! Our two core services—Outsourced Accounting & CFO and Strategic Tax Planning—work together to give you a complete financial picture. Many clients find that having both services integrated provides the most value and ensures nothing falls through the cracks.'
    },
    {
      question: 'What is your typical response time?',
      answer: 'We pride ourselves on responsive communication. Most client inquiries receive a response within 48 hours, and urgent matters are addressed same-day. Unlike traditional firms that disappear after tax season, we are here year-round as your trusted advisors.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#003067] uppercase tracking-[3px] text-xs font-semibold rounded-full">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-[#003067] leading-tight mb-4">
            Have Questions?<br />
            <span className="font-semibold">We Have Answers</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#9bd9e4] transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-[#003067] pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#003067] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-[#666] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#666] mb-6">Still have questions? We'd love to chat.</p>
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#003067] text-white font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-[#9bd9e4] hover:text-[#003067] transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
