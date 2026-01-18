import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllSlugs, getAllArticles, markdownToHtml } from '@/lib/articles';

// YouTube Embed Component
function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="my-8 rounded-2xl overflow-hidden shadow-xl">
      <div className="relative pt-[56.25%]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

// Generate static params for all articles
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Kruse & Crawford CPAs',
    };
  }

  return {
    title: `${article.title} | Kruse & Crawford CPAs`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug, true);

  if (!article) {
    notFound();
  }

  // Convert markdown content to HTML
  const contentHtml = await markdownToHtml(article.content);

  // Get related articles (excluding current)
  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter(a => a.slug !== slug)
    .slice(0, 3);

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <main className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent`} />
        <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-40`} />

        <div className="relative z-10 max-w-4xl mx-auto px-8 py-16 w-full">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Insights
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
              {article.category}
            </span>
            <span className="text-white/80 text-sm">{formatDate(article.date)}</span>
            <span className="text-white/80 text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-8">
          {/* YouTube Video Embed (if present) */}
          {article.youtubeId && (
            <YouTubeEmbed videoId={article.youtubeId} />
          )}

          <article
            className="prose prose-lg max-w-none prose-headings:text-[#003067] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-[#003067] prose-a:text-[#003067] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative bg-gradient-to-br from-[#003067] to-[#002050] rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9bd9e4]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9bd9e4]/10 rounded-full blur-2xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Put This Into Action?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-lg mx-auto">
                Let's discuss how these strategies apply to your specific situation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-white transition-all duration-300 hover:shadow-xl"
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

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-[#003067] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.slug}
                href={`/insights/${relatedArticle.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${relatedArticle.color} opacity-30`} />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#9bd9e4] uppercase tracking-wide">
                    {relatedArticle.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#003067] mt-2 group-hover:text-[#9bd9e4] transition-colors line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
