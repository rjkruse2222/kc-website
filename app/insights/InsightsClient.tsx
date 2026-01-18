'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/articles';

interface InsightsClientProps {
  articles: Article[];
  categoryColors: Record<string, string>;
}

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Tax Strategy', slug: 'tax-strategy' },
  { name: 'Accounting', slug: 'accounting' },
  { name: 'Business Advisory', slug: 'business-advisory' }
];

// Ebooks data
const ebooks = [
  {
    title: 'The 8-Week Financial Clarity Blueprint',
    description: 'A step-by-step guide to transforming your financial operations and gaining complete visibility into your business performance.',
    category: 'Accounting & Strategy',
    image: '/images/8-Week Financial Cover.jpg',
    downloadUrl: '#', // Replace with actual download link
    color: 'from-[#003067] to-[#004a8f]'
  },
  {
    title: 'Tax Saving Secrets of the 1%',
    description: 'Discover the legitimate tax strategies that high-net-worth individuals and successful business owners use to minimize their tax burden.',
    category: 'Tax Strategy',
    image: '/images/Tax Savings Secrets Cover.jpg',
    downloadUrl: '#', // Replace with actual download link
    color: 'from-emerald-600 to-teal-700'
  }
];

const ARTICLES_PER_PAGE = 6;

export default function InsightsClient({ articles, categoryColors }: InsightsClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter articles by category
  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter(article =>
        article.category.toLowerCase().replace(/\s+/g, '-').includes(activeCategory) ||
        article.category.toLowerCase() === activeCategory.replace(/-/g, ' ')
      );

  // Get featured article (always the most recent)
  const featuredArticle = filteredArticles.length > 0 ? filteredArticles[0] : null;

  // Get remaining articles (excluding featured)
  const remainingArticles = featuredArticle
    ? filteredArticles.filter(a => a.slug !== featuredArticle.slug)
    : [];

  // Calculate pagination
  const totalPages = Math.ceil(remainingArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = remainingArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  // Reset to page 1 when category changes
  const handleCategoryChange = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    setCurrentPage(1);
  };

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (!featuredArticle) {
    return (
      <main className="bg-[#fafafa] min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">No articles found.</p>
      </main>
    );
  }

  return (
    <main className="bg-[#fafafa]">
      <style jsx>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-kenburns {
          animation: kenburns 20s ease-out forwards;
        }
      `}</style>

      {/* Hero Section with Ken Burns */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image with Ken Burns */}
        <div className="absolute inset-0">
          <Image
            src="/images/tax-strategy-hero.jpg"
            alt="Insights and Resources"
            fill
            className="object-cover animate-kenburns"
            priority
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003067]/95 via-[#003067]/80 to-[#003067]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003067]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 rounded-full mb-8 border border-white/20 backdrop-blur-sm">
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
                onClick={() => handleCategoryChange(category.slug)}
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
                  <span className={`px-3 py-1.5 text-sm font-semibold rounded-full ${categoryColors[featuredArticle.category] || 'bg-gray-100 text-gray-700'}`}>
                    {featuredArticle.category}
                  </span>
                  <span className="text-gray-400 text-sm">{formatDate(featuredArticle.date)}</span>
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

          {paginatedArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedArticles.map((article) => (
                <Link
                  key={article.slug}
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
                      <span className="text-sm text-gray-400">{formatDate(article.date)}</span>
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
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors border ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all ${
                      currentPage === page
                        ? 'bg-[#003067] text-white shadow-lg shadow-[#003067]/25'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors border ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Ebooks Section */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#9bd9e4]/20 rounded-full mb-6 border border-[#9bd9e4]/30">
              <svg className="w-5 h-5 text-[#003067]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-[#003067] text-sm font-semibold tracking-wider uppercase">Free Resources</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003067] mb-6">
              Download Our Ebooks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In-depth guides to help you take control of your finances and maximize your tax savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ebooks.map((ebook, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Ebook Cover Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={ebook.image}
                    alt={ebook.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 bg-gradient-to-r ${ebook.color} text-white text-xs font-semibold rounded-full shadow-lg`}>
                      {ebook.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#003067] mb-4 group-hover:text-[#9bd9e4] transition-colors">
                    {ebook.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {ebook.description}
                  </p>
                  <a
                    href={ebook.downloadUrl}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#9bd9e4] hover:text-[#003067] transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Free Ebook
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 bg-white">
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
      <section className="py-24 md:py-32 bg-[#fafafa]">
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
