'use client';

import { useState } from 'react';

interface NewsletterSectionProps {
  variant?: 'light' | 'dark' | 'photo';
  heading?: string;
  subheading?: string;
  backgroundImage?: string;
}

export default function NewsletterSection({
  variant = 'light',
  heading = 'Stay Ahead of the Curve',
  subheading = 'Get industry-specific insights, tax updates, and strategic tips delivered straight to your inbox.',
  backgroundImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setSubscribed(true);
    setIsSubmitting(false);
  };

  if (variant === 'photo') {
    return (
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003067]/90" />
        </div>

        <div className="relative max-w-3xl mx-auto px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border border-white/20">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-white/70 mb-10 max-w-lg mx-auto">
            {subheading}
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-3 text-white font-semibold py-4">
              <svg className="w-6 h-6 text-[#9bd9e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-[#9bd9e4] focus:ring-2 focus:ring-[#9bd9e4]/20 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-[#003067] font-semibold rounded-full hover:bg-[#9bd9e4] transition-all duration-300 whitespace-nowrap disabled:opacity-70"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </section>
    );
  }

  if (variant === 'dark') {
    return (
      <section className="py-24 md:py-32 bg-[#003067]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#9bd9e4]/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#9bd9e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-white/70 mb-10 max-w-lg mx-auto">
            {subheading}
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-3 text-white font-semibold py-4">
              <svg className="w-6 h-6 text-[#9bd9e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#9bd9e4] focus:ring-2 focus:ring-[#9bd9e4]/20 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-[#9bd9e4] text-[#003067] font-semibold rounded-full hover:bg-white transition-all duration-300 whitespace-nowrap disabled:opacity-70"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </section>
    );
  }

  // Light variant (default)
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl">
          <div className="w-20 h-20 rounded-full bg-[#003067] flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            {subheading}
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-3 text-emerald-600 font-semibold py-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:border-[#9bd9e4] focus:ring-2 focus:ring-[#9bd9e4]/20 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#9bd9e4] hover:text-[#003067] transition-all duration-300 whitespace-nowrap disabled:opacity-70"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
