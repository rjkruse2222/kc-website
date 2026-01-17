'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Tax Strategy', slug: 'tax-strategy' },
  { name: 'Accounting', slug: 'accounting' },
  { name: 'Business Advisory', slug: 'business-advisory' },
  { name: 'Industry News', slug: 'industry-news' }
];

const featuredArticle = {
  title: 'The Complete Guide to R&D Tax Credits in 2025',
  excerpt: 'Many businesses miss out on R&D tax credits because they assume their work does not qualify. This comprehensive guide breaks down who qualifies, how to document activities, and how much you can save.',
  category: 'Tax Strategy',
  date: 'January 8, 2025',
  readTime: '12 min read',
  slug: 'rd-tax-credits-guide-2025',
  color: 'from-violet-500 to-purple-600',
  image: '/images/blog-rd-tax-credits.jpg'
};

const articles = [
  {
    title: 'When to Convert to an S-Corporation',
    excerpt: 'The S-Corp election can save significant self-employment taxes, but timing matters. Here is how to know when the switch makes sense.',
    category: 'Tax Strategy',
    date: 'January 5, 2025',
    readTime: '8 min read',
    slug: 's-corporation-conversion',
    color: 'from-blue-500 to-blue-600',
    image: '/images/blog-s-corp-conversion.jpg'
  },
  {
    title: 'Building a 13-Week Cash Flow Forecast',
    excerpt: 'Stop being surprised by cash crunches. This step-by-step guide shows you how to build and maintain a rolling cash flow forecast.',
    category: 'Accounting',
    date: 'December 28, 2024',
    readTime: '10 min read',
    slug: 'cash-flow-forecast-guide',
    color: 'from-emerald-500 to-teal-600',
    image: '/images/blog-cash-flow-forecast.jpg'
  },
  {
    title: 'Cost Segregation: Is It Right for Your Property?',
    excerpt: 'Cost segregation can dramatically accelerate depreciation on commercial real estate. Here is how to evaluate if it makes sense for you.',
    category: 'Tax Strategy',
    date: 'December 20, 2024',
    readTime: '7 min read',
    slug: 'cost-segregation-guide',
    color: 'from-amber-500 to-orange-600',
    image: '/images/blog-cost-segregation.jpg'
  },
  {
    title: 'Year-End Tax Planning Checklist',
    excerpt: 'Do not wait until January to think about taxes. This checklist covers the key moves to make before December 31st.',
    category: 'Tax Strategy',
    date: 'December 15, 2024',
    readTime: '6 min read',
    slug: 'year-end-tax-planning',
    color: 'from-rose-500 to-pink-600',
    image: '/images/blog-year-end-tax.jpg'
  },
  {
    title: 'Understanding Your Financial Statements',
    excerpt: 'Income statement, balance sheet, cash flow statement. What do they mean and how should you use them to make decisions?',
    category: 'Accounting',
    date: 'December 10, 2024',
    readTime: '9 min read',
    slug: 'understanding-financial-statements',
    color: 'from-cyan-500 to-blue-600',
    image: '/images/blog-financial-statements.jpg'
  },
  {
    title: 'Hiring Your First CFO vs. Outsourced CFO Services',
    excerpt: 'When does it make sense to hire a full-time CFO versus using fractional CFO services? Here is how to decide.',
    category: 'Business Advisory',
    date: 'December 5, 2024',
    readTime: '7 min read',
    slug: 'cfo-hiring-decision',
    color: 'from-indigo-500 to-violet-600',
    image: '/images/blog-cfo-decision.jpg'
  }
];

const categoryColors: Record<string, string> = {
  'Tax Strategy': 'bg-violet-100 text-violet-700',
  'Accounting': 'bg-emerald-100 text-emerald-700',
  'Business Advisory': 'bg-amber-100 text-amber-700',
  'Industry News': 'bg-blue-100 text-blue-700'
};

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <main className="bg-[#fafafa]">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float 5s ease-in-out infinite; animation-delay: -2.5s; }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#003067] via-[#003067] to-[#002050] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-[#9bd9e4]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-[#9bd9e4]/10 rounded-full blur-3xl animate-float-delayed" />

          {/* Decorative elements */}
          <div className="absolute top-[20%] right-[12%] w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 animate-float">
            <svg className="w-8 h-8 text-[#9bd9e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="absolute bottom-[30%] right-[25%] w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 animate-float-slow">
            <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 rounded-full mb-8 border border-white/20">
              <div className="w-2.5 h-2.5 bg-[#9bd9e4] rounded-full animate-pulse" />
              <span className="text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase">Insights & Resources</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Tax Strategies &
              <span className="block text-[#9bd9e4] mt-2">Business Insights</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Practical knowledge to help you make smarter financial decisions. Updated regularly with the latest strategies and regulatory changes.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.slug
                    ? 'bg-[#003067] text-white shadow-lg shadow-[#003067]/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1.5 h-8 bg-gradient-to-b from-[#9bd9e4] to-[#003067] rounded-full" />
            <h2 className="text-2xl font-bold text-[#003067]">Featured Article</h2>
          </div>

          <Link
            href={`/insights/${featuredArticle.slug}`}
            className="group block relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredArticle.color} opacity-20`} />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1.5 text-sm font-semibold rounded-full ${categoryColors[featuredArticle.category]}`}>
                    {featuredArticle.category}
                  </span>
                  <span className="text-gray-400 text-sm">{featuredArticle.date}</span>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003067] mb-4 group-hover:text-[#9bd9e4] transition-colors duration-300">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[#003067] font-bold group-hover:text-[#9bd9e4] transition-colors">
                  Read Full Article
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1.5 h-8 bg-gradient-to-b from-[#9bd9e4] to-[#003067] rounded-full" />
            <h2 className="text-2xl font-bold text-[#003067]">Latest Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <Link
                key={idx}
                href={`/insights/${article.slug}`}
                className="group relative bg-[#fafafa] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-20`} />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white/80 text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#003067] mb-3 group-hover:text-[#9bd9e4] transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-400">{article.date}</span>
                    <span className="text-[#003067] font-semibold text-sm flex items-center gap-1 group-hover:text-[#9bd9e4] transition-colors">
                      Read
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full bg-[#003067] text-white font-semibold shadow-lg shadow-[#003067]/25">1</button>
              <button className="w-10 h-10 rounded-full bg-white text-gray-600 font-semibold hover:bg-gray-100 transition-colors border border-gray-200">2</button>
              <button className="w-10 h-10 rounded-full bg-white text-gray-600 font-semibold hover:bg-gray-100 transition-colors border border-gray-200">3</button>
              <span className="px-2 text-gray-400">...</span>
              <button className="w-10 h-10 rounded-full bg-white text-gray-600 hover:bg-gray-100 transition-colors border border-gray-200 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative bg-gradient-to-br from-[#003067] to-[#002050] rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9bd9e4]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9bd9e4]/10 rounded-full blur-2xl" />

            <div className="relative text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                <svg className="w-8 h-8 text-[#9bd9e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Informed
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-lg mx-auto">
                Get tax strategies and insights delivered to your inbox. No spam, just valuable content.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent transition-all backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#9bd9e4] text-[#003067] font-bold rounded-xl hover:bg-white transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-sm text-white/50 mt-6">
                Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative bg-gradient-to-br from-[#9bd9e4]/20 to-white rounded-3xl p-12 md:p-16 text-center border border-[#9bd9e4]/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#9bd9e4]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#003067]/10 rounded-full blur-2xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">
                Ready to Put These Strategies to Work?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto">
                Reading is great. Taking action is better. Let's talk about your specific situation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-all duration-300 hover:shadow-xl"
              >
                Schedule a Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
