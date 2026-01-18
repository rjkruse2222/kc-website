import { getRecentArticles, getFeaturedArticle } from '../data/articles';

export default function Insights() {
  // Get the 3 most recent articles (featured + 2 more recent)
  const featured = getFeaturedArticle();
  const recentArticles = getRecentArticles(2);

  // Combine featured with recent for display
  const articles = [featured, ...recentArticles];

  return (
    <section
      className="insights-section py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="mb-6 text-center">
          <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#003067] uppercase tracking-[3px] text-xs font-semibold rounded-full">
            What We Think
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 id="insights-heading" className="text-3xl md:text-5xl font-light text-[#003067] leading-tight mb-4">
            Expert Opinions on<br />
            <span className="font-semibold">Business &amp; Tax Topics</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Stay informed with our latest insights and guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          {/* Left: Decorative Graphic - hidden from screen readers */}
          <div className="lg:col-span-1 flex justify-center" aria-hidden="true">
            <img
              src="/images/magnifying-glass.svg"
              alt=""
              role="presentation"
              className="w-64 lg:w-full max-w-md opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Right: Article Cards Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Recent insights">
              {articles.map((article, index) => (
                <article
                  key={article.slug}
                  role="listitem"
                  className="article-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <a
                    href={`/insights/${article.slug}`}
                    className="block focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] focus:ring-inset"
                    aria-label={`Read article: ${article.title}`}
                  >
                    {/* Article Image */}
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src={article.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block text-xs font-semibold text-[#9bd9e4] uppercase tracking-wide">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-[#003067] text-base font-bold leading-snug min-h-[4rem] group-hover:text-[#9bd9e4] transition-colors duration-300">
                        {article.title}
                      </h3>
                      <div className="mt-4 flex items-center text-[#003067] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true">
                        Read More <span className="ml-1">&rarr;</span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <a
            href="/insights"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#003067] text-white font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-[#9bd9e4] hover:text-[#003067] focus:outline-none focus:ring-2 focus:ring-[#9bd9e4] focus:ring-offset-2 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Insights
          </a>
        </div>
      </div>
    </section>
  );
}
