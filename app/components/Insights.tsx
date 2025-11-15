export default function Insights() {
  const articles = [
    {
      title: 'A GUIDE TO CORPORATE ACRONYMS YOU NEED TO KNOW',
      image: '/images/blog-corporate-acronyms.jpg',
      link: '/insights/corporate-acronyms',
      category: 'Business',
    },
    {
      title: 'WHAT ARE BUSINESS OWNERS\' SALARIES AND DEBOUCHABLE?',
      image: '/images/blog-owners-salary.jpg',
      link: '/insights/owners-salary',
      category: 'Tax & Accounting',
    },
    {
      title: 'CONSIDER RENTING YOUR HOUSE TO YOUR CORPORATION',
      image: '/images/blog-renting-house.jpg',
      link: '/insights/rent-to-corporation',
      category: 'Tax Planning',
    },
  ];

  return (
    <section className="insights-section py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="super-text-left mb-4 text-center">
          <p className="text-[#003067] uppercase tracking-[4px] text-sm font-normal">
            What We Think
          </p>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#333] leading-tight uppercase max-w-2xl mx-auto">
            READ OUR EXPERT OPINIONS ON A WIDE VARIETY OF TOPICS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          {/* Left: Decorative Graphic */}
          <div className="lg:col-span-1 flex justify-center">
            <img
              src="/images/magnifying-glass.svg"
              alt="Insights"
              className="w-64 lg:w-full max-w-xs"
            />
          </div>

          {/* Right: Article Cards Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  className="article-card group bg-[#003067] overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Article Image */}
                  <div className="aspect-video bg-gray-300 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <h4 className="text-white text-base font-semibold uppercase leading-tight min-h-[4rem]">
                      {article.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            href="/insights"
            className="bracket-button inline-block px-8 py-3 text-[#003067] text-base font-normal uppercase border-2 border-[#003067] hover:bg-[#003067] hover:text-white transition-all duration-300"
          >
            OUR INSIGHTS
          </a>
        </div>
      </div>
    </section>
  );
}
