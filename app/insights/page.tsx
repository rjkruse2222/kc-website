import Link from 'next/link';

export const metadata = {
  title: 'Insights | Kruse & Crawford CPAs',
  description: 'Tax strategies, accounting best practices, and business insights from Kruse & Crawford CPAs. Stay informed with our latest articles and resources.',
};

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
  slug: 'rd-tax-credits-guide-2025'
};

const articles = [
  {
    title: 'When to Convert to an S-Corporation',
    excerpt: 'The S-Corp election can save significant self-employment taxes, but timing matters. Here is how to know when the switch makes sense.',
    category: 'Tax Strategy',
    date: 'January 5, 2025',
    readTime: '8 min read',
    slug: 's-corporation-conversion'
  },
  {
    title: 'Building a 13-Week Cash Flow Forecast',
    excerpt: 'Stop being surprised by cash crunches. This step-by-step guide shows you how to build and maintain a rolling cash flow forecast.',
    category: 'Accounting',
    date: 'December 28, 2024',
    readTime: '10 min read',
    slug: 'cash-flow-forecast-guide'
  },
  {
    title: 'Cost Segregation: Is It Right for Your Property?',
    excerpt: 'Cost segregation can dramatically accelerate depreciation on commercial real estate. Here is how to evaluate if it makes sense for you.',
    category: 'Tax Strategy',
    date: 'December 20, 2024',
    readTime: '7 min read',
    slug: 'cost-segregation-guide'
  },
  {
    title: 'Year-End Tax Planning Checklist',
    excerpt: 'Do not wait until January to think about taxes. This checklist covers the key moves to make before December 31st.',
    category: 'Tax Strategy',
    date: 'December 15, 2024',
    readTime: '6 min read',
    slug: 'year-end-tax-planning'
  },
  {
    title: 'Understanding Your Financial Statements',
    excerpt: 'Income statement, balance sheet, cash flow statement. What do they mean and how should you use them to make decisions?',
    category: 'Accounting',
    date: 'December 10, 2024',
    readTime: '9 min read',
    slug: 'understanding-financial-statements'
  },
  {
    title: 'Hiring Your First CFO vs. Outsourced CFO Services',
    excerpt: 'When does it make sense to hire a full-time CFO versus using fractional CFO services? Here is how to decide.',
    category: 'Business Advisory',
    date: 'December 5, 2024',
    readTime: '7 min read',
    slug: 'cfo-hiring-decision'
  }
];

export default function InsightsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#003067] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#9bd9e4]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
              Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tax Strategies &
              <span className="block text-[#9bd9e4] mt-2">Business Insights</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Practical knowledge to help you make smarter financial decisions. Updated regularly with the latest strategies and regulatory changes.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  idx === 0
                    ? 'bg-[#003067] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href={`/insights/${featuredArticle.slug}`}
            className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="aspect-video lg:aspect-auto bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">[Featured Image]</span>
              </div>
              <div className="p-8 lg:py-12 lg:pr-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#9bd9e4]/20 text-[#003067] text-sm font-medium rounded-full">
                    {featuredArticle.category}
                  </span>
                  <span className="text-gray-500 text-sm">{featuredArticle.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#003067] mb-4 group-hover:text-[#9bd9e4] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center text-[#003067] font-semibold">
                  Read Article
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#003067] mb-8">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <Link
                key={idx}
                href={`/insights/${article.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">[Article Image]</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#003067] mb-2 group-hover:text-[#9bd9e4] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 text-sm text-gray-400">
                    {article.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex gap-2">
              <button className="px-4 py-2 bg-[#003067] text-white rounded-lg font-medium">1</button>
              <button className="px-4 py-2 bg-white text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">2</button>
              <button className="px-4 py-2 bg-white text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">3</button>
              <span className="px-4 py-2 text-gray-400">...</span>
              <button className="px-4 py-2 bg-white text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
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
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Get tax strategies and insights delivered to your inbox. No spam, just valuable content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-gray-200 rounded-full focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#002050] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#003067]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Put These Strategies to Work?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Reading is great. Taking action is better. Let's talk about your specific situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-colors"
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
